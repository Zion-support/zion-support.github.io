import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';

// Enhanced Components
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { EnhancedAccessibilityEnhancer } from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { EnhancedSEO } from './components/EnhancedSEO';
import { ModernUIEnhancer } from './components/ModernUIEnhancer';
import { BundleAnalyzer } from './components/BundleAnalyzer';
import { ServiceWorker } from './components/ServiceWorker';
import { FloatingActionButton } from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { ErrorBoundary } from './components/ErrorBoundary';

import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/about'));
const Services = lazy(() => import('./pages/services'));
const Contact = lazy(() => import('./pages/contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Team = lazy(() => import('./pages/Team'));

// Additional missing page imports
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const FAQ = lazy(() => import('./pages/FAQ'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const Partners = lazy(() => import('./pages/Partners'));
const News = lazy(() => import('./pages/News'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const NotFound = lazy(() => import('./pages/NotFound'));

// New innovative services pages
const InnovativeServicesLanding2025 = lazy(() => import('./pages/InnovativeServicesLanding2025'));
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const RevolutionaryServices2030 = lazy(() => import('./pages/RevolutionaryServices2030'));
const ComprehensiveServicesShowcase2025 = lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

// New services overview page
const InnovativeServicesOverview2025 = lazy(() => import('./pages/InnovativeServicesOverview2025'));

// Service pages
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));
const Services2026 = createLazyComponent(() => import('./pages/Services2026'));
const Services2027 = createLazyComponent(() => import('./pages/Services2027'));

// Additional pages
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));
const Login = createLazyComponent(() => import('./pages/Login'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const SearchPage = createLazyComponent(() => import('./pages/SearchPage'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const News = createLazyComponent(() => import('./pages/News'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));
const HelpCenter = createLazyComponent(() => import('./pages/HelpCenter'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Accessibility = createLazyComponent(() => import('./pages/Accessibility'));

// Additional innovative AI services
const AIAutonomousSupplyChain = lazy(() => import('./pages/services/AIAutonomousSupplyChain'));
const AICybersecurityThreatIntelligence = lazy(() => import('./pages/services/AICybersecurityThreatIntelligence'));

// Additional innovative services
const AICodeReviewSecurityScanner = lazy(() => import('./pages/services/AICodeReviewSecurityScanner'));
const AIDevOpsAutomationPlatform = lazy(() => import('./pages/services/AIDevOpsAutomationPlatform'));
const AIBusinessIntelligenceAnalytics = lazy(() => import('./pages/services/AIBusinessIntelligenceAnalytics'));
const AICustomerExperienceSupport = lazy(() => import('./pages/services/AICustomerExperienceSupport'));
const AIMarketingAutomationPersonalization = lazy(() => import('./pages/services/AIMarketingAutomationPersonalization'));
const NewInnovativeServices2025 = lazy(() => import('./pages/NewInnovativeServices2025'));

// New AI Quantum Hybrid Platform
const AIQuantumHybridPlatform = lazy(() => import('./pages/services/AIQuantumHybridPlatform'));

// 2029 Services Showcase
const ComprehensiveServicesShowcase2029 = lazy(() => import('./pages/ComprehensiveServicesShowcase2029'));

// Additional pages
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Pricing = lazy(() => import('./pages/Pricing'));
const ITConsulting = lazy(() => import('./pages/ITConsulting'));
const SpaceTech = lazy(() => import('./pages/SpaceTech'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

// Additional service pages
const AIContentCreation = lazy(() => import('./pages/services/ai-content-creation'));
const AICybersecurity = lazy(() => import('./pages/services/ai-cybersecurity'));
const AIHRPlatform = lazy(() => import('./pages/services/ai-hr-platform'));
const AIPredictiveMaintenance = lazy(() => import('./pages/services/ai-predictive-maintenance'));
const IoTEdgeComputing = lazy(() => import('./pages/services/iot-edge-computing'));
const QuantumComputing = lazy(() => import('./pages/services/quantum-computing'));
const QuantumMachineLearning = lazy(() => import('./pages/services/quantum-machine-learning'));
const SustainableTechnology = lazy(() => import('./pages/services/sustainable-technology'));
const AIQuantumHybridPlatform = lazy(() => import('./pages/services/AIQuantumHybridPlatform'));
const AISupplyChainOptimization = lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIHealthcarePlatform = lazy(() => import('./pages/services/AIHealthcarePlatform'));
const AIAutonomousForensics = lazy(() => import('./pages/services/AIAutonomousForensics'));
const AIAutonomousThreatIntelligence = lazy(() => import('./pages/services/AIAutonomousThreatIntelligence'));
const AIAutonomousLegalResearch = lazy(() => import('./pages/services/AIAutonomousLegalResearch'));
const AIAutonomousMarketing = lazy(() => import('./pages/services/AIAutonomousMarketing'));
const AIAutonomousBusinessOperations = lazy(() => import('./pages/services/AIAutonomousBusinessOperations'));
const AIAutonomousEcosystemManager = lazy(() => import('./pages/services/AIAutonomousEcosystemManager'));
const AIAutonomousCustomerService = lazy(() => import('./pages/services/AIAutonomousCustomerService'));
const AIAutonomousSales = lazy(() => import('./pages/services/AIAutonomousSales'));
const AIAutonomousFinance = lazy(() => import('./pages/services/AIAutonomousFinance'));
const AIAutonomousHR = lazy(() => import('./pages/services/AIAutonomousHR'));
const AIAutonomousLegalCounsel = lazy(() => import('./pages/services/AIAutonomousLegalCounsel'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="text-center text-white">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
      <h2 className="text-2xl font-semibold">Loading...</h2>
    </div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-red-900">
    <div className="text-center text-white">
      <h1 className="text-6xl font-bold mb-4">Something went wrong</h1>
      <p className="text-xl mb-8">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-white text-red-900 rounded-lg hover:bg-gray-100 transition-colors"
      >
        Try again
      </button>
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
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              
              {/* Service Routes */}
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/micro-saas" element={<MicroSaaS />} />
              <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
              <Route path="/services2026" element={<Services2026 />} />
              <Route path="/services2027" element={<Services2027 />} />
              
              {/* Additional Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/news" element={<News />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              
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
        <FloatingActionButton />
      </div>
    </ErrorBoundary>
  );
}