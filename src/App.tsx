import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced Components
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import { EnhancedLoadingSpinner } from './components/EnhancedLoadingSpinner';
import { EnhancedHeader } from './components/EnhancedHeader';
import { Footer } from './components/Footer';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { EnhancedAccessibilityEnhancer } from './components/EnhancedAccessibilityEnhancer';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { AdvancedAnalyticsDashboard } from './components/AdvancedAnalyticsDashboard';
import { AIContentOptimizer } from './components/AIContentOptimizer';
import { SecurityMonitoringSystem } from './components/SecurityMonitoringSystem';
import { UserExperienceOptimizer } from './components/UserExperienceOptimizer';
import FloatingActionButton from './components/FloatingActionButton';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Careers = lazy(() => import('./pages/Careers'));
const News = lazy(() => import('./pages/News'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const Webinars = lazy(() => import('./pages/Webinars'));
const Partners = lazy(() => import('./pages/Partners'));
const MicroSaaS = lazy(() => import('./pages/MicroSaaS'));
const AIServices = lazy(() => import('./pages/AIServices'));
const ITServices = lazy(() => import('./pages/ITServices'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Talent = lazy(() => import('./pages/Talent'));
const Equipment = lazy(() => import('./pages/Equipment'));
const RequestQuote = lazy(() => import('./pages/RequestQuote'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Additional pages for navigation
const EnhancedServices = lazy(() => import('./pages/EnhancedServices'));
const ITOnsiteServices = lazy(() => import('./pages/ITOnsiteServices'));
const Pricing = lazy(() => import('./pages/Pricing'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-zion-slate-light mb-6">We're working on fixing the problem.</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

// Loading Component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-zion-blue flex items-center justify-center">
    <EnhancedLoadingSpinner size="large" />
  </div>
);

function App() {
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
