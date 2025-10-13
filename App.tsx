import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import FuturisticBackground from "./app/components/FuturisticBackground";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// Additional lazy loaded pages
const Ai3dgenerationPage = React.lazy(() => import("./app/ai-3d-generation/page"));
const AiaccountingassistantPage = React.lazy(() => import("./app/ai-accounting-assistant/page"));
const AiagriculturalintelligenceproPage = React.lazy(() => import("./app/ai-agricultural-intelligence-pro/page"));
const AianalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AianalyticsdashboardPage = React.lazy(() => import("./app/ai-analytics-dashboard/page"));
const AianalyticsdashboardproPage = React.lazy(() => import("./app/ai-analytics-dashboard-pro/page"));
const AiapimanagementPage = React.lazy(() => import("./app/ai-api-management/page"));
const AiapimanagerPage = React.lazy(() => import("./app/ai-api-manager/page"));
const AiautomatedreportingPage = React.lazy(() => import("./app/ai-automated-reporting/page"));
const AiautomatedtestingPage = React.lazy(() => import("./app/ai-automated-testing/page"));
const AiautomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AiautonomoussystemsPage = React.lazy(() => import("./app/ai-autonomous-systems/page"));
const AiblockchainanalyticsPage = React.lazy(() => import("./app/ai-blockchain-analytics/page"));
const AiblockchainsolutionsPage = React.lazy(() => import("./app/ai-blockchain-solutions/page"));
const AibusinessintelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AibusinessintelligenceproPage = React.lazy(() => import("./app/ai-business-intelligence-pro/page"));
const AichatbotbuilderPage = React.lazy(() => import("./app/ai-chatbot-builder/page"));
const AichatbotenterprisePage = React.lazy(() => import("./app/ai-chatbot-enterprise/page"));
const AiclimatepredictionenginePage = React.lazy(() => import("./app/ai-climate-prediction-engine/page"));
const AiclimatesolutionsproPage = React.lazy(() => import("./app/ai-climate-solutions-pro/page"));
const AicloudinfrastructurePage = React.lazy(() => import("./app/ai-cloud-infrastructure/page"));
const AicodeassistantPage = React.lazy(() => import("./app/ai-code-assistant/page"));
const AicodeassistantproPage = React.lazy(() => import("./app/ai-code-assistant-pro/page"));
const AicodegenerationPage = React.lazy(() => import("./app/ai-code-generation/page"));
const AicodesecurityauditorPage = React.lazy(() => import("./app/ai-code-security-auditor/page"));
const AicomputervisionPage = React.lazy(() => import("./app/ai-computer-vision/page"));
const AicontentdeliverynetworkPage = React.lazy(() => import("./app/ai-content-delivery-network/page"));
const AicontentgenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AicontentgenerationproPage = React.lazy(() => import("./app/ai-content-generation-pro/page"));
const AicontentgeneratorPage = React.lazy(() => import("./app/ai-content-generator/page"));
const AicontentmanagementPage = React.lazy(() => import("./app/ai-content-management/page"));
const AicontentmoderationPage = React.lazy(() => import("./app/ai-content-moderation/page"));
const AicontentmoderationproPage = React.lazy(() => import("./app/ai-content-moderation-pro/page"));
const AicontentstudioPage = React.lazy(() => import("./app/ai-content-studio/page"));
const AicontentwriterPage = React.lazy(() => import("./app/ai-content-writer/page"));
const AiconversationanalyticsPage = React.lazy(() => import("./app/ai-conversation-analytics/page"));
const AiconversationalaiPage = React.lazy(() => import("./app/ai-conversational-ai/page"));
const AicrmPage = React.lazy(() => import("./app/ai-crm/page"));
const AicrmassistantPage = React.lazy(() => import("./app/ai-crm-assistant/page"));
const AicustomerchurnPage = React.lazy(() => import("./app/ai-customer-churn/page"));
const AicustomerinsightsPage = React.lazy(() => import("./app/ai-customer-insights/page"));
const AicustomerservicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AicustomersupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AicustomersupportbotPage = React.lazy(() => import("./app/ai-customer-support-bot/page"));
const AicustomersupportchatbotPage = React.lazy(() => import("./app/ai-customer-support-chatbot/page"));
const AicyberdefensematrixPage = React.lazy(() => import("./app/ai-cyber-defense-matrix/page"));
const AicybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AicybersecuritymonitorPage = React.lazy(() => import("./app/ai-cybersecurity-monitor/page"));
const AicybersecuritymonitorproPage = React.lazy(() => import("./app/ai-cybersecurity-monitor-pro/page"));
const AicybersecuritysuitePage = React.lazy(() => import("./app/ai-cybersecurity-suite/page"));
const AicybersecuritysuiteproPage = React.lazy(() => import("./app/ai-cybersecurity-suite-pro/page"));
const AidataanalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AidatavisualizationPage = React.lazy(() => import("./app/ai-data-visualization/page"));
const AidesignstudioPage = React.lazy(() => import("./app/ai-design-studio/page"));
const AidevopsautomationPage = React.lazy(() => import("./app/ai-devops-automation/page"));
const AidocumentintelligencePage = React.lazy(() => import("./app/ai-document-intelligence/page"));
const AidocumentprocessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AidocumentprocessorPage = React.lazy(() => import("./app/ai-document-processor/page"));
const AidocumentscannerPage = React.lazy(() => import("./app/ai-document-scanner/page"));
const AidrugdiscoveryproPage = React.lazy(() => import("./app/ai-drug-discovery-pro/page"));
const AiecommerceassistantPage = React.lazy(() => import("./app/ai-ecommerce-assistant/page"));
const AiecommerceoptimizerPage = React.lazy(() => import("./app/ai-ecommerce-optimizer/page"));
const AiecommerceoptimizerproPage = React.lazy(() => import("./app/ai-ecommerce-optimizer-pro/page"));
const AiecommercesolutionsPage = React.lazy(() => import("./app/ai-ecommerce-solutions/page"));
const AiedgecomputingPage = React.lazy(() => import("./app/ai-edge-computing/page"));
const AieducationPage = React.lazy(() => import("./app/ai-education/page"));
const AiemailassistantPage = React.lazy(() => import("./app/ai-email-assistant/page"));
const AiemailautomationPage = React.lazy(() => import("./app/ai-email-automation/page"));
const AiemailmarketingPage = React.lazy(() => import("./app/ai-email-marketing/page"));
const AiemailmarketingautomationPage = React.lazy(() => import("./app/ai-email-marketing-automation/page"));
const AienergyPage = React.lazy(() => import("./app/ai-energy/page"));
const AienergygridmanagementproPage = React.lazy(() => import("./app/ai-energy-grid-management-pro/page"));
const AienterprisesolutionsPage = React.lazy(() => import("./app/ai-enterprise-solutions/page"));
const AiexpensetrackerPage = React.lazy(() => import("./app/ai-expense-tracker/page"));
const AiexpensetrackerproPage = React.lazy(() => import("./app/ai-expense-tracker-pro/page"));
const AifashiondesignPage = React.lazy(() => import("./app/ai-fashion-design/page"));
const AifinancialadvisorPage = React.lazy(() => import("./app/ai-financial-advisor/page"));
const AifinancialanalyticsproPage = React.lazy(() => import("./app/ai-financial-analytics-pro/page"));
const AifinancialanalyzerPage = React.lazy(() => import("./app/ai-financial-analyzer/page"));
const AifinancialcrimedetectionproPage = React.lazy(() => import("./app/ai-financial-crime-detection-pro/page"));
const AifinancialforecastingPage = React.lazy(() => import("./app/ai-financial-forecasting/page"));
const AifinancialplannerPage = React.lazy(() => import("./app/ai-financial-planner/page"));
const AifinancialservicesPage = React.lazy(() => import("./app/ai-financial-services/page"));
const AifintechPage = React.lazy(() => import("./app/ai-fintech/page"));
const AifitnesscoachPage = React.lazy(() => import("./app/ai-fitness-coach/page"));
const AifrauddetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
const AihealthtrackerPage = React.lazy(() => import("./app/ai-health-tracker/page"));
const AihealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AihealthcarediagnosticsPage = React.lazy(() => import("./app/ai-healthcare-diagnostics/page"));
const AihealthcaresolutionsPage = React.lazy(() => import("./app/ai-healthcare-solutions/page"));
const AiholographicworkspacePage = React.lazy(() => import("./app/ai-holographic-workspace/page"));
const AihrPage = React.lazy(() => import("./app/ai-hr/page"));
const AihrassistantPage = React.lazy(() => import("./app/ai-hr-assistant/page"));
const AihrsolutionsPage = React.lazy(() => import("./app/ai-hr-solutions/page"));
const AiimagerecognitionPage = React.lazy(() => import("./app/ai-image-recognition/page"));
const AiinfrastructuremonitoringPage = React.lazy(() => import("./app/ai-infrastructure-monitoring/page"));
const AiinsurancePage = React.lazy(() => import("./app/ai-insurance/page"));
const AiintegrationservicesPage = React.lazy(() => import("./app/ai-integration-services/page"));
const AiinventorymanagementPage = React.lazy(() => import("./app/ai-inventory-management/page"));
const AiinventorymanagerPage = React.lazy(() => import("./app/ai-inventory-manager/page"));
const AiinvestmentoptimizerPage = React.lazy(() => import("./app/ai-investment-optimizer/page"));
const AiinvoicegeneratorPage = React.lazy(() => import("./app/ai-invoice-generator/page"));
const AiiotanalyticsPage = React.lazy(() => import("./app/ai-iot-analytics/page"));
const AiknowledgemanagementPage = React.lazy(() => import("./app/ai-knowledge-management/page"));
const AileadgenerationPage = React.lazy(() => import("./app/ai-lead-generation/page"));
const AileadscoringPage = React.lazy(() => import("./app/ai-lead-scoring/page"));
const AilearningplatformPage = React.lazy(() => import("./app/ai-learning-platform/page"));
const AilegalPage = React.lazy(() => import("./app/ai-legal/page"));
const AilegalassistantPage = React.lazy(() => import("./app/ai-legal-assistant/page"));
const AilegalresearchproPage = React.lazy(() => import("./app/ai-legal-research-pro/page"));
const AiloadtestingPage = React.lazy(() => import("./app/ai-load-testing/page"));
const AilogodesignerPage = React.lazy(() => import("./app/ai-logo-designer/page"));
const AimanufacturingPage = React.lazy(() => import("./app/ai-manufacturing/page"));
const AimarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AimarketingautomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AimeetingassistantPage = React.lazy(() => import("./app/ai-meeting-assistant/page"));
const AimeetingtranscriberPage = React.lazy(() => import("./app/ai-meeting-transcriber/page"));
const AimentalhealthcompanionPage = React.lazy(() => import("./app/ai-mental-health-companion/page"));
const AimlPage = React.lazy(() => import("./app/ai-ml/page"));
const AimlplatformPage = React.lazy(() => import("./app/ai-ml-platform/page"));
const AimobileappbuilderPage = React.lazy(() => import("./app/ai-mobile-app-builder/page"));
const AimobileappdevelopmentPage = React.lazy(() => import("./app/ai-mobile-app-development/page"));
const AimobilebuilderPage = React.lazy(() => import("./app/ai-mobile-builder/page"));
const AimusiccompositionPage = React.lazy(() => import("./app/ai-music-composition/page"));
const AineuralinterfacePage = React.lazy(() => import("./app/ai-neural-interface/page"));
const AineuralmemoryassistantPage = React.lazy(() => import("./app/ai-neural-memory-assistant/page"));
const AinlpPage = React.lazy(() => import("./app/ai-nlp/page"));
const AiopsPage = React.lazy(() => import("./app/ai-ops/page"));
const AipasswordmanagerPage = React.lazy(() => import("./app/ai-password-manager/page"));
const AipredictiveanalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AipredictivemaintenancePage = React.lazy(() => import("./app/ai-predictive-maintenance/page"));
const AipredictivemodelingPage = React.lazy(() => import("./app/ai-predictive-modeling/page"));
const AiprojectmanagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AiprojectmanagementproPage = React.lazy(() => import("./app/ai-project-management-pro/page"));
const AiprojectmanagerPage = React.lazy(() => import("./app/ai-project-manager/page"));
const AiqualityassurancePage = React.lazy(() => import("./app/ai-quality-assurance/page"));
const AiquantumcomputingPage = React.lazy(() => import("./app/ai-quantum-computing/page"));
const AiquantumcomputingsimulatorPage = React.lazy(() => import("./app/ai-quantum-computing-simulator/page"));
const AiquantumfinancialoraclePage = React.lazy(() => import("./app/ai-quantum-financial-oracle/page"));
const AiquantumoptimizationPage = React.lazy(() => import("./app/ai-quantum-optimization/page"));
const AiquantumtaskoptimizerPage = React.lazy(() => import("./app/ai-quantum-task-optimizer/page"));
const AirealestatePage = React.lazy(() => import("./app/ai-real-estate/page"));
const AirecommendationenginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AirecruitmentassistantPage = React.lazy(() => import("./app/ai-recruitment-assistant/page"));
const AiroboticsPage = React.lazy(() => import("./app/ai-robotics/page"));
const AisalesautomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));
const AischedulerPage = React.lazy(() => import("./app/ai-scheduler/page"));
const AisecuritymonitorPage = React.lazy(() => import("./app/ai-security-monitor/page"));
const AisentimentanalysisPage = React.lazy(() => import("./app/ai-sentiment-analysis/page"));
const AisentimentanalyzerPage = React.lazy(() => import("./app/ai-sentiment-analyzer/page"));
const AiseooptimizerPage = React.lazy(() => import("./app/ai-seo-optimizer/page"));
const AiservicesPage = React.lazy(() => import("./app/ai-services/page"));
const AiservicesbusinessintelligencePage = React.lazy(() => import("./app/ai-services/business-intelligence/page"));
const AiservicescontentgenerationPage = React.lazy(() => import("./app/ai-services/content-generation/page"));
const AiservicescustomerexperiencePage = React.lazy(() => import("./app/ai-services/customer-experience/page"));
const AiservicesdocumentprocessingPage = React.lazy(() => import("./app/ai-services/document-processing/page"));
const AiservicesenergymanagementPage = React.lazy(() => import("./app/ai-services/energy-management/page"));
const AiservicesfrauddetectionPage = React.lazy(() => import("./app/ai-services/fraud-detection/page"));
const AiserviceshranalyticsPage = React.lazy(() => import("./app/ai-services/hr-analytics/page"));
const AiservicesmarketingautomationPage = React.lazy(() => import("./app/ai-services/marketing-automation/page"));
const AiservicespredictivemaintenancePage = React.lazy(() => import("./app/ai-services/predictive-maintenance/page"));
const AiservicesprocessautomationPage = React.lazy(() => import("./app/ai-services/process-automation/page"));
const AiservicesqualityassurancePage = React.lazy(() => import("./app/ai-services/quality-assurance/page"));
const AiservicessupplychainPage = React.lazy(() => import("./app/ai-services/supply-chain/page"));
const AismartcalendarPage = React.lazy(() => import("./app/ai-smart-calendar/page"));
const AismartcitysolutionsPage = React.lazy(() => import("./app/ai-smart-city-solutions/page"));
const AismartcontractauditorPage = React.lazy(() => import("./app/ai-smart-contract-auditor/page"));
const AismarthomecontrollerPage = React.lazy(() => import("./app/ai-smart-home-controller/page"));
const AismartinvoicePage = React.lazy(() => import("./app/ai-smart-invoice/page"));
const AismartschedulerPage = React.lazy(() => import("./app/ai-smart-scheduler/page"));
const AisocialmediamanagerPage = React.lazy(() => import("./app/ai-social-media-manager/page"));
const AisocialmediaschedulerPage = React.lazy(() => import("./app/ai-social-media-scheduler/page"));
const AisocialschedulerPage = React.lazy(() => import("./app/ai-social-scheduler/page"));
const AisolutionsPage = React.lazy(() => import("./app/ai-solutions/page"));
const AispacemissionoptimizerPage = React.lazy(() => import("./app/ai-space-mission-optimizer/page"));
const AispacetechnologyPage = React.lazy(() => import("./app/ai-space-technology/page"));
const AispacetechnologyproPage = React.lazy(() => import("./app/ai-space-technology-pro/page"));
const AispeechsynthesisPage = React.lazy(() => import("./app/ai-speech-synthesis/page"));
const AistockportfoliomanagerPage = React.lazy(() => import("./app/ai-stock-portfolio-manager/page"));
const AisupplychainPage = React.lazy(() => import("./app/ai-supply-chain/page"));
const AisupplychainaiPage = React.lazy(() => import("./app/ai-supply-chain-ai/page"));
const AisupplychainoptimizationproPage = React.lazy(() => import("./app/ai-supply-chain-optimization-pro/page"));
const AisupplychainoptimizerPage = React.lazy(() => import("./app/ai-supply-chain-optimizer/page"));
const AitaskmanagerPage = React.lazy(() => import("./app/ai-task-manager/page"));
const AitelepathicinterfacePage = React.lazy(() => import("./app/ai-telepathic-interface/page"));
const AitimetrackerPage = React.lazy(() => import("./app/ai-time-tracker/page"));
const AitranslationservicePage = React.lazy(() => import("./app/ai-translation-service/page"));
const AitranslationservicesPage = React.lazy(() => import("./app/ai-translation-services/page"));
const AitransportationPage = React.lazy(() => import("./app/ai-transportation/page"));
const AivideoanalysisPage = React.lazy(() => import("./app/ai-video-analysis/page"));
const AivideoeditorPage = React.lazy(() => import("./app/ai-video-editor/page"));
const AivideogenerationPage = React.lazy(() => import("./app/ai-video-generation/page"));
const AivideogeneratorPage = React.lazy(() => import("./app/ai-video-generator/page"));
const AivisionPage = React.lazy(() => import("./app/ai-vision/page"));
const AivoiceassistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AivoicecloningPage = React.lazy(() => import("./app/ai-voice-cloning/page"));
const AivoicecloningstudioPage = React.lazy(() => import("./app/ai-voice-cloning-studio/page"));
const AivoiceprocessingPage = React.lazy(() => import("./app/ai-voice-processing/page"));
const AivoicesolutionsPage = React.lazy(() => import("./app/ai-voice-solutions/page"));
const AivoicesynthesisPage = React.lazy(() => import("./app/ai-voice-synthesis/page"));
const AiwebsitebuilderPage = React.lazy(() => import("./app/ai-website-builder/page"));
const AiworkflowautomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));
const AiwritingassistantPage = React.lazy(() => import("./app/ai-writing-assistant/page"));
const MicrosaasPage = React.lazy(() => import("./app/micro-saas/page"));
const MicrosaasaicontentwriterPage = React.lazy(() => import("./app/micro-saas/ai-content-writer/page"));
const MicrosaasaicontentwriterproPage = React.lazy(() => import("./app/micro-saas/ai-content-writer-pro/page"));
const MicrosaasaicustomersupportchatbotPage = React.lazy(() => import("./app/micro-saas/ai-customer-support-chatbot/page"));
const MicrosaasaiemailmarketingautomationPage = React.lazy(() => import("./app/micro-saas/ai-email-marketing-automation/page"));
const MicrosaasaiexpensetrackerPage = React.lazy(() => import("./app/micro-saas/ai-expense-tracker/page"));
const MicrosaasaiinventorymanagerPage = React.lazy(() => import("./app/micro-saas/ai-inventory-manager/page"));
const MicrosaasaiprojectmanagerPage = React.lazy(() => import("./app/micro-saas/ai-project-manager/page"));
const MicrosaasaisocialmediaschedulerPage = React.lazy(() => import("./app/micro-saas/ai-social-media-scheduler/page"));
const MicrosaasanalyticsdashboardPage = React.lazy(() => import("./app/micro-saas/analytics-dashboard/page"));
const MicrosaasappointmentschedulerPage = React.lazy(() => import("./app/micro-saas/appointment-scheduler/page"));
const MicrosaaschatanalyticsPage = React.lazy(() => import("./app/micro-saas/chat-analytics/page"));
const MicrosaascontentgeneratorPage = React.lazy(() => import("./app/micro-saas/content-generator/page"));
const MicrosaascontractmanagerPage = React.lazy(() => import("./app/micro-saas/contract-manager/page"));
const MicrosaasdocumentprocessorPage = React.lazy(() => import("./app/micro-saas/document-processor/page"));
const MicrosaasemailmarketingPage = React.lazy(() => import("./app/micro-saas/email-marketing/page"));
const MicrosaasemailsignaturePage = React.lazy(() => import("./app/micro-saas/email-signature/page"));
const MicrosaasemployeedirectoryPage = React.lazy(() => import("./app/micro-saas/employee-directory/page"));
const MicrosaasexpensetrackerPage = React.lazy(() => import("./app/micro-saas/expense-tracker/page"));
const MicrosaasinventorymanagementPage = React.lazy(() => import("./app/micro-saas/inventory-management/page"));
const MicrosaasleadscoringPage = React.lazy(() => import("./app/micro-saas/lead-scoring/page"));
const MicrosaasseooptimizerPage = React.lazy(() => import("./app/micro-saas/seo-optimizer/page"));
const MicrosaassocialmanagerPage = React.lazy(() => import("./app/micro-saas/social-manager/page"));
const MicrosaassupportbotPage = React.lazy(() => import("./app/micro-saas/support-bot/page"));
const MicrosaasservicesPage = React.lazy(() => import("./app/micro-saas-services/page"));
const MicrosaasservicesaianalyticsdashboardPage = React.lazy(() => import("./app/micro-saas-services/ai-analytics-dashboard/page"));
const MicrosaasservicesaichatbotbuilderPage = React.lazy(() => import("./app/micro-saas-services/ai-chatbot-builder/page"));
const MicrosaasservicesaicontentgeneratorPage = React.lazy(() => import("./app/micro-saas-services/ai-content-generator/page"));
const MicrosaasservicesaiemailassistantPage = React.lazy(() => import("./app/micro-saas-services/ai-email-assistant/page"));
const MicrosaasservicesaileadgenerationPage = React.lazy(() => import("./app/micro-saas-services/ai-lead-generation/page"));
const ZionaiaccountingassistantPage = React.lazy(() => import("./app/zion-ai-accounting-assistant/page"));
const ZionaicodereviewerPage = React.lazy(() => import("./app/zion-ai-code-reviewer/page"));
const ZionaicontentmoderationPage = React.lazy(() => import("./app/zion-ai-content-moderation/page"));
const ZionaicontractanalyzerPage = React.lazy(() => import("./app/zion-ai-contract-analyzer/page"));
const ZionaicustomerserviceproPage = React.lazy(() => import("./app/zion-ai-customer-service-pro/page"));
const ZionaidatacleanerPage = React.lazy(() => import("./app/zion-ai-data-cleaner/page"));
const ZionaidocumentaiPage = React.lazy(() => import("./app/zion-ai-document-ai/page"));
const ZionaiemailassistantPage = React.lazy(() => import("./app/zion-ai-email-assistant/page"));
const ZionaienergymanagerPage = React.lazy(() => import("./app/zion-ai-energy-manager/page"));
const ZionaifrauddetectorPage = React.lazy(() => import("./app/zion-ai-fraud-detector/page"));
const ZionaimarketingautomationPage = React.lazy(() => import("./app/zion-ai-marketing-automation/page"));
const ZionaimeetingassistantPage = React.lazy(() => import("./app/zion-ai-meeting-assistant/page"));
const ZionaipredictivemaintenancePage = React.lazy(() => import("./app/zion-ai-predictive-maintenance/page"));
const ZionairecruitmentproPage = React.lazy(() => import("./app/zion-ai-recruitment-pro/page"));
const ZionaiseooptimizerPage = React.lazy(() => import("./app/zion-ai-seo-optimizer/page"));
const ZionaisupplychainoptimizerPage = React.lazy(() => import("./app/zion-ai-supply-chain-optimizer/page"));
const ZionaisurveybuilderPage = React.lazy(() => import("./app/zion-ai-survey-builder/page"));
const ZionaitranslatorproPage = React.lazy(() => import("./app/zion-ai-translator-pro/page"));
const ZionaivideoeditorPage = React.lazy(() => import("./app/zion-ai-video-editor/page"));
const ZionanalyticsproPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionchataiPage = React.lazy(() => import("./app/zion-chat-ai/page"));
const ZioncloudvaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZioncompliancemanagerPage = React.lazy(() => import("./app/zion-compliance-manager/page"));
const ZioncontentstudioPage = React.lazy(() => import("./app/zion-content-studio/page"));
const ZioncrmintelligencePage = React.lazy(() => import("./app/zion-crm-intelligence/page"));
const ZioncustomerinsightsPage = React.lazy(() => import("./app/zion-customer-insights/page"));
const ZiondatasyncPage = React.lazy(() => import("./app/zion-data-sync/page"));
const ZionemailautomationPage = React.lazy(() => import("./app/zion-email-automation/page"));
const ZioninventorysmartPage = React.lazy(() => import("./app/zion-inventory-smart/page"));
const ZioninvoicegeniusPage = React.lazy(() => import("./app/zion-invoice-genius/page"));
const ZionleadmagnetPage = React.lazy(() => import("./app/zion-lead-magnet/page"));
const ZionperformancemonitorPage = React.lazy(() => import("./app/zion-performance-monitor/page"));
const ZionprojectmasterPage = React.lazy(() => import("./app/zion-project-master/page"));
const ZionsecurityshieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionsocialschedulerPage = React.lazy(() => import("./app/zion-social-scheduler/page"));
const ZionworkflowautomationPage = React.lazy(() => import("./app/zion-workflow-automation/page"));
const AboutPage = React.lazy(() => import("./app/about/page"));
const AccessibilityPage = React.lazy(() => import("./app/accessibility/page"));
const AccessibilitypagePage = React.lazy(() => import("./app/accessibility-page/page"));
const AnalyticsPage = React.lazy(() => import("./app/analytics/page"));
const AnalyticstoolsPage = React.lazy(() => import("./app/analytics-tools/page"));
const ApidevelopmentPage = React.lazy(() => import("./app/api-development/page"));
const ApidevelopmentadvancedPage = React.lazy(() => import("./app/api-development-advanced/page"));
const ApidocsPage = React.lazy(() => import("./app/api-docs/page"));
const ArvrplatformPage = React.lazy(() => import("./app/ar-vr-platform/page"));
const ArvrsolutionsPage = React.lazy(() => import("./app/ar-vr-solutions/page"));
const AutomationPage = React.lazy(() => import("./app/automation/page"));
const AutonomoussystemsPage = React.lazy(() => import("./app/autonomous-systems/page"));
const BackuprecoveryPage = React.lazy(() => import("./app/backup-recovery/page"));
const BlockchainPage = React.lazy(() => import("./app/blockchain/page"));
const BlockchaindevelopmentPage = React.lazy(() => import("./app/blockchain-development/page"));
const BlockchainintegrationservicesPage = React.lazy(() => import("./app/blockchain-integration-services/page"));
const Blockchainweb3Page = React.lazy(() => import("./app/blockchain-web3/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const BusinessappsPage = React.lazy(() => import("./app/business-apps/page"));
const BusinessintelligencePage = React.lazy(() => import("./app/business-intelligence/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));
const CasestudiesPage = React.lazy(() => import("./app/case-studies/page"));
const CloudcostoptimizationPage = React.lazy(() => import("./app/cloud-cost-optimization/page"));
const CloudinfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CloudinfrastructuremanagementPage = React.lazy(() => import("./app/cloud-infrastructure-management/page"));
const CloudinfrastructuremanagerPage = React.lazy(() => import("./app/cloud-infrastructure-manager/page"));
const CloudmigrationPage = React.lazy(() => import("./app/cloud-migration/page"));
const CloudmigrationadvancedPage = React.lazy(() => import("./app/cloud-migration-advanced/page"));
const CloudmigrationproPage = React.lazy(() => import("./app/cloud-migration-pro/page"));
const CloudmigrationservicesPage = React.lazy(() => import("./app/cloud-migration-services/page"));
const CloudnativedevelopmentPage = React.lazy(() => import("./app/cloud-native-development/page"));
const CloudnativesecurityPage = React.lazy(() => import("./app/cloud-native-security/page"));
const CloudsecurityPage = React.lazy(() => import("./app/cloud-security/page"));
const CloudservicesPage = React.lazy(() => import("./app/cloud-services/page"));
const CommunityPage = React.lazy(() => import("./app/community/page"));
const CompliancePage = React.lazy(() => import("./app/compliance/page"));
const ComplianceautomationPage = React.lazy(() => import("./app/compliance-automation/page"));
const ComputervisionPage = React.lazy(() => import("./app/computer-vision/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const CrmlitePage = React.lazy(() => import("./app/crm-lite/page"));
const CustomdevelopmentPage = React.lazy(() => import("./app/custom-development/page"));
const CustomsoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const CybersecurityPage = React.lazy(() => import("./app/cybersecurity/page"));
const CybersecurityadvancedPage = React.lazy(() => import("./app/cybersecurity-advanced/page"));
const CybersecurityconsultingPage = React.lazy(() => import("./app/cybersecurity-consulting/page"));
const CybersecuritysolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const CybersecuritysuitePage = React.lazy(() => import("./app/cybersecurity-suite/page"));
const DataanalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const DataanalyticsbiPage = React.lazy(() => import("./app/data-analytics-bi/page"));
const DatacenterPage = React.lazy(() => import("./app/data-center/page"));
const DataengineeringPage = React.lazy(() => import("./app/data-engineering/page"));
const DataprotectionPage = React.lazy(() => import("./app/data-protection/page"));
const DatavisualizationPage = React.lazy(() => import("./app/data-visualization/page"));
const DatabasePage = React.lazy(() => import("./app/database/page"));
const DatabasemanagementPage = React.lazy(() => import("./app/database-management/page"));
const DatabaseservicesPage = React.lazy(() => import("./app/database-services/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const DevopsPage = React.lazy(() => import("./app/devops/page"));
const DevopsadvancedPage = React.lazy(() => import("./app/devops-advanced/page"));
const DevopscicdPage = React.lazy(() => import("./app/devops-cicd/page"));
const DevopssolutionsPage = React.lazy(() => import("./app/devops-solutions/page"));
const DigitaltwinplatformPage = React.lazy(() => import("./app/digital-twin-platform/page"));
const DisasterrecoveryadvancedPage = React.lazy(() => import("./app/disaster-recovery-advanced/page"));
const DocsPage = React.lazy(() => import("./app/docs/page"));
const EdgecomputingPage = React.lazy(() => import("./app/edge-computing/page"));
const EmailmarketingautomationPage = React.lazy(() => import("./app/email-marketing-automation/page"));
const EmailoptimizerPage = React.lazy(() => import("./app/email-optimizer/page"));
const EnterprisePage = React.lazy(() => import("./app/enterprise/page"));
const EnterpriseintegrationPage = React.lazy(() => import("./app/enterprise-integration/page"));
const EnterprisesecurityPage = React.lazy(() => import("./app/enterprise-security/page"));
const EnterprisesolutionsPage = React.lazy(() => import("./app/enterprise-solutions/page"));
const ExpensetrackerPage = React.lazy(() => import("./app/expense-tracker/page"));
const FaqPage = React.lazy(() => import("./app/faq/page"));
const FinancialitPage = React.lazy(() => import("./app/financial-it/page"));
const GdprPage = React.lazy(() => import("./app/gdpr/page"));
const GdprcompliancePage = React.lazy(() => import("./app/gdpr-compliance/page"));
const HealthcareitPage = React.lazy(() => import("./app/healthcare-it/page"));
const HelpPage = React.lazy(() => import("./app/help/page"));
const InfrastructuremanagementPage = React.lazy(() => import("./app/infrastructure-management/page"));
const InnovationlabsPage = React.lazy(() => import("./app/innovation-labs/page"));
const InvestorsPage = React.lazy(() => import("./app/investors/page"));
const IotPage = React.lazy(() => import("./app/iot/page"));
const IotdevelopmentPage = React.lazy(() => import("./app/iot-development/page"));
const IotedgePage = React.lazy(() => import("./app/iot-edge/page"));
const IotedgecomputingPage = React.lazy(() => import("./app/iot-edge-computing/page"));
const IotintegrationPage = React.lazy(() => import("./app/iot-integration/page"));
const IotplatformPage = React.lazy(() => import("./app/iot-platform/page"));
const IotsolutionsPage = React.lazy(() => import("./app/iot-solutions/page"));
const ItassetmanagementPage = React.lazy(() => import("./app/it-asset-management/page"));
const ItconsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const ItinfrastructurePage = React.lazy(() => import("./app/it-infrastructure/page"));
const ItinfrastructuredesignPage = React.lazy(() => import("./app/it-infrastructure-design/page"));
const ItinfrastructuresolutionsPage = React.lazy(() => import("./app/it-infrastructure-solutions/page"));
const ItperformancePage = React.lazy(() => import("./app/it-performance/page"));
const ItprojectmanagementPage = React.lazy(() => import("./app/it-project-management/page"));
const ItsecurityservicesPage = React.lazy(() => import("./app/it-security-services/page"));
const ItservicesPage = React.lazy(() => import("./app/it-services/page"));
const ItservicescloudmigrationPage = React.lazy(() => import("./app/it-services/cloud-migration/page"));
const ItservicescybersecurityauditPage = React.lazy(() => import("./app/it-services/cybersecurity-audit/page"));
const ItsupportPage = React.lazy(() => import("./app/it-support/page"));
const IttrainingPage = React.lazy(() => import("./app/it-training/page"));
const LandingpagebuilderPage = React.lazy(() => import("./app/landing-page-builder/page"));
const MachinelearningPage = React.lazy(() => import("./app/machine-learning/page"));
const MachinelearningopsPage = React.lazy(() => import("./app/machine-learning-ops/page"));
const ManageditPage = React.lazy(() => import("./app/managed-it/page"));
const MarketingtoolsPage = React.lazy(() => import("./app/marketing-tools/page"));
const MobiledevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const NetworkdesignPage = React.lazy(() => import("./app/network-design/page"));
const NetworkinfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const NetworksecurityPage = React.lazy(() => import("./app/network-security/page"));
const NetworksolutionsPage = React.lazy(() => import("./app/network-solutions/page"));
const NewsPage = React.lazy(() => import("./app/news/page"));
const NlpPage = React.lazy(() => import("./app/nlp/page"));
const NotfoundPage = React.lazy(() => import("./app/not-found/page"));
const OfflinePage = React.lazy(() => import("./app/offline/page"));
const PartnersPage = React.lazy(() => import("./app/partners/page"));
const PerformanceoptimizationPage = React.lazy(() => import("./app/performance-optimization/page"));
const PressPage = React.lazy(() => import("./app/press/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const PrivacypolicyPage = React.lazy(() => import("./app/privacy-policy/page"));
const ProductivityPage = React.lazy(() => import("./app/productivity/page"));
const ProjectmanagementproPage = React.lazy(() => import("./app/project-management-pro/page"));
const QuantumaiPage = React.lazy(() => import("./app/quantum-ai/page"));
const QuantumcomputingPage = React.lazy(() => import("./app/quantum-computing/page"));
const QuantumcomputingsolutionsPage = React.lazy(() => import("./app/quantum-computing-solutions/page"));
const ResourcesPage = React.lazy(() => import("./app/resources/page"));
const RoboticsPage = React.lazy(() => import("./app/robotics/page"));
const RoboticsintegrationPage = React.lazy(() => import("./app/robotics-integration/page"));
const SearchPage = React.lazy(() => import("./app/search/page"));
const SecurityPage = React.lazy(() => import("./app/security/page"));
const SecurityautomationPage = React.lazy(() => import("./app/security-automation/page"));
const SecuritymonitoringPage = React.lazy(() => import("./app/security-monitoring/page"));
const SecuritymonitoringsuitePage = React.lazy(() => import("./app/security-monitoring-suite/page"));
const SeooptimizerPage = React.lazy(() => import("./app/seo-optimizer/page"));
const ServermanagementPage = React.lazy(() => import("./app/server-management/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const ServicesadvertisingPage = React.lazy(() => import("./app/services-advertising/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));
const Sitemap.xmlPage = React.lazy(() => import("./app/sitemap.xml/page"));
const SlaPage = React.lazy(() => import("./app/sla/page"));
const SmartanalyticsPage = React.lazy(() => import("./app/smart-analytics/page"));
const SmartcitiesPage = React.lazy(() => import("./app/smart-cities/page"));
const SmartcityinfrastructurePage = React.lazy(() => import("./app/smart-city-infrastructure/page"));
const SmartcontractsecurityauditPage = React.lazy(() => import("./app/smart-contract-security-audit/page"));
const SpecializedservicesPage = React.lazy(() => import("./app/specialized-services/page"));
const StatusPage = React.lazy(() => import("./app/status/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const SystemadminPage = React.lazy(() => import("./app/system-admin/page"));
const SystemadministrationPage = React.lazy(() => import("./app/system-administration/page"));
const SystemintegrationPage = React.lazy(() => import("./app/system-integration/page"));
const SystemstatusPage = React.lazy(() => import("./app/system-status/page"));
const TaskmanagerproPage = React.lazy(() => import("./app/task-manager-pro/page"));
const TeamPage = React.lazy(() => import("./app/team/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const TermsofservicePage = React.lazy(() => import("./app/terms-of-service/page"));
const TrainingPage = React.lazy(() => import("./app/training/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const WebdevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const FiveG5gdataanalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveG5gedgecomputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveG5gimplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveG5giotsolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveG5gmobileapplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveG5gnetworkinfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveG5gprivatenetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveG5gsmartcitysolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveG5gsolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const AdvancedsecuritysuitePage = React.lazy(() => import("./app/advanced-security-suite/page"));
const ApiPage = React.lazy(() => import("./app/api/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const CookiepolicyPage = React.lazy(() => import("./app/cookie-policy/page"));
const DevelopertoolsPage = React.lazy(() => import("./app/developer-tools/page"));
const DigitaltransformationPage = React.lazy(() => import("./app/digital-transformation/page"));
const EcommercedevelopmentPage = React.lazy(() => import("./app/e-commerce-development/page"));
const HealthPage = React.lazy(() => import("./app/health/page"));
const IntelligentdatabasemigrationPage = React.lazy(() => import("./app/intelligent-database-migration/page"));
const IntelligentemailinfrastructurePage = React.lazy(() => import("./app/intelligent-email-infrastructure/page"));
const MobileappdevelopmentPage = React.lazy(() => import("./app/mobile-app-development/page"));
const PenetrationtestingPage = React.lazy(() => import("./app/penetration-testing/page"));
const ProcessautomationPage = React.lazy(() => import("./app/process-automation/page"));
const TestsimplePage = React.lazy(() => import("./app/test-simple/page"));
const WorkflowautomationPage = React.lazy(() => import("./app/workflow-automation/page"));

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <FuturisticBackground>
                <Navigation onSidebarToggle={toggleSidebar} />
                <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                <Breadcrumb />
                <main id="main-content" role="main">
                  <Suspense fallback={<LoadingPage />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/ai-services" element={<AIServicesPage />} />
                      <Route path="/tutorials" element={<TutorialsPage />} />
                      <Route path="/demo" element={<DemoPage />} />
                      <Route path="/support" element={<SupportPage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route path="/cookies" element={<CookiesPage />} />
                      <Route path="/sitemap" element={<SitemapPage />} />
                      <Route path="/ai-3d-generation" element={<Ai3dgenerationPage />} />
                      <Route path="/ai-accounting-assistant" element={<AiaccountingassistantPage />} />
                      <Route path="/ai-agricultural-intelligence-pro" element={<AiagriculturalintelligenceproPage />} />
                      <Route path="/ai-analytics" element={<AianalyticsPage />} />
                      <Route path="/ai-analytics-dashboard" element={<AianalyticsdashboardPage />} />
                      <Route path="/ai-analytics-dashboard-pro" element={<AianalyticsdashboardproPage />} />
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
                      <Route path="/ai-marketing-automation" element={<AimarketingautomationPage />} />
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
                      <Route path="/ai-services/business-intelligence" element={<AiservicesbusinessintelligencePage />} />
                      <Route path="/ai-services/content-generation" element={<AiservicescontentgenerationPage />} />
                      <Route path="/ai-services/customer-experience" element={<AiservicescustomerexperiencePage />} />
                      <Route path="/ai-services/document-processing" element={<AiservicesdocumentprocessingPage />} />
                      <Route path="/ai-services/energy-management" element={<AiservicesenergymanagementPage />} />
                      <Route path="/ai-services/fraud-detection" element={<AiservicesfrauddetectionPage />} />
                      <Route path="/ai-services/hr-analytics" element={<AiserviceshranalyticsPage />} />
                      <Route path="/ai-services/marketing-automation" element={<AiservicesmarketingautomationPage />} />
                      <Route path="/ai-services/predictive-maintenance" element={<AiservicespredictivemaintenancePage />} />
                      <Route path="/ai-services/process-automation" element={<AiservicesprocessautomationPage />} />
                      <Route path="/ai-services/quality-assurance" element={<AiservicesqualityassurancePage />} />
                      <Route path="/ai-services/supply-chain" element={<AiservicessupplychainPage />} />
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
                      <Route path="/micro-saas" element={<MicrosaasPage />} />
                      <Route path="/micro-saas/ai-content-writer" element={<MicrosaasaicontentwriterPage />} />
                      <Route path="/micro-saas/ai-content-writer-pro" element={<MicrosaasaicontentwriterproPage />} />
                      <Route path="/micro-saas/ai-customer-support-chatbot" element={<MicrosaasaicustomersupportchatbotPage />} />
                      <Route path="/micro-saas/ai-email-marketing-automation" element={<MicrosaasaiemailmarketingautomationPage />} />
                      <Route path="/micro-saas/ai-expense-tracker" element={<MicrosaasaiexpensetrackerPage />} />
                      <Route path="/micro-saas/ai-inventory-manager" element={<MicrosaasaiinventorymanagerPage />} />
                      <Route path="/micro-saas/ai-project-manager" element={<MicrosaasaiprojectmanagerPage />} />
                      <Route path="/micro-saas/ai-social-media-scheduler" element={<MicrosaasaisocialmediaschedulerPage />} />
                      <Route path="/micro-saas/analytics-dashboard" element={<MicrosaasanalyticsdashboardPage />} />
                      <Route path="/micro-saas/appointment-scheduler" element={<MicrosaasappointmentschedulerPage />} />
                      <Route path="/micro-saas/chat-analytics" element={<MicrosaaschatanalyticsPage />} />
                      <Route path="/micro-saas/content-generator" element={<MicrosaascontentgeneratorPage />} />
                      <Route path="/micro-saas/contract-manager" element={<MicrosaascontractmanagerPage />} />
                      <Route path="/micro-saas/document-processor" element={<MicrosaasdocumentprocessorPage />} />
                      <Route path="/micro-saas/email-marketing" element={<MicrosaasemailmarketingPage />} />
                      <Route path="/micro-saas/email-signature" element={<MicrosaasemailsignaturePage />} />
                      <Route path="/micro-saas/employee-directory" element={<MicrosaasemployeedirectoryPage />} />
                      <Route path="/micro-saas/expense-tracker" element={<MicrosaasexpensetrackerPage />} />
                      <Route path="/micro-saas/inventory-management" element={<MicrosaasinventorymanagementPage />} />
                      <Route path="/micro-saas/lead-scoring" element={<MicrosaasleadscoringPage />} />
                      <Route path="/micro-saas/seo-optimizer" element={<MicrosaasseooptimizerPage />} />
                      <Route path="/micro-saas/social-manager" element={<MicrosaassocialmanagerPage />} />
                      <Route path="/micro-saas/support-bot" element={<MicrosaassupportbotPage />} />
                      <Route path="/micro-saas-services" element={<MicrosaasservicesPage />} />
                      <Route path="/micro-saas-services/ai-analytics-dashboard" element={<MicrosaasservicesaianalyticsdashboardPage />} />
                      <Route path="/micro-saas-services/ai-chatbot-builder" element={<MicrosaasservicesaichatbotbuilderPage />} />
                      <Route path="/micro-saas-services/ai-content-generator" element={<MicrosaasservicesaicontentgeneratorPage />} />
                      <Route path="/micro-saas-services/ai-email-assistant" element={<MicrosaasservicesaiemailassistantPage />} />
                      <Route path="/micro-saas-services/ai-lead-generation" element={<MicrosaasservicesaileadgenerationPage />} />
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
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/accessibility" element={<AccessibilityPage />} />
                      <Route path="/accessibility-page" element={<AccessibilitypagePage />} />
                      <Route path="/analytics" element={<AnalyticsPage />} />
                      <Route path="/analytics-tools" element={<AnalyticstoolsPage />} />
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
                      <Route path="/contact" element={<ContactPage />} />
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
                      <Route path="/devops" element={<DevopsPage />} />
                      <Route path="/devops-advanced" element={<DevopsadvancedPage />} />
                      <Route path="/devops-cicd" element={<DevopscicdPage />} />
                      <Route path="/devops-solutions" element={<DevopssolutionsPage />} />
                      <Route path="/digital-twin-platform" element={<DigitaltwinplatformPage />} />
                      <Route path="/disaster-recovery-advanced" element={<DisasterrecoveryadvancedPage />} />
                      <Route path="/docs" element={<DocsPage />} />
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
                      <Route path="/healthcare-it" element={<HealthcareitPage />} />
                      <Route path="/help" element={<HelpPage />} />
                      <Route path="/infrastructure-management" element={<InfrastructuremanagementPage />} />
                      <Route path="/innovation-labs" element={<InnovationlabsPage />} />
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
                      <Route path="/it-services/cloud-migration" element={<ItservicescloudmigrationPage />} />
                      <Route path="/it-services/cybersecurity-audit" element={<ItservicescybersecurityauditPage />} />
                      <Route path="/it-support" element={<ItsupportPage />} />
                      <Route path="/it-training" element={<IttrainingPage />} />
                      <Route path="/landing-page-builder" element={<LandingpagebuilderPage />} />
                      <Route path="/machine-learning" element={<MachinelearningPage />} />
                      <Route path="/machine-learning-ops" element={<MachinelearningopsPage />} />
                      <Route path="/managed-it" element={<ManageditPage />} />
                      <Route path="/marketing-tools" element={<MarketingtoolsPage />} />
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
                      <Route path="/performance-optimization" element={<PerformanceoptimizationPage />} />
                      <Route path="/press" element={<PressPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/privacy-policy" element={<PrivacypolicyPage />} />
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
                      <Route path="/sitemap.xml" element={<Sitemap.xmlPage />} />
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
                      <Route path="/training" element={<TrainingPage />} />
                      <Route path="/tutorials" element={<TutorialsPage />} />
                      <Route path="/web-development" element={<WebdevelopmentPage />} />
                      <Route path="/5g-data-analytics" element={<FiveG5gdataanalyticsPage />} />
                      <Route path="/5g-edge-computing" element={<FiveG5gedgecomputingPage />} />
                      <Route path="/5g-implementation" element={<FiveG5gimplementationPage />} />
                      <Route path="/5g-iot-solutions" element={<FiveG5giotsolutionsPage />} />
                      <Route path="/5g-mobile-applications" element={<FiveG5gmobileapplicationsPage />} />
                      <Route path="/5g-network-infrastructure" element={<FiveG5gnetworkinfrastructurePage />} />
                      <Route path="/5g-private-networks" element={<FiveG5gprivatenetworksPage />} />
                      <Route path="/5g-smart-city-solutions" element={<FiveG5gsmartcitysolutionsPage />} />
                      <Route path="/5g-solutions" element={<FiveG5gsolutionsPage />} />
                      <Route path="/advanced-security-suite" element={<AdvancedsecuritysuitePage />} />
                      <Route path="/api" element={<ApiPage />} />
                      <Route path="/consultation" element={<ConsultationPage />} />
                      <Route path="/cookie-policy" element={<CookiepolicyPage />} />
                      <Route path="/developer-tools" element={<DevelopertoolsPage />} />
                      <Route path="/digital-transformation" element={<DigitaltransformationPage />} />
                      <Route path="/e-commerce-development" element={<EcommercedevelopmentPage />} />
                      <Route path="/health" element={<HealthPage />} />
                      <Route path="/intelligent-database-migration" element={<IntelligentdatabasemigrationPage />} />
                      <Route path="/intelligent-email-infrastructure" element={<IntelligentemailinfrastructurePage />} />
                      <Route path="/mobile-app-development" element={<MobileappdevelopmentPage />} />
                      <Route path="/penetration-testing" element={<PenetrationtestingPage />} />
                      <Route path="/process-automation" element={<ProcessautomationPage />} />
                      <Route path="/test-simple" element={<TestsimplePage />} />
                      <Route path="/workflow-automation" element={<WorkflowautomationPage />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </FuturisticBackground>
            </div>
          </Router>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;