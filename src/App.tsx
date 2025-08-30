import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { EnhancedHeader } from './components/EnhancedHeader';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AIServicesPage } from './pages/AIServicesPage';
import { ITServicesPage } from './pages/ITServicesPage';
import { MicroSaasPage } from './pages/MicroSaasPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { CareersPage } from './pages/CareersPage';
import { PartnersPage } from './pages/PartnersPage';
import { NewsPage } from './pages/NewsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PricingPage } from './pages/PricingPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-futuristic">
          <EnhancedHeader />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;