import React, { Suspense, lazy, useEffect, memo } from "react";

export default function Page() {
import { Database, Cloud, Helmet } from 'lucide-react';

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app/styles/futuristic.css";
// Components
import Navigation from "./app/components/Navigation";
import Sidebar from "./app/components/Sidebar";
import Footer from "./app/components/Footer";
import ErrorBoundary from "./app/components/ErrorBoundary";
import GlobalErrorBoundary from "./app/components/GlobalErrorBoundary";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import LoadingSpinner from "./app/components/LoadingSpinner";

// App Loading Spinner Component
const AppLoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div><div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg></div><div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-900">
          Something went wrong
        </h3><p className="mt-2 text-sm text-gray-500">{error.message}</p><button
          onClick={resetErrorBoundary}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Try again
        </button></div></div></div><div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div><GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <main className="flex-1">
              <ErrorBoundary>
                <PerformanceMonitor />
                <AccessibilityEnhancer>
                  <SEOOptimizer>
                    <Suspense fallback={<LoadingFallback />}>
                    <ErrorBoundary>
                      <Routes>
                        {/* Main Pages */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route
                          path="/case-studies"
                          element={<CaseStudiesPage />}
                        />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/cookies" element={<CookiesPage />} />

                        {/* AI Services */}
                        <Route
                          path="/ai-services"
                          element={<AIServicesPage />}
                        />
                        <Route
                          path="/ai-solutions"
                          element={<AISolutionsPage />}
                        />

                        {/* IT Services */}
                        <Route
                          path="/it-services"
                          element={<ITServicesPage />}
                        />
                        <Route
                          path="/it-solutions"
                          element={<ITSolutionsPage />}
                        />
                        <Route
                          path="/cloud-infrastructure"
                          element={<CloudInfrastructurePage />}
                        />
                        <Route
                          path="/digital-transformation"
                          element={<DigitalTransformationPage />}
                        />
                        <Route
                          path="/cybersecurity"
                          element={<CybersecurityPage />}
                        />
                        <Route path="/solutions" element={<SolutionsPage />} />

                        {/* 5G Solutions */}
                        <Route
                          path="/5g-solutions"
                          element={<FiveGSolutionsPage />}
                        />

                        {/* Additional AI Services */}
                        <Route
                          path="/ai-chatbot-builder"
                          element={<AIChatbotBuilderPage />}
                        />
                        <Route
                          path="/ai-document-processor"
                          element={<AIDocumentProcessorPage />}
                        />
                        <Route
                          path="/ai-form-builder"
                          element={<AIFormBuilderPage />}
                        />
                        <Route
                          path="/ai-voice-assistant"
                          element={<AIVoiceAssistantPage />}
                        />
                        <Route
                          path="/ai-fraud-detection"
                          element={<AIFraudDetectionPage />}
                        />
                        <Route
                          path="/ai-image-recognition"
                          element={<AIImageRecognitionPage />}
                        />
                        <Route
                          path="/ai-lead-scoring"
                          element={<AILeadScoringPage />}
                        />
                        <Route
                          path="/ai-predictive-maintenance"
                          element={<AIPredictiveMaintenancePage />}
                        />
                        <Route
                          path="/ai-price-optimizer"
                          element={<AIPriceOptimizerPage />}
                        />
                        <Route
                          path="/ai-scheduling-assistant"
                          element={<AISchedulingAssistantPage />}
                        />
                        <Route
                          path="/ai-crm-optimizer"
                          element={<AICRMOptimizerPage />}
                        />
                        <Route
                          path="/ai-data-visualizer"
                          element={<AIDataVisualizerPage />}
                        />
                        <Route
                          path="/ai-email-optimizer"
                          element={<AIEmailOptimizerPage />}
                        />
                        <Route
                          path="/social-media-scheduler"
                          element={<SocialMediaSchedulerPage />}
                        />
                        <Route
                          path="/expense-tracker-pro"
                          element={<ExpenseTrackerProPage />}
                        />

                        {/* Advanced Solutions */}
                        <Route
                          path="/blockchain-solutions"
                          element={<BlockchainSolutionsPage />}
                        />
                        <Route
                          path="/iot-solutions"
                          element={<IOTSolutionsPage />}
                        />
                        <Route
                          path="/devops-automation"
                          element={<DevOpsAutomationPage />}
                        />
                        <Route
                          path="/data-engineering"
                          element={<DataEngineeringPage />}
                        />
                        <Route
                          path="/api-development"
                          element={<APIDevelopmentPage />}
                        />
                        <Route
                          path="/security-audit"
                          element={<SecurityAuditPage />}
                        />

                        {/* Additional Services */}
                        <Route
                          path="/micro-saas-solutions"
                          element={<MicroSAASSolutionsPage />}
                        />
                        <Route
                          path="/ai-content-generator"
                          element={<AIContentGeneratorPage />}
                        />
                        <Route
                          path="/data-analytics"
                          element={<DataAnalyticsPage />}
                        />
                        <Route
                          path="/web-development"
                          element={<WebDevelopmentPage />}
                        />
                        <Route
                          path="/mobile-development"
                          element={<MobileDevelopmentPage />}
                        />
                        <Route
                          path="/database-management"
                          element={<DatabaseManagementPage />}
                        />
                        <Route
                          path="/network-infrastructure"
                          element={<NetworkInfrastructurePage />}
                        />
                        <Route path="/help" element={<HelpPage />} />
                        <Route
                          path="/accessibility"
                          element={<AccessibilityPage />}
                        />
                        <Route path="/api-docs" element={<APIDocsPage />} />
                        <Route
                          path="/partnerships"
                          element={<PartnershipsPage />}
                        />

                        {/* Additional missing pages */}
                        <Route
                          path="/ai-legal-assistant"
                          element={<AILegalAssistantPage />}
                        />
                        <Route
                          path="/ai-medical-assistant"
                          element={<AIMedicalAssistantPage />}
                        />
                        <Route
                          path="/ai-education-tutor"
                          element={<AIEducationTutorPage />}
                        />
                        <Route
                          path="/ai-real-estate-analyzer"
                          element={<AIRealEstateAnalyzerPage />}
                        />
                        <Route
                          path="/ai-supply-chain-optimizer"
                          element={<AISupplyChainOptimizerPage />}
                        />
                        <Route
                          path="/ai-3d-model-generator"
                          element={<AI3DModelGeneratorPage />}
                        />
                        <Route
                          path="/edge-computing-solutions"
                          element={<EdgeComputingSolutionsPage />}
                        />
                        <Route
                          path="/augmented-reality-solutions"
                          element={<AugmentedRealitySolutionsPage />}
                        />
                        <Route
                          path="/virtual-reality-solutions"
                          element={<VirtualRealitySolutionsPage />}
                        />
                        <Route
                          path="/robotic-process-automation"
                          element={<RoboticProcessAutomationPage />}
                        />
                        <Route
                          path="/low-code-platform"
                          element={<LowCodePlatformPage />}
                        />
                        <Route
                          path="/serverless-architecture"
                          element={<ServerlessArchitecturePage />}
                        />
                        <Route
                          path="/container-orchestration"
                          element={<ContainerOrchestrationPage />}
                        />
                        <Route
                          path="/ai-infrastructure"
                          element={<AIInfrastructurePage />}
                        />
                        <Route
                          path="/data-lake-solutions"
                          element={<DataLakeSolutionsPage />}
                        />
                        <Route
                          path="/task-manager-pro"
                          element={<TaskManagerProPage />}
                        />

                        {/* Pro AI Services */}
                        <Route
                          path="/ai-fraud-detection-pro"
                          element={<AIFraudDetectionProPage />}
                        />
                        <Route
                          path="/ai-image-recognition-pro"
                          element={<AIImageRecognitionProPage />}
                        />
                        <Route
                          path="/ai-lead-scoring-pro"
                          element={<AILeadScoringProPage />}
                        />
                        <Route
                          path="/ai-predictive-maintenance-pro"
                          element={<AIPredictiveMaintenanceProPage />}
                        />
                        <Route
                          path="/ai-price-optimizer-pro"
                          element={<AIPriceOptimizerProPage />}
                        />
                        <Route
                          path="/ai-social-media-manager"
                          element={<AISocialMediaManagerPage />}
                        />
                        <Route
                          path="/ai-voice-assistant-pro"
                          element={<AIVoiceAssistantProPage />}
                        />
                        <Route
                          path="/ai-website-analyzer"
                          element={<AIWebsiteAnalyzerPage />}
                        />

                        {/* Pro Enterprise Solutions */}
                        <Route
                          path="/blockchain-solutions-pro"
                          element={<BlockchainSolutionsProPage />}
                        />
                        <Route
                          path="/devops-automation-pro"
                          element={<DevOpsAutomationProPage />}
                        />
                        <Route
                          path="/iot-solutions-pro"
                          element={<IOTSolutionsProPage />}
                        />

                        {/* Zion AI Services */}
                        <Route
                          path="/zion-ai-chatbot-builder"
                          element={<ZionAIChatbotBuilderPage />}
                        />
                        <Route
                          path="/zion-ai-code-assistant"
                          element={<ZionAICodeAssistantPage />}
                        />
                        <Route
                          path="/zion-ai-content-moderator"
                          element={<ZionAIContentModeratorPage />}
                        />
                        <Route
                          path="/zion-ai-crm-optimizer"
                          element={<ZionAICRMOptimizerPage />}
                        />
                        <Route
                          path="/zion-ai-customer-churn-predictor"
                          element={<ZionAICustomerChurnPredictorPage />}
                        />
                        <Route
                          path="/zion-ai-customer-churn-predictor-pro"
                          element={<ZionAICustomerChurnPredictorProPage />}
                        />
                        <Route
                          path="/zion-ai-customer-sentiment-tracker"
                          element={<ZionAICustomerSentimentTrackerPage />}
                        />
                        <Route
                          path="/zion-ai-customer-support-pro"
                          element={<ZionAICustomerSupportProPage />}
                        />
                        <Route
                          path="/zion-ai-data-visualizer"
                          element={<ZionAIDataVisualizerPage />}
                        />
                        <Route
                          path="/zion-ai-document-analyzer"
                          element={<ZionAIDocumentAnalyzerPage />}
                        />
                        <Route
                          path="/zion-ai-document-processor"
                          element={<ZionAIDocumentProcessorPage />}
                        />
                        <Route
                          path="/zion-ai-email-marketing-pro"
                          element={<ZionAIEmailMarketingProPage />}
                        />
                        <Route
                          path="/zion-ai-email-optimizer"
                          element={<ZionAIEmailOptimizerPage />}
                        />
                        <Route
                          path="/zion-ai-financial-forecaster"
                          element={<ZionAIFinancialForecasterPage />}
                        />
                        <Route
                          path="/zion-ai-form-builder"
                          element={<ZionAIFormBuilderPage />}
                        />
                        <Route
                          path="/zion-ai-fraud-detection"
                          element={<ZionAIFraudDetectionPage />}
                        />
                        <Route
                          path="/zion-ai-image-generator"
                          element={<ZionAIImageGeneratorPage />}
                        />
                        <Route
                          path="/zion-ai-image-recognition"
                          element={<ZionAIImageRecognitionPage />}
                        />
                        <Route
                          path="/zion-ai-inventory-optimizer-pro"
                          element={<ZionAIInventoryOptimizerProPage />}
                        />
                        <Route
                          path="/zion-ai-lead-scoring"
                          element={<ZionAILeadScoringPage />}
                        />
                        <Route
                          path="/zion-ai-meeting-transcriber"
                          element={<ZionAIMeetingTranscriberPage />}
                        />
                        <Route
                          path="/zion-ai-predictive-analytics"
                          element={<ZionAIPredictiveAnalyticsPage />}
                        />
                        <Route
                          path="/zion-ai-predictive-maintenance"
                          element={<ZionAIPredictiveMaintenancePage />}
                        />
                        <Route
                          path="/zion-ai-price-optimizer"
                          element={<ZionAIPriceOptimizerPage />}
                        />
                        <Route
                          path="/zion-ai-sales-predictor"
                          element={<ZionAISalesPredictorPage />}
                        />
                        <Route
                          path="/zion-ai-scheduling-assistant"
                          element={<ZionAISchedulingAssistantPage />}
                        />
                        <Route
                          path="/zion-ai-social-media-manager"
                          element={<ZionAISocialMediaManagerPage />}
                        />
                        <Route
                          path="/zion-ai-social-scheduler-pro"
                          element={<ZionAISocialSchedulerProPage />}
                        />
                        <Route
                          path="/zion-ai-task-scheduler"
                          element={<ZionAITaskSchedulerPage />}
                        />
                        <Route
                          path="/zion-ai-translation-service"
                          element={<ZionAITranslationServicePage />}
                        />
                        <Route
                          path="/zion-ai-video-generator"
                          element={<ZionAIVideoGeneratorPage />}
                        />
                        <Route
                          path="/zion-ai-voice-assistant"
                          element={<ZionAIVoiceAssistantPage />}
                        />
                        <Route
                          path="/zion-ai-voice-synthesis"
                          element={<ZionAIVoiceSynthesisPage />}
                        />
                        <Route
                          path="/zion-ai-website-analyzer"
                          element={<ZionAIWebsiteAnalyzerPage />}
                        />
                        <Route
                          path="/zion-ai-workflow-automator"
                          element={<ZionAIWorkflowAutomatorPage />}
                        />
                        <Route
                          path="/zion-ai-workflow-automator-pro"
                          element={<ZionAIWorkflowAutomatorProPage />}
                        />
                        <Route
                          path="/zion-api-development"
                          element={<ZionAPIDevelopmentPage />}
                        />
                        <Route
                          path="/zion-blockchain-solutions"
                          element={<ZionBlockchainSolutionsPage />}
                        />
                        <Route
                          path="/zion-customer-satisfaction-monitor"
                          element={<ZionCustomerSatisfactionMonitorPage />}
                        />
                        <Route
                          path="/zion-cybersecurity-audit"
                          element={<ZionCybersecurityAuditPage />}
                        />
                        <Route
                          path="/zion-devops-automation"
                          element={<ZionDevOpsAutomationPage />}
                        />
                        <Route
                          path="/zion-iot-solutions"
                          element={<ZionIOTSolutionsPage />}
                        />
                        <Route
                          path="/zion-smart-analytics-dashboard"
                          element={<ZionSmartAnalyticsDashboardPage />}
                        />
                        <Route
                          path="/zion-smart-crm-automation"
                          element={<ZionSmartCRMAutomationPage />}
                        />
                        <Route
                          path="/zion-smart-expense-tracker"
                          element={<ZionSmartExpenseTrackerPage />}
                        />
                        <Route
                          path="/zion-smart-inventory-manager"
                          element={<ZionSmartInventoryManagerPage />}
                        />

                        {/* Additional AI Services */}
                        <Route
                          path="/ai-code-assistant"
                          element={<AICodeAssistantPage />}
                        />
                        <Route
                          path="/ai-translator"
                          element={<AITranslatorPage />}
                        />
                        <Route
                          path="/ai-audio-processor"
                          element={<AIAudioProcessorPage />}
                        />
                        <Route
                          path="/ai-3d-model-generator"
                          element={<AI3DModelGeneratorPage />}
                        />
                        <Route
                          path="/ai-legal-assistant"
                          element={<AILegalAssistantPage />}
                        />
                        <Route
                          path="/ai-medical-assistant"
                          element={<AIMedicalAssistantPage />}
                        />
                        <Route
                          path="/ai-education-tutor"
                          element={<AIEducationTutorPage />}
                        />
                        <Route
                          path="/ai-real-estate-analyzer"
                          element={<AIRealEstateAnalyzerPage />}
                        />
                        <Route
                          path="/ai-supply-chain-optimizer"
                          element={<AISupplyChainOptimizerPage />}
                        />

                        {/* New AI Services */}
                        <Route
                          path="/ai-project-manager-pro"
                          element={<AIProjectManagerProPage />}
                        />
                        <Route
                          path="/ai-customer-feedback-analyzer"
                          element={<AICustomerFeedbackAnalyzerPage />}
                        />
                        <Route
                          path="/ai-inventory-optimizer-pro"
                          element={<AIInventoryOptimizerProPage />}
                        />
                        <Route
                          path="/ai-legal-document-analyzer"
                          element={<AILegalDocumentAnalyzerPage />}
                        />

                        {/* Enterprise Solutions */}
                        <Route
                          path="/ai-infrastructure"
                          element={<AIInfrastructurePage />}
                        />
                        <Route
                          path="/quantum-computing-solutions"
                          element={<QuantumComputingSolutionsPage />}
                        />
                        <Route
                          path="/edge-computing-solutions"
                          element={<EdgeComputingSolutionsPage />}
                        />
                        <Route
                          path="/augmented-reality-solutions"
                          element={<AugmentedRealitySolutionsPage />}
                        />
                        <Route
                          path="/virtual-reality-solutions"
                          element={<VirtualRealitySolutionsPage />}
                        />
                        <Route
                          path="/robotic-process-automation"
                          element={<RoboticProcessAutomationPage />}
                        />
                        <Route
                          path="/low-code-platform"
                          element={<LowCodePlatformPage />}
                        />
                        <Route
                          path="/serverless-architecture"
                          element={<ServerlessArchitecturePage />}
                        />
                        <Route
                          path="/container-orchestration"
                          element={<ContainerOrchestrationPage />}
                        />
                        <Route
                          path="/data-lake-solutions"
                          element={<DataLakeSolutionsPage />}
                        />

                        {/* New AI Medical Services */}
                        <Route
                          path="/ai-medical-diagnosis-assistant"
                          element={<AIMedicalDiagnosisAssistantPage />}
                        />

                        {/* Catch all route */}
                        <Route
                          path="*"
                          element={
                            <div className="min-h-screen flex items-center justify-center">
                              <div className="text-center">
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                  404
                                </h1><p className="text-gray-600 mb-8">
                                  Page not found
                                </p><a
                                  href="/"
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  Go back home
                                </a>
          </div></div></Routes></ErrorBoundary></Suspense></SEOOptimizer></AccessibilityEnhancer></ErrorBoundary></main><Footer />
          </div></Router></HelmetProvider></GlobalErrorBoundary>
  );
};