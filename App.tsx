
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
  <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
    <div className="absolute inset-0 cyber-grid"></div>
    <div className="absolute inset-0 neural-network-bg"></div>
    
    <div className="container mx-auto px-4 relative z-10 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-6 py-3 mb-8">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium">Zion Tech Group - AI & IT Solutions</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
          Transform Your Business with
          <span className="block holographic-text cyber-text neon-pulse">AI-Powered Solutions</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
          Leading provider of AI-powered enterprise solutions and digital transformation services. 
          Achieve 300% ROI with our cutting-edge AI technology and comprehensive IT services.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-3 bg-cyan-500/20 px-6 py-3 rounded-lg border border-cyan-400/30">
            <Brain className="w-6 h-6 text-cyan-400" />
            <span className="text-white font-medium text-lg">300% Average ROI</span>
          </div>
          <div className="flex items-center space-x-3 bg-purple-500/20 px-6 py-3 rounded-lg border border-purple-400/30">
            <Shield className="w-6 h-6 text-purple-400" />
            <span className="text-white font-medium text-lg">Enterprise Security</span>
          </div>
          <div className="flex items-center space-x-3 bg-green-500/20 px-6 py-3 rounded-lg border border-green-400/30">
            <Award className="w-6 h-6 text-green-400" />
            <span className="text-white font-medium text-lg">Award Winning</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/contact"
            className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/consultation"
            className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Free Consultation
          </a>
        </div>
        
        <div className="mt-16 text-sm text-gray-300">
          <p>📞 Call us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a></p>
          <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
          <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </div>
  </div>
));

const InteractiveAIROICalculator = memo(() => (
  <div className="py-20 bg-slate-800/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
          AI ROI Calculator
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Calculate your potential AI investment returns with our intelligent ROI calculator. 
          See how our solutions can transform your business metrics.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">300%</h3>
            <p className="text-cyan-400 font-semibold">Average ROI</p>
            <p className="text-gray-300 text-sm mt-2">Within 6 months of implementation</p>
          </div>
          
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">70%</h3>
            <p className="text-green-400 font-semibold">Cost Reduction</p>
            <p className="text-gray-300 text-sm mt-2">Through process optimization</p>
          </div>
          
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">90%</h3>
            <p className="text-purple-400 font-semibold">Efficiency Gains</p>
            <p className="text-gray-300 text-sm mt-2">With intelligent automation</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
          >
            <span>Calculate Your ROI</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </div>
));

const ContentShowcase = memo(() => (
  <div className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
          Featured Solutions
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our comprehensive suite of AI and IT solutions designed to transform your business
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">AI Services</h3>
          <p className="text-gray-300 mb-4">Comprehensive AI solutions from automation to analytics</p>
          <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
            Learn More →
          </a>
        </div>
        
        <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">IT Services</h3>
          <p className="text-gray-300 mb-4">Complete IT infrastructure and support solutions</p>
          <a href="/it-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
            Learn More →
          </a>
        </div>
        
        <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Micro SAAS</h3>
          <p className="text-gray-300 mb-4">AI-powered micro SAAS applications for modern businesses</p>
          <a href="/micro-saas" className="text-cyan-400 hover:text-cyan-300 font-medium">
            Learn More →
          </a>
        </div>
      </div>
    </div>
  </div>
));

const InteractiveContentShowcase2026 = memo(() => (
  <div className="py-20 bg-slate-800/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
          2026 Innovation Showcase
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the latest trends and innovations that will shape the future of business technology
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-lg p-8 border border-cyan-400/30">
          <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing Solutions</h3>
          <p className="text-gray-300 mb-6">
            Next-generation quantum computing solutions for complex optimization and simulation problems. 
            Achieve unprecedented computational power for your most challenging business problems.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-cyan-400 font-semibold">Starting at $20,000/month</span>
            <a href="/ai-quantum-computing" className="text-cyan-400 hover:text-cyan-300 font-medium">
              Explore →
            </a>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-lg p-8 border border-purple-400/30">
          <h3 className="text-2xl font-bold text-white mb-4">Autonomous Systems</h3>
          <p className="text-gray-300 mb-6">
            Self-managing systems that adapt and optimize themselves. Reduce manual intervention 
            and achieve true autonomous operations with our advanced AI systems.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-purple-400 font-semibold">Custom Pricing</span>
            <a href="/autonomous-systems" className="text-purple-400 hover:text-purple-300 font-medium">
              Explore →
            </a>
          </div>
        </div>
      </div>
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
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}