import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './app/page';
import ContactPage from './app/contact/page';
import ServicesPage from './app/services/page';
import SitemapPage from './src/sitemap/page';

// AI Service Pages
import AIProjectManagerPage from './app/ai-project-manager/page';
import AISocialMediaManagerPage from './app/ai-social-media-manager/page';
import AIAnalyticsPage from './app/ai-analytics/page';
import AIEmailMarketingPage from './app/ai-email-marketing/page';
import AICustomerSupportBotPage from './app/ai-customer-support-bot/page';
import AICodeGenerationPage from './app/ai-code-generation/page';
import AIVideoGenerationPage from './app/ai-video-generation/page';
import AIVoiceCloningPage from './app/ai-voice-cloning/page';
import AIWorkflowAutomationPage from './app/ai-workflow-automation/page';
import AISalesAutomationPage from './app/ai-sales-automation/page';
import AIContentWriterPage from './app/ai-content-writer/page';
import AIDataVisualizationPage from './app/ai-data-visualization/page';
import AI3DGenerationPage from './app/ai-3d-generation/page';
import AICustomerSupportPage from './app/ai-customer-support/page';
import AIFashionDesignPage from './app/ai-fashion-design/page';
import AIMusicCompositionPage from './app/ai-music-composition/page';
import AIFitnessCoachPage from './app/ai-fitness-coach/page';
import AIInventoryManagerPage from './app/ai-inventory-manager/page';
import AIHRAssistantPage from './app/ai-hr-assistant/page';
import AIFinancialAdvisorPage from './app/ai-financial-advisor/page';
import AILegalAssistantPage from './app/ai-legal-assistant/page';

// IT Service Pages
import CloudMigrationPage from './app/cloud-migration/page';
import ITConsultingPage from './app/it-consulting/page';

// 404 Page
import NotFoundPage from './app/not-found';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
        
        {/* AI Service Pages */}
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
        <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
        <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
        <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
        <Route path="/ai-fashion-design" element={<AIFashionDesignPage />} />
        <Route path="/ai-music-composition" element={<AIMusicCompositionPage />} />
        <Route path="/ai-fitness-coach" element={<AIFitnessCoachPage />} />
        <Route path="/ai-inventory-manager" element={<AIInventoryManagerPage />} />
        <Route path="/ai-hr-assistant" element={<AIHRAssistantPage />} />
        <Route path="/ai-financial-advisor" element={<AIFinancialAdvisorPage />} />
        <Route path="/ai-legal-assistant" element={<AILegalAssistantPage />} />
        
        {/* IT Service Pages */}
        <Route path="/cloud-migration" element={<CloudMigrationPage />} />
        <Route path="/it-consulting" element={<ITConsultingPage />} />
        
        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;