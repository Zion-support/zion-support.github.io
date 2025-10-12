#!/usr/bin/env python3
"""
Script to clean up unused imports and variables
"""

import re

def cleanup_app_tsx():
    """Clean up App.tsx by removing unused imports and variables"""
    
    # Read the file
    with open('App.tsx', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove unused imports
    unused_imports = [
        'PageLoader', 'ErrorBoundary', 'SEOHead', 'Breadcrumb', 
        'PerformanceOptimizer', 'AccessibilityEnhancer', 'EnhancedAccessibility',
        'usePerformanceMonitor', 'AnalyticsProvider', 'PerformanceMonitor', 
        'FuturisticBackground'
    ]
    
    # Remove unused imports from the import statements
    for unused in unused_imports:
        # Remove from named imports
        content = re.sub(rf',\s*{unused}', '', content)
        content = re.sub(rf'{{\s*{unused}\s*,', '{', content)
        content = re.sub(rf'{{\s*{unused}\s*}}', '', content)
        # Remove entire import lines if they only contain unused imports
        content = re.sub(rf'import\s+{{\s*{unused}\s*}}\s+from\s+[^;]+;', '', content)
    
    # Remove unused lazy-loaded components
    unused_components = [
        'ServicesPage', 'PricingPage', 'BlogPage', 'CaseStudiesPage', 'CareersPage',
        'AiServicesPage', 'ItServicesPage', 'MicroSaasPage', 'TutorialsPage',
        'ConsultationPage', 'DemoPage', 'SupportPage', 'PrivacyPage', 'TermsPage',
        'CookiesPage', 'SitemapPage', 'AiAnalyticsPage', 'AiAutomationPage',
        'AiChatbotBuilderPage', 'AiCybersecurityPage', 'AiCrmPage', 'AiDataAnalyticsPage',
        'AiHealthcarePage', 'AiFinancialServicesPage', 'AiComputerVisionPage',
        'AiVoiceSolutionsPage', 'AiEcommerceSolutionsPage', 'AiHrSolutionsPage',
        'AiContentGenerationPage', 'AiWorkflowAutomationPage', 'AiDocumentProcessingPage',
        'AiPredictiveAnalyticsPage', 'AiEdgeComputingPage', 'AiVideoAnalysisPage',
        'AiSpeechSynthesisPage', 'AiRecommendationEnginePage', 'AiSentimentAnalysisPage',
        'AiChatbotEnterprisePage', 'AiContentModerationPage', 'AiPredictiveModelingPage',
        'AiDocumentIntelligencePage', 'AiConversationAnalyticsPage', 'AiSupplyChainAiPage',
        'AiHealthcareDiagnosticsPage', 'AiFinancialForecastingPage', 'AiIotAnalyticsPage',
        'AiConversationalAiPage', 'AiAutomatedTestingPage', 'AiKnowledgeManagementPage',
        'AiCustomerChurnPage', 'AiAutomatedReportingPage', 'AiVoiceAssistantPage',
        'AiContentGenerationProPage', 'AiAccountingAssistantPage', 'AiCybersecurityMonitorProPage',
        'CloudInfrastructurePage', 'CybersecuritySolutionsPage', 'WebDevelopmentPage',
        'MobileDevelopmentPage', 'ApiDevelopmentPage', 'DatabaseManagementPage',
        'DevOpsCicdPage', 'ItSupportPage', 'DataAnalyticsBiPage', 'CustomSoftwarePage',
        'NetworkInfrastructurePage', 'ItAssetManagementPage', 'ItSecurityServicesPage',
        'ItProjectManagementPage', 'CloudNativeDevelopmentPage', 'AiIntegrationServicesPage',
        'BlockchainDevelopmentPage', 'IotDevelopmentPage', 'EcommerceDevelopmentPage',
        'ApiDevelopmentAdvancedPage', 'DataEngineeringPage', 'CybersecurityAdvancedPage',
        'CloudMigrationAdvancedPage', 'DevOpsAdvancedPage', 'MachineLearningOpsPage',
        'EnterpriseIntegrationPage', 'PerformanceOptimizationPage', 'DisasterRecoveryAdvancedPage',
        'ComplianceAutomationPage', 'CloudCostOptimizationPage', 'SecurityAutomationPage',
        'DataVisualizationPage', 'WorkflowAutomationPage', 'CloudNativeSecurityPage',
        'ZionAnalyticsProPage', 'ZionChatAiPage', 'ZionSecurityShieldPage',
        'ZionCloudVaultPage', 'ZionContentStudioPage', 'ZionCrmIntelligencePage',
        'ZionDataSyncPage', 'ZionLeadMagnetPage', 'ZionProjectMasterPage',
        'ZionEmailAutomationPage', 'ZionInventorySmartPage', 'ZionInvoiceGeniusPage',
        'ZionWorkflowAutomationPage', 'ZionPerformanceMonitorPage', 'ZionComplianceManagerPage',
        'ZionSocialSchedulerPage', 'ZionAiVideoEditorPage', 'ZionAiTranslatorProPage',
        'ZionAiCodeReviewerPage', 'ZionCustomerInsightsPage', 'ZionAiEmailAssistantPage',
        'ZionAiMeetingAssistantPage', 'ZionAiSeoOptimizerPage', 'ZionAiDataCleanerPage',
        'ZionAiContractAnalyzerPage', 'ZionAiSurveyBuilderPage', 'ZionAiAccountingAssistantPage',
        'ZionAiRecruitmentProPage', 'ZionAiContentModerationPage', 'ZionAiPredictiveMaintenancePage',
        'ZionAiEnergyManagerPage', 'ZionAiSupplyChainOptimizerPage', 'ZionAiFraudDetectorPage',
        'ZionAiCustomerServiceProPage', 'ZionAiMarketingAutomationPage', 'ZionAiDocumentAiPage',
        'FiveGImplementationPage', 'Ai3DGenerationPage', 'AiHolographicWorkspacePage',
        'AiAutonomousSystemsPage', 'AiBlockchainSolutionsPage', 'QuantumComputingPage',
        'ArVrSolutionsPage', 'IotIntegrationPage', 'MachineLearningPage',
        'TeamPage', 'PartnersPage', 'StatusPage', 'FaqPage', 'DocsPage',
        'ApiDocsPage', 'CommunityPage', 'CompliancePage', 'AppWithPerformanceMonitoring'
    ]
    
    # Remove unused component declarations
    for component in unused_components:
        content = re.sub(rf'const {component} = React\.lazy\(\(\) => import\([^)]+\)\);\n?', '', content)
        content = re.sub(rf'const {component}: React\.FC<[^>]+> = [^;]+;\n?', '', content)
    
    # Clean up extra whitespace
    content = re.sub(r'\n\n\n+', '\n\n', content)
    
    # Write the cleaned content back
    with open('App.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Cleaned up App.tsx - removed unused imports and variables")

if __name__ == "__main__":
    cleanup_app_tsx()