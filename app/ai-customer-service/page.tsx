'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AICustomerServicePage() {
  return (
    <>
      <Helmet>
        <title>AI Customer Service Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer service solutions with 24/7 support, multilingual capabilities, and 95% customer satisfaction rates. Starting at $299/month." />
        <meta name="keywords" content="AI customer service, chatbot, virtual assistant, customer support automation, multilingual support" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-service" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              AI Customer Service Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Revolutionary 24/7 AI-powered customer support
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your customer service with intelligent AI agents that provide instant, accurate, and personalized support in 50+ languages.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🤖</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Intelligent Chatbots</h3>
                <p className="text-gray-300 text-center">
                  Advanced conversational AI that understands context, emotions, and complex queries with 95% accuracy.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🌍</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Multilingual Support</h3>
                <p className="text-gray-300 text-center">
                  Support customers in 50+ languages with real-time translation and cultural context awareness.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Analytics Dashboard</h3>
                <p className="text-gray-300 text-center">
                  Real-time insights into customer satisfaction, response times, and conversation quality.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Instant Response</h3>
                <p className="text-gray-300 text-center">
                  Sub-second response times with 99.9% uptime guarantee for uninterrupted customer support.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔗</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Easy Integration</h3>
                <p className="text-gray-300 text-center">
                  Seamless integration with existing CRM, helpdesk, and communication platforms.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Personalization</h3>
                <p className="text-gray-300 text-center">
                  AI learns from each interaction to provide increasingly personalized and relevant responses.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 1,000 conversations/month</li>
                  <li>5 languages supported</li>
                  <li>Basic analytics</li>
                  <li>Email support</li>
                  <li>Standard integrations</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center border-2 border-cyan-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$799<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 10,000 conversations/month</li>
                  <li>25 languages supported</li>
                  <li>Advanced analytics</li>
                  <li>Priority support</li>
                  <li>Custom integrations</li>
                  <li>Voice support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Unlimited conversations</li>
                  <li>50+ languages supported</li>
                  <li>Real-time analytics</li>
                  <li>24/7 dedicated support</li>
                  <li>White-label solution</li>
                  <li>Custom AI training</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our AI Customer Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">95% Customer Satisfaction</h3>
                <p className="text-gray-300">
                  Our AI solutions consistently achieve 95% customer satisfaction rates, matching or exceeding human agents.
                </p>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">70% Cost Reduction</h3>
                <p className="text-gray-300">
                  Reduce customer service costs by up to 70% while maintaining high-quality support standards.
                </p>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">24/7 Availability</h3>
                <p className="text-gray-300">
                  Never miss a customer inquiry with round-the-clock AI support that never sleeps or takes breaks.
                </p>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Instant Scalability</h3>
                <p className="text-gray-300">
                  Handle traffic spikes effortlessly with AI that scales automatically to meet demand.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Customer Service?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 500+ companies already using our AI customer service solutions to deliver exceptional support experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Get Free Demo
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}