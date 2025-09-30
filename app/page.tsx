import React from 'react';
import UnifiedContentPromotion from '../components/UnifiedContentPromotion';
import ContentShowcase from '../components/ContentShowcase';
import AI2026RevolutionaryAutonomousEnterpriseBanner from '../components/AI2026RevolutionaryAutonomousEnterpriseBanner';
import October2025NewContentBanner from '../components/October2025NewContentBanner';
import NewContentAdvertisingBanner from '../components/NewContentAdvertisingBanner';
import AI2027ConsciousnessFusionRevolutionaryBanner from '../components/AI2027ConsciousnessFusionRevolutionaryBanner';
import AI2028AutonomousEnterpriseRevolutionaryBanner from '../components/AI2028AutonomousEnterpriseRevolutionaryBanner';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="py-16 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Zion Tech Group</h1>
          <p className="text-lg md:text-xl text-gray-300">Leading AI insights, case studies, and implementation guides.</p>
        </div>
      </section>
      
      {/* Revolutionary New Content - Featured First */}
      <AI2026RevolutionaryAutonomousEnterpriseBanner />
      <October2025NewContentBanner />
      <NewContentAdvertisingBanner />
      
      {/* Revolutionary 2027 Consciousness Fusion Content */}
      <AI2027ConsciousnessFusionRevolutionaryBanner />
      
      {/* Revolutionary 2028 Autonomous Enterprise Content */}
      <AI2028AutonomousEnterpriseRevolutionaryBanner />
      
      {/* Additional Content Banners (temporarily disabled if not present) */}
      
      <UnifiedContentPromotion />

      {/* Latest Revolutionary Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Revolutionary AI Breakthroughs
            </h2>
            <p className="text-gray-300 text-lg">
              Discover the most advanced AI technologies transforming business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/blog/ai-2027-consciousness-fusion-breakthrough" className="group block rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">2027 BREAKTHROUGH</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">100,000x</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">AI 2027: Consciousness Fusion</div>
              <div className="text-gray-400 text-sm mb-3">Revolutionary quantum-enhanced neural architectures achieving consciousness-level reasoning with unprecedented performance improvements.</div>
              <div className="text-purple-300 text-sm font-semibold group-hover:text-purple-200">Discover the Technology →</div>
            </Link>
            
            <Link to="/case-studies/ai-2027-consciousness-fusion-mega-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$2.5B ROI</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">MEGA SUCCESS</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">Consciousness Fusion Success</div>
              <div className="text-gray-400 text-sm mb-3">How a Fortune 500 company achieved $2.5B ROI through revolutionary AI consciousness fusion breakthrough.</div>
              <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read Success Story →</div>
            </Link>
            
            <Link to="/blog/ai-2028-autonomous-enterprise-revolution" className="group block rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-6 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">2028 REVOLUTION</span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">99.9% AUTONOMOUS</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">AI 2028: Autonomous Enterprise</div>
              <div className="text-gray-400 text-sm mb-3">The future of business: complete enterprise autonomy through revolutionary AI systems achieving unprecedented operational excellence.</div>
              <div className="text-blue-300 text-sm font-semibold group-hover:text-blue-200">Explore the Future →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Legacy content promo - Sept 30/Oct 1 additions */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-white text-sm mb-3">Previous breakthroughs</div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/ai-2025-sept-30-real-time-decision-engines-v3" className="block rounded-lg border border-white/10 p-4 hover:border-cyan-400/40 transition-colors">
                <div className="text-cyan-300 text-xs mb-2">Platform Engineering</div>
                <div className="text-white font-semibold">Real-Time Decision Engines v3</div>
                <div className="text-gray-400 text-sm mt-1">10M/sec under 1ms using warm pools and intent prefetching.</div>
              </Link>
              <Link href="/blog/ai-2025-oct-01-secure-ml-supply-chain" className="block rounded-lg border border-white/10 p-4 hover:border-indigo-400/40 transition-colors">
                <div className="text-indigo-300 text-xs mb-2">AI Security</div>
                <div className="text-white font-semibold">Secure ML Supply Chain</div>
                <div className="text-gray-400 text-sm mt-1">SBOMs, attestations, and runtime verifiers for end‑to‑end integrity.</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContentShowcase />
    </main>
  );
}