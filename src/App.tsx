import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
<<<<<<< HEAD
import { ModernUIEnhancer } from './components/ModernUIEnhancer';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';

// Core pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Services = lazy(() => import('./pages/Services'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Resources = lazy(() => import('./pages/Resources'));
const Pricing = lazy(() => import('./pages/Pricing'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Partners = lazy(() => import('./pages/Partners'));
const RequestQuote = lazy(() => import('./pages/RequestQuote'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const ScheduleDemo = lazy(() => import('./pages/ScheduleDemo'));
const InvestorRelations = lazy(() => import('./pages/InvestorRelations'));
const Press = lazy(() => import('./pages/Press'));
const Legal = lazy(() => import('./pages/Legal'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const Webinars = lazy(() => import('./pages/Webinars'));
const Documentation = lazy(() => import('./pages/Documentation'));
const APIDocumentation = lazy(() => import('./pages/APIDocumentation'));
const Developers = lazy(() => import('./pages/Developers'));
const Training = lazy(() => import('./pages/Training'));
const Community = lazy(() => import('./pages/Community'));
const Support = lazy(() => import('./pages/Support'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2030 = lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx'));
const ComprehensiveServicesLanding2025 = lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));
const EnhancedServicesLanding = lazy(() => import('./pages/EnhancedServicesLanding.tsx'));
const ComprehensiveServicesAdvertising = lazy(() => import('./pages/ComprehensiveServicesAdvertising.tsx'));
const ComprehensiveServicesShowcase2030 = lazy(() => import('./pages/ComprehensiveServicesShowcase2030.tsx'));

// Service pages - only import existing ones
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = lazy(() => import('./pages/services/MicroSaaSProducts'));

// New innovative service routes
const AIContractAnalysis = lazy(() => import('./pages/services/AI-Powered-Contract-Analysis'));
const AISupplyChainOptimizationNew = lazy(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurityThreatIntelligence = lazy(() => import('./pages/services/AI-Cybersecurity-Threat-Intelligence'));
const AIHealthcareDiagnostics = lazy(() => import('./pages/services/AI-Healthcare-Diagnostics'));
const RevolutionaryServices2030 = lazy(() => import('./pages/RevolutionaryServices2030'));

// New AI service pages from remote
const AILegalDocumentAnalyzer = lazy(() => import('./pages/services/ai-legal-document-analyzer'));
const AIRealEstateInvestmentAnalyzer = lazy(() => import('./pages/services/ai-real-estate-investment-analyzer'));
const AIRestaurantManagementSystem = lazy(() => import('./pages/services/ai-restaurant-management-system'));
const AIFitnessCoachingPlatform = lazy(() => import('./pages/services/ai-fitness-coaching-platform'));
const AIEcommercePersonalizationEngine = lazy(() => import('./pages/services/ai-ecommerce-personalization-engine'));
const AIVideoContentCreationStudio = lazy(() => import('./pages/services/ai-video-content-creation-studio'));
const AICustomerChurnPrediction = lazy(() => import('./pages/services/ai-customer-churn-prediction'));
const AIFinancialFraudDetection = lazy(() => import('./pages/services/ai-financial-fraud-detection'));
const AIEnergyManagementSystem = lazy(() => import('./pages/services/ai-energy-management-system'));

// Simple placeholder pages for missing ones
const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts and help shape the future of AI-powered business solutions."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
    </div>
  </div>
);

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Marketplace - Zion Tech Group"
      description="Discover and purchase cutting-edge AI solutions and technology services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Coming Soon</p>
    </div>
  </div>
);

const EnhancedLoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center text-white">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
<<<<<<< HEAD
        <PerformanceOptimizer>
          <AccessibilityEnhancer>
            <ModernUIEnhancer>
              <div className="min-h-screen bg-futuristic">
                <AppHeader />
                
                <main id="main-content" className="flex-1">
                  <Suspense fallback={<EnhancedLoadingSpinner />}>
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
                      <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                      <Route path="/demo" element={<Demo />} />
                      <Route path="/community" element={<Community />} />
                      <Route path="/support" element={<Support />} />
                      <Route path="/schedule-demo" element={<ScheduleDemo />} />
                      <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                      <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                      <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                      <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                      <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                      <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                      <Route path="/request-quote" element={<RequestQuote />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/marketplace" element={<Marketplace />} />
                      <Route path="/search" element={<SearchPage />} />
                      <Route path="/api-docs" element={<APIDocumentation />} />
                      <Route path="/developers" element={<Developers />} />
                      <Route path="/training" element={<Training />} />
                      <Route path="/investors" element={<InvestorRelations />} />
                      <Route path="/press" element={<Press />} />
                      <Route path="/legal" element={<Legal />} />

                      {/* Service Routes - only for existing pages */}
                      <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                      <Route path="/services/digital-twin" element={<DigitalTwin />} />
                      <Route path="/services/data-analytics" element={<DataAnalytics />} />
                      <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                      <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                      <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                      <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                      <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                      <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                      <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
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

                      {/* Catch all route */}
                      <Route path="*" element={<Home />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
                <ChatAssistant />
              </div>
            </ModernUIEnhancer>
          </AccessibilityEnhancer>
        </PerformanceOptimizer>
=======
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<EnhancedLoadingSpinner />}>
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
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/api-docs" element={<APIDocumentation />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/training" element={<Training />} />
                <Route path="/community" element={<Community />} />
                <Route path="/support" element={<Support />} />
                <Route path="/demo" element={<ScheduleDemo />} />
                <Route path="/investors" element={<InvestorRelations />} />
                <Route path="/press" element={<Press />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/partnerships" element={<Partners />} />
                
                {/* Service Routes - only for existing pages */}
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
                <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimizationNew />} />
                <Route path="/services/ai-video-content-creation-studio" element={<AIVideoContentCreationStudio />} />
                <Route path="/services/ai-customer-churn-prediction" element={<AICustomerChurnPrediction />} />
                <Route path="/services/ai-financial-fraud-detection" element={<AIFinancialFraudDetection />} />
                <Route path="/services/ai-energy-management-system" element={<AIEnergyManagementSystem />} />
                
                {/* New innovative service routes */}
                <Route path="/services/ai-contract-analysis" element={<AIContractAnalysis />} />
                <Route path="/services/ai-cybersecurity-threat-intelligence" element={<AICybersecurityThreatIntelligence />} />
                <Route path="/services/ai-healthcare-diagnostics" element={<AIHealthcareDiagnostics />} />
                
                {/* Enhanced 404 route */}
                <Route path="*" element={
                  <div className="min-h-screen bg-futuristic flex items-center justify-center">
                    <SEO 
                      title="Page Not Found - Zion Tech Group"
                      description="The page you're looking for doesn't exist."
                      keywords="404, page not found, Zion Tech Group"
                      ogType="website"
                    />
                    <div className="text-center text-white">
                      <h1 className="text-6xl font-bold mb-4 animate-fade-in">404</h1>
                      <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-200">Page Not Found</p>
                      <p className="text-gray-400 mb-8 animate-fade-in animation-delay-400">The page you're looking for doesn't exist.</p>
                      <button 
                        onClick={() => window.history.back()} 
                        className="btn-futuristic mr-4"
                      >
                        Go Back
                      </button>
                      <button 
                        onClick={() => window.location.href = '/'} 
                        className="btn-futuristic"
                      >
                        Go Home
                      </button>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
          <AccessibilityEnhancer showAccessibilityPanel={true} />
        </div>

      </Router>
    </ErrorBoundary>
  );
}

export default App;