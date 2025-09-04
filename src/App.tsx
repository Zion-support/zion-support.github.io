import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Lazy loading utility
const createLazyComponent = (importFunc: () => Promise<any>) => {
  return lazy(importFunc);
};

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Solutions = createLazyComponent(() => import('./pages/Solutions'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Team = createLazyComponent(() => import('./pages/Team'));
const Leadership = createLazyComponent(() => import('./pages/Leadership'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));
const News = createLazyComponent(() => import('./pages/News'));
const Help = createLazyComponent(() => import('./pages/Help'));
const Support = createLazyComponent(() => import('./pages/Support'));
const Community = createLazyComponent(() => import('./pages/Community'));
const Press = createLazyComponent(() => import('./pages/Press'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const DataProtection = createLazyComponent(() => import('./pages/DataProtection'));
const Accessibility = createLazyComponent(() => import('./pages/Accessibility'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));

// Service pages
const ServicesPricingPage = createLazyComponent(() => import('./pages/ServicesPricingPage'));
const SystemStatus = createLazyComponent(() => import('./pages/SystemStatus'));
const Search = createLazyComponent(() => import('./pages/Search'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const ApiPlayground = createLazyComponent(() => import('./pages/ApiPlayground'));
const Research = createLazyComponent(() => import('./pages/Research'));
const Categories = createLazyComponent(() => import('./pages/Categories'));
const Login = createLazyComponent(() => import('./pages/Login'));

// 2028 Innovative AI Services
const AIAutonomousVehicleManagementPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-vehicle-management-platform'));
const AISmartCityInfrastructureManagement = createLazyComponent(() => import('./pages/services/ai-smart-city-infrastructure-management'));
const AIQuantumFinancialTradingPlatform = createLazyComponent(() => import('./pages/services/ai-quantum-financial-trading-platform'));

// 2028 Services Showcase
const InnovativeServicesShowcase2028 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2028'));

// 2025 Innovative Services Showcase and Pricing Guide
const InnovativeServicesShowcase2025 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2025'));
const ComprehensivePricingGuide2025 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2025'));

// Placeholder components for missing imports
const ErrorBoundary = ({ children, fallback }: { children: React.ReactNode; fallback: React.ReactNode }) => children;
const SEO = ({ title, description, keywords, ogImage, canonicalUrl }: any) => null;
const PerformanceOptimizer = ({ enabled }: { enabled: boolean }) => null;
const EnhancedAccessibilityEnhancer = ({ enabled, showControls }: { enabled: boolean; showControls: boolean }) => null;
const MobileExperienceEnhancer = ({ enabled }: { enabled: boolean }) => null;
const AdvancedAnalytics = ({ enabled, showMetrics }: { enabled: boolean; showMetrics: boolean }) => null;
const AppHeader = () => <header>Zion Tech Group</header>;
const LoadingSpinner = () => <div>Loading...</div>;
const Footer = () => <footer>Footer</footer>;
const FloatingActionButton = ({ enabled }: { enabled: boolean }) => null;
const SmartNotificationSystem = ({ enabled }: { enabled: boolean }) => null;
const ChatAssistant = ({ enabled, position, theme, language }: any) => null;

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="text-center text-white max-w-md mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-red-400">Something went wrong</h1>
      <p className="text-gray-300 mb-6">
        {error.message || 'An unexpected error occurred'}
      </p>
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
      <ErrorBoundary fallback={<ErrorFallback error={new Error()} resetErrorBoundary={() => {}} />}>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
            {/* SEO Component */}
            <SEO 
              title="Zion Tech Group - Leading AI & Technology Solutions"
              description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
              keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
              ogImage="/og-image.jpg"
              canonicalUrl="https://ziontechgroup.com"
            />
            
            {/* Performance Optimizer */}
            <PerformanceOptimizer enabled={true} />
            
            {/* Enhanced Accessibility */}
            <EnhancedAccessibilityEnhancer enabled={true} showControls={true} />
            
            {/* Mobile Experience Enhancer */}
            <MobileExperienceEnhancer enabled={true} />
            
            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} showMetrics={true} />
            
            {/* Header */}
            <AppHeader />
            
            {/* Main Content */}
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
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
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/leadership" element={<Leadership />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/data-protection" element={<DataProtection />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/sitemap" element={<Sitemap />} />

                    {/* Service Routes */}
                    <Route path="/services-pricing" element={<ServicesPricingPage />} />
                    <Route path="/system-status" element={<SystemStatus />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/api-playground" element={<ApiPlayground />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/login" element={<Login />} />

                    {/* 2028 Innovative AI Services */}
                    <Route path="/services/ai-autonomous-vehicle-management-platform" element={<AIAutonomousVehicleManagementPlatform />} />
                    <Route path="/services/ai-smart-city-infrastructure-management" element={<AISmartCityInfrastructureManagement />} />
                    <Route path="/services/ai-quantum-financial-trading-platform" element={<AIQuantumFinancialTradingPlatform />} />

                    {/* 2028 Services Showcase */}
                    <Route path="/innovative-services-showcase-2028" element={<InnovativeServicesShowcase2028 />} />

                    {/* 2025 Innovative Services Showcase and Pricing Guide */}
                    <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
                    <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />

                    {/* 404 Page */}
                    <Route
                      path="*"
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-f872
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <About />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Services />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/contact" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Contact />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/blog" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Blog />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/careers" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Careers />
                        </motion.div>
                      } 
                    />
                    
                    {/* Service Routes */}
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />
                    
                    {/* Comprehensive Service Routes */}
      
                    <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                    <Route path="/innovative-services-landing-2025" element={<InnovativeServicesLanding2025 />} />
                    <Route path="/new-innovative-services-2025" element={<NewInnovativeServices2025 />} />
                    <Route path="/zion-cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />
                    
                    {/* Service Detail Routes */}
                    <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
                    <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                    <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                    <Route path="/services/ai-auto-email-responder" element={<AIAutoEmailResponder />} />
                    <Route path="/services/customer-feedback-surveys" element={<CustomerFeedbackSurveys />} />
                    <Route path="/services/ai-compliance-copilot" element={<AIComplianceCopilot />} />
                    <Route path="/services/llm-content-studio" element={<LLMContentStudio />} />
                    <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                    <Route path="/services/returns-management" element={<ReturnsManagement />} />
                    <Route path="/services/email-sequencer" element={<EmailSequencer />} />
                    <Route path="/services/podcast-transcription" element={<PodcastTranscription />} />
                    <Route path="/services/micro-crm" element={<MicroCRM />} />
                    <Route path="/services/website-analytics" element={<WebsiteAnalytics />} />
                    <Route path="/services/it-helpdesk" element={<ITHelpdesk />} />
                    <Route path="/services/affiliate-tracking" element={<AffiliateTracking />} />
                    <Route path="/services/mobile-survey" element={<MobileSurvey />} />
                    <Route path="/services/ai-autonomous-code-reviewer" element={<AIAutonomousCodeReviewer />} />
                    <Route path="/services/zero-trust-network-access" element={<ZeroTrustNetworkAccess />} />
                    <Route path="/services/ai-powered-seo" element={<AIPoweredSEO />} />
                    <Route path="/services/interview-assessment-ai" element={<InterviewAssessmentAI />} />
                    <Route path="/services/helpdesk-platform" element={<HelpdeskPlatform />} />
                    <Route path="/services/dsr-portal" element={<DSRPortal />} />
                    <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} />
                    <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                    <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} />
                    <Route path="/services/ai-financial-analytics" element={<AIFinancialAnalytics />} />
                    <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                    <Route path="/services/new-services-showcase-2025" element={<NewServicesShowcase2025 />} />
                    <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                    <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                    <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
                    <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                    <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                    
                    {/* AI Service Routes */}
                    <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                    <Route path="/services/ai-content-marketing-suite" element={<AIContentMarketingSuite />} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
                    <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} />
                    <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                    
                    {/* Additional Service Routes */}
                    <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                    <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                    <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                    <Route path="/services/ai-content-creation-suite" element={<AIContentCreationSuite />} />
                    <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                    <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                    <Route path="/services/sustainable-technology" element={<SustainableTechnology />} />
                    <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                    <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />
                    <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                    
                    {/* Additional Pages */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/help" element={<HelpCenter />} />
                    
                    {/* Missing Routes from Navigation */}
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/ai-solutions" element={<AiSolutions />} />
                    <Route path="/it-consulting" element={<ITConsulting />} />
                    <Route path="/space-tech" element={<SpaceTech />} />
                    <Route path="/quantum-computing" element={<QuantumComputing />} />
                    <Route path="/iot-edge-computing" element={<IoTEdgeComputing />} />
                    <Route path="/digital-twin" element={<DigitalTwin />} />
                    <Route path="/data-analytics" element={<DataAnalytics />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    
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
            
            {/* Smart Notification System */}
            <SmartNotificationSystem enabled={true} />
            
            {/* Chat Assistant */}
            <ChatAssistant 
              enabled={true} 
              position="bottom-right"
              theme="auto"
              language="en"
            />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;