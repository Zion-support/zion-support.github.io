import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/futuristic.css';
import './styles/futuristic-enhanced.css';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./page'));
const AboutPage = React.lazy(() => import('./about/page'));
const ContactPage = React.lazy(() => import('./contact/page'));
const ServicesPage = React.lazy(() => import('./services/page'));
const PricingPage = React.lazy(() => import('./pricing/page'));
const BlogPage = React.lazy(() => import('./blog/page'));
const CaseStudiesPage = React.lazy(() => import('./case-studies/page'));
const CareersPage = React.lazy(() => import('./careers/page'));
const AIServicesPage = React.lazy(() => import('./ai-services/page'));
const ItServicesPage = React.lazy(() => import('./it-services/page'));
const MicroSaasPage = React.lazy(() => import('./micro-saas/page'));
const TutorialsPage = React.lazy(() => import('./tutorials/page'));
const ConsultationPage = React.lazy(() => import('./consultation/page'));
const DemoPage = React.lazy(() => import('./demo/page'));
const SupportPage = React.lazy(() => import('./support/page'));
const PrivacyPage = React.lazy(() => import('./privacy/page'));
const TermsPage = React.lazy(() => import('./terms/page'));
const CookiesPage = React.lazy(() => import('./cookies/page'));
const SitemapPage = React.lazy(() => import('./sitemap/page'));

// 5G Solutions Pages
const Page5gDataAnalytics = React.lazy(() => import('./5g-data-analytics/page'));
const Page5gEdgeComputing = React.lazy(() => import('./5g-edge-computing/page'));
const Page5gImplementation = React.lazy(() => import('./5g-implementation/page'));
const Page5gIotSolutions = React.lazy(() => import('./5g-iot-solutions/page'));
const Page5gMobileApplications = React.lazy(() => import('./5g-mobile-applications/page'));
const Page5gNetworkInfrastructure = React.lazy(() => import('./5g-network-infrastructure/page'));
const Page5gPrivateNetworks = React.lazy(() => import('./5g-private-networks/page'));
const Page5gSmartCitySolutions = React.lazy(() => import('./5g-smart-city-solutions/page'));
const Page5gSolutions = React.lazy(() => import('./5g-solutions/page'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
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
          <Route path="/it-services" element={<ItServicesPage />} />
          <Route path="/micro-saas" element={<MicroSaasPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* 5G Solutions Routes */}
          <Route path="/5g-data-analytics" element={<Page5gDataAnalytics />} />
          <Route path="/5g-edge-computing" element={<Page5gEdgeComputing />} />
          <Route path="/5g-implementation" element={<Page5gImplementation />} />
          <Route path="/5g-iot-solutions" element={<Page5gIotSolutions />} />
          <Route path="/5g-mobile-applications" element={<Page5gMobileApplications />} />
          <Route path="/5g-network-infrastructure" element={<Page5gNetworkInfrastructure />} />
          <Route path="/5g-private-networks" element={<Page5gPrivateNetworks />} />
          <Route path="/5g-smart-city-solutions" element={<Page5gSmartCitySolutions />} />
          <Route path="/5g-solutions" element={<Page5gSolutions />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;