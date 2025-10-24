import React, { useEffect, useState, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Lazy load components for better performance
const HomePage = lazy(() => import('./page'));

// Import enhancement utilities
import PerformanceEnhancer from './utils/performanceEnhancer';
import SEOEnhancer from './utils/seoEnhancer';
import AccessibilityEnhancer from './utils/accessibilityEnhancer';
import SecurityEnhancer from './utils/securityEnhancer';
import UserExperienceEnhancer from './utils/userExperienceEnhancer';
import ITServicesPage from './it-services/page';
import ITInfrastructurePage from './it-infrastructure/page';
import CybersecurityPage from './cybersecurity/page';
import CloudMigrationPage from './cloud-migration/page';
import DevOpsPage from './devops/page';
import DatabasePage from './database/page';
import NetworkingPage from './networking/page';
import AICRMPage from './ai-crm/page';
import AIAnalyticsDashboardPage from './ai-analytics-dashboard/page';
import AIChatbotBuilderPage from './ai-chatbot-builder/page';
import AIEmailMarketingPage from './ai-email-marketing/page';
import AIWritingAssistantPage from './ai-writing-assistant/page';
import TeamPage from './team/page';
import CareersPage from './careers/page';
import NewsPage from './news/page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import ServicesPage from './services/page';
import BlogPage from './blog/page';
import CaseStudiesPage from './case-studies/page';
import AICustomerSupportBotPage from './ai-customer-support-bot/page';
import AICodeGenerationPage from './ai-code-generation/page';
import AISocialMediaManagerPage from './ai-social-media-manager/page';
import AIMLPlatformPage from './ai-ml-platform/page';

'use client';

const _HomePage = lazy(() => import('../app/page'));


// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
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
// Micro SAAS Pages

// Specialized Solutions Pages
import QuantumComputingPage from './quantum-computing/page';
import AutonomousSystemsPage from './autonomous-systems/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import IoTEdgeComputingPage from './iot-edge-computing/page';
import BusinessIntelligencePage from './business-intelligence/page';
import RoboticsPage from './robotics/page';

// Company Pages

// Support Pages




// Additional Pages
import PricingPage from './pricing/page';
import DemoPage from './demo/page';
import ConsultationPage from './consultation/page';

// AI Services

// Additional AI Services

// Specialized Solutions


import AIProjectManagerPage from './ai-project-manager/page';


const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [, setEnhancers] = useState<{
    performance: unknown;
    seo: unknown;
    accessibility: unknown;
    security: unknown;
    ux: unknown;
  } | null>(null);

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
        // Reports generated silently in development
      }

      setIsInitialized(true);
    } catch {
      // Silently handle enhancer initialization errors
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
      </Routes>
    </Router>
  );

export default App;