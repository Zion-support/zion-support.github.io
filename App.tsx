import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import SEOOptimizer from './app/components/SEOOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import { trackPageView } from './app/utils/analytics';
import { performanceOptimizer } from './app/utils/performanceOptimizer';
import Hero from './app/components/Hero';
import Services from './app/components/Services';
import About from './app/about/page';

// Lazy load pages for better performance
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const PortfolioPage = React.lazy(() => import('./app/portfolio/page'));
const NewsPage = React.lazy(() => import('./app/news/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const PrivacyPolicyPage = React.lazy(() => import('./app/privacy-policy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const SlaPage = React.lazy(() => import('./app/sla/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const HelpPage = React.lazy(() => import('./app/help/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const GdprPage = React.lazy(() => import('./app/gdpr/page'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  useEffect(() => {
    // Initialize performance optimization
    performanceOptimizer.optimize();
    
    // Track page view
    trackPageView('Home', {
      page_url: window.location.href,
      page_title: document.title,
    });

    // Preload critical CSS and fonts
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.querySelector('link[rel="stylesheet"]');
      if (criticalCSS) {
        criticalCSS.setAttribute('rel', 'preload');
        criticalCSS.setAttribute('as', 'style');
        criticalCSS.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
      }

      // Preload critical fonts
      const fontLinks = document.querySelectorAll('link[href*="font"]');
      fontLinks.forEach((link) => {
        link.setAttribute('rel', 'preload');
        link.setAttribute('as', 'font');
        link.setAttribute('type', 'font/woff2');
        link.setAttribute('crossorigin', 'anonymous');
      });
    };

    preloadCriticalResources();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navigation />
          <main id="main-content" role="main">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <Services />
                  </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                <Route path="/ai-services" element={<AiServicesPage />} />
                <Route path="/it-services" element={<ItServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/sla" element={<SlaPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/api-docs" element={<ApiDocsPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/gdpr" element={<GdprPage />} />
                <Route path="*" element={
                  <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold text-white mb-8">404 - Page Not Found</h1>
                    <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
                    <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Go Home
                    </a>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          
          {/* Performance and SEO Monitoring Components */}
          <PerformanceMonitor />
          <SEOOptimizer />
          <AccessibilityEnhancer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;