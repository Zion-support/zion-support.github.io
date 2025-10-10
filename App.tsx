'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/globals.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { ServiceCardSkeleton } from './app/components/EnhancedLoadingStates';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './app/components/SEOOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import ServiceWorker from './app/components/ServiceWorker';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/SEOHead';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PartnersPage = React.lazy(() => import('./app/partners/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const FAQPage = React.lazy(() => import('./app/faq/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));

// Main App Component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEOHead
          title="Zion Tech Group - Advanced AI and IT Solutions"
          description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
          keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
          canonicalUrl="https://ziontechgroup.com"
          structuredData={{
            '@context': 'https://schema.org',
            '@type': 'TechCompany',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
            description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
            foundingDate: '2020',
            numberOfEmployees: '50-100',
            industry: 'Technology',
            services: [
              'AI Solutions',
              'Quantum Computing',
              'Autonomous Systems',
              'Digital Transformation',
              'Cloud Services',
              'Automation',
              'Business Intelligence'
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-302-464-0950',
              contactType: 'Customer Service',
              areaServed: 'US',
              availableLanguage: 'en'
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: '364 E Main St STE 1008',
              addressLocality: 'Middletown',
              addressRegion: 'DE',
              postalCode: '19709',
              addressCountry: 'US'
            }
          }}
        />
        <PerformanceOptimizer
          enableImageOptimization={true}
          enableLazyLoading={true}
          enablePreloading={true}
          enableCodeSplitting={true}
        />
        <AccessibilityEnhancer
          enableKeyboardNavigation={true}
          enableScreenReaderSupport={true}
          enableHighContrast={true}
          enableFocusManagement={true}
        />
        <ServiceWorker />
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <main id="main-content" className="flex-1" tabIndex={-1}>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  <Route path="/ai-services" element={<AiServicesPage />} />
                  <Route path="/it-services" element={<ItServicesPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

App.displayName = 'App';
export default App;