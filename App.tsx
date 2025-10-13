import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import LoadingPage from "./app/components/EnhancedLoading";
import PerformanceEnhancer from "./app/components/PerformanceEnhancer";
import SEOOptimizer from "./app/components/SEOOptimizer";
import EnhancedSEO from "./app/components/EnhancedSEO";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import GlobalErrorBoundary from "./app/components/GlobalErrorBoundary";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import PerformanceMonitor from "./app/components/PerformanceMonitor";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const AIHealthcareDiagnosticsPage = React.lazy(() => import("./app/ai-healthcare-diagnostics/page"));
const AISupplyChainOptimizerPage = React.lazy(() => import("./app/ai-supply-chain-optimizer/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AiAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AiBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AiContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AiCustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
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

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const IotSolutionsPage = React.lazy(() => import("./app/iot-solutions/page"));
const DevopsSolutionsPage = React.lazy(() => import("./app/devops-solutions/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionAiCrmProPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
const ZionAiMarketingAutomationProPage = React.lazy(() => import("./app/zion-ai-marketing-automation-pro/page"));
const ZionAiProjectManagerProPage = React.lazy(() => import("./app/zion-ai-project-manager-pro/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveG5gIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));

// Additional pages
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));
const TeamPage = React.lazy(() => import("./app/team/page"));
const NewsPage = React.lazy(() => import("./app/news/page"));
const PressPage = React.lazy(() => import("./app/press/page"));
const PartnersPage = React.lazy(() => import("./app/partners/page"));

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
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/micro-saas" element={<MicroSaasPage />} />
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
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
                        
                        {/* AI Services Routes */}
                        <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                        <Route path="/ai-automation" element={<AiAutomationPage />} />
                        <Route path="/ai-business-intelligence" element={<AiBusinessIntelligencePage />} />
                        <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                        <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
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
                        
                        {/* IT Services Routes */}
                        <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                        <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                        <Route path="/web-development" element={<WebDevelopmentPage />} />
                        <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                        <Route path="/database-management" element={<DatabaseManagementPage />} />
                        <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                        <Route path="/iot-solutions" element={<IotSolutionsPage />} />
                        <Route path="/devops-solutions" element={<DevopsSolutionsPage />} />
                        
                        {/* Micro SAAS Routes */}
                        <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                        <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                        <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                        <Route path="/zion-ai-crm-pro" element={<ZionAiCrmProPage />} />
                        <Route path="/zion-ai-marketing-automation-pro" element={<ZionAiMarketingAutomationProPage />} />
                        <Route path="/zion-ai-project-manager-pro" element={<ZionAiProjectManagerProPage />} />
                        
                        {/* 5G Solutions Routes */}
                        <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                        <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                        <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                        <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                        <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                        <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                        <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                        <Route path="/5g-iot-solutions" element={<FiveG5gIotSolutionsPage />} />
                        
                        {/* Additional Routes */}
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                        <Route path="/consultation" element={<ConsultationPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/press" element={<PressPage />} />
                        <Route path="/partners" element={<PartnersPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                </FuturisticBackground>
                <PerformanceMonitor />
                <WebVitalsTracker />
                <EnhancedSEO 
                  title="Zion Tech Group - Advanced AI and IT Solutions"
                  description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses."
                  keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
                />
              </div>
              <AnalyticsProvider>
                <div>
                  <PerformanceMonitor />
                  <WebVitalsTracker />
                </div>
              </AnalyticsProvider>
            </Router>
          </AccessibilityEnhancer>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;
