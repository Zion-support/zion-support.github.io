import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Import pages
import HomePage from './page';
import AboutPage from './about/page';
import PricingPage from './pricing/page';
import ContactPage from './contact/page';
import BlogPage from './blog/page';
import CaseStudiesPage from './case-studies/page';
import CareersPage from './careers/page';
import SupportPage from './support/page';
import ConsultationPage from './consultation/page';
import AccessibilityPage from './accessibility/page';
import PartnersPage from './partners/page';
import MicroSaasPage from './micro-saas/page';
import AiChatbotBuilderPage from './ai-chatbot-builder/page';
import FiveGImplementationPage from './5g-implementation/page';

// AI Services Pages
import AiWorkflowAutomationPage from './ai-workflow-automation/page';
import AiFashionDesignPage from './ai-fashion-design/page';
import AiEmailAssistantPage from './ai-email-assistant/page';
import AiInvoiceGeneratorPage from './ai-invoice-generator/page';
import AiVoiceAssistantPage from './ai-voice-assistant/page';
import AiContentGeneratorPage from './ai-content-generator/page';

// IT Services Pages
import ItServicesPage from './it-services/page';
import DatabaseManagementPage from './database-management/page';
import GlobalItSupportPage from './global-it-support/page';
import ItTrainingPage from './it-training/page';
import CloudSolutionsPage from './cloud-solutions/page';
import CybersecurityPage from './cybersecurity/page';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <AccessibilityEnhancer>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
              <Route path="/5g-implementation" element={<FiveGImplementationPage />} />

              {/* AI Services */}
              <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
              <Route path="/ai-fashion-design" element={<AiFashionDesignPage />} />
              <Route path="/ai-email-assistant" element={<AiEmailAssistantPage />} />
              <Route path="/ai-invoice-generator" element={<AiInvoiceGeneratorPage />} />
              <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
              <Route path="/ai-content-generator" element={<AiContentGeneratorPage />} />

              {/* IT Services */}
              <Route path="/it-services" element={<ItServicesPage />} />
              <Route path="/database-management" element={<DatabaseManagementPage />} />
              <Route path="/global-it-support" element={<GlobalItSupportPage />} />
              <Route path="/it-training" element={<ItTrainingPage />} />
              <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
            </Routes>
          </div>
        </AccessibilityEnhancer>
      </Router>
    </HelmetProvider>
  );
};

export default App;
