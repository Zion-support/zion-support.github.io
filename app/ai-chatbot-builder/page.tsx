'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIChatbotBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 quantum-gradient">
              AI Chatbot Builder
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create intelligent chatbots for customer support and lead generation. 
              No coding required - build, deploy, and scale in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="cyber-card px-6 py-3 text-white">
                <span className="text-2xl font-bold text-cyan-400">$19</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <a 
                href="tel:+13024640950" 
                className="quantum-card px-6 py-3 text-white hover:text-cyan-400 transition-all duration-300"
              >
                📞 Call Now: +1 (302) 464-0950
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center quantum-gradient">
              Powerful Chatbot Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎨',
                  title: 'No-Code Builder',
                  description: 'Visual drag-and-drop interface to create chatbots without any coding knowledge'
                },
                {
                  icon: '📱',
                  title: 'Multi-Channel Deployment',
                  description: 'Deploy on website, Facebook, WhatsApp, Slack, and more platforms'
                },
                {
                  icon: '📊',
                  title: 'Analytics Dashboard',
                  description: 'Track conversations, user satisfaction, and performance metrics'
                },
                {
                  icon: '🧠',
                  title: 'Custom Training',
                  description: 'Train your chatbot with your specific business knowledge and FAQs'
                },
                {
                  icon: '🔄',
                  title: 'Live Handoff',
                  description: 'Seamlessly transfer complex queries to human agents when needed'
                },
                {
                  icon: '🌍',
                  title: 'Multi-Language Support',
                  description: 'Support customers in 50+ languages with automatic translation'
                }
              ].map((feature, index) => (
                <div key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center quantum-gradient">
              Perfect For Every Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">E-commerce</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Product recommendations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Order tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Return and refund assistance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Payment support
                  </li>
                </ul>
              </div>
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">SaaS & Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Technical support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Account management
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Feature explanations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Billing inquiries
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center quantum-gradient">
              Affordable Pricing
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="hologram-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Chatbot Pro</h3>
                <div className="text-5xl font-bold text-cyan-400 mb-4">$19<span className="text-xl text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    No-code builder
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Multi-channel deployment
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Analytics dashboard
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Custom training
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Live handoff
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    24/7 support
                  </li>
                </ul>
                <a 
                  href="tel:+13024640950" 
                  className="quantum-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300 inline-block"
                >
                  Build Your Chatbot
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8 quantum-gradient">
              Ready to Automate Customer Support?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI chatbots to provide 
              24/7 customer support and generate more leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+13024640950" 
                className="cyber-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300"
              >
                📞 Call: +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="quantum-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300"
              >
                ✉️ Email: kleber@ziontechgroup.com
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}