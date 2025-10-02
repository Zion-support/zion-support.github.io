import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// Core pages (already present in repo)
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import Resources from './pages/Resources';
import Pricing from './pages/Pricing';

// Services (existing)
import AISolutions from './pages/AISolutions';
import ITServices from './pages/ITServices';
import AIMicroSAAS from './pages/AIMicroSAAS';
import CloudDevOps from './pages/services/CloudDevOps';
import AIDataAnalytics from './pages/services/AIDataAnalytics';
import AdvancedCybersecurityAI from './pages/services/AdvancedCybersecurityAI';
import AIWorkflowAutomation from './pages/services/AIWorkflowAutomation';

// Services (newly added in this update)
import AIComplianceMonitor from './pages/services/AIComplianceMonitor';
import SEOSplitTesting from './pages/services/SEOSplitTesting';
import ImageCDNOptimizer from './pages/services/ImageCDNOptimizer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 xl:grid-cols-[18rem_1fr] gap-8">
              <div className="hidden xl:block">
                <Sidebar />
              </div>
              <main className="min-w-0">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/pricing" element={<Pricing />} />

                  {/* Services hub */}
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/ai-services" element={<AISolutions />} />
                  <Route path="/services/it-services" element={<ITServices />} />
                  <Route path="/services/micro-saas" element={<AIMicroSAAS />} />
                  <Route path="/services/cloud" element={<CloudDevOps />} />
                  <Route path="/services/analytics" element={<AIDataAnalytics />} />
                  <Route path="/services/security" element={<AdvancedCybersecurityAI />} />
                  <Route path="/services/automation" element={<AIWorkflowAutomation />} />

                  {/* New micro-SaaS services */}
                  <Route path="/services/ai-compliance-monitor" element={<AIComplianceMonitor />} />
                  <Route path="/services/seo-split-testing" element={<SEOSplitTesting />} />
                  <Route path="/services/image-cdn-optimizer" element={<ImageCDNOptimizer />} />

                  {/* Solutions hub */}
                  <Route path="/solutions" element={<SolutionsPage />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;