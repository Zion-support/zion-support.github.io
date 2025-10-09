
import React, { Suspense, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';

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
  <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 cyber-matrix neural-glow">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="text-3xl font-bold mb-4 cyber-text-glow holographic-text-advanced">Latest AI Innovations</h2>
      <p className="text-xl">Discover cutting-edge AI solutions for your business</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="cyber-pulse bg-cyan-500/20 px-6 py-3 rounded-lg">
          <span className="text-cyan-300 font-bold">300% ROI Guaranteed</span>
        </div>
        <div className="cyber-pulse bg-purple-500/20 px-6 py-3 rounded-lg">
          <span className="text-purple-300 font-bold">50+ AI Solutions</span>
        </div>
        <div className="cyber-pulse bg-green-500/20 px-6 py-3 rounded-lg">
          <span className="text-green-300 font-bold">24/7 Support</span>
        </div>
      </div>
    </div>
  </div>
));

const InteractiveAIROICalculator = memo(() => (
  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-16 quantum-grid energy-field">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="text-3xl font-bold mb-4 text-white cyber-text-glow">AI ROI Calculator</h2>
      <p className="text-xl text-gray-300 mb-8">Calculate your potential AI investment returns</p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="quantum-card p-6 text-center">
          <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
          <div className="text-white font-semibold mb-2">Average ROI</div>
          <div className="text-gray-400 text-sm">Within first year</div>
        </div>
        <div className="quantum-card p-6 text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
          <div className="text-white font-semibold mb-2">Cost Reduction</div>
          <div className="text-gray-400 text-sm">Operational savings</div>
        </div>
        <div className="quantum-card p-6 text-center">
          <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
          <div className="text-white font-semibold mb-2">Efficiency Gain</div>
          <div className="text-gray-400 text-sm">Process optimization</div>
        </div>
      </div>
    </div>
  </div>
));

const ContentShowcase = memo(() => (
  <div className="relative py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network">
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="text-3xl font-bold mb-4 text-white cyber-text-glow">Featured Content</h2>
      <p className="text-xl text-gray-300 mb-8">Explore our latest insights and case studies</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="holographic-card p-6 text-left">
          <div className="text-cyan-400 font-bold mb-2">AI Case Study</div>
          <h3 className="text-white font-semibold mb-2">Manufacturing Automation</h3>
          <p className="text-gray-300 text-sm">How we helped a manufacturing company achieve 95% automation efficiency</p>
        </div>
        <div className="holographic-card p-6 text-left">
          <div className="text-purple-400 font-bold mb-2">Tech Insights</div>
          <h3 className="text-white font-semibold mb-2">Quantum Computing</h3>
          <p className="text-gray-300 text-sm">The future of quantum computing in enterprise applications</p>
        </div>
        <div className="holographic-card p-6 text-left">
          <div className="text-green-400 font-bold mb-2">Success Story</div>
          <h3 className="text-white font-semibold mb-2">Healthcare AI</h3>
          <p className="text-gray-300 text-sm">Revolutionizing patient care with AI-powered diagnostics</p>
        </div>
      </div>
    </div>
  </div>
));

const InteractiveContentShowcase2026 = memo(() => (
  <div className="relative py-16 bg-gradient-to-r from-cyan-600 to-purple-700 quantum-particle">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="text-3xl font-bold mb-4 text-white cyber-text-glow holographic-text-advanced">2026 Content Showcase</h2>
      <p className="text-xl text-gray-200 mb-8">Latest trends and innovations for 2026</p>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-pulse bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
            <div className="text-cyan-300 font-bold mb-2">🚀 Next-Gen AI</div>
            <h3 className="text-white font-semibold mb-2">Autonomous Systems</h3>
            <p className="text-gray-200 text-sm">Self-managing AI systems that adapt and evolve without human intervention</p>
          </div>
          <div className="cyber-pulse bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
            <div className="text-purple-300 font-bold mb-2">⚡ Quantum Leap</div>
            <h3 className="text-white font-semibold mb-2">Quantum AI</h3>
            <p className="text-gray-200 text-sm">Quantum-enhanced AI algorithms for unprecedented computational power</p>
          </div>
        </div>
      </div>
    </div>
  </div>
));

// Loading component
const LoadingSpinner = memo(() => (
  <div className="relative h-32 rounded flex items-center justify-center cyber-loading">
    <div className="cyber-pulse bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span>Loading...</span>
      </div>
    </div>
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

  override componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
       
      // // console.error('App Error Boundary caught an error:', _error, _errorInfo);
    }
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">
              We're working to fix this issue. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

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

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
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
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network">
            <Navigation />
            <main className="relative">
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
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}