<<<<<<< HEAD
import React, { Suspense, lazy, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import React, { Suspense, lazy, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-6b21

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

<<<<<<< HEAD
// Memoized components for better performance
const UnifiedContentPromotion = memo(() => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Latest AI Innovations</h2>
      <p className="text-xl">Discover cutting-edge AI solutions for your business</p>
    </div>
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
=======
// Lazy load components
const Navigation = React.lazy(() => import('./app/components/Navigation'));
const Footer = React.lazy(() => import('./app/components/Footer'));
const PerformanceMonitor = React.lazy(() => import('./app/components/PerformanceMonitor'));
const AccessibilityEnhancer = React.lazy(() => import('./app/components/AccessibilityEnhancer'));

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
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
>>>>>>> cursor/fix-errors-and-merge-to-main-6b21
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
<<<<<<< HEAD
    // Log error for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
=======
    this.setState({ error, errorInfo });
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'development') {
      // Error logging would be handled by error tracking service in production
>>>>>>> cursor/fix-errors-and-merge-to-main-6b21
    }
  }

  render() {
    if (this.state.hasError) {
      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Try again
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Reload Page
>>>>>>> cursor/fix-errors-and-merge-to-main-6b21
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App component
const App: React.FC = () => {
<<<<<<< HEAD
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
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
          </Suspense>
        </div>
      </Router>
=======
  const helmetContext = useMemo(() => ({}), []);

  return (
    <ErrorBoundary>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Zion Tech Group - Advanced AI and IT Solutions</title>
          <meta name="description" content="Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Helmet>
        
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Suspense fallback={<LoadingSpinner />}>
              <Navigation />
            </Suspense>
            
            <main className="min-h-screen">
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
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  <Route path="/it-consulting" element={<ITConsultingPage />} />
                  <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                  <Route path="/security" element={<SecurityPage />} />
                  <Route path="/support" element={<SupportPage />} />
                </Routes>
              </Suspense>
            </main>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Footer />
            </Suspense>
            
            <Suspense fallback={null}>
              <PerformanceMonitor />
            </Suspense>
            
            <Suspense fallback={null}>
              <AccessibilityEnhancer />
            </Suspense>
          </div>
        </Router>
      </HelmetProvider>
>>>>>>> cursor/fix-errors-and-merge-to-main-6b21
    </ErrorBoundary>
  );
};

export default App;