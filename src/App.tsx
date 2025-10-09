import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import ServicesPage from './services/page';
import BlogPage from './blog/page';
import CaseStudiesPage from './case-studies/page';
import NotFoundPage from './not-found';

// AI Services Pages
import AIProjectManagerPage from './ai-project-manager/page';
import AICustomerSupportBotPage from './ai-customer-support-bot/page';
import AIAutomationPage from './ai-automation/page';
import AIMLPlatformPage from './ai-ml-platform/page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
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

export default App;