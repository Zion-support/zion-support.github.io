'use client';
import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Welcome to Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive solutions designed to transform your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
                <p className="text-gray-400">
                  Advanced artificial intelligence solutions to automate and optimize your business processes.
                </p>
              </div>
              
              <div className="cyber-card">
                <Cloud className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Cloud Services</h3>
                <p className="text-gray-400">
                  Scalable cloud infrastructure and migration services for modern businesses.
                </p>
              </div>
              
              <div className="cyber-card">
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-400">
                  Comprehensive security solutions to protect your digital assets and data.
                </p>
              </div>
              
              <div className="cyber-card">
                <BarChart className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Data Analytics</h3>
                <p className="text-gray-400">
                  Transform your data into actionable insights with our advanced analytics platform.
                </p>
              </div>
              
              <div className="cyber-card">
                <Code className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Custom Development</h3>
                <p className="text-gray-400">
                  Tailored software solutions built specifically for your business needs.
                </p>
              </div>
              
              <div className="cyber-card">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Automation</h3>
                <p className="text-gray-400">
                  Streamline operations with intelligent automation and workflow optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our solutions can help you achieve your goals.
              </p>
              <button className="cyber-button">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;