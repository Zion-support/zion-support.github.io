'use client'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './app/styles/futuristic.css'
import './app/styles/futuristic-enhanced.css'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import { PageLoader } from './app/components/LoadingStates'
import ErrorBoundary from './app/components/ErrorBoundary'
import SEOHead from './app/components/EnhancedSEOHead'
import SkipLink from './app/components/SkipLink'
import Breadcrumb from './app/components/Breadcrumb'
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer'
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer'
import EnhancedAccessibility from './app/components/EnhancedAccessibility'
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor'
import { AnalyticsProvider } from './app/components/EnhancedAnalytics'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import ServiceWorker from './app/components/ServiceWorker'
import EnhancedErrorBoundary from './app/components/EnhancedErrorBoundary'
import FuturisticBackground from './app/components/FuturisticBackground'
// Lazy load pages for better performance with error boundaries
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const ServicesPage = React.lazy(() => import('./app/services/page'))
const PricingPage = React.lazy(() => import('./app/pricing/page'))
const BlogPage = React.lazy(() => import('./app/blog/page'))
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'))
const CareersPage = React.lazy(() => import('./app/careers/page'))
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'))
const ItServicesPage = React.lazy(() => import('./app/it-services/page'))
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'))
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'))
const ConsultationPage = React.lazy(() => import('./app/consultation/page'))
const DemoPage = React.lazy(() => import('./app/demo/page'))
const SupportPage = React.lazy(() => import('./app/support/page'))
const PrivacyPage = React.lazy(() => import('./app/privacy/page'))
const TermsPage = React.lazy(() => import('./app/terms/page'))
const CookiesPage = React.lazy(() => import('./app/cookies/page'))
const SitemapPage = React.lazy(() => import('./app/sitemap/page'))
// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'))
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'))
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'))
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'))
const AiMobileBuilderPage = React.lazy(() => import('./app/ai-mobile-builder/page'))
const AiLeadScoringPage = React.lazy(() => import('./app/ai-lead-scoring/page'))
const AiEcommerceAssistantPage = React.lazy(() => import('./app/ai-ecommerce-assistant/page'))
const AiSecurityMonitorPage = React.lazy(() => import('./app/ai-security-monitor/page'))
const AiFinancialPlannerPage = React.lazy(() => import('./app/ai-financial-planner/page'))
const AiHealthTrackerPage = React.lazy(() => import('./app/ai-health-tracker/page'))
const AiLearningPlatformPage = React.lazy(() => import('./app/ai-learning-platform/page'))
const AiSocialMediaManagerPage = React.lazy(() => import('./app/ai-social-media-manager/page'))
const AiVideoEditorPage = React.lazy(() => import('./app/ai-video-editor/page'))
const AiEmailMarketingAutomationPage = React.lazy(() => import('./app/ai-email-marketing-automation/page'))
const AiProjectManagementPage = React.lazy(() => import('./app/ai-project-management/page'))
const AiCustomerInsightsPage = React.lazy(() => import('./app/ai-customer-insights/page'))
// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'))
const CybersecuritySolutionsPage = React.lazy(() => import('./app/cybersecurity-solutions/page'))
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'))
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'))
const MobileAppDevelopmentPage = React.lazy(() => import('./app/mobile-app-development/page'))
const SystemAdministrationPage = React.lazy(() => import('./app/system-administration/page'))
const ItInfrastructureDesignPage = React.lazy(() => import('./app/it-infrastructure-design/page'))
const ItProjectManagementPage = React.lazy(() => import('./app/it-project-management/page'))
const EnterpriseSolutionsPage = React.lazy(() => import('./app/enterprise-solutions/page'))
// Company Pages
const TeamPage = React.lazy(() => import('./app/team/page'))
// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor()
  return <React.Fragment>{children}</React.Fragment>
}
// Main App Component
const App: React.FC = () => {
  return (
    <EnhancedErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <SkipLink />
        <ServiceWorker />
        <Router>
          <AppWithPerformanceMonitoring>
            <AnalyticsProvider>
              <PerformanceOptimizer>
                <EnhancedAccessibility>
                  <AccessibilityEnhancer>
                    <PerformanceMonitor />
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
                      <FuturisticBackground />
                      <Navigation />
                      <Breadcrumb />
                      <main id="main-content" className="flex-1" tabIndex={-1}>
                        <Suspense fallback={<PageLoader />}>
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/ai-services" element={<AiServicesPage />} />
                            <Route path="/it-services" element={<ItServicesPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/tutorials" element={<TutorialsPage />} />
                            <Route path="/consultation" element={<ConsultationPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/cookies" element={<CookiesPage />} />
                            <Route path="/sitemap" element={<SitemapPage />} />
                            
                            {/* AI Service Pages */}
                            <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                            <Route path="/ai-automation" element={<AiAutomationPage />} />
                            <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                            <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                            <Route path="/ai-mobile-builder" element={<AiMobileBuilderPage />} />
                            <Route path="/ai-lead-scoring" element={<AiLeadScoringPage />} />
                            <Route path="/ai-ecommerce-assistant" element={<AiEcommerceAssistantPage />} />
                            <Route path="/ai-security-monitor" element={<AiSecurityMonitorPage />} />
                            <Route path="/ai-financial-planner" element={<AiFinancialPlannerPage />} />
                            <Route path="/ai-health-tracker" element={<AiHealthTrackerPage />} />
                            <Route path="/ai-learning-platform" element={<AiLearningPlatformPage />} />
                            <Route path="/ai-social-media-manager" element={<AiSocialMediaManagerPage />} />
                            <Route path="/ai-video-editor" element={<AiVideoEditorPage />} />
                            <Route path="/ai-email-marketing-automation" element={<AiEmailMarketingAutomationPage />} />
                            <Route path="/ai-project-management" element={<AiProjectManagementPage />} />
                            <Route path="/ai-customer-insights" element={<AiCustomerInsightsPage />} />
                            
                            {/* IT Service Pages */}
                            <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                            <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                            <Route path="/web-development" element={<WebDevelopmentPage />} />
                            <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                            <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
                            <Route path="/system-administration" element={<SystemAdministrationPage />} />
                            <Route path="/it-infrastructure-design" element={<ItInfrastructureDesignPage />} />
                            <Route path="/it-project-management" element={<ItProjectManagementPage />} />
                            <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                            
                            {/* Company Pages */}
                            <Route path="/team" element={<TeamPage />} />
                          </Routes>
                        </Suspense>
                      </main>
                      <Footer />
                    </div>
                  </AccessibilityEnhancer>
                </EnhancedAccessibility>
              </PerformanceOptimizer>
            </AnalyticsProvider>
          </AppWithPerformanceMonitoring>
        </Router>
      </HelmetProvider>
    </EnhancedErrorBoundary>
  )
}
App.displayName = 'App'
export default App