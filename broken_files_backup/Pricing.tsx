import React, { useState } from 'react';
import {
  Check,
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  Lock,
  Headphones,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  MessageSquare,
  FileText,
  Settings,
  BarChart3,
  Database,
  Cpu,
  Brain,
  Rocket
} from 'lucide-react';
const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      limitations: [
        'Limited AI model access',
        'Basic analytics only',
        'No custom development',
        'Standard response time'
      ],
      color: 'from-blue-500 to-cyan-500',
      price: {
        monthly: 99,
        annual: 79
      },
      features: [
        'Up to 5 AI-powered workflows',
        'Basic automation templates',
        'Email support',
        'Standard integrations',
        '1GB data storage',
        'Basic analytics dashboard',
        'Community forum access',
        'Monthly reports'
      ],
      limitations: [
        'Limited to 3 team members',
        'Basic customization options',
        'Standard response time (24h)'
      ],
      icon: Rocket,
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      limitations: [
        'Limited quantum computing access',
        'Standard compliance features',
        'No dedicated account manager'
      ],
      color: 'from-purple-500 to-pink-500',
      price: {
        monthly: 299,
        annual: 239
      },
      features: [
        'Up to 25 AI-powered workflows',
        'Advanced automation templates',
        'Priority email support',
        'Premium integrations',
        '10GB data storage',
        'Advanced analytics dashboard',
        'Priority community access',
        'Weekly reports',
        'Custom workflow builder',
        'Team collaboration tools',
        'API access',
        'Advanced security features'
      ],
      limitations: [
        'Limited to 15 team members',
        'Advanced customization options',
        'Priority response time (8h)'
      ],
      icon: TrendingUp,
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
        '24/7 priority support',
        'Custom integrations',
        'On-site training',
        'SLA guarantees',
        'Compliance certifications'
      ],
      limitations: [],
      color: 'from-orange-500 to-red-500',
import React from 'react';
import { Link } from 'react-router-dom';
export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses starting their AI journey',
      features: [
        'AI Business Intelligence Dashboard',
        'Basic Cybersecurity Assessment',
        'Cloud Infrastructure Setup',
        '24/7 Support',
        'Monthly Reports',
        'Basic Training'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Everything in Starter',
        'Advanced AI & Machine Learning',
        'Quantum-Safe Security',
        'Custom Micro SAAS Solutions',
        'Priority Support',
        'Weekly Reports',
        'Advanced Training',
        'API Access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI Development',
        'Quantum Computing Solutions',
        'Full-Stack Development',
        'Dedicated Support Team',
        'Custom Integrations',
        'On-site Training',
        'SLA Guarantees'
      ],
      cta: 'Contact Sales',
      price: {
        monthly: 999,
        annual: 799
      },
      features: [
        'Unlimited AI-powered workflows',
        'Custom automation templates',
        '24/7 phone & email support',
        'Enterprise integrations',
        'Unlimited data storage',
        'Custom analytics dashboard',
        'Dedicated success manager',
        'Real-time reporting',
        'Advanced workflow builder',
        'Enterprise collaboration tools',
        'Full API access',
        'Enterprise security features',
        'Custom AI model training',
        'White-label solutions',
        'SLA guarantees',
        'On-premise deployment options'
      ],
      limitations: [
        'Unlimited team members',
        'Full customization options',
        'Immediate response time'
      ],
      icon: Award,
      popular: false
    }
  ];
import React, { useState } from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Check, Star, Zap, Shield, Users, Globe, Clock, MessageSquare } from 'lucide-react';
export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 99, yearly: 990 },
      features: [
        'Basic IT Support',
        'Email & Phone Support',
        'Security Monitoring',
        'Monthly Reports',
        '5 User Licenses',
        'Basic Analytics'
      ],
      popular: false,
      icon: Building,
      color: 'from-green-500 to-emerald-500'
    }
  ];
  const addOns = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: { monthly: 500, annual: 400 },
      icon: Brain
    },
    {
      name: 'Advanced Security',
      description: 'Enhanced security features and compliance',
      price: { monthly: 300, annual: 250 },
      icon: Shield
    },
    {
      name: 'Priority Support',
      description: '24/7 priority support and dedicated team',
      price: { monthly: 200, annual: 150 },
      icon: Users
    },
    {
      name: 'Custom Integrations',
      description: 'Custom API integrations and development',
      price: { monthly: 400, annual: 350 },
      icon: Zap
    }
  ];
  const benefits = [
    {
      icon: Award,
      title: 'Industry Leading',
      description: 'Recognized as top AI solutions provider'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support across all time zones'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance'
    },
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Get started in days, not months'
    }
  ];
  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. You only pay for the services you use.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans with full access to features.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time with no penalties or fees.'
    }
  ];
  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };
  const getCurrentPrice = (plan: any) => {
    return billingCycle === 'annual' ? plan.price.annual : plan.price.monthly;
  };
  const getSavings = (plan: any) => {
    if (billingCycle === 'annual') {
      const monthlyTotal = plan.price.monthly * 12;
      const annualTotal = plan.price.annual * 12;
      return Math.round(((monthlyTotal - annualTotal) / monthlyTotal) * 100);
    }
    return 0;
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Choose the perfect plan for your business needs. All plans include our core AI and
              technology solutions with flexible pricing options.
            </p>
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
  const addOns = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model training for your specific use case',
      price: {
        monthly: 199,
        annual: 159
      },
      features: ['Custom model training', 'Domain-specific optimization', 'Performance monitoring', 'Model updates']
    },
    {
      name: 'Advanced Analytics',
      description: 'Deep insights and predictive analytics',
      price: {
        monthly: 149,
        annual: 119
      },
      features: ['Predictive analytics', 'Custom dashboards', 'Data export', 'Advanced reporting']
    },
    {
      name: 'Priority Support',
      description: '24/7 dedicated support with guaranteed response times',
      price: {
        monthly: 99,
        annual: 79
      },
      features: ['24/7 phone support', 'Guaranteed 2-hour response', 'Dedicated support team', 'Priority ticket handling']
    },
    {
      name: 'Custom Integrations',
      description: 'Bespoke integrations with your existing systems',
      price: {
        monthly: 299,
        annual: 239
      },
      features: ['Custom API development', 'System integration', 'Testing & validation', 'Ongoing maintenance']
    }
  ];
  const benefits = [
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Get started in minutes with our pre-built templates and intuitive interface'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC2 compliance, encryption, and regular security audits'
    },
    {
      icon: Users,
      title: 'Scalable Solutions',
      description: 'Grow from startup to enterprise with flexible plans that adapt to your needs'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support across all time zones with dedicated success managers'
    }
  ];
  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and wire transfers for annual plans. Enterprise customers can also pay via invoice.'
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer: 'Yes, we offer special pricing for qualified nonprofits and educational institutions. Contact our sales team for details.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data is preserved for 30 days after cancellation. You can reactivate your account during this period to restore access.'
    }
  ];
  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };
  const getAnnualSavings = (monthlyPrice: number, annualPrice: number) => {
    const savings = ((monthlyPrice * 12) - (annualPrice * 12)) / (monthlyPrice * 12) * 100;
    return Math.round(savings);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our core AI capabilities
              with flexible options to scale as you grow.
            </p>
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-4 text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-4 text-sm ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save up to 20%
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const currentPrice = plan.price[billingCycle];
            const originalPrice = billingCycle === 'annual' ? plan.price.monthly * 12 : plan.price.monthly;
            const savings = billingCycle === 'annual' ? getAnnualSavings(plan.price.monthly, plan.price.annual) : 0;
            return (
              <div
                key={plan.id}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                    : 'border-gray-700 hover:border-cyan-500'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{formatPrice(currentPrice)}</span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
                  </div>
                  {billingCycle === 'annual' && savings > 0 && (
                    <div className="text-green-400 text-sm mb-4">
                      Save {savings}% with annual billing
                    </div>
                  )}
                  <button
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-cyan-500'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Current Plan' : 'Choose Plan'}
                  </button>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-4">What's included:</h4>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className="font-semibold text-gray-400 mt-6 mb-4">Limitations:</h4>
                      {plan.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0">•</div>
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Add-ons Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Enhance Your Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Add powerful features to any plan with our flexible add-ons.
              Mix and match to create the perfect solution for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {formatPrice(addon.price[billingCycle])}
                    </div>
                    <div className="text-gray-400 text-sm">/month</div>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 px-4 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors duration-200">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      name: 'AI Services Package',
      description: 'Advanced AI and machine learning solutions',
      price: { monthly: 199, yearly: 1990 },
      features: ['Custom AI Models', 'Data Analytics', 'Process Automation']
    },
    {
      name: 'Cybersecurity Suite',
      description: 'Comprehensive security and compliance solutions',
      price: { monthly: 149, yearly: 1490 },
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Reporting']
    },
    {
      name: 'Green IT Solutions',
      description: 'Sustainable technology and energy optimization',
      price: { monthly: 99, yearly: 990 },
      features: ['Energy Audits', 'Sustainable Hardware', 'Carbon Footprint Tracking']
    }
  ];
  const savings = billingCycle === 'yearly' ? 20 : 0;
  return (
    <>
      <SEO
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our comprehensive IT solutions, AI services, and tech talent services. Choose the plan that fits your business needs."
        keywords="pricing, IT services, AI solutions, cybersecurity, enterprise pricing, business solutions"
      />
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include our core features with transparent pricing and no hidden fees.
            </p>
          </div>
        </section>
        {/* Billing Toggle */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-zion-blue shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly Billing
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    billingCycle === 'yearly'
                      ? 'bg-white text-zion-blue shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Yearly Billing
                  {billingCycle === 'yearly' && (
                    <Badge className="ml-2 bg-green-100 text-green-700 text-xs">
                      Save {savings}%
                    </Badge>
                  )}
                </button>
              </div>
            </div>
            {/* Pricing Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-zion-blue scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to providing the best value and experience for our customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* FAQ Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our pricing and plans
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  const addOns = [
    {
      name: 'AI Training & Workshops',
      price: '$299',
      period: '/session',
      description: 'Custom AI training for your team'
    },
    {
      name: 'Security Audit',
      price: '$1,499',
      period: '/audit',
      description: 'Comprehensive security assessment'
    },
    {
      name: 'Cloud Migration',
      price: '$4,999',
      period: '/project',
      description: 'Complete cloud infrastructure setup'
    },
    {
      name: 'Custom Development',
      price: '$150',
      period: '/hour',
      description: 'Tailored software development'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI capabilities
            with flexible options to scale as you grow.
          </p>
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'annual' ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Annual
              {billingCycle === 'annual' && (
                <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                  Save up to 20%
                </span>
              )}
            </span>
          </div>
        </div>
      </section>
      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white/10 border-purple-500/50 scale-105'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${getCurrentPrice(plan)}</span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'annual' ? 'month' : 'month'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-green-400 text-sm mt-2">
                      Save ${getSavings(plan)}% with annual billing
                    </p>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
                  } text-white`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Add-on Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <addon.icon className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{addon.description}</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    ${billingCycle === 'annual' ? addon.price.annual : addon.price.monthly}
                  </div>
                  <span className="text-gray-400 text-sm">per month</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're committed to delivering exceptional value and results for your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-16 w-16 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our pricing and services
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have transformed their operations with our AI-powered solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of AI-driven automation.
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200">
              Contact Sales
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Questions? Our team is here to help you choose the right plan.
          </p>
        </div>
      </div>
      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already transforming their operations with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
              >
                Contact Sales
              </Link>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">{contactInfo.phone}</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 font-medium">{contactInfo.email}</p>
              <p className="text-gray-400 text-sm">Response within 2 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Website</h3>
              <p className="text-cyan-400 font-medium">{contactInfo.website}</p>
              <p className="text-gray-400 text-sm">Learn more about us</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Our Location</h3>
              <p className="text-cyan-400 font-medium text-sm">{contactInfo.address}</p>
              <p className="text-gray-400 text-sm">Delaware, USA</p>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  What's included in the pricing?
                </h3>
                <p className="text-gray-300">
                  All plans include the core software, technical support, regular updates, security patches, and access to our knowledge base. Enterprise plans include dedicated support and custom integrations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  Can I customize the solutions?
                </h3>
                <p className="text-gray-300">
                  Yes! All our solutions are highly customizable. We work with you to tailor the software to your specific business needs and integrate with your existing systems.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  What kind of support do you provide?
                </h3>
                <p className="text-gray-300">
                  We provide comprehensive support including 24/7 technical assistance, onboarding, training, and ongoing consultation. Enterprise clients get dedicated account managers.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  How long does implementation take?
                </h3>
                <p className="text-gray-300">
                  Implementation typically takes 2-8 weeks depending on complexity. We provide detailed project timelines and regular updates throughout the process.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  Do you offer training?
                </h3>
                <p className="text-gray-300">
                  Yes! We provide comprehensive training for your team, including user guides, video tutorials, and live training sessions. We also offer ongoing training as needed.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  What about data security?
                </h3>
                <p className="text-gray-300">
                  Security is our top priority. All solutions include enterprise-grade encryption, regular security audits, compliance certifications, and secure cloud hosting.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Digital Transformation Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already transformed their operations with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Pricing;