<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
=======
'use client';
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-022b
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
export default function AiChatbotBuilder() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Ai Chatbot Builder solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Chatbot Builder</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai chatbot builder solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
<<<<<<< HEAD
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {
    features.map((feature, index) => (
  }
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <feature>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {
    feature.benefits && (;
                    <ul>
                      {feature.benefits.map((benefit, idx) => (
  }
                        <li>
                          <CheckCircle>

import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageCircle, Bot, Zap, Shield, CheckCircle, Star, ArrowRight, Brain, Globe, Users, Settings, BarChart } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-022b

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Chatbot Builder
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai chatbot builder solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
=======


import React, {useState} from 'react';

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight, CheckCircle, Users, Zap, Shield, Brain, BarChart, MessageCircle, Target, ShoppingCart, Globe, Clock} from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {const features = [{
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: <Zap className="w-5 h-5 ml-2"   />,
      color: 'from-blue-500 to-cyan-500'},
    {title: 'AI-Powered Responses',
      description: 'Natural language processing and machine learning for intelligent, contextual conversations',
      icon: <Brain className="w-5 h-5 ml-2"   />,
      color: 'from-yellow-500 to-orange-500'},
    {title: 'Multi-Channel Deployment',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms',
      icon: <Globe className="w-5 h-5 ml-2"   />,
      color: 'from-green-500 to-emerald-500'},
    {title: 'Advanced Analytics',
      description: 'Track performance, user engagement, and conversation insights with detailed analytics',
      icon: <BarChart className="w-5 h-5 ml-2"   />,
      color: 'from-indigo-500 to-purple-500'},
    {title: 'Custom Integrations',
      description: 'Connect with CRM, helpdesk, payment systems, and other business tools seamlessly',
      icon: <Shield className="w-5 h-5 ml-2"   />,
      color: 'from-red-500 to-pink-500'},
    {title: 'Real-time Monitoring',
      description: 'Monitor conversations in real-time and intervene when human assistance is needed',
      icon: <MessageCircle className="w-5 h-5 ml-2"   />,
      color: 'from-teal-500 to-cyan-500'}];

  const useCases = [{title: 'Customer Support',
      description: '24/7 automated customer support with instant responses and issue resolution',
      icon: <MessageCircle className="w-6 h-6"   />,
      popular: true},
    {title: 'Lead Generation',
      description: 'Qualify leads and capture contact information through engaging conversations',
      icon: <Target className="w-6 h-6"   />,
      popular: false},
    {title: 'E-commerce Assistant',
      description: 'Help customers find products, answer questions, and complete purchases',
      icon: <ShoppingCart className="w-6 h-6"   />,
      popular: true},
    {title: 'Appointment Booking',
      description: 'Schedule appointments, send reminders, and manage calendar availability',
      icon: <Clock className="w-6 h-6"   />,
      popular: false}];

  const pricingPlans = [{name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Website integration',
        'Email support',
        'Basic analytics'],
      popular: false;},
    {name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: ['Up to 10,000 conversations/month',
        'Advanced AI with custom training',
        'Multi-channel deployment',
        'Priority support',
        'Advanced analytics & reporting',
        'Custom integrations'],
      popular: true;},
    {name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: ['Unlimited conversations',
        'Custom AI model training',
        'White-label solution',
        'Dedicated support',
        'Custom analytics dashboard',
        'API access',
        'SLA guarantee'],
      popular: false;}
  ];

export default function AiChatbotBuilder() {<title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Deploy across multiple channels with advanced AI capabilities."   /></meta>
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, customer support automation"   /></meta>
      </Helmet>

      {/* Hero Section */}

              </div>
  ))}
=======
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50transition-allduration-300" />
                <div className="{`w-16" h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`} />
                  {feature.icon}
=======
      <Footer>
    </>
  ),
}
export default AiChatbotBuilderPage;

                  </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-022b
                </div>
                <h3 className="text-xl font-semiboldtext-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Pricing Section */}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AichatbotbuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Professional ai chatbot builder services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Chatbot Builder</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai chatbot builder services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======

      {/* Use Cases Section */}
      <section className="py-20px-4bg-slate-800/30" />
        <div className="max-w-7xlmx-auto">

            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6borderborder-slate-700" />

            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`bg-slate-800/50" backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
              } relative`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2transform-translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-fulltext-smfont-semibold" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-centermb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baselinejustify-center">
                    <span className="text-4xlfont-bold text-white">{plan.price}</span>
                    <span className="text-gray-400ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3mb-8" />
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300" />
                      <CheckCircle className="w-5 h-5 text-green-400mr-3flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="{`w-full" py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`} />
                  Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20px-4" />
        <div className="max-w-4xlmx-autotext-center">
          <h2 className="text-4xl font-bold text-white mb-6" />
            Ready to Build Your First Chatbot?
          </h2>
          <p className="text-xltext-gray-300 mb-8">
              Join thousands of businesses already using our platform to create amazing customer experiences.
          </p>
          <div className="flex flex-col sm:flex-rowgap-4justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-center" >
          Start Your Free Trial
              
          <ArrowRight className="ml-2w-5h-5"  />
        </Link>
            <Link to="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900transition-allduration-300" />
              Schedule Demo
            </Link>
          </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default AiChatbotBuilderPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
=======
export default AIChatbotBuilder;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-022b
