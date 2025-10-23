
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor />
            <AccessibilityEnhancer>
              <Suspense fallback={<AppLoadingSpinner />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  {/* AI Services */}
                  <Route path="/ai-services" element={<AiServicesPage />} />
                  <Route path="/ai-marketing" element={<AiMarketingPage />} />
                  <Route path="/ai-automation" element={<AiAutomationPage />} />
                  <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                  <Route path="/ai-fintech" element={<AiFintechPage />} />
                    element={<AiContentGenerationPage />}

                    element={<AiDataAnalyticsPage />}

                    element={<AiCybersecurityPage />}

                    element={<AiWorkflowAutomationPage />}

                    element={<AiCustomerSupportPage />}

                    element={<AiSalesAutomationPage />}

                    element={<AiDataVisualizationPage />}

                  {/* IT Services */}
                  <Route path="/it-services" element={<ItServicesPage />} />
                    element={<ItInfrastructurePage />}

                  <Route path="/it-support" element={<ItSupportPage />} />
                    element={<CloudInfrastructurePage />}

                    element={<CybersecurityPage />}

                  {/* Emerging Technologies */}
                  <Route path="/blockchain" element={<BlockchainPage />} />
                    element={<QuantumComputingPage />}

                    element={<IoTEdgeComputingPage />}

                    element={<ARVRSolutionsPage />}

                    element={<AutonomousSystemsPage />}

                  {/* Micro SaaS */}
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  {/* Support Pages */}
                  <Route path="/docs" element={<DocsPage />} />
                  <Route path="/api-docs" element={<ApiDocsPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/status" element={<StatusPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />
                </Routes>
              </Suspense>
            </AccessibilityEnhancer>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
