import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Team = React.lazy(() => import('./pages/Team'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const APIDocs = React.lazy(() => import('./pages/APIDocs'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Training = React.lazy(() => import('./pages/Training'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Events = React.lazy(() => import('./pages/Events'));
const Support = React.lazy(() => import('./pages/Support'));
const FinancialSolutions = React.lazy(() => import('./pages/FinancialSolutions'));
const Mobile = React.lazy(() => import('./pages/Mobile'));
const QuantumTechnology = React.lazy(() => import('./pages/QuantumTechnology'));
const SpaceTech = React.lazy(() => import('./pages/SpaceTech'));
const AISolutions = React.lazy(() => import('./pages/AISolutions'));
const ServicesShowcase = React.lazy(() => import('./pages/ServicesShowcase'));
const InnovativeServicesShowcase = React.lazy(() => import('./pages/InnovativeServicesShowcase'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const EmergingTech = React.lazy(() => import('./pages/EmergingTech'));
const CuttingEdgeInnovations2027 = React.lazy(() => import('./pages/CuttingEdgeInnovations2027'));
const PracticalMicroSaas2027 = React.lazy(() => import('./pages/PracticalMicroSaas2027'));
const AllServices2027 = React.lazy(() => import('./pages/AllServices2027'));
const QuantumNeuralNetworkPlatform = React.lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = React.lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));
const AIPoweredITAssetManagement = React.lazy(() => import('./pages/AIPoweredITAssetManagement'));
const SOC2ComplianceAutomation = React.lazy(() => import('./pages/SOC2ComplianceAutomation'));
const AIAutonomousResearchAssistant = React.lazy(() => import('./pages/AIAutonomousResearchAssistant'));
const FiveGEnterpriseSolutions = React.lazy(() => import('./pages/FiveGEnterpriseSolutions'));
const AIServices = React.lazy(() => import('./pages/AIServices'));
const CloudServices = React.lazy(() => import('./pages/CloudServices'));
const CybersecurityServices = React.lazy(() => import('./pages/CybersecurityServices'));
const InfrastructureServices = React.lazy(() => import('./pages/InfrastructureServices'));
const DigitalTransformation = React.lazy(() => import('./pages/DigitalTransformation'));
const ConsultingServices = React.lazy(() => import('./pages/ConsultingServices'));
const QuantumAIServices = React.lazy(() => import('./pages/QuantumAIServices'));
const InnovativeServices2025 = React.lazy(() => import('./pages/InnovativeServices2025'));
const AdvancedServices2025 = React.lazy(() => import('./pages/AdvancedServices2025'));
const AdvancedServicesShowcase2025 = React.lazy(() => import('./pages/AdvancedServicesShowcase2025'));
const ComprehensivePricing2025 = React.lazy(() => import('./pages/ComprehensivePricing2025'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));
const UltimateServicesShowcase2026 = React.lazy(() => import('./pages/UltimateServicesShowcase2026'));
const ComprehensivePricing2026 = React.lazy(() => import('./pages/ComprehensivePricing2026'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcherPage'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zion-blue-dark text-white">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>
            </div>
          }>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Additional Pages */}
              <Route path="/partners" element={<Partners />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/training" element={<Training />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/events" element={<Events />} />
              <Route path="/support" element={<Support />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/financial-solutions" element={<FinancialSolutions />} />
              <Route path="/mobile" element={<Mobile />} />
              <Route path="/quantum-technology" element={<QuantumTechnology />} />
              <Route path="/space-tech" element={<SpaceTech />} />
              
              {/* Service Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/services-showcase" element={<ServicesShowcase />} />
              <Route path="/innovative-services-showcase" element={<InnovativeServicesShowcase />} />
              <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
              <Route path="/emerging-tech" element={<EmergingTech />} />
              
              {/* 2027 Innovation Routes */}
              <Route path="/cutting-edge-innovations-2027" element={<CuttingEdgeInnovations2027 />} />
              <Route path="/practical-micro-saas-2027" element={<PracticalMicroSaas2027 />} />
              <Route path="/all-services-2027" element={<AllServices2027 />} />
              
              {/* New Service Routes */}
              <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
              <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
              <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
              <Route path="/soc2-compliance-automation" element={<SOC2ComplianceAutomation />} />
              <Route path="/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
              <Route path="/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
              
              {/* Service Category Routes */}
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/infrastructure" element={<InfrastructureServices />} />
              <Route path="/services/transformation" element={<DigitalTransformation />} />
              <Route path="/services/consulting" element={<ConsultingServices />} />
              <Route path="/services/quantum-ai" element={<QuantumAIServices />} />
              
              {/* Additional Service Routes */}
              <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
              <Route path="/advanced-services-2025" element={<AdvancedServices2025 />} />
              <Route path="/advanced-services-showcase-2025" element={<AdvancedServicesShowcase2025 />} />
              <Route path="/comprehensive-pricing-2025" element={<ComprehensivePricing2025 />} />
              <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
              <Route path="/services-showcase-2025" element={<InnovativeServicesShowcase />} />
              
              {/* Ultimate Innovative Services 2026 */}
              <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
              <Route path="/pricing-2026" element={<ComprehensivePricing2026 />} />
              
              {/* Other Routes */}
              <Route path="/match" element={<AIMatcherPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/api-docs" element={<APIDocs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

// Simple 404 component
function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zion-cyan mb-4">404</h1>
        <p className="text-xl text-zion-slate-light mb-8">Page not found</p>
        <Link to="/" className="px-6 py-3 bg-zion-cyan text-zion-blue-dark rounded-lg hover:bg-zion-cyan-light transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default App;