import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const Signup = React.lazy(() => import('./pages/Signup.jsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.jsx'));
const Blog = React.lazy(() => import('./pages/Blog.jsx'));
const Partners = React.lazy(() => import('./pages/Partners.jsx'));
const Careers = React.lazy(() => import('./pages/Careers.jsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.jsx'));
const Terms = React.lazy(() => import('./pages/Terms.jsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.jsx'));
const Accessibility = React.lazy(() => import('./pages/Accessibility.jsx'));
const Security = React.lazy(() => import('./pages/Security.jsx'));
const Status = React.lazy(() => import('./pages/Status.jsx'));
const Help = React.lazy(() => import('./pages/Help.jsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.jsx'));
const Marketplace = React.lazy(() => import('./pages/Marketplace.jsx'));
const Talent = React.lazy(() => import('./pages/Talent.jsx'));
const Equipment = React.lazy(() => import('./pages/Equipment.jsx'));
const Categories = React.lazy(() => import('./pages/Categories.jsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.jsx'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServicesPage.jsx'));
const Dashboard = React.lazy(() => import('./pages/Dashboard.jsx'));
const Profile = React.lazy(() => import('./pages/Profile.jsx'));
const AccountSettings = React.lazy(() => import('./pages/AccountSettings.jsx'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword.jsx'));
const Pricing = React.lazy(() => import('./pages/Pricing.jsx'));
const Support = React.lazy(() => import('./pages/Support.jsx'));
const Events = React.lazy(() => import('./pages/Events.jsx'));
const QuantumTechnology = React.lazy(() => import('./pages/QuantumTechnology.jsx'));
const CybersecurityServices = React.lazy(() => import('./pages/CybersecurityServicesPage.jsx'));
const AIBusinessSolutions = React.lazy(() => import('./pages/AIBusinessSolutions.jsx'));
const CloudInfrastructure = React.lazy(() => import('./pages/CloudInfrastructure.jsx'));
const BlockchainServices = React.lazy(() => import('./pages/BlockchainServicesPage.jsx'));
const IoTServices = React.lazy(() => import('./pages/IoTServicesPage.jsx'));
const DigitalMarketingServices = React.lazy(() => import('./pages/DigitalMarketingServicesPage.jsx'));
const ManufacturingSolutions = React.lazy(() => import('./pages/ManufacturingSolutions.jsx'));
const DigitalTransformation = React.lazy(() => import('./pages/DigitalTransformation.jsx'));
const Enterprise = React.lazy(() => import('./pages/Enterprise.jsx'));
const EnterpriseIT = React.lazy(() => import('./pages/EnterpriseIT.jsx'));
const EnterpriseDemo = React.lazy(() => import('./pages/EnterpriseDemo.jsx'));
const EnterpriseBilling = React.lazy(() => import('./pages/EnterpriseBilling.jsx'));
const EnterpriseAdmin = React.lazy(() => import('./pages/EnterpriseAdmin.jsx'));
const EnterprisePlans = React.lazy(() => import('./pages/EnterprisePlans.jsx'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal.jsx'));
const Documentation = React.lazy(() => import('./pages/Documentation.jsx'));
const API = React.lazy(() => import('./pages/API.jsx'));
const Community = React.lazy(() => import('./pages/Community.jsx'));
const ForumCategoryPage = React.lazy(() => import('./pages/ForumCategoryPage.jsx'));
const ForumPostPage = React.lazy(() => import('./pages/ForumPostPage.jsx'));
const CreatePostPage = React.lazy(() => import('./pages/CreatePostPage.jsx'));
const EditPostPage = React.lazy(() => import('./pages/EditPostPage.jsx'));
const SearchResultsPage = React.lazy(() => import('./pages/SearchResultsPage.jsx'));
const SearchPage = React.lazy(() => import('./pages/SearchPage.jsx'));
const ProductPage = React.lazy(() => import('./pages/ProductPage.jsx'));
const ProductsAdminPage = React.lazy(() => import('./pages/ProductsAdminPage.jsx'));
const NewProductsPage = React.lazy(() => import('./pages/NewProductsPage.jsx'));
const MoreProductsPage = React.lazy(() => import('./pages/MoreProductsPage.jsx'));
const ListingDetail = React.lazy(() => import('./pages/ListingDetail.jsx'));
const CategoryDetail = React.lazy(() => import('./pages/CategoryDetail.jsx'));
const Cart = React.lazy(() => import('./pages/Cart.jsx'));
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage.jsx'));
const Orders = React.lazy(() => import('./pages/Orders.jsx'));
const OrderDetail = React.lazy(() => import('./pages/OrderDetail.jsx'));
const OrderConfirmation = React.lazy(() => import('./pages/OrderConfirmation.jsx'));
const PostJob = React.lazy(() => import('./pages/PostJob.jsx'));
const JobDetails = React.lazy(() => import('./pages/JobDetails.jsx'));
const Interviews = React.lazy(() => import('./pages/Interviews.jsx'));
const Projects = React.lazy(() => import('./pages/Projects.jsx'));
const CompanyWorkspace = React.lazy(() => import('./pages/CompanyWorkspace.jsx'));
const ClientDashboard = React.lazy(() => import('./pages/ClientDashboard.jsx'));
const ProfileDetail = React.lazy(() => import('./pages/ProfileDetail.jsx'));
const PortfolioBuilder = React.lazy(() => import('./pages/PortfolioBuilder.jsx'));
const DisputeManagement = React.lazy(() => import('./pages/DisputeManagement.jsx'));
const SOC2ComplianceAutomation = React.lazy(() => import('./pages/soc2-compliance-automation.jsx'));
const FinancialSolutions = React.lazy(() => import('./pages/FinancialSolutions.jsx'));
const FiveGNetworkOptimization = React.lazy(() => import('./pages/FiveGNetworkOptimization.jsx'));
const EmergingTech = React.lazy(() => import('./pages/EmergingTech.jsx'));
const BusinessSolutionsPage = React.lazy(() => import('./pages/BusinessSolutionsPage.jsx'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices.jsx'));
const AdvancedServicesPage = React.lazy(() => import('./pages/AdvancedServicesPage.jsx'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage.jsx'));
const EnhancedInnovativeServices = React.lazy(() => import('./pages/EnhancedInnovativeServices.jsx'));
const NewServicesOverview = React.lazy(() => import('./pages/NewServicesOverview.jsx'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage.jsx'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices.jsx'));
const MicroSAASShowcase = React.lazy(() => import('./pages/MicroSAASShowcase.jsx'));
const NextGenServicesShowcase2025 = React.lazy(() => import('./pages/NextGenServicesShowcase2025.jsx'));
const AutonomousBusinessOperationsPlatform = React.lazy(() => import('./pages/AutonomousBusinessOperationsPlatform.jsx'));
const CloudCostOptimizer = React.lazy(() => import('./pages/CloudCostOptimizer.jsx'));
const CloudMigrationServices = React.lazy(() => import('./pages/CloudMigrationServices.jsx'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage.jsx'));
const AICodeReview = React.lazy(() => import('./pages/AICodeReview.jsx'));
const AIContentGenerator = React.lazy(() => import('./pages/AIContentGenerator.jsx'));
const ContentGenerator = React.lazy(() => import('./pages/ContentGenerator.jsx'));
const AIResearchAssistant = React.lazy(() => import('./pages/AIResearchAssistant.jsx'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI.jsx'));
const FiveGEnterpriseSolutions = React.lazy(() => import('./pages/5GEnterpriseSolutions.jsx'));
const PricingGuide = React.lazy(() => import('./pages/PricingGuide.jsx'));
const PricingGuidePage = React.lazy(() => import('./pages/PricingGuidePage.jsx'));
const PricingPage = React.lazy(() => import('./pages/PricingPage.jsx'));
const CommunityProfilePage = React.lazy(() => import('./pages/CommunityProfilePage.jsx'));
const VideoCall = React.lazy(() => import('./pages/VideoCall.jsx'));
const GDPR = React.lazy(() => import('./pages/GDPR.jsx'));
const Featured = React.lazy(() => import('./pages/Featured.jsx'));
const ErrorRoutes = React.lazy(() => import('./pages/ErrorRoutes.jsx'));

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
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/support" element={<Support />} />
              <Route path="/events" element={<Events />} />
              <Route path="/help" element={<Help />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Legal & Policy Routes */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/gdpr" element={<GDPR />} />
              
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