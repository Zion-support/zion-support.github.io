'use client';
import { use State } from 'react';
import { Link } from 'react-router-dom';
import { Check Circle, Zap, Cloud, Brain, Dollar Sign, Settings } from 'lucide-react';

const Pricing Page: React.F C = () => {
  const [billing Cycle, set Billing Cycle] = use State('monthly');
  const ai Services Pricing = [
    {
      name: 'A I Starter',
      price: { monthly: 999, yearly: 9999 },
      description: 'Perfect for small businesses exploring A I',
      features: [
        'Basic A I chatbot',
        'Simple analytics',
        'Email support',
        'Up to 1,000 interactions/month',
        'Standard integrations'
      ],
      popular: false,
      category: 'ai'
    },
    {
      name: 'A I Professional',
      price: { monthly: 2999, yearly: 29999 },
      description: 'Advanced A I solutions for growing businesses',
      features: [
        'Advanced A I models',
        'Custom training',
        'Priority support',
        'Up to 10,000 interactions/month',
        'All integrations',
        'A P I access',
        'Custom workflows'
      ],
      popular: true,
      category: 'ai'
    },
    {
      name: 'A I Enterprise',
      price: { monthly: 5999, yearly: 59999 },
      description: 'Complete A I transformation for large organizations',
      features: [
        'Unlimited A I models',
        'Custom A I development',
        '24/7 dedicated support',
        'Unlimited interactions',
        'Custom integrations',
        'Dedicated account manager',
        'S L A guarantee'
      ],
      popular: false,
      category: 'ai'
    }
  ];
  const it Services Pricing = [
    {
      name: 'I T Basic',
      price: { monthly: 1499, yearly: 14999 },
      description: 'Essential I T services for small businesses',
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
      name: 'I T Professional',
      price: { monthly: 3999, yearly: 39999 },
      description: 'Comprehensive I T solutions for growing companies',
      features: [
        'Full-stack development',
        'Cloud migration',
        'Priority support',
        '24/7 monitoring',
        'Advanced security',
        'Dev Ops automation',
        'Database management'
      ],
      popular: true,
      category: 'it'
    },
    {
      name: 'I T Enterprise',
      price: { monthly: 7999, yearly: 79999 },
      description: 'Complete I T transformation for large enterprises',
      features: [
        'Custom enterprise solutions',
        'Multi-cloud architecture',
        'Dedicated team',
        '24/7 phone support',
        'Enterprise security',
        'Custom integrations',
        'S L A guarantee'
      ],
      popular: false,
      category: 'it'
    }
  ];
  const micro Saas Pricing = [
    {
      name: 'Micro S A A S Starter',
      price: { monthly: 99, yearly: 999 },
      description: 'Essential business tools for startups',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Email support',
        'Standard tools',
        '1G B storage'
      ],
      popular: false,
      category: 'saas'
    },
    {
      name: 'Micro S A A S Professional',
      price: { monthly: 299, yearly: 2999 },
      description: 'Advanced tools for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        'All tools included',
        '10G B storage',
        'Custom workflows',
        'A P I access'
      ],
      popular: true,
      category: 'saas'
    },
    {
      name: 'Micro S A A S Enterprise',
      price: { monthly: 599, yearly: 5999 },
      description: 'Complete business automation suite',
      features: [
        'Unlimited users',
        'A I-powered insights',
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
  const add Ons = [
    {
      name: 'A I Content Generation',
      price: { monthly: 199, yearly: 1999 },
      description: 'Advanced A I-powered content creation',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'S E O optimization']
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
      features: ['Phone support', 'Faster response', 'Dedicated support', 'S L A guarantee']
    },
    {
      name: 'Custom Integration',
      price: { monthly: 499, yearly: 4999 },
      description: 'Custom integrations with your existing systems',
      features: ['A P I development', 'Custom connectors', 'Data migration', 'Ongoing maintenance']
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
      answer: 'We accept all major credit cards, Pay Pal, and bank transfers for annual plans.'
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
  const format Price = (price: number) => {
    return new Intl.Number Format('en-U S', {
      style: 'currency',
      currency: 'U S D',
      minimum Fraction Digits: 0
    }).format(price);
  };

  const get Savings = (monthly: number, yearly: number) => {
    const monthly Total = monthly * 12;
    const savings = monthly Total - yearly;
    return Math.round((savings / monthly Total) * 100);
  };

  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Pricing - Zion Tech Group | Transparent A I & I T Solutions Pricing</t itle>
        <m etaconstname = "description" content="Transparent pricing for A I services, I T solutions, and micro S A A S tools. Choose the plan that fits your business needs with 14-day free trials." / / />
        <m eta name="keywords" content="pricing, A I services pricing, I T services pricing, micro S A A S pricing, business solutions" / / />
        <l inkrel="canonical" href="https://ziontechgroup.com/pricing" />
      </H elmet>

      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="r e l a tive py-20px-4overflow-hidden" />
          <d iv class Name="a b s o lute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.4)_0%,transparent_50%)]animate-pulse" />
          <d iv class Name="a b s o lute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animation Delay: '1 s' }} / />
          <d iv class Name="r e l a tive max-w-7 xlmx-autotext-center">
        </d iv>
            <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
              <D ollar Signclass Name="w-4h-4" / />
              <s pan>Transparent Pricing</s pan>
            </d iv>

            <h1 c lass Name="t e x t-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
              Simple, Transparent{' '}

              <s pan class Name="b g-g r a dient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Pricing
              </s pan>
            </h1>

            <p c lass Name="t e x t-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Choose the plan that fits your business needs. All plans include 14-day free trials and no setup fees.
            </p>

            {/* Billing Toggle */}

            <d iv class Name="f l ex i t ems-center justify-centerspace-x-4mb-12">
        </d iv>
              <s pan class Name="{`t e x t-lg" ${billing Cycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly
              </s pan>

              <b utton
                on Click="{()" = /> set Billing Cycle(billing Cycle === 'monthly' ? 'yearly' : 'monthly')}
                class Name="r e l a tive inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2focus:ring-cyan-500focus:ring-offset-2"
              >
                <s pan
                  class Name="{`i n l i ne-block" h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billing Cycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                / />

              </b utton>
              <s pan class Name="{`t e x t-lg" ${billing Cycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>Yearly
              </s pan>

              {billing Cycle === 'yearly' && (

                <s pan class Name="b g-g r e en-500 text-white px-3 py-1 rounded-fulltext-smfont-semibold">Save up to 20%
                </s pan>

              )}

            </d iv>
        </s ection>

        {/* A I Services Pricing */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">A I Services</s pan> Pricing
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Advanced artificial intelligence solutions for every business size

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {ai Services Pricing.map((plan, index) => (
                <d ivkey="{index}" class Name="{`b g-w h i te/10" backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`} />
                  {plan.popular && (

                    <d iv class Name="a b s o lute -top-3 left-1/2transform-translate-x-1/2">
        </d iv>
                      <s pan class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular
                      </s pan>
                    </d iv>

                  )}

                  <d iv class Name="t e x t-centermb-8">
        </d iv>
                    <d iv class Name="w-16 h-16 b g-g r a dient-to-r from-cyan-500 to-purple-600 rounded-2 xl flex items-center justify-centermx-automb-4">
        </d iv>
                      <B rainclass Name="w-8h-8t e xt-w h ite" / />
                    </d iv>
                    <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                    <p c lass Name="t e xt-g r ay-400mb-4">{plan.description}</p>
                    <d iv class Name="t e xt-4 xl f o nt-boldtext-whitemb-2">
        </d iv>

                      {format Price(billing Cycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}

                      <s pan class Name="t e x t-lgtext-gray-400">/{billing Cycle === 'monthly' ? 'month' : 'year'}</s pan>
                    </d iv>

                    {billing Cycle === 'yearly' && (

                      <d iv class Name="t e xt-g r een-400text-smfont-semibold">Save {get Savings(plan.price.monthly, plan.price.yearly)}%
                      </d iv>

                    )}
                  </d iv>

                  <u lclass Name="s p a c e-y-4mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l ikey="{feature Index}" class Name="f l ex i t ems-centerspace-x-3text-gray-300" />
                        <C heck Circleclass Name="w-5 h-5t e xt-g r een-400flex-shrink-0" / />
                        <s pan>{feature}</s pan>
                      </l i>

                    ))}
                  </u l>

                  <L ink 
                    to="/contact"
                    class Name="{`b l o c k" w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />Start Free Trial

                  </L ink>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* I T Services Pricing */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                <s pan class Name="b g-g r a dient-to-r from-emerald-400 to-blue-400bg-clip-texttext-transparent">I T Services</s pan> Pricing
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Comprehensive technology solutions for modern businesses

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {it Services Pricing.map((plan, index) => (
                <d ivkey="{index}" class Name="{`b g-w h i te/10" backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-emerald-400 scale-105' : ''}`} />
                  {plan.popular && (

                    <d iv class Name="a b s o lute -top-3 left-1/2transform-translate-x-1/2">
        </d iv>
                      <s pan class Name="b g-g r a dient-to-r from-emerald-500 to-blue-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular
                      </s pan>
                    </d iv>

                  )}

                  <d iv class Name="t e x t-centermb-8">
        </d iv>
                    <d iv class Name="w-16 h-16 b g-g r a dient-to-r from-emerald-500 to-blue-600 rounded-2 xl flex items-center justify-centermx-automb-4">
        </d iv>
                      <S ettingsclass Name="w-8h-8t e xt-w h ite" / />
                    </d iv>
                    <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                    <p c lass Name="t e xt-g r ay-400mb-4">{plan.description}</p>
                    <d iv class Name="t e xt-4 xl f o nt-boldtext-whitemb-2">
        </d iv>

                      {format Price(billing Cycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}

                      <s pan class Name="t e x t-lgtext-gray-400">/{billing Cycle === 'monthly' ? 'month' : 'year'}</s pan>
                    </d iv>

                    {billing Cycle === 'yearly' && (

                      <d iv class Name="t e xt-g r een-400text-smfont-semibold">Save {get Savings(plan.price.monthly, plan.price.yearly)}%
                      </d iv>

                    )}
                  </d iv>

                  <u lclass Name="s p a c e-y-4mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l ikey="{feature Index}" class Name="f l ex i t ems-centerspace-x-3text-gray-300" />
                        <C heck Circleclass Name="w-5 h-5t e xt-g r een-400flex-shrink-0" / />
                        <s pan>{feature}</s pan>
                      </l i>

                    ))}
                  </u l>

                  <L ink 
                    to="/contact"
                    class Name="{`b l o c k" w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:from-emerald-600 hover:to-blue-700'
                        : 'border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-gray-900'
                    }`}
                    />Start Free Trial

                  </L ink>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Micro S A A S Pricing */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                <s pan class Name="b g-g r a dient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent">Micro S A A S</s pan> Pricing
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Ready-to-use business tools with A I-powered features

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {micro Saas Pricing.map((plan, index) => (
                <d ivkey="{index}" class Name="{`b g-w h i te/10" backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''}`} />
                  {plan.popular && (

                    <d iv class Name="a b s o lute -top-3 left-1/2transform-translate-x-1/2">
        </d iv>
                      <s pan class Name="b g-g r a dient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular
                      </s pan>
                    </d iv>

                  )}

                  <d iv class Name="t e x t-centermb-8">
        </d iv>
                    <d iv class Name="w-16 h-16 b g-g r a dient-to-r from-purple-500 to-pink-600 rounded-2 xl flex items-center justify-centermx-automb-4">
        </d iv>
                      <Z apclass Name="w-8h-8t e xt-w h ite" / />
                    </d iv>
                    <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                    <p c lass Name="t e xt-g r ay-400mb-4">{plan.description}</p>
                    <d iv class Name="t e xt-4 xl f o nt-boldtext-whitemb-2">
        </d iv>

                      {format Price(billing Cycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}

                      <s pan class Name="t e x t-lgtext-gray-400">/{billing Cycle === 'monthly' ? 'month' : 'year'}</s pan>
                    </d iv>

                    {billing Cycle === 'yearly' && (

                      <d iv class Name="t e xt-g r een-400text-smfont-semibold">Save {get Savings(plan.price.monthly, plan.price.yearly)}%
                      </d iv>

                    )}
                  </d iv>

                  <u lclass Name="s p a c e-y-4mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l ikey="{feature Index}" class Name="f l ex i t ems-centerspace-x-3text-gray-300" />
                        <C heck Circleclass Name="w-5 h-5t e xt-g r een-400flex-shrink-0" / />
                        <s pan>{feature}</s pan>
                      </l i>

                    ))}
                  </u l>

                  <L ink 
                    to="/contact"
                    class Name="{`b l o c k" w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover: bg-purple-400 hover:text-gray-900'
                    }`}
                    />Start Free Trial

                  </L ink>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Add-ons Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                Additional <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Services</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Enhance your plan with these powerful add-ons

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {add Ons.map((addon, index) => (

                <d ivkey="{index}" class Name="b g-w h i te/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                  <h3 c lass Name="t e xt-xl f o nt-boldtext-whitemb-2">{addon.name}</h3>
                  <p c lass Name="t e xt-g r ay-400mb-4text-sm">{addon.description}</p>
                  <d iv class Name="t e xt-2 xl f o nt-boldtext-cyan-400mb-4">
        </d iv>

                    {format Price(billing Cycle === 'monthly' ? addon.price.monthly : addon.price.yearly)}

                    <s pan class Name="t e xt-s m text-gray-400">/{billing Cycle === 'monthly' ? 'month' : 'year'}</s pan>
                  </d iv>
                  <u lclass Name="s p a c e-y-2mb-6" />

                    {addon.features.map((feature, feature Index) => (

                      <l ikey="{feature Index}" class Name="f l ex i t ems-center space-x-2text-gray-300text-sm" />
                        <C heck Circleclass Name="w-4 h-4t e xt-g r een-400flex-shrink-0" / />
                        <s pan>{feature}</s pan>
                      </l i>

                    ))}

                  </u l>
                  <L ink to="/contact" class Name="b l o c k w-full text-center py-2 rounded-lg font-semibold border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900transition-allduration-300">Add to Plan
                  </L ink>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* F A Q Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="r e l a tive max-w-4xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                Frequently Asked <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Questions</s pan>
              </h2>
              <p c lass Name="t e xt-x l text-gray-300" />

                Everything you need to know about our pricing and services

              </p>
            </d iv>

            <d iv class Name="s p a c e-y-6">
        </d iv>
              {faqs.map((faq, index) => (

                <d ivkey="{index}" class Name="b g-w h i te/10 backdrop-blur-lg rounded-2 xl p-6borderborder-white/20" />
                  <h3 c lass Name="t e xt-xl f o nt-boldtext-whitemb-3">{faq.question}</h3>
                  <p c lass Name="t e xt-g r ay-300leading-relaxed">{faq.answer}</p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20p x-4" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="b g-g r a dient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xl p-12 text-centerrelativeoverflow-hidden">
        </d iv>
              <d iv class Name="a b s o lute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" / />
              <d iv class Name="r e l a tivez-10">
        </d iv>
                <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6">Ready to Get Started?
                </h2>
                <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-2xlmx-auto" />

                  Start your free trial today and experience the power of our A I and I T solutions.

                </p>
                <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                  <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25">Start Free Trial
                  </L ink>
                  <L ink to="/contact" class Name="b o r d er border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Contact Sales
                  </L ink>
                </d iv>
            </d iv>
        </s ection>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>

  );
};

export default Pricing Page;
