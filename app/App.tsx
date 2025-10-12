'use client';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const PricingPage = lazy(() => import('./pricing/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));

// AI Service Pages
const AiAnalyticsPage = lazy(() => import('./ai-analytics/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page'));
const AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AiCrmPage = lazy(() => import('./ai-crm/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFinancialServicesPage = lazy(() => import('./ai-financial-services/page'));
const AiComputerVisionPage = lazy(() => import('./ai-computer-vision/page'));
const AiVoiceSolutionsPage = lazy(() => import('./ai-voice-solutions/page'));
const AiEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const AiHrSolutionsPage = lazy(() => import('./ai-hr-solutions/page'));
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));

// IT Service Pages
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const ApiDevelopmentPage = lazy(() => import('./api-development/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const DevopsCicdPage = lazy(() => import('./devops-cicd/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import('./5g-data-analytics/page'));
const FiveGEdgeComputingPage = lazy(() => import('./5g-edge-computing/page'));
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'));
const FiveGIotSolutionsPage = lazy(() => import('./5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = lazy(() => import('./5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = lazy(() => import('./5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = lazy(() => import('./5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = lazy(() => import('./5g-smart-city-solutions/page'));
const FiveGSolutionsPage = lazy(() => import('./5g-solutions/page'));

// Main App Component
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Main Pages */}
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
            
            {/* AI Service Pages */}
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
            
            {/* IT Service Pages */}
            <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
            <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
            <Route path="/web-development" element={<WebDevelopmentPage />} />
            <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
            <Route path="/api-development" element={<ApiDevelopmentPage />} />
            <Route path="/database-management" element={<DatabaseManagementPage />} />
            <Route path="/devops-cicd" element={<DevopsCicdPage />} />
            <Route path="/it-support" element={<ItSupportPage />} />
            
            {/* 5G Solutions Pages */}
            <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
            <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
            <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
            <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
            <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
            <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
            <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
            <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
            
            {/* 404 Page */}
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;