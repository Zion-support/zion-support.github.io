import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Zion Tech Group',
  description:
    'Insights on AI implementation, engineering best practices, security, and digital transformation from the Zion Tech Group team.',
  alternates: { canonical: '/blog' },
};

type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    title: 'How to Plan Your First AI Pilot in 4 Weeks',
    excerpt:
      'A practical framework for selecting the right use case, defining KPIs, and shipping a measurable AI pilot without derailing your existing roadmap.',
    category: 'AI Strategy',
    date: '2026-02-28',
    readTime: '8 min read',
    slug: 'plan-first-ai-pilot',
  },
  {
    title: 'The Real Cost of Ignoring AI Security',
    excerpt:
      'Why security-first AI implementation matters and how organizations can avoid common pitfalls when deploying machine learning in production.',
    category: 'Security',
    date: '2026-02-21',
    readTime: '6 min read',
    slug: 'ai-security-costs',
  },
  {
    title: 'DevOps Automation: Beyond CI/CD Pipelines',
    excerpt:
      'Modern DevOps extends far beyond deployment automation. Explore how AI-driven observability, incident response, and infrastructure management are reshaping operations.',
    category: 'Engineering',
    date: '2026-02-14',
    readTime: '10 min read',
    slug: 'devops-beyond-cicd',
  },
  {
    title: '5 Signs Your CRM Needs AI-Powered Optimization',
    excerpt:
      'Discover the telltale signs that your CRM is holding back revenue growth and how AI automation can unlock hidden pipeline value.',
    category: 'Growth',
    date: '2026-02-07',
    readTime: '5 min read',
    slug: 'crm-ai-optimization',
  },
  {
    title: 'Building Compliant AI Systems: SOC 2 and Beyond',
    excerpt:
      'A guide to implementing AI solutions that meet enterprise compliance requirements from day one, covering SOC 2, ISO 27001, and data privacy regulations.',
    category: 'Compliance',
    date: '2026-01-31',
    readTime: '12 min read',
    slug: 'compliant-ai-systems',
  },
  {
    title: 'From Monolith to Microservices: A Migration Playbook',
    excerpt:
      'Lessons learned from helping teams decompose legacy monoliths into scalable microservice architectures without disrupting production.',
    category: 'Engineering',
    date: '2026-01-24',
    readTime: '9 min read',
    slug: 'monolith-to-microservices',
  },
  {
    title: 'Measuring ROI on AI Investments: What Actually Works',
    excerpt:
      'Move beyond vanity metrics and learn how to track the real business impact of AI implementations using outcome-driven measurement frameworks.',
    category: 'AI Strategy',
    date: '2026-01-17',
    readTime: '7 min read',
    slug: 'measuring-ai-roi',
  },
  {
    title: 'The Future of Customer Support: AI + Human Hybrid',
    excerpt:
      'How leading companies are combining AI chatbots with human agents to deliver faster, more empathetic customer experiences at scale.',
    category: 'Customer Experience',
    date: '2026-01-10',
    readTime: '6 min read',
    slug: 'ai-human-support',
  },
  {
    title: 'Data Pipeline Architecture for AI-First Companies',
    excerpt:
      'Design patterns and best practices for building data pipelines that feed production AI systems reliably and at scale.',
    category: 'Engineering',
    date: '2026-01-03',
    readTime: '11 min read',
    slug: 'data-pipeline-architecture',
  },
];

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-100">
            📝 Blog
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Insights &{' '}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              Best Practices
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Practical guides, technical deep dives, and strategic insights on AI implementation,
            engineering, and digital transformation.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-slate-700 bg-slate-900/75 px-3 py-1.5 text-xs font-medium text-slate-200"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {blogPosts[0] && (
          <div className="mb-12 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-100">
                Latest
              </span>
              <span className="text-xs text-slate-400">{blogPosts[0].category}</span>
              <span className="text-xs text-slate-500">·</span>
              <span className="text-xs text-slate-400">{formatDate(blogPosts[0].date)}</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              {blogPosts[0].title}
            </h2>
            <p className="mt-3 max-w-3xl text-slate-300">{blogPosts[0].excerpt}</p>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="/blog"
                className="inline-flex text-sm font-semibold text-purple-300 transition hover:text-purple-200"
              >
                Read article →
              </Link>
              <span className="text-xs text-slate-400">{blogPosts[0].readTime}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/40"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-slate-600 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white transition group-hover:text-purple-300">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400">{formatDate(post.date)}</span>
                <Link
                  href="/blog"
                  className="text-sm font-semibold text-purple-300 transition hover:text-purple-200"
                >
                  Read →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Follow our blog for the latest insights on AI, engineering, and technology strategy.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
