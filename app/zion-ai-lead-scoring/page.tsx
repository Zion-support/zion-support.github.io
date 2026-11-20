import Link from 'next/link';
import RelatedApps from '@/components/RelatedApps';

export default function ZionLeadScoringPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 text-white">
        <div className="container-page mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-400">
            Marketing and sales operations
          </p>
          <h1 className="mb-6 text-4xl font-bold">AI Lead Scoring</h1>
          <p className="mb-8 max-w-3xl text-lg text-slate-300">
            Explore how lead qualification, fit signals and routing workflows can help
            your team prioritize opportunities. Results depend on your data and processes.
          </p>
          <Link href="/discovery/#dq" className="inline-flex rounded-lg bg-orange-500 px-6 py-3 font-semibold text-slate-950 hover:bg-orange-400">
            Start free online Discovery
          </Link>
        </div>
      </section>
      <section className="px-6 py-16">
        <div className="container-page mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold">How lead scoring works</h2>
          <ol className="list-decimal space-y-4 pl-6">
            <li><strong>Collect:</strong> Review permissioned engagement signals and account context.</li>
            <li><strong>Qualify:</strong> Compare fit with documented criteria and customer intent.</li>
            <li><strong>Route:</strong> Assign opportunities to the appropriate sales owner.</li>
            <li><strong>Review:</strong> Track outcomes and update the criteria with human oversight.</li>
          </ol>
          <p className="mt-8 text-slate-600">
            This page describes a possible workflow; it does not imply automated outreach
            or guarantee conversion improvements.
          </p>
          <div className="mt-8">
            <Link href="/apps/" className="text-blue-600 underline">
              Explore the Apps Network
            </Link>
          </div>
        </div>
      </section>
      <RelatedApps />
    </main>
  );
}
