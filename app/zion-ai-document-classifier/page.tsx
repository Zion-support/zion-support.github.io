import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion AI Document Classifier | Zion Tech Group',
  description: 'Classify, extract and route invoices, contracts, tickets and forms automatically — straight into your workflows.',
  alternates: { canonical: 'https://ziontechgroup.com/zion-ai-document-classifier/' },
};

export default function Page() {
  return (<>
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
        <div className="container-page relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/5 mb-6">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Productivity</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">Zion AI Document Classifier</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">Classify, extract and route invoices, contracts, tickets and forms automatically — straight into your workflows.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition">Get Started</a>
            <a href="/apps-network/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-purple-500/40 transition">Explore the Apps Network</a>
          </div>
        </div>
      </section>
      <section className="py-16 border-t border-slate-800/60">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-8">What it does</h2>
          <ul className="grid md:grid-cols-2 gap-4 max-w-4xl">
          <li className="flex gap-3"><span className="text-amber-400 mt-1">▸</span><span className="text-slate-300">Automatic classification of invoices, contracts, forms and correspondence</span></li>
          <li className="flex gap-3"><span className="text-amber-400 mt-1">▸</span><span className="text-slate-300">Field-level extraction (parties, amounts, dates, clauses) into structured data</span></li>
          <li className="flex gap-3"><span className="text-amber-400 mt-1">▸</span><span className="text-slate-300">Routing rules push each document to the right team or workflow</span></li>
          <li className="flex gap-3"><span className="text-amber-400 mt-1">▸</span><span className="text-slate-300">Human-in-the-loop review queue for low-confidence items</span></li>
          <li className="flex gap-3"><span className="text-amber-400 mt-1">▸</span><span className="text-slate-300">Audit trail for every classification decision — compliance-ready</span></li>
          </ul>
        </div>
      </section>
      <section className="py-16 border-t border-slate-800/60">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-8">Related apps in the Zion Apps Network</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <a href="/zion-ai-knowledge-base/" className="block p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-purple-500/40 transition">
              <h3 className="text-white font-semibold mb-1">AI Knowledge Base</h3>
              <p className="text-slate-400 text-sm">Semantic search and answers over your internal docs.</p>
            </a>
            <a href="/zion-invoice-genius/" className="block p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-purple-500/40 transition">
              <h3 className="text-white font-semibold mb-1">Invoice Genius</h3>
              <p className="text-slate-400 text-sm">AI invoice capture, matching and anomaly detection.</p>
            </a>
            <a href="/zion-ai-workflow-automator/" className="block p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-purple-500/40 transition">
              <h3 className="text-white font-semibold mb-1">AI Workflow Automator</h3>
              <p className="text-slate-400 text-sm">No-code AI workflows across your tools and teams.</p>
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">+1 302 464 0950 | kleber@ziontechgroup.com | 364 E Main St STE 1008, Middletown, DE 19709</p>
          <a href="/contact" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Free Consultation</a>
        </div>
      </section>
    </main>
  </>);
}
