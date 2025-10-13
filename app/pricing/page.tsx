<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';


=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Page</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
=======
import React from 'react;'

import { Helmet } from 'react-helmet-async;'

import { Link } from 'react-router-dom;'

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;'

const PagePage: React.FC = () => {}
import React, { Helmet } from 'react-helmet-async'.
import Navigation from '../components/Navigation'.
import Footer from '../components/Footer'.
import SEOOptimizer from '../components/SEOOptimizer'.
import React, { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Shield, Users, Clock, DollarSign, Award, TrendingUp } from 'lucide-react'.
import React, { Helmet } from 'react-helmet-async'.
import Navigation from '../components/Navigation'.
import Footer from '../components/Footer'.
import Link from 'next/link'.
import React, { CheckCircle, Star, Phone, Mail, MapPin, Zap, Brain, Cloud, Code } from 'lucide-react'.
import React, { useState } from 'react'.
import React, { Helmet } from 'react-helmet-async'.
import React, { CheckCircle, Star, ArrowRight, Zap, Brain, Cloud, Cpu, DollarSign, Users, Shield, BarChart3, FileText, Target, Globe, Database, Settings, Calendar, Eye, Mic, Heart, Lock, Package, Monitor, Wifi, Code, Smartphone } from 'lucide-react'.
const PricingPage: React.FC = () => {
import React, { Helmet } from 'react-helmet-async'.
import React, { Link } from 'react-router-dom'.
import React, { CheckCircle, Star, ArrowRight, Zap, Phone, Mail } from 'lucide-react'.
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
>>>>>>> origin/main
const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
<<<<<<< HEAD
        'Basic Analytics Dashboard'
=======
        'Basic Analytics Dashboard']
=======
        'Basic AI automation',
        'Email support',
        'Standard analytics',
        'Up to 5 users',
        'Basic integrations'
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
      ],
      popular: false.
    },
    {
>>>>>>> origin/main
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
<<<<<<< HEAD
        'Training Sessions'
=======
        'Training Sessions']
=======
        'Advanced AI solutions',
        'Priority support',
        'Advanced analytics',
        'Up to 25 users',
        'Custom integrations',
        'Dedicated account manager'
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
      ],
      popular: true.
    },
    {
>>>>>>> origin/main
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
<<<<<<< HEAD
        'SLA Guarantee'
  const microSaasPlans = [
  const addOns = [
=======
        'SLA Guarantee']
      ],
      popular: false.
    }
  ];

  const microSaasPlans = [
>>>>>>> origin/main
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Essential tools for small teams',
      features: [
        '5 AI Tools Access',
        'Basic Analytics',
        'Email Support',
        'Standard Templates',
        '1 User Account']
      ],
      popular: false.
    },
    {
      name: 'Pro',
      price: '$99',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Unlimited AI Tools',
        'Advanced Analytics',
        'Priority Support',
        'Custom Templates',
        'Up to 10 Users',
        'API Access',
        'White-label Options']
      ],
      popular: true.
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Custom solutions for large organizations',
      features: [
        'Custom AI Tools',
        'Dedicated Support',
        'Custom Integrations',
        'Unlimited Users',
        'On-premise Deployment',
        'SLA Guarantee',
        'Training & Consulting']
=======
        'Custom AI development',
        '24/7 dedicated support',
        'Enterprise analytics',
        'Unlimited users',
        'Full customization',
        'On-site implementation',
        'SLA guarantee'
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
      ],
      popular: false.
    }
  ];

<<<<<<< HEAD
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Advanced pricing solutions by Zion Tech Group" />
        <title>Page - Zion Tech Group</title>
        <meta name="description" content=Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business. />
        <meta name="keywords" content=page, AI solutions, IT services, Zion Tech Group />
=======
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Advanced pricing solutions by Zion Tech Group" />
>>>>>>> origin/main
      </Helmet>
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pricing.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced pricing solutions by Zion Tech Group.
          </p>
        </div>
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
=======
        <div className="max-w-4xl mx-auto">"
          <div className="bg-white rounded-lg shadow-md p-8">"
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>"
>>>>>>> origin/main
            <p className="text-gray-600">
              This page is under development. Please check back later for updates.
            </p>
          </div>
<div className="grid md:grid-cols-3 gap-8">"
            <div className="bg-white rounded-lg shadow-md p-6">"
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>"
              <p className="text-3xl font-bold text-gray-900 mb-4">$99<span className="text-lg text-gray-600">/month</span></p>"
              <ul className="space-y-2 text-gray-600">
                <li>Basic AI features</li>
                <li>Email support</li>
                <li>Standard templates</li>
<<<<<<< HEAD
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>
  );
};

export default PricingPage;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 
              our core AI and IT services with no hidden fees.
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-500 bg-cyan-500/10 scale-105'
                    : 'border-white/10 hover:bg-white/10'
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <Link
                  to="/consultation"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Free initial consultation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">30-day money-back guarantee</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">No setup fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Flexible payment options</span>
                </li>
=======
>>>>>>> origin/main
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500">"
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>"
              <p className="text-3xl font-bold text-gray-900 mb-4">$299<span className="text-lg text-gray-600">/month</span></p>"
              <ul className="space-y-2 text-gray-600">
                <li>Advanced AI features</li>
                <li>Priority support</li>
                <li>Custom templates</li>
                <li>Analytics dashboard</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">"
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>"
              <p className="text-3xl font-bold text-gray-900 mb-4">$999<span className="text-lg text-gray-600">/month</span></p>"
              <ul className="space-y-2 text-gray-600">
                <li>Full AI suite</li>
                <li>24/7 dedicated support</li>
                <li>Custom development</li>
                <li>Advanced analytics</li>
                <li>White-label options</li>
              </ul>
            </div>
          </div>
<<<<<<< HEAD
}

  );  ));)
                  key={plan.name}
                  className={`cyber-card hologram-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        {plan.cta}
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
      </div>
    </div>
  ).
  ).
  ).
}
};

export default PricingPage.
export default PricingPage.
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">"
          <div className="max-w-7xl mx-auto text-center">"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Transparent Pricing.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our industry-leading support and cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-16 px-4">"
          <div className="max-w-7xl mx-auto">"
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              AI & IT Solutions.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div.
                  key={plan.name}
                  className={`cyber-card hologram-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-500 scale-105' : '
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">"
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular.
>>>>>>> origin/main
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">"
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                    <p className="text-gray-300 mb-4">{plan.description}</p>"
                    <div className="flex items-baseline justify-center">"
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>"
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">"
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />"
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}'
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-16 px-4 bg-gray-900/30">"
          <div className="max-w-7xl mx-auto">"
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Micro SAAS Solutions.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasPlans.map((plan, index) => (
                <div.
                  key={plan.name}
                  className={`cyber-card hologram-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-500 scale-105' : '
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">"
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular.
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">"
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                    <p className="text-gray-300 mb-4">{plan.description}</p>"
                    <div className="flex items-baseline justify-center">"
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>"
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">"
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />"
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}'
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="py-16 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="cyber-card hologram-card p-12 text-center">"
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We create tailored AI and IT solutions that perfectly fit your unique business requirements. 
                Get a personalized quote and dedicated support.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">"
                <div className="text-left">"
                  <h3 className="text-xl font-bold text-white mb-4">What's Included:</h3>"'
                  <ul className="space-y-2 text-gray-300">"
                    <li className="flex items-center">"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Custom AI Development.
                    </li>
                    <li className="flex items-center">"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Dedicated Project Manager.
                    </li>
                    <li className="flex items-center">"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      24/7 Technical Support.
                    </li>
                    <li className="flex items-center">"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Training & Documentation.
                    </li>
                  </ul>
                </div>
                
                <div className="text-left">"
                  <h3 className="text-xl font-bold text-white mb-4">Contact Us:</h3>"
                  <div className="space-y-4">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      <span>(302) 464-0950</span>
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center"
                >
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  Call Now.
                </a>
              </div>
<<<<<<< HEAD
export default PricingPage;
=======
        <title>Pricing - Zion Tech Group | Affordable AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from our flexible plans designed to fit your business needs and budget." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
              Transparent <span className="text-cyan-400">Pricing</span>
=======
        <meta name="description" content="Choose the perfect plan for your business. Flexible pricing options for AI and IT solutions with guaranteed ROI." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Pricing Plans
              </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All our solutions come with 
              guaranteed ROI and comprehensive support.
            </p>
          </div>

<<<<<<< HEAD
          {/* Service Tabs */}
          <div className="flex justify-center mb-12">"
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-2 border border-slate-700">
              {[
                { id: 'ai', label: 'AI Services', icon: Brain },'
                { id: 'it', label: 'IT Services', icon: Code },'
                { id: 'micro-saas', label: 'Micro SaaS', icon: Cloud }'
              ].map((tab) => {
                const Icon = tab.icon.
                const Component = () => {
  
                  return (
    <div>
  )
    </div>
  ).
  ).
  )
                  <button.
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ).
              })}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentServices().map((service, index) => (
              <div.
=======
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
                key={index}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular
                    ? 'border-purple-500 ring-2 ring-purple-500/20'
                    : 'border-gray-700'
                }`}
              >
<<<<<<< HEAD
                <div className="text-center mb-6">"
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>"
                  <div className="flex items-baseline justify-center space-x-2">"
                    <span className="text-4xl font-bold text-cyan-400">{service.price}</span>"
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">"
                    Market price: <span className="line-through">{service.marketPrice}</span>
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">"
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />"
                      <span className="text-gray-300 text-sm">{feature}</span>
=======
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold transition duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="inline h-5 w-5 ml-2" />
                </button>
              </div>
            ))}
          </div>

<<<<<<< HEAD
          {/* Enterprise Section */}
          <div className="mt-20 text-center">"
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">"
              <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>"
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We offer custom enterprise solutions tailored to your specific needs. 
                Contact us for a personalized quote and consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Contact Sales</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>Schedule Demo</span>
                  <Calendar className="w-5 h-5" />
=======
          {/* Guarantee Section */}
          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">300% ROI Guarantee</h2>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                We're so confident in our solutions that we guarantee a 300% return on investment 
                within the first year, or we'll refund your investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Learn More About Our Guarantee
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
<<<<<<< HEAD
          <div className="mt-20">"
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">"
                <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan anytime?</h3>"
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">"
                <h3 className="text-lg font-semibold text-white mb-3">Is there a free trial?</h3>"
                <p className="text-gray-300">We offer a 14-day free trial for all our services. No credit card required.</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">"
                <h3 className="text-lg font-semibold text-white mb-3">What support do you provide?</h3>"
                <p className="text-gray-300">We provide 24/7 email support and live chat during business hours for all plans.</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">"
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer refunds?</h3>"
                <p className="text-gray-300">Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.</p>'
=======
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Can I change plans anytime?</h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect 
                  immediately, and we'll prorate any billing differences.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-3">What's included in support?</h3>
                <p className="text-gray-300">
                  All plans include email support. Professional and Enterprise plans include 
                  priority support, and Enterprise includes 24/7 dedicated support.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Do you offer custom solutions?</h3>
                <p className="text-gray-300">
                  Yes, our Enterprise plan includes fully custom AI solutions tailored to your 
                  specific business needs and requirements.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Is there a free trial?</h3>
                <p className="text-gray-300">
                  We offer a 30-day free trial for our Professional plan. Contact us to set up 
                  your trial and see the value of our solutions firsthand.
                </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team today for a personalized consultation and custom pricing quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300">
                Get Free Consultation
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular.
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">"
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                    <p className="text-gray-300 mb-4">{plan.description}</p>"
                    <div className="flex items-baseline justify-center">"
                      <span className="text-5xl font-bold text-white">{plan.price}</span>"
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">"
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />"
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-16 px-4 bg-white/5">"
          <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-12">"
              <h2 className="text-4xl font-bold text-white mb-4">Add-on Services</h2>"
              <p className="text-xl text-gray-300">Enhance your plan with additional services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">"
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>"
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>"
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Guarantee */}
        <section className="py-16 px-4">"
          <div className="max-w-4xl mx-auto text-center">"
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl p-8 border border-green-500/30">"
              <Star className="w-16 h-16 text-green-400 mx-auto mb-6" />"
              <h2 className="text-3xl font-bold text-white mb-4">ROI Guarantee</h2>"
              <p className="text-xl text-gray-300 mb-6">"
                We guarantee a minimum 300% ROI within 12 months or we'll refund your investment.'
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">300%</div>"
                  <div className="text-gray-300">Minimum ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">12</div>"
                  <div className="text-gray-300">Months</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>"
                  <div className="text-gray-300">Money Back</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">"
          <div className="max-w-4xl mx-auto text-center">"
            <h2 className="text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>"
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific requirements and get a personalized quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">"
              <div className="flex items-center justify-center space-x-3">"
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">{contactInfo.phone}</div>"
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">"
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">{contactInfo.email}</div>"
                  <div className="text-gray-400 text-sm">Email us</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">"
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Middletown, DE</div>"
                  <div className="text-gray-400 text-sm">Our location</div>
                </div>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Custom Quote.
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
    </>
  ).
};

<<<<<<< HEAD
export default PricingPage.
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
=======
export default PricingPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
>>>>>>> origin/main
