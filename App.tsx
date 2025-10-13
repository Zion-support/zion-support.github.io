"use client";
import React, { Suspense, useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route , HelmetProvider  } from "react-router-dom";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import ErrorBoundary from "./app/components/ErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import PerformanceOptimizer from "./app/components/EnhancedPerformanceOptimizer";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import { AnalyticsProvider } from "./app/components/EnhancedAnalytics";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import FuturisticBackground from "./app/components/FuturisticBackground";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import SEOOptimizer from "./app/components/SEOOptimizer";
import ErrorHandler from "./app/components/ErrorHandler";
import ServiceWorker from "./app/components/ServiceWorker";
import SecurityHeaders from "./app/components/SecurityHeaders";
// Lazy load pages for better performance;
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const AISolutionsPage = React.lazy(() => import("./app/ai-solutions/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const CybersecurityPage = React.lazy(() => import("./app/cybersecurity/page"));
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const BlockchainPage = React.lazy(() => import("./app/blockchain/page"));
const IoTPage = React.lazy(() => import("./app/iot/page"));
const MachineLearningPage = React.lazy(() => import("./app/machine-learning/page"));
const DevOpsPage = React.lazy(() => import("./app/devops/page"));
const EnterprisePage = React.lazy(() => import("./app/enterprise/page"));
const InnovationLabsPage = React.lazy(() => import("./app/innovation-labs/page"));
const InvestorsPage = React.lazy(() => import("./app/investors/page"));
const CommunityPage = React.lazy(() => import("./app/community/page"));
const FAQPage = React.lazy(() => import("./app/faq/page"));
const HelpPage = React.lazy(() => import("./app/help/page"));
const DocsPage = React.lazy(() => import("./app/docs/page"));
const HealthPage = React.lazy(() => import("./app/health/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
// Performance monitoring component;
const PerformanceWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  if (!isLoaded) {
    return <LoadingPage />;
  }
  return (
    <React.Fragment /><PerformanceMonitor />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <EnhancedAccessibility />
      <SEOOptimizer />
      <ErrorHandler />
      <ServiceWorker />
      <SecurityHeaders />
      {children}
    </React.Fragment>
  );
};
// Main App component;
const App: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <LoadingPage />;
  }
  return (
    <HelmetProvider /><GlobalErrorBoundary /><EnhancedErrorBoundary /><AnalyticsProvider /><Router /><PerformanceWrapper /><FuturisticBackground />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /><Navigation />
                  <Breadcrumb />
                  <main className="relative z-10" /><Suspense fallback={<LoadingPage />}>
                      <Routes /><Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/ai-solutions" element={<AISolutionsPage />} />
                        <Route path="/cloud-services" element={<CloudServicesPage />} />
                        <Route path="/cybersecurity" element={<CybersecurityPage />} />
                        <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                        <Route path="/it-consulting" element={<ITConsultingPage />} />
                        <Route path="/blockchain" element={<BlockchainPage />} />
                        <Route path="/iot" element={<IoTPage />} />
                        <Route path="/machine-learning" element={<MachineLearningPage />} />
                        <Route path="/devops" element={<DevOpsPage />} />
                        <Route path="/enterprise" element={<EnterprisePage />} />
                        <Route path="/innovation-labs" element={<InnovationLabsPage />} />
                        <Route path="/investors" element={<InvestorsPage />} />
                        <Route path="/community" element={<CommunityPage />} />
                        <Route path="/faq" element={<FAQPage />} />
                        <Route path="/help" element={<HelpPage />} />
                        <Route path="/docs" element={<DocsPage />} />
                        <Route path="/health" element={<HealthPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/consultation" element={<ConsultationPage />} />
                        {/* AI Services Routes */}
                        <Route path="/ai-services/*" element={<AISolutionsPage />} />
                        {/* IT Services Routes */}
                        <Route path="/it-services/*" element={<ITConsultingPage />} />
                        {/* Micro SaaS Services Routes */}
                        <Route path="/micro-saas-services/*" element={<AISolutionsPage />} />
                        {/* Catch all route for 404 */}
                        <Route path="*" element={<div className="min-h-screen flex items-center justify-center" /><div className="text-center" /><h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                            <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                            <a href="/" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                              Go Home</a>
                            </a>
                          </div>
                        </div>} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                </div>
              </PerformanceWrapper>
            </Router>
          </AnalyticsProvider>
        </EnhancedErrorBoundary>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
};
export default App;