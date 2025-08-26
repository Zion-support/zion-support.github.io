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
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword.jsx'));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword.jsx'));
const Dashboard = React.lazy(() => import('./pages/Dashboard.jsx'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage.jsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.jsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.jsx'));
const Terms = React.lazy(() => import('./pages/Terms.jsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.jsx'));
const Careers = React.lazy(() => import('./pages/Careers.jsx'));
const Partners = React.lazy(() => import('./pages/Partners.jsx'));
const Blog = React.lazy(() => import('./pages/BlogPost.jsx'));
const Marketplace = React.lazy(() => import('./pages/ProductPage.jsx'));
const Talent = React.lazy(() => import('./pages/TalentOnboarding.jsx'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage.jsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.jsx'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServicesPage.jsx'));
const Help = React.lazy(() => import('./pages/Help.jsx'));
const Security = React.lazy(() => import('./pages/Security.jsx'));
const Status = React.lazy(() => import('./pages/Status.jsx'));
const Accessibility = React.lazy(() => import('./pages/Accessibility.jsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.jsx'));
const Enterprise = React.lazy(() => import('./pages/Enterprise.jsx'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal.jsx'));
const Pricing = React.lazy(() => import('./pages/Pricing.jsx'));
const Community = React.lazy(() => import('./pages/CommunityPage.jsx'));
const Events = React.lazy(() => import('./pages/Events.jsx'));
const Webinars = React.lazy(() => import('./pages/Webinars.jsx'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudy.jsx'));
const BlockchainServices = React.lazy(() => import('./pages/BlockchainServicesPage.jsx'));
const Cybersecurity = React.lazy(() => import('./pages/Cybersecurity.jsx'));
const CloudMigration = React.lazy(() => import('./pages/CloudMigrationServices.jsx'));
const AIBusinessSolutions = React.lazy(() => import('./pages/AIBusinessSolutions.jsx'));
const DigitalTransformation = React.lazy(() => import('./pages/DigitalTransformation.jsx'));
const QuantumTechnology = React.lazy(() => import('./pages/QuantumTechnology.jsx'));
const FiveGEnterpriseSolutions = React.lazy(() => import('./pages/5GEnterpriseSolutions.jsx'));
const MicroSAASServices = React.lazy(() => import('./pages/MicroSAASServicesPage.jsx'));
const FinancialSolutions = React.lazy(() => import('./pages/FinancialSolutions.jsx'));
const ManufacturingSolutions = React.lazy(() => import('./pages/ManufacturingSolutions.jsx'));
const Cart = React.lazy(() => import('./pages/Cart.jsx'));
const Orders = React.lazy(() => import('./pages/Orders.jsx'));
const OrderDetail = React.lazy(() => import('./pages/OrderDetail.jsx'));
const OrderConfirmation = React.lazy(() => import('./pages/OrderConfirmation.jsx'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote.jsx'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks.jsx'));
const Mission = React.lazy(() => import('./pages/Mission.jsx'));
const Onboarding = React.lazy(() => import('./pages/Onboarding.jsx'));
const ServiceOnboarding = React.lazy(() => import('./pages/ServiceOnboarding.jsx'));
const PostJob = React.lazy(() => import('./pages/PostJob.jsx'));
const JobDetails = React.lazy(() => import('./pages/JobDetails.jsx'));
const HiringTracker = React.lazy(() => import('./pages/HiringTracker.jsx'));
const PublishProduct = React.lazy(() => import('./pages/PublishProduct.jsx'));
const PortfolioBuilder = React.lazy(() => import('./pages/PortfolioBuilder.jsx'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails.jsx'));
const ProjectRoom = React.lazy(() => import('./pages/ProjectRoom.jsx'));
const VideoCall = React.lazy(() => import('./pages/VideoCall.jsx'));
const Notifications = React.lazy(() => import('./pages/Notifications.jsx'));
const CreatorDashboard = React.lazy(() => import('./pages/CreatorDashboard.jsx'));
const EnterprisePlans = React.lazy(() => import('./pages/EnterprisePlans.jsx'));
const EnterpriseAdmin = React.lazy(() => import('./pages/EnterpriseAdmin.jsx'));
const EnterpriseBilling = React.lazy(() => import('./pages/EnterpriseBilling.jsx'));
const EnterpriseDemo = React.lazy(() => import('./pages/EnterpriseDemo.jsx'));
const EnterpriseIT = React.lazy(() => import('./pages/EnterpriseIT.jsx'));
const AIAnalyticsDashboard = React.lazy(() => import('./pages/AIAnalyticsDashboard.jsx'));
const AdvancedServicesPage = React.lazy(() => import('./pages/AdvancedServicesPage.jsx'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices.jsx'));
const ComprehensiveServicesOverview = React.lazy(() => import('./pages/ComprehensiveServicesOverview.jsx'));
const ComprehensiveContact = React.lazy(() => import('./pages/ComprehensiveContact.jsx'));
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview.jsx'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage.jsx'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage.jsx'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage.jsx'));
const EnhancedServicesShowcase = React.lazy(() => import('./pages/EnhancedServicesShowcase.jsx'));
const NextGenInnovativeServices = React.lazy(() => import('./pages/NextGenInnovativeServices.jsx'));
const NextGenServicesShowcase2025 = React.lazy(() => import('./pages/NextGenServicesShowcase2025.jsx'));
const CuttingEdgeInnovativeServices2025 = React.lazy(() => import('./pages/CuttingEdgeInnovativeServices2025.jsx'));
const CuttingEdgeServicesShowcase = React.lazy(() => import('./pages/CuttingEdgeServicesShowcase.jsx'));
const CybersecuritySuite = React.lazy(() => import('./pages/CybersecuritySuite.jsx'));
const CloudCostOptimizer = React.lazy(() => import('./pages/CloudCostOptimizer.jsx'));
const ContentGenerator = React.lazy(() => import('./pages/ContentGenerator.jsx'));
const AIContentGenerator = React.lazy(() => import('./pages/AIContentGenerator.jsx'));
const ServiceDescriptionGenerator = React.lazy(() => import('./pages/ServiceDescriptionGenerator.jsx'));
const AutonomousBusinessOperationsPlatform = React.lazy(() => import('./pages/AutonomousBusinessOperationsPlatform.jsx'));
const TokenIntegrations = React.lazy(() => import('./pages/TokenIntegrations.jsx'));
const UpdatePassword = React.lazy(() => import('./pages/UpdatePassword.jsx'));
const ListingDetail = React.lazy(() => import('./pages/ListingDetail.jsx'));
const CategoryDetail = React.lazy(() => import('./pages/CategoryDetail.jsx'));
const ProductPage = React.lazy(() => import('./pages/ProductPage.jsx'));
const MoreProductsPage = React.lazy(() => import('./pages/MoreProductsPage.jsx'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail.jsx'));
const ForumCategoryPage = React.lazy(() => import('./pages/ForumCategoryPage.jsx'));
const ForumPostPage = React.lazy(() => import('./pages/ForumPostPage.jsx'));
const CreatePostPage = React.lazy(() => import('./pages/CreatePostPage.jsx'));
const EditPostPage = React.lazy(() => import('./pages/EditPostPage.jsx'));
const Featured = React.lazy(() => import('./pages/Featured.jsx'));
const Developer = React.lazy(() => import('./pages/Developer.jsx'));
const Documentation = React.lazy(() => import('./pages/Documentation.jsx'));
const EmergingTech = React.lazy(() => import('./pages/EmergingTech.jsx'));
const EnhancedHome = React.lazy(() => import('./pages/EnhancedHome.jsx'));
const EnhancedInnovativeServices = React.lazy(() => import('./pages/EnhancedInnovativeServices.jsx'));
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
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/update-password" element={<UpdatePassword />} />
              
              {/* Dashboard & Profile */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/creator-dashboard" element={<CreatorDashboard />} />
              <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboard />} />
              
              {/* Legal & Policy */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              
              {/* Company */}
              <Route path="/careers" element={<Careers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/onboarding" element={<Onboarding />} />
              
              {/* Services */}
              <Route path="/services-overview" element={<ServicesOverview />} />
              <Route path="/services-pricing" element={<ServicesPricingPage />} />
              <Route path="/services-comparison" element={<ServicesComparisonPage />} />
              <Route path="/enhanced-services" element={<EnhancedServicesPage />} />
              <Route path="/enhanced-services-showcase" element={<EnhancedServicesShowcase />} />
              <Route path="/next-gen-innovative-services" element={<NextGenInnovativeServices />} />
              <Route path="/next-gen-services-showcase-2025" element={<NextGenServicesShowcase2025 />} />
              <Route path="/cutting-edge-innovative-services-2025" element={<CuttingEdgeInnovativeServices2025 />} />
              <Route path="/cutting-edge-services-showcase" element={<CuttingEdgeServicesShowcase />} />
              <Route path="/advanced-services" element={<AdvancedServicesPage />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
              <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview />} />
              <Route path="/service-onboarding" element={<ServiceOnboarding />} />
              
              {/* Specialized Services */}
              <Route path="/blockchain-services" element={<BlockchainServices />} />
              <Route path="/cybersecurity" element={<Cybersecurity />} />
              <Route path="/cybersecurity-suite" element={<CybersecuritySuite />} />
              <Route path="/cloud-migration" element={<CloudMigration />} />
              <Route path="/cloud-cost-optimizer" element={<CloudCostOptimizer />} />
              <Route path="/ai-business-solutions" element={<AIBusinessSolutions />} />
              <Route path="/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/quantum-technology" element={<QuantumTechnology />} />
              <Route path="/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
              <Route path="/micro-saas-services" element={<MicroSAASServices />} />
              <Route path="/financial-solutions" element={<FinancialSolutions />} />
              <Route path="/manufacturing-solutions" element={<ManufacturingSolutions />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              
              {/* Content & AI Tools */}
              <Route path="/content-generator" element={<ContentGenerator />} />
              <Route path="/ai-content-generator" element={<AIContentGenerator />} />
              <Route path="/service-description-generator" element={<ServiceDescriptionGenerator />} />
              <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
              <Route path="/token-integrations" element={<TokenIntegrations />} />
              
              {/* Marketplace */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/more-products" element={<MoreProductsPage />} />
              <Route path="/listing/:id" element={<ListingDetail />} />
              <Route path="/category/:id" element={<CategoryDetail />} />
              <Route path="/publish-product" element={<PublishProduct />} />
              
              {/* Equipment */}
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/equipment/:id" element={<EquipmentDetail />} />
              
              {/* Talent & Jobs */}
              <Route path="/talent" element={<Talent />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/job/:id" element={<JobDetails />} />
              <Route path="/hiring-tracker" element={<HiringTracker />} />
              <Route path="/portfolio-builder" element={<PortfolioBuilder />} />
              
              {/* Projects & Collaboration */}
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/project-room/:id" element={<ProjectRoom />} />
              <Route path="/video-call" element={<VideoCall />} />
              
              {/* E-commerce */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/order/:id" element={<OrderDetail />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              
              {/* Enterprise */}
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/enterprise-plans" element={<EnterprisePlans />} />
              <Route path="/enterprise-admin" element={<EnterpriseAdmin />} />
              <Route path="/enterprise-billing" element={<EnterpriseBilling />} />
              <Route path="/enterprise-demo" element={<EnterpriseDemo />} />
              <Route path="/enterprise-it" element={<EnterpriseIT />} />
              
              {/* Developer & API */}
              <Route path="/developer" element={<Developer />} />
              <Route path="/developer-portal" element={<DeveloperPortal />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/api" element={<DeveloperPortal />} />
              
              {/* Community */}
              <Route path="/community" element={<Community />} />
              <Route path="/events" element={<Events />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-study/:id" element={<CaseStudy />} />
              
              {/* Forum */}
              <Route path="/forum/:category" element={<ForumCategoryPage />} />
              <Route path="/forum/post/:id" element={<ForumPostPage />} />
              <Route path="/create-post" element={<CreatePostPage />} />
              <Route path="/edit-post/:id" element={<EditPostPage />} />
              
              {/* Content */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Blog />} />
              <Route path="/featured" element={<Featured />} />
              <Route path="/emerging-tech" element={<EmergingTech />} />
              <Route path="/enhanced-home" element={<EnhancedHome />} />
              <Route path="/enhanced-innovative-services" element={<EnhancedInnovativeServices />} />
              
              {/* Pricing */}
              <Route path="/pricing" element={<Pricing />} />
              
              {/* Notifications */}
              <Route path="/notifications" element={<Notifications />} />
              
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