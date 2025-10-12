import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/futuristic.css';
import './styles/futuristic-enhanced.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './page';
import PageLoader from './components/LoadingStates';
import PerformanceMonitor from './components/PerformanceMonitor';
import FuturisticBackground from './components/FuturisticBackground';

// Lazy load pages for better performance
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

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import('./ai-analytics/page'));
const AiAutomationPage = React.lazy(() => import('./ai-automation/page'));
const AiChatbotBuilderPage = React.lazy(() => import('./ai-chatbot-builder/page'));
const AiCybersecurityPage = React.lazy(() => import('./ai-cybersecurity/page'));
const AiCrmPage = React.lazy(() => import('./ai-crm/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./ai-data-analytics/page'));
const AiHealthcarePage = React.lazy(() => import('./ai-healthcare/page'));
const AiFinancialServicesPage = React.lazy(() => import('./ai-financial-services/page'));
const AiComputerVisionPage = React.lazy(() => import('./ai-computer-vision/page'));
const AiVoiceSolutionsPage = React.lazy(() => import('./ai-voice-solutions/page'));
const AiEcommerceSolutionsPage = React.lazy(() => import('./ai-ecommerce-solutions/page'));
const AiHrSolutionsPage = React.lazy(() => import('./ai-hr-solutions/page'));
const AiContentGenerationPage = React.lazy(() => import('./ai-content-generation/page'));
const AiWorkflowAutomationPage = React.lazy(() => import('./ai-workflow-automation/page'));
const AiDocumentProcessingPage = React.lazy(() => import('./ai-document-processing/page'));
const AiPredictiveAnalyticsPage = React.lazy(() => import('./ai-predictive-analytics/page'));

// 5G Service Pages
const FiveGDataAnalyticsPage = React.lazy(() => import('./5g-data-analytics/page'));
const FiveGEdgeComputingPage = React.lazy(() => import('./5g-edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./5g-implementation/page'));
const FiveGIoTSolutionsPage = React.lazy(() => import('./5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = React.lazy(() => import('./5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = React.lazy(() => import('./5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = React.lazy(() => import('./5g-smart-city-solutions/page'));
const FiveGSolutionsPage = React.lazy(() => import('./5g-solutions/page'));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <FuturisticBackground />
        <Navigation />
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
            
            {/* AI Service Routes */}
            <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
            <Route path="/ai-automation" element={<AiAutomationPage />} />
            <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
            <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
            <Route path="/ai-crm" element={<AiCrmPage />} />
            <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
            <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
            <Route path="/ai-financial-services" element={<AiFinancialServicesPage />} />
            <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
            <Route path="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} />
            <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
            <Route path="/ai-hr-solutions" element={<AiHrSolutionsPage />} />
            <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
            <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
            <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
            <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
            
            {/* 5G Service Routes */}
            <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
            <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
            <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
            <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
            <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
            <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
            <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
            <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <PerformanceMonitor />
      </div>
    </BrowserRouter>
  );
}

export default App;