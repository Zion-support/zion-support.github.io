import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';

// Lazy load main pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Services = React.lazy(() => import('./pages/Services.jsx'));
const InnovativeServicesShowcase2026 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025.jsx'));
const ServicesOverview2026 = React.lazy(() => import('./pages/ServicesOverview.jsx'));

// Lazy load service pages
const AIServices = React.lazy(() => import('./pages/services/AIServices.jsx'));
const CybersecurityServices = React.lazy(() => import('./pages/services/CybersecurityServices.jsx'));
const CloudDevOpsServices = React.lazy(() => import('./pages/services/CloudDevOpsServices.jsx'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices.jsx'));
const QuantumComputingServices = React.lazy(() => import('./pages/services/QuantumComputing.jsx'));
const BlockchainServices = React.lazy(() => import('./pages/services/BlockchainServices.jsx'));
const DigitalTwinServices = React.lazy(() => import('./pages/services/DigitalTransformation.jsx'));
const SustainabilityServices = React.lazy(() => import('./pages/services/GreenIT.jsx'));

// Lazy load marketplace pages
const Marketplace = React.lazy(() => import('./pages/Marketplace.jsx'));
const Talent = React.lazy(() => import('./pages/Talent.jsx'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage.jsx'));
const Categories = React.lazy(() => import('./pages/Categories.jsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.jsx'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServicesPage.jsx'));

// Lazy load micro SAAS pages
const MicroSAAS = React.lazy(() => import('./pages/MicroSAAS.jsx'));
const MicroSAASPage = React.lazy(() => import('./pages/MicroSAASPage.jsx'));
const MicroSAASServices = React.lazy(() => import('./pages/MicroSAASServices.jsx'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage.jsx'));
const MicroSAASShowcase = React.lazy(() => import('./pages/MicroSAASShowcase.jsx'));
const MicroSAASSolutions = React.lazy(() => import('./pages/services/MicroSAASSolutions.jsx'));

// Lazy load company pages
const Blog = React.lazy(() => import('./pages/Blog.jsx'));
const Partners = React.lazy(() => import('./pages/Partners.jsx'));
const Careers = React.lazy(() => import('./pages/Careers.jsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.jsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.jsx'));

// Lazy load support pages
const Help = React.lazy(() => import('./pages/Help.jsx'));
const Status = React.lazy(() => import('./pages/Status.jsx'));
const Security = React.lazy(() => import('./pages/Security.jsx'));

// Lazy load additional pages
const News = React.lazy(() => import('./pages/News.jsx'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudy.jsx'));
const Events = React.lazy(() => import('./pages/Events.jsx'));
const Training = React.lazy(() => import('./pages/Training.jsx'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers.jsx'));
const Webinars = React.lazy(() => import('./pages/Webinars.jsx'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment.jsx'));

// Lazy load legal pages
const Terms = React.lazy(() => import('./pages/Terms.jsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.jsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.jsx'));

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
        <AppHeader />
        <Suspense fallback={
          <div className="min-h-screen bg-futuristic flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-zion-cyan text-lg">Loading...</p>
            </div>
=======
    <HelmetProvider>
      <ErrorBoundary fallback={<ErrorFallback error={new Error()} resetErrorBoundary={() => { /* empty */ }} />}>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
            {/* SEO Component */}
            <SEO
              title="Zion Tech Group - Leading AI & Technology Solutions"
              description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
              keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
              ogImage="/og-image.jpg"
              canonicalUrl="https://ziontechgroup.com"
            />

            {/* Performance Optimizer */}
            <PerformanceOptimizer enabled={true} />

            {/* Enhanced Accessibility */}
            {/* <EnhancedAccessibilityEnhancer enabled={true} /> */}

            {/* Mobile Experience Enhancer */}
            {/* <MobileExperienceEnhancer enabled={true} /> */}

            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} showMetrics={true} />

            {/* Header */}
            <EnhancedHeader />

            {/* Main Content */}
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Suspense fallback={<div>Loading...</div>}><Routes>
                    {/* Core Routes */}
                    <Route
                      path="/"
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Home />
                        </motion.div>
                      }
                    />
                    {/* <Route path="/home2026" element={<Home2026 />} /> */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/blog" element={<Blog />} /> */}
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/pricing" element={<Pricing />} />
                    {/* <Route path="/team" element={<Team />} /> */}
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path="/security" element={<Security />} />
                    {/* <Route path="/status" element={<Status />} /> */}
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    <Route path="/talent" element={<Talent />} />
                    <Route path="/equipment" element={<Equipment />} />
                    <Route path="/request-quote" element={<RequestQuote />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/marketplace/products" element={<MarketplaceProducts />} />
                    <Route path="/marketplace/talent" element={<MarketplaceTalent />} />
                    <Route path="/marketplace/equipment" element={<MarketplaceEquipment />} />
                    <Route path="/marketplace/services" element={<MarketplaceServices />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/services" element={<Services />} />
                    {/* <Route path="/services2026" element={<Services2026 />} /> */}
                    <Route path="/services2027" element={<Services2027 />} />

                    {/* Service Routes */}
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />
                    <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                    <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
                    <Route path="/mobile-launch" element={<MobileLaunch />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/match" element={<Match />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    {/* <Route path="/press" element={<Press />} /> */}
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/documentation" element={<Documentation />} />
                    {/* <Route path="/developers" element={<Developers />} /> */}
                    <Route path="/research-development" element={<ResearchDevelopment />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/green-it" element={<GreenIT />} />
                    <Route path="/space-tech" element={<GreenIT />} />
                    <Route path="/quantum-technology" element={<GreenIT />} />
                    <Route path="/financial-solutions" element={<GreenIT />} />
                    <Route path="/mobile" element={<GreenIT />} />

                    {/* 2025 Innovative Services Routes */}
                    <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
                    {/* <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} /> */}

                    {/* Enhanced Services Showcase 2025 */}
                    <Route path="/enhanced-services-showcase-2025" element={
                      <Suspense fallback={<div className="loading-spinner mx-auto mt-20"></div>}>
                        {/* <EnhancedServicesShowcase2025 /> */}
                      </Suspense>
                    } />

                    {/* Comprehensive Services Routes */}
                    <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} />
                    <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
                    {/* <Route path="/comprehensive-services-showcase-2027" element={<ComprehensiveServicesShowcase2027Page />} /> */}
                    <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />
                    {/* <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} /> */}
                    {/* <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} /> */}
                    {/* <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} /> */}

                    {/* Innovative Services Routes */}
                    <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
                    {/* <Route path="/ultimate-innovative-services-showcase-2025" element={<UltimateInnovativeServicesShowcase2025 />} /> */}
                    {/* <Route path="/new-services-showcase-2025" element={<NewServicesShowcase2025 />} /> */}

                    {/* Service Detail Routes */}
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                                          {/* <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} /> */}
                                          {/* <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} /> */}
                                          {/* <Route path="/services/ai-seo" element={<AIPoweredSEO />} /> */}
                                          {/* <Route path="/services/interview-assessment" element={<InterviewAssessmentAI />} /> */}
                                          {/* <Route path="/services/ai-content-marketing-suite" element={<AIContentMarketingSuite />} /> */}
                                          {/* <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} /> */}
                                          {/* <Route path="/services/ai-project-management" element={<AIProjectManagement />} /> */}
                                          {/* <Route path="/services/ai-financial-analytics" element={<AIFinancialAnalytics />} /> */}
                    {/* <Route path="/services/cloud-devops" element={<CloudDevOps />} /> */}
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                                          {/* <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} /> */}
                                          {/* <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} /> */}
                                          {/* <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} /> */}
                                          {/* <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} /> */}
                                          {/* <Route path="/services/dsr-portal" element={<DSRPortal />} /> */}
                                          {/* <Route path="/services/zero-trust-network-access" element={<ZeroTrustNetworkAccess />} /> */}
                    {/* <Route path="/services/digital-twin" element={<DigitalTwin />} /> */}
                    <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                    {/* <Route path="/services/quantum-computing" element={<QuantumComputing />} /> */}
                    {/* <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} /> */}
                                          {/* <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} /> */}
                    {/* <Route path="/services/space-tech" element={<SpaceTech />} /> */}
                    {/* <Route path="/services/data-analytics" element={<DataAnalytics />} /> */}
                    <Route path="/services/micro-crm" element={<MicroCRM />} />
                    {/* <Route path="/services/helpdesk" element={<HelpdeskPlatform />} /> */}
                                          {/* <Route path="/services/website-analytics" element={<WebsiteAnalytics />} /> */}
                    <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                    {/* <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} /> */}
                                          {/* <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} /> */}

                    {/* AI Service Routes */}
                    {/* <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} /> */}
                    {/* <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} /> */}
                    <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                    {/* <Route path="/services/ai-content-creation-suite" element={<AIContentCreationSuite />} /> */}
                    {/* <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} /> */}
                    {/* <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} /> */}
                    {/* <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} /> */}
                    {/* <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} /> */}
                    {/* <Route path="/services/ai-hr-talent-acquisition" element={<AIHRTalentAcquisition />} /> */}
                    <Route path="/services/ai-iot-edge-computing" element={<AIIoTEdgeComputing />} />
                    {/* <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} /> */}
                    {/* <Route path="/services/ai-sustainable-technology" element={<AISustainableTechnology />} /> */}
                    {/* <Route path="/services/ai-quantum-machine-learning" element={<AIQuantumMachineLearning />} /> */}

                    {/* 2025 New Innovative Services */}
                    {/* <Route path="/services/ai-supply-chain-risk-management" element={<AISupplyChainRiskManagement />} /> */}
                    <Route path="/services/ai-esg-compliance-platform" element={<AIESGCompliancePlatform />} />
                    <Route path="/services/ai-digital-twin-platform" element={<AIDigitalTwinPlatform />} />
                                          {/* <Route path="/services/ai-quantum-computing-platform" element={<AIQuantumComputingPlatform />} /> */}
                    <Route path="/services/ai-edge-computing-platform" element={<AIEdgeComputingPlatform />} />

                    {/* Additional Service Routes */}
                    {/* <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} /> */}
                    {/* <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} /> */}
                    {/* <Route path="/services/sustainable-technology" element={<SustainableTechnology />} /> */}
                    {/* <Route path="/services/ai-content-creation" element={<AIContentCreation />} /> */}
                    {/* <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} /> */}

                    {/* Additional Pages */}
                    <Route path="/api" element={<API />} />
                    <Route path="/developer-portal" element={<DeveloperPortal />} />

                    {/* Showcase Routes */}
                    {/* <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} /> */}
                    <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
                    {/* <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} /> */}
                    {/* <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} /> */}
                    {/* <Route path="/innovative-services-2025" element={<InnovativeServicesLanding2025 />} /> */}

                    {/* 2029 Cutting-Edge Services */}
                            {/* <Route path="/zion-cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} /> */}
        {/* <Route path="/cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} /> */}

                    {/* 404 Page */}
                    <Route
                      path="*"
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
                        >
                          <div className="text-center text-white">
                            <h1 className="text-6xl font-bold mb-4">404</h1>
                            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                            <p className="text-gray-300 mb-8">
                              The page you're looking for doesn't exist or has been moved.
                            </p>
                            <button
                              onClick={() => window.history.back()}
                              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-4"
                            >
                              Go Back
                            </button>
                            <button
                              onClick={() => window.location.href = '/'}
                              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                            >
                              Go Home
                            </button>
                          </div>
                        </motion.div>
                      }
                    />
                  </Routes></Suspense>
                </AnimatePresence>
              </Suspense>
            </main>

            {/* Footer */}
            {/* <EnhancedFooter /> */}

            {/* Floating Action Button */}
            <FloatingActionButton enabled={true} />

            {/* Enhanced Performance Optimizer */}
            <PerformanceOptimizer enabled={true} />

            {/* Enhanced Accessibility Enhancer */}
            <EnhancedAccessibilityEnhancer enabled={true} />

            {/* Smart Notification System */}
            <SmartNotificationSystem enabled={true} />

            {/* Advanced Analytics Dashboard */}
            <AdvancedAnalyticsDashboard enabled={true} />

            {/* AI Content Optimizer */}
            <AIContentOptimizer enabled={true} />

            {/* Security Monitoring System */}
            <SecurityMonitoringSystem enabled={true} />

            {/* User Experience Optimizer */}
            <UserExperienceOptimizer enabled={true} />

            {/* Chat Assistant */}
            {/* <ChatAssistant
              enabled={true}
              position="bottom-right"
              theme="auto"
              language="en"
            /> */}
>>>>>>> origin/systematic-improvements-merge
          </div>
        }>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/innovative-services-showcase-2026" element={<InnovativeServicesShowcase2026 />} />
            <Route path="/services-overview-2026" element={<ServicesOverview2026 />} />

            {/* Service Routes */}
            <Route path="/services/ai-analytics" element={<AIServices />} />
            <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
            <Route path="/services/cloud-devops" element={<CloudDevOpsServices />} />
            <Route path="/services/iot-edge" element={<IoTServices />} />
            <Route path="/services/quantum-computing" element={<QuantumComputingServices />} />
            <Route path="/services/blockchain" element={<BlockchainServices />} />
            <Route path="/services/digital-twin" element={<DigitalTwinServices />} />
            <Route path="/services/sustainability" element={<SustainabilityServices />} />

            {/* Marketplace Routes */}
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/green-it" element={<GreenIT />} />
            <Route path="/it-onsite-services" element={<ITOnsiteServices />} />

            {/* Micro SAAS Routes */}
            <Route path="/micro-saas" element={<MicroSAAS />} />
            <Route path="/micro-saas/page" element={<MicroSAASPage />} />
            <Route path="/micro-saas/services" element={<MicroSAASServices />} />
            <Route path="/micro-saas/services-page" element={<MicroSAASServicesPage />} />
            <Route path="/micro-saas/showcase" element={<MicroSAASShowcase />} />
            <Route path="/micro-saas/solutions" element={<MicroSAASSolutions />} />

            {/* Company Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/sitemap" element={<Sitemap />} />

            {/* Support Routes */}
            <Route path="/help" element={<Help />} />
            <Route path="/status" element={<Status />} />
            <Route path="/security" element={<Security />} />

            {/* Additional Routes */}
            <Route path="/news" element={<News />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/events" element={<Events />} />
            <Route path="/training" element={<Training />} />
            <Route path="/white-papers" element={<WhitePapers />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/research-development" element={<ResearchDevelopment />} />

            {/* Legal Routes */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />

            {/* Catch-all route for 404 */}
            <Route path="*" element={
              <div className="min-h-screen bg-futuristic flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                  <p className="text-zion-cyan text-xl mb-8">Page not found</p>
                  <a 
                    href="/" 
                    className="px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;