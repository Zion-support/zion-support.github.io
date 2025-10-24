import React, { Suspense, lazy, useEffect, memo } from "react"
import { HelmetProvid, e, r } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';
import ServicesPage from './app/pages/ServicesPage';
import BlogPage from './app/pages/BlogPage';
import TutorialsPage from './app/pages/TutorialsPage';
import DemoPage from './app/pages/DemoPage';
import SupportPage from './app/pages/SupportPage';
import PrivacyPage from './app/pages/PrivacyPage';
import TermsPage from './app/pages/TermsPage';
import PricingPage from './app/pages/PricingPage';
import SolutionsPage from './app/pages/SolutionsPage';
import MicroSaaSSolutionsPage from './app/micro-saas-solutions/page';
import AISolutionsPage from './app/ai-solutions/page';
import ITSolutionsPage from './app/it-solutions/page';
import AIServicesPage from './app/pages/AIServicesPage';
import ITServicesPage from './app/pages/ITServicesPage';
import CloudInfrastructurePage from './app/pages/CloudInfrastructurePage';
import DigitalTransformationPage from './app/pages/DigitalTransformationPage';
import CaseStudiesPage from './app/pages/CaseStudiesPage';
import CareersPage from './app/pages/CareersPage';
import React, { Suspense, lazy, useEffect, memo } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./app/components/Footer";
import ErrorBoundary from "./app/components/ErrorBoundary";
import GlobalErrorBoundary from "./app/components/GlobalErrorBoundary";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import LoadingSpinner from "./app/components/LoadingSpinner";
import SEOOptimizer from "./app/components/SEOOptimizer";

// Hooks
import { usePerformanceOptimizati, o, n } from "./app/hooks/usePerformanceOptimization";
import { usePerformanceOptimization } from "./app/hooks/usePerformanceOptimization";

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

// AI Services Pages
const AIServicesPage = lazy(() => import("./app/ai-services/page"));
const AISolutionsPage = lazy(() => import("./app/ai-solutions/page"));

// IT Services Pages
const ITServicesPage = lazy(() => import("./app/it-services/page"));
const ITSolutionsPage = lazy(() => import("./app/it-solutions/page"));
const CloudInfrastructurePage = lazy(() => import("./app/cloud-infrastructure/page"));
const DigitalTransformationPage = lazy(() => import("./app/digital-transformation/page"));
const CybersecurityPage = lazy(() => import("./app/cybersecurity/page"));
const SolutionsPage = lazy(() => import("./app/solutions/page"));

// 5G Solutions Pages
const FiveGSolutionsPage = lazy(() => import("./app/5g-solutions/page"));

// Error fallback component
export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-900">
          Something went wrong
        </h3>
        <p className="mt-2 text-sm text-gray-500">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  </div>
);

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div>
);

const App = memo(() => {
  // Initialize performance optimizations
  usePerformanceOptimization();

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => {
          // Service worker registered successfully
        })
        .catch(() => {
          // Service worker registration failed
        });
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreload = document.createElement("link");
      fontPreload.rel = "preload";
      fontPreload.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
      fontPreload.as = "style";
      fontPreload.crossOrigin = "anonymous";
      document.head.appendChild(fontPreload);

      // Preload critical pages
      const criticalPages = ["/about", "/contact", "/services"];
      criticalPages.forEach((page) => {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = page;
        document.head.appendChild(link);
      });
    };

    // Only preload in production
    if (process.env.NODE_ENV === "production") {
      preloadCriticalResources();
    }
  }, []);

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <main className="flex-1">
              <ErrorBoundary>
                <PerformanceMonitor />
                <AccessibilityEnhancer>
                  <SEOOptimizer>
                    <Suspense fallback={<LoadingFallback />}>
                      <ErrorBoundary>
                        <Routes>
                          {/* Main Pages */}
                          <Route path="/" element={<HomePage />} />
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                          <Route path="/services" element={<ServicesPage />} />
                          <Route path="/pricing" element={<PricingPage />} />
                          <Route
                            path="/case-studies"
                            element={<CaseStudiesPage />}
                          />
                          <Route path="/blog" element={<BlogPage />} />
                          <Route path="/team" element={<TeamPage />} />
                          <Route path="/careers" element={<CareersPage />} />
                          <Route path="/privacy" element={<PrivacyPage />} />
                          <Route path="/terms" element={<TermsPage />} />

                          {/* AI Services */}
                          <Route
                            path="/ai-services"
                            element={<AIServicesPage />}
                          />
                          <Route
                            path="/ai-solutions"
                            element={<AISolutionsPage />}
                          />

                          {/* IT Services */}
                          <Route
                            path="/it-services"
                            element={<ITServicesPage />}
                          />
                          <Route
                            path="/it-solutions"
                            element={<ITSolutionsPage />}
                          />
                          <Route
                            path="/cloud-infrastructure"
                            element={<CloudInfrastructurePage />}
                          />
                          <Route
                            path="/digital-transformation"
                            element={<DigitalTransformationPage />}
                          />
                          <Route
                            path="/cybersecurity"
                            element={<CybersecurityPage />}
                          />
                          <Route path="/solutions" element={<SolutionsPage />} />

                          {/* 5G Solutions */}
                          <Route
                            path="/5g-solutions"
                            element={<FiveGSolutionsPage />}
                          />

                          {/* Catch all route */}
                          <Route
                            path="*"
                            element={
                              <div className="min-h-screen flex items-center justify-center">
                                <div className="text-center">
                                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                    404
                                  </h1>
                                  <p className="text-gray-600 mb-8">
                                    Page not found
                                  </p>
                                  <a
                                    href="/"
                                    className="text-blue-600 hover:text-blue-800"
                                  >
                                    Go back home
                                  </a>
                                </div>
                              </div>
                            }
                          />
                        </Routes>
                      </ErrorBoundary>
                    </Suspense>
                  </SEOOptimizer>
                </AccessibilityEnhancer>
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
});

App.displayName = "App";
export default App;

export default App;>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80
