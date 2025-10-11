'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Brain, Zap, Shield, Cloud, ArrowRight, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta name="keywords" content="AI solutions, IT services, quantum computing, digital transformation, enterprise software, automation, machine learning" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16 quantum-field neural-network-animated">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden cyber-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 quantum-energy-field"></div>
          <div className="absolute inset-0 cyber-grid-glow"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text neon-glow-advanced">
                Transform Your Business with
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cyber-text-glitch"> AI & IT Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. 
                Transform your business with cutting-edge technology and innovative solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 futuristic-btn cyber-border"
                >
                  Get Started Today
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cyber-border"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 data-stream">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6 holographic-text">Our Services</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI and IT solutions designed to accelerate your digital transformation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* AI Services */}
                <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 group border border-gray-700 hover:border-cyan-500/50 holographic-card-enhanced cyber-pulse">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform quantum-glitch">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text-enhanced">AI Services</h3>
                  <p className="text-gray-300 mb-6">
                    Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Machine Learning Models
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Natural Language Processing
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Computer Vision
                    </li>
                  </ul>
                  <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium neon-glow-advanced">
                    Learn More →
                  </a>
                </div>

                {/* IT Services */}
                <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 group border border-gray-700 hover:border-purple-500/50 holographic-card-enhanced cyber-pulse">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform quantum-glitch">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text-enhanced">IT Services</h3>
                  <p className="text-gray-300 mb-6">
                    Complete technology infrastructure solutions including cloud migration, cybersecurity, and custom software development.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Cloud Infrastructure
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Cybersecurity Solutions
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Custom Software Development
                    </li>
                  </ul>
                  <a href="/it-services" className="text-purple-400 hover:text-purple-300 transition-colors font-medium neon-glow-advanced">
                    Learn More →
                  </a>
                </div>

                {/* Micro SAAS */}
                <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 group border border-gray-700 hover:border-green-500/50 holographic-card-enhanced cyber-pulse">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform quantum-glitch">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text-enhanced">Micro SAAS</h3>
                  <p className="text-gray-300 mb-6">
                    Ready-to-use business tools with AI automation and intelligent features for immediate productivity gains.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      AI Analytics Dashboard
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Automated Workflows
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Business Intelligence
                    </li>
                  </ul>
                  <a href="/micro-saas" className="text-green-400 hover:text-green-300 transition-colors font-medium neon-glow-advanced">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our AI and IT solutions today and experience the power of cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default HomePage;
