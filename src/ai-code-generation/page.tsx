'use client';
import React from 'react';
import { Code, Zap, Shield, Target, CheckCircle, Star, Phone, Mail, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICodeGenerationPage: React.FC = () => {
  const features = [
    'Automated Code Review',
    'Security Vulnerability Detection',
    'Performance Optimization',
    'Git Integration',
    'Code Quality Metrics',
    'Team Collaboration'
  ];

  const benefits = [
    '70% fewer bugs',
    '15+ hours saved/week',
    'Improved code quality',
    'Faster deployment'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Code Review Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced automated code analysis with AI-powered bug detection and optimization. 
            Improve code quality and reduce bugs with intelligent code review.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Get Started
            </a>
            <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              <Phone className="w-5 h-5 inline mr-2" />
              +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="quantum-card p-6 text-center">
                <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Pricing
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">AI Code Review Assistant</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$179/month</div>
              <p className="text-gray-300 mb-6">
                Advanced automated code analysis with AI-powered bug detection and optimization
              </p>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Get Started Today
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Improve Your Code Quality?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how AI Code Review can help your development team write better code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300">
              <Mail className="w-5 h-5 inline mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AICodeGenerationPage;