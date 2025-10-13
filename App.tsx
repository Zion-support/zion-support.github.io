import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';

// Page Components
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';
import ServicesPage from './app/pages/ServicesPage';
import BlogPage from './app/pages/BlogPage';
import TutorialsPage from './app/pages/TutorialsPage';
import DemoPage from './app/pages/DemoPage';
import SupportPage from './app/pages/SupportPage';
import PrivacyPage from './app/pages/PrivacyPage';
import TermsPage from './app/pages/TermsPage';
import PricingPage from './app/pages/PricingPage';
import SolutionsPage from './app/pages/SolutionsPage';

// AI Services Pages
import AiServicesPage from './app/ai-services/page';
import AiAnalyticsPage from './app/ai-services/business-intelligence/page';
import AiContentGenerationPage from './app/ai-services/content-generation/page';
import AiCustomerExperiencePage from './app/ai-services/customer-experience/page';
import AiDocumentProcessingPage from './app/ai-services/document-processing/page';
import AiEnergyManagementPage from './app/ai-services/energy-management/page';
import AiFraudDetectionPage from './app/ai-services/fraud-detection/page';
import AiHrAnalyticsPage from './app/ai-services/hr-analytics/page';
import AiMarketingAutomationPage from './app/ai-services/marketing-automation/page';
import AiPredictiveMaintenancePage from './app/ai-services/predictive-maintenance/page';
import AiProcessAutomationPage from './app/ai-services/process-automation/page';
import AiQualityAssurancePage from './app/ai-services/quality-assurance/page';
import AiSupplyChainPage from './app/ai-services/supply-chain/page';

// 5G Solutions Pages
import FiveGSolutionsPage from './app/5g-solutions/page';
import FiveGDataAnalyticsPage from './app/5g-data-analytics/page';
import FiveGEdgeComputingPage from './app/5g-edge-computing/page';
import FiveGImplementationPage from './app/5g-implementation/page';
import FiveGIotSolutionsPage from './app/5g-iot-solutions/page';
import FiveGMobileApplicationsPage from './app/5g-mobile-applications/page';
import FiveGNetworkInfrastructurePage from './app/5g-network-infrastructure/page';
import FiveGPrivateNetworksPage from './app/5g-private-networks/page';
import FiveGSmartCitySolutionsPage from './app/5g-smart-city-solutions/page';

// Additional Service Pages
import AdManagementPage from './app/ad-management/page';
import AdvancedSecuritySuitePage from './app/advanced-security-suite/page';
import AccessibilityPage from './app/accessibility/page';

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-lg font-medium text-gray-900">Something went wrong</h1>
        <p className="mt-2 text-sm text-gray-500">
          {error.message}
        </p>
        <div className="mt-6">
          <button
            onClick={resetErrorBoundary}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Navigation />
          <main className="relative z-10" id="main-content" role="main">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/tutorials" element={<TutorialsPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              
              {/* AI Services Routes */}
              <Route path="/ai-services" element={<AiServicesPage />} />
              <Route path="/ai-services/business-intelligence" element={<AiAnalyticsPage />} />
              <Route path="/ai-services/content-generation" element={<AiContentGenerationPage />} />
              <Route path="/ai-services/customer-experience" element={<AiCustomerExperiencePage />} />
              <Route path="/ai-services/document-processing" element={<AiDocumentProcessingPage />} />
              <Route path="/ai-services/energy-management" element={<AiEnergyManagementPage />} />
              <Route path="/ai-services/fraud-detection" element={<AiFraudDetectionPage />} />
              <Route path="/ai-services/hr-analytics" element={<AiHrAnalyticsPage />} />
              <Route path="/ai-services/marketing-automation" element={<AiMarketingAutomationPage />} />
              <Route path="/ai-services/predictive-maintenance" element={<AiPredictiveMaintenancePage />} />
              <Route path="/ai-services/process-automation" element={<AiProcessAutomationPage />} />
              <Route path="/ai-services/quality-assurance" element={<AiQualityAssurancePage />} />
              <Route path="/ai-services/supply-chain" element={<AiSupplyChainPage />} />
              
              {/* 5G Solutions Routes */}
              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
              <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
              <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
              <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
              <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
              <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
              <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
              <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
              <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
              
              {/* Additional Service Routes */}
              <Route path="/ad-management" element={<AdManagementPage />} />
              <Route path="/advanced-security-suite" element={<AdvancedSecuritySuitePage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              
              {/* Catch all route */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
                    <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;