import { Helmet } from 'react-helmet-async'
import { Package, TrendingUp, BarChart3, AlertTriang l e, Zap, CheckCirc l e, ArrowRight, Star, Brain, Database, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIInventoryManagerPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI Demand Forecasti n g',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms that analyze sales patterns, seasonali t y, and market trends.',
      benefits: ['95% accuracy rate', 'Seasonal predictio n s', 'Market trend analysis', 'Automated reorder points']
    },
    {
      icon: <PackageclassName="w-5h-5ml-2" />,
      title: 'Smart Stock Optimizati o n',
      description: 'AI automatical l y optimizes stock levels to minimize carrying costs while preventing stockouts and overstock situations.',
      benefits: ['Cost optimizati o n', 'Stockout prevention', 'Overstock reduction', 'Dynamic reordering']
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Real-timeAnalytics',
      description: 'Comprehensi v e dashboards with real-timeinventoryinsights, performan c e metrics, and predictive analytics.',
      benefits: ['Live dashboards', 'Performan c e metrics', 'Trend analysis', 'Custom reports']
    },
    {
      icon: <AlertTriang leclassName="w-5h-5ml-2" />,
      title: 'Intellige n t Alerts',
      description: 'Smart notificatio n s for low stock, expiring items, unusual demand patterns, and supply chain disruptio n s.',
      benefits: ['Low stock alerts', 'Expiry warnings', 'Anomaly detection', 'Supply chain monitoring']
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Automated Reordering',
      description: 'AI-poweredautomaticpurchase orders based on demand forecasts, supplier performan c e, and cost optimizati o n.',
      benefits: ['Auto purchase orders', 'Supplier optimizati o n', 'Cost analysis', 'Lead time tracking']
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Multi-locationSync',
      description: 'Seamlessly manage inventory across multiple warehouses, stores, and distributi o n centers with real-timesynchronizatio n.',
      benefits: ['Multi-warehousesupport', 'Real-timesync', 'Location tracking', 'Transfer management']
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses with basic inventory needs',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasti n g',
        'Mobile app access',
        'Standard reports',
        'Email support';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses with complex inventory',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasti n g',
        'Multi-locationsupport',
        'API integratio n s',
        'Priority support',
        'Custom dashboards';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizatio n s with extensive inventory needs',
      features: [
        'Unlimited SKUs',
        'Full AI suite',
        'Custom integratio n s',
        'Dedicated support',
        'Advanced analytics',
        'White-labeloptions';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'David Kim',
      company: 'Retail Chain',
      content: 'AI Inventory Manager reduced our stockouts by 80% and cut carrying costs by 35%. The demand forecasti n g is incredibly accurate.',
      rating: 5,
      avatar: 'DK';
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commerceStore',
      content: 'The automated reordering feature saved us countless hours. We never run out of popular items anymore.',
      rating: 5,
      avatar: 'LM';
    },
    {
      name: 'James Wilson',
      company: 'Manufacturi n g Co.',
      content: 'Multi-locationsyncis a game-changer. We can now manage all our warehouses from one platform.',
      rating: 5,
      avatar: 'JW';
    }
  ]

  conststats= [
    { number: '95%', label: 'Forecast Accuracy', icon: <TrendingUpclassName="w-5h-5ml-2" /> ,},
    { number: '35%', label: 'Cost Reduction', icon: <DollarSignclassName="w-5h-5ml-2" /> ,},
    { number: '80%', label: 'Stockout Reduction', icon: <PackageclassName="w-5h-5ml-2" /> ,},
    { number: '50 K+', label: 'SKUs Managed', icon: <DatabaseclassName="w-5h-5ml-2" /> ,}
  ]

return (
    <>
      <Helmet></Helmet>
        <title />AI Inventory Manager - Smart Stock Management | Zion Tech Group</title>
        <meta name="description" content="Revolutiona r y AI-poweredinventorymanagement with demand forecasti n g, automated reordering, and real-timeanalytics. Reduce costs by 35% and stockouts by 80%." />
        <meta name="keywords" content="AI inventory management, demand forecasti n g, stock optimizati o n, automated reordering, inventory analytics, supply chain management" />
        <meta name="robots" content="index, follow" />
        <linkrel="canonical" href="https://ziontechgro u p.com/ai-inventory-manager"  />
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
            <span className="w-5h-5ml-2" />Manager Pro;
            </span>
          </h1>
          
          <p className="w-5h-5ml-2">Transform your inventory management with AI-powereddemandforecasti n g, 
            automated reordering, and intellige n t stock optimizati o n that reduces costs by 35%.;
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-gradient-to-rfrom-emerald-500to-cyan-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-emerald-600hover:to-cyan-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-emerald-500/25hover:shadow-emerald-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="#demo" className="groupborder-2border-emerald-400text-emerald-400px-10py-4rounded-xlfont-semiboldhover:bg-emerald-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
              <span />Watch Demo</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>
      </section>

      {/* Stats Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {stats.map((stat, index) => ())
              <divkey="{index}" className="text-centerbg-white/5backdrop-blur-smrounded-2xlp-6borderborder-white/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.icon}>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.number}>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.label}>
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Intellige n t <span className="w-5h-5ml-2" />Features</span>
            </h2>
            <p className="w-5h-5ml-2">Our AI-poweredinventorymanagement system uses advanced machine learning to optimize;
              your stock levels, predict demand, and automate critical inventory processes.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{feature.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {feature.benefits.map((benefit, benefitInd e x) => ())
                    <divkey="{benefitInd e x}" className="flexitems-centerspace-x-2text-gray-400text-sm" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Flexible <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the perfect plan for your inventory management needs. All plans include our core AI features;
              with scalable options for businesses of all sizes.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricingPla n s.map((plan, index) => ())
              <divkey="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2xl p-8bordertransition-allduration-300hover:scale-105 ${>
                plan.popular;
                  ? 'border-emerald-400/50 shadow-2xlshadow-emerald-500/20';
                  : 'border-white/20 hover: border-white/40';
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
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {plan.features.map((feature, featureInd e x) => ())
                    <divkey="{featureInd e x}" className="flexitems-centerspace-x-3" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link;
                  to="/contact";
                  className="{`block" w-fulltext-centerpy-3rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-emerald-500to-cyan-600text-whitehover:from-emerald-600hover:to-cyan-700shadow-lgshadow-emerald-500/25';
                      : 'border-2border-emerald-400text-emerald-400hover: bg-emerald-400hover:text-gray-900';
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
              Trusted by <span className="w-5h-5ml-2" />Industry Leaders</span>
            </h2>
            <p className="w-5h-5ml-2">See how AI Inventory Manager is transformi n g inventory management for businesses worldwide.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {testimonia l s.map((testimoni a l, index) => ())
              <divkey="{index}" className="bg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.avatar}>
                  </div>
                  <div />
                    <h4 className="w-5h-5ml-2" />{testimoni a l.name}</h4>
                    <p className="w-5h-5ml-2">{testimoni a l.company}</p>
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
          <h2 className="w-5h-5ml-2" />
            Ready to Optimize Your;
            <br />
            <span className="w-5h-5ml-2" />Inventory Management?;
            </span>
          </h2>
          <p className="w-5h-5ml-2">Join thousands of businesses already reducing costs and improving efficiency with AI Inventory Manager.;
            Start your free trial today - no setup fees required.;
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-whitetext-emerald-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="/pricing" className="groupborder-2border-whitetext-whitepx-10py-4rounded-xlfont-boldtext-lghover:bg-white/10transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
              <span />View All Plans</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>
      </section>
    </>
  )
}

export default AIInventoryManagerPa g e;