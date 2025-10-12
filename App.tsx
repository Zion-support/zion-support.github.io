'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/SEOHead';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import("./app/page"));
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const ITServicesPage = React.lazy(() => import("./app/it-services/page"));
const MicroSaasServicesPage = React.lazy(() => import("./app/micro-saas-services/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const DigitalTransformationPage = React.lazy(() => import("./app/digital-transformation/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const AIContentGeneratorPage = React.lazy(() => import("./app/ai-content-generator/page"));
const AIChatbotBuilderPage = React.lazy(() => import("./app/ai-chatbot-builder/page"));
const AIAnalyticsDashboardPage = React.lazy(() => import("./app/ai-analytics-dashboard/page"));
const AIEmailAssistantPage = React.lazy(() => import("./app/ai-email-assistant/page"));
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const CloudMigrationPage = React.lazy(() => import("./app/cloud-migration/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const DevOpsCICDPage = React.lazy(() => import("./app/devops-cicd/page"));
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

// Main App Component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <main className="pt-20">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                  <Route path="/cloud-services" element={<CloudServicesPage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  
                  {/* Legal Pages */}
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  
                  {/* AI Service Pages */}
                  <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                  <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                  <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                  <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
                  <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                  <Route path="/ai-automation" element={<AIAutomationPage />} />
                  
                  {/* IT Service Pages */}
                  <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                  <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                  <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  
                  {/* 404 Route */}
                  <Route path="*" element={
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                        <p className="text-xl text-gray-300 mb-8">Page not found</p>
                        <a 
                          href="/" 
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                        >
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
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
