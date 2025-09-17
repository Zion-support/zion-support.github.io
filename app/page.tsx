import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import LoadingSpinner from './components/LoadingSpinner';

// Import new advanced AI components
import AdvancedContentRecommendationEngine from './components/AdvancedContentRecommendationEngine';
import RealTimePerformanceDashboard from './components/RealTimePerformanceDashboard';
import IntelligentSearchEngine from './components/IntelligentSearchEngine';
import AdvancedAIAssistant from './components/AdvancedAIAssistant';
import BusinessIntelligenceDashboard from './components/BusinessIntelligenceDashboard';
import AdvancedSecurityMonitor from './components/AdvancedSecurityMonitor';
import AdvancedAnalyticsEngine from './components/AdvancedAnalyticsEngine';
import AutomationWorkflowEngine from './components/AutomationWorkflowEngine';
import EnterpriseDataManagement from './components/EnterpriseDataManagement';
import APIManagementSystem from './components/APIManagementSystem';

// Lazy load heavy components
const ROICalculator = lazy(() => import('./components/ROICalculator'));
const StructuredData = lazy(() => import('./components/StructuredData'));
const PerformanceMetrics = lazy(() => import('./components/PerformanceMetrics'));
const TechnologyStack = lazy(() => import('./components/TechnologyStack'));

// Import key promotional components
import NewContentPromotionBanner from './components/NewContentPromotionBanner';
import InteractiveContentDiscoveryWidget from './components/InteractiveContentDiscoveryWidget';
import ComprehensiveSolutionsBanner2025 from './components/ComprehensiveSolutionsBanner2025';
import NewServicesShowcase2025 from './components/NewServicesShowcase2025';
import EnhancedContentPromotionBanner from './components/EnhancedContentPromotionBanner';
import NewContent2026Showcase from './components/NewContent2026Showcase';
import RevolutionaryContent2026Banner from './components/RevolutionaryContent2026Banner';
import FeaturedContentShowcase2026 from './components/FeaturedContentShowcase2026';
import EnhancedContentPromotionBanner2026 from './components/EnhancedContentPromotionBanner2026';
import ComprehensiveContentShowcase2026 from './components/ComprehensiveContentShowcase2026';
import RevolutionaryContent2025Banner from './components/RevolutionaryContent2025Banner';
import UltimateContentShowcase2025 from './components/UltimateContentShowcase2025';

// Import new promotional components
import NewContent2025UltimateBanner from './components/NewContent2025UltimateBanner';
import UltimatePromotionBanner2026 from './components/UltimatePromotionBanner2026';
import UltimateContentShowcase2026 from './components/UltimateContentShowcase2026';
import SuccessMetricsShowcase2026 from './components/SuccessMetricsShowcase2026';

// Import additional promotional components
import AI2025BreakthroughBanner from './components/AI2025BreakthroughBanner';
import NewContent2025PromotionBanner from './components/NewContent2025PromotionBanner';
import LatestContentShowcase2025 from './components/LatestContentShowcase2025';
import RevolutionaryAIContentBanner from './components/RevolutionaryAIContentBanner';

// Import new AI 2026 promotional components
import AI2026QuantumRevolutionBanner from './components/AI2026QuantumRevolutionBanner';
import AI2026AutonomousSystemsBanner from './components/AI2026AutonomousSystemsBanner';
import AI2026UltimateShowcaseBanner from './components/AI2026UltimateShowcaseBanner';
import QuantumAI2026BreakthroughBanner from './components/QuantumAI2026BreakthroughBanner';
import QuantumAIContentShowcase2026 from './components/QuantumAIContentShowcase2026';
import RevolutionaryContentBanner2025 from './components/RevolutionaryContentBanner2025';

// Import new promotional components
import RevolutionaryAI2026ContentBanner from './components/RevolutionaryAI2026ContentBanner';
import NewContent2026UltimateShowcase from './components/NewContent2026UltimateShowcase';

// Import new 2025 quantum AI promotional components
import QuantumAIRevolutionBanner2025 from './components/QuantumAIRevolutionBanner2025';
import NewContent2025UltimateShowcase from './components/NewContent2025UltimateShowcase';

// Import new 2026 ultimate promotional components
import AI2026QuantumRevolutionUltimateBanner from './components/AI2026QuantumRevolutionUltimateBanner';
import RevolutionaryAIContent2026Banner from './components/RevolutionaryAIContent2026Banner';

// Import new 2025 advanced automation promotional components
import NewContent2025AdvancedAutomationBanner from './components/NewContent2025AdvancedAutomationBanner';
import AdvancedAutomationContentShowcase2025 from './components/AdvancedAutomationContentShowcase2025';

// Import new 2025 analytics promotional components
import NewContent2025AnalyticsRevolutionBanner from './components/NewContent2025AnalyticsRevolutionBanner';
import AnalyticsContentShowcase2025 from './components/AnalyticsContentShowcase2025';
import NewMultimodalAgents2025Banner from './components/NewMultimodalAgents2025Banner';

// Import new 2026 content promotional components
import NewContent2026SyntheticIntelligenceBanner from './components/NewContent2026SyntheticIntelligenceBanner';
import NewContent2026NeuralInterfaceBanner from './components/NewContent2026NeuralInterfaceBanner';
import NewContent2026UltimateShowcaseBanner from './components/NewContent2026UltimateShowcaseBanner';

// Import new 2026 content promotional components
import NewContent2026UltimateBanner from './components/NewContent2026UltimateBanner';
import AI2026ContentShowcaseBanner from './components/AI2026ContentShowcaseBanner';
import AutonomousAnalytics2025PromoBanner from './components/AutonomousAnalytics2025PromoBanner';
import Link from 'next/link';
import Link from 'next/link';
import NewAutonomousRevenueAgentsPromo from './components/NewAutonomousRevenueAgentsPromo';
export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: ['AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 'enterprise solutions', 'digital transformation'],
};

export default function HomePage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/"
      />
      {/* Promo: Real-Time RAG + Autonomous Ops (New) */}
      <section className="py-8 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Just published: Resilient Agent Architectures</h2>
              <p className="text-gray-600 mt-2">Fault‑tolerant, eval‑gated, and cost‑aware patterns to harden agents.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-resilient-agent-architectures" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Guide</Link>
              <Link href="/content/ai-2026-operational-excellence-handbook" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">OpEx Handbook</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Agent Platform SLOs (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-emerald-100">
            <div>
              <p className="text-sm font-semibold text-emerald-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Agent Platform SLOs — Best Practices</h2>
              <p className="text-gray-600 mt-2">A concise SLO set for safety, quality, reliability, and cost—ready to adopt.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-agent-platform-slos-best-practices" className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700">Read Guide</Link>
              <Link href="/blog/ai-2026-agent-platform-slos-best-practices" className="inline-block border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Best Practices</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Production Evidence Hub (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-emerald-100">
            <div>
              <p className="text-sm font-semibold text-emerald-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Production Evidence Hub — Blueprint</h2>
              <p className="text-gray-600 mt-2">Centralize evals, incidents, approvals, and KPIs to power audit‑ready, gate‑driven operations.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-production-evidence-hub-blueprint" className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700">Read Blueprint</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: September 2025 fresh content */}
      <section className="py-8 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Just published: Safe Rollouts + Evidence‑Led Operations</h2>
              <p className="text-gray-600 mt-2">New playbooks for eval‑gated releases and operating with auditable evidence.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-safe-rollouts-in-production" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Safe Rollouts</Link>
              <Link href="/blog/ai-2026-autonomous-evidence-led-operations" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Evidence‑Led Ops</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Reliable Evals in Production (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Reliable Evals in Production</h2>
              <p className="text-gray-600 mt-2">Gate changes with measurable SLOs and incident‑ready evidence.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-reliable-evals-in-production" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Guide</Link>
              <Link href="/content/ai-2026-evaluation-harness-blueprint" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Harness Blueprint</Link>
            </div>
          </div>
        </div>
      </section>
      {/* What's New dynamic section */}
      <WhatsNew highlightOnly limit={8} />

      {/* New Promo: Frontier Research Agents (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-indigo-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-pink-100">
            <div>
              <p className="text-sm font-semibold text-pink-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Frontier Research Agents</h2>
              <p className="text-gray-600 mt-2">From lab to production with evaluation gates, runtime guardrails, and observability.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-frontier-research-agents" className="inline-block bg-pink-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-pink-700">Read Article</Link>
              <Link href="/content/ai-2026-evaluation-runbook-starter-kit" className="inline-block border border-pink-600 text-pink-700 px-5 py-3 rounded-lg font-semibold hover:bg-pink-50">Eval Runbook</Link>
            </div>
          </div>
        </div>
      </section>
      
      <div className='min-h-screen bg-white'>
        {/* New Content 2025 Ultimate Showcase Banner - FEATURED */}
        <NewContent2025UltimateShowcaseBanner />
        {/* New Multimodal Agents 2025 Banner - NEW */}
        <NewMultimodalAgents2025Banner />
        {/* Promo: Fresh Content */}
        <section className="py-10 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md">
              <div>
                <p className="text-sm font-semibold text-purple-700">Just published</p>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">Explore our newest guides</h2>
>>>>>>> origin/feat/add-blog-content-and-homepage-promo
                <p className="text-gray-600 mt-2">Now featuring GenAI Governance 2026 and Agent Observability 2026.</p>
              </div>
              <div className="flex gap-3">
                <Link href="/content/genai-governance-2026" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">GenAI Governance</Link>
                <Link href="/content/agent-observability-2026" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Agent Observability</Link>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Just published: Secure Agent Routing Strategies</h2>
              <p className="text-gray-600 mt-2">Least‑privilege, tiered trust, and eval‑gated routing for safe autonomy.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-secure-agent-routing-strategies" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Article</Link>
              <Link href="/content/ai-2026-agent-incident-response-playbook" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Related Playbook</Link>
                <Link href="/blog/ai-2025-enterprise-ai-agents-breakthrough" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
        {/* New Content Promo: Autonomous Enterprise Blueprint 2026 */}
        <section className="py-6 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md">
              <div>
                <p className="text-sm font-semibold text-emerald-700">New Blueprint</p>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Autonomous Enterprise Blueprint</h2>
                <p className="text-gray-600 mt-2">A practical blueprint to evolve from automation to truly autonomous, outcome-driven operations across the enterprise.</p>
              </div>
              <Link href="/blog/ai-2026-autonomous-enterprise-blueprint" className="shrink-0 inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-teal-700 mb-2">New Blueprint</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI 2026: Operational Evals Blueprint</h3>
                <p className="text-gray-600 max-w-2xl">An evaluation-first blueprint with metrics, harnesses, and governance to ship reliable AI systems.</p>
              </div>
              <div className="shrink-0">
                <Link href="/content/ai-2026-operational-evals-blueprint" className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700">Read Blueprint</Link>
              </div>
