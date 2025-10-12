import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
'use client';

const PricingPa g e: React.FC = () => {
  const [billingCyc l e, setBillingCyc l e] = useState('monthly');
  const aiServicesPricing= [
    {
      name: 'AI Starter',
      price: { monthly: 999, yearly: 9999 ,},
      description: 'Perfect for small businesses exploring AI',
      features: [
        'Basic AI chatbot',
        'Simple analytics',
        'Email support',
        'Up to 1,000 interactio n s/month',
        'Standard integratio n s';
      ],
      popular: false,
      category: 'ai';
    },
    {
      name: 'AI Professional',
      price: { monthly: 2999, yearly: 29999 ,},
      description: 'Advanced AI solutions for growing businesses',
      features: [
        'Advanced AI models',
        'Custom training',
        'Priority support',
        'Up to 10,000 interactio n s/month',
        'All integratio n s',
        'API access',
        'Custom workflows';
      ],
      popular: true,
      category: 'ai';
    },
    {
      name: 'AI Enterprise',
      price: { monthly: 5999, yearly: 59999 ,},
      description: 'Complete AI transformati o n for large organizatio n s',
      features: [
        'Unlimited AI models',
        'Custom AI developme n t',
        '24/7 dedicated support',
        'Unlimited interactio n s',
        'Custom integratio n s',
        'Dedicated account manager',
        'SLA guarantee';
      ],
      popular: false,
      category: 'ai';
    }
  ];
  const itServicesPricing= [
    {
      name: 'IT Basic',
      price: { monthly: 1499, yearly: 14999 ,},
      description: 'Essential IT services for small businesses',
      features: [
        'Basic web developme n t',
        'Cloud setup',
        'Email support',
        'Monthly maintenan c e',
        'Standard security';
      ],
      popular: false,
      category: 'it';
    },
    {
      name: 'IT Professional',
      price: { monthly: 3999, yearly: 39999 ,},
      description: 'Comprehensi v e IT solutions for growing companies',
      features: [
        'Full-stackdevelopmen t',
        'Cloud migration',
        'Priority support',
        '24/7 monitoring',
        'Advanced security',
        'DevOps automation',
        'Database management';
      ],
      popular: true,
      category: 'it';
    },
    {
      name: 'IT Enterprise',
      price: { monthly: 7999, yearly: 79999 ,},
      description: 'Complete IT transformati o n for large enterpris e s',
      features: [
        'Custom enterprise solutions',
        'Multi-cloudarchitectur e',
        'Dedicated team',
        '24/7 phone support',
        'Enterprise security',
        'Custom integratio n s',
        'SLA guarantee';
      ],
      popular: false,
      category: 'it';
    }
  ];
  const microSaasPricing= [
    {
      name: 'Micro SAAS Starter',
      price: { monthly: 99, yearly: 999 ,},
      description: 'Essential business tools for startups',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Email support',
        'Standard tools',
        '1 GB storage';
      ],
      popular: false,
      category: 'saas';
    },
    {
      name: 'Micro SAAS Professional',
      price: { monthly: 299, yearly: 2999 ,},
      description: 'Advanced tools for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        'All tools included',
        '10 GB storage',
        'Custom workflows',
        'API access';
      ],
      popular: true,
      category: 'saas';
    },
    {
      name: 'Micro SAAS Enterprise',
      price: { monthly: 599, yearly: 5999 ,},
      description: 'Complete business automation suite',
      features: [
        'Unlimited users',
        'AI-poweredinsights',
        '24/7 phone support',
        'Custom tools',
        'Unlimited storage',
        'Advanced automation',
        'Dedicated manager';
      ],
      popular: false,
      category: 'saas';
    }
  ];
  constaddOns= [
    {
      name: 'AI Content Generation',
      price: { monthly: 199, yearly: 1999 ,},
      description: 'Advanced AI-poweredcontentcreation',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'SEO optimizati o n']
    },
    {
      name: 'Advanced Analytics',
      price: { monthly: 299, yearly: 2999 ,},
      description: 'Deep business intelligen c e and insights',
      features: ['Custom dashboards', 'Predictive analytics', 'Real-timereporting', 'Data visualizati o n']
    },
    {
      name: 'Priority Support',
      price: { monthly: 199, yearly: 1999 ,},
      description: '24/7 priority support and faster response times',
      features: ['Phone support', 'Faster response', 'Dedicated support', 'SLA guarantee']
    },
    {
      name: 'Custom Integrati o n',
      price: { monthly: 499, yearly: 4999 ,},
      description: 'Custom integratio n s with your existing systems',
      features: ['API developme n t', 'Custom connectors', 'Data migration', 'Ongoing maintenan c e']
    }
  ];
  constfaqs= [
    {
      question: 'What is included in the free trial?',
      answer: 'Our free trial includes access to all features of the Professional plan for 14 days. No credit card required.';
    },
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediate l y.';
    },
    {
      question: 'Do you offer custom pricing for large organizatio n s?',
      answer: 'Yes, we offer custom enterprise pricing for organizatio n s with specific needs. Contact us for a custom quote.';
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.';
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. You only pay the monthly or annual subscripti o n fee.';
    },
    {
      question: 'What happens if I exceed my usage limits?',
      answer: 'We will notify you before you reach your limits and offer options to upgrade or purchase additional capacity.';
    }
  ];
  const formatPrice= (price: number) => {
    return new Intl.NumberForm a t('en-US', {)
      style: 'currency',
      currency: 'USD',
      minimumFractionDigi t s: 0;
    }).format(price);
  };

  constgetSavings= (monthly: number, yearly: number) => {
    const monthlyTotal= monthly * 12;
    constsavings= monthlyTot a l - yearly;
    return Math.round((savings / monthlyTot a l) * 100);
  };

return (
    <>
      <Helmet></Helmet>
        <title />Pricing - Zion Tech Group | Transpare n t AI & IT Solutions Pricing</title>
        <metaconstname= "description" content="Transpare n t pricing for AI services, IT solutions, and micro SAAS tools. Choose the plan that fits your business needs with 14-dayfreetrials." /  />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, business solutions" />
        <linkrel="canonical" href="https://ziontechgro u p.com/pricing"  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animationDel a y: '1 s' ,}}  />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <DollarSignclassName="w-5h-5ml-2" />
              <span />Transpare n t Pricing</span>
            </div>
            
            <h1 className="w-5h-5ml-2" />
              Simple, Transpare n t{' '}
              <span className="w-5h-5ml-2" />Pricing;
              </span>
            </h1>
            
            <p className="w-5h-5ml-2">Choose the plan that fits your business needs. All plans include 14-dayfreetrials and no setup fees.;
            </p>

            {/* Billing Toggle */}
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <span className="{`text-lg" ${billingCycle=== 'monthly' ? 'text-white' : 'text-gray-400'}`}  />Monthly;
              </span>
              <button;
                onClick="{()" = /> setBillingCyc l e(billingCycle=== 'monthly' ? 'yearly' : 'monthly')}
                className="relativeinline-flexh-6w-11items-centerrounded-fullbg-gray-600transition-colorsfocus:outline-nonefocus:ring-2focus:ring-cyan-500focus:ring-offset-2"
              >
                <span;
                  className="{`inline-block" h-4w-4transform rounded-fullbg-whitetransition-transform ${
                    billingCycle=== 'yearly' ? 'translate-x-6' : 'translate-x-1';
                  }`}
                 />
              </button>
              <span className="{`text-lg" ${billingCycle=== 'yearly' ? 'text-white' : 'text-gray-400'}`}  />Yearly;
              </span>
              {billingCycle=== 'yearly' && ()
                <span className="w-5h-5ml-2" />Save up to 20%;
                </span>
              )}
            </div>
        </section>

        {/* AI Services Pricing */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                <span className="w-5h-5ml-2" />AI Services</span> Pricing;
              </h2>
              <p className="w-5h-5ml-2">Advanced artificial intelligen c e solutions for every business size;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {aiServicesPrici n g.map((plan, index) => ())
                <divkey="{index}" className="{`bg-white/10" backdrop-blur-lgrounded-2xl p-8borderborder-white/20 hover: bg-white/20 transition-allduration-300relative ${plan.popular ? 'ring-2ring-cyan-400scale-105' : '',}`} />
                  {plan.popular && ()
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <span className="w-5h-5ml-2" />Most Popular;
                      </span>
                    </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <BrainclassName="w-5h-5ml-2" />
                    </div>
                    <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                    <p className="w-5h-5ml-2">{plan.description}</p>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      {formatPri c e(billingCycle=== 'monthly' ? plan.price.monthly : plan.price.yearly)}
                      <span className="w-5h-5ml-2" />/{billingCycle=== 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle=== 'yearly' && ()
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Save {getSavings(plan.price.monthly, plan.price.yearly)}%>
                      </div>
                    )}
                  </div>

                  <ulclassName="w-5h-5ml-2" />
                    {plan.features.map((feature, featureInd e x) => ())
                      <likey="{featureInd e x}" className="flexitems-centerspace-x-3text-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        <span />{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link;
                    to="/contact";
                    className="{`block" w-fulltext-centerpy-3rounded-lgfont-semiboldtransition-allduration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-rfrom-cyan-500to-purple-600text-whitehover:from-cyan-600hover:to-purple-700';
                        : 'border border-cyan-400text-cyan-400hover: bg-cyan-400hover:text-gray-900';
                    }`}
                    />Start Free Trial;
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* IT Services Pricing */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                <span className="w-5h-5ml-2" />IT Services</span> Pricing;
              </h2>
              <p className="w-5h-5ml-2">Comprehensi v e technology solutions for modern businesses;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {itServicesPrici n g.map((plan, index) => ())
                <divkey="{index}" className="{`bg-white/10" backdrop-blur-lgrounded-2xl p-8borderborder-white/20 hover: bg-white/20 transition-allduration-300relative ${plan.popular ? 'ring-2ring-emerald-400scale-105' : '',}`} />
                  {plan.popular && ()
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <span className="w-5h-5ml-2" />Most Popular;
                      </span>
                    </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <SettingsclassName="w-5h-5ml-2" />
                    </div>
                    <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                    <p className="w-5h-5ml-2">{plan.description}</p>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      {formatPri c e(billingCycle=== 'monthly' ? plan.price.monthly : plan.price.yearly)}
                      <span className="w-5h-5ml-2" />/{billingCycle=== 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle=== 'yearly' && ()
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Save {getSavings(plan.price.monthly, plan.price.yearly)}%>
                      </div>
                    )}
                  </div>

                  <ulclassName="w-5h-5ml-2" />
                    {plan.features.map((feature, featureInd e x) => ())
                      <likey="{featureInd e x}" className="flexitems-centerspace-x-3text-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        <span />{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link;
                    to="/contact";
                    className="{`block" w-fulltext-centerpy-3rounded-lgfont-semiboldtransition-allduration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-rfrom-emerald-500to-blue-600text-whitehover:from-emerald-600hover:to-blue-700';
                        : 'border border-emerald-400text-emerald-400hover: bg-emerald-400hover:text-gray-900';
                    }`}
                    />Start Free Trial;
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                <span className="w-5h-5ml-2" />Micro SAAS</span> Pricing;
              </h2>
              <p className="w-5h-5ml-2">Ready-to-usebusinesstools with AI-poweredfeatures;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {microSaasPrici n g.map((plan, index) => ())
                <divkey="{index}" className="{`bg-white/10" backdrop-blur-lgrounded-2xl p-8borderborder-white/20 hover: bg-white/20 transition-allduration-300relative ${plan.popular ? 'ring-2ring-purple-400scale-105' : '',}`} />
                  {plan.popular && ()
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <span className="w-5h-5ml-2" />Most Popular;
                      </span>
                    </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <ZapclassName="w-5h-5ml-2" />
                    </div>
                    <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                    <p className="w-5h-5ml-2">{plan.description}</p>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      {formatPri c e(billingCycle=== 'monthly' ? plan.price.monthly : plan.price.yearly)}
                      <span className="w-5h-5ml-2" />/{billingCycle=== 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle=== 'yearly' && ()
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Save {getSavings(plan.price.monthly, plan.price.yearly)}%>
                      </div>
                    )}
                  </div>

                  <ulclassName="w-5h-5ml-2" />
                    {plan.features.map((feature, featureInd e x) => ())
                      <likey="{featureInd e x}" className="flexitems-centerspace-x-3text-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        <span />{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link;
                    to="/contact";
                    className="{`block" w-fulltext-centerpy-3rounded-lgfont-semiboldtransition-allduration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-rfrom-purple-500to-pink-600text-whitehover:from-purple-600hover:to-pink-700';
                        : 'border border-purple-400text-purple-400hover: bg-purple-400hover:text-gray-900';
                    }`}
                    />Start Free Trial;
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* Add-onsSection */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Additional <span className="w-5h-5ml-2" />Services</span>
              </h2>
              <p className="w-5h-5ml-2">Enhance your plan with these powerful add-ons;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {addOns.map((addon, index) => ())
                <divkey="{index}" className="bg-white/10backdrop-blur-lgrounded-2xlp-6borderborder-white/20hover:bg-white/20transition-allduration-300" />
                  <h3 className="w-5h-5ml-2" />{addon.name}</h3>
                  <p className="w-5h-5ml-2">{addon.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {formatPri c e(billingCycle=== 'monthly' ? addon.price.monthly : addon.price.yearly)}
                    <span className="w-5h-5ml-2" />/{billingCycle=== 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  <ulclassName="w-5h-5ml-2" />
                    {addon.features.map((feature, featureInd e x) => ())
                      <likey="{featureInd e x}" className="flexitems-centerspace-x-2text-gray-300text-sm" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        <span />{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Linkto="/contact" className="blockw-fulltext-centerpy-2rounded-lgfont-semiboldborderborder-cyan-400text-cyan-400hover:bg-cyan-400hover:text-gray-900transition-allduration-300">Add to Plan;
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* FAQ Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Frequently Asked <span className="w-5h-5ml-2" />Questions</span>
              </h2>
              <p className="w-5h-5ml-2">Everything you need to know about our pricing and services;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {faqs.map((faq, index) => ())
                <divkey="{index}" className="bg-white/10backdrop-blur-lgrounded-2xlp-6borderborder-white/20" />
                  <h3 className="w-5h-5ml-2" />{faq.question}</h3>
                  <p className="w-5h-5ml-2">{faq.answer}</p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <h2 className="w-5h-5ml-2" />Ready to Get Started?;
                </h2>
                <p className="w-5h-5ml-2">Start your free trial today and experience the power of our AI and IT solutions.;
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105shadow-lghover:shadow-cyan-500/25">Start Free Trial;
                  </Link>
                  <Linkto="/contact" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105">Contact Sales;
                  </Link>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default PricingPa g e;