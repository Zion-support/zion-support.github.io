'use client';
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load components for better performance
const HomePage = lazy(() => import('../app/page'));

// Import enhancement utilities
import PerformanceEnhancer from './utils/performanceEnhancer';
import SEOEnhancer from './utils/seoEnhancer';
import AccessibilityEnhancer from './utils/accessibilityEnhancer';
import SecurityEnhancer from './utils/securityEnhancer';
import UserExperienceEnhancer from './utils/userExperienceEnhancer';

// Import components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancerComponent from './components/AccessibilityEnhancer';
import SecurityEnhancerComponent from './components/SecurityEnhancer';
import UserExperienceEnhancerComponent from './components/UserExperienceEnhancer';
import Analytics from './components/Analytics';

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>
);

// AI Services Pages
import AIServicesPage from './ai-services/page';
import AIMarketingPage from './ai-marketing/page';
import AIAutomationPage from './ai-automation/page';
import AIHealthcarePage from './ai-healthcare/page';
import AIFintechPage from './ai-fintech/page';
import AIContentGenerationPage from './ai-content-generation/page';
import AIDataAnalyticsPage from './ai-data-analytics/page';
import AICybersecurityPage from './ai-cybersecurity/page';
import AIWorkflowAutomationPage from './ai-workflow-automation/page';
import AIMobileAppDevelopmentPage from './ai-mobile-app-development/page';
import AIEcommerceSolutionsPage from './ai-ecommerce-solutions/page';
import AICustomerSupportPage from './ai-customer-support/page';
import AISalesAutomationPage from './ai-sales-automation/page';
import AIDataVisualizationPage from './ai-data-visualization/page';
import AILeadGenerationPage from './ai-lead-generation/page';
import AIDocumentProcessingPage from './ai-document-processing/page';

// IT Services Pages
import ITServicesPage from './it-services/page';
import ITInfrastructurePage from './it-infrastructure/page';
import CybersecurityPage from './cybersecurity/page';
import CloudMigrationPage from './cloud-migration/page';
import DevOpsPage from './devops/page';
import DatabasePage from './database/page';
import NetworkingPage from './networking/page';
import ITConsultingPage from './it-consulting/page';

// Micro SAAS Pages
import MicroSAASPage from './micro-saas/page';
import AICRMPage from './ai-crm/page';
import AIAnalyticsDashboardPage from './ai-analytics-dashboard/page';
import AIChatbotBuilderPage from './ai-chatbot-builder/page';
import AIEmailMarketingPage from './ai-email-marketing/page';
import AIWritingAssistantPage from './ai-writing-assistant/page';

// Specialized Solutions Pages
import QuantumComputingPage from './quantum-computing/page';
import AutonomousSystemsPage from './autonomous-systems/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import IoTEdgeComputingPage from './iot-edge-computing/page';
import BusinessIntelligencePage from './business-intelligence/page';
import RoboticsPage from './robotics/page';

// Company Pages
import TeamPage from './team/page';
import CareersPage from './careers/page';
import NewsPage from './news/page';

// Support Pages
import DocsPage from './docs/page';
import APIDocsPage from './api-docs/page';
import SupportPage from './support/page';
import StatusPage from './status/page';
import PrivacyPage from './privacy/page';
import TermsPage from './terms/page';
import CookiesPage from './cookies/page';

// Additional Pages
import PricingPage from './pricing/page';
import DemoPage from './demo/page';
import ConsultationPage from './consultation/page';

// AI Services
import AIServicesPage from './ai-services/page';
import AIMarketingPage from './ai-marketing/page';
import AIAutomationPage from './ai-automation/page';
import AIHealthcarePage from './ai-healthcare/page';
import AIFintechPage from './ai-fintech/page';
import AIContentGenerationPage from './ai-content-generation/page';
import AIDataAnalyticsPage from './ai-data-analytics/page';
import AICybersecurityPage from './ai-cybersecurity/page';
import AIWorkflowAutomationPage from './ai-workflow-automation/page';
import AIMobileAppDevelopmentPage from './ai-mobile-app-development/page';
import AIEcommerceSolutionsPage from './ai-ecommerce-solutions/page';
import AICustomerSupportPage from './ai-customer-support/page';
import AISalesAutomationPage from './ai-sales-automation/page';
import AIDataVisualizationPage from './ai-data-visualization/page';
import AILeadGenerationPage from './ai-lead-generation/page';
import AIDocumentProcessingPage from './ai-document-processing/page';

// Micro SAAS Solutions
import AIProjectManagerPage from './ai-project-manager/page';
import AISocialMediaManagerPage from './ai-social-media-manager/page';
import AIAnalyticsDashboardPage from './ai-analytics-dashboard/page';
import AIEmailMarketingPage from './ai-email-marketing/page';
import AICustomerSupportBotPage from './ai-customer-support-bot/page';
import AICodeGenerationPage from './ai-code-generation/page';
import AIChatbotBuilderPage from './ai-chatbot-builder/page';
import AIWritingAssistantPage from './ai-writing-assistant/page';
import AICRMPage from './ai-crm/page';

// IT Services
import ITServicesPage from './it-services/page';
import ITInfrastructurePage from './it-infrastructure/page';
import CybersecurityPage from './cybersecurity/page';
import CloudMigrationPage from './cloud-migration/page';
import DevOpsPage from './devops/page';
import DatabasePage from './database/page';
import NetworkingPage from './networking/page';

// Specialized Solutions
import QuantumComputingPage from './quantum-computing/page';
import AutonomousSystemsPage from './autonomous-systems/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import IoTEdgeComputingPage from './iot-edge-computing/page';
import BusinessIntelligencePage from './business-intelligence/page';
import RoboticsPage from './robotics/page';

// Company Pages
import TeamPage from './team/page';
import CareersPage from './careers/page';
import NewsPage from './news/page';
import PricingPage from './pricing/page';
import DemoPage from './demo/page';
import ConsultationPage from './consultation/page';

// Support Pages
import SupportPage from './support/page';
import DocsPage from './docs/page';
import APIDocsPage from './api-docs/page';
import StatusPage from './status/page';
import PrivacyPage from './privacy/page';
import TermsPage from './terms/page';
import CookiesPage from './cookies/page';

// AI Services Pages
import AIProjectManagerPage from './ai-project-manager/page';
import AICustomerSupportBotPage from './ai-customer-support-bot/page';
import AIAutomationPage from './ai-automation/page';
import AIMLPlatformPage from './ai-ml-platform/page';

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [enhancers, setEnhancers] = useState<{
    performance?: PerformanceEnhancer;
    seo?: SEOEnhancer;
    accessibility?: AccessibilityEnhancer;
    security?: SecurityEnhancer;
    ux?: UserExperienceEnhancer;
  }>({});

  useEffect(() => {
    initializeEnhancers();
  }, []);

  const initializeEnhancers = async () => {
    try {
      // Initialize performance enhancer
      const performanceEnhancer = new PerformanceEnhancer({
        enableImageOptimization: true,
        enableLazyLoading: true,
        enableCodeSplitting: true,
        enablePrefetching: true,
        enableServiceWorker: true,
        enableResourceHints: true,
        enableCompression: true,
        enableCaching: true
      });

      // Initialize SEO enhancer
      const seoEnhancer = new SEOEnhancer({
        title: 'Zion Tech Group - Advanced AI and IT Solutions',
        description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
        keywords: ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services'],
        canonicalUrl: 'https://ziontechgroup.com',
        ogImage: 'https://ziontechgroup.com/og-image.jpg',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'TechCompany',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          services: [
            'AI Solutions',
            'Quantum Computing',
            'Autonomous Systems',
            'Digital Transformation',
            'Cloud Services',
            'Automation',
            'Business Intelligence'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: 'en'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US'
          }
        },
        robots: 'index, follow',
        language: 'en',
        author: 'Zion Tech Group',
        publisher: 'Zion Tech Group'
      });

      // Initialize accessibility enhancer
      const accessibilityEnhancer = new AccessibilityEnhancer({
        enableKeyboardNavigation: true,
        enableScreenReader: true,
        enableHighContrast: true,
        enableFocusManagement: true,
        enableReducedMotion: true,
        enableColorBlindSupport: true,
        enableVoiceControl: true
      });

      // Initialize security enhancer
      const securityEnhancer = new SecurityEnhancer({
        enableCSP: true,
        enableHSTS: true,
        enableXSSProtection: true,
        enableClickjackingProtection: true,
        enableContentTypeOptions: true,
        enableReferrerPolicy: true,
        enablePermissionsPolicy: true,
        enableCORS: true,
        enableSecureCookies: true
      });

      // Initialize UX enhancer
      const uxEnhancer = new UserExperienceEnhancer({
        enableSmoothScrolling: true,
        enableLoadingStates: true,
        enableErrorBoundaries: true,
        enableAnalytics: true,
        enableNotifications: true,
        enableProgressiveWebApp: true,
        enableOfflineSupport: true,
        enablePushNotifications: false,
        enableDarkMode: true,
        enableAnimations: true
      });

      setEnhancers({
        performance: performanceEnhancer,
        seo: seoEnhancer,
        accessibility: accessibilityEnhancer,
        security: securityEnhancer,
        ux: uxEnhancer
      });

      // Optimize for Core Web Vitals
      seoEnhancer.optimizeForCoreWebVitals();

      // Generate reports (for development)
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Report:', performanceEnhancer.getMetrics());
        console.log('Accessibility Report:', accessibilityEnhancer.generateReport());
        console.log('Security Report:', securityEnhancer.generateSecurityReport());
        console.log('UX Report:', uxEnhancer.generateUXReport());
      }

      setIsInitialized(true);
    } catch (error) {
      console.error('Failed to initialize enhancers:', error);
      setIsInitialized(true); // Continue even if enhancers fail
    }
  };

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        
        {/* Company Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Main Services */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        
        {/* AI Services */}
        <Route path="/ai-services" element={<AIServicesPage />} />
        <Route path="/ai-marketing" element={<AIMarketingPage />} />
        <Route path="/ai-automation" element={<AIAutomationPage />} />
        <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
        <Route path="/ai-fintech" element={<AIFintechPage />} />
        <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
        <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
        <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
        <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
        <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
        <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
        <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
        <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
        <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
        <Route path="/ai-lead-generation" element={<AILeadGenerationPage />} />
        <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
        
        {/* Micro SAAS Solutions */}
        <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
        <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
        <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
        <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
        <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
        <Route path="/ai-code-generation" element={<AICodeGenerationPage />} />
        <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
        <Route path="/ai-writing-assistant" element={<AIWritingAssistantPage />} />
        <Route path="/ai-crm" element={<AICRMPage />} />
        
        {/* IT Services */}
        <Route path="/it-services" element={<ITServicesPage />} />
        <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
        <Route path="/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/cloud-migration" element={<CloudMigrationPage />} />
        <Route path="/devops-cicd" element={<DevOpsPage />} />
        <Route path="/database-management" element={<DatabasePage />} />
        <Route path="/network-solutions" element={<NetworkingPage />} />
        
        {/* Specialized Solutions */}
        <Route path="/quantum-computing" element={<QuantumComputingPage />} />
        <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
        <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
        <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
        <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
        <Route path="/robotics" element={<RoboticsPage />} />
        
        {/* Content Pages */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        
        {/* AI Services Routes */}
        <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
        <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
        <Route path="/ai-automation" element={<AIAutomationPage />} />
        <Route path="/ai-ml-platform" element={<AIMLPlatformPage />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

// 404 Page Component
const NotFoundPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="cyber-button inline-flex items-center px-6 py-3 text-lg font-semibold"
      >
        Go Home
      </a>
    </div>
  </div>
);

export default App;