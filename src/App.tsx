import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';

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

// Additional pages that were missing
const Careers = lazy(() => import('./pages/Careers'));
const Solutions = lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = lazy(() => import('./pages/ResearchDevelopment'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const News = lazy(() => import('./pages/News'));
const Events = lazy(() => import('./pages/Events'));
const Blog = lazy(() => import('./pages/Blog'));
const Documentation = lazy(() => import('./pages/Documentation'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const Webinars = lazy(() => import('./pages/Webinars'));
const Training = lazy(() => import('./pages/Training'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const Support = lazy(() => import('./pages/Support'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Partners = lazy(() => import('./pages/Partners'));

// Service-specific pages
const AIServices = lazy(() => import('./pages/services/AIServices'));
const CloudServices = lazy(() => import('./pages/services/CloudServices'));
const CybersecurityServices = lazy(() => import('./pages/services/CybersecurityServices'));
const InfrastructureServices = lazy(() => import('./pages/services/InfrastructureServices'));
const TransformationServices = lazy(() => import('./pages/services/TransformationServices'));
const ConsultingServices = lazy(() => import('./pages/services/ConsultingServices'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

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
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-futuristic">
            <SEO />
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
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  <Route path="/green-it" element={<GreenIT />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/help-center" element={<HelpCenter />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/research-development" element={<ResearchDevelopment />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/request-quote" element={<RequestQuote />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  
                  {/* Service Routes - only for existing pages */}
                  <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                  <Route path="/services/digital-twin" element={<DigitalTwin />} />
                  <Route path="/services/data-analytics" element={<DataAnalytics />} />
                  <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                  <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
            <ChatAssistant />
            <PerformanceMonitor />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;