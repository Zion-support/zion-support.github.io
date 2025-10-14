'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/EnhancedSEOHead';
import SkipLink from './app/components/EnhancedSkipLink';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './app/hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/EnhancedAnalytics';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import ServiceWorker from './app/components/ServiceWorker';
import EnhancedErrorBoundary from './app/components/EnhancedErrorBoundary';
// Structured data for SEO - moved to SEOHead component
// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PartnersPage = React.lazy(() => import('./app/partners/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const FAQPage = React.lazy(() => import('./app/faq/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <React.Fragment>{children}</React.Fragment>;
};
// Main App Component
const App: React.FC = () => {
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/AboutPage';
import ServicesPage from './app/pages/ServicesPage';
import ContactPage from './app/pages/ContactPage';
import NotFoundPage from './app/404';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900">
            <Navigation />
            <main className="relative z-10" id="main-content" role="main">
              <ErrorBoundary>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />
                  <Route path="/ai-solutions" element={<AISolutionsPage />} />
                  <Route path="/it-solutions" element={<ITSolutionsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/tutorials" element={<TutorialsPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/solutions" element={<SolutionsPage />} />
                  
                  {/* Service Pages */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={
                    <div className="min-h-screen flex items-center justify-center bg-slate-900">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                        <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
                        <a href="/" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                          Go Home
                        </a>
                      </div>
                    </div>
                  } />
                </Routes>
              </ErrorBoundary>
            </main>
            <Footer />
            <PerformanceMonitor />
            <AccessibilityEnhancer />
          </div>
        </Router>

const App: React.FC = memo(() => {
  return (
    <EnhancedErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <SkipLink />
        <ServiceWorker />
        <Router>
          <AppWithPerformanceMonitoring>
            <AnalyticsProvider>
              <PerformanceOptimizer>
                <EnhancedAccessibility>
                  <AccessibilityEnhancer>
                    <PerformanceMonitor />
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                      <Navigation />
                      <Breadcrumb />
                      <main id="main-content" className="flex-1" tabIndex={-1}>
                        <Suspense fallback={<PageLoader />}>
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/partners" element={<PartnersPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/faq" element={<FAQPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/consultation" element={<ConsultationPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/ai-services" element={<AiServicesPage />} />
                            <Route path="/it-services" element={<ItServicesPage />} />
                          </Routes>
                        </Suspense>
                      </main>
                      <Footer />
                    </div>
                  </AccessibilityEnhancer>
                </EnhancedAccessibility>
              </PerformanceOptimizer>
            </AnalyticsProvider>
          </AppWithPerformanceMonitoring>
        </Router>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/ai-services" element={<AIServicesPage />} />
                        <Route path="/tutorials" element={<TutorialsPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/cookies" element={<CookiesPage />} />
                        <Route path="/sitemap" element={<SitemapPage />} />
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                        <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                        <Route path="/consultation" element={<ConsultationPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        
                        {/* Service Pages */}
                        <Route path="/micro-saas" element={<MicroSaasPage />} />
                        <Route path="/it-services" element={<ItServicesPage />} />
                        <Route path="/cloud-services" element={<CloudServicesPage />} />
                        <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                        <Route path="/cybersecurity" element={<CybersecurityPage />} />
                        <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                        <Route path="/custom-development" element={<CustomDevelopmentPage />} />
                        <Route path="/web-development" element={<WebDevelopmentPage />} />
                        <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                        <Route path="/database-management" element={<DatabaseManagementPage />} />
                        
                        {/* 5G Solutions */}
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                        <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                        <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                        <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
                        <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                        <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                        <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                        
                        {/* AI Services */}
                        <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                        <Route path="/ai-automation" element={<AiAutomationPage />} />
                        <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                        <Route path="/ai-customer-support" element={<AiCustomerServicePage />} />
                        <Route path="/ai-marketing-automation" element={<AiMarketingAutomationPage />} />
                        <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                        
                        {/* New AI Services */}
                        <Route path="/ai-quantum-computing" element={<AiQuantumComputingPage />} />
                        <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} />
                        <Route path="/ai-powered-devops" element={<AiPoweredDevOpsPage />} />
                        
                        {/* Micro SAAS */}
                        <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                        <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                        <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                        <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                        
                        {/* New Micro SAAS Services */}
                        <Route path="/zion-ai-video-generator" element={<ZionAiVideoGeneratorPage />} />
                        <Route path="/zion-ai-customer-insights" element={<ZionAiCustomerInsightsPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                </div>
              </Router>
            </AccessibilityEnhancer>
          </PerformanceOptimizer>
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

App.displayName = 'App';

export default App;