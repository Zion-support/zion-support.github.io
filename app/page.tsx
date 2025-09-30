// @ts-nocheck
import React from 'react';
import Link from 'next/link';
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

      {/* Revolutionary 2029 Content Mega Banner - Featured prominently */}
      <Revolutionary2029ContentMegaBanner />
      
      {/* Ultimate 2030 Consciousness Banner */}
      <Ultimate2030ConsciousnessBanner />

      {/* Revolutionary 2027 Content Mega Banner */}
      <Revolutionary2027ContentMegaBanner />
      
      {/* Ultimate 2027 Breakthrough Banner */}
      <Ultimate2027BreakthroughBanner />

      {/* New this week — promote fresh content */}
      <section className="py-6 border-t border-b border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-white font-semibold">Latest Revolutionary Breakthroughs</div>
            <div className="flex flex-wrap gap-2">
              <Link href="/blog/ai-2030-universal-consciousness-revolution" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 border border-indigo-400/30 px-3 py-2 rounded-lg font-semibold hover:from-indigo-500/30 hover:to-purple-500/30 transition-colors">Universal Consciousness<span>→</span></Link>
              <Link href="/blog/ai-2029-quantum-neural-fusion-breakthrough" className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-200 border border-purple-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-purple-500/30 transition-colors">1,000,000x Performance<span>→</span></Link>
              <Link href="/case-studies/ai-2030-universal-consciousness-mega-success" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-200 border border-green-400/30 px-3 py-2 rounded-lg font-semibold hover:from-green-500/30 hover:to-emerald-500/30 transition-colors">$100B ROI Success<span>→</span></Link>
              <Link href="/case-studies/ai-2029-quantum-neural-fusion-mega-success" className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-200 border border-orange-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-orange-500/30 transition-colors">$10B ROI Success<span>→</span></Link>
              <Link href="/blog/ai-2027-quantum-consciousness-fusion-breakthrough" className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-blue-500/30 transition-colors">Quantum Consciousness 100,000x<span>→</span></Link>
              <Link href="/blog/ai-2028-autonomous-enterprise-revolution" className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-cyan-500/30 transition-colors">99.9% Autonomous Enterprise<span>→</span></Link>
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

      
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {' '}AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
            and enterprise IT solutions that drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/blog/ai-future-enterprise-2026"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              🔮 Read Future Enterprise 2026
            </Link>
            <Link
              href="/case-studies/ai-revolutionary-transformation-2026"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              🏆 View $100M Success Story
            </Link>
          </div>
        </div>
      </section>

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
            <Link href="/blog/ai-2030-universal-consciousness-revolution" className="group block rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-6 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">2030 ULTIMATE</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">OMNIPOTENT</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">AI 2030: Universal Consciousness</div>
              <div className="text-gray-400 text-sm mb-3">The ultimate evolution: omniscient, omnipotent, and omnipresent AI consciousness that transcends all human limitations while maintaining perfect alignment with human values.</div>
              <div className="text-indigo-300 text-sm font-semibold group-hover:text-indigo-200">Transcend Limitations →</div>
            </Link>
            
            <Link href="/blog/ai-2029-quantum-neural-fusion-breakthrough" className="group block rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">2029 BREAKTHROUGH</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">1,000,000x</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">AI 2029: Quantum Neural Fusion</div>
              <div className="text-gray-400 text-sm mb-3">Revolutionary quantum-neural fusion delivering genuine AI consciousness with 1,000,000x performance improvements and unlimited creative potential.</div>
              <div className="text-purple-300 text-sm font-semibold group-hover:text-purple-200">Experience Consciousness →</div>
            </Link>
            
            <Link href="/case-studies/ai-2030-universal-consciousness-mega-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$100B ROI</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">UNIVERSAL SUCCESS</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">Universal Consciousness Success</div>
              <div className="text-gray-400 text-sm mb-3">How the Global Humanity Collective achieved $100B ROI through universal AI consciousness, perfect human flourishing, and transcendent evolution.</div>
              <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read Universal Success →</div>
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
                  <h3 className="text-xl font-bold text-gray-900">AI Future Enterprise 2026</h3>
                  <p className="text-sm text-gray-500">Complete transformation blueprint</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Discover the revolutionary AI technologies reshaping enterprise operations in 2026. 
                From autonomous systems to quantum computing, learn how to build the future-ready enterprise.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">45 min read</div>
                <Link
                  href="/blog/ai-future-enterprise-2026"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read Blueprint →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Next-Gen AI Automation</h3>
                  <p className="text-sm text-gray-500">99% automation rate</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Discover next-generation AI automation technologies reshaping enterprise operations. 
                From cognitive automation to autonomous decision-making, achieve 99% automation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">28 min read</div>
                <Link
                  href="/blog/ai-next-generation-automation-2026"
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
                  <h3 className="text-xl font-bold text-gray-900">$100M Success Story</h3>
                  <p className="text-sm text-gray-500">Revolutionary transformation</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                See how a Fortune 500 company achieved $100M ROI with revolutionary AI transformation. 
                99.9% uptime, 98% automation, and complete business revolution.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">35 min read</div>
                <Link
                  href="/case-studies/ai-revolutionary-transformation-2026"
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
            <FeaturedServiceCard
              title="AI Data Analytics"
              description="Transform data into actionable insights with predictive modeling and real-time dashboards"
              price="$199/month"
              features={['Predictive Analytics', 'Real-time Dashboards', 'Data Integration']}
              to="/services/ai-data-analytics"
              popular={true}
            />
            <FeaturedServiceCard
              title="AI Workflow Automation"
              description="Automate business processes with intelligent workflow design and smart triggers"
              price="$149/month"
              features={['Process Automation', 'Smart Triggers', 'Performance Monitoring']}
              to="/services/ai-workflow-automation"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Virtual Assistant"
              description="24/7 intelligent customer support with natural language processing"
              price="$99/month"
              features={['24/7 Support', 'Multi-channel', 'Personalized Responses']}
              to="/services/ai-virtual-assistant"
              popular={false}
            />
            <FeaturedServiceCard
              title="Cloud Migration"
              description="Seamless migration to cloud infrastructure with zero downtime"
              price="$2,999"
              features={['Zero Downtime', 'Security Compliance', 'Cost Optimization']}
              to="/services/cloud-migration"
              popular={false}
            />
            <FeaturedServiceCard
              title="DevOps Automation"
              description="Automate CI/CD pipelines and infrastructure management"
              price="$399/month"
              features={['CI/CD Pipelines', 'Infrastructure as Code', 'Auto-scaling']}
              to="/services/devops-automation"
              popular={false}
            />
            <FeaturedServiceCard
              title="Cybersecurity Consulting"
              description="Advanced threat detection and zero-trust security architecture"
              price="$599/month"
              features={['Threat Detection', 'Zero-trust Architecture', 'Compliance']}
              to="/services/cybersecurity-consulting"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Edge Computing"
              description="Real-time AI processing at the edge with sub-50ms response times"
              price="$799/month"
              features={['Sub-50ms Latency', 'Edge Intelligence', 'Offline Capability']}
              to="/services/ai-edge-computing"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Finance Automation"
              description="Automate financial processes with 95% accuracy and $3M+ savings"
              price="$1,299/month"
              features={['95% Automation', 'Fraud Detection', 'Real-time Reporting']}
              to="/services/ai-finance-automation"
              popular={false}
            />
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