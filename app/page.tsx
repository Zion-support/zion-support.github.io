import React from 'react';
import Link from 'next/link';
import Ultimate2026BreakthroughAdvertisingBanner from '../components/Ultimate2026BreakthroughAdvertisingBanner';
import Revolutionary2029ContentMegaBanner from '../components/Revolutionary2029ContentMegaBanner';
import Ultimate2030ConsciousnessBanner from '../components/Ultimate2030ConsciousnessBanner';
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
import January2026RevolutionaryContentMegaBanner from '../components/January2026RevolutionaryContentMegaBanner';
import January2026EdgeNativeIntelligenceBanner from '../components/January2026EdgeNativeIntelligenceBanner';
import January2026SyntheticDataRevolutionBanner from '../components/January2026SyntheticDataRevolutionBanner';
// import Ultimate2026HyperintelligenceBanner from '../components/Ultimate2026HyperintelligenceBanner';
// import AI2030QuantumConsciousnessRevolutionBanner from '../components/AI2030QuantumConsciousnessRevolutionBanner';
// import AI2029MetaCognitiveSuperintelligenceBanner from '../components/AI2029MetaCognitiveSuperintelligenceBanner';
// import UltimateContentShowcase2030 from '../components/UltimateContentShowcase2030';
import NewContent2026ShowcaseBanner from '../components/NewContent2026ShowcaseBanner';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="py-16 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Zion Tech Group</h1>
          <p className="text-lg md:text-xl text-gray-300">Leading AI insights, case studies, and implementation guides.</p>
        </div>
      </section>

      {/* Ultimate 2026 Breakthrough Advertising Banner - Most Prominent */}
      <Ultimate2026BreakthroughAdvertisingBanner />

      {/* Revolutionary Content Mega Banner - Featured prominently */}
      <January2026RevolutionaryContentMegaBanner />

      {/* Fresh content promo — newly published */}
      <section className="py-4 border-t border-b border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-white/90 font-semibold">New: January 2026 Revolutionary Breakthroughs</div>
            <div className="flex flex-wrap gap-2">
              <a href="/blog/ai-2026-ultimate-breakthrough-revolution" className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-blue-500/30 transition-colors">Ultimate Breakthrough<span>→</span></a>
              <a href="/blog/ai-2026-autonomous-enterprise-revolution" className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-200 border border-purple-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-purple-500/30 transition-colors">Autonomous Enterprise<span>→</span></a>
              <a href="/case-studies/ai-2026-ultimate-breakthrough-mega-success" className="inline-flex items-center gap-2 bg-green-500/20 text-green-200 border border-green-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-green-500/30 transition-colors">$10.2B Success<span>→</span></a>
              <a href="/case-studies/ai-2026-ultimate-breakthrough-mega-success" className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-emerald-500/30 transition-colors">Mega Success Story<span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Edge-Native Intelligence Banner */}
      <January2026EdgeNativeIntelligenceBanner />

      {/* Synthetic Data Revolution Banner */}
      <January2026SyntheticDataRevolutionBanner />

      {/* Revolutionary 2027 Content Mega Banner - Featured prominently */}
      <Revolutionary2027ContentMegaBanner />
      
      {/* Ultimate 2027 Breakthrough Banner */}
      <Ultimate2027BreakthroughBanner />

      {/* Latest Revolutionary Breakthroughs Banner - Featured prominently */}
      <January2026RevolutionaryBreakthroughBanner />
      
      {/* Quantum Transformation Banner - Featured prominently */}
      <January2026NeuralArchitectureSearchBanner />
      
      {/* Neural Architecture Search Banner - Featured prominently */}
      <January2026FederatedLearningBanner />

      {/* New this week — promote fresh content */}
      <section className="py-6 border-t border-b border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-white font-semibold">Latest Revolutionary Breakthroughs</div>
            <div className="flex flex-wrap gap-2">
              <Link href="/blog/ai-2026-ultimate-breakthrough-revolution" className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-200 border border-purple-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-purple-500/30 transition-colors">Ultimate Breakthrough<span>→</span></Link>
              <Link href="/blog/ai-2026-autonomous-enterprise-revolution" className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-cyan-500/30 transition-colors">Autonomous Enterprise<span>→</span></Link>
              <Link href="/case-studies/ai-2026-ultimate-breakthrough-mega-success" className="inline-flex items-center gap-2 bg-green-500/20 text-green-200 border border-green-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-green-500/30 transition-colors">$10.2B ROI Success<span>→</span></Link>
              <Link href="/case-studies/ai-2026-ultimate-breakthrough-mega-success" className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-200 border border-orange-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-orange-500/30 transition-colors">Mega Success Story<span>→</span></Link>
              <Link href="/blog/ai-2026-ultimate-breakthrough-revolution" className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-indigo-500/30 transition-colors">1000x Performance<span>→</span></Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Content 2026 Showcase Banner - Latest Content */}
      <NewContent2026ShowcaseBanner />
      
      {/* Ultimate 2026 Hyperintelligence Banner */}
      {/* <Ultimate2026HyperintelligenceBanner /> */}
      
      {/* AI 2030 Quantum Consciousness Revolution Banner */}
      {/* <AI2030QuantumConsciousnessRevolutionBanner /> */}
      
      {/* AI 2029 Meta-Cognitive Superintelligence Banner */}
      {/* <AI2029MetaCognitiveSuperintelligenceBanner /> */}
      
      {/* Revolutionary 2026 Content Advertising Banner */}
      
      {/* January 2026 Breakthrough Showcase Banner */}
      
      {/* Revolutionary Breakthroughs Banner */}
      
      {/* New Services Banner */}

      {/* New Content Advertising Banner - promotes Trustless Evaluation Blueprint (2026) */}
      
      {/* Legacy Content Banners */}
      
      <UnifiedContentPromotion />

      {/* Ultimate 2026 Content Promotional Banner */}

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
            <Link href="/blog/ai-2026-ultimate-breakthrough-revolution" className="group block rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">ULTIMATE BREAKTHROUGH</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">1000x</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">AI 2026: Ultimate Breakthrough Revolution</div>
              <div className="text-gray-400 text-sm mb-3">Revolutionary AI technologies delivering 1000x performance improvements, 99% automation rates, and $10B+ ROI across Fortune 500 enterprises.</div>
              <div className="text-purple-300 text-sm font-semibold group-hover:text-purple-200">Discover the Technology →</div>
            </Link>
            
            <Link href="/blog/ai-2026-autonomous-enterprise-revolution" className="group block rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">AUTONOMOUS REVOLUTION</span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">99%</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">AI 2026: Autonomous Enterprise Revolution</div>
              <div className="text-gray-400 text-sm mb-3">Revolutionary AI automation achieving 99% enterprise autonomy with self-healing systems and autonomous decision-making.</div>
              <div className="text-cyan-300 text-sm font-semibold group-hover:text-cyan-200">Explore Automation →</div>
            </Link>
            
            <Link href="/case-studies/ai-2026-ultimate-breakthrough-mega-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$10.2B ROI</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">MEGA SUCCESS</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">Ultimate Breakthrough Mega Success</div>
              <div className="text-gray-400 text-sm mb-3">How a Fortune 100 company achieved $10.2B ROI with revolutionary AI technologies, 99.7% efficiency, and 1.2 month payback.</div>
              <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read Success Story →</div>
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

      {/* Featured New Content Showcase */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                ✨ NEW 2026 CONTENT
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Revolutionary AI Content & Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest AI innovations, transformation guides, and real-world success stories 
              that are reshaping businesses in 2026
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI 2026 Ultimate Breakthrough</h3>
                  <p className="text-sm text-gray-500">Revolutionary transformation guide</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Discover the revolutionary AI technologies reshaping enterprise operations in 2026. 
                From quantum-neural fusion to meta-cognitive AI, learn how to build the future-ready enterprise.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">45 min read</div>
                <Link
                  href="/blog/ai-2026-ultimate-breakthrough-revolution"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Autonomous Enterprise Revolution</h3>
                  <p className="text-sm text-gray-500">99% automation rate</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Discover how AI 2026 is revolutionizing enterprise operations with autonomous systems. 
                From self-healing systems to zero-touch operations, achieve complete business autonomy.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">28 min read</div>
                <Link
                  href="/blog/ai-2026-autonomous-enterprise-revolution"
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">$10.2B Success Story</h3>
                  <p className="text-sm text-gray-500">Revolutionary transformation</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                See how a Fortune 100 company achieved $10.2B ROI with revolutionary AI transformation. 
                99.7% uptime, 99% automation, and complete business revolution.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">35 min read</div>
                <Link
                  href="/case-studies/ai-2026-ultimate-breakthrough-mega-success"
                  className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  View Success Story →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Explore All AI Content
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured AI & IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular services that are transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Data Analytics</h3>
              <p className="text-gray-600 mb-4">Transform data into actionable insights with predictive modeling and real-time dashboards</p>
              <div className="text-2xl font-bold text-blue-600 mb-2">$199/month</div>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Predictive Analytics</li>
                <li>• Real-time Dashboards</li>
                <li>• Data Integration</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Workflow Automation</h3>
              <p className="text-gray-600 mb-4">Automate business processes with intelligent workflow design and smart triggers</p>
              <div className="text-2xl font-bold text-green-600 mb-2">$149/month</div>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Process Automation</li>
                <li>• Smart Triggers</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Virtual Assistant</h3>
              <p className="text-gray-600 mb-4">24/7 intelligent customer support with natural language processing</p>
              <div className="text-2xl font-bold text-purple-600 mb-2">$99/month</div>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 24/7 Support</li>
                <li>• Multi-channel</li>
                <li>• Personalized Responses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <UltimateContentShowcase2030 /> */}
    </main>
  );
}