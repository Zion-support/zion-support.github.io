'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/EnhancedSEOHead';
import SkipLink from './app/components/EnhancedSkipLink';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/EnhancedAnalytics';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));

// AI Services
const AIVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'));
const AIEmailAssistantPage = React.lazy(() => import('./app/ai-email-assistant/page'));
const AIContentGeneratorPage = React.lazy(() => import('./app/ai-content-generator/page'));
const AIAnalyticsDashboardPage = React.lazy(() => import('./app/ai-analytics-dashboard/page'));
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AIAutomationPage = React.lazy(() => import('./app/ai-automation/page'));

// IT Services
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'));
const CybersecuritySolutionsPage = React.lazy(() => import('./app/cybersecurity-solutions/page'));
const DevOpsCICDPage = React.lazy(() => import('./app/devops-cicd/page'));
const CustomSoftwareDevelopmentPage = React.lazy(() => import('./app/custom-software-development/page'));
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'));
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'));

// Micro SAAS Products
const ZionAnalyticsProPage = React.lazy(() => import('./app/zion-analytics-pro/page'));
const ZionVoiceAIPage = React.lazy(() => import('./app/zion-voice-ai/page'));
const ZionEmailProPage = React.lazy(() => import('./app/zion-email-pro/page'));
const ZionContentAIPage = React.lazy(() => import('./app/zion-content-ai/page'));
const ZionSecurityShieldPage = React.lazy(() => import('./app/zion-security-shield/page'));
const ZionCRMIntelligencePage = React.lazy(() => import('./app/zion-crm-intelligence/page'));

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <React.Fragment>{children}</React.Fragment>
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <Router>
            <AppWithPerformanceMonitoring>
              <SkipLink />
              <SEOHead />
              <EnhancedAccessibility />
              <PerformanceOptimizer />
              <AccessibilityEnhancer />
              
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Navigation />
                
                <main className="pt-20">
                  <Breadcrumb />
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      {/* Main Pages */}
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      
                      {/* Service Categories */}
                      <Route path="/ai-services" element={<AIServicesPage />} />
                      <Route path="/it-services" element={<ITServicesPage />} />
                      <Route path="/micro-saas" element={<MicroSaasPage />} />
                      
                      {/* AI Services */}
                      <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                      <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
                      <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                      <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                      <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                      <Route path="/ai-automation" element={<AIAutomationPage />} />
                      
                      {/* IT Services */}
                      <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                      <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                      <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
                      <Route path="/custom-software-development" element={<CustomSoftwareDevelopmentPage />} />
                      <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                      <Route path="/web-development" element={<WebDevelopmentPage />} />
                      
                      {/* Micro SAAS Products */}
                      <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                      <Route path="/zion-voice-ai" element={<ZionVoiceAIPage />} />
                      <Route path="/zion-email-pro" element={<ZionEmailProPage />} />
                      <Route path="/zion-content-ai" element={<ZionContentAIPage />} />
                      <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                      <Route path="/zion-crm-intelligence" element={<ZionCRMIntelligencePage />} />
                      
                      {/* 404 Page */}
                      <Route path="*" element={
                        <div className="min-h-screen flex items-center justify-center">
                          <div className="text-center">
                            <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                            <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                            <a href="/" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                              Go Home
                            </a>
                          </div>
                        </div>
                      } />
                    </Routes>
                  </Suspense>
                </main>
                
                <Footer />
              </div>
            </AppWithPerformanceMonitoring>
          </Router>
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;