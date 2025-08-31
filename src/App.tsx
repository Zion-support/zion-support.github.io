import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';

// Performance & Optimization Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
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

// Layout Components
import ModernLayout from './components/layout/ModernLayout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
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

// Core pages
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Services = createLazyComponent(() => import('./pages/Services'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const Solutions = createLazyComponent(() => import('./pages/Solutions'));
const Leadership = createLazyComponent(() => import('./pages/Leadership'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const News = createLazyComponent(() => import('./pages/News'));
const Events = createLazyComponent(() => import('./pages/Events'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Help = createLazyComponent(() => import('./pages/Help'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Docs = createLazyComponent(() => import('./pages/Documentation'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const Training = createLazyComponent(() => import('./pages/Training'));
const ResearchDevelopment = createLazyComponent(() => import('./pages/ResearchDevelopment'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));

// New AI Services 2025
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/AI-Cybersecurity-Platform'));
const AIHealthcare = createLazyComponent(() => import('./pages/services/AI-Healthcare-Platform'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Hybrid-Platform'));

// New Innovative Services 2025 - Combined from both versions
const AIEnterpriseAutomationPlatform = createLazyComponent(() => import('./pages/services/ai-enterprise-automation-platform'));
const AIDataAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-data-analytics-platform'));
const ITInfrastructureManagement = createLazyComponent(() => import('./pages/services/it-infrastructure-management'));
const MicroSaaSSolutionsComprehensive = createLazyComponent(() => import('./pages/services/micro-saas-solutions-comprehensive'));

// New Innovative AI Services 2025 - From remote version
const AIQuantumNeuralNetworkPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Neural-Network-Platform'));
const AIAutonomousBusinessOperationsPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-Business-Operations-Platform'));
const AICustomerExperienceAnalyticsPlatform = createLazyComponent(() => import('./pages/services/AI-Customer-Experience-Analytics-Platform'));

// Solution pages
const HealthcareSolutions = createLazyComponent(() => import('./pages/solutions/Healthcare'));
const FinancialSolutions = createLazyComponent(() => import('./pages/solutions/FinancialSolutions'));
const ManufacturingSolutions = createLazyComponent(() => import('./pages/solutions/ManufacturingSolutions'));
const GovernmentSolutions = createLazyComponent(() => import('./pages/solutions/GovernmentSolutions'));
const RetailSolutions = createLazyComponent(() => import('./pages/solutions/RetailSolutions'));
const QuantumEdgeComputing = createLazyComponent(() => import('./pages/solutions/QuantumEdgeComputing'));
const AIAutonomousBusiness = createLazyComponent(() => import('./pages/solutions/AIAutonomousBusiness'));
const BlockchainWeb3 = createLazyComponent(() => import('./pages/solutions/BlockchainWeb3'));
const IoTEdgeComputing = createLazyComponent(() => import('./pages/solutions/IoTEdgeComputing'));
const SpaceTech = createLazyComponent(() => import('./pages/solutions/SpaceTech'));

// Showcase pages
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));
const InnovativeAIServicesShowcase2025 = createLazyComponent(() => import('./pages/InnovativeAIServicesShowcase2025'));

// Legal and Policy Pages
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Accessibility = createLazyComponent(() => import('./pages/Accessibility'));
const Security = createLazyComponent(() => import('./pages/Security'));
const Compliance = createLazyComponent(() => import('./pages/Compliance'));

// Additional pages from main branch
const Enterprise = createLazyComponent(() => import('./pages/Enterprise'));
const IndustrySolutions = createLazyComponent(() => import('./pages/IndustrySolutions'));
const DigitalTransformation = createLazyComponent(() => import('./pages/DigitalTransformation'));
const CloudSolutions = createLazyComponent(() => import('./pages/CloudSolutions'));
const EmergingTech = createLazyComponent(() => import('./pages/EmergingTech'));

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
                    <Route path="/ai-services" element={<ModernLayout><AIServices /></ModernLayout>} />
                    <Route path="/ai-solutions" element={<ModernLayout><AISolutions /></ModernLayout>} />
                    <Route path="/it-services" element={<ModernLayout><ITServices /></ModernLayout>} />
                    <Route path="/micro-saas" element={<ModernLayout><MicroSaaS /></ModernLayout>} />
                    <Route path="/solutions" element={<ModernLayout><Solutions /></ModernLayout>} />
                    <Route path="/leadership" element={<ModernLayout><Leadership /></ModernLayout>} />
                    <Route path="/news" element={<ModernLayout><News /></ModernLayout>} />
                    <Route path="/partners" element={<ModernLayout><Partners /></ModernLayout>} />
                    <Route path="/help" element={<ModernLayout><Help /></ModernLayout>} />
                    <Route path="/pricing" element={<ModernLayout><Pricing /></ModernLayout>} />
                    <Route path="/blog" element={<ModernLayout><Blog /></ModernLayout>} />
                    <Route path="/docs" element={<ModernLayout><Docs /></ModernLayout>} />
                    <Route path="/white-papers" element={<ModernLayout><WhitePapers /></ModernLayout>} />
                    <Route path="/webinars" element={<ModernLayout><Webinars /></ModernLayout>} />
                    <Route path="/training" element={<ModernLayout><Training /></ModernLayout>} />
                    <Route path="/research-development" element={<ModernLayout><ResearchDevelopment /></ModernLayout>} />
                    <Route path="/careers" element={<ModernLayout><Careers /></ModernLayout>} />
                    <Route path="/events" element={<ModernLayout><Events /></ModernLayout>} />
                    <Route path="/case-studies" element={<ModernLayout><CaseStudies /></ModernLayout>} />

                    {/* New AI Services 2025 */}
                    <Route path="/services/ai-supply-chain-optimization" element={<ModernLayout><AISupplyChainOptimization /></ModernLayout>} />
                    <Route path="/services/ai-cybersecurity-platform" element={<ModernLayout><AICybersecurity /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-platform" element={<ModernLayout><AIHealthcare /></ModernLayout>} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<ModernLayout><AIQuantumHybridPlatform /></ModernLayout>} />

                    {/* New Innovative Services 2025 - Combined from both versions */}
                    <Route path="/services/ai-enterprise-automation-platform" element={<AIEnterpriseAutomationPlatform />} />
                    <Route path="/services/ai-data-analytics-platform" element={<AIDataAnalyticsPlatform />} />
                    <Route path="/services/it-infrastructure-management" element={<ITInfrastructureManagement />} />
                    <Route path="/services/micro-saas-solutions-comprehensive" element={<MicroSaaSSolutionsComprehensive />} />

                    {/* New Innovative AI Services 2025 - From remote version */}
                    <Route path="/services/ai-quantum-neural-network-platform" element={<AIQuantumNeuralNetworkPlatform />} />
                    <Route path="/services/ai-autonomous-business-operations-platform" element={<AIAutonomousBusinessOperationsPlatform />} />
                    <Route path="/services/ai-customer-experience-analytics-platform" element={<AICustomerExperienceAnalyticsPlatform />} />

                    {/* Solution Routes */}
                    <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
                    <Route path="/solutions/financial" element={<FinancialSolutions />} />
                    <Route path="/solutions/manufacturing" element={<ManufacturingSolutions />} />
                    <Route path="/solutions/government" element={<GovernmentSolutions />} />
                    <Route path="/solutions/retail" element={<RetailSolutions />} />
                    <Route path="/solutions/quantum-edge-computing" element={<QuantumEdgeComputing />} />
                    <Route path="/solutions/ai-autonomous-business" element={<AIAutonomousBusiness />} />
                    <Route path="/solutions/blockchain-web3" element={<BlockchainWeb3 />} />
                    <Route path="/solutions/iot-edge-computing" element={<IoTEdgeComputing />} />
                    <Route path="/solutions/space-tech" element={<SpaceTech />} />

                    {/* Showcase Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ModernLayout><ComprehensiveServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-ai-services-showcase-2025" element={<ModernLayout><InnovativeAIServicesShowcase2025 /></ModernLayout>} />

                    {/* Legal and Policy Pages */}
                    <Route path="/privacy" element={<ModernLayout><Privacy /></ModernLayout>} />
                    <Route path="/terms" element={<ModernLayout><Terms /></ModernLayout>} />
                    <Route path="/cookies" element={<ModernLayout><Cookies /></ModernLayout>} />
                    <Route path="/accessibility" element={<ModernLayout><Accessibility /></ModernLayout>} />
                    <Route path="/security" element={<ModernLayout><Security /></ModernLayout>} />
                    <Route path="/compliance" element={<ModernLayout><Compliance /></ModernLayout>} />

                    {/* New pages we created */}
                    <Route path="/enterprise" element={<Enterprise />} />
                    <Route path="/industry-solutions" element={<IndustrySolutions />} />
                    <Route path="/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/cloud-solutions" element={<CloudSolutions />} />
                    <Route path="/emerging-tech" element={<EmergingTech />} />

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

            {/* Footer - Using AppFooter for enhanced features */}
            <AppFooter />

            {/* Enhanced Performance Optimizer */}
            <PerformanceOptimizer enabled={true} />

            {/* Enhanced Accessibility Enhancer */}
            <EnhancedAccessibilityEnhancer enabled={true} />

            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} showMetrics={true} />

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

            {/* Floating Action Button */}
            <FloatingActionButton enabled={true} />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
