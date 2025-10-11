'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/EnhancedSEOHead';
import SkipLink from './app/components/EnhancedSkipLink';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/EnhancedAnalytics';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import ServiceWorker from './app/components/ServiceWorker';
import EnhancedErrorBoundary from './app/components/EnhancedErrorBoundary';
import FuturisticBackground from './app/components/FuturisticBackground';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));

const AivideoanalysisPage = React.lazy(() => import('./app/ai-video-analysis/page'));
const AispeechsynthesisPage = React.lazy(() => import('./app/ai-speech-synthesis/page'));
const AisentimentanalysisPage = React.lazy(() => import('./app/ai-sentiment-analysis/page'));
const AichatbotenterprisePage = React.lazy(() => import('./app/ai-chatbot-enterprise/page'));
const AicontentmoderationPage = React.lazy(() => import('./app/ai-content-moderation/page'));
const AipredictivemodelingPage = React.lazy(() => import('./app/ai-predictive-modeling/page'));
const AidocumentintelligencePage = React.lazy(() => import('./app/ai-document-intelligence/page'));
const AiconversationanalyticsPage = React.lazy(() => import('./app/ai-conversation-analytics/page'));
const AisupplychainaiPage = React.lazy(() => import('./app/ai-supply-chain-ai/page'));
const AihealthcarediagnosticsPage = React.lazy(() => import('./app/ai-healthcare-diagnostics/page'));
const AifinancialforecastingPage = React.lazy(() => import('./app/ai-financial-forecasting/page'));
const AiiotanalyticsPage = React.lazy(() => import('./app/ai-iot-analytics/page'));
const AiconversationalaiPage = React.lazy(() => import('./app/ai-conversational-ai/page'));
const AiautomatedtestingPage = React.lazy(() => import('./app/ai-automated-testing/page'));
const AiknowledgemanagementPage = React.lazy(() => import('./app/ai-knowledge-management/page'));
const AicustomerchurnPage = React.lazy(() => import('./app/ai-customer-churn/page'));
const AiautomatedreportingPage = React.lazy(() => import('./app/ai-automated-reporting/page'));
const AicontentgenerationproPage = React.lazy(() => import('./app/ai-content-generation-pro/page'));
const ItsecurityservicesPage = React.lazy(() => import('./app/it-security-services/page'));
const ItprojectmanagementPage = React.lazy(() => import('./app/it-project-management/page'));
const cloudnativedevelopmentPage = React.lazy(() => import('./app/cloud-native-development/page'));
const AiintegrationservicesPage = React.lazy(() => import('./app/ai-integration-services/page'));
const blockchaindevelopmentPage = React.lazy(() => import('./app/blockchain-development/page'));
const iotdevelopmentPage = React.lazy(() => import('./app/iot-development/page'));
const ecommercedevelopmentPage = React.lazy(() => import('./app/e-commerce-development/page'));
const apidevelopmentadvancedPage = React.lazy(() => import('./app/api-development-advanced/page'));
const dataengineeringPage = React.lazy(() => import('./app/data-engineering/page'));
const cybersecurityadvancedPage = React.lazy(() => import('./app/cybersecurity-advanced/page'));
const cloudmigrationadvancedPage = React.lazy(() => import('./app/cloud-migration-advanced/page'));
const devopsadvancedPage = React.lazy(() => import('./app/devops-advanced/page'));
const machinelearningopsPage = React.lazy(() => import('./app/machine-learning-ops/page'));
const enterpriseintegrationPage = React.lazy(() => import('./app/enterprise-integration/page'));
const disasterrecoveryadvancedPage = React.lazy(() => import('./app/disaster-recovery-advanced/page'));
const complianceautomationPage = React.lazy(() => import('./app/compliance-automation/page'));
const cloudcostoptimizationPage = React.lazy(() => import('./app/cloud-cost-optimization/page'));
const securityautomationPage = React.lazy(() => import('./app/security-automation/page'));
const datavisualizationPage = React.lazy(() => import('./app/data-visualization/page'));
const workflowautomationPage = React.lazy(() => import('./app/workflow-automation/page'));
const cloudnativesecurityPage = React.lazy(() => import('./app/cloud-native-security/page'));
const ZionanalyticsproPage = React.lazy(() => import('./app/zion-analytics-pro/page'));
const ZionchataiPage = React.lazy(() => import('./app/zion-chat-ai/page'));
const ZionsecurityshieldPage = React.lazy(() => import('./app/zion-security-shield/page'));
const ZioncloudvaultPage = React.lazy(() => import('./app/zion-cloud-vault/page'));
const ZioncontentstudioPage = React.lazy(() => import('./app/zion-content-studio/page'));
const ZioncrmintelligencePage = React.lazy(() => import('./app/zion-crm-intelligence/page'));
const ZiondatasyncPage = React.lazy(() => import('./app/zion-data-sync/page'));
const ZionleadmagnetPage = React.lazy(() => import('./app/zion-lead-magnet/page'));
const ZionprojectmasterPage = React.lazy(() => import('./app/zion-project-master/page'));
const ZionemailautomationPage = React.lazy(() => import('./app/zion-email-automation/page'));
const ZioninventorysmartPage = React.lazy(() => import('./app/zion-inventory-smart/page'));
const ZioninvoicegeniusPage = React.lazy(() => import('./app/zion-invoice-genius/page'));
const ZionworkflowautomationPage = React.lazy(() => import('./app/zion-workflow-automation/page'));
const ZionperformancemonitorPage = React.lazy(() => import('./app/zion-performance-monitor/page'));
const ZioncompliancemanagerPage = React.lazy(() => import('./app/zion-compliance-manager/page'));
const ZionsocialschedulerPage = React.lazy(() => import('./app/zion-social-scheduler/page'));
const ZionaivideoeditorPage = React.lazy(() => import('./app/zion-ai-video-editor/page'));
const ZionaitranslatorproPage = React.lazy(() => import('./app/zion-ai-translator-pro/page'));
const ZionaicodereviewerPage = React.lazy(() => import('./app/zion-ai-code-reviewer/page'));
const ZioncustomerinsightsPage = React.lazy(() => import('./app/zion-customer-insights/page'));
const ZionaiemailassistantPage = React.lazy(() => import('./app/zion-ai-email-assistant/page'));
const ZionaimeetingassistantPage = React.lazy(() => import('./app/zion-ai-meeting-assistant/page'));
const ZionaiseooptimizerPage = React.lazy(() => import('./app/zion-ai-seo-optimizer/page'));
const ZionaidatacleanerPage = React.lazy(() => import('./app/zion-ai-data-cleaner/page'));
const ZionaicontractanalyzerPage = React.lazy(() => import('./app/zion-ai-contract-analyzer/page'));
const ZionaisurveybuilderPage = React.lazy(() => import('./app/zion-ai-survey-builder/page'));
const ZionaiaccountingassistantPage = React.lazy(() => import('./app/zion-ai-accounting-assistant/page'));
const ZionairecruitmentproPage = React.lazy(() => import('./app/zion-ai-recruitment-pro/page'));
const ZionaicontentmoderationPage = React.lazy(() => import('./app/zion-ai-content-moderation/page'));
const ZionaipredictivemaintenancePage = React.lazy(() => import('./app/zion-ai-predictive-maintenance/page'));
const ZionaienergymanagerPage = React.lazy(() => import('./app/zion-ai-energy-manager/page'));
const ZionaisupplychainoptimizerPage = React.lazy(() => import('./app/zion-ai-supply-chain-optimizer/page'));
const ZionaifrauddetectorPage = React.lazy(() => import('./app/zion-ai-fraud-detector/page'));
const ZionaicustomerserviceproPage = React.lazy(() => import('./app/zion-ai-customer-service-pro/page'));
const ZionaimarketingautomationPage = React.lazy(() => import('./app/zion-ai-marketing-automation/page'));
const ZionaidocumentaiPage = React.lazy(() => import('./app/zion-ai-document-ai/page'));
const iotintegrationPage = React.lazy(() => import('./app/iot-integration/page'));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'));
const CybersecuritySolutionsPage = React.lazy(() => import('./app/cybersecurity-solutions/page'));
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'));
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'));

// Company Pages
const TeamPage = React.lazy(() => import('./app/team/page'));

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <React.Fragment>{children}</React.Fragment>
};

// Main App Component
const App: React.FC = () => {
  return (
    <EnhancedErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <SkipLink />
        <ServiceWorker />
        <Router>
          <AppWithPerformanceMonitoring>
            <AnalyticsProvider>
              <PerformanceOptimizer>
                <EnhancedAccessibility>
                  <AccessibilityEnhancer>
                    <PerformanceMonitor />
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
                      <FuturisticBackground />
                      <Navigation />
                      <Breadcrumb />
                      <main id="main-content" className="flex-1" tabIndex={-1}>
                        <Suspense fallback={<PageLoader />}>
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/ai-services" element={<AiServicesPage />} />
                            <Route path="/it-services" element={<ItServicesPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/tutorials" element={<TutorialsPage />} />
                            <Route path="/consultation" element={<ConsultationPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/cookies" element={<CookiesPage />} />
                            <Route path="/sitemap" element={<SitemapPage />} />
                            
                            {/* AI Service Pages */}
                            <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                            <Route path="/ai-automation" element={<AiAutomationPage />} />
                            <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                            <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                            
                            {/* IT Service Pages */}
                            <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                            <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                            <Route path="/web-development" element={<WebDevelopmentPage />} />
                            <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                            
                            {/* Company Pages */}
                            <Route path="/team" element={<TeamPage />} />

                                                        <Route path="/ai-video-analysis" element={<AivideoanalysisPage />} />
                                                        <Route path="/ai-speech-synthesis" element={<AispeechsynthesisPage />} />
                                                        <Route path="/ai-sentiment-analysis" element={<AisentimentanalysisPage />} />
                                                        <Route path="/ai-chatbot-enterprise" element={<AichatbotenterprisePage />} />
                                                        <Route path="/ai-content-moderation" element={<AicontentmoderationPage />} />
                                                        <Route path="/ai-predictive-modeling" element={<AipredictivemodelingPage />} />
                                                        <Route path="/ai-document-intelligence" element={<AidocumentintelligencePage />} />
                                                        <Route path="/ai-conversation-analytics" element={<AiconversationanalyticsPage />} />
                                                        <Route path="/ai-supply-chain-ai" element={<AisupplychainaiPage />} />
                                                        <Route path="/ai-healthcare-diagnostics" element={<AihealthcarediagnosticsPage />} />
                                                        <Route path="/ai-financial-forecasting" element={<AifinancialforecastingPage />} />
                                                        <Route path="/ai-iot-analytics" element={<AiiotanalyticsPage />} />
                                                        <Route path="/ai-conversational-ai" element={<AiconversationalaiPage />} />
                                                        <Route path="/ai-automated-testing" element={<AiautomatedtestingPage />} />
                                                        <Route path="/ai-knowledge-management" element={<AiknowledgemanagementPage />} />
                                                        <Route path="/ai-customer-churn" element={<AicustomerchurnPage />} />
                                                        <Route path="/ai-automated-reporting" element={<AiautomatedreportingPage />} />
                                                        <Route path="/ai-content-generation-pro" element={<AicontentgenerationproPage />} />
                                                        <Route path="/it-security-services" element={<ItsecurityservicesPage />} />
                                                        <Route path="/it-project-management" element={<ItprojectmanagementPage />} />
                                                        <Route path="/cloud-native-development" element={<cloudnativedevelopmentPage />} />
                                                        <Route path="/ai-integration-services" element={<AiintegrationservicesPage />} />
                                                        <Route path="/blockchain-development" element={<blockchaindevelopmentPage />} />
                                                        <Route path="/iot-development" element={<iotdevelopmentPage />} />
                                                        <Route path="/e-commerce-development" element={<ecommercedevelopmentPage />} />
                                                        <Route path="/api-development-advanced" element={<apidevelopmentadvancedPage />} />
                                                        <Route path="/data-engineering" element={<dataengineeringPage />} />
                                                        <Route path="/cybersecurity-advanced" element={<cybersecurityadvancedPage />} />
                                                        <Route path="/cloud-migration-advanced" element={<cloudmigrationadvancedPage />} />
                                                        <Route path="/devops-advanced" element={<devopsadvancedPage />} />
                                                        <Route path="/machine-learning-ops" element={<machinelearningopsPage />} />
                                                        <Route path="/enterprise-integration" element={<enterpriseintegrationPage />} />
                                                        <Route path="/disaster-recovery-advanced" element={<disasterrecoveryadvancedPage />} />
                                                        <Route path="/compliance-automation" element={<complianceautomationPage />} />
                                                        <Route path="/cloud-cost-optimization" element={<cloudcostoptimizationPage />} />
                                                        <Route path="/security-automation" element={<securityautomationPage />} />
                                                        <Route path="/data-visualization" element={<datavisualizationPage />} />
                                                        <Route path="/workflow-automation" element={<workflowautomationPage />} />
                                                        <Route path="/cloud-native-security" element={<cloudnativesecurityPage />} />
                                                        <Route path="/zion-analytics-pro" element={<ZionanalyticsproPage />} />
                                                        <Route path="/zion-chat-ai" element={<ZionchataiPage />} />
                                                        <Route path="/zion-security-shield" element={<ZionsecurityshieldPage />} />
                                                        <Route path="/zion-cloud-vault" element={<ZioncloudvaultPage />} />
                                                        <Route path="/zion-content-studio" element={<ZioncontentstudioPage />} />
                                                        <Route path="/zion-crm-intelligence" element={<ZioncrmintelligencePage />} />
                                                        <Route path="/zion-data-sync" element={<ZiondatasyncPage />} />
                                                        <Route path="/zion-lead-magnet" element={<ZionleadmagnetPage />} />
                                                        <Route path="/zion-project-master" element={<ZionprojectmasterPage />} />
                                                        <Route path="/zion-email-automation" element={<ZionemailautomationPage />} />
                                                        <Route path="/zion-inventory-smart" element={<ZioninventorysmartPage />} />
                                                        <Route path="/zion-invoice-genius" element={<ZioninvoicegeniusPage />} />
                                                        <Route path="/zion-workflow-automation" element={<ZionworkflowautomationPage />} />
                                                        <Route path="/zion-performance-monitor" element={<ZionperformancemonitorPage />} />
                                                        <Route path="/zion-compliance-manager" element={<ZioncompliancemanagerPage />} />
                                                        <Route path="/zion-social-scheduler" element={<ZionsocialschedulerPage />} />
                                                        <Route path="/zion-ai-video-editor" element={<ZionaivideoeditorPage />} />
                                                        <Route path="/zion-ai-translator-pro" element={<ZionaitranslatorproPage />} />
                                                        <Route path="/zion-ai-code-reviewer" element={<ZionaicodereviewerPage />} />
                                                        <Route path="/zion-customer-insights" element={<ZioncustomerinsightsPage />} />
                                                        <Route path="/zion-ai-email-assistant" element={<ZionaiemailassistantPage />} />
                                                        <Route path="/zion-ai-meeting-assistant" element={<ZionaimeetingassistantPage />} />
                                                        <Route path="/zion-ai-seo-optimizer" element={<ZionaiseooptimizerPage />} />
                                                        <Route path="/zion-ai-data-cleaner" element={<ZionaidatacleanerPage />} />
                                                        <Route path="/zion-ai-contract-analyzer" element={<ZionaicontractanalyzerPage />} />
                                                        <Route path="/zion-ai-survey-builder" element={<ZionaisurveybuilderPage />} />
                                                        <Route path="/zion-ai-accounting-assistant" element={<ZionaiaccountingassistantPage />} />
                                                        <Route path="/zion-ai-recruitment-pro" element={<ZionairecruitmentproPage />} />
                                                        <Route path="/zion-ai-content-moderation" element={<ZionaicontentmoderationPage />} />
                                                        <Route path="/zion-ai-predictive-maintenance" element={<ZionaipredictivemaintenancePage />} />
                                                        <Route path="/zion-ai-energy-manager" element={<ZionaienergymanagerPage />} />
                                                        <Route path="/zion-ai-supply-chain-optimizer" element={<ZionaisupplychainoptimizerPage />} />
                                                        <Route path="/zion-ai-fraud-detector" element={<ZionaifrauddetectorPage />} />
                                                        <Route path="/zion-ai-customer-service-pro" element={<ZionaicustomerserviceproPage />} />
                                                        <Route path="/zion-ai-marketing-automation" element={<ZionaimarketingautomationPage />} />
                                                        <Route path="/zion-ai-document-ai" element={<ZionaidocumentaiPage />} />
                                                        <Route path="/iot-integration" element={<iotintegrationPage />} />
                          </Routes>
                        </Suspense>
                      </main>
                      <Footer />
                    </div>
                  </AccessibilityEnhancer>
                </EnhancedAccessibility>
              </PerformanceOptimizer>
            </AnalyticsProvider>
          </AppWithPerformanceMonitoring>
        </Router>
      </HelmetProvider>
    </EnhancedErrorBoundary>
  );
};

App.displayName = 'App';
export default App;
