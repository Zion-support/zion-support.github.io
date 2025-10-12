'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const aiServicesPricing = [
    {
      name: 'AI Starter',
      price: { monthly: 999, yearly: 9999 },
      description: 'Perfect for small businesses exploring AI',
      features: [
        'Basic AI chatbot',
        'Simple analytics',
        'Email support',
        'Up to 1,000 interactions/month',
        'Standard integrations'
      ],
      popular: false,
      category: 'ai'
    },
    {
      name: 'AI Professional',
      price: { monthly: 2999, yearly: 29999 },
      description: 'Advanced AI solutions for growing businesses',
      features: [
        'Advanced AI models',
        'Custom training',
        'Priority support',
        'Up to 10,000 interactions/month',
        'All integrations',
        'API access',
        'Custom workflows'
      ],
      popular: true,
      category: 'ai'
    },
    {
      name: 'AI Enterprise',
      price: { monthly: 5999, yearly: 59999 },
      description: 'Complete AI transformation for large organizations',
      features: [
        'Unlimited AI models',
        'Custom AI development',
        '24/7 dedicated support',
        'Unlimited interactions',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false,
      category: 'ai'
    }
  ];
  const itServicesPricing = [;
    {
      name: 'IT Basic',
      price: { monthly: 1499, yearly: 14999 },
      description: 'Essential IT services for small businesses',
      features: [
        'Basic web development',
        'Cloud setup',
        'Email support',
        'Monthly maintenance',
        'Standard security'
      ],
      popular: false,
      category: 'it'
    },
    {
      name: 'IT Professional',
      price: { monthly: 3999, yearly: 39999 },
      description: 'Comprehensive IT solutions for growing companies',
      features: [
        'Full-stack development',
        'Cloud migration',
        'Priority support',
        '24/7 monitoring',
        'Advanced security',
        'DevOps automation',
        'Database management'
      ],
      popular: true,
      category: 'it'
    },
    {
      name: 'IT Enterprise',
      price: { monthly: 7999, yearly: 79999 },
      description: 'Complete IT transformation for large enterprises',
      features: [
        'Custom enterprise solutions',
        'Multi-cloud architecture',
        'Dedicated team',
        '24/7 phone support',
        'Enterprise security',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      category: 'it'
    }
  ];
  const microSaasPricing = [;
    {
      name: 'Micro SAAS Starter',
      price: { monthly: 99, yearly: 999 },
      description: 'Essential business tools for startups',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Email support',
        'Standard tools',
        '1 GB storage'
      ],
      popular: false,
      category: 'saas'
    },
    {
      name: 'Micro SAAS Professional',
      price: { monthly: 299, yearly: 2999 },
      description: 'Advanced tools for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        'All tools included',
        '10 GB storage',
        'Custom workflows',
        'API access'
      ],
      popular: true,
      category: 'saas'
    },
    {
      name: 'Micro SAAS Enterprise',
      price: { monthly: 599, yearly: 5999 },
      description: 'Complete business automation suite',
      features: [
        'Unlimited users',
        'AI-powered insights',
        '24/7 phone support',
        'Custom tools',
        'Unlimited storage',
        'Advanced automation',
        'Dedicated manager'
      ],
      popular: false,
      category: 'saas'
    }
  ];
  const addOns = [;
    {
      name: 'AI Content Generation',
      price: { monthly: 199, yearly: 1999 },
      description: 'Advanced AI-powered content creation',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'SEO optimization']
    },
    {
      name: 'Advanced Analytics',
      price: { monthly: 299, yearly: 2999 },
      description: 'Deep business intelligence and insights',
      features: ['Custom dashboards', 'Predictive analytics', 'Real-time reporting', 'Data visualization']
    },
    {
      name: 'Priority Support',
      price: { monthly: 199, yearly: 1999 },
      description: '24/7 priority support and faster response times',
      features: ['Phone support', 'Faster response', 'Dedicated support', 'SLA guarantee']
    },
    {
      name: 'Custom Integration',
      price: { monthly: 499, yearly: 4999 },
      description: 'Custom integrations with your existing systems',
      features: ['API development', 'Custom connectors', 'Data migration', 'Ongoing maintenance']
    }
  ];
  const faqs = [;
    {
      question: 'What is included in the free trial?',
      answer: 'Our free trial includes access to all features of the Professional plan for 14 days. No credit card required.'
    },
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom enterprise pricing for organizations with specific needs. Contact us for a custom quote.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. You only pay the monthly or annual subscription fee.'
    },
    {
      question: 'What happens if I exceed my usage limits?',
      answer: 'We will notify you before you reach your limits and offer options to upgrade or purchase additional capacity.'
    }
  ];
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0;)
    }).format(price);
  };

  const getSavings = (monthly: number, yearly: number) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - yearly;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return()
        <>
    <>
    <title>
</>Pricing - Zion Tech Group<>
    </title>
    <h1 className="text-4xl font-bold text-white mb-6">
</>Pricing<>
    </h1>
    <p className="text-lg text-gray-300 mb-8">
</>Professional pricing services coming soon.<>
    </p>
    </>
</>)
  );
}

    <>
    <>
    </>
</>
      <>
    <Helmet>
    </Helmet>
</>
        <title />Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing<>
    </title>
    <meta const name = "description", content="Transparent pricing for AI services, IT solutions, and micro SAAS tools. Choose the plan that fits your business needs with 14-day free trials." /  />
</><>
    </meta>
    <meta name="keywords", content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, business solutions" />
</><>
    </meta>
    <link rel="canonical", href="https://ziontechgroup.com/pricing"  />
</><>
    </link>
    </Helmet>
</>
      <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
        {/* Hero Section */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
          <>
    <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse", style="{{" animationDelay: '1 s' }}  />
    </div>
</>
          <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <DollarSign className="w-5h-5ml-2" />
    </DollarSign>
</>
              <span />Transparent Pricing<>
    </span>
    </div>
</>
            <>
    <h1 className="w-5h-5ml-2" />
    </h1>
</>
              Simple, Transparent{' '}
              <span className="w-5h-5ml-2" />Pricing;
              <>
    </span>
    </h1>
</>
            <p className="w-5h-5ml-2">Choose the plan that fits your business needs. All plans include 14-day free trials and no setup fees.
            </p>
            {/* Billing Toggle */}
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <span className="{`text-lg" ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}  />Monthly;
              <>
    </span>
    <button;
                onClick="{()" = />
</> setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2focus:ring-cyan-500focus:ring-offset-2"
              >
                <>
    <span;
                  className="{`inline-block" h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                 />
    </span>
</>
              <>
    </button>
    <span className="{`text-lg" ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}  />
</>Yearly;
              </span>
              {billingCycle === 'yearly' && (
                <span className="w-5h-5ml-2" />Save up to 20%
                </span>)
              )}
            <>
    </div>
    </section>
</>
        {/* AI Services Pricing */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <h2 className="w-5h-5ml-2" />
    </h2>
</>
                <span className="w-5h-5ml-2" />AI Services</span> Pricing;
              <>
    </h2>
    <p className="w-5h-5ml-2">
</>Advanced artificial intelligence solutions for every business size;
              <>
    </p>
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              {aiServicesPricing.map((plan, index) => (
                <>
    <div key={index} className="{`bg-white/10" backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`} />
    </div>
</>
                  {plan.popular && (
                    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                      <span className="w-5h-5ml-2" />Most Popular;
                      <>
    </span>
    </div>
</>)
                  )}
                  
                  <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                      <>
    <Brain className="w-5h-5ml-2" />
    </Brain>
</>
                    <>
    </div>
    <h3 className="w-5h-5ml-2" />
</>{plan.name}<>
    </h3>
    <p className="w-5h-5ml-2">
</>{plan.description}<>
    </p>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</></div>
                      {formatPrice(billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}
                      <span className="w-5h-5ml-2" />/{billingCycle === 'monthly' ? 'month' : 'year'}<>
    </span>
    </div>
</>
                    {billingCycle === 'yearly' && ()
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Save {getSavings(plan.price.monthly, plan.price.yearly)}%
                      </div>
                    )}
                  <>
    </div>
    <ul className="w-5h-5ml-2" />
</></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <>
    <li key={featureIndex} className="flex items-centerspace-x-3 text-gray-300" />
    </li>
</>
                        <>
    <CheckCircle className="w-5h-5ml-2" />
    </CheckCircle>
</>
                        <span />{feature}<>
    </span>
    </li>
</>)
                    ))}
                  <>
    </ul>
    <Link;</Link>
</></Link>
                    to="/contact"
                    className="{`block" w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />Start Free Trial;
                  <>
    </Link>
    </div>
</>
              ))}
            <>
    </div>
    </section>
</>
        {/* IT Services Pricing */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <h2 className="w-5h-5ml-2" />
    </h2>
</>
                <span className="w-5h-5ml-2" />IT Services</span> Pricing;
              <>
    </h2>
    <p className="w-5h-5ml-2">
</>Comprehensive technology solutions for modern businesses;
              <>
    </p>
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              {itServicesPricing.map((plan, index) => (
                <>
    <div key={index} className="{`bg-white/10" backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-emerald-400 scale-105' : ''}`} />
    </div>
</>
                  {plan.popular && (
                    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                      <span className="w-5h-5ml-2" />Most Popular;
                      <>
    </span>
    </div>
</>)
                  )}
                  
                  <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                      <>
    <Settings className="w-5h-5ml-2" />
    </Settings>
</>
                    <>
    </div>
    <h3 className="w-5h-5ml-2" />
</>{plan.name}<>
    </h3>
    <p className="w-5h-5ml-2">
</>{plan.description}<>
    </p>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</></div>
                      {formatPrice(billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}
                      <span className="w-5h-5ml-2" />/{billingCycle === 'monthly' ? 'month' : 'year'}<>
    </span>
    </div>
</>
                    {billingCycle === 'yearly' && ()
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Save {getSavings(plan.price.monthly, plan.price.yearly)}%
                      </div>
                    )}
                  <>
    </div>
    <ul className="w-5h-5ml-2" />
</></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <>
    <li key={featureIndex} className="flex items-centerspace-x-3 text-gray-300" />
    </li>
</>
                        <>
    <CheckCircle className="w-5h-5ml-2" />
    </CheckCircle>
</>
                        <span />{feature}<>
    </span>
    </li>
</>)
                    ))}
                  <>
    </ul>
    <Link;</Link>
</></Link>
                    to="/contact"
                    className="{`block" w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:from-emerald-600 hover:to-blue-700'
                        : 'border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-gray-900'
                    }`}
                    />Start Free Trial;
                  <>
    </Link>
    </div>
</>
              ))}
            <>
    </div>
    </section>
</>
        {/* Micro SAAS Pricing */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <h2 className="w-5h-5ml-2" />
    </h2>
</>
                <span className="w-5h-5ml-2" />Micro SAAS</span> Pricing;
              <>
    </h2>
    <p className="w-5h-5ml-2">
</>Ready-to-use business tools with AI-powered features;
              <>
    </p>
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              {microSaasPricing.map((plan, index) => (
                <>
    <div key={index} className="{`bg-white/10" backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''}`} />
    </div>
</>
                  {plan.popular && (
                    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                      <span className="w-5h-5ml-2" />Most Popular;
                      <>
    </span>
    </div>
</>)
                  )}
                  
                  <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                      <>
    <Zap className="w-5h-5ml-2" />
    </Zap>
</>
                    <>
    </div>
    <h3 className="w-5h-5ml-2" />
</>{plan.name}<>
    </h3>
    <p className="w-5h-5ml-2">
</>{plan.description}<>
    </p>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</></div>
                      {formatPrice(billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}
                      <span className="w-5h-5ml-2" />/{billingCycle === 'monthly' ? 'month' : 'year'}<>
    </span>
    </div>
</>
                    {billingCycle === 'yearly' && ()
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Save {getSavings(plan.price.monthly, plan.price.yearly)}%
                      </div>
                    )}
                  <>
    </div>
    <ul className="w-5h-5ml-2" />
</></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <>
    <li key={featureIndex} className="flex items-centerspace-x-3 text-gray-300" />
    </li>
</>
                        <>
    <CheckCircle className="w-5h-5ml-2" />
    </CheckCircle>
</>
                        <span />{feature}<>
    </span>
    </li>
</>)
                    ))}
                  <>
    </ul>
    <Link;</Link>
</></Link>
                    to="/contact"
                    className="{`block" w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover: bg-purple-400 hover:text-gray-900'
                    }`}
                    />Start Free Trial;
                  <>
    </Link>
    </div>
</>
              ))}
            <>
    </div>
    </section>
</>
        {/* Add-ons Section */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <h2 className="w-5h-5ml-2" />
    </h2>
</>
                Additional <span className="w-5h-5ml-2" />Services<>
    </span>
    </h2>
</>
              <p className="w-5h-5ml-2">Enhance your plan with these powerful add-ons;
              <>
    </p>
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              {addOns.map((addon, index) => (
                <>
    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20transition-all duration-300" />
    </div>
</>
                  <h3 className="w-5h-5ml-2" />{addon.name}<>
    </h3>
    <p className="w-5h-5ml-2">
</>{addon.description}<>
    </p>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</></div>)
                    {formatPrice(billingCycle === 'monthly' ? addon.price.monthly : addon.price.yearly)}
                    <span className="w-5h-5ml-2" />/{billingCycle === 'monthly' ? 'month' : 'year'}<>
    </span>
    </div>
</>
                  <>
    <ul className="w-5h-5ml-2" />
    </ul>
</>
                    {addon.features.map((feature, featureIndex) => (
                      <>
    <li key={featureIndex} className="flex items-center space-x-2text-gray-300text-sm" />
    </li>
</>
                        <>
    <CheckCircle className="w-5h-5ml-2" />
    </CheckCircle>
</>
                        <span />{feature}<>
    </span>
    </li>
</>)
                    ))}
                  <>
    </ul>
    <Link to="/contact", className="block w-full text-center py-2 rounded-lg font-semibold border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900transition-all duration-300">
</>Add to Plan;
                  <>
    </Link>
    </div>
</>
              ))}
            <>
    </div>
    </section>
</>
        {/* FAQ Section */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <h2 className="w-5h-5ml-2" />
    </h2>
</>
                Frequently Asked <span className="w-5h-5ml-2" />Questions<>
    </span>
    </h2>
</>
              <p className="w-5h-5ml-2">Everything you need to know about our pricing and services;
              <>
    </p>
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              {faqs.map((faq, index) => (
                <>
    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2 xl p-6 borderborder-white/20" />
    </div>
</>
                  <h3 className="w-5h-5ml-2" />{faq.question}<>
    </h3>
    <p className="w-5h-5ml-2">
</>{faq.answer}<>
    </p>
    </div>
</>)
              ))}
            <>
    </div>
    </section>
</>
        {/* CTA Section */}
        <>
    <section className="w-5h-5ml-2" />
    </section>
</>
          <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                <h2 className="w-5h-5ml-2" />Ready to Get Started?
                <>
    </h2>
    <p className="w-5h-5ml-2">
</>Start your free trial today and experience the power of our AI and IT solutions.
                <>
    </p>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</><>
    </div>
    <>
</>
                    <Link to="/contact", className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25">Start Free Trial;
                    <Link to="/contact", className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Contact Sales;
                  <>
    </>
    </Link>
</>
                <>
    </div>
    </div>
</>
        <>
    </section>
    </div>
</>
    </>
  );
};

export default PricingPage;
