import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { ScrollToTop } from './components/ScrollToTop';
import { ContentQualityEnhancer } from './components/ContentQualityEnhancer';
import { BrokenLinkFixer } from './components/BrokenLinkFixer';
import { WebsiteImprovementDashboard } from './components/WebsiteImprovementDashboard';

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
const ComprehensivePricing2025 = lazy(() => import('./pages/ComprehensivePricing2025'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service pages
const AISolutions = lazy(() => import('./pages/AISolutions'));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const EmergingTech = lazy(() => import('./pages/EmergingTech'));

// New pages from incoming branch
const MicroSaasServicesPage = lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// Additional service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/EnterpriseSolutions'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));

// Additional innovative services
const IoTManagementPlatform = lazy(() => import('./pages/services/IoTManagementPlatform'));
const BlockchainDeFiSolutions = lazy(() => import('./pages/services/BlockchainDeFiSolutions'));

// New innovative service pages
const AIWorkflowAutomation = lazy(() => import('./pages/services/AIWorkflowAutomation'));
const BlockchainEnterpriseSolutions = lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const IoTDataAnalytics = lazy(() => import('./pages/services/IoTDataAnalytics'));

// Next-Generation Innovative Services 2025
const NextGenInnovativeServices2025 = lazy(() => import('./pages/NextGenInnovativeServices2025'));
const NextGenServicesShowcase2025 = lazy(() => import('./pages/NextGenServicesShowcase2025'));

// Additional innovative micro SAAS services
const AILegalDocumentAutomation = lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = lazy(() => import('./pages/services/AIFinancialTrading'));
const AISupplyChainOptimization = lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AICustomerServiceAutomation = lazy(() => import('./pages/services/AICustomerServiceAutomation'));

// Missing pages from analysis
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));
const AIPoweredITAssetManagement = lazy(() => import('./pages/AIPoweredITAssetManagement'));
const SOC2ComplianceAutomation = lazy(() => import('./pages/SOC2ComplianceAutomation'));
const AIAutonomousResearchAssistant = lazy(() => import('./pages/AIAutonomousResearchAssistant'));
const FiveGEnterpriseSolutions = lazy(() => import('./pages/5GEnterpriseSolutions'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HelpCenter = lazy(() => import('./pages/FAQ'));
const NewServices = lazy(() => import('./pages/NewServices'));

// Company information pages
const Mission = lazy(() => import('./pages/Mission'));
const Team = lazy(() => import('./pages/Team'));

// Additional pages from original app
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const EquipmentPage = lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = lazy(() => import('./pages/EquipmentDetail'));
const Analytics = lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const Categories = lazy(() => import('./pages/Categories'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PartnersPage = lazy(() => import('./pages/Partners'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = lazy(() => import('./pages/OpenAppRedirect'));
const ZionHireAI = lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = lazy(() => import('./pages/RequestQuote'));

// Service Pages
const AISolutionsPage = lazy(() => import('./pages/services/AI'));
const CloudDevOpsPage = lazy(() => import('./pages/services/Cloud'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const Infrastructure = lazy(() => import('./pages/services/Infrastructure'));
const DigitalTransformationPage = lazy(() => import('./pages/services/Transformation'));
const Consulting = lazy(() => import('./pages/services/Consulting'));

const App = () => {
  useScrollToTop();
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <Header />
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
            <Route path="/comprehensive-pricing-2025" element={<ComprehensivePricing2025 />} />
            
            {/* Service Routes */}
            <Route path="/services/ai" element={<AISolutionsPage />} />
            <Route path="/services/cloud" element={<CloudDevOpsPage />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/infrastructure" element={<Infrastructure />} />
            <Route path="/services/transformation" element={<DigitalTransformationPage />} />
            <Route path="/services/consulting" element={<Consulting />} />
            
            {/* Additional App Routes */}
            <Route path="/match" element={<AIMatcherPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/talent" element={<TalentDirectory />} />
            <Route path="/talents" element={<TalentsPage />} />
            <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/equipment/:id" element={<EquipmentDetail />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/mobile-launch" element={<MobileLaunchPage />} />
            <Route path="/open-app" element={<OpenAppRedirect />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/zion-hire-ai" element={<ZionHireAI />} />
            <Route path="/hire-ai" element={<ZionHireAI />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* New Innovative Services Routes */}
            <Route path="/next-gen-services-2025" element={<NextGenServicesShowcase2025 />} />
            <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/emerging-tech" element={<EmergingTech />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/new-services" element={<NewServices />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;