'use client';'
import React, { lazy, Suspense } from 'react;'
import { BrowserRouter, Routes, Route } from 'react-router-dom;'
import { HelmetProvider } from 'react-helmet-async;'
import ErrorBoundary from "./components/ErrorBoundary";"
import PerformanceMonitor from "./components/PerformanceMonitor";"
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";"
import LoadingSpinner from "./components/LoadingSpinner";"

// Lazy load pages for better performance,
const HomePage = lazy(() => import("./page"));""
const AboutPage = lazy(() => import("./about/page"));""
const ContactPage = lazy(() => import("./contact/page"));""
const ServicesPage = lazy(() => import("./services/page"));""

function App() {
  return ()
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />""
              <Route path="/about" element={<AboutPage />} />""
              <Route path="/contact" element={<ContactPage />} />""
              <Route path="/services" element={<ServicesPage />} />""
            </Routes>
          </Suspense>
          <PerformanceMonitor />
          <AccessibilityEnhancer />
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
