import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the perfect plan for your business needs with flexible options and no hidden fees." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud pricing, AI tools pricing, business solutions pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
        <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
        
        {/* Quantum Particles */}
        <div className="quantum-particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="quantum-particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
        
        {/* Scan Lines */}
        <div className="scan-lines"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 holographic neon-text">Transparent Pricing</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services 
              with no hidden fees or long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-sm text-gray-300">
              <div className="flex items-center justify-center">
                <span className="text-cyan-400 mr-2">📞</span>
                <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">+1 (302) 464-0950</a>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-cyan-400 mr-2">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-cyan-400 mr-2">📍</span>
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
          
          {/* Main Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="holographic-card p-8 rounded-2xl shadow-xl border border-cyan-500/30 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4 neon-text">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">$299<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Perfect for small businesses getting started with AI</p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 3 AI tools
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic AI consultation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Monthly reports
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic analytics
                </li>
              </ul>
              <Link to="/contact" className="w-full cyber-button text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Get Started
              </Link>
            </div>
            
            <div className="holographic-card p-8 rounded-2xl shadow-xl border-2 border-cyan-500 relative hover:scale-105 transition-all duration-300 neon-border-animated">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold neon-glow">Most Popular</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 neon-text">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">$799<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Ideal for growing businesses with advanced AI needs</p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 10 AI tools
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced AI solutions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Weekly reports
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  API access
                </li>
              </ul>
              <Link to="/contact" className="w-full cyber-button text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Get Started
              </Link>
            </div>
            
            <div className="holographic-card p-8 rounded-2xl shadow-lg border border-purple-500/30 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4 neon-text">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2 neon-text">Custom<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Tailored solutions for large organizations</p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited AI tools
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full AI transformation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time monitoring
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated team
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  White-label solutions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SLA guarantee
                </li>
              </ul>
              <Link to="/contact" className="w-full cyber-button text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Contact Sales
              </Link>
            </div>
          </div>

          {/* AI Services Pricing */}
          <div className="holographic-card rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">AI Services Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="holographic-card border border-cyan-500/30 rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2 neon-text">AI Chatbot Builder Pro</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2 neon-text">$199<span className="text-sm text-gray-400">/month</span></div>
                <p className="text-gray-300 text-sm">Advanced conversational AI with natural language understanding</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Document Analyzer Pro</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$149<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Intelligent document processing and analysis</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Sales Predictor Pro</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$299<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Advanced sales forecasting and lead scoring</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Financial Forecaster Pro</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$399<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Comprehensive financial forecasting and risk assessment</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Customer Sentiment Tracker</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$199<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Real-time customer sentiment analysis</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Meeting Transcriber Pro</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$99<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Advanced meeting transcription and analysis</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Customer Churn Predictor</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$249<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Predict and prevent customer churn</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Content Moderator Pro</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$199<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Automated content moderation with AI</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Task Scheduler Pro</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$79<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Intelligent task scheduling and optimization</p>
              </div>
            </div>
          </div>

          {/* Micro SaaS Pricing */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Micro SaaS Solutions Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Task Manager Pro</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$29<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">AI-powered task management and team collaboration</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Expense Tracker Pro</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$19<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">AI-powered expense tracking and financial management</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lead Generator Pro</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$99<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">AI-powered lead generation and qualification</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Tracker Pro</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$39<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Comprehensive time tracking and productivity analytics</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Invoice Generator Pro</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$29<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Professional invoice generation and management</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CRM Pro</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$49<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">AI-powered customer relationship management</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard Pro</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$79<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Comprehensive business analytics and reporting</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Form Builder Pro</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$39<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Advanced form builder with AI optimization</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Survey Builder Pro</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$49<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Professional survey creation and analysis</p>
              </div>
            </div>
          </div>

          {/* IT Solutions Pricing */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">IT Solutions Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">$1,000<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Scalable cloud solutions and infrastructure management</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">DevOps Automation</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">$2,000<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Comprehensive DevOps solutions with CI/CD pipelines</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">API Development</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">$3,000<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Comprehensive API development and integration services</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Engineering</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">$4,000<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Comprehensive data engineering and ETL solutions</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Blockchain Solutions</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">$8,000<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Comprehensive blockchain and Web3 development</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT Solutions</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">$5,000<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Comprehensive IoT and edge computing solutions</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Audit</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">$3,000<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Comprehensive security assessment and penetration testing</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Development</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">$3,000<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Modern web development with responsive design</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Development</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">$5,000<span className="text-sm text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Native and cross-platform mobile app development</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is there a free trial?</h3>
                <p className="text-gray-600">Yes, we offer a 14-day free trial for all our plans with no credit card required.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-600">Yes, we offer custom pricing for enterprise clients with specific requirements.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Choose the perfect plan for your business and start transforming with AI today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Sales
              </Link>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;