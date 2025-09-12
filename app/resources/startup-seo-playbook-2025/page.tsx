import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Startup SEO Playbook 2025: Ship Weekly, Compound Traffic',
  description:
    'A practical SEO playbook for startups in 2025. Learn a lean system to ideate, draft, and publish content that compounds traffic and pipeline.',
  keywords:
    'startup seo, 2025 seo, content engine, growth, demand gen, b2b saas, content playbook',
  openGraph: {
    title: 'Startup SEO Playbook 2025: Ship Weekly, Compound Traffic',
    description:
      'A lean system to ideate, draft, and publish content that compounds traffic and pipeline.',
    type: 'article',
    publishedTime: '2025-09-11T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function StartupSEOPlaybook2025() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Resources
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Growth & SEO</span>
          </div>

          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📈 PLAYBOOK</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Startup SEO Playbook 2025: Ship Weekly, Compound Traffic
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">ZT</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Zion Tech Group</div>
                <div className="text-sm">Growth Team</div>
              </div>
            </div>
            <div className="text-sm">
              <div>September 11, 2025</div>
              <div>Downloadable Playbook</div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl mb-12 flex items-center justify-center">
          <div className="text-8xl">📈</div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            This playbook gives startups a simple, repeatable system to publish one
            high-quality article every week, build topical authority, and turn traffic
            into pipeline. No content farm. No fluff. Just a focused operating cadence
            that compounds.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-green-900 mb-2">What You Get</h3>
            <ul className="text-green-800 space-y-2">
              <li>• 12-week publishing calendar with prompts</li>
              <li>• Keyword research mini-guide (with free tools)</li>
              <li>• Article outline templates that rank and convert</li>
              <li>• Distribution checklist for every post</li>
              <li>• Simple analytics dashboard template</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Weekly Cadence</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-3">
            <li><strong>Research (90 min):</strong> review Search Console, competitor gaps, talk to sales.</li>
            <li><strong>Outline (60 min):</strong> write an intent-matched outline with H2s/H3s.</li>
            <li><strong>Draft (3 hrs):</strong> write with SME input; add diagrams/screens.</li>
            <li><strong>Optimize (45 min):</strong> titles, meta, internal links, schema.</li>
            <li><strong>Ship (15 min):</strong> publish, submit to index, share to 3 channels.</li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Templates</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">🧭 Keyword Research Lite</h4>
              <p className="text-gray-700 text-sm mb-4">A simple worksheet to find low-competition, high-intent topics.</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">Download Sheet</button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">🧱 Outline Template</h4>
              <p className="text-gray-700 text-sm mb-4">Reusable article outline optimized for ranking and conversion.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Download Template</button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Want the 12-Week Calendar?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Get our pre-filled 12-week SEO publishing calendar with brief prompts,
              outlines, and distribution steps for each post.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Download Calendar</button>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">Get Help Executing</Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/startup-seo-content-engine-2025" className="group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">Startup SEO Content Engine 2025</h4>
                <p className="text-gray-600 text-sm">A lean system to ideate, draft, and publish content weekly.</p>
              </div>
            </Link>
            <Link href="/blog/llm-evals-in-production-2025" className="group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">LLM Evals in Production 2025</h4>
                <p className="text-gray-600 text-sm">CI evals, judge models, and budgets tied to outcomes.</p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

