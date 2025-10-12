

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Shield, Brain, BarChart, MessageCircle, Target, ShoppingCart, Globe, Clock } from 'lucide-react';

=======
import React, { useState } from 'react';
export default AiChatbotBuilderPage;
'use client';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: <Zap className="w-5 h-5 ml-2" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Responses',
      description: 'Natural language processing and machine learning for intelligent, contextual conversations',
      icon: <Brain className="w-5 h-5 ml-2" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Multi-Channel Deployment',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms',
      icon: <Globe className="w-5 h-5 ml-2" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance, user engagement, and conversation insights with detailed analytics',
      icon: <BarChart className="w-5 h-5 ml-2" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Custom Integrations',
      description: 'Connect with CRM, helpdesk, payment systems, and other business tools seamlessly',
      icon: <Shield className="w-5 h-5 ml-2" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Monitor conversations in real-time and intervene when human assistance is needed',
      icon: <MessageCircle className="w-5 h-5 ml-2" />,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 automated customer support with instant responses and issue resolution',

      icon: <Users className="w-6 h-6" />,
      benefits: ['Reduce response time by 90%', 'Handle multiple queries simultaneously', 'Escalate complex issues to humans']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify and nurture leads automatically with intelligent conversation flows',
      icon: <Target className="w-6 h-6" />,
      benefits: ['Capture leads 24/7', 'Qualify prospects automatically', 'Schedule follow-up meetings']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, process orders, and provide shopping assistance',
      icon: <ShoppingCart className="w-6 h-6" />,
      benefits: ['Increase conversion rates', 'Reduce cart abandonment', 'Provide product recommendations']

    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Website integration',
        'Email support',
        'Basic analytics'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI with custom training',
        'Multi-channel deployment',

        'Custom integrations',
        'Advanced analytics & reporting',
        'Priority support',
        'A/B testing'

      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited conversations',
        'Custom AI model training',
        'White-label solution',

        'Dedicated account manager',
        'Custom integrations',
        'Advanced security features',

        'SLA guarantee'
      ],
      popular: false;
    }
  ];

  return (
    <>
    <>

    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
      <Helmet />

        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Deploy across multiple channels with advanced AI capabilities." / />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, customer support automation" / />
      </Helmet>

      {/* Hero Section */}

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Chatbot
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">

              {' '}Builder
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create intelligent, conversational chatbots without any coding. Deploy across multiple channels 
            and scale your customer engagement with advanced AI capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Building Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
=======
      {/* Hero Section */}
      <section className="w-5h-5ml-2" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
          <h1 className="w-5h-5ml-2" / />
            AI Chatbot;
            <span className="w-5h-5ml-2" / />
              {' '}Builder;
            </span>
          </h1>
          <p className="w-5h-5ml-2">Create intelligent, conversational chatbots without any coding. Deploy across multiple channels;
            and scale your customer engagement with advanced AI capabilities.
          </p>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
            <Link;</Link />
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
        ></Link>
          Start Building Now;
          <ArrowRight className="w-5h-5ml-2" / />
        </Link>
            <Link to="/demo" className="borderborder-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900transition-all duration-300" / />
              View Demo;

            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}

      <section className="w-5h-5ml-2" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
            <h2 className="w-5h-5ml-2" / />
              Powerful Features for Every Need;

            </h2>
            <p className="text-xl text-gray-300">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Every Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">

              Everything you need to build, deploy, and manage intelligent chatbots that deliver exceptional user experiences.
            </p>
          </div>
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">

                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
=======
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50transition-all duration-300" / />
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`} / />

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

      <section className="w-5h-5ml-2" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
            <h2 className="w-5h-5ml-2" / />
              Perfect for Every Business;

            </h2>
            <p className="text-xl text-gray-300">
              Discover how our AI chatbot builder can transform your business operations.
            </p>
          </div>

          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50backdrop-blur-sm rounded-xl p-6 border border-slate-700" / />
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />

                  {useCase.icon}
                </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI chatbot builder can transform your business operations across different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
=======
                <p className="text-gray-300mb-4">{useCase.description}</p>
                <ul className="w-5h-5ml-2" / />
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-centertext-sm text-gray-400" / />
                      <CheckCircle className="w-5h-5ml-2" / />

                      {benefit}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}

      <section className="w-5h-5ml-2" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
            <h2 className="w-5h-5ml-2" / />
              Simple, Transparent Pricing;

            </h2>
            <p className="text-xl text-gray-300">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">

              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
          </div>
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-white/20'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">

                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
=======
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
              } relative`} / />
                {plan.popular && (
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
                    <span className="w-5h-5ml-2" / />
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
                  <h3 className="text-2xlfont-bold text-whitemb-2">{plan.name}</h3>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
                    <span className="text-4xlfont-bold text-white">{plan.price}</span>
                    <span className="text-gray-400ml-1">{plan.period}</span>

                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">

                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />

=======
                <ul className="w-5h-5ml-2" / />
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300" / />
                      <CheckCircle className="w-5h-5ml-2" / />

                      {feature}
                    </li>
                  ))}
                </ul>
                <Link;</Link />
                  to="/contact"

                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`} /></Link>
                  Get Started;

                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}

      <section className="w-5h-5ml-2" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
          <h2 className="w-5h-5ml-2" / />
            Ready to Build Your First Chatbot?

          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI chatbot builder to enhance customer engagement and drive growth.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your AI Chatbot?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our platform to create intelligent, engaging chatbots.

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >

              Schedule a Demo

=======
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
            <Link;</Link />
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
        ></Link>
          Start Your Free Trial;
          <ArrowRight className="w-5h-5ml-2" / />
        </Link>
            <Link to="/demo" className="borderborder-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900transition-all duration-300" / />
              Schedule Demo;

            </Link>
          </div>
        </div>
      </section>
    </div>
  
    </>
  
    </>
  );
};


