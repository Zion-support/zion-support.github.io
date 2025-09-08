import { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { EnhancedSEO } from './components/EnhancedSEO';
import { ServiceWorker } from './components/ServiceWorker';
import { FloatingActionButton } from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import { AIServiceRecommendationEngine } from './components/AIServiceRecommendationEngine';
import { EnhancedServiceShowcase } from './components/EnhancedServiceShowcase';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/solutions'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const CaseStudies = React.lazy(() => import('./pages/case-studies'));
const AISolutions = React.lazy(() => import('./pages/AISolutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const Team = React.lazy(() => import('./pages/Team'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Events = React.lazy(() => import('./pages/Events'));
const Help = React.lazy(() => import('./pages/Help'));
const Docs = React.lazy(() => import('./pages/Docs'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const Services2026 = React.lazy(() => import('./pages/Services2026'));
const Services2027 = React.lazy(() => import('./pages/Services2027'));
const Webinars = React.lazy(() => import('./pages/webinars'));
const WhitePapers = React.lazy(() => import('./pages/white-papers'));

// Additional missing page imports
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const ScheduleDemo = lazy(() => import('./pages/ScheduleDemo'));
const InvestorRelations = lazy(() => import('./pages/InvestorRelations'));
const Press = lazy(() => import('./pages/Press'));
const Legal = lazy(() => import('./pages/Legal'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const Webinars = lazy(() => import('./pages/Webinars'));
const Documentation = lazy(() => import('./pages/Documentation'));
const APIDocumentation = lazy(() => import('./pages/APIDocumentation'));
const Developers = lazy(() => import('./pages/Developers'));
const Training = lazy(() => import('./pages/Training'));
const Community = lazy(() => import('./pages/Community'));
const Support = lazy(() => import('./pages/Support'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2030 = lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx'));
const ComprehensiveServicesLanding2025 = lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));
const EnhancedServicesLanding = lazy(() => import('./pages/EnhancedServicesLanding.tsx'));
const InnovativeServicesShowcase2025 = lazy(() => import('./pages/InnovativeServicesShowcase2025.tsx'));

// New pages
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensiveServicesLanding2027 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2027'));
const InnovativeServices2025 = React.lazy(() => import('./pages/InnovativeServices2025'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const ComprehensiveServicesLanding2030 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2030'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));
const InnovativeServicesOverview = React.lazy(() => import('./pages/InnovativeServicesOverview'));

// New innovative services
const AILegalDocumentAnalysis = React.lazy(() => import('./pages/services/ai-legal-document-analysis'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/ai-supply-chain-optimization'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/ai-healthcare-analytics'));
const AIFinancialTrading = React.lazy(() => import('./pages/services/ai-financial-trading'));
const AIFraudDetectionPlatform = React.lazy(() => import('./pages/services/ai-fraud-detection-platform'));
const AIHealthcareDiagnosis = React.lazy(() => import('./pages/services/ai-healthcare-diagnosis'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/ai-marketing-automation'));
// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));

// Simple placeholder pages for missing ones
const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Coming Soon</p>
    </div>
  </div>
);

// New innovative services
const AIContractAnalysis = lazy(() => import('./pages/services/AI-Powered-Contract-Analysis'));
const AISupplyChainOptimizationNew = lazy(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurityThreatIntelligence = lazy(() => import('./pages/services/AI-Cybersecurity-Threat-Intelligence'));
const AIHealthcareDiagnostics = lazy(() => import('./pages/services/AI-Healthcare-Diagnostics'));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="App min-h-screen bg-white">
          {/* SEO Component */}
          <EnhancedSEO 
            title="Zion Tech Group - Empowering the Future Through Technology"
            description="Leading provider of AI, IT consulting, and digital transformation services. Discover cutting-edge solutions for your business needs."
            keywords={['AI services', 'IT consulting', 'digital transformation', 'technology solutions']}
            type="website"
          />
          
          {/* Service Worker */}
          <ServiceWorker />
          
          {/* Performance Optimizer */}
          <PerformanceOptimizer enabled={true} />
          
          {/* Enhanced Accessibility */}
          <EnhancedAccessibilityEnhancer enabled={true} />
          
          {/* Mobile Experience Enhancer */}
          <MobileExperienceEnhancer enabled={true} />
          
          {/* Advanced Analytics */}
          <AdvancedAnalytics enabled={true} />
          
          {/* Header */}
          <AppHeader onSidebarToggle={toggleSidebar} />
          
          {/* Sidebar */}
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/ai-solutions" element={<AISolutions />} />
                <Route path="/research-development" element={<ResearchDevelopment />} />
                <Route path="/events" element={<Events />} />
                <Route path="/news" element={<News />} />
                <Route path="/team" element={<Team />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/help" element={<Help />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                
                {/* Additional Routes */}
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                <Route path="/services2026" element={<Services2026 />} />
                <Route path="/services2027" element={<Services2027 />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                
                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
          <AdvancedPerformanceMonitor />
          <AIServiceRecommendationEngine />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;