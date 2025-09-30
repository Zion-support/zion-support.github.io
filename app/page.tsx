// @ts-nocheck
import React from 'react';
import NewContentAdvertisingBanner from '../components/NewContentAdvertisingBanner';
import UnifiedContentPromotion from '../components/UnifiedContentPromotion';
import January2026NeuralArchitectureSearchBanner from '../components/January2026NeuralArchitectureSearchBanner';
import January2026FederatedLearningBanner from '../components/January2026FederatedLearningBanner';
import January2026RevolutionaryBreakthroughBanner from '../components/January2026RevolutionaryBreakthroughBanner';
import January2026NewServicesBanner from '../components/January2026NewServicesBanner';
import Revolutionary2026ContentAdvertisingBanner from '../components/Revolutionary2026ContentAdvertisingBanner';
import January2026BreakthroughShowcaseBanner from '../components/January2026BreakthroughShowcaseBanner';
import Ultimate2026ContentPromotionalBanner from '../components/Ultimate2026ContentPromotionalBanner';
import January2026QuantumNeuralSuperintelligenceBanner from '../components/January2026QuantumNeuralSuperintelligenceBanner';
import January2026HyperAutomationRevolutionBanner from '../components/January2026HyperAutomationRevolutionBanner';
import January2027MetaCognitiveSuperintelligenceBanner from '../components/January2027MetaCognitiveSuperintelligenceBanner';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="py-16 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Zion Tech Group</h1>
          <p className="text-lg md:text-xl text-gray-300">Leading AI insights, case studies, and implementation guides.</p>
        </div>
      </section>
      
      {/* January 2027 Meta-Cognitive Superintelligence Banner */}
      <January2027MetaCognitiveSuperintelligenceBanner />
      
      {/* January 2026 Quantum Neural Superintelligence Banner */}
      <January2026QuantumNeuralSuperintelligenceBanner />
      
      {/* January 2026 Hyper-Automation Revolution Banner */}
      <January2026HyperAutomationRevolutionBanner />
      
      {/* Revolutionary 2026 Content Advertising Banner */}
      <Revolutionary2026ContentAdvertisingBanner />
      
      {/* January 2026 Breakthrough Showcase Banner */}
      <January2026BreakthroughShowcaseBanner />
      
      {/* Revolutionary Breakthroughs Banner */}
      <January2026RevolutionaryBreakthroughBanner />
      
      {/* New Services Banner */}
      <January2026NewServicesBanner />

      {/* New Content Advertising Banner - promotes Trustless Evaluation Blueprint (2026) */}
      <NewContentAdvertisingBanner />
      
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
            <Link to="/blog/ai-2027-meta-cognitive-superintelligence-breakthrough" className="group block rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">2027 BREAKTHROUGH</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">SELF-AWARE</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">AI 2027: Meta-Cognitive Superintelligence</div>
              <div className="text-gray-400 text-sm mb-3">Revolutionary meta-cognitive AI systems with self-awareness, recursive learning, and consciousness-level reasoning.</div>
              <div className="text-purple-300 text-sm font-semibold group-hover:text-purple-200">Explore Consciousness AI →</div>
            </Link>
            
            <Link to="/case-studies/ai-2026-quantum-neural-superintelligence-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$5B ROI</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">SUPERINTELLIGENCE</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">Quantum Neural Superintelligence Success</div>
              <div className="text-gray-400 text-sm mb-3">How a Fortune 500 company achieved $5B ROI through revolutionary quantum neural superintelligence breakthrough.</div>
              <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read Success Story →</div>
            </Link>
            
            <Link to="/blog/ai-2026-hyper-automation-revolution" className="group block rounded-xl border border-red-500/20 bg-gradient-to-br from-red-900/20 to-orange-900/20 p-6 hover:border-red-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">HYPER-AUTOMATION</span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">$3.2B ROI</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">AI 2026: Hyper-Automation Revolution</div>
              <div className="text-gray-400 text-sm mb-3">Complete enterprise transformation through revolutionary hyper-automation platform delivering 99.5% autonomous operations.</div>
              <div className="text-red-300 text-sm font-semibold group-hover:text-red-200">Explore Hyper-Automation →</div>
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