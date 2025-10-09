'use client';
import React from 'react';
import { Code, Globe, Zap, Shield, Smartphone, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const WebDevelopmentPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Web Development - Zion Tech Group"
        description="Modern web development with cutting-edge technologies and performance optimization. Create fast, secure, and scalable web applications with our development expertise."
        keywords={['web development', 'frontend development', 'backend development', 'web applications', 'API development', 'web consulting']}
        canonicalUrl="https://ziontechgroup.com/web-development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Web Development
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse">
              Modern Web Applications That Scale
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our web development team creates fast, secure, and scalable web applications 
              using cutting-edge technologies and modern development practices.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
                <p className="text-gray-300">React, Vue.js, and Angular applications with modern UI/UX design</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Backend Development</h3>
                <p className="text-gray-300">Node.js, Python, and Java backend services with microservices architecture</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Performance Optimization</h3>
                <p className="text-gray-300">Fast, responsive web applications optimized for speed and user experience</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Web Application?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our web development experts help you create the perfect web solution for your business.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Web Development Consultation
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WebDevelopmentPage;