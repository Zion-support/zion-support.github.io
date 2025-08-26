import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages - only import pages that actually exist
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
const Team = React.lazy(() => import('./pages/Team'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Events = React.lazy(() => import('./pages/Events'));
const News = React.lazy(() => import('./pages/News'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const Mission = React.lazy(() => import('./pages/Mission'));
const Enterprise = React.lazy(() => import('./pages/Enterprise'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Profile = React.lazy(() => import('./pages/Profile'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Categories = React.lazy(() => import('./pages/Categories'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const IoTServicesPage = React.lazy(() => import('./pages/IoTServicesPage'));
const DigitalTransformation = React.lazy(() => import('./pages/DigitalTransformation'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const InnovativeServices2025 = React.lazy(() => import('./pages/InnovativeServices2025'));
const InnovativeServicesShowcase = React.lazy(() => import('./pages/InnovativeServicesShowcase'));
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage'));
const UltimatePricing2025 = React.lazy(() => import('./pages/UltimatePricing2025'));
const ServicesShowcase = React.lazy(() => import('./pages/ServicesShowcase'));
const ZeroTrustNetworkArchitecture = React.lazy(() => import('./pages/ZeroTrustNetworkArchitecture'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
const EnhancedServicesPage2025 = React.lazy(() => import('./pages/EnhancedServicesPage'));
const InnovativeServicesShowcase2025Page = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const ServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const UltimateServicesShowcase2026 = React.lazy(() => import('./pages/ServicesShowcase'));
const UltimateServices2026 = React.lazy(() => import('./pages/ServicesShowcase'));
const ComprehensivePricing2026 = React.lazy(() => import('./pages/ServicesPricingPage'));
const Pricing2026 = React.lazy(() => import('./pages/ServicesPricingPage'));
const AIMatcherPage = React.lazy(() => import('./pages/Marketplace'));
const Signup = React.lazy(() => import('./pages/Signup'));
const TalentsPage = React.lazy(() => import('./pages/TalentDirectory'));
const Services = React.lazy(() => import('./pages/ServicesPage'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const Analytics = React.lazy(() => import('./pages/Dashboard'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/MobileLaunchPage'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const Partners = React.lazy(() => import('./pages/Partners'));
const ZionHireAIPage = React.lazy(() => import('./pages/ZionHireAI'));
const HireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const BlogPage = React.lazy(() => import('./pages/Blog'));
const BlogPostPage = React.lazy(() => import('./pages/BlogPost'));
const Accessibility = React.lazy(() => import('./pages/FAQ'));
const GDPR = React.lazy(() => import('./pages/Privacy'));
const API = React.lazy(() => import('./pages/Marketplace'));
const Status = React.lazy(() => import('./pages/Status'));

// Enhanced loading component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion...</p>
      <p className="text-muted-foreground text-sm">Preparing your AI marketplace experience</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
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
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/team" element={<Team />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/events" element={<Events />} />
              <Route path="/news" element={<News />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/talent" element={<TalentDirectory />} />
              <Route path="/zion-hire-ai" element={<ZionHireAI />} />
              <Route path="/equipment" element={<EquipmentPage />} />
              <Route path="/equipment/:id" element={<EquipmentDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/iot-services" element={<IoTServicesPage />} />
              <Route path="/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/enhanced-services" element={<EnhancedServicesPage />} />
              <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
              <Route path="/innovative-services-showcase" element={<InnovativeServicesShowcase />} />
              <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
              <Route path="/services-pricing" element={<ServicesPricingPage />} />
              <Route path="/ultimate-pricing-2025" element={<UltimatePricing2025 />} />
              <Route path="/services-showcase" element={<ServicesShowcase />} />
              <Route path="/zero-trust-network-architecture" element={<ZeroTrustNetworkArchitecture />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/services-comparison" element={<ServicesComparisonPage />} />
              <Route path="/enhanced-services-2025" element={<EnhancedServicesPage2025 />} />
              <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025Page />} />
              <Route path="/services-showcase-2025" element={<ServicesShowcase2025 />} />
              <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/ultimate-services-2026" element={<UltimateServices2026 />} />
              <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
              <Route path="/pricing-2026" element={<Pricing2026 />} />
              <Route path="/match" element={<AIMatcherPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/talents" element={<TalentsPage />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/mobile-launch" element={<MobileLaunchPage />} />
              <Route path="/open-app" element={<OpenAppRedirect />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/zion-hire-ai" element={<ZionHireAIPage />} />
              <Route path="/hire-ai" element={<HireAI />} />
              <Route path="/request-quote" element={<RequestQuotePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/gdpr" element={<GDPR />} />
              <Route path="/api" element={<API />} />
              <Route path="/status" element={<Status />} />
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