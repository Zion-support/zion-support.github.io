"use client";
import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Components
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import GlobalErrorBoundary from './components/GlobalErrorBoundary'
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'))
const AboutPage = lazy(() => import('./about/page'))
const ContactPage = lazy(() => import('./contact/page'))
const ServicesPage = lazy(() => import('./services/page'))
const PricingPage = lazy(() => import('./pricing/page'))
const CaseStudiesPage = lazy(() => import('./case-studies/page'))
const BlogPage = lazy(() => import('./blog/page'))
const TeamPage = lazy(() => import('./team/page'))
const CareersPage = lazy(() => import('./careers/page'))
const PrivacyPage = lazy(() => import('./privacy/page'))
const TermsPage = lazy(() => import('./terms/page'))
const CookiesPage = lazy(() => import('./cookies/page'))

// AI Services Pages
const AIServicesPage = lazy(() => import('./ai-services/page'))
const AISolutionsPage = lazy(() => import('./ai-solutions/page'))

// IT Services Pages
const ITServicesPage = lazy(() => import('./it-services/page'))
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'))
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'))

// 5G Solutions Pages
const FiveGSolutionsPage = lazy(() => import('./5g-solutions/page'))

// Micro SaaS Solutions Pages
const MicroSAASSolutionsPage = lazy(() => import('./micro-saas-solutions/page'))
const AIContentGeneratorPage = lazy(() => import('./ai-content-generator/page'))

// Service-specific Pages
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const PartnershipsPage = lazy(() => import('./partnerships/page'));
const HelpPage = lazy(() => import('./help/page'));
const APIDocsPage = lazy(() => import('./api-docs/page'));

// Error fallback component
export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
        <p className="mt-2 text-sm text-gray-500">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Try again
        </button>
      </div>
    </div>
  </div>
)

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div>
)

export default function App() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreload = document.createElement('link')
      fontPreload.rel = 'preload'
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      fontPreload.as = 'style'
      document.head.appendChild(fontPreload)
    }

    preloadCriticalResources()
  }, [])

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Sidebar />
            <Suspense fallback={<LoadingFallback />}>
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
                <Route path="/ai-solutions" element={<AISolutionsPage />} />
                
                {/* IT Services Routes */}
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                
                {/* 5G Solutions Routes */}
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                
                {/* Micro SaaS Solutions Routes */}
                <Route path="/micro-saas-solutions" element={<MicroSAASSolutionsPage />} />
                <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                
                {/* Service-specific Routes */}
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/partnerships" element={<PartnershipsPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/api-docs" element={<APIDocsPage />} />
              </Routes>
            </Suspense>
            <Footer />
            <PerformanceMonitor />
            <AccessibilityEnhancer />
          </div>
        </Router>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}