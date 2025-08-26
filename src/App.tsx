import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';

// Lazy load pages - Main pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));

// Lazy load pages - Services
const AIBusinessSolutions = React.lazy(() => import('./pages/AIBusinessSolutions.jsx'));
const CybersecuritySuite = React.lazy(() => import('./pages/CybersecuritySuite.jsx'));
const CloudInfrastructure = React.lazy(() => import('./pages/CloudInfrastructure.jsx'));
const DigitalMarketingServicesPage = React.lazy(() => import('./pages/DigitalMarketingServicesPage.jsx'));
const FinancialSolutions = React.lazy(() => import('./pages/FinancialSolutions.jsx'));
const ManufacturingSolutions = React.lazy(() => import('./pages/ManufacturingSolutions.jsx'));
const IoTServicesPage = React.lazy(() => import('./pages/IoTServicesPage.jsx'));
const BlockchainServicesPage = React.lazy(() => import('./pages/BlockchainServicesPage.jsx'));
const QuantumTechnology = React.lazy(() => import('./pages/QuantumTechnology.jsx'));
const FiveGEnterpriseSolutions = React.lazy(() => import('./pages/5GEnterpriseSolutions.jsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.jsx'));
const EnterpriseIT = React.lazy(() => import('./pages/EnterpriseIT.jsx'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices.jsx'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage.jsx'));
const DisputeManagement = React.lazy(() => import('./pages/DisputeManagement.jsx'));

// Lazy load pages - Products & Solutions
const ProductPage = React.lazy(() => import('./pages/ProductPage.jsx'));
const NewProductsPage = React.lazy(() => import('./pages/NewProductsPage.jsx'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage.jsx'));
const PortfolioBuilder = React.lazy(() => import('./pages/PortfolioBuilder.jsx'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI.jsx'));
const AIResearchAssistant = React.lazy(() => import('./pages/AIResearchAssistant.jsx'));
const AIContentGenerator = React.lazy(() => import('./pages/AIContentGenerator.jsx'));
const AICodeReview = React.lazy(() => import('./pages/AICodeReview.jsx'));
const CloudCostOptimizer = React.lazy(() => import('./pages/CloudCostOptimizer.jsx'));
const ServiceDescriptionGenerator = React.lazy(() => import('./pages/ServiceDescriptionGenerator.jsx'));

// Lazy load pages - Business & Enterprise
const BusinessSolutionsPage = React.lazy(() => import('./pages/BusinessSolutionsPage.jsx'));
const EnterpriseAdmin = React.lazy(() => import('./pages/EnterpriseAdmin.jsx'));
const EnterpriseBilling = React.lazy(() => import('./pages/EnterpriseBilling.jsx'));
const EnterpriseDemo = React.lazy(() => import('./pages/EnterpriseDemo.jsx'));
const EnterprisePlans = React.lazy(() => import('./pages/EnterprisePlans.jsx'));
const DigitalTransformation = React.lazy(() => import('./pages/DigitalTransformation.jsx'));
const AutonomousBusinessOperationsPlatform = React.lazy(() => import('./pages/AutonomousBusinessOperationsPlatform.jsx'));

// Lazy load pages - Community & Support
const FAQ = React.lazy(() => import('./pages/FAQ.jsx'));
const Partners = React.lazy(() => import('./pages/Partners.jsx'));
const Events = React.lazy(() => import('./pages/Events.jsx'));
const News = React.lazy(() => import('./pages/News.jsx'));
const BlogPost = React.lazy(() => import('./pages/BlogPost.jsx'));
const ForumPostPage = React.lazy(() => import('./pages/ForumPostPage.jsx'));
const ForumCategoryPage = React.lazy(() => import('./pages/ForumCategoryPage.jsx'));
const CreatePostPage = React.lazy(() => import('./pages/CreatePostPage.jsx'));
const EditPostPage = React.lazy(() => import('./pages/EditPostPage.jsx'));

// Lazy load pages - User & Account
const Signup = React.lazy(() => import('./pages/Signup.jsx'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword.jsx'));
const Dashboard = React.lazy(() => import('./pages/Dashboard.jsx'));
const Profile = React.lazy(() => import('./pages/Profile.jsx'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage.jsx'));
const UpdatePassword = React.lazy(() => import('./pages/UpdatePassword.jsx'));

// Lazy load pages - Marketplace & E-commerce
const Cart = React.lazy(() => import('./pages/Cart.jsx'));
const Orders = React.lazy(() => import('./pages/Orders.jsx'));
const OrderDetail = React.lazy(() => import('./pages/OrderDetail.jsx'));
const OrderConfirmation = React.lazy(() => import('./pages/OrderConfirmation.jsx'));
const SearchResultsPage = React.lazy(() => import('./pages/SearchResultsPage.jsx'));
const CategoryDetail = React.lazy(() => import('./pages/CategoryDetail.jsx'));
const ListingDetail = React.lazy(() => import('./pages/ListingDetail.jsx'));

// Lazy load pages - Jobs & Talent
const PostJob = React.lazy(() => import('./pages/PostJob.jsx'));
const JobDetails = React.lazy(() => import('./pages/JobDetails.jsx'));
const HiringTracker = React.lazy(() => import('./pages/HiringTracker.jsx'));
const TalentOnboarding = React.lazy(() => import('./pages/TalentOnboarding.jsx'));
const CommunityProfilePage = React.lazy(() => import('./pages/CommunityProfilePage.jsx'));

// Lazy load pages - Legal & Documentation
const Terms = React.lazy(() => import('./pages/Terms.jsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.jsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.jsx'));
const Documentation = React.lazy(() => import('./pages/Documentation.jsx'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal.jsx'));

// Lazy load pages - Pricing & Plans
const Pricing = React.lazy(() => import('./pages/Pricing.jsx'));
const PricingPage = React.lazy(() => import('./pages/PricingPage.jsx'));
const PricingGuidePage = React.lazy(() => import('./pages/PricingGuidePage.jsx'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage.jsx'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage.jsx'));

// Lazy load pages - Specialized Services
const NextGenServicesShowcase2025 = React.lazy(() => import('./pages/NextGenServicesShowcase2025.jsx'));
const CuttingEdgeInnovativeServices2025 = React.lazy(() => import('./pages/CuttingEdgeInnovativeServices2025.jsx'));
const EnhancedInnovativeServices = React.lazy(() => import('./pages/EnhancedInnovativeServices.jsx'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage.jsx'));
const EnhancedServicesShowcase = React.lazy(() => import('./pages/EnhancedServicesShowcase.jsx'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices.jsx'));
const ComprehensiveContact = React.lazy(() => import('./pages/ComprehensiveContact.jsx'));
const AdvancedServicesPage = React.lazy(() => import('./pages/AdvancedServicesPage.jsx'));
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview.jsx'));
const NewServicesOverview = React.lazy(() => import('./pages/NewServicesOverview.jsx'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage.jsx'));
const MicroSAASShowcase = React.lazy(() => import('./pages/MicroSAASShowcase.jsx'));
const ContentGenerator = React.lazy(() => import('./pages/ContentGenerator.jsx'));
const ServiceOnboarding = React.lazy(() => import('./pages/ServiceOnboarding.jsx'));
const TokenIntegrations = React.lazy(() => import('./pages/TokenIntegrations.jsx'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks.jsx'));
const GetStarted = React.lazy(() => import('./pages/GetStarted.jsx'));

// Lazy load pages - Admin & Management
const ProductsAdminPage = React.lazy(() => import('./pages/ProductsAdminPage.jsx'));
const MoreProductsPage = React.lazy(() => import('./pages/MoreProductsPage.jsx'));
const Featured = React.lazy(() => import('./pages/Featured.jsx'));

// Lazy load pages - Other
const VideoCall = React.lazy(() => import('./pages/VideoCall.jsx'));
const Index = React.lazy(() => import('./pages/Index.jsx'));
const Developer = React.lazy(() => import('./pages/Developer.jsx'));

// Components
const Sitemap = React.lazy(() => import('./components/Sitemap.jsx'));

const LoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-cyan text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
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
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-password" element={<UpdatePassword />} />
              
              {/* Services Routes */}
              <Route path="/services/ai-business-solutions" element={<AIBusinessSolutions />} />
              <Route path="/services/cybersecurity-suite" element={<CybersecuritySuite />} />
              <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketingServicesPage />} />
              <Route path="/services/financial-solutions" element={<FinancialSolutions />} />
              <Route path="/services/manufacturing-solutions" element={<ManufacturingSolutions />} />
              <Route path="/services/iot-services" element={<IoTServicesPage />} />
              <Route path="/services/blockchain-services" element={<BlockchainServicesPage />} />
              <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
              <Route path="/services/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
              <Route path="/services/green-it" element={<GreenIT />} />
              <Route path="/services/enterprise-it" element={<EnterpriseIT />} />
              <Route path="/services/micro-saas" element={<MicroSaasServices />} />
              <Route path="/services/onsite-it" element={<ITOnsiteServicesPage />} />
              <Route path="/services/dispute-management" element={<DisputeManagement />} />
              
              {/* Products Routes */}
              <Route path="/products" element={<ProductPage />} />
              <Route path="/products/new" element={<NewProductsPage />} />
              <Route path="/equipment" element={<EquipmentPage />} />
              <Route path="/portfolio-builder" element={<PortfolioBuilder />} />
              <Route path="/zion-hire-ai" element={<ZionHireAI />} />
              <Route path="/ai-research-assistant" element={<AIResearchAssistant />} />
              <Route path="/ai-content-generator" element={<AIContentGenerator />} />
              <Route path="/ai-code-review" element={<AICodeReview />} />
              <Route path="/cloud-cost-optimizer" element={<CloudCostOptimizer />} />
              <Route path="/service-description-generator" element={<ServiceDescriptionGenerator />} />
              
              {/* Business & Enterprise Routes */}
              <Route path="/business-solutions" element={<BusinessSolutionsPage />} />
              <Route path="/enterprise" element={<EnterpriseAdmin />} />
              <Route path="/enterprise/billing" element={<EnterpriseBilling />} />
              <Route path="/enterprise/demo" element={<EnterpriseDemo />} />
              <Route path="/enterprise/plans" element={<EnterprisePlans />} />
              <Route path="/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/autonomous-business-platform" element={<AutonomousBusinessOperationsPlatform />} />
              
              {/* Community & Support Routes */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/events" element={<Events />} />
              <Route path="/news" element={<News />} />
              <Route path="/blog" element={<BlogPost />} />
              <Route path="/forum/post/:id" element={<ForumPostPage />} />
              <Route path="/forum/category/:category" element={<ForumCategoryPage />} />
              <Route path="/forum/create" element={<CreatePostPage />} />
              <Route path="/forum/edit/:id" element={<EditPostPage />} />
              
              {/* User & Account Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              
              {/* Marketplace & E-commerce Routes */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:id" element={<OrderDetail />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/search" element={<SearchResultsPage />} />
              <Route path="/category/:category" element={<CategoryDetail />} />
              <Route path="/listing/:id" element={<ListingDetail />} />
              
              {/* Jobs & Talent Routes */}
              <Route path="/jobs/post" element={<PostJob />} />
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/hiring-tracker" element={<HiringTracker />} />
              <Route path="/talent-onboarding" element={<TalentOnboarding />} />
              <Route path="/community/profile/:id" element={<CommunityProfilePage />} />
              
              {/* Legal & Documentation Routes */}
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/developer" element={<DeveloperPortal />} />
              
              {/* Pricing & Plans Routes */}
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/pricing-guide" element={<PricingGuidePage />} />
              <Route path="/services-pricing" element={<ServicesPricingPage />} />
              <Route path="/services-comparison" element={<ServicesComparisonPage />} />
              
              {/* Specialized Services Routes */}
              <Route path="/next-gen-services-2025" element={<NextGenServicesShowcase2025 />} />
              <Route path="/cutting-edge-services-2025" element={<CuttingEdgeInnovativeServices2025 />} />
              <Route path="/enhanced-innovative-services" element={<EnhancedInnovativeServices />} />
              <Route path="/enhanced-services" element={<EnhancedServicesPage />} />
              <Route path="/enhanced-services-showcase" element={<EnhancedServicesShowcase />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
              <Route path="/comprehensive-contact" element={<ComprehensiveContact />} />
              <Route path="/advanced-services" element={<AdvancedServicesPage />} />
              <Route path="/services-overview" element={<ServicesOverview />} />
              <Route path="/new-services-overview" element={<NewServicesOverview />} />
              <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
              <Route path="/micro-saas-showcase" element={<MicroSAASShowcase />} />
              <Route path="/content-generator" element={<ContentGenerator />} />
              <Route path="/service-onboarding" element={<ServiceOnboarding />} />
              <Route path="/token-integrations" element={<TokenIntegrations />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/get-started" element={<GetStarted />} />
              
              {/* Admin & Management Routes */}
              <Route path="/admin/products" element={<ProductsAdminPage />} />
              <Route path="/more-products" element={<MoreProductsPage />} />
              <Route path="/featured" element={<Featured />} />
              
              {/* Other Routes */}
              <Route path="/video-call" element={<VideoCall />} />
              <Route path="/index" element={<Index />} />
              <Route path="/dev" element={<Developer />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-zion-cyan mb-4">404</h1>
                  <p className="text-xl text-zion-slate-light mb-8">Page not found</p>
                  <a href="/" className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">
                    Go Home
                  </a>
                </div>
              </div>} />
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