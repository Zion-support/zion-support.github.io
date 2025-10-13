<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface AppProps {
  className?: string;
  children?: React.ReactNode;
}

export default function App({ className = '', children }: AppProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-018c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { HelmetProvider } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

=======
=======
"use client";

import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';
import { Network } from 'lucide-react';
import { Monitor } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8

// Lazy load pages for better performance
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
const HomePage = lazy(() => import("./page"));
const AboutPage = lazy(() => import("./about/page"));
const ContactPage = lazy(() => import("./contact/page"));
const ServicesPage = lazy(() => import("./services/page"));
const PricingPage = lazy(() => import("./pricing/page"));
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
const CaseStudiesPage = lazy(() => import("./case-studies/page"));
const BlogPage = lazy(() => import("./blog/page"));
const TeamPage = lazy(() => import("./team/page"));
const CareersPage = lazy(() => import("./careers/page"));
const PrivacyPage = lazy(() => import("./privacy/page"));
const TermsPage = lazy(() => import("./terms/page"));
const CookiesPage = lazy(() => import("./cookies/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import("./5g-data-analytics/page"));
const FiveGEdgeComputingPage = lazy(() => import("./5g-edge-computing/page"));
const FiveGImplementationPage = lazy(() => import("./5g-implementation/page"));
const FiveGIoTSolutionsPage = lazy(() => import("./5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = lazy(() => import("./5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = lazy(() => import("./5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = lazy(() => import("./5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = lazy(() => import("./5g-smart-city-solutions/page"));
const FiveGSolutionsPage = lazy(() => import("./5g-solutions/page"));

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-018c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
// Main App Component
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
=======
        <div className="min-h-screen bg-gray-50">
          <Suspense fallback={<Loading />}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
            <Routes>
=======
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer>
            <CriticalResourcePreloader />
            <CacheManager />
            <AdvancedPerformanceMonitor />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </Suspense>
<<<<<<< HEAD
        </ErrorBoundary>
<<<<<<< HEAD
=======
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
      </BrowserRouter>
    </HelmetProvider>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-018c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
"use client";

import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from "./components/ErrorBoundary";
import PerformanceMonitor from "./components/PerformanceMonitor";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import LoadingSpinner from "./components/LoadingSpinner";
import CriticalResourcePreloader from "./components/CriticalResourcePreloader";
import CacheManager from "./components/CacheManager";
import AdvancedPerformanceMonitor from "./components/AdvancedPerformanceMonitor";

// Lazy load pages for better performance
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
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
            
            {/* 5G Solutions Routes */}
            <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
            <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
            <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
            <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
            <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
            <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
            <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
            <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
