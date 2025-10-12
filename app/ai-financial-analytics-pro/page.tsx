import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Building2, Wallet} from 'lucide-react';
'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AiFinancialAnalyticsProPa g e() {

  constfeatures= [
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI-PoweredInsights',
      description: 'Advanced machine learning algorithms analyze your financial data to provide actionable insights',
      benefits: ['Predictive analytics', 'Risk assessment', 'Trend identificati o n', 'Anomaly detection']
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Real-TimeAnalytics',
      description: 'Monitor your financial performan c e with live dashboards and instant reporting',
      benefits: ['Live data feeds', 'Instant alerts', 'Real-timeKPIs', 'Dynamic reporting']
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Enterprise Security',
      description: 'Bank-gradesecuritywith end-to-endencryptionand compliance standards',
      benefits: ['256-bitencryption', 'SOC 2 compliance', 'GDPR ready', 'Audit trails']
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: 'Custom Dashboards',
      description: 'Create personaliz e d financial dashboards tailored to your business needs',
      benefits: ['Drag-and-dropbuilder', 'Custom widgets', 'Role-basedviews', 'Mobile optimizati o n']
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Automated Reporting',
      description: 'Generate comprehensi v e financial reports automatical l y with AI-driveninsights',
      benefits: ['Scheduled reports', 'Custom templates', 'Multi-formatexport', 'Email delivery']
    },
    {
      icon: <GlobeclassName="w-5h-5ml-2" />,
      title: 'Multi-CurrencySupport',
      description: 'Handle multiple currencies and global financial operations seamlessly',
      benefits: ['Real-timeexchangerates', 'Currency conversion', 'Global compliance', 'Tax calculatio n s']
    }
  ];
  const analyticsTypes= [
    {
      category: 'Revenue Analytics',
      icon: <DollarSignclassName="w-5h-5ml-2" />,
      items: [
        'Revenue forecasti n g',
        'Sales performan c e tracking',
        'Customer lifetime value',
        'Revenue optimizati o n',
        'Market share analysis';
      ]
    },
    {
      category: 'Expense Management',
      icon: <CalculatorclassName="w-5h-5ml-2" />,
      items: [
        'Cost center analysis',
        'Budget variance tracking',
        'Expense categorizati o n',
        'Spend optimizati o n',
        'Vendor performan c e';
      ]
    },
    {
      category: 'Cash Flow Analysis',
      icon: <ActivityclassName="w-5h-5ml-2" />,
      items: [
        'Cash flow forecasti n g',
        'Working capital analysis',
        'Liquidity management',
        'Payment optimizati o n',
        'Credit risk assessment';
      ]
    },
    {
      category: 'Investment Analytics',
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      items: [
        'Portfolio performan c e',
        'Risk-returnanalysis',
        'Asset allocation',
        'Investment tracking',
        'ROI calculatio n s';
      ]
    },
    {
      category: 'Compliance & Audit',
      icon: <LockclassName="w-5h-5ml-2" />,
      items: [
        'Regulatory compliance',
        'Audit trail management',
        'Financial controls',
        'Risk monitoring',
        'Documentati o n';
      ]
    },
    {
      category: 'Predictive Modeling',
      icon: <BrainclassName="w-5h-5ml-2" />,
      items: [
        'Financial forecasti n g',
        'Scenario planning',
        'Risk modeling',
        'Market predictio n s',
        'Trend analysis';
      ]
    }
  ];
  const pricingPlans= [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 data sources',
        'Basic analytics dashboard',
        'Monthly reports',
        'Email support',
        'Standard integratio n s',
        '1 GB data storage';
      ],
      popular: false,
      cta: 'Start Free Trial';
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses and finance teams',
      features: [
        'Unlimited data sources',
        'Advanced analytics suite',
        'Real-timedashboards',
        'Priority support',
        'Custom integratio n s',
        '10 GB data storage',
        'AI-poweredinsights',
        'Custom reporting';
      ],
      popular: true,
      cta: 'Get Started';
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizatio n s with complex financial needs',
      features: [
        'Everything in Professional',
        'Custom AI models',
        'White-labeloptions',
        'Dedicated support',
        'Unlimited storage',
        'API access',
        'On-premisedeployment',
        'Custom compliance';
      ],
      popular: false,
      cta: 'Contact Sales';
    }
  ];
  const testimonials= [
    {
      name: 'Jennifer Walsh',
      company: 'FinTech Solutions',
      role: 'CFO',
      content: 'AI Financial Analytics Pro has transform e d our financial reporting. The AI insights help us make data-drivendecisionsand identify opportuniti e s we would have missed.',
      rating: 5,
      avatar: 'JW',
      results: '35% faster financial reporting';
    },
    {
      name: 'Robert Kim',
      company: 'Global Investmen t s',
      role: 'Financial Director',
      content: 'The predictive analytics are incredibly accurate. We can now forecast revenue with 95% accuracy, helping us plan better and reduce financial risks.',
      rating: 5,
      avatar: 'RK',
      results: '95% forecast accuracy';
    },
    {
      name: 'Lisa Thompson',
      company: 'Enterprise Corp',
      role: 'VP Finance',
      content: 'The automated reporting saves us 20+ hours per week. Our team can now focus on strategic analysis instead of manual data processing.',
      rating: 5,
      avatar: 'LT',
      results: '20+ hours saved weekly';
    }
  ];
  conststats= [
    { number: '500+', label: 'Financial Institutio n s', icon: <Building2className="w-5h-5ml-2" /> ,},
    { number: '1 M+', label: 'Transactio n s Analyzed', icon: <DatabaseclassName="w-5h-5ml-2" /> ,},
    { number: '99.9%', label: 'Data Accuracy', icon: <ShieldclassName="w-5h-5ml-2" /> ,},
    { number: '50%', label: 'Faster Reporting', icon: <ZapclassName="w-5h-5ml-2" /> ,}
  ];
  const integrations= [
    { name: 'QuickBooks', icon: <CalculatorclassName="w-5h-5ml-2" />, category: 'Accounting' ,},
    { name: 'Xero', icon: <FileTextclassName="w-5h-5ml-2" />, category: 'Accounting' ,},
    { name: 'SAP', icon: <DatabaseclassName="w-5h-5ml-2" />, category: 'ERP' ,},
    { name: 'Oracle', icon: <Building2className="w-5h-5ml-2" />, category: 'ERP' ,},
    { name: 'Salesforce', icon: <TrendingUpclassName="w-5h-5ml-2" />, category: 'CRM' ,},
    { name: 'HubSpot', icon: <TargetclassName="w-5h-5ml-2" />, category: 'CRM' ,},
    { name: 'Stripe', icon: <CreditCardclassName="w-5h-5ml-2" />, category: 'Payments' ,},
    { name: 'PayPal', icon: <WalletclassName="w-5h-5ml-2" />, category: 'Payments' ,}
  ];
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8py-16tex t-center">
        {/* Hero Section */}
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <h1 className="w-5h-5ml-2" />
            AI Financial Analytics{' '}
            <span className="w-5h-5ml-2" />Pro;
            </span>
          </h1>
          <p className="w-5h-5ml-2">Transform your financial analysis with AI-poweredinsights, real-timeanalytics, 
            and predictive modeling. Make smarter financial decisions with advanced intelligen c e.;
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
        >
          Start Free Trial;
              
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
            <Linkto="/ai-services" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colorsflexitems-centerjustify-center">View All AI Services;
            </Link>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">✓ 14-dayfreetrial • ✓ No credit card required • ✓ Bank-gradesecurity>
          </div>

        {/* Stats Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {stats.map((stat, index) => ())
                <divkey="{index}" className="text-center" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <stat.iconclassName="h-8w-8text-white"  />
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.number}</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.label}</div>
              ))}
            </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Advanced AI Features</h2>
            <p className="w-5h-5ml-2">Our AI Financial Analytics Pro leverages cutting-edgemachinelearning;
              to provide unprecedent e d insights into your financial data.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey="{index}" className="bg-slate-800/50rounded-2xlp-8borderborder-slate-700hover:border-cyan-500/30transition-allduration-300group" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{feature.icon}>
                  </div>
                  <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                  <ulclassName="w-5h-5ml-2" />
                    {feature.benefits.map((benefit, benefitInd e x) => ())
                      <likey="{benefitInd e x}" className="flexitems-centertext-smtext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </section>

        {/* Analytics Types Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Comprehensi v e Analytics</h2>
            <p className="w-5h-5ml-2">Cover every aspect of your financial operations with our comprehensi v e analytics suite.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {analyticsTyp e s.map((type, index) => ())
              <divkey="{index}" className="bg-slate-800/50rounded-xlp-6borderborder-slate-700hover:border-cyan-500/30transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {type.icon}
                  <h3 className="w-5h-5ml-2" />{type.category}</h3>
                </div>
                <ulclassName="w-5h-5ml-2" />
                  {type.items.map((item, itemIndex) => ())
                    <likey="{itemIndex}" className="flexitems-centertext-smtext-gray-300" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Integratio n s Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Seamless Integratio n s</h2>
            <p className="w-5h-5ml-2">Connect with your existing financial systems and tools for a unified analytics experience.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {integratio n s.map((integrati o n, index) => ())
              <divkey="{index}" className="bg-slate-800/50rounded-xlp-6borderborder-slate-700hover:border-cyan-500/30transition-allduration-300text-centergroup" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{integrati o n.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{integrati o n.name}</h3>
                <p className="w-5h-5ml-2">{integrati o n.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Choose Your Plan</h2>
            <p className="w-5h-5ml-2">Flexible pricing plans designed to meet your financial analytics needs at any scale.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricingPla n s.map((plan, index) => ())
              <divkey="{index}" className="{`bg-slate-800/50" rounded-2xlp-8border transition-allduration-300relative ${>
                plan.popular ? 'border-cyan-500/50 ring-2ring-cyan-500/20' : 'border-slate-700hover: border-cyan-500/30';
              }`} />
                {plan.popular && ()
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />Most Popular;
                    </span>
                  </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                </div>
                
                <ulclassName="w-5h-5ml-2" />
                  {plan.features.map((feature, featureInd e x) => ())
                    <likey="{featureInd e x}" className="flexitems-centertext-gray-300" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="{`w-full" py-3rounded-lgfont-semiboldtransition-allduration-300flex items-centerjustify-center ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-cyan-500to-purple-600text-whitehover:from-cyan-600hover:to-purple-700';
                      : 'border-2border-cyan-500text-cyan-400hover: bg-cyan-500hover:text-white';
                  }`} />
                  {plan.cta}
                  <ArrowRight className="w-5h-5ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonia l s */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />What Our Customers Say</h2>
              <p className="w-5h-5ml-2">Join hundreds of finance professiona l s who trust AI Financial Analytics Pro.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {testimonia l s.map((testimoni a l, index) => ())
                <divkey="{index}" className="bg-slate-800/50rounded-xlp-6borderborder-slate-700" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.avatar}>
                    </div>
                    <div />
                      <h4 className="w-5h-5ml-2" />{testimoni a l.name}</h4>
                      <p className="w-5h-5ml-2">{testimoni a l.role}</p>
                      <p className="w-5h-5ml-2">{testimoni a l.company}</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {[...Array(testimoni a l.rating)].map((_, i) => ())
                      <Starkey="{i}" className="w-4h-4text-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="w-5h-5ml-2">"{testimoni a l.content}"</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Result: {testimoni a l.results,}>
                  </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Ready to Transform Your Financial Analysis?;
            </h2>
            <p className="w-5h-5ml-2">Start your free trial today and experience the power of AI-drivenfinancialanalytics.;
              Join hundreds of finance professiona l s making smarter decisions with data.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300inline-flexitems-centerjustify-center" />
                Start Free Trial;
                <SparklesclassName="w-5h-5ml-2" />
              </Link>
              <Linkto="/about" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colorsinline-flexitems-centerjustify-center" />
                Learn More;
                <PieChartclassName="w-5h-5ml-2" />
              </Link>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <p />✓ 14-dayfreetrial • ✓ Bank-gradesecurity • ✓ 24/7 support • ✓ Cancel anytime</p>
            </div>
        </section>
      </div>
  );
}