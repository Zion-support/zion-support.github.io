import Link from 'next/link';

export const metadata = {
  title: 'Platform Engineering Scorecards 2026: Measure What Matters',
  description: 'A practical, executive-ready scorecard framework for Platform Engineering in 2026: reliability, velocity, cost, and developer experience.',
  keywords: 'platform engineering, scorecards 2026, DORA, reliability, developer experience, platform KPIs',
};

export default function PlatformEngineeringScorecards2026Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">New Article</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Platform Engineering Scorecards 2026: Measure What Matters
          </h1>
          <p className="text-xl mb-8 opacity-90">
            A pragmatic, executive-friendly framework to track platform outcomes across reliability, velocity,
            cost efficiency, and developer experience. Drive the right conversations and investments.
          </p>
          <div className="flex items-center gap-6 text-sm opacity-80">
            <span>📅 September 29, 2025</span>
            <span>⏱️ 10 min read</span>
            <span>👤 Zion Tech Group Team</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
            <p className="text-lg font-semibold text-indigo-900 mb-2">Executive Summary</p>
            <p className="text-indigo-800">
              Platform scorecards translate engineering work into business outcomes. This guide provides a
              compact, measurable set of indicators that leaders can review weekly to align platform work with
              product velocity, cost, and reliability goals.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Four Pillars</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• SLO attainment (% by service tier)</li>
                <li>• Incident MTTR (p50/p90)</li>
                <li>• Change failure rate</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Velocity</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Lead time for changes (p50/p90)</li>
                <li>• Deployment frequency</li>
                <li>• Time to first byte for new services</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Cost Efficiency</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Unit economics (cost per request/job)</li>
                <li>• Idle-to-peak ratio by workload</li>
                <li>• Reserved vs on-demand coverage</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Developer Experience</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Golden path adoption (%)</li>
                <li>• CI success rate and duration</li>
                <li>• Time-to-onboard (first merged PR)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Scorecard Template</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 border">Pillar</th>
                  <th className="p-3 border">Metric</th>
                  <th className="p-3 border">Target</th>
                  <th className="p-3 border">Current</th>
                  <th className="p-3 border">Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Reliability</td>
                  <td className="p-3 border">SLO attainment (Tier 1)</td>
                  <td className="p-3 border">≥ 99.9%</td>
                  <td className="p-3 border">99.92%</td>
                  <td className="p-3 border">↗ steady</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border">Velocity</td>
                  <td className="p-3 border">Lead time for changes (p50)</td>
                  <td className="p-3 border">≤ 24h</td>
                  <td className="p-3 border">22h</td>
                  <td className="p-3 border">↗ improving</td>
                </tr>
                <tr>
                  <td className="p-3 border">Cost</td>
                  <td className="p-3 border">Cost per 1K requests</td>
                  <td className="p-3 border">≤ $0.45</td>
                  <td className="p-3 border">$0.41</td>
                  <td className="p-3 border">↘ decreasing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border">DevEx</td>
                  <td className="p-3 border">Time-to-onboard</td>
                  <td className="p-3 border">≤ 2 days</td>
                  <td className="p-3 border">1.6 days</td>
                  <td className="p-3 border">↗ improving</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Operating Rhythm</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-8 space-y-2">
            <li>Weekly: scorecard review with platform + product leads</li>
            <li>Monthly: deep-dive on worst metric; commit improvement plan</li>
            <li>Quarterly: refresh targets; align to business goals</li>
          </ul>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Need a scorecard you can ship in 2 weeks?</h3>
            <p className="text-lg mb-6 opacity-90">
              We help enterprises stand up measurable platform scorecards with automated collection and C-suite
              dashboards. Get a pilot in under 14 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+13024640950" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Call +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700">Get Consultation</a>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <RelatedArticleCard title="AI Value Stream Analytics 2026" description="Trace ROI from token to revenue." href="/blog/ai-value-stream-analytics-2026" />
            <RelatedArticleCard title="LLM Cost Optimization 2025" description="Cut LLM spend 30–70% with routing and caching." href="/blog/llm-cost-optimization-2025" />
            <RelatedArticleCard title="GenAI Guardrails 2025" description="Ship reliable and auditable GenAI systems." href="/blog/genai-guardrails-2025" />
          </div>
        </div>
      </section>
    </div>
  );
}

function RelatedArticleCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="block bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-indigo-700 font-semibold">Read More →</span>
    </Link>
  );
}

