'use client';
import React from 'react';
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
      description: 'AI-powered voice support with speech recognition and natural language processing for phone calls.',
      benefits: ['Speech Recognition', 'Voice Synthesis', 'Call Routing', 'Sentiment Analysis']
    },
    {
      icon: Bot,
      title: 'Intelligent Ticket Routing',
      description: 'Automatically categorize and route support tickets to the right team members based on content analysis.',
      benefits: ['Auto Categorization', 'Priority Detection', 'Smart Routing', 'Escalation Rules']
    },
    {
      icon: Zap,
      title: 'Automated Responses',
      description: 'Pre-built response templates and AI-generated responses for common customer inquiries.',
      benefits: ['Template Library', 'AI Generation', 'Consistency', 'Time Savings']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with data encryption and compliance with industry standards.',
      benefits: ['Data Encryption', 'GDPR Compliance', 'SOC 2', 'Audit Trails']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics dashboard with customer satisfaction metrics and performance insights.',
      benefits: ['Real-time Metrics', 'Satisfaction Tracking', 'Performance Reports', 'Trend Analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$599/month',
      description: 'Perfect for small teams',
      features: ['Up to 1,000 conversations/month', 'Basic AI chatbot', 'Email support', 'Standard integrations'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,199/month',
      description: 'For growing businesses',
      features: ['Up to 10,000 conversations/month', 'Advanced AI features', 'Voice support', 'Priority support', 'Custom integrations'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,399/month',
      description: 'For large organizations',
      features: ['Unlimited conversations', 'Custom AI training', '24/7 human support', 'Custom integrations', 'Advanced analytics', 'Dedicated account manager'],
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '60%', label: 'Faster Resolution' },
    { number: '24/7', label: 'Availability' },
    { number: '50+', label: 'Languages Supported' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <SEOOptimizer
        title="AI Customer Support - Zion Tech Group"
        description="Revolutionary AI-powered customer support solutions with 24/7 chatbots, voice support, and intelligent ticket routing. Transform your customer service with cutting-edge AI technology."
        keywords={['AI customer support', 'chatbot', 'voice support', 'ticket routing', 'customer service automation', 'AI support solutions']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support"
      />
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text glitch">
            AI Customer Support
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your customer service with AI-powered support solutions that provide instant, intelligent responses 24/7.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300 energy-pulse">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className="cyber-button w-full text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 cyber-card">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact us today to learn how AI can revolutionize your customer support operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AICustomerSupportPage;