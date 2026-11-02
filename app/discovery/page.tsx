'use client';

const METADATA = {
  title: 'Free AI Discovery | Zion Tech Group',
  description: 'Free online AI discovery to map your opportunity. No commitment, fast results, and tailored recommendations from Zion Tech Group.',
};

export default function DiscoveryPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-slate-950 to-teal-900/10" />
        <div className="relative container-page py-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-4">
              🎯 Free online discovery — no commitment
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Free <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">AI discovery</span> for your business
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Map your AI opportunity online in minutes. We review your use case, risks, and quick wins — then share a clear, business-ready recommendation.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-all shadow-lg shadow-emerald-500/20">
                Start discovery now →
              </a>
              <a href="/ai-apps-directory" className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-white text-sm transition-all">
                Browse AI tools
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <h2 className="text-2xl font-bold text-white mb-6">What you get</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Use-case mapping', desc: 'Clear view of where AI can help first.' },
            { title: 'Risk scan', desc: 'Security, compliance, and data governance checks.' },
            { title: 'Quick-win roadmap', desc: 'Pilot-ready actions with estimated impact.' },
            { title: 'Tool matching', desc: 'Recommended apps from our 100+ AI portfolio.' },
            { title: 'Business case', desc: 'ROI and effort estimate for prioritization.' },
            { title: 'Fast follow-up', desc: 'Results delivered to you and commercial@ziontechgroup.com.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 text-slate-300">
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-10">
        <h2 className="text-2xl font-bold text-white mb-4">Discovery workflow</h2>
        <ol className="list-decimal pl-6 text-slate-300 space-y-2">
          <li>Fill the online questionnaire.</li>
          <li>We analyze your process, data, and goals.</li>
          <li>You receive a tailored recommendation.</li>
          <li>commercial@ziontechgroup.com receives a copy automatically.</li>
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact" className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-all shadow-lg shadow-emerald-500/20">
            Start discovery now →
          </a>
          <a href="/ai-apps-directory" className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-white text-sm transition-all">
            Explore AI apps
          </a>
        </div>
      </section>
    </div>
  );
}
