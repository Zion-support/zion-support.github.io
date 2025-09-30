// @ts-nocheck
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedContentPromotion from '../components/UnifiedContentPromotion';
import January2026NeuralArchitectureSearchBanner from '../components/January2026NeuralArchitectureSearchBanner';
import January2026FederatedLearningBanner from '../components/January2026FederatedLearningBanner';
import January2026RevolutionaryBreakthroughBanner from '../components/January2026RevolutionaryBreakthroughBanner';
import January2026NewServicesBanner from '../components/January2026NewServicesBanner';
import Revolutionary2026ContentAdvertisingBanner from '../components/Revolutionary2026ContentAdvertisingBanner';
import January2026BreakthroughShowcaseBanner from '../components/January2026BreakthroughShowcaseBanner';
import Ultimate2026ContentPromotionalBanner from '../components/Ultimate2026ContentPromotionalBanner';
import Ultimate2026HyperintelligenceBanner from '../components/Ultimate2026HyperintelligenceBanner';
import AI2030QuantumConsciousnessRevolutionBanner from '../components/AI2030QuantumConsciousnessRevolutionBanner';
import AI2029MetaCognitiveSuperintelligenceBanner from '../components/AI2029MetaCognitiveSuperintelligenceBanner';
import UltimateContentShowcase2030 from '../components/UltimateContentShowcase2030';
import NeuralOptimizationRevolutionBanner from '../components/NeuralOptimizationRevolutionBanner';
import AutonomousBusinessProcessBanner from '../components/AutonomousBusinessProcessBanner';
import NewContentShowcaseBanner from '../components/NewContentShowcaseBanner';
import ContentShowcase from '../components/ContentShowcase';
import QuantumTransformationBanner from '../components/QuantumTransformationBanner';
import NeuralArchitectureSearchBanner from '../components/NeuralArchitectureSearchBanner';
import LatestBreakthroughsBanner from '../components/LatestBreakthroughsBanner';
import April2026MegaBreakthroughBanner from '../components/April2026MegaBreakthroughBanner';
import QuantumConsciousnessFusionBanner from '../components/QuantumConsciousnessFusionBanner';
import Revolutionary2026ContentShowcaseBanner from '../components/Revolutionary2026ContentShowcaseBanner';
import January2026BreakthroughInnovationsBanner from '../components/January2026BreakthroughInnovationsBanner';
import December2026MegaBreakthroughBanner from '../components/December2026MegaBreakthroughBanner';
import Ultimate2026ContentShowcaseBanner from '../components/Ultimate2026ContentShowcaseBanner';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of cutting-edge AI solutions, enterprise automation, and revolutionary technology services. Transform your business with our advanced AI systems.',
  keywords: 'AI solutions, enterprise automation, artificial intelligence, machine learning, technology services, business transformation',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading AI insights, case studies, and implementation guides for the future of enterprise technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Explore AI Content
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </header>

      {/* NEW: December 2026 Mega Breakthrough Banner - Most Prominent */}
      <December2026MegaBreakthroughBanner />
      
      {/* NEW: Ultimate 2026 Content Showcase Banner */}
      <Ultimate2026ContentShowcaseBanner />
      
      {/* NEW: April 2026 Mega Breakthrough Banner */}
      <April2026MegaBreakthroughBanner />
      
      {/* NEW: Quantum Consciousness Fusion Banner */}
      <QuantumConsciousnessFusionBanner />
      
      {/* NEW: Revolutionary 2026 Content Showcase Banner */}
      <Revolutionary2026ContentShowcaseBanner />

      {/* Latest Revolutionary Breakthroughs Banner - Featured prominently */}
      <LatestBreakthroughsBanner />
      
      {/* Quantum Transformation Banner - Featured prominently */}
      <QuantumTransformationBanner />
      
      {/* Neural Architecture Search Banner - Featured prominently */}
      <NeuralArchitectureSearchBanner />

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
              <Link href="/case-studies/ai-2027-consciousness-fusion-mega-success" className="inline-flex items-center gap-2 bg-green-500/20 text-green-200 border border-green-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-green-500/30 transition-colors">$2.5B ROI Success<span>→</span></Link>
              <Link href="/case-studies/ai-2028-autonomous-enterprise-mega-success" className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-200 border border-orange-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-orange-500/30 transition-colors">$5B ROI Success<span>→</span></Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Innovation Showcase */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary AI Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the most advanced AI systems transforming enterprise operations worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-8 border border-blue-500/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Architecture Search</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary AI systems that automatically design optimal neural networks, 
                delivering 500x performance improvements and $2.8B+ ROI.
              </p>
              <Link
                href="/blog/ai-2026-neural-architecture-search-revolution"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-xl p-8 border border-green-500/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Consciousness Fusion</h3>
              <p className="text-gray-300 mb-6">
                Breakthrough quantum-AI fusion technology delivering 100,000x performance 
                improvements and $50B+ ROI through consciousness-level intelligence.
              </p>
              <Link
                href="/blog/ai-2026-quantum-consciousness-fusion-breakthrough"
                className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all"
              >
                Explore Technology →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-8 border border-purple-500/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Enterprise</h3>
              <p className="text-gray-300 mb-6">
                Complete business automation achieving 99.9% autonomous operations 
                with $100M+ annual savings and revolutionary efficiency gains.
              </p>
              <Link
                href="/blog/ai-2026-autonomous-enterprise-revolution"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                See Success Stories →
              </Link>
            </div>
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
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Data Analytics</h3>
              <p className="text-gray-600 mb-6">
                Transform data into actionable insights with predictive modeling and real-time dashboards
              </p>
              <div className="text-2xl font-bold text-blue-600 mb-4">$199/month</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Predictive Analytics</li>
                <li>• Real-time Dashboards</li>
                <li>• Data Integration</li>
              </ul>
              <Link
                href="/services/ai-data-analytics"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Workflow Automation</h3>
              <p className="text-gray-600 mb-6">
                Automate business processes with intelligent workflow design and smart triggers
              </p>
              <div className="text-2xl font-bold text-green-600 mb-4">$149/month</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Process Automation</li>
                <li>• Smart Triggers</li>
                <li>• Performance Monitoring</li>
              </ul>
              <Link
                href="/services/ai-workflow-automation"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Virtual Assistant</h3>
              <p className="text-gray-600 mb-6">
                24/7 intelligent customer support with natural language processing
              </p>
              <div className="text-2xl font-bold text-purple-600 mb-4">$99/month</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• 24/7 Support</li>
                <li>• Multi-channel</li>
                <li>• Personalized Responses</li>
              </ul>
              <Link
                href="/services/ai-virtual-assistant"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400">
                Leading provider of cutting-edge AI solutions and enterprise automation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white transition-colors">AI Solutions</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Enterprise Automation</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Cloud Migration</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">AI Blog</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">GitHub</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Email</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}