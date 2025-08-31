import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';

// Layout Components
import { Header } from './components/header/Header';
import { Footer } from './components/layout/Footer';

// Enhanced Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const ComprehensiveServicesPage = lazy(() => import('./pages/ComprehensiveServicesPage').then(module => ({ default: module.ComprehensiveServicesPage })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.default })));
const Support = lazy(() => import('./pages/Support').then(module => ({ default: module.default })));
const Training = lazy(() => import('./pages/Training').then(module => ({ default: module.default })));
const Helpdesk = lazy(() => import('./pages/Helpdesk').then(module => ({ default: module.default })));
const RevolutionaryServicesPage = lazy(() => import('./pages/RevolutionaryServicesPage').then(module => ({ default: module.RevolutionaryServicesPage })));
const ComprehensiveServicesShowcase2025 = lazy(() => import('./pages/ComprehensiveServicesShowcase2025').then(module => ({ default: module.ComprehensiveServicesShowcase2025 })));

const UltimateServicesShowcase2026 = lazy(() => import('./pages/UltimateServicesShowcase2026').then(module => ({ default: module.UltimateServicesShowcase2026 })));
const ComprehensiveServicesLanding2025 = lazy(() => import('./pages/ComprehensiveServicesLanding2025').then(module => ({ default: module.ComprehensiveServicesLanding2025 })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { EnhancedAccessibilityEnhancer } from './components/EnhancedAccessibilityEnhancer';
import { MobileResponsivenessEnhancer } from './components/MobileResponsivenessEnhancer';
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
    <Suspense fallback={fallback || <div className="flex items-center justify-center min-h-screen">Loading...</div>}>
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
const ResearchDevelopment = createLazyComponent(() => import('./pages/ResearchDevelopment'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));

// New AI Services 2025 - Combined from both versions
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/AI-Cybersecurity-Platform'));
const AIHealthcare = createLazyComponent(() => import('./pages/services/AI-Healthcare-Platform'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Hybrid-Platform'));
const AIAutonomousResearchAssistant = createLazyComponent(() => import('./pages/services/ai-autonomous-research-assistant'));
const AIFinancialTradingPlatform = createLazyComponent(() => import('./pages/services/ai-financial-trading-platform'));
const BlockchainEnterpriseSolutions = createLazyComponent(() => import('./pages/services/blockchain-enterprise-solutions'));

// New Innovative Micro SAAS Services 2025
const AIBusinessIntelligenceDashboard = createLazyComponent(() => import('./pages/services/ai-business-intelligence-dashboard'));
const AICustomerSupportAutomation = createLazyComponent(() => import('./pages/services/ai-customer-support-automation'));
const AIProjectManagementPlatform = createLazyComponent(() => import('./pages/services/ai-project-management-platform'));
const AIMarketingAutomationPlatform = createLazyComponent(() => import('./pages/services/ai-marketing-automation-platform'));
const AIWorkflowOrchestrator = createLazyComponent(() => import('./pages/services/ai-workflow-orchestrator'));
const AIPredictiveMaintenance = createLazyComponent(() => import('./pages/services/ai-predictive-maintenance'));
const AIHRPlatform = createLazyComponent(() => import('./pages/services/ai-hr-platform'));
const AIFinancialTradingRiskManagement = createLazyComponent(() => import('./pages/services/ai-financial-trading-risk-management'));

// Enhanced Innovative Micro SAAS Services 2025
const AICustomerSuccessAutomation = createLazyComponent(() => import('./pages/services/ai-customer-success-automation'));
const AISupplyChainOptimizationEnhanced = createLazyComponent(() => import('./pages/services/ai-supply-chain-optimization-enhanced'));
const AIFinancialRiskManagementEnhanced = createLazyComponent(() => import('./pages/services/ai-financial-risk-management-enhanced'));

// New Innovative Services 2025 - Additional
const AIEnterpriseIntelligencePlatform = createLazyComponent(() => import('./pages/services/ai-enterprise-intelligence-platform'));
const AIQuantumNeuralNetworkPlatform = createLazyComponent(() => import('./pages/services/ai-quantum-neural-network-platform'));
const AISalesCopilot = createLazyComponent(() => import('./pages/services/ai-sales-copilot'));
const AIComplianceAssistant = createLazyComponent(() => import('./pages/services/ai-compliance-assistant'));
const CloudFinOpsOptimizer = createLazyComponent(() => import('./pages/services/cloud-finops-optimizer'));

// New Innovative Services 2026
const AIAutonomousLogisticsPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-logistics-platform'));
const AIAutonomousLogisticsOptimization = createLazyComponent(() => import('./pages/services/ai-autonomous-logistics-optimization'));
const AIAutonomousCybersecurityPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-cybersecurity-platform'));
const AIAutonomousManufacturingPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-manufacturing-platform'));
const AIPoweredSEO = createLazyComponent(() => import('./pages/services/ai-powered-seo'));
const QuantumEdgeComputingSolutions = createLazyComponent(() => import('./pages/services/quantum-edge-computing-solutions'));
const AISpaceTechnologyPlatform = createLazyComponent(() => import('./pages/services/ai-space-technology-platform'));

// New Innovative Services 2026 - Additional
const AIAutonomousFinancialAdvisorPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-financial-advisor-platform'));
const AIAutonomousSupplyChainIntelligence = createLazyComponent(() => import('./pages/services/ai-autonomous-supply-chain-intelligence'));
const AIAutonomousCybersecurityIntelligence = createLazyComponent(() => import('./pages/services/ai-autonomous-cybersecurity-intelligence'));
// New Innovative Micro SAAS Services 2026
const AILegalDocumentAutomationPlatform = createLazyComponent(() => import('./pages/services/ai-legal-document-automation-platform'));
// New Innovative AI Services 2026-2027
const AIAutonomousFinancialAdvisor = createLazyComponent(() => import('./pages/services/ai-autonomous-financial-advisor'));
const AIAutonomousHealthcareDiagnostics = createLazyComponent(() => import('./pages/services/ai-autonomous-healthcare-diagnostics'));
const AIAutonomousCybersecurityOperations = createLazyComponent(() => import('./pages/services/ai-autonomous-cybersecurity-operations'));

// New Innovative Services Showcase 2026
const InnovativeServicesShowcase2026 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2026'));

// Comprehensive Pricing Guide 2026
const ComprehensivePricingGuide2026 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2026'));

// Additional services from remote
const AIPoweredCustomerChurnPredictor = createLazyComponent(() => import('./pages/services/ai-powered-customer-churn-predictor'));
const AICybersecurityIntelligencePlatform = createLazyComponent(() => import('./pages/services/ai-cybersecurity-intelligence-platform'));

// New Innovative Services 2026 - Additional
const AIContentMarketingStudio = createLazyComponent(() => import('./pages/services/ai-content-marketing-studio'));
const AICustomerExperienceAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-customer-experience-analytics-platform'));
const AIDevOpsAutomationPlatform = createLazyComponent(() => import('./pages/services/ai-devops-automation-platform'));
const AIEcommerceOptimizationPlatform = createLazyComponent(() => import('./pages/services/ai-ecommerce-optimization-platform'));
const AIHealthcareAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-healthcare-analytics-platform'));
const AIFinancialRiskManagementPlatform = createLazyComponent(() => import('./pages/services/ai-financial-risk-management-platform'));
const AISupplyChainOptimizationPlatform = createLazyComponent(() => import('./pages/services/ai-supply-chain-optimization-platform'));

// New Innovative Services 2026 - Additional
const AICarbonFootprintManagementPlatform = createLazyComponent(() => import('./pages/services/ai-carbon-footprint-management-platform'));
const AIMentalHealthSupportPlatform = createLazyComponent(() => import('./pages/services/ai-mental-health-support-platform'));
const AISmartHomeEnergyManagementPlatform = createLazyComponent(() => import('./pages/services/ai-smart-home-energy-management-platform'));

// New Innovative Services 2026 - Legal & Education
const AIEducationalContentCreationPlatform = createLazyComponent(() => import('./pages/services/ai-educational-content-creation-platform'));
const AIRealEstateInvestmentAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-real-estate-investment-analytics-platform'));

// New Innovative Services 2025 - Additional
const AIEnterpriseWorkflowAutomation = createLazyComponent(() => import('./pages/services/ai-enterprise-workflow-automation'));
const AIQuantumComputingSolutions = createLazyComponent(() => import('./pages/services/ai-quantum-computing-solutions'));
const AICybersecurityThreatIntelligence = createLazyComponent(() => import('./pages/services/ai-cybersecurity-threat-intelligence'));
const AIHealthcareDiagnosticsPlatform = createLazyComponent(() => import('./pages/services/ai-healthcare-diagnostics-platform'));

// New AI Services 2026
const AIEnterpriseResourcePlanning = createLazyComponent(() => import('./pages/services/ai-enterprise-resource-planning'));

// Innovative Services Showcase 2027
const InnovativeServicesShowcase2027 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2027'));

// Innovative Services Showcase 2032
const InnovativeServicesShowcase2032 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2032'));

// Comprehensive Pricing Guide 2032
const ComprehensivePricingGuide2032 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2032'));

// Simple loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

// Simple error boundary fallback
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div className="text-center max-w-md">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
      <p className="text-gray-400 mb-6">{error.message}</p>
      <button
        onClick={() => window.location.reload()}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Reload Page
      </button>
    </div>
  </div>
 );

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Enhanced Header with Mobile Menu */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">Zion Tech Group</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Future Technology Solutions</p>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a>
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                    <span>Services</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4 space-y-3">
                      <a href="/comprehensive-services-2029" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Comprehensive Services</a>
                      <a href="/innovative-ai-services-2029" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">AI Services</a>
                      <a href="/innovative-services-showcase-2029" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Innovative Services</a>
                      <a href="/comprehensive-pricing-guide-2029" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Pricing Guide</a>
                      <a href="/services" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">All Services</a>
                    </div>
                  </div>
                </div>
                <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a>
                <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Contact</a>
                <a href="tel:+13024640950" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
                  Call Now
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>


                    {/* New Innovative Micro SAAS Services 2025 */}
                    <Route path="/services/ai-business-intelligence-dashboard" element={<ModernLayout><AIBusinessIntelligenceDashboard /></ModernLayout>} />
                    <Route path="/services/ai-customer-support-automation" element={<ModernLayout><AICustomerSupportAutomation /></ModernLayout>} />
                    <Route path="/services/ai-project-management-platform" element={<ModernLayout><AIProjectManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-marketing-automation-platform" element={<ModernLayout><AIMarketingAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-workflow-orchestrator" element={<ModernLayout><AIWorkflowOrchestrator /></ModernLayout>} />
                    <Route path="/services/ai-predictive-maintenance" element={<ModernLayout><AIPredictiveMaintenance /></ModernLayout>} />
                    <Route path="/services/ai-hr-platform" element={<ModernLayout><AIHRPlatform /></ModernLayout>} />
                    <Route path="/services/ai-financial-trading-risk-management" element={<ModernLayout><AIFinancialTradingRiskManagement /></ModernLayout>} />

                    {/* Enhanced Innovative Micro SAAS Services 2025 */}
                    <Route path="/services/ai-customer-success-automation" element={<ModernLayout><AICustomerSuccessAutomation /></ModernLayout>} />
                    <Route path="/services/ai-supply-chain-optimization-enhanced" element={<ModernLayout><AISupplyChainOptimizationEnhanced /></ModernLayout>} />
                    <Route path="/services/ai-financial-risk-management-enhanced" element={<ModernLayout><AIFinancialRiskManagementEnhanced /></ModernLayout>} />

                    {/* New Innovative Services 2025 - Additional */}
                    <Route path="/services/ai-enterprise-intelligence-platform" element={<ModernLayout><AIEnterpriseIntelligencePlatform /></ModernLayout>} />
                    <Route path="/services/ai-quantum-neural-network-platform" element={<ModernLayout><AIQuantumNeuralNetworkPlatform /></ModernLayout>} />
                    <Route path="/services/ai-sales-copilot" element={<ModernLayout><AISalesCopilot /></ModernLayout>} />
                    <Route path="/services/ai-compliance-assistant" element={<ModernLayout><AIComplianceAssistant /></ModernLayout>} />
                    <Route path="/services/cloud-finops-optimizer" element={<ModernLayout><CloudFinOpsOptimizer /></ModernLayout>} />

                    {/* Comprehensive Services Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
            
                    <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
                    <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />
                    {/* New Innovative Micro SAAS Services 2026 */}
                    <Route path="/services/ai-legal-document-automation-platform" element={<ModernLayout><AILegalDocumentAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<ModernLayout><AIHealthcareAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-financial-risk-management-platform" element={<ModernLayout><AIFinancialRiskManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-supply-chain-optimization-platform" element={<ModernLayout><AISupplyChainOptimizationPlatform /></ModernLayout>} />

                    {/* New Innovative Services 2025 - Additional */}
                    <Route path="/services/ai-enterprise-workflow-automation" element={<ModernLayout><AIEnterpriseWorkflowAutomation /></ModernLayout>} />
                    <Route path="/services/ai-quantum-computing-solutions" element={<ModernLayout><AIQuantumComputingSolutions /></ModernLayout>} />
                    <Route path="/services/ai-cybersecurity-threat-intelligence" element={<ModernLayout><AICybersecurityThreatIntelligence /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-diagnostics-platform" element={<ModernLayout><AIHealthcareDiagnosticsPlatform /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 */}
                    <Route path="/services/ai-autonomous-logistics-platform" element={<ModernLayout><AIAutonomousLogisticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-powered-seo" element={<ModernLayout><AIPoweredSEO /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 - Additional */}
                    <Route path="/services/ai-content-marketing-studio" element={<ModernLayout><AIContentMarketingStudio /></ModernLayout>} />
                    <Route path="/services/ai-customer-experience-analytics-platform" element={<ModernLayout><AICustomerExperienceAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-devops-automation-platform" element={<ModernLayout><AIDevOpsAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-ecommerce-optimization-platform" element={<ModernLayout><AIEcommerceOptimizationPlatform /></ModernLayout>} />
                    {/* Innovative Services Showcase 2026 */}
                    <Route path="/innovative-services-showcase-2026" element={<ModernLayout><InnovativeServicesShowcase2026 /></ModernLayout>} />

                    {/* Comprehensive Pricing Guide 2026 */}
                    <Route path="/comprehensive-pricing-guide-2026" element={<ModernLayout><ComprehensivePricingGuide2026 /></ModernLayout>} />

                    {/* Innovative Services Showcase 2027 */}
                    <Route path="/innovative-services-showcase-2027" element={<ModernLayout><InnovativeServicesShowcase2027 /></ModernLayout>} />

                    {/* Innovative Services Showcase 2032 */}
                    <Route path="/innovative-services-showcase-2032" element={<ModernLayout><InnovativeServicesShowcase2032 /></ModernLayout>} />

                    {/* Comprehensive Pricing Guide 2032 */}
                    <Route path="/comprehensive-pricing-guide-2032" element={<ModernLayout><ComprehensivePricingGuide2032 /></ModernLayout>} />
                    {/* New Innovative Services 2025 - Combined from both versions */}
                    <Route path="/services/ai-enterprise-automation-platform" element={<AIEnterpriseAutomationPlatform />} />
                    <Route path="/services/ai-data-analytics-platform" element={<AIDataAnalyticsPlatform />} />
                    <Route path="/services/it-infrastructure-management" element={<ITInfrastructureManagement />} />
                    <Route path="/services/micro-saas-solutions-comprehensive" element={<MicroSaaSSolutionsComprehensive />} />

                    {/* New Innovative AI Services 2025 - Enhanced */}
                    <Route path="/services/ai-quantum-neural-network-platform" element={<ModernLayout><AIQuantumNeuralNetworkPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-business-operations-platform" element={<ModernLayout><AIAutonomousBusinessOperationsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-customer-experience-analytics-platform" element={<ModernLayout><AICustomerExperienceAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/quantum-edge-computing-solutions" element={<ModernLayout><QuantumEdgeComputingSolutions /></ModernLayout>} />

                    {/* Additional Innovative Services 2025 */}
                    <Route path="/services/ai-enterprise-intelligence-platform" element={<ModernLayout><AIEnterpriseIntelligencePlatform /></ModernLayout>} />
                    <Route path="/services/quantum-ai-cybersecurity-platform" element={<ModernLayout><QuantumAICybersecurityPlatform /></ModernLayout>} />
                    <Route path="/services/ai-hr-management-platform" element={<ModernLayout><AIHRManagementPlatform /></ModernLayout>} />

                    {/* Additional service routes from remote branch */}
                    <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
                    <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                    <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                    <Route path="/services/ai-enterprise-resource-planning" element={<ModernLayout><AIEnterpriseResourcePlanning /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-manufacturing-platform" element={<ModernLayout><AIAutonomousManufacturingPlatform /></ModernLayout>} />
                    <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />

                    {/* New Innovative Services 2025 - Content Creation & Analytics */}
                    <Route path="/services/ai-content-creation-studio" element={<AIContentCreationStudio />} />
                    <Route path="/pricing-guide" element={<PricingGuide />} />
                    
                    {/* New Innovative Micro SAAS Services 2026 */}
                    <Route path="/services/ai-legal-document-automation-platform" element={<ModernLayout><AILegalDocumentAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<ModernLayout><AIHealthcareAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-financial-risk-management-platform" element={<ModernLayout><AIFinancialRiskManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-supply-chain-optimization-platform" element={<ModernLayout><AISupplyChainOptimizationPlatform /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 - Additional */}
                    <Route path="/services/ai-carbon-footprint-management-platform" element={<ModernLayout><AICarbonFootprintManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-mental-health-support-platform" element={<ModernLayout><AIMentalHealthSupportPlatform /></ModernLayout>} />
                    <Route path="/services/ai-smart-home-energy-management-platform" element={<ModernLayout><AISmartHomeEnergyManagementPlatform /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 - Legal & Education */}
                    <Route path="/services/ai-autonomous-legal-research-platform" element={<ModernLayout><AIAutonomousLegalResearchPlatform /></ModernLayout>} />
                    <Route path="/services/ai-educational-content-creation-platform" element={<ModernLayout><AIEducationalContentCreationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-real-estate-investment-analytics-platform" element={<ModernLayout><AIRealEstateInvestmentAnalyticsPlatform /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 */}
                    <Route path="/services/ai-autonomous-logistics-platform" element={<ModernLayout><AIAutonomousLogisticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-logistics-optimization" element={<ModernLayout><AIAutonomousLogisticsOptimization /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-cybersecurity-platform" element={<ModernLayout><AIAutonomousCybersecurityPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-manufacturing-platform" element={<ModernLayout><AIAutonomousManufacturingPlatform /></ModernLayout>} />
                    <Route path="/services/ai-powered-seo" element={<ModernLayout><AIPoweredSEO /></ModernLayout>} />
                    <Route path="/services/quantum-edge-computing-solutions" element={<ModernLayout><QuantumEdgeComputingSolutions /></ModernLayout>} />
                    <Route path="/services/ai-space-technology-platform" element={<ModernLayout><AISpaceTechnologyPlatform /></ModernLayout>} />
                    
                    {/* New Innovative Services 2026 - Additional */}
                    <Route path="/services/ai-autonomous-financial-advisor-platform" element={<ModernLayout><AIAutonomousFinancialAdvisorPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-supply-chain-intelligence" element={<ModernLayout><AIAutonomousSupplyChainIntelligence /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-cybersecurity-intelligence" element={<ModernLayout><AIAutonomousCybersecurityIntelligence /></ModernLayout>} />

                    {/* New Innovative AI Services 2026-2027 */}
                    <Route path="/services/ai-autonomous-financial-advisor" element={<ModernLayout><AIAutonomousFinancialAdvisor /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-healthcare-diagnostics" element={<ModernLayout><AIAutonomousHealthcareDiagnostics /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-cybersecurity-operations" element={<ModernLayout><AIAutonomousCybersecurityOperations /></ModernLayout>} />

                    {/* New Innovative Micro SAAS Services 2026 */}
                    <Route path="/services/ai-powered-customer-churn-predictor" element={<ModernLayout><AIPoweredCustomerChurnPredictor /></ModernLayout>} />
                    <Route path="/services/ai-cybersecurity-intelligence-platform" element={<ModernLayout><AICybersecurityIntelligencePlatform /></ModernLayout>} />

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

                    {/* New Innovative Services 2025 */}
                    <Route path="/services/ai-enterprise-workflow-automation" element={<AIEnterpriseWorkflowAutomation />} />
                    <Route path="/services/ai-customer-intelligence-platform" element={<AICustomerIntelligencePlatform />} />
                    <Route path="/services/ai-financial-trading-platform" element={<AIFinancialTradingPlatform />} />

                    {/* Comprehensive Services Showcase 2026 */}
                    <Route path="/comprehensive-services-showcase-2026" element={<ModernLayout><ComprehensiveServicesShowcase2026 /></ModernLayout>} />
                    <Route path="/comprehensive-services-showcase-2025" element={<ModernLayout><ComprehensiveServicesShowcase2026 /></ModernLayout>} />

                    {/* Showcase Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ModernLayout><ComprehensiveServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-ai-services-showcase-2025" element={<ModernLayout><InnovativeAIServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-services-showcase-2025" element={<ModernLayout><InnovativeServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-services-showcase-2029" element={<ModernLayout><InnovativeServicesShowcase2029 /></ModernLayout>} />
                    <Route path="/comprehensive-pricing-guide-2029" element={<ModernLayout><ComprehensivePricingGuide2029 /></ModernLayout>} />
        
                    <Route path="/innovative-services-hub" element={<ModernLayout><InnovativeServicesHub /></ModernLayout>} />

                    {/* Legal and Policy Pages */}
                    <Route path="/privacy" element={<ModernLayout><Privacy /></ModernLayout>} />
                    <Route path="/terms" element={<ModernLayout><Terms /></ModernLayout>} />
                    <Route path="/cookies" element={<ModernLayout><Cookies /></ModernLayout>} />
                    <Route path="/accessibility" element={<ModernLayout><Accessibility /></ModernLayout>} />
                    <Route path="/security" element={<ModernLayout><Security /></ModernLayout>} />
                    <Route path="/sitemap" element={<ModernLayout><Sitemap /></ModernLayout>} />
                    <Route path="/compliance" element={<ModernLayout><Compliance /></ModernLayout>} />

                    {/* New pages we created */}
                    <Route path="/enterprise" element={<ModernLayout><Enterprise /></ModernLayout>} />
                    <Route path="/industry-solutions" element={<ModernLayout><IndustrySolutions /></ModernLayout>} />
                    <Route path="/digital-transformation" element={<ModernLayout><DigitalTransformation /></ModernLayout>} />
                    <Route path="/cloud-solutions" element={<ModernLayout><CloudSolutions /></ModernLayout>} />
                    <Route path="/emerging-tech" element={<ModernLayout><EmergingTech /></ModernLayout>} />
                    
                    {/* Additional pages */}
                    <Route path="/solutions" element={<ModernLayout><Solutions /></ModernLayout>} />
                    <Route path="/partners" element={<ModernLayout><Partners /></ModernLayout>} />
                    <Route path="/news" element={<ModernLayout><News /></ModernLayout>} />
                    <Route path="/research" element={<ModernLayout><Research /></ModernLayout>} />

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

            {/* Floating Action Button */}
            <FloatingActionButton enabled={true} />

            {/* Enhanced Performance Optimizer */}
            <PerformanceOptimizer enabled={true} showMetrics={false} />

            {/* Enhanced Accessibility Enhancer */}
            <EnhancedAccessibilityEnhancer enabled={true} showIssues={false} autoFix={true} />

            {/* Mobile Responsiveness Enhancer */}
            <MobileResponsivenessEnhancer 
              enabled={true} 
              showMobileIndicator={false}
              enableTouchGestures={true}
              enableMobileOptimizations={true}
            />

            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} showMetrics={false} />

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
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            {/* Core Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            
            {/* Our New Innovative Services Routes */}
            <Route path="/innovative-services-showcase-2029" element={<InnovativeServicesShowcase2029 />} />
            <Route path="/comprehensive-pricing-guide-2029" element={<ComprehensivePricingGuide2029 />} />
            <Route path="/comprehensive-services-2029" element={<ComprehensiveServices2029 />} />
            <Route path="/innovative-ai-services-2029" element={<InnovativeAIServices2029 />} />
            
            {/* Fallback Route */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">The page you're looking for doesn't exist.</p>
                  <a href="/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Go Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Zion Tech Group</h3>
                    <p className="text-sm text-gray-400">Future Technology Solutions</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Pioneering the future of technology with AI-powered solutions that transform businesses and empower innovation. 
                  We specialize in cutting-edge AI, IT infrastructure, and micro SAAS solutions.
                </p>
                <div className="flex space-x-4">
                  <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a href="tel:+13024640950" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="/comprehensive-services-2029" className="hover:text-white transition-colors">Comprehensive Services</a></li>
                  <li><a href="/innovative-ai-services-2029" className="hover:text-white transition-colors">AI Services</a></li>
                  <li><a href="/innovative-services-showcase-2029" className="hover:text-white transition-colors">Innovative Services</a></li>
                  <li><a href="/comprehensive-pricing-guide-2029" className="hover:text-white transition-colors">Pricing Guide</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">All Services</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="/news" className="hover:text-white transition-colors">News</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-gray-400">
                  <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
                </div>
                <div className="flex space-x-6 text-sm text-gray-400">
                  <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
