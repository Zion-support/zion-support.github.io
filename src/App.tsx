import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';

// Enhanced lazy loading with preloading for critical routes
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.default })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.default })));
const Contact = lazy(() => import('./pages/contact').then(module => ({ default: module.default })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.default })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(module => ({ default: module.default })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.default })));
const Solutions = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));
const Resources = lazy(() => import('./pages/Resources').then(module => ({ default: module.default })));
const CaseStudies = lazy(() => import('./pages/CaseStudies').then(module => ({ default: module.default })));
const WhitePapers = lazy(() => import('./pages/WhitePapers').then(module => ({ default: module.default })));
const Webinars = lazy(() => import('./pages/Webinars').then(module => ({ default: module.default })));
const RequestQuote = lazy(() => import('./pages/RequestQuote').then(module => ({ default: module.default })));
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.default })));
const Login = lazy(() => import('./pages/Login').then(module => ({ default: module.default })));
const FAQ = lazy(() => import('./pages/FAQ').then(module => ({ default: module.default })));
const Documentation = lazy(() => import('./pages/Documentation').then(module => ({ default: module.default })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.default })));
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.default })));
const Cookies = lazy(() => import('./pages/Cookies').then(module => ({ default: module.default })));
const Partners = lazy(() => import('./pages/Partners').then(module => ({ default: module.default })));
const Pricing = lazy(() => import('./pages/Pricing').then(module => ({ default: module.default })));
const SearchPage = lazy(() => import('./pages/SearchPage').then(module => ({ default: module.default })));
const RevolutionaryServices2030 = lazy(() => import('./pages/RevolutionaryServices2030').then(module => ({ default: module.default })));
const InnovativeServicesShowcase2027 = lazy(() => import('./pages/InnovativeServicesShowcase2027').then(module => ({ default: module.default })));
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027').then(module => ({ default: module.default })));
const ComprehensiveServicesLanding2027 = lazy(() => import('./pages/ComprehensiveServicesLanding2027').then(module => ({ default: module.default })));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2025 = lazy(() => import('./pages/ComprehensivePricingGuide2025').then(module => ({ default: module.default })));
const ComprehensivePricingGuide2030 = lazy(() => import('./pages/ComprehensivePricingGuide2030').then(module => ({ default: module.default })));
const ComprehensiveServicesLanding2025 = lazy(() => import('./pages/ComprehensiveServicesLanding2025').then(module => ({ default: module.default })));
const EnhancedServicesLanding = lazy(() => import('./pages/EnhancedServicesLanding').then(module => ({ default: module.default })));
const ComprehensiveServicesAdvertising = lazy(() => import('./pages/ComprehensiveServicesAdvertising').then(module => ({ default: module.default })));
const ComprehensiveServicesShowcase2030 = lazy(() => import('./pages/ComprehensiveServicesShowcase2030').then(module => ({ default: module.default })));
const InnovativeServicesOverview = lazy(() => import('./pages/InnovativeServicesOverview').then(module => ({ default: module.default })));

// Our new revolutionary services
const RevolutionaryServicesShowcase2025 = lazy(() => import('./pages/RevolutionaryServicesShowcase2025').then(module => ({ default: module.default })));

// Service pages - only import existing ones
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps').then(module => ({ default: module.default })));
const DigitalTwin = lazy(() => import('./pages/services/DigitalTwin').then(module => ({ default: module.default })));
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics').then(module => ({ default: module.default })));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure').then(module => ({ default: module.default })));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence').then(module => ({ default: module.default })));
const MicroSaaSProducts = lazy(() => import('./pages/services/MicroSaaSProducts').then(module => ({ default: module.default })));

// Import real pages
const Careers = lazy(() => import('./pages/Careers').then(module => ({ default: module.default })));
const Marketplace = lazy(() => import('./pages/Marketplace').then(module => ({ default: module.default })));
const InnovativeMicroSAASServices2025 = lazy(() => import('./pages/InnovativeMicroSAASServices2025').then(module => ({ default: module.default })));

// Additional pages from incoming branch
const AISolutions = lazy(() => import('./pages/AISolutions').then(module => ({ default: module.default })));
const ResearchDevelopment = lazy(() => import('./pages/ResearchDevelopment').then(module => ({ default: module.default })));
const News = lazy(() => import('./pages/News').then(module => ({ default: module.default })));
const Team = lazy(() => import('./pages/Team').then(module => ({ default: module.default })));
const Events = lazy(() => import('./pages/Events').then(module => ({ default: module.default })));
const Help = lazy(() => import('./pages/Help').then(module => ({ default: module.default })));
const Docs = lazy(() => import('./pages/Docs').then(module => ({ default: module.default })));
const Sitemap = lazy(() => import('./pages/sitemap').then(module => ({ default: module.default })));
const Support = lazy(() => import('./pages/Support').then(module => ({ default: module.default })));
const EnhancedServicesShowcase2025 = lazy(() => import('./pages/EnhancedServicesShowcase2025').then(module => ({ default: module.default })));
const EnhancedServicesShowcase2030 = lazy(() => import('./pages/EnhancedServicesShowcase2030').then(module => ({ default: module.default })));

// NEW INNOVATIVE MICRO SAAS SERVICE PAGES
const AILegalDocumentAnalyzer = lazy(() => import('./pages/services/ai-legal-document-analyzer').then(module => ({ default: module.default })));
const AIRealEstateInvestmentAnalyzer = lazy(() => import('./pages/services/ai-real-estate-investment-analyzer').then(module => ({ default: module.default })));
const AIRestaurantManagementSystem = lazy(() => import('./pages/services/ai-restaurant-management-system').then(module => ({ default: module.default })));
const AIFitnessCoachingPlatform = lazy(() => import('./pages/services/ai-fitness-coaching-platform').then(module => ({ default: module.default })));
const AIEcommercePersonalizationEngine = lazy(() => import('./pages/services/ai-ecommerce-personalization-engine').then(module => ({ default: module.default })));
const AISupplyChainOptimization = lazy(() => import('./pages/services/ai-supply-chain-optimization').then(module => ({ default: module.default })));
const AIVideoContentCreationStudio = lazy(() => import('./pages/services/ai-video-content-creation-studio').then(module => ({ default: module.default })));
const AICustomerChurnPrediction = lazy(() => import('./pages/services/ai-customer-churn-prediction').then(module => ({ default: module.default })));
const AIFinancialFraudDetection = lazy(() => import('./pages/services/ai-financial-fraud-detection').then(module => ({ default: module.default })));
const AIEnergyManagementSystem = lazy(() => import('./pages/services/ai-energy-management-system').then(module => ({ default: module.default })));

// New innovative services
const AILegalDocumentAnalysis = lazy(() => import('./pages/services/ai-legal-document-analysis').then(module => ({ default: module.default })));
const AISupplyChainOptimizationNew = lazy(() => import('./pages/services/ai-supply-chain-optimization').then(module => ({ default: module.default })));
const AIHealthcareAnalytics = lazy(() => import('./pages/services/ai-healthcare-analytics').then(module => ({ default: module.default })));
const AIFinancialTrading = lazy(() => import('./pages/services/ai-financial-trading').then(module => ({ default: module.default })));
const AIContractAnalysis = lazy(() => import('./pages/services/AI-Powered-Contract-Analysis').then(module => ({ default: module.default })));
const AICybersecurityThreatIntelligence = lazy(() => import('./pages/services/AI-Cybersecurity-Threat-Intelligence').then(module => ({ default: module.default })));
const AIHealthcareDiagnostics = lazy(() => import('./pages/services/AI-Healthcare-Diagnostics').then(module => ({ default: module.default })));

// Additional service pages
const ScheduleDemo = lazy(() => import('./pages/ScheduleDemo').then(module => ({ default: module.default })));
const Community = lazy(() => import('./pages/Community').then(module => ({ default: module.default })));
const Developers = lazy(() => import('./pages/Developers').then(module => ({ default: module.default })));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
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
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/support" element={<Support />} />
                <Route path="/enhanced-services-2025" element={<EnhancedServicesShowcase2025 />} />
                <Route path="/enhanced-services-2030" element={<EnhancedServicesShowcase2030 />} />
                <Route path="/comprehensive-pricing-2025" element={<ComprehensivePricingGuide2025 />} />
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/comprehensive-services-landing-2027" element={<ComprehensiveServicesLanding2027 />} />
                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                <Route path="/community" element={<Community />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/comprehensive-pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />
                <Route path="/enhanced-services-landing" element={<EnhancedServicesLanding />} />
                <Route path="/comprehensive-services-advertising" element={<ComprehensiveServicesAdvertising />} />
                <Route path="/comprehensive-services-showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                <Route path="/innovative-services-overview" element={<InnovativeServicesOverview />} />
                
                {/* Our new revolutionary services routes */}
                <Route path="/revolutionary-services-2025" element={<RevolutionaryServicesShowcase2025 />} />
                
                {/* Service Routes */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/services/ai-legal-document-analyzer" element={<AILegalDocumentAnalyzer />} />
                <Route path="/services/ai-real-estate-investment-analyzer" element={<AIRealEstateInvestmentAnalyzer />} />
                <Route path="/services/ai-restaurant-management-system" element={<AIRestaurantManagementSystem />} />
                <Route path="/services/ai-fitness-coaching-platform" element={<AIFitnessCoachingPlatform />} />
                <Route path="/services/ai-ecommerce-personalization-engine" element={<AIEcommercePersonalizationEngine />} />
                <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                <Route path="/services/ai-video-content-creation-studio" element={<AIVideoContentCreationStudio />} />
                <Route path="/services/ai-customer-churn-prediction" element={<AICustomerChurnPrediction />} />
                <Route path="/services/ai-financial-fraud-detection" element={<AIFinancialFraudDetection />} />
                <Route path="/services/ai-energy-management-system" element={<AIEnergyManagementSystem />} />
                
                <Route path="/ai-legal-document-analysis" element={<AILegalDocumentAnalysis />} />
                <Route path="/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                <Route path="/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                <Route path="/ai-financial-trading" element={<AIFinancialTrading />} />
                <Route path="/cloud-devops" element={<CloudDevOps />} />
                <Route path="/digital-twin" element={<DigitalTwin />} />
                <Route path="/data-analytics" element={<DataAnalytics />} />
                <Route path="/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/micro-saas-products" element={<MicroSaaSProducts />} />
                <Route path="/innovative-micro-saas-services-2025" element={<InnovativeMicroSAASServices2025 />} />
                <Route path="/ai-powered-contract-analysis" element={<AIContractAnalysis />} />
                <Route path="/ai-supply-chain-optimization-new" element={<AISupplyChainOptimizationNew />} />
                <Route path="/ai-cybersecurity-threat-intelligence" element={<AICybersecurityThreatIntelligence />} />
                <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnostics />} />
                
                {/* Catch-all route for 404 */}
                <Route path="*" element={
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                    <SEO 
                      title="Page Not Found - Zion Tech Group"
                      description="The page you're looking for doesn't exist."
                    />
                    <div className="text-center text-white">
                      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                      <p className="text-xl text-gray-300">The page you're looking for doesn't exist.</p>
                    </div>
                  </div>
                } />
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
  );
}

export default App;