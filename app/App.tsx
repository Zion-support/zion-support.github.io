import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/futuristic.css';
import './styles/futuristic-enhanced.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './page';
import PageLoader from './components/LoadingStates';
import PerformanceMonitor from './components/PerformanceMonitor';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./about/page'));
const ContactPage = React.lazy(() => import('./contact/page'));
const ServicesPage = React.lazy(() => import('./services/page'));
const PricingPage = React.lazy(() => import('./pricing/page'));
const BlogPage = React.lazy(() => import('./blog/page'));
const CaseStudiesPage = React.lazy(() => import('./case-studies/page'));
const CareersPage = React.lazy(() => import('./careers/page'));
const AIServicesPage = React.lazy(() => import('./ai-services/page'));
const TutorialsPage = React.lazy(() => import('./tutorials/page'));
const ConsultationPage = React.lazy(() => import('./consultation/page'));
const DemoPage = React.lazy(() => import('./demo/page'));
const SupportPage = React.lazy(() => import('./support/page'));
const PrivacyPage = React.lazy(() => import('./privacy/page'));
const TermsPage = React.lazy(() => import('./terms/page'));
const CookiesPage = React.lazy(() => import('./cookies/page'));
const SitemapPage = React.lazy(() => import('./sitemap/page'));

// Lazy load additional pages as needed
const ITServicesPage = React.lazy(() => import('./it-services/page'));
const MicroSAASPage = React.lazy(() => import('./micro-saas/page'));

// Main App Component
function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <PerformanceMonitor>
          <BrowserRouter>
            <div className="a p"p">
              <Navigation />
              <main>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/micro-saas" element={<MicroSAASPage />} />
                    <Route path="/tutorials" element={<TutorialsPage />} />
                    <Route path="/consultation" element={<ConsultationPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/cookies" element={<CookiesPage />} />
                    <Route path="/sitemap" element={<SitemapPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </PerformanceMonitor>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
