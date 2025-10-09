'use client';
import React from 'react';
import { CheckCircle, MessageSquare, Users, Zap, Phone, Mail, MapPin, Star, Award, Clock, Globe, Smartphone, Laptop, Brain, Shield, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AILiveChatPage: React.FC = () => {
  const features = [
    'AI-powered instant responses with 99% accuracy',
    'Multi-language support (100+ languages)',
    'Real-time sentiment analysis and mood detection',
    'Intelligent conversation routing to human agents',
    'Advanced chatbot training with machine learning',
    'Seamless integration with all major platforms',
    'Customizable chat widgets and branding',
    'Advanced analytics and conversation insights',
    'Voice and video chat capabilities',
    '24/7 automated customer support'
  ];

  const benefits = [
    'Increase customer satisfaction by 85%',
    'Reduce response time by 90%',
    'Handle 10x more conversations simultaneously',
    'Cut support costs by 70%',
    'Improve conversion rates by 200%',
    'Provide instant support in any language',
    'Scale customer service without scaling team',
    'Capture and qualify leads automatically'
  ];

  const useCases = [
    {
      title: 'E-commerce Support',
      description: 'AI-powered shopping assistance and order support for online stores',
      icon: '🛒',
      features: ['Product recommendations', 'Order tracking', 'Return processing', 'Payment assistance']
    },
    {
      title: 'SaaS Customer Success',
      description: 'Intelligent onboarding and technical support for software users',
      icon: '💻',
      features: ['Feature explanations', 'Troubleshooting', 'Account management', 'Billing support']
    },
    {
      title: 'Healthcare Assistance',
      description: 'Compliant patient support and appointment scheduling',
      icon: '🏥',
      features: ['Appointment booking', 'FAQ responses', 'Insurance queries', 'Prescription help']
    },
    {
      title: 'Financial Services',
      description: 'Secure banking and investment support with compliance',
      icon: '🏦',
      features: ['Account inquiries', 'Transaction support', 'Investment advice', 'Fraud prevention']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        '1 website'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Multiple websites',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'Dedicated support',
        'White-label solutions',
        'Advanced reporting',
        'Custom deployment',
        'SLA guarantee',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const integrations = [
    'WordPress', 'Shopify', 'WooCommerce', 'Magento', 'Salesforce', 'HubSpot',
    'Zendesk', 'Intercom', 'Slack', 'Microsoft Teams', 'Facebook', 'Instagram',
    'WhatsApp', 'Telegram', 'Discord', 'Custom APIs'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>AI Customer Support</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Live Chat
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The most intelligent live chat solution powered by advanced AI. Provide instant, accurate, and personalized 
            customer support that works 24/7 and scales with your business.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Faster Response</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-gray-300">More Conversations</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Always Available</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Advanced AI Chat Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our AI Live Chat?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                  <p className="text-gray-300 text-sm">
                    Transform your customer support with AI that understands context and provides human-like responses.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Perfect for Every Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-blue-400 flex items-center">
                      <CheckCircle className="w-3 h-3 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Seamless Integrations
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <span key={index} className="cyber-card px-4 py-2 text-sm">
                {integration}
              </span>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Live Chat Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have revolutionized their customer service with our AI-powered live chat solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Live Chat Inquiry"
                className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AILiveChatPage;
