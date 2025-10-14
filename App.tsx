import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/EnhancedLoadingStates";
import AdvancedPerformanceEnhancer from "./app/components/AdvancedPerformanceEnhancer";
import AdvancedPerformanceOptimizer from "./app/components/AdvancedPerformanceOptimizer";
import EnhancedSEOOptimizer from "./app/components/EnhancedSEOOptimizer";
import EnhancedAccessibilityManager from "./app/components/EnhancedAccessibilityManager";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import FuturisticBackground from "./app/components/FuturisticBackground";

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

// Additional service pages;
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const ItServicesPage = React.lazy(() => import("./app/it-services/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecurityPage = React.lazy(() => import("./app/security/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const CustomDevelopmentPage = React.lazy(() => import("./app/custom-software/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));

// AI Service pages;
const AiAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AiAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AiContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AiCustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AiMarketingAutomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AiCybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));

// New AI Services;
const AiQuantumComputingPage = React.lazy(() => import("./app/ai-quantum-computing/page"));
const AiBlockchainSolutionsPage = React.lazy(() => import("./app/ai-blockchain-solutions/page"));
const AiPoweredDevOpsPage = React.lazy(() => import("./app/ai-powered-devops/page"));

// Micro SAAS pages;
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));

// New Micro SAAS Services;
const ZionAiVideoGeneratorPage = React.lazy(() => import("./app/zion-ai-video-generator/page"));
const ZionAiCustomerInsightsPage = React.lazy(() => import("./app/zion-ai-customer-insights/page"));

// Additional pages;
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));

// Main App Component;
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <AccessibilityEnhancer>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <FuturisticBackground />
                <Navigation onSidebarToggle={handleSidebarToggle} />
                <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                <Breadcrumb />
                <main id="main-content" role="main">
                  <Suspense fallback={<LoadingPage />}>
                    <Routes>
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
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                        <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                        <Route path="/consultation" element={<ConsultationPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        
                        {/* Service Pages */}
                        <Route path="/micro-saas" element={<MicroSaasPage />} />
                        <Route path="/it-services" element={<ItServicesPage />} />
                        <Route path="/cloud-services" element={<CloudServicesPage />} />
                        <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                        <Route path="/cybersecurity" element={<CybersecurityPage />} />
                        <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                        <Route path="/custom-development" element={<CustomDevelopmentPage />} />
                        <Route path="/web-development" element={<WebDevelopmentPage />} />
                        <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                        <Route path="/database-management" element={<DatabaseManagementPage />} />
                        
                        {/* 5G Solutions */}
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                        <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                        <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                        <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
                        <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                        <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                        <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                        
                        {/* AI Services */}
                        <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                        <Route path="/ai-automation" element={<AiAutomationPage />} />
                        <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                        <Route path="/ai-customer-support" element={<AiCustomerServicePage />} />
                        <Route path="/ai-marketing-automation" element={<AiMarketingAutomationPage />} />
                        <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                        
                        {/* New AI Services */}
                        <Route path="/ai-quantum-computing" element={<AiQuantumComputingPage />} />
                        <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} />
                        <Route path="/ai-powered-devops" element={<AiPoweredDevOpsPage />} />
                        
                        {/* Micro SAAS */}
                        <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                        <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                        <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                        <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                        
                        {/* New Micro SAAS Services */}
                        <Route path="/zion-ai-video-generator" element={<ZionAiVideoGeneratorPage />} />
                        <Route path="/zion-ai-customer-insights" element={<ZionAiCustomerInsightsPage />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
                <AdvancedPerformanceOptimizer
                  enableImageOptimization={true}
                  enablePreloading={true}
                  enableCaching={true}
                  enableCompression={true} />
                <AdvancedPerformanceEnhancer
                  enableImageOptimization={true}
                  enablePreloading={true}
                  enableCaching={true}
                  enableCompression={true} />
                <EnhancedAccessibilityManager
                  enableKeyboardNavigation={true}
                  enableScreenReader={true}
                  enableHighContrast={true}
                  enableFocusManagement={true}
                  enableVoiceNavigation={true}
                  enableReducedMotion={true} />
                <EnhancedAccessibility />
                <AnalyticsProvider>
                  <PerformanceMonitor />
                  <WebVitalsTracker />
                  <EnhancedSEOOptimizer />
                </AnalyticsProvider>
              </div>
            </Router>
          </AccessibilityEnhancer>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;
