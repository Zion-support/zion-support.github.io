import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import EnhancedSEO from './components/EnhancedSEO.jsx';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ThemeProvider } from './components/ThemeProvider';

// Core pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));

// Service overview pages
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview'));
const PricingGuide = React.lazy(() => import('./pages/PricingGuide'));
const Help = React.lazy(() => import('./pages/Help'));
const Partners = React.lazy(() => import('./pages/Partners'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
const Team = React.lazy(() => import('./pages/Team'));
const Press = React.lazy(() => import('./pages/Press'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const AdvancedServicesShowcase2025 = React.lazy(() => import('./pages/AdvancedServicesShowcase2025'));
const Signup = React.lazy(() => import('./pages/Signup'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesLanding2030 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2030'));

// New comprehensive services pages for 2030
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));

// Innovative Services Showcase 2025
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// Innovative Services Showcase 2030
const InnovativeServicesShowcase2030 = React.lazy(() => import('./pages/InnovativeServicesShowcase2030'));

// Innovative Services Showcase 2028
const InnovativeServicesShowcase2028 = React.lazy(() => import('./pages/InnovativeServicesShowcase2028'));
const ComprehensivePricingGuide2028 = React.lazy(() => import('./pages/ComprehensivePricingGuide2028'));
const ComprehensiveServicesLanding2028 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2028'));

// Service category pages
const AIServices = React.lazy(() => import('./pages/AIServices'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const MicroSaaS = React.lazy(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = React.lazy(() => import('./pages/services/MicroSAASSolutions'));
const ServicesCatalog = React.lazy(() => import('./pages/ServicesCatalog'));

// Individual service pages
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const IoTEdge = React.lazy(() => import('./pages/services/IoTEdge'));
const BlockchainEnterpriseSolutions = React.lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const HealthcareTech = React.lazy(() => import('./pages/services/HealthcareTech'));
const Sustainability = React.lazy(() => import('./pages/services/Sustainability'));
const ZeroTrustNetworkArchitecture = React.lazy(() => import('./pages/services/ZeroTrustNetworkArchitecture'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AISalesCopilot = React.lazy(() => import('./pages/services/AISalesCopilot'));
const CloudFinOpsOptimizer = React.lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const AIComplianceAssistant = React.lazy(() => import('./pages/services/AIComplianceAssistant'));
const AIAutoEmailResponder = React.lazy(() => import('./pages/services/AIAutoEmailResponder'));
const CustomerFeedbackSurveys = React.lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
const AIComplianceCopilot = React.lazy(() => import('./pages/services/AIComplianceCopilot'));
const LLMContentStudio = React.lazy(() => import('./pages/services/LLMContentStudio'));
const FinOpsAdvisor = React.lazy(() => import('./pages/services/FinOpsAdvisor'));

// Micro SaaS services
const AiLeadScoring = React.lazy(() => import('./pages/services/AiLeadScoring'));
const WebsiteAiChatbot = React.lazy(() => import('./pages/services/WebsiteAiChatbot'));
const RagSearch = React.lazy(() => import('./pages/services/RagSearch'));
const MlopsPipeline = React.lazy(() => import('./pages/services/MlopsPipeline'));
const EcommercePersonalization = React.lazy(() => import('./pages/services/EcommercePersonalization'));
const ReturnsManagementSaaS = React.lazy(() => import('./pages/services/ReturnsManagementSaaS'));
const VendorRiskManagement = React.lazy(() => import('./pages/services/VendorRiskManagement'));
const AISEOOptimizer = React.lazy(() => import('./pages/services/AISEOOptimizer'));
const SaaSChurnPredictor = React.lazy(() => import('./pages/services/SaaSChurnPredictor'));
const AIIncidentPostmortems = React.lazy(() => import('./pages/services/AIIncidentPostmortems'));
const APIMonitoringSaaS = React.lazy(() => import('./pages/services/APIMonitoringSaaS'));
const GDPRCookieCompliance = React.lazy(() => import('./pages/services/GDPRCookieCompliance'));
const AIProofreadingStudio = React.lazy(() => import('./pages/services/AIProofreadingStudio'));

// Additional innovative AI services
const AICustomerChurnPrediction = React.lazy(() => import('./pages/services/AICustomerChurnPrediction'));
const AIFinancialFraudDetection = React.lazy(() => import('./pages/services/AIFinancialFraudDetection'));
const AIHRTalentAcquisition = React.lazy(() => import('./pages/services/AIHRTalentAcquisition'));

// Additional service pages
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const ITConsulting = React.lazy(() => import('./pages/services/ITConsulting'));
const OnsiteSupport = React.lazy(() => import('./pages/OnsiteSupport'));
const GreenIT = React.lazy(() => import('./pages/services/GreenIT'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const SpaceTech = React.lazy(() => import('./pages/services/SpaceTech'));

// Advanced AI services
const AICybersecuritySuite = React.lazy(() => import('./pages/services/AICybersecuritySuite'));
const QuantumAIPlatform = React.lazy(() => import('./pages/services/QuantumAIPlatform'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernance = React.lazy(() => import('./pages/services/AIDataGovernance'));
const EdgeComputingPlatform = React.lazy(() => import('./pages/services/EdgeComputingPlatform'));
const AICustomerSuccessPlatform = React.lazy(() => import('./pages/services/AICustomerSuccessPlatform'));
const AIEnterpriseOrchestrator = React.lazy(() => import('./pages/services/AIEnterpriseOrchestrator'));

// Additional Micro SaaS Services
const AffiliateMarketingTracker = React.lazy(() => import('./pages/services/AffiliateMarketingTracker'));
const UptimeSLAMonitor = React.lazy(() => import('./pages/services/UptimeSLAMonitor'));
const SOC2ComplianceTracker = React.lazy(() => import('./pages/services/SOC2ComplianceTracker'));
const EmployeeSchedulingSaaS = React.lazy(() => import('./pages/services/EmployeeSchedulingSaaS'));
const AISupportHelpdesk = React.lazy(() => import('./pages/services/AISupportHelpdesk'));
const AIContentGenerator = React.lazy(() => import('./pages/services/AIContentGenerator'));

// AI platform services
const AIBusinessIntelligencePlatform = React.lazy(() => import('./pages/services/AIBusinessIntelligencePlatform'));
const AIFinancialTradingPlatform = React.lazy(() => import('./pages/services/AIFinancialTradingPlatform'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIHRPlatform = React.lazy(() => import('./pages/services/AIHRPlatform'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const AILegalResearchPlatform = React.lazy(() => import('./pages/services/AILegalResearchPlatform'));
const AIEducationPlatform = React.lazy(() => import('./pages/services/AIEducationPlatform'));

// Additional Innovative AI Services
const AIProjectManagementPlatform = React.lazy(() => import('./pages/services/ai-project-management-platform'));
const AICybersecurityThreatDetection = React.lazy(() => import('./pages/services/ai-cybersecurity-threat-detection'));
const AIHealthcareAnalyticsPlatform = React.lazy(() => import('./pages/services/ai-healthcare-analytics-platform'));

// New innovative services
const AIContentGenerationPlatform = React.lazy(() => import('./pages/services/AIContentGenerationPlatform'));
const AICybersecurityThreatIntelligence = React.lazy(() => import('./pages/services/AICybersecurityThreatIntelligence'));
const AICustomerExperienceAnalytics = React.lazy(() => import('./pages/services/AICustomerExperienceAnalytics'));

// Utility and support pages
const Status = React.lazy(() => import('./pages/Status'));
const Demo = React.lazy(() => import('./pages/Demo'));
const Community = React.lazy(() => import('./pages/Community'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Security = React.lazy(() => import('./pages/Security'));
const Compliance = React.lazy(() => import('./pages/Compliance'));
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/Equipment'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServices'));
const News = React.lazy(() => import('./pages/News'));
const Events = React.lazy(() => import('./pages/events'));
const Careers = React.lazy(() => import('./pages/Careers'));





function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
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
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/help" element={<Help />} />
              <Route path="/support" element={<Support />} />
              <Route path="/community" element={<Community />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/training" element={<Training />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/security" element={<Security />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/team" element={<Team />} />
              <Route path="/press" element={<Press />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/status" element={<Status />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/onsite-support" element={<OnsiteSupport />} />
              <Route path="/pricing" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/pricing-2030" element={<ComprehensivePricingGuide2030 />} />
              <Route path="/comprehensive-pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
              <Route path="/pricing-guide" element={<PricingGuide />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services-catalog" element={<ServicesCatalog />} />
              <Route path="/services-overview" element={<ServicesOverview />} />
              <Route path="/services-comparison" element={<ServicesComparisonPage />} />
              
              {/* Comprehensive Services Routes */}
              <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServicesLanding2025 />} />
              <Route path="/comprehensive-services-2030" element={<ComprehensiveServicesLanding2030 />} />
              <Route path="/revolutionary-services-showcase-2030" element={<RevolutionaryServicesShowcase2030 />} />
              <Route path="/comprehensive-services-showcase-2030" element={<ComprehensiveServicesShowcase2030 />} />
              <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />
              <Route path="/emerging-tech-showcase-2025" element={<EmergingTechShowcase2025 />} />
              <Route path="/innovative-services-showcase-2028" element={<InnovativeServicesShowcase2028 />} />
              <Route path="/innovative-services-showcase-2030" element={<InnovativeServicesShowcase2030 />} />
              <Route path="/pricing-guide-2028" element={<ComprehensivePricingGuide2028 />} />
              <Route path="/comprehensive-services-landing-2028" element={<ComprehensiveServicesLanding2028 />} />
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/micro-saas" element={<MicroSaaS />} />
              <Route path="/services/affiliate-marketing-tracker" element={<AffiliateMarketingTracker />} />
              <Route path="/services/uptime-sla-monitor" element={<UptimeSLAMonitor />} />
              <Route path="/services/soc2-compliance-tracker" element={<SOC2ComplianceTracker />} />
              <Route path="/services/employee-scheduling-saas" element={<EmployeeSchedulingSaaS />} />
              <Route path="/services/ai-support-helpdesk" element={<AISupportHelpdesk />} />
              <Route path="/services/ai-content-generator" element={<AIContentGenerator />} />
              <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
              
              {/* Additional Routes */}
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              
              {/* Service Category Routes */}
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/micro-saas" element={<MicroSaaS />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/partners" element={<Partners />} />
              
              {/* Service Routes */}
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/iot-edge" element={<IoTEdge />} />
              <Route path="/services/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
              <Route path="/services/healthcare-tech" element={<HealthcareTech />} />
              <Route path="/services/sustainability" element={<Sustainability />} />
              <Route path="/services/zero-trust-network-architecture" element={<ZeroTrustNetworkArchitecture />} />
              <Route path="/services/incident-response-platform" element={<IncidentResponsePlatform />} />
              <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
              <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
              <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
              <Route path="/services/ai-auto-email-responder" element={<AIAutoEmailResponder />} />
              <Route path="/services/mobile-feedback-surveys" element={<CustomerFeedbackSurveys />} />
              <Route path="/services/ai-compliance-copilot" element={<AIComplianceCopilot />} />
              <Route path="/services/llm-content-studio" element={<LLMContentStudio />} />
              <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
              
              {/* Micro SaaS Service Routes */}
              <Route path="/services/vendor-risk-management" element={<VendorRiskManagement />} />
              <Route path="/services/ai-seo-optimizer" element={<AISEOOptimizer />} />
              <Route path="/services/saas-churn-predictor" element={<SaaSChurnPredictor />} />
              <Route path="/services/ai-incident-postmortems" element={<AIIncidentPostmortems />} />
              <Route path="/services/ai-lead-scoring" element={<AiLeadScoring />} />
              <Route path="/services/website-ai-chatbot" element={<WebsiteAiChatbot />} />
              <Route path="/services/rag-search" element={<RagSearch />} />
              <Route path="/services/mlops-pipeline" element={<MlopsPipeline />} />
              <Route path="/services/ecommerce-personalization" element={<EcommercePersonalization />} />
              <Route path="/services/returns-management" element={<ReturnsManagementSaaS />} />
              <Route path="/services/api-monitoring" element={<APIMonitoringSaaS />} />
              <Route path="/services/gdpr-cookie-compliance" element={<GDPRCookieCompliance />} />
              <Route path="/services/ai-proofreading-studio" element={<AIProofreadingStudio />} />
              
              {/* Additional innovative AI services */}
              <Route path="/services/ai-customer-churn-prediction" element={<AICustomerChurnPrediction />} />
              <Route path="/services/ai-financial-fraud-detection" element={<AIFinancialFraudDetection />} />
              <Route path="/services/ai-hr-talent-acquisition" element={<AIHRTalentAcquisition />} />
              
              {/* Additional Service Routes */}
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/it-consulting" element={<ITConsulting />} />
              <Route path="/services/green-it" element={<GreenIT />} />
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/space-tech" element={<SpaceTech />} />
              
              {/* Advanced AI Service Routes */}
              <Route path="/services/ai-cybersecurity-suite" element={<AICybersecuritySuite />} />
              <Route path="/services/quantum-ai-platform" element={<QuantumAIPlatform />} />
              <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
              <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
              <Route path="/services/ai-data-governance" element={<AIDataGovernance />} />
              <Route path="/services/edge-computing-platform" element={<EdgeComputingPlatform />} />
              <Route path="/services/ai-customer-success-platform" element={<AICustomerSuccessPlatform />} />
              <Route path="/services/ai-enterprise-orchestrator" element={<AIEnterpriseOrchestrator />} />
              
              {/* AI Platform Service Routes */}
              <Route path="/services/ai-business-intelligence-platform" element={<AIBusinessIntelligencePlatform />} />
              <Route path="/services/ai-financial-trading-platform" element={<AIFinancialTradingPlatform />} />
              <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
              <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
              <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
              <Route path="/services/ai-legal-research-platform" element={<AILegalResearchPlatform />} />
              <Route path="/services/ai-education-platform" element={<AIEducationPlatform />} />
              
              {/* Additional Innovative AI Service Routes */}
              <Route path="/services/ai-project-management-platform" element={<AIProjectManagementPlatform />} />
              <Route path="/services/ai-cybersecurity-threat-detection" element={<AICybersecurityThreatDetection />} />
              <Route path="/services/ai-healthcare-analytics-platform" element={<AIHealthcareAnalyticsPlatform />} />
              
              {/* New Innovative Service Routes */}
              <Route path="/services/ai-content-generation-platform" element={<AIContentGenerationPlatform />} />
              <Route path="/services/ai-cybersecurity-threat-intelligence" element={<AICybersecurityThreatIntelligence />} />
              <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
              
              {/* Micro SaaS Solutions Routes */}
              <Route path="/services/affiliate-marketing-tracker" element={<AffiliateMarketingTracker />} />
              <Route path="/services/uptime-sla-monitor" element={<UptimeSLAMonitor />} />
              <Route path="/services/soc2-compliance-tracker" element={<SOC2ComplianceTracker />} />
              <Route path="/services/employee-scheduling-saas" element={<EmployeeSchedulingSaaS />} />
              <Route path="/services/ai-support-helpdesk" element={<AISupportHelpdesk />} />
              <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
              {/* Catch all route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        
        <EnhancedFuturisticFooter />
        <ChatAssistant />
        <PerformanceOptimizer showMetrics={true} />
      </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;