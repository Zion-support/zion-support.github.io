#!/usr/bin/env node

/**
 * Weekly SEO Blog & Social Content Generator
 * Fetches AI/IT news trends, generates a blog post via LLM,
 * creates a Next.js route, and promotes to social channels.
 *
 * Usage: npm run weekly-blog
 * Schedule (cron): 0 9 * * 1 (Mondays 9 AM)
 */

const { writeFile, mkdirSync, existsSync } = require('fs');
const { execSync } = require('child_process');
const path = require('path');
const process = require('process');

// ── Config ───────────────────────────────────────────────────────────────────
const CONFIG = {
  rssFeeds: [
    'https://news.ycombinator.com/rss',
    'https://opensource.com/feed',
    'https://www.artificialintelligence-news.com/feed/',
  ],
  llmProvider: 'stepfun',
  llmModel: 'stepfun/step-3.5-flash',
  blogDir: path.join(process.cwd(), 'app', 'blog'),
  twitter: {
    enabled: true,
    consumerKey: process.env.TWITTER_CONSUMER_KEY || '',
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET || '',
    accessToken: process.env.TWITTER_ACCESS_TOKEN || '',
    accessSecret: process.env.TWITTER_ACCESS_SECRET || '',
  },
  linkedin: {
    enabled: true,
    clientId: process.env.LINKEDIN_CLIENT_ID || '',
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET || '',
    accessToken: process.env.LINKEDIN_ACCESS_TOKEN || '',
  },
};

// ── Helpers ──────────────────────────────────────────────────────────────────
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function blogSlug(title) {
  const base = slugify(title);
  const timestamp = new Date().toISOString().slice(0, 10);
  return `${timestamp}-${base}`;
}

// ── Step 1: Fetch trending AI/IT topics from RSS ────────────────────────────
function fetchTrendingTopics() {
  const topics = [];
  console.log('📡 Fetching trending topics from RSS feeds...');

  for (const feedUrl of CONFIG.rssFeeds) {
    try {
      const cmd = `curl -s "${feedUrl}" | grep -oP '(?<=<title>).*?(?=</title>)' | head -5`;
      const out = execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] });
      const titles = out.split('\n').filter(Boolean);
      topics.push(...titles.slice(0, 3));
      console.log(`  ✓ ${feedUrl} → ${titles.length} titles`);
    } catch (err) {
      console.warn(`  ⚠️  Failed to fetch ${feedUrl}:`, err.message);
    }
  }

  if (topics.length === 0) {
    const fallback = [
      'AI-Powered Cybersecurity Trends in 2026',
      'How Machine Learning is Transforming Enterprise Workflows',
      'The Future of Generative AI in Business Automation',
      'Predictive Analytics: Turning Data into Decisions',
      'Natural Language Processing for Customer Service',
    ];
    console.log('  ⚠️  Using fallback topic list');
    return fallback;
  }

  const unique = [...new Set(topics)];
  return unique.slice(0, 5);
}

// ── Step 2: Generate blog content via LLM ───────────────────────────────────
async function generateBlogPost(topic) {
  console.log(`\n✍️  Generating blog post via LLM: "${topic}"`);

  const apiKey = process.env.STEPFUN_API_KEY || process.env.OPENAI_API_KEY || process.env.LLM_API_KEY;

  if (!apiKey) {
    console.log('  ⚠️  No LLM API key found in env — using template-based generation');
    return generateTemplatePost(topic);
  }

  try {
    const prompt = `Write a comprehensive, SEO-optimized blog post (~1500 words) about: "${topic}"

The post should:
1. Have an engaging headline
2. Start with a compelling introduction explaining why this matters to businesses
3. Include 5-7 well-structured sections with H2/H3 headings
4. Mention specific AI/IT services from ZionTechGroup naturally within the content:
   - AI Services: AI Analytics & Business Intelligence, AI Predictive Maintenance, AI Customer Support Chatbot, AI Document Analyzer, AI Content Generator, AI Anomaly Detection, AI Recommendation Engine, AI Process Automation
   - IT Services: Cloud Infrastructure Management, Cybersecurity Monitoring, DevOps Automation, Data Engineering, API Development, IT Consulting, Managed IT Support
5. Include a "Why Choose ZionTechGroup" section highlighting our expertise
6. End with a strong CTA to contact us or browse services
7. Write in a professional, authoritative tone suitable for enterprise decision-makers

Format as:
- Title: [SEO-friendly title, includes primary keyword]
- Meta Description: [160 chars max]
- Content: [Markdown body]`;

    const payload = JSON.stringify({
      model: 'stepfun/step-3.5-flush',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 2000,
    });

    // Escape single quotes in payload for shell
    const escapedPayload = payload.replace(/'/g, `'"'"'`);
    const curlCmd = `curl -s -X POST https://api.stepfun.com/v1/chat/completions \\
      -H "Authorization: Bearer ${apiKey}" \\
      -H "Content-Type: application/json" \\
      -d '${escapedPayload}'`;

    try {
      const result = execSync(curlCmd, { encoding: 'utf-8' });
      const parsed = JSON.parse(result);
      const text = parsed.choices?.[0]?.message?.content || '';

      const titleMatch = text.match(/^Title:\s*(.+)$/m);
      const metaMatch = text.match(/^Meta Description:\s*(.+)$/m);
      const contentStart = text.indexOf('\n\n', text.indexOf('Content:'));
      const content = contentStart > 0 ? text.slice(contentStart + 2).trim() : text;

      return {
        title: titleMatch ? titleMatch[1].trim() : topic,
        metaDescription: metaMatch ? metaMatch[1].trim() : `Discover how ${topic} can transform your business with ZionTechGroup's expert AI & IT solutions.`,
        content,
      };
    } catch (parseErr) {
      console.warn('  ⚠️  LLM response parse failed, using template');
      return generateTemplatePost(topic);
    }
  } catch (err) {
    console.warn('  ⚠️  LLM API error:', err.message);
    return generateTemplatePost(topic);
  }
}

function generateTemplatePost(topic) {
  const title = `${topic} | ZionTechGroup Insights`;
  const metaDescription = `Explore ${topic.toLowerCase()} with ZionTechGroup. Learn how our AI & IT services can help your business thrive.`;
  const content = `# ${topic}

*Published: ${new Date().toISOString().slice(0, 10)}*

## Introduction

${topic} is transforming the way businesses operate. At ZionTechGroup, we help organizations leverage cutting-edge AI and IT solutions to stay ahead of the competition.

## Why This Matters

In today's fast-paced digital landscape, staying informed about ${topic.toLowerCase()} is crucial for:

- **Operational Efficiency**: Streamline workflows with intelligent automation
- **Cost Reduction**: Optimize resources and reduce overhead
- **Competitive Advantage**: Early adopters gain market leadership

## Our Expert Services

We offer comprehensive solutions tailored to your needs:

### AI-Powered Services

- **AI Analytics & Business Intelligence** — Transform raw data into actionable insights
- **Predictive Maintenance AI** — Anticipate equipment failures before they happen
- **Customer Support Chatbot** — 24/7 intelligent assistance
- **Document Intelligence** — Automate document processing and extraction

### IT Infrastructure & Support

- **Cloud Infrastructure Management** — Scalable, secure, and reliable
- **Cybersecurity Monitoring** — Protect your digital assets 24/7
- **DevOps Automation** — Accelerate delivery with CI/CD pipelines
- **Managed IT Support** — Focus on your business, we handle the tech

## Why Choose ZionTechGroup?

- **170+ Services** across AI and IT domains
- **Enterprise-Grade Security** — SOC 2, ISO 27001, GDPR, HIPAA compliant
- **Flexible Pricing** — From $299/month to custom enterprise plans
- **24/7 Support** — Our team is always here when you need us
- **Proven Results** — Clients see 40% average efficiency improvement

## Getting Started

Ready to explore ${topic.toLowerCase()} for your organization? Contact us today for a free consultation:

📞 **+1 302 464 0950**  
✉️ **kleber@ziontechgroup.com**  
📍 364 E Main St STE 1008, Middletown, DE 19709

[Browse all 170+ services →](/search) | [Get a custom proposal →](/proposal-generator)

---

*Want more insights? Subscribe to our newsletter for weekly AI & IT updates.*`;
  return { title, metaDescription, content };
}

// ── Step 3: Create Next.js route ────────────────────────────────────────────
function createBlogRoute(slug, post) {
  console.log(`\n📁 Creating blog route: /blog/${slug}`);

  const dir = path.join(CONFIG.blogDir, slug);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  const pageContent = `import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: '${post.title.replace(/'/g, "\\'")}',
  description: '${post.metaDescription.replace(/'/g, "\\'")}',
  alternates: { canonical: \`https://ziontechgroup.com/blog/${slug}\` },
  openGraph: {
    title: '${post.title.replace(/'/g, "\\'")}',
    description: '${post.metaDescription.replace(/'/g, "\\'")}',
    url: \`https://ziontechgroup.com/blog/${slug}\`,
    type: 'article',
    publishedTime: '${new Date().toISOString()}',
    authors: ['ZionTechGroup'],
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/blog" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-sm font-medium mb-6">
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">${post.title}</h1>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>
          </header>

          <div className="prose prose-lg prose-indigo max-w-none">
            ${post.content
              .split('\n')
              .map(
                (paragraph) => {
                  if (paragraph.startsWith('# '))
                    return `<h1 class="text-3xl font-bold mt-8 mb-4">${paragraph.slice(2)}</h1>`;
                  if (paragraph.startsWith('## '))
                    return `<h2 class="text-2xl font-semibold mt-6 mb-3">${paragraph.slice(3)}</h2>`;
                  if (paragraph.startsWith('### '))
                    return `<h3 class="text-xl font-medium mt-4 mb-2">${paragraph.slice(4)}</h3>`;
                  if (paragraph.startsWith('- **')) {
                    const m = paragraph.match(/- \*\*(.+?)\*\*:\s*(.+)/);
                    if (m)
                      return `<li class="ml-4"><strong>${m[1]}</strong>: ${m[2]}</li>`;
                  }
                  if (paragraph.startsWith('- ')) return `<li class="ml-4">${paragraph.slice(2)}</li>`;
                  if (paragraph.match(/^\\d+\\./))
                    return `<ol class="ml-4"><li>${paragraph.replace(/^\\d+\\.\\s*/, '')}</li></ol>`;
                  return paragraph ? `<p class="mb-4">${paragraph}</p>` : '';
                }
              )
              .join('\n            ')}
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-indigo-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Expert Help?</h3>
              <p className="text-gray-700 mb-4">
                Our team at ZionTechGroup can implement these solutions for your business.
                Contact us for a free consultation and custom proposal.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+13024640950" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  📞 +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
                  ✉️ Email Us
                </a>
                <Link href="/search" className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Browse Services
                </Link>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm">
              Published by ZionTechGroup · 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}`;

  writeFile(path.join(dir, 'page.tsx'), pageContent, 'utf-8');
  console.log('  ✓ page.tsx created');
  return `https://ziontechgroup.com/blog/${slug}`;
}

// ── Step 4: Social media promotion ─────────────────────────────────────────
function postToSocial(url, title) {
  console.log('\n📢 Promoting to social channels...');

  const tweet = `${title}\n\nRead more: ${url}\n\n#AI #IT #TechNews #ZionTechGroup`;

  if (CONFIG.twitter.enabled && CONFIG.twitter.consumerKey && CONFIG.twitter.accessToken) {
    try {
      const encoded = encodeURIComponent(tweet.slice(0, 280));
      const twCmd = `curl -X POST "https://api.twitter.com/2/tweets" \\
        -H "Authorization: Bearer ${process.env.TWITTER_BEARER_TOKEN || ''}" \\
        -H "Content-Type: application/json" \\
        -d '{"text":"${encoded}"}'`;

      execSync(twCmd, { stdio: 'pipe' });
      console.log('  ✓ Posted to Twitter/X');
    } catch (err) {
      console.warn('  ⚠️  Twitter post failed — check credentials');
    }
  } else {
    console.log('  ℹ️  Twitter credentials not configured — skipping');
  }

  if (CONFIG.linkedin.enabled && CONFIG.linkedin.accessToken) {
    try {
      const liPayload = JSON.stringify({
        author: 'urn:li:person:YOUR_LINKEDIN_ID',
        lifecycleState: 'PUBLISHED',
        specificContent: {
          'com.linkedin.ugc.ShareContent': {
            shareCommentary: { text: `${title}\n\n${url}` },
            shareMediaCategory: 'NONE',
          },
        },
        visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
      });

      execSync(`curl -X POST "https://api.linkedin.com/v2/ugcPosts" \\
        -H "Authorization: Bearer ${CONFIG.linkedin.accessToken}" \\
        -H "Content-Type: application/json" \\
        -d '${liPayload.replace(/'/g, `'"'"'`)}'`, { stdio: 'pipe' });
      console.log('  ✓ Posted to LinkedIn');
    } catch (err) {
      console.warn('  ⚠️  LinkedIn post failed — check credentials');
    }
  } else {
    console.log('  ℹ️  LinkedIn credentials not configured — skipping');
  }
}

// ── Step 5: Update sitemap reminder ─────────────────────────────────────────
function updateSitemap(newUrl) {
  console.log('\n🗺️  Updating sitemap manifest...');
  console.log(`  ℹ️  Manual step: add ${newUrl} to app/sitemap.ts routes array`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🤖 Weekly SEO Blog & Social Content Generator\n');
  console.log('═'.repeat(60));

  const topics = fetchTrendingTopics();
  console.log(`\n📌 Trending topics found: ${topics.length}`);
  topics.forEach((t, i) => console.log(`   ${i + 1}. ${t}`));

  const selectedTopic = topics[0];
  const post = await generateBlogPost(selectedTopic);
  console.log(`\n✅ Generated: "${post.title}"`);

  const slug = blogSlug(post.title);
  const url = createBlogRoute(slug, {
    title: post.title,
    description: post.metaDescription,
    content: post.content,
  });

  postToSocial(url, post.title);
  updateSitemap(url);

  console.log('\n📦 Committing changes...');
  try {
    execSync('git add -A app/blog/', { stdio: 'inherit', cwd: process.cwd() });
    execSync('git add -A automation/', { stdio: 'inherit', cwd: process.cwd() });
    execSync(`git commit -m "blog(w): ${post.title.slice(0, 50)} — weekly auto-generated content"`, {
      stdio: 'inherit',
      cwd: process.cwd(),
    });
    console.log('  ✓ Committed');
  } catch (err) {
    console.warn('  ⚠️  Git commit failed:', err.message);
  }

  console.log('\n✨ Blog post ready!');
  console.log(`   URL: ${url}`);
  console.log('\nNext steps:');
  console.log('  1. Review the generated post at /blog/' + slug);
  console.log('  2. Run npm run build to include in static export');
  console.log('  3. Push to GitHub to publish');
}

main().catch((err) => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});
