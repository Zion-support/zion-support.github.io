
import React, { memo, useMemo, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const Navigation = React.lazy(() => import('./app/components/Navigation'));
const Footer = React.lazy(() => import('./app/components/Footer'));

// Memoized components for better performance
const UnifiedContentPromotion = memo(() => (
  <div className="relative py-20 px-4 overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
    <div className="absolute inset-0 cyber-grid"></div>
    
    <div className="container mx-auto text-center relative z-10">
      <h2 className="text-5xl md:text-7xl font-bold mb-6 holographic-text cyber-text animate-pulse">
        Latest AI Innovations
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
        Discover cutting-edge AI solutions that transform your business with unprecedented efficiency and intelligence
      </p>
      
      {/* Animated Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="quantum-card p-6 energy-pulse">
          <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
          <div className="text-gray-300">Average ROI</div>
        </div>
        <div className="quantum-card p-6 energy-pulse">
          <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
          <div className="text-gray-300">Uptime Guarantee</div>
        </div>
        <div className="quantum-card p-6 energy-pulse">
          <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
          <div className="text-gray-300">AI Services</div>
        </div>
      </div>
    </div>
  </div>
));

const InteractiveAIROICalculator = memo(() => (
  <div className="relative py-20 px-4 neural-network-bg">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text cyber-text">
        AI ROI Calculator
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Calculate your potential AI investment returns with our advanced predictive analytics
      </p>
      
      {/* Interactive Calculator */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="quantum-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Input Your Data</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Current Monthly Revenue</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  placeholder="$100,000"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Team Size</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  placeholder="50"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Industry</label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400">
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Manufacturing</option>
                  <option>Retail</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="quantum-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Projected Results</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Expected ROI</span>
                <span className="text-3xl font-bold text-green-400">300%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Cost Savings</span>
                <span className="text-3xl font-bold text-cyan-400">$2.4M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Efficiency Gain</span>
                <span className="text-3xl font-bold text-purple-400">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Payback Period</span>
                <span className="text-3xl font-bold text-pink-400">6 months</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <button className="cyber-button px-8 py-4 text-lg">
            Calculate My ROI
          </button>
        </div>
      </div>
    </div>
  </div>
));

const ContentShowcase = memo(() => (
  <div className="relative py-20 px-4 particle-field">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text cyber-text">
        Featured Content
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Explore our latest insights, case studies, and breakthrough innovations
      </p>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="quantum-card p-6 hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">AI Transformation Guide</h3>
          <p className="text-gray-300 mb-4">Complete roadmap for implementing AI in your organization</p>
          <div className="text-cyan-400 font-semibold">Read More →</div>
        </div>
        
        <div className="quantum-card p-6 hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">ROI Case Studies</h3>
          <p className="text-gray-300 mb-4">Real results from our AI implementations</p>
          <div className="text-cyan-400 font-semibold">Read More →</div>
        </div>
        
        <div className="quantum-card p-6 hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl">🔮</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Future Tech Trends</h3>
          <p className="text-gray-300 mb-4">What's next in AI and technology</p>
          <div className="text-cyan-400 font-semibold">Read More →</div>
        </div>
      </div>
    </div>
  </div>
));

const InteractiveContentShowcase2026 = memo(() => (
  <div className="relative py-20 px-4 matrix-rain">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 holographic-text cyber-text">
        2026 Innovation Showcase
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Discover the future of technology with our cutting-edge innovations and breakthrough solutions
      </p>
      
      {/* Innovation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="quantum-card p-6 cyber-scan-effect">
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="text-lg font-bold text-white mb-2">Quantum AI</h3>
          <p className="text-gray-300 text-sm">Next-generation quantum computing for AI</p>
        </div>
        
        <div className="quantum-card p-6 cyber-scan-effect">
          <div className="text-4xl mb-4">🌐</div>
          <h3 className="text-lg font-bold text-white mb-2">Neural Networks</h3>
          <p className="text-gray-300 text-sm">Advanced neural network architectures</p>
        </div>
        
        <div className="quantum-card p-6 cyber-scan-effect">
          <div className="text-4xl mb-4">🔮</div>
          <h3 className="text-lg font-bold text-white mb-2">Predictive Analytics</h3>
          <p className="text-gray-300 text-sm">AI-powered future prediction models</p>
        </div>
        
        <div className="quantum-card p-6 cyber-scan-effect">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-lg font-bold text-white mb-2">Edge Computing</h3>
          <p className="text-gray-300 text-sm">Ultra-fast edge AI processing</p>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-16">
        <div className="quantum-card p-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-4">Ready for the Future?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of forward-thinking companies already transforming with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
));

// Loading component
const LoadingSpinner = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
      <div className="text-2xl font-bold text-white neon-text cyber-text">Loading...</div>
      <div className="text-gray-400 mt-2">Initializing AI systems</div>
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
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
            <Suspense fallback={<LoadingSpinner />}>
              <Navigation />
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
              <Footer />
            </Suspense>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}