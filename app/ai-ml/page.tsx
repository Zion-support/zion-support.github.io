'use client';
import React from 'react';
import { Brain, TrendingUp, BarChart, Database, Zap, Shield, Target, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIMLPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Custom machine learning models for predictive analytics, data science, and AI-driven decision making. Expert ML solutions for enterprise applications."
        keywords={['machine learning', 'ML solutions', 'predictive analytics', 'data science', 'AI models', 'ML consulting']}
        canonicalUrl="https://ziontechgroup.com/ai-ml"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-purple-400 mb-8 font-medium">
              Custom ML Models for Enterprise Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your data into actionable insights with our advanced machine learning solutions. 
              From predictive analytics to automated decision-making, we build custom ML models that drive business growth.
            </p>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our ML Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300">Forecast trends and outcomes with advanced statistical models</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <BarChart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Data Science</h3>
                <p className="text-gray-300">Extract insights from complex datasets using cutting-edge algorithms</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Automation</h3>
                <p className="text-gray-300">Automate decision-making processes with intelligent ML systems</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Security</h3>
                <p className="text-gray-300">Secure ML models with enterprise-grade security protocols</p>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-purple-400 mb-4">$1,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-300">Basic ML model development</li>
                  <li className="text-gray-300">Data preprocessing</li>
                  <li className="text-gray-300">Model training & validation</li>
                  <li className="text-gray-300">Basic analytics dashboard</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3">Get Started</a>
              </div>
              <div className="cyber-card p-6 text-center ring-2 ring-purple-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-purple-400 mb-4">$3,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-300">Advanced ML algorithms</li>
                  <li className="text-gray-300">Real-time predictions</li>
                  <li className="text-gray-300">Custom model optimization</li>
                  <li className="text-gray-300">API integration</li>
                  <li className="text-gray-300">24/7 monitoring</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3">Get Started</a>
              </div>
              <div className="cyber-card p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-4">$7,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-300">Custom ML platform</li>
                  <li className="text-gray-300">Multi-model ensemble</li>
                  <li className="text-gray-300">Advanced security</li>
                  <li className="text-gray-300">Dedicated support</li>
                  <li className="text-gray-300">Custom integrations</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3">Get Started</a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Harness the Power of Machine Learning?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our ML experts today to discuss how machine learning can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                >
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

export default AIMLPage;