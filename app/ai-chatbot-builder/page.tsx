'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIChatbotBuilderPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Chatbot Builder">
            AI Chatbot Builder
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            No-Code AI Chatbot Creation
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Build intelligent chatbots without coding. Create conversational AI that understands context, learns from interactions, and provides exceptional customer service.
          </p>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-4">$49<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>1 chatbot</li>
                <li>1,000 conversations/month</li>
                <li>Basic AI responses</li>
                <li>Website integration</li>
                <li>Email support</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center border-2 border-blue-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-4">$149<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>5 chatbots</li>
                <li>10,000 conversations/month</li>
                <li>Advanced AI training</li>
                <li>Multi-platform integration</li>
                <li>Priority support</li>
                <li>Analytics dashboard</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-4">$299<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Unlimited chatbots</li>
                <li>Unlimited conversations</li>
                <li>Custom AI models</li>
                <li>White-label solution</li>
                <li>24/7 support</li>
                <li>Dedicated account manager</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Advanced Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">No-Code Builder</h3>
              <p className="text-gray-300">Create sophisticated chatbots using our intuitive drag-and-drop interface.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Natural Language Processing</h3>
              <p className="text-gray-300">Understand user intent and context with advanced NLP capabilities.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-white mb-3">Knowledge Base Integration</h3>
              <p className="text-gray-300">Connect your chatbot to existing documentation and knowledge bases.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Channel Support</h3>
              <p className="text-gray-300">Deploy chatbots across websites, mobile apps, and messaging platforms.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Analytics</h3>
              <p className="text-gray-300">Track performance, user satisfaction, and conversation insights.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-white mb-3">API Integration</h3>
              <p className="text-gray-300">Connect with your existing systems and third-party applications.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Build Your AI Chatbot Today</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Start building intelligent chatbots that provide 24/7 customer support and drive engagement.
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

export default AIChatbotBuilderPage;