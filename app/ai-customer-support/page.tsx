'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, MessageCircle, Zap, Shield, BarChart, Clock, Star, ArrowRight, CheckCircle, TrendingUp, PieChart, Target, Users, Headphones, Settings } from 'lucide-react';

const AiCustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that understand customer intent and provide intelligent responses.',
      benefits: ['Natural language processing', 'Context awareness', 'Smart routing', 'Predictive insights']
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Provide consistent support across all customer touchpoints.',
      benefits: ['Email support', 'Live chat', 'Social media', 'Phone integration']
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Provide immediate answers to customer queries 24/7.',
      benefits: ['Real-time responses', 'Instant resolution', 'Always available', 'Fast resolution times']
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee.',
      benefits: ['Data encryption', 'Secure hosting', 'High availability', 'Compliance ready']
    }
  ];

  const supportTypes = [
    {
      icon: Headphones,
      title: 'Live Chat Support',
      description: 'Real-time chat support with AI assistance and human handoff.',
      features: ['Instant responses', 'Human escalation', 'Multi-language', 'File sharing']
    },
    {
      icon: MessageCircle,
      title: 'Email Support',
      description: 'Intelligent email support with automated categorization and routing.',
      features: ['Smart routing', 'Auto-responses', 'Priority queuing', 'Template suggestions']
    },
    {
      icon: Users,
      title: 'Phone Support',
      description: 'AI-enhanced phone support with call routing and analytics.',
      features: ['Call routing', 'Call analytics', 'Voicemail processing', 'Callback scheduling']
    },
    {
      icon: Settings,
      title: 'Self-Service Portal',
      description: 'Comprehensive knowledge base with AI-powered search and recommendations.',
      features: ['Smart search', 'Article recommendations', 'Video tutorials', 'Community forum']
    }
  ];

  const benefits = [
    'Reduce support costs by up to 60%',
    'Improve customer satisfaction scores',
    'Handle unlimited conversations simultaneously',
    '24/7 availability for your customers',
    'Faster resolution times',
    'Consistent quality responses',
    'Multi-language support',
    'Advanced analytics and reporting'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        '1,000 conversations/month',
        'Basic AI features',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with higher volume',
      features: [
        '10,000 conversations/month',
        'Advanced AI features',
        'Multi-channel support',
        'Priority support',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'Dedicated support',
        'API access',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support | Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with AI-powered solutions. Reduce costs, improve satisfaction, and provide 24/7 intelligent support." />
        <meta name="keywords" content="AI customer support, automated support, customer service AI, support automation, intelligent support" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Customer Support
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your customer support with AI-powered solutions. Reduce costs, improve satisfaction, and provide 24/7 intelligent support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Try Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Customer Support?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Powerful AI technology combined with human expertise to deliver exceptional customer support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-400">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Types Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Support Channels
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Provide support across all customer touchpoints with our comprehensive platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <type.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-1">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of AI Customer Support
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your customer experience with intelligent automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Choose the plan that fits your support needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Start your AI customer support journey today and provide exceptional service to your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiCustomerSupportPage;