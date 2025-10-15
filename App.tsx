<<<<<<< HEAD
import { Suspense, lazy, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Navigation from './app/components/Navigation'
import Sidebar from './app/components/Sidebar'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer'
import LoadingSpinner from './app/components/LoadingSpinner'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'))
const AboutPage = lazy(() => import('./app/about/page'))
const ContactPage = lazy(() => import('./app/contact/page'))
const ServicesPage = lazy(() => import('./app/services/page'))
const PricingPage = lazy(() => import('./app/pricing/page'))
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'))
const BlogPage = lazy(() => import('./app/blog/page'))
const TeamPage = lazy(() => import('./app/team/page'))
const CareersPage = lazy(() => import('./app/careers/page'))
const PrivacyPage = lazy(() => import('./app/privacy/page'))
const TermsPage = lazy(() => import('./app/terms/page'))
const CookiesPage = lazy(() => import('./app/cookies/page'))

// AI Services Pages
const AIServicesPage = lazy(() => import('./app/ai-services/page'))
const AISolutionsPage = lazy(() => import('./app/ai-solutions/page'))

// IT Services Pages
const ITServicesPage = lazy(() => import('./app/it-services/page'))
const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'))
const DigitalTransformationPage = lazy(() => import('./app/digital-transformation/page'))

// 5G Solutions Pages
const FiveGSolutionsPage = lazy(() => import('./app/5g-solutions/page'))

// Micro SaaS Solutions Pages
const MicroSAASSolutionsPage = lazy(() => import('./app/micro-saas-solutions/page'))
const AIContentGeneratorPage = lazy(() => import('./app/ai-content-generator/page'))

// Service-specific Pages
const DataAnalyticsPage = lazy(() => import('./app/data-analytics/page'));
const WebDevelopmentPage = lazy(() => import('./app/web-development/page'));
const MobileDevelopmentPage = lazy(() => import('./app/mobile-development/page'));
const DatabaseManagementPage = lazy(() => import('./app/database-management/page'));
const NetworkInfrastructurePage = lazy(() => import('./app/network-infrastructure/page'));
const PartnershipsPage = lazy(() => import('./app/partnerships/page'));
const HelpPage = lazy(() => import('./app/help/page'));
const APIDocsPage = lazy(() => import('./app/api-docs/page'));

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

function App() {
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
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae

export default function App() {
  return (
    <div>
      <h1>App</h1>
      <p>This component is under construction.</p>
    </div>
  );
}