"use client";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";

// Import pages
import HomePage from "./home/page";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import ServicesPage from "./services/page";
import PricingPage from "./pricing/page";
import CaseStudiesPage from "./case-studies/page";
import BlogPage from "./blog/page";
import TeamPage from "./team/page";
import CareersPage from "./careers/page";
import PrivacyPage from "./privacy/page";
import TermsPage from "./terms/page";
import CookiesPage from "./cookies/page";

// AI Services
import AiServicesPage from "./ai-services/page";
import AiMarketingPage from "./ai-marketing/page";
import AiAutomationPage from "./ai-automation/page";
import AiHealthcarePage from "./ai-healthcare/page";
import AiFintechPage from "./ai-fintech/page";
import AiContentGenerationPage from "./ai-content-generation/page";
import AiDataAnalyticsPage from "./ai-data-analytics/page";
import AiCybersecurityPage from "./ai-cybersecurity/page";
import AiWorkflowAutomationPage from "./ai-workflow-automation/page";
import AiCustomerSupportPage from "./ai-customer-support/page";
import AiSalesAutomationPage from "./ai-sales-automation/page";
import AiDataVisualizationPage from "./ai-data-visualization/page";

// IT Services
import ItServicesPage from "./it-services/page";
import ItInfrastructurePage from "./it-infrastructure/page";
import ItSupportPage from "./it-support/page";
import CloudInfrastructurePage from "./cloud-infrastructure/page";
import CybersecurityPage from "./cybersecurity/page";

// Emerging Technologies
import BlockchainPage from "./blockchain/page";
import QuantumComputingPage from "./quantum-computing/page";
import IoTEdgeComputingPage from "./iot-edge-computing/page";
import ARVRSolutionsPage from "./ar-vr-solutions/page";
import AutonomousSystemsPage from "./autonomous-systems/page";

// Micro SaaS
import MicroSaasPage from "./micro-saas/page";

// Support Pages
import DocsPage from "./docs/page";
import ApiDocsPage from "./api-docs/page";
import SupportPage from "./support/page";
import StatusPage from "./status/page";
import ConsultationPage from "./consultation/page";

// Components
import PerformanceMonitor from "./components/PerformanceMonitor";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import AppLoadingSpinner from "./components/AppLoadingSpinner";

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