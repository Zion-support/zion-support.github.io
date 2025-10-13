import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI solutions, cloud infrastructure, and IT services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, artificial intelligence, cloud infrastructure, IT services, machine learning, cybersecurity, 5G solutions, business automation" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI solutions, cloud infrastructure, and IT services. Transform your business with cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI solutions, cloud infrastructure, and IT services. Transform your business with cutting-edge technology." />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
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
      </div>
    </div>
  );
}