"use client";

import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./app/components/ErrorBoundary";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import LoadingSpinner from "./app/components/LoadingSpinner";
import CriticalResourcePreloader from "./app/components/CriticalResourcePreloader";
import CacheManager from "./app/components/CacheManager";
import AdvancedPerformanceMonitor from "./app/components/AdvancedPerformanceMonitor";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./app/page"));
const AboutPage = lazy(() => import("./app/about/page"));
const ContactPage = lazy(() => import("./app/contact/page"));
const ServicesPage = lazy(() => import("./app/services/page"));
const PricingPage = lazy(() => import("./app/pricing/page"));
const CaseStudiesPage = lazy(() => import("./app/case-studies/page"));
const BlogPage = lazy(() => import("./app/blog/page"));
const TeamPage = lazy(() => import("./app/team/page"));
const CareersPage = lazy(() => import("./app/careers/page"));
const PrivacyPage = lazy(() => import("./app/privacy/page"));
const TermsPage = lazy(() => import("./app/terms/page"));
const CookiesPage = lazy(() => import("./app/cookies/page"));

// AI Services Pages
const AIServicesPage = lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = lazy(() => import("./app/micro-saas/page"));
const ITServicesPage = lazy(() => import("./app/it-services/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = lazy(() => import("./app/5g-implementation/page"));
const FiveGIoTSolutionsPage = lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGSolutionsPage = lazy(() => import("./app/5g-solutions/page"));

// Main App Component
function App() {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Add any initialization logic here
    }
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer>
            <CriticalResourcePreloader />
            <CacheManager />
            <AdvancedPerformanceMonitor />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />

                {/* AI Services Routes */}
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />

                {/* 5G Solutions Routes */}
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />

                {/* Catch all route */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                      <a href="/" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;