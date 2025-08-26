import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

// Import missing pages that need to be created
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import Events from './pages/Events';
import Webinars from './pages/Webinars';
import WhitePapers from './pages/WhitePapers';
import News from './pages/News';
import ResearchDevelopment from './pages/ResearchDevelopment';
import Enterprise from './pages/Enterprise';
import MicroSAAS from './pages/MicroSAAS';
import QuantumTechnology from './pages/QuantumTechnology';
import SpaceTech from './pages/SpaceTech';
import GreenIT from './pages/GreenIT';
import HelpCenter from './pages/HelpCenter';
import Support from './pages/Support';
import Team from './pages/Team';
import Leadership from './pages/Leadership';
import Partners from './pages/Partners';
import Marketplace from './pages/Marketplace';
import Docs from './pages/Docs';
import Tutorials from './pages/Tutorials';
import AccessibilityAuditor from './pages/accessibility-auditor';
import AdvancedCybersecuritySuite from './pages/advanced-cybersecurity-suite';
import AffiliateAttributionHub from './pages/affiliate-attribution-hub';
import Soc2ComplianceAutomation from './pages/soc2-compliance-automation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Privacy />} />
            
            {/* Company Pages */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/team" element={<Team />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/partners" element={<Partners />} />
            
            {/* Service Pages */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/micro-saas" element={<MicroSAAS />} />
            <Route path="/quantum-services" element={<QuantumTechnology />} />
            <Route path="/space-tech" element={<SpaceTech />} />
            <Route path="/green-it" element={<GreenIT />} />
            
            {/* Resource Pages */}
            <Route path="/events" element={<Events />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/white-papers" element={<WhitePapers />} />
            <Route path="/news" element={<News />} />
            <Route path="/research-development" element={<ResearchDevelopment />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/tutorials" element={<Tutorials />} />
            
            {/* Support Pages */}
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/support" element={<Support />} />
            
            {/* Marketplace */}
            <Route path="/marketplace" element={<Marketplace />} />
            
            {/* Specialized Service Pages */}
            <Route path="/accessibility-auditor" element={<AccessibilityAuditor />} />
            <Route path="/advanced-cybersecurity-suite" element={<AdvancedCybersecuritySuite />} />
            <Route path="/affiliate-attribution-hub" element={<AffiliateAttributionHub />} />
            <Route path="/soc2-compliance-automation" element={<Soc2ComplianceAutomation />} />
            
            {/* AI Service Pages - Create these based on broken links */}
            <Route path="/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
            <Route path="/ai-autonomous-business-operations" element={<AIAutonomousBusinessOperations />} />
            <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
            <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
            <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
            
            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Placeholder components for missing pages - these will be created next
const AIAutonomousResearchAssistant = () => <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center"><h1 className="text-4xl">AI Autonomous Research Assistant</h1></div>;
const AIAutonomousBusinessOperations = () => <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center"><h1 className="text-4xl">AI Autonomous Business Operations</h1></div>;
const AIPoweredITAssetManagement = () => <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center"><h1 className="text-4xl">AI-Powered IT Asset Management</h1></div>;
const QuantumNeuralNetworkPlatform = () => <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center"><h1 className="text-4xl">Quantum Neural Network Platform</h1></div>;
const AutonomousBusinessOperationsPlatform = () => <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center"><h1 className="text-4xl">Autonomous Business Operations Platform</h1></div>;

export default App;