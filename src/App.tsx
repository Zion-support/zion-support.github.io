import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Careers = React.lazy(() => import('./pages/Careers'));
const News = React.lazy(() => import('./pages/News'));
const Press = React.lazy(() => import('./pages/Press'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

// Enhanced lazy loading with preloading hints
const Services = lazy(() => import('./pages/Services'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const EmergingTech = lazy(() => import('./pages/EmergingTech'));

// New pages
const MicroSaasServicesPage = lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// 2027 Innovation Pages
const CuttingEdgeInnovations2027 = lazy(() => import('./pages/CuttingEdgeInnovations2027'));
const PracticalMicroSaas2027 = lazy(() => import('./pages/PracticalMicroSaas2027'));
const AllServices2027 = lazy(() => import('./pages/AllServices2027'));

// Service pages
const AIServices = lazy(() => import('./pages/services/AIServices'));
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/services/EnterpriseIT'));
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));

// Additional innovative services
const IoTManagementPlatform = lazy(() => import('./pages/services/IoTManagementPlatform'));
const BlockchainDeFiSolutions = lazy(() => import('./pages/services/BlockchainDeFiSolutions'));

// New innovative service pages
const AIWorkflowAutomation = lazy(() => import('./pages/services/AIWorkflowAutomation'));
const BlockchainEnterpriseSolutions = lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const IoTDataAnalytics = lazy(() => import('./pages/services/IoTDataAnalytics'));

// Next-Generation Innovative Services 2025
const NextGenInnovativeServices2025 = lazy(() => import('./pages/NextGenInnovativeServices2025'));
const InnovativeServicesShowcase = lazy(() => import('./pages/InnovativeServicesShowcase'));

// Ultimate Innovative Services 2026
const UltimateServicesShowcase2026 = lazy(() => import('./pages/UltimateServicesShowcase2026'));
const ComprehensivePricing2026 = lazy(() => import('./pages/ComprehensivePricing2026'));

// Additional innovative micro SAAS services
const AILegalDocumentAutomation = lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = lazy(() => import('./pages/services/AIFinancialTrading'));
const AISupplyChainOptimization = lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AICustomerServiceAutomation = lazy(() => import('./pages/services/AICustomerServiceAutomation'));

// Missing pages from analysis
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));
const AIPoweredITAssetManagement = lazy(() => import('./pages/AIPoweredITAssetManagement'));
const SOC2ComplianceAutomation = lazy(() => import('./pages/SOC2ComplianceAutomation'));
const AIAutonomousResearchAssistant = lazy(() => import('./pages/AIAutonomousResearchAssistant'));
const FiveGEnterpriseSolutions = lazy(() => import('./pages/5GEnterpriseSolutions'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const NewServices = lazy(() => import('./pages/NewServices'));

// Additional missing pages from existing structure
const Partners = React.lazy(() => import('./pages/Partners'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Training = React.lazy(() => import('./pages/Training'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Events = React.lazy(() => import('./pages/Events'));
const Support = React.lazy(() => import('./pages/Support'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const FinancialSolutions = React.lazy(() => import('./pages/FinancialSolutions'));
const Mobile = React.lazy(() => import('./pages/Mobile'));
const QuantumTechnology = React.lazy(() => import('./pages/QuantumTechnology'));
const SpaceTech = React.lazy(() => import('./pages/SpaceTech'));

// Service pages from existing structure
const CloudServices = React.lazy(() => import('./pages/services/Cloud'));
const ITServices = React.lazy(() => import('./pages/services/ITServices'));
const BlockchainServices = React.lazy(() => import('./pages/services/BlockchainServices'));
const MobileServices = React.lazy(() => import('./pages/services/MobileServices'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const IndustrySolutions = React.lazy(() => import('./pages/services/IndustrySolutions'));
const InfrastructureServices = React.lazy(() => import('./pages/services/InfrastructureServices'));

// Additional pages
const Contact = React.lazy(() => import('./pages/Contact'));
const Login = React.lazy(() => import('./pages/Login'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Profile = React.lazy(() => import('./pages/Profile'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-blue"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Home Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              
              {/* Core Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              
              {/* Services Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/showcase" element={<ServicesShowcase />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/micro-saas" element={<MicroSaasServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              
              {/* AI Services */}
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/enterprise" element={<EnterpriseSolutionsPage />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/services/ai-marketing" element={<AIMarketingAutomation />} />
              
              {/* Additional Services */}
              <Route path="/services/iot" element={<IoTManagementPlatform />} />
              <Route path="/services/blockchain" element={<BlockchainDeFiSolutions />} />
              <Route path="/services/ai-workflow" element={<AIWorkflowAutomation />} />
              <Route path="/services/blockchain-enterprise" element={<BlockchainEnterpriseSolutions />} />
              <Route path="/services/iot-analytics" element={<IoTDataAnalytics />} />
              
              {/* Innovation Pages */}
              <Route path="/innovations/2025" element={<NextGenInnovativeServices2025 />} />
              <Route path="/innovations/showcase" element={<InnovativeServicesShowcase />} />
              <Route path="/innovations/2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/innovations/2027" element={<CuttingEdgeInnovations2027 />} />
              
              {/* Specialized Services */}
              <Route path="/services/ai-legal" element={<AILegalDocumentAutomation />} />
              <Route path="/services/ai-healthcare" element={<AIHealthcareAnalytics />} />
              <Route path="/services/ai-trading" element={<AIFinancialTrading />} />
              <Route path="/services/ai-supply-chain" element={<AISupplyChainOptimization />} />
              <Route path="/services/ai-customer-service" element={<AICustomerServiceAutomation />} />
              
              {/* Advanced Technology */}
              <Route path="/quantum-neural-network" element={<QuantumNeuralNetworkPlatform />} />
              <Route path="/autonomous-business" element={<AutonomousBusinessOperationsPlatform />} />
              <Route path="/ai-it-asset-management" element={<AIPoweredITAssetManagement />} />
              <Route path="/soc2-compliance" element={<SOC2ComplianceAutomation />} />
              <Route path="/ai-research-assistant" element={<AIAutonomousResearchAssistant />} />
              <Route path="/5g-enterprise" element={<FiveGEnterpriseSolutions />} />
              
              {/* Support & Resources */}
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/new-services" element={<NewServices />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/training" element={<Training />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/events" element={<Events />} />
              <Route path="/support" element={<Support />} />
              <Route path="/faq" element={<FAQ />} />
              
              {/* Technology Pages */}
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/financial-solutions" element={<FinancialSolutions />} />
              <Route path="/mobile" element={<Mobile />} />
              <Route path="/quantum-technology" element={<QuantumTechnology />} />
              <Route path="/space-tech" element={<SpaceTech />} />
              
              {/* Infrastructure & Industry */}
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/it" element={<ITServices />} />
              <Route path="/services/blockchain-services" element={<BlockchainServices />} />
              <Route path="/services/mobile-services" element={<MobileServices />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/industry" element={<IndustrySolutions />} />
              <Route path="/services/infrastructure" element={<InfrastructureServices />} />
              
              {/* User Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              
              {/* Legal */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;