'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Analytics from './components/Analytics';

// Lazy load pages for better performance
const _HomePage = lazy(() => import('./page'));
const _AboutPage = lazy(() => import('./about/page'));
const _ServicesPage = lazy(() => import('./services/page'));
const _ContactPage = lazy(() => import('./contact/page'));
const _TeamPage = lazy(() => import('./team/page'));
const _PrivacyPage = lazy(() => import('./privacy/page'));
const _TermsPage = lazy(() => import('./terms/page'));
const _EnterprisePage = lazy(() => import('./enterprise/page'));
const _ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));
const _CaseStudiesPage = lazy(() => import('./case-studies/page'));

// AI Services Pages
const _AIServicesPage = lazy(() => import('./ai-services/page'));
const _AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const _AIAutomationPage = lazy(() => import('./ai-automation/page'));
const _AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const _AIFintechPage = lazy(() => import('./ai-fintech/page'));
const _AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const _AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const _AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const _AICloudInfrastructurePage = lazy(() => import('./ai-cloud-infrastructure/page'));
const _AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const _AIMobileAppDevelopmentPage = lazy(() => import('./ai-mobile-app-development/page'));
const _AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const _AICustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const _AISalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const _AIDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));

// IT Services Pages
const _ITServicesPage = lazy(() => import('./it-services/page'));
const _MicroSAASPage = lazy(() => import('./micro-saas/page'));
const _ITInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const _CybersecurityPage = lazy(() => import('./cybersecurity/page'));

// Specialized Services Pages
const _QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const _AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const _BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const _BlockchainPage = lazy(() => import('./blockchain/page'));
const _IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const _IoTEdgePage = lazy(() => import('./iot-edge/page'));
const _BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const _RoboticsPage = lazy(() => import('./robotics/page'));

// New Pages
const _CareersPage = lazy(() => import('./careers/page'));
const _NewsPage = lazy(() => import('./news/page'));
const _SupportPage = lazy(() => import('./support/page'));
const _DocsPage = lazy(() => import('./docs/page'));
const _ApiDocsPage = lazy(() => import('./api-docs/page'));
const _StatusPage = lazy(() => import('./status/page'));
const _SystemStatusPage = lazy(() => import('./system-status/page'));
const _CookiesPage = lazy(() => import('./cookies/page'));
const _GDPRPage = lazy(() => import('./gdpr/page'));
const _SecurityPage = lazy(() => import('./security/page'));
const _CompliancePage = lazy(() => import('./compliance/page'));

// Guides Pages
const _GuidesPage = lazy(() => import('./guides/page'));
const _AI2026ImplementationRoadmapPage = lazy(() => import('./guides/ai-2026-implementation-roadmap/page'));
const _AI2027ImplementationRoadmapPage = lazy(() => import('./guides/ai-2027-implementation-roadmap/page'));
const _AutonomousBusinessProcessesImplementationGuide2026Page = lazy(() => import('./guides/autonomous-business-processes-implementation-guide-2026/page'));

// Blog Pages
const _BlogPage = lazy(() => import('./blog/page'));
const _BlogAICostOptimizationBreakthrough2026Page = lazy(() => import('./blog/ai-cost-optimization-breakthrough-2026/page'));
const _BlogAI2025MarchAutonomousEnterpriseOperationsRevolutionPage = lazy(() => import('./blog/ai-2025-march-autonomous-enterprise-operations-revolution/page'));
const _BlogAI2026AutonomousEnterpriseAutomationMegaBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page'));
const _BlogAI2026EnterpriseBreakthroughPage = lazy(() => import('./blog/ai-2026-enterprise-breakthrough/page'));
const _BlogAI20252026MegaTrendsBreakthroughPage = lazy(() => import('./blog/ai-2025-2026-mega-trends-breakthrough/page'));
const _BlogAI2025Sept30OperationalTrustScorecardsV3Page = lazy(() => import('./blog/ai-2025-sept-30-operational-trust-scorecards-v3/page'));
const _BlogAI2026AprilRevolutionaryBreakthroughPage = lazy(() => import('./blog/ai-2026-april-revolutionary-breakthrough/page'));
const _BlogAIEnterpriseTransformationUltimateGuide2025Page = lazy(() => import('./blog/ai-enterprise-transformation-ultimate-guide-2025/page'));
const _BlogAIAutonomousBusinessSystems2026Page = lazy(() => import('./blog/ai-autonomous-business-systems-2026/page'));
const _BlogAI2025JanuaryCuttingEdgeTrendsBreakthroughPage = lazy(() => import('./blog/ai-2025-january-cutting-edge-trends-breakthrough/page'));
const _BlogAI2026FebruaryUltimateConsciousnessBreakthroughPage = lazy(() => import('./blog/ai-2026-february-ultimate-consciousness-breakthrough/page'));
const _BlogAI2026FebruaryMegaBreakthroughRevolutionPage = lazy(() => import('./blog/ai-2026-february-mega-breakthrough-revolution/page'));
const _BlogAI2026ConsensusIntelligenceBreakthroughPage = lazy(() => import('./blog/ai-2026-consensus-intelligence-breakthrough/page'));
const _BlogAI2026AutonomousEnterpriseArchitecturePage = lazy(() => import('./blog/ai-2026-autonomous-enterprise-architecture/page'));
const _BlogAI2026AutonomousBusinessIntelligenceMegaBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page'));
const _BlogAI2026AprilUltimateBreakthroughRevolutionPage = lazy(() => import('./blog/ai-2026-april-ultimate-breakthrough-revolution/page'));
const _BlogAIPoweredAutonomousBusinessProcesses2026Page = lazy(() => import('./blog/ai-powered-autonomous-business-processes-2026/page'));
const _BlogAI2026AdvancedNeuralOptimizationRevolutionPage = lazy(() => import('./blog/ai-2026-advanced-neural-optimization-revolution/page'));
const _BlogAI2026AutonomousBusinessIntelligenceBreakthroughPage = lazy(() => import('./blog/ai-2026-autonomous-business-intelligence-breakthrough/page'));
const _BlogAI2026AdaptiveNeuralArchitecturesBreakthroughPage = lazy(() => import('./blog/ai-2026-adaptive-neural-architectures-breakthrough/page'));
const _BlogAIInnovationLabsProductDevelopment2025Page = lazy(() => import('./blog/ai-innovation-labs-product-development-2025/page'));
const _BlogAI2026HyperconsciousComputingRevolutionPage = lazy(() => import('./blog/ai-2026-hyperconscious-computing-revolution/page'));
const _BlogAIEnterpriseTransformation2025Page = lazy(() => import('./blog/ai-enterprise-transformation-2025/page'));
const _BlogAITrends2026FutureEnterpriseTransformationPage = lazy(() => import('./blog/ai-trends-2026-future-enterprise-transformation/page'));
const _BlogAI2026EnterpriseAutomationRevolutionaryBreakthroughPage = lazy(() => import('./blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page'));
const _BlogAgentReleaseRunbooksV22026Page = lazy(() => import('./blog/agent-release-runbooks-v2-2026/page'));

// Sitemap Pages
const _SitemapPage = lazy(() => import('./sitemap/page'));

// Offline Page
const _OfflinePage = lazy(() => import('./offline/page'));

const App: React.FC = () => {
  useEffect(() => {
    // Initialize analytics and performance monitoring
    if (typeof window !== 'undefined') {
      // Performance monitoring initialization
      console.log('App initialized');
    }
  }, []);

  return (
    <Router>
      <AdvancedErrorBoundary>
        <AccessibilityEnhancer>
          <SEOEnhancer>
            <Analytics>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Navigation />
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<_HomePage />} />
                    <Route path="/about" element={<_AboutPage />} />
                    <Route path="/services" element={<_ServicesPage />} />
                    <Route path="/contact" element={<_ContactPage />} />
                    <Route path="/team" element={<_TeamPage />} />
                    <Route path="/privacy" element={<_PrivacyPage />} />
                    <Route path="/terms" element={<_TermsPage />} />
                    <Route path="/enterprise" element={<_EnterprisePage />} />
                    <Route path="/services-advertising" element={<_ServicesAdvertisingPage />} />
                    <Route path="/case-studies" element={<_CaseStudiesPage />} />

                    {/* AI Services */}
                    <Route path="/ai-services" element={<_AIServicesPage />} />
                    <Route path="/ai-marketing" element={<_AIMarketingPage />} />
                    <Route path="/ai-automation" element={<_AIAutomationPage />} />
                    <Route path="/ai-healthcare" element={<_AIHealthcarePage />} />
                    <Route path="/ai-fintech" element={<_AIFintechPage />} />
                    <Route path="/ai-data-analytics" element={<_AIDataAnalyticsPage />} />
                    <Route path="/ai-cybersecurity" element={<_AICybersecurityPage />} />
                    <Route path="/ai-workflow-automation" element={<_AIWorkflowAutomationPage />} />
                    <Route path="/ai-cloud-infrastructure" element={<_AICloudInfrastructurePage />} />
                    <Route path="/ai-ecommerce-solutions" element={<_AIEcommerceSolutionsPage />} />
                    <Route path="/ai-mobile-app-development" element={<_AIMobileAppDevelopmentPage />} />
                    <Route path="/ai-content-generation" element={<_AIContentGenerationPage />} />
                    <Route path="/ai-customer-support" element={<_AICustomerSupportPage />} />
                    <Route path="/ai-sales-automation" element={<_AISalesAutomationPage />} />
                    <Route path="/ai-data-visualization" element={<_AIDataVisualizationPage />} />

                    {/* IT Services */}
                    <Route path="/it-services" element={<_ITServicesPage />} />
                    <Route path="/micro-saas" element={<_MicroSAASPage />} />
                    <Route path="/it-infrastructure" element={<_ITInfrastructurePage />} />
                    <Route path="/cybersecurity" element={<_CybersecurityPage />} />

                    {/* Specialized Services */}
                    <Route path="/quantum-computing" element={<_QuantumComputingPage />} />
                    <Route path="/autonomous-systems" element={<_AutonomousSystemsPage />} />
                    <Route path="/blockchain-web3" element={<_BlockchainWeb3Page />} />
                    <Route path="/blockchain" element={<_BlockchainPage />} />
                    <Route path="/iot-edge-computing" element={<_IoTEdgeComputingPage />} />
                    <Route path="/iot-edge" element={<_IoTEdgePage />} />
                    <Route path="/business-intelligence" element={<_BusinessIntelligencePage />} />
                    <Route path="/robotics" element={<_RoboticsPage />} />

                    {/* New Pages */}
                    <Route path="/careers" element={<_CareersPage />} />
                    <Route path="/news" element={<_NewsPage />} />
                    <Route path="/support" element={<_SupportPage />} />
                    <Route path="/docs" element={<_DocsPage />} />
                    <Route path="/api-docs" element={<_ApiDocsPage />} />
                    <Route path="/status" element={<_StatusPage />} />
                    <Route path="/system-status" element={<_SystemStatusPage />} />
                    <Route path="/cookies" element={<_CookiesPage />} />
                    <Route path="/gdpr" element={<_GDPRPage />} />
                    <Route path="/security" element={<_SecurityPage />} />
                    <Route path="/compliance" element={<_CompliancePage />} />

                    {/* Guides */}
                    <Route path="/guides" element={<_GuidesPage />} />
                    <Route path="/guides/ai-2026-implementation-roadmap" element={<_AI2026ImplementationRoadmapPage />} />
                    <Route path="/guides/ai-2027-implementation-roadmap" element={<_AI2027ImplementationRoadmapPage />} />
                    <Route path="/guides/autonomous-business-processes-implementation-guide-2026" element={<_AutonomousBusinessProcessesImplementationGuide2026Page />} />

                    {/* Blog */}
                    <Route path="/blog" element={<_BlogPage />} />
                    <Route path="/blog/ai-cost-optimization-breakthrough-2026" element={<_BlogAICostOptimizationBreakthrough2026Page />} />
                    <Route path="/blog/ai-2025-march-autonomous-enterprise-operations-revolution" element={<_BlogAI2025MarchAutonomousEnterpriseOperationsRevolutionPage />} />
                    <Route path="/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough" element={<_BlogAI2026AutonomousEnterpriseAutomationMegaBreakthroughPage />} />
                    <Route path="/blog/ai-2026-enterprise-breakthrough" element={<_BlogAI2026EnterpriseBreakthroughPage />} />
                    <Route path="/blog/ai-2025-2026-mega-trends-breakthrough" element={<_BlogAI20252026MegaTrendsBreakthroughPage />} />
                    <Route path="/blog/ai-2025-sept-30-operational-trust-scorecards-v3" element={<_BlogAI2025Sept30OperationalTrustScorecardsV3Page />} />
                    <Route path="/blog/ai-2026-april-revolutionary-breakthrough" element={<_BlogAI2026AprilRevolutionaryBreakthroughPage />} />
                    <Route path="/blog/ai-enterprise-transformation-ultimate-guide-2025" element={<_BlogAIEnterpriseTransformationUltimateGuide2025Page />} />
                    <Route path="/blog/ai-autonomous-business-systems-2026" element={<_BlogAIAutonomousBusinessSystems2026Page />} />
                    <Route path="/blog/ai-2025-january-cutting-edge-trends-breakthrough" element={<_BlogAI2025JanuaryCuttingEdgeTrendsBreakthroughPage />} />
                    <Route path="/blog/ai-2026-february-ultimate-consciousness-breakthrough" element={<_BlogAI2026FebruaryUltimateConsciousnessBreakthroughPage />} />
                    <Route path="/blog/ai-2026-february-mega-breakthrough-revolution" element={<_BlogAI2026FebruaryMegaBreakthroughRevolutionPage />} />
                    <Route path="/blog/ai-2026-consensus-intelligence-breakthrough" element={<_BlogAI2026ConsensusIntelligenceBreakthroughPage />} />
                    <Route path="/blog/ai-2026-autonomous-enterprise-architecture" element={<_BlogAI2026AutonomousEnterpriseArchitecturePage />} />
                    <Route path="/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough" element={<_BlogAI2026AutonomousBusinessIntelligenceMegaBreakthroughPage />} />
                    <Route path="/blog/ai-2026-april-ultimate-breakthrough-revolution" element={<_BlogAI2026AprilUltimateBreakthroughRevolutionPage />} />
                    <Route path="/blog/ai-powered-autonomous-business-processes-2026" element={<_BlogAIPoweredAutonomousBusinessProcesses2026Page />} />
                    <Route path="/blog/ai-2026-advanced-neural-optimization-revolution" element={<_BlogAI2026AdvancedNeuralOptimizationRevolutionPage />} />
                    <Route path="/blog/ai-2026-autonomous-business-intelligence-breakthrough" element={<_BlogAI2026AutonomousBusinessIntelligenceBreakthroughPage />} />
                    <Route path="/blog/ai-2026-adaptive-neural-architectures-breakthrough" element={<_BlogAI2026AdaptiveNeuralArchitecturesBreakthroughPage />} />
                    <Route path="/blog/ai-innovation-labs-product-development-2025" element={<_BlogAIInnovationLabsProductDevelopment2025Page />} />
                    <Route path="/blog/ai-2026-hyperconscious-computing-revolution" element={<_BlogAI2026HyperconsciousComputingRevolutionPage />} />
                    <Route path="/blog/ai-enterprise-transformation-2025" element={<_BlogAIEnterpriseTransformation2025Page />} />
                    <Route path="/blog/ai-trends-2026-future-enterprise-transformation" element={<_BlogAITrends2026FutureEnterpriseTransformationPage />} />
                    <Route path="/blog/ai-2026-enterprise-automation-revolutionary-breakthrough" element={<_BlogAI2026EnterpriseAutomationRevolutionaryBreakthroughPage />} />
                    <Route path="/blog/agent-release-runbooks-v2-2026" element={<_BlogAgentReleaseRunbooksV22026Page />} />

                    {/* Sitemap */}
                    <Route path="/sitemap" element={<_SitemapPage />} />

                    {/* Offline */}
                    <Route path="/offline" element={<_OfflinePage />} />

                    {/* 404 - Catch all route */}
                    <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                      <div className="text-center">
                        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                        <p className="text-xl text-gray-300 mb-8">Page not found</p>
                        <a href="/" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
                          Go Home
                        </a>
                      </div>
                    </div>} />
                  </Routes>
                </Suspense>
                <Footer />
                <PerformanceDashboard />
                <AdvancedPerformanceMonitor />
              </div>
            </Analytics>
          </SEOEnhancer>
        </AccessibilityEnhancer>
      </AdvancedErrorBoundary>
    </Router>
  );
};

export default App;