import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Core components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import PerformanceDashboard from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { LinkHealthMonitor } from './components/LinkHealthMonitor';
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import PerformanceMonitor from './components/PerformanceMonitor';

// Theme and context providers
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const EmergingTech = lazy(() => import('./pages/EmergingTech'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const Team = lazy(() => import('./pages/Team'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

// AI and specialized service pages
const AIAutonomousBusinessManager = lazy(() => import('./pages/AIAutonomousBusinessManager'));
const AIAutonomousBusinessPlatform = lazy(() => import('./pages/AIAutonomousBusinessPlatform'));
const AIAutonomousResearchAssistant = lazy(() => import('./pages/AIAutonomousResearchAssistant'));
const AIPoweredITAssetManagement = lazy(() => import('./pages/AIPoweredITAssetManagement'));
const AIServicesPage = lazy(() => import('./pages/AIServicesPage'));
const AIServicesShowcase = lazy(() => import('./pages/AIServicesShowcase'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));

// Service pages
const ComprehensiveServices = lazy(() => import('./pages/ComprehensiveServices'));
const ComprehensiveServicesOverview = lazy(() => import('./pages/ComprehensiveServicesOverview'));
const ComprehensiveServicesPage = lazy(() => import('./pages/ComprehensiveServicesPage'));
const ComprehensiveServicesShowcase = lazy(() => import('./pages/ComprehensiveServicesShowcase'));
const EnhancedServicesPage = lazy(() => import('./pages/EnhancedServicesPage'));
const EnhancedServicesShowcase = lazy(() => import('./pages/EnhancedServicesShowcase'));
const ExpandedServicesPage = lazy(() => import('./pages/ExpandedServicesPage'));
const InnovativeMicroSaasServices = lazy(() => import('./pages/InnovativeMicroSaasServices'));
const InnovativeServicesMarketing = lazy(() => import('./pages/InnovativeServicesMarketing'));
const InnovativeServicesShowcase = lazy(() => import('./pages/InnovativeServicesShowcase'));
const MicroSaasServices = lazy(() => import('./pages/MicroSaasServices'));
const MicroSaasServicesPage = lazy(() => import('./pages/MicroSaasServicesPage'));
const NewServices = lazy(() => import('./pages/NewServices'));
const News = lazy(() => import('./pages/News'));
const Pricing = lazy(() => import('./pages/Pricing'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const RequestQuote = lazy(() => import('./pages/RequestQuote'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServicesPricingPage = lazy(() => import('./pages/ServicesPricingPage'));

// Additional pages
const Accessibility = lazy(() => import('./pages/Accessibility'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Categories = lazy(() => import('./pages/Categories'));
const Cookies = lazy(() => import('./pages/Cookies'));
const DeveloperPortal = lazy(() => import('./pages/DeveloperPortal'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));
const Docs = lazy(() => import('./pages/Docs'));
const EnhancedInnovativeServices = lazy(() => import('./pages/EnhancedInnovativeServices'));
const FAQ = lazy(() => import('./pages/FAQ'));
const GreenIT = lazy(() => import('./pages/GreenIT'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const ITServicesPage = lazy(() => import('./pages/ITServicesPage'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Mission = lazy(() => import('./pages/Mission'));
const Partners = lazy(() => import('./pages/Partners'));
const ZionHireAI = lazy(() => import('./pages/ZionHireAI'));

// 5G and specialized solutions
const FiveGEnterpriseSolutions = lazy(() => import('./pages/5GEnterpriseSolutions'));

// Service-specific pages
const AIAutonomousSystems = lazy(() => import('./pages/services/AIAutonomousSystems'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIHRRecruitment = lazy(() => import('./pages/services/AIHRRecruitment'));
const AIHealthcareAnalytics = lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AILegalTech = lazy(() => import('./pages/services/AILegalTech'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));
const MicroSAASSolutions = lazy(() => import('./pages/services/MicroSAASSolutions'));

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useScrollToTop();

  return (
    <WhitelabelProvider>
      <ThemeProvider>
        <Router>
          <div className="App">
            <EnhancedErrorBoundary>
              <EnhancedSEO />
              <EnhancedAccessibility />
              <PerformanceMonitor />
              
              <Header />
              <Sidebar />
              
              <main className="main-content">
                <Suspense fallback={
                  <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading...</p>
                  </div>
                }>
                  <Routes>
                    {/* Main Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    
                    {/* Service Routes */}
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/showcase" element={<ServicesShowcase />} />
                    <Route path="/services/comprehensive" element={<ComprehensiveServices />} />
                    <Route path="/services/comprehensive/overview" element={<ComprehensiveServicesOverview />} />
                    <Route path="/services/comprehensive/page" element={<ComprehensiveServicesPage />} />
                    <Route path="/services/comprehensive/showcase" element={<ComprehensiveServicesShowcase />} />
                    <Route path="/services/enhanced" element={<EnhancedServicesPage />} />
                    <Route path="/services/enhanced/showcase" element={<EnhancedServicesShowcase />} />
                    <Route path="/services/expanded" element={<ExpandedServicesPage />} />
                    <Route path="/services/innovative" element={<InnovativeServicesShowcase />} />
                    <Route path="/services/innovative/micro-saas" element={<InnovativeMicroSaasServices />} />
                    <Route path="/services/innovative/marketing" element={<InnovativeServicesMarketing />} />
                    <Route path="/services/micro-saas" element={<MicroSaasServices />} />
                    <Route path="/services/micro-saas/page" element={<MicroSaasServicesPage />} />
                    <Route path="/services/new" element={<NewServices />} />
                    <Route path="/services/pricing" element={<ServicesPricingPage />} />
                    <Route path="/services/:slug" element={<ServiceDetailPage />} />
                    
                    {/* AI Routes */}
                    <Route path="/ai" element={<AISolutions />} />
                    <Route path="/ai/autonomous-business-manager" element={<AIAutonomousBusinessManager />} />
                    <Route path="/ai/autonomous-business-platform" element={<AIAutonomousBusinessPlatform />} />
                    <Route path="/ai/autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                    <Route path="/ai/powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
                    <Route path="/ai/services" element={<AIServicesPage />} />
                    <Route path="/ai/services/showcase" element={<AIServicesShowcase />} />
                    <Route path="/ai/matcher" element={<AIMatcherPage />} />
                    
                    {/* Specialized Routes */}
                    <Route path="/autonomous-business-operations" element={<AutonomousBusinessOperationsPlatform />} />
                    <Route path="/quantum-neural-network" element={<QuantumNeuralNetworkPlatform />} />
                    <Route path="/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
                    
                    {/* Additional Service Routes */}
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/emerging-tech" element={<EmergingTech />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/request-quote" element={<RequestQuote />} />
                    <Route path="/zion-hire-ai" element={<ZionHireAI />} />
                    
                    {/* Utility Routes */}
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/developer-portal" element={<DeveloperPortal />} />
                    <Route path="/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/enhanced-innovative-services" element={<EnhancedInnovativeServices />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/green-it" element={<GreenIT />} />
                    <Route path="/help-center" element={<HelpCenter />} />
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/partners" element={<Partners />} />
                    
                    {/* Service-specific Routes */}
                    <Route path="/services/ai/autonomous-systems" element={<AIAutonomousSystems />} />
                    <Route path="/services/ai/business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/services/ai/hr-recruitment" element={<AIHRRecruitment />} />
                    <Route path="/services/ai/healthcare-analytics" element={<AIHealthcareAnalytics />} />
                    <Route path="/services/ai/legal-tech" element={<AILegalTech />} />
                    <Route path="/services/ai/marketing-automation" element={<AIMarketingAutomation />} />
                    <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              
              {/* UI Components */}
              <Toaster />
              <SonnerToaster />
            </EnhancedErrorBoundary>
          </div>
        </Router>
      </ThemeProvider>
    </WhitelabelProvider>
  );
}

export default App;