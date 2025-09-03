import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/loading-spinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/home'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
const ServicesPage = lazy(() => import('./pages/services'));
const SolutionsPage = lazy(() => import('./pages/solutions'));
const ServicesOverview = lazy(() => import('./pages/services-overview'));

// New pages
const PrivacyPage = lazy(() => import('./pages/privacy'));
const TermsPage = lazy(() => import('./pages/terms'));
const CookiesPage = lazy(() => import('./pages/cookies'));
const CareersPage = lazy(() => import('./pages/careers'));
const BlogPage = lazy(() => import('./pages/blog'));

// Service pages
const AIContentGenerationSuite = lazy(() => import('./pages/services/ai-content-generation-suite'));
const CloudMigrationServices = lazy(() => import('./pages/services/cloud-migration-services'));
const SmartCRMPlatform = lazy(() => import('./pages/services/smart-crm-platform'));

// Import Header and Footer components
import Header from './components/header/Header';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <div className="min-h-screen bg-white">
          <Header />
          <main className="pt-32">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services-overview" element={<ServicesOverview />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                
                {/* New pages */}
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/blog" element={<BlogPage />} />
                
                {/* Service pages */}
                <Route path="/services/ai-content-generation-suite" element={<AIContentGenerationSuite />} />
                <Route path="/services/cloud-migration-services" element={<CloudMigrationServices />} />
                <Route path="/services/smart-crm-platform" element={<SmartCRMPlatform />} />
                
                {/* Catch all route */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;