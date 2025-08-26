import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PartnersPage = lazy(() => import('./pages/Partners'));
const Login = lazy(() => import('./pages/Login'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Careers = lazy(() => import('./pages/Careers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const GreenIT = lazy(() => import('./pages/GreenIT'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

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

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-futuristic">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold">
        ZION
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/services" element={<ServicesPage />} />

              {/* Enhanced Services Routes */}
              <Route path="/enhanced-services" element={<Services />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/services-showcase" element={<ServicesShowcase />} />
              <Route path="/ai-matcher" element={<AIMatcherPage />} />
              <Route path="/talent-directory" element={<TalentDirectory />} />
              <Route path="/talents" element={<TalentsPage />} />
              <Route path="/emerging-tech" element={<EmergingTech />} />

              {/* New Service Routes */}
              <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />

              {/* 2027 Innovation Routes */}
              <Route path="/cutting-edge-innovations-2027" element={<CuttingEdgeInnovations2027 />} />
              <Route path="/practical-micro-saas-2027" element={<PracticalMicroSaas2027 />} />
              <Route path="/all-services-2027" element={<AllServices2027 />} />

              {/* Service Category Routes */}
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/enterprise-it" element={<EnterpriseSolutionsPage />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />

              {/* Additional Service Routes */}
              <Route path="/services/iot-management" element={<IoTManagementPlatform />} />
              <Route path="/services/blockchain-defi" element={<BlockchainDeFiSolutions />} />
              <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
              <Route path="/services/blockchain-enterprise" element={<BlockchainEnterpriseSolutions />} />
              <Route path="/services/iot-data-analytics" element={<IoTDataAnalytics />} />

              {/* 2025 Innovation Routes */}
              <Route path="/next-gen-innovative-services-2025" element={<NextGenInnovativeServices2025 />} />
              <Route path="/innovative-services-showcase" element={<InnovativeServicesShowcase />} />

              {/* 2026 Innovation Routes */}
              <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />

              {/* Additional Micro SAAS Service Routes */}
              <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
              <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
              <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
              <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
              <Route path="/services/ai-customer-service-automation" element={<AICustomerServiceAutomation />} />

              {/* Missing Page Routes */}
              <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
              <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
              <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
              <Route path="/soc2-compliance-automation" element={<SOC2ComplianceAutomation />} />
              <Route path="/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
              <Route path="/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/new-services" element={<NewServices />} />

              {/* Additional Routes */}
              <Route path="/partners" element={<Partners />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />

              {/* Catch-all route for 404 */}
              <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-zion-cyan mb-4">404 - Page Not Found</h1>
                  <p className="text-zion-slate-light mb-6">The page you're looking for doesn't exist.</p>
                  <a href="/" className="text-zion-cyan hover:text-zion-cyan-light underline">
                    Return to Home
                  </a>
                </div>
              </div>} />
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