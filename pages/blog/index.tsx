<<<<<<< HEAD
{ slug: 'ai-automation-trends-2025', title: 'AI Automation Trends 2025', excerpt: 'What forward-leaning teams ship next with agents, RAG, and guardrails.' };
  { slug: 'cloud-native-automation', title: 'Cloud-Native Automation', excerpt: 'GitOps, SLOs, and platform engineering patterns that scale.' };
  { slug: 'future-of-work', title: 'Future of Work', excerpt: 'Autonomous agents, copilots, and the new operating model.' };
  { slug: 'performance-optimization', title: 'Performance Optimization', excerpt: 'Web vitals, RUM, and release health for conversion lifts.' };
  { slug: 'ai-ethics-automation', title: 'AI Ethics & Automation', excerpt: 'Responsible AI with evaluations, safety baselines, and governance.' };
  { slug: 'autonomous-content-generation', title: 'Autonomous Content Generation', excerpt: 'Ship content faster with quality and factuality checks.' }],
=======

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Card from '../../components/ui/Card';
const posts = [
<<<<<<< HEAD
  { slug: 'ai-automation-trends-2025', title: 'AI Automation Trends 2025', excerpt: 'What forward-leaning teams ship next with agents, RAG, and guardrails.' }
  { slug: 'cloud-native-automation', title: 'Cloud-Native Automation', excerpt: 'GitOps, SLOs, and platform engineering patterns that scale.' }
  { slug: 'future-of-work', title: 'Future of Work', excerpt: 'Autonomous agents, copilots, and the new operating model.' }
  { slug: 'performance-optimization', title: 'Performance Optimization', excerpt: 'Web vitals, RUM, and release health for conversion lifts.' }
  { slug: 'ai-ethics-automation', title: 'AI Ethics & Automation', excerpt: 'Responsible AI with evaluations, safety baselines, and governance.' }
  { slug: 'autonomous-content-generation', title: 'Autonomous Content Generation', excerpt: 'Ship content faster with quality and factuality checks.' }]

=======
  { slug: 'ai-automation-trends-2025', title: 'AI Automation Trends 2025', excerpt: 'What forward-leaning teams ship next with agents, RAG, and guardrails.' },
  { slug: 'cloud-native-automation', title: 'Cloud-Native Automation', excerpt: 'GitOps, SLOs, and platform engineering patterns that scale.' },
  { slug: 'future-of-work', title: 'Future of Work', excerpt: 'Autonomous agents, copilots, and the new operating model.' },
  { slug: 'performance-optimization', title: 'Performance Optimization', excerpt: 'Web vitals, RUM, and release health for conversion lifts.' },
  { slug: 'ai-ethics-automation', title: 'AI Ethics & Automation', excerpt: 'Responsible AI with evaluations, safety baselines, and governance.' },
  { slug: 'autonomous-content-generation', title: 'Autonomous Content Generation', excerpt: 'Ship content faster with quality and factuality checks.' }],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export default function BlogIndexPage() {
  return (
    <UltraFuturisticBackground  intensity="medium">
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Insights on AI, cloud, automation, and platform engineering." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Insights & Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Practical playbooks and deep dives on AI, cloud, and modern software delivery.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.slug} className="p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
              <h2 className="text-white text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-400 mb-4">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="text-cyan-400 hover:text-white font-medium">Read →</Link>
<<<<<<< HEAD
      </Head>

      <div className=&quot;container mx-auto px-4 py-16&quot;>
        <div className=&quot;text-center mb-10&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4&quot;>
            Insights & Guides
          </h1>
          <p className=&quot;text-gray-300 text-lg max-w-2xl mx-auto&quot;>Practical playbooks and deep dives on AI, cloud, and modern software delivery.</p>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {posts.map((p) => (
            <div key={p.slug} className=&quot;p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm&quot;>
              <h2 className=&quot;text-white text-xl font-semibold mb-2&quot;>{p.title}</h2>
              <p className=&quot;text-gray-400 mb-4&quot;>{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className=&quot;text-cyan-400 hover:text-white font-medium&quot;>Read →</Link>

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>
<<<<<<< HEAD
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
  )
}
<<<<<<< HEAD
import React from 'react',
import Head from 'next / head',
import Link from 'next / link',
import UltraFuturisticBackground from '../../components / ui / UltraFuturisticBackground',
import Card from '../../components / ui / Card',
const posts = [;
  { slug: 'ai - automation - trends - 2025', title: 'AI Automation Trends 2025', excerpt: 'What forward - leaning teams ship next with agents, RAG, and guardrails.' },
  { slug: 'cloud - native - automation', title: 'Cloud - Native Automation', excerpt: 'GitOps, SLOs, and platform engineering patterns that scale.' },
  { slug: 'future - of - work', title: 'Future of Work', excerpt: 'Autonomous agents, copilots, and the new operating model.' },
  { slug: 'performance - optimization', title: 'Performance Optimization', excerpt: 'Web vitals, RUM, and release health for conversion lifts.' },
  { slug: 'ai - ethics - automation', title: 'AI Ethics & Automation', excerpt: 'Responsible AI with evaluations, safety baselines, and governance.' },
  { slug: 'autonomous - content - generation', title: 'Autonomous Content Generation', excerpt: 'Ship content faster with quality and factuality checks.' }],
export default /**
 * BlogIndexPage - Function description
 */
function BlogIndexPage() {
  return (
    <UltraFuturisticBackground  intensity="medium">;
      <Head>;
        <title > Blog | Zion Tech Group</title>;
        <meta name="description" content="Insights on AI, cloud, automation, and platform engineering." />;
        <link rel="canonical" href="https://ziontechgroup.com / blog" />;
      </Head>;
      <div className="container mx - auto px - 4 py - 16">;
        <div className="text - center mb - 10">;
          <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 4">;
            Insights & Guides;
          </h1>;
          <p className="text - gray - 300 text - lg max - w-2xl mx - auto">Practical playbooks and deep dives on AI, cloud, and modern software delivery.</p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {posts.map ((p) => (
            <div key={p.slug} className="p - 6 bg - black / 40 border border - gray - 700 / 50 hover:border - cyan - 500 / 40 transition - colors p - 6 bg - black / 40 border border - gray - 700 / 50 rounded - lg backdrop - blur - sm">;
              <h2 className="text - white text - xl font - semibold mb - 2">{p.title}</h2>;
              <p className="text - gray - 400 mb - 4">{p.excerpt}</p>;
              <Link href={`/blog/${p.slug}`} className="text - cyan - 400 hover:text - white font - medium">Read →</Link>;
            </div>))}
        </div>;
      </div>;
    </UltraFuturisticBackground>);
}
;
=======
=======
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        </div>;
      </div>;
    </UltraFuturisticBackground>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
