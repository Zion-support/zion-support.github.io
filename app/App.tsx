'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const BlogPage = lazy(() => import('./blog/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));

// AI Services
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AiDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));
const AiLeadGenerationPage = lazy(() => import('./ai-lead-generation/page'));
const AiDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'));
const AiMlPlatformPage = lazy(() => import('./ai-ml-platform/page'));
const AiComputerVisionPage = lazy(() => import('./ai-computer-vision/page'));
const AiNlpPage = lazy(() => import('./ai-nlp/page'));
const AiRoboticsPage = lazy(() => import('./ai-robotics/page'));
const AiResearchDevelopmentPage = lazy(() => import('./ai-research-development/page'));
const AiEdgeComputingPage = lazy(() => import('./ai-edge-computing/page'));

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const ItConsultingPage = lazy(() => import('./it-consulting/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));

// Specialized Solutions
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));
const ArVrSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));

// Additional Pages
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));
const GdprPage = lazy(() => import('./gdpr/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const CareersPage = lazy(() => import('./careers/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));
const DocsPage = lazy(() => import('./docs/page'));
const ApiDocsPage = lazy(() => import('./api-docs/page'));

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">We're working to fix this issue.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const preloadCriticalResources = () => {
        const criticalImages = [
          '/logo.png',
          '/favicon.ico'
        ];
        
        criticalImages.forEach(src => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          document.head.appendChild(link);
        });
      };

      preloadCriticalResources();
    }
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="App">
            <Navigation />
            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Home */}
                  <Route path="/" element={<HomePage />} />
                  
                  {/* Company Pages */}
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />
                  
                  {/* AI Services */}
                  <Route path="/ai-services" element={<AiServicesPage />} />
                  <Route path="/ai-marketing" element={<AiMarketingPage />} />
                  <Route path="/ai-automation" element={<AiAutomationPage />} />
                  <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                  <Route path="/ai-fintech" element={<AiFintechPage />} />
                  <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                  <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                  <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                  <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                  <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                  <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                  <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />
                  <Route path="/ai-lead-generation" element={<AiLeadGenerationPage />} />
                  <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
                  <Route path="/ai-ml-platform" element={<AiMlPlatformPage />} />
                  <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
                  <Route path="/ai-nlp" element={<AiNlpPage />} />
                  <Route path="/ai-robotics" element={<AiRoboticsPage />} />
                  <Route path="/ai-research-development" element={<AiResearchDevelopmentPage />} />
                  <Route path="/ai-edge-computing" element={<AiEdgeComputingPage />} />
                  
                  {/* IT Services */}
                  <Route path="/it-services" element={<ItServicesPage />} />
                  <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                  <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                  <Route path="/it-consulting" element={<ItConsultingPage />} />
                  <Route path="/it-support" element={<ItSupportPage />} />
                  
                  {/* Specialized Solutions */}
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                  <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                  <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                  <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                  <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
                  <Route path="/robotics" element={<RoboticsPage />} />
                  <Route path="/ar-vr-solutions" element={<ArVrSolutionsPage />} />
                  
                  {/* Legal & Compliance */}
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/gdpr" element={<GdprPage />} />
                  <Route path="/compliance" element={<CompliancePage />} />
                  
                  {/* Documentation */}
                  <Route path="/docs" element={<DocsPage />} />
                  <Route path="/api-docs" element={<ApiDocsPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<HomePage />} />
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