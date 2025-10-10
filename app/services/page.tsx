'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive AI and IT solutions to transform your business
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI and IT services designed to meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <div className="text-6xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence solutions for enterprise clients
              </p>
              <button className="neon-button">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="text-6xl mb-6">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive IT infrastructure and support solutions
              </p>
              <button className="neon-button">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
              <p className="text-gray-300 mb-6">
                Powerful micro SaaS tools for business automation
              </p>
              <button className="neon-button">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;