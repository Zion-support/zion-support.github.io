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
import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
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
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
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
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  return (
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
  );
};

export default App;