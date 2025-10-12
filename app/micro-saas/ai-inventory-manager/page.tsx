import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot} from 'lucide-react';

export default function AIInventoryManagerPa g e() {
  constfeatures= [
    {
      icon: <BotclassName="w-5h-5ml-2" />,
      title: 'AI Demand Forecasti n g',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms';
    },
    {
      icon: <PackageclassName="w-5h-5ml-2" />,
      title: 'Smart Reorder Points',
      description: 'Automatical l y trigger reorders based on sales velocity and lead times';
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Real-timeAnalytics',
      description: 'Comprehensi v e inventory insights with predictive analytics and trend analysis';
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Automated Workflows',
      description: 'Streamline inventory processes with intellige n t automation and alerts';
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: 'Multi-locationSync',
      description: 'Seamlessly manage inventory across multiple warehouses and stores';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Loss Prevention',
      description: 'AI-poweredtheftdetection and shrinkage analysis with real-timealerts';
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasti n g',
        'Mobile app access',
        'Email support',
        'Basic reporting',
        '1 warehouse location';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI features',
        'Multi-locationsupport',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Barcode scanning',
        'Supplier integrati o n';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited SKUs',
        'All AI features',
        'Custom integratio n s',
        'Dedicated support',
        'White-labeloption',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Jennifer Walsh',
      company: 'Retail Chain Owner',
      content: 'Reduced our inventory costs by 25% and eliminated stockouts completely. The AI forecasti n g is incredibly accurate.',
      rating: 5,
      avatar: 'JW';
    },
    {
      name: 'Michael Torres',
      company: 'E-commerceStore',
      content: 'The automated reorder system saves us hours every week. Never run out of stock again.',
      rating: 5,
      avatar: 'MT';
    },
    {
      name: 'Sarah Kim',
      company: 'Manufacturi n g Company',
      content: 'Multi-locationsyncis a game-changer. We can see inventory across all our facilities in real-time.',
      rating: 5,
      avatar: 'SK';
    }
  ]

  constbenefits= [
    {
      icon: <DollarSignclassName="w-5h-5ml-2" />,
      title: '25% Cost Reduction',
      description: 'Optimize inventory levels and reduce carrying costs';
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: '95% Accuracy',
      description: 'AI forecasti n g with industry-leadingaccuracyrates';
    },
    {
      icon: <ActivityclassName="w-5h-5ml-2" />,
      title: 'Zero Stockouts',
      description: 'Smart reorder points prevent stockouts completely';
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Real-timeSync',
      description: 'Instant updates across all locations and devices';
    }
  ]

  const integrations= [
    { name: 'Shopify', icon: '🛍️' ,},
    { name: 'WooCommer c e', icon: '🛒' ,},
    { name: 'Amazon', icon: '📦' ,},
    { name: 'eBay', icon: '🏪' ,},
    { name: 'QuickBooks', icon: '📊' ,},
    { name: 'Xero', icon: '💰' ,},
    { name: 'Sage', icon: '📈' ,},
    { name: 'NetSuite', icon: '☁️' ,},
    { name: 'Salesforce', icon: '⚡' ,},
    { name: 'Zapier', icon: '🔗' ,}
  ]

return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title />AI Inventory Manager - Zion Tech Group | Smart Inventory Management</title>
        <meta name="description" content="Revolutiona r y AI-poweredinventorymanagement with demand forecasti n g, automated reordering, and real-timeanalytics. Reduce costs by 25%. Starting at $39/month." />
        <meta name="keywords" content="AI inventory management, demand forecasti n g, automated reordering, inventory analytics, stock management, warehouse management" />
        <meta name="robots" content="index, follow" />
        <linkrel="canonical" href="https://ziontechgro u p.com/micro-saas/ai-inventory-manager"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <PackageclassName="w-5h-5ml-2" />
            <span />AI-PoweredInventoryManagement</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Inventory;
            <br />
            <span className="w-5h-5ml-2" />Manager;
            </span>
          </h1>
          
          <p className="w-5h-5ml-2">Transform your inventory management with AI-powereddemandforecasti n g, automated reordering, 
            and real-timeanalytics. Reduce costs by 25% and eliminate stockouts completely.;
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
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">25%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Cost Reduction</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">95%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Forecast Accuracy</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">0</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Stockouts</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">15 K+</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Active Users</div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Why Choose Our <span className="w-5h-5ml-2" />AI Inventory Manager?</span>
            </h2>
            <p className="w-5h-5ml-2">Experience the future of inventory management with cutting-edgeAItechnology that works for your business.;
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
              Powerful Features for <span className="w-5h-5ml-2" />Smart Inventory</span>
            </h2>
            <p className="w-5h-5ml-2">Everything you need to manage inventory efficient l y with AI-poweredintelligenc e and automation.;
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

      {/* Integratio n s Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Seamless <span className="w-5h-5ml-2" />Integratio n s</span>
            </h2>
            <p className="w-5h-5ml-2">Connect with your favorite e-commerceplatforms, accounting software, and business tools.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {integratio n s.map((integrati o n, index) => ())
              <divkey="{index}" className="grouptext-center" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <span className="w-5h-5ml-2" />{integrati o n.icon}</span>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{integrati o n.name}>
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <sectionid="pricing" className="py-20px-4relative" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Simple, Transpare n t <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the plan that fits your business size and inventory needs. All plans include our core AI features.;
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
                
                <Link
                  to="/contact"
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
              Trusted by <span className="w-5h-5ml-2" />15,000+</span> Businesses;
            </h2>
            <p className="w-5h-5ml-2">See what our customers are saying about their success with our AI inventory manager.;
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
                    <Starkey="{i}" className="w-5h-5text-yellow-400fill-current"  />
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
                  Ready to Transform Your <span className="w-5h-5ml-2" />Inventory Management?</span>
                </h2>
                
                <p className="w-5h-5ml-2">Join thousands of businesses already reducing costs by 25% with our AI-poweredinventorymanager.;
                  Start your free trial today and experience the future of inventory management.;
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