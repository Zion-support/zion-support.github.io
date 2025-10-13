import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import EnhancedSEO from "./app/components/EnhancedSEO";
import ImprovedErrorBoundary from "./app/components/ImprovedErrorBoundary";
import ImprovedAccessibility from "./app/components/ImprovedAccessibility";
import ImprovedPerformanceMonitor from "./app/components/ImprovedPerformanceMonitor";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <HelmetProvider>
      <ImprovedErrorBoundary>
        <AnalyticsProvider>
          <ImprovedPerformanceMonitor showDetails={process.env.NODE_ENV === 'development'}>
            <WebVitalsTracker>
              <ImprovedAccessibility>
                <Router>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                    <FuturisticBackground>
                      <Navigation onSidebarToggle={toggleSidebar} />
                      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                      <Breadcrumb />
                      
                      <main className="relative z-10" id="main-content" role="main">
                        <Suspense fallback={<LoadingPage />}>
                          <Routes>
                            {/* Main Pages */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/ai-services" element={<AIServicesPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                            <Route path="/tutorials" element={<TutorialsPage />} />
                            <Route path="/support" element={<SupportPage />} />

                            {/* Catch all route */}
                            <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                              <div className="text-center">
                                <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                                <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                                <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                  Go Home
                                </a>
                              </div>
                            </div>} />
                          </Routes>
                        </Suspense>
                      </main>
                      
                      <Footer />
                    </FuturisticBackground>
                  </div>
                </Router>
              </ImprovedAccessibility>
            </WebVitalsTracker>
          </ImprovedPerformanceMonitor>
        </AnalyticsProvider>
      </ImprovedErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
