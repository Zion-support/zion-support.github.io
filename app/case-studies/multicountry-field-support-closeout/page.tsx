import Link from 'next/link';

export const metadata = {
  title: 'Three-country field support closeout | Zion Tech Group',
  description:
    'An anonymized field support case showing how service evidence, exception handling, and written approvals supported a three-country monthly closeout.',
  alternates: { canonical: '/case-studies/multicountry-field-support-closeout/' },
};

const outcomes = [
  'Service activity was consolidated across three countries for a single monthly closeout.',
  'One disputed item was isolated for revalidation without blocking the other country approvals.',
  'Written client approval was obtained before invoices were issued against the applicable purchase order.',
];

const controls = [
  {
    title: 'Country-level evidence',
    body: 'Work records were organized by country so the client could review each service stream independently.',
  },
  {
    title: 'Exception isolation',
    body: 'The single item needing review was separated from the approved work instead of delaying the full closeout.',
  },
  {
    title: 'Written commercial approval',
    body: 'Invoice release followed the client’s written approval and the confirmed purchase-order reference.',
  },
];

export default function MulticountryFieldSupportCloseoutCase() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page max-w-5xl py-20">
        <Link
          href="/case-studies/"
          className="text-sm text-purple-300 hover:text-purple-200"
        >
          Back to case studies
        </Link>

        <div className="mt-8 flex flex-wrap gap-2">
          {['Field Services', 'Multi-country Operations', 'Commercial Controls'].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-emerald-300">
          Anonymized delivery case
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
          Three-country field support closeout with written approval
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          A multinational service program needed a defensible monthly closeout across
          three countries. Zion organized the service evidence, separated one item that
          required revalidation, and preserved a written approval trail before invoicing.
        </p>

        <section className="mt-12 grid gap-4 md:grid-cols-3" aria-labelledby="outcomes-heading">
          <h2 id="outcomes-heading" className="sr-only">Verified outcomes</h2>
          {outcomes.map((outcome) => (
            <article
              key={outcome}
              className="rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-6"
            >
              <p className="text-sm leading-relaxed text-slate-200">{outcome}</p>
            </article>
          ))}
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-white">How the closeout was controlled</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {controls.map((control) => (
              <article
                key={control.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              >
                <h3 className="font-semibold text-white">{control.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{control.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-bold text-white">Why this pattern matters</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
            Multi-country field services depend on more than technician availability. A
            reliable commercial handoff also needs traceable work evidence, explicit
            exception handling, and approval tied to the correct purchasing reference.
            Those controls reduce avoidable disputes while keeping approved work moving.
          </p>
          <p className="mt-5 text-xs leading-relaxed text-slate-500">
            Evidence basis: anonymized internal service-delivery records and written
            client approvals. Client, partner, personnel, pricing, ticket, purchase-order,
            and contract details have been withheld.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-purple-500/20 bg-purple-950/20 p-8">
          <h2 className="text-2xl font-bold text-white">Map your delivery controls for free</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Use Zion Discovery to outline your locations, service workflow, evidence
            requirements, and approval path. The online assessment is free and does not
            require a credit card.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/discovery/" className="btn-primary">
              Start free Discovery
            </Link>
            <Link href="/services/" className="btn-secondary">
              Explore services
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
