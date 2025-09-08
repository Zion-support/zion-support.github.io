import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/EnhancedContact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Legal = React.lazy(() => import('./pages/Legal'));
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding.tsx'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030.tsx'));

// Our new innovative services pages
const InnovativeServicesShowcase2029 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2029'));
const ComprehensivePricingGuide2029 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2029'));
const ComprehensiveServicesShowcase2029 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2029'));
const AIPoweredBusinessAutomation = createLazyComponent(() => import('./pages/AIPoweredBusinessAutomation'));
const QuantumComputingServices2029 = createLazyComponent(() => import('./pages/QuantumComputingServices2029'));

// Innovative services showcase 2025
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));
// Import real pages
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const InnovativeMicroSAASServices2025 = React.lazy(() => import('./pages/InnovativeMicroSAASServices2025'));

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Enhanced Header */}
        <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo and Brand */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Zion Tech Group</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Future Technology Solutions</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a>
                <a href="/services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Services</a>
                <a href="/comprehensive-services-showcase-2029" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">All Services</a>
                <a href="/ai-powered-business-automation" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Automation</a>
                <a href="/quantum-computing-services-2029" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Quantum</a>
                <a href="/innovative-services-showcase-2029" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Innovations</a>
                <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a>
                <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Contact</a>
                <a 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                <nav className="flex flex-col space-y-3 pt-4">
                  <a 
                    href="/" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                  >
                    Home
                  </a>
                  <a 
                    href="/services" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                  >
                    Services
                  </a>
                  <a 
                    href="/comprehensive-services-showcase-2029" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                  >
                    All Services
                  </a>
                  <a 
                    href="/ai-powered-business-automation" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                  >
                    Automation
                  </a>
                  <a 
                    href="/quantum-computing-services-2029" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                  >
                    Quantum
                  </a>
                  <a 
                    href="/innovative-services-showcase-2029" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                  >
                    Innovations
                  </a>
                  <a 
                    href="/about" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                  >
                    About
                  </a>
                  <a 
                    href="/contact" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                  >
                    Contact
                  </a>
                  <a 
                    href="/contact" 
                    onClick={closeMobileMenu}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                  >
                    Get Started
                  </a>
                </nav>
              </div>
            )}
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
            <Route path="/comprehensive-services-showcase-2029" element={<ComprehensiveServicesShowcase2029 />} />
            <Route path="/ai-powered-business-automation" element={<AIPoweredBusinessAutomation />} />
            <Route path="/quantum-computing-services-2029" element={<QuantumComputingServices2029 />} />
            
            {/* Fallback Route */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.881-6.08 2.33" />
                    </svg>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
                  <a 
                    href="/" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>

                    {/* New Innovative Micro SAAS Services 2026 */}
                    <Route path="/services/ai-legal-document-automation-platform" element={<ModernLayout><AILegalDocumentAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<ModernLayout><AIHealthcareAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-financial-risk-management-platform" element={<ModernLayout><AIFinancialRiskManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-supply-chain-optimization-platform" element={<ModernLayout><AISupplyChainOptimizationPlatform /></ModernLayout>} />

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="/comprehensive-services-showcase-2029" className="hover:text-white transition-colors">All Services 2029</a></li>
                  <li><a href="/ai-powered-business-automation" className="hover:text-white transition-colors">AI Business Automation</a></li>
                  <li><a href="/quantum-computing-services-2029" className="hover:text-white transition-colors">Quantum Computing 2029</a></li>
                  <li><a href="/innovative-services-showcase-2029" className="hover:text-white transition-colors">Innovative Services 2029</a></li>
                  <li><a href="/comprehensive-pricing-guide-2029" className="hover:text-white transition-colors">Pricing Guide</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Core Services</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Quantum Computing</a></li>
                </ul>
              </div>

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

                    {/* New Innovative AI Services 2026-2027 */}
                    <Route path="/services/ai-autonomous-financial-advisor" element={<ModernLayout><AIAutonomousFinancialAdvisor /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-healthcare-diagnostics" element={<ModernLayout><AIAutonomousHealthcareDiagnostics /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-cybersecurity-operations" element={<ModernLayout><AIAutonomousCybersecurityOperations /></ModernLayout>} />

                    {/* New Innovative AI Services 2025 - Additional */}
                    <Route path="/services/ai-autonomous-education-platform" element={<ModernLayout><AIAutonomousEducationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-agriculture-platform" element={<ModernLayout><AIAutonomousAgriculturePlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-energy-management-platform" element={<ModernLayout><AIAutonomousEnergyManagementPlatform /></ModernLayout>} />

                    {/* New Innovative Micro SAAS Services 2026 */}
                    <Route path="/services/ai-powered-customer-churn-predictor" element={<AIPoweredCustomerChurnPredictor />} />

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

                    {/* Showcase Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ModernLayout><ComprehensiveServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-ai-services-showcase-2025" element={<ModernLayout><InnovativeAIServicesShowcase2025 /></ModernLayout>} />
                    <Route path="/innovative-services-showcase-2025" element={<ModernLayout><InnovativeServicesShowcase2025 /></ModernLayout>} />
        
        <EnhancedFuturisticFooter />
        <ChatAssistant />
        <PerformanceOptimizer />
      </div>
    </ErrorBoundary>
  );
}

export default App;