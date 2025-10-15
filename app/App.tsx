import React from 'react';
"use client"
import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import ErrorBoundary from "./components/ErrorBoundary"
import LoadingSpinner from "./components/LoadingSpinner"

// Lazy load pages for better performance
const HomePage = lazy(() => import("./page"))
const AboutPage = lazy(() => import("./about/page"))
const ContactPage = lazy(() => import("./contact/page"))
const ServicesPage = lazy(() => import("./services/page"))
const PricingPage = lazy(() => import("./pricing/page"))
const CaseStudiesPage = lazy(() => import("./case-studies/page"))
const BlogPage = lazy(() => import("./blog/page"))
const TeamPage = lazy(() => import("./team/page"))
const CareersPage = lazy(() => import("./careers/page"))
const PrivacyPage = lazy(() => import("./privacy/page"))
const TermsPage = lazy(() => import("./terms/page"))
const CookiesPage = lazy(() => import("./cookies/page"))

// AI Services Pages
const AiSolutionsPage = lazy(() => import("./ai-solutions/page"))
const Ai3DGenerationPage = lazy(() => import("./ai-3d-generation/page"))
const AiAutomationPlatformPage = lazy(() => import("./ai-automation-platform/page"))
const AiEmailAssistantPage = lazy(() => import("./ai-email-assistant/page"))
const AiExpenseTrackerPage = lazy(() => import("./ai-expense-tracker/page"))
const AiFinancialAnalyticsProPage = lazy(() => import("./ai-financial-analytics-pro/page"))
const AiHealthcareDiagnosticsPage = lazy(() => import("./ai-healthcare-diagnostics/page"))
const AiPoweredDevopsPage = lazy(() => import("./ai-powered-devops/page"))
const AiPoweredEmailAnalyzerPage = lazy(() => import("./ai-powered-email-analyzer/page"))
const AiProjectManagementProPage = lazy(() => import("./ai-project-management-pro/page"))
const AiQuantumComputingPage = lazy(() => import("./ai-quantum-computing/page"))
const AiSmartSchedulerPage = lazy(() => import("./ai-smart-scheduler/page"))
const AiTranslationServicePage = lazy(() => import("./ai-translation-service/page"))

// IT Services Pages
const ItServicesPage = lazy(() => import("./it-services/page"))
const DevOpsServicesPage = lazy(() => import("./devops-services/page"))
const CloudInfrastructureManagementPage = lazy(() => import("./cloud-infrastructure-management/page"))
const CloudMigrationProPage = lazy(() => import("./cloud-migration-pro/page"))
const CybersecurityPage = lazy(() => import("./cybersecurity/page"))

// Other Pages
const CommunityPage = lazy(() => import("./community/page"))
const CompliancePage = lazy(() => import("./compliance/page"))
const BlockchainWeb3Page = lazy(() => import("./blockchain-web3/page"))
const DemoPage = lazy(() => import("./demo/page"))
const DocsPage = lazy(() => import("./docs/page"))
const FaqPage = lazy(() => import("./faq/page"))

function App() {
  return (
    <HelmetProvider >
        Content
      </HelmetProvider>
        Content
      </HelmetProvider>
      <BrowserRouter >
        Content
      </BrowserRouter>
        Content
      </BrowserRouter>
        <ErrorBoundary >
        Content
      </ErrorBoundary>
        Content
      </ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes >
        Content
      </Routes>
        Content
      </Routes>
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
              
              {/* AI Services Routes */}
              <Route path="/ai-solutions" element={<AiSolutionsPage />} />
              <Route path="/ai-3d-generation" element={<Ai3DGenerationPage />} />
              <Route path="/ai-automation-platform" element={<AiAutomationPlatformPage />} />
              <Route path="/ai-email-assistant" element={<AiEmailAssistantPage />} />
              <Route path="/ai-expense-tracker" element={<AiExpenseTrackerPage />} />
              <Route path="/ai-financial-analytics-pro" element={<AiFinancialAnalyticsProPage />} />
              <Route path="/ai-healthcare-diagnostics" element={<AiHealthcareDiagnosticsPage />} />
              <Route path="/ai-powered-devops" element={<AiPoweredDevopsPage />} />
              <Route path="/ai-powered-email-analyzer" element={<AiPoweredEmailAnalyzerPage />} />
              <Route path="/ai-project-management-pro" element={<AiProjectManagementProPage />} />
              <Route path="/ai-quantum-computing" element={<AiQuantumComputingPage />} />
              <Route path="/ai-smart-scheduler" element={<AiSmartSchedulerPage />} />
              <Route path="/ai-translation-service" element={<AiTranslationServicePage />} />
              
              {/* IT Services Routes */}
              <Route path="/it-services" element={<ItServicesPage />} />
              <Route path="/devops-services" element={<DevOpsServicesPage />} />
              <Route path="/cloud-infrastructure-management" element={<CloudInfrastructureManagementPage />} />
              <Route path="/cloud-migration-pro" element={<CloudMigrationProPage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              
              {/* Other Routes */}
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/faq" element={<FaqPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;