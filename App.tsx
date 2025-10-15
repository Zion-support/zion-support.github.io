import { Suspense, useEffect, lazy } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Lazy load pages for better performance with error boundaries
const lazyWithRetry = (importFn: () => Promise<any>) => {
  return lazy(() => 
    importFn().catch((error) => {
      console.error('Failed to load page:', error);
      return { default: () => <div>Failed to load page. Please refresh.</div> };
    })
  );
};

const HomePage = lazyWithRetry(() => import('./app/page'));
const AboutPage = lazyWithRetry(() => import('./app/about/page'));
const ServicesPage = lazyWithRetry(() => import('./app/services/page'));
const ContactPage = lazyWithRetry(() => import('./app/contact/page'));
const AIServicesPage = lazyWithRetry(() => import('./app/ai-services/page'));
const ITServicesPage = lazyWithRetry(() => import('./app/it-services/page'));
const CloudInfrastructurePage = lazyWithRetry(() => import('./app/cloud-infrastructure/page'));
const FiveGSolutionsPage = lazyWithRetry(() => import('./app/5g-solutions/page'));
const TeamPage = lazyWithRetry(() => import('./app/team/page'));
const CareersPage = lazyWithRetry(() => import('./app/careers/page'));
const HelpPage = lazyWithRetry(() => import('./app/help/page'));
const PrivacyPage = lazyWithRetry(() => import('./app/privacy/page'));
const TermsPage = lazyWithRetry(() => import('./app/terms/page'));
const PricingPage = lazyWithRetry(() => import('./app/pricing/page'));
const BlogPage = lazyWithRetry(() => import('./app/blog/page'));
const CaseStudiesPage = lazyWithRetry(() => import('./app/case-studies/page'));
const PartnershipsPage = lazyWithRetry(() => import('./app/partnerships/page'));
const APIDocsPage = lazyWithRetry(() => import('./app/api-docs/page'));
const AccessibilityPage = lazyWithRetry(() => import('./app/accessibility/page'));
const AISolutionsPage = lazyWithRetry(() => import('./app/ai-solutions/page'));
const DigitalTransformationPage = lazyWithRetry(() => import('./app/digital-transformation/page'));
const MicroSAASSolutionsPage = lazyWithRetry(() => import('./app/micro-saas-solutions/page'));
const AIContentGeneratorPage = lazyWithRetry(() => import('./app/ai-content-generator/page'));
const DataAnalyticsPage = lazyWithRetry(() => import('./app/data-analytics/page'));
const WebDevelopmentPage = lazyWithRetry(() => import('./app/web-development/page'));
const MobileDevelopmentPage = lazyWithRetry(() => import('./app/mobile-development/page'));
const DatabaseManagementPage = lazyWithRetry(() => import('./app/database-management/page'));
const NetworkInfrastructurePage = lazyWithRetry(() => import('./app/network-infrastructure/page'));
const CookiesPage = lazyWithRetry(() => import('./app/cookies/page'));

// Import components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// Import utilities
import { performanceUtils } from './app/utils/performanceUtils';
import { accessibilityUtils } from './app/utils/accessibilityUtils';

// Enhanced loading component with accessibility
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
    <div className="text-center">
      <div 
        className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"
        role="status"
        aria-label="Loading content"
      ></div>
      <p className="text-gray-300 animate-pulse text-lg">Loading amazing content...</p>
      <div className="mt-4 flex justify-center space-x-1">
        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
    </div>
  </div>
)

export default function App() {
  useEffect(() => {
    // Initialize accessibility features
    accessibilityUtils.init({
      enableHighContrast: true,
      enableReducedMotion: true,
      enableKeyboardNavigation: true,
      fontSize: 'medium',
      colorScheme: 'auto'
    });

    // Preload critical resources
    performanceUtils.preloadCriticalResources();

    // Create skip link for accessibility
    accessibilityUtils.createSkipLink();

    // Add ARIA labels
    accessibilityUtils.addAriaLabels();

    // Performance monitoring
    const measurePerformance = async () => {
      const metrics = performanceUtils.monitor.measurePageLoad();
      const webVitals = await performanceUtils.monitor.measureWebVitals();
      
      const allMetrics = { ...metrics, ...webVitals };
      performanceUtils.monitor.sendToAnalytics(allMetrics);
    }

    // Measure performance after load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    }
  }, [])

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Sidebar />
            
            <main id="main-content" className="flex-1">
              <PerformanceMonitor />
              <AccessibilityEnhancer />
              
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  
                  {/* Service Pages */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/ai-solutions" element={<AISolutionsPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  <Route path="/micro-saas-solutions" element={<MicroSAASSolutionsPage />} />
                  <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                  <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                  
                  {/* Company Pages */}
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  
                  {/* Support Pages */}
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  
                  {/* Additional Pages */}
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/partnerships" element={<PartnershipsPage />} />
                  <Route path="/api-docs" element={<APIDocsPage />} />
                  <Route path="/accessibility" element={<AccessibilityPage />} />
                  {/* Catch all route */}
                  <Route path="*" element={
                    <div className="min-h-screen flex items-center justify-center bg-gray-50">
                      <div className="text-center max-w-md mx-auto px-4">
                        <div className="mb-8">
                          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
                          <p className="text-gray-600 mb-8">
                            Sorry, we couldn't find the page you're looking for. 
                            It might have been moved, deleted, or doesn't exist.
                          </p>
                        </div>
                        <div className="space-y-4">
                          <a 
                            href="/" 
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Go Back Home
                          </a>
                          <div className="text-sm text-gray-500">
                            <a href="/contact" className="text-blue-600 hover:text-blue-800">
                              Contact Support
                            </a>
                            {' • '}
                            <a href="/services" className="text-blue-600 hover:text-blue-800">
                              Browse Services
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  } />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  )
}