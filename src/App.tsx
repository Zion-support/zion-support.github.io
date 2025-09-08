import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'

// Import all page components
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Services } from './components/Services'
import { Solutions } from './components/Solutions'
import { Careers } from './components/Careers'
import { News } from './components/News'
import { Partners } from './components/Partners'
import { Privacy } from './components/Privacy'
import { Terms } from './components/Terms'
import { Sitemap } from './components/Sitemap'
import { Status } from './components/Status'
import { Team } from './components/Team'
import { Mission } from './components/Mission'
import { ResearchDevelopment } from './components/ResearchDevelopment'
import { CaseStudies } from './components/CaseStudies'
import { Events } from './components/Events'
import { Resources } from './components/Resources'
import { Blog } from './components/Blog'
import { Pricing } from './components/Pricing'
import { RequestQuote } from './components/RequestQuote'
import { Support } from './components/Support'
import { TalentDirectory } from './components/TalentDirectory'
import { Marketplace } from './components/Marketplace'
import { Enterprise } from './components/Enterprise'
import { Community } from './components/Community'
import { Developer } from './components/Developer'
import { NotFound } from './components/NotFound'

// Import service pages
import { AIServices } from './pages/services/AIServices'
import { CloudDevOps } from './pages/services/CloudDevOps'
import { Cybersecurity } from './pages/services/Cybersecurity'
import { DigitalTransformation } from './pages/services/DigitalTransformation'
import { EnterpriseIT } from './pages/services/EnterpriseIT'
import { GreenIT } from './pages/services/GreenIT'
import { ITInfrastructure } from './pages/services/ITInfrastructure'
import { QuantumComputing } from './pages/services/QuantumComputing'
import { SpaceTech } from './pages/services/SpaceTech'
import { BlockchainWeb3 } from './pages/services/BlockchainWeb3'
import { Consulting } from './pages/services/Consulting'
import { IoTServices } from './pages/services/IoTServices'
import { MicroSAAS } from './pages/services/MicroSAAS'
import { MobileServices } from './pages/services/MobileServices'

// Layout component with header, sidebar, and footer
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <div className="flex pt-20">
        <Sidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
    <div className="text-center max-w-md">
      <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
      <p className="text-zion-slate-light mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  return (
    <EnhancedErrorBoundary>
      <EnhancedAccessibility />
      <PerformanceMonitor />
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
                {/* Enhanced SEO */}
                <EnhancedSEO 
                  title="Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services"
                  description="Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology."
                  keywords="AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure"
                  type="website"
                  url="https://ziontechgroup.com"
                />
                
                <Header />
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                
                <main className="pt-20">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      {/* Main Routes */}
                      <Route path="/" element={<Home />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/ai-solutions" element={<AISolutions />} />
                      <Route path="/services-showcase" element={<ServicesShowcase />} />
                      <Route path="/ai-matcher" element={<AIMatcherPage />} />
                      <Route path="/talent-directory" element={<TalentDirectory />} />
                      <Route path="/talents" element={<TalentsPage />} />
                      <Route path="/emerging-tech" element={<EmergingTech />} />
                      
                      {/* Service Routes */}
                      <Route path="/ai-services" element={<AIServices />} />
                      <Route path="/cloud-devops" element={<CloudDevOps />} />
                      <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                      <Route path="/digital-transformation" element={<DigitalTransformation />} />
                      
                      {/* Missing pages from analysis */}
                      <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
                      <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
                      <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
                      <Route path="/soc2-compliance-automation" element={<SOC2ComplianceAutomation />} />
                      <Route path="/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                      <Route path="/ai-autonomous-education-professor" element={<AIAutonomousEducationProfessor />} />
                      <Route path="/ai-autonomous-healthcare-physician" element={<AIAutonomousHealthcarePhysician />} />
                      <Route path="/ai-autonomous-learning-system" element={<AIAutonomousLearningSystem />} />
                      <Route path="/ai-autonomous-legal-counsel" element={<AIAutonomousLegalCounsel />} />
                      <Route path="/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
                      <Route path="/case-studies" element={<CaseStudies />} />
                      <Route path="/help" element={<HelpCenter />} />
                      <Route path="/new-services" element={<NewServices />} />
                      
                      {/* Company Routes */}
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/mission" element={<Mission />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/careers" element={<Careers />} />
                      <Route path="/partners" element={<Partners />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/news" element={<News />} />
                      
                      {/* Service Detail Routes */}
                      <Route path="/services-overview" element={<ServicesOverview />} />
                      <Route path="/services/ai-autonomous-systems" element={<AIAutonomousSystems />} />
                      <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                      <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                      <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                      <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                      <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                      <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                      <Route path="/services/industry-solutions" element={<IndustrySolutions />} />
                      <Route path="/services/innovative-new-services" element={<InnovativeNewServices />} />
                      <Route path="/services/specialized-it-infrastructure" element={<SpecializedITInfrastructure />} />
                      <Route path="/innovative-micro-saas-services" element={<InnovativeMicroSaasServices />} />
                      <Route path="/comprehensive-innovative-services" element={<ComprehensiveInnovativeServices />} />
                      <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview />} />
                      <Route path="/services-showcase" element={<ComprehensiveServicesShowcase />} />
                      <Route path="/innovative-services-marketing" element={<InnovativeServicesMarketing />} />
                      
                      {/* New innovative service routes */}
                      <Route path="/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                      <Route path="/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                      <Route path="/iot-data-analytics" element={<IoTDataAnalytics />} />
                      
                      {/* Solutions Routes */}
                      <Route path="/services/enterprise" element={<EnterpriseSolutions />} />
                      <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
                      <Route path="/solutions/finance" element={<FinancialSolutions />} />
                      <Route path="/solutions/manufacturing" element={<ManufacturingAISolutions />} />
                      <Route path="/solutions/retail" element={<RetailTechnologySolutions />} />
                      <Route path="/solutions/government" element={<GovernmentTechnologySolutions />} />
                      <Route path="/solutions/education" element={<EducationSolutions />} />
                      
                      {/* Alternative solution routes for SEO */}
                      <Route path="/financial-solutions" element={<FinancialSolutions />} />
                      <Route path="/manufacturing-ai-solutions" element={<ManufacturingAISolutions />} />
                      <Route path="/retail-technology-solutions" element={<RetailTechnologySolutions />} />
                      <Route path="/government-technology-solutions" element={<GovernmentTechnologySolutions />} />
                      <Route path="/education-solutions" element={<EducationSolutions />} />
                      
                      {/* Legacy route redirects for SEO */}
                      <Route path="/comprehensive-services" element={<Services />} />
                      <Route path="/services-comparison" element={<Services />} />
                      <Route path="/it-onsite-services" element={<Services />} />
                      
                      {/* Additional missing pages to fix broken links */}
                      <Route path="/privacy" element={<Privacy />} />
                      <Route path="/terms" element={<Terms />} />
                      <Route path="/cookies" element={<Cookies />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/events" element={<Events />} />
                      <Route path="/webinars" element={<Webinars />} />
                      <Route path="/white-papers" element={<WhitePapers />} />
                      <Route path="/testimonials" element={<Testimonials />} />
                      <Route path="/support" element={<Support />} />
                      <Route path="/docs" element={<Docs />} />
                      <Route path="/marketplace" element={<Marketplace />} />
                      <Route path="/community" element={<Community />} />
                      
                      {/* AI Autonomous Service routes */}
                      <Route path="/ai-autonomous-business-manager" element={<AIAutonomousBusinessManager />} />
                      <Route path="/ai-autonomous-business-platform" element={<AIAutonomousBusinessPlatform />} />
                      <Route path="/ai-autonomous-code-review" element={<AIAutonomousCodeReview />} />
                      <Route path="/ai-autonomous-creative-director" element={<AIAutonomousCreativeDirector />} />
                      <Route path="/ai-autonomous-data" element={<AIAutonomousData />} />
                      <Route path="/ai-autonomous-decision-engine" element={<AIAutonomousDecisionEngine />} />
                      <Route path="/ai-autonomous-decision-platform" element={<AIAutonomousDecisionPlatform />} />
                      <Route path="/ai-autonomous-devops" element={<AIAutonomousDevOps />} />
                      <Route path="/ai-autonomous-education-professor" element={<AIAutonomousEducationProfessor />} />
                      <Route path="/ai-autonomous-healthcare-physician" element={<AIAutonomousHealthcarePhysician />} />
                      <Route path="/ai-autonomous-learning-system" element={<AIAutonomousLearningSystem />} />
                      <Route path="/ai-autonomous-legal-counsel" element={<AIAutonomousLegalCounsel />} />
                      <Route path="/ai-autonomous-logistics" element={<AIAutonomousLogistics />} />
                      <Route path="/ai-autonomous-manufacturing" element={<AIAutonomousManufacturing />} />
                      <Route path="/ai-autonomous-research" element={<AIAutonomousResearch />} />
                      <Route path="/ai-autonomous-robotics" element={<AIAutonomousRobotics />} />
                      <Route path="/ai-autonomous-scientific-researcher" element={<AIAutonomousScientificResearcher />} />
                      <Route path="/ai-autonomous-security" element={<AIAutonomousSecurity />} />
                      <Route path="/ai-autonomous-systems-platform" element={<AIAutonomousSystemsPlatform />} />
                      <Route path="/ai-autonomous-testing" element={<AIAutonomousTesting />} />
                      <Route path="/ai-autonomous-vehicle-platform" element={<AIAutonomousVehiclePlatform />} />
                      <Route path="/ai-autonomous-vehicle" element={<AIAutonomousVehicle />} />
                      <Route path="/ai-autonomous-vehicles-platform" element={<AIAutonomousVehiclesPlatform />} />
                      <Route path="/ai-autonomous-vehicles" element={<AIAutonomousVehicles />} />
                      <Route path="/ai-autonomous-venture-capitalist" element={<AIAutonomousVentureCapitalist />} />
                      
                      {/* AI Content Generation routes */}
                      <Route path="/ai-content-generation-automation" element={<AIContentGenerationAutomation />} />
                      <Route path="/ai-content-generation-pro" element={<AIContentGenerationPro />} />
                      <Route path="/ai-consciousness-evolution" element={<AIConsciousnessEvolution />} />
                      
                      {/* Enhanced AI service routes */}
                      <Route path="/ai-autonomous-business-manager-2029" element={<AIAutonomousBusinessManager />} />
                      <Route path="/ai-autonomous-business-platform-2026" element={<AIAutonomousBusinessPlatform />} />
                      <Route path="/ai-business-intelligence-elite-2026" element={<AIBusinessIntelligenceElite />} />
                      <Route path="/ai-business-intelligence-suite-2029" element={<AIBusinessIntelligenceSuite />} />
                      <Route path="/ai-content-generation-automation-2033" element={<AIContentGenerationAutomation />} />
                      <Route path="/ai-content-generation-pro-2029" element={<AIContentGenerationPro />} />
                      <Route path="/ai-consciousness-evolution-2025" element={<AIConsciousnessEvolution />} />
                      <Route path="/ai-consciousness-evolution-2029" element={<AIConsciousnessEvolution />} />
                      
                      {/* Quantum and other technology routes */}
                      <Route path="/quantum-cloud-infrastructure" element={<QuantumTechnology />} />
                      <Route path="/quantum-financial-trading" element={<QuantumTechnology />} />
                      <Route path="/quantum-services" element={<QuantumTechnology />} />
                      <Route path="/space-tech" element={<EmergingTech />} />
                      <Route path="/research-development" element={<EmergingTech />} />
                      <Route path="/enterprise-it" element={<ITInfrastructure />} />
                      <Route path="/micro-saas" element={<MicroSAASSolutions />} />
                    </Routes>
                  </Suspense>
                </main>
                
                <Footer />
                <SonnerToaster />
                
                {/* Enhanced Accessibility Controls */}
                <EnhancedAccessibility position="bottom-right" />
                
                {/* AI Chatbot - Always Available */}
                <AIChatbot />
                
                {/* Scroll to Top Button */}
                <ScrollToTop />
                
                {/* Collaborative Text Editor - Development Mode */}
                {import.meta.env.DEV && (
                  <div className="fixed bottom-24 left-6 z-40 w-96">
                    <CollaborativeTextEditor
                      roomId="dev-editor"
                      userId="dev-user"
                      userName="Developer"
                      initialContent="Welcome to the collaborative text editor! Start typing to see AI suggestions and real-time collaboration features."
                      enableAI={true}
                      enableCollaboration={true}
                      enableVersioning={true}
                    />
                  </div>
                )}
                
                {/* AI Code Generator - Development Mode */}
                {import.meta.env.DEV && (
                  <div className="fixed bottom-24 right-6 z-40 w-96">
                    <AICodeGenerator />
                  </div>
                )}
                
                {/* Development Dashboards */}
                {import.meta.env.DEV && (
                  <>
                    {/* Performance Dashboard */}
                    <div className="fixed top-4 left-4 z-40">
                      <PerformanceDashboard />
                    </div>
                    
                    {/* Analytics Dashboard */}
                    <div className="fixed top-4 right-4 z-40">
                      <AnalyticsDashboard />
                    </div>
                    
                    {/* Enterprise Dashboard */}
                    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
                      <EnterpriseDashboard />
                    </div>
                    
                    {/* Security & Compliance Dashboard */}
                    <div className="fixed top-4 right-1/2 transform translate-x-1/2 z-40">
                      <SecurityComplianceDashboard />
                    </div>
                    
                    {/* Machine Learning Dashboard */}
                    <div className="fixed top-4 right-4 z-40">
                      <MachineLearningDashboard />
                    </div>
                  </>
                )}
                              </div>
            </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Layout><Home /></Layout>} />
      
      {/* Company pages */}
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/mission" element={<Layout><Mission /></Layout>} />
      <Route path="/team" element={<Layout><Team /></Layout>} />
      <Route path="/careers" element={<Layout><Careers /></Layout>} />
      <Route path="/partners" element={<Layout><Partners /></Layout>} />
      <Route path="/news" element={<Layout><News /></Layout>} />
      <Route path="/events" element={<Layout><Events /></Layout>} />
      
      {/* Services pages */}
      <Route path="/services" element={<Layout><Services /></Layout>} />
      <Route path="/services/ai" element={<Layout><AIServices /></Layout>} />
      <Route path="/services/cloud" element={<Layout><CloudDevOps /></Layout>} />
      <Route path="/services/cybersecurity" element={<Layout><Cybersecurity /></Layout>} />
      <Route path="/services/infrastructure" element={<Layout><ITInfrastructure /></Layout>} />
      <Route path="/services/transformation" element={<Layout><DigitalTransformation /></Layout>} />
      <Route path="/services/consulting" element={<Layout><Consulting /></Layout>} />
      <Route path="/services/quantum" element={<Layout><QuantumComputing /></Layout>} />
      <Route path="/services/space-tech" element={<Layout><SpaceTech /></Layout>} />
      <Route path="/services/blockchain" element={<Layout><BlockchainWeb3 /></Layout>} />
      <Route path="/services/iot" element={<Layout><IoTServices /></Layout>} />
      <Route path="/services/micro-saas" element={<Layout><MicroSAAS /></Layout>} />
      <Route path="/services/mobile" element={<Layout><MobileServices /></Layout>} />
      <Route path="/services/green-it" element={<Layout><GreenIT /></Layout>} />
      <Route path="/services/enterprise-it" element={<Layout><EnterpriseIT /></Layout>} />
      
      {/* Solutions pages */}
      <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
      <Route path="/enterprise" element={<Layout><Enterprise /></Layout>} />
      <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
      <Route path="/research-development" element={<Layout><ResearchDevelopment /></Layout>} />
      
      {/* Marketplace and Talent */}
      <Route path="/marketplace" element={<Layout><Marketplace /></Layout>} />
      <Route path="/talent" element={<Layout><TalentDirectory /></Layout>} />
      
      {/* Resources and Content */}
      <Route path="/resources" element={<Layout><Resources /></Layout>} />
      <Route path="/blog" element={<Layout><Blog /></Layout>} />
      <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
      
      {/* Community and Developer */}
      <Route path="/community" element={<Layout><Community /></Layout>} />
      <Route path="/developer" element={<Layout><Developer /></Layout>} />
      
      {/* Support and Contact */}
      <Route path="/support" element={<Layout><Support /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/request-quote" element={<Layout><RequestQuote /></Layout>} />
      
      {/* Legal and Utility pages */}
      <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
      <Route path="/terms" element={<Layout><Terms /></Layout>} />
      <Route path="/sitemap" element={<Layout><Sitemap /></Layout>} />
      <Route path="/status" element={<Layout><Status /></Layout>} />
      
      {/* 404 page */}
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  )
}
