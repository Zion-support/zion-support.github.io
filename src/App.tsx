import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Sidebar } from './components/Sidebar';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { EnhancedSEO } from './components/EnhancedSEO';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { EnhancedAccessibilityPanel } from './components/EnhancedAccessibilityPanel';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import InteractiveUserExperience from './components/InteractiveUserExperience';
import SecurityEnhancer from './components/SecurityEnhancer';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Team = React.lazy(() => import('./pages/Team'));
const Partners = React.lazy(() => import('./pages/Partners'));
const News = React.lazy(() => import('./pages/News'));
const Press = React.lazy(() => import('./pages/Press'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Legal = React.lazy(() => import('./pages/Legal'));

// Enhanced components
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const Community = React.lazy(() => import('./pages/Community'));
const Developers = React.lazy(() => import('./pages/Developers'));
const Demo = React.lazy(() => import('./pages/Demo'));

// AI Service pages
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/ai-healthcare-platform'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
const BlockchainWeb3Platform = React.lazy(() => import('./pages/services/blockchain-web3-platform'));
const AIHealthcareDiagnosticsPlatform = React.lazy(() => import('./pages/services/ai-healthcare-diagnostics-platform'));
const AIEducationPlatform = React.lazy(() => import('./pages/services/ai-education-platform'));
const AIMetaversePlatform = React.lazy(() => import('./pages/services/ai-metaverse-platform'));
const AISpaceTechnologyPlatform = React.lazy(() => import('./pages/services/ai-space-technology-platform'));
const AIGreenTechnologyPlatform = React.lazy(() => import('./pages/services/ai-green-technology-platform'));
const AIDevelopmentPlatform = React.lazy(() => import('./pages/services/ai-development-platform'));

// Solution pages
const EnterpriseSolutions = React.lazy(() => import('./pages/solutions/Enterprise'));
const SMBSolutions = React.lazy(() => import('./pages/solutions/smb'));
const StartupSolutions = React.lazy(() => import('./pages/solutions/startup'));
const GovernmentSolutions = React.lazy(() => import('./pages/solutions/government'));
const HealthcareSolutions = React.lazy(() => import('./pages/solutions/healthcare'));
const FinancialSolutions = React.lazy(() => import('./pages/solutions/financial'));
const EducationSolutions = React.lazy(() => import('./pages/solutions/education'));
const ManufacturingSolutions = React.lazy(() => import('./pages/solutions/manufacturing'));
const RetailSolutions = React.lazy(() => import('./pages/solutions/retail'));
const TransportationSolutions = React.lazy(() => import('./pages/solutions/transportation'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding.tsx'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising.tsx'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030.tsx'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/comprehensive-services-showcase-2025.tsx'));
const InnovativeAIServices2025 = React.lazy(() => import('./pages/innovative-ai-services-2025.tsx'));

// Additional pages
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
 );

// Innovative Micro SAAS Services 2025
const InnovativeMicroSaasServices2025 = React.lazy(() => import('./pages/innovative-micro-saas-services-2025'));

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <EnhancedErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          <Sidebar />
          
          <main className="flex-1 lg:ml-80">
            <Suspense fallback={<LoadingSpinner />}>
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
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/team" element={<Team />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/news" element={<News />} />
                <Route path="/press" element={<Press />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/support" element={<Support />} />

                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                
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
                      <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
                      <Route path="/innovative-ai-services-2025" element={<InnovativeAIServices2025 />} />
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
                      <Route path="/services/blockchain-web3-platform" element={<BlockchainWeb3Platform />} />
                      <Route path="/services/ai-healthcare-diagnostics-platform" element={<AIHealthcareDiagnosticsPlatform />} />
                      <Route path="/services/ai-education-platform" element={<AIEducationPlatform />} />
                      <Route path="/services/ai-metaverse-platform" element={<AIMetaversePlatform />} />
                      <Route path="/services/ai-space-technology-platform" element={<AISpaceTechnologyPlatform />} />
                      <Route path="/services/ai-green-technology-platform" element={<AIGreenTechnologyPlatform />} />
                      <Route path="/services/ai-development-platform" element={<AIDevelopmentPlatform />} />
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

                      {/* Solution Routes */}
                      <Route path="/solutions/enterprise" element={<EnterpriseSolutions />} />
                      <Route path="/solutions/smb" element={<SMBSolutions />} />
                      <Route path="/solutions/startup" element={<StartupSolutions />} />
                      <Route path="/solutions/government" element={<GovernmentSolutions />} />
                      <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
                      <Route path="/solutions/financial" element={<FinancialSolutions />} />
                      <Route path="/solutions/education" element={<EducationSolutions />} />
                      <Route path="/solutions/manufacturing" element={<ManufacturingSolutions />} />
                      <Route path="/solutions/retail" element={<RetailSolutions />} />
                      <Route path="/solutions/transportation" element={<TransportationSolutions />} />

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
    </EnhancedErrorBoundary>
  );
}

export default App;