"use client";

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import PerformanceMonitor from "./components/PerformanceMonitor";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import LoadingSpinner from "./components/LoadingSpinner";
import CriticalResourcePreloader from "./components/CriticalResourcePreloader";
import CacheManager from "./components/CacheManager";
import AdvancedPerformanceMonitor from "./components/AdvancedPerformanceMonitor";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./page"));
const AboutPage = lazy(() => import("./about/page"));
const ContactPage = lazy(() => import("./contact/page"));
const ServicesPage = lazy(() => import("./services/page"));
const PricingPage = lazy(() => import("./pricing/page"));
const CaseStudiesPage = lazy(() => import("./case-studies/page"));
const BlogPage = lazy(() => import("./blog/page"));
const TeamPage = lazy(() => import("./team/page"));
const CareersPage = lazy(() => import("./careers/page"));
const PrivacyPage = lazy(() => import("./privacy/page"));
const TermsPage = lazy(() => import("./terms/page"));
const CookiesPage = lazy(() => import("./cookies/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import("./5g-data-analytics/page"));
const FiveGEdgeComputingPage = lazy(() => import("./5g-edge-computing/page"));
const FiveGImplementationPage = lazy(() => import("./5g-implementation/page"));
const FiveGIoTSolutionsPage = lazy(() => import("./5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = lazy(
  () => import("./5g-mobile-applications/page"),
);
const FiveGNetworkInfrastructurePage = lazy(
  () => import("./5g-network-infrastructure/page"),
);
const FiveGPrivateNetworksPage = lazy(
  () => import("./5g-private-networks/page"),
);
const FiveGSmartCitySolutionsPage = lazy(
  () => import("./5g-smart-city-solutions/page"),
);
const FiveGSolutionsPage = lazy(() => import("./5g-solutions/page"));

// Main App Component
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer>
            <CriticalResourcePreloader />
            <CacheManager />
            <AdvancedPerformanceMonitor />
            <Suspense fallback={<LoadingSpinner />}>
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
              <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
              <Route path="/ai-automation" element={<AiAutomationPage />} />
              <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
              <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
              <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
              <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
              <Route path="/ai-marketing" element={<AiMarketingPage />} />
              <Route path="/ai-solutions" element={<AiSolutionsPage />} />

              {/* 5G Solutions */}
              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
              <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
              <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
              <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
              <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
              <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
              <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
              <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
              <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />

              {/* Micro SAAS */}
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
              <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
              <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />

              {/* All Other Pages */}
              <Route path="/ai-api-management" element={<AiapimanagementPage />} />
              <Route path="/ai-api-manager" element={<AiapimanagerPage />} />
              <Route path="/ai-automated-reporting" element={<AiautomatedreportingPage />} />
              <Route path="/ai-automated-testing" element={<AiautomatedtestingPage />} />
              <Route path="/ai-automation" element={<AiautomationPage />} />
              <Route path="/ai-autonomous-systems" element={<AiautonomoussystemsPage />} />
              <Route path="/ai-blockchain-analytics" element={<AiblockchainanalyticsPage />} />
              <Route path="/ai-blockchain-solutions" element={<AiblockchainsolutionsPage />} />
              <Route path="/ai-business-intelligence" element={<AibusinessintelligencePage />} />
              <Route path="/ai-business-intelligence-pro" element={<AibusinessintelligenceproPage />} />
              <Route path="/ai-chatbot-builder" element={<AichatbotbuilderPage />} />
              <Route path="/ai-chatbot-enterprise" element={<AichatbotenterprisePage />} />
              <Route path="/ai-climate-prediction-engine" element={<AiclimatepredictionenginePage />} />
              <Route path="/ai-climate-solutions-pro" element={<AiclimatesolutionsproPage />} />
              <Route path="/ai-cloud-infrastructure" element={<AicloudinfrastructurePage />} />
              <Route path="/ai-code-assistant" element={<AicodeassistantPage />} />
              <Route path="/ai-code-assistant-pro" element={<AicodeassistantproPage />} />
              <Route path="/ai-code-generation" element={<AicodegenerationPage />} />
              <Route path="/ai-code-security-auditor" element={<AicodesecurityauditorPage />} />
              <Route path="/ai-computer-vision" element={<AicomputervisionPage />} />
              <Route path="/ai-content-delivery-network" element={<AicontentdeliverynetworkPage />} />
              <Route path="/ai-content-generation" element={<AicontentgenerationPage />} />
              <Route path="/ai-content-generation-pro" element={<AicontentgenerationproPage />} />
              <Route path="/ai-content-generator" element={<AicontentgeneratorPage />} />
              <Route path="/ai-content-management" element={<AicontentmanagementPage />} />
              <Route path="/ai-content-moderation" element={<AicontentmoderationPage />} />
              <Route path="/ai-content-moderation-pro" element={<AicontentmoderationproPage />} />
              <Route path="/ai-content-studio" element={<AicontentstudioPage />} />
              <Route path="/ai-content-writer" element={<AicontentwriterPage />} />
              <Route path="/ai-conversation-analytics" element={<AiconversationanalyticsPage />} />
              <Route path="/ai-conversational-ai" element={<AiconversationalaiPage />} />
              <Route path="/ai-crm" element={<AicrmPage />} />
              <Route path="/ai-crm-assistant" element={<AicrmassistantPage />} />
              <Route path="/ai-customer-churn" element={<AicustomerchurnPage />} />
              <Route path="/ai-customer-insights" element={<AicustomerinsightsPage />} />
              <Route path="/ai-customer-service" element={<AicustomerservicePage />} />
              <Route path="/ai-customer-support" element={<AicustomersupportPage />} />
              <Route path="/ai-customer-support-bot" element={<AicustomersupportbotPage />} />
              <Route path="/ai-customer-support-chatbot" element={<AicustomersupportchatbotPage />} />
              <Route path="/ai-cyber-defense-matrix" element={<AicyberdefensematrixPage />} />
              <Route path="/ai-cybersecurity" element={<AicybersecurityPage />} />
              <Route path="/ai-cybersecurity-monitor" element={<AicybersecuritymonitorPage />} />
              <Route path="/ai-cybersecurity-monitor-pro" element={<AicybersecuritymonitorproPage />} />
              <Route path="/ai-cybersecurity-suite" element={<AicybersecuritysuitePage />} />
              <Route path="/ai-cybersecurity-suite-pro" element={<AicybersecuritysuiteproPage />} />
              <Route path="/ai-data-analytics" element={<AidataanalyticsPage />} />
              <Route path="/ai-data-visualization" element={<AidatavisualizationPage />} />
              <Route path="/ai-design-studio" element={<AidesignstudioPage />} />
              <Route path="/ai-devops-automation" element={<AidevopsautomationPage />} />
              <Route path="/ai-document-intelligence" element={<AidocumentintelligencePage />} />
              <Route path="/ai-document-processing" element={<AidocumentprocessingPage />} />
              <Route path="/ai-document-processor" element={<AidocumentprocessorPage />} />
              <Route path="/ai-document-scanner" element={<AidocumentscannerPage />} />
              <Route path="/ai-drug-discovery-pro" element={<AidrugdiscoveryproPage />} />
              <Route path="/ai-ecommerce-assistant" element={<AiecommerceassistantPage />} />
              <Route path="/ai-ecommerce-optimizer" element={<AiecommerceoptimizerPage />} />
              <Route path="/ai-ecommerce-optimizer-pro" element={<AiecommerceoptimizerproPage />} />
              <Route path="/ai-ecommerce-solutions" element={<AiecommercesolutionsPage />} />
              <Route path="/ai-edge-computing" element={<AiedgecomputingPage />} />
              <Route path="/ai-education" element={<AieducationPage />} />
              <Route path="/ai-email-assistant" element={<AiemailassistantPage />} />
              <Route path="/ai-email-automation" element={<AiemailautomationPage />} />
              <Route path="/ai-email-marketing" element={<AiemailmarketingPage />} />
              <Route path="/ai-email-marketing-automation" element={<AiemailmarketingautomationPage />} />
              <Route path="/ai-energy" element={<AienergyPage />} />
              <Route path="/ai-energy-grid-management-pro" element={<AienergygridmanagementproPage />} />
              <Route path="/ai-enterprise-solutions" element={<AienterprisesolutionsPage />} />
              <Route path="/ai-expense-tracker" element={<AiexpensetrackerPage />} />
              <Route path="/ai-expense-tracker-pro" element={<AiexpensetrackerproPage />} />
              <Route path="/ai-fashion-design" element={<AifashiondesignPage />} />
              <Route path="/ai-financial-advisor" element={<AifinancialadvisorPage />} />
              <Route path="/ai-financial-analytics-pro" element={<AifinancialanalyticsproPage />} />
              <Route path="/ai-financial-analyzer" element={<AifinancialanalyzerPage />} />
              <Route path="/ai-financial-crime-detection-pro" element={<AifinancialcrimedetectionproPage />} />
              <Route path="/ai-financial-forecasting" element={<AifinancialforecastingPage />} />
              <Route path="/ai-financial-planner" element={<AifinancialplannerPage />} />
              <Route path="/ai-financial-services" element={<AifinancialservicesPage />} />
              <Route path="/ai-fintech" element={<AifintechPage />} />
              <Route path="/ai-fitness-coach" element={<AifitnesscoachPage />} />
              <Route path="/ai-fraud-detection" element={<AifrauddetectionPage />} />
              <Route path="/ai-health-tracker" element={<AihealthtrackerPage />} />
              <Route path="/ai-healthcare" element={<AihealthcarePage />} />
              <Route path="/ai-healthcare-diagnostics" element={<AihealthcarediagnosticsPage />} />
              <Route path="/ai-healthcare-solutions" element={<AihealthcaresolutionsPage />} />
              <Route path="/ai-holographic-workspace" element={<AiholographicworkspacePage />} />
              <Route path="/ai-hr" element={<AihrPage />} />
              <Route path="/ai-hr-assistant" element={<AihrassistantPage />} />
              <Route path="/ai-hr-solutions" element={<AihrsolutionsPage />} />
              <Route path="/ai-image-recognition" element={<AiimagerecognitionPage />} />
              <Route path="/ai-infrastructure-monitoring" element={<AiinfrastructuremonitoringPage />} />
              <Route path="/ai-insurance" element={<AiinsurancePage />} />
              <Route path="/ai-integration-services" element={<AiintegrationservicesPage />} />
              <Route path="/ai-inventory-management" element={<AiinventorymanagementPage />} />
              <Route path="/ai-inventory-manager" element={<AiinventorymanagerPage />} />
              <Route path="/ai-investment-optimizer" element={<AiinvestmentoptimizerPage />} />
              <Route path="/ai-invoice-generator" element={<AiinvoicegeneratorPage />} />
              <Route path="/ai-iot-analytics" element={<AiiotanalyticsPage />} />
              <Route path="/ai-knowledge-management" element={<AiknowledgemanagementPage />} />
              <Route path="/ai-lead-generation" element={<AileadgenerationPage />} />
              <Route path="/ai-lead-scoring" element={<AileadscoringPage />} />
              <Route path="/ai-learning-platform" element={<AilearningplatformPage />} />
              <Route path="/ai-legal" element={<AilegalPage />} />
              <Route path="/ai-legal-assistant" element={<AilegalassistantPage />} />
              <Route path="/ai-legal-research-pro" element={<AilegalresearchproPage />} />
              <Route path="/ai-load-testing" element={<AiloadtestingPage />} />
              <Route path="/ai-logo-designer" element={<AilogodesignerPage />} />
              <Route path="/ai-manufacturing" element={<AimanufacturingPage />} />
              <Route path="/ai-marketing" element={<AimarketingPage />} />
              <Route path="/ai-meeting-assistant" element={<AimeetingassistantPage />} />
              <Route path="/ai-meeting-transcriber" element={<AimeetingtranscriberPage />} />
              <Route path="/ai-mental-health-companion" element={<AimentalhealthcompanionPage />} />
              <Route path="/ai-ml" element={<AimlPage />} />
              <Route path="/ai-ml-platform" element={<AimlplatformPage />} />
              <Route path="/ai-mobile-app-builder" element={<AimobileappbuilderPage />} />
              <Route path="/ai-mobile-app-development" element={<AimobileappdevelopmentPage />} />
              <Route path="/ai-mobile-builder" element={<AimobilebuilderPage />} />
              <Route path="/ai-music-composition" element={<AimusiccompositionPage />} />
              <Route path="/ai-neural-interface" element={<AineuralinterfacePage />} />
              <Route path="/ai-neural-memory-assistant" element={<AineuralmemoryassistantPage />} />
              <Route path="/ai-nlp" element={<AinlpPage />} />
              <Route path="/ai-ops" element={<AiopsPage />} />
              <Route path="/ai-password-manager" element={<AipasswordmanagerPage />} />
              <Route path="/ai-predictive-analytics" element={<AipredictiveanalyticsPage />} />
              <Route path="/ai-predictive-maintenance" element={<AipredictivemaintenancePage />} />
              <Route path="/ai-predictive-modeling" element={<AipredictivemodelingPage />} />
              <Route path="/ai-project-management" element={<AiprojectmanagementPage />} />
              <Route path="/ai-project-management-pro" element={<AiprojectmanagementproPage />} />
              <Route path="/ai-project-manager" element={<AiprojectmanagerPage />} />
              <Route path="/ai-quality-assurance" element={<AiqualityassurancePage />} />
              <Route path="/ai-quantum-computing" element={<AiquantumcomputingPage />} />
              <Route path="/ai-quantum-computing-simulator" element={<AiquantumcomputingsimulatorPage />} />
              <Route path="/ai-quantum-financial-oracle" element={<AiquantumfinancialoraclePage />} />
              <Route path="/ai-quantum-optimization" element={<AiquantumoptimizationPage />} />
              <Route path="/ai-quantum-task-optimizer" element={<AiquantumtaskoptimizerPage />} />
              <Route path="/ai-real-estate" element={<AirealestatePage />} />
              <Route path="/ai-recommendation-engine" element={<AirecommendationenginePage />} />
              <Route path="/ai-recruitment-assistant" element={<AirecruitmentassistantPage />} />
              <Route path="/ai-robotics" element={<AiroboticsPage />} />
              <Route path="/ai-sales-automation" element={<AisalesautomationPage />} />
              <Route path="/ai-scheduler" element={<AischedulerPage />} />
              <Route path="/ai-security-monitor" element={<AisecuritymonitorPage />} />
              <Route path="/ai-sentiment-analysis" element={<AisentimentanalysisPage />} />
              <Route path="/ai-sentiment-analyzer" element={<AisentimentanalyzerPage />} />
              <Route path="/ai-seo-optimizer" element={<AiseooptimizerPage />} />
              <Route path="/ai-services" element={<AiservicesPage />} />
              <Route path="/ai-services/business-intelligence" element={<AiservicesBusinessintelligencePage />} />
              <Route path="/ai-services/content-generation" element={<AiservicesContentgenerationPage />} />
              <Route path="/ai-services/customer-experience" element={<AiservicesCustomerexperiencePage />} />
              <Route path="/ai-services/document-processing" element={<AiservicesDocumentprocessingPage />} />
              <Route path="/ai-services/energy-management" element={<AiservicesEnergymanagementPage />} />
              <Route path="/ai-services/fraud-detection" element={<AiservicesFrauddetectionPage />} />
              <Route path="/ai-services/hr-analytics" element={<AiservicesHranalyticsPage />} />
              <Route path="/ai-services/marketing-automation" element={<AiservicesMarketingautomationPage />} />
              <Route path="/ai-services/predictive-maintenance" element={<AiservicesPredictivemaintenancePage />} />
              <Route path="/ai-services/process-automation" element={<AiservicesProcessautomationPage />} />
              <Route path="/ai-services/quality-assurance" element={<AiservicesQualityassurancePage />} />
              <Route path="/ai-services/supply-chain" element={<AiservicesSupplychainPage />} />
              <Route path="/ai-smart-calendar" element={<AismartcalendarPage />} />
              <Route path="/ai-smart-city-solutions" element={<AismartcitysolutionsPage />} />
              <Route path="/ai-smart-contract-auditor" element={<AismartcontractauditorPage />} />
              <Route path="/ai-smart-home-controller" element={<AismarthomecontrollerPage />} />
              <Route path="/ai-smart-invoice" element={<AismartinvoicePage />} />
              <Route path="/ai-smart-scheduler" element={<AismartschedulerPage />} />
              <Route path="/ai-social-media-manager" element={<AisocialmediamanagerPage />} />
              <Route path="/ai-social-media-scheduler" element={<AisocialmediaschedulerPage />} />
              <Route path="/ai-social-scheduler" element={<AisocialschedulerPage />} />
              <Route path="/ai-solutions" element={<AisolutionsPage />} />
              <Route path="/ai-space-mission-optimizer" element={<AispacemissionoptimizerPage />} />
              <Route path="/ai-space-technology" element={<AispacetechnologyPage />} />
              <Route path="/ai-space-technology-pro" element={<AispacetechnologyproPage />} />
              <Route path="/ai-speech-synthesis" element={<AispeechsynthesisPage />} />
              <Route path="/ai-stock-portfolio-manager" element={<AistockportfoliomanagerPage />} />
              <Route path="/ai-supply-chain" element={<AisupplychainPage />} />
              <Route path="/ai-supply-chain-ai" element={<AisupplychainaiPage />} />
              <Route path="/ai-supply-chain-optimization-pro" element={<AisupplychainoptimizationproPage />} />
              <Route path="/ai-supply-chain-optimizer" element={<AisupplychainoptimizerPage />} />
              <Route path="/ai-task-manager" element={<AitaskmanagerPage />} />
              <Route path="/ai-telepathic-interface" element={<AitelepathicinterfacePage />} />
              <Route path="/ai-time-tracker" element={<AitimetrackerPage />} />
              <Route path="/ai-translation-service" element={<AitranslationservicePage />} />
              <Route path="/ai-translation-services" element={<AitranslationservicesPage />} />
              <Route path="/ai-transportation" element={<AitransportationPage />} />
              <Route path="/ai-video-analysis" element={<AivideoanalysisPage />} />
              <Route path="/ai-video-editor" element={<AivideoeditorPage />} />
              <Route path="/ai-video-generation" element={<AivideogenerationPage />} />
              <Route path="/ai-video-generator" element={<AivideogeneratorPage />} />
              <Route path="/ai-vision" element={<AivisionPage />} />
              <Route path="/ai-voice-assistant" element={<AivoiceassistantPage />} />
              <Route path="/ai-voice-cloning" element={<AivoicecloningPage />} />
              <Route path="/ai-voice-cloning-studio" element={<AivoicecloningstudioPage />} />
              <Route path="/ai-voice-processing" element={<AivoiceprocessingPage />} />
              <Route path="/ai-voice-solutions" element={<AivoicesolutionsPage />} />
              <Route path="/ai-voice-synthesis" element={<AivoicesynthesisPage />} />
              <Route path="/ai-website-builder" element={<AiwebsitebuilderPage />} />
              <Route path="/ai-workflow-automation" element={<AiworkflowautomationPage />} />
              <Route path="/ai-writing-assistant" element={<AiwritingassistantPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/analytics-tools" element={<AnalyticstoolsPage />} />
              <Route path="/api" element={<ApiPage />} />
              <Route path="/api-development" element={<ApidevelopmentPage />} />
              <Route path="/api-development-advanced" element={<ApidevelopmentadvancedPage />} />
              <Route path="/api-docs" element={<ApidocsPage />} />
              <Route path="/ar-vr-platform" element={<ArvrplatformPage />} />
              <Route path="/ar-vr-solutions" element={<ArvrsolutionsPage />} />
              <Route path="/automation" element={<AutomationPage />} />
              <Route path="/autonomous-systems" element={<AutonomoussystemsPage />} />
              <Route path="/backup-recovery" element={<BackuprecoveryPage />} />
              <Route path="/blockchain" element={<BlockchainPage />} />
              <Route path="/blockchain-development" element={<BlockchaindevelopmentPage />} />
              <Route path="/blockchain-integration-services" element={<BlockchainintegrationservicesPage />} />
              <Route path="/blockchain-web3" element={<Blockchainweb3Page />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/business-apps" element={<BusinessappsPage />} />
              <Route path="/business-intelligence" element={<BusinessintelligencePage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/case-studies" element={<CasestudiesPage />} />
              <Route path="/cloud-cost-optimization" element={<CloudcostoptimizationPage />} />
              <Route path="/cloud-infrastructure" element={<CloudinfrastructurePage />} />
              <Route path="/cloud-infrastructure-management" element={<CloudinfrastructuremanagementPage />} />
              <Route path="/cloud-infrastructure-manager" element={<CloudinfrastructuremanagerPage />} />
              <Route path="/cloud-migration" element={<CloudmigrationPage />} />
              <Route path="/cloud-migration-advanced" element={<CloudmigrationadvancedPage />} />
              <Route path="/cloud-migration-pro" element={<CloudmigrationproPage />} />
              <Route path="/cloud-migration-services" element={<CloudmigrationservicesPage />} />
              <Route path="/cloud-native-development" element={<CloudnativedevelopmentPage />} />
              <Route path="/cloud-native-security" element={<CloudnativesecurityPage />} />
              <Route path="/cloud-security" element={<CloudsecurityPage />} />
              <Route path="/cloud-services" element={<CloudservicesPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/compliance-automation" element={<ComplianceautomationPage />} />
              <Route path="/computer-vision" element={<ComputervisionPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cookie-policy" element={<CookiepolicyPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/crm-lite" element={<CrmlitePage />} />
              <Route path="/custom-development" element={<CustomdevelopmentPage />} />
              <Route path="/custom-software" element={<CustomsoftwarePage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/cybersecurity-advanced" element={<CybersecurityadvancedPage />} />
              <Route path="/cybersecurity-consulting" element={<CybersecurityconsultingPage />} />
              <Route path="/cybersecurity-solutions" element={<CybersecuritysolutionsPage />} />
              <Route path="/cybersecurity-suite" element={<CybersecuritysuitePage />} />
              <Route path="/data-analytics" element={<DataanalyticsPage />} />
              <Route path="/data-analytics-bi" element={<DataanalyticsbiPage />} />
              <Route path="/data-center" element={<DatacenterPage />} />
              <Route path="/data-engineering" element={<DataengineeringPage />} />
              <Route path="/data-protection" element={<DataprotectionPage />} />
              <Route path="/data-visualization" element={<DatavisualizationPage />} />
              <Route path="/database" element={<DatabasePage />} />
              <Route path="/database-management" element={<DatabasemanagementPage />} />
              <Route path="/database-services" element={<DatabaseservicesPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/developer-tools" element={<DevelopertoolsPage />} />
              <Route path="/devops" element={<DevopsPage />} />
              <Route path="/devops-advanced" element={<DevopsadvancedPage />} />
              <Route path="/devops-cicd" element={<DevopscicdPage />} />
              <Route path="/devops-solutions" element={<DevopssolutionsPage />} />
              <Route path="/digital-transformation" element={<DigitaltransformationPage />} />
              <Route path="/digital-twin-platform" element={<DigitaltwinplatformPage />} />
              <Route path="/disaster-recovery-advanced" element={<DisasterrecoveryadvancedPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/e-commerce-development" element={<EcommercedevelopmentPage />} />
              <Route path="/edge-computing" element={<EdgecomputingPage />} />
              <Route path="/email-marketing-automation" element={<EmailmarketingautomationPage />} />
              <Route path="/email-optimizer" element={<EmailoptimizerPage />} />
              <Route path="/enterprise" element={<EnterprisePage />} />
              <Route path="/enterprise-integration" element={<EnterpriseintegrationPage />} />
              <Route path="/enterprise-security" element={<EnterprisesecurityPage />} />
              <Route path="/enterprise-solutions" element={<EnterprisesolutionsPage />} />
              <Route path="/expense-tracker" element={<ExpensetrackerPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/financial-it" element={<FinancialitPage />} />
              <Route path="/gdpr" element={<GdprPage />} />
              <Route path="/gdpr-compliance" element={<GdprcompliancePage />} />
              <Route path="/health" element={<HealthPage />} />
              <Route path="/healthcare-it" element={<HealthcareitPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/infrastructure-management" element={<InfrastructuremanagementPage />} />
              <Route path="/innovation-labs" element={<InnovationlabsPage />} />
              <Route path="/intelligent-database-migration" element={<IntelligentdatabasemigrationPage />} />
              <Route path="/intelligent-email-infrastructure" element={<IntelligentemailinfrastructurePage />} />
              <Route path="/investors" element={<InvestorsPage />} />
              <Route path="/iot" element={<IotPage />} />
              <Route path="/iot-development" element={<IotdevelopmentPage />} />
              <Route path="/iot-edge" element={<IotedgePage />} />
              <Route path="/iot-edge-computing" element={<IotedgecomputingPage />} />
              <Route path="/iot-integration" element={<IotintegrationPage />} />
              <Route path="/iot-platform" element={<IotplatformPage />} />
              <Route path="/iot-solutions" element={<IotsolutionsPage />} />
              <Route path="/it-asset-management" element={<ItassetmanagementPage />} />
              <Route path="/it-consulting" element={<ItconsultingPage />} />
              <Route path="/it-infrastructure" element={<ItinfrastructurePage />} />
              <Route path="/it-infrastructure-design" element={<ItinfrastructuredesignPage />} />
              <Route path="/it-infrastructure-solutions" element={<ItinfrastructuresolutionsPage />} />
              <Route path="/it-performance" element={<ItperformancePage />} />
              <Route path="/it-project-management" element={<ItprojectmanagementPage />} />
              <Route path="/it-security-services" element={<ItsecurityservicesPage />} />
              <Route path="/it-services" element={<ItservicesPage />} />
              <Route path="/it-services/cloud-migration" element={<ItservicesCloudmigrationPage />} />
              <Route path="/it-services/cybersecurity-audit" element={<ItservicesCybersecurityauditPage />} />
              <Route path="/it-support" element={<ItsupportPage />} />
              <Route path="/it-training" element={<IttrainingPage />} />
              <Route path="/landing-page-builder" element={<LandingpagebuilderPage />} />
              <Route path="/machine-learning" element={<MachinelearningPage />} />
              <Route path="/machine-learning-ops" element={<MachinelearningopsPage />} />
              <Route path="/managed-it" element={<ManageditPage />} />
              <Route path="/marketing-tools" element={<MarketingtoolsPage />} />
              <Route path="/micro-saas" element={<MicrosaasPage />} />
              <Route path="/micro-saas-services" element={<MicrosaasservicesPage />} />
              <Route path="/micro-saas-services/ai-analytics-dashboard" element={<MicrosaasservicesAianalyticsdashboardPage />} />
              <Route path="/micro-saas-services/ai-chatbot-builder" element={<MicrosaasservicesAichatbotbuilderPage />} />
              <Route path="/micro-saas-services/ai-content-generator" element={<MicrosaasservicesAicontentgeneratorPage />} />
              <Route path="/micro-saas-services/ai-email-assistant" element={<MicrosaasservicesAiemailassistantPage />} />
              <Route path="/micro-saas-services/ai-lead-generation" element={<MicrosaasservicesAileadgenerationPage />} />
              <Route path="/micro-saas/ai-content-writer" element={<MicrosaasAicontentwriterPage />} />
              <Route path="/micro-saas/ai-content-writer-pro" element={<MicrosaasAicontentwriterproPage />} />
              <Route path="/micro-saas/ai-customer-support-chatbot" element={<MicrosaasAicustomersupportchatbotPage />} />
              <Route path="/micro-saas/ai-email-marketing-automation" element={<MicrosaasAiemailmarketingautomationPage />} />
              <Route path="/micro-saas/ai-expense-tracker" element={<MicrosaasAiexpensetrackerPage />} />
              <Route path="/micro-saas/ai-inventory-manager" element={<MicrosaasAiinventorymanagerPage />} />
              <Route path="/micro-saas/ai-project-manager" element={<MicrosaasAiprojectmanagerPage />} />
              <Route path="/micro-saas/ai-social-media-scheduler" element={<MicrosaasAisocialmediaschedulerPage />} />
              <Route path="/micro-saas/analytics-dashboard" element={<MicrosaasAnalyticsdashboardPage />} />
              <Route path="/micro-saas/appointment-scheduler" element={<MicrosaasAppointmentschedulerPage />} />
              <Route path="/micro-saas/chat-analytics" element={<MicrosaasChatanalyticsPage />} />
              <Route path="/micro-saas/content-generator" element={<MicrosaasContentgeneratorPage />} />
              <Route path="/micro-saas/contract-manager" element={<MicrosaasContractmanagerPage />} />
              <Route path="/micro-saas/document-processor" element={<MicrosaasDocumentprocessorPage />} />
              <Route path="/micro-saas/email-marketing" element={<MicrosaasEmailmarketingPage />} />
              <Route path="/micro-saas/email-signature" element={<MicrosaasEmailsignaturePage />} />
              <Route path="/micro-saas/employee-directory" element={<MicrosaasEmployeedirectoryPage />} />
              <Route path="/micro-saas/expense-tracker" element={<MicrosaasExpensetrackerPage />} />
              <Route path="/micro-saas/inventory-management" element={<MicrosaasInventorymanagementPage />} />
              <Route path="/micro-saas/lead-scoring" element={<MicrosaasLeadscoringPage />} />
              <Route path="/micro-saas/seo-optimizer" element={<MicrosaasSeooptimizerPage />} />
              <Route path="/micro-saas/social-manager" element={<MicrosaasSocialmanagerPage />} />
              <Route path="/micro-saas/support-bot" element={<MicrosaasSupportbotPage />} />
              <Route path="/mobile-app-development" element={<MobileappdevelopmentPage />} />
              <Route path="/mobile-development" element={<MobiledevelopmentPage />} />
              <Route path="/network-design" element={<NetworkdesignPage />} />
              <Route path="/network-infrastructure" element={<NetworkinfrastructurePage />} />
              <Route path="/network-security" element={<NetworksecurityPage />} />
              <Route path="/network-solutions" element={<NetworksolutionsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/nlp" element={<NlpPage />} />
              <Route path="/not-found" element={<NotfoundPage />} />
              <Route path="/offline" element={<OfflinePage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/penetration-testing" element={<PenetrationtestingPage />} />
              <Route path="/performance-optimization" element={<PerformanceoptimizationPage />} />
              <Route path="/press" element={<PressPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/privacy-policy" element={<PrivacypolicyPage />} />
              <Route path="/process-automation" element={<ProcessautomationPage />} />
              <Route path="/productivity" element={<ProductivityPage />} />
              <Route path="/project-management-pro" element={<ProjectmanagementproPage />} />
              <Route path="/quantum-ai" element={<QuantumaiPage />} />
              <Route path="/quantum-computing" element={<QuantumcomputingPage />} />
              <Route path="/quantum-computing-solutions" element={<QuantumcomputingsolutionsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/robotics" element={<RoboticsPage />} />
              <Route path="/robotics-integration" element={<RoboticsintegrationPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/security-automation" element={<SecurityautomationPage />} />
              <Route path="/security-monitoring" element={<SecuritymonitoringPage />} />
              <Route path="/security-monitoring-suite" element={<SecuritymonitoringsuitePage />} />
              <Route path="/seo-optimizer" element={<SeooptimizerPage />} />
              <Route path="/server-management" element={<ServermanagementPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services-advertising" element={<ServicesadvertisingPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/sitemap.xml" element={<SitemapxmlPage />} />
              <Route path="/sla" element={<SlaPage />} />
              <Route path="/smart-analytics" element={<SmartanalyticsPage />} />
              <Route path="/smart-cities" element={<SmartcitiesPage />} />
              <Route path="/smart-city-infrastructure" element={<SmartcityinfrastructurePage />} />
              <Route path="/smart-contract-security-audit" element={<SmartcontractsecurityauditPage />} />
              <Route path="/specialized-services" element={<SpecializedservicesPage />} />
              <Route path="/status" element={<StatusPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/system-admin" element={<SystemadminPage />} />
              <Route path="/system-administration" element={<SystemadministrationPage />} />
              <Route path="/system-integration" element={<SystemintegrationPage />} />
              <Route path="/system-status" element={<SystemstatusPage />} />
              <Route path="/task-manager-pro" element={<TaskmanagerproPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/terms-of-service" element={<TermsofservicePage />} />
              <Route path="/test-simple" element={<TestsimplePage />} />
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/tutorials" element={<TutorialsPage />} />
              <Route path="/web-development" element={<WebdevelopmentPage />} />
              <Route path="/workflow-automation" element={<WorkflowautomationPage />} />
              <Route path="/zion-ai-accounting-assistant" element={<ZionaiaccountingassistantPage />} />
              <Route path="/zion-ai-code-reviewer" element={<ZionaicodereviewerPage />} />
              <Route path="/zion-ai-content-moderation" element={<ZionaicontentmoderationPage />} />
              <Route path="/zion-ai-contract-analyzer" element={<ZionaicontractanalyzerPage />} />
              <Route path="/zion-ai-customer-service-pro" element={<ZionaicustomerserviceproPage />} />
              <Route path="/zion-ai-data-cleaner" element={<ZionaidatacleanerPage />} />
              <Route path="/zion-ai-document-ai" element={<ZionaidocumentaiPage />} />
              <Route path="/zion-ai-email-assistant" element={<ZionaiemailassistantPage />} />
              <Route path="/zion-ai-energy-manager" element={<ZionaienergymanagerPage />} />
              <Route path="/zion-ai-fraud-detector" element={<ZionaifrauddetectorPage />} />
              <Route path="/zion-ai-marketing-automation" element={<ZionaimarketingautomationPage />} />
              <Route path="/zion-ai-meeting-assistant" element={<ZionaimeetingassistantPage />} />
              <Route path="/zion-ai-predictive-maintenance" element={<ZionaipredictivemaintenancePage />} />
              <Route path="/zion-ai-recruitment-pro" element={<ZionairecruitmentproPage />} />
              <Route path="/zion-ai-seo-optimizer" element={<ZionaiseooptimizerPage />} />
              <Route path="/zion-ai-supply-chain-optimizer" element={<ZionaisupplychainoptimizerPage />} />
              <Route path="/zion-ai-survey-builder" element={<ZionaisurveybuilderPage />} />
              <Route path="/zion-ai-translator-pro" element={<ZionaitranslatorproPage />} />
              <Route path="/zion-ai-video-editor" element={<ZionaivideoeditorPage />} />
              <Route path="/zion-analytics-pro" element={<ZionanalyticsproPage />} />
              <Route path="/zion-chat-ai" element={<ZionchataiPage />} />
              <Route path="/zion-cloud-vault" element={<ZioncloudvaultPage />} />
              <Route path="/zion-compliance-manager" element={<ZioncompliancemanagerPage />} />
              <Route path="/zion-content-studio" element={<ZioncontentstudioPage />} />
              <Route path="/zion-crm-intelligence" element={<ZioncrmintelligencePage />} />
              <Route path="/zion-customer-insights" element={<ZioncustomerinsightsPage />} />
              <Route path="/zion-data-sync" element={<ZiondatasyncPage />} />
              <Route path="/zion-email-automation" element={<ZionemailautomationPage />} />
              <Route path="/zion-inventory-smart" element={<ZioninventorysmartPage />} />
              <Route path="/zion-invoice-genius" element={<ZioninvoicegeniusPage />} />
              <Route path="/zion-lead-magnet" element={<ZionleadmagnetPage />} />
              <Route path="/zion-performance-monitor" element={<ZionperformancemonitorPage />} />
              <Route path="/zion-project-master" element={<ZionprojectmasterPage />} />
              <Route path="/zion-security-shield" element={<ZionsecurityshieldPage />} />
              <Route path="/zion-social-scheduler" element={<ZionsocialschedulerPage />} />
              <Route path="/zion-workflow-automation" element={<ZionworkflowautomationPage />} />
            </Routes>
            </Suspense>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
