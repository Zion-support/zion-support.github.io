'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIEmailAssistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg particle-system">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text">
            AI Email Assistant
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-glow">
            Smart Email Management with AI-Powered Intelligence
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your email workflow with our intelligent AI assistant that handles responses, scheduling, 
            priority sorting, and automated follow-ups. Save hours every day with smart email automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
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
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Responses</h3>
              <p className="text-gray-300">
                AI-powered email responses that understand context and tone, automatically generating 
                professional replies based on your communication style.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Scheduling</h3>
              <p className="text-gray-300">
                Automatically schedule meetings, set reminders, and manage your calendar based on 
                email content and your availability preferences.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Priority Sorting</h3>
              <p className="text-gray-300">
                AI analyzes email importance and urgency, automatically organizing your inbox 
                with smart priority levels and categorization.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-4">Auto Follow-ups</h3>
              <p className="text-gray-300">
                Automated follow-up sequences for sales, customer service, and project management 
                with personalized timing and content.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Analytics Dashboard</h3>
              <p className="text-gray-300">
                Track email performance, response times, and engagement metrics with detailed 
                analytics and insights.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level encryption and security protocols ensure your email data remains 
                private and protected at all times.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 1,000 emails/month</li>
                <li>✓ Basic AI responses</li>
                <li>✓ Priority sorting</li>
                <li>✓ Email templates</li>
                <li>✓ Basic analytics</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center border-2 border-cyan-400">
              <div className="text-sm font-bold text-cyan-400 mb-2">MOST POPULAR</div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 10,000 emails/month</li>
                <li>✓ Advanced AI responses</li>
                <li>✓ Smart scheduling</li>
                <li>✓ Auto follow-ups</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Team collaboration</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Unlimited emails</li>
                <li>✓ Custom AI training</li>
                <li>✓ Advanced integrations</li>
                <li>✓ White-label options</li>
                <li>✓ Dedicated support</li>
                <li>✓ Custom analytics</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your Email Workflow?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a free demo and see how our AI Email Assistant 
            can revolutionize your business communication.
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
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              📧 Email Us
            </a>
          </div>
        </section>
      </main>
      
        <Footer />
      </div>
  );
};