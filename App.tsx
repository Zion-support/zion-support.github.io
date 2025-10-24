'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route     } from 'react-router-dom';
import { HelmetProvider     } from 'react-helmet-async';
import './app/styles/futuristic.css'
// Components;
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundaryWrapper from './app/components/ErrorBoundaryWrapper';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import FuturisticBackground from './app/components/FuturisticBackground';
import LoadingSpinner from './app/components/LoadingSpinner';
import Breadcrumb from './app/components/Breadcrumb';
import HomePage from './app/page';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibilityWrapper from './app/components/EnhancedAccessibilityWrapper'
// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const ServicesPage = React.lazy(() => import('./app/services/page'))
const PricingPage = React.lazy(() => import('./app/pricing/page'))
const BlogPage = React.lazy(() => import('./app/blog/page'))
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'))
const CareersPage = React.lazy(() => import('./app/careers/page'))
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const ItServicesPage = React.lazy(() => import('./app/it-services/page'))
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'))
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'))
const ConsultationPage = React.lazy(() => import('./app/consultation/page'))
const DemoPage = React.lazy(() => import('./app/demo/page'))
const SupportPage = React.lazy(() => import('./app/support/page'))
const PrivacyPage = React.lazy(() => import('./app/privacy/page'))
const TermsPage = React.lazy(() => import('./app/terms/page'))
const CookiesPage = React.lazy(() => import('./app/cookies/page'))
const SitemapPage = React.lazy(() => import('./app/sitemap/page'))
// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'))
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'))
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'))
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'))
const AiCrmPage = React.lazy(() => import('./app/ai-crm/page'))
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'))
const AiHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'))
const AiFinancialServicesPage = React.lazy(() => import('./app/ai-financial-services/page'))
const AiComputerVisionPage = React.lazy(() => import('./app/ai-computer-vision/page'))
const AiVoiceSolutionsPage = React.lazy(() => import('./app/ai-voice-solutions/page'))
const AiEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'))
const AiHrSolutionsPage = React.lazy(() => import('./app/ai-hr-solutions/page'))
const AiWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'))
const AiDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'))
const AiPredictiveAnalyticsPage = React.lazy(() => import('./app/ai-predictive-analytics/page'))
const AiEdgeComputingPage = React.lazy(() => import('./app/ai-edge-computing/page'))
// Main App Component
function App() {
return (
    <HelmetProvider>
      <ErrorBoundaryWrapper>
        <Router>,
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
            <FuturisticBackground />
            <Navigation />
            <Breadcrumb />
            <Suspensefallback={<LoadingSpinner />}>
              <Routes>
                <Routepath="/" element={<HomePage />} />
                <Routepath="/about" element={<AboutPage />} />
                <Routepath="/contact" element={<ContactPage />} />
                <Routepath="/services" element={<ServicesPage />} />
                <Routepath="/pricing" element={<PricingPage />} />
                <Routepath="/blog" element={<BlogPage />} />
                <Routepath="/case-studies" element={<CaseStudiesPage />} />
                <Routepath="/careers" element={<CareersPage />} />
                <Routepath="/ai-services" element={<AIServicesPage />} />
                <Routepath="/it-services" element={<ItServicesPage />} />
                <Routepath="/micro-saas" element={<MicroSaasPage />} />
                <Routepath="/tutorials" element={<TutorialsPage />} />
                <Routepath="/consultation" element={<ConsultationPage />} />
                <Routepath="/demo" element={<DemoPage />} />
                <Routepath="/support" element={<SupportPage />} />
                <Routepath="/privacy" element={<PrivacyPage />} />
                <Routepath="/terms" element={<TermsPage />} />
                <Routepath="/cookies" element={<CookiesPage />} />
                <Routepath="/sitemap" element={<SitemapPage />} />

                {/* AI Service Routes */}
                <Routepath="/ai-analytics" element={<AiAnalyticsPage />} />
                <Routepath="/ai-automation" element={<AiAutomationPage />} />
                <Routepath="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                <Routepath="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                <Routepath="/ai-crm" element={<AiCrmPage />} />
                <Routepath="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                <Routepath="/ai-healthcare" element={<AiHealthcarePage />} />
                <Routepath="/ai-financial-services" element={<AiFinancialServicesPage />} />
                <Routepath="/ai-computer-vision" element={<AiComputerVisionPage />} />
                <Routepath="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} />
                <Routepath="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
                <Routepath="/ai-hr-solutions" element={<AiHrSolutionsPage />} />
                <Routepath="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                <Routepath="/ai-document-processing" element={<AiDocumentProcessingPage />} />
                <Routepath="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                <Routepath="/ai-edge-computing" element={<AiEdgeComputingPage />} />
              </Routes>
            </Suspense>
            <Footer />
            <PerformanceMonitor />
            <PerformanceOptimizer />
            <AccessibilityEnhancer />
            <EnhancedAccessibilityWrapper />
          </div>
        </Router>
      </ErrorBoundaryWrapper>
    </HelmetProvider>
  )
}
;
export default App;