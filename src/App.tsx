import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Sidebar } from './components/Sidebar';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { EnhancedAccessibilityPanel } from './components/EnhancedAccessibilityPanel';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import { InteractiveUserExperience } from './components/InteractiveUserExperience';
import SecurityEnhancer from './components/SecurityEnhancer';

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

// New Innovative Services 2025
const AIEdgeComputingPlatform = createLazyComponent(() => import('./pages/services/AI-Edge-Computing-Platform'));
const AIDigitalTwinPlatform = createLazyComponent(() => import('./pages/services/AI-Digital-Twin-Platform'));
const AICustomerExperienceAnalytics = createLazyComponent(() => import('./pages/services/AI-Customer-Experience-Analytics'));

// New Innovative AI Services 2025 - Additional
const AIAutonomousLegalResearchPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-legal-research-platform'));
const AIAutonomousManufacturingPlatform = createLazyComponent(() => import('./pages/services/ai-autonomous-manufacturing-platform'));
const AICarbonFootprintManagementPlatform = createLazyComponent(() => import('./pages/services/ai-carbon-footprint-management-platform'));
const AIMentalHealthSupportPlatform = createLazyComponent(() => import('./pages/services/ai-mental-health-support-platform'));
const AISmartHomeEnergyManagementPlatform = createLazyComponent(() => import('./pages/services/ai-smart-home-energy-management-platform'));
// Innovative Services Showcase 2026
const InnovativeServicesShowcase2026 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2026'));

// Revolutionary Services Showcase 2030
const InnovativeServicesShowcase2030 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2030'));

// New Innovative Services 2025 - Combined from both versions
const AIEnterpriseAutomationPlatform = createLazyComponent(() => import('./pages/services/ai-enterprise-automation-platform'));
const AIDataAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-data-analytics-platform'));
const ITInfrastructureManagement = createLazyComponent(() => import('./pages/services/it-infrastructure-management'));
const MicroSaaSSolutionsComprehensive = createLazyComponent(() => import('./pages/services/micro-saas-solutions-comprehensive'));

// New Innovative AI Services 2025 - Enhanced
const AIQuantumComputingSolutions = createLazyComponent(() => import('./pages/services/ai-quantum-computing-solutions'));
const AIContentCreationStudio = createLazyComponent(() => import('./pages/services/ai-content-creation-studio'));
const EdgeComputingSolutions = createLazyComponent(() => import('./pages/services/edge-computing-solutions'));

// New Innovative AI Services 2025 - From remote version
const AIAutonomousBusinessOperationsPlatform = createLazyComponent(() => import('./pages/services/AI-Autonomous-Business-Operations-Platform'));
const AICustomerExperienceAnalyticsPlatform = createLazyComponent(() => import('./pages/services/AI-Customer-Experience-Analytics-Platform'));

// Additional service pages from remote branch
const CloudDevOps = createLazyComponent(() => import('./pages/services/cloud-devops'));
const Cybersecurity = createLazyComponent(() => import('./pages/services/cybersecurity'));
const DigitalTransformation = createLazyComponent(() => import('./pages/services/digital-transformation'));
const ITInfrastructure = createLazyComponent(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = createLazyComponent(() => import('./pages/services/ai-business-intelligence'));
const AIHealthcareAnalytics = createLazyComponent(() => import('./pages/services/ai-healthcare-analytics-platform'));

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

// 2031 Cutting-Edge Services
const ZionCuttingEdgeServices2031 = createLazyComponent(() => import('./pages/ZionCuttingEdgeServices2031'));

// Comprehensive Pricing Guide 2031
const ComprehensivePricingGuide2031 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2031'));

// Additional pages that actually exist
const Solutions = createLazyComponent(() => import('./pages/solutions'));
const CaseStudies = createLazyComponent(() => import('./pages/case-studies'));
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
const News = createLazyComponent(() => import('./pages/News'));
const Signup = createLazyComponent(() => import('./pages/Signup'));
const Testimonials = createLazyComponent(() => import('./pages/Testimonials'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Tutorials = createLazyComponent(() => import('./pages/Tutorials'));
const Support = createLazyComponent(() => import('./pages/Support'));
const Sustainability = createLazyComponent(() => import('./pages/Sustainability'));

const StartupSolutions = createLazyComponent(() => import('./pages/StartupSolutions'));
const SupplyChain = createLazyComponent(() => import('./pages/SupplyChain'));
const Talent = createLazyComponent(() => import('./pages/Talent'));
const VideoCall = createLazyComponent(() => import('./pages/VideoCall'));
const Wishlist = createLazyComponent(() => import('./pages/Wishlist'));

// New pages I've created
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Team = createLazyComponent(() => import('./pages/Team'));
const Events = createLazyComponent(() => import('./pages/Events'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-zion-slate-light mb-6">We're working on fixing the problem.</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error!}
          resetErrorBoundary={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    return this.props.children;
  }
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <Router>
            <div className="min-h-screen bg-zion-blue">
              <Header onMenuClick={toggleSidebar} />
              
              <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
              
              <main className="flex-1">
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<Home />} />
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
                    
                    {/* New Innovative Services 2025 */}
                    <Route path="/services/ai-edge-computing-platform" element={<AIEdgeComputingPlatform />} />
                    <Route path="/services/ai-digital-twin-platform" element={<AIDigitalTwinPlatform />} />
                    <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
                    
                    {/* New Innovative AI Services 2025 - Additional */}
                    <Route path="/services/ai-autonomous-legal-research-platform" element={<AIAutonomousLegalResearchPlatform />} />
                    <Route path="/services/ai-autonomous-manufacturing-platform" element={<AIAutonomousManufacturingPlatform />} />
                    <Route path="/services/ai-carbon-footprint-management-platform" element={<AICarbonFootprintManagementPlatform />} />
                    <Route path="/services/ai-mental-health-support-platform" element={<AIMentalHealthSupportPlatform />} />
                    <Route path="/services/ai-smart-home-energy-management-platform" element={<AISmartHomeEnergyManagementPlatform />} />
                    
                    {/* Showcase pages */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
                    
                    {/* 2031 Cutting-Edge Services */}
                    <Route path="/zion-cutting-edge-services-2031" element={<ZionCuttingEdgeServices2031 />} />
                    
                    {/* Comprehensive Pricing Guide 2031 */}
                    <Route path="/comprehensive-pricing-guide-2031" element={<ComprehensivePricingGuide2031 />} />
                    
                    {/* Additional pages */}
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/request-quote" element={<RequestQuote />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/sustainability" element={<Sustainability />} />
                    <Route path="/space-tech" element={<SpaceTech />} />
                    <Route path="/startup-solutions" element={<StartupSolutions />} />
                    <Route path="/supply-chain" element={<SupplyChain />} />
                    <Route path="/talent" element={<Talent />} />
                    <Route path="/video-call/:roomId" element={<VideoCall />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    
                    {/* New pages I've created */}
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/events" element={<Events />} />
<Route path="/innovative-services-showcase-2026" element={<ModernLayout><InnovativeServicesShowcase2026 /></ModernLayout>} />

{/* Revolutionary Services Showcase 2030 */}
<Route path="/innovative-services-showcase-2030" element={<ModernLayout><InnovativeServicesShowcase2030 /></ModernLayout>} />

                    {/* New Innovative Services 2025 - Combined from both versions */}
                    <Route path="/services/ai-enterprise-automation-platform" element={<AIEnterpriseAutomationPlatform />} />
                    <Route path="/services/ai-data-analytics-platform" element={<AIDataAnalyticsPlatform />} />
                    <Route path="/services/it-infrastructure-management" element={<ITInfrastructureManagement />} />
                    <Route path="/services/micro-saas-solutions-comprehensive" element={<MicroSaaSSolutionsComprehensive />} />

                    {/* New Innovative AI Services 2025 - Enhanced */}
                    <Route path="/services/ai-enterprise-intelligence-platform" element={<AIEnterpriseIntelligencePlatform />} />
                    <Route path="/services/ai-quantum-computing-solutions" element={<AIQuantumComputingSolutions />} />
                    <Route path="/services/ai-content-creation-studio" element={<AIContentCreationStudio />} />
                    <Route path="/services/edge-computing-solutions" element={<EdgeComputingSolutions />} />

                    {/* New Innovative AI Services 2025 - From remote version */}
                    <Route path="/services/ai-autonomous-business-operations-platform" element={<AIAutonomousBusinessOperationsPlatform />} />
                    <Route path="/services/ai-customer-experience-analytics-platform" element={<AICustomerExperienceAnalyticsPlatform />} />

                    {/* Additional service routes from remote branch */}
                    <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
                    <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                    <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                    <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />

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
                    <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                    <Route path="/cloud-solutions" element={<CloudSolutions />} />
                    <Route path="/emerging-tech" element={<EmergingTech />} />

                    {/* Missing pages referenced in navigation */}
                    <Route path="/request-quote" element={<ModernLayout><RequestQuote /></ModernLayout>} />
                    <Route path="/marketplace" element={<ModernLayout><Marketplace /></ModernLayout>} />
                    <Route path="/signup" element={<ModernLayout><Signup /></ModernLayout>} />
                    <Route path="/blog" element={<ModernLayout><Blog /></ModernLayout>} />
                    <Route path="/docs" element={<ModernLayout><Docs /></ModernLayout>} />
                    <Route path="/white-papers" element={<ModernLayout><WhitePapers /></ModernLayout>} />
                    <Route path="/webinars" element={<ModernLayout><Webinars /></ModernLayout>} />
                    <Route path="/training" element={<ModernLayout><Training /></ModernLayout>} />
                    <Route path="/research-development" element={<ModernLayout><ResearchDevelopment /></ModernLayout>} />
                    <Route path="/case-studies" element={<ModernLayout><CaseStudies /></ModernLayout>} />
                    <Route path="/partners" element={<ModernLayout><Partners /></ModernLayout>} />
                    <Route path="/events" element={<ModernLayout><Events /></ModernLayout>} />
                    <Route path="/careers" element={<ModernLayout><Careers /></ModernLayout>} />
                    <Route path="/help" element={<ModernLayout><Help /></ModernLayout>} />
                    <Route path="/pricing" element={<ModernLayout><Pricing /></ModernLayout>} />

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
              </main>
              
              <Footer />
              
              {/* Enhanced Components */}
              <EnhancedAccessibilityPanel />
              <AdvancedPerformanceMonitor />
              <InteractiveUserExperience />
              <SecurityEnhancer />
              <ChatAssistant />
            </div>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;