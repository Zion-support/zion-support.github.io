import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app/styles/futuristic.css';
// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';
import SEOOptimizer from './app/components/SEOOptimizer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));

// AI Services Pages
const AIServicesPage = lazy(() => import('./app/ai-services/page'));
const AISolutionsPage = lazy(() => import('./app/ai-solutions/page'));

// IT Services Pages
const ITServicesPage = lazy(() => import('./app/it-services/page'));
const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'));
const DigitalTransformationPage = lazy(() => import('./app/digital-transformation/page'));

// 5G Solutions Pages
const FiveGSolutionsPage = lazy(() => import('./app/5g-solutions/page'));

// Additional AI Services
const AIChatbotBuilderPage = lazy(() => import('./app/ai-chatbot-builder/page'));
const AIAutomationPage = lazy(() => import('./app/ai-automation/page'));

// IT Solutions Pages
const ITSolutionsPage = lazy(() => import('./app/it-solutions/page'));
const CybersecurityPage = lazy(() => import('./app/cybersecurity/page'));
const SolutionsPage = lazy(() => import('./app/solutions/page'));

// 5G Smart City Solutions
const FiveGSmartCitySolutionsPage = lazy(() => import('./app/5g-smart-city-solutions/page'));

// Advanced Security Suite
const AdvancedSecuritySuitePage = lazy(() => import('./app/advanced-security-suite/page'));

// Accessibility Page
const AccessibilityPage = lazy(() => import('./app/accessibility/page'));

// Micro SaaS Services
const MicroSaaSAIEmailMarketingAutomationPage = lazy(() => import('./app/micro-saas/ai-email-marketing-automation/page'));
const MicroSaaSAIExpenseTrackerPage = lazy(() => import('./app/micro-saas/ai-expense-tracker/page'));

// Micro SaaS Services
const MicroSaasServicesAIContentGeneratorPage = lazy(() => import('./app/micro-saas-services/ai-content-generator/page'));

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    PerformanceMonitor({});
  }, []);

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-900 text-white">
            <PerformanceMonitor />
            <Navigation />
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />

                  {/* AI Services */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/ai-solutions" element={<AISolutionsPage />} />
                  <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                  <Route path="/ai-automation" element={<AIAutomationPage />} />

                  {/* IT Services */}
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/it-solutions" element={<ITSolutionsPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                  <Route path="/solutions" element={<SolutionsPage />} />

                  {/* 5G Solutions */}
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />

                  {/* Advanced Security */}
                  <Route path="/advanced-security-suite" element={<AdvancedSecuritySuitePage />} />

                  {/* Accessibility */}
                  <Route path="/accessibility" element={<AccessibilityPage />} />

                  {/* Micro SaaS */}
                  <Route path="/micro-saas/ai-email-marketing-automation" element={<MicroSaaSAIEmailMarketingAutomationPage />} />
                  <Route path="/micro-saas/ai-expense-tracker" element={<MicroSaaSAIExpenseTrackerPage />} />

                  {/* Micro SaaS Services */}
                  <Route path="/micro-saas-services/ai-content-generator" element={<MicroSaasServicesAIContentGeneratorPage />} />

                  {/* 404 Page */}
                  <Route path="*" element={<div className="flex items-center justify-center min-h-screen"><h1 className="text-4xl font-bold">404 - Page Not Found</h1></div>} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
            <Footer />
            <AccessibilityEnhancer>
              <div></div>
            </AccessibilityEnhancer>
            <SEOOptimizer
              title="Zion Tech Group - Advanced AI and IT Solutions"
              description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
              keywords={['AI solutions', 'IT services', 'quantum computing', 'autonomous systems', 'enterprise technology']}
            />
          </div>
        </Router>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
};

export default App;