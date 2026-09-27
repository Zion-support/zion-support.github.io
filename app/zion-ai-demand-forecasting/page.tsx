import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion AI Demand Forecasting | Zion Tech Group',
  description: 'Inventory and demand forecasts with confidence bands — stock what you will actually sell, where you will sell it.',
  alternates: { canonical: 'https://ziontechgroup.com/zion-ai-demand-forecasting/' },
};

export default function Page() {
  return (<>
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />
        <div className="container-page relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/20 bg-green-400/5 mb-6">
            <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">Zion AI Demand Forecasting</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">Inventory and demand forecasts with confidence bands — stock what you will actually sell, where you will sell it.</p>
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
          <li className="flex gap-3"><span className="text-green-400 mt-1">▸</span><span className="text-slate-300">SKU-level demand forecasts with seasonality and promotion effects</span></li>
          <li className="flex gap-3"><span className="text-green-400 mt-1">▸</span><span className="text-slate-300">Multi-site inventory balancing recommendations across depots</span></li>
          <li className="flex gap-3"><span className="text-green-400 mt-1">▸</span><span className="text-slate-300">Confidence bands so planners know when to trust the model</span></li>
          <li className="flex gap-3"><span className="text-green-400 mt-1">▸</span><span className="text-slate-300">Integrates with ERPs and spreadsheets — no rip-and-replace</span></li>
          <li className="flex gap-3"><span className="text-green-400 mt-1">▸</span><span className="text-slate-300">Spare-parts and field-service demand patterns supported natively</span></li>
          </ul>
        </div>
      </section>
      <section className="py-16 border-t border-slate-800/60">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-8">Related apps in the Zion Apps Network</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <a href="/zion-ai-predictive-analytics/" className="block p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-purple-500/40 transition">
              <h3 className="text-white font-semibold mb-1">AI Predictive Analytics</h3>
              <p className="text-slate-400 text-sm">Forecast demand, churn and incidents before they happen.</p>
            </a>
            <a href="/depot-stock-balancer/" className="block p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-purple-500/40 transition">
              <h3 className="text-white font-semibold mb-1">Depot Stock Balancer</h3>
              <p className="text-slate-400 text-sm">Balance inventory across depots with recommendations.</p>
            </a>
            <a href="/zion-ai-spare-parts-matcher/" className="block p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-purple-500/40 transition">
              <h3 className="text-white font-semibold mb-1">AI Spare Parts Matcher</h3>
              <p className="text-slate-400 text-sm">Match spare parts by part number, photo, and equivalence.</p>
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
