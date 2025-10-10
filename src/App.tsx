import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/futuristic.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { PageLoader } from './components/EnhancedLoadingStates';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import SEOHead from './components/EnhancedSEOHead';
import SkipLink from './components/SkipLink';

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

// Simple HomePage component
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" aria-labelledby="hero-heading">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI-Powered Enterprise Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI technology. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"
              aria-label="Get started with Zion Tech Group solutions"
            >
              Get Started Today
            </button>
            <button 
              className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              aria-label="Watch a demo of our AI solutions"
            >
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">90%</div>
              <div className="text-gray-400">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive AI and IT solutions for modern enterprises</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3">AI Solutions</h3>
                <p className="text-gray-300 mb-4">Advanced AI-powered solutions for enterprise automation and optimization.</p>
                <div className="text-2xl font-bold text-cyan-400 mb-2">Custom Pricing</div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">IT Services</h3>
                <p className="text-gray-300 mb-4">Comprehensive IT infrastructure and support services.</p>
                <div className="text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
                <p className="text-gray-300 mb-4">Complete digital transformation solutions for modern businesses.</p>
                <div className="text-2xl font-bold text-green-400 mb-2">Custom Pricing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how our AI and IT solutions can revolutionize your operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-cyan-400 font-medium">
                Middletown, DE
              </p>
            </div>
          </div>
          
          <button 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            aria-label="Get a free consultation with our AI experts"
          >
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./about/page'));
const ContactPage = React.lazy(() => import('./contact/page'));
const PricingPage = React.lazy(() => import('./pricing/page'));
const AIServicesPage = React.lazy(() => import('./ai-services/page'));
const ITServicesPage = React.lazy(() => import('./it-services/page'));
const MicroSaasPage = React.lazy(() => import('./micro-saas/page'));
const BlogPage = React.lazy(() => import('./blog/page'));
const App: React.FC = memo(() => {
  return (
    <EnhancedErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Router>
          <div className="min-h-screen bg-white overflow-x-hidden">
            <SkipLink to="#main-content">Skip to main content</SkipLink>
            <Navigation />
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
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </EnhancedErrorBoundary>
  );
});

export default App;