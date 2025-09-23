import React, { lazy, Suspense } from 'react'
import Link from 'next/link'
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, Globe, Target, Sparkles, TrendingUp } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import AnimatedCounter from './components/AnimatedCounter'
import ScrollReveal from './components/ScrollReveal'
import LoadingSpinner from './components/LoadingSpinner'

// Import new advanced AI components
import AdvancedAIAssistant from './components/AdvancedAIAssistant';
import AdvancedAnalyticsEngine from './components/AdvancedAnalyticsEngine';
import AdvancedContentRecommendationEngine from './components/AdvancedContentRecommendationEngine';
import AdvancedSecurityMonitor from './components/AdvancedSecurityMonitor';
import APIManagementSystem from './components/APIManagementSystem';
import AutomationWorkflowEngine from './components/AutomationWorkflowEngine';
import BusinessIntelligenceDashboard from './components/BusinessIntelligenceDashboard';
import EnterpriseDataManagement from './components/EnterpriseDataManagement';
import IntelligentSearchEngine from './components/IntelligentSearchEngine';
import RealTimePerformanceDashboard from './components/RealTimePerformanceDashboard';

// Lazy load heavy components
const ROICalculator = lazy(() => import('./components/ROICalculator'));
const StructuredData = lazy(() => import('./components/StructuredData'));
const PerformanceMetrics = lazy(() => import('./components/PerformanceMetrics'));
const TechnologyStack = lazy(() => import('./components/TechnologyStack'));

// Import key promotional components
import ComprehensiveContentShowcase2026 from './components/ComprehensiveContentShowcase2026';
import ComprehensiveSolutionsBanner2025 from './components/ComprehensiveSolutionsBanner2025';
import EnhancedContentPromotionBanner from './components/EnhancedContentPromotionBanner';
import EnhancedContentPromotionBanner2026 from './components/EnhancedContentPromotionBanner2026';
import FeaturedContentShowcase2026 from './components/FeaturedContentShowcase2026';
import InteractiveContentDiscoveryWidget from './components/InteractiveContentDiscoveryWidget';
import NewContent2026Showcase from './components/NewContent2026Showcase';
import NewContentPromotionBanner from './components/NewContentPromotionBanner';
import NewServicesShowcase2025 from './components/NewServicesShowcase2025';
import RevolutionaryContent2025Banner from './components/RevolutionaryContent2025Banner';
import RevolutionaryContent2026Banner from './components/RevolutionaryContent2026Banner';
// Import AI 2026 promotional components
import AI2026AutonomousSystemsBanner from './components/AI2026AutonomousSystemsBanner';
import AI2026QuantumRevolutionBanner from './components/AI2026QuantumRevolutionBanner';
import AI2026UltimateShowcaseBanner from './components/AI2026UltimateShowcaseBanner';
import AI2026QuantumRevolutionUltimateBanner from './components/AI2026QuantumRevolutionUltimateBanner';
import RevolutionaryAIContent2026Banner from './components/RevolutionaryAIContent2026Banner';
import UltimateContentShowcase2025 from './components/UltimateContentShowcase2025';

// Import new promotional components
import LatestContentShowcase2025 from './components/LatestContentShowcase2025';
// Temporarily remove broken banner until fixed
// import NewContent2025UltimateBanner from './components/NewContent2025UltimateBanner';
import NewContent2025UltimateShowcaseBanner from './components/NewContent2025UltimateShowcaseBanner';
import UltimateContentShowcase2026 from './components/UltimateContentShowcase2026';
import UltimatePromotionBanner2026 from './components/UltimatePromotionBanner2026';

// Import additional promotional components
import AI2025BreakthroughBanner from './components/AI2025BreakthroughBanner';
import NewContent2025PromotionBanner from './components/NewContent2025PromotionBanner';
import RevolutionaryAIContentBanner from './components/RevolutionaryAIContentBanner';

import QuantumAI2026BreakthroughBanner from './components/QuantumAI2026BreakthroughBanner';
import QuantumAIContentShowcase2026 from './components/QuantumAIContentShowcase2026';

// Import new promotional components
import NewContent2026UltimateShowcase from './components/NewContent2026UltimateShowcase';
import WhatsNewStrip from './components/WhatsNewStrip';

// Import new 2026 ultimate promotional components
// import AI2026QuantumRevolutionUltimateBanner from './components/AI2026QuantumRevolutionUltimateBanner';

// Import new 2025 advanced automation promotional components
import AdvancedAutomationContentShowcase2025 from './components/AdvancedAutomationContentShowcase2025';
import NewContent2025AdvancedAutomationBanner from './components/NewContent2025AdvancedAutomationBanner';

// Import new 2025 analytics promotional components
import AnalyticsContentShowcase2025 from './components/AnalyticsContentShowcase2025';
import NewAutonomousRevenueAgentsPromo from './components/NewAutonomousRevenueAgentsPromo';
import NewContent2025AnalyticsRevolutionBanner from './components/NewContent2025AnalyticsRevolutionBanner';
import NewMultimodalAgents2025Banner from './components/NewMultimodalAgents2025Banner';
import WhatsNew from './components/WhatsNew';

// Import new 2026 promotional content moved into app/components
import LatestBlogContent2026 from './components/LatestBlogContent2026';
import LatestServicesShowcase2026 from './components/LatestServicesShowcase2026';
import NewContent2026UltimateBanner from './components/NewContent2026UltimateBanner';
import SuccessStoriesShowcase2026 from './components/SuccessStoriesShowcase2026';
import UltimateContentPromotion2026 from './components/UltimateContentPromotion2026';

// Import new content showcase components
import NewContentShowcase2026 from './components/NewContentShowcase2026';
import RevolutionaryContentBanner2026 from './components/RevolutionaryContentBanner2026';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description:
    'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <ScrollReveal origin="top" delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced AI and
              <span className="ml-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal origin="bottom" delay={200}>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.
              We deliver enterprise-grade technology that drives innovation and growth.
            </p>
          </ScrollReveal>

          <ScrollReveal origin="bottom" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <ScrollReveal origin="bottom" delay={100}>
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our Core Services
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ScrollReveal origin="bottom" delay={100}>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
              <p className="text-gray-300 text-sm mb-4">
                Advanced artificial intelligence and machine learning solutions for your business.
              </p>
              <Link href="/services/ai" className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal origin="bottom" delay={200}>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
              <p className="text-gray-300 text-sm mb-4">
                Scalable cloud solutions and infrastructure management services.
              </p>
              <Link href="/services/cloud" className="text-green-400 hover:text-green-300 text-sm font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal origin="bottom" delay={300}>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 text-sm mb-4">
                Advanced security solutions and comprehensive threat protection strategies.
              </p>
              <Link href="/services/security" className="text-red-400 hover:text-red-300 text-sm font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal origin="bottom" delay={400}>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-300 text-sm mb-4">
                Next-generation technology and digital transformation consulting.
              </p>
              <Link href="/services/innovation" className="text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <ScrollReveal origin="bottom" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <ScrollReveal origin="bottom" delay={300}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={500} suffix="+" duration={2000} />
                </h3>
                <p className="text-gray-300">Enterprise Clients</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal origin="bottom" delay={400}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={50} suffix="+" duration={2000} />
                </h3>
                <p className="text-gray-300">Countries Served</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal origin="bottom" delay={500}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={99.9} suffix="%" duration={2000} />
                </h3>
                <p className="text-gray-300">Uptime Guarantee</p>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <Testimonials />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
