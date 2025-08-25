<<<<<<< HEAD
<<<<<<< HEAD
import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOps'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const QuantumTechnology = lazy(() => import('./pages/services/QuantumTechnology'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useScrollToTop();

  return (
    <EnhancedErrorBoundary>
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <Header />
              <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
              
              <main className="pt-20">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Main Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/cloud-devops" element={<CloudDevOps />} />
                    
                    {/* Service Routes */}
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                    
                    {/* Company Routes */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
            </div>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
=======
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { ScrollToTop } from "./components/ui/scroll-to-top";
import { ErrorBoundary } from "./components/ui/error-boundary";
import { FullScreenLoading } from "./components/ui/loading-fallback";
import {
  AuthRoutes,
  DashboardRoutes,
  MarketplaceRoutes,
  TalentRoutes,
  AdminRoutes,
  MobileAppRoutes,
  ContentRoutes,
  ErrorRoutes,
  EnterpriseRoutes,
  CommunityRoutes,
  DeveloperRoutes
} from './routes';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
<<<<<<< HEAD
<<<<<<< HEAD
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const DigitalMarketingServicesPage = React.lazy(() => import('./pages/DigitalMarketingServicesPage'));
const BusinessSolutionsPage = React.lazy(() => import('./pages/BusinessSolutionsPage'));
const ServicesOverviewPage = React.lazy(() => import('./pages/ServicesOverviewPage'));
=======
const ServicesHubPage = React.lazy(() => import('./pages/ServicesHubPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const DigitalTransformationPage = React.lazy(() => import('./pages/DigitalTransformationPage'));
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4df9
=======
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));
const ServicePricingPage = React.lazy(() => import('./pages/ServicePricingPage'));
const EnterpriseSolutionsPage = React.lazy(() => import('./pages/EnterpriseSolutionsPage'));
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const AboutPage = React.lazy(() => import('./pages/About'));
const CareersPage = React.lazy(() => import('./pages/Careers'));
const SitemapPage = React.lazy(() => import('./pages/Sitemap'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const GreenITPage = React.lazy(() => import('./pages/GreenIT'));
const MarketplacePage = React.lazy(() => import('./pages/Marketplace'));
const FAQPage = React.lazy(() => import('./pages/FAQ'));
const PressPage = React.lazy(() => import('./pages/Press'));
const InvestorsPage = React.lazy(() => import('./pages/Investors'));
const HelpPage = React.lazy(() => import('./pages/Help'));
const CookiesPage = React.lazy(() => import('./pages/Cookies'));
const AccessibilityPage = React.lazy(() => import('./pages/Accessibility'));
=======
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
>>>>>>> main
=======
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const BlockchainServicesPage = React.lazy(() => import('./pages/BlockchainServicesPage'));
const IoTServicesPage = React.lazy(() => import('./pages/IoTServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const ServicesOverviewPage = React.lazy(() => import('./pages/ServicesOverviewPage'));
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
=======
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
>>>>>>> origin/cursor/expand-services-and-deploy-updates-302a
=======
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
=======
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
=======
const FAQPage = React.lazy(() => import('./pages/FAQ'));
const EnterprisePage = React.lazy(() => import('./pages/Enterprise'));
>>>>>>> origin/cursor/website-audit-and-enhancement-1f4f
=======
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
const FAQPage = React.lazy(() => import('./pages/FAQ'));
>>>>>>> origin/cursor/website-audit-and-enhancement-5083
=======
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const CreateProfile = React.lazy(() => import('./pages/CreateProfile'));
>>>>>>> origin/cursor/website-audit-and-enhancement-6664
=======
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServices'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricing'));
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
=======
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
const About = React.lazy(() => import('./pages/About'));
const Mission = React.lazy(() => import('./pages/Mission'));
const Team = React.lazy(() => import('./pages/Team'));
const Careers = React.lazy(() => import('./pages/Careers'));
const News = React.lazy(() => import('./pages/News'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
=======
const About = React.lazy(() => import('./pages/About'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const ApiDocs = React.lazy(() => import('./pages/ApiDocs'));
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27
=======
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage'));
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
=======
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
=======
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const AIServices = React.lazy(() => import('./pages/AIServices'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a2e5
=======
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
<<<<<<< HEAD
  { path: '/services', element: <ServicesPage /> },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
=======
  { path: '/services-overview', element: <ServicesOverviewPage /> },
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
=======
  { path: '/services', element: <ServicesOverviewPage /> },
  { path: '/legacy-services', element: <ServicesPage /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/it-services', element: <ITServicesPage /> },
  { path: '/digital-marketing', element: <DigitalMarketingServicesPage /> },
  { path: '/business-solutions', element: <BusinessSolutionsPage /> },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
=======
  { path: '/services-hub', element: <ServicesHubPage /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/it-services', element: <ITServicesPage /> },
  { path: '/digital-transformation', element: <DigitalTransformationPage /> },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4df9
=======
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
=======
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/services/:id', element: <ServiceDetailPage /> },
  { path: '/pricing', element: <PricingPage /> },
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
=======
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
  { path: '/expanded-services', element: <ExpandedServicesPage /> },
  { path: '/service/:serviceId', element: <ServiceDetailPage /> },
  { path: '/pricing', element: <ServicePricingPage /> },
  { path: '/enterprise-solutions', element: <EnterpriseSolutionsPage /> },
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
=======
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/services-pricing', element: <ServicesPricingPage /> },
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
=======
  { path: '/micro-saas-services', element: <MicroSaasServices /> },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
  { path: '/services-pricing', element: <ServicesPricingPage /> },
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
=======
  { path: '/micro-saas-services', element: <MicroSaasServices /> },
  { path: '/ai-services', element: <AIServices /> },
  { path: '/it-services', element: <ITServices /> },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a2e5
=======
  { path: '/expanded-services', element: <ExpandedServicesPage /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/cybersecurity', element: <CybersecurityServicesPage /> },
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e79
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/blockchain-services', element: <BlockchainServicesPage /> },
  { path: '/iot-services', element: <IoTServicesPage /> },
  { path: '/cybersecurity-services', element: <CybersecurityServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/equipment/:id', element: <EquipmentDetail /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  { path: '/enhanced-services', element: <EnhancedServicesPage /> },
  { path: '/pricing', element: <PricingPage /> },
=======
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
  { path: '/faq', element: <FAQPage /> },
>>>>>>> origin/cursor/website-audit-and-enhancement-5083
=======
  { path: '/enhanced-services', element: <EnhancedServicesPage /> },
  { path: '/services-comparison', element: <ServicesComparisonPage /> },
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  { path: '/about', element: <AboutPage /> },
  { path: '/careers', element: <CareersPage /> },
  { path: '/sitemap', element: <SitemapPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/green-it', element: <GreenITPage /> },
  { path: '/marketplace', element: <MarketplacePage /> },
  { path: '/faq', element: <FAQPage /> },
  { path: '/press', element: <PressPage /> },
  { path: '/investors', element: <InvestorsPage /> },
  { path: '/help', element: <HelpPage /> },
  { path: '/cookies', element: <CookiesPage /> },
  { path: '/accessibility', element: <AccessibilityPage /> },
  { path: '/ai-matcher', element: <AIMatcherPage /> },
=======
import { Header } from './components/Header';

// Import existing pages
const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const EnhancedServicesShowcase = React.lazy(() => import('./pages/EnhancedServicesShowcase'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/enhanced-services', element: <EnhancedServicesPage /> },
  { path: '/expanded-services', element: <ExpandedServicesPage /> },
  { path: '/services-pricing', element: <ServicesPricingPage /> },
  { path: '/cybersecurity-services', element: <CybersecurityServicesPage /> },
  { path: '/micro-saas-services', element: <MicroSaasServices /> },
  { path: '/enhanced-services-showcase', element: <EnhancedServicesShowcase /> },
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
  { path: '/faq', element: <FAQPage /> },
  { path: '/enterprise', element: <EnterprisePage /> },
>>>>>>> origin/cursor/website-audit-and-enhancement-1f4f
=======
  { path: '/faq', element: <FAQ /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/create-profile', element: <CreateProfile /> },
>>>>>>> origin/cursor/website-audit-and-enhancement-6664
=======
  { path: '/about', element: <About /> },
  { path: '/mission', element: <Mission /> },
  { path: '/team', element: <Team /> },
  { path: '/careers', element: <Careers /> },
  { path: '/news', element: <News /> },
  { path: '/case-studies', element: <CaseStudies /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  { path: '/cookies', element: <Cookies /> },
  { path: '/accessibility', element: <Accessibility /> },
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
=======
  { path: '/about', element: <About /> },
  { path: '/careers', element: <Careers /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/green-it', element: <GreenIT /> },
  { path: '/help', element: <HelpCenter /> },
  { path: '/api-docs', element: <ApiDocs /> },
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            {baseRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />
            <Route path="/talent/*" element={<TalentRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/mobile/*" element={<MobileAppRoutes />} />
            <Route path="/content/*" element={<ContentRoutes />} />
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />
            <Route path="/community/*" element={<CommunityRoutes />} />
            <Route path="/developers/*" element={<DeveloperRoutes />} />
            <Route path="*" element={<ErrorRoutes />} />
          </Routes>
        </Suspense>
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
    <ErrorBoundary>
      <WhitelabelProvider>
        <ThemeProvider defaultTheme="dark">
          <Suspense fallback={<FullScreenLoading />}>
            <Routes>
              {baseRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="/auth/*" element={<AuthRoutes />} />
              <Route path="/dashboard/*" element={<DashboardRoutes />} />
              <Route path="/marketplace/*" element={<MarketplaceRoutes />} />
              <Route path="/talent/*" element={<TalentRoutes />} />
              <Route path="/admin/*" element={<AdminRoutes />} />
              <Route path="/mobile/*" element={<MobileAppRoutes />} />
              <Route path="/content/*" element={<ContentRoutes />} />
              <Route path="/enterprise/*" element={<EnterpriseRoutes />} />
              <Route path="/community/*" element={<CommunityRoutes />} />
              <Route path="/developers/*" element={<DeveloperRoutes />} />
              <Route path="*" element={<ErrorRoutes />} />
            </Routes>
          </Suspense>
          <Toaster />
          <SonnerToaster position="top-right" />
          <ScrollToTop />
        </ThemeProvider>
      </WhitelabelProvider>
    </ErrorBoundary>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f4cb
  );
};
=======
    <div className="min-h-screen bg-background">
      <Header />
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <Routes>
          {baseRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======

const Home = React.lazy(() => import('./pages/Home'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Suspense fallback={<div className="min-h-screen bg-zion-blue-dark flex items-center justify-center text-white">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b

export default App;