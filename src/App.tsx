import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load pages with better chunking
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage.tsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027.tsx'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027.tsx'));
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.tsx'));

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
const GreenIT = React.lazy(() => import('./pages/GreenIT.tsx'));
const Blog = React.lazy(() => import('./pages/Blog.tsx'));
const Partners = React.lazy(() => import('./pages/Partners.tsx'));
const Careers = React.lazy(() => import('./pages/Careers.tsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.tsx'));
const Help = React.lazy(() => import('./pages/Help.tsx'));
const Terms = React.lazy(() => import('./pages/Terms.tsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.tsx'));
const Security = React.lazy(() => import('./pages/Security.tsx'));
const Status = React.lazy(() => import('./pages/Status.tsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.tsx'));
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

// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
    <div className="text-center max-w-md">
      <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
      <p className="text-zion-slate-light mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  // Performance monitoring
  useEffect(() => {
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        <AppHeader />
        <main className="flex-1" role="main">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/enhanced-services" element={<EnhancedServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services/overview" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/services/pricing" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/services/showcase" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/ultimate-services-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
              <Route path="/comprehensive-services-2025" element={<ComprehensiveServicesLanding2025 />} />
              
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
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
        <PerformanceMonitor />
      </div>
    </Router>
  );
}

export default App;