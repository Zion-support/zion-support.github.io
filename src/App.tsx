<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PerformanceEnhancer from './utils/performanceEnhancer';
import SEOEnhancer from './utils/seoEnhancer';
import AccessibilityEnhancer from './utils/accessibilityEnhancer';
import SecurityEnhancer from './utils/securityEnhancer';
import UserExperienceEnhancer from './utils/userExperienceEnhancer';
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
=======
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
>>>>>>> cursor/website-audit-and-update-with-deployment-307a


import React, { useEffect, useState, lazy } from 'react';

=======
import React, { useEffect, useState, lazy, Suspense } from 'react';
>>>>>>> cursor/website-audit-and-update-with-deployment-d6fe
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
<<<<<<< HEAD
const ServicesPage = lazy(() => import('./services/page'));
const TeamPage = lazy(() => import('./team/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog-index'));
const SitemapPage = lazy(() => import('./sitemap/page'));
const NotFoundPage = lazy(() => import('./not-found'));

// AI Services Pages
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiProjectManagerPage = lazy(() => import('./ai-project-manager/page'));
const AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));

// IT Services Pages
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const DevopsPage = lazy(() => import('./devops/page'));

// Specialized Services
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainPage = lazy(() => import('./blockchain/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const IotEdgePage = lazy(() => import('./iot-edge/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));

// Additional Pages
const ConsultationPage = lazy(() => import('./consultation/page'));
const CareersPage = lazy(() => import('./careers/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const CookiesPage = lazy(() => import('./cookies/page'));
const GdprPage = lazy(() => import('./gdpr/page'));
=======
const BlogPage = lazy(() => import('./blog/page'));
const AIServicesPage = lazy(() => import('./ai-services/page'));
const AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AIFintechPage = lazy(() => import('./ai-fintech/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const MicroSAASPage = lazy(() => import('./micro-saas/page'));
const AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const ITInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));
const DevOpsPage = lazy(() => import('./devops/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b

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

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service in production
    // In production, this should be sent to an error tracking service
    if (process.env.NODE_ENV === 'development') {
      // Error logging would be handled by error tracking service in production
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">We're working to fix this issue. Please try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
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
  const [isInitialized, setIsInitialized] = useState(false);
<<<<<<< HEAD

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

<<<<<<< HEAD

=======

  useEffect(() => {
    // Initialize app
    setIsInitialized(true);
  }, []);

>>>>>>> cursor/website-audit-and-update-with-deployment-d6fe
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-307a
  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return (
<<<<<<< HEAD
    <div className="App">
<<<<<<< HEAD
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
=======
      <Navigation />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* AI Services */}
          <Route path="/ai-services" element={<AiServicesPage />} />
          <Route path="/ai-marketing" element={<AiMarketingPage />} />
          <Route path="/ai-automation" element={<AiAutomationPage />} />
          <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
          <Route path="/ai-fintech" element={<AiFintechPage />} />
          <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
          <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
          <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
          <Route path="/ai-project-manager" element={<AiProjectManagerPage />} />
          <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
          <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
          
          {/* IT Services */}
          <Route path="/it-services" element={<ItServicesPage />} />
          <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/database-management" element={<DatabaseManagementPage />} />
          <Route path="/devops" element={<DevopsPage />} />
          
          {/* Specialized Services */}
          <Route path="/micro-saas" element={<MicroSaasPage />} />
          <Route path="/quantum-computing" element={<QuantumComputingPage />} />
          <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
          <Route path="/blockchain" element={<BlockchainPage />} />
          <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
          <Route path="/iot-edge" element={<IotEdgePage />} />
          <Route path="/robotics" element={<RoboticsPage />} />
          
          {/* Additional Pages */}
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/gdpr" element={<GdprPage />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
>>>>>>> cursor/website-audit-and-update-with-deployment-d6fe
    </div>
=======
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              
              {/* AI Services */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/ai-marketing" element={<AIMarketingPage />} />
              <Route path="/ai-automation" element={<AIAutomationPage />} />
              <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
              <Route path="/ai-fintech" element={<AIFintechPage />} />
              <Route path="/quantum-computing" element={<QuantumComputingPage />} />
              <Route path="/micro-saas" element={<MicroSAASPage />} />
              <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
              
              {/* IT Solutions */}
              <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
              <Route path="/cloud-services" element={<CloudServicesPage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
              <Route path="/devops" element={<DevOpsPage />} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              
              {/* 404 Fallback */}
              <Route path="*" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                    <p className="text-gray-300 mb-8">Page not found</p>
                    <a
                      href="/"
                      className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
                    >
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
  );
};

export default App;