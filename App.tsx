import React, { Suspense, memo, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import './src/styles/futuristic.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import LoadingSpinner from './src/components/LoadingSpinner';

// Lazy load pages
const HomePage = React.lazy(() => import('./app/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const MicroSAASPage = React.lazy(() => import('./app/micro-saas/page'));
const AIAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AIAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AICustomerSupportPage = React.lazy(() => import('./app/ai-customer-support/page'));
const AIDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AIContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AIHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AIFintechPage = React.lazy(() => import('./app/ai-fintech/page'));
const AICybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/logo.png",
  "description": "Leading provider of AI and IT solutions for modern enterprises",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "364 E Main St STE 1008",
    "addressLocality": "Middletown",
    "addressRegion": "DE",
    "postalCode": "19709",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-302-464-0950",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "English"
  }
};

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold mb-4 text-red-400">Something went wrong</h2>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

// Main App Component
const App: React.FC = memo(() => {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined') {
      console.log('Zion Tech Group website loaded');
    }
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-900 text-white">
          <Helmet>
            <title>Zion Tech Group - AI & IT Solutions</title>
            <meta name="description" content="Leading provider of AI and IT solutions for modern enterprises" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href="https://ziontechgroup.com" />
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          </Helmet>
          
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Navigation />
            
            <main className="min-h-screen">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />
                  
                  {/* AI Services Routes */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/micro-saas" element={<MicroSAASPage />} />
                  
                  {/* Individual AI Service Pages */}
                  <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                  <Route path="/ai-automation" element={<AIAutomationPage />} />
                  <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                  <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                  <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                  <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                  <Route path="/ai-fintech" element={<AIFintechPage />} />
                  <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
          </ErrorBoundary>
        </div>
      </Router>
    </HelmetProvider>
  );
});

App.displayName = 'App';

export default App;