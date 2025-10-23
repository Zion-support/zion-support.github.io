import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";

// Import components
import PerformanceMonitor from "./components/PerformanceMonitor";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import AppLoadingSpinner from "./components/AppLoadingSpinner";

// Import pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import BlogPage from "./pages/BlogPage";
import TeamPage from "./pages/TeamPage";
import CareersPage from "./pages/CareersPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import CookiesPage from "./pages/CookiesPage";

// AI Services
import AiServicesPage from "./pages/AiServicesPage";
import AiMarketingPage from "./pages/AiMarketingPage";
import AiAutomationPage from "./pages/AiAutomationPage";
import AiHealthcarePage from "./pages/AiHealthcarePage";
import AiFintechPage from "./pages/AiFintechPage";
import AiContentGenerationPage from "./pages/AiContentGenerationPage";
import AiDataAnalyticsPage from "./pages/AiDataAnalyticsPage";
import AiCybersecurityPage from "./pages/AiCybersecurityPage";
import AiWorkflowAutomationPage from "./pages/AiWorkflowAutomationPage";
import AiCustomerSupportPage from "./pages/AiCustomerSupportPage";
import AiSalesAutomationPage from "./pages/AiSalesAutomationPage";
import AiDataVisualizationPage from "./pages/AiDataVisualizationPage";

// IT Services
import ItServicesPage from "./pages/ItServicesPage";
import ItInfrastructurePage from "./pages/ItInfrastructurePage";
import ItSupportPage from "./pages/ItSupportPage";
import CloudInfrastructurePage from "./pages/CloudInfrastructurePage";
import CybersecurityPage from "./pages/CybersecurityPage";

// Emerging Technologies
import BlockchainPage from "./pages/BlockchainPage";
import QuantumComputingPage from "./pages/QuantumComputingPage";
import IoTEdgeComputingPage from "./pages/IoTEdgeComputingPage";
import ARVRSolutionsPage from "./pages/ARVRSolutionsPage";
import AutonomousSystemsPage from "./pages/AutonomousSystemsPage";

// Micro SaaS
import MicroSaasPage from "./pages/MicroSaasPage";

// Support Pages
import DocsPage from "./pages/DocsPage";
import ApiDocsPage from "./pages/ApiDocsPage";
import SupportPage from "./pages/SupportPage";
import StatusPage from "./pages/StatusPage";
import ConsultationPage from "./pages/ConsultationPage";

// 404 Page
import NotFoundPage from "./404";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor />
            <AccessibilityEnhancer>
              <Suspense fallback={<AppLoadingSpinner />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  
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

                  {/* IT Services */}
                  <Route path="/it-services" element={<ItServicesPage />} />
                  <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
                  <Route path="/it-support" element={<ItSupportPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />

                  {/* Emerging Technologies */}
                  <Route path="/blockchain" element={<BlockchainPage />} />
                  <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                  <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                  <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />
                  <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />

                  {/* Micro SaaS */}
                  <Route path="/micro-saas" element={<MicroSaasPage />} />

                  {/* Support Pages */}
                  <Route path="/docs" element={<DocsPage />} />
                  <Route path="/api-docs" element={<ApiDocsPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/status" element={<StatusPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />

                  {/* 404 Page */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </AccessibilityEnhancer>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;