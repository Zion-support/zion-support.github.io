import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import { FloatingActionButton } from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'));
const Home2026 = createLazyComponent(() => import('./pages/Home2026'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const News = createLazyComponent(() => import('./pages/News'));
const Press = createLazyComponent(() => import('./pages/Press'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Blog = createLazyComponent(() => import('./pages/Blog'));

// Service pages
const Services = createLazyComponent(() => import('./pages/Services'));
const Services2026 = createLazyComponent(() => import('./pages/Services2026'));
const Services2027 = createLazyComponent(() => import('./pages/InnovativeServices2027'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = createLazyComponent(() => import('./pages/services/MicroSAASSolutions'));
const ComprehensiveServices = createLazyComponent(() => import('./pages/ComprehensiveServices'));

// Additional pages
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Team = createLazyComponent(() => import('./pages/Team'));
const HelpCenter = createLazyComponent(() => import('./pages/HelpCenter'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Developers = createLazyComponent(() => import('./pages/Developers'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const Status = createLazyComponent(() => import('./pages/Status'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Support = createLazyComponent(() => import('./pages/Support'));
const Events = createLazyComponent(() => import('./pages/Events'));
const Security = createLazyComponent(() => import('./pages/Security'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));
const Talent = createLazyComponent(() => import('./pages/Talent'));
const Equipment = createLazyComponent(() => import('./pages/Equipment'));
const GreenIT = createLazyComponent(() => import('./pages/GreenIT'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));
const MarketplaceProducts = createLazyComponent(() => import('./pages/marketplace/Products'));
const MarketplaceTalent = createLazyComponent(() => import('./pages/marketplace/Talent'));
const MarketplaceEquipment = createLazyComponent(() => import('./pages/marketplace/Equipment'));
const MarketplaceServices = createLazyComponent(() => import('./pages/marketplace/Services'));
const Login = createLazyComponent(() => import('./pages/Login'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const SearchPage = createLazyComponent(() => import('./pages/SearchPage'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const ResearchDevelopment = createLazyComponent(() => import('./pages/research-development'));
const MobileLaunch = createLazyComponent(() => import('./pages/MobileLaunch'));
const Analytics = createLazyComponent(() => import('./pages/Analytics'));
const Match = createLazyComponent(() => import('./pages/Match'));
const Solutions = createLazyComponent(() => import('./pages/solutions'));

// Service showcase pages
const UltimateServicesShowcase2025 = React.lazy(() => import('./pages/UltimateServicesShowcase2025'));
const UltimateServicesShowcase2026 = React.lazy(() => import('./pages/UltimateServicesShowcase2026'));
const ComprehensivePricing2026 = React.lazy(() => import('./pages/ComprehensivePricing2026'));
const ComprehensivePricing2028 = React.lazy(() => import('./pages/ComprehensivePricing2028'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// Additional innovative AI services
const AILegalDocumentAutomation = React.lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = React.lazy(() => import('./pages/services/AIFinancialTrading'));
const AIContentCreationSuite = React.lazy(() => import('./pages/services/AIContentCreationSuite'));

// New innovative AI services
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernancePlatform = React.lazy(() => import('./pages/services/AIDataGovernancePlatform'));
const AICustomerExperienceAnalytics = React.lazy(() => import('./pages/services/AICustomerExperienceAnalytics'));
const AIFinancialRiskManagement = React.lazy(() => import('./pages/services/AIFinancialRiskManagement'));
const AIHRTalentAcquisition = React.lazy(() => import('./pages/services/AIHRTalentAcquisition'));
const AIIoTEdgeComputing = React.lazy(() => import('./pages/services/AIIoTEdgeComputing'));
const AIPredictiveMaintenance = React.lazy(() => import('./pages/services/AIPredictiveMaintenance'));
const AISustainableTechnology = React.lazy(() => import('./pages/services/AISustainableTechnology'));
const AIQuantumMachineLearning = React.lazy(() => import('./pages/services/AIQuantumMachineLearning'));

// Additional service pages
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));

// 2026 Services pages
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AIHRPlatform = React.lazy(() => import('./pages/services/ai-hr-platform'));
const SustainableTechnology = React.lazy(() => import('./pages/services/sustainable-technology'));
const QuantumMachineLearning = React.lazy(() => import('./pages/services/quantum-machine-learning'));

// 2029 Cutting-Edge Services
const ZionCuttingEdgeServices2029 = React.lazy(() => import('./pages/ZionCuttingEdgeServices2029'));

// Additional pages
const API = createLazyComponent(() => import('./pages/API'));
const DeveloperPortal = createLazyComponent(() => import('./pages/DeveloperPortal'));

// Accessibility page
const Accessibility = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
    </div>
  </div>
);

// Enhanced loading component
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-cyan-400/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="mt-4 text-center">
        <div className="text-cyan-400 text-sm animate-pulse">Loading Zion Tech...</div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <SEO 
          title="Zion Tech Group - Leading AI & Technology Solutions"
          description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
          keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
          ogImage="/og-image.jpg"
          canonicalUrl="https://ziontechgroup.com"
        />
        
        <AppHeader />
        
        <main className="relative">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/home2026" element={<Home2026 />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/marketplace/products" element={<MarketplaceProducts />} />
              <Route path="/marketplace/talent" element={<MarketplaceTalent />} />
              <Route path="/marketplace/equipment" element={<MarketplaceEquipment />} />
              <Route path="/marketplace/services" element={<MarketplaceServices />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services2026" element={<Services2026 />} />
              <Route path="/services2027" element={<Services2027 />} />
              
              {/* Service Routes */}
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/micro-saas" element={<MicroSaaS />} />
              <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
              <Route path="/mobile-launch" element={<MobileLaunch />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/match" element={<Match />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/press" element={<Press />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/training" element={<Training />} />
              <Route path="/support" element={<Support />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/space-tech" element={<Accessibility />} />
              <Route path="/quantum-technology" element={<Accessibility />} />
              <Route path="/financial-solutions" element={<Accessibility />} />
              <Route path="/mobile" element={<Accessibility />} />
              <Route path="/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
              <Route path="/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
              <Route path="/ai-financial-trading" element={<AIFinancialTrading />} />
              <Route path="/ai-content-creation-suite" element={<AIContentCreationSuite />} />
              
              {/* New innovative AI services */}
              <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
              <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
              <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
              <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
              <Route path="/services/ai-hr-talent-acquisition" element={<AIHRTalentAcquisition />} />
              <Route path="/services/ai-iot-edge-computing" element={<AIIoTEdgeComputing />} />
              <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
              <Route path="/services/ai-sustainable-technology" element={<AISustainableTechnology />} />
              <Route path="/services/ai-quantum-machine-learning" element={<AIQuantumMachineLearning />} />

              {/* Innovative services showcase */}
              <Route path="/innovative-services-2025" element={<InnovativeServicesShowcase2025 />} />
              
              {/* New 2025 service routes */}
              <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} />
              <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
              <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} />
              <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
              <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
              
              {/* 2029 Cutting-Edge Services */}
              <Route path="/zion-cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />
              <Route path="/cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />
              
              {/* Additional routes */}
              <Route path="/api" element={<API />} />
              <Route path="/developer-portal" element={<DeveloperPortal />} />
              <Route path="/digital-twin" element={<DigitalTwin />} />
              <Route path="/data-analytics" element={<DataAnalytics />} />
              <Route path="/quantum-computing" element={<QuantumComputing />} />
              <Route path="/ai-cybersecurity" element={<AICybersecurity />} />
              <Route path="/iot-edge-computing" element={<IoTEdgeComputing />} />
              <Route path="/ai-content-creation" element={<AIContentCreation />} />
              <Route path="/ai-hr-platform" element={<AIHRPlatform />} />
              <Route path="/sustainable-technology" element={<SustainableTechnology />} />
              <Route path="/quantum-machine-learning" element={<QuantumMachineLearning />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <ChatAssistant />
        <PerformanceOptimizer />
        <EnhancedAccessibilityEnhancer enabled={true} showControls={true} />
        <MobileExperienceEnhancer enabled={true} />
        <PerformanceMonitor enabled={true} showMetrics={true} />
        <AdvancedAnalytics enabled={true} showMetrics={true} />
        <SmartNotificationSystem enabled={true} />
        <FloatingActionButton />
      </div>
    </ErrorBoundary>
  );
}

export default App;