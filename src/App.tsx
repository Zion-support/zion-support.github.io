import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { SEO } from './components/SEO';
import { PageLoader } from './components/LoadingSpinner';

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
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview'));
const ServicesAdvertising = React.lazy(() => import('./pages/ServicesAdvertising'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));

// Service pages
const AIServices = React.lazy(() => import('./pages/services/AIServices'));
const CybersecurityServices = React.lazy(() => import('./pages/services/CybersecurityServices'));
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const BlockchainServices = React.lazy(() => import('./pages/services/BlockchainServices'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const Sustainability = React.lazy(() => import('./pages/services/GreenIT'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const ConsultingServices = React.lazy(() => import('./pages/services/ConsultingServices'));
const ITOnsiteServices = React.lazy(() => import('./pages/services/ITOnsiteServices'));
const FiveGSolutions = React.lazy(() => import('./pages/services/FiveGNetworkOptimization'));

// Micro SAAS pages
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const CustomerExperience = React.lazy(() => import('./pages/services/AICustomerServiceAutomation'));
const SupplyChain = React.lazy(() => import('./pages/services/ManufacturingSolutions'));
const ContentCreation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const HRPlatform = React.lazy(() => import('./pages/services/AIWorkflowAutomation'));
const AIQuantumFinance = React.lazy(() => import('./pages/services/AIQuantumFinance'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AISmartCitySolutions = React.lazy(() => import('./pages/services/AISmartCitySolutions'));

// Marketplace pages
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const Products = React.lazy(() => import('./pages/Marketplace'));
const Talent = React.lazy(() => import('./pages/Marketplace'));
const Equipment = React.lazy(() => import('./pages/Marketplace'));

// Company pages
const Team = React.lazy(() => import('./pages/About'));
const Signup = React.lazy(() => import('./pages/Signup'));
const Help = React.lazy(() => import('./pages/HelpCenterPage'));
const Security = React.lazy(() => import('./pages/Security'));
const Status = React.lazy(() => import('./pages/Status'));
const Cookies = React.lazy(() => import('./pages/Cookies'));

// Loading component
const LoadingSpinner = () => (
  <div 
    className="min-h-screen bg-futuristic flex items-center justify-center"
    role="status"
    aria-label="Loading page content"
  >
    <PageLoader />
  </div>
);

// New missing pages - using placeholder components for now
const Team = React.lazy(() => import('./pages/Team'));
const Help = React.lazy(() => import('./pages/Help'));
const Security = React.lazy(() => import('./pages/Security'));
const Status = React.lazy(() => import('./pages/Status'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Leadership = React.lazy(() => import('./pages/Leadership'));
const Events = React.lazy(() => import('./pages/Events'));

// Service sub-pages
const AIAnalytics = React.lazy(() => import('./pages/Services/AIAnalytics'));
const Cybersecurity = React.lazy(() => import('./pages/Services/Cybersecurity'));
const CloudDevOps = React.lazy(() => import('./pages/Services/CloudDevOps'));
const IoTEdge = React.lazy(() => import('./pages/Services/IoTEdge'));
const QuantumComputing = React.lazy(() => import('./pages/Services/QuantumComputing'));
const Blockchain = React.lazy(() => import('./pages/Services/Blockchain'));
const DigitalTwin = React.lazy(() => import('./pages/Services/DigitalTwin'));
const Sustainability = React.lazy(() => import('./pages/Services/Sustainability'));
const FiveGSolutions = React.lazy(() => import('./pages/Services/FiveGSolutions'));

// Micro SAAS sub-pages
const AIBusinessIntelligence = React.lazy(() => import('./pages/MicroSAAS/AIBusinessIntelligence'));
const CustomerExperience = React.lazy(() => import('./pages/MicroSAAS/CustomerExperience'));
const QuantumComputingSAAS = React.lazy(() => import('./pages/MicroSAAS/QuantumComputing'));
const SupplyChain = React.lazy(() => import('./pages/MicroSAAS/SupplyChain'));
const CybersecuritySAAS = React.lazy(() => import('./pages/MicroSAAS/Cybersecurity'));
const IoTEdgeSAAS = React.lazy(() => import('./pages/MicroSAAS/IoTEdge'));
const ContentCreation = React.lazy(() => import('./pages/MicroSAAS/ContentCreation'));
const HRPlatform = React.lazy(() => import('./pages/MicroSAAS/HRPlatform'));

// IT Services sub-pages
const Infrastructure = React.lazy(() => import('./pages/ITServices/Infrastructure'));
const DigitalTransformation = React.lazy(() => import('./pages/ITServices/DigitalTransformation'));
const Consulting = React.lazy(() => import('./pages/ITServices/Consulting'));
const OnsiteSupport = React.lazy(() => import('./pages/ITServices/OnsiteSupport'));
const GreenITServices = React.lazy(() => import('./pages/ITServices/GreenIT'));

// Marketplace sub-pages
const Marketplace = React.lazy(() => import('./pages/Marketplace/Marketplace'));
const Products = React.lazy(() => import('./pages/Marketplace/Products'));
const Talent = React.lazy(() => import('./pages/Marketplace/Talent'));
const Equipment = React.lazy(() => import('./pages/Marketplace/Equipment'));
const Categories = React.lazy(() => import('./pages/Marketplace/Categories'));

function App() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, 'id'>) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services-overview" element={<ServicesOverview />} />
              <Route path="/services-advertising" element={<ServicesAdvertising />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/news" element={<News />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              
              {/* Service Routes */}
              <Route path="/services/ai-analytics" element={<AIServices />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/iot-edge" element={<IoTServices />} />
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/blockchain" element={<BlockchainServices />} />
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/sustainability" element={<Sustainability />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/infrastructure" element={<ITInfrastructure />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/consulting" element={<ConsultingServices />} />
              <Route path="/services/onsite-support" element={<ITOnsiteServices />} />
              <Route path="/services/5g-solutions" element={<FiveGSolutions />} />
              
              {/* Micro SAAS Routes */}
              <Route path="/micro-saas" element={<ServicesPage />} />
              <Route path="/micro-saas/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/micro-saas/customer-experience" element={<CustomerExperience />} />
              <Route path="/micro-saas/quantum-computing" element={<QuantumComputing />} />
              <Route path="/micro-saas/supply-chain" element={<SupplyChain />} />
              <Route path="/micro-saas/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/micro-saas/iot-edge" element={<IoTServices />} />
              <Route path="/micro-saas/content-creation" element={<ContentCreation />} />
              <Route path="/micro-saas/hr-platform" element={<HRPlatform />} />
              <Route path="/micro-saas/ai-quantum-finance" element={<AIQuantumFinance />} />
              <Route path="/micro-saas/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
              <Route path="/micro-saas/ai-smart-city-solutions" element={<AISmartCitySolutions />} />
              
              {/* IT Services Routes */}
              <Route path="/it-services" element={<ITInfrastructure />} />
              <Route path="/it-services/infrastructure" element={<ITInfrastructure />} />
              <Route path="/it-services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/it-services/consulting" element={<ConsultingServices />} />
              <Route path="/it-services/onsite-support" element={<ITOnsiteServices />} />
              <Route path="/it-services/green-it" element={<Sustainability />} />
              <Route path="/it-services/5g-solutions" element={<FiveGSolutions />} />
              
              {/* Marketplace Routes */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/new-products" element={<NewProductsPage />} />
              <Route path="/more-products" element={<MoreProductsPage />} />
              <Route path="/products-admin" element={<ProductsAdminPage />} />
              <Route path="/listing/:id" element={<ListingDetail />} />
              <Route path="/category/:id" element={<CategoryDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/order/:id" element={<OrderDetail />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              
              {/* Talent & HR Routes */}
              <Route path="/talent" element={<Talent />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/job/:id" element={<JobDetails />} />
              <Route path="/interviews" element={<Interviews />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/company-workspace" element={<CompanyWorkspace />} />
              <Route path="/profile/:id" element={<ProfileDetail />} />
              <Route path="/portfolio-builder" element={<PortfolioBuilder />} />
              <Route path="/zion-hire-ai" element={<ZionHireAI />} />
              
              {/* Equipment & Services Routes */}
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              <Route path="/soc2-compliance-automation" element={<SOC2ComplianceAutomation />} />
              <Route path="/financial-solutions" element={<FinancialSolutions />} />
              <Route path="/5g-network-optimization" element={<FiveGNetworkOptimization />} />
              <Route path="/emerging-tech" element={<EmergingTech />} />
              
              {/* Technology Service Routes */}
              <Route path="/quantum-technology" element={<QuantumTechnology />} />
              <Route path="/cybersecurity-services" element={<CybersecurityServices />} />
              <Route path="/ai-business-solutions" element={<AIBusinessSolutions />} />
              <Route path="/cloud-infrastructure" element={<CloudInfrastructure />} />
              <Route path="/blockchain-services" element={<BlockchainServices />} />
              <Route path="/iot-services" element={<IoTServices />} />
              <Route path="/digital-marketing-services" element={<DigitalMarketingServices />} />
              <Route path="/manufacturing-solutions" element={<ManufacturingSolutions />} />
              <Route path="/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
              
              {/* Enterprise Routes */}
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/enterprise-it" element={<EnterpriseIT />} />
              <Route path="/enterprise-demo" element={<EnterpriseDemo />} />
              <Route path="/enterprise-billing" element={<EnterpriseBilling />} />
              <Route path="/enterprise-admin" element={<EnterpriseAdmin />} />
              <Route path="/enterprise-plans" element={<EnterprisePlans />} />
              
              {/* Advanced Services Routes */}
              <Route path="/business-solutions" element={<BusinessSolutionsPage />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
              <Route path="/advanced-services" element={<AdvancedServicesPage />} />
              <Route path="/enhanced-services" element={<EnhancedServicesPage />} />
              <Route path="/enhanced-innovative-services" element={<EnhancedInnovativeServices />} />
              <Route path="/new-services-overview" element={<NewServicesOverview />} />
              <Route path="/services-comparison" element={<ServicesComparisonPage />} />
              <Route path="/micro-saas-services" element={<MicroSaasServices />} />
              <Route path="/micro-saas-showcase" element={<MicroSAASShowcase />} />
              <Route path="/next-gen-services-2025" element={<NextGenServicesShowcase2025 />} />
              <Route path="/autonomous-business-operations" element={<AutonomousBusinessOperationsPlatform />} />
              <Route path="/cloud-cost-optimizer" element={<CloudCostOptimizer />} />
              <Route path="/cloud-migration-services" element={<CloudMigrationServices />} />
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/ai-code-review" element={<AICodeReview />} />
              <Route path="/ai-content-generator" element={<AIContentGenerator />} />
              <Route path="/content-generator" element={<ContentGenerator />} />
              <Route path="/ai-research-assistant" element={<AIResearchAssistant />} />
              
              {/* Developer Routes */}
              <Route path="/developer" element={<DeveloperPortal />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/api" element={<API />} />
              
              {/* Community Routes */}
              <Route path="/community" element={<Community />} />
              <Route path="/forum/category/:id" element={<ForumCategoryPage />} />
              <Route path="/forum/post/:id" element={<ForumPostPage />} />
              <Route path="/create-post" element={<CreatePostPage />} />
              <Route path="/edit-post/:id" element={<EditPostPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/search-results" element={<SearchResultsPage />} />
              <Route path="/community-profile/:id" element={<CommunityProfilePage />} />
              <Route path="/video-call" element={<VideoCall />} />
              <Route path="/dispute-management" element={<DisputeManagement />} />
              
              {/* User Account Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account-settings" element={<AccountSettings />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/client-dashboard" element={<ClientDashboard />} />
              
              {/* Pricing Routes */}
              <Route path="/pricing-guide" element={<PricingGuide />} />
              <Route path="/pricing-guide-page" element={<PricingGuidePage />} />
              <Route path="/pricing-page" element={<PricingPage />} />
              
              {/* Featured Routes */}
              <Route path="/featured" element={<Featured />} />
              
              {/* Error Routes */}
              <Route path="/404" element={<ErrorRoutes />} />
              <Route path="/error" element={<ErrorRoutes />} />
              <Route path="*" element={<ErrorRoutes />} />
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