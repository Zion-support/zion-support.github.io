import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';

// Import main pages directly
import HomePage from './page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import AIServicesPage from './ai-services/page';
import ITServicesPage from './it-services/page';
import MicroSaasServicesPage from './micro-saas-services/page';
import FiveGImplementationPage from './5g-implementation/page';
import CloudServicesPage from './cloud-services/page';
import DigitalTransformationPage from './digital-transformation/page';

// Lazy load other pages
const AIContentGeneratorPage = lazy(() => import('./ai-content-generator/page'));
const AIChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page'));
const AIAnalyticsDashboardPage = lazy(() => import('./ai-analytics-dashboard/page'));
const AIEmailAssistantPage = lazy(() => import('./ai-email-assistant/page'));
const AIVoiceAssistantPage = lazy(() => import('./ai-voice-assistant/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'));
const DevOpsCICDPage = lazy(() => import('./devops-cicd/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));

// Create a 404 component
const NotFoundPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
        Go Home
      </a>
    </div>
  </div>
);

// Define all available routes
const allRoutes = [
  '/',
  '/about',
  '/contact',
  '/ai-services',
  '/it-services',
  '/micro-saas-services',
  '/5g-implementation',
  '/cloud-services',
  '/digital-transformation',
  '/5g-data-analytics',
  '/5g-edge-computing',
  '/5g-iot-solutions',
  '/5g-mobile-applications',
  '/5g-network-infrastructure',
  '/5g-private-networks',
  '/accessibility',
  '/accessibility-page',
  '/ai-3d-generation',
  '/ai-accounting-assistant',
  '/ai-agricultural-intelligence-pro',
  '/ai-analytics',
  '/ai-analytics-dashboard',
  '/ai-api-management',
  '/ai-api-manager',
  '/ai-automated-reporting',
  '/ai-automated-testing',
  '/ai-automation',
  '/ai-autonomous-systems',
  '/ai-blockchain-analytics',
  '/ai-blockchain-solutions',
  '/ai-business-intelligence',
  '/ai-chatbot-builder',
  '/ai-chatbot-enterprise',
  '/ai-climate-prediction-engine',
  '/ai-climate-solutions-pro',
  '/ai-cloud-infrastructure',
  '/ai-code-assistant',
  '/ai-code-generation',
  '/ai-code-security-auditor',
  '/ai-computer-vision',
  '/ai-content-delivery-network',
  '/ai-content-generation',
  '/ai-content-generation-pro',
  '/ai-content-moderation',
  '/ai-content-studio',
  '/ai-content-writer',
  '/ai-conversation-analytics',
  '/ai-conversational-ai',
  '/ai-crm',
  '/ai-crm-assistant',
  '/ai-customer-churn',
  '/ai-customer-service',
  '/ai-customer-support',
  '/ai-customer-support-bot',
  '/ai-customer-support-chatbot',
  '/ai-cyber-defense-matrix',
  '/ai-cybersecurity',
  '/ai-cybersecurity-monitor',
  '/ai-cybersecurity-suite',
  '/ai-data-analytics',
  '/ai-data-visualization',
  '/ai-design-studio',
  '/ai-document-intelligence',
  '/ai-document-processing',
  '/ai-document-processor',
  '/ai-document-scanner',
  '/ai-drug-discovery-pro',
  '/ai-ecommerce-assistant',
  '/ai-ecommerce-optimizer',
  '/ai-ecommerce-solutions',
  '/ai-edge-computing',
  '/ai-education',
  '/ai-email-assistant',
  '/ai-email-marketing',
  '/ai-email-marketing-automation',
  '/ai-energy',
  '/ai-energy-grid-management-pro',
  '/ai-enterprise-solutions',
  '/ai-expense-tracker',
  '/ai-fashion-design',
  '/ai-financial-advisor',
  '/ai-financial-analyzer',
  '/ai-financial-crime-detection-pro',
  '/ai-fintech',
  '/ai-fitness-coach',
  '/ai-fraud-detection',
  '/ai-healthcare',
  '/ai-healthcare-solutions',
  '/ai-holographic-workspace',
  '/ai-hr',
  '/ai-hr-assistant',
  '/ai-image-recognition',
  '/ai-infrastructure-monitoring',
  '/ai-insurance',
  '/ai-inventory-management',
  '/ai-inventory-manager',
  '/ai-invoice-generator',
  '/ai-lead-generation',
  '/ai-legal',
  '/ai-legal-assistant',
  '/ai-legal-research-pro',
  '/ai-load-testing',
  '/ai-logo-designer',
  '/ai-manufacturing',
  '/ai-marketing',
  '/ai-ml',
  '/ai-ml-platform',
  '/ai-mobile-app-builder',
  '/ai-mobile-app-development',
  '/ai-music-composition',
  '/ai-neural-memory-assistant',
  '/ai-nlp',
  '/ai-ops',
  '/ai-password-manager',
  '/ai-predictive-analytics',
  '/ai-predictive-maintenance',
  '/ai-project-management',
  '/ai-project-manager',
  '/ai-quality-assurance',
  '/ai-quantum-computing',
  '/ai-quantum-financial-oracle',
  '/ai-quantum-task-optimizer',
  '/ai-real-estate',
  '/ai-recommendation-engine',
  '/ai-robotics',
  '/ai-sales-automation',
  '/ai-scheduler',
  '/ai-sentiment-analyzer',
  '/ai-seo-optimizer',
  '/ai-smart-calendar',
  '/ai-social-media-manager',
  '/ai-social-media-scheduler',
  '/ai-solutions',
  '/ai-space-technology-pro',
  '/ai-stock-portfolio-manager',
  '/ai-supply-chain',
  '/ai-supply-chain-optimization-pro',
  '/ai-task-manager',
  '/ai-telepathic-interface',
  '/ai-time-tracker',
  '/ai-transportation',
  '/ai-video-generation',
  '/ai-video-generator',
  '/ai-vision',
  '/ai-voice-cloning',
  '/ai-voice-cloning-studio',
  '/ai-voice-processing',
  '/ai-voice-synthesis',
  '/ai-website-builder',
  '/ai-workflow-automation',
  '/ai-writing-assistant',
  '/analytics-tools',
  '/api-docs',
  '/ar-vr-solutions',
  '/autonomous-systems',
  '/backup-recovery',
  '/blockchain',
  '/blockchain-integration-services',
  '/blockchain-web3',
  '/blog',
  '/business-apps',
  '/business-intelligence',
  '/careers',
  '/case-studies',
  '/cloud-infrastructure',
  '/cloud-migration',
  '/cloud-migration-services',
  '/cloud-security',
  '/compliance',
  '/computer-vision',
  '/consultation',
  '/cookies',
  '/crm-lite',
  '/custom-development',
  '/cybersecurity',
  '/cybersecurity-suite',
  '/data-center',
  '/database',
  '/database-management',
  '/database-services',
  '/demo',
  '/developer-tools',
  '/devops',
  '/devops-cicd',
  '/edge-computing',
  '/email-optimizer',
  '/enterprise',
  '/enterprise-security',
  '/expense-tracker',
  '/financial-it',
  '/gdpr',
  '/health',
  '/healthcare-it',
  '/innovation-labs',
  '/intelligent-database-migration',
  '/intelligent-email-infrastructure',
  '/iot-edge',
  '/iot-edge-computing',
  '/iot-platform',
  '/it-asset-management',
  '/it-consulting',
  '/it-infrastructure',
  '/it-infrastructure-solutions',
  '/it-performance',
  '/it-support',
  '/it-training',
  '/landing-page-builder',
  '/machine-learning',
  '/managed-it',
  '/marketing-tools',
  '/micro-saas',
  '/mobile-development',
  '/network-design',
  '/network-infrastructure',
  '/network-security',
  '/network-solutions',
  '/news',
  '/nlp',
  '/offline',
  '/performance-optimization',
  '/pricing',
  '/privacy',
  '/productivity',
  '/quantum-ai',
  '/quantum-computing',
  '/robotics',
  '/security',
  '/seo-optimizer',
  '/services',
  '/services-advertising',
  '/sitemap',
  '/sla',
  '/smart-analytics',
  '/smart-cities',
  '/smart-contract-security-audit',
  '/specialized-services',
  '/status',
  '/support',
  '/system-admin',
  '/system-status',
  '/task-manager-pro',
  '/team',
  '/terms',
  '/test-simple',
  '/web-development',
  '/zion-ai-accounting-assistant',
  '/zion-ai-code-reviewer',
  '/zion-ai-content-moderation',
  '/zion-ai-contract-analyzer',
  '/zion-ai-customer-service-pro',
  '/zion-ai-data-cleaner',
  '/zion-ai-document-ai',
  '/zion-ai-email-assistant',
  '/zion-ai-energy-manager',
  '/zion-ai-fraud-detector',
  '/zion-ai-marketing-automation',
  '/zion-ai-meeting-assistant',
  '/zion-ai-predictive-maintenance',
  '/zion-ai-recruitment-pro',
  '/zion-ai-seo-optimizer',
  '/zion-ai-supply-chain-optimizer',
  '/zion-ai-survey-builder',
  '/zion-ai-translator-pro',
  '/zion-ai-video-editor',
  '/zion-analytics-pro',
  '/zion-chat-ai',
  '/zion-cloud-vault',
  '/zion-compliance-manager',
  '/zion-content-studio',
  '/zion-crm-intelligence',
  '/zion-customer-insights',
  '/zion-data-sync',
  '/zion-email-automation',
  '/zion-inventory-smart',
  '/zion-invoice-genius',
  '/zion-lead-magnet',
  '/zion-performance-monitor',
  '/zion-project-master',
  '/zion-security-shield',
  '/zion-social-scheduler',
  '/zion-workflow-automation'
];

// Create route components
const routeComponents = allRoutes.reduce((acc, route) => {
  acc[route] = createLazyPage(route);
  return acc;
}, {} as Record<string, React.LazyExoticComponent<React.ComponentType<any>>>);

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {allRoutes.map((route) => {
          const Component = routeComponents[route];
          return (
            <Route
              key={route}
              path={route}
              element={<Component />}
            />
          );
        })}
        {/* Catch-all route for 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                <a href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                  Go Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;