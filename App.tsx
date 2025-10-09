
import React, { Suspense, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Phone, Mail, Brain, Cloud, Zap } from 'lucide-react';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));

// Memoized components for better performance
const UnifiedContentPromotion = memo(() => (
  <section className="relative py-20 lg:py-32 overflow-hidden neural-network-bg">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
          <span className="holographic-text cyber-text">Zion Tech Group</span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
          Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
          and digital transformation services. Transform your business with cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="tel:+13024640950"
            className="cyber-button inline-flex items-center px-8 py-4 text-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            (302) 464-0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="cyber-button inline-flex items-center px-8 py-4 text-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get Quote
          </a>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">AI Models Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

const InteractiveAIROICalculator = memo(() => (
  <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          <span className="neon-text">AI ROI Calculator</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Calculate your potential AI investment returns and see how our solutions can transform your business.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="quantum-card p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Calculate Your AI ROI</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Current Monthly Revenue</label>
                  <input
                    type="number"
                    placeholder="$100,000"
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Current Monthly Costs</label>
                  <input
                    type="number"
                    placeholder="$60,000"
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">AI Investment Level</label>
                  <select className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400">
                    <option>Basic ($5,000/month)</option>
                    <option>Professional ($15,000/month)</option>
                    <option>Enterprise ($35,000/month)</option>
                  </select>
                </div>
                <button className="w-full cyber-button py-3">
                  Calculate ROI
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Projected Results</h3>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-2">+300%</div>
                  <div className="text-gray-300">Revenue Increase</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">-70%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">+90%</div>
                  <div className="text-gray-300">Efficiency Gains</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">6 months</div>
                  <div className="text-gray-300">Payback Period</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

const ContentShowcase = memo(() => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          <span className="neon-text">Our Services</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive AI and IT solutions designed to transform your business operations and drive unprecedented growth.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="quantum-card p-6">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">AI Services</h3>
          <p className="text-gray-300 mb-4">Comprehensive AI solutions including automation, analytics, and machine learning platforms.</p>
          <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Learn More →
          </a>
        </div>
        
        <div className="quantum-card p-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
            <Cloud className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">IT Services</h3>
          <p className="text-gray-300 mb-4">Complete IT infrastructure, cybersecurity, and managed services for modern businesses.</p>
          <a href="/it-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Learn More →
          </a>
        </div>
        
        <div className="quantum-card p-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Micro SAAS</h3>
          <p className="text-gray-300 mb-4">AI-powered micro SAAS tools for productivity, marketing, analytics, and business automation.</p>
          <a href="/micro-saas" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Learn More →
          </a>
        </div>
      </div>
    </div>
  </section>
));

const InteractiveContentShowcase2026 = memo(() => (
  <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
        Ready to Transform Your Business?
      </h2>
      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Join 500+ companies already using our AI and IT solutions to achieve unprecedented growth and efficiency.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="cyber-button inline-flex items-center px-8 py-4 text-lg"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call (302) 464-0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="cyber-button inline-flex items-center px-8 py-4 text-lg"
        >
          <Mail className="w-5 h-5 mr-2" />
          Email Us
        </a>
      </div>
    </div>
  </section>
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
          <div className="min-h-screen bg-slate-900 cyber-grid">
            <Navigation />
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
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}