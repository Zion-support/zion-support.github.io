'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, Search } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions for businesses worldwide. Transform your operations with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, artificial intelligence, technology consulting, business automation" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Advanced AI & IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence and innovative technology solutions. 
              We help companies worldwide achieve digital transformation and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to accelerate your business growth and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn more →
                </Link>
              </div>
              
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <Cloud className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud solutions and infrastructure management to support your growing business needs.
                </p>
                <Link to="/cloud-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn more →
                </Link>
              </div>
              
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive security solutions to protect your data and systems from evolving threats.
                </p>
                <Link to="/security" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have already transformed their operations with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
