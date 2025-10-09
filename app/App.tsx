import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page';
import AISolutionsPage from './ai-solutions/page';
import ITServicesPage from './it-services/page';
import ServicesPage from './services/page';
import ContactPage from './contact/page';

// AI Service Pages
import AIMLPage from './ai-ml/page';
import AINLPPage from './ai-nlp/page';
import AIVisionPage from './ai-vision/page';
import AIVoiceSynthesisPage from './ai-voice-synthesis/page';
import AIContentWriterPage from './ai-content-writer/page';
import AIFraudDetectionPage from './ai-fraud-detection/page';

// IT Service Pages
import CybersecurityPage from './cybersecurity/page';
import DevOpsPage from './devops/page';
import DatabasePage from './database/page';
import MobileDevelopmentPage from './mobile-development/page';
import WebDevelopmentPage from './web-development/page';
import BlockchainPage from './blockchain/page';

// Micro SAAS Pages
import AIProjectManagerPage from './ai-project-manager/page';
import AISocialMediaManagerPage from './ai-social-media-manager/page';
import AIAnalyticsPage from './ai-analytics/page';
import AIEmailMarketingPage from './ai-email-marketing/page';
import AICustomerSupportBotPage from './ai-customer-support-bot/page';
import AICodeGenerationPage from './ai-code-generation/page';
import AIVideoGenerationPage from './ai-video-generation/page';
import AIVoiceCloningPage from './ai-voice-cloning/page';
import AIWorkflowAutomationPage from './ai-workflow-automation/page';
import AISalesAutomationPage from './ai-sales-automation/page';
import AIDataVisualizationPage from './ai-data-visualization/page';
import AI3DGenerationPage from './ai-3d-generation/page';
import AICustomerSupportPage from './ai-customer-support/page';
import AICustomerSupportBotPage from './ai-customer-support-bot/page';
import AIFashionDesignPage from './ai-fashion-design/page';
import AIFitnessCoachPage from './ai-fitness-coach/page';
import AIMusicCompositionPage from './ai-music-composition/page';
import AIAutomationPage from './ai-automation/page';
import CloudMigrationPage from './cloud-migration/page';
import ITConsultingPage from './it-consulting/page';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/ai-solutions" element={<AISolutionsPage />} />
      <Route path="/it-services" element={<ITServicesPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* AI Service Pages */}
      <Route path="/ai-ml" element={<AIMLPage />} />
      <Route path="/ai-nlp" element={<AINLPPage />} />
      <Route path="/ai-vision" element={<AIVisionPage />} />
      <Route path="/ai-voice-synthesis" element={<AIVoiceSynthesisPage />} />
      <Route path="/ai-content-writer" element={<AIContentWriterPage />} />
      <Route path="/ai-fraud-detection" element={<AIFraudDetectionPage />} />

      {/* IT Service Pages */}
      <Route path="/cybersecurity" element={<CybersecurityPage />} />
      <Route path="/devops" element={<DevOpsPage />} />
      <Route path="/database" element={<DatabasePage />} />
      <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
      <Route path="/web-development" element={<WebDevelopmentPage />} />
      <Route path="/blockchain" element={<BlockchainPage />} />

      {/* Micro SAAS Pages */}
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
      <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
      <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
      <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
      <Route path="/ai-fashion-design" element={<AIFashionDesignPage />} />
      <Route path="/ai-fitness-coach" element={<AIFitnessCoachPage />} />
      <Route path="/ai-music-composition" element={<AIMusicCompositionPage />} />
      <Route path="/ai-automation" element={<AIAutomationPage />} />
      <Route path="/cloud-migration" element={<CloudMigrationPage />} />
      <Route path="/it-consulting" element={<ITConsultingPage />} />
    </Routes>
  );
};

export default App;