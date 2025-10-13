<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
'use client';
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/clean-main-20251013-145848
export default function Pricing() {
=======
import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

const PagePage: React.FC = () => {}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Shield, Users, Clock, DollarSign, Award, TrendingUp } from 'lucide-react';
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { CheckCircle, Star, Phone, Mail, MapPin, Zap, Brain, Cloud, Code } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-6266
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3

const PricingPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Phone, Mail } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
<<<<<<< HEAD
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
<<<<<<< HEAD
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard'
=======
        'Up to 5 AI services',
        'Basic IT support',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Basic analytics'
=======
      name: 'AI Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: '$1,500',
      period: '/month',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      features: [
        'AI Strategy Consultation',
        'Basic ML Model Development',
        'Monthly Performance Review',
        'Email Support',
        'Basic Analytics Dashboard',
        'Up to 5 AI Integrations'
>>>>>>> cursor/website-audit-and-update-with-deployment-6266
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
      ],
      popular: false
    },
    {
<<<<<<< HEAD
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
<<<<<<< HEAD
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions'
=======
        'Up to 15 AI services',
        'Priority IT support',
        'Phone & email support',
        'Advanced security',
        'Weekly reports',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager'
=======
      name: 'AI Professional',
      description: 'Comprehensive AI solutions for growing businesses',
      price: '$2,500',
      period: '/month',
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Advanced AI Strategy & Planning',
        'Custom ML Model Development',
        'AI Workflow Automation',
        'Priority Support (24/7)',
        'Advanced Analytics & Reporting',
        'Up to 15 AI Integrations',
        'Monthly Strategy Sessions',
        'Performance Optimization',
        'Security & Compliance Review'
>>>>>>> cursor/website-audit-and-update-with-deployment-6266
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
      ],
      popular: true
    },
    {
<<<<<<< HEAD
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
<<<<<<< HEAD
        'Custom AI Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee'
=======
        'Unlimited AI services',
        '24/7 IT support',
        'Dedicated support team',
        'Enterprise security',
        'Real-time reports',
        'Custom analytics',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee'
=======
      name: 'AI Enterprise',
      description: 'Complete AI transformation for large organizations',
      price: '$5,000',
      period: '/month',
      icon: Cloud,
      color: 'from-green-500 to-teal-600',
      features: [
        'Full AI Transformation Strategy',
        'Custom AI Solution Development',
        'Advanced Workflow Automation',
        'Dedicated Account Manager',
        'Real-time Analytics & Monitoring',
        'Unlimited AI Integrations',
        'Weekly Strategy Sessions',
        'Advanced Security & Compliance',
        'Custom Training & Support',
        'ROI Guarantee'
>>>>>>> cursor/website-audit-and-update-with-deployment-6266
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
      ],
      popular: false
    }
  ];

<<<<<<< HEAD
  const microSaasPlans = [
=======
<<<<<<< HEAD
  const addOns = [
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
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
        '1 User Account'
      ],
      popular: false
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
        'White-label Options'
      ],
      popular: true
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
        'Training & Consulting'
      ],
      popular: false
    }
  ];

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
<<<<<<< HEAD
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Advanced pricing solutions by Zion Tech Group" />
=======
<<<<<<< HEAD
        <title>Page - Zion Tech Group</title>
        <meta name="description" content=Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business. />
        <meta name="keywords" content=page, AI solutions, IT services, Zion Tech Group />
>>>>>>> origin/cursor/ad-creation-and-management-f267
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced pricing solutions by Zion Tech Group
          </p>
        </div>
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This page is under development. Please check back later for updates.
            </p>
          </div>
<div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$99<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600">
                <li>Basic AI features</li>
                <li>Email support</li>
                <li>Standard templates</li>
=======
      </div>
    <>
  </>
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>
<<<<<<< HEAD
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$299<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600">
                <li>Advanced AI features</li>
                <li>Priority support</li>
                <li>Custom templates</li>
                <li>Analytics dashboard</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$999<span className="text-lg text-gray-600">/month</span></p>
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
=======
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Pricing services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Pricing</h1>
          <p className="text-gray-300">Coming soon...</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD

  );  ));)
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
};

export default PricingPage;
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
export default PricingPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our industry-leading support and cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              AI & IT Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
<<<<<<< HEAD
                  key={plan.name}
                  className={`cyber-card hologram-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
=======
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
=======
  const addOnServices = [
    {
      name: 'AI Content Generation',
      price: '$500/month',
      description: 'Automated content creation for blogs, social media, and marketing'
    },
    {
      name: 'AI Data Analytics',
      price: '$750/month',
      description: 'Advanced data insights and predictive analytics'
    },
    {
      name: 'AI Cybersecurity',
      price: '$1,000/month',
      description: 'AI-powered security monitoring and threat detection'
    },
    {
      name: 'Quantum Computing Solutions',
      price: '$2,500/month',
      description: 'Next-generation quantum algorithms and security'
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT services. Choose from our flexible plans designed to meet your business needs and budget." />
        <meta name="keywords" content="AI pricing, IT services pricing, enterprise AI solutions, AI consulting costs, technology pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our 30-day money-back guarantee.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20' 
                      : 'border-white/20'
>>>>>>> cursor/website-audit-and-update-with-deployment-6266
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<<<<<<< HEAD
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
=======
<<<<<<< HEAD
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        {plan.cta}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Micro SAAS Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`cyber-card hologram-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We create tailored AI and IT solutions that perfectly fit your unique business requirements. 
                Get a personalized quote and dedicated support.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-4">What's Included:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Custom AI Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Dedicated Project Manager
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      24/7 Technical Support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Training & Documentation
                    </li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-4">Contact Us:</h3>
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
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
=======
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
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
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Add-on Services</h2>
              <p className="text-xl text-gray-300">Enhance your plan with additional services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Guarantee */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl p-8 border border-green-500/30">
              <Star className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">ROI Guarantee</h2>
              <p className="text-xl text-gray-300 mb-6">
                We guarantee a minimum 300% ROI within 12 months or we'll refund your investment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                  <div className="text-gray-300">Minimum ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">12</div>
                  <div className="text-gray-300">Months</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-300">Money Back</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific requirements and get a personalized quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">{contactInfo.phone}</div>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email us</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Middletown, DE</div>
                  <div className="text-gray-400 text-sm">Our location</div>
                </div>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
>>>>>>> cursor/website-audit-and-update-with-deployment-6266
    </>
  );
};

export default PricingPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
