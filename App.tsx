<<<<<<< HEAD

import React, { Suspense, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Lazy load pages for better performance
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

// Memoized components for better performance
const UnifiedContentPromotion = memo(() => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Latest AI Innovations</h2>
      <p className="text-xl">Discover cutting-edge AI solutions for your business</p>
    </div>
=======
import React, { Suspense, lazy, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const ITConsultingPage = React.lazy(() => import('./app/it-consulting/page'));
const ITInfrastructurePage = React.lazy(() => import('./app/it-infrastructure/page'));
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'));
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'));
const SecurityPage = React.lazy(() => import('./app/security/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));

// Additional missing pages
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const ITSupportPage = React.lazy(() => import('./app/it-support/page'));
const DatabaseManagementPage = React.lazy(() => import('./app/database-management/page'));
const ManagedITPage = React.lazy(() => import('./app/managed-it/page'));
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const APIDocsPage = React.lazy(() => import('./app/api-docs/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const GDPRPage = React.lazy(() => import('./app/gdpr/page'));
const SLAPage = React.lazy(() => import('./app/sla/page'));
const QuantumComputingPage = React.lazy(() => import('./app/quantum-computing/page'));
const AutonomousSystemsPage = React.lazy(() => import('./app/autonomous-systems/page'));
const BlockchainPage = React.lazy(() => import('./app/blockchain/page'));
const IoTEdgeComputingPage = React.lazy(() => import('./app/iot-edge-computing/page'));
const RoboticsPage = React.lazy(() => import('./app/robotics/page'));
const ARVRSolutionsPage = React.lazy(() => import('./app/ar-vr-solutions/page'));
const CompliancePage = React.lazy(() => import('./app/compliance/page'));
const CybersecuritySuitePage = React.lazy(() => import('./app/cybersecurity-suite/page'));
const ExpenseTrackerPage = React.lazy(() => import('./app/expense-tracker/page'));
const NewsPage = React.lazy(() => import('./app/news/page'));
const SmartAnalyticsPage = React.lazy(() => import('./app/smart-analytics/page'));
const NetworkSolutionsPage = React.lazy(() => import('./app/network-solutions/page'));
const SmartCitiesPage = React.lazy(() => import('./app/smart-cities/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));
const SystemStatusPage = React.lazy(() => import('./app/system-status/page'));
const ITInfrastructureSolutionsPage = React.lazy(() => import('./app/it-infrastructure-solutions/page'));

// Lazy load components
const Navigation = React.lazy(() => import('./app/components/Navigation'));
const Sidebar = React.lazy(() => import('./app/components/Sidebar'));
const Footer = React.lazy(() => import('./app/components/Footer'));
const PerformanceOptimizer = React.lazy(() => import('./app/components/PerformanceOptimizer'));
const SEOOptimizer = React.lazy(() => import('./app/components/SEOOptimizer'));
const AccessibilityEnhancer = React.lazy(() => import('./app/components/AccessibilityEnhancer'));

// Main page component
const HomePage = React.lazy(() => import('./app/page'));

// Loading component
const LoadingSpinner = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
>>>>>>> origin/resolve-merge-conflicts
  </div>
));

const InteractiveAIROICalculator = memo(() => (
  <div className="bg-gray-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">AI ROI Calculator</h2>
      <p className="text-xl text-gray-600">Calculate your potential AI investment returns</p>
    </div>
  </div>
));

<<<<<<< HEAD
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
=======
// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error; errorInfo?: React.ErrorInfo }
> {
  constructor(props: { children: React.ReactNode }) {
>>>>>>> origin/resolve-merge-conflicts
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

<<<<<<< HEAD
  override componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
       
      // // console.error('App Error Boundary caught an error:', _error, _errorInfo);
=======
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Error caught by boundary:', error, errorInfo);
>>>>>>> origin/resolve-merge-conflicts
    }
  }

  override render() {
    if (this.state.hasError) {
      return (
<<<<<<< HEAD
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">
              We're working to fix this issue. Please try refreshing the page.
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
>>>>>>> origin/resolve-merge-conflicts
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
<<<<<<< HEAD
              Refresh Page
=======
              Reload Page
>>>>>>> origin/resolve-merge-conflicts
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
export default function App() {
  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description:
        'Leading provider of AI-powered enterprise solutions and digital transformation services',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US',
      },
      sameAs: ['https://linkedin.com/company/zion-tech-group', 'https://twitter.com/ziontechgroup'],
      offers: {
        '@type': 'Offer',
        name: 'AI Enterprise Transformation Services',
        description:
          'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
        price: '50000',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    }),
    []
  );
=======
// Main App component
const App: React.FC = () => {
  const helmetContext = useMemo(() => ({}), []);
>>>>>>> origin/resolve-merge-conflicts

  return (
    <ErrorBoundary>
      <HelmetProvider context={helmetContext}>
        <Helmet>
<<<<<<< HEAD
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
=======
          <title>Zion Tech Group - Advanced AI and IT Solutions | AI Services, Cloud Infrastructure, Cybersecurity</title>
          <meta name="description" content="Leading provider of AI-powered solutions, IT consulting, cloud infrastructure, and cybersecurity services. Transform your business with cutting-edge technology solutions. Call (302) 464-0950." />
          <meta name="keywords" content="AI services, IT consulting, cloud infrastructure, cybersecurity, digital transformation, artificial intelligence, machine learning, business automation, Zion Tech Group" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <meta name="theme-color" content="#0f172a" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <link rel="canonical" href="https://ziontechgroup.com" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com/" />
          <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
          <meta property="og:description" content="Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide." />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Zion Tech Group" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ziontechgroup.com/" />
          <meta property="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
          <meta property="twitter:description" content="Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide." />
          <meta property="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
          
          {/* Additional SEO */}
          <meta name="author" content="Zion Tech Group" />
          <meta name="publisher" content="Zion Tech Group" />
          <meta name="copyright" content="Zion Tech Group" />
          <meta name="language" content="en-US" />
          <meta name="revisit-after" content="7 days" />
          <meta name="rating" content="general" />
          <meta name="distribution" content="global" />
          
          {/* Preconnect to external domains */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          
          {/* DNS Prefetch */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide.",
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
                "email": "kleber@ziontechgroup.com",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup",
                "https://facebook.com/ziontechgroup"
              ],
              "foundingDate": "2020",
              "numberOfEmployees": "10-50",
              "industry": "Information Technology",
              "services": [
                "AI Services",
                "IT Consulting", 
                "Cloud Infrastructure",
                "Cybersecurity",
                "Digital Transformation",
                "Micro SaaS Solutions"
              ]
            })}
          </script>
>>>>>>> origin/resolve-merge-conflicts
        </Helmet>
        
        <Router>
<<<<<<< HEAD
          <div className="min-h-screen bg-white">
            <Navigation />
            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={
                    <>
                      <UnifiedContentPromotion />
                      <InteractiveAIROICalculator />
                      <ContentShowcase />
                      <InteractiveContentShowcase2026 />
                    </>
                  } />
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
              </Suspense>
            </main>
            <Footer />
=======
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Performance and SEO optimizations */}
            <Suspense fallback={null}>
              <PerformanceOptimizer />
            </Suspense>
            <Suspense fallback={null}>
              <SEOOptimizer />
            </Suspense>
            <Suspense fallback={null}>
              <AccessibilityEnhancer />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Navigation />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Sidebar />
            </Suspense>
            
            <main id="main-content" className="min-h-screen lg:ml-80" role="main">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/ai-services/business-intelligence" element={React.lazy(() => import('./app/ai-services/business-intelligence/page'))} />
                  <Route path="/ai-services/document-processing" element={React.lazy(() => import('./app/ai-services/document-processing/page'))} />
                  <Route path="/ai-services/customer-experience" element={React.lazy(() => import('./app/ai-services/customer-experience/page'))} />
                  <Route path="/ai-services/marketing-automation" element={React.lazy(() => import('./app/ai-services/marketing-automation/page'))} />
                  <Route path="/ai-services/predictive-maintenance" element={React.lazy(() => import('./app/ai-services/predictive-maintenance/page'))} />
                  <Route path="/ai-services/supply-chain" element={React.lazy(() => import('./app/ai-services/supply-chain/page'))} />
                  <Route path="/ai-services/fraud-detection" element={React.lazy(() => import('./app/ai-services/fraud-detection/page'))} />
                  <Route path="/ai-services/content-generation" element={React.lazy(() => import('./app/ai-services/content-generation/page'))} />
                  <Route path="/ai-services/hr-analytics" element={React.lazy(() => import('./app/ai-services/hr-analytics/page'))} />
                  <Route path="/ai-services/process-automation" element={React.lazy(() => import('./app/ai-services/process-automation/page'))} />
                  <Route path="/ai-services/quality-assurance" element={React.lazy(() => import('./app/ai-services/quality-assurance/page'))} />
                  <Route path="/ai-services/energy-management" element={React.lazy(() => import('./app/ai-services/energy-management/page'))} />
                  
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  <Route path="/micro-saas/analytics-dashboard" element={React.lazy(() => import('./app/micro-saas/analytics-dashboard/page'))} />
                  <Route path="/micro-saas/support-bot" element={React.lazy(() => import('./app/micro-saas/support-bot/page'))} />
                  <Route path="/micro-saas/social-manager" element={React.lazy(() => import('./app/micro-saas/social-manager/page'))} />
                  <Route path="/micro-saas/email-marketing" element={React.lazy(() => import('./app/micro-saas/email-marketing/page'))} />
                  <Route path="/micro-saas/inventory-management" element={React.lazy(() => import('./app/micro-saas/inventory-management/page'))} />
                  <Route path="/micro-saas/lead-scoring" element={React.lazy(() => import('./app/micro-saas/lead-scoring/page'))} />
                  <Route path="/micro-saas/document-processor" element={React.lazy(() => import('./app/micro-saas/document-processor/page'))} />
                  <Route path="/micro-saas/seo-optimizer" element={React.lazy(() => import('./app/micro-saas/seo-optimizer/page'))} />
                  <Route path="/micro-saas/appointment-scheduler" element={React.lazy(() => import('./app/micro-saas/appointment-scheduler/page'))} />
                  <Route path="/micro-saas/chat-analytics" element={React.lazy(() => import('./app/micro-saas/chat-analytics/page'))} />
                  <Route path="/micro-saas/expense-tracker" element={React.lazy(() => import('./app/micro-saas/expense-tracker/page'))} />
                  <Route path="/micro-saas/content-generator" element={React.lazy(() => import('./app/micro-saas/content-generator/page'))} />
                  <Route path="/it-consulting" element={<ITConsultingPage />} />
                  <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                  <Route path="/security" element={<SecurityPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  
                  {/* Additional IT Services */}
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/it-support" element={<ITSupportPage />} />
                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                  <Route path="/managed-it" element={<ManagedITPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                  <Route path="/it-infrastructure-solutions" element={<ITInfrastructureSolutionsPage />} />
                  
                  {/* Company Pages */}
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />
                  
                  {/* Documentation & Support */}
                  <Route path="/docs" element={<DocsPage />} />
                  <Route path="/api-docs" element={<APIDocsPage />} />
                  <Route path="/status" element={<StatusPage />} />
                  <Route path="/system-status" element={<SystemStatusPage />} />
                  
                  {/* Legal Pages */}
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/gdpr" element={<GDPRPage />} />
                  <Route path="/sla" element={<SLAPage />} />
                  <Route path="/compliance" element={<CompliancePage />} />
                  
                  {/* Emerging Technologies */}
                  <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                  <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                  <Route path="/blockchain" element={<BlockchainPage />} />
                  <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                  <Route path="/robotics" element={<RoboticsPage />} />
                  <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />
                  
                  {/* Additional Services */}
                  <Route path="/cybersecurity-suite" element={<CybersecuritySuitePage />} />
                  <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
                  <Route path="/network-solutions" element={<NetworkSolutionsPage />} />
                  <Route path="/smart-cities" element={<SmartCitiesPage />} />
                  <Route path="/sitemap" element={<SitemapPage />} />
                </Routes>
              </Suspense>
            </main>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Footer />
            </Suspense>
>>>>>>> origin/resolve-merge-conflicts
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
<<<<<<< HEAD
}
=======
};

export default App;
>>>>>>> origin/resolve-merge-conflicts
