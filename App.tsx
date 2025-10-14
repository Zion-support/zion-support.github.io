<<<<<<< HEAD
import React, { Suspense, useEffect, useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
=======
<<<<<<< HEAD

import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { LoadingPage } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/EnhancedSEOHead';
import SkipLink from './app/components/SkipLink';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './app/hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/AnalyticsProvider';


// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const AIOpsPage = React.lazy(() => import('./app/ai-ops/page'));
const HealthcareITPage = React.lazy(() => import('./app/healthcare-it/page'));
const FinancialITPage = React.lazy(() => import('./app/financial-it/page'));
const EdgeComputingPage = React.lazy(() => import('./app/edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const IoTPlatformPage = React.lazy(() => import('./app/iot-platform/page'));

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <>{children}</>;
};
=======
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
<<<<<<< HEAD
import ErrorBoundary from './app/components/ErrorBoundary';
import LoadingSpinner from './app/components/LoadingSpinner';
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
// Import pages
=======
>>>>>>> origin/main

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import AnalyticsProvider from './app/components/AnalyticsProvider';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import SEOEnhancer from './app/components/SEOEnhancer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import LoadingStates from './app/components/LoadingStates';

<<<<<<< HEAD
// IT Services Pages
const CloudMigrationPage = React.lazy(() => import("./app/cloud-migration/page"));
const DevOpsServicesPage = React.lazy(() => import("./app/devops/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const SoftwareDevelopmentPage = React.lazy(() => import("./app/custom-software/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));

// 5G Services Pages
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));

// Micro SAAS Services Pages
const MicroSaaSServicesPage = React.lazy(() => import("./app/zion-content-studio/page"));
const ProjectManagementToolPage = React.lazy(() => import("./app/project-management-pro/page"));
const CustomerRelationshipManagerPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
const InventoryManagementSystemPage = React.lazy(() => import("./app/zion-inventory-smart/page"));
const FinancialReportingToolPage = React.lazy(() => import("./app/ai-financial-analytics-pro/page"));
const EmployeeTimeTrackerPage = React.lazy(() => import("./app/zion-performance-monitor/page"));
const SocialMediaSchedulerPage = React.lazy(() => import("./app/zion-ai-marketing-automation/page"));
const EmailMarketingPlatformPage = React.lazy(() => import("./app/zion-email-automation/page"));
const WebsiteAnalyticsToolPage = React.lazy(() => import("./app/data-analytics/page"));
const TaskAutomationWorkflowPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// Additional AI Services Pages
const AIChatbotBuilderPage = React.lazy(() => import("./app/ai-chatbot-builder/page"));
const AICodeAssistantPage = React.lazy(() => import("./app/ai-code-assistant/page"));
const AIDesignStudioPage = React.lazy(() => import("./app/ai-design-studio/page"));
const AIComputerVisionPage = React.lazy(() => import("./app/ai-computer-vision/page"));
const AIConversationalAIPage = React.lazy(() => import("./app/ai-conversational-ai/page"));
const AICRMPage = React.lazy(() => import("./app/ai-crm/page"));
const AICustomerInsightsPage = React.lazy(() => import("./app/ai-customer-insights/page"));
const AIDataVisualizationPage = React.lazy(() => import("./app/ai-data-visualization/page"));
const AIDevOpsAutomationPage = React.lazy(() => import("./app/ai-devops-automation/page"));
const AIDocumentIntelligencePage = React.lazy(() => import("./app/ai-document-intelligence/page"));

// Additional IT Services Pages
const CloudConsultingPage = React.lazy(() => import("./app/cloud-consulting/page"));
const DataCenterSolutionsPage = React.lazy(() => import("./app/data-center-solutions/page"));
const DisasterRecoveryPage = React.lazy(() => import("./app/disaster-recovery/page"));
const ITSupportPage = React.lazy(() => import("./app/it-support/page"));
const ManagedServicesPage = React.lazy(() => import("./app/managed-services/page"));
const SecurityAuditPage = React.lazy(() => import("./app/security-audit/page"));
const TechnologyConsultingPage = React.lazy(() => import("./app/technology-consulting/page"));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <AnalyticsProvider>
            <PerformanceMonitor>
              <WebVitalsTracker>
                <AccessibilityEnhancer>
                  <CoreWebVitals>
                    <Router>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                        <FuturisticBackground>
                          <Navigation onSidebarToggle={toggleSidebar} />
                          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                          <Breadcrumb />
                          
                          <main className="relative z-10" id="main-content" role="main">
                            <Suspense fallback={<LoadingPage />}>
                              <Routes>
                                {/* Main Pages */}
                                <Route path="/" element={<HomePage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/services" element={<ServicesPage />} />
                                <Route path="/micro-saas" element={<MicroSaasPage />} />
                                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                                <Route path="/blog" element={<BlogPage />} />
                                <Route path="/ai-services" element={<AIServicesPage />} />
                                <Route path="/tutorials" element={<TutorialsPage />} />
                                <Route path="/demo" element={<DemoPage />} />
                                <Route path="/support" element={<SupportPage />} />
                                <Route path="/privacy" element={<PrivacyPage />} />
                                <Route path="/terms" element={<TermsPage />} />
                                
                                {/* AI Services Routes */}
                                <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                                <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                                <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                                <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                                <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                                <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                                <Route path="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />
                                <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                                <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                                
                                {/* Additional AI Services Routes */}
                                <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                                <Route path="/ai-code-assistant" element={<AICodeAssistantPage />} />
                                <Route path="/ai-design-studio" element={<AIDesignStudioPage />} />
                                <Route path="/ai-computer-vision" element={<AIComputerVisionPage />} />
                                <Route path="/ai-conversational-ai" element={<AIConversationalAIPage />} />
                                <Route path="/ai-crm" element={<AICRMPage />} />
                                <Route path="/ai-customer-insights" element={<AICustomerInsightsPage />} />
                                <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
                                <Route path="/ai-devops-automation" element={<AIDevOpsAutomationPage />} />
                                <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />

                                {/* IT Services Routes */}
                                <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                                <Route path="/devops-services" element={<DevOpsServicesPage />} />
                                <Route path="/it-consulting" element={<ITConsultingPage />} />
                                <Route path="/network-security" element={<NetworkSecurityPage />} />
                                <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
                                <Route path="/system-integration" element={<SystemIntegrationPage />} />
                                <Route path="/web-development" element={<WebDevelopmentPage />} />
                                
                                {/* Additional IT Services Routes */}
                                <Route path="/cloud-consulting" element={<CloudConsultingPage />} />
                                <Route path="/data-center-solutions" element={<DataCenterSolutionsPage />} />
                                <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
                                <Route path="/it-support" element={<ITSupportPage />} />
                                <Route path="/managed-services" element={<ManagedServicesPage />} />
                                <Route path="/security-audit" element={<SecurityAuditPage />} />
                                <Route path="/technology-consulting" element={<TechnologyConsultingPage />} />

                                {/* 5G Solutions Routes */}
                                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                                <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />

                                {/* Micro SAAS Services Routes */}
                                <Route path="/micro-saas-services" element={<MicroSaaSServicesPage />} />
                                <Route path="/project-management-tool" element={<ProjectManagementToolPage />} />
                                <Route path="/customer-relationship-manager" element={<CustomerRelationshipManagerPage />} />
                                <Route path="/inventory-management-system" element={<InventoryManagementSystemPage />} />
                                <Route path="/financial-reporting-tool" element={<FinancialReportingToolPage />} />
                                <Route path="/employee-time-tracker" element={<EmployeeTimeTrackerPage />} />
                                <Route path="/social-media-scheduler" element={<SocialMediaSchedulerPage />} />
                                <Route path="/email-marketing-platform" element={<EmailMarketingPlatformPage />} />
                                <Route path="/website-analytics-tool" element={<WebsiteAnalyticsToolPage />} />
                                <Route path="/task-automation-workflow" element={<TaskAutomationWorkflowPage />} />

                                {/* Catch all route */}
                                <Route path="*" element={
                                  <div className="min-h-screen flex items-center justify-center">
                                    <div className="text-center">
                                      <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                                      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                                      <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Go Home
                                      </a>
                                    </div>
                                  </div>
                                } />
                              </Routes>
                            </Suspense>
                          </main>
                          
                          <Footer />
                        </FuturisticBackground>
                      </div>
                    </Router>
                  </CoreWebVitals>
                </AccessibilityEnhancer>
              </WebVitalsTracker>
            </PerformanceMonitor>
          </AnalyticsProvider>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

=======
// Page components
>>>>>>> origin/main
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/AboutPage';
import ServicesPage from './app/pages/ServicesPage';
import ContactPage from './app/pages/ContactPage';
<<<<<<< HEAD
import NotFoundPage from './app/404';
function App() {
<<<<<<< HEAD
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
=======
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
>>>>>>> origin/main
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 flex">"
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col">"
              <Navigation onSidebarToggle={() => setSidebarOpen(true)} />
              <main className="relative z-10 flex-1" id="main-content" role="main">"
                <ErrorBoundary>
                  <Suspense fallback={<LoadingSpinner fullScreen text="Loading page..." />}>"
                    <Routes>
                      <Route path="/" element={<HomePage />} />"
                      <Route path="/about" element={<AboutPage />} />"
                      <Route path="/services" element={<ServicesPage />} />"
                      <Route path="/contact" element={<ContactPage />} />"
                      <Route path="*" element={<NotFoundPage />} />"
                    </Routes>
                  </Suspense>
                </ErrorBoundary>
              </main>
            </div>
          </div>
        </Router>
=======

const App = () => {
  const handlePerformanceMetrics = (metrics: {
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
  }) => {
    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
    
    // Send to analytics in production
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag) {
      (window as unknown as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag('event', 'performance_metrics', {
        custom_parameter_1: metrics.fcp,
        custom_parameter_2: metrics.lcp,
        custom_parameter_3: metrics.fid,
        custom_parameter_4: metrics.cls
      });
    }
  };
>>>>>>> origin/main

const App: React.FC = memo(() => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer>
<<<<<<< HEAD
              <EnhancedAccessibility>
                <AppWithPerformanceMonitoring>
                  <SEOHead />
                  <Router>
                    <div className="min-h-screen bg-white overflow-x-hidden">
                      <SkipLink to="#main-content">Skip to main content</SkipLink>
                      <Navigation />
                      <Breadcrumb />
                      <main id="main-content" className="w-full">
                        <Suspense fallback={<LoadingPage message="Loading Zion Tech Group..." />}>
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/ai-services" element={<AIServicesPage />} />
                            <Route path="/it-services" element={<ITServicesPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/team" element={<TeamPage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/cookies" element={<CookiesPage />} />
                            <Route path="/docs" element={<DocsPage />} />
                            <Route path="/api-docs" element={<ApiDocsPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/status" element={<StatusPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/consultation" element={<ConsultationPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/ai-ops" element={<AIOpsPage />} />
                            <Route path="/healthcare-it" element={<HealthcareITPage />} />
                            <Route path="/financial-it" element={<FinancialITPage />} />
                            <Route path="/edge-computing" element={<EdgeComputingPage />} />
                            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                            <Route path="/iot-platform" element={<IoTPlatformPage />} />
                          </Routes>
                        </Suspense>
                      </main>
                      <Footer />
                    </div>
                  </Router>
                </AppWithPerformanceMonitoring>
              </EnhancedAccessibility>
=======
              <SEOEnhancer
                title="Zion Tech Group - Advanced AI and IT Solutions"
                description="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation."
                keywords={['AI', 'IT solutions', 'automation', 'digital transformation', 'cybersecurity', 'cloud infrastructure']}
                type="website"
                structuredData={{
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Zion Tech Group",
                  "description": "Leading provider of AI and IT solutions",
                  "url": "https://ziontechgroup.com",
                  "logo": "https://ziontechgroup.com/images/logo.png",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-0123",
                    "contactType": "customer service"
                  }
                }}
              >
                <div></div>
              </SEOEnhancer>
              <PerformanceMonitor onMetricsUpdate={handlePerformanceMetrics} />
              <Router>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  <Navigation />
                  <main className="relative z-10" id="main-content" role="main">
                    <Suspense fallback={<LoadingStates type="page" />}>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                </div>
              </Router>
>>>>>>> origin/main
            </AccessibilityEnhancer>
          </PerformanceOptimizer>
        </AnalyticsProvider>
>>>>>>> origin/main
      </HelmetProvider>
    </ErrorBoundary>
  );
<<<<<<< HEAD
});

App.displayName = 'App';

=======
};

>>>>>>> origin/main
>>>>>>> origin/main
export default App;