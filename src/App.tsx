import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { NewContentPromotionBanner } from './components/NewContentPromotionBanner';
import NewContentPromotionBanner2025 from './components/NewContentPromotionBanner2025';
import { RevolutionaryContentBanner } from './components/RevolutionaryContentBanner';
import InnovativeContentShowcase2026 from './components/InnovativeContentShowcase2026';
import InteractiveContentDiscovery2026 from './components/InteractiveContentDiscovery2026';
import EnhancedContentPromotionBanner from './components/EnhancedContentPromotionBanner';
import AI2035OmniversalConsciousnessBanner from './components/AI2035OmniversalConsciousnessBanner';
import AI2035OmniversalConsciousnessShowcase from './components/AI2035OmniversalConsciousnessShowcase';
import NeuralInterfaceRevolutionBanner from './components/NeuralInterfaceRevolutionBanner';
import SpaceTechnologySolutionsBanner from './components/SpaceTechnologySolutionsBanner';
import RevolutionaryContentPromotionBanner from './components/RevolutionaryContentPromotionBanner';
import FutureTechnologyShowcaseBanner from './components/FutureTechnologyShowcaseBanner';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Services = lazy(() => import('./pages/Services'));
const AIServices = lazy(() => import('./pages/AIServicesPage'));
const ITServices = lazy(() => import('./pages/ITServices'));
const ComprehensiveServices = lazy(() => import('./pages/ComprehensiveServices'));
const MobileLaunch = lazy(() => import('./pages/MobileLaunchPage'));
const Analytics = lazy(() => import('./pages/Analytics'));
const Match = lazy(() => import('./pages/AIMatcher'));
const Careers = lazy(() => import('./pages/Careers'));
const RequestQuote = lazy(() => import('./pages/RequestQuote'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const FAQ = lazy(() => import('./pages/FAQ'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Partners = lazy(() => import('./pages/Partners'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const Developers = lazy(() => import('./pages/Developers'));
const WhitePapers = lazy(() => import('./pages/white-papers'));
const Webinars = lazy(() => import('./pages/webinars'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Talent = lazy(() => import('./pages/TalentDirectory'));
const Equipment = lazy(() => import('./pages/EquipmentPage'));
const GreenIT = lazy(() => import('./pages/GreenIT'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const ITOnsiteServices = lazy(() => import('./pages/ITOnsiteServicesPage'));
const Profile = lazy(() => import('./pages/ProfilePage'));
const Signup = lazy(() => import('./pages/Signup'));
const NotFound = lazy(() => import('./pages/NotFound'));
const EnhancedServices = lazy(() => import('./pages/EnhancedServicesPage'));

// New 2025 service imports
const UltimateServicesShowcase2025 = lazy(() => import('./pages/UltimateServicesShowcase2025'));
const ComprehensivePricing2028 = lazy(() => import('./pages/ComprehensivePricing2028'));
const ContentShowcase2025 = lazy(() => import('../app/content-showcase-2025/page'));
const ITOnsiteServicesPage = lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = lazy(() => import('./pages/Contact'));
const ZionHireAI = lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = lazy(() => import('./pages/RequestQuote'));
const ExpandedServicesPage = lazy(() => import('./pages/ExpandedServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO />
      <PerformanceOptimizer />
      <PerformanceMonitor />
      <ErrorBoundary>
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/services" element={<Services />} />
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
              <Route path="/mobile-launch" element={<MobileLaunch />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/match" element={<Match />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/enhanced-services" element={<EnhancedServices />} />
              <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} />
              <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} />
              <Route path="/content-showcase-2025" element={<ContentShowcase2025 />} />
              <Route path="/it-onsite-services-page" element={<ITOnsiteServicesPage />} />
              <Route path="/open-app" element={<OpenAppRedirect />} />
              <Route path="/contact-page" element={<ContactPage />} />
              <Route path="/zion-hire-ai" element={<ZionHireAI />} />
              <Route path="/request-quote-page" element={<RequestQuotePage />} />
              <Route path="/expanded-services" element={<ExpandedServicesPage />} />
              <Route path="/service/:id" element={<ServiceDetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <ChatAssistant />
        <NewContentPromotionBanner />
        <NewContentPromotionBanner2025 />
        <RevolutionaryContentBanner />
        <InnovativeContentShowcase2026 />
        <InteractiveContentDiscovery2026 />
        <EnhancedContentPromotionBanner />
        <AI2035OmniversalConsciousnessBanner />
        <AI2035OmniversalConsciousnessShowcase />
        <NeuralInterfaceRevolutionBanner />
        <SpaceTechnologySolutionsBanner />
        <RevolutionaryContentPromotionBanner />
        <FutureTechnologyShowcaseBanner />
      </ErrorBoundary>
    </div>
  );
};

export default App;