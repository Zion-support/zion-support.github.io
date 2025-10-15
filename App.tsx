import React, { Suspense } from 'react';
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

// New AI Services
const AiSmartContractsPage = React.lazy(() => import('./app/ai-smart-contracts/page'));
const AiVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'));
const AiPredictiveMaintenancePage = React.lazy(() => import('./app/ai-predictive-maintenance/page'));
const AiPersonalizedLearningPage = React.lazy(() => import('./app/ai-personalized-learning/page'));

// New IT Services
const QuantumComputingSolutionsPage = React.lazy(() => import('./app/quantum-computing-solutions/page'));
const EdgeComputingSolutionsPage = React.lazy(() => import('./app/edge-computing-solutions/page'));

const App: React.FC = () => {
  // Initialize performance monitoring
  usePerformanceMonitoring();

  return (
    <ErrorBoundary>
      <Router>
        <SEOHead />
        
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
          {/* Skip Link for Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50 transition-all duration-200"
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.getElementById('main-content');
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                targetElement.focus();
              }
            }}
          >
            Skip to main content
          </a>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/3 rounded-full blur-3xl animate-pulse delay-700"></div>
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
                
                {/* New AI Services */}
                <Route path="/ai-smart-contracts" element={<AiSmartContractsPage />} />
                <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
                <Route path="/ai-predictive-maintenance" element={<AiPredictiveMaintenancePage />} />
                <Route path="/ai-personalized-learning" element={<AiPersonalizedLearningPage />} />
                
                {/* New IT Services */}
                <Route path="/quantum-computing-solutions" element={<QuantumComputingSolutionsPage />} />
                <Route path="/edge-computing-solutions" element={<EdgeComputingSolutionsPage />} />
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