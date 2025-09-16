import Link from 'next/link';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';

import StructuredData from './components/StructuredData';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: ['AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 'enterprise solutions', 'digital transformation'],
};

export default function HomePage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/"
      />

      {/* New Promo: Agent Posture Scorecards (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-emerald-100">
            <div>
              <p className="text-sm font-semibold text-emerald-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Agent Posture Scorecards</h2>
              <p className="text-gray-600 mt-2">Evidence-led posture across safety, quality, reliability, and cost.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/ai-2026-agent-posture-scorecards" className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700">Read Article</Link>
            </div>
          </div>
        </div>
      </section>

      <StructuredData 
        type="WebSite" 
        data={{
          name: 'Zion Tech Group',
          url: 'https://zion.app',
          potentialAction: {
            '@type': 'SearchAction',
            'target': 'https://zion.app/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }}
      />
    </ErrorBoundary>
  );
}

