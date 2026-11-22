// app/ai-marketplace/page.tsx — AI Agent Marketplace
import Link from 'next/link';

export const metadata = {
  title: 'AI Agent Marketplace — Zion Tech Group',
  description: 'White-label AI agents for Brazilian enterprises. Flat-fee pricing, full infrastructure included, brand whitelist available.',
  alternates: {
    canonical: 'https://ziontechgroup.com/ai-marketplace/',
    languages: {
      'en': 'https://ziontechgroup.com/ai-marketplace/',
      'pt-BR': 'https://ziontechgroup.com/pt/ai-marketplace/',
      'es': 'https://ziontechgroup.com/es/ai-marketplace/',
      'fr': 'https://ziontechgroup.com/fr/ai-marketplace/',
      'de': 'https://ziontechgroup.com/de/ai-marketplace/',
    },
  },
};

export default function AIMarketplacePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">Zion Apps Network</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">AI Agent Marketplace</h1>
          <p className="mt-3 text-slate-400 max-w-3xl text-sm leading-relaxed">
            White-label AI agents for Brazilian enterprises. Flat-fee pricing, full infrastructure included,
            brand whitelist available. No revenue share, no per-minute usage fees.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'AI Lead Qualifier', emoji: '🎯', desc: 'Qualify leads automatically with scorecards, routing rules, and CRM sync.' },
              { name: 'AI Customer Support Pro', emoji: '💬', desc: 'Multilingual support agent with knowledge base integration and ticket routing.' },
              { name: 'AI Invoice Generator', emoji: '🧾', desc: 'Generate invoices from email threads, contracts, and ERP data.' },
              { name: 'AI Bidding & Compliance', emoji: '📋', desc: 'AI tender scout and RFP readiness for Brazilian public sector.' },
              { name: 'AI Warranty Lifecycle', emoji: '🛡️', desc: 'Track warranty claims, identify failure patterns, and automate recalls.' },
              { name: 'AI Site Survey Brief', emoji: '📍', desc: 'Generate site survey briefs from photos, notes, and requirements.' },
            ].map(app => (
              <div key={app.name} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <div className="text-2xl mb-2">{app.emoji}</div>
                <h3 className="text-sm font-semibold text-white mb-1">{app.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{app.desc}</p>
                <Link href="/services-hub/" className="text-xs text-purple-300 hover:text-pink-300 mt-2 inline-block">
                  See all agents → <span className="underline text-slate-400">services-hub</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 to-slate-900 p-6">
            <h2 className="text-xl font-bold text-white mb-4">Flat-Fee Structure (2026 Market Standard)</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div><span className="text-slate-400">Marketplace (per agent):</span><br /><span className="text-white font-semibold">$20 - $200</span><span className="text-slate-400"> one-time</span></div>
              <div><span className="text-slate-400">Subscription (per agent/month):</span><br /><span className="text-white font-semibold">$10 - $50</span><span className="text-slate-400"> recurring</span></div>
              <div><span className="text-slate-400">White-label platform:</span><br /><span className="text-white font-semibold">$99 - $2,500</span><span className="text-slate-400"> flat monthly</span></div>
              <div><span className="text-slate-400">Revenue share:</span><br /><span className="text-white font-semibold">10% - 30%</span><span className="text-slate-400"> of client billing</span></div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/discovery/" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white hover:from-purple-500 hover:to-pink-400 transition">
              Start Free Discovery
            </Link>
            <Link href="/apps-network/" className="rounded-full border border-purple-500/40 px-5 py-2.5 text-sm font-medium text-purple-200 hover:bg-purple-500/10 transition">
              Back to Apps Network
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
