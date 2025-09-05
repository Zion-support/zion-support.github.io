import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Card from '../../components/ui/Card';

const _posts = [
  {_slug: 'ai-automation-trends-2025', _title: 'AI Automation Trends 2025', _excerpt: 'What forward-leaning teams ship next with agents, _RAG, _and guardrails.'},
  {_slug: 'cloud-native-automation', _title: 'Cloud-Native Automation', _excerpt: 'GitOps, _SLOs, _and platform engineering patterns that scale.'},
  {_slug: 'future-of-work', _title: 'Future of Work', _excerpt: 'Autonomous agents, _copilots, _and the new operating model.'},
  {_slug: 'performance-optimization', _title: 'Performance Optimization', _excerpt: 'Web vitals, _RUM, _and release health for conversion lifts.'},
  {_slug: 'ai-ethics-automation', _title: 'AI Ethics & Automation', _excerpt: 'Responsible AI with evaluations, _safety baselines, _and governance.'},
  {_slug: 'autonomous-content-generation', _title: 'Autonomous Content Generation', _excerpt: 'Ship content faster with quality and factuality checks.'}];

export default function BlogIndexPage() {_return (_<UltraFuturisticBackground  intensity="medium">
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Insights on AI, _cloud, _automation, _and platform engineering." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Insights & Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Practical playbooks and deep dives on AI, _cloud, _and modern software delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.slug} className="p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
              <h2 className="text-white text-xl font-semibold mb-2">{_p.title}</h2>
              <p className="text-gray-400 mb-4">{_p.excerpt}</p>
              <Link href={_`/blog/${p.slug}`} className="text-cyan-400 hover:text-white font-medium">Read →</Link>
            </div>
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}

