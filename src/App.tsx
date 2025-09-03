import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/loading-spinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/index'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
const ServicesPage = lazy(() => import('./pages/services'));
const SolutionsPage = lazy(() => import('./pages/solutions'));
const BlogPage = lazy(() => import('./pages/blog'));
const FAQPage = lazy(() => import('./pages/faq'));
const CareersPage = lazy(() => import('./pages/careers'));
const PartnersPage = lazy(() => import('./pages/partners'));
const NewsPage = lazy(() => import('./pages/news'));
const ResearchDevelopmentPage = lazy(() => import('./pages/research-development'));
const RequestQuotePage = lazy(() => import('./pages/request-quote'));
const GreenITPage = lazy(() => import('./pages/green-it'));

// Service pages
const AIContentGenerationSuite = lazy(() => import('./pages/services/ai-content-generation-suite'));
const CloudMigrationServices = lazy(() => import('./pages/services/cloud-migration-services'));
const SmartCRMPlatform = lazy(() => import('./pages/services/smart-crm-platform'));
const AIAnalytics = lazy(() => import('./pages/services/ai-analytics'));
const Cybersecurity = lazy(() => import('./pages/services/cybersecurity'));
const CloudDevOps = lazy(() => import('./pages/services/cloud-devops'));
const IoTEdge = lazy(() => import('./pages/services/iot-edge'));
const QuantumComputing = lazy(() => import('./pages/services/quantum-computing'));
const Blockchain = lazy(() => import('./pages/services/blockchain'));
const DigitalTwin = lazy(() => import('./pages/services/digital-twin'));
const Sustainability = lazy(() => import('./pages/services/sustainability'));

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/research-development" element={<ResearchDevelopmentPage />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            <Route path="/green-it" element={<GreenITPage />} />
            
            {/* Service pages */}
            <Route path="/services/ai-content-generation-suite" element={<AIContentGenerationSuite />} />
            <Route path="/services/cloud-migration-services" element={<CloudMigrationServices />} />
            <Route path="/services/smart-crm-platform" element={<SmartCRMPlatform />} />
            <Route path="/services/ai-analytics" element={<AIAnalytics />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/cloud-devops" element={<CloudDevOps />} />
            <Route path="/services/iot-edge" element={<IoTEdge />} />
            <Route path="/services/quantum-computing" element={<QuantumComputing />} />
            <Route path="/services/blockchain" element={<Blockchain />} />
            <Route path="/services/digital-twin" element={<DigitalTwin />} />
            <Route path="/services/sustainability" element={<Sustainability />} />
            
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}
;
export default App;