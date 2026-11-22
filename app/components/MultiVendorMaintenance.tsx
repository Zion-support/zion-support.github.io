import Link from 'next/link';

const POINTS: { emoji: string; title: string; desc: string }[] = [
  { emoji: '📄', title: 'One contract, one invoice', desc: 'Servers, storage and networking across vendors — including EOL/EOSL — under a single agreement.' },
  { emoji: '⏱️', title: 'Tiered SLAs by criticality', desc: 'Choose per system: 4-hour onsite, same-business-day or next-business-day response.' },
  { emoji: '🎓', title: 'Certified L1–L3 engineers', desc: 'Vendor credentials (Cisco, Microsoft, CompTIA, Dell, HP, Lenovo, IBM, NetApp) matched to each task.' },
  { emoji: '📦', title: 'Pre-positioned parts', desc: 'Critical spares aligned to your response targets and site locations.' },
];

export default function MultiVendorMaintenance() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 border-t border-slate-800/60">
      <div className="container-page">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 uppercase tracking-wider">
            Multi-Vendor Maintenance
          </span>
          <h2 className="text-3xl font-bold text-white mt-4">
            One contract. Every vendor. Real SLAs.
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            Consolidate support for your entire estate with one contact, one
            co-termination date and tiered SLAs — backed by certified engineers and
            pre-positioned parts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {POINTS.map((p) => (
            <div key={p.title} className="flex items-start gap-3 p-5 bg-slate-900/50 rounded-xl border border-slate-700/50">
              <span className="text-2xl shrink-0">{p.emoji}</span>
              <div>
                <h3 className="font-semibold text-white">{p.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary text-lg px-8">
            Request a site-specific quote →
          </Link>
          <p className="text-slate-500 text-xs mt-3">
            Market reference: third-party multi-vendor providers report 30–70% below OEM
            maintenance (TechCare). Final pricing depends on scope, sites and SLA.
          </p>
        </div>
      </div>
    </section>
  );
}
