import Link from 'next/link';

export const metadata = {
  title: 'System Integrators',
  description:
    'Accelerate delivery with Zion Tech Group accelerators for AI, automation, and cloud modernization.',
  alternates: { canonical: 'https://ziontechgroup.com/integrators' },
};

const kits = [
  'CRM + ITSM AI copilots with guardrails and audit trails',
  'Document intelligence pipelines (ingest → extract → route)',
  'Cloud FinOps and migration factory playbooks',
  'Observability + incident automation starter packs',
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-teal-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/40">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">System Integrators</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Accelerate delivery with Zion Tech Group accelerators for AI, automation, and cloud modernization—white-label
            friendly and built for multi-workstream programs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 hover:bg-teal-400">
              Partner With Us
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-teal-500/50"
            >
              Browse Accelerators
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why integrators work with Zion</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Reusable integration kits for CRM, ITSM, and data platforms</li>
            <li>White-label delivery pods for large programs</li>
            <li>Architecture reviews and solution blueprints</li>
            <li>Training for your delivery teams and subcontractors</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Starter kits</h2>
          <ul className="space-y-3">
            {kits.map((k) => (
              <li key={k} className="rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-slate-200">
                {k}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-slate-400">
          Ask about SI margins and delivery certification:{' '}
          <a href="mailto:kleber@ziontechgroup.com" className="text-teal-400 hover:underline">
            kleber@ziontechgroup.com
          </a>
        </p>
      </section>
    </main>
  );
}
