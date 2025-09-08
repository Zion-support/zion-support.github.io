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

// Enhanced components
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const Community = React.lazy(() => import('./pages/Community'));
const Developers = React.lazy(() => import('./pages/Developers'));
const Demo = React.lazy(() => import('./pages/Demo'));

// New pages
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensiveServicesLanding2027 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2027'));
const InnovativeServices2025 = React.lazy(() => import('./pages/NewInnovativeServices2025'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const ComprehensiveServicesLanding2030 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2030'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));
const InnovativeServicesOverview = React.lazy(() => import('./pages/InnovativeServicesOverview'));

// New innovative services
const AILegalDocumentAnalysis = React.lazy(() => import('./pages/services/ai-legal-document-analysis'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/ai-supply-chain-optimization'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/ai-healthcare-analytics'));
const AIFinancialTrading = React.lazy(() => import('./pages/services/ai-financial-trading'));
const AIAutonomousResearchAssistant = React.lazy(() => import('./pages/services/ai-autonomous-research-assistant'));
const AICustomerExperiencePlatform = React.lazy(() => import('./pages/services/ai-customer-experience-platform'));
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
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
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
                <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/comprehensive-services-landing-2027" element={<ComprehensiveServicesLanding2027 />} />
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
                <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                <Route path="/services/ai-customer-experience-platform" element={<AICustomerExperiencePlatform />} />

                    {/* New AI Services 2025 */}
                    <Route path="/services/ai-supply-chain-optimization" element={<ModernLayout><AISupplyChainOptimization /></ModernLayout>} />
                    <Route path="/services/ai-cybersecurity-platform" element={<ModernLayout><AICybersecurity /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-platform" element={<ModernLayout><AIHealthcare /></ModernLayout>} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<ModernLayout><AIQuantumHybridPlatform /></ModernLayout>} />
                    <Route path="/services/ai-autonomous-research-assistant" element={<ModernLayout><AIAutonomousResearchAssistant /></ModernLayout>} />
                    <Route path="/services/ai-financial-trading-platform" element={<ModernLayout><AIFinancialTradingPlatform /></ModernLayout>} />
                    <Route path="/services/blockchain-enterprise-solutions" element={<ModernLayout><BlockchainEnterpriseSolutions /></ModernLayout>} />

            {/* Mobile Navigation */}
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <nav className="space-y-3">
                <a href="/" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">Home</a>
                <div className="space-y-2">
                  <div className="font-medium text-gray-900 dark:text-white">Services</div>
                  <div className="ml-4 space-y-2">
                    <div className="mb-2">
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">AI & Automation</div>
                      <a href="/ai-autonomous-business-automation" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">Business Automation</a>
                      <a href="/ai-cybersecurity-platform" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">AI Cybersecurity</a>
                    </div>
                    <div className="mb-2">
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Platforms</div>
                      <a href="/cloud-devops-platform" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">Cloud & DevOps</a>
                      <a href="/data-analytics-platform" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">Data Analytics</a>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                      <a href="/comprehensive-services-2029" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">All Services</a>
                      <a href="/comprehensive-pricing-guide-2029" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1">Pricing Guide</a>
                    </div>
                  </div>
                </div>
                <a href="/about" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">About</a>
                <a href="/contact" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">Contact</a>
                <a href="tel:+13024640950" className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-center">
                  Call +1 302 464 0950
                </a>
              </nav>
            </div>
          </div>
        </header>

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
            
            {/* Our New Innovative Services Routes */}
            <Route path="/innovative-services-showcase-2029" element={<InnovativeServicesShowcase2029 />} />
            <Route path="/comprehensive-pricing-guide-2029" element={<ComprehensivePricingGuide2029 />} />
            <Route path="/comprehensive-services-2029" element={<ComprehensiveServices2029 />} />
            <Route path="/innovative-ai-services-2029" element={<InnovativeAIServices2029 />} />
            
            {/* New Comprehensive Service Platforms */}
            <Route path="/ai-autonomous-business-automation" element={<AIAutonomousBusinessAutomation />} />
            <Route path="/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} />
            <Route path="/cloud-devops-platform" element={<CloudDevOpsPlatform />} />
            <Route path="/data-analytics-platform" element={<DataAnalyticsPlatform />} />
            
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

                    {/* New Innovative Micro SAAS Services 2026 */}
                    <Route path="/services/ai-legal-document-automation-platform" element={<ModernLayout><AILegalDocumentAutomationPlatform /></ModernLayout>} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<ModernLayout><AIHealthcareAnalyticsPlatform /></ModernLayout>} />
                    <Route path="/services/ai-financial-risk-management-platform" element={<ModernLayout><AIFinancialRiskManagementPlatform /></ModernLayout>} />
                    <Route path="/services/ai-supply-chain-optimization-platform" element={<ModernLayout><AISupplyChainOptimizationPlatform /></ModernLayout>} />

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="/ai-autonomous-business-automation" className="hover:text-white transition-colors">AI Business Automation</a></li>
                  <li><a href="/ai-cybersecurity-platform" className="hover:text-white transition-colors">AI Cybersecurity</a></li>
                  <li><a href="/cloud-devops-platform" className="hover:text-white transition-colors">Cloud & DevOps</a></li>
                  <li><a href="/data-analytics-platform" className="hover:text-white transition-colors">Data Analytics</a></li>
                  <li><a href="/comprehensive-services-2029" className="hover:text-white transition-colors">All Services</a></li>
                </ul>
              </div>

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