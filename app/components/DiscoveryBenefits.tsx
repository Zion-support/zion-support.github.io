import Link from 'next/link';

// Third-party benchmarks about interactive discovery/assessment funnels — NOT Zion results.
const STATS: { metric: string; note: string; source: string; url: string }[] = [
  { metric: '85–95%', note: 'quiz completion vs 15–20% for traditional forms', source: 'Outgrow', url: 'https://outgrow.co/blog/ai-interactive-content-for-saas-funnel-2026' },
  { metric: '40–60%', note: 'typical assessment-quiz conversion range', source: 'Ainformat', url: 'https://www.ainformat.com/detail/2780' },
  { metric: '>15%', note: 'lead-to-opportunity conversion for quiz funnels', source: 'Ainformat', url: 'https://www.ainformat.com/detail/2780' },
  { metric: '40%', note: 'higher qualification score for interactive leads', source: 'Outgrow', url: 'https://outgrow.co/blog/ai-interactive-content-for-saas-funnel-2026' },
];

const BENEFITS: { emoji: string; title: string; desc: string }[] = [
  { emoji: '🎯', title: 'Structured self-assessment', desc: 'Answer a few guided questions and narrow down the right service — no long forms.' },
  { emoji: '⚡', title: 'Instant, personalized result', desc: 'Get a recommendation mapped to your industry, challenge and scope.' },
  { emoji: '🤝', title: 'Pre-qualified scope', desc: 'Sales skips generic discovery and starts from your actual context.' },
  { emoji: '🆓', title: 'Free and no commitment', desc: 'The discovery is online and free; use it before any decision.' },
];

export default function DiscoveryBenefits() {
  return (
    <section className="py-20 bg-slate-900/20 border-t border-slate-800/60">
      <div className="container-page">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-900/30 text-sky-300 uppercase tracking-wider">
            Free Discovery
          </span>
          <h2 className="text-3xl font-bold text-white mt-4">
            Start with a free discovery &amp; assessment
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            A guided, interactive discovery that qualifies your needs before you talk to
            anyone — free, online, and no commitment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {BENEFITS.map((b) => (
            <div key={b.title} className="flex items-start gap-3 p-5 bg-slate-900/50 rounded-xl border border-slate-700/50">
              <span className="text-2xl shrink-0">{b.emoji}</span>
              <div>
                <h3 className="font-semibold text-white">{b.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <Link href="/dashboard" className="btn-primary text-lg px-8">
            Start the free discovery →
          </Link>
          <p className="text-slate-500 text-xs mt-3">
            Third-party benchmarks below are market references, not Zion results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.metric + s.source} className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 text-center">
              <div className="text-2xl font-bold text-sky-400">{s.metric}</div>
              <p className="text-slate-400 text-xs mt-1">{s.note}</p>
              <Link href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 mt-2 inline-block hover:text-sky-300">
                Source: {s.source} ↗
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
