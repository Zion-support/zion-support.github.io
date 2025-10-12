import LoadingSpinner from './components/LoadingSpinner';
'use client';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const PricingPage = lazy(() => import('./pricing/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));

// AI Services
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AiDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));

// Emerging Technologies
const BlockchainPage = lazy(() => import('./blockchain/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const ARVRSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));

// Micro SaaS
const MicroSaasPage = lazy(() => import('./micro-saas/page'));

// Support Pages
const DocsPage = lazy(() => import('./docs/page'));
const ApiDocsPage = lazy(() => import('./api-docs/page'));
const SupportPage = lazy(() => import('./support/page'));
const StatusPage = lazy(() => import('./status/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));

// Loading component
const AppLoadingSpinner = () => (
  <LoadingSpinner 
    size="xl" 
    text="Loading Zion Tech Group..." 
    fullScreen 
  />);

const App: React.FC = () => {</LoadingSpinner>
  return (</LoadingSpinner>
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <Suspense fallback={<AppLoadingSpinner />}></Suspense>
              <Routes>{/* Main Pages */}</Routes>
                <Route path="/" element={<HomePage />} /></Route>
                <Route path="/about" element={<AboutPage />} /></Route>
                <Route path="/contact" element={<ContactPage />} /></Route>
                <Route path="/services" element={<ServicesPage />} /></Route>
                <Route path="/pricing" element={<PricingPage />} /></Route>
                <Route path="/case-studies" element={<CaseStudiesPage />} /></Route>
                <Route path="/blog" element={<BlogPage />} /></Route>
                <Route path="/team" element={<TeamPage />} /></Route>
                <Route path="/careers" element={<CareersPage />} /></Route>
                <Route path="/privacy" element={<PrivacyPage />} /></Route>
                <Route path="/terms" element={<TermsPage />} /></Route>
                <Route path="/cookies" element={<CookiesPage />} />
                </Route>
                {/* AI Services */}</Route>
                <Route path="/ai-services" element={<AiServicesPage />} /></Route>
                <Route path="/ai-marketing" element={<AiMarketingPage />} /></Route>
                <Route path="/ai-automation" element={<AiAutomationPage />} /></Route>
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} /></Route>
                <Route path="/ai-fintech" element={<AiFintechPage />} /></Route>
                <Route path="/ai-content-generation" element={<AiContentGenerationPage />} /></Route>
                <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} /></Route>
                <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} /></Route>
                <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} /></Route>
                <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} /></Route>
                <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} /></Route>
                <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />
                </Route>
                {/* IT Services */}</Route>
                <Route path="/it-services" element={<ItServicesPage />} /></Route>
                <Route path="/it-infrastructure" element={<ItInfrastructurePage />} /></Route>
                <Route path="/it-support" element={<ItSupportPage />} /></Route>
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} /></Route>
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                </Route>
                {/* Emerging Technologies */}</Route>
                <Route path="/blockchain" element={<BlockchainPage />} /></Route>
                <Route path="/quantum-computing" element={<QuantumComputingPage />} /></Route>
                <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} /></Route>
                <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} /></Route>
                <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                </Route>
                {/* Micro SaaS */}</Route>
                <Route path="/micro-saas" element={<MicroSaasPage />} /></Route>
                {/* Support Pages */}</Route>
                <Route path="/docs" element={<DocsPage />} /></Route>
                <Route path="/api-docs" element={<ApiDocsPage />} /></Route>
                <Route path="/support" element={<SupportPage />} /></Route>
                <Route path="/status" element={<StatusPage />} /></Route>
                <Route path="/consultation" element={<ConsultationPage />} /></Route>
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;