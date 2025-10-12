
import React from 'react';
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Shield, Brain, BarChart, MessageCircle, Target, ShoppingCart, Globe, Clock } from 'lucide-react';
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
      icon: <MessageCircle className="w-6 h-6" />,
      popular: true
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads and capture contact information through engaging conversations',
      icon: <Target className="w-6 h-6" />,
      popular: false
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, answer questions, and complete purchases',
      icon: <ShoppingCart className="w-6 h-6" />,
      popular: true
    },
    {
      title: 'Appointment Booking',
      description: 'Schedule appointments, send reminders, and manage calendar availability',
      icon: <Clock className="w-6 h-6" />,
      popular: false
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
        'Priority support',
        'Advanced analytics & reporting',
        'Custom integrations'
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
        'Dedicated support',
        'Custom analytics dashboard',
        'API access',
        'SLA guarantee'
      ],
      popular: false;
    }
  ];
export default function AiChatbotBuilder() {
  return (
    <div><div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
      <Helmet></div>
        <title>AI Chatbot Builder - Zion Tech Group<div></title>
        <meta name="description" content="Build intelligent chatbots without coding. Deploy across multiple channels with advanced AI capabilities."><div></meta></div></div></div>
        <div><div><meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, customer support automation"></meta></div></div>
      </Helmet></div>
      {/* Hero Section */}
      <div><div><section className="py-20 px-4"></section></div></div>
        <div className="max-w-7xl mx-auto text-center"></div><div><div></div></div></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"><div></h1></div></div></div>
            AI Chatbot
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Builder
            <div><div></span>
          </h1></div></div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"><div></div></p></div></div>
            Create intelligent, conversational chatbots without any coding. Deploy across multiple channels
            and scale your customer engagement with advanced AI capabilities.
          <div></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><div></div></div></div></div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Building Now
              <div><div><ArrowRight className="w-5 h-5 ml-2" />
            </Link></div></div>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            ></div>
              View Demo
      {/* Hero Section */}
      <div><div><section className="w-5h-5ml-2"></section></div></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
          <h1 className="w-5h-5ml-2"><div></h1></div></div></div>
            AI Chatbot;
            <span className="w-5h-5ml-2"></span>
              {' '}Builder;
            <div><div></span>
          </h1></div></div>
          <p className="w-5h-5ml-2"></div>Create intelligent, conversational chatbots without any coding. Deploy across multiple channels;
            and scale your customer engagement with advanced AI capabilities.
          <div></p>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            <Link;</Link></Link>
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
        ></Link>
          Start Building Now;
          <div><div><ArrowRight className="w-5h-5ml-2"></ArrowRight></div></div>
        </Link></div>
            <div><Link to="/demo" className="borderborder-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900transition-all duration-300"></Link></div></div>
              View Demo;
            <div><div></Link>
          </div></div></div>
        </div><div></div>
      </section></div></div>
      {/* Features Section */}
      <div><div><section className="py-20 px-4"></section></div></div>
        <div className="max-w-7xl mx-auto"></div><div><div></div></div></div>
          <div className="text-center mb-16"><div></div></div></div></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              Powerful Features for Every Need
            <div></h2>
            <p className="text-xl text-gray-300"><div></p></div></div></div>
      <div><div><section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
        <div className="max-w-7xl mx-auto"></div><div><div></div></div></div>
          <div className="text-center mb-16"><div></div></div></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Powerful Features for Every Need
            <div></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"><div></p></div></div></div>
              Everything you need to build, deploy, and manage intelligent chatbots that deliver exceptional user experiences.
            <div><div></p>
          </div></div></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"><div></div></div></div></div>
            {features.map((feature, index) => (
              <div><div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"></div></div></div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}></div><div><div></div></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            {features.map((feature, index) => (
              <div><div><div key={index} className="bg-slate-800/50backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50transition-all duration-300"></div></div></div>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}><div></div></div></div></div>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          <div><div></div>
        </div></div></div>
      </section></div>
      {/* Use Cases Section */}
      <div><div><section className="py-20 px-4 bg-black/20"></section></div></div>
        <div className="max-w-7xl mx-auto"></div><div><div></div></div></div>
          <div className="text-center mb-16"><div></div></div></div></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              Perfect for Every Industry
            <div></h2>
            <p className="text-xl text-gray-300"><div></p></div></div></div>
              Discover how our AI chatbot builder can transform your business operations.
            <div><div></p>
          </div></div></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"><div></div></div></div></div>
            {useCases.map((useCase, index) => (
              <div><div><div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${useCase.popular ? 'ring-2 ring-cyan-400/50' : ''}`}></div></div></div>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4"><div></div></div></div></div>
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
                {useCase.popular && (
                  <span className="inline-block mt-2 px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    Popular
                  </span>
                )}
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <div><div></div>
        </div></div></div>
      </section></div>
      {/* Pricing Section */}
      <div><div><section className="py-20 px-4"></section></div></div>
        <div className="max-w-7xl mx-auto"></div><div><div></div></div></div>
          <div className="text-center mb-16"><div></div></div></div></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              Simple, Transparent Pricing
            <div></h2>
            <p className="text-xl text-gray-300"><div></p></div></div></div>
      <div><div><section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
        <div className="max-w-7xl mx-auto"></div><div><div></div></div></div>
          <div className="text-center mb-16"><div></div></div></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Simple, Transparent Pricing
            <div></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"><div></p></div></div></div>
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            <div><div></p>
          </div></div></div>
          <div className="grid md:grid-cols-3 gap-8"><div></div></div></div></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400/50 scale-105' : ''}`}></div>
                {plan.popular && (
                  <div><div><div className="text-center mb-4"></div></div></div>
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm rounded-full"></div>
                      Most Popular
                    </span>
                  </div>
                )}
                <div><div><div className="text-center mb-6"></div></div></div>
                  <h3 className="text-2xl font-bold text-white mb-2"></div>{plan.name}<div></h3>
                  <div className="flex items-baseline justify-center"><div></div></div></div></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}<div></span>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
              } relative`}></div>
                {plan.popular && (
                  <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    <span className="w-5h-5ml-2"><div></div></span></div></div>
                      Most Popular;
                    </span>
                  </div>
                )}
                <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                  <h3 className="text-2xlfont-bold text-whitemb-2"></div>{plan.name}<div></h3>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    <span className="text-4xlfont-bold text-white">{plan.price}</span>
                    <span className="text-gray-400ml-1">{plan.period}<div><div></span>
                  </div></div></div>
                  <p className="text-gray-300 mt-2"></div>{plan.description}<div><div></p>
                </div></div></div>
                <ul className="space-y-3 mb-8"></div>
                  {plan.features.map((feature, featureIndex) => (
                    <div><div><li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" /></div></div>
                <ul className="w-5h-5ml-2"><div></div></ul></div></div>
                  {plan.features.map((feature, idx) => (
                    <div><div><li key={idx} className="flex items-center text-gray-300"></li></div></div>
                      <CheckCircle className="w-5h-5ml-2"><div></div></CheckCircle></div></div>
                      {feature}
                    </li>
                  ))}
                <div></ul>
                <Link;</Link><div></Link></div></div></div>
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          <div><div></div>
        </div></div></div>
      </section></div>
      {/* CTA Section */}
      <div><div><section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></section></div></div>
        <div className="max-w-4xl mx-auto text-center"></div><div><div></div></div></div>
          <h2 className="text-4xl font-bold text-white mb-6"><div></h2></div></div></div>
            Ready to Build Your AI Chatbot?
          <div></h2>
          <p className="text-xl text-gray-300 mb-8"><div></p></div></div></div>
            Join thousands of businesses already using our AI chatbot builder to enhance customer engagement and drive growth.
      <div><div><section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
        <div className="max-w-4xl mx-auto text-center"></div><div><div></div></div></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"><div></h2></div></div></div>
            Ready to Build Your AI Chatbot?
          <div></h2>
          <p className="text-xl text-gray-300 mb-8"><div></p></div></div></div>
            Join thousands of businesses already using our platform to create intelligent, engaging chatbots.
          <div></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><div></div></div></div></div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Free Trial
              <div><div><ArrowRight className="w-5 h-5 ml-2" />
            </Link></div></div>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            ></div>
              Schedule Demo
          <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <Link;</Link><div></div></Link></div></div>
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
        ></Link>
          Start Your Free Trial;
          <div><div><ArrowRight className="w-5h-5ml-2"></ArrowRight></div></div>
        </Link></div>
            <div><Link to="/demo" className="borderborder-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900transition-all duration-300"></Link></div></div>
              Schedule Demo;
            <div><div></Link>
          </div></div></div>
        </div><div></div>
      </section></div></div>
    </div>
  );
};
export default AiChatbotBuilderPage;