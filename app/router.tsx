import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from './layout';
import HomePage from './page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import BlogPage from './blog/page';
import CaseStudiesPage from './case-studies/page';
import ServicesPage from './services/page';
import PricingPage from './pricing/page';
import TeamPage from './team/page';
import CareersPage from './careers/page';
import NewsPage from './news/page';
import SupportPage from './support/page';
import DocsPage from './docs/page';
import ApiDocsPage from './api-docs/page';
import StatusPage from './status/page';
import PrivacyPage from './privacy/page';
import TermsPage from './terms/page';
import CookiesPage from './cookies/page';
import GdprPage from './gdpr/page';
import CompliancePage from './compliance/page';
import DemoPage from './demo/page';
import ConsultationPage from './consultation/page';
import EnterprisePage from './enterprise/page';
import NotFoundPage from './not-found';

// AI Services Pages
import AIServicesPage from './ai-services/page';
import AIMarketingPage from './ai-marketing/page';
import AIAutomationPage from './ai-automation/page';
import AIHealthcarePage from './ai-healthcare/page';
import AIFintechPage from './ai-fintech/page';
import AIContentGenerationPage from './ai-content-generation/page';
import AIDataAnalyticsPage from './ai-data-analytics/page';
import AICybersecurityPage from './ai-cybersecurity/page';
import AIMobileAppDevelopmentPage from './ai-mobile-app-development/page';
import AIEcommerceSolutionsPage from './ai-ecommerce-solutions/page';
import AILeadGenerationPage from './ai-lead-generation/page';
import AIDocumentProcessingPage from './ai-document-processing/page';
import AIVideoGenerationPage from './ai-video-generation/page';
import AIVoiceCloningPage from './ai-voice-cloning/page';
import AIWritingAssistantPage from './ai-writing-assistant/page';
import AIChatbotBuilderPage from './ai-chatbot-builder/page';
import AICodeGenerationPage from './ai-code-generation/page';
import AISchedulerPage from './ai-scheduler/page';
import AIFashionDesignPage from './ai-fashion-design/page';
import AIFitnessCoachPage from './ai-fitness-coach/page';
import AIMusicCompositionPage from './ai-music-composition/page';
import AIEmailAssistantPage from './ai-email-assistant/page';
import AIAnalyticsPage from './ai-analytics/page';
import AIAnalyticsDashboardPage from './ai-analytics-dashboard/page';
import AICRMPage from './ai-crm/page';
import AI3DGenerationPage from './ai-3d-generation/page';

// IT Services Pages
import ITServicesPage from './it-services/page';
import ITInfrastructurePage from './it-infrastructure/page';
import CybersecurityPage from './cybersecurity/page';
import CloudMigrationPage from './cloud-migration/page';
import CloudServicesPage from './cloud-services/page';
import DevOpsPage from './devops/page';
import DatabasePage from './database/page';
import NetworkingPage from './networking/page';
import SecurityPage from './security/page';

// Micro SAAS Pages
import MicroSaasPage from './micro-saas/page';
import BusinessAppsPage from './business-apps/page';
import ProductivityPage from './productivity/page';
import MarketingToolsPage from './marketing-tools/page';
import AnalyticsToolsPage from './analytics-tools/page';
import DeveloperToolsPage from './developer-tools/page';
import TaskManagerProPage from './task-manager-pro/page';
import ExpenseTrackerPage from './expense-tracker/page';
import SmartAnalyticsPage from './smart-analytics/page';

// Specialized Services Pages
import QuantumComputingPage from './quantum-computing/page';
import AutonomousSystemsPage from './autonomous-systems/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import IoTEdgeComputingPage from './iot-edge-computing/page';
import BusinessIntelligencePage from './business-intelligence/page';
import RoboticsPage from './robotics/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Outlet /></Layout>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'blog',
        element: <BlogPage />
      },
      {
        path: 'case-studies',
        element: <CaseStudiesPage />
      },
      {
        path: 'services',
        element: <ServicesPage />
      },
      {
        path: 'pricing',
        element: <PricingPage />
      },
      {
        path: 'team',
        element: <TeamPage />
      },
      {
        path: 'careers',
        element: <CareersPage />
      },
      {
        path: 'news',
        element: <NewsPage />
      },
      {
        path: 'support',
        element: <SupportPage />
      },
      {
        path: 'docs',
        element: <DocsPage />
      },
      {
        path: 'api-docs',
        element: <ApiDocsPage />
      },
      {
        path: 'status',
        element: <StatusPage />
      },
      {
        path: 'privacy',
        element: <PrivacyPage />
      },
      {
        path: 'terms',
        element: <TermsPage />
      },
      {
        path: 'cookies',
        element: <CookiesPage />
      },
      {
        path: 'gdpr',
        element: <GdprPage />
      },
      {
        path: 'compliance',
        element: <CompliancePage />
      },
      {
        path: 'demo',
        element: <DemoPage />
      },
      {
        path: 'consultation',
        element: <ConsultationPage />
      },
      {
        path: 'enterprise',
        element: <EnterprisePage />
      },
      // AI Services Routes
      {
        path: 'ai-services',
        element: <AIServicesPage />
      },
      {
        path: 'ai-marketing',
        element: <AIMarketingPage />
      },
      {
        path: 'ai-automation',
        element: <AIAutomationPage />
      },
      {
        path: 'ai-healthcare',
        element: <AIHealthcarePage />
      },
      {
        path: 'ai-fintech',
        element: <AIFintechPage />
      },
      {
        path: 'ai-content-generation',
        element: <AIContentGenerationPage />
      },
      {
        path: 'ai-data-analytics',
        element: <AIDataAnalyticsPage />
      },
      {
        path: 'ai-cybersecurity',
        element: <AICybersecurityPage />
      },
      {
        path: 'ai-mobile-app-development',
        element: <AIMobileAppDevelopmentPage />
      },
      {
        path: 'ai-ecommerce-solutions',
        element: <AIEcommerceSolutionsPage />
      },
      {
        path: 'ai-lead-generation',
        element: <AILeadGenerationPage />
      },
      {
        path: 'ai-document-processing',
        element: <AIDocumentProcessingPage />
      },
      {
        path: 'ai-video-generation',
        element: <AIVideoGenerationPage />
      },
      {
        path: 'ai-voice-cloning',
        element: <AIVoiceCloningPage />
      },
      {
        path: 'ai-writing-assistant',
        element: <AIWritingAssistantPage />
      },
      {
        path: 'ai-chatbot-builder',
        element: <AIChatbotBuilderPage />
      },
      {
        path: 'ai-code-generation',
        element: <AICodeGenerationPage />
      },
      {
        path: 'ai-scheduler',
        element: <AISchedulerPage />
      },
      {
        path: 'ai-fashion-design',
        element: <AIFashionDesignPage />
      },
      {
        path: 'ai-fitness-coach',
        element: <AIFitnessCoachPage />
      },
      {
        path: 'ai-music-composition',
        element: <AIMusicCompositionPage />
      },
      {
        path: 'ai-email-assistant',
        element: <AIEmailAssistantPage />
      },
      {
        path: 'ai-analytics',
        element: <AIAnalyticsPage />
      },
      {
        path: 'ai-analytics-dashboard',
        element: <AIAnalyticsDashboardPage />
      },
      {
        path: 'ai-crm',
        element: <AICRMPage />
      },
      {
        path: 'ai-3d-generation',
        element: <AI3DGenerationPage />
      },
      // IT Services Routes
      {
        path: 'it-services',
        element: <ITServicesPage />
      },
      {
        path: 'it-infrastructure',
        element: <ITInfrastructurePage />
      },
      {
        path: 'cybersecurity',
        element: <CybersecurityPage />
      },
      {
        path: 'cloud-migration',
        element: <CloudMigrationPage />
      },
      {
        path: 'cloud-services',
        element: <CloudServicesPage />
      },
      {
        path: 'devops',
        element: <DevOpsPage />
      },
      {
        path: 'database',
        element: <DatabasePage />
      },
      {
        path: 'networking',
        element: <NetworkingPage />
      },
      {
        path: 'security',
        element: <SecurityPage />
      },
      // Micro SAAS Routes
      {
        path: 'micro-saas',
        element: <MicroSaasPage />
      },
      {
        path: 'business-apps',
        element: <BusinessAppsPage />
      },
      {
        path: 'productivity',
        element: <ProductivityPage />
      },
      {
        path: 'marketing-tools',
        element: <MarketingToolsPage />
      },
      {
        path: 'analytics-tools',
        element: <AnalyticsToolsPage />
      },
      {
        path: 'developer-tools',
        element: <DeveloperToolsPage />
      },
      {
        path: 'task-manager-pro',
        element: <TaskManagerProPage />
      },
      {
        path: 'expense-tracker',
        element: <ExpenseTrackerPage />
      },
      {
        path: 'smart-analytics',
        element: <SmartAnalyticsPage />
      },
      // Specialized Services Routes
      {
        path: 'quantum-computing',
        element: <QuantumComputingPage />
      },
      {
        path: 'autonomous-systems',
        element: <AutonomousSystemsPage />
      },
      {
        path: 'blockchain-web3',
        element: <BlockchainWeb3Page />
      },
      {
        path: 'iot-edge-computing',
        element: <IoTEdgeComputingPage />
      },
      {
        path: 'business-intelligence',
        element: <BusinessIntelligencePage />
      },
      {
        path: 'robotics',
        element: <RoboticsPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);

export default router;