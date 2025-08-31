import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { AppHeader } from './layout/AppHeader';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { Sidebar } from './components/Sidebar';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { SEO } from './components/SEO';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));

// Enhanced components
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const Community = React.lazy(() => import('./pages/Community'));
const Demo = React.lazy(() => import('./pages/Demo'));

// Import real pages
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));

// New pages that we know exist
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));

// New real service pages
const WebsiteAnalytics = React.lazy(() => import('./pages/services/WebsiteAnalytics'));
const ITHelpdesk = React.lazy(() => import('./pages/services/ITHelpdesk'));
const AffiliateTracking = React.lazy(() => import('./pages/services/AffiliateTracking'));
const MobileSurvey = React.lazy(() => import('./pages/services/MobileSurvey'));

// Additional innovative services
const AIAutonomousCodeReviewer = React.lazy(() => import('./pages/services/AIAutonomousCodeReviewer'));
const ZeroTrustNetworkAccess = React.lazy(() => import('./pages/services/ZeroTrustNetworkAccess'));

// Additional new service pages
const AIPoweredSEO = React.lazy(() => import('./pages/services/AIPoweredSEO'));
const InterviewAssessmentAI = React.lazy(() => import('./pages/services/InterviewAssessmentAI'));
const HelpdeskPlatform = React.lazy(() => import('./pages/services/HelpdeskPlatform'));
const DSRPortal = React.lazy(() => import('./pages/services/DSRPortal'));
const SecurityHeadersCSP = React.lazy(() => import('./pages/services/SecurityHeadersCSP'));

// New AI-powered micro SAAS services
const AIProjectManagement = React.lazy(() => import('./pages/services/AIProjectManagement'));
const AICustomerSupportAutomation = React.lazy(() => import('./pages/services/AICustomerSupportAutomation'));
const AIFinancialAnalytics = React.lazy(() => import('./pages/services/AIFinancialAnalytics'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const NewServicesShowcase2025 = React.lazy(() => import('./pages/NewServicesShowcase2025'));

// Enhanced Services Showcase 2025
const EnhancedServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedServicesShowcase2025'));

// 2025 New Innovative Services
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernancePlatform = React.lazy(() => import('./pages/services/AIDataGovernancePlatform'));
const AICustomerExperienceAnalytics = React.lazy(() => import('./pages/services/AICustomerExperienceAnalytics'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIFinancialRiskManagement = React.lazy(() => import('./pages/services/AIFinancialRiskManagement'));
const NewInnovativeServices2025 = React.lazy(() => import('./pages/NewInnovativeServices2025'));

// Comprehensive improvements components
const AdvancedAIServicesHub = React.lazy(() => import('./components/AdvancedAIServicesHub'));
const PerformanceAnalytics = React.lazy(() => import('./components/PerformanceAnalytics'));
const EnhancedSEOManager = React.lazy(() => import('./components/EnhancedSEOManager'));
const ComprehensiveImprovements2025 = React.lazy(() => import('./pages/ComprehensiveImprovements2025'));

// New innovative AI services
const AIAutonomousResearchAssistant = React.lazy(() => import('./pages/services/AIAutonomousResearchAssistant'));
const AIContentMarketingSuite = React.lazy(() => import('./pages/services/AIContentMarketingSuite'));
const AIQuantumHybridPlatform = React.lazy(() => import('./pages/services/AIQuantumHybridPlatform'));
const AIQuantumFinancialTrading = React.lazy(() => import('./pages/services/AIQuantumFinancialTrading'));
const AIPredictiveMaintenance = React.lazy(() => import('./pages/services/AIPredictiveMaintenance'));
// const QuantumMachineLearning = React.lazy(() => import('./pages/services/QuantumMachineLearning'));
const AIAutonomousSupplyChain = React.lazy(() => import('./pages/services/AIAutonomousSupplyChain'));
const AICybersecurityThreatIntelligence = React.lazy(() => import('./pages/services/AICybersecurityThreatIntelligence'));
// const AIAutonomousThreatIntelligence = React.lazy(() => import('./pages/services/AIAutonomousThreatIntelligence'));
const AIAutonomousBusinessIntelligence = React.lazy(() => import('./pages/services/AIAutonomousBusinessIntelligence'));
const AIQuantumComputingPlatform = React.lazy(() => import('./pages/services/AIQuantumComputingPlatform'));
const AICodeReviewSecurityScanner = React.lazy(() => import('./pages/services/AICodeReviewSecurityScanner'));
const AIDevOpsAutomationPlatform = React.lazy(() => import('./pages/services/AIDevOpsAutomationPlatform'));
const AIBusinessIntelligenceAnalytics = React.lazy(() => import('./pages/services/AIBusinessIntelligenceAnalytics'));
const AICustomerExperienceSupport = React.lazy(() => import('./pages/services/AICustomerExperienceSupport'));
const AIMarketingAutomationPersonalization = React.lazy(() => import('./pages/services/AIMarketingAutomationPersonalization'));
const ComprehensiveServicesShowcase2029 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2029'));
const ComprehensiveServicesShowcase2031 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2031'));
const ITConsulting = React.lazy(() => import('./pages/ITConsulting'));
const SpaceTech = React.lazy(() => import('./pages/SpaceTech'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const ZionTechGroup2025ComprehensiveShowcase = React.lazy(() => import('./pages/ZionTechGroup2025ComprehensiveShowcase'));

// Additional missing imports for existing routes
const AIServices = React.lazy(() => import('./pages/AIServices'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const MicroSaaS = React.lazy(() => import('./pages/MicroSaaS'));
const Team = React.lazy(() => import('./pages/Team'));
const News = React.lazy(() => import('./pages/News'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const AiSolutions = React.lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = React.lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = React.lazy(() => import('./pages/solutions/Healthcare'));
const AISalesCopilot = React.lazy(() => import('./pages/services/AISalesCopilot'));
const CloudFinOpsOptimizer = React.lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const AIComplianceAssistant = React.lazy(() => import('./pages/services/AIComplianceAssistant'));
const AIAutoEmailResponder = React.lazy(() => import('./pages/services/AIAutoEmailResponder'));
const CustomerFeedbackSurveys = React.lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
const AIComplianceCopilot = React.lazy(() => import('./pages/services/AIComplianceCopilot'));
const LLMContentStudio = React.lazy(() => import('./pages/services/LLMContentStudio'));
const FinOpsAdvisor = React.lazy(() => import('./pages/services/FinOpsAdvisor'));
const ReturnsManagement = React.lazy(() => import('./pages/services/ReturnsManagement'));
const EmailSequencer = React.lazy(() => import('./pages/services/EmailSequencer'));
const PodcastTranscription = React.lazy(() => import('./pages/services/PodcastTranscription'));
const MicroCRM = React.lazy(() => import('./pages/services/MicroCRM'));

// New innovative micro SAAS services
const AICustomerFeedbackAnalytics = React.lazy(() => import('./pages/services/AICustomerFeedbackAnalytics'));
const AIInventoryManagement = React.lazy(() => import('./pages/services/AIInventoryManagement'));
const AIEmployeePerformanceAnalytics = React.lazy(() => import('./pages/services/AIEmployeePerformanceAnalytics'));
const AIFinancialPlanning = React.lazy(() => import('./pages/services/AIFinancialPlanning'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          <Sidebar />
          
          <main className="flex-1 lg:ml-<mAIN_80">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
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
                <Route path="/search" element={<SearchPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                <Route path="/community" element={<Community />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/team" element={<Team />} />
                <Route path="/news" element={<News />} />
                <Route path="/help" element={<HelpCenter />} />
                
                {/* New pricing guide route */}
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                
                {/* Service Routes */}
                <Route path="/ai-services" element={<AIServices />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/micro-saas" element={<MicroSaaS />} />
                
                {/* New sitemap routes */}
                <Route path="/ai-solutions" element={<AiSolutions />} />
                <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
                <Route path="/solutions/healthcare" element={<SolutionsHealthcare />} />
                
                {/* Service routes */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
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
                <Route path="/services/returns-management" element={<ReturnsManagement />} />
                <Route path="/services/email-sequencer" element={<EmailSequencer />} />
                <Route path="/services/podcast-transcription" element={<PodcastTranscription />} />
                <Route path="/services/micro-crm" element={<MicroCRM />} />
                <Route path="/services/website-analytics" element={<WebsiteAnalytics />} />
                <Route path="/services/it-helpdesk" element={<ITHelpdesk />} />
                <Route path="/services/affiliate-tracking" element={<AffiliateTracking />} />
                <Route path="/services/mobile-survey" element={<MobileSurvey />} />
                
                {/* Additional new service routes */}
                <Route path="/services/ai-seo" element={<AIPoweredSEO />} />
                <Route path="/services/interview-assessment" element={<InterviewAssessmentAI />} />
                <Route path="/services/helpdesk" element={<HelpdeskPlatform />} />
                <Route path="/services/dsr-portal" element={<DSRPortal />} />
                <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} />
                
                {/* New AI-powered micro SAAS service routes */}
                <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} />
                <Route path="/services/ai-financial-analytics" element={<AIFinancialAnalytics />} />
                <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                
                {/* Additional innovative AI services */}
                <Route path="/services/ai-quantum-financial-trading" element={<AIQuantumFinancialTrading />} />
                <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                {/* <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} /> */}
                
                {/* Additional innovative AI services */}
                <Route path="/services/ai-autonomous-supply-chain" element={<AIAutonomousSupplyChain />} />
                <Route path="/services/ai-cybersecurity-threat-intelligence" element={<AICybersecurityThreatIntelligence />} />
                {/* <Route path="/services/ai-autonomous-threat-intelligence" element={<AIAutonomousThreatIntelligence />} /> */}
                
                {/* Additional innovative AI service routes */}
                <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
                <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                
                {/* New innovative micro SAAS service routes */}
                <Route path="/services/ai-customer-feedback-analytics" element={<AICustomerFeedbackAnalytics />} />
                <Route path="/services/ai-inventory-management" element={<AIInventoryManagement />} />
                <Route path="/services/ai-employee-performance-analytics" element={<AIEmployeePerformanceAnalytics />} />
                <Route path="/services/ai-financial-planning" element={<AIFinancialPlanning />} />
                
                {/* Advanced AI service routes */}
                <Route path="/services/ai-autonomous-business-intelligence" element={<AIAutonomousBusinessIntelligence />} />
                <Route path="/services/ai-quantum-computing-platform" element={<AIQuantumComputingPlatform />} />
                
                {/* Service Showcase Pages */}
                <Route path="/new-innovative-services-2025" element={<NewInnovativeServices2025 />} />
                <Route path="/comprehensive-improvements-2025" element={<ComprehensiveImprovements2025 />} />
                
                {/* Additional innovative AI service routes */}
                <Route path="/services/ai-code-review-security-scanner" element={<AICodeReviewSecurityScanner />} />
                <Route path="/services/ai-devops-automation-platform" element={<AIDevOpsAutomationPlatform />} />
                <Route path="/services/ai-business-intelligence-analytics" element={<AIBusinessIntelligenceAnalytics />} />
                <Route path="/services/ai-customer-experience-support" element={<AICustomerExperienceSupport />} />
                <Route path="/services/ai-marketing-automation-personalization" element={<AIMarketingAutomationPersonalization />} />
                
                {/* 2029 Services Showcase */}
                <Route path="/comprehensive-services-showcase-2029" element={<ComprehensiveServicesShowcase2029 />} />
                <Route path="/2029-comprehensive-services-showcase" element={<ComprehensiveServicesShowcase2029 />} />
                
                {/* 2031 Comprehensive Services Showcase */}
                <Route path="/comprehensive-services-showcase-2031" element={<ComprehensiveServicesShowcase2031 />} />
                <Route path="/services-2031" element={<ComprehensiveServicesShowcase2031 />} />
                <Route path="/ai-services-2031" element={<ComprehensiveServicesShowcase2031 />} />
                <Route path="/micro-saas-2031" element={<ComprehensiveServicesShowcase2031 />} />
                
                {/* Additional Pages */}
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/it-consulting" element={<ITConsulting />} />
                <Route path="/space-tech" element={<SpaceTech />} />
                <Route path="/sitemap" element={<Sitemap />} />
                
                {/* Enhanced Services Showcase 2025 */}
                <Route path="/services/enhanced-services-showcase-2025" element={<EnhancedServicesShowcase2025 />} />
                
                {/* Zion Tech Group 2025 Comprehensive Showcase */}
                <Route path="/zion-tech-group-2025-comprehensive-showcase" element={<ZionTechGroup2025ComprehensiveShowcase />} />
                
                {/* {/*_404 Page */}
                <Route path="*" element={<div>Page not found</div>} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          <PerformanceMonitor enableReporting={process.env.NODE_ENV === 'production'} />
          <AccessibilityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;