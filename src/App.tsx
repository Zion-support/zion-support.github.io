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
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import EnhancedServicesShowcase from './components/EnhancedServicesShowcase';

// Service Detail Pages
import AISolutions from './pages/services/AISolutions';
import CloudDevOps from './pages/services/CloudDevOps';
import Cybersecurity from './pages/services/Cybersecurity';
import ITInfrastructure from './pages/services/ITInfrastructure';
import DigitalTransformation from './pages/services/DigitalTransformation';
import Consulting from './pages/services/Consulting';
import AICodeReviewAssistant from './pages/services/AICodeReviewAssistant';
import IncidentResponsePlatform from './pages/services/IncidentResponsePlatform';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/enhanced-services" element={<EnhancedServicesShowcase />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Service Detail Routes */}
            <Route path="/services/ai" element={<AISolutions />} />
            <Route path="/services/cloud" element={<CloudDevOps />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/infrastructure" element={<ITInfrastructure />} />
            <Route path="/services/transformation" element={<DigitalTransformation />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/ai-code-review-assistant" element={<AICodeReviewAssistant />} />
            <Route path="/services/incident-response-platform" element={<IncidentResponsePlatform />} />
            <Route path="/services/invoice-management" element={<div>Invoice Management Service - Coming Soon</div>} />
            <Route path="/services/customer-success-automation" element={<div>Customer Success Automation - Coming Soon</div>} />
            <Route path="/services/analytics-dashboard" element={<div>Analytics Dashboard - Coming Soon</div>} />
            <Route path="/services/network-security-monitoring" element={<div>Network Security Monitoring - Coming Soon</div>} />
            <Route path="/services/backup-recovery" element={<div>Backup & Recovery - Coming Soon</div>} />
            <Route path="/services/asset-management" element={<div>IT Asset Management - Coming Soon</div>} />
            <Route path="/services/ai-chatbot" element={<div>AI Chatbot Development - Coming Soon</div>} />
            <Route path="/services/predictive-analytics" element={<div>Predictive Analytics - Coming Soon</div>} />
            <Route path="/services/computer-vision" element={<div>Computer Vision Solutions - Coming Soon</div>} />
            <Route path="/services/quantum-computing" element={<div>Quantum Computing - Coming Soon</div>} />
            <Route path="/services/blockchain-web3" element={<div>Blockchain & Web3 - Coming Soon</div>} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;