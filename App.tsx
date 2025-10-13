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

// Additional missing pages
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const ITServicesPage = React.lazy(() => import("./app/it-services/page"));
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const PressPage = React.lazy(() => import("./app/press/page"));
const PartnersPage = React.lazy(() => import("./app/partners/page"));

// AI Services pages
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));

// 5G Solutions pages
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));

// Micro SAAS pages
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));
const ZionDataSyncPage = React.lazy(() => import("./app/zion-data-sync/page"));
const ZionProjectMasterPage = React.lazy(() => import("./app/zion-project-master/page"));

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <FuturisticBackground>
                <Navigation onSidebarToggle={toggleSidebar} />
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
                      
                      {/* Additional missing pages */}
                      <Route path="/consultation" element={<ConsultationPage />} />
                      <Route path="/careers" element={<CareersPage />} />
                      <Route path="/case-studies" element={<CaseStudiesPage />} />
                      <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                      <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                      <Route path="/web-development" element={<WebDevelopmentPage />} />
                      <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                      <Route path="/database-management" element={<DatabaseManagementPage />} />
                      <Route path="/custom-software" element={<CustomSoftwarePage />} />
                      <Route path="/it-services" element={<ITServicesPage />} />
                      <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                      <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                      <Route path="/press" element={<PressPage />} />
                      <Route path="/partners" element={<PartnersPage />} />
                      
                      {/* AI Services routes */}
                      <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                      <Route path="/ai-automation" element={<AIAutomationPage />} />
                      <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                      <Route path="/ai-customer-service" element={<AICustomerServicePage />} />
                      <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                      
                      {/* 5G Solutions routes */}
                      <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                      <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                      <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                      <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                      <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                      <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                      <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                      
                      {/* Micro SAAS routes */}
                      <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                      <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                      <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                      <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                      <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
                      <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </FuturisticBackground>
            </div>
          </Router>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;
