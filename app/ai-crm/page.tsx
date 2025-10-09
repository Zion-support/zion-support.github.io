'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICRMPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-grid quantum-particles">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-glitch floating">
              AI-Powered CRM
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow pulse-glow">
              Intelligent Customer Relationship Management
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer relationships with AI-powered insights, automated follow-ups, 
              and predictive analytics. Our intelligent CRM learns from every interaction to help you 
              close more deals and retain more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Demo
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">AI Lead Scoring</h3>
                <p className="text-gray-300 text-center">
                  Automatically score and prioritize leads based on AI analysis of customer behavior, 
                  engagement patterns, and conversion likelihood.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">📊</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Predictive Analytics</h3>
                <p className="text-gray-300 text-center">
                  Forecast customer lifetime value, churn risk, and sales opportunities with 
                  advanced machine learning algorithms.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Automated Follow-ups</h3>
                <p className="text-gray-300 text-center">
                  Intelligent email sequences and task automation based on customer behavior 
                  and engagement patterns.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Smart Segmentation</h3>
                <p className="text-gray-300 text-center">
                  Automatically segment customers based on AI analysis of demographics, 
                  behavior, and purchase history.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">💬</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">AI Chat Integration</h3>
                <p className="text-gray-300 text-center">
                  Seamlessly integrate with AI chatbots for instant customer support 
                  and lead qualification.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">📈</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Performance Insights</h3>
                <p className="text-gray-300 text-center">
                  Real-time dashboards and reports with AI-powered insights to optimize 
                  your sales and marketing strategies.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="quantum-hologram p-8 energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">Starter</h3>
                <div className="text-4xl font-bold text-orange-400 mb-6 text-center neon-text">$149/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ Up to 1,000 contacts</li>
                  <li>✓ Basic AI lead scoring</li>
                  <li>✓ Email automation</li>
                  <li>✓ Basic analytics</li>
                  <li>✓ Email support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center block">
                  Get Started
                </a>
              </div>

              <div className="quantum-hologram p-8 energy-pulse pulse-glow">
                <div className="text-center mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6 text-center neon-text">$299/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ Up to 10,000 contacts</li>
                  <li>✓ Advanced AI analytics</li>
                  <li>✓ Predictive analytics</li>
                  <li>✓ Custom automation</li>
                  <li>✓ Phone & email support</li>
                  <li>✓ API access</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center block">
                  Get Started
                </a>
              </div>

              <div className="quantum-hologram p-8 energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6 text-center neon-text">$599/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ Unlimited contacts</li>
                  <li>✓ Full AI suite</li>
                  <li>✓ Custom integrations</li>
                  <li>✓ Advanced reporting</li>
                  <li>✓ 24/7 priority support</li>
                  <li>✓ Custom training</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our AI CRM?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="quantum-hologram p-6 energy-pulse">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">🚀 300% Increase in Lead Conversion</h3>
                <p className="text-gray-300">
                  Our AI-powered lead scoring and automated follow-ups have helped clients 
                  increase their lead conversion rates by an average of 300%.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">⏱️ 50% Time Savings</h3>
                <p className="text-gray-300">
                  Automate repetitive tasks and focus on high-value activities. Our clients 
                  save an average of 50% of their time on CRM management.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">📊 95% Accuracy in Predictions</h3>
                <p className="text-gray-300">
                  Our AI models achieve 95% accuracy in predicting customer behavior, 
                  churn risk, and sales opportunities.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">💰 200% ROI in 6 Months</h3>
                <p className="text-gray-300">
                  Clients typically see a 200% return on investment within the first 
                  6 months of implementation.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Customer Relationships?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already using our AI-powered CRM to increase 
              sales, improve customer satisfaction, and grow their revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📧 Email Us
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AICRMPage;