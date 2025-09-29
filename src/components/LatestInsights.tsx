import React from 'react';
import Link from 'next/link';

export default function LatestInsights(): React.JSX.Element {

  return (
    <section aria-label="Latest Insights" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600">Stay ahead with our expert analysis and industry insights</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            id: 'ai-agent-observability-2026',
            title: 'AI Agent Observability 2026: End-to-End Monitoring & Reliability',
            slug: '/blog/ai-agent-observability-2026',
            category: 'Architecture',
            readTime: '18 min',
            date: 'Sep 29, 2026'
          }, {
            id: 'ai-autonomous-cloud-ops-2026',
            title: 'AI Autonomous Cloud Operations 2026',
            slug: '/blog/ai-autonomous-cloud-ops-2026',
            category: 'Operations',
            readTime: '18 min',
            date: 'Aug 12, 2026'
          }, {
            id: 'genai-guardrails-2025',
            title: 'GenAI Guardrails 2025: Practical Playbook',
            slug: '/blog/genai-guardrails-2025',
            category: 'Governance',
            readTime: '11 min',
            date: 'Jan 22, 2025'
          }].map((insight) => (
            <article key={insight.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-gray-500 text-sm">{insight.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={insight.slug}>{insight.title}</Link>
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{insight.date}</span>
                  <Link 
                    href={insight.slug}
                    className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  );
>>>>>>> cursor/create-and-deploy-new-content-d0aa
}