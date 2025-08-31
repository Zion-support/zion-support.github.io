import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

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
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { EnhancedLoadingSpinner } from './components/EnhancedLoadingSpinner';

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

// New AI Services 2025
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/AI-Cybersecurity-Platform'));
const AIHealthcare = createLazyComponent(() => import('./pages/services/AI-Healthcare-Platform'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Hybrid-Platform'));

// Showcase pages
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));
const ComprehensivePricingGuide2025 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2025'));

// New pages we created
const Enterprise = createLazyComponent(() => import('./pages/Enterprise'));
const IndustrySolutions = createLazyComponent(() => import('./pages/IndustrySolutions'));
const DigitalTransformation = createLazyComponent(() => import('./pages/DigitalTransformation'));
const CloudSolutions = createLazyComponent(() => import('./pages/CloudSolutions'));
const EmergingTech = createLazyComponent(() => import('./pages/EmergingTech'));

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div className="text-center max-w-md">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
      <p className="text-gray-400 mb-6">We're sorry, but something unexpected happened. Please try again.</p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Go home
        </button>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Skip Link for Accessibility */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            
            <main id="main-content" className="flex-1">
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
                          <Home />
                        </motion.div>
                      }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />

                    {/* New AI Services 2025 */}
                    <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                    <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurity />} />
                    <Route path="/services/ai-healthcare-platform" element={<AIHealthcare />} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />

                    {/* Showcase Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
                    <Route path="/innovative-services-hub" element={<InnovativeServicesHub />} />
                    <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />

                    {/* New pages we created */}
                    <Route path="/enterprise" element={<Enterprise />} />
                    <Route path="/industry-solutions" element={<IndustrySolutions />} />
                    <Route path="/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/cloud-solutions" element={<CloudSolutions />} />
                    <Route path="/emerging-tech" element={<EmergingTech />} />

                    {/* New Innovative Services Routes */}
                    <Route path="/services/ai-neural-architecture-optimizer" element={<div>AI Neural Architecture Optimizer Service Page</div>} />
                    <Route path="/services/ai-federated-learning-platform" element={<div>AI Federated Learning Platform Service Page</div>} />
                    <Route path="/services/ai-explainable-ai-platform" element={<div>AI Explainable AI Platform Service Page</div>} />
                    <Route path="/services/ai-powered-churn-predictor" element={<div>AI-Powered Churn Predictor Service Page</div>} />
                    <Route path="/services/ai-interview-assessment-platform" element={<div>AI Interview Assessment Platform Service Page</div>} />
                    <Route path="/services/ai-returns-management-saas" element={<div>AI Returns Management SaaS Service Page</div>} />
                    <Route path="/services/ai-powered-seo-platform" element={<div>AI-Powered SEO Platform Service Page</div>} />
                    <Route path="/services/ai-workflow-automation-platform" element={<div>AI Workflow Automation Platform Service Page</div>} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<div>AI-Quantum Hybrid Platform Service Page</div>} />
                    <Route path="/services/ai-space-technology-platform" element={<div>AI Space Technology Platform Service Page</div>} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<div>AI Healthcare Analytics Platform Service Page</div>} />
                    <Route path="/services/ai-financial-trading-platform" element={<div>AI Financial Trading Platform Service Page</div>} />
                    <Route path="/services/ai-marketing-automation-suite" element={<div>AI Marketing Automation Suite Service Page</div>} />
                    <Route path="/services/ai-supply-chain-optimization" element={<div>AI Supply Chain Optimization Service Page</div>} />
                    <Route path="/services/ai-customer-experience-analytics" element={<div>AI Customer Experience Analytics Service Page</div>} />
                    <Route path="/services/ai-project-management-platform" element={<div>AI Project Management Platform Service Page</div>} />
                    <Route path="/services/ai-devops-automation-platform" element={<div>AI DevOps Automation Platform Service Page</div>} />
                    <Route path="/services/ai-iot-edge-computing-platform" element={<div>AI IoT Edge Computing Platform Service Page</div>} />
                    <Route path="/services/smart-contract-risk-scanner" element={<div>Smart Contract Risk Scanner Service Page</div>} />
                    <Route path="/services/vendor-risk-management" element={<div>Vendor Risk Management Platform Service Page</div>} />
                    <Route path="/services/gdpr-cookie-compliance" element={<div>GDPR Cookie Compliance Manager Service Page</div>} />
                    <Route path="/services/ai-cybersecurity-threat-detection" element={<div>AI Cybersecurity Threat Detection Service Page</div>} />
                    <Route path="/services/ai-cybersecurity-suite" element={<div>AI Cybersecurity Suite Service Page</div>} />
                    <Route path="/services/quantum-computing-as-a-service" element={<div>Quantum Computing as a Service Service Page</div>} />
                    <Route path="/services/edge-computing-platform" element={<div>Edge Computing Platform Service Page</div>} />
                    <Route path="/services/ai-healthcare-platform" element={<div>AI Healthcare Platform Service Page</div>} />
                    <Route path="/services/ai-financial-analytics" element={<div>AI Financial Analytics Platform Service Page</div>} />
                    <Route path="/services/ai-content-optimizer-pro" element={<div>AI Content Optimizer Pro Service Page</div>} />
                    <Route path="/services/ai-supply-chain-platform" element={<div>AI Supply Chain Platform Service Page</div>} />
                    <Route path="/services/ai-customer-support-automation" element={<div>AI Customer Support Automation Service Page</div>} />
                    <Route path="/services/ai-project-management" element={<div>AI Project Management Service Page</div>} />
                    <Route path="/services/ai-devops-automation" element={<div>AI DevOps Automation Service Page</div>} />
                    <Route path="/services/ai-iot-edge-computing" element={<div>AI IoT Edge Computing Service Page</div>} />
                    <Route path="/services/ai-business-intelligence-suite" element={<div>AI Business Intelligence Suite Service Page</div>} />
                    <Route path="/services/ai-code-review-security" element={<div>AI Code Review & Security Scanner Service Page</div>} />
                    <Route path="/services/ai-financial-trading-platform" element={<div>AI Financial Trading Platform Service Page</div>} />
                    <Route path="/services/employee-scheduling-saas" element={<div>AI Employee Scheduling Platform Service Page</div>} />
                    <Route path="/services/soc2-compliance-tracker" element={<div>SOC2 Compliance Tracker Service Page</div>} />
                    <Route path="/services/uptime-sla-monitor" element={<div>Uptime SLA Monitor Service Page</div>} />
                    <Route path="/services/ai-devops-automation" element={<div>AI DevOps Automation Platform Service Page</div>} />
                    <Route path="/services/ai-iot-edge-computing" element={<div>AI IoT Edge Computing Platform Service Page</div>} />
                    <Route path="/services/quantum-ai-platform" element={<div>Quantum AI Hybrid Platform Service Page</div>} />
                    <Route path="/services/space-tech-solutions" element={<div>Space Technology Solutions Service Page</div>} />
                    <Route path="/services/ai-healthcare-analytics" element={<div>AI Healthcare Analytics Platform Service Page</div>} />
                    <Route path="/services/green-it-solutions" element={<div>Green IT Solutions Platform Service Page</div>} />
                    <Route path="/services/digital-transformation-hub" element={<div>Digital Transformation Hub Service Page</div>} />
                    <Route path="/services/incident-response-platform" element={<div>AI Incident Response Platform Service Page</div>} />
                    <Route path="/services/finops-cloud-optimizer" element={<div>FinOps Cloud Cost Optimizer Service Page</div>} />
                    <Route path="/services/ai-marketing-automation-suite" element={<div>AI Marketing Automation Suite Service Page</div>} />
                    <Route path="/services/ai-supply-chain-optimization" element={<div>AI Supply Chain Optimization Service Page</div>} />
                    <Route path="/services/ai-customer-experience-analytics" element={<div>AI Customer Experience Analytics Service Page</div>} />

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
