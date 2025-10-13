'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function AIEmailOptimizerPage() {
  const features = [
    "AI-powered subject line optimization",
    "Send time optimization based on recipient behavior",
    "A/B testing automation with statistical significance",
    "Personalization engine for 1:1 messaging",
    "Open rate prediction and optimization",
    "Click-through rate enhancement",
    "Unsubscribe prediction and prevention",
    "Email template optimization",
    "List segmentation with AI insights",
    "Performance analytics and reporting",
    "Integration with major email platforms",
    "Real-time performance monitoring"
  ];

  const benefits = [
    "40% higher open rates",
    "60% increase in click-through rates",
    "25% reduction in unsubscribe rates",
    "Automated optimization saves 10+ hours/week",
    "ROI tracking and attribution",
    "Compliance with email regulations"
  ];

  const useCases = [
    "E-commerce email marketing",
    "Newsletter optimization",
    "Lead nurturing campaigns",
    "Customer retention emails",
    "Product launch campaigns",
    "Abandoned cart recovery"
  ];

  const pricing = {
    starter: {
      price: "$99",
      period: "month",
      features: [
        "Up to 10,000 emails/month",
        "Basic AI optimization",
        "A/B testing (2 variants)",
        "Email templates (5)",
        "Basic analytics",
        "Email support"
      ]
    },
    professional: {
      price: "$299",
      period: "month",
      features: [
        "Up to 50,000 emails/month",
        "Advanced AI optimization",
        "A/B testing (5 variants)",
        "Email templates (unlimited)",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Advanced segmentation"
      ]
    },
    enterprise: {
      price: "$799",
      period: "month",
      features: [
        "Unlimited emails",
        "Premium AI optimization",
        "Unlimited A/B testing",
        "Custom email templates",
        "Enterprise analytics",
        "Dedicated support",
        "Custom integrations",
        "Advanced automation",
        "White-label options"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Email Optimizer - Zion Tech Group</title>
        <meta name="description" content="AI-powered email marketing optimization tool that increases open rates by 40% and click-through rates by 60%. Advanced personalization and automation features." />
        <meta name="keywords" content="AI email marketing, email optimization, email automation, personalization, A/B testing, email analytics" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <EnvelopeIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Email Optimizer
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your email marketing with AI-powered optimization
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Our AI Email Optimizer uses machine learning to automatically optimize your email campaigns, 
              increasing open rates by 40% and click-through rates by 60% while saving you hours of manual work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Watch Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Email Optimizer delivers measurable improvements to your email marketing performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-green-400 mb-2">40%</h3>
              <p className="text-xl text-gray-300">Higher Open Rates</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">60%</h3>
              <p className="text-xl text-gray-300">More Click-Throughs</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-purple-400 mb-2">10+</h3>
              <p className="text-xl text-gray-300">Hours Saved Weekly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to optimize your email marketing campaigns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your email volume and business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([plan, details], index) => (
              <div 
                key={plan}
                className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${
                  plan === 'professional' ? 'border-purple-500 relative' : 'border-slate-600'
                }`}
              >
                {plan === 'professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-green-400">{details.price}</span>
                  <span className="text-gray-400">/{details.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan === 'professional'
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect For
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ideal for businesses looking to maximize their email marketing ROI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of businesses already using AI Email Optimizer to boost their email performance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}