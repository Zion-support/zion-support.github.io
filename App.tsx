import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Hero from './app/components/Hero';
import Services from './app/components/Services';
import About from './app/components/About';
import LoadingSpinner from './app/components/LoadingSpinner';
import PerformanceMonitor from './app/components/PerformanceMonitor';

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

const App: React.FC = () => {
  return (
    <PerformanceMonitor>
      <Router>
        <Helmet>
          <title>Zion Tech Group - Advanced AI and IT Solutions</title>
          <meta name="description" content="Leading provider of AI-powered micro SAAS solutions, IT services, and innovative technology solutions. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com" />
          <meta name="keywords" content="AI solutions, micro SAAS, IT services, software development, cloud computing, cybersecurity, data analytics, automation" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Helmet>
        
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main>
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
    </PerformanceMonitor>
  );
};

export default App;