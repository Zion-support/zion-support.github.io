import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Services = React.lazy(() => import('./pages/EnhancedServicesPage'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Team = React.lazy(() => import('./pages/About'));
const CaseStudies = React.lazy(() => import('./pages/About'));
const WhitePapers = React.lazy(() => import('./pages/About'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const HelpCenter = React.lazy(() => import('./pages/FAQ'));
const Training = React.lazy(() => import('./pages/About'));
const Webinars = React.lazy(() => import('./pages/About'));
const Events = React.lazy(() => import('./pages/About'));
const Support = React.lazy(() => import('./pages/Contact'));
const FinancialSolutions = React.lazy(() => import('./pages/About'));
const Mobile = React.lazy(() => import('./pages/Mobile'));
const QuantumTechnology = React.lazy(() => import('./pages/About'));
const SpaceTech = React.lazy(() => import('./pages/About'));
const AISolutions = React.lazy(() => import('./pages/About'));
const ServicesShowcase = React.lazy(() => import('./pages/EnhancedServicesPage'));
const InnovativeServicesShowcase = React.lazy(() => import('./pages/EnhancedServicesPage'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = React.lazy(() => import('./pages/Pricing'));
const EmergingTech = React.lazy(() => import('./pages/EmergingTech'));
const CuttingEdgeInnovations2027 = React.lazy(() => import('./pages/About'));
const PracticalMicroSaas2027 = React.lazy(() => import('./pages/About'));
const AllServices2027 = React.lazy(() => import('./pages/About'));
const QuantumNeuralNetworkPlatform = React.lazy(() => import('./pages/About'));
const AutonomousBusinessOperationsPlatform = React.lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));
const AIPoweredITAssetManagement = React.lazy(() => import('./pages/About'));
const SOC2ComplianceAutomation = React.lazy(() => import('./pages/About'));
const AIAutonomousResearchAssistant = React.lazy(() => import('./pages/About'));
const FiveGEnterpriseSolutions = React.lazy(() => import('./pages/5GEnterpriseSolutions'));
const AIServices = React.lazy(() => import('./pages/About'));
const CloudServices = React.lazy(() => import('./pages/About'));
const CybersecurityServices = React.lazy(() => import('./pages/CybersecurityServices'));
const InfrastructureServices = React.lazy(() => import('./pages/About'));
const DigitalTransformation = React.lazy(() => import('./pages/DigitalTransformation'));
const ConsultingServices = React.lazy(() => import('./pages/About'));
const QuantumAIServices = React.lazy(() => import('./pages/About'));
const InnovativeServices2025 = React.lazy(() => import('./pages/About'));
const AdvancedServices2025 = React.lazy(() => import('./pages/AdvancedServices'));
const AdvancedServicesShowcase2025 = React.lazy(() => import('./pages/About'));
const ComprehensivePricing2025 = React.lazy(() => import('./pages/ComprehensivePricing'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/About'));
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/About'));
const UltimateServicesShowcase2026 = React.lazy(() => import('./pages/About'));
const ComprehensivePricing2026 = React.lazy(() => import('./pages/ComprehensivePricing'));
const AIMatcherPage = React.lazy(() => import('./pages/About'));
const Signup = React.lazy(() => import('./pages/Signup'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/Talents'));
const ServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/About'));
const Categories = React.lazy(() => import('./pages/About'));
const EquipmentPage = React.lazy(() => import('./pages/About'));
const EquipmentDetail = React.lazy(() => import('./pages/About'));
const Analytics = React.lazy(() => import('./pages/About'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/About'));
const CommunityPage = React.lazy(() => import('./pages/About'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/Contact'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const GDPR = React.lazy(() => import('./pages/About'));
const API = React.lazy(() => import('./pages/About'));
const Status = React.lazy(() => import('./pages/About'));

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
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
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
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/training" element={<Training />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/events" element={<Events />} />
              <Route path="/support" element={<Support />} />
              <Route path="/financial-solutions" element={<FinancialSolutions />} />
              <Route path="/mobile" element={<Mobile />} />
              <Route path="/quantum-technology" element={<QuantumTechnology />} />
              <Route path="/space-tech" element={<SpaceTech />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/services-showcase" element={<ServicesShowcase />} />
              <Route path="/innovative-services-showcase" element={<InnovativeServicesShowcase />} />
              <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
              <Route path="/emerging-tech" element={<EmergingTech />} />
              <Route path="/cutting-edge-innovations-2027" element={<CuttingEdgeInnovations2027 />} />
              <Route path="/practical-micro-saas-2027" element={<PracticalMicroSaas2027 />} />
              <Route path="/all-services-2027" element={<AllServices2027 />} />
              <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
              <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
              <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
              <Route path="/soc2-compliance-automation" element={<SOC2ComplianceAutomation />} />
              <Route path="/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
              <Route path="/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/infrastructure" element={<InfrastructureServices />} />
              <Route path="/services/transformation" element={<DigitalTransformation />} />
              <Route path="/services/consulting" element={<ConsultingServices />} />
              <Route path="/services/quantum-ai" element={<QuantumAIServices />} />
              <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
              <Route path="/advanced-services-2025" element={<AdvancedServices2025 />} />
              <Route path="/advanced-services-showcase-2025" element={<AdvancedServicesShowcase2025 />} />
              <Route path="/comprehensive-pricing-2025" element={<ComprehensivePricing2025 />} />
              <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
              <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
              <Route path="/pricing-2026" element={<ComprehensivePricing2026 />} />
              <Route path="/match" element={<AIMatcherPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/talent" element={<TalentDirectory />} />
              <Route path="/talents" element={<TalentsPage />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/equipment" element={<EquipmentPage />} />
              <Route path="/equipment/:id" element={<EquipmentDetail />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/mobile-launch" element={<MobileLaunchPage />} />
              <Route path="/open-app" element={<OpenAppRedirect />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/zion-hire-ai" element={<ZionHireAI />} />
              <Route path="/hire-ai" element={<ZionHireAI />} />
              <Route path="/request-quote" element={<RequestQuotePage />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/gdpr" element={<GDPR />} />
              <Route path="/api" element={<API />} />
              <Route path="/status" element={<Status />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;