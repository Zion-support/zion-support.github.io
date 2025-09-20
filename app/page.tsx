import Link from 'next/link'
import { Suspense; lazy } from 'react',
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import SEO from './components/SEO';
import WhatsNew from './components/WhatsNew';

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
import UltimateContentShowcase2025 from './components/UltimateContentShowcase2025';

// Import new promotional components
import NewContent2025UltimateBanner from './components/NewContent2025UltimateBanner';
import UltimateContentShowcase2026 from './components/UltimateContentShowcase2026';
import UltimatePromotionBanner2026 from './components/UltimatePromotionBanner2026';

// Import additional promotional components
import AI2025BreakthroughBanner from './components/AI2025BreakthroughBanner';
import LatestContentShowcase2025 from './components/LatestContentShowcase2025';
import NewContent2025PromotionBanner from './components/NewContent2025PromotionBanner';
import RevolutionaryAIContentBanner from './components/RevolutionaryAIContentBanner';

// Import new AI 2026 promotional components
import AI2026AutonomousSystemsBanner from './components/AI2026AutonomousSystemsBanner';
import AI2026QuantumRevolutionBanner from './components/AI2026QuantumRevolutionBanner';
import AI2026UltimateShowcaseBanner from './components/AI2026UltimateShowcaseBanner';
import QuantumAI2026BreakthroughBanner from './components/QuantumAI2026BreakthroughBanner';
import QuantumAIContentShowcase2026 from './components/QuantumAIContentShowcase2026';

// Import new promotional components
import NewContent2026UltimateShowcase from './components/NewContent2026UltimateShowcase';

// Import new 2025 quantum AI promotional components

// Import new 2026 ultimate promotional components
import AI2026QuantumRevolutionUltimateBanner from './components/AI2026QuantumRevolutionUltimateBanner';
import RevolutionaryAIContent2026Banner from './components/RevolutionaryAIContent2026Banner';

// Import new revolutionary components
import AdvancedAI2026Dashboard from './components/AdvancedAI2026Dashboard';
import AdvancedPerformanceOptimizer2026 from './components/AdvancedPerformanceOptimizer2026';
import QuantumConsciousnessShowcase2026 from './components/QuantumConsciousnessShowcase2026';
import RevolutionaryTech2026Showcase from './components/RevolutionaryTech2026Showcase';

// Import new 2025 advanced automation promotional components
import AdvancedAutomationContentShowcase2025 from './components/AdvancedAutomationContentShowcase2025';
import NewContent2025AdvancedAutomationBanner from './components/NewContent2025AdvancedAutomationBanner';

// Import new 2025 analytics promotional components
import AnalyticsContentShowcase2025 from './components/AnalyticsContentShowcase2025';
import NewContent2025AnalyticsRevolutionBanner from './components/NewContent2025AnalyticsRevolutionBanner';
import NewMultimodalAgents2025Banner from './components/NewMultimodalAgents2025Banner';
                <p className="text-gray-600 mt-2">Now featuring Evaluations Cookbook, Reliability Release Checklists, and Evals Maturity Model 2026.</p>
              </div>
              <div className="flex gap-3">
                <Link href="/content/ai-2026-eval-cookbook" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Evals Cookbook</Link>
                <Link href="/content/ai-2026-reliability-checklists" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Reliability Checklists</Link>
                <Link href="/content/ai-2026-evals-maturity-model" className="hidden md:inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Evals Maturity</Link>
              </div>
            </div>
          </div>
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <div className="text-sm font-semibold text-purple-700 mb-2">Evaluations</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Eval Gates at Scale</h3>
              <p className="text-gray-600 mb-4">Ship faster with policy‑gated scenario suites and automated rollbacks.</p>
              <Link href="/blog/ai-2026-continuous-eval-gates-at-scale" className="text-purple-600 font-semibold hover:text-purple-800">Read →</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New: Fresh blog highlights (Sept 16, 2025) */}
      <section className="py-8 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 border border-emerald-100">
              <div className="text-sm font-semibold text-emerald-700 mb-2">New on the blog</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Foundational Model Routing Patterns</h3>
              <p className="text-gray-600 mb-4">Balance cost, quality, and latency with policy‑gated routing.</p>
              <Link href="/blog/ai-2026-foundational-model-routing-patterns" className="text-emerald-700 font-semibold hover:text-emerald-900">Read →</Link>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border border-emerald-100">
              <div className="text-sm font-semibold text-emerald-700 mb-2">New on the blog</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Causal Evaluation Blueprint</h3>
              <p className="text-gray-600 mb-4">Gate behavior with counterfactuals, interventions, and scorecards.</p>
              <Link href="/blog/ai-2026-causal-evaluation-blueprint" className="text-emerald-700 font-semibold hover:text-emerald-900">Read →</Link>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border border-emerald-100">
              <div className="text-sm font-semibold text-emerald-700 mb-2">New on the blog</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agent Postmortems: Lessons Learned</h3>
              <p className="text-gray-600 mb-4">From incidents to policies, evals, and runbooks that stick.</p>
              <Link href="/blog/ai-2026-agent-postmortems-lessons-learned" className="text-emerald-700 font-semibold hover:text-emerald-900">Read →</Link>
            </div>
        
        {/* New Content 2026 Ultimate Banner - NEW FEATURED */}
        <NewContent2026UltimateBanner />
        
        {/* AI 2026 Breakthrough Showcase - NEW FEATURED */}
        <AI2026BreakthroughShowcase />
        {/* New Revolutionary AI 2026 Banner - FEATURED */}
        <RevolutionaryAI2026Banner />

        {/* New Content 2026 Promotion Banner - FEATURED */}
        <NewContent2026PromotionBanner />
        {/* New Revolutionary Components */}
        <AdvancedPerformanceOptimizer2026 />
        <RevolutionaryTech2026Showcase />
        <AdvancedAI2026Dashboard />
        <QuantumConsciousnessShowcase2026 />

}
