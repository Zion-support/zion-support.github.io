import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));

// AI Services
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));

// IT Services
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));

// Cloud Services
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'));

// 5G Implementation
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));

// Digital Transformation
const DigitalTransformationPage = React.lazy(() => import('./app/digital-transformation/page'));

// Micro SaaS
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));

// Emerging Technologies
const BlockchainPage = React.lazy(() => import('./app/blockchain/page'));
const QuantumComputingPage = React.lazy(() => import('./app/quantum-computing/page'));
const IoTEdgeComputingPage = React.lazy(() => import('./app/iot-edge-computing/page'));
const ARVRSolutionsPage = React.lazy(() => import('./app/ar-vr-solutions/page'));
const AutonomousSystemsPage = React.lazy(() => import('./app/autonomous-systems/page'));

// Support Pages
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));

// Dynamic Page Component for all other pages
const DynamicPage = React.lazy(() => import('./app/components/DynamicPage'));

// Loading component
const AppLoadingSpinner = () => (
  <LoadingSpinner 
    size="xl" 
    text="Loading Zion Tech Group..." 
    fullScreen 
  />
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <React.Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/careers" element={<CareersPage />} />
                
                {/* Legal Pages */}
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                
                {/* AI Services */}
                <Route path="/ai-services" element={<AiServicesPage />} />
                
                {/* IT Services */}
                <Route path="/it-services" element={<ItServicesPage />} />
                
                {/* Cloud Services */}
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                
                {/* 5G Implementation */}
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                
                {/* Digital Transformation */}
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                
                {/* Micro SaaS */}
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                
                {/* Emerging Technologies */}
                <Route path="/blockchain" element={<BlockchainPage />} />
                <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />
                <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                
                {/* Support Pages */}
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/api-docs" element={<ApiDocsPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                
                {/* Dynamic Routes for all other pages */}
                <Route path="/*" element={<DynamicPage />} />
              </Routes>
            </React.Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;