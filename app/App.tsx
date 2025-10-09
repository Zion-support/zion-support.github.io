import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { performanceMonitor } from './utils/performanceMonitor';

// Lazy load components for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const BlogPage = lazy(() => import('./blog/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const NotFoundPage = lazy(() => import('./not-found'));

// AI Solutions Pages
const AISolutionsPage = lazy(() => import('./ai-solutions/page'));

// Micro SAAS Services Pages
const AIProjectManagerPage = lazy(() => import('./ai-project-manager/page'));
const AISocialMediaManagerPage = lazy(() => import('./ai-social-media-manager/page'));
const AIAnalyticsPage = lazy(() => import('./ai-analytics/page'));
const AIEmailMarketingPage = lazy(() => import('./ai-email-marketing/page'));
const AICustomerSupportBotPage = lazy(() => import('./ai-customer-support-bot/page'));
const AICodeGenerationPage = lazy(() => import('./ai-code-generation/page'));
const AIVideoGenerationPage = lazy(() => import('./ai-video-generation/page'));
const AIVoiceCloningPage = lazy(() => import('./ai-voice-cloning/page'));
const AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AISalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AIContentWriterPage = lazy(() => import('./ai-content-writer/page'));
const AIFinancialAdvisorPage = lazy(() => import('./ai-financial-advisor/page'));
const AIFashionDesignPage = lazy(() => import('./ai-fashion-design/page'));
const AIMusicCompositionPage = lazy(() => import('./ai-music-composition/page'));
const AIFitnessCoachPage = lazy(() => import('./ai-fitness-coach/page'));
const AI3DGenerationPage = lazy(() => import('./ai-3d-generation/page'));
const AICustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const AIDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));

// AI Services Pages
const AIMLPage = lazy(() => import('./ai-ml/page'));
const AINLPPage = lazy(() => import('./ai-nlp/page'));
const AIVisionPage = lazy(() => import('./ai-vision/page'));
const AIVoiceSynthesisPage = lazy(() => import('./ai-voice-synthesis/page'));
const AIFraudDetectionPage = lazy(() => import('./ai-fraud-detection/page'));

// IT Services Pages
const CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const ITConsultingPage = lazy(() => import('./it-consulting/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const DevOpsPage = lazy(() => import('./devops/page'));
const DatabasePage = lazy(() => import('./database/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const BlockchainPage = lazy(() => import('./blockchain/page'));

// Main loading component
const MainLoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <LoadingSpinner size="xl" text="Loading Zion Tech Group..." />
  </div>
);

const App: React.FC = () => {
  // Initialize performance monitoring
  React.useEffect(() => {
    performanceMonitor.reportMetrics();
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<MainLoadingSpinner />}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            
            {/* AI Solutions */}
            <Route path="/ai-solutions" element={<AISolutionsPage />} />
            
            {/* Micro SAAS Services */}
            <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
            <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
            <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
            <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
            <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
            <Route path="/ai-code-generation" element={<AICodeGenerationPage />} />
            <Route path="/ai-video-generation" element={<AIVideoGenerationPage />} />
            <Route path="/ai-voice-cloning" element={<AIVoiceCloningPage />} />
            <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
            <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
            <Route path="/ai-content-writer" element={<AIContentWriterPage />} />
            <Route path="/ai-financial-advisor" element={<AIFinancialAdvisorPage />} />
            <Route path="/ai-fashion-design" element={<AIFashionDesignPage />} />
            <Route path="/ai-music-composition" element={<AIMusicCompositionPage />} />
            <Route path="/ai-fitness-coach" element={<AIFitnessCoachPage />} />
            <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
            <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
            <Route path="/ai-automation" element={<AIAutomationPage />} />
            <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
            
            {/* AI Services */}
            <Route path="/ai-ml" element={<AIMLPage />} />
            <Route path="/ai-nlp" element={<AINLPPage />} />
            <Route path="/ai-vision" element={<AIVisionPage />} />
            <Route path="/ai-voice-synthesis" element={<AIVoiceSynthesisPage />} />
            <Route path="/ai-fraud-detection" element={<AIFraudDetectionPage />} />
            
            {/* IT Services */}
            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
            <Route path="/it-consulting" element={<ITConsultingPage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/devops" element={<DevOpsPage />} />
            <Route path="/database" element={<DatabasePage />} />
            <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
            <Route path="/web-development" element={<WebDevelopmentPage />} />
            <Route path="/blockchain" element={<BlockchainPage />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;