import Link from 'next/link';

export default function NewAutonomousRevenueAgentsPromo() {
  return (
    <section className="py-10 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 mb-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-purple-600" />
              New on the blog
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              AI 2026: Autonomous Revenue Agents — From Lead to Closed Won
            </h3>
            <p className="text-gray-600 mt-2 max-w-2xl">
              See how enterprise‑grade agents prospect, qualify, run meetings, draft proposals,
              and update CRM automatically — with measurable impact.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/blog/ai-2026-autonomous-revenue-agents"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700"
            >
              Read Article
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

