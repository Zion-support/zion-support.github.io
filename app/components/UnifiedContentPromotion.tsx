// Using React 17+ automatic runtime; no import needed

const promoted = [
  {
    href: '/blog/ai-2026-hyperintelligence-breakthrough',
    title= 'AI 2026: Hyperintelligence Breakthrough',
    desc: 'Revolutionary cognitive enhancement achieving 10,000x performance with sub-millisecond decision-making.',
    emoji: '🧠',
    pill: 'BREAKTHROUGH • Jan 25, 2026',
    theme: 'from-purple-600 to-pink-600',
  },
  {
    href: '/blog/ai-2025-edge-intelligence-revolution',
    title= 'AI 2025: The Edge Intelligence Revolution',
    desc: 'Real-time AI at planet scale: <10ms latency, 65% bandwidth savings, 45% SLA gains.',
    emoji: '🌐',
    pill: 'NEW • Oct 1, 2025',
    theme: 'from-indigo-600 to-sky-600',
  },
  {
    href: '/case-studies/hyperintelligence-mega-success-2026',
    title= 'Hyperintelligence Mega Success 2026',
    desc: 'How a Fortune 500 company achieved $3.2B ROI through revolutionary AI hyperintelligence transformation.',
    emoji: '🏆',
    pill: 'MEGA SUCCESS • Jan 26, 2026',
    theme: 'from-green-600 to-emerald-600',
  },
  {
    href: '/blog/ai-2026-neural-architecture-search-breakthrough',
    title= 'Neural Architecture Search 2026',
    desc: 'Revolutionary NAS algorithms that design optimal neural architectures 1000x faster than humans.',
    emoji: '🔬',
    pill: 'New • Jan 15, 2026',
    theme: 'from-cyan-600 to-blue-600',
  },
  {
    href: '/guides/ai-2025-executive-edge-ai-deployment-guide',
    title= 'Executive Guide: Deploying Edge AI (90-Day Blueprint)',
    desc: 'Phased plan for secure, low-latency edge AI with OTA, MLOps, and ROI tracking.',
    emoji: '📘',
    pill: 'GUIDE • Oct 1, 2025',
    theme: 'from-amber-600 to-orange-600',
  },
  {
    href: '/services/ai-2026-hyperintelligence-breakthrough',
    title= 'AI Hyperintelligence Services',
    desc: 'Transform your enterprise with revolutionary AI achieving consciousness-level reasoning and autonomous operations.',
    emoji: '🚀',
    pill: 'NEW SERVICE • Jan 25, 2026',
    theme: 'from-orange-600 to-red-600',
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

