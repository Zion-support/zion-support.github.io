'use client';
import React from 'react';
import { Book, Code, Settings, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const DocsPage: React.FC = () => {
  return (
    <>
      <SEOEnhancer
        title="Documentation - Technical Documentation | Zion Tech Group"
        description="Comprehensive technical documentation for our AI and IT solutions. Get started with our services and learn how to integrate our solutions."
        keywords={['documentation', 'technical docs', 'api docs', 'integration guide', 'user guide', 'technical support']}
        canonicalUrl="https://ziontechgroup.com/docs"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technical documentation for our AI and IT solutions. 
              Get started with our services and learn how to integrate our solutions.
            </p>
          </section>

          {/* Documentation Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Documentation Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">User Guides</h3>
                <p className="text-gray-300">Step-by-step guides for using our services</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">API Documentation</h3>
                <p className="text-gray-300">Complete API reference and integration guides</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Configuration</h3>
                <p className="text-gray-300">Configuration guides and best practices</p>
              </div>
            </div>
          </section>

          {/* Quick Start */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Quick Start</h2>
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Get Started</h3>
                  <p className="text-gray-300 text-sm">Sign up and get your API key</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Read Documentation</h3>
                  <p className="text-gray-300 text-sm">Explore our comprehensive guides</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Start Building</h3>
                  <p className="text-gray-300 text-sm">Integrate our solutions into your app</p>
                </div>
              </div>
            </div>
          </section>

          {/* Documentation Sections */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Documentation Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">AI Services</h3>
                <p className="text-gray-300 mb-4">
                  Documentation for our AI services and machine learning solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Machine Learning API
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Natural Language Processing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Computer Vision
                  </li>
                </ul>
                <a href="/api-docs" className="text-cyan-400 hover:text-cyan-300 transition-colors mt-4 inline-block">
                  View AI Documentation →
                </a>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">IT Services</h3>
                <p className="text-gray-300 mb-4">
                  Documentation for our IT infrastructure and cloud services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Cloud Migration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Database Management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Security Services
                  </li>
                </ul>
                <a href="/api-docs" className="text-cyan-400 hover:text-cyan-300 transition-colors mt-4 inline-block">
                  View IT Documentation →
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Need Help with Documentation?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our technical support team is here to help you with any documentation questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DocsPage;