import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Sitemap from './pages/Sitemap';
import Blog from './pages/Blog';
import Team from './pages/Team';
import Leadership from './pages/Leadership';
import Partners from './pages/Partners';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import HelpCenter from './pages/HelpCenter';
import Support from './pages/Support';
import Tutorials from './pages/Tutorials';
import Webinars from './pages/Webinars';
import WhitePapers from './pages/WhitePapers';
import News from './pages/News';
import Services from './pages/Services';
import ServicesShowcase from './pages/ServicesShowcase';

// AI & Technology Services
import AIAutonomousBusinessManager from './pages/services/AIAutonomousBusinessManager';
import AIAutonomousResearchAssistant from './pages/services/AIAutonomousResearchAssistant';
import QuantumTechnology from './pages/services/QuantumTechnology';
import ITServices from './pages/services/ITServices';

// 5G & Network Services
import FiveGEnterpriseNetwork from './pages/services/FiveGEnterpriseNetwork';
import FiveGEnterpriseSolutions from './pages/services/FiveGEnterpriseSolutions';
import FiveGNetworkOptimization from './pages/services/FiveGNetworkOptimization';
import FiveGPrivateNetworkSolutions from './pages/services/FiveGPrivateNetworkSolutions';

// Quantum & Advanced Tech
import QuantumNeuralNetworkPlatform from './pages/services/QuantumNeuralNetworkPlatform';
import QuantumEdgeComputingPlatform from './pages/services/QuantumEdgeComputingPlatform';
import QuantumCloudInfrastructure from './pages/services/QuantumCloudInfrastructure';
import QuantumFinancialTrading from './pages/services/QuantumFinancialTrading';
import QuantumServices from './pages/services/QuantumServices';

// Infrastructure & Operations
import AutonomousBusinessOperationsPlatform from './pages/services/AutonomousBusinessOperationsPlatform';
import AutonomousDevOpsPlatform from './pages/services/AutonomousDevOpsPlatform';
import AutonomousBusinessOperations from './pages/services/AutonomousBusinessOperations';
import AIPoweredITAssetManagement from './pages/services/AIPoweredITAssetManagement';
import ITOnsiteServices from './pages/services/ITOnsiteServices';
import IoTServices from './pages/services/IoTServices';
import MobileServices from './pages/services/MobileServices';
import GreenIT from './pages/services/GreenIT';
import SpaceTech from './pages/services/SpaceTech';

// Business Solutions
import MicroSaasServices from './pages/services/MicroSaasServices';
import IndustrySolutions from './pages/services/IndustrySolutions';
import ManufacturingSolutions from './pages/services/ManufacturingSolutions';
import Marketplace from './pages/services/Marketplace';
import EnterpriseIT from './pages/services/EnterpriseIT';

// Special Solutions
import ZeroTrustNetworkArchitecture from './pages/solutions/ZeroTrustNetworkArchitecture';
import ServiceInnovationHub from './pages/solutions/ServiceInnovationHub';
import ServicePortfolioDashboard from './pages/solutions/ServicePortfolioDashboard';
import ServiceRecommendations from './pages/solutions/ServiceRecommendations';
import ServiceComparison from './pages/solutions/ServiceComparison';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <Sidebar />
        <main className="ml-64 pt-16">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services-showcase" element={<ServicesShowcase />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/team" element={<Team />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/support" element={<Support />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/white-papers" element={<WhitePapers />} />
            <Route path="/news" element={<News />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/sitemap" element={<Sitemap />} />

            {/* AI & Technology Services */}
            <Route path="/ai-autonomous-business-manager" element={<AIAutonomousBusinessManager />} />
            <Route path="/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
            <Route path="/quantum-technology" element={<QuantumTechnology />} />
            <Route path="/it-services" element={<ITServices />} />

            {/* 5G & Network Services */}
            <Route path="/5g-enterprise-network" element={<FiveGEnterpriseNetwork />} />
            <Route path="/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
            <Route path="/5g-network-optimization" element={<FiveGNetworkOptimization />} />
            <Route path="/5g-private-network-solutions" element={<FiveGPrivateNetworkSolutions />} />

            {/* Quantum & Advanced Tech */}
            <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
            <Route path="/quantum-edge-computing-platform" element={<QuantumEdgeComputingPlatform />} />
            <Route path="/quantum-cloud-infrastructure" element={<QuantumCloudInfrastructure />} />
            <Route path="/quantum-financial-trading" element={<QuantumFinancialTrading />} />
            <Route path="/quantum-services" element={<QuantumServices />} />

            {/* Infrastructure & Operations */}
            <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
            <Route path="/autonomous-devops-platform" element={<AutonomousDevOpsPlatform />} />
            <Route path="/autonomous-business-operations" element={<AutonomousBusinessOperations />} />
            <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
            <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
            <Route path="/iot-services" element={<IoTServices />} />
            <Route path="/mobile-services" element={<MobileServices />} />
            <Route path="/green-it" element={<GreenIT />} />
            <Route path="/space-tech" element={<SpaceTech />} />

            {/* Business Solutions */}
            <Route path="/micro-saas" element={<MicroSaasServices />} />
            <Route path="/industry-solutions" element={<IndustrySolutions />} />
            <Route path="/manufacturing-solutions" element={<ManufacturingSolutions />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/enterprise-it" element={<EnterpriseIT />} />

            {/* Special Solutions */}
            <Route path="/zero-trust-network-architecture" element={<ZeroTrustNetworkArchitecture />} />
            <Route path="/service-innovation-hub" element={<ServiceInnovationHub />} />
            <Route path="/service-portfolio-dashboard" element={<ServicePortfolioDashboard />} />
            <Route path="/service-recommendations" element={<ServiceRecommendations />} />
            <Route path="/service-comparison" element={<ServiceComparison />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;