// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import Revolutionary2027ContentMegaBanner from '../components/Revolutionary2027ContentMegaBanner';
import Ultimate2027BreakthroughBanner from '../components/Ultimate2027BreakthroughBanner';
import UnifiedContentPromotion from '../components/UnifiedContentPromotion';
import January2026NeuralArchitectureSearchBanner from '../components/January2026NeuralArchitectureSearchBanner';
import January2026FederatedLearningBanner from '../components/January2026FederatedLearningBanner';
import January2026RevolutionaryBreakthroughBanner from '../components/January2026RevolutionaryBreakthroughBanner';
import January2026NewServicesBanner from '../components/January2026NewServicesBanner';
import Revolutionary2026ContentAdvertisingBanner from '../components/Revolutionary2026ContentAdvertisingBanner';
import January2026BreakthroughShowcaseBanner from '../components/January2026BreakthroughShowcaseBanner';
import Ultimate2026ContentPromotionalBanner from '../components/Ultimate2026ContentPromotionalBanner';
import NeuralOptimizationRevolutionBanner from '../components/NeuralOptimizationRevolutionBanner';
import AutonomousBusinessProcessBanner from '../components/AutonomousBusinessProcessBanner';
import NewContentShowcaseBanner from '../components/NewContentShowcaseBanner';
import ContentShowcase from '../components/ContentShowcase';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="py-16 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Zion Tech Group</h1>
          <p className="text-lg md:text-xl text-gray-300">Leading AI insights, case studies, and implementation guides.</p>
        </div>
      </section>

      {/* Revolutionary 2027 Content Mega Banner - Featured prominently */}
      <Revolutionary2027ContentMegaBanner />
      
      {/* Ultimate 2027 Breakthrough Banner */}
      <Ultimate2027BreakthroughBanner />

      {/* New this week — promote fresh content */}
      <section className="py-6 border-t border-b border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-white font-semibold">Latest Revolutionary Breakthroughs</div>
            <div className="flex flex-wrap gap-2">
              <Link href="/blog/ai-2027-quantum-consciousness-fusion-breakthrough" className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-200 border border-purple-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-purple-500/30 transition-colors">Quantum Consciousness 100,000x<span>→</span></Link>
              <Link href="/blog/ai-2028-autonomous-enterprise-revolution" className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-blue-500/30 transition-colors">99.9% Autonomous Enterprise<span>→</span></Link>
              <Link href="/case-studies/ai-2027-consciousness-fusion-mega-success" className="inline-flex items-center gap-2 bg-green-500/20 text-green-200 border border-green-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-green-500/30 transition-colors">$2.5B ROI Success<span>→</span></Link>
              <Link href="/case-studies/ai-2028-autonomous-enterprise-mega-success" className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-200 border border-orange-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-orange-500/30 transition-colors">$5B ROI Success<span>→</span></Link>
              <Link href="/blog/ai-2026-neural-optimization-revolution" className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-indigo-500/30 transition-colors">Neural Optimization 1000x<span>→</span></Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Content Showcase Banner - Featured prominently */}
      <NewContentShowcaseBanner />
      
      {/* Neural Optimization Revolution Banner */}
      <NeuralOptimizationRevolutionBanner />
      
      {/* Autonomous Business Process Banner */}
      <AutonomousBusinessProcessBanner />
      
      {/* Revolutionary 2026 Content Advertising Banner */}
      <Revolutionary2026ContentAdvertisingBanner />
      
      {/* January 2026 Breakthrough Showcase Banner */}
      <January2026BreakthroughShowcaseBanner />
      
      {/* Revolutionary Breakthroughs Banner */}
      <January2026RevolutionaryBreakthroughBanner />
      
      {/* New Services Banner */}
      <January2026NewServicesBanner />

      
      {/* Legacy Content Banners */}
      <January2026NeuralArchitectureSearchBanner />
      <January2026FederatedLearningBanner />
      
      <UnifiedContentPromotion />

      {/* Ultimate 2026 Content Promotional Banner */}
      <Ultimate2026ContentPromotionalBanner />

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
            <Link href="/blog/ai-2027-quantum-consciousness-fusion-breakthrough" className="group block rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">2027 BREAKTHROUGH</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">100,000x</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">AI 2027: Consciousness Fusion</div>
              <div className="text-gray-400 text-sm mb-3">Revolutionary quantum-enhanced neural architectures achieving consciousness-level reasoning with unprecedented performance improvements.</div>
              <div className="text-purple-300 text-sm font-semibold group-hover:text-purple-200">Discover the Technology →</div>
            </Link>
            
            <Link href="/case-studies/ai-2027-consciousness-fusion-mega-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$2.5B ROI</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">MEGA SUCCESS</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">Consciousness Fusion Success</div>
              <div className="text-gray-400 text-sm mb-3">How a Fortune 500 company achieved $2.5B ROI through revolutionary AI consciousness fusion breakthrough.</div>
              <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read Success Story →</div>
            </Link>
            
            <Link href="/blog/ai-2028-autonomous-enterprise-revolution" className="group block rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-6 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
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

      {/* October 2025 highlights — newly added */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-xl border border-indigo-400/30 bg-indigo-500/10 p-6">
            <div className="text-white text-sm mb-3">New this month</div>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/blog/ai-2025-oct-01-privacy-first-observability-v2" className="block rounded-lg border border-white/10 p-4 hover:border-indigo-400/40 transition-colors">
                <div className="text-indigo-300 text-xs mb-2">Observability</div>
                <div className="text-white font-semibold">Privacy‑First Observability v2</div>
                <div className="text-gray-400 text-sm mt-1">User‑centric traces without PII leaks.</div>
              </Link>
              <Link to="/blog/genai-2025-oct-01-quality-tiers-v3" className="block rounded-lg border border-white/10 p-4 hover:border-purple-400/40 transition-colors">
                <div className="text-purple-300 text-xs mb-2">GenAI</div>
                <div className="text-white font-semibold">GenAI Quality Tiers v3</div>
                <div className="text-gray-400 text-sm mt-1">50% savings with stable UX.</div>
              </Link>
              <Link to="/blog/edge-2025-oct-01-consentless-journeys-blueprint" className="block rounded-lg border border-white/10 p-4 hover:border-cyan-400/40 transition-colors">
                <div className="text-cyan-300 text-xs mb-2">Edge Computing</div>
                <div className="text-white font-semibold">Consentless Journeys Blueprint</div>
                <div className="text-gray-400 text-sm mt-1">Personalization &lt;100ms, zero‑PII.</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContentShowcase />
    </main>
  );
}