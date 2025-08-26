import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import Footer from "./components/Footer";
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

// Main Pages
const Home = React.lazy(() => import('./pages/Home'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
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

// Company Pages
const AboutPage = React.lazy(() => import('./pages/About'));
const TeamPage = React.lazy(() => import('./pages/Team'));
const CareersPage = React.lazy(() => import('./pages/Careers'));
const NewsPage = React.lazy(() => import('./pages/News'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudies'));

// Service Pages
const AISolutionsPage = React.lazy(() => import('./pages/services/AISolutions'));
const QuantumComputingPage = React.lazy(() => import('./pages/services/QuantumComputing'));
const CybersecurityPage = React.lazy(() => import('./pages/services/Cybersecurity'));
const CloudDevOpsPage = React.lazy(() => import('./pages/services/CloudDevOps'));
const BlockchainWeb3Page = React.lazy(() => import('./pages/services/BlockchainWeb3'));
const EnterpriseITPage = React.lazy(() => import('./pages/services/EnterpriseIT'));
const GreenITPage = React.lazy(() => import('./pages/services/GreenIT'));
const SpaceTechPage = React.lazy(() => import('./pages/services/SpaceTech'));
const MicroSAASPage = React.lazy(() => import('./pages/services/MicroSAAS'));

// Solution Pages
const AIAutonomousBusinessPage = React.lazy(() => import('./pages/solutions/AIAutonomousBusiness'));
const AIAutonomousResearchPage = React.lazy(() => import('./pages/solutions/AIAutonomousResearch'));
const AIAutonomousEcosystemPage = React.lazy(() => import('./pages/solutions/AIAutonomousEcosystem'));
const QuantumNeuralNetworkPage = React.lazy(() => import('./pages/solutions/QuantumNeuralNetwork'));
const QuantumEdgeComputingPage = React.lazy(() => import('./pages/solutions/QuantumEdgeComputing'));
const AIPoweredSecurityPage = React.lazy(() => import('./pages/solutions/AIPoweredSecurity'));
const AIContentGenerationPage = React.lazy(() => import('./pages/solutions/AIContentGeneration'));
const AIBusinessIntelligencePage = React.lazy(() => import('./pages/solutions/AIBusinessIntelligence'));

// Resource Pages
const WhitePapersPage = React.lazy(() => import('./pages/WhitePapers'));
const WebinarsPage = React.lazy(() => import('./pages/Webinars'));
const EventsPage = React.lazy(() => import('./pages/Events'));
const ResearchDevelopmentPage = React.lazy(() => import('./pages/ResearchDevelopment'));
const TutorialsPage = React.lazy(() => import('./pages/Tutorials'));
const DocumentationPage = React.lazy(() => import('./pages/Documentation'));

// Support Pages
const HelpCenterPage = React.lazy(() => import('./pages/HelpCenter'));
const SupportPage = React.lazy(() => import('./pages/Support'));
const TrainingPage = React.lazy(() => import('./pages/Training'));
const ConsultingPage = React.lazy(() => import('./pages/Consulting'));
const FAQPage = React.lazy(() => import('./pages/FAQ'));

// Legal Pages
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const CookiesPage = React.lazy(() => import('./pages/Cookies'));
const SitemapPage = React.lazy(() => import('./pages/Sitemap'));
const AccessibilityPage = React.lazy(() => import('./pages/Accessibility'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
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
  
  // Company Routes
  { path: '/about', element: <AboutPage /> },
  { path: '/team', element: <TeamPage /> },
  { path: '/careers', element: <CareersPage /> },
  { path: '/news', element: <NewsPage /> },
  { path: '/case-studies', element: <CaseStudiesPage /> },
  
  // Service Routes
  { path: '/services/ai-solutions', element: <AISolutionsPage /> },
  { path: '/services/quantum-computing', element: <QuantumComputingPage /> },
  { path: '/services/cybersecurity', element: <CybersecurityPage /> },
  { path: '/services/cloud-devops', element: <CloudDevOpsPage /> },
  { path: '/services/blockchain-web3', element: <BlockchainWeb3Page /> },
  { path: '/services/enterprise-it', element: <EnterpriseITPage /> },
  { path: '/services/green-it', element: <GreenITPage /> },
  { path: '/services/space-tech', element: <SpaceTechPage /> },
  { path: '/services/micro-saas', element: <MicroSAASPage /> },
  
  // Solution Routes
  { path: '/solutions/ai-autonomous-business', element: <AIAutonomousBusinessPage /> },
  { path: '/solutions/ai-autonomous-research', element: <AIAutonomousResearchPage /> },
  { path: '/solutions/ai-autonomous-ecosystem', element: <AIAutonomousEcosystemPage /> },
  { path: '/solutions/quantum-neural-network', element: <QuantumNeuralNetworkPage /> },
  { path: '/solutions/quantum-edge-computing', element: <QuantumEdgeComputingPage /> },
  { path: '/solutions/ai-powered-security', element: <AIPoweredSecurityPage /> },
  { path: '/solutions/ai-content-generation', element: <AIContentGenerationPage /> },
  { path: '/solutions/ai-business-intelligence', element: <AIBusinessIntelligencePage /> },
  
  // Resource Routes
  { path: '/white-papers', element: <WhitePapersPage /> },
  { path: '/webinars', element: <WebinarsPage /> },
  { path: '/events', element: <EventsPage /> },
  { path: '/research-development', element: <ResearchDevelopmentPage /> },
  { path: '/tutorials', element: <TutorialsPage /> },
  { path: '/documentation', element: <DocumentationPage /> },
  { path: '/docs', element: <DocumentationPage /> },
  
  // Support Routes
  { path: '/help-center', element: <HelpCenterPage /> },
  { path: '/support', element: <SupportPage /> },
  { path: '/training', element: <TrainingPage /> },
  { path: '/consulting', element: <ConsultingPage /> },
  { path: '/faq', element: <FAQPage /> },
  
  // Legal Routes
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/cookies', element: <CookiesPage /> },
  { path: '/sitemap', element: <SitemapPage /> },
  { path: '/accessibility', element: <AccessibilityPage /> },
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
        <Footer />
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;