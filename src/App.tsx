import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { AppHeader } from './layout/AppHeader';
import { Sidebar } from './components/Sidebar';
import { EnhancedFuturisticFooter } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { EnhancedSEO } from './components/EnhancedSEO';
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
  const LazyComponent = React.lazy(importFn);
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

// Additional imports from PM2 branch
import { ThemeProvider } from './components/ThemeProvider';
import { EnhancedAccessibilityPanel } from './components/EnhancedAccessibilityPanel';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import { InteractiveUserExperience } from './components/InteractiveUserExperience';
import { SecurityEnhancer } from './components/SecurityEnhancer';

// Additional pages from PM2 branch
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Solutions = createLazyComponent(() => import('./pages/Solutions'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));
const Login = createLazyComponent(() => import('./pages/Login'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Help = createLazyComponent(() => import('./pages/Help'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Community = createLazyComponent(() => import('./pages/Community'));
const Demo = createLazyComponent(() => import('./pages/Demo'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Team = createLazyComponent(() => import('./pages/Team'));
const Press = createLazyComponent(() => import('./pages/Press'));
const News = createLazyComponent(() => import('./pages/News'));
const Events = createLazyComponent(() => import('./pages/Events'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));

// Additional service pages from PM2 branch
const DigitalTwin = createLazyComponent(() => import('./pages/services/DigitalTwin'));
const IoTServices = createLazyComponent(() => import('./pages/services/IoTServices'));
const MicroSAAS = createLazyComponent(() => import('./pages/services/MicroSAAS'));
const QuantumComputing = createLazyComponent(() => import('./pages/services/QuantumComputing'));
const SpaceTech = createLazyComponent(() => import('./pages/services/SpaceTech'));
const Sustainability = createLazyComponent(() => import('./pages/services/Sustainability'));
const ZeroTrustNetworkArchitecture = createLazyComponent(() => import('./pages/services/ZeroTrustNetworkArchitecture'));
const CloudDevOps = createLazyComponent(() => import('./pages/services/CloudDevOps'));
const DataAnalytics = createLazyComponent(() => import('./pages/services/DataAnalytics'));
const IoTEdge = createLazyComponent(() => import('./pages/services/IoTEdge'));
const BlockchainEnterpriseSolutions = createLazyComponent(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const HealthcareTech = createLazyComponent(() => import('./pages/services/HealthcareTech'));
const ITInfrastructure = createLazyComponent(() => import('./pages/services/ITInfrastructure'));
const DigitalTransformation = createLazyComponent(() => import('./pages/services/DigitalTransformation'));
const ITConsulting = createLazyComponent(() => import('./pages/services/ITConsulting'));
const GreenIT = createLazyComponent(() => import('./pages/services/GreenIT'));

// AI services that exist
const AICybersecuritySuite = React.lazy(() => import('./pages/services/ai-cybersecurity-threat-detection'));
const QuantumAIPlatform = React.lazy(() => import('./pages/services/QuantumAIPlatform'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/ai-healthcare-analytics-platform'));
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernance = React.lazy(() => import('./pages/services/DataAnalytics'));
const EdgeComputingPlatform = React.lazy(() => import('./pages/services/EdgeComputingPlatform'));
const AICustomerSuccessPlatform = React.lazy(() => import('./pages/services/AICustomerSuccessPlatform'));
const AIBusinessIntelligencePlatform = React.lazy(() => import('./pages/services/AIBusinessIntelligencePlatform'));
const AIFinancialTradingPlatform = React.lazy(() => import('./pages/services/ai-financial-trading-platform'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIHRPlatform = React.lazy(() => import('./pages/services/AIHRPlatform'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const AILegalResearchPlatform = React.lazy(() => import('./pages/services/AILegalResearchPlatform'));
const AIEducationPlatform = React.lazy(() => import('./pages/services/AIEducationPlatform'));
const AIProjectManagementPlatform = React.lazy(() => import('./pages/services/ai-project-management-platform'));
const AIContentMarketingAutomation = React.lazy(() => import('./pages/services/AIContentMarketingAutomation'));

// Micro SaaS services that exist
const AffiliateMarketingTracker = React.lazy(() => import('./pages/services/AffiliateMarketingTracker'));
const UptimeSLAMonitor = React.lazy(() => import('./pages/services/UptimeSLAMonitor'));
const SOC2ComplianceTracker = React.lazy(() => import('./pages/services/SOC2ComplianceTracker'));
const EmployeeSchedulingSaaS = React.lazy(() => import('./pages/services/EmployeeSchedulingSaaS'));
const AISupportHelpdesk = React.lazy(() => import('./pages/services/AISupportHelpdesk'));
const AIContentGenerator = React.lazy(() => import('./pages/services/AIContentGenerator'));
const AiLeadScoring = React.lazy(() => import('./pages/services/AiLeadScoring'));
const WebsiteAiChatbot = React.lazy(() => import('./pages/services/WebsiteAiChatbot'));
const RagSearch = React.lazy(() => import('./pages/services/RagSearch'));
const MlopsPipeline = React.lazy(() => import('./pages/services/MlopsPipeline'));
const EcommercePersonalization = React.lazy(() => import('./pages/services/EcommercePersonalization'));
const ReturnsManagementSaaS = React.lazy(() => import('./pages/services/ReturnsManagementSaaS'));
const VendorRiskManagement = React.lazy(() => import('./pages/services/VendorRiskManagement'));
const AISEOOptimizer = React.lazy(() => import('./pages/services/AISEOOptimizer'));
const SaaSChurnPredictor = React.lazy(() => import('./pages/services/SaaSChurnPredictor'));
const AIIncidentPostmortems = React.lazy(() => import('./pages/services/AIIncidentPostmortems'));
const APIMonitoringSaaS = React.lazy(() => import('./pages/services/APIMonitoringSaaS'));
const GDPRCookieCompliance = React.lazy(() => import('./pages/services/GDPRCookieCompliance'));
const AIProofreadingStudio = React.lazy(() => import('./pages/services/AIProofreadingStudio'));
const AICustomerChurnPrediction = React.lazy(() => import('./pages/services/AICustomerChurnPrediction'));
const AIFinancialFraudDetection = React.lazy(() => import('./pages/services/AIFinancialFraudDetection'));
const AIHRTalentAcquisition = React.lazy(() => import('./pages/services/AIHRTalentAcquisition'));
const AILegalDocumentAutomation = React.lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcarePredictiveAnalytics = React.lazy(() => import('./pages/services/AIHealthcarePredictiveAnalytics'));
const AIFinancialTradingRiskManagement = React.lazy(() => import('./pages/services/AIFinancialTradingRiskManagement'));

// Additional new components
const ComprehensiveAIServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveAIServicesShowcase2025'));
const EmergingTech2030 = React.lazy(() => import('./pages/EmergingTech2030'));
const ComprehensivePricingGuide2026 = React.lazy(() => import('./pages/ComprehensivePricingGuide2026'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AISalesCopilot = React.lazy(() => import('./pages/services/AISalesCopilot'));
const CloudFinOpsOptimizer = React.lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const AIComplianceAssistant = React.lazy(() => import('./pages/services/AIComplianceAssistant'));
const AIAutoEmailResponder = React.lazy(() => import('./pages/services/AIAutoEmailResponder'));
const CustomerFeedbackSurveys = React.lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
const AIComplianceCopilot = React.lazy(() => import('./pages/services/AIComplianceCopilot'));
const LLMContentStudio = React.lazy(() => import('./pages/services/LLMContentStudio'));
const FinOpsAdvisor = React.lazy(() => import('./pages/services/FinOpsAdvisor'));

// Additional service pages that exist
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
const ServicesCatalog = React.lazy(() => import('./pages/ServicesCatalog'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const ComprehensiveServicesLanding2028 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2028'));
const PricingGuide = React.lazy(() => import('./pages/PricingGuide'));
const ComprehensivePricingGuide2028 = React.lazy(() => import('./pages/ComprehensivePricingGuide2028'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Support = React.lazy(() => import('./pages/Support'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Research = React.lazy(() => import('./pages/Research'));
const Training = React.lazy(() => import('./pages/Training'));
const Tutorials = React.lazy(() => import('./pages/Tutorials'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const Signup = React.lazy(() => import('./pages/Signup'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Security = React.lazy(() => import('./pages/Security'));
const Status = React.lazy(() => import('./pages/Status'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const MicroSAASSolutions = React.lazy(() => import('./pages/services/MicroSAASSolutions'));
>>>>>>> cursor/migrate-github-actions-to-pm2-automations-f391

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider>
          <Router>
            <div className="min-h-screen bg-futuristic">
              <AppHeader onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
              
              {/* Main Content with Sidebar */}
              <div className="flex flex-1">
                <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
                
                <main className="flex-1 min-h-screen">
                  <Suspense fallback={<EnhancedLoadingSpinner />}>
                    <AnimatePresence mode="wait">
                  <Routes>
                    {/* Core Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />

                    {/* Additional Routes from PM2 branch */}
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/request-quote" element={<RequestQuote />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />

                    {/* New AI Services 2025 */}
                    <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                    <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurity />} />
                    <Route path="/services/ai-healthcare-platform" element={<AIHealthcare />} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />

                    {/* Additional Service Routes from PM2 branch */}
                    <Route path="/services/digital-twin" element={<DigitalTwin />} />
                    <Route path="/services/iot-services" element={<IoTServices />} />
                    <Route path="/services/micro-saas" element={<MicroSAAS />} />
                    <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                    <Route path="/services/space-tech" element={<SpaceTech />} />
                    <Route path="/services/sustainability" element={<Sustainability />} />
                    <Route path="/services/zero-trust-network-architecture" element={<ZeroTrustNetworkArchitecture />} />
                    <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/services/data-analytics" element={<DataAnalytics />} />
                    <Route path="/services/iot-edge" element={<IoTEdge />} />
                    <Route path="/services/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                    <Route path="/services/healthcare-tech" element={<HealthcareTech />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/services/it-consulting" element={<ITConsulting />} />
                    <Route path="/services/green-it" element={<GreenIT />} />

                    {/* 2031 Cutting-Edge Services */}
                    <Route path="/zion-cutting-edge-services-2031" element={<ZionCuttingEdgeServices2031 />} />
                    <Route path="/cutting-edge-services-2031" element={<ZionCuttingEdgeServices2031 />} />
                    
                    {/* Comprehensive Pricing Guide 2031 */}
                    <Route path="/comprehensive-pricing-2031" element={<ComprehensivePricingGuide2031 />} />

                    {/* Showcase Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />

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
          </div>

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

          {/* Additional Components from PM2 branch */}
          <EnhancedAccessibilityPanel enabled={true} />
          <AdvancedPerformanceMonitor enabled={true} />
          <InteractiveUserExperience enabled={true} />
          <SecurityEnhancer enabled={true} />
          <ChatAssistant enabled={true} />
          <EnhancedSEO enabled={true} />
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/pricing-guide" element={<PricingGuide />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services-overview" element={<ServicesOverview />} />
                    <Route path="/services-catalog" element={<ServicesCatalog />} />
                    <Route path="/services-comparison" element={<ServicesComparisonPage />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/request-quote" element={<RequestQuote />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/schedule-demo" element={<ScheduleDemo />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="/security" element={<Security />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/search" element={<SearchPage />} />
                    
                    {/* Service Category Routes */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/micro-saas" element={<MicroSaasServicesPage />} />
                    
                    {/* Service Routes */}
                    <Route path="/services/digital-twin" element={<DigitalTwin />} />
                    <Route path="/services/iot-services" element={<IoTServices />} />
                    <Route path="/services/micro-saas" element={<MicroSAAS />} />
                    <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                    <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                    <Route path="/services/space-tech" element={<SpaceTech />} />
                    <Route path="/services/sustainability" element={<Sustainability />} />
                    <Route path="/services/zero-trust-network-architecture" element={<ZeroTrustNetworkArchitecture />} />
                    <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/services/data-analytics" element={<DataAnalytics />} />
                    <Route path="/services/iot-edge" element={<IoTEdge />} />
                    <Route path="/services/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                    <Route path="/services/healthcare-tech" element={<HealthcareTech />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/services/it-consulting" element={<ITConsulting />} />
                    <Route path="/services/green-it" element={<GreenIT />} />
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
                    <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                    <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                    <Route path="/services/ai-auto-email-responder" element={<AIAutoEmailResponder />} />
                    <Route path="/services/mobile-feedback-surveys" element={<CustomerFeedbackSurveys />} />
                    <Route path="/services/ai-compliance-copilot" element={<AIComplianceCopilot />} />
                    <Route path="/services/llm-content-studio" element={<LLMContentStudio />} />
                    <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                    
                    {/* AI Service Routes */}
                    <Route path="/services/ai-cybersecurity-suite" element={<AICybersecuritySuite />} />
                    <Route path="/services/quantum-ai-platform" element={<QuantumAIPlatform />} />
                    <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                    <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                    <Route path="/services/ai-data-governance" element={<AIDataGovernance />} />
                    <Route path="/services/edge-computing-platform" element={<EdgeComputingPlatform />} />
                    <Route path="/services/ai-customer-success-platform" element={<AICustomerSuccessPlatform />} />
                    <Route path="/services/ai-business-intelligence-platform" element={<AIBusinessIntelligencePlatform />} />
                    <Route path="/services/ai-financial-trading-platform" element={<AIFinancialTradingPlatform />} />
                    <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                    <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                    <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                    <Route path="/services/ai-legal-research-platform" element={<AILegalResearchPlatform />} />
                    <Route path="/services/ai-education-platform" element={<AIEducationPlatform />} />
                    <Route path="/services/ai-project-management-platform" element={<AIProjectManagementPlatform />} />
                    <Route path="/services/ai-content-marketing-automation" element={<AIContentMarketingAutomation />} />
                    <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                    <Route path="/services/ai-healthcare-predictive-analytics" element={<AIHealthcarePredictiveAnalytics />} />
                    <Route path="/services/ai-financial-trading-risk-management" element={<AIFinancialTradingRiskManagement />} />
                    
                    {/* Micro SaaS Service Routes */}
                    <Route path="/services/affiliate-marketing-tracker" element={<AffiliateMarketingTracker />} />
                    <Route path="/services/uptime-sla-monitor" element={<UptimeSLAMonitor />} />
                    <Route path="/services/soc2-compliance-tracker" element={<SOC2ComplianceTracker />} />
                    <Route path="/services/employee-scheduling-saas" element={<EmployeeSchedulingSaaS />} />
                    <Route path="/services/ai-support-helpdesk" element={<AISupportHelpdesk />} />
                    <Route path="/services/ai-content-generator" element={<AIContentGenerator />} />
                    <Route path="/services/ai-lead-scoring" element={<AiLeadScoring />} />
                    <Route path="/services/website-ai-chatbot" element={<WebsiteAiChatbot />} />
                    <Route path="/services/rag-search" element={<RagSearch />} />
                    <Route path="/services/mlops-pipeline" element={<MlopsPipeline />} />
                    <Route path="/services/ecommerce-personalization" element={<EcommercePersonalization />} />
                    <Route path="/services/returns-management" element={<ReturnsManagementSaaS />} />
                    <Route path="/services/vendor-risk-management" element={<VendorRiskManagement />} />
                    <Route path="/services/ai-seo-optimizer" element={<AISEOOptimizer />} />
                    <Route path="/services/saas-churn-predictor" element={<SaaSChurnPredictor />} />
                    <Route path="/services/ai-incident-postmortems" element={<AIIncidentPostmortems />} />
                    <Route path="/services/api-monitoring" element={<APIMonitoringSaaS />} />
                    <Route path="/services/gdpr-cookie-compliance" element={<GDPRCookieCompliance />} />
                    <Route path="/services/ai-proofreading-studio" element={<AIProofreadingStudio />} />
                    <Route path="/services/ai-customer-churn-prediction" element={<AICustomerChurnPrediction />} />
                    <Route path="/services/ai-financial-fraud-detection" element={<AIFinancialFraudDetection />} />
                    <Route path="/services/ai-hr-talent-acquisition" element={<AIHRTalentAcquisition />} />
                    
                    {/* Special Showcase Routes */}
                    <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
                    <Route path="/revolutionary-services-showcase-2030" element={<RevolutionaryServicesShowcase2030 />} />
                    <Route path="/comprehensive-services-landing-2028" element={<ComprehensiveServicesLanding2028 />} />
                    <Route path="/comprehensive-ai-services-showcase-2025" element={<ComprehensiveAIServicesShowcase2025 />} />
                    <Route path="/emerging-tech-2030" element={<EmergingTech2030 />} />
                    <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                    <Route path="/comprehensive-pricing-guide-2026" element={<ComprehensivePricingGuide2026 />} />
                    <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                    <Route path="/comprehensive-pricing-guide-2028" element={<ComprehensivePricingGuide2028 />} />
                    <Route path="/comprehensive-pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                    <Route path="/comprehensive-services-showcase-2026" element={<ComprehensiveServicesShowcase2026 />} />
                    <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                    
                    {/* Catch all route */}
                    <Route path="*" element={<Home />} />
                  </Routes>
                </Suspense>
              </main>
            </div>
            
            <EnhancedFuturisticFooter />
            <ChatAssistant />
            <PerformanceOptimizer showMetrics={true} />
            <EnhancedAccessibilityPanel />
            <AdvancedPerformanceMonitor />
            <InteractiveUserExperience />
            <SecurityEnhancer />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
>>>>>>> cursor/migrate-github-actions-to-pm2-automations-f391
  );
}

export default App;