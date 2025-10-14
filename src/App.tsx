import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Footer from './components/Footer;'
import LoadingSpinner from './components/LoadingSpinner;'
import ErrorBoundary from './components/ErrorBoundary;
// Lazy load pages for better performance'
const Page = lazy(() => import('./page'))'
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));

// AI Services
const AiServicesPage = lazy(() => import('./ai-services/page'))'
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'))'
const ServicesPage = lazy(() => import('./cloud-services/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const DevOpsPage = lazy(() => import('./devops/page'));

// Specialized Solutions
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'))'
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));

// Company Pages
const TeamPage = lazy(() => import('./team/page'))'
const CareersPage = lazy(() => import('./careers/page'));
const NewsPage = lazy(() => import('./news/page'));

// Support Pages
const SupportPage = lazy(() => import('./support/page'))'
const DocumentationPage = lazy(() => import('./documentation/page'));
const FAQPage = lazy(() => import('./faq/page'));

// Additional Pages
const PricingPage = lazy(() => import('./pricing/page'))'
const DemoPage = lazy(() => import('./demo/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));

// Legal Pages
const PrivacyPage = lazy(() => import('./privacy/page'))'
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));

const NotFoundPage = () => <div>Page Not Found</div>

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize app
    const initApp = async () => {
      try {
        // Add any initialization logic here
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize app:', error);

        setIsInitialized(true); // Still show the app even if initialization fails
      }
    };
    initApp();

  }, []);
  if (!isInitialized) {return <LoadingSpinner />}

  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Page />} />"
                {/* Company Pages */}
                <Route path="/about" element={<AboutPage />} />"
                <Route path="/team" element={<TeamPage />} />"
                <Route path="/careers" element={<CareersPage />} />"
                <Route path="/news" element={<NewsPage />} />"
                <Route path="/contact" element={<ContactPage />} />"
                {/* Main Services */}
                <Route path="/services" element={<ItServicesPage />} />"
                <Route path="/pricing" element={<PricingPage />} />"
                <Route path="/demo" element={<DemoPage />} />"
                <Route path="/consultation" element={<ConsultationPage />} />"
                {/* AI Services */}
                <Route path="/ai-services" element={<AiServicesPage />} />"
                <Route path="/ai-marketing" element={<AiMarketingPage />} />"
                <Route path="/ai-automation" element={<AiAutomationPage />} />"
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} />"
                <Route path="/ai-fintech" element={<AiFintechPage />} />"
                {/* IT Services */}
                <Route path="/it-services" element={<ItServicesPage />} />"
                <Route path="/cloud-services" element={<ServicesPage />} />"
                <Route path="/cybersecurity" element={<CybersecurityPage />} />"
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />"
                <Route path="/devops" element={<DevOpsPage />} />"
                {/* Specialized Solutions */}
                <Route path="/quantum-computing" element={<QuantumComputingPage />} />"
                <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />"
                <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />"
                <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />"
                <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />"
                <Route path="/robotics" element={<RoboticsPage />} />"
                {/* Support Pages */}
                <Route path="/support" element={<SupportPage />} />"
                <Route path="/documentation" element={<DocumentationPage />} />"
                <Route path="/faq" element={<FAQPage />} />"
                {/* Content Pages */}
                <Route path="/case-studies" element={<CaseStudiesPage />} />"
                <Route path="/blog" element={<BlogPage />} />"
                {/* Legal Pages */}
                <Route path="/privacy" element={<PrivacyPage />} />"
                <Route path="/terms" element={<TermsPage />} />"
                <Route path="/cookies" element={<CookiesPage />} />"
                {/* Catch all route */}
                <Route path="*" element={<NotFoundPage />} />"
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>

  );
};
export default App;
'