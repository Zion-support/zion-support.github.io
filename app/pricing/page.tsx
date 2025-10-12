'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, ArrowRight, Star, Zap, 
  Users, Award, Phone, Mail, MapPin, 
  Calendar, Timer, Globe, TrendingUp, 
  Lightbulb, Monitor, Lock, Heart, 
  DollarSign, MessageCircle, FileText, 
  Rocket, Target, Cpu, Network, Activity, 
  Eye, Search, Filter, Download, Upload, 
  Share, Wifi2, Signal, Bluetooth, Camera, 
  Mic, Headphones, Speaker, Volume2, VolumeX, 
  Play, Pause, SkipForward, SkipBack, Repeat, 
  Shuffle, ThumbsUp, ThumbsDown, Bookmark, 
  Flag, AlertTriangle, Info, HelpCircle, Plus, 
  Minus, Edit, Trash2, Save, Copy, Paste, 
  Cut, Undo, Redo, RefreshCw, RotateCcw, 
  RotateCw, Move, Maximize, Minimize, Square, 
  Circle, Triangle, Hexagon, Octagon, Pentagon, 
  Star2, Heart2, Smile, Frown, Meh, Laugh, 
  Angry, Surprised, Confused, Wink, Kiss, 
  Tongue, Package
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const aiPricingPlans = [
    {
      name: 'AI Starter',
      price: '$500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI chatbot (up to 1,000 conversations/month)',
        'AI content generation (up to 10,000 words/month)',
        'Basic data analytics dashboard',
        'Email support',
        'Standard AI models',
        'Basic integrations'
      ],
      popular: false,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'AI Professional',
      price: '$1,500',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Advanced AI chatbot (up to 10,000 conversations/month)',
        'AI content generation (up to 50,000 words/month)',
        'Advanced analytics and insights',
        'Priority support',
        'Custom AI model training',
        'Advanced integrations',
        'Multi-channel deployment',
        'Custom branding'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'AI Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex AI requirements',
      features: [
        'Unlimited conversations and content generation',
        'Custom AI model development',
        'Dedicated AI specialist',
        '24/7 priority support',
        'Full customization',
        'White-label solutions',
        'Advanced security features',
        'SLA guarantees',
        'On-premise deployment options'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const itPricingPlans = [
    {
      name: 'IT Basic',
      price: '$2,500',
      period: '/project',
      description: 'Perfect for small projects and startups',
      features: [
        'Up to 40 hours of development',
        'Basic web or mobile app',
        'Standard hosting setup',
        'Email support',
        'Basic documentation',
        '3 months of maintenance'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'IT Professional',
      price: '$7,500',
      period: '/project',
      description: 'Ideal for medium-sized projects',
      features: [
        'Up to 120 hours of development',
        'Custom web and mobile applications',
        'Cloud infrastructure setup',
        'Priority support',
        'Comprehensive documentation',
        '6 months of maintenance',
        'Performance optimization',
        'Security implementation'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'IT Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale enterprise projects',
      features: [
        'Unlimited development hours',
        'Complex enterprise applications',
        'Full cloud migration',
        'Dedicated project manager',
        '24/7 support',
        'Ongoing maintenance',
        'Custom integrations',
        'Advanced security',
        'SLA guarantees'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const microSaasPricingPlans = [
    {
      name: 'Micro SAAS Basic',
      price: '$99',
      period: '/month',
      description: 'Single user access to our micro SAAS tools',
      features: [
        'Access to 5 micro SAAS tools',
        'Basic analytics',
        'Email support',
        'Standard templates',
        'Basic integrations',
        '1 user account'
      ],
      popular: false,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Micro SAAS Team',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams and growing businesses',
      features: [
        'Access to all micro SAAS tools',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        'Advanced integrations',
        'Up to 10 user accounts',
        'Team collaboration features',
        'Custom branding'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Micro SAAS Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with extensive needs',
      features: [
        'Access to all current and future tools',
        'Custom analytics dashboard',
        'Dedicated support manager',
        'Fully customized solutions',
        'White-label options',
        'Unlimited user accounts',
        'API access',
        'Custom integrations',
        'SLA guarantees'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const faqs = [
    {
      question: 'What is included in the monthly pricing?',
      answer: 'Monthly pricing includes all the features listed in each plan, ongoing support, regular updates, and maintenance. No hidden fees or additional charges.'
    },
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Do you offer custom pricing for large projects?',
      answer: 'Absolutely! For enterprise clients with specific requirements, we offer custom pricing and dedicated solutions tailored to your needs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all our services. No credit card required to get started.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits and offer options to upgrade or purchase additional capacity.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SAAS products. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, business solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Simple, Transparent
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                  Pricing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Free
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monthly subscription plans for our AI-powered solutions and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {aiPricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 scale-105' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Project-based pricing for our IT infrastructure and development services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {itPricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 relative ${
                    plan.popular 
                      ? 'border-purple-500/50 scale-105' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">SAAS</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monthly subscription plans for our micro SAAS tools and solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {microSaasPricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 relative ${
                    plan.popular 
                      ? 'border-green-500/50 scale-105' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                        : 'border border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have questions about our pricing? We've got answers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Choose your plan and start transforming your business with our AI and IT solutions today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;