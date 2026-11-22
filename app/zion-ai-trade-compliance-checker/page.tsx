import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Trade Compliance Checker | Zion Tech Group',
  description: 'Import/export classification (HS/ECCN), duties estimation.',
  alternates: { canonical: 'https://ziontechgroup.com/zion-ai-trade-compliance-checker/' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <a href="/apps-network/" className="text-sm font-medium text-purple-400 hover:text-pink-300 underline-offset-2">
            ← Back to Apps Network
          </a>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 ring-1 ring-slate-800/50">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase tracking-widest text-purple-300/80 font-semibold">Governance & bids</span>
            <span className="text-xs text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded-full">Zion Tech Group</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">AI Trade Compliance Checker</h1>
          <p className="text-slate-300 mb-6 leading-relaxed">Import/export classification (HS/ECCN), duties estimation.</p>
          <div className="mt-8 flex gap-3">
            <a href="/discovery/" className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-500 transition-colors">
              Start Discovery
            </a>
            <a href="/contact" className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-purple-500 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
