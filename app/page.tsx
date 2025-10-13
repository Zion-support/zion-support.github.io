import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users, Zap, Globe, Lock } from 'lucide-react';
import SEOOptimizer from './components/SEOOptimizer';

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI solutions, cloud infrastructure, and IT services. Transform your business with cutting-edge technology.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/logo.png",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/zion-tech-group"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "offers": {
      "@type": "Offer",
      "name": "AI and IT Solutions",
      "description": "Comprehensive AI solutions, cloud infrastructure, and IT services for modern businesses",
      "category": "Technology Services"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI solutions, cloud infrastructure, and IT services. Transform your business with cutting-edge technology."
        keywords={[
          'AI solutions',
          'artificial intelligence',
          'cloud infrastructure',
          'IT services',
          'machine learning',
          'cybersecurity',
          '5G solutions',
          'business automation',
          'digital transformation',
          'enterprise solutions'
        ]}
        canonicalUrl="https://ziontechgroup.com"
        ogImage="https://ziontechgroup.com/images/og-image.jpg"
        structuredData={structuredData}
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are a cutting-edge technology company specializing in AI solutions, 
            cloud infrastructure, and innovative IT services that transform businesses.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
            aria-label="Get started with Zion Tech Group services"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16" role="region" aria-label="Our Services">
          <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 focus-within:ring-4 focus-within:ring-blue-300 focus-within:ring-opacity-50">
            <Brain className="w-12 h-12 text-blue-400 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-white mb-2">AI Solutions</h2>
            <p className="text-gray-300">Advanced artificial intelligence and machine learning solutions</p>
          </article>
          <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 focus-within:ring-4 focus-within:ring-green-300 focus-within:ring-opacity-50">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-white mb-2">Cybersecurity</h2>
            <p className="text-gray-300">Enterprise-grade security solutions and consulting</p>
          </article>
          <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 focus-within:ring-4 focus-within:ring-purple-300 focus-within:ring-opacity-50">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-white mb-2">IT Services</h2>
            <p className="text-gray-300">Comprehensive IT infrastructure and support services</p>
          </article>
        </div>

        {/* Additional Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16" role="region" aria-label="Additional Features">
          <article className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group">
            <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white mb-2">5G Solutions</h3>
            <p className="text-gray-300 text-sm">Next-generation connectivity and edge computing</p>
          </article>
          <article className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group">
            <Globe className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white mb-2">Cloud Infrastructure</h3>
            <p className="text-gray-300 text-sm">Scalable and secure cloud solutions</p>
          </article>
          <article className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group">
            <Lock className="w-10 h-10 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white mb-2">Data Protection</h3>
            <p className="text-gray-300 text-sm">Advanced data encryption and privacy solutions</p>
          </article>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust Zion Tech Group for their technology needs. 
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 focus:ring-opacity-50"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}