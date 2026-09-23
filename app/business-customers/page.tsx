import Link from 'next/link';

export const metadata = {
  title: 'Business Customers',
  description:
    'Modernize operations with Zion Tech Group AI, IT, and automation services built for measurable outcomes.',
  alternates: { canonical: 'https://ziontechgroup.com/business-customers' },
};

const outcomes = [
  { title: 'Faster operations', body: 'Automate tickets, documents, and back-office workflows with measurable cycle-time cuts.' },
  { title: 'Clear ROI', body: 'Discovery workshops and KPI dashboards so every pilot has a go/no-go decision.' },
  { title: 'Secure by default', body: 'Role-based access, audit logs, and compliance-aware delivery for regulated teams.' },
  { title: 'Managed delivery', body: 'Optional runbooks and SLAs so improvements stick after the first release.' },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-teal-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/40">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Business Customers</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Modernize operations with Zion Tech Group AI, IT, and automation services built for measurable outcomes—from
            pilot to production in weeks.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 hover:bg-teal-400">
              Book a Working Session
            </Link>
            <Link
              href="/tools/roi-calculator"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-teal-500/50"
            >
              Estimate ROI
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {outcomes.map((o) => (
            <div key={o.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h2 className="text-lg font-semibold text-teal-300">{o.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{o.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Popular starting points</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>
              <Link href="/services/ai-document-processing" className="text-teal-400 hover:underline">
                AI Document Processing
              </Link>
            </li>
            <li>
              <Link href="/services/ai-voice-agent-customer-service" className="text-teal-400 hover:underline">
                AI Voice Agent for Customer Service
              </Link>
            </li>
            <li>
              <Link href="/services/ai-meeting-summarizer" className="text-teal-400 hover:underline">
                AI Meeting Summarizer
              </Link>
            </li>
            <li>
              <Link href="/ai/ai-readiness-assessment" className="text-teal-400 hover:underline">
                AI Readiness Assessment
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
