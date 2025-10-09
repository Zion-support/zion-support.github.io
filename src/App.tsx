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

// Import pages
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

const _HomePage = lazy(() => import('../app/page'));

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

// Micro SAAS Solutions
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
      const performanceEnhancer = new PerformanceEnhancer();
      await performanceEnhancer.initialize();
      
      // Initialize SEO enhancer
      const seoEnhancer = new SEOEnhancer();
      await seoEnhancer.initialize();
      
      // Initialize accessibility enhancer
      const accessibilityEnhancer = new AccessibilityEnhancer();
      await accessibilityEnhancer.initialize();
      
      // Initialize security enhancer
      const securityEnhancer = new SecurityEnhancer();
      await securityEnhancer.initialize();
      
      // Initialize UX enhancer
      const uxEnhancer = new UserExperienceEnhancer();
      await uxEnhancer.initialize();
      
      setEnhancers({
        performance: performanceEnhancer,
        seo: seoEnhancer,
        accessibility: accessibilityEnhancer,
        security: securityEnhancer,
        ux: uxEnhancer,
      });
      
      setIsInitialized(true);
    } catch (error) {
      // console.error('Failed to initialize enhancers:', error);
      // Continue with app initialization even if enhancers fail
      setIsInitialized(true);
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
        <Route path="/pricing" element={<div>Pricing Page</div>} />
        <Route path="/demo" element={<div>Demo Page</div>} />
        <Route path="/consultation" element={<div>Consultation Page</div>} />
        
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
        
        {/* IT Services */}
        <Route path="/it-services" element={<ITServicesPage />} />
        <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
        <Route path="/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/cloud-migration" element={<CloudMigrationPage />} />
        <Route path="/devops" element={<DevOpsPage />} />
        <Route path="/database" element={<DatabasePage />} />
        <Route path="/networking" element={<NetworkingPage />} />
        
        {/* Other Pages */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        
        {/* AI Support Pages */}
        <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
        <Route path="/ai-code-generation" element={<AICodeGenerationPage />} />
        <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
        <Route path="/ai-writing-assistant" element={<AIWritingAssistantPage />} />
        <Route path="/ai-ml-platform" element={<AIMLPlatformPage />} />
        <Route path="/ai-crm" element={<AICRMPage />} />
        
        {/* Coming Soon Pages */}
        <Route path="/ai-ab-testing" element={<div>AI A/B Testing - Coming Soon</div>} />
        <Route path="/ai-analytics" element={<div>AI Analytics - Coming Soon</div>} />
        <Route path="/ai-computer-vision" element={<div>AI Computer Vision - Coming Soon</div>} />
        <Route path="/ai-content-studio" element={<div>AI Content Studio - Coming Soon</div>} />
        <Route path="/ai-customer-insights" element={<div>AI Customer Insights - Coming Soon</div>} />
        <Route path="/ai-design-assistant" element={<div>AI Design Assistant - Coming Soon</div>} />
        <Route path="/ai-document-processor" element={<div>AI Document Processor - Coming Soon</div>} />
        <Route path="/ai-ecommerce-optimizer" element={<div>AI E-commerce Optimizer - Coming Soon</div>} />
        <Route path="/ai-edge-computing" element={<div>AI Edge Computing - Coming Soon</div>} />
        <Route path="/ai-hr-assistant" element={<div>AI HR Assistant - Coming Soon</div>} />
        <Route path="/ai-inventory-manager" element={<div>AI Inventory Manager - Coming Soon</div>} />
        <Route path="/ai-invoice-generator" element={<div>AI Invoice Generator - Coming Soon</div>} />
        <Route path="/ai-lead-scoring" element={<div>AI Lead Scoring - Coming Soon</div>} />
        <Route path="/ai-mobile-builder" element={<div>AI Mobile Builder - Coming Soon</div>} />
        <Route path="/ai-nlp" element={<div>AI NLP - Coming Soon</div>} />
        <Route path="/ai-performance-tracker" element={<div>AI Performance Tracker - Coming Soon</div>} />
        <Route path="/ai-predictive-analytics" element={<div>AI Predictive Analytics - Coming Soon</div>} />
        <Route path="/ai-research-development" element={<div>AI Research & Development - Coming Soon</div>} />
        <Route path="/ai-robotics" element={<div>AI Robotics - Coming Soon</div>} />
        <Route path="/ai-sales-forecasting" element={<div>AI Sales Forecasting - Coming Soon</div>} />
        <Route path="/ai-scheduler" element={<div>AI Scheduler - Coming Soon</div>} />
        <Route path="/ai-security-monitor" element={<div>AI Security Monitor - Coming Soon</div>} />
        <Route path="/ai-seo-optimizer" element={<div>AI SEO Optimizer - Coming Soon</div>} />
        <Route path="/ai-voice-assistant" element={<div>AI Voice Assistant - Coming Soon</div>} />
        
        {/* Additional Pages */}
        <Route path="/analytics-tools" element={<div>Analytics Tools - Coming Soon</div>} />
        <Route path="/ar-vr-solutions" element={<div>AR/VR Solutions - Coming Soon</div>} />
        <Route path="/business-apps" element={<div>Business Apps - Coming Soon</div>} />
        <Route path="/compliance" element={<div>Compliance - Coming Soon</div>} />
        <Route path="/database-management" element={<div>Database Management - Coming Soon</div>} />
        <Route path="/devops-cicd" element={<div>DevOps CI/CD - Coming Soon</div>} />
        <Route path="/digital-transformation" element={<div>Digital Transformation - Coming Soon</div>} />
        <Route path="/expense-tracker" element={<div>Expense Tracker - Coming Soon</div>} />
        <Route path="/future-technologies" element={<div>Future Technologies - Coming Soon</div>} />
        <Route path="/global-it-support" element={<div>Global IT Support - Coming Soon</div>} />
        <Route path="/green-it" element={<div>Green IT - Coming Soon</div>} />
        <Route path="/innovation-labs" element={<div>Innovation Labs - Coming Soon</div>} />
        <Route path="/iot-edge" element={<div>IoT Edge - Coming Soon</div>} />
        <Route path="/it-automation" element={<div>IT Automation - Coming Soon</div>} />
        <Route path="/it-disaster-recovery" element={<div>IT Disaster Recovery - Coming Soon</div>} />
        <Route path="/it-infrastructure-design" element={<div>IT Infrastructure Design - Coming Soon</div>} />
        <Route path="/it-performance-monitoring" element={<div>IT Performance Monitoring - Coming Soon</div>} />
        <Route path="/it-support" element={<div>IT Support - Coming Soon</div>} />
        <Route path="/it-training" element={<div>IT Training - Coming Soon</div>} />
        <Route path="/network-solutions" element={<div>Network Solutions - Coming Soon</div>} />
        <Route path="/smart-analytics" element={<div>Smart Analytics - Coming Soon</div>} />
        <Route path="/smart-cities" element={<div>Smart Cities - Coming Soon</div>} />
        <Route path="/sustainability-tech" element={<div>Sustainability Tech - Coming Soon</div>} />
        <Route path="/system-administration" element={<div>System Administration - Coming Soon</div>} />
        <Route path="/task-manager-pro" element={<div>Task Manager Pro - Coming Soon</div>} />
      </Routes>
    </Router>
  );
};

export default App;