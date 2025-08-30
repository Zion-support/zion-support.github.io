import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

// Core Layout Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { ErrorBoundary } from 'react-error-boundary';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { EnhancedAccessibilityEnhancer } from './components/EnhancedAccessibilityEnhancer';
import { SEO } from './components/SEO';
import FloatingActionButton from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { AdvancedAnalyticsDashboard } from './components/AdvancedAnalyticsDashboard';
import { AIContentOptimizer } from './components/AIContentOptimizer';
import { SecurityMonitoringSystem } from './components/SecurityMonitoringSystem';
import { UserExperienceOptimizer } from './components/UserExperienceOptimizer';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = React.lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const News = createLazyComponent(() => import('./pages/News'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));

// Service pages
const Services = createLazyComponent(() => import('./pages/Services'));
const Services2027 = createLazyComponent(() => import('./pages/InnovativeServices2027'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = createLazyComponent(() => import('./pages/services/MicroSAASSolutions'));
const ComprehensiveServices = createLazyComponent(() => import('./pages/ComprehensiveServices'));

// Additional pages
const Partners = createLazyComponent(() => import('./pages/Partners'));
const HelpCenter = createLazyComponent(() => import('./pages/HelpCenter'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));

// 2025 Innovative Services
const InnovativeServices2025 = createLazyComponent(() => import('./pages/InnovativeServices2025'));

// Sitemap-aligned pages
const AiSolutions = createLazyComponent(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = createLazyComponent(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = createLazyComponent(() => import('./pages/solutions/Healthcare'));

// AI Service pages
const AIFinancialTrading = createLazyComponent(() => import('./pages/services/AIFinancialTrading'));
const AIIoTEdgeComputing = createLazyComponent(() => import('./pages/services/AIIoTEdgeComputing'));

// AI Business Intelligence and Digital Transformation
const AIBusinessIntelligence = createLazyComponent(() => import('./pages/services/AIBusinessIntelligence'));
const DigitalTransformation = createLazyComponent(() => import('./pages/services/DigitalTransformation'));

// 2025 New Innovative Services
const AIESGCompliancePlatform = createLazyComponent(() => import('./pages/services/AIESGCompliancePlatform'));
const AIDigitalTwinPlatform = createLazyComponent(() => import('./pages/services/AIDigitalTwinPlatform'));
const AIEdgeComputingPlatform = createLazyComponent(() => import('./pages/services/AIEdgeComputingPlatform'));

// Additional innovative services
const AIAutonomousResearchAssistant = createLazyComponent(() => import('./pages/services/AIAutonomousResearchAssistant'));

// Showcase pages
const UltimateServicesShowcase2026 = createLazyComponent(() => import('./pages/UltimateServicesShowcase2026'));
const InnovativeServicesShowcase2025 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2025'));

// Additional service components
const ITInfrastructure = createLazyComponent(() => import('./pages/ITInfrastructure'));
const MicroCRM = createLazyComponent(() => import('./pages/MicroCRM'));
const AIMicroSaaSPlatform = createLazyComponent(() => import('./pages/services/ai-micro-saas-platform'));
const QuantumAITradingPlatform = createLazyComponent(() => import('./pages/services/quantum-ai-trading-platform'));
const AICybersecurityPlatform = createLazyComponent(() => import('./pages/services/ai-cybersecurity-platform'));

// Additional Pages
const API = createLazyComponent(() => import('./pages/API'));
const DeveloperPortal = createLazyComponent(() => import('./pages/DeveloperPortal'));

// Comprehensive Services Showcase
const ComprehensiveServicesShowcase2025Page = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));
const ComprehensiveServicesLanding2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesLanding2025'));

// 2031 Cutting-Edge Services
const ZionCuttingEdgeServices2031 = createLazyComponent(() => import('./pages/ZionCuttingEdgeServices2031'));

// Comprehensive Pricing Guide 2031
const ComprehensivePricingGuide2031 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2031'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-zion-slate-light mb-6">We're working on fixing the problem.</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="App">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main id="main-content">
              <Suspense fallback={<LoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    {/* Core Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/solutions" element={<AiSolutions />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/it-services" element={<ITServices />} />

                    {/* 2025 Innovative Services */}
                    <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
                    <Route path="/services2027" element={<Services2027 />} />

                    {/* Service Routes */}
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
                    <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />

                    {/* Sitemap-aligned Routes */}
                    <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
                    <Route path="/solutions/healthcare" element={<SolutionsHealthcare />} />

                    {/* AI Service Routes */}
                    <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                    <Route path="/services/ai-iot-edge-computing" element={<AIIoTEdgeComputing />} />

                    {/* 2025 New Innovative Services */}
                    <Route path="/services/ai-esg-compliance-platform" element={<AIESGCompliancePlatform />} />
                    <Route path="/services/ai-digital-twin-platform" element={<AIDigitalTwinPlatform />} />
                    <Route path="/services/ai-edge-computing-platform" element={<AIEdgeComputingPlatform />} />

                    {/* Additional Service Routes */}
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/micro-crm" element={<MicroCRM />} />

                    {/* New innovative services */}
                    <Route path="/services/ai-micro-saas-platform" element={<AIMicroSaaSPlatform />} />
                    <Route path="/services/quantum-ai-trading-platform" element={<QuantumAITradingPlatform />} />
                    <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} />

                    {/* 2031 Cutting-Edge Services */}
                    <Route path="/zion-cutting-edge-services-2031" element={<ZionCuttingEdgeServices2031 />} />
                    <Route path="/cutting-edge-services-2031" element={<ZionCuttingEdgeServices2031 />} />
                    
                    {/* Comprehensive Pricing Guide 2031 */}
                    <Route path="/comprehensive-pricing-2031" element={<ComprehensivePricingGuide2031 />} />

                    {/* Additional Pages */}
                    <Route path="/api" element={<API />} />
                    <Route path="/developer-portal" element={<DeveloperPortal />} />

                    {/* Showcase Routes */}
                    <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
                    <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} />
                    <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />

                    {/* 404 Page */}
                    <Route
                      path="*"
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
                        >
                          <div className="text-center text-white">
                            <h1 className="text-6xl font-bold mb-4">404</h1>
                            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                            <p className="text-gray-300 mb-8">
                              The page you're looking for doesn't exist or has been moved.
                            </p>
                            <button
                              onClick={() => window.history.back()}
                              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-4"
                            >
                              Go Back
                            </button>
                            <button
                              onClick={() => window.location.href = '/'}
                              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                            >
                              Go Home
                            </button>
                          </div>
                        </motion.div>
                      }
                    />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Action Button */}
            <FloatingActionButton enabled={true} />

            {/* Enhanced Performance Optimizer */}
            <PerformanceOptimizer enabled={true} />

            {/* Enhanced Accessibility Enhancer */}
            <EnhancedAccessibilityEnhancer enabled={true} />

            {/* Smart Notification System */}
            <SmartNotificationSystem enabled={true} />

            {/* Advanced Analytics Dashboard */}
            <AdvancedAnalyticsDashboard enabled={true} />

            {/* AI Content Optimizer */}
            <AIContentOptimizer enabled={true} />

            {/* Security Monitoring System */}
            <SecurityMonitoringSystem enabled={true} />

            {/* User Experience Optimizer */}
            <UserExperienceOptimizer enabled={true} />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;