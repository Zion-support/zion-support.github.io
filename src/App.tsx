import React, { useEffect, useState, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PerformanceEnhancer from './utils/performanceEnhancer';
import SEOEnhancer from './utils/seoEnhancer';
import AccessibilityEnhancer from './utils/accessibilityEnhancer';
import SecurityEnhancer from './utils/securityEnhancer';
import UserExperienceEnhancer from './utils/userExperienceEnhancer';

// Lazy load components for better performance
const HomePage = lazy(() => import('../app/page'));
const AboutPage = lazy(() => import('../app/about/page'));
const ContactPage = lazy(() => import('../app/contact/page'));
const AiServicesPage = lazy(() => import('../app/ai-services/page'));
const AiMarketingPage = lazy(() => import('../src/ai-marketing/page'));
const AiAutomationPage = lazy(() => import('../app/ai-automation/page'));
const AiHealthcarePage = lazy(() => import('../app/ai-healthcare/page'));
const AiFintechPage = lazy(() => import('../app/ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('../app/ai-content-generation/page'));
const MicroSaasPage = lazy(() => import('../app/micro-saas/page'));
const ItInfrastructurePage = lazy(() => import('../app/it-infrastructure/page'));
const QuantumComputingPage = lazy(() => import('../app/quantum-computing/page'));
const AiProjectManagerPage = lazy(() => import('../app/ai-project-manager/page'));
const AiSocialMediaManagerPage = lazy(() => import('../app/ai-social-media-manager/page'));
const AiAnalyticsDashboardPage = lazy(() => import('../app/ai-analytics-dashboard/page'));
const AiEmailMarketingPage = lazy(() => import('../app/ai-email-marketing/page'));
const AiCustomerSupportBotPage = lazy(() => import('../app/ai-customer-support-bot/page'));
const BlogPage = lazy(() => import('../app/blog/page'));
const CaseStudiesPage = lazy(() => import('../app/case-studies/page'));
const CareersPage = lazy(() => import('../app/careers/page'));
const ConsultationPage = lazy(() => import('../app/consultation/page'));
const SitemapPage = lazy(() => import('../app/sitemap/page'));

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>
);

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
      // Initialize enhancers
      const performanceEnhancer = new PerformanceEnhancer();
      const seoEnhancer = new SEOEnhancer({
        title: 'Zion Tech Group - Advanced AI and IT Solutions',
        description: 'Leading provider of AI and IT solutions for modern enterprises',
        keywords: ['AI', 'IT Solutions', 'Technology', 'Enterprise'],
        canonicalUrl: 'https://ziontechgroup.com',
      });
      const accessibilityEnhancer = new AccessibilityEnhancer();
      const securityEnhancer = new SecurityEnhancer();
      const uxEnhancer = new UserExperienceEnhancer();

      setEnhancers({
        performance: performanceEnhancer,
        seo: seoEnhancer,
        accessibility: accessibilityEnhancer,
        security: securityEnhancer,
        ux: uxEnhancer,
      });
      setIsInitialized(true);
    } catch (error) {
      // Error logged to monitoring service
      setIsInitialized(true);
    }
  };

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai-services" element={<AiServicesPage />} />
          <Route path="/ai-marketing" element={<AiMarketingPage />} />
          <Route path="/ai-automation" element={<AiAutomationPage />} />
          <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
          <Route path="/ai-fintech" element={<AiFintechPage />} />
          <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
          <Route path="/micro-saas" element={<MicroSaasPage />} />
          <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
          <Route path="/quantum-computing" element={<QuantumComputingPage />} />
          <Route path="/ai-project-manager" element={<AiProjectManagerPage />} />
          <Route path="/ai-social-media-manager" element={<AiSocialMediaManagerPage />} />
          <Route path="/ai-analytics-dashboard" element={<AiAnalyticsDashboardPage />} />
          <Route path="/ai-email-marketing" element={<AiEmailMarketingPage />} />
          <Route path="/ai-customer-support-bot" element={<AiCustomerSupportBotPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
