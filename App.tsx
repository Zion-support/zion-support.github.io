import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Hero from './app/components/Hero';
import Services from './app/components/Services';
import About from './app/components/About';
import LoadingSpinner from './app/components/LoadingSpinner';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/SEOHead';
import { usePerformanceMonitoring } from './app/hooks/usePerformanceMonitoring';

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
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const GdprPage = React.lazy(() => import('./app/gdpr/page'));
const HelpPage = React.lazy(() => import('./app/help/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));

const App: React.FC = () => {
  // Initialize performance monitoring
  usePerformanceMonitoring();

  return (
    <ErrorBoundary>
      <Router>
        <SEOHead />
        
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
          <Header />
          
          <main id="main-content" role="main" className="relative z-10">
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
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/gdpr" element={<GdprPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/api-docs" element={<ApiDocsPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/sitemap" element={<SitemapPage />} />
                <Route path="*" element={
                  <div className="container mx-auto px-4 py-16 text-center min-h-screen flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        404 - Page Not Found
                      </span>
                    </h1>
                    <p className="text-gray-300 mb-8 text-lg max-w-md mx-auto">
                      The page you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <a 
                      href="/" 
                      className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Go Home
                    </a>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;