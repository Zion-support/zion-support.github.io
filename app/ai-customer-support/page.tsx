'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, MessageCircle, Clock, Users, Shield } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    { icon: MessageCircle, title: 'AI Chatbots', description: '24/7 intelligent customer support' },
    { icon: Clock, title: 'Instant Response', description: 'Immediate answers to customer queries' },
    { icon: Users, title: 'Multi-channel', description: 'Support across all platforms' },
    { icon: Shield, title: 'Secure', description: 'Bank-level security for all interactions' }
  ];

  const plans = [
    {
      name: 'Basic',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: ['AI Chatbot', 'Email Support', 'Basic Analytics'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: ['Advanced AI', 'Multi-channel Support', 'Advanced Analytics', 'Priority Support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: ['Custom AI', '24/7 Support', 'Custom Integrations', 'Dedicated Manager'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Customer Support
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionize your customer service with AI-powered support solutions that provide instant, intelligent responses 24/7.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 relative ${
                plan.popular ? 'border-2 border-cyan-400' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full cyber-button py-3">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AICustomerSupportPage;
