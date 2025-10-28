import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Components
import Navigation from "./app/components/Navigation";
// import Sidebar from "./app/components/Sidebar";
import Footer from "./app/components/Footer";
import LoadingPage from "./app/components/Loading";
// import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import ErrorBoundary from "./app/components/ErrorBoundary";
// import Breadcrumb from "./app/components/Breadcrumb";
// import PerformanceOptimizer from "./app/components/PerformanceOptimizer";
// import EnhancedAnalytics from "./app/components/EnhancedAnalytics";

// Pages
import HomePage from "./app/page";
import AboutPage from "./app/about/page";
import ServicesPage from "./app/services/page";
import ContactPage from "./app/contact/page";
import PrivacyPage from "./app/privacy/page";
import TermsPage from "./app/terms/page";
import BlogPage from "./app/blog/page";
import CareersPage from "./app/careers/page";

// Lazy loaded pages
const ITServicesPage = lazy(() => import("./app/it-services/page"));
const CloudInfrastructurePage = lazy(() => import("./app/cloud-infrastructure/page"));
const DigitalTransformationPage = lazy(() => import("./app/digital-transformation/page"));
const FiveGSolutionsPage = lazy(() => import("./app/5g-solutions/page"));
const AIChatbotBuilderPage = lazy(() => import("./app/ai-chatbot-builder/page"));
const AIDocumentProcessorPage = lazy(() => import("./app/ai-document-processor/page"));
const AIFormBuilderPage = lazy(() => import("./app/ai-form-builder/page"));
const AIVoiceAssistantPage = lazy(() => import("./app/ai-voice-assistant/page"));
const AIFraudDetectionPage = lazy(() => import("./app/ai-fraud-detection/page"));
const AIImageRecognitionPage = lazy(() => import("./app/ai-image-recognition/page"));
const AILeadScoringPage = lazy(() => import("./app/ai-lead-scoring/page"));
const AIPredictiveMaintenancePage = lazy(() => import("./app/ai-predictive-maintenance/page"));
const AIPriceOptimizerPage = lazy(() => import("./app/ai-price-optimizer/page"));
const AISchedulingAssistantPage = lazy(() => import("./app/ai-scheduling-assistant/page"));
const AICRMOptimizerPage = lazy(() => import("./app/ai-crm-optimizer/page"));
const AIDataVisualizerPage = lazy(() => import("./app/ai-data-visualizer/page"));
const AIEmailOptimizerPage = lazy(() => import("./app/ai-email-optimizer/page"));
const SocialMediaSchedulerPage = lazy(() => import("./app/social-media-scheduler/page"));
const ExpenseTrackerProPage = lazy(() => import("./app/expense-tracker-pro/page"));
const BlockchainSolutionsPage = lazy(() => import("./app/blockchain-solutions/page"));
const IoTSolutionsPage = lazy(() => import("./app/iot-solutions/page"));
const DevOpsAutomationPage = lazy(() => import("./app/devops-automation/page"));
const DataEngineeringPage = lazy(() => import("./app/data-engineering/page"));
const APIDevelopmentPage = lazy(() => import("./app/api-development/page"));
const SecurityAuditPage = lazy(() => import("./app/security-audit/page"));
const MicroSaasSolutionsPage = lazy(() => import("./app/micro-saas-solutions/page"));
const AIContentGeneratorPage = lazy(() => import("./app/ai-content-generator/page"));
const DataAnalyticsPage = lazy(() => import("./app/data-analytics/page"));
const WebDevelopmentPage = lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = lazy(() => import("./app/database-management/page"));
const NetworkInfrastructurePage = lazy(() => import("./app/network-infrastructure/page"));
const HelpPage = lazy(() => import("./app/help/page"));
const AccessibilityPage = lazy(() => import("./app/accessibility/page"));
const APIDocsPage = lazy(() => import("./app/api-docs/page"));
const PartnershipsPage = lazy(() => import("./app/partnerships/page"));
const TutorialsPage = lazy(() => import("./app/tutorials/page"));
const DocsPage = lazy(() => import("./app/docs/page"));
const SupportPage = lazy(() => import("./app/support/page"));
const DemoPage = lazy(() => import("./app/demo/page"));
const CybersecurityPage = lazy(() => import("./app/cybersecurity/page"));
const CloudSolutionsPage = lazy(() => import("./app/cloud-solutions/page"));
const TaskManagerProPage = lazy(() => import("./app/task-manager-pro/page"));
const AnalyticsDashboardPage = lazy(() => import("./app/analytics-dashboard/page"));
const CustomerSupportHubPage = lazy(() => import("./app/customer-support-hub/page"));
const InventoryManagerPage = lazy(() => import("./app/inventory-manager/page"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingPage />
  </div>
);

function App() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-white text-xl">Loading application...</div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/careers" element={<CareersPage />} />
                
                {/* Lazy loaded routes */}
                <Route path="/it-services" element={<Suspense fallback={<LoadingSpinner />}><ITServicesPage /></Suspense>} />
                <Route path="/cloud-infrastructure" element={<Suspense fallback={<LoadingSpinner />}><CloudInfrastructurePage /></Suspense>} />
                <Route path="/digital-transformation" element={<Suspense fallback={<LoadingSpinner />}><DigitalTransformationPage /></Suspense>} />
                <Route path="/5g-solutions" element={<Suspense fallback={<LoadingSpinner />}><FiveGSolutionsPage /></Suspense>} />
                <Route path="/ai-chatbot-builder" element={<Suspense fallback={<LoadingSpinner />}><AIChatbotBuilderPage /></Suspense>} />
                <Route path="/ai-document-processor" element={<Suspense fallback={<LoadingSpinner />}><AIDocumentProcessorPage /></Suspense>} />
                <Route path="/ai-form-builder" element={<Suspense fallback={<LoadingSpinner />}><AIFormBuilderPage /></Suspense>} />
                <Route path="/ai-voice-assistant" element={<Suspense fallback={<LoadingSpinner />}><AIVoiceAssistantPage /></Suspense>} />
                <Route path="/ai-fraud-detection" element={<Suspense fallback={<LoadingSpinner />}><AIFraudDetectionPage /></Suspense>} />
                <Route path="/ai-image-recognition" element={<Suspense fallback={<LoadingSpinner />}><AIImageRecognitionPage /></Suspense>} />
                <Route path="/ai-lead-scoring" element={<Suspense fallback={<LoadingSpinner />}><AILeadScoringPage /></Suspense>} />
                <Route path="/ai-predictive-maintenance" element={<Suspense fallback={<LoadingSpinner />}><AIPredictiveMaintenancePage /></Suspense>} />
                <Route path="/ai-price-optimizer" element={<Suspense fallback={<LoadingSpinner />}><AIPriceOptimizerPage /></Suspense>} />
                <Route path="/ai-scheduling-assistant" element={<Suspense fallback={<LoadingSpinner />}><AISchedulingAssistantPage /></Suspense>} />
                <Route path="/ai-crm-optimizer" element={<Suspense fallback={<LoadingSpinner />}><AICRMOptimizerPage /></Suspense>} />
                <Route path="/ai-data-visualizer" element={<Suspense fallback={<LoadingSpinner />}><AIDataVisualizerPage /></Suspense>} />
                <Route path="/ai-email-optimizer" element={<Suspense fallback={<LoadingSpinner />}><AIEmailOptimizerPage /></Suspense>} />
                <Route path="/social-media-scheduler" element={<Suspense fallback={<LoadingSpinner />}><SocialMediaSchedulerPage /></Suspense>} />
                <Route path="/expense-tracker-pro" element={<Suspense fallback={<LoadingSpinner />}><ExpenseTrackerProPage /></Suspense>} />
                <Route path="/blockchain-solutions" element={<Suspense fallback={<LoadingSpinner />}><BlockchainSolutionsPage /></Suspense>} />
                <Route path="/iot-solutions" element={<Suspense fallback={<LoadingSpinner />}><IoTSolutionsPage /></Suspense>} />
                <Route path="/devops-automation" element={<Suspense fallback={<LoadingSpinner />}><DevOpsAutomationPage /></Suspense>} />
                <Route path="/data-engineering" element={<Suspense fallback={<LoadingSpinner />}><DataEngineeringPage /></Suspense>} />
                <Route path="/api-development" element={<Suspense fallback={<LoadingSpinner />}><APIDevelopmentPage /></Suspense>} />
                <Route path="/security-audit" element={<Suspense fallback={<LoadingSpinner />}><SecurityAuditPage /></Suspense>} />
                <Route path="/micro-saas-solutions" element={<Suspense fallback={<LoadingSpinner />}><MicroSaasSolutionsPage /></Suspense>} />
                <Route path="/ai-content-generator" element={<Suspense fallback={<LoadingSpinner />}><AIContentGeneratorPage /></Suspense>} />
                <Route path="/data-analytics" element={<Suspense fallback={<LoadingSpinner />}><DataAnalyticsPage /></Suspense>} />
                <Route path="/web-development" element={<Suspense fallback={<LoadingSpinner />}><WebDevelopmentPage /></Suspense>} />
                <Route path="/mobile-development" element={<Suspense fallback={<LoadingSpinner />}><MobileDevelopmentPage /></Suspense>} />
                <Route path="/database-management" element={<Suspense fallback={<LoadingSpinner />}><DatabaseManagementPage /></Suspense>} />
                <Route path="/network-infrastructure" element={<Suspense fallback={<LoadingSpinner />}><NetworkInfrastructurePage /></Suspense>} />
                <Route path="/help" element={<Suspense fallback={<LoadingSpinner />}><HelpPage /></Suspense>} />
                <Route path="/accessibility" element={<Suspense fallback={<LoadingSpinner />}><AccessibilityPage /></Suspense>} />
                <Route path="/api-docs" element={<Suspense fallback={<LoadingSpinner />}><APIDocsPage /></Suspense>} />
                <Route path="/partnerships" element={<Suspense fallback={<LoadingSpinner />}><PartnershipsPage /></Suspense>} />
                <Route path="/tutorials" element={<Suspense fallback={<LoadingSpinner />}><TutorialsPage /></Suspense>} />
                <Route path="/docs" element={<Suspense fallback={<LoadingSpinner />}><DocsPage /></Suspense>} />
                <Route path="/support" element={<Suspense fallback={<LoadingSpinner />}><SupportPage /></Suspense>} />
                <Route path="/demo" element={<Suspense fallback={<LoadingSpinner />}><DemoPage /></Suspense>} />
                <Route path="/cybersecurity" element={<Suspense fallback={<LoadingSpinner />}><CybersecurityPage /></Suspense>} />
                <Route path="/cloud-solutions" element={<Suspense fallback={<LoadingSpinner />}><CloudSolutionsPage /></Suspense>} />
                <Route path="/task-manager-pro" element={<Suspense fallback={<LoadingSpinner />}><TaskManagerProPage /></Suspense>} />
                <Route path="/analytics-dashboard" element={<Suspense fallback={<LoadingSpinner />}><AnalyticsDashboardPage /></Suspense>} />
                <Route path="/customer-support-hub" element={<Suspense fallback={<LoadingSpinner />}><CustomerSupportHubPage /></Suspense>} />
                <Route path="/inventory-manager" element={<Suspense fallback={<LoadingSpinner />}><InventoryManagerPage /></Suspense>} />
                
                {/* 404 route */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                      <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
                      <a href="/" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </main>
            <Footer />
            <PerformanceMonitor />
            <AccessibilityEnhancer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;