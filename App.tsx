'use client';

import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import ErrorBoundary from './app/components/ErrorBoundary';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import FuturisticBackground from './app/components/FuturisticBackground';
import PageLoader from './app/components/PageLoader';
import { usePerformanceMonitor } from './app/hooks/usePerformanceMonitor';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AiCrmPage = React.lazy(() => import('./app/ai-crm/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AiHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AiFinancialServicesPage = React.lazy(() => import('./app/ai-financial-services/page'));
const AiComputerVisionPage = React.lazy(() => import('./app/ai-computer-vision/page'));
const AiVoiceSolutionsPage = React.lazy(() => import('./app/ai-voice-solutions/page'));
const AiEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AiHrSolutionsPage = React.lazy(() => import('./app/ai-hr-solutions/page'));
const AiMarketingPage = React.lazy(() => import('./app/ai-marketing/page'));
const AiContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AiDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'));
const AiPredictiveAnalyticsPage = React.lazy(() => import('./app/ai-predictive-analytics/page'));
const AiRecommendationEnginePage = React.lazy(() => import('./app/ai-recommendation-engine/page'));
const AiSentimentAnalysisPage = React.lazy(() => import('./app/ai-sentiment-analysis/page'));
const AiConversationalAiPage = React.lazy(() => import('./app/ai-conversational-ai/page'));
const AiCustomerServicePage = React.lazy(() => import('./app/ai-customer-service/page'));
const AiEmailMarketingPage = React.lazy(() => import('./app/ai-email-marketing/page'));
const AiProjectManagementPage = React.lazy(() => import('./app/ai-project-management/page'));
const AiQualityAssurancePage = React.lazy(() => import('./app/ai-quality-assurance/page'));
const AiLoadTestingPage = React.lazy(() => import('./app/ai-load-testing/page'));
const AiDevopsAutomationPage = React.lazy(() => import('./app/ai-devops-automation/page'));
const AiInfrastructureMonitoringPage = React.lazy(() => import('./app/ai-infrastructure-monitoring/page'));
const AiSecurityMonitorPage = React.lazy(() => import('./app/ai-security-monitor/page'));
const AiFraudDetectionPage = React.lazy(() => import('./app/ai-fraud-detection/page'));
const AiInventoryManagementPage = React.lazy(() => import('./app/ai-inventory-management/page'));
const AiLeadGenerationPage = React.lazy(() => import('./app/ai-lead-generation/page'));
const AiSalesAutomationPage = React.lazy(() => import('./app/ai-sales-automation/page'));
const AiMeetingAssistantPage = React.lazy(() => import('./app/ai-meeting-assistant/page'));
const AiSchedulerPage = React.lazy(() => import('./app/ai-scheduler/page'));
const AiPasswordManagerPage = React.lazy(() => import('./app/ai-password-manager/page'));
const AiExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker/page'));
const AiFinancialPlannerPage = React.lazy(() => import('./app/ai-financial-planner/page'));
const AiInvestmentOptimizerPage = React.lazy(() => import('./app/ai-investment-optimizer/page'));
const AiInsurancePage = React.lazy(() => import('./app/ai-insurance/page'));
const AiRealEstatePage = React.lazy(() => import('./app/ai-real-estate/page'));
const AiLegalPage = React.lazy(() => import('./app/ai-legal/page'));
const AiLegalAssistantPage = React.lazy(() => import('./app/ai-legal-assistant/page'));
const AiLegalResearchProPage = React.lazy(() => import('./app/ai-legal-research-pro/page'));
const AiHrPage = React.lazy(() => import('./app/ai-hr/page'));
const AiHrAssistantPage = React.lazy(() => import('./app/ai-hr-assistant/page'));
const AiRecruitmentAssistantPage = React.lazy(() => import('./app/ai-recruitment-assistant/page'));
const AiEducationPage = React.lazy(() => import('./app/ai-education/page'));
const AiLearningPlatformPage = React.lazy(() => import('./app/ai-learning-platform/page'));
const AiFitnessCoachPage = React.lazy(() => import('./app/ai-fitness-coach/page'));
const AiHealthTrackerPage = React.lazy(() => import('./app/ai-health-tracker/page'));
const AiMentalHealthCompanionPage = React.lazy(() => import('./app/ai-mental-health-companion/page'));
const AiHealthcareDiagnosticsPage = React.lazy(() => import('./app/ai-healthcare-diagnostics/page'));
const AiHealthcareSolutionsPage = React.lazy(() => import('./app/ai-healthcare-solutions/page'));
const AiDrugDiscoveryProPage = React.lazy(() => import('./app/ai-drug-discovery-pro/page'));
const AiManufacturingPage = React.lazy(() => import('./app/ai-manufacturing/page'));
const AiPredictiveMaintenancePage = React.lazy(() => import('./app/ai-predictive-maintenance/page'));
const AiRoboticsPage = React.lazy(() => import('./app/ai-robotics/page'));
const AiMobileAppBuilderPage = React.lazy(() => import('./app/ai-mobile-app-builder/page'));
const AiMobileAppDevelopmentPage = React.lazy(() => import('./app/ai-mobile-app-development/page'));
const AiMobileBuilderPage = React.lazy(() => import('./app/ai-mobile-builder/page'));
const AiEcommerceAssistantPage = React.lazy(() => import('./app/ai-ecommerce-assistant/page'));
const AiEcommerceOptimizerPage = React.lazy(() => import('./app/ai-ecommerce-optimizer/page'));
const AiEcommerceOptimizerProPage = React.lazy(() => import('./app/ai-ecommerce-optimizer-pro/page'));
const AiSeoOptimizerPage = React.lazy(() => import('./app/ai-seo-optimizer/page'));
const AiContentWriterPage = React.lazy(() => import('./app/ai-content-writer/page'));
const AiContentGeneratorPage = React.lazy(() => import('./app/ai-content-generator/page'));
const AiContentGenerationProPage = React.lazy(() => import('./app/ai-content-generation-pro/page'));
const AiContentStudioPage = React.lazy(() => import('./app/ai-content-studio/page'));
const AiContentManagementPage = React.lazy(() => import('./app/ai-content-management/page'));
const AiContentModerationPage = React.lazy(() => import('./app/ai-content-moderation/page'));
const AiContentModerationProPage = React.lazy(() => import('./app/ai-content-moderation-pro/page'));
const AiContentDeliveryNetworkPage = React.lazy(() => import('./app/ai-content-delivery-network/page'));
const AiDesignStudioPage = React.lazy(() => import('./app/ai-design-studio/page'));
const AiLogoDesignerPage = React.lazy(() => import('./app/ai-logo-designer/page'));
const AiFashionDesignPage = React.lazy(() => import('./app/ai-fashion-design/page'));
const AiMusicCompositionPage = React.lazy(() => import('./app/ai-music-composition/page'));
const AiImageRecognitionPage = React.lazy(() => import('./app/ai-image-recognition/page'));
const AiComputerVisionProPage = React.lazy(() => import('./app/ai-computer-vision-pro/page'));
const Ai3dGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'));
const AiHolographicWorkspacePage = React.lazy(() => import('./app/ai-holographic-workspace/page'));
const AiNeuralInterfacePage = React.lazy(() => import('./app/ai-neural-interface/page'));
const AiNeuralMemoryAssistantPage = React.lazy(() => import('./app/ai-neural-memory-assistant/page'));
const AiQuantumComputingPage = React.lazy(() => import('./app/ai-quantum-computing/page'));
const AiQuantumComputingSimulatorPage = React.lazy(() => import('./app/ai-quantum-computing-simulator/page'));
const AiQuantumFinancialOraclePage = React.lazy(() => import('./app/ai-quantum-financial-oracle/page'));
const AiQuantumOptimizationPage = React.lazy(() => import('./app/ai-quantum-optimization/page'));
const AiQuantumTaskOptimizerPage = React.lazy(() => import('./app/ai-quantum-task-optimizer/page'));
const AiBlockchainSolutionsPage = React.lazy(() => import('./app/ai-blockchain-solutions/page'));
const AiBlockchainAnalyticsPage = React.lazy(() => import('./app/ai-blockchain-analytics/page'));
const AiCryptocurrencyPage = React.lazy(() => import('./app/ai-cryptocurrency/page'));
const AiNftPage = React.lazy(() => import('./app/ai-nft/page'));
const AiDefiPage = React.lazy(() => import('./app/ai-defi/page'));
const AiSmartContractPage = React.lazy(() => import('./app/ai-smart-contract/page'));
const AiWeb3Page = React.lazy(() => import('./app/ai-web3/page'));
const AiMetaversePage = React.lazy(() => import('./app/ai-metaverse/page'));
const AiVirtualRealityPage = React.lazy(() => import('./app/ai-virtual-reality/page'));
const AiAugmentedRealityPage = React.lazy(() => import('./app/ai-augmented-reality/page'));
const AiMixedRealityPage = React.lazy(() => import('./app/ai-mixed-reality/page'));
const AiExtendedRealityPage = React.lazy(() => import('./app/ai-extended-reality/page'));
const AiSpatialComputingPage = React.lazy(() => import('./app/ai-spatial-computing/page'));
const AiEdgeComputingPage = React.lazy(() => import('./app/ai-edge-computing/page'));
const AiFogComputingPage = React.lazy(() => import('./app/ai-fog-computing/page'));
const AiCloudComputingPage = React.lazy(() => import('./app/ai-cloud-computing/page'));
const AiDistributedComputingPage = React.lazy(() => import('./app/ai-distributed-computing/page'));
const AiParallelComputingPage = React.lazy(() => import('./app/ai-parallel-computing/page'));
const AiGridComputingPage = React.lazy(() => import('./app/ai-grid-computing/page'));
const AiClusterComputingPage = React.lazy(() => import('./app/ai-cluster-computing/page'));
const AiSupercomputingPage = React.lazy(() => import('./app/ai-supercomputing/page'));
const AiHighPerformanceComputingPage = React.lazy(() => import('./app/ai-high-performance-computing/page'));
const AiGpuComputingPage = React.lazy(() => import('./app/ai-gpu-computing/page'));
const AiTpuComputingPage = React.lazy(() => import('./app/ai-tpu-computing/page'));
const AiNeuromorphicComputingPage = React.lazy(() => import('./app/ai-neuromorphic-computing/page'));
const AiOpticalComputingPage = React.lazy(() => import('./app/ai-optical-computing/page'));
const AiDnaComputingPage = React.lazy(() => import('./app/ai-dna-computing/page'));
const AiMolecularComputingPage = React.lazy(() => import('./app/ai-molecular-computing/page'));
const AiChemicalComputingPage = React.lazy(() => import('./app/ai-chemical-computing/page'));
const AiBiologicalComputingPage = React.lazy(() => import('./app/ai-biological-computing/page'));
const AiBioinformaticsPage = React.lazy(() => import('./app/ai-bioinformatics/page'));
const AiComputationalBiologyPage = React.lazy(() => import('./app/ai-computational-biology/page'));
const AiSystemsBiologyPage = React.lazy(() => import('./app/ai-systems-biology/page'));
const AiSyntheticBiologyPage = React.lazy(() => import('./app/ai-synthetic-biology/page'));
const AiBiotechnologyPage = React.lazy(() => import('./app/ai-biotechnology/page'));
const AiBiomedicalEngineeringPage = React.lazy(() => import('./app/ai-biomedical-engineering/page'));
const AiMedicalDevicesPage = React.lazy(() => import('./app/ai-medical-devices/page'));
const AiPharmaceuticalsPage = React.lazy(() => import('./app/ai-pharmaceuticals/page'));
const AiDrugDiscoveryPage = React.lazy(() => import('./app/ai-drug-discovery/page'));
const AiPrecisionMedicinePage = React.lazy(() => import('./app/ai-precision-medicine/page'));
const AiPersonalizedMedicinePage = React.lazy(() => import('./app/ai-personalized-medicine/page'));
const AiRegenerativeMedicinePage = React.lazy(() => import('./app/ai-regenerative-medicine/page'));
const AiStemCellResearchPage = React.lazy(() => import('./app/ai-stem-cell-research/page'));
const AiGeneTherapyPage = React.lazy(() => import('./app/ai-gene-therapy/page'));
const AiImmunotherapyPage = React.lazy(() => import('./app/ai-immunotherapy/page'));
const AiCancerResearchPage = React.lazy(() => import('./app/ai-cancer-research/page'));
const AiOncologyPage = React.lazy(() => import('./app/ai-oncology/page'));
const AiCardiologyPage = React.lazy(() => import('./app/ai-cardiology/page'));
const AiNeurologyPage = React.lazy(() => import('./app/ai-neurology/page'));
const AiPsychiatryPage = React.lazy(() => import('./app/ai-psychiatry/page'));
const AiDermatologyPage = React.lazy(() => import('./app/ai-dermatology/page'));
const AiOphthalmologyPage = React.lazy(() => import('./app/ai-ophthalmology/page'));
const AiRadiologyPage = React.lazy(() => import('./app/ai-radiology/page'));
const AiPathologyPage = React.lazy(() => import('./app/ai-pathology/page'));
const AiAnesthesiologyPage = React.lazy(() => import('./app/ai-anesthesiology/page'));
const AiSurgeryPage = React.lazy(() => import('./app/ai-surgery/page'));
const AiEmergencyMedicinePage = React.lazy(() => import('./app/ai-emergency-medicine/page'));
const AiPediatricsPage = React.lazy(() => import('./app/ai-pediatrics/page'));
const AiGeriatricsPage = React.lazy(() => import('./app/ai-geriatrics/page'));
const AiObstetricsPage = React.lazy(() => import('./app/ai-obstetrics/page'));
const AiGynecologyPage = React.lazy(() => import('./app/ai-gynecology/page'));
const AiUrologyPage = React.lazy(() => import('./app/ai-urology/page'));
const AiOrthopedicsPage = React.lazy(() => import('./app/ai-orthopedics/page'));
const AiPhysicalTherapyPage = React.lazy(() => import('./app/ai-physical-therapy/page'));
const AiOccupationalTherapyPage = React.lazy(() => import('./app/ai-occupational-therapy/page'));
const AiSpeechTherapyPage = React.lazy(() => import('./app/ai-speech-therapy/page'));
const AiNutritionPage = React.lazy(() => import('./app/ai-nutrition/page'));
const AiDieteticsPage = React.lazy(() => import('./app/ai-dietetics/page'));
const AiPublicHealthPage = React.lazy(() => import('./app/ai-public-health/page'));
const AiEpidemiologyPage = React.lazy(() => import('./app/ai-epidemiology/page'));
const AiHealthInformaticsPage = React.lazy(() => import('./app/ai-health-informatics/page'));
const AiMedicalInformaticsPage = React.lazy(() => import('./app/ai-medical-informatics/page'));
const AiClinicalInformaticsPage = React.lazy(() => import('./app/ai-clinical-informatics/page'));
const AiNursingInformaticsPage = React.lazy(() => import('./app/ai-nursing-informatics/page'));
const AiPharmacyInformaticsPage = React.lazy(() => import('./app/ai-pharmacy-informatics/page'));
const AiDentalInformaticsPage = React.lazy(() => import('./app/ai-dental-informatics/page'));
const AiVeterinaryInformaticsPage = React.lazy(() => import('./app/ai-veterinary-informatics/page'));
const AiMentalHealthInformaticsPage = React.lazy(() => import('./app/ai-mental-health-informatics/page'));
const AiBehavioralHealthInformaticsPage = React.lazy(() => import('./app/ai-behavioral-health-informatics/page'));
const AiSocialWorkInformaticsPage = React.lazy(() => import('./app/ai-social-work-informatics/page'));
const AiRehabilitationInformaticsPage = React.lazy(() => import('./app/ai-rehabilitation-informatics/page'));
const AiDisabilityInformaticsPage = React.lazy(() => import('./app/ai-disability-informatics/page'));
const AiAgingInformaticsPage = React.lazy(() => import('./app/ai-aging-informatics/page'));
const AiChildHealthInformaticsPage = React.lazy(() => import('./app/ai-child-health-informatics/page'));
const AiMaternalHealthInformaticsPage = React.lazy(() => import('./app/ai-maternal-health-informatics/page'));
const AiReproductiveHealthInformaticsPage = React.lazy(() => import('./app/ai-reproductive-health-informatics/page'));
const AiSexualHealthInformaticsPage = React.lazy(() => import('./app/ai-sexual-health-informatics/page'));
const AiGenderHealthInformaticsPage = React.lazy(() => import('./app/ai-gender-health-informatics/page'));
const AiLgbtqHealthInformaticsPage = React.lazy(() => import('./app/ai-lgbtq-health-informatics/page'));
const AiMinorityHealthInformaticsPage = React.lazy(() => import('./app/ai-minority-health-informatics/page'));
const AiRuralHealthInformaticsPage = React.lazy(() => import('./app/ai-rural-health-informatics/page'));
const AiUrbanHealthInformaticsPage = React.lazy(() => import('./app/ai-urban-health-informatics/page'));
const AiGlobalHealthInformaticsPage = React.lazy(() => import('./app/ai-global-health-informatics/page'));
const AiInternationalHealthInformaticsPage = React.lazy(() => import('./app/ai-international-health-informatics/page'));
const AiTropicalHealthInformaticsPage = React.lazy(() => import('./app/ai-tropical-health-informatics/page'));
const AiEnvironmentalHealthInformaticsPage = React.lazy(() => import('./app/ai-environmental-health-informatics/page'));
const AiOccupationalHealthInformaticsPage = React.lazy(() => import('./app/ai-occupational-health-informatics/page'));
const AiIndustrialHealthInformaticsPage = React.lazy(() => import('./app/ai-industrial-health-informatics/page'));
const AiWorkplaceHealthInformaticsPage = React.lazy(() => import('./app/ai-workplace-health-informatics/page'));
const AiSchoolHealthInformaticsPage = React.lazy(() => import('./app/ai-school-health-informatics/page'));
const AiUniversityHealthInformaticsPage = React.lazy(() => import('./app/ai-university-health-informatics/page'));
const AiCollegeHealthInformaticsPage = React.lazy(() => import('./app/ai-college-health-informatics/page'));
const AiStudentHealthInformaticsPage = React.lazy(() => import('./app/ai-student-health-informatics/page'));
const AiFacultyHealthInformaticsPage = React.lazy(() => import('./app/ai-faculty-health-informatics/page'));
const AiStaffHealthInformaticsPage = React.lazy(() => import('./app/ai-staff-health-informatics/page'));
const AiAdministrativeHealthInformaticsPage = React.lazy(() => import('./app/ai-administrative-health-informatics/page'));
const AiManagementHealthInformaticsPage = React.lazy(() => import('./app/ai-management-health-informatics/page'));
const AiLeadershipHealthInformaticsPage = React.lazy(() => import('./app/ai-leadership-health-informatics/page'));
const AiGovernanceHealthInformaticsPage = React.lazy(() => import('./app/ai-governance-health-informatics/page'));
const AiPolicyHealthInformaticsPage = React.lazy(() => import('./app/ai-policy-health-informatics/page'));
const AiRegulationHealthInformaticsPage = React.lazy(() => import('./app/ai-regulation-health-informatics/page'));
const AiComplianceHealthInformaticsPage = React.lazy(() => import('./app/ai-compliance-health-informatics/page'));
const AiAuditHealthInformaticsPage = React.lazy(() => import('./app/ai-audit-health-informatics/page'));
const AiQualityHealthInformaticsPage = React.lazy(() => import('./app/ai-quality-health-informatics/page'));
const AiSafetyHealthInformaticsPage = React.lazy(() => import('./app/ai-safety-health-informatics/page'));
const AiRiskHealthInformaticsPage = React.lazy(() => import('./app/ai-risk-health-informatics/page'));
const AiSecurityHealthInformaticsPage = React.lazy(() => import('./app/ai-security-health-informatics/page'));
const AiPrivacyHealthInformaticsPage = React.lazy(() => import('./app/ai-privacy-health-informatics/page'));
const AiEthicsHealthInformaticsPage = React.lazy(() => import('./app/ai-ethics-health-informatics/page'));
const AiLegalHealthInformaticsPage = React.lazy(() => import('./app/ai-legal-health-informatics/page'));
const AiRegulatoryHealthInformaticsPage = React.lazy(() => import('./app/ai-regulatory-health-informatics/page'));
const AiComplianceHealthInformaticsPage = React.lazy(() => import('./app/ai-compliance-health-informatics/page'));
const AiAuditHealthInformaticsPage = React.lazy(() => import('./app/ai-audit-health-informatics/page'));
const AiQualityHealthInformaticsPage = React.lazy(() => import('./app/ai-quality-health-informatics/page'));
const AiSafetyHealthInformaticsPage = React.lazy(() => import('./app/ai-safety-health-informatics/page'));
const AiRiskHealthInformaticsPage = React.lazy(() => import('./app/ai-risk-health-informatics/page'));
const AiSecurityHealthInformaticsPage = React.lazy(() => import('./app/ai-security-health-informatics/page'));
const AiPrivacyHealthInformaticsPage = React.lazy(() => import('./app/ai-privacy-health-informatics/page'));
const AiEthicsHealthInformaticsPage = React.lazy(() => import('./app/ai-ethics-health-informatics/page'));
const AiLegalHealthInformaticsPage = React.lazy(() => import('./app/ai-legal-health-informatics/page'));
const AiRegulatoryHealthInformaticsPage = React.lazy(() => import('./app/ai-regulatory-health-informatics/page'));

function App() {
  const { performanceData } = usePerformanceMonitor();

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <FuturisticBackground />
            <Navigation />
            <Breadcrumb />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ItServicesPage />} />
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/sitemap" element={<SitemapPage />} />
                
                {/* AI Service Routes */}
                <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                <Route path="/ai-automation" element={<AiAutomationPage />} />
                <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                <Route path="/ai-crm" element={<AiCrmPage />} />
                <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                <Route path="/ai-financial-services" element={<AiFinancialServicesPage />} />
                <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
                <Route path="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} />
                <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
                <Route path="/ai-hr-solutions" element={<AiHrSolutionsPage />} />
                <Route path="/ai-marketing" element={<AiMarketingPage />} />
                <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
                <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                <Route path="/ai-sentiment-analysis" element={<AiSentimentAnalysisPage />} />
                <Route path="/ai-conversational-ai" element={<AiConversationalAiPage />} />
                <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
                <Route path="/ai-email-marketing" element={<AiEmailMarketingPage />} />
                <Route path="/ai-project-management" element={<AiProjectManagementPage />} />
                <Route path="/ai-quality-assurance" element={<AiQualityAssurancePage />} />
                <Route path="/ai-load-testing" element={<AiLoadTestingPage />} />
                <Route path="/ai-devops-automation" element={<AiDevopsAutomationPage />} />
                <Route path="/ai-infrastructure-monitoring" element={<AiInfrastructureMonitoringPage />} />
                <Route path="/ai-security-monitor" element={<AiSecurityMonitorPage />} />
                <Route path="/ai-fraud-detection" element={<AiFraudDetectionPage />} />
                <Route path="/ai-inventory-management" element={<AiInventoryManagementPage />} />
                <Route path="/ai-lead-generation" element={<AiLeadGenerationPage />} />
                <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                <Route path="/ai-meeting-assistant" element={<AiMeetingAssistantPage />} />
                <Route path="/ai-scheduler" element={<AiSchedulerPage />} />
                <Route path="/ai-password-manager" element={<AiPasswordManagerPage />} />
                <Route path="/ai-expense-tracker" element={<AiExpenseTrackerPage />} />
                <Route path="/ai-financial-planner" element={<AiFinancialPlannerPage />} />
                <Route path="/ai-investment-optimizer" element={<AiInvestmentOptimizerPage />} />
                <Route path="/ai-insurance" element={<AiInsurancePage />} />
                <Route path="/ai-real-estate" element={<AiRealEstatePage />} />
                <Route path="/ai-legal" element={<AiLegalPage />} />
                <Route path="/ai-legal-assistant" element={<AiLegalAssistantPage />} />
                <Route path="/ai-legal-research-pro" element={<AiLegalResearchProPage />} />
                <Route path="/ai-hr" element={<AiHrPage />} />
                <Route path="/ai-hr-assistant" element={<AiHrAssistantPage />} />
                <Route path="/ai-recruitment-assistant" element={<AiRecruitmentAssistantPage />} />
                <Route path="/ai-education" element={<AiEducationPage />} />
                <Route path="/ai-learning-platform" element={<AiLearningPlatformPage />} />
                <Route path="/ai-fitness-coach" element={<AiFitnessCoachPage />} />
                <Route path="/ai-health-tracker" element={<AiHealthTrackerPage />} />
                <Route path="/ai-mental-health-companion" element={<AiMentalHealthCompanionPage />} />
                <Route path="/ai-healthcare-diagnostics" element={<AiHealthcareDiagnosticsPage />} />
                <Route path="/ai-healthcare-solutions" element={<AiHealthcareSolutionsPage />} />
                <Route path="/ai-drug-discovery-pro" element={<AiDrugDiscoveryProPage />} />
                <Route path="/ai-manufacturing" element={<AiManufacturingPage />} />
                <Route path="/ai-predictive-maintenance" element={<AiPredictiveMaintenancePage />} />
                <Route path="/ai-robotics" element={<AiRoboticsPage />} />
                <Route path="/ai-mobile-app-builder" element={<AiMobileAppBuilderPage />} />
                <Route path="/ai-mobile-app-development" element={<AiMobileAppDevelopmentPage />} />
                <Route path="/ai-mobile-builder" element={<AiMobileBuilderPage />} />
                <Route path="/ai-ecommerce-assistant" element={<AiEcommerceAssistantPage />} />
                <Route path="/ai-ecommerce-optimizer" element={<AiEcommerceOptimizerPage />} />
                <Route path="/ai-ecommerce-optimizer-pro" element={<AiEcommerceOptimizerProPage />} />
                <Route path="/ai-seo-optimizer" element={<AiSeoOptimizerPage />} />
                <Route path="/ai-content-writer" element={<AiContentWriterPage />} />
                <Route path="/ai-content-generator" element={<AiContentGeneratorPage />} />
                <Route path="/ai-content-generation-pro" element={<AiContentGenerationProPage />} />
                <Route path="/ai-content-studio" element={<AiContentStudioPage />} />
                <Route path="/ai-content-management" element={<AiContentManagementPage />} />
                <Route path="/ai-content-moderation" element={<AiContentModerationPage />} />
                <Route path="/ai-content-moderation-pro" element={<AiContentModerationProPage />} />
                <Route path="/ai-content-delivery-network" element={<AiContentDeliveryNetworkPage />} />
                <Route path="/ai-design-studio" element={<AiDesignStudioPage />} />
                <Route path="/ai-logo-designer" element={<AiLogoDesignerPage />} />
                <Route path="/ai-fashion-design" element={<AiFashionDesignPage />} />
                <Route path="/ai-music-composition" element={<AiMusicCompositionPage />} />
                <Route path="/ai-image-recognition" element={<AiImageRecognitionPage />} />
                <Route path="/ai-computer-vision-pro" element={<AiComputerVisionProPage />} />
                <Route path="/ai-3d-generation" element={<Ai3dGenerationPage />} />
                <Route path="/ai-holographic-workspace" element={<AiHolographicWorkspacePage />} />
                <Route path="/ai-neural-interface" element={<AiNeuralInterfacePage />} />
                <Route path="/ai-neural-memory-assistant" element={<AiNeuralMemoryAssistantPage />} />
                <Route path="/ai-quantum-computing" element={<AiQuantumComputingPage />} />
                <Route path="/ai-quantum-computing-simulator" element={<AiQuantumComputingSimulatorPage />} />
                <Route path="/ai-quantum-financial-oracle" element={<AiQuantumFinancialOraclePage />} />
                <Route path="/ai-quantum-optimization" element={<AiQuantumOptimizationPage />} />
                <Route path="/ai-quantum-task-optimizer" element={<AiQuantumTaskOptimizerPage />} />
                <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} />
                <Route path="/ai-blockchain-analytics" element={<AiBlockchainAnalyticsPage />} />
                <Route path="/ai-cryptocurrency" element={<AiCryptocurrencyPage />} />
                <Route path="/ai-nft" element={<AiNftPage />} />
                <Route path="/ai-defi" element={<AiDefiPage />} />
                <Route path="/ai-smart-contract" element={<AiSmartContractPage />} />
                <Route path="/ai-web3" element={<AiWeb3Page />} />
                <Route path="/ai-metaverse" element={<AiMetaversePage />} />
                <Route path="/ai-virtual-reality" element={<AiVirtualRealityPage />} />
                <Route path="/ai-augmented-reality" element={<AiAugmentedRealityPage />} />
                <Route path="/ai-mixed-reality" element={<AiMixedRealityPage />} />
                <Route path="/ai-extended-reality" element={<AiExtendedRealityPage />} />
                <Route path="/ai-spatial-computing" element={<AiSpatialComputingPage />} />
                <Route path="/ai-edge-computing" element={<AiEdgeComputingPage />} />
                <Route path="/ai-fog-computing" element={<AiFogComputingPage />} />
                <Route path="/ai-cloud-computing" element={<AiCloudComputingPage />} />
                <Route path="/ai-distributed-computing" element={<AiDistributedComputingPage />} />
                <Route path="/ai-parallel-computing" element={<AiParallelComputingPage />} />
                <Route path="/ai-grid-computing" element={<AiGridComputingPage />} />
                <Route path="/ai-cluster-computing" element={<AiClusterComputingPage />} />
                <Route path="/ai-supercomputing" element={<AiSupercomputingPage />} />
                <Route path="/ai-high-performance-computing" element={<AiHighPerformanceComputingPage />} />
                <Route path="/ai-gpu-computing" element={<AiGpuComputingPage />} />
                <Route path="/ai-tpu-computing" element={<AiTpuComputingPage />} />
                <Route path="/ai-neuromorphic-computing" element={<AiNeuromorphicComputingPage />} />
                <Route path="/ai-optical-computing" element={<AiOpticalComputingPage />} />
                <Route path="/ai-dna-computing" element={<AiDnaComputingPage />} />
                <Route path="/ai-molecular-computing" element={<AiMolecularComputingPage />} />
                <Route path="/ai-chemical-computing" element={<AiChemicalComputingPage />} />
                <Route path="/ai-biological-computing" element={<AiBiologicalComputingPage />} />
                <Route path="/ai-bioinformatics" element={<AiBioinformaticsPage />} />
                <Route path="/ai-computational-biology" element={<AiComputationalBiologyPage />} />
                <Route path="/ai-systems-biology" element={<AiSystemsBiologyPage />} />
                <Route path="/ai-synthetic-biology" element={<AiSyntheticBiologyPage />} />
                <Route path="/ai-biotechnology" element={<AiBiotechnologyPage />} />
                <Route path="/ai-biomedical-engineering" element={<AiBiomedicalEngineeringPage />} />
                <Route path="/ai-medical-devices" element={<AiMedicalDevicesPage />} />
                <Route path="/ai-pharmaceuticals" element={<AiPharmaceuticalsPage />} />
                <Route path="/ai-drug-discovery" element={<AiDrugDiscoveryPage />} />
                <Route path="/ai-precision-medicine" element={<AiPrecisionMedicinePage />} />
                <Route path="/ai-personalized-medicine" element={<AiPersonalizedMedicinePage />} />
                <Route path="/ai-regenerative-medicine" element={<AiRegenerativeMedicinePage />} />
                <Route path="/ai-stem-cell-research" element={<AiStemCellResearchPage />} />
                <Route path="/ai-gene-therapy" element={<AiGeneTherapyPage />} />
                <Route path="/ai-immunotherapy" element={<AiImmunotherapyPage />} />
                <Route path="/ai-cancer-research" element={<AiCancerResearchPage />} />
                <Route path="/ai-oncology" element={<AiOncologyPage />} />
                <Route path="/ai-cardiology" element={<AiCardiologyPage />} />
                <Route path="/ai-neurology" element={<AiNeurologyPage />} />
                <Route path="/ai-psychiatry" element={<AiPsychiatryPage />} />
                <Route path="/ai-dermatology" element={<AiDermatologyPage />} />
                <Route path="/ai-ophthalmology" element={<AiOphthalmologyPage />} />
                <Route path="/ai-radiology" element={<AiRadiologyPage />} />
                <Route path="/ai-pathology" element={<AiPathologyPage />} />
                <Route path="/ai-anesthesiology" element={<AiAnesthesiologyPage />} />
                <Route path="/ai-surgery" element={<AiSurgeryPage />} />
                <Route path="/ai-emergency-medicine" element={<AiEmergencyMedicinePage />} />
                <Route path="/ai-pediatrics" element={<AiPediatricsPage />} />
                <Route path="/ai-geriatrics" element={<AiGeriatricsPage />} />
                <Route path="/ai-obstetrics" element={<AiObstetricsPage />} />
                <Route path="/ai-gynecology" element={<AiGynecologyPage />} />
                <Route path="/ai-urology" element={<AiUrologyPage />} />
                <Route path="/ai-orthopedics" element={<AiOrthopedicsPage />} />
                <Route path="/ai-physical-therapy" element={<AiPhysicalTherapyPage />} />
                <Route path="/ai-occupational-therapy" element={<AiOccupationalTherapyPage />} />
                <Route path="/ai-speech-therapy" element={<AiSpeechTherapyPage />} />
                <Route path="/ai-nutrition" element={<AiNutritionPage />} />
                <Route path="/ai-dietetics" element={<AiDieteticsPage />} />
                <Route path="/ai-public-health" element={<AiPublicHealthPage />} />
                <Route path="/ai-epidemiology" element={<AiEpidemiologyPage />} />
                <Route path="/ai-health-informatics" element={<AiHealthInformaticsPage />} />
                <Route path="/ai-medical-informatics" element={<AiMedicalInformaticsPage />} />
                <Route path="/ai-clinical-informatics" element={<AiClinicalInformaticsPage />} />
                <Route path="/ai-nursing-informatics" element={<AiNursingInformaticsPage />} />
                <Route path="/ai-pharmacy-informatics" element={<AiPharmacyInformaticsPage />} />
                <Route path="/ai-dental-informatics" element={<AiDentalInformaticsPage />} />
                <Route path="/ai-veterinary-informatics" element={<AiVeterinaryInformaticsPage />} />
                <Route path="/ai-mental-health-informatics" element={<AiMentalHealthInformaticsPage />} />
                <Route path="/ai-behavioral-health-informatics" element={<AiBehavioralHealthInformaticsPage />} />
                <Route path="/ai-social-work-informatics" element={<AiSocialWorkInformaticsPage />} />
                <Route path="/ai-rehabilitation-informatics" element={<AiRehabilitationInformaticsPage />} />
                <Route path="/ai-disability-informatics" element={<AiDisabilityInformaticsPage />} />
                <Route path="/ai-aging-informatics" element={<AiAgingInformaticsPage />} />
                <Route path="/ai-child-health-informatics" element={<AiChildHealthInformaticsPage />} />
                <Route path="/ai-maternal-health-informatics" element={<AiMaternalHealthInformaticsPage />} />
                <Route path="/ai-reproductive-health-informatics" element={<AiReproductiveHealthInformaticsPage />} />
                <Route path="/ai-sexual-health-informatics" element={<AiSexualHealthInformaticsPage />} />
                <Route path="/ai-gender-health-informatics" element={<AiGenderHealthInformaticsPage />} />
                <Route path="/ai-lgbtq-health-informatics" element={<AiLgbtqHealthInformaticsPage />} />
                <Route path="/ai-minority-health-informatics" element={<AiMinorityHealthInformaticsPage />} />
                <Route path="/ai-rural-health-informatics" element={<AiRuralHealthInformaticsPage />} />
                <Route path="/ai-urban-health-informatics" element={<AiUrbanHealthInformaticsPage />} />
                <Route path="/ai-global-health-informatics" element={<AiGlobalHealthInformaticsPage />} />
                <Route path="/ai-international-health-informatics" element={<AiInternationalHealthInformaticsPage />} />
                <Route path="/ai-tropical-health-informatics" element={<AiTropicalHealthInformaticsPage />} />
                <Route path="/ai-environmental-health-informatics" element={<AiEnvironmentalHealthInformaticsPage />} />
                <Route path="/ai-occupational-health-informatics" element={<AiOccupationalHealthInformaticsPage />} />
                <Route path="/ai-industrial-health-informatics" element={<AiIndustrialHealthInformaticsPage />} />
                <Route path="/ai-workplace-health-informatics" element={<AiWorkplaceHealthInformaticsPage />} />
                <Route path="/ai-school-health-informatics" element={<AiSchoolHealthInformaticsPage />} />
                <Route path="/ai-university-health-informatics" element={<AiUniversityHealthInformaticsPage />} />
                <Route path="/ai-college-health-informatics" element={<AiCollegeHealthInformaticsPage />} />
                <Route path="/ai-student-health-informatics" element={<AiStudentHealthInformaticsPage />} />
                <Route path="/ai-faculty-health-informatics" element={<AiFacultyHealthInformaticsPage />} />
                <Route path="/ai-staff-health-informatics" element={<AiStaffHealthInformaticsPage />} />
                <Route path="/ai-administrative-health-informatics" element={<AiAdministrativeHealthInformaticsPage />} />
                <Route path="/ai-management-health-informatics" element={<AiManagementHealthInformaticsPage />} />
                <Route path="/ai-leadership-health-informatics" element={<AiLeadershipHealthInformaticsPage />} />
                <Route path="/ai-governance-health-informatics" element={<AiGovernanceHealthInformaticsPage />} />
                <Route path="/ai-policy-health-informatics" element={<AiPolicyHealthInformaticsPage />} />
                <Route path="/ai-regulation-health-informatics" element={<AiRegulationHealthInformaticsPage />} />
                <Route path="/ai-compliance-health-informatics" element={<AiComplianceHealthInformaticsPage />} />
                <Route path="/ai-audit-health-informatics" element={<AiAuditHealthInformaticsPage />} />
                <Route path="/ai-quality-health-informatics" element={<AiQualityHealthInformaticsPage />} />
                <Route path="/ai-safety-health-informatics" element={<AiSafetyHealthInformaticsPage />} />
                <Route path="/ai-risk-health-informatics" element={<AiRiskHealthInformaticsPage />} />
                <Route path="/ai-security-health-informatics" element={<AiSecurityHealthInformaticsPage />} />
                <Route path="/ai-privacy-health-informatics" element={<AiPrivacyHealthInformaticsPage />} />
                <Route path="/ai-ethics-health-informatics" element={<AiEthicsHealthInformaticsPage />} />
                <Route path="/ai-legal-health-informatics" element={<AiLegalHealthInformaticsPage />} />
                <Route path="/ai-regulatory-health-informatics" element={<AiRegulatoryHealthInformaticsPage />} />
              </Routes>
            </Suspense>
            <Footer />
            <PerformanceOptimizer />
            <AccessibilityEnhancer />
            <EnhancedAccessibility />
            <PerformanceMonitor performanceData={performanceData} />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;