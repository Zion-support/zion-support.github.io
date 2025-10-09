'use client';
import React from 'react';
import { Code, Globe, Zap, Palette, Shield, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const WebDevelopmentPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, API integration, and performance optimization. Modern web applications with cutting-edge technologies."
        keywords={['web development', 'frontend development', 'backend development', 'API integration', 'web applications', 'performance optimization']}
        canonicalUrl="https://ziontechgroup.com/web-development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Web Development
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Modern Web Applications
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Build powerful web applications with our expert development team. 
              From frontend to backend, we create modern, scalable, and high-performance web solutions.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Development Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
                <p className="text-gray-300">React, Vue.js, and modern frontend frameworks</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Backend Development</h3>
                <p className="text-gray-300">Node.js, Python, and scalable backend systems</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">API Integration</h3>
                <p className="text-gray-300">RESTful APIs and third-party integrations</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Web Application?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our web development experts today to discuss your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Call +1 302 464 0950
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

export default WebDevelopmentPage;