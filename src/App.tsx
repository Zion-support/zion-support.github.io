import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
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
const EnhancedZionServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedZionServicesShowcase2025.tsx'));
const ZionTechGroupMarketing2025 = React.lazy(() => import('./pages/ZionTechGroupMarketing2025.tsx'));

// Our Additional Innovative Services
const AdvancedInnovativeServicesShowcase2026 = React.lazy(() => import('./pages/AdvancedInnovativeServicesShowcase2026'));
const InnovativeServicesHub = React.lazy(() => import('./pages/InnovativeServicesHub'));

// New pages from incoming branch
const MicroSaasServicesPage = lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
// Service pages - temporarily commented out due to import issues
// const AIServices = lazy(() => import('./pages/services/AIServices'));
// const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
// const EnterpriseSolutionsPage = lazy(() => import('./pages/services/EnterpriseIT'));
// const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));
// const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
// const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));
// // New innovative service pages
// const AIWorkflowAutomation = lazy(() => import('./pages/services/AIWorkflowAutomation'));
// const BlockchainEnterpriseSolutions = lazy(() => import('./pages/services/BlockchainWeb3'));
// const IoTEdgeComputing = lazy(() => import('./pages/services/IoTEdgeComputing'));
// // Service pages from existing structure
// const CloudServices = React.lazy(() => import('./pages/services/Cloud'));
// const CybersecurityServices = React.lazy(() => import('./pages/services/Cybersecurity'));
// const InfrastructureServices = React.lazy(() => import('./pages/services/Infrastructure'));
// const ConsultingServices = React.lazy(() => import('./pages/services/Consulting'));
// const QuantumAIServices = React.lazy(() => import('./pages/services/quantum-ai'));
// Other pages from existing structure
const Signup = React.lazy(() => import('./pages/Signup'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));

// Missing components that are referenced in routes
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Accessibility = React.lazy(() => import('./pages/accessibility-auditor'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const APIDocs = React.lazy(() => import('./pages/ApiDocsHub'));
const GDPR = React.lazy(() => import('./pages/GDPR'));
const API = React.lazy(() => import('./pages/ApiDocsHub'));
const Status = React.lazy(() => import('./pages/Status'));
const Team = React.lazy(() => import('./pages/Team'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Support = React.lazy(() => import('./pages/Support'));
const News = React.lazy(() => import('./pages/News'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

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

// Enhanced loading component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion...</p>
      <p className="text-muted-foreground text-sm">Preparing your AI marketplace experience</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative">
        {/* Futuristic Animated Background */}
        <FuturisticAnimatedBackground />
        
        {/* Navigation */}
        <FuturisticNavigation />
        
        <main className="flex-1 relative z-10">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/api-docs" element={<APIDocs />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/gdpr" element={<GDPR />} />
              <Route path="/api" element={<API />} />
              <Route path="/status" element={<Status />} />
              
              {/* Service Routes - temporarily commented out due to import issues */}
              {/* <Route path="/services" element={<ServicesPage />} /> */}
              {/* <Route path="/services/ai" element={<AIServices />} /> */}
              {/* <Route path="/services/cloud-devops" element={<CloudDevOps />} /> */}
              {/* <Route path="/services/enterprise-it" element={<EnterpriseSolutionsPage />} /> */}
              {/* <Route path="/services/digital-transformation" element={<DigitalTransformation />} /> */}
              {/* <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} /> */}
              {/* <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} /> */}
              {/* <Route path="/services/consulting" element={<ConsultingServices />} /> */}
              {/* <Route path="/services/cybersecurity" element={<CybersecurityServices />} /> */}
              {/* <Route path="/services/infrastructure" element={<InfrastructureServices />} /> */}
              {/* <Route path="/services/cloud" element={<CloudServices />} /> */}
              {/* <Route path="/services/quantum-ai" element={<QuantumAIServices />} /> */}
              
              {/* Innovative Services Routes */}
              <Route path="/ultimate-services-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
              <Route path="/advanced-services-2026" element={<AdvancedInnovativeServicesShowcase2026 />} />
              <Route path="/innovative-services-hub" element={<InnovativeServicesHub />} />
              <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />
              <Route path="/enhanced-zion-services-2025" element={<EnhancedZionServicesShowcase2025 />} />
              <Route path="/zion-tech-group-marketing-2025" element={<ZionTechGroupMarketing2025 />} />
              
              {/* Additional Routes */}
              <Route path="/team" element={<Team />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/request-quote" element={<RequestQuotePage />} />
              <Route path="/zion-hire-ai" element={<ZionHireAI />} />
              <Route path="/support" element={<Support />} />
              <Route path="/news" element={<News />} />
              <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
              <Route path="/pricing-page" element={<PricingPage />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer */}
        <FuturisticFooter />
        
        {/* Chat Assistant */}
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;