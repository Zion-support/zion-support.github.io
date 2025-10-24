'use client';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibility from './components/EnhancedAccessibility';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const TeamPage = lazy(() => import('./team/page'));

// AI Services
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AiContentGeneratorPage = lazy(() => import('./ai-content-generator/page'));

// IT Services
const DatabaseServicesPage = lazy(() => import('./database-services/page'));
const SecurityPage = lazy(() => import('./security/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));

// Specialized Services
const BlockchainSolutionsPage = lazy(() => import('./blockchain-solutions-pro/page'));
const SmartCityInfrastructurePage = lazy(() => import('./smart-city-infrastructure/page'));

// Demo and Consultation
const DemoPage = lazy(() => import('./demo/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));

// Micro SaaS pages
const MicroSaasPage = lazy(() => import('./micro-saas/page'));

// Zion AI pages
const ZionAiChatbotBuilderPage = lazy(() => import('./zion-ai-chatbot-builder/page'));
const ZionAiCodeAssistantPage = lazy(() => import('./zion-ai-code-assistant/page'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <PerformanceMonitor />
        <PerformanceOptimizer>
          <EnhancedAccessibility>
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
            </div>}>
              <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/team" element={<TeamPage />} />

                  {/* AI Services */}
                  <Route path="/ai-automation" element={<AiAutomationPage />} />
                  <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                  <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                  <Route path="/ai-content-generator" element={<AiContentGeneratorPage />} />

                  {/* IT Services */}
                  <Route path="/database-services" element={<DatabaseServicesPage />} />
                  <Route path="/security" element={<SecurityPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />

                  {/* Specialized Services */}
                  <Route path="/blockchain-solutions-pro" element={<BlockchainSolutionsPage />} />
                  <Route path="/smart-city-infrastructure" element={<SmartCityInfrastructurePage />} />

                  {/* Demo and Consultation */}
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />

                  {/* Micro SaaS */}
                  <Route path="/micro-saas" element={<MicroSaasPage />} />

                  {/* Zion AI */}
                  <Route path="/zion-ai-chatbot-builder" element={<ZionAiChatbotBuilderPage />} />
                  <Route path="/zion-ai-code-assistant" element={<ZionAiCodeAssistantPage />} />

                  {/* Catch all route */}
                  <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </EnhancedAccessibility>
        </PerformanceOptimizer>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;