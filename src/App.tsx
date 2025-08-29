import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Import futuristic CSS
import './styles/futuristic-design-system.css';

// Enhanced Layout Components
import { AppHeader } from './layout/AppHeader';
import { Sidebar } from './components/Sidebar';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { SEO } from './components/SEO';
import { FloatingActionButton } from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { ErrorBoundary } from './components/ErrorBoundary';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
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
const Blog = createLazyComponent(() => import('./pages/Blog'));
const BlogPost = createLazyComponent(() => import('./pages/BlogPost'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Team = createLazyComponent(() => import('./pages/Team'));
const HelpCenter = createLazyComponent(() => import('./pages/HelpCenter'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Developers = createLazyComponent(() => import('./pages/Developers'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const Support = createLazyComponent(() => import('./pages/Support'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));
const Login = createLazyComponent(() => import('./pages/Login'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const SearchPage = createLazyComponent(() => import('./pages/SearchPage'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Resources = createLazyComponent(() => import('./pages/Resources'));
const Solutions = createLazyComponent(() => import('./pages/Solutions'));

// Service pages
const Services = createLazyComponent(() => import('./pages/Services'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));

// Service detail pages
const CloudDevOps = createLazyComponent(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = createLazyComponent(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = createLazyComponent(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = createLazyComponent(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = createLazyComponent(() => import('./pages/services/AIBusinessIntelligence'));
const AISalesCopilot = createLazyComponent(() => import('./pages/services/AISalesCopilot'));
const CloudFinOpsOptimizer = createLazyComponent(() => import('./pages/services/CloudFinOpsOptimizer'));
const AIComplianceAssistant = createLazyComponent(() => import('./pages/services/AIComplianceAssistant'));
const AIPoweredSEO = createLazyComponent(() => import('./pages/services/AIPoweredSEO'));
const InterviewAssessmentAI = createLazyComponent(() => import('./pages/services/InterviewAssessmentAI'));
const HelpdeskPlatform = createLazyComponent(() => import('./pages/services/HelpdeskPlatform'));
const DSRPortal = createLazyComponent(() => import('./pages/services/DSRPortal'));
const SecurityHeadersCSP = createLazyComponent(() => import('./pages/services/SecurityHeadersCSP'));
const ZeroTrustNetworkAccess = createLazyComponent(() => import('./pages/services/ZeroTrustNetworkAccess'));
const SpaceTech = createLazyComponent(() => import('./pages/services/SpaceTech'));
const MicroCRM = createLazyComponent(() => import('./pages/services/MicroCRM'));
const WebsiteAnalytics = createLazyComponent(() => import('./pages/services/WebsiteAnalytics'));
const AIProjectManagement = createLazyComponent(() => import('./pages/services/AIProjectManagement'));
const AICustomerSupportAutomation = createLazyComponent(() => import('./pages/services/AICustomerSupportAutomation'));
const AIFinancialAnalytics = createLazyComponent(() => import('./pages/services/AIFinancialAnalytics'));
const DigitalTransformation = createLazyComponent(() => import('./pages/services/DigitalTransformation'));
const QuantumComputing = createLazyComponent(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = createLazyComponent(() => import('./pages/services/iot-edge-computing'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/ai-cybersecurity'));
const AIContentCreation = createLazyComponent(() => import('./pages/services/ai-content-creation'));
const AIHRPlatform = createLazyComponent(() => import('./pages/services/ai-hr-platform'));
const SustainableTechnology = createLazyComponent(() => import('./pages/services/sustainable-technology'));
const AIPredictiveMaintenance = createLazyComponent(() => import('./pages/services/ai-predictive-maintenance'));
const QuantumMachineLearning = createLazyComponent(() => import('./pages/services/quantum-machine-learning'));
const FinOpsAdvisor = createLazyComponent(() => import('./pages/services/FinOpsAdvisor'));

// Additional pages
const ITConsulting = createLazyComponent(() => import('./pages/ITConsulting'));
const API = createLazyComponent(() => import('./pages/API'));
const DeveloperPortal = createLazyComponent(() => import('./pages/DeveloperPortal'));
const AiSolutions = createLazyComponent(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = createLazyComponent(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = createLazyComponent(() => import('./pages/solutions/Healthcare'));

// Comprehensive pricing and showcase pages
const ComprehensivePricingGuide2025 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2025'));
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));
const ComprehensiveServicesShowcase2027 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2027'));
const ComprehensiveServicesShowcase2029 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2029'));
const ComprehensiveServicesShowcase2031 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2031'));

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-red-900">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-red-200 mb-4">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Try again
      </button>
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
            <EnhancedAccessibilityEnhancer enabled={true} />
            
            {/* Mobile Experience Enhancer */}
            <MobileExperienceEnhancer enabled={true} />
            
            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} showMetrics={true} />
            
            {/* Header */}
            <AppHeader />
            <Sidebar />
            
            {/* Main Content */}
            <main className="flex-1 lg:ml-80">
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
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    <Route path="/request-quote" element={<RequestQuote />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/developers" element={<Developers />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    
                    {/* Service Routes */}
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />
                    <Route path="/it-consulting" element={<ITConsulting />} />
                    <Route path="/space-tech" element={<SpaceTech />} />
                    
                    {/* Sitemap Routes */}
                    <Route path="/ai-solutions" element={<AiSolutions />} />
                    <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
                    <Route path="/solutions/healthcare" element={<SolutionsHealthcare />} />
                    
                    {/* Service Detail Routes */}
                    <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/services/digital-twin" element={<DigitalTwin />} />
                    <Route path="/services/data-analytics" element={<DataAnalytics />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
                    <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                    <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                    <Route path="/services/ai-seo" element={<AIPoweredSEO />} />
                    <Route path="/services/interview-assessment" element={<InterviewAssessmentAI />} />
                    <Route path="/services/helpdesk" element={<HelpdeskPlatform />} />
                    <Route path="/services/dsr-portal" element={<DSRPortal />} />
                    <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} />
                    <Route path="/services/zero-trust-network-access" element={<ZeroTrustNetworkAccess />} />
                    <Route path="/services/micro-crm" element={<MicroCRM />} />
                    <Route path="/services/website-analytics" element={<WebsiteAnalytics />} />
                    <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                    <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} />
                    <Route path="/services/ai-financial-analytics" element={<AIFinancialAnalytics />} />
                    <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                    <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                    <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                    <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                    <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                    <Route path="/services/sustainable-technology" element={<SustainableTechnology />} />
                    <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                    <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />
                    <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                    
                    {/* Comprehensive Services Routes */}
                    <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
                    <Route path="/comprehensive-services-showcase-2027" element={<ComprehensiveServicesShowcase2027 />} />
                    <Route path="/comprehensive-services-showcase-2029" element={<ComprehensiveServicesShowcase2029 />} />
                    <Route path="/comprehensive-services-showcase-2031" element={<ComprehensiveServicesShowcase2031 />} />
                    
                    {/* Additional Pages */}
                    <Route path="/api" element={<API />} />
                    <Route path="/developer-portal" element={<DeveloperPortal />} />
                    
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