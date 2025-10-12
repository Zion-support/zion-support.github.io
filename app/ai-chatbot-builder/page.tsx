import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageCircle, Users, Zap, Shield, Brain, Globe, Clock, Star, Target, DollarSign, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIChatbotBuilderPage() {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: 'Natural Conversations',
      description: 'Create chatbots that understand context and engage in natural, human-like conversations.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms provide intelligent responses and learn from interactions.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Quick Deployment',
      description: 'Build and deploy your chatbot in minutes with our intuitive drag-and-drop interface.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Multi-Channel Support',
      description: 'Deploy across websites, mobile apps, social media, and messaging platforms.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Analytics & Insights',
      description: 'Track performance, user satisfaction, and conversation analytics to optimize your bot.'
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR compliance and data protection features.'
    }
  ];

  const useCases = [
    'Customer support automation',
    'Lead generation and qualification',
    'E-commerce assistance',
    'FAQ automation',
    'Appointment scheduling',
    'Order tracking',
    'Technical support',
    'Sales consultation'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI training',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI training',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'Multi-language support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        '24/7 dedicated support',
        'Fully custom design',
        'Enterprise analytics',
        'White-label solution',
        'Full API access',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '50%', label: 'Reduction in Support Costs' },
    { number: '24/7', label: 'Availability' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots for your business with our AI-powered chatbot builder. Easy to use, powerful features, and enterprise-ready." />
        <meta name="keywords" content="AI chatbot, chatbot builder, customer support, automation, AI assistant, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Chatbot Builder</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create intelligent, conversational AI chatbots that engage your customers, 
            automate support, and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI chatbots can be customized for a wide range of business applications.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <p className="text-gray-300">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-white/20'
              } hover:border-purple-500 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Your AI Chatbot?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start building your intelligent chatbot today and transform your customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}