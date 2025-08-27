import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { AppHeader } from './layout/AppHeader';

// Core pages
const Home = React.lazy(() => import('./pages/Home'));
const Home2026 = React.lazy(() => import('./pages/Home2026'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Careers = React.lazy(() => import('./pages/Careers'));
const News = React.lazy(() => import('./pages/News'));
const Press = React.lazy(() => import('./pages/Press'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

// Service pages
const Services = React.lazy(() => import('./pages/Services'));
const Services2026 = React.lazy(() => import('./pages/Services2026'));
const Services2027 = React.lazy(() => import('./pages/InnovativeServices2027'));
const AIServices = React.lazy(() => import('./pages/AIServices'));
const AISolutions = React.lazy(() => import('./pages/AISolutions'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const MicroSaaS = React.lazy(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = React.lazy(() => import('./pages/services/MicroSAASSolutions'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices'));

// Additional pages
const Partners = React.lazy(() => import('./pages/Partners'));
const Team = React.lazy(() => import('./pages/Team'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Developers = React.lazy(() => import('./pages/Developers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Status = React.lazy(() => import('./pages/Status'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Events = React.lazy(() => import('./pages/Events'));
const Security = React.lazy(() => import('./pages/Security'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/Equipment'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const MarketplaceProducts = React.lazy(() => import('./pages/marketplace/Products'));
const MarketplaceTalent = React.lazy(() => import('./pages/marketplace/Talent'));
const MarketplaceEquipment = React.lazy(() => import('./pages/marketplace/Equipment'));
const MarketplaceServices = React.lazy(() => import('./pages/marketplace/Services'));
const Login = React.lazy(() => import('./pages/Login'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const ResearchDevelopment = React.lazy(() => import('./pages/research-development'));
const MobileLaunch = React.lazy(() => import('./pages/MobileLaunch'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const Match = React.lazy(() => import('./pages/Match'));
const Solutions = React.lazy(() => import('./pages/solutions'));

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

// Additional pages
const API = React.lazy(() => import('./pages/API'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal'));

// Accessibility page
const Accessibility = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-futuristic">
        <AppHeader />
        <main id="main-content" className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home2026" element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/contact" element={<Home />} />
              <Route path="/blog" element={<Home />} />
              <Route path="/blog/:slug" element={<Home />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/solutions" element={<Solutions />} />
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
      </div>
    </ErrorBoundary>
  );
}

export default App;