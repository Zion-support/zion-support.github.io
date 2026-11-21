import Link from 'next/link';

// Independent industry benchmarks — NOT Zion results. Sources are linked.
const BENCHMARKS: { metric: string; source: string; url: string; note: string }[] = [
  { metric: '15%+', source: 'BCG', url: 'https://www.bcg.com/publications/2026/ai-fuels-field-service-transformation', note: 'revenue impact from applied AI in field service' },
  { metric: '5pp+', source: 'BCG', url: 'https://www.bcg.com/publications/2026/ai-fuels-field-service-transformation', note: 'gross margin improvement' },
  { metric: '20–30%', source: 'BCG', url: 'https://www.bcg.com/publications/2026/ai-fuels-field-service-transformation', note: 'productivity lift via smart dispatch and in-field support' },
  { metric: '30–40%', source: 'BCG', url: 'https://www.bcg.com/publications/2026/ai-fuels-field-service-transformation', note: 'more service leads from connected assets and proactive targeting' },
  { metric: '153%', source: 'Deloitte', url: 'https://www.deloittedigital.com/content/dam/digital/global/documents/insights-20260112-future-of-field-service.pdf', note: 'average ROI reported for field service management' },
  { metric: '47% / 19x', source: 'FieldProxy', url: 'https://www.fieldproxy.ai/resources/blog/field-service-ai-success-stories-2026', note: 'median revenue growth and ROI across AI field service adopters' },
];

export default function ResultsRoiSection() {
  return (
    <section className="py-20 bg-slate-900/20 border-t border-slate-800/60">
      <div className="container-page">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-300 uppercase tracking-wider">
            Industry Benchmarks
          </span>
          <h2 className="text-3xl font-bold text-white mt-4">
            Proven impact of AI in field service
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            Independent market references (sources linked). These are third-party
            benchmarks, not Zion results.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {BENCHMARKS.map((b) => (
            <div
              key={b.metric + b.source}
              className="p-5 bg-slate-900/50 rounded-xl border border-slate-700/50"
            >
              <div className="text-3xl font-bold text-emerald-400">{b.metric}</div>
              <p className="text-slate-300 text-sm mt-2">{b.note}</p>
              <Link
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 mt-3 inline-block hover:text-emerald-300"
              >
                Source: {b.source} ↗
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
