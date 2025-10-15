import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app/styles/futuristic.css';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));
const CookiesPage = lazy(() => import('./app/cookies/page'));

// AI Services Pages
const AIServicesPage = lazy(() => import('./app/ai-services/page'));
const AISolutionsPage = lazy(() => import('./app/ai-solutions/page'));

// IT Services Pages
const ITServicesPage = lazy(() => import('./app/it-services/page'));
const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'));
const DigitalTransformationPage = lazy(() => import('./app/digital-transformation/page'));

// 5G Solutions Pages
const FiveGSolutionsPage = lazy(() => import('./app/5g-solutions/page'));

// Micro SaaS Solutions Pages
const MicroSAASSolutionsPage = lazy(() => import('./app/micro-saas-solutions/page'));
const AIContentGeneratorPage = lazy(() => import('./app/ai-content-generator/page'));

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Performance monitoring initialization
      console.log('App initialized');
    }
  }, []);

  return (
    <Router>
      <HelmetProvider>
        <GlobalErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer />
          <div className="min-h-screen bg-gray-900 text-white">
            <Navigation />
            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  
                  {/* AI Services Routes */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/ai-solutions" element={<AISolutionsPage />} />
                  
                  {/* IT Services Routes */}
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  
                  {/* 5G Solutions Routes */}
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  
                  {/* Micro SaaS Solutions Routes */}
                  <Route path="/micro-saas-solutions" element={<MicroSAASSolutionsPage />} />
                  <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </GlobalErrorBoundary>
      </HelmetProvider>
    </Router>
  );
}

export default App;