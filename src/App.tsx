import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner } from './components/ui/loading-spinner';

// Enhanced Components;
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import MobileExperienceEnhancer from './components/MobileExperienceEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import { FloatingActionButton } from './components/FloatingActionButton';

// Core pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// Enhanced components
const Community = React.lazy(() => import('./pages/Community'));
const Demo = React.lazy(() => import('./pages/Demo'));

// Import real pages
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const ComprehensivePricingGuide2026 = React.lazy(() => import('./pages/ComprehensivePricingGuide2026'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/AIHealthcarePlatform'));
const AIContentCreation = React.lazy(() => import('./pages/services/AIContentCreation'));
const AICybersecurity = React.lazy(() => import('./pages/services/AICybersecurity'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/IoTEdgeComputing'));
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));

// New AI-powered micro SaaS services
const AIContentMarketingAutomation = React.lazy(() => import('./pages/services/AIContentMarketingAutomation'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIFinancialTradingPlatform = React.lazy(() => import('./pages/services/AIFinancialTradingPlatform'));
const AIHRPlatform = React.lazy(() => import('./pages/services/AIHRPlatform'));
const AILegalResearchPlatform = React.lazy(() => import('./pages/services/AILegalResearchPlatform'));
const AIEducationPlatform = React.lazy(() => import('./pages/services/AIEducationPlatform'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const AIProjectManagementPlatform = React.lazy(() => import('./pages/services/AIProjectManagementPlatform'));
const AICustomerSuccessPlatform = React.lazy(() => import('./pages/services/AICustomerSuccessPlatform'));

// Simple placeholder pages for missing ones
const Community = React.lazy(() => import('./pages/Community'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Security = React.lazy(() => import('./pages/Security'));
const Compliance = React.lazy(() => import('./pages/Compliance'));
const OnsiteSupport = React.lazy(() => import('./pages/OnsiteSupport'));

const Careers = React.lazy(() => import('./pages/Careers'));

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Marketplace - Zion Tech Group"
      description="Explore our marketplace of AI-powered technology solutions and services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Explore our solutions</p>
    </div>
  </div>
);

// New innovative micro SAAS services
const AIRealEstateAnalytics = React.lazy(() => import('./pages/services/AIRealEstateAnalytics'));
const AILogisticsOptimization = React.lazy(() => import('./pages/services/AILogisticsOptimization'));
const AICybersecurityThreatIntelligence = React.lazy(() => import('./pages/services/AICybersecurityThreatIntelligence'));

// New comprehensive services showcase 2026
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));

// New innovative micro SAAS services
const AIEnergyOptimizationPlatform = React.lazy(() => import('./pages/services/AIEnergyOptimizationPlatform'));
const AISupplyChainRiskManagement = React.lazy(() => import('./pages/services/AISupplyChainRiskManagement'));
const AIPredictiveMaintenancePlatform = React.lazy(() => import('./pages/services/AIPredictiveMaintenancePlatform'));
const AIFraudDetectionPlatform = React.lazy(() => import('./pages/services/AIFraudDetectionPlatform'));
const AICustomerExperienceOptimization = React.lazy(() => import('./pages/services/AICustomerExperienceOptimization'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Core Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/comprehensive-services-showcase-2026" element={<ComprehensiveServicesShowcase2026 />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/iot-services" element={<IoTServices />} />
                <Route path="/services/micro-saas" element={<MicroSAAS />} />
                <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/space-tech" element={<SpaceTech />} />
                <Route path="/services/sustainability" element={<Sustainability />} />
                <Route path="/services/zero-trust-network-architecture" element={<ZeroTrustNetworkArchitecture />} />
                
                {/* New AI service routes */}
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                
                {/* New AI-powered micro SaaS service routes */}
                <Route path="/services/ai-content-marketing-automation" element={<AIContentMarketingAutomation />} />
                
                {/* New AI services we added */}
                <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                <Route path="/services/ai-healthcare-predictive-analytics" element={<AIHealthcarePredictiveAnalytics />} />
                <Route path="/services/ai-financial-trading-risk-management" element={<AIFinancialTradingRiskManagement />} />
                <Route path="/comprehensive-ai-services-showcase-2025" element={<ComprehensiveAIServicesShowcase2025 />} />
                
                {/* New innovative micro SAAS services */}
                <Route path="/services/ai-energy-optimization-platform" element={<AIEnergyOptimizationPlatform />} />
                <Route path="/services/ai-supply-chain-risk-management" element={<AISupplyChainRiskManagement />} />
                <Route path="/services/ai-predictive-maintenance-platform" element={<AIPredictiveMaintenancePlatform />} />
                <Route path="/services/ai-fraud-detection-platform" element={<AIFraudDetectionPlatform />} />
                <Route path="/services/ai-customer-experience-optimization" element={<AICustomerExperienceOptimization />} />
                
                {/* Emerging Tech 2030 */}
                <Route path="/emerging-tech-2030" element={<EmergingTech2030 />} />
                
                {/* New comprehensive pricing guide 2026 */}
                <Route path="/comprehensive-pricing-guide-2026" element={<ComprehensivePricingGuide2026 />} />
                
                {/* New comprehensive services showcase 2026 */}
                <Route path="/comprehensive-services-showcase-2026" element={<ComprehensiveServicesShowcase2026 />} />
                
                {/* New comprehensive pricing guide 2027 */}
                <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                
                {/* Revolutionary Services 2030 */}
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                
                {/* Pricing Guide 2025 */}
                <Route path="/pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                
                {/* Schedule Demo */}
                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                
                {/* Service Pages */}
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />

  return (
    <ErrorBoundary
      fallback={<div>Something went wrong. Please refresh the page.</div>}
    >
      <div className="App">
        <Header />
        <div className="flex pt-16">
          <Sidebar />
          <main className="flex-1 ml-64 min-h-screen">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/*" element={<ServicesPage />} />
                <Route
                  path="/services/ai-solutions"
                  element={<AISolutions />}
                />
                <Route
                  path="/services/quantum-computing"
                  element={<QuantumComputing />}
                />
                <Route
                  path="/services/cybersecurity"
                  element={<Cybersecurity />}
                />
                <Route
                  path="/comprehensive-services"
                  element={<ComprehensiveServicesPage />}
                />
                <Route
                  path="/revolutionary-services"
                  element={<RevolutionaryServicesPage />}
                />
                <Route
                  path="/new-services-2025"
                  element={<NewServicesShowcase2025 />}
                />
                <Route
                  path="/enhanced-new-services-2025"
                  element={<EnhancedNewServices2025 />}
                />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/solutions/*" element={<SolutionsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/about/*" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/*" element={<BlogPage />} />
                <Route path="/careers" element={<AboutPage />} />
                <Route path="/partners" element={<AboutPage />} />
                <Route path="/press" element={<AboutPage />} />
                <Route path="/case-studies" element={<BlogPage />} />
                <Route path="/research-development" element={<BlogPage />} />
                <Route path="/docs" element={<BlogPage />} />
                <Route path="/api" element={<BlogPage />} />
                <Route path="/developer" element={<BlogPage />} />
                <Route path="/help" element={<Helpdesk />} />
                <Route path="/training" element={<Training />} />
                <Route path="/community" element={<BlogPage />} />
                <Route path="/support" element={<Support />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route
                  path="/comprehensive-sitemap"
                  element={<ComprehensiveSitemap />}
                />
                <Route path="/privacy-policy" element={<BlogPage />} />
                <Route path="/terms-of-service" element={<BlogPage />} />
                <Route path="/cookie-policy" element={<BlogPage />} />
                <Route path="/request-quote" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
        <Footer />

        {/* Enhanced Components */}
        <PerformanceOptimizer />
        <EnhancedAccessibilityEnhancer />
        <MobileExperienceEnhancer />
        <ChatAssistant />
      </div>
    </ErrorBoundary>
  );
}

export default App;
