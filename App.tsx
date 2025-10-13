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
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import FuturisticBackground from "./app/components/FuturisticBackground";
import GlobalErrorBoundary from "./app/components/GlobalErrorBoundary";

// Lazy load pages for better performance
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const AiServicesPage = React.lazy(() => import("./app/ai-services/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const AiPoweredDevopsPage = React.lazy(() => import("./app/ai-powered-devops/page"));
const AiQuantumComputingPage = React.lazy(() => import("./app/ai-quantum-computing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const CommunityPage = React.lazy(() => import("./app/community/page"));
const CompliancePage = React.lazy(() => import("./app/compliance/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const PartnersPage = React.lazy(() => import("./app/partners/page"));

// Zion AI Services
const ZionAiVideoEditorPage = React.lazy(() => import("./app/zion-ai-video-editor/page"));
const ZionAiProjectManagerPage = React.lazy(() => import("./app/zion-ai-project-manager/page"));
const ZionAiEcommercePage = React.lazy(() => import("./app/zion-ai-ecommerce/page"));
const ZionAiCybersecurityProPage = React.lazy(() => import("./app/zion-ai-cybersecurity-pro/page"));
const ZionAiCrmProPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
const ZionAiCustomerInsightsPage = React.lazy(() => import("./app/zion-ai-customer-insights/page"));
const ZionAiInvoiceGeneratorPage = React.lazy(() => import("./app/zion-ai-invoice-generator/page"));
const ZionAiMarketingAutomationProPage = React.lazy(() => import("./app/zion-ai-marketing-automation-pro/page"));
const ZionAiProjectManagerProPage = React.lazy(() => import("./app/zion-ai-project-manager-pro/page"));
const ZionAiVideoGeneratorPage = React.lazy(() => import("./app/zion-ai-video-generator/page"));
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Track page load performance
      const loadTime = performance.now();
      console.log(`Page loaded in ${loadTime}ms`);
      
      // Initialize accessibility features
      if (document.documentElement) {
        document.documentElement.setAttribute('data-theme', 'futuristic');
      }
    }
  }, []);

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <AnalyticsProvider>
          <PerformanceMonitor>
            <WebVitalsTracker>
              <AccessibilityEnhancer>
                <EnhancedAccessibility>
                  <CoreWebVitals>
                    <Router>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                        <FuturisticBackground />
                        <Navigation />
                        <Sidebar />
                        <Breadcrumb />
                        
                        <main className="relative z-10">
                          <Suspense fallback={<LoadingPage />}>
                            <Routes>
                              <Route path="/" element={<HomePage />} />
                              <Route path="/micro-saas" element={<MicroSaasPage />} />
                              <Route path="/services" element={<ServicesPage />} />
                              <Route path="/ai-services" element={<AiServicesPage />} />
                              <Route path="/cloud-services" element={<CloudServicesPage />} />
                              <Route path="/ai-powered-devops" element={<AiPoweredDevopsPage />} />
                              <Route path="/ai-quantum-computing" element={<AiQuantumComputingPage />} />
                              <Route path="/blog" element={<BlogPage />} />
                              <Route path="/case-studies" element={<CaseStudiesPage />} />
                              <Route path="/community" element={<CommunityPage />} />
                              <Route path="/compliance" element={<CompliancePage />} />
                              <Route path="/consultation" element={<ConsultationPage />} />
                              <Route path="/partners" element={<PartnersPage />} />
                              
                              {/* Zion AI Services */}
                              <Route path="/zion-ai-video-editor" element={<ZionAiVideoEditorPage />} />
                              <Route path="/zion-ai-project-manager" element={<ZionAiProjectManagerPage />} />
                              <Route path="/zion-ai-ecommerce" element={<ZionAiEcommercePage />} />
                              <Route path="/zion-ai-cybersecurity-pro" element={<ZionAiCybersecurityProPage />} />
                              <Route path="/zion-ai-crm-pro" element={<ZionAiCrmProPage />} />
                              <Route path="/zion-ai-customer-insights" element={<ZionAiCustomerInsightsPage />} />
                              <Route path="/zion-ai-invoice-generator" element={<ZionAiInvoiceGeneratorPage />} />
                              <Route path="/zion-ai-marketing-automation-pro" element={<ZionAiMarketingAutomationProPage />} />
                              <Route path="/zion-ai-project-manager-pro" element={<ZionAiProjectManagerProPage />} />
                              <Route path="/zion-ai-video-generator" element={<ZionAiVideoGeneratorPage />} />
                              <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                            </Routes>
                          </Suspense>
                        </main>
                        
                        <Footer />
                      </div>
                    </Router>
                  </CoreWebVitals>
                </EnhancedAccessibility>
              </AccessibilityEnhancer>
            </WebVitalsTracker>
          </PerformanceMonitor>
        </AnalyticsProvider>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
};

export default App;