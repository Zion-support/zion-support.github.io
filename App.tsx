import React, { Suspense, useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import "./app/styles/futuristic-advanced.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedSEO from "./app/components/EnhancedSEO";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const PartnersPage = React.lazy(() => import("./app/partners/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));

// AI Services
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AIEcommercePage = React.lazy(() => import("./app/ai-ecommerce-solutions/page"));
const AIHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AIMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AIMobileAppPage = React.lazy(() => import("./app/ai-mobile-app-development/page"));
const AIProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AIQualityAssurancePage = React.lazy(() => import("./app/ai-quality-assurance/page"));
const AIRecommendationPage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AIRoboticsPage = React.lazy(() => import("./app/ai-robotics/page"));
const AISalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));

// 5G Services
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCityPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <AnalyticsProvider>
        <AccessibilityEnhancer>
          <GlobalErrorBoundary>
            <EnhancedErrorBoundary>
              <Router>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  <FuturisticBackground />
                  <EnhancedSEO
                    title="Zion Tech Group - Advanced AI and IT Solutions"
                    description="Leading provider of AI-powered solutions, 5G technology, and comprehensive IT services for modern businesses."
                    keywords="AI solutions, 5G technology, IT services, digital transformation, business automation"
                  />
                  
                  <Navigation onMenuClick={toggleSidebar} />
                  <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                  
                  <main className="relative z-10">
                    <Breadcrumb />
                    <Suspense fallback={<LoadingPage />}>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/consultation" element={<ConsultationPage />} />
                        <Route path="/micro-saas" element={<MicroSaasPage />} />
                        <Route path="/partners" element={<PartnersPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        
                        {/* AI Services */}
                        <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                        <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
                        <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                        <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                        <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                        <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                        <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                        <Route path="/ai-ecommerce-solutions" element={<AIEcommercePage />} />
                        <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                        <Route path="/ai-marketing" element={<AIMarketingPage />} />
                        <Route path="/ai-mobile-app-development" element={<AIMobileAppPage />} />
                        <Route path="/ai-project-management" element={<AIProjectManagementPage />} />
                        <Route path="/ai-quality-assurance" element={<AIQualityAssurancePage />} />
                        <Route path="/ai-recommendation-engine" element={<AIRecommendationPage />} />
                        <Route path="/ai-robotics" element={<AIRoboticsPage />} />
                        <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
                        
                        {/* 5G Services */}
                        <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                        <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                        <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                        <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                        <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                        <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                        <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                        <Route path="/5g-smart-city-solutions" element={<FiveGSmartCityPage />} />
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  
                  <Footer />
                  
                  {/* Performance and Analytics Components */}
                  <PerformanceMonitor />
                  <WebVitalsTracker />
                  <CoreWebVitals />
                  <EnhancedAccessibility />
                </div>
              </Router>
            </EnhancedErrorBoundary>
          </GlobalErrorBoundary>
        </AccessibilityEnhancer>
      </AnalyticsProvider>
    </HelmetProvider>
  );
}

export default App;