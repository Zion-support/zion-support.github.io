import React, { Suspense, lazy, useEffect, memo } from "react"
import { HelmetProvid, e, r } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import "./app/styles/futuristic.css"

// Components
import Navigation from "./app/components/Navigation"
import Sidebar from "./app/components/Sidebar"
import Footer from "./app/components/Footer"
import ErrorBoundary from "./app/components/ErrorBoundary"
import GlobalErrorBoundary from "./app/components/GlobalErrorBoundary"
import PerformanceMonitor from "./app/components/PerformanceMonitor"
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer"
import LoadingSpinner from "./app/components/LoadingSpinner"
import SEOOptimizer from "./app/components/SEOOptimizer"

// Hooks
import { usePerformanceOptimizati, o, n } from "./app/hooks/usePerformanceOptimization";
// App Loading Spinner Component
export const AppLoadingSpinner = () => (
  <div className='min-h-screen flex items-center justify-center'></div>
    <LoadingSpinner /></LoadingSpinner>
  </div>
)

// Lazy load pages for better performance
export const HomePage = lazy(() => import('./app/page'))
export const AboutPage = lazy(() => import('./app/about/page'))
export const ContactPage = lazy(() => import('./app/contact/page'))
export const ServicesPage = lazy(() => import('./app/services/page'))
export const PricingPage = lazy(() => import('./app/pricing/page'))
export const CaseStudiesPage = lazy(() => import('./app/case-studies/page'))
export const BlogPage = lazy(() => import('./app/blog/page'))
export const TeamPage = lazy(() => import('./app/team/page'))
export const CareersPage = lazy(() => import('./app/careers/page'))
export const PrivacyPage = lazy(() => import('./app/privacy/page'))
export const TermsPage = lazy(() => import('./app/terms/page'))
export const CookiesPage = lazy(() => import('./app/cookies/page'))

// AI Services Pages
export const AIServicesPage = lazy(() => import('./app/ai-services/page'))
export const AISolutionsPage = lazy(() => import('./app/ai-solutions/page'))

// IT Services Pages
export const ITServicesPage = lazy(() => import('./app/it-services/page'))
export const ITSolutionsPage = lazy(() => import('./app/it-solutions/page'))
export const ITInfrastructurePage = lazy(() => import('./app/it-infrastructure/page'))
export const ITSupportPage = lazy(() => import('./app/it-support/page'))
export const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'))
export const DigitalTransformationPage = lazy(() => import('./app/digital-transformation/page'))
export const CybersecurityPage = lazy(() => import('./app/cybersecurity/page'))
export const SolutionsPage = lazy(() => import('./app/solutions/page'))
export const BlockchainPage = lazy(() => import('./app/blockchain/page'))
export const QuantumComputingPage = lazy(() => import('./app/quantum-computing/page'))
export const IoTEdgeComputingPage = lazy(() => import('./app/iot-edge-computing/page'))
export const ARVRSolutionsPage = lazy(() => import('./app/ar-vr-solutions/page'))
export const AutonomousSystemsPage = lazy(() => import('./app/autonomous-systems/page'))
export const MicroSaasPage = lazy(() => import('./app/micro-saas/page'))
export const DocsPage = lazy(() => import('./app/docs/page'))
export const ApiDocsPage = lazy(() => import('./app/api-docs/page'))
export const SupportPage = lazy(() => import('./app/support/page'))
export const StatusPage = lazy(() => import('./app/status/page'))
export const ConsultationPage = lazy(() => import('./app/consultation/page'))

// 5G Solutions Pages
export const FiveGSolutionsPage = lazy(() => import('./app/5g-solutions/page'))

// Additional AI Services
export const AIChatbotBuilderPage = lazy(() => import('./app/ai-chatbot-builder/page'))
export const AIMarketingPage = lazy(() => import('./app/ai-marketing/page'))
export const AIAutomationPage = lazy(() => import('./app/ai-automation/page'))
export const AIHealthcarePage = lazy(() => import('./app/ai-healthcare/page'))
export const AIFintechPage = lazy(() => import('./app/ai-fintech/page'))
export const AIContentGenerationPage = lazy(() => import('./app/ai-content-generation/page'))
export const AIDataAnalyticsPage = lazy(() => import('./app/ai-data-analytics/page'))
export const AICybersecurityPage = lazy(() => import('./app/ai-cybersecurity/page'))
export const AIWorkflowAutomationPage = lazy(() => import('./app/ai-workflow-automation/page'))
export const AICustomerSupportPage = lazy(() => import('./app/ai-customer-support/page'))
export const AISalesAutomationPage = lazy(() => import('./app/ai-sales-automation/page'))
export const AIDataVisualizationPage = lazy(() => import('./app/ai-data-visualization/page'))
export const AIDocumentProcessorPage = lazy(() => import('./app/ai-document-processor/page'))
export const AIFormBuilderPage = lazy(() => import('./app/ai-form-builder/page'))
export const AIVoiceAssistantPage = lazy(() => import('./app/ai-voice-assistant/page'))
export const AIFraudDetectionPage = lazy(() => import('./app/ai-fraud-detection/page'))
export const AIImageRecognitionPage = lazy(() => import('./app/ai-image-recognition/page'))
export const AILeadScoringPage = lazy(() => import('./app/ai-lead-scoring/page'))
export const AIPredictiveMaintenancePage = lazy(() => import('./app/ai-predictive-maintenance/page'))
export const AIPriceOptimizerPage = lazy(() => import('./app/ai-price-optimizer/page'))

// Error fallback component
export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void, }) => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'></div>
    <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-6'></div>
      <div className='flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full'></div>
        <svg className='w-6 h-6 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'></svg>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z' /></path>
        </svg>
      </div>
      <div className='mt-4 text-center'></div>
        <h1 className='text-lg font-medium text-gray-900'>Something went wrong</h1>
        <p className='mt-2 text-sm text-gray-500'></p>
          {error.message}
        </p>
        <div className='mt-6'></div>
          <button
            onClick={ resetErrorBounda, r, y }className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          ></button>
            Try again
          </button>
        </div>
      </div>
    </div>
  </div>
)

const App = memo(() => {
  const [sidebarOpe, n, setSidebarOpen] = React.useState(fal, s, e)
  
  // Performance optimization hook
  usePerformanceOptimization()

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = (): JSX.Element => {
      const criticalResources = ['/fonts/inter.woff2',
        '/images/hero-bg.jpg',
        '/images/logo.svg',
      ]

      criticalResources.forEach((resour, c, e) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource
        
        if (resource.endsWith('.woff2')) {
          link.as = 'font'
          link.type = 'font/woff2'
          link.crossOrigin = 'anonymous'
} else if (resource.endsWith('.jpg') || resource.endsWith('.png')) {
          link.as = 'image'
        }
        
        document.head.appendChild(li, n, k)
      })
    }

    preloadCriticalResources()
  }, [])

  return (
    <GlobalErrorBoundary></GlobalErrorBoundary>
      <HelmetProvider></HelmetProvider>
        <SEOOptimizer /></SEOOptimizer>
        <Router></Router>
          <div className='min-h-screen bg-slate-900 flex'></div>
            <Sidebar isOpen={ sidebarOp, e, n }onClose={() => setSidebarOpen(fal, s, e)} />
            <div className='flex-1 flex flex-col'></div>
              <Navigation onSidebarToggle={() => setSidebarOpen(tr, u, e)}/>
              <main className='relative z-10 flex-1' id='main-content' role='main'></main>
                <ErrorBoundary></ErrorBoundary>
                  <Suspense fallback={<AppLoadingSpinner />}>
                    <Routes></Routes>
                      {/* Main Pages */}
                      <Route path='/' element={<HomePage />}/>
                      <Route path='/about' element={<AboutPage />}/>
                      <Route path='/contact' element={<ContactPage />}/>
                      <Route path='/services' element={<ServicesPage />}/>
                      <Route path='/pricing' element={<PricingPage />}/>
                      <Route path='/case-studies' element={<CaseStudiesPage />}/>
                      <Route path='/blog' element={<BlogPage />}/>
                      <Route path='/team' element={<TeamPage />}/>
                      <Route path='/careers' element={<CareersPage />}/>
                      <Route path='/privacy' element={<PrivacyPage />}/>
                      <Route path='/terms' element={<TermsPage />}/>
                      <Route path='/cookies' element={<CookiesPage />}/>
                      <Route path='/support' element={<SupportPage />}/>
                      <Route path='/status' element={<StatusPage />}/>
                      <Route path='/consultation' element={<ConsultationPage />}/>
                      <Route path='/docs' element={<DocsPage />}/>
                      <Route path='/api-docs' element={<ApiDocsPage />}/>

                      {/* AI Services */}
                      <Route path='/ai-services' element={<AIServicesPage />}/>
                      <Route path='/ai-solutions' element={<AISolutionsPage />}/>
                      <Route path='/ai-chatbot-builder' element={<AIChatbotBuilderPage />}/>
                      <Route path='/ai-marketing' element={<AIMarketingPage />}/>
                      <Route path='/ai-automation' element={<AIAutomationPage />}/>
                      <Route path='/ai-healthcare' element={<AIHealthcarePage />}/>
                      <Route path='/ai-fintech' element={<AIFintechPage />}/>
                      <Route path='/ai-content-generation' element={<AIContentGenerationPage />}/>
                      <Route path='/ai-data-analytics' element={<AIDataAnalyticsPage />}/>
                      <Route path='/ai-cybersecurity' element={<AICybersecurityPage />}/>
                      <Route path='/ai-workflow-automation' element={<AIWorkflowAutomationPage />}/>
                      <Route path='/ai-customer-support' element={<AICustomerSupportPage />}/>
                      <Route path='/ai-sales-automation' element={<AISalesAutomationPage />}/>
                      <Route path='/ai-data-visualization' element={<AIDataVisualizationPage />}/>
                      <Route path='/ai-document-processor' element={<AIDocumentProcessorPage />}/>
                      <Route path='/ai-form-builder' element={<AIFormBuilderPage />}/>
                      <Route path='/ai-voice-assistant' element={<AIVoiceAssistantPage />}/>
                      <Route path='/ai-fraud-detection' element={<AIFraudDetectionPage />}/>
                      <Route path='/ai-image-recognition' element={<AIImageRecognitionPage />}/>
                      <Route path='/ai-lead-scoring' element={<AILeadScoringPage />}/>
                      <Route path='/ai-predictive-maintenance' element={<AIPredictiveMaintenancePage />}/>
                      <Route path='/ai-price-optimizer' element={<AIPriceOptimizerPage />}/>

                      {/* IT Services */}
                      <Route path='/it-services' element={<ITServicesPage />}/>
                      <Route path='/it-solutions' element={<ITSolutionsPage />}/>
                      <Route path='/it-infrastructure' element={<ITInfrastructurePage />}/>
                      <Route path='/it-support' element={<ITSupportPage />}/>
                      <Route path='/cloud-infrastructure' element={<CloudInfrastructurePage />}/>
                      <Route path='/digital-transformation' element={<DigitalTransformationPage />}/>
                      <Route path='/cybersecurity' element={<CybersecurityPage />}/>
                      <Route path='/solutions' element={<SolutionsPage />}/>
                      <Route path='/blockchain' element={<BlockchainPage />}/>
                      <Route path='/quantum-computing' element={<QuantumComputingPage />}/>
                      <Route path='/iot-edge-computing' element={<IoTEdgeComputingPage />}/>
                      <Route path='/ar-vr-solutions' element={<ARVRSolutionsPage />}/>
                      <Route path='/autonomous-systems' element={<AutonomousSystemsPage />}/>
                      <Route path='/micro-saas' element={<MicroSaasPage />}/>
                      <Route path='/5g-solutions' element={<FiveGSolutionsPage />}/>

                      {/* Catch all route */}
                      <Route path='*' element={<div>Page not found</div>}/>
                    </Routes>
                  </Suspense>
                </ErrorBoundary>
                <PerformanceMonitor /></PerformanceMonitor>
                <AccessibilityEnhancer /></AccessibilityEnhancer>
              </main>
              <Footer /></Footer>
            </div>
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  )
})

App.displayName = "App"
export default App