import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import { SidebarProvider } from './context/SidebarContext';

// Core pages
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ContactPage = lazy(() => import('./pages/Contact'));
const AboutPage = lazy(() => import('./pages/About'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const EmergingTech = lazy(() => import('./pages/EmergingTech'));

const PricingPage = lazy(() => import('./pages/PricingPage'));

// Service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/EnterpriseSolutions'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));

// Missing pages from analysis
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));
const AIPoweredITAssetManagement = lazy(() => import('./pages/AIPoweredITAssetManagement'));
const SOC2ComplianceAutomation = lazy(() => import('./pages/SOC2ComplianceAutomation'));
const AIAutonomousResearchAssistant = lazy(() => import('./pages/AIAutonomousResearchAssistant'));
const FiveGEnterpriseSolutions = lazy(() => import('./pages/5GEnterpriseSolutions'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const Docs = lazy(() => import('./pages/Docs'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Community = lazy(() => import('./pages/CommunityPage'));

// Additional pages
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const FAQ = lazy(() => import('./pages/FAQ'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <EnhancedErrorBoundary>
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <Header />
              
              <main className="flex-1">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Core Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    
                    {/* Service Routes */}
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/services-showcase" element={<ServicesShowcase />} />
                    <Route path="/ai-matcher" element={<AIMatcherPage />} />
                    <Route path="/talent-directory" element={<TalentDirectory />} />
                    <Route path="/talents" element={<TalentsPage />} />
                                         <Route path="/emerging-tech" element={<EmergingTech />} />
                     <Route path="/pricing" element={<PricingPage />} />
                    
                    {/* AI Service Routes */}
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/ai-marketing-automation" element={<AIMarketingAutomation />} />
                    
                    {/* Missing Pages from Analysis */}
                    <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
                    <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
                    <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
                    <Route path="/soc2-compliance-automation" element={<SOC2ComplianceAutomation />} />
                    <Route path="/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                    <Route path="/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/help-center" element={<HelpCenter />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/community" element={<Community />} />
                    
                    {/* Additional Pages */}
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/faq" element={<FAQ />} />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-white">Page not found</div>} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
            </div>
            
            {/* Sidebar */}
            <Sidebar />
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
};

export default App;