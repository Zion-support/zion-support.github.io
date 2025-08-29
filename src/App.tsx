import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { EnhancedSEO } from './components/EnhancedSEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ThemeProvider } from './components/ThemeProvider';
import { EnhancedAccessibilityPanel } from './components/EnhancedAccessibilityPanel';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import { InteractiveUserExperience } from './components/InteractiveUserExperience';
import { SecurityEnhancer } from './components/SecurityEnhancer';

// Core pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// Enhanced components
const Community = React.lazy(() => import('./pages/Community'));
const Demo = React.lazy(() => import('./pages/Demo'));

// Import real pages
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const ComprehensivePricingGuide2026 = React.lazy(() => import('./pages/ComprehensivePricingGuide2026'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesLanding2030 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2030'));

// New comprehensive services pages for 2030
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));

// Innovative Services Showcase 2025
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// Innovative Services Showcase 2028
const InnovativeServicesShowcase2028 = React.lazy(() => import('./pages/InnovativeServicesShowcase2028'));
const ComprehensivePricingGuide2028 = React.lazy(() => import('./pages/ComprehensivePricingGuide2028'));
const ComprehensiveServicesLanding2028 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2028'));

// Service category pages
const AIServices = React.lazy(() => import('./pages/AIServices'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const MicroSaaS = React.lazy(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = React.lazy(() => import('./pages/services/MicroSAAS'));
const ServicesCatalog = React.lazy(() => import('./pages/ServicesCatalog'));

// Individual service pages
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const IoTEdge = React.lazy(() => import('./pages/services/IoTEdge'));
const BlockchainEnterpriseSolutions = React.lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const HealthcareTech = React.lazy(() => import('./pages/services/HealthcareTech'));
const Sustainability = React.lazy(() => import('./pages/services/Sustainability'));
const ZeroTrustNetworkArchitecture = React.lazy(() => import('./pages/services/ZeroTrustNetworkArchitecture'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));

// Micro SaaS services
const AiLeadScoring = React.lazy(() => import('./pages/services/AiLeadScoring'));
const WebsiteAiChatbot = React.lazy(() => import('./pages/services/WebsiteAiChatbot'));
const RagSearch = React.lazy(() => import('./pages/services/RagSearch'));
const MlopsPipeline = React.lazy(() => import('./pages/services/MlopsPipeline'));
const EcommercePersonalization = React.lazy(() => import('./pages/services/EcommercePersonalization'));
const ReturnsManagementSaaS = React.lazy(() => import('./pages/services/ReturnsManagementSaaS'));
const VendorRiskManagement = React.lazy(() => import('./pages/services/VendorRiskManagement'));
const AISEOOptimizer = React.lazy(() => import('./pages/services/AISEOOptimizer'));
const SaaSChurnPredictor = React.lazy(() => import('./pages/services/SaaSChurnPredictor'));
const AIIncidentPostmortems = React.lazy(() => import('./pages/services/AIIncidentPostmortems'));
const APIMonitoringSaaS = React.lazy(() => import('./pages/services/APIMonitoringSaaS'));
const GDPRCookieCompliance = React.lazy(() => import('./pages/services/GDPRCookieCompliance'));
const AIProofreadingStudio = React.lazy(() => import('./pages/services/AIProofreadingStudio'));

// AI Services
const AIHRTalentAcquisition = React.lazy(() => import('./pages/services/AIHRTalentAcquisition'));
const AICustomerExperienceAnalytics = React.lazy(() => import('./pages/services/AICustomerExperienceAnalytics'));

// Temporarily comment out problematic components until they're fixed
// const News = React.lazy(() => import('./pages/News'));
// const Events = React.lazy(() => import('./pages/Events'));
// const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-futuristic">
            <AppHeader />
            
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Core Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/faq" element={<FAQ />} />
                  {/* Temporarily comment out problematic routes
                  <Route path="/help" element={<Help />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/docs" element={<Documentation />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/accessibility" element={<Accessibility />} />
                  <Route path="/security" element={<Security />} />
                  <Route path="/compliance" element={<Compliance />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/press" element={<Press />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/status" element={<Status />} />
                  <Route path="/demo" element={<Demo />} />
                  <Route path="/onsite-support" element={<OnsiteSupport />} />
                  */}
                  <Route path="/pricing" element={<ComprehensivePricingGuide2027 />} />
                  <Route path="/pricing-2030" element={<ComprehensivePricingGuide2030 />} />
                  <Route path="/comprehensive-pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                  <Route path="/pricing-guide" element={<PricingGuide />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services-catalog" element={<ServicesCatalog />} />
                  {/* <Route path="/services-overview" element={<ServicesOverview />} />
                  <Route path="/services-comparison" element={<ServicesComparisonPage />} /> */}
                  
                  {/* Comprehensive Services Routes */}
                  <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                  <Route path="/comprehensive-services" element={<ComprehensiveServicesLanding2025 />} />
                  <Route path="/comprehensive-services-2030" element={<ComprehensiveServicesLanding2030 />} />
                  <Route path="/revolutionary-services-showcase-2030" element={<RevolutionaryServicesShowcase2030 />} />
                  <Route path="/comprehensive-services-showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                  <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
                  <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />
                  {/* <Route path="/emerging-tech-showcase-2025" element={<EmergingTechShowcase2025 />} /> */}
                  <Route path="/innovative-services-showcase-2028" element={<InnovativeServicesShowcase2028 />} />
                  <Route path="/pricing-guide-2028" element={<ComprehensivePricingGuide2028 />} />
                  <Route path="/comprehensive-services-landing-2028" element={<ComprehensiveServicesLanding2028 />} />
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/micro-saas" element={<MicroSaaS />} />
                  {/* Temporarily comment out problematic service routes
                  <Route path="/services/affiliate-marketing-tracker" element={<AffiliateMarketingTracker />} />
                  <Route path="/services/uptime-sla-monitor" element={<UptimeSLAMonitor />} />
                  <Route path="/services/soc2-compliance-tracker" element={<SOC2ComplianceTracker />} />
                  <Route path="/services/employee-scheduling-saas" element={<EmployeeSchedulingSaaS />} />
                  <Route path="/services/ai-support-helpdesk" element={<AISupportHelpdesk />} />
                  <Route path="/services/ai-content-generator" element={<AIContentGenerator />} />
                  */}
                  <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                  
                  {/* Additional Routes */}
                  {/* <Route path="/talent" element={<Talent />} />
                  <Route path="/equipment" element={<Equipment />} />
                  <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/events" element={<Events />} /> */}
                  
                  {/* Service Category Routes */}
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/micro-saas" element={<MicroSaaS />} />
                  <Route path="/request-quote" element={<RequestQuote />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/partners" element={<Partners />} />
                  
                  {/* Service Routes */}
                  <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                  <Route path="/services/digital-twin" element={<DigitalTwin />} />
                  <Route path="/services/data-analytics" element={<DataAnalytics />} />
                  <Route path="/services/iot-edge" element={<IoTEdge />} />
                  <Route path="/services/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                  <Route path="/services/healthcare-tech" element={<HealthcareTech />} />
                  <Route path="/services/sustainability" element={<Sustainability />} />
                  <Route path="/services/zero-trust-network-architecture" element={<ZeroTrustNetworkArchitecture />} />
                  {/* <Route path="/services/incident-response-platform" element={<IncidentResponsePlatform />} /> */}
                  
                  {/* AI Services */}
                  <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                  <Route path="/services/ai-hr-talent-acquisition" element={<AIHRTalentAcquisition />} />
                  <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
                  
                  {/* Micro SaaS Services */}
                  <Route path="/services/ai-lead-scoring" element={<AiLeadScoring />} />
                  <Route path="/services/website-ai-chatbot" element={<WebsiteAiChatbot />} />
                  <Route path="/services/rag-search" element={<RagSearch />} />
                  <Route path="/services/mlops-pipeline" element={<MlopsPipeline />} />
                  <Route path="/services/ecommerce-personalization" element={<EcommercePersonalization />} />
                  <Route path="/services/returns-management-saas" element={<ReturnsManagementSaaS />} />
                  <Route path="/services/vendor-risk-management" element={<VendorRiskManagement />} />
                  <Route path="/services/ai-seo-optimizer" element={<AISEOOptimizer />} />
                  <Route path="/services/saas-churn-predictor" element={<SaaSChurnPredictor />} />
                  <Route path="/services/ai-incident-postmortems" element={<AIIncidentPostmortems />} />
                  <Route path="/services/api-monitoring-saas" element={<APIMonitoringSaaS />} />
                  <Route path="/services/gdpr-cookie-compliance" element={<GDPRCookieCompliance />} />
                  <Route path="/services/ai-proofreading-studio" element={<AIProofreadingStudio />} />
                  
                  {/* Catch-all route */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
            <ChatAssistant />
            <EnhancedAccessibilityPanel />
            <PerformanceOptimizer />
            <AdvancedPerformanceMonitor />
            <InteractiveUserExperience />
            <SecurityEnhancer />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;