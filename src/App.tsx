import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load pages - comprehensive import list
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ServicesAdvertising = React.lazy(() => import('./pages/ServicesAdvertising'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

// Service pages
const AIServices = React.lazy(() => import('./pages/services/AIServices'));
const CybersecurityServices = React.lazy(() => import('./pages/services/CybersecurityServices'));
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const BlockchainServices = React.lazy(() => import('./pages/services/BlockchainServices'));
const DigitalTwin = React.lazy(() => import('./pages/services/GreenIT'));
const Sustainability = React.lazy(() => import('./pages/services/GreenIT'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const ConsultingServices = React.lazy(() => import('./pages/services/ConsultingServices'));
const ITOnsiteServices = React.lazy(() => import('./pages/services/ITOnsiteServices'));
const FiveGSolutions = React.lazy(() => import('./pages/services/FiveGNetworkOptimization'));

// AI Services Pages
const AICustomerSuccessAutomation = React.lazy(() => import('./pages/services/ai/AICustomerSuccessAutomation.tsx'));
const AIContentMarketingAutomation = React.lazy(() => import('./pages/services/ai/AIContentMarketingAutomation.tsx'));
const AIConsciousnessEvolution = React.lazy(() => import('./pages/services/ai/AIConsciousnessEvolution.tsx'));
const AIAutonomousEcosystem = React.lazy(() => import('./pages/services/ai/AIAutonomousEcosystem.tsx'));
const AIEthicsGovernance = React.lazy(() => import('./pages/services/ai/AIEthicsGovernance.tsx'));
const AIAutonomousBusinessProcessAutomation = React.lazy(() => import('./pages/services/ai/AIAutonomousBusinessProcessAutomation.tsx'));
const AICustomerIntelligencePlatform = React.lazy(() => import('./pages/services/ai/AICustomerIntelligencePlatform.tsx'));
const AIFinancialFraudDetection = React.lazy(() => import('./pages/services/ai/AIFinancialFraudDetection.tsx'));
const AutonomousVehicleAI = React.lazy(() => import('./pages/services/ai/AutonomousVehicleAI.tsx'));

// Quantum Services Pages
const QuantumEncryptionGateway = React.lazy(() => import('./pages/services/quantum/QuantumEncryptionGateway.tsx'));
const QuantumThreatDetection = React.lazy(() => import('./pages/services/quantum/QuantumThreatDetection.tsx'));
const QuantumIdentityVerification = React.lazy(() => import('./pages/services/quantum/QuantumIdentityVerification.tsx'));
const QuantumComplianceAutomation = React.lazy(() => import('./pages/services/quantum/QuantumComplianceAutomation.tsx'));
const QuantumNetworkSecurity = React.lazy(() => import('./pages/services/quantum/QuantumNetworkSecurity.tsx'));
const QuantumNetworking = React.lazy(() => import('./pages/services/quantum/QuantumNetworking.tsx'));
const QuantumDataCenter = React.lazy(() => import('./pages/services/quantum/QuantumDataCenter.tsx'));
const QuantumMaterialsDiscovery = React.lazy(() => import('./pages/services/quantum/QuantumMaterialsDiscovery.tsx'));
const QuantumInternetSecurity = React.lazy(() => import('./pages/services/quantum/QuantumInternetSecurity.tsx'));

// Blockchain & Web3 Services Pages
const BlockchainEnterprisePlatform = React.lazy(() => import('./pages/services/blockchain/BlockchainEnterprisePlatform.tsx'));

// Autonomous IT Services Pages
const AutonomousITOperations = React.lazy(() => import('./pages/services/autonomous/AutonomousITOperations.tsx'));

// Additional Service Pages
const Marketplace = React.lazy(() => import('./pages/Marketplace.tsx'));
const Talent = React.lazy(() => import('./pages/Talent.tsx'));
const Equipment = React.lazy(() => import('./pages/Equipment.tsx'));
const Partners = React.lazy(() => import('./pages/Partners.tsx'));
const Help = React.lazy(() => import('./pages/Help.tsx'));
const Security = React.lazy(() => import('./pages/Security.tsx'));
const Status = React.lazy(() => import('./pages/Status.tsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.tsx'));
const Accessibility = React.lazy(() => import('./pages/Accessibility.tsx'));

// Enhanced loading spinner with accessibility
const LoadingSpinner = () => (
  <div 
    className="min-h-screen bg-futuristic flex items-center justify-center"
    role="status"
    aria-label="Loading page content"
  >
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-cyan text-lg">Loading...</p>
      <div className="sr-only">Loading page content, please wait...</div>
    </div>
  </div>
);

// Micro SAAS pages
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const CustomerExperience = React.lazy(() => import('./pages/services/AICustomerServiceAutomation'));
const SupplyChain = React.lazy(() => import('./pages/services/ManufacturingSolutions'));
const ContentCreation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const HRPlatform = React.lazy(() => import('./pages/services/AIWorkflowAutomation'));

// Marketplace pages
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-zion-cyan text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-zion-slate-dark">
        {/* App Header */}
        <AppHeader />
        
        {/* Main Content */}
        <main className="pt-24">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/services-advertising" element={<ServicesAdvertising />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/news" element={<News />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              
              {/* Information Pages */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Service Routes */}
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/iot" element={<IoTServices />} />
              <Route path="/services/quantum" element={<QuantumComputing />} />
              <Route path="/services/blockchain" element={<BlockchainServices />} />
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/sustainability" element={<Sustainability />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/consulting" element={<ConsultingServices />} />
              <Route path="/services/five-g" element={<FiveGSolutions />} />
              
              {/* Micro SAAS Routes */}
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/services/customer-experience" element={<CustomerExperience />} />
              <Route path="/services/supply-chain" element={<SupplyChain />} />
              <Route path="/services/content-creation" element={<ContentCreation />} />
              <Route path="/services/hr-platform" element={<HRPlatform />} />
              
              {/* AI Services Routes */}
              <Route path="/ai-customer-success-automation" element={<AICustomerSuccessAutomation />} />
              <Route path="/ai-content-marketing-automation" element={<AIContentMarketingAutomation />} />
              <Route path="/ai-consciousness-evolution" element={<AIConsciousnessEvolution />} />
              <Route path="/ai-autonomous-ecosystem" element={<AIAutonomousEcosystem />} />
              <Route path="/ai-ethics-governance" element={<AIEthicsGovernance />} />
              <Route path="/ai-autonomous-business-process-automation" element={<AIAutonomousBusinessProcessAutomation />} />
              <Route path="/ai-customer-intelligence-platform" element={<AICustomerIntelligencePlatform />} />
              <Route path="/ai-financial-fraud-detection" element={<AIFinancialFraudDetection />} />
              <Route path="/autonomous-vehicle-ai" element={<AutonomousVehicleAI />} />
              
              {/* Quantum Services Routes */}
              <Route path="/quantum-encryption-gateway" element={<QuantumEncryptionGateway />} />
              <Route path="/quantum-threat-detection" element={<QuantumThreatDetection />} />
              <Route path="/quantum-identity-verification" element={<QuantumIdentityVerification />} />
              <Route path="/quantum-compliance-automation" element={<QuantumComplianceAutomation />} />
              <Route path="/quantum-network-security" element={<QuantumNetworkSecurity />} />
              <Route path="/quantum-networking" element={<QuantumNetworking />} />
              <Route path="/quantum-data-center" element={<QuantumDataCenter />} />
              <Route path="/quantum-materials-discovery" element={<QuantumMaterialsDiscovery />} />
              <Route path="/quantum-internet-security" element={<QuantumInternetSecurity />} />
              
              {/* Blockchain & Web3 Services Routes */}
              <Route path="/blockchain-enterprise-platform" element={<BlockchainEnterprisePlatform />} />
              
              {/* Autonomous IT Services Routes */}
              <Route path="/autonomous-it-operations" element={<AutonomousITOperations />} />
              
              {/* Additional Service Routes */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/help" element={<Help />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<div className="text-center py-20"><h1>Page Not Found</h1></div>} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Chat Assistant */}
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;