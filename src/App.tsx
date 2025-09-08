import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Enhanced Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';
import { Sidebar } from './components/Sidebar';

// Enhanced Components
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import { EnhancedLoadingSpinner } from './components/EnhancedLoadingSpinner';
import { EnhancedHeader } from './components/EnhancedHeader';
import { Footer } from './components/Footer';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { SEO } from './components/SEO';
import FloatingActionButton from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { EnhancedSEO } from './components/EnhancedSEO';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { EnhancedAccessibilityPanel } from './components/EnhancedAccessibilityPanel';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import InteractiveUserExperience from './components/InteractiveUserExperience';
import SecurityEnhancer from './components/SecurityEnhancer';

// Service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const ITServices = lazy(() => import('./pages/ITServices'));
const MicroSaaS = lazy(() => import('./pages/MicroSaaS'));

// Additional pages for navigation
const EnhancedServices = lazy(() => import('./pages/EnhancedServices'));
const ITOnsiteServices = lazy(() => import('./pages/ITOnsiteServices'));
const Pricing = lazy(() => import('./pages/Pricing'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
 );

// Innovative Micro SAAS Services 2025
const InnovativeMicroSaasServices2025 = React.lazy(() => import('./pages/innovative-micro-saas-services-2025'));

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <EnhancedErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <div className="App">
          {/* Performance and Analytics Components */}
          <PerformanceOptimizer />
          <AdvancedAnalytics />
          <AdvancedAnalyticsDashboard />
          <AIContentOptimizer />
          <SecurityMonitoringSystem />
          <UserExperienceOptimizer />
          
          {/* Header */}
          <EnhancedHeader />
          
          {/* Main Content */}
          <main id="main-content">
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/help" element={<HelpCenter />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/micro-saas" element={<MicroSaaS />} />
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/talent" element={<Talent />} />
                  <Route path="/equipment" element={<Equipment />} />
                  <Route path="/request-quote" element={<RequestQuote />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/enhanced-services" element={<EnhancedServices />} />
                  <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Floating Action Button */}
          <FloatingActionButton />
          
          {/* Notification System */}
          <SmartNotificationSystem />
          
          {/* Accessibility Enhancer */}
          <EnhancedAccessibilityEnhancer />
        </div>
      </Router>
    </EnhancedErrorBoundary>
  );
}

export default App;