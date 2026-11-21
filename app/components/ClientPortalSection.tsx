import Link from 'next/link';

const FEATURES: { emoji: string; title: string; desc: string }[] = [
  { emoji: '📋', title: 'Work orders & visits', desc: 'Track current and completed work, upcoming visits and statuses in one place.' },
  { emoji: '✅', title: 'Estimates approved online', desc: 'Review and approve estimates in one click, flowing straight into a work order.' },
  { emoji: '🧾', title: 'Invoices on demand', desc: 'Download invoices, line items and statements without e-mailing accounts.' },
  { emoji: '🏢', title: 'Sites, assets & history', desc: 'Multi-site visibility of assets, service history and preventive maintenance.' },
  { emoji: '🎫', title: 'Self-service requests', desc: 'Submit requests linked to the right site — no lost e-mails.' },
];

// Third-party benchmarks — NOT Zion results.
const STATS: { metric: string; note: string; source: string; url: string }[] = [
  { metric: '67%', note: 'of customers prefer self-service over speaking to a representative', source: 'FSM-News via Fieldcode', url: 'https://fieldcode.com/en/resources/blog/customer-portal-field-service' },
  { metric: 'Up to 70%', note: 'support-cost reduction from self-service portals (Gartner)', source: 'Gartner via Fieldcode', url: 'https://fieldcode.com/en/resources/blog/customer-portal-field-service' },
  { metric: '80%', note: 'reduction in support calls after introducing a portal (Dell)', source: 'Fieldcode', url: 'https://fieldcode.com/en/resources/blog/how-to-maximize-self-service-and-remote-solutions-with-fsm-customer-portals' },
];

export default function ClientPortalSection() {
  return (
    <section className="py-20 bg-slate-900/20 border-t border-slate-800/60">
      <div className="container-page">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-300 uppercase tracking-wider">
            Client Portal
          </span>
          <h2 className="text-3xl font-bold text-white mt-4">
            A client portal that works 24/7
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            Give customers self-service visibility of work orders, estimates, invoices and
            assets — branded as yours, not a third-party tool.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-3 p-5 bg-slate-900/50 rounded-xl border border-slate-700/50">
              <span className="text-2xl shrink-0">{f.emoji}</span>
              <div>
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {STATS.map((s) => (
            <div key={s.metric} className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 text-center">
              <div className="text-2xl font-bold text-indigo-400">{s.metric}</div>
              <p className="text-slate-400 text-xs mt-1">{s.note}</p>
              <Link href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 mt-2 inline-block hover:text-indigo-300">
                Source: {s.source} ↗
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portal" className="btn-primary text-lg px-8">
            Open the client portal →
          </Link>
          <p className="text-slate-500 text-xs mt-3">
            Benchmarks above are third-party market references, not Zion results.
          </p>
        </div>
      </div>
    </section>
  );
}
