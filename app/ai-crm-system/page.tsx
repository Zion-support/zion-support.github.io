'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICRMSystemPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI-Powered CRM System">
            AI-Powered CRM System
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Intelligent Customer Relationship Management
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your customer relationships with our AI-powered CRM that learns, predicts, and automates your sales process.
          </p>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$149<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Up to 1,000 contacts</li>
                <li>AI lead scoring</li>
                <li>Email automation</li>
                <li>Basic analytics</li>
                <li>Email support</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$299<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Up to 10,000 contacts</li>
                <li>Advanced AI predictions</li>
                <li>Multi-channel automation</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$599<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Unlimited contacts</li>
                <li>Custom AI models</li>
                <li>White-label solution</li>
                <li>Advanced reporting</li>
                <li>24/7 support</li>
                <li>Dedicated account manager</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Lead Scoring</h3>
              <p className="text-gray-300">Automatically score leads based on behavior, demographics, and engagement patterns.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-300">Forecast sales, identify churn risks, and optimize your sales pipeline.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Automation</h3>
              <p className="text-gray-300">Automate follow-ups, task assignments, and workflow triggers based on AI insights.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Chat Assistant</h3>
              <p className="text-gray-300">Intelligent chatbot that handles customer inquiries and qualifies leads 24/7.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Revenue Forecasting</h3>
              <p className="text-gray-300">Accurate revenue predictions using machine learning and historical data.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-white mb-3">Seamless Integrations</h3>
              <p className="text-gray-300">Connect with 500+ tools including email, calendar, and marketing platforms.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Ready to Transform Your CRM?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a demo and see how our AI-powered CRM can revolutionize your sales process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="cyber-button">
              📞 Call: (302) 464-0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              📧 Email Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AICRMSystemPage;