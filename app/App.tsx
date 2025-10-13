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
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

const HomePage = lazy(() => import("./page"));
const AboutPage = lazy(() => import("./about/page"));
const ContactPage = lazy(() => import("./contact/page"));
const ServicesPage = lazy(() => import("./services/page"));
const PricingPage = lazy(() => import("./pricing/page"));

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-018c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
// Main App Component
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
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
