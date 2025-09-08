import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { MainSidebar } from './components/MainSidebar';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices'));
const AIServices = React.lazy(() => import('./pages/AIServices'));
const AISolutions = React.lazy(() => import('./pages/AISolutions'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const MicroSaaS = React.lazy(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = React.lazy(() => import('./pages/MicroSAASSolutions'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Signup = React.lazy(() => import('./pages/Signup'));
// Removed missing page import: ZionHireAI
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const ServicesAdvertising = React.lazy(() => import('./pages/ServicesAdvertising'));
const Help = React.lazy(() => import('./pages/Help'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const ResearchDevelopment = React.lazy(() => import('./pages/research-development'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Developers = React.lazy(() => import('./pages/Developers'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Status = React.lazy(() => import('./pages/Status'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

// New service page imports (use canonical kebab-case paths that exist)
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));

// Additional simple pages
const Events = React.lazy(() => import('./pages/Events'));
const Security = React.lazy(() => import('./pages/Security'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Legal = React.lazy(() => import('./pages/Legal'));
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// Support and onboarding pages
const GetStarted = createLazyComponent(() => import('./pages/GetStarted'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Support = createLazyComponent(() => import('./pages/Support'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Status = createLazyComponent(() => import('./pages/Status'));

// New AI Services 2025 - Combined from both versions
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/AI-Cybersecurity-Platform'));
const AIHealthcare = createLazyComponent(() => import('./pages/services/AI-Healthcare-Platform'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Hybrid-Platform'));
const AIAutonomousResearchAssistant = createLazyComponent(() => import('./pages/services/ai-autonomous-research-assistant'));
const AIFinancialTradingPlatform = createLazyComponent(() => import('./pages/services/ai-financial-trading-platform'));
const BlockchainEnterpriseSolutions = createLazyComponent(() => import('./pages/services/blockchain-enterprise-solutions'));

// New pages
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensiveServicesLanding2027 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2027'));
const InnovativeServices2025 = React.lazy(() => import('./pages/InnovativeServices2025'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const ComprehensiveServicesLanding2030 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2030'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));
const InnovativeServicesOverview = React.lazy(() => import('./pages/InnovativeServicesOverview'));

// Missing Service Pages
const AIAutonomousResearchAssistant = createLazyComponent(() => import('./pages/services/ai-autonomous-research-assistant'));
const CloudDevOpsAutomation = createLazyComponent(() => import('./pages/services/cloud-devops-automation'));
const ITInfrastructure = createLazyComponent(() => import('./pages/services/it-infrastructure'));
const CybersecuritySolutions = createLazyComponent(() => import('./pages/services/cybersecurity-solutions'));
const NetworkInfrastructure = createLazyComponent(() => import('./pages/services/network-infrastructure'));
const ITOnsiteServices = createLazyComponent(() => import('./pages/services/it-onsite-services'));

// Get Started Page
const GetStarted = createLazyComponent(() => import('./pages/GetStarted'));

// Showcase pages
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));
const InnovativeAIServicesShowcase2025 = createLazyComponent(() => import('./pages/InnovativeAIServicesShowcase2025'));

// Additional pages for navigation
const QuantumComputing = createLazyComponent(() => import('./pages/quantum-computing'));
const Blockchain = createLazyComponent(() => import('./pages/blockchain'));
const IoTSolutions = createLazyComponent(() => import('./pages/iot-solutions'));

// Company pages
const News = createLazyComponent(() => import('./pages/News'));
const Events = createLazyComponent(() => import('./pages/Events'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Careers = createLazyComponent(() => import('./pages/careers'));

// Resource pages
const Blog = createLazyComponent(() => import('./pages/blog'));
const Docs = createLazyComponent(() => import('./pages/docs'));
const WhitePapers = createLazyComponent(() => import('./pages/white-papers'));
const Training = createLazyComponent(() => import('./pages/training'));
const Webinars = createLazyComponent(() => import('./pages/webinars'));
const CaseStudies = createLazyComponent(() => import('./pages/case-studies'));
const Support = createLazyComponent(() => import('./pages/support'));

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

// Not Found page
const NotFound = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <EnhancedSEO
      title="Page Not Found - Zion Tech Group"
      description="The page you're looking for doesn't exist."
      noindex
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-xl text-gray-300">Please check the URL or go back to the homepage.</p>
    </div>
  </div>
);

// Additional missing pages
const Training = React.lazy(() => import('./pages/Training'));
const InvestorRelations = React.lazy(() => import('./pages/InvestorRelations'));
const Press = React.lazy(() => import('./pages/Press'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
          <div className="flex">
            <MainSidebar />
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<EnhancedContact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/docs" element={<Documentation />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                  <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                  <Route path="/services/comprehensive-2030" element={<ComprehensiveServicesLanding2030 />} />
                  <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                  <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                  <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                  <Route path="/services/overview" element={<InnovativeServicesOverview />} />
                  <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                  <Route path="/pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                  <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                  <Route path="/request-quote" element={<RequestQuote />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/innovative-micro-saas-services-2025" element={<InnovativeMicroSAASServices2025 />} />
                  <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                  <Route path="/comprehensive-services-landing-2027" element={<ComprehensiveServicesLanding2027 />} />
                  <Route path="/services/innovative-2025" element={<InnovativeServices2025 />} />
                  <Route path="/schedule-demo" element={<ScheduleDemo />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/developers" element={<Developers />} />
                  <Route path="/demo" element={<Demo />} />
                  <Route path="/legal" element={<Legal />} />
                  {/* Service Routes - only for existing pages */}
                  <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                  <Route path="/services/digital-twin" element={<DigitalTwin />} />
                  <Route path="/services/data-analytics" element={<DataAnalytics />} />
                  <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                  <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                  
                  {/* New innovative service routes */}
                  <Route path="/services/ai-legal-document-analysis" element={<AILegalDocumentAnalysis />} />
                  <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                  <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                  <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />

                    {/* New AI Services 2025 */}
                    <Route path="/services/ai-supply-chain-optimization" element={<ModernLayout><AISupplyChainOptimization /></ModernLayout>} />
                    <Route path="/services/ai-cybersecurity-platform" element={<ModernLayout><AICybersecurity /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-platform" element={<ModernLayout><AIHealthcare /></ModernLayout>} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<ModernLayout><AIQuantumHybridPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-research-assistant" element={<ModernLayout><AIAutonomousResearchAssistant /></ModernLayout>} />
                    <Route path="/services/ai-financial-trading-platform" element={<ModernLayout><AIFinancialTradingPlatform /></ModernLayout>} />
                    <Route path="/services/blockchain-enterprise-solutions" element={<ModernLayout><BlockchainEnterpriseSolutions /></ModernLayout>} />

                    {/* New Innovative Services 2025 - Combined from both versions */}
                    <Route path="/services/ai-enterprise-automation-platform" element={<AIEnterpriseAutomationPlatform />} />
                    <Route path="/services/ai-data-analytics-platform" element={<AIDataAnalyticsPlatform />} />
                    <Route path="/services/it-infrastructure-management" element={<ITInfrastructureManagement />} />
                    <Route path="/services/micro-saas-solutions-comprehensive" element={<MicroSaaSSolutionsComprehensive />} />

                    {/* New Innovative AI Services 2025 - From remote version */}
                    <Route path="/services/ai-quantum-neural-network-platform" element={<AIQuantumNeuralNetworkPlatform />} />
                    <Route path="/services/ai-autonomous-business-operations-platform" element={<AIAutonomousBusinessOperationsPlatform />} />
                    <Route path="/services/ai-customer-experience-analytics-platform" element={<AICustomerExperienceAnalyticsPlatform />} />

                    {/* Missing Service Pages */}
                    <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                    <Route path="/services/cloud-devops-automation" element={<CloudDevOpsAutomation />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/cybersecurity-solutions" element={<CybersecuritySolutions />} />
                    <Route path="/services/network-infrastructure" element={<NetworkInfrastructure />} />
                    <Route path="/services/it-onsite-services" element={<ITOnsiteServices />} />

                    {/* Get Started Page */}
                    <Route path="/get-started" element={<GetStarted />} />

                    {/* Showcase Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ModernLayout><ComprehensiveServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-ai-services-showcase-2025" element={<ModernLayout><InnovativeAIServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-services-showcase-2025" element={<ModernLayout><InnovativeServicesShowcase2025 /></ModernLayout>} />

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
                    <Route path="/cloud-solutions" element={<CloudSolutions />} />
                    <Route path="/emerging-tech" element={<EmergingTech />} />
                    <Route path="/get-started" element={<GetStarted />} />
                    <Route path="/request-quote" element={<RequestQuote />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/status" element={<Status />} />

                    {/* Additional navigation pages */}
                    <Route path="/quantum-computing" element={<QuantumComputing />} />
                    <Route path="/blockchain" element={<Blockchain />} />
                    <Route path="/iot-solutions" element={<IoTSolutions />} />

                    {/* Company pages */}
                    <Route path="/news" element={<News />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/careers" element={<Careers />} />

                    {/* Resource pages */}
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/support" element={<Support />} />

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
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;