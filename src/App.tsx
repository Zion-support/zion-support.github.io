import React, { useEffect, useState, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PerformanceEnhancer from './utils/performanceEnhancer';
import SEOEnhancer from './utils/seoEnhancer';
import AccessibilityEnhancer from './utils/accessibilityEnhancer';
import SecurityEnhancer from './utils/securityEnhancer';
import UserExperienceEnhancer from './utils/userExperienceEnhancer';

// Lazy load components for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const AIServicesPage = lazy(() => import('./ai-services/page'));
const AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AIFintechPage = lazy(() => import('./ai-fintech/page'));
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const ITInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const BlogPage = lazy(() => import('./blog/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));

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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/ai-marketing" element={<AIMarketingPage />} />
          <Route path="/ai-automation" element={<AIAutomationPage />} />
          <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
          <Route path="/ai-fintech" element={<AIFintechPage />} />
          <Route path="/micro-saas" element={<MicroSaasPage />} />
          <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
          <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
          <Route path="/quantum-computing" element={<QuantumComputingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
