import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';

// Page Components
import HomePage from './app/page';
import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';
import ServicesPage from './app/pages/ServicesPage';
import BlogPage from './app/pages/BlogPage';
import TutorialsPage from './app/pages/TutorialsPage';
import DemoPage from './app/pages/DemoPage';
import SupportPage from './app/pages/SupportPage';
import PrivacyPage from './app/pages/PrivacyPage';
import TermsPage from './app/pages/TermsPage';
import PricingPage from './app/pages/PricingPage';
import SolutionsPage from './app/pages/SolutionsPage';
import MicroSaaSSolutionsPage from './app/micro-saas-solutions/page';
import AISolutionsPage from './app/ai-solutions/page';
import ITSolutionsPage from './app/it-solutions/page';

// Service Pages
import AIServicesPage from './app/ai-services/page';
import ITServicesPage from './app/it-services/page';
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import DigitalTransformationPage from './app/digital-transformation/page';
import CaseStudiesPage from './app/case-studies/page';
import CareersPage from './app/careers/page';

// Additional Pages
import CybersecurityPage from './app/cybersecurity/page';
import CloudSolutionsPage from './app/cloud-services/page';
import MicroSaaSPage from './app/micro-saas/page';
import FiveGSolutionsPage from './app/5g-solutions/page';
import TeamPage from './app/team/page';
import DocumentationPage from './app/docs/page';

// Lazy load heavy components
const LazyHomePage = React.lazy(() => import('./app/page'));
const LazyAboutPage = React.lazy(() => import('./app/pages/AboutPage'));
const LazyContactPage = React.lazy(() => import('./app/pages/ContactPage'));
const LazyServicesPage = React.lazy(() => import('./app/pages/ServicesPage'));
const LazyBlogPage = React.lazy(() => import('./app/pages/BlogPage'));
const LazyTutorialsPage = React.lazy(() => import('./app/pages/TutorialsPage'));
const LazyDemoPage = React.lazy(() => import('./app/pages/DemoPage'));
const LazySupportPage = React.lazy(() => import('./app/pages/SupportPage'));
const LazyPrivacyPage = React.lazy(() => import('./app/pages/PrivacyPage'));
const LazyTermsPage = React.lazy(() => import('./app/pages/TermsPage'));
const LazyPricingPage = React.lazy(() => import('./app/pages/PricingPage'));
const LazySolutionsPage = React.lazy(() => import('./app/pages/SolutionsPage'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer>
            <div className="min-h-screen bg-slate-900 text-white">
              <Navigation />
              <Sidebar />
              <Header />
              
              <main className="flex-1">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<LazyHomePage />} />
                    <Route path="/about" element={<LazyAboutPage />} />
                    <Route path="/contact" element={<LazyContactPage />} />
                    <Route path="/services" element={<LazyServicesPage />} />
                    <Route path="/blog" element={<LazyBlogPage />} />
                    <Route path="/tutorials" element={<LazyTutorialsPage />} />
                    <Route path="/demo" element={<LazyDemoPage />} />
                    <Route path="/support" element={<LazySupportPage />} />
                    <Route path="/privacy" element={<LazyPrivacyPage />} />
                    <Route path="/terms" element={<LazyTermsPage />} />
                    <Route path="/pricing" element={<LazyPricingPage />} />
                    <Route path="/solutions" element={<LazySolutionsPage />} />
                    
                    {/* Service Category Pages */}
                    <Route path="/ai-solutions" element={<AISolutionsPage />} />
                    <Route path="/it-solutions" element={<ITSolutionsPage />} />
                    <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />
                    <Route path="/micro-saas" element={<MicroSaaSPage />} />
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/docs" element={<DocumentationPage />} />
                    
                    {/* Service Pages */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/cybersecurity" element={<CybersecurityPage />} />
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/cloud-services" element={<CloudSolutionsPage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    
                    {/* AI Service Pages */}
                    <Route path="/ai-3d-generation" element={<React.lazy(() => import('./app/ai-3d-generation/page'))} />}
                    <Route path="/ai-analytics-dashboard-pro" element={<React.lazy(() => import('./app/ai-analytics-dashboard-pro/page'))} />}
                    <Route path="/ai-automation-platform" element={<React.lazy(() => import('./app/ai-automation-platform/page'))} />}
                    <Route path="/ai-customer-sentiment-tracker" element={<React.lazy(() => import('./app/ai-customer-sentiment-tracker/page'))} />}
                    <Route path="/ai-customer-support-chatbot" element={<React.lazy(() => import('./app/ai-customer-support-chatbot/page'))} />}
                    <Route path="/ai-ecommerce-optimizer-pro" element={<React.lazy(() => import('./app/ai-ecommerce-optimizer-pro/page'))} />}
                    <Route path="/ai-email-assistant" element={<React.lazy(() => import('./app/ai-email-assistant/page'))} />}
                    <Route path="/ai-email-marketing-automation" element={<React.lazy(() => import('./app/ai-email-marketing-automation/page'))} />}
                    <Route path="/ai-expense-tracker" element={<React.lazy(() => import('./app/ai-expense-tracker/page'))} />}
                    <Route path="/ai-financial-analytics-pro" element={<React.lazy(() => import('./app/ai-financial-analytics-pro/page'))} />}
                    <Route path="/ai-healthcare-diagnostics" element={<React.lazy(() => import('./app/ai-healthcare-diagnostics/page'))} />}
                    <Route path="/ai-marketing-automation" element={<React.lazy(() => import('./app/ai-marketing-automation/page'))} />}
                    <Route path="/ai-personalized-learning" element={<React.lazy(() => import('./app/ai-personalized-learning/page'))} />}
                    <Route path="/ai-powered-devops" element={<React.lazy(() => import('./app/ai-powered-devops/page'))} />}
                    <Route path="/ai-powered-email-analyzer" element={<React.lazy(() => import('./app/ai-powered-email-analyzer/page'))} />}
                    <Route path="/ai-project-management-pro" element={<React.lazy(() => import('./app/ai-project-management-pro/page'))} />}
                    <Route path="/ai-quantum-computing" element={<React.lazy(() => import('./app/ai-quantum-computing/page'))} />}
                    <Route path="/ai-smart-scheduler" element={<React.lazy(() => import('./app/ai-smart-scheduler/page'))} />}
                    <Route path="/ai-social-media-manager" element={<React.lazy(() => import('./app/ai-social-media-manager/page'))} />}
                    <Route path="/ai-supply-chain-optimizer" element={<React.lazy(() => import('./app/ai-supply-chain-optimizer/page'))} />}
                    <Route path="/ai-translation-service" element={<React.lazy(() => import('./app/ai-translation-service/page'))} />}
                    
                    {/* Zion Service Pages */}
                    <Route path="/zion-ai-crm-pro" element={<React.lazy(() => import('./app/zion-ai-crm-pro/page'))} />}
                    <Route path="/zion-ai-customer-insights" element={<React.lazy(() => import('./app/zion-ai-customer-insights/page'))} />}
                    <Route path="/zion-ai-invoice-generator" element={<React.lazy(() => import('./app/zion-ai-invoice-generator/page'))} />}
                    <Route path="/zion-ai-marketing-automation-pro" element={<React.lazy(() => import('./app/zion-ai-marketing-automation-pro/page'))} />}
                    <Route path="/zion-ai-project-manager-pro" element={<React.lazy(() => import('./app/zion-ai-project-manager-pro/page'))} />}
                    <Route path="/zion-ai-video-generator" element={<React.lazy(() => import('./app/zion-ai-video-generator/page'))} />}
                    <Route path="/zion-analytics-pro" element={<React.lazy(() => import('./app/zion-analytics-pro/page'))} />}
                    <Route path="/zion-cloud-vault" element={<React.lazy(() => import('./app/zion-cloud-vault/page'))} />}
                    <Route path="/zion-security-shield" element={<React.lazy(() => import('./app/zion-security-shield/page'))} />}
                    
                    {/* Other Service Pages */}
                    <Route path="/blockchain-web3" element={<React.lazy(() => import('./app/blockchain-web3/page'))} />}
                    <Route path="/cloud-infrastructure-management" element={<React.lazy(() => import('./app/cloud-infrastructure-management/page'))} />}
                    <Route path="/cloud-migration-pro" element={<React.lazy(() => import('./app/cloud-migration-pro/page'))} />}
                    <Route path="/community" element={<React.lazy(() => import('./app/community/page'))} />}
                    <Route path="/compliance" element={<React.lazy(() => import('./app/compliance/page'))} />}
                    <Route path="/consultation" element={<React.lazy(() => import('./app/consultation/page'))} />}
                    <Route path="/custom-development" element={<React.lazy(() => import('./app/custom-development/page'))} />}
                    <Route path="/customer-relationship-manager" element={<React.lazy(() => import('./app/customer-relationship-manager/page'))} />}
                    <Route path="/devops-services" element={<React.lazy(() => import('./app/devops-services/page'))} />}
                    <Route path="/email-marketing-platform" element={<React.lazy(() => import('./app/email-marketing-platform/page'))} />}
                    <Route path="/employee-time-tracker" element={<React.lazy(() => import('./app/employee-time-tracker/page'))} />}
                    <Route path="/financial-reporting-tool" element={<React.lazy(() => import('./app/financial-reporting-tool/page'))} />}
                    <Route path="/inventory-management-system" element={<React.lazy(() => import('./app/inventory-management-system/page'))} />}
                    <Route path="/it-solutions" element={<React.lazy(() => import('./app/it-solutions/page'))} />}
                    <Route path="/partners" element={<React.lazy(() => import('./app/partners/page'))} />}
                    <Route path="/press" element={<React.lazy(() => import('./app/press/page'))} />}
                    <Route path="/project-management-tool" element={<React.lazy(() => import('./app/project-management-tool/page'))} />}
                    <Route path="/smart-expense-categorizer" element={<React.lazy(() => import('./app/smart-expense-categorizer/page'))} />}
                    <Route path="/smart-inventory-optimizer" element={<React.lazy(() => import('./app/smart-inventory-optimizer/page'))} />}
                    <Route path="/social-media-scheduler" element={<React.lazy(() => import('./app/social-media-scheduler/page'))} />}
                    <Route path="/software-development" element={<React.lazy(() => import('./app/software-development/page'))} />}
                    <Route path="/task-automation-workflow" element={<React.lazy(() => import('./app/task-automation-workflow/page'))} />}
                    <Route path="/website-analytics-tool" element={<React.lazy(() => import('./app/website-analytics-tool/page'))} />}
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
            </div>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;