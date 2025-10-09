import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import AIServicesPage from './ai-services/page';
import ITServicesPage from './it-services/page';
import MicroSaasPage from './micro-saas/page';
import QuantumComputingPage from './quantum-computing/page';
import AutonomousSystemsPage from './autonomous-systems/page';
import BlockchainWeb3Page from './blockchain-web3/page';
import IoTEdegComputingPage from './iot-edge-computing/page';
import BusinessIntelligencePage from './business-intelligence/page';
import RoboticsPage from './robotics/page';
import CaseStudiesPage from './case-studies/page';
import BlogPage from './blog/page';
import PricingPage from './pricing/page';
import TeamPage from './team/page';
import CareersPage from './careers/page';
import PrivacyPage from './privacy/page';
import TermsPage from './terms/page';
import NotFoundPage from './not-found';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/it-services" element={<ITServicesPage />} />
            <Route path="/micro-saas" element={<MicroSaasPage />} />
            <Route path="/quantum-computing" element={<QuantumComputingPage />} />
            <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
            <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
            <Route path="/iot-edge-computing" element={<IoTEdegComputingPage />} />
            <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
            <Route path="/robotics" element={<RoboticsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;