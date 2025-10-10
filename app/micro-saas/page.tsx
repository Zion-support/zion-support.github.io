'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Globe, BarChart, Users, Target, Phone, Mail, MapPin } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('starter');

  const microSaasProducts = [
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for your website and social media',
      price: { monthly: 29, annual: 290 },
      features: [
        'Drag-and-drop builder',
        'Multi-language support',
        'Analytics dashboard',
        'Custom branding',
        'API integration'
      ],
      icon: Users,
      popular: false
    },
    {
      id: 'data-analytics',
      name: 'Business Analytics Pro',
      description: 'Advanced analytics and reporting for small businesses',
      price: { monthly: 49, annual: 490 },
      features: [
        'Real-time dashboards',
        'Custom reports',
        'Data visualization',
        'Export capabilities',
        'Team collaboration'
      ],
      icon: BarChart,
      popular: true
    },
    {
      id: 'email-automation',
      name: 'Email Marketing Suite',
      description: 'Automated email campaigns and customer engagement',
      price: { monthly: 39, annual: 390 },
      features: [
        'Email templates',
        'Automation workflows',
        'A/B testing',
        'Subscriber management',
        'Performance tracking'
      ],
      icon: Mail,
      popular: false
    },
    {
      id: 'task-manager',
      name: 'Smart Task Manager',
      description: 'AI-powered project and task management tool',
      price: { monthly: 19, annual: 190 },
      features: [
        'Smart scheduling',
        'Team collaboration',
        'Progress tracking',
        'Deadline reminders',
        'Mobile app'
      ],
      icon: Target,
      popular: false
    },
    {
      id: 'security-monitor',
      name: 'Security Monitor',
      description: 'Website security monitoring and threat detection',
      price: { monthly: 59, annual: 590 },
      features: [
        '24/7 monitoring',
        'Threat detection',
        'Security reports',
        'SSL monitoring',
        'Incident alerts'
      ],
      icon: Shield,
      popular: false
    },
    {
      id: 'seo-optimizer',
      name: 'SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization tools',
      price: { monthly: 69, annual: 690 },
      features: [
        'Keyword research',
        'Content optimization',
        'Rank tracking',
        'Competitor analysis',
        'Performance reports'
      ],
      icon: Globe,
      popular: false
    }
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for individuals and small teams',
      price: { monthly: 29, annual: 290 },
      features: [
        'Access to 3 micro SaaS tools',
        'Basic support',
        'Standard templates',
        'Monthly updates',
        'Community access'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: { monthly: 79, annual: 790 },
      features: [
        'Access to all micro SaaS tools',
        'Priority support',
        'Custom templates',
        'Weekly updates',
        'API access',
        'Team collaboration',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: { monthly: 199, annual: 1990 },
      features: [
        'Access to all micro SaaS tools',
        '24/7 dedicated support',
        'Custom development',
        'Daily updates',
        'Full API access',
        'Unlimited team members',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    'No setup fees or hidden costs',
    'Cancel anytime with 30-day notice',
    'Regular updates and new features',
    '24/7 customer support',
    '30-day money-back guarantee',
    'Free migration assistance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Affordable AI & IT Tools</title>
        <meta name="description" content="Discover our micro SaaS solutions - affordable, scalable AI and IT tools designed for growing businesses. Start with low monthly costs." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, business tools, AI tools, affordable software, subscription software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Micro
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}SaaS
              </span>
              {' '}Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable, scalable AI and IT tools designed for growing businesses. 
              Start with low monthly costs and scale as you grow.
            </p>
          </div>

          {/* Micro SaaS Products */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Micro SaaS Tools</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized tools designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">{product.description}</p>
                  
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-white">${product.price.monthly}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Try Free for 14 Days
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="py-16 bg-white/5 rounded-2xl">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Select the plan that best fits your needs. All plans include access to our micro SaaS tools.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-6">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-5xl font-bold text-white">
                          ${plan.price.monthly}
                        </span>
                        <span className="text-gray-400 ml-2">/month</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                          : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our micro SaaS tools are designed to be affordable, easy to use, and highly effective.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that trust our micro SaaS solutions to power their growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;