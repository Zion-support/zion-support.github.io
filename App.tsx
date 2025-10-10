<<<<<<< HEAD
<<<<<<< HEAD
'use client';

<<<<<<< HEAD
import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/EnhancedSEOHead';
import SkipLink from './app/components/SkipLink';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './app/hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/Analytics';
import PerformanceMonitor from './app/components/PerformanceMonitor';

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/logo.png",
  "description": "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "364 E Main St STE 1008",
    "addressLocality": "Middletown",
    "addressRegion": "DE",
    "postalCode": "19709",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-302-464-0950",
    "contactType": "customer service",
    "email": "kleber@ziontechgroup.com"
  },
  "sameAs": [
    "https://linkedin.com/company/zion-tech-group",
    "https://twitter.com/ziontechgroup",
    "https://github.com/zion-tech-group"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "50-100",
  "industry": "Information Technology",
  "services": [
    "AI Solutions",
    "Machine Learning",
    "Quantum Computing",
    "Digital Transformation",
    "IT Services",
    "Cybersecurity",
    "Cloud Computing",
    "Automation"
  ]
};

<<<<<<< HEAD
// Lazy load pages for better performance;
=======
import React, { memo, useMemo, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
=======
import React, { Suspense, lazy, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233

// Lazy load pages for better performance
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-01af
=======
// Lazy load pages for better performance
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const AIOpsPage = React.lazy(() => import('./app/ai-ops/page'));
const HealthcareITPage = React.lazy(() => import('./app/healthcare-it/page'));
const FinancialITPage = React.lazy(() => import('./app/financial-it/page'));
const EdgeComputingPage = React.lazy(() => import('./app/edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const IoTPlatformPage = React.lazy(() => import('./app/iot-platform/page'));

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Performance monitoring hook;
=======
// Performance monitoring hook
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <>{children}</>;
};

const App: React.FC = memo(() => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer>
              <EnhancedAccessibility>
                <AppWithPerformanceMonitoring>
                  <SEOHead />
                  <Router>
                    <div className="min-h-screen bg-white overflow-x-hidden">
                      <SkipLink to="#main-content">Skip to main content</SkipLink>
                      <Navigation />
                      <Breadcrumb />
                      <main id="main-content" className="w-full">
                        <Suspense fallback={<PageLoader message="Loading Zion Tech Group..." />}>
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/ai-services" element={<AIServicesPage />} />
                            <Route path="/it-services" element={<ITServicesPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/team" element={<TeamPage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/cookies" element={<CookiesPage />} />
                            <Route path="/docs" element={<DocsPage />} />
                            <Route path="/api-docs" element={<ApiDocsPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/status" element={<StatusPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/consultation" element={<ConsultationPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/ai-ops" element={<AIOpsPage />} />
                            <Route path="/healthcare-it" element={<HealthcareITPage />} />
                            <Route path="/financial-it" element={<FinancialITPage />} />
                            <Route path="/edge-computing" element={<EdgeComputingPage />} />
                            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                            <Route path="/iot-platform" element={<IoTPlatformPage />} />
                          </Routes>
                        </Suspense>
                      </main>
                      <Footer />
                    </div>
                  </Router>
                </AppWithPerformanceMonitoring>
              </EnhancedAccessibility>
            </AccessibilityEnhancer>
          </PerformanceOptimizer>
        </AnalyticsProvider>
=======
import React, { Suspense, lazy, memo, useMemo, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));
const CookiesPage = lazy(() => import('./app/cookies/page'));
const DocsPage = lazy(() => import('./app/docs/page'));
const ApiDocsPage = lazy(() => import('./app/api-docs/page'));
const ConsultationPage = lazy(() => import('./app/consultation/page'));
const CompliancePage = lazy(() => import('./app/compliance/page'));
const GdprPage = lazy(() => import('./app/gdpr/page'));

// AI Services
const AIServicesPage = lazy(() => import('./app/ai-services/page'));
const AIMarketingPage = lazy(() => import('./app/ai-marketing/page'));
const AIAutomationPage = lazy(() => import('./app/ai-automation/page'));
const AIHealthcarePage = lazy(() => import('./app/ai-healthcare/page'));
const AIFintechPage = lazy(() => import('./app/ai-fintech/page'));
const AIContentGenerationPage = lazy(() => import('./app/ai-content-generation/page'));
const AIDataAnalyticsPage = lazy(() => import('./app/ai-data-analytics/page'));
const AICybersecurityPage = lazy(() => import('./app/ai-cybersecurity/page'));
const AIWorkflowAutomationPage = lazy(() => import('./app/ai-workflow-automation/page'));
const AICustomerSupportPage = lazy(() => import('./app/ai-customer-support/page'));
const AISalesAutomationPage = lazy(() => import('./app/ai-sales-automation/page'));
const AIDataVisualizationPage = lazy(() => import('./app/ai-data-visualization/page'));

// IT Services
const ITServicesPage = lazy(() => import('./app/it-services/page'));
const ITInfrastructurePage = lazy(() => import('./app/it-infrastructure/page'));
const ITSupportPage = lazy(() => import('./app/it-support/page'));
const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'));
const CloudMigrationPage = lazy(() => import('./app/cloud-migration/page'));
const CybersecurityPage = lazy(() => import('./app/cybersecurity/page'));
const DatabaseManagementPage = lazy(() => import('./app/database-management/page'));
const ITConsultingPage = lazy(() => import('./app/it-consulting/page'));

// Specialized Solutions
const QuantumComputingPage = lazy(() => import('./app/quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./app/autonomous-systems/page'));
const BlockchainPage = lazy(() => import('./app/blockchain/page'));
const BusinessIntelligencePage = lazy(() => import('./app/ai-business-intelligence/page'));
const IotEdgeComputingPage = lazy(() => import('./app/iot-edge-computing/page'));
const RoboticsPage = lazy(() => import('./app/robotics/page'));
const ArVrSolutionsPage = lazy(() => import('./app/ar-vr-solutions/page'));

// Micro SaaS
const MicroSaasPage = lazy(() => import('./app/micro-saas/page'));

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
// Lazy load components
const Navigation = React.lazy(() => import('./app/components/Navigation'));
const Footer = React.lazy(() => import('./app/components/Footer'));
const PerformanceMonitor = React.lazy(() => import('./app/components/PerformanceMonitor'));
const AccessibilityEnhancer = React.lazy(() => import('./app/components/AccessibilityEnhancer'));

<<<<<<< HEAD
// Loading component
const LoadingSpinner = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
=======
// Memoized components for better performance
const UnifiedContentPromotion = memo(() => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Latest AI Innovations</h2>
      <p className="text-xl">Discover cutting-edge AI solutions for your business</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-01af
    </div>
  </div>
));

<<<<<<< HEAD
LoadingSpinner.displayName = 'LoadingSpinner';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
=======
// Main page component
const HomePage = React.lazy(() => import('./app/page'));

// Loading component
const LoadingSpinner = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error; errorInfo?: React.ErrorInfo }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
<<<<<<< HEAD
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
=======
const InteractiveAIROICalculator = memo(() => (
  <div className="bg-gray-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">AI ROI Calculator</h2>
      <p className="text-xl text-gray-600">Calculate your potential AI investment returns</p>
    </div>
  </div>
));

const ContentShowcase = memo(() => (
  <div className="py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Featured Content</h2>
      <p className="text-xl text-gray-600">Explore our latest insights and case studies</p>
    </div>
  </div>
));

const InteractiveContentShowcase2026 = memo(() => (
  <div className="bg-blue-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">2026 Content Showcase</h2>
      <p className="text-xl text-gray-600">Latest trends and innovations for 2026</p>
    </div>
  </div>
));

// Loading component
const LoadingSpinner = memo(() => (
  <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
    <div className="text-gray-500">Loading...</div>
  </div>
));

// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Error logging can be implemented here
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-01af
=======
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Error caught by boundary:', error, errorInfo);
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }

  render() {
    if (this.state.hasError) {
      return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
=======
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-01af
            >
<<<<<<< HEAD
              Refresh Page
=======
              Reload Page
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
// Main App Component
const App: React.FC = () => {
  const routes = useMemo(() => [
    // Main Pages
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
    { path: '/services', component: ServicesPage },
    { path: '/pricing', component: PricingPage },
    { path: '/blog', component: BlogPage },
    { path: '/case-studies', component: CaseStudiesPage },
    { path: '/team', component: TeamPage },
    { path: '/careers', component: CareersPage },
    
    // Legal & Support Pages
    { path: '/privacy', component: PrivacyPage },
    { path: '/terms', component: TermsPage },
    { path: '/cookies', component: CookiesPage },
    { path: '/docs', component: DocsPage },
    { path: '/api-docs', component: ApiDocsPage },
    { path: '/consultation', component: ConsultationPage },
    { path: '/compliance', component: CompliancePage },
    { path: '/gdpr', component: GdprPage },
    
    // AI Services
    { path: '/ai-services', component: AIServicesPage },
    { path: '/ai-marketing', component: AIMarketingPage },
    { path: '/ai-automation', component: AIAutomationPage },
    { path: '/ai-healthcare', component: AIHealthcarePage },
    { path: '/ai-fintech', component: AIFintechPage },
    { path: '/ai-content-generation', component: AIContentGenerationPage },
    { path: '/ai-data-analytics', component: AIDataAnalyticsPage },
    { path: '/ai-cybersecurity', component: AICybersecurityPage },
    { path: '/ai-workflow-automation', component: AIWorkflowAutomationPage },
    { path: '/ai-customer-support', component: AICustomerSupportPage },
    { path: '/ai-sales-automation', component: AISalesAutomationPage },
    { path: '/ai-data-visualization', component: AIDataVisualizationPage },
    
    // IT Services
    { path: '/it-services', component: ITServicesPage },
    { path: '/it-infrastructure', component: ITInfrastructurePage },
    { path: '/it-support', component: ITSupportPage },
    { path: '/cloud-infrastructure', component: CloudInfrastructurePage },
    { path: '/cloud-migration', component: CloudMigrationPage },
    { path: '/cybersecurity', component: CybersecurityPage },
    { path: '/database-management', component: DatabaseManagementPage },
    { path: '/it-consulting', component: ITConsultingPage },
    
    // Specialized Solutions
    { path: '/quantum-computing', component: QuantumComputingPage },
    { path: '/autonomous-systems', component: AutonomousSystemsPage },
    { path: '/blockchain', component: BlockchainPage },
    { path: '/business-intelligence', component: BusinessIntelligencePage },
    { path: '/iot-edge-computing', component: IotEdgeComputingPage },
    { path: '/robotics', component: RoboticsPage },
    { path: '/ar-vr-solutions', component: ArVrSolutionsPage },
    
    // Micro SaaS
    { path: '/micro-saas', component: MicroSaasPage },
  ], []);
=======
export default function App() {
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of AI-powered enterprise solutions and digital transformation services",
      "url": "https://ziontechgroup.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ],
      "offers": {
        "@type": "Offer",
        "description": "AI-powered enterprise solutions"
      }
    }),
    []
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-01af
=======
// Main App component
const App: React.FC = () => {
  const helmetContext = useMemo(() => ({}), []);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
<<<<<<< HEAD
          <title>Zion Tech Group - Advanced AI and IT Solutions</title>
          <meta name="description" content="Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide." />
          <meta name="keywords" content="AI solutions, IT consulting, cloud infrastructure, cybersecurity, digital transformation" />
          <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
          <meta property="og:description" content="Leading provider of AI-powered solutions, IT consulting, and innovative technology services." />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
          <meta name="twitter:description" content="Leading provider of AI-powered solutions, IT consulting, and innovative technology services." />
        </Helmet>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Suspense fallback={<LoadingSpinner />}>
              <Navigation />
            </Suspense>
            
            <main className="relative">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {routes.map(({ path, component: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                  ))}
                </Routes>
              </Suspense>
            </main>
            
            <Suspense fallback={<div className="h-32 bg-slate-800" />}>
              <Footer />
            </Suspense>
            
            <Suspense fallback={null}>
              <PerformanceMonitor />
            </Suspense>
            
            <Suspense fallback={null}>
              <AccessibilityEnhancer />
=======
          <title>Zion Tech Group - AI & IT Solutions</title>
          <meta
            name="description"
            content="Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology."
          />
          <meta
            name="keywords"
            content="AI, artificial intelligence, enterprise solutions, digital transformation, IT services"
          />
          <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta
            property="og:description"
            content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta
            name="twitter:description"
            content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains"
          />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>

        <Router>
          <div className="min-h-screen bg-white">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<div>Home Page</div>} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/api-docs" element={<ApiDocsPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
              </Routes>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-01af
            </Suspense>
          </div>
        </Router>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      </HelmetProvider>
    </ErrorBoundary>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
App.displayName = 'App';

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
export default App;
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-01af
