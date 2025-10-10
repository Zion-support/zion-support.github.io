'use client';
import { CheckCircle, X, Calendar, MessageSquare, ArrowRight, Zap, Brain, Cloud, Shield, Code, BarChart } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 2999, yearly: 29999 },
      description: 'Perfect for small businesses getting started with AI',
      icon: Zap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      popular: false,
      features: [
        'AI Content Generation (10,000 words/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Security',
        'Up to 5 users',
        'Basic Integrations',
        'Monthly Reports'
      ],
      limitations: [
        'Limited AI models',
        'No custom training',
        'Basic support only'
      ]
    },
    {
      name: 'Professional',
      price: { monthly: 7999, yearly: 79999 },
      description: 'Ideal for growing businesses with advanced AI needs',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      popular: true,
      features: [
        'AI Content Generation (50,000 words/month)',
        'Advanced Analytics Dashboard',
        'Priority Support',
        'Enhanced Security',
        'Up to 25 users',
        'Advanced Integrations',
        'Weekly Reports',
        'Custom AI Models',
        'API Access',
        'Training & Onboarding'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ]
    },
    {
      name: 'Enterprise',
      price: { monthly: 19999, yearly: 199999 },
      description: 'Complete AI solution for large organizations',
      icon: Cloud,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      popular: false,
      features: [
        'Unlimited AI Content Generation',
        'Custom Analytics Dashboard',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Unlimited users',
        'Custom Integrations',
        'Real-time Reports',
        'Custom AI Development',
        'Full API Access',
        'Dedicated Account Manager',
        'Custom Training Programs',
        'SLA Guarantee',
        'White-label Options'
      ],
      limitations: []
    }
  ];

  const addOns = [
    {
      name: 'AI Automation Suite',
      description: 'Advanced workflow automation and process optimization',
      price: { monthly: 2000, yearly: 20000 },
      icon: Zap
    },
    {
      name: 'AI Analytics Pro',
      description: 'Advanced analytics and business intelligence',
      price: { monthly: 1500, yearly: 15000 },
      icon: BarChart
    },
    {
      name: 'AI Security Suite',
      description: 'Enhanced security and compliance features',
      price: { monthly: 1000, yearly: 10000 },
      icon: Shield
    },
    {
      name: 'Custom Development',
      description: 'Bespoke AI solutions and integrations',
      price: { monthly: 5000, yearly: 50000 },
      icon: Code
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'What happens if I exceed my usage limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can either upgrade your plan or purchase additional capacity as needed.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom pricing and solutions for enterprise clients with specific requirements. Contact us to discuss your needs.'
    },
    {
      question: 'What support options are available?',
      answer: 'Support varies by plan: Starter includes email support, Professional includes priority support, and Enterprise includes 24/7 dedicated support.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can accommodate enterprise payment terms for qualified clients.'
    }
  ];

  const calculateSavings = (monthlyPrice: number, yearlyPrice: number) => {
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - yearlyPrice;
    const percentage = Math.round((savings / monthlyTotal) * 100);
    return { savings, percentage };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"><div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">Pricing Plans<p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Choose the perfect plan for your business. All plans include our core AI services</p>
              with flexible options to scale as you grow.</p>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">14-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <ArrowRight className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-slate-800/50 rounded-lg p-1 flex">
              <button
                onClick={() =>setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              ></button>
                Monthly<button
                onClick={() =>setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              ></button>
                Yearly<span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">Save 17%</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">{plans.map((plan, index) => {
              const savings = calculateSavings(plan.price.monthly, plan.price.yearly);</div>
              return (<div
                  key={index}
                  className={`relative bg-slate-800/50 rounded-lg p-8 ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  } hover:bg-slate-700/50 transition-all duration-300`}
                >{plan.popular && (</div>
                    <div className="$2" />
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 ${plan.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`w-8 h-8 ${plan.color}`} />
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}<p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">${plan.price[billingCycle as keyof typeof plan.price].toLocaleString()}</span>
            <span className="text-gray-400 ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm font-medium">Save ${savings.savings.toLocaleString()} ({savings.percentage}% off)</div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start space-x-3">
                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  <button
                    onClick={() =>setSelectedPlan(plan.name.toLowerCase())}
                    className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  ></button>
                    {selectedPlan === plan.name.toLowerCase() ? 'Selected' : 'Choose Plan'}</button>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Add-on Services<p className="text-lg text-gray-300 max-w-3xl mx-auto">Enhance your plan with additional services and features<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{addOns.map((addon, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <addon.icon className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}<div className="text-2xl font-bold text-white mb-4">${addon.price[billingCycle as keyof typeof addon.price].toLocaleString()}<span className="text-gray-400 text-sm ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}<button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-colors">Add to Plan</button>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Common questions about our pricing and plans</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">{faqs.map((faq, index) => (</div>
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}<p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Start your 14-day free trial today. No credit card required, cancel anytime.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" >Start Free Trial</MessageSquare>
            </MessageSquare>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" >Schedule Demo</Calendar>
            </Calendar>
          </div>
        </div>
      </section>
    </div>
  );
}