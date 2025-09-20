<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Pricing Page
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Welcome to our pricingpage page
          </p>
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  Star,
  DollarSign,
  Users,
  Zap,
  Brain,
  Shield,
  Cloud,
  Workflow,
  Rocket,
  Target,
  Heart,
  Award,
  TrendingUp,
  Cpu,
  GraduationCap,
  MessageCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  ArrowRight,
  CheckCircle,
  X,
  Info,
} from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      price: {
        monthly: 299,
        yearly: 2990,
      },
      features: [
        'AI-powered analytics dashboard',
        'Basic cybersecurity features',
        'Email support',
        '5 user accounts',
        '10GB storage',
        'Basic reporting',
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600',
      icon: Rocket,
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: {
        monthly: 599,
        yearly: 5990,
      },
      features: [
        'Everything in Starter',
        'Advanced AI & ML capabilities',
        'Enhanced cybersecurity',
        'Priority support',
        '25 user accounts',
        '100GB storage',
        'Advanced analytics',
        'Custom integrations',
        'API access',
      ],
      popular: true,
      color: 'from-cyan-500 to-blue-600',
      icon: Brain,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations',
      price: {
        monthly: 1299,
        yearly: 12990,
      },
      features: [
        'Everything in Professional',
        'Custom AI model development',
        'Enterprise-grade security',
        '24/7 dedicated support',
        'Unlimited user accounts',
        'Unlimited storage',
        'Custom development',
        'On-premise deployment',
        'SLA guarantees',
        'Dedicated account manager',
      ],
      popular: false,
      color: 'from-purple-500 to-pink-600',
      icon: Shield,
    },
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: {
        monthly: 299,
        yearly: 2990,
      },
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Advanced Security',
      description: 'Enhanced cybersecurity and compliance features',
      price: {
        monthly: 199,
        yearly: 1990,
      },
      icon: Shield,
      color: 'from-red-500 to-orange-500',
    },
    {
      name: 'Cloud Migration',
      description: 'Complete cloud infrastructure migration',
      price: {
        monthly: 499,
        yearly: 4990,
      },
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Custom Development',
      description: 'Tailored software development services',
      price: {
        monthly: 799,
        yearly: 7990,
      },
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also arrange custom payment terms.',
    },
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for our standard plans. Custom enterprise solutions may have one-time setup costs depending on complexity.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'Starter plans include email support, Professional plans get priority support, and Enterprise plans include 24/7 dedicated support with a dedicated account manager.',
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer: 'Yes, we offer special pricing for qualified nonprofit organizations. Please contact our sales team for more information.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.',
    },
  ];

  const savings = billingCycle === 'yearly' ? 20 : 0;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <DollarSign className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Simple
            </span>
            <br />
            Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core features 
            with transparent pricing and no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              {billingCycle === 'yearly' && (
                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                  Save 20%
                </span>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-cyan-500 bg-gray-900 scale-105'
                    : 'border-gray-700 bg-gray-900 hover:border-cyan-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cyan-500 text-white">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">$</span>
                    <span className="text-5xl font-bold">
                      {billingCycle === 'yearly' 
                        ? Math.round(plan.price.yearly / 12) 
                        : plan.price.monthly
                      }
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-gray-400 mt-1">
                      Billed annually (${plan.price.yearly})
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Current Plan' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add-ons */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${addon.color} rounded-lg flex items-center justify-center mb-4`}>
                  <addon.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  ${billingCycle === 'yearly' 
                    ? Math.round(addon.price.yearly / 12) 
                    : addon.price.monthly
                  }
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
                <Link
                  to={`/contact?addon=${addon.name.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Add Service
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your business and start transforming 
            your operations with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Sales
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
