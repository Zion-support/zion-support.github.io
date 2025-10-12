import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
'use client';

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
  const itServicesPricing = [
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
  const microSaasPricing = [
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
  const addOns = [
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
  const faqs = [
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
      minimumFractionDigits: 0
    }).format(price);
  };

  const getSavings = (monthly: number, yearly: number) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - yearly;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <>
      <Helmet />
        <title   />Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing</title>
        <meta const name = "description" content="Transparent pricing for AI services, IT solutions, and micro SAAS tools. Choose the plan that fits your business needs with 14-day free trials." / / />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, business solutions" / / />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        {/* Hero Section */}
        <section className="relative py-20px-4overflow-hidden" />
          <div className="absolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.4)_0%,transparent_50%)]animate-pulse" / />
          <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
          <div className="relative max-w-7 xlmx-autotext-center" />
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30" />
              <DollarSign className="w-4h-4" / />
              <span   />Transparent Pricing</span>
            </div>
            
            <h1 className="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8leading-tight" />
              Simple, Transparent{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"  />Pricing
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed" />
              Choose the plan that fits your business needs. All plans include 14-day free trials and no setup fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-centerspace-x-4mb-12" />
              <span className="{`text-lg" ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}  />Monthly
              </span>
              <button
                onClick="{()" = /> setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2focus:ring-cyan-500focus:ring-offset-2"
              >
                <span
                  className="{`inline-block" h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                / />
              </button>
              <span className="{`text-lg" ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}  />Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-fulltext-smfont-semibold"  />Save up to 20%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20px-4relative" />
          <div className="relative max-w-7xlmx-auto" />
            <div className="text-centermb-16" />
              <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />AI Services</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto" />
                Advanced artificial intelligence solutions for every business size
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-3gap-8" />
              {aiServicesPricing.map((plan, index) => (
                <div key="{index}" className="{`bg-white/10" backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`} />
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2transform-translate-x-1/2" />
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold"  />Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-centermb-8" />
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl flex items-center justify-centermx-automb-4" />
                      <Brain className="w-8h-8text-white" / />
                    </div>
                    <h3 className="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                    <p className="text-gray-400mb-4" />{plan.description}</p>
                    <div className="text-4 xl font-boldtext-whitemb-2" />
                      {formatPrice(billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}
                      <span className="text-lgtext-gray-400"   />/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400text-smfont-semibold"  />Save {getSavings(plan.price.monthly, plan.price.yearly)}%
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-centerspace-x-3text-gray-300" />
                        <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" / />
                        <span   />{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className="{`block" w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-20px-4relative" />
          <div className="relative max-w-7xlmx-auto" />
            <div className="text-centermb-16" />
              <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400bg-clip-texttext-transparent"   />IT Services</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto" />
                Comprehensive technology solutions for modern businesses
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-3gap-8" />
              {itServicesPricing.map((plan, index) => (
                <div key="{index}" className="{`bg-white/10" backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-emerald-400 scale-105' : ''}`} />
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2transform-translate-x-1/2" />
                      <span className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold"  />Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-centermb-8" />
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2 xl flex items-center justify-centermx-automb-4" />
                      <Settings className="w-8h-8text-white" / />
                    </div>
                    <h3 className="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                    <p className="text-gray-400mb-4" />{plan.description}</p>
                    <div className="text-4 xl font-boldtext-whitemb-2" />
                      {formatPrice(billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}
                      <span className="text-lgtext-gray-400"   />/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400text-smfont-semibold"  />Save {getSavings(plan.price.monthly, plan.price.yearly)}%
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-centerspace-x-3text-gray-300" />
                        <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" / />
                        <span   />{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className="{`block" w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:from-emerald-600 hover:to-blue-700'
                        : 'border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-gray-900'
                    }`}
                    />Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-20px-4relative" />
          <div className="relative max-w-7xlmx-auto" />
            <div className="text-centermb-16" />
              <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent"   />Micro SAAS</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto" />
                Ready-to-use business tools with AI-powered features
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-3gap-8" />
              {microSaasPricing.map((plan, index) => (
                <div key="{index}" className="{`bg-white/10" backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''}`} />
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2transform-translate-x-1/2" />
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold"  />Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-centermb-8" />
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2 xl flex items-center justify-centermx-automb-4" />
                      <Zap className="w-8h-8text-white" / />
                    </div>
                    <h3 className="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                    <p className="text-gray-400mb-4" />{plan.description}</p>
                    <div className="text-4 xl font-boldtext-whitemb-2" />
                      {formatPrice(billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}
                      <span className="text-lgtext-gray-400"   />/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400text-smfont-semibold"  />Save {getSavings(plan.price.monthly, plan.price.yearly)}%
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-centerspace-x-3text-gray-300" />
                        <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" / />
                        <span   />{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className="{`block" w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover: bg-purple-400 hover:text-gray-900'
                    }`}
                    />Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20px-4relative" />
          <div className="relative max-w-7xlmx-auto" />
            <div className="text-centermb-16" />
              <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Additional <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto" />
                Enhance your plan with these powerful add-ons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {addOns.map((addon, index) => (
                <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                  <h3 className="text-xl font-boldtext-whitemb-2"   />{addon.name}</h3>
                  <p className="text-gray-400mb-4text-sm" />{addon.description}</p>
                  <div className="text-2 xl font-boldtext-cyan-400mb-4" />
                    {formatPrice(billingCycle === 'monthly' ? addon.price.monthly : addon.price.yearly)}
                    <span className="text-smtext-gray-400"   />/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  <ul className="space-y-2mb-6" />
                    {addon.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-center space-x-2text-gray-300text-sm" />
                        <CheckCircle className="w-4 h-4text-green-400flex-shrink-0" / />
                        <span   />{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="block w-full text-center py-2 rounded-lg font-semibold border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900transition-allduration-300">Add to Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20px-4relative" />
          <div className="relative max-w-4xlmx-auto" />
            <div className="text-centermb-16" />
              <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Questions</span>
              </h2>
              <p className="text-xltext-gray-300" />
                Everything you need to know about our pricing and services
              </p>
            </div>

            <div className="space-y-6" />
              {faqs.map((faq, index) => (
                <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-6borderborder-white/20" />
                  <h3 className="text-xl font-boldtext-whitemb-3"   />{faq.question}</h3>
                  <p className="text-gray-300leading-relaxed" />{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20px-4" />
          <div className="max-w-7xlmx-auto" />
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xl p-12 text-centerrelativeoverflow-hidden" />
              <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" / />
              <div className="relativez-10" />
                <h2 className="text-4 xl font-boldtext-whitemb-6"  />Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xlmx-auto" />
                  Start your free trial today and experience the power of our AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-rowgap-4justify-center" />
                  <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25">Start Free Trial
                  </Link>
                  <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Contact Sales
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