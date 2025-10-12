import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import PageLoader from './app/components/LoadingStates';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import FuturisticBackground from './app/components/FuturisticBackground';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AiCrmPage = React.lazy(() => import('./app/ai-crm/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AiHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AiFinancialServicesPage = React.lazy(() => import('./app/ai-financial-services/page'));
const AiComputerVisionPage = React.lazy(() => import('./app/ai-computer-vision/page'));
const AiVoiceSolutionsPage = React.lazy(() => import('./app/ai-voice-solutions/page'));
const AiEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AiHrSolutionsPage = React.lazy(() => import('./app/ai-hr-solutions/page'));
const AiContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AiWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));
const AiDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'));
const AiPredictiveAnalyticsPage = React.lazy(() => import('./app/ai-predictive-analytics/page'));

// 5G Service Pages
const FiveGDataAnalyticsPage = React.lazy(() => import('./app/5g-data-analytics/page'));
const FiveGEdgeComputingPage = React.lazy(() => import('./app/5g-edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const FiveGIoTSolutionsPage = React.lazy(() => import('./app/5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = React.lazy(() => import('./app/5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./app/5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = React.lazy(() => import('./app/5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = React.lazy(() => import('./app/5g-smart-city-solutions/page'));
const FiveGSolutionsPage = React.lazy(() => import('./app/5g-solutions/page'));

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