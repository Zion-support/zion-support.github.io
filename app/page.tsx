// @ts-nocheck
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import AI2026BreakthroughInnovationsBanner from './components/AI2026BreakthroughInnovationsBanner';
import ComprehensiveContentShowcase from './components/ComprehensiveContentShowcase';
import Revolutionary2029ContentMegaBanner from './components/Revolutionary2029ContentMegaBanner';
import Ultimate2030ConsciousnessBanner from './components/Ultimate2030ConsciousnessBanner';
import AI2030QuantumConsciousnessRevolutionBanner from './components/AI2030QuantumConsciousnessRevolutionBanner';
import AI2029MetaCognitiveSuperintelligenceBanner from './components/AI2029MetaCognitiveSuperintelligenceBanner';
import UltimateContentShowcase2030 from './components/UltimateContentShowcase2030';
import NeuralOptimizationRevolutionBanner from './components/NeuralOptimizationRevolutionBanner';
import AutonomousBusinessProcessBanner from './components/AutonomousBusinessProcessBanner';
import NewContentShowcaseBanner from './components/NewContentShowcaseBanner';
import ContentShowcase from './components/ContentShowcase';
import UnifiedContentPromotion from './components/UnifiedContentPromotion';

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
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
              <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
                🚀 Zion Tech Group: Leading AI Innovation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Revolutionary AI Solutions for Enterprise
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-3xl mx-auto">
              Transform Your Business with 50,000x Performance, Universal Consciousness, and $200B+ Value Generation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a 
                href="/blog/ai-2026-breakthrough-innovations-mega-guide" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Read Latest Breakthroughs →
              </a>
              <a 
                href="/case-studies/ai-2026-breakthrough-innovations-15-billion-success" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View $15B Success Story
              </a>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">50,000x</div>
                <div className="text-xs text-blue-300">Performance Boost</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">99.9999%</div>
                <div className="text-xs text-purple-300">Universal Intelligence</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">$200B+</div>
                <div className="text-xs text-green-300">Value Potential</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                <div className="text-2xl font-extrabold text-orange-400 mb-1">0.00001s</div>
                <div className="text-xs text-orange-300">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* NEW AI 2026 BREAKTHROUGH INNOVATIONS - MOST PROMINENT */}
      <AI2026BreakthroughInnovationsBanner />
      
      {/* COMPREHENSIVE CONTENT SHOWCASE - FEATURED PROMINENTLY */}
      <ComprehensiveContentShowcase />
      
      {/* Revolutionary 2029 Content Mega Banner - Featured prominently */}
      <Revolutionary2029ContentMegaBanner />
      
      {/* Ultimate 2030 Consciousness Banner */}
      <Ultimate2030ConsciousnessBanner />

      {/* AI 2030 Quantum Consciousness Revolution Banner */}
      <AI2030QuantumConsciousnessRevolutionBanner />
      
      {/* AI 2029 Meta-Cognitive Superintelligence Banner */}
      <AI2029MetaCognitiveSuperintelligenceBanner />

      {/* NEW AI 2026 BREAKTHROUGH CONTENT - FEATURED PROMINENTLY */}
      <section className="py-8 border-t border-b border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-white font-bold text-lg">🚀 NEW: AI 2026 Breakthrough Innovations</div>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/ai-2026-breakthrough-innovations-mega-guide" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border border-blue-400/30 px-4 py-2 rounded-lg font-semibold hover:from-blue-500/30 hover:to-indigo-500/30 transition-colors">Complete Mega Guide<span>→</span></Link>
              <Link href="/case-studies/ai-2026-breakthrough-innovations-15-billion-success" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-200 border border-green-400/30 px-4 py-2 rounded-lg font-semibold hover:from-green-500/30 hover:to-emerald-500/30 transition-colors">$15B Success Story<span>→</span></Link>
              <Link href="/blog/ai-2026-enterprise-transformation-revolution" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border border-purple-400/30 px-4 py-2 rounded-lg font-semibold hover:from-purple-500/30 hover:to-pink-500/30 transition-colors">Transformation Blueprint<span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* New this week — promote fresh content */}
      <section className="py-6 border-t border-b border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-white font-semibold">Latest Revolutionary Breakthroughs</div>
            <div className="flex flex-wrap gap-2">
              <Link href="/blog/ai-2026-breakthrough-innovations-mega-guide" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border border-blue-400/30 px-3 py-2 rounded-lg font-semibold hover:from-blue-500/30 hover:to-indigo-500/30 transition-colors">AI 2026 Breakthroughs<span>→</span></Link>
              <Link href="/case-studies/ai-2026-breakthrough-innovations-15-billion-success" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-200 border border-green-400/30 px-3 py-2 rounded-lg font-semibold hover:from-green-500/30 hover:to-emerald-500/30 transition-colors">$15B Success<span>→</span></Link>
              <Link href="/blog/ai-2026-enterprise-transformation-revolution" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border border-purple-400/30 px-3 py-2 rounded-lg font-semibold hover:from-purple-500/30 hover:to-pink-500/30 transition-colors">Transformation Blueprint<span>→</span></Link>
              <Link href="/blog/ai-2030-universal-consciousness-revolution" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 border border-indigo-400/30 px-3 py-2 rounded-lg font-semibold hover:from-indigo-500/30 hover:to-purple-500/30 transition-colors">Universal Consciousness<span>→</span></Link>
              <Link href="/blog/ai-2029-quantum-neural-fusion-breakthrough" className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-200 border border-purple-400/30 px-3 py-2 rounded-lg font-semibold hover:bg-purple-500/30 transition-colors">1,000,000x Performance<span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

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
            <Link href="/blog/ai-2026-breakthrough-innovations-mega-guide" className="group block rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-6 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">2026 BREAKTHROUGH</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">COMPLETE GUIDE</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">AI 2026 Breakthrough Innovations</div>
              <div className="text-gray-400 text-sm mb-3">Revolutionary AI innovations with 1,000,000x performance improvements, 99.8% automation, and $15B+ value creation.</div>
              <div className="text-blue-300 text-sm font-semibold group-hover:text-blue-200">Read Complete Guide →</div>
            </Link>
            
            <Link href="/case-studies/ai-2026-breakthrough-innovations-15-billion-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$15B SUCCESS</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">FORTUNE 100</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">$15B Enterprise Success</div>
              <div className="text-gray-400 text-sm mb-3">How a Fortune 100 company achieved $15 billion in value creation through comprehensive AI 2026 breakthrough innovations.</div>
              <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read Success Story →</div>
            </Link>
            
            <Link href="/blog/ai-2026-enterprise-transformation-revolution" className="group block rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">TRANSFORMATION</span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-3 py-1 rounded-full text-xs font-bold">BLUEPRINT</span>
              </div>
              <div className="text-white font-bold text-lg mb-2">Enterprise Transformation</div>
              <div className="text-gray-400 text-sm mb-3">Complete blueprint for AI 2026 enterprise transformation with the five pillars of revolutionary change.</div>
              <div className="text-purple-300 text-sm font-semibold group-hover:text-purple-200">Read Blueprint →</div>
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
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Data Analytics</h3>
                  <p className="text-sm text-gray-500">$199/month</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Transform data into actionable insights with predictive modeling and real-time dashboards
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Predictive Analytics</div>
                <Link
                  href="/services/ai-data-analytics"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Workflow Automation</h3>
                  <p className="text-sm text-gray-500">$149/month</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Automate business processes with intelligent workflow design and smart triggers
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Process Automation</div>
                <Link
                  href="/services/ai-workflow-automation"
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Virtual Assistant</h3>
                  <p className="text-sm text-gray-500">$99/month</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                24/7 intelligent customer support with natural language processing
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">24/7 Support</div>
                <Link
                  href="/services/ai-virtual-assistant"
                  className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
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
              <Link href="/blog/ai-2025-oct-01-privacy-first-observability-v2" className="block rounded-lg border border-white/10 p-4 hover:border-indigo-400/40 transition-colors">
                <div className="text-indigo-300 text-xs mb-2">Observability</div>
                <div className="text-white font-semibold">Privacy‑First Observability v2</div>
                <div className="text-gray-400 text-sm mt-1">User‑centric traces without PII leaks.</div>
              </Link>
              <Link href="/blog/genai-2025-oct-01-quality-tiers-v3" className="block rounded-lg border border-white/10 p-4 hover:border-purple-400/40 transition-colors">
                <div className="text-purple-300 text-xs mb-2">GenAI</div>
                <div className="text-white font-semibold">GenAI Quality Tiers v3</div>
                <div className="text-gray-400 text-sm mt-1">50% savings with stable UX.</div>
              </Link>
              <Link href="/blog/edge-2025-oct-01-consentless-journeys-blueprint" className="block rounded-lg border border-white/10 p-4 hover:border-cyan-400/40 transition-colors">
                <div className="text-cyan-300 text-xs mb-2">Edge Computing</div>
                <div className="text-white font-semibold">Consentless Journeys Blueprint</div>
                <div className="text-gray-400 text-sm mt-1">Personalization &lt;100ms, zero‑PII.</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ultimate 2026 Content Showcase */}
      <UltimateContentShowcase2030 />
    </div>
  );
}