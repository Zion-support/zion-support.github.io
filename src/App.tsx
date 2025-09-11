import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';

// Lazy load pages with better error handling
const Home = React.lazy(() => import('./pages/Home').catch(() => ({ default: () => <div>Error loading Home page</div> })));
const About = React.lazy(() => import('./pages/About').catch(() => ({ default: () => <div>Error loading About page</div> })));
const Services = React.lazy(() => import('./pages/Services').catch(() => ({ default: () => <div>Error loading Services page</div> })));
const Pricing = React.lazy(() => import('./pages/Pricing').catch(() => ({ default: () => <div>Error loading Pricing page</div> })));
const Contact = React.lazy(() => import('./pages/Contact').catch(() => ({ default: () => <div>Error loading Contact page</div> })));

// Additional pages
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Legal = React.lazy(() => import('./pages/Legal'));
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// Enhanced components
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const Community = React.lazy(() => import('./pages/Community'));
const Developers = React.lazy(() => import('./pages/Developers'));
const Demo = React.lazy(() => import('./pages/Demo'));

// New pages
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensiveServicesLanding2027 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2027'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));
const InnovativeServicesOverview = React.lazy(() => import('./pages/InnovativeServicesOverview'));

// Service pages
const Cybersecurity = React.lazy(() => import('./pages/Cybersecurity').catch(() => ({ default: () => <div>Error loading Cybersecurity page</div> })));
const CloudMigration = React.lazy(() => import('./pages/CloudMigrationServices').catch(() => ({ default: () => <div>Error loading Cloud Migration page</div> })));
const DevOps = React.lazy(() => import('./pages/CloudDevOpsServices').catch(() => ({ default: () => <div>Error loading DevOps page</div> })));
const MobileDevelopment = React.lazy(() => import('./pages/MobileAppPage').catch(() => ({ default: () => <div>Error loading Mobile Development page</div> })));

// Additional service pages
const AIContentGenerationSuite = lazy(() => import('./pages/services/ai-content-generation-suite').catch(() => ({ default: () => <div>Error loading AI Content Generation Suite</div> })));
const CloudMigrationServices = lazy(() => import('./pages/services/cloud-migration-services').catch(() => ({ default: () => <div>Error loading Cloud Migration Services</div> })));
const SmartCRMPlatform = lazy(() => import('./pages/services/smart-crm-platform').catch(() => ({ default: () => <div>Error loading Smart CRM Platform</div> })));
const AIEmailResponder = lazy(() => import('./pages/services/ai-email-responder').catch(() => ({ default: () => <div>Error loading AI Email Responder</div> })));
const MobileSurveyTool = lazy(() => import('./pages/services/mobile-survey-tool').catch(() => ({ default: () => <div>Error loading Mobile Survey Tool</div> })));
const AITalentMatching = lazy(() => import('./pages/services/ai-talent-matching').catch(() => ({ default: () => <div>Error loading AI Talent Matching</div> })));
const EcommerceReturnManagement = lazy(() => import('./pages/services/ecommerce-return-management').catch(() => ({ default: () => <div>Error loading Ecommerce Return Management</div> })));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));

// Import real pages
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const InnovativeMicroSAASServices2025 = React.lazy(() => import('./pages/InnovativeMicroSAASServices2025'));

// New innovative services
const AILegalDocumentAnalysis = React.lazy(() => import('./pages/services/ai-legal-document-analysis'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/ai-supply-chain-optimization'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/ai-healthcare-analytics'));
const AIFinancialTrading = React.lazy(() => import('./pages/services/ai-financial-trading'));

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <SEO />
            <AppHeader />
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<EnhancedContact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/docs" element={<Documentation />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                  <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                  <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                  <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                  <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                  <Route path="/services/overview" element={<InnovativeServicesOverview />} />
                  <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                  <Route path="/pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                  <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                  <Route path="/request-quote" element={<RequestQuote />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/innovative-micro-saas-services-2025" element={<InnovativeMicroSAASServices2025 />} />
                  <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                  <Route path="/comprehensive-services-landing-2027" element={<ComprehensiveServicesLanding2027 />} />

                  <Route path="/schedule-demo" element={<ScheduleDemo />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/developers" element={<Developers />} />
                  <Route path="/demo" element={<Demo />} />
                  <Route path="/legal" element={<Legal />} />
                  
                  {/* Original service routes */}
                  <Route path="/cybersecurity" element={<Cybersecurity />} />
                  <Route path="/cloud-migration" element={<CloudMigration />} />
                  <Route path="/devops" element={<DevOps />} />
                  <Route path="/mobile-development" element={<MobileDevelopment />} />
                  
                  {/* Additional service routes */}
                  <Route path="/services/ai-content-generation-suite" element={<AIContentGenerationSuite />} />
                  <Route path="/services/cloud-migration-services" element={<CloudMigrationServices />} />
                  <Route path="/services/smart-crm-platform" element={<SmartCRMPlatform />} />
                  <Route path="/services/ai-email-responder" element={<AIEmailResponder />} />
                  <Route path="/services/mobile-survey-tool" element={<MobileSurveyTool />} />
                  <Route path="/services/ai-talent-matching" element={<AITalentMatching />} />
                  <Route path="/services/ecommerce-return-management" element={<EcommerceReturnManagement />} />
                  
                  {/* Service Routes - only for existing pages */}
                  <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                  <Route path="/services/digital-twin" element={<DigitalTwin />} />
                  <Route path="/services/data-analytics" element={<DataAnalytics />} />
                  <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                  <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                  
                  {/* New innovative service routes */}
                  <Route path="/services/ai-legal-document-analysis" element={<AILegalDocumentAnalysis />} />
                  <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                  <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                  <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />

                  {/* Catch all route */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <ChatAssistant />
            <PerformanceOptimizer />
            <AccessibilityEnhancer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;