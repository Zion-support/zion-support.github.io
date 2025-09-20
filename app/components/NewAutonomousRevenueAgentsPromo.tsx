import Link from 'next/link'
export default function NewAutonomousRevenueAgentsPromo() {
  return (
    <section className="py-10 bg-gradient-to-r from-purple-50 to-blue-50">
      <div>
        <div>
          <div>
            <div>
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-purple-600" />
              New on the blog,
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              AI 2026: Autonomous Revenue Agents — From Lead to Closed Won,
            </h3>
            <p>
              See how enterprise‑grade agents prospect, qualify, run meetings, draft proposals,
              and update CRM automatically — with measurable impact.,
            </p>
          </div>
          <div>
            <Link,
              href="/blog/ai-2026-autonomous-revenue-agents",
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: bg-purple-700"
            >
              Read Article,
            </Link>
          </div>
        </div>
      </div>
    </section>)}
