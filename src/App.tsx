import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
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
const InnovativeServices2025 = React.lazy(() => import('./pages/InnovativeServices2025'));
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

// New IT Infrastructure & Cloud Services
const CloudInfrastructureOptimization = React.lazy(() => import('./pages/services/CloudInfrastructureOptimization'));
const AdvancedCybersecuritySuite = React.lazy(() => import('./pages/services/AdvancedCybersecuritySuite'));
const EnterpriseDataPlatform = React.lazy(() => import('./pages/services/EnterpriseDataPlatform'));
const SoftwareDefinedNetworkPlatform = React.lazy(() => import('./pages/services/SoftwareDefinedNetworkPlatform'));
const IoTEdgeComputingPlatform = React.lazy(() => import('./pages/services/IoTEdgeComputingPlatform'));
const BlockchainWeb3Platform = React.lazy(() => import('./pages/services/BlockchainWeb3Platform'));
const APIManagementPlatform = React.lazy(() => import('./pages/services/APIManagementPlatform'));
const DisasterRecoveryPlatform = React.lazy(() => import('./pages/services/DisasterRecoveryPlatform'));
const ITSMPlatform = React.lazy(() => import('./pages/services/ITSMPlatform'));
const PerformanceMonitoringPlatform = React.lazy(() => import('./pages/services/PerformanceMonitoringPlatform'));
const IdentityAccessManagementPlatform = React.lazy(() => import('./pages/services/IdentityAccessManagementPlatform'));

// Additional AI Services
const AICustomerExperiencePlatform = React.lazy(() => import('./pages/services/AICustomerExperiencePlatform'));
const AIHRTalentAnalytics = React.lazy(() => import('./pages/services/AIHRTalentAnalytics'));
const AIMarketingAttributionPlatform = React.lazy(() => import('./pages/services/AIMarketingAttributionPlatform'));
const AIPredictiveMaintenancePlatform = React.lazy(() => import('./pages/services/AIPredictiveMaintenancePlatform'));
const AIContentOptimizationEngine = React.lazy(() => import('./pages/services/AIContentOptimizationEngine'));
const AIResearchAssistantPlatform = React.lazy(() => import('./pages/services/AIResearchAssistantPlatform'));
const AIAutonomousOperationsPlatform = React.lazy(() => import('./pages/services/AIAutonomousOperationsPlatform'));
const AIMetaverseDevelopmentPlatform = React.lazy(() => import('./pages/services/AIMetaverseDevelopmentPlatform'));
const AISpaceTechnologyPlatform = React.lazy(() => import('./pages/services/AISpaceTechnologyPlatform'));
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
                
                {/* New IT Infrastructure & Cloud Service Routes */}
                <Route path="/services/cloud-infrastructure-optimization" element={<CloudInfrastructureOptimization />} />
                <Route path="/services/advanced-cybersecurity-suite" element={<AdvancedCybersecuritySuite />} />
                <Route path="/services/enterprise-data-platform" element={<EnterpriseDataPlatform />} />
                <Route path="/services/software-defined-network-platform" element={<SoftwareDefinedNetworkPlatform />} />
                <Route path="/services/iot-edge-computing-platform" element={<IoTEdgeComputingPlatform />} />
                <Route path="/services/blockchain-web3-platform" element={<BlockchainWeb3Platform />} />
                <Route path="/services/api-management-platform" element={<APIManagementPlatform />} />
                <Route path="/services/disaster-recovery-platform" element={<DisasterRecoveryPlatform />} />
                <Route path="/services/itsm-platform" element={<ITSMPlatform />} />
                <Route path="/services/performance-monitoring-platform" element={<PerformanceMonitoringPlatform />} />
                <Route path="/services/identity-access-management-platform" element={<IdentityAccessManagementPlatform />} />
                
                {/* Additional AI Service Routes */}
                <Route path="/services/ai-customer-experience-platform" element={<AICustomerExperiencePlatform />} />
                <Route path="/services/ai-hr-talent-analytics" element={<AIHRTalentAnalytics />} />
                <Route path="/services/ai-marketing-attribution-platform" element={<AIMarketingAttributionPlatform />} />
                <Route path="/services/ai-predictive-maintenance-platform" element={<AIPredictiveMaintenancePlatform />} />
                <Route path="/services/ai-content-optimization-engine" element={<AIContentOptimizationEngine />} />
                <Route path="/services/ai-research-assistant-platform" element={<AIResearchAssistantPlatform />} />
                <Route path="/services/ai-autonomous-operations-platform" element={<AIAutonomousOperationsPlatform />} />
                <Route path="/services/ai-metaverse-development-platform" element={<AIMetaverseDevelopmentPlatform />} />
                <Route path="/services/ai-space-technology-platform" element={<AISpaceTechnologyPlatform />} />

                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
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