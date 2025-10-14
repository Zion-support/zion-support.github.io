<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';


// Lazy load pages for better performance
const Page = lazy(() => import('./page'))'
const AboutPage = lazy(() => import('./about/page'));'
const ContactPage = lazy(() => import('./contact/page'));'
const CaseStudiesPage = lazy(() => import('./case-studies/page'));'
const BlogPage = lazy(() => import('./blog/page'));'

// AI Services
const AiServicesPage = lazy(() => import('./ai-services/page'))'
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));'
const AiAutomationPage = lazy(() => import('./ai-automation/page'));'
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));'
const AiFintechPage = lazy(() => import('./ai-fintech/page'));'

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'))'
const ServicesPage = lazy(() => import('./cloud-services/page'));'
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));'
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));'
const DevOpsPage = lazy(() => import('./devops/page'));'

// Specialized Solutions
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'))'
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));'
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));'
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));'
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));'
const RoboticsPage = lazy(() => import('./robotics/page'));'

// Company Pages
const TeamPage = lazy(() => import('./team/page'))'
const CareersPage = lazy(() => import('./careers/page'));'
const NewsPage = lazy(() => import('./news/page'));'

// Support Pages
const SupportPage = lazy(() => import('./support/page'))'
const DocumentationPage = lazy(() => import('./documentation/page'));'
const FAQPage = lazy(() => import('./faq/page'));'

// Additional Pages
const PricingPage = lazy(() => import('./pricing/page'))'
const DemoPage = lazy(() => import('./demo/page'));'
const ConsultationPage = lazy(() => import('./consultation/page'));'

// Legal Pages
const PrivacyPage = lazy(() => import('./privacy/page'))'
const TermsPage = lazy(() => import('./terms/page'));'
const CookiesPage = lazy(() => import('./cookies/page'));'

const NotFoundPage = () => <div>Page Not Found</div>;

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
>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b

export default function App() {
  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>App - Zion Tech Group</title>
        <meta name="description" content="Professional app services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              App
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional app services by Zion Tech Group.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
=======
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

>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b
  );
}