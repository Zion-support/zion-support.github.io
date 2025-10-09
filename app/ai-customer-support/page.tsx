'use client';
import React from 'react';
import { CheckCircle, Star, MessageCircle, Clock, Users, Shield } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    '24/7 AI-powered customer support',
    'Multi-channel integration (email, chat, phone)',
    'Natural language processing',
    'Sentiment analysis and mood detection',
    'Automated ticket routing',
    'Knowledge base integration',
    'Escalation to human agents when needed',
    'Real-time analytics and insights',
    'Custom training on your data',
    'Unlimited conversations'
  ];

  const benefits = [
    {
      title: 'Instant Response',
      description: 'Customers get immediate answers 24/7',
      icon: '⚡'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce support costs by up to 80%',
      icon: '💰'
    },
    {
      title: 'Improved Satisfaction',
      description: 'Higher customer satisfaction scores',
      icon: '😊'
    },
    {
      title: 'Scalable Support',
      description: 'Handle unlimited customer inquiries',
      icon: '📈'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Customer Support
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Revolutionary AI-powered customer support that never sleeps
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Transform your customer service with intelligent AI chatbots that provide instant, 
            accurate responses and seamless escalation to human agents when needed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg">
              Start Free Trial
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Core Capabilities</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Benefits</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-3xl mr-4">{benefit.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          
          <div className="cyber-card hologram-card p-8">
            <div className="text-4xl font-bold text-cyan-400 mb-4">Starting at $199/month</div>
            <p className="text-gray-300 mb-8">
              Includes unlimited conversations, multi-channel support, and 24/7 availability
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Unlimited</div>
                <div className="text-gray-400">Conversations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Multi-Channel</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
            
            <button className="cyber-button px-8 py-4 text-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI customer support solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AICustomerSupportPage;