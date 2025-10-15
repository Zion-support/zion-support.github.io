import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Hero from './app/components/Hero';
import Services from './pages/ServicesPage';
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
          {/* Futuristic Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary animated orbs */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse delay-700"></div>
            
            {/* Secondary floating elements */}
            <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl animate-bounce delay-300"></div>
            <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-purple-400/5 rounded-full blur-2xl animate-bounce delay-500"></div>
            <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-400/5 rounded-full blur-2xl animate-bounce delay-700"></div>
            
            {/* Neon grid overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/2 via-transparent to-purple-500/2 opacity-30"></div>
            
            {/* Animated particles */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
            <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-2000"></div>
            <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-3000"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-4000"></div>
            
            {/* Futuristic lines */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cyan-500/20 via-transparent to-purple-500/20 animate-pulse"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-purple-500/20 via-transparent to-cyan-500/20 animate-pulse delay-1000"></div>
          </div>
          <Header />
          
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
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;