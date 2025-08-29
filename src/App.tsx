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

// Enhanced services pages with better error handling
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx').then(module => ({ default: module.default })));
const ComprehensivePricingGuide2030 = lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx').then(module => ({ default: module.default })));
const ComprehensiveServicesLanding2025 = lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx').then(module => ({ default: module.default })));
const EnhancedServicesLanding = lazy(() => import('./pages/EnhancedServicesLanding.tsx').then(module => ({ default: module.default })));
const ComprehensiveServicesAdvertising = lazy(() => import('./pages/ComprehensiveServicesAdvertising.tsx').then(module => ({ default: module.default })));
const ComprehensiveServicesShowcase2030 = lazy(() => import('./pages/ComprehensiveServicesShowcase2030.tsx').then(module => ({ default: module.default })));

// Add missing imports
const EnhancedContact = lazy(() => import('./pages/EnhancedContact').then(module => ({ default: module.default })));

// Service pages with enhanced error boundaries
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps').then(module => ({ default: module.default })));
const DigitalTwin = lazy(() => import('./pages/services/DigitalTwin').then(module => ({ default: module.default })));
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics').then(module => ({ default: module.default })));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure').then(module => ({ default: module.default })));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence').then(module => ({ default: module.default })));
const MicroSaaSProducts = lazy(() => import('./pages/services/MicroSaaSProducts').then(module => ({ default: module.default })));
// Additional pages from remote
const Legal = lazy(() => import('./pages/Legal').then(module => ({ default: module.default })));
const InnovativeServicesShowcase2027 = lazy(() => import('./pages/InnovativeServicesShowcase2027').then(module => ({ default: module.default })));
const ComprehensiveServicesLanding2027 = lazy(() => import('./pages/ComprehensiveServicesLanding2027').then(module => ({ default: module.default })));
const ComprehensiveServicesShowcase2029 = lazy(() => import('./pages/ComprehensiveServicesShowcase2029').then(module => ({ default: module.default })));
const ScheduleDemo = lazy(() => import('./pages/ScheduleDemo').then(module => ({ default: module.default })));
const Community = lazy(() => import('./pages/Community').then(module => ({ default: module.default })));
const Developers = lazy(() => import('./pages/Developers').then(module => ({ default: module.default })));
const Demo = lazy(() => import('./pages/Demo').then(module => ({ default: module.default })));

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

// Enhanced placeholder pages with better SEO and accessibility
const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts and help shape the future of AI-powered business solutions."
      keywords="careers, jobs, technology, AI, Zion Tech Group, employment opportunities"
      ogType="website"
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in">Careers</h1>
      <p className="text-xl text-gray-300 animate-fade-in animation-delay-200">Join our team</p>
      <div className="mt-8 animate-fade-in animation-delay-400">
        <p className="text-gray-400 mb-4">We're always looking for talented individuals to join our mission</p>
        <button className="btn-futuristic">View Open Positions</button>
      </div>
    </div>
  </div>
);

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Marketplace - Zion Tech Group"
      description="Explore our marketplace of AI-powered technology solutions and services."
      keywords="marketplace, AI solutions, technology services, Zion Tech Group"
      ogType="website"
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in">Marketplace</h1>
      <p className="text-xl text-gray-300 animate-fade-in animation-delay-200">Explore our solutions</p>
      <div className="mt-8 animate-fade-in animation-delay-400">
        <p className="text-gray-400 mb-4">Discover cutting-edge technology solutions</p>
        <button className="btn-futuristic">Browse Solutions</button>
      </div>
    </div>
  </div>
);

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner />
      <p className="text-white mt-4 text-lg">Loading amazing content...</p>
      <div className="mt-2 text-sm text-gray-400">Powered by Zion Tech Group</div>
    </div>
  </div>
);



function App() {
  return (
    <ErrorBoundary enableErrorReporting={true} showErrorDetails={process.env.NODE_ENV === 'development'}>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<EnhancedLoadingSpinner />}>
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
                <Route path="/services/comprehensive-showcase-2029" element={<ComprehensiveServicesShowcase2029 />} />
                <Route path="/comprehensive-services-showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                {/* Service Routes with enhanced error handling */}
                
                {/* Additional Routes */}
                <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                <Route path="/comprehensive-services-landing-2027" element={<ComprehensiveServicesLanding2027 />} />
                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                <Route path="/community" element={<Community />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/demo" element={<Demo />} />
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