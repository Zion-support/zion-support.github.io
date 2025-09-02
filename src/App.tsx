import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Enhanced Components
import { ErrorBoundary } from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/accessibility/AccessibilityEnhancer';
import SEOOptimizer from './components/SEOOptimizer';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant/ChatAssistant';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import ComprehensiveOptimizer from './components/ComprehensiveOptimizer';
import ComprehensiveSEOEnhancer from './components/ComprehensiveSEOEnhancer';

// Simple loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

// Simple header component
const SimpleHeader = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-gray-900">
            Zion Tech Group
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </div>
  </header>
);

// Simple footer component
const SimpleFooter = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/team" className="hover:text-blue-400">Team</a></li>
            <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="/services" className="hover:text-blue-400">All Services</a></li>
            <li><a href="/ai-solutions" className="hover:text-blue-400">AI Solutions</a></li>
            <li><a href="/cloud-services" className="hover:text-blue-400">Cloud Services</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="/help-center" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            <li><a href="/documentation" className="hover:text-blue-400">Documentation</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Team = createLazyComponent(() => import('./pages/Team'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const HelpCenter = createLazyComponent(() => import('./pages/Help'));
const PrivacyPolicy = createLazyComponent(() => import('./pages/PrivacyPolicy'));
const TermsOfService = createLazyComponent(() => import('./pages/TermsOfService'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const News = createLazyComponent(() => import('./pages/News'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Login = createLazyComponent(() => import('./pages/Login'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const Research = createLazyComponent(() => import('./pages/Research'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));

// New Autonomous AI Services 2025
const AIAutonomousContentMarketingPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-Content-Marketing-Platform'));
const AIAutonomousCustomerSuccessPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-Customer-Success-Platform'));
const AIAutonomousDevOpsPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-DevOps-Platform'));
const AIAutonomousSalesPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-Sales-Platform'));
const AIAutonomousHRPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-HR-Platform'));

// New Innovative AI Services 2025
const AIIntelligentContractAnalyzer = createLazyComponent(() => import('./pages/services/AI-Intelligent-Contract-Analyzer'));
const AISustainabilityAnalyticsPlatform = createLazyComponent(() => import('./pages/services/AI-Sustainability-Analytics-Platform'));
const AIHealthcarePredictiveAnalytics = createLazyComponent(() => import('./pages/services/AI-Healthcare-Predictive-Analytics'));

// 2025 Innovative Services Showcase and Pricing Guide
const InnovativeServicesShowcase2025 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2025'));
const ComprehensivePricingGuide2025 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2025'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="text-center text-white max-w-md mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-red-400">Something went wrong</h1>
      <p className="text-gray-300 mb-6">
        {error.message || 'An unexpected error occurred'}
      </p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Go home
        </button>
      </div>
    </div>
  </div>
);
>>>>>>> origin/clean-new-services-2025

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<ErrorFallback error={new Error()} resetErrorBoundary={() => {}} />}>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* SEO Component */}
            <SEO
              title="Zion Tech Group - Leading AI & Technology Solutions"
              description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
              keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
              ogImage="/og-image.jpg"
              canonicalUrl="https://ziontechgroup.com"
            />

            {/* Performance Optimizer */}
            <PerformanceOptimizer enabled={true} />

            {/* Enhanced Accessibility */}
            <EnhancedAccessibilityEnhancer enabled={true} />

            {/* Security Enhancer */}
            <SecurityEnhancer enabled={true} />

            {/* Mobile Experience Enhancer */}
            <MobileExperienceEnhancer enabled={true} />

            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} showMetrics={true} />

            {/* Header */}
            <EnhancedHeader />

            {/* Main Content */}
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    {/* Core Routes */}
                    <Route
                      path="/"
                      element={
                        <div className="min-h-screen">
                          <Home />
                        </div>
                      }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/data-protection" element={<DataProtection />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/sitemap" element={<Sitemap />} />

                    {/* Service Routes */}
                    <Route path="/services-pricing" element={<ServicesPricingPage />} />
                    <Route path="/system-status" element={<SystemStatus />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/api-playground" element={<ApiPlayground />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/login" element={<Login />} />

                    {/* 2028 Innovative AI Services */}
                    <Route path="/services/ai-autonomous-vehicle-management-platform" element={<AIAutonomousVehicleManagementPlatform />} />
                    <Route path="/services/ai-smart-city-infrastructure-management" element={<AISmartCityInfrastructureManagement />} />
                    <Route path="/services/ai-quantum-financial-trading-platform" element={<AIQuantumFinancialTradingPlatform />} />

                    {/* 2028 Services Showcase */}
                    <Route path="/innovative-services-showcase-2028" element={<InnovativeServicesShowcase2028 />} />

                    {/* 2025 Innovative Services Showcase and Pricing Guide */}
                    <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
                    <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />

                    {/* 404 Page */}
                    <Route
                      path="*"
                      element={
                        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                          <div className="text-center text-white">
                            <h1 className="text-6xl font-bold mb-4">404</h1>
                            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                            <p className="text-gray-300 mb-8">
                              The page you're looking for doesn't exist or has been moved.
                            </p>
                            <button
                              onClick={() => window.history.back()}
                              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-4"
                            >
                              Go Back
                            </button>
                            <button
                              onClick={() => window.location.href = '/'}
                              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                            >
                              Go Home
                            </button>
                          </div>
                        </div>
                      }
                    />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </main>

            {/* Footer */}
            <EnhancedFooter />

            {/* Floating Action Button */}
            <FloatingActionButton enabled={true} />

            {/* Smart Notification System */}
            <SmartNotificationSystem enabled={true} />

            {/* Chat Assistant */}
            <ChatAssistant
              enabled={true}
              position="bottom-right"
              theme="auto"
              language="en"
            />
          </div>
        </Router>
>>>>>>> origin/clean-new-services-2025
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;