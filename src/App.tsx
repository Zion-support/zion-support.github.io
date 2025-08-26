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
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
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
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/careers', element: <Careers /> },
  { path: '/news', element: <News /> },
  { path: '/press', element: <Press /> },
  { path: '/case-studies', element: <CaseStudies /> },
  { path: '/white-papers', element: <WhitePapers /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  
  // Additional missing pages
  { path: '/partners', element: <Partners /> },
  { path: '/docs', element: <Documentation /> },
  { path: '/cookies', element: <Cookies /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/help', element: <HelpCenter /> },
  { path: '/training', element: <Training /> },
  { path: '/webinars', element: <Webinars /> },
  { path: '/events', element: <Events /> },
  { path: '/support', element: <Support /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/green-it', element: <GreenIT /> },
  { path: '/financial-solutions', element: <FinancialSolutions /> },
  { path: '/mobile', element: <Mobile /> },
  { path: '/quantum-technology', element: <QuantumTechnology /> },
  { path: '/space-tech', element: <SpaceTech /> },
  
  // New routes from incoming branch
  { path: '/services', element: <Services /> },
  { path: '/ai-solutions', element: <AISolutions /> },
  { path: '/services-showcase', element: <ServicesShowcase /> },
  { path: '/innovative-services-showcase', element: <InnovativeServicesShowcase /> },
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/emerging-tech', element: <EmergingTech /> },
  
  // New missing page routes
  { path: '/quantum-neural-network-platform', element: <QuantumNeuralNetworkPlatform /> },
  { path: '/autonomous-business-operations-platform', element: <AutonomousBusinessOperationsPlatform /> },
  { path: '/ai-powered-it-asset-management', element: <AIPoweredITAssetManagement /> },
  { path: '/soc2-compliance-automation', element: <SOC2ComplianceAutomation /> },
  { path: '/ai-autonomous-research-assistant', element: <AIAutonomousResearchAssistant /> },
  { path: '/5g-enterprise-solutions', element: <FiveGEnterpriseSolutions /> },
  
  // Service routes
  { path: '/services/ai', element: <AIServices /> },
  { path: '/services/cloud', element: <CloudServices /> },
  { path: '/services/cybersecurity', element: <CybersecurityServices /> },
  { path: '/services/infrastructure', element: <InfrastructureServices /> },
  { path: '/services/transformation', element: <DigitalTransformation /> },
  { path: '/services/consulting', element: <ConsultingServices /> },
  { path: '/services/quantum-ai', element: <QuantumAIServices /> },
  
  // Additional service routes
  { path: '/innovative-services-2025', element: <InnovativeServices2025 /> },
  { path: '/advanced-services-2025', element: <AdvancedServices2025 /> },
  { path: '/advanced-services-showcase-2025', element: <AdvancedServicesShowcase2025 /> },
  { path: '/comprehensive-pricing-2025', element: <ComprehensivePricing2025 /> },
  { path: '/comprehensive-services-showcase-2025', element: <ComprehensiveServicesShowcase2025 /> },
  { path: '/innovative-services-showcase-2025', element: <InnovativeServicesShowcase2025 /> },
  { path: '/services-showcase-2025', element: <InnovativeServicesShowcase2025 /> },
  
  // Ultimate Innovative Services 2026
  { path: '/ultimate-services-showcase-2026', element: <UltimateServicesShowcase2026 /> },
  { path: '/ultimate-services-2026', element: <UltimateServicesShowcase2026 /> },
  { path: '/comprehensive-pricing-2026', element: <ComprehensivePricing2026 /> },
  { path: '/pricing-2026', element: <ComprehensivePricing2026 /> },
  
  // Other routes
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/enhanced-services', element: <EnhancedServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
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
  );
};

export default App;