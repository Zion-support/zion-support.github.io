import Link from 'next/link';
import type { Metadata } from 'next';
import RelatedApps from '@/components/RelatedApps';

export const metadata: Metadata = {
  title: 'AI Lead Scoring — Zion',
  description: 'AI lead scoring, routing and qualification: MQL-to-SQL conversion and SDR throughput.',
  alternates: { canonical: 'https://ziontechgroup.com/zion-ai-lead-scoring/' },
};

export default function ZionLeadScoringPage() {
  return (
    <main className="min-h-screen">
      <section className="container py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/20 bg-orange-400/5 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Marketing</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">AI Lead Scoring</h1>
          <p className="text-lg text-gray-600 mb-8">
            AI-powered lead scoring and routing that turns marketing-qualified leads into sales opportunities
            faster — with 2x MQL-to-SQL conversion rates.
          </p>
          <div className="bg-white rounded-xl border p-6 mb-6">
            <h2 className="text-xl font-semibold mb-2">What AI scoring delivers</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-1">MQL-to-SQL conversion</h3>
                <p className="text-gray-600 text-sm">2.1x higher than rule-based scoring (Marketo)</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-1">SDR throughput</h3>
                <p className="text-gray-600 text-sm">20-40% faster (less time on low-fit leads)</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-1">Forecast accuracy</h3>
                <p className="text-gray-600 text-sm">10-20% improvement in conversion predictability</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-1">Win rate on flagged deals</h3>
                <p className="text-gray-600 text-sm">+15 percentage points vs rep self-selection</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border p-6 mb-6">
            <h2 className="text-xl font-semibold mb-2">How it works</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Ingest</strong>: Marketing-qualified leads, engagement data, intent signals, firmographics</li>
              <li><strong>Score</strong>: Predictive model ranks every lead by fit and buying intent</li>
              <li><strong>Route</strong>: Smart routing sends high-confidence leads to the right SDR/sales rep</li>
              <li><strong>Act</strong>: Automated follow-up sequences and next-best-action recommendations</li>
              <li><strong>Measure</strong>: MQL-to-SQL conversion, SDR throughput, forecast accuracy</li>
            </ol>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-xl font-semibold mb-2">Inputs</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Firmographics and ICP fit</li>
              <li>Engagement data (website, email, content)</li>
              <li>Intent signals and buying stage</li>
              <li>Historical conversion patterns</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">+1 302 464 0950 | kleber@ziontechgroup.com | 364 E Main St STE 1008, Middletown, DE 19709</p>
          <a href="/contact" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Free Consultation</a>
        </div>
      </section>
      <RelatedApps />
      <div className="container py-8">
        <Link href="/apps/" className="text-blue-600 underline">Back to Apps Network →</Link>
      </div>
    </main>
  );
}
