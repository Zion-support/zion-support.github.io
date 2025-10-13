import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import FuturisticBackground from "./app/components/FuturisticBackground";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import EnhancedSEO from "./app/components/EnhancedSEO";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// Company Pages
const TeamPage = React.lazy(() => import("./app/team/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const PressPage = React.lazy(() => import("./app/press/page"));
const PartnersPage = React.lazy(() => import("./app/partners/page"));
const InvestorsPage = React.lazy(() => import("./app/investors/page"));
const NewsPage = React.lazy(() => import("./app/news/page"));

// Support Pages
const HelpPage = React.lazy(() => import("./app/help/page"));
const FaqPage = React.lazy(() => import("./app/faq/page"));
const StatusPage = React.lazy(() => import("./app/status/page"));
const DocsPage = React.lazy(() => import("./app/docs/page"));
const ApiDocsPage = React.lazy(() => import("./app/api-docs/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));

// Legal Pages
const PrivacyPolicyPage = React.lazy(() => import("./app/privacy-policy/page"));
const TermsOfServicePage = React.lazy(() => import("./app/terms-of-service/page"));
const GdprPage = React.lazy(() => import("./app/gdpr/page"));
const GdprCompliancePage = React.lazy(() => import("./app/gdpr-compliance/page"));
const SlaPage = React.lazy(() => import("./app/sla/page"));
const CookiePolicyPage = React.lazy(() => import("./app/cookie-policy/page"));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AiAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AiBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AiContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AiCustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AiCustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AiDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AiEmailAutomationPage = React.lazy(() => import("./app/ai-email-automation/page"));
const AiFraudDetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
const AiHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AiMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AiPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AiProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AiRecommendationEnginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AiSalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));
const AiWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));
const AiCybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const IotSolutionsPage = React.lazy(() => import("./app/iot-solutions/page"));
const DevopsSolutionsPage = React.lazy(() => import("./app/devops-solutions/page"));
const MachineLearningPage = React.lazy(() => import("./app/machine-learning/page"));
const QuantumComputingPage = React.lazy(() => import("./app/quantum-computing/page"));
const RoboticsPage = React.lazy(() => import("./app/robotics/page"));

// 5G Solutions
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveG5gIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));

// Micro SAAS
const MicroSaasServicesPage = React.lazy(() => import("./app/micro-saas-services/page"));
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));
const ZionDataSyncPage = React.lazy(() => import("./app/zion-data-sync/page"));
const ZionLeadMagnetPage = React.lazy(() => import("./app/zion-lead-magnet/page"));
const ZionProjectMasterPage = React.lazy(() => import("./app/zion-project-master/page"));
const ZionEmailAutomationPage = React.lazy(() => import("./app/zion-email-automation/page"));
const ZionSocialSchedulerPage = React.lazy(() => import("./app/zion-social-scheduler/page"));
const ZionWorkflowAutomationPage = React.lazy(() => import("./app/zion-workflow-automation/page"));
const ZionInvoiceGeniusPage = React.lazy(() => import("./app/zion-invoice-genius/page"));
const ZionInventorySmartPage = React.lazy(() => import("./app/zion-inventory-smart/page"));
const ZionComplianceManagerPage = React.lazy(() => import("./app/zion-compliance-manager/page"));
const ZionPerformanceMonitorPage = React.lazy(() => import("./app/zion-performance-monitor/page"));

// Additional Pages
const HealthPage = React.lazy(() => import("./app/health/page"));
const SecurityPage = React.lazy(() => import("./app/security/page"));
const CompliancePage = React.lazy(() => import("./app/compliance/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const CybersecurityPage = React.lazy(() => import("./app/cybersecurity/page"));
const CustomDevelopmentPage = React.lazy(() => import("./app/custom-development/page"));
const ItServicesPage = React.lazy(() => import("./app/it-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));

// 404 Page
const NotFoundPage = React.lazy(() => import("./app/not-found/page"));

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = React.useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <AccessibilityEnhancer>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <FuturisticBackground>
                  <Navigation onSidebarToggle={toggleSidebar} />
                  <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                  <Breadcrumb />
                  <main id="main-content" role="main">
                    <Suspense fallback={<LoadingPage />}>
                      <Routes>
                        {/* Main Pages */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/ai-services" element={<AIServicesPage />} />
                        <Route path="/tutorials" element={<TutorialsPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/cookies" element={<CookiesPage />} />
                        <Route path="/sitemap" element={<SitemapPage />} />
                        
                        {/* Company Pages */}
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/press" element={<PressPage />} />
                        <Route path="/partners" element={<PartnersPage />} />
                        <Route path="/investors" element={<InvestorsPage />} />
                        <Route path="/news" element={<NewsPage />} />
                        
                        {/* Support Pages */}
                        <Route path="/help" element={<HelpPage />} />
                        <Route path="/faq" element={<FaqPage />} />
                        <Route path="/status" element={<StatusPage />} />
                        <Route path="/docs" element={<DocsPage />} />
                        <Route path="/api-docs" element={<ApiDocsPage />} />
                        <Route path="/consultation" element={<ConsultationPage />} />
                        
                        {/* Legal Pages */}
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                        <Route path="/gdpr" element={<GdprPage />} />
                        <Route path="/gdpr-compliance" element={<GdprCompliancePage />} />
                        <Route path="/sla" element={<SlaPage />} />
                        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                        
                        {/* AI Services */}
                        <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                        <Route path="/ai-automation" element={<AiAutomationPage />} />
                        <Route path="/ai-business-intelligence" element={<AiBusinessIntelligencePage />} />
                        <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                        <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
                        <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                        <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                        <Route path="/ai-email-automation" element={<AiEmailAutomationPage />} />
                        <Route path="/ai-fraud-detection" element={<AiFraudDetectionPage />} />
                        <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                        <Route path="/ai-marketing" element={<AiMarketingPage />} />
                        <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                        <Route path="/ai-project-management" element={<AiProjectManagementPage />} />
                        <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                        <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                        <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                        <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                        
                        {/* IT Services */}
                        <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                        <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                        <Route path="/web-development" element={<WebDevelopmentPage />} />
                        <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                        <Route path="/database-management" element={<DatabaseManagementPage />} />
                        <Route path="/custom-software" element={<CustomSoftwarePage />} />
                        <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                        <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                        <Route path="/iot-solutions" element={<IotSolutionsPage />} />
                        <Route path="/devops-solutions" element={<DevopsSolutionsPage />} />
                        <Route path="/machine-learning" element={<MachineLearningPage />} />
                        <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                        <Route path="/robotics" element={<RoboticsPage />} />
                        
                        {/* 5G Solutions */}
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                        <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                        <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                        <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                        <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                        <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                        <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                        <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                        <Route path="/5g-iot-solutions" element={<FiveG5gIotSolutionsPage />} />
                        
                        {/* Micro SAAS */}
                        <Route path="/micro-saas" element={<MicroSaasPage />} />
                        <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
                        <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                        <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                        <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                        <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                        <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
                        <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
                        <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
                        <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} />
                        <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
                        <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
                        <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />
                        <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
                        <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage />} />
                        <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />
                        
                        {/* Additional Pages */}
                        <Route path="/health" element={<HealthPage />} />
                        <Route path="/security" element={<SecurityPage />} />
                        <Route path="/compliance" element={<CompliancePage />} />
                        <Route path="/cloud-services" element={<CloudServicesPage />} />
                        <Route path="/cybersecurity" element={<CybersecurityPage />} />
                        <Route path="/custom-development" element={<CustomDevelopmentPage />} />
                        <Route path="/it-services" element={<ItServicesPage />} />
                        
                        {/* 404 Page */}
                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                  <EnhancedAccessibility>
                    <div></div>
                  </EnhancedAccessibility>
                </FuturisticBackground>
                <PerformanceMonitor />
                <EnhancedSEO 
                  title="Zion Tech Group - Advanced AI and IT Solutions"
                  description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses."
                  keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
                />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;