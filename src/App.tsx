import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Sidebar } from './components/Sidebar';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { EnhancedAccessibilityPanel } from './components/EnhancedAccessibilityPanel';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import { InteractiveUserExperience } from './components/InteractiveUserExperience';
import SecurityEnhancer from './components/SecurityEnhancer';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/about'));
const Contact = React.lazy(() => import('./pages/contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/case-studies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Signup = React.lazy(() => import('./pages/Signup'));
// Removed missing page import: ZionHireAI
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const ServicesAdvertising = React.lazy(() => import('./pages/ServicesAdvertising'));
const Help = React.lazy(() => import('./pages/Help'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const ResearchDevelopment = React.lazy(() => import('./pages/research-development'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Developers = React.lazy(() => import('./pages/Developers'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Status = React.lazy(() => import('./pages/Status'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Security = React.lazy(() => import('./pages/Security'));
const Compliance = React.lazy(() => import('./pages/Compliance'));
const OnsiteSupport = React.lazy(() => import('./pages/OnsiteSupport'));
// Emerging Technology 2030
const EmergingTech2030 = React.lazy(() => import('./pages/EmergingTech2030'));
// AI platform services that exist
const AIBusinessIntelligencePlatform = React.lazy(() => import('./pages/services/AIBusinessIntelligencePlatform'));
const AIFinancialTradingPlatform = React.lazy(() => import('./pages/services/ai-financial-trading-platform'));
// New AI-powered micro SaaS services that exist
const AIContentMarketingAutomation = React.lazy(() => import('./pages/services/AIContentMarketingAutomation'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIHRPlatform = React.lazy(() => import('./pages/services/AIHRPlatform'));
const AILegalResearchPlatform = React.lazy(() => import('./pages/services/AILegalResearchPlatform'));
const AIEducationPlatform = React.lazy(() => import('./pages/services/AIEducationPlatform'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const AIProjectManagementPlatform = React.lazy(() => import('./pages/services/ai-project-management-platform'));
// New AI services we added
const AILegalDocumentAutomation = React.lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcarePredictiveAnalytics = React.lazy(() => import('./pages/services/AIHealthcarePredictiveAnalytics'));
const AIFinancialTradingRiskManagement = React.lazy(() => import('./pages/services/AIFinancialTradingRiskManagement'));
const ComprehensiveAIServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveAIServicesShowcase2025'));
const ComprehensiveServicesAdvertising2030 = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising'));
// Support & Resource pages
const Resources = React.lazy(() => import('./pages/Resources'));
const Help = React.lazy(() => import('./pages/Help'));
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<EnhancedContact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/docs" element={<Documentation />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                <Route path="/services/enhanced" element={<EnhancedServicesLanding />} />
                <Route path="/services/comprehensive-2030" element={<ComprehensiveServicesLanding2030 />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/services/comprehensive-advertising" element={<ComprehensiveServicesAdvertising />} />
                <Route path="/services/showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
                <Route path="/services/overview" element={<InnovativeServicesOverview />} />
                <Route path="/pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                <Route path="/pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/innovative-micro-saas-services-2025" element={<InnovativeMicroSAASServices2025 />} />
                <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                <Route path="/comprehensive-services-landing-2027" element={<ComprehensiveServicesLanding2027 />} />
                <Route path="/services/innovative-2025" element={<InnovativeServices2025 />} />
                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                <Route path="/community" element={<Community />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/help" element={<Help />} />
                <Route path="/events" element={<Events />} />
                <Route path="/training" element={<Training />} />
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                {/* Support & Resource Routes */}
                <Route path="/resources" element={<Resources />} />
                <Route path="/help" element={<Help />} />
                <Route path="/training" element={<Training />} />
                <Route path="/support" element={<Support />} />
                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer showMetrics={true} />
          <EnhancedAccessibilityPanel />
          <AdvancedPerformanceMonitor />
          <InteractiveUserExperience />
          <SecurityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;