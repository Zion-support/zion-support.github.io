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

// New pages from incoming branch
const MicroSaasServicesPage = lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// Service pages
const AIServices = lazy(() => import('./pages/services/AIServices'));
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/services/EnterpriseIT'));
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));

// New innovative service pages
const AIWorkflowAutomation = lazy(() => import('./pages/services/AIWorkflowAutomation'));
const BlockchainEnterpriseSolutions = lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const IoTDataAnalytics = lazy(() => import('./pages/services/IoTDataAnalytics'));

// Service pages from existing structure
const CloudServices = React.lazy(() => import('./pages/services/Cloud'));
const CybersecurityServices = React.lazy(() => import('./pages/services/Cybersecurity'));
const InfrastructureServices = React.lazy(() => import('./pages/services/Infrastructure'));
const ConsultingServices = React.lazy(() => import('./pages/services/Consulting'));
const QuantumAIServices = React.lazy(() => import('./pages/services/quantum-ai'));

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

// New service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));

// Enhanced Services 2025
const EnhancedServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedServicesShowcase2025.tsx'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025.tsx'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025.tsx'));

// Innovative Services 2027
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview = React.lazy(() => import('./pages/ComprehensiveServicesOverview'));

// Admin pages
const Admin = React.lazy(() => import('./pages/Admin.tsx'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard.tsx'));

// Enhanced loading component with better UX
const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion...</p>
      <p className="text-zion-cyan text-sm animate-pulse">Preparing your AI marketplace experience</p>
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
              
              {/* Service Routes */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/enterprise-it" element={<EnterpriseSolutionsPage />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
              <Route path="/services/consulting" element={<ConsultingServices />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/infrastructure" element={<InfrastructureServices />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/quantum-ai" element={<QuantumAIServices />} />
              
              {/* Additional Routes */}
              <Route path="/team" element={<Team />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/request-quote" element={<RequestQuotePage />} />
              <Route path="/zion-hire-ai" element={<ZionHireAI />} />
              <Route path="/support" element={<Support />} />
              <Route path="/news" element={<News />} />
              <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
              <Route path="/pricing-page" element={<PricingPage />} />
              
              {/* IT Services Routes */}
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/it-services/:service" element={<ITServicesPage />} />
              
              {/* Enhanced Services 2025 Routes */}
              <Route path="/enhanced-services-showcase-2025" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
              <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
              
              {/* Innovative Services 2027 Routes */}
              <Route path="/innovative-services-2027" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/comprehensive-pricing-guide" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/enhanced-innovative-services-2027" element={<EnhancedInnovativeServicesShowcase2027 />} />
              
              {/* New Comprehensive Routes */}
              <Route path="/services-overview" element={<ComprehensiveServicesOverview />} />
              
              {/* Emerging Tech Routes */}
              <Route path="/emerging-tech" element={<GreenIT />} />
              <Route path="/emerging-tech/:service" element={<GreenIT />} />
              
              {/* Marketplace Routes */}
              <Route path="/marketplace" element={<GreenIT />} />
              <Route path="/marketplace/:service" element={<GreenIT />} />
              
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