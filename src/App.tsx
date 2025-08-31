import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';

// Layout Components
import { Header } from './components/header/Header';
import { Footer } from './components/layout/Footer';

// Enhanced Components
import { EnhancedAccessibilityEnhancer } from './components/EnhancedAccessibilityEnhancer';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { AdvancedAnalyticsDashboard } from './components/AdvancedAnalyticsDashboard';
import { AIContentOptimizer } from './components/AIContentOptimizer';
import { SecurityMonitoringSystem } from './components/SecurityMonitoringSystem';
import { UserExperienceOptimizer } from './components/UserExperienceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { EnhancedLoadingSpinner } from './components/EnhancedLoadingSpinner';
import { EnhancedNavigation } from './components/ui/EnhancedNavigation';
import { EnhancedFooter } from './components/ui/EnhancedFooter';
import { FloatingActionButton } from './components/ui/FloatingActionButton';

// Layout Components
import ModernLayout from './components/layout/ModernLayout';
import { AppFooter } from './components/layout/AppFooter';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Core pages that actually exist
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/about'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Solutions = createLazyComponent(() => import('./pages/Solutions'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Research = createLazyComponent(() => import('./pages/Research'));
const ResearchDevelopment = createLazyComponent(() => import('./pages/ResearchDevelopment'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const TermsOfService = createLazyComponent(() => import('./pages/TermsOfService'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSAASPage'));

// Service pages that actually exist
const AICustomerSuccessAutomation = createLazyComponent(() => import('./pages/services/ai-customer-success-automation'));
const AISupplyChainOptimizationEnhanced = createLazyComponent(() => import('./pages/services/ai-supply-chain-optimization-enhanced'));
const AIFinancialRiskManagementEnhanced = createLazyComponent(() => import('./pages/services/ai-financial-risk-management-enhanced'));
const AIHealthcareAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-healthcare-analytics-platform'));
const AILegalDocumentAutomationPlatform = createLazyComponent(() => import('./pages/services/ai-legal-document-automation-platform'));
const AIMentalHealthSupportPlatform = createLazyComponent(() => import('./pages/services/ai-mental-health-support-platform'));
const AISmartHomeEnergyManagementPlatform = createLazyComponent(() => import('./pages/services/ai-smart-home-energy-management-platform'));
const AIAutonomousLogisticsPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-logistics-platform'));
const AIPoweredSEO = createLazyComponent(() => import('./pages/services/ai-powered-seo'));
const QuantumEdgeComputingSolutions = createLazyComponent(() => import('./pages/services/quantum-edge-computing-solutions'));
const AISpaceTechnologyPlatform = createLazyComponent(() => import('./pages/services/ai-space-technology-platform'));
const AICarbonFootprintManagementPlatform = createLazyComponent(() => import('./pages/services/ai-carbon-footprint-management-platform'));
const AIAutonomousManufacturingPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-manufacturing-platform'));
const AIEnterpriseResourcePlanning = createLazyComponent(() => import('./pages/services/ai-enterprise-resource-planning'));
const AIAutonomousBusinessOperationsPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-business-operations-platform'));
const AICustomerExperienceAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-customer-experience-analytics-platform'));

// New Innovative AI Services 2026
const AIAutonomousFinancialAdvisor = createLazyComponent(() => import('./pages/services/ai-autonomous-research-assistant'));
const AICybersecurityThreatIntelligencePlatform = createLazyComponent(() => import('./pages/services/ai-cybersecurity-threat-intelligence'));
const AIHealthcareDiagnosticsPlatform = createLazyComponent(() => import('./pages/services/ai-healthcare-diagnostics-platform'));
const AISupplyChainOptimizationPlatform = createLazyComponent(() => import('./pages/services/ai-supply-chain-optimization-platform'));
const AIQuantumComputingAsAServicePlatform = createLazyComponent(() => import('./pages/services/ai-quantum-computing-solutions'));

// Comprehensive Services Showcase 2026
const ComprehensiveServicesShowcase2026 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2026'));

// Showcase pages that exist
const ComprehensivePricingGuide2025 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2025'));
const InnovativeServicesHub = createLazyComponent(() => import('./pages/InnovativeServicesHub'));
const NewInnovativeServicesShowcase2025 = createLazyComponent(() => import('./pages/NewInnovativeServicesShowcase2025'));
const RevolutionaryServicesShowcase2025 = createLazyComponent(() => import('./pages/RevolutionaryServicesShowcase2025'));
const UltimateServicesShowcase2025 = createLazyComponent(() => import('./pages/UltimateServicesShowcase2025'));

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
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
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
            {/* Header */}
            <Header />
            
            {/* Skip Link for Accessibility */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            
            <main id="main-content" className="flex-1 pt-20">
              <Suspense fallback={<EnhancedLoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    {/* Core Routes */}
                    <Route
                      path="/"
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ModernLayout showSidebar={false}>
                            <Home />
                          </ModernLayout>
                        </motion.div>
                      }
                    />
                    
                    {/* Main Pages with Sidebar */}
                    <Route path="/about" element={<ModernLayout><About /></ModernLayout>} />
                    <Route path="/contact" element={<ModernLayout><Contact /></ModernLayout>} />
                    <Route path="/services" element={<ModernLayout><Services /></ModernLayout>} />
                    <Route path="/solutions" element={<ModernLayout><Solutions /></ModernLayout>} />
                    <Route path="/training" element={<ModernLayout><Training /></ModernLayout>} />
                    <Route path="/webinars" element={<ModernLayout><Webinars /></ModernLayout>} />
                    <Route path="/white-papers" element={<ModernLayout><WhitePapers /></ModernLayout>} />
                    <Route path="/research" element={<ModernLayout><Research /></ModernLayout>} />
                    <Route path="/research-development" element={<ModernLayout><ResearchDevelopment /></ModernLayout>} />
                    <Route path="/terms" element={<ModernLayout><Terms /></ModernLayout>} />
                    <Route path="/terms-of-service" element={<ModernLayout><TermsOfService /></ModernLayout>} />
                    <Route path="/micro-saas" element={<ModernLayout><MicroSaaS /></ModernLayout>} />

                    {/* Service Routes - Only the ones that exist */}
                    <Route path="/services/ai-customer-success-automation" element={<ModernLayout><AICustomerSuccessAutomation /></ModernLayout>} />
                    <Route path="/services/ai-supply-chain-optimization-enhanced" element={<ModernLayout><AISupplyChainOptimizationEnhanced /></ModernLayout>} />
                    <Route path="/services/ai-financial-risk-management-enhanced" element={<ModernLayout><AIFinancialRiskManagementEnhanced /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<ModernLayout><AIHealthcareAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-legal-document-automation-platform" element={<ModernLayout><AILegalDocumentAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-mental-health-support-platform" element={<ModernLayout><AIMentalHealthSupportPlatform /></ModernLayout>} />
                    <Route path="/services/ai-smart-home-energy-management-platform" element={<ModernLayout><AISmartHomeEnergyManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-logistics-platform" element={<ModernLayout><AIAutonomousLogisticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-powered-seo" element={<ModernLayout><AIPoweredSEO /></ModernLayout>} />
                    <Route path="/services/quantum-edge-computing-solutions" element={<ModernLayout><QuantumEdgeComputingSolutions /></ModernLayout>} />
                    <Route path="/services/ai-space-technology-platform" element={<ModernLayout><AISpaceTechnologyPlatform /></ModernLayout>} />
                    <Route path="/services/ai-carbon-footprint-management-platform" element={<ModernLayout><AICarbonFootprintManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-manufacturing-platform" element={<ModernLayout><AIAutonomousManufacturingPlatform /></ModernLayout>} />
                    <Route path="/services/ai-enterprise-resource-planning" element={<ModernLayout><AIEnterpriseResourcePlanning /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-business-operations-platform" element={<ModernLayout><AIAutonomousBusinessOperationsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-customer-experience-analytics-platform" element={<ModernLayout><AICustomerExperienceAnalyticsPlatform /></ModernLayout>} />

                    {/* New Innovative AI Services 2026 Routes */}
                    <Route path="/services/ai-autonomous-financial-advisor" element={<ModernLayout><AIAutonomousFinancialAdvisor /></ModernLayout>} />
                    <Route path="/services/ai-cybersecurity-threat-intelligence-platform" element={<ModernLayout><AICybersecurityThreatIntelligencePlatform /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-diagnostics-platform" element={<ModernLayout><AIHealthcareDiagnosticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-supply-chain-optimization-platform" element={<ModernLayout><AISupplyChainOptimizationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-quantum-computing-as-a-service-platform" element={<ModernLayout><AIQuantumComputingAsAServicePlatform /></ModernLayout>} />

                    {/* Comprehensive Services Showcase 2026 */}
                    <Route path="/comprehensive-services-showcase-2026" element={<ModernLayout><ComprehensiveServicesShowcase2026 /></ModernLayout>} />

                    {/* Showcase Routes */}
                    <Route path="/comprehensive-pricing-guide-2025" element={<ModernLayout><ComprehensivePricingGuide2025 /></ModernLayout>} />
                    <Route path="/innovative-services-hub" element={<ModernLayout><InnovativeServicesHub /></ModernLayout>} />
                    <Route path="/new-innovative-services-2025" element={<ModernLayout><NewInnovativeServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/revolutionary-services-showcase-2025" element={<ModernLayout><RevolutionaryServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/ultimate-services-showcase-2025" element={<ModernLayout><UltimateServicesShowcase2025 /></ModernLayout>} />

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

            {/* Enhanced Components */}
            <EnhancedAccessibilityEnhancer />
            <AdvancedAnalytics />
            <SmartNotificationSystem />
            <AdvancedAnalyticsDashboard />
            <AIContentOptimizer />
            <SecurityMonitoringSystem />
            <UserExperienceOptimizer />
            <FloatingActionButton />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
