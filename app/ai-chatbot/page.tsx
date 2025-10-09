'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIChatbotPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-grid quantum-particles">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-glitch floating">
              AI Chatbot Builder
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow pulse-glow">
              No-Code Intelligent Chatbots
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Create intelligent chatbots for customer support, sales, and lead generation 
              with our no-code platform. Deploy in minutes and start engaging customers 
              with AI-powered conversations.
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
                Try Free Demo
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Powerful Chatbot Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">No-Code Builder</h3>
                <p className="text-gray-300 text-center">
                  Create sophisticated chatbots with our drag-and-drop interface. 
                  No programming knowledge required.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">🧠</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">AI Training</h3>
                <p className="text-gray-300 text-center">
                  Train your chatbot on your specific data and knowledge base for 
                  accurate, contextual responses.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">💬</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Multi-Channel</h3>
                <p className="text-gray-300 text-center">
                  Deploy across websites, WhatsApp, Facebook Messenger, 
                  and other popular platforms.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">📊</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Analytics</h3>
                <p className="text-gray-300 text-center">
                  Track conversations, user satisfaction, and conversion rates 
                  with detailed analytics dashboard.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">🔄</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Live Handoff</h3>
                <p className="text-gray-300 text-center">
                  Seamlessly transfer complex conversations to human agents 
                  when needed.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Lead Generation</h3>
                <p className="text-gray-300 text-center">
                  Qualify leads automatically and capture contact information 
                  through intelligent conversations.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Chatbot Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="quantum-hologram p-8 energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6 text-center neon-text">$99/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ 1 chatbot</li>
                  <li>✓ 1,000 conversations/month</li>
                  <li>✓ Basic AI training</li>
                  <li>✓ Website integration</li>
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
                <div className="text-4xl font-bold text-cyan-400 mb-6 text-center neon-text">$199/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ 5 chatbots</li>
                  <li>✓ 10,000 conversations/month</li>
                  <li>✓ Advanced AI training</li>
                  <li>✓ Multi-channel deployment</li>
                  <li>✓ Analytics dashboard</li>
                  <li>✓ Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center block">
                  Get Started
                </a>
              </div>

              <div className="quantum-hologram p-8 energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6 text-center neon-text">$399/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ Unlimited chatbots</li>
                  <li>✓ Unlimited conversations</li>
                  <li>✓ Custom AI models</li>
                  <li>✓ API access</li>
                  <li>✓ White-label solution</li>
                  <li>✓ 24/7 support</li>
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
              Why Choose Our Chatbot Platform?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="quantum-hologram p-6 energy-pulse">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">🚀 80% Reduction in Support Tickets</h3>
                <p className="text-gray-300">
                  Our AI chatbots handle 80% of customer inquiries automatically, 
                  reducing support workload and improving response times.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">💰 200% Increase in Lead Conversion</h3>
                <p className="text-gray-300">
                  Intelligent lead qualification and nurturing through chatbots 
                  increases conversion rates by an average of 200%.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">⏱️ 24/7 Customer Support</h3>
                <p className="text-gray-300">
                  Provide round-the-clock customer support without additional 
                  staffing costs or time zone limitations.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">📈 95% Customer Satisfaction</h3>
                <p className="text-gray-300">
                  Our AI chatbots achieve 95% customer satisfaction rates with 
                  instant, accurate responses to common questions.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Automate Your Customer Conversations?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 1,000+ businesses using our AI chatbot platform to provide 
              better customer service, generate more leads, and save time.
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

export default AIChatbotPage;