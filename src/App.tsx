import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { ModernUIEnhancer } from './components/ModernUIEnhancer';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';

// Core pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Partners = React.lazy(() => import('./pages/Partners'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const APIDocumentation = React.lazy(() => import('./pages/APIDocumentation'));
const Developers = React.lazy(() => import('./pages/Developers'));
const Training = React.lazy(() => import('./pages/Training'));
const Community = React.lazy(() => import('./pages/Community'));
const Support = React.lazy(() => import('./pages/Support'));
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const InvestorRelations = React.lazy(() => import('./pages/InvestorRelations'));
const Press = React.lazy(() => import('./pages/Press'));
const Legal = React.lazy(() => import('./pages/Legal'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const Demo = React.lazy(() => import('./pages/Demo'));

// AI Service pages
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/ai-healthcare-platform'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding.tsx'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising.tsx'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030.tsx'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));

// NEW INNOVATIVE MICRO SAAS SERVICE PAGES
const AILegalDocumentAnalyzer = React.lazy(() => import('./pages/services/ai-legal-document-analyzer'));
const AIRealEstateInvestmentAnalyzer = React.lazy(() => import('./pages/services/ai-real-estate-investment-analyzer'));
const AIRestaurantManagementSystem = React.lazy(() => import('./pages/services/ai-restaurant-management-system'));
const AIFitnessCoachingPlatform = React.lazy(() => import('./pages/services/ai-fitness-coaching-platform'));
const AIEcommercePersonalizationEngine = React.lazy(() => import('./pages/services/ai-ecommerce-personalization-engine'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/ai-supply-chain-optimization'));
const AIVideoContentCreationStudio = React.lazy(() => import('./pages/services/ai-video-content-creation-studio'));
const AICustomerChurnPrediction = React.lazy(() => import('./pages/services/ai-customer-churn-prediction'));
const AIFinancialFraudDetection = React.lazy(() => import('./pages/services/ai-financial-fraud-detection'));
const AIEnergyManagementSystem = React.lazy(() => import('./pages/services/ai-energy-management-system'));

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
      </Router>
    </ErrorBoundary>
  );
}

export default App;