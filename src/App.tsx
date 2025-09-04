import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ErrorBoundary from './utils/errorBoundary';

// 2032 Innovative Services Showcase
const InnovativeServicesShowcase2032 = lazy(() => import('./pages/InnovativeServicesShowcase2032'));

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
                
                {/* 2032 Innovative Services Showcase */}
                <Route path="/innovative-services-showcase-2032" element={<InnovativeServicesShowcase2032 />} />
                <Route path="/services-2032" element={<InnovativeServicesShowcase2032 />} />
                <Route path="/ai-services-2032" element={<InnovativeServicesShowcase2032 />} />
                <Route path="/micro-saas-2032" element={<InnovativeServicesShowcase2032 />} />
                
                {/* {/*_404 Page */}
                <Route path="*" element={<div>Page not found</div>} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          {/* <PerformanceOptimizer /> */}
          <AccessibilityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;