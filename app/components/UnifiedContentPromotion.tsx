// Using React 17+ automatic runtime; no import needed

const promoted = [
  {
    href: '/blog/ai-2026-mega-breakthrough-revolutionary-autonomous-systems',
    title: 'AI 2026: The Mega Breakthrough Revolution',
    desc: 'Discover the most advanced autonomous AI systems delivering 1000x performance and 98% automation.',
    emoji: '🚀',
    pill: 'New • Jan 2026',
    theme: 'from-purple-600 to-blue-600',
  },
  {
    href: '/case-studies/fortune-500-ai-2026-mega-transformation-success',
    title: 'Fortune 500: $2.3B Savings in 12 Months',
    desc: 'How a Fortune 500 manufacturing giant achieved 450% ROI and 98% automation.',
    emoji: '🏆',
    pill: 'Success Story',
    theme: 'from-green-600 to-emerald-600',
  },
  {
    href: '/blog/ai-2026-implementation-playbook-complete-guide',
    title: 'AI 2026 Implementation Playbook',
    desc: 'Complete step-by-step guide to implementing revolutionary AI systems for enterprise transformation.',
    emoji: '📋',
    pill: 'Complete Guide',
    theme: 'from-indigo-600 to-purple-600',
  },
  {
    href: '/blog/ai-2025-sept-30-autonomous-risk-budgets-v2',
    title: 'Autonomous Risk Budgets V2',
    desc: 'Dynamic guardrails and live scorecards that cut incidents by 80%.',
    emoji: '🛡️',
    pill: 'Sep 30, 2025',
    theme: 'from-rose-600 to-amber-600',
  },
];

export default function UnifiedContentPromotion() {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm">
            <span>Latest from the Blog</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Fresh Content</h2>
          <p className="text-gray-300 mt-2">Actionable playbooks and executive guides</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {promoted.map((c) => (
            <a key={c.href} href={c.href} className="group">
              <div className={`rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r ${c.theme} p-[1px]`}> 
                <div className="bg-slate-900 rounded-2xl p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{c.emoji}</div>
                    <div className="text-xs text-white/70 border border-white/20 px-3 py-1 rounded-full">{c.pill}</div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white/90">{c.title}</h3>
                  <p className="text-white/70 mt-2">{c.desc}</p>
                  <div className="mt-5 inline-flex items-center text-white font-semibold">
                    <span>Read article</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

