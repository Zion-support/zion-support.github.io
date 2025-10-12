import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Receipt, Bot} from 'lucide-react';

export default function AIExpenseTrackerPa g e() {
  constfeatures= [
    {
      icon: <ReceiptclassName="w-5h-5ml-2" />,
      title: 'Smart Receipt Scanning',
      description: 'AI-poweredOCRtechnology automatical l y extracts data from receipts and invoices';
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Real-timeAnalytics',
      description: 'Comprehensi v e spending insights with predictive analytics and budget forecasti n g';
    },
    {
      icon: <BotclassName="w-5h-5ml-2" />,
      title: 'AI Categorizati o n',
      description: 'Automatical l y categoriz e s expenses using machine learning and learns from your patterns';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Bank-levelSecurity',
      description: '256-bitencryptionand secure cloud storage for all your financial data';
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: 'Smart Budgeting',
      description: 'AI-poweredbudgetrecommendatio n s based on your spending patterns and goals';
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Automated Workflows',
      description: 'Set up rules for automatic expense approval, reimburseme n t, and reporting';
    }
  ]

  const pricingPlans= [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individua l s and freelance r s',
      features: [
        'Unlimited receipts',
        'AI categorizati o n',
        'Basic analytics',
        'Mobile app access',
        'Cloud backup',
        'Email support';
      ],
      popular: false;
    },
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small businesses and teams',
      features: [
        'Everything in Personal',
        'Team collaborati o n',
        'Advanced analytics',
        'Custom categories',
        'API access',
        'Priority support',
        'Expense policies',
        'Multi-currencysupport';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Everything in Business',
        'Unlimited users',
        'Custom integratio n s',
        'Dedicated support',
        'Advanced reporting',
        'Compliance tools',
        'White-labeloption',
        'Custom workflows';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'David Kim',
      company: 'Freelance Designer',
      content: 'Saves me hours every week. The AI categorizati o n is incredibly accurate and the receipt scanning is flawless.',
      rating: 5,
      avatar: 'DK';
    },
    {
      name: 'Lisa Martinez',
      company: 'Small Business Owner',
      content: 'Finally found an expense tracker that actually understan d s my business needs. The analytics are game-changing.',
      rating: 5,
      avatar: 'LM';
    },
    {
      name: 'James Wilson',
      company: 'Finance Manager',
      content: 'Our team productivi t y increased by 40% since implementi n g this. The automated workflows are brilliant.',
      rating: 5,
      avatar: 'JW';
    }
  ]

  constbenefits= [
    {
      icon: <ClockclassName="w-5h-5ml-2" />,
      title: 'Save 5+ Hours Weekly',
      description: 'Automated data entry and categorizati o n eliminates manual work';
    },
    {
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      title: 'Reduce Costs by 15%',
      description: 'AI insights help identify spending patterns and optimizati o n opportuniti e s';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: '100% Accurate',
      description: 'AI-poweredvalidationensures data accuracy and compliance';
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Real-timeSync',
      description: 'Instant updates across all devices and team members';
    }
  ]

return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title />AI Expense Tracker - Zion Tech Group | Smart Financial Management</title>
        <meta name="description" content="Revolutiona r y AI-poweredexpensetracker with smart receipt scanning, automated categorizati o n, and real-timeanalytics. Save 5+ hours weekly. Starting at $9/month." />
        <meta name="keywords" content="AI expense tracker, receipt scanning, expense management, financial analytics, budget tracking, automated categorizati o n" />
        <meta name="robots" content="index, follow" />
        <linkrel="canonical" href="https://ziontechgro u p.com/micro-saas/ai-expense-tracker"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <DollarSignclassName="w-5h-5ml-2" />
            <span />AI-PoweredFinancialManagement</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Expense;
            <br />
            <span className="w-5h-5ml-2" />Tracker;
            </span>
          </h1>
          
          <p className="w-5h-5ml-2">Transform your financial management with AI-poweredexpensetracking, smart receipt scanning, 
            and automated categorizati o n. Save time and gain insights like never before.;
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-cyan-500/25hover:shadow-cyan-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="#pricing" className="groupborder-2border-cyan-400text-cyan-400px-10py-4rounded-xlfont-semiboldhover:bg-cyan-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
              <span />View Pricing</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">5+</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Hours Saved Weekly</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">15%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Average Cost Reduction</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">99.9%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Accuracy Rate</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">25 K+</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Active Users</div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Why Choose Our <span className="w-5h-5ml-2" />AI Expense Tracker?</span>
            </h2>
            <p className="w-5h-5ml-2">Experience the future of financial management with cutting-edgeAItechnology that works for you.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {benefits.map((benefit, index) => ())
              <divkey="{index}" className="text-centergroup" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{benefit.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{benefit.title}
                </h3>
                <p className="w-5h-5ml-2">{benefit.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Powerful Features for <span className="w-5h-5ml-2" />Smart Finance</span>
            </h2>
            <p className="w-5h-5ml-2">Everything you need to manage your finances efficient l y with AI-poweredintelligenc e and automation.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{feature.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <sectionid="pricing" className="py-20px-4bg-gradient-to-brfrom-slate-800/50to-purple-900/50relative" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Simple, Transpare n t <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the plan that fits your needs. All plans include our core AI features and secure cloud storage.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricingPla n s.map((plan, index) => ())
              <divkey="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2xl p-8bordertransition-allduration-300hover:scale-105hover:shadow-2xl ${>
                plan.popular;
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-brfrom-cyan-500/10 to-purple-500/10';
                  : 'border-white/20 hover: border-cyan-400/30';
              }`} />
                {plan.popular && ()
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Most Popular>
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                
                <ulclassName="w-5h-5ml-2" />
                  {plan.features.map((feature, featureInd e x) => ())
                    <likey="{featureInd e x}" className="flexitems-centerspace-x-3" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link;
                  to="/contact";
                  className="{`block" w-fulltext-centerpy-3rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-cyan-500to-purple-600text-whitehover:from-cyan-600hover:to-purple-700shadow-lgshadow-cyan-500/25';
                      : 'border-2border-cyan-400text-cyan-400hover: bg-cyan-400hover:text-gray-900';
                  }`}
                  />Get Started;
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonia l s Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Trusted by <span className="w-5h-5ml-2" />25,000+</span> Users;
            </h2>
            <p className="w-5h-5ml-2">See what our customers are saying about their success with our AI expense tracker.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {testimonia l s.map((testimoni a l, index) => ())
              <divkey="{index}" className="bg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.avatar}>
                  </div>
                  <div />
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.name}</div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.company}</div>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {[...Array(testimoni a l.rating)].map((_, i) => ())
                    <CheckSqua rekey="{i}" className="w-5h-5text-yellow-400fill-current"  />
                  ))}
                </div>
                <p className="w-5h-5ml-2">"{testimoni a l.content}"</p>
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
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <h2 className="w-5h-5ml-2" />
                  Ready to Transform Your <span className="w-5h-5ml-2" />Financial Management?</span>
                </h2>
                
                <p className="w-5h-5ml-2">Join thousands of users already saving time and money with our AI-poweredexpensetracker.;
                  Start your free trial today and experience the future of financial management.;
                </p>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <Linkto="/contact" className="groupbg-whitetext-cyan-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                  <Linkto="#pricing" className="groupborder-2border-whitetext-whitepx-10py-4rounded-xlfont-boldtext-lghover:bg-white/10transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                    <span />View All Plans</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <p />✓ 14-dayfreetrial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}