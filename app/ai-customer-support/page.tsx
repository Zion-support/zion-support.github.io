'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { MessageCircle, Headphones, Bot, Zap, Shield, BarChart, Clock, Users, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: '24/7 AI Chat Support',
      description: 'Intelligent chatbots that provide instant responses to customer queries with natural language understanding.',
      benefits: ['Instant Response', 'Multi-language Support', 'Context Awareness', 'Escalation to Humans']
    },
    {
      icon: Headphones,
      title: 'Voice Support Integration',
      description: 'AI-powered voice assistants that handle phone calls and provide personalized customer support.',
      benefits: ['Voice Recognition', 'Natural Conversations', 'Call Routing', 'Sentiment Analysis']
    },
    {
      icon: Bot,
      title: 'Smart Ticket Management',
      description: 'Automated ticket classification, prioritization, and routing based on AI analysis of customer issues.',
      benefits: ['Auto-classification', 'Priority Scoring', 'Smart Routing', 'Resolution Prediction']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics dashboard that provides insights into customer satisfaction and support performance.',
      benefits: ['Real-time Metrics', 'Customer Insights', 'Performance Tracking', 'Trend Analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small businesses',
      features: ['Up to 1,000 conversations', 'Basic AI chatbot', 'Email support', 'Standard templates']
    },
    {
      name: 'Professional',
      price: '$599/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 10,000 conversations', 'Advanced AI features', 'Priority support', 'API access', 'Custom integrations']
    },
    {
      name: 'Enterprise',
      price: '$1,499/month',
      description: 'For large organizations',
      features: ['Unlimited conversations', 'Custom development', 'Advanced analytics', '24/7 support', 'Dedicated account manager']
    }
  ];

  const benefits = [
    'Reduce support costs by 60%',
    'Improve response time by 80%',
    'Increase customer satisfaction by 40%',
    'Handle 10x more inquiries',
    '24/7 customer support',
    'Multilingual support'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Customer Support - Zion Tech Group"
        description="Transform your customer support with AI-powered chatbots and automation. Provide 24/7 support, reduce costs, and improve customer satisfaction."
        keywords={['AI customer support', 'chatbot', 'customer service automation', 'AI support', 'customer experience']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support"
      />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Customer Support
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support with AI-powered chatbots and automation. 
              Provide 24/7 support, reduce costs, and improve customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="cyber-button inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get Started</span>
              </Link>
              <a 
                href="tel:+13024640950" 
                className="cyber-button-outline inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Why Choose AI Customer Support?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full py-3 px-6 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-center block"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-purple-100 mb-8">Get started with AI-powered customer support today</p>
            <Link to="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AICustomerSupportPage;