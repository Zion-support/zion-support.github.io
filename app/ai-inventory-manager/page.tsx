import { Helmet  } from "react-helmet-async";
import { Package, TrendingUp, BarChart3, AlertTriangle, Zap, CheckCircle, ArrowRight, Star, Brain, Database, Shield, DollarSign  } from "lucide-react";
import { Link  } from "react-router-dom";
import React  from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt  } from "lucide-react";
import { Link  } from "react-router-dom";
const AIInventoryManagerPage: React.FC = () => {
  return (
  return (
  const features = [
    {
      icon: <><Brain className="w-8h-8text-cyan-400" />,
      title: 'AI Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms that analyze sales patterns, seasonality, and market trends.',
      benefits: ['95% accuracy rate', 'Seasonal predictions', 'Market trend analysis', 'Automated reorder points']
    
  );

  );
},
    {
      icon: <Package className="w-8h-8text-emerald-400" />,
      title: 'Smart Stock Optimization',
      description: 'AI automatically optimizes stock levels to minimize carrying costs while preventing stockouts and overstock situations.',
      benefits: ['Cost optimization', 'Stockout prevention', 'Overstock reduction', 'Dynamic reordering']
    },
    {
      icon: <BarChart3 className="w-8h-8text-purple-400" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with real-time inventory insights, performance metrics, and predictive analytics.',
      benefits: ['Live dashboards', 'Performance metrics', 'Trend analysis', 'Custom reports']
    },
    {
      icon: <AlertTriangle className="w-8h-8text-red-400" />,
      title: 'Intelligent Alerts',
      description: 'Smart notifications for low stock, expiring items, unusual demand patterns, and supply chain disruptions.',
      benefits: ['Low stock alerts', 'Expiry warnings', 'Anomaly detection', 'Supply chain monitoring']
    },
    {
      icon: <Zap className="w-8h-8text-orange-400" />,
      title: 'Automated Reordering',
      description: 'AI-powered automatic purchase orders based on demand forecasts, supplier performance, and cost optimization.',
      benefits: ['Auto purchase orders', 'Supplier optimization', 'Cost analysis', 'Lead time tracking']
    },
    {icon: <Shield className="w-8h-8text-pink-400" />,
      title: 'Multi-location Sync',
      description: 'Seamlessly manage inventory across multiple warehouses, stores, and distribution centers with real-time synchronization.',
      benefits: ['Multi-warehouse support', 'Real-time sync', 'Location tracking', 'Transfer management']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses with basic inventory needs',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasting',
        'Mobile app access',
        'Standard reports',
        'Email support'
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
        'Advanced AI forecasting',
        'Multi-location support',
        'API integrations',
        'Priority support',
        'Custom dashboards'
      ],
      popular: true;
    },
    {name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with extensive inventory needs',
      features: [
        'Unlimited SKUs',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Retail Chain',
      content: 'AI Inventory Manager reduced our stockouts by 80% and cut carrying costs by 35%. The demand forecasting is incredibly accurate.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commerce Store',
      content: 'The automated reordering feature saved us countless hours. We never run out of popular items anymore.',
      rating: 5,
      avatar: 'LM'
    },
    {name: 'James Wilson',
      company: 'Manufacturing Co.',
      content: 'Multi-location sync is a game-changer. We can now manage all our warehouses from one platform.',
      rating: 5,
      avatar: 'JW'
    }
  ]

  const stats = [
    { number: '95%', label: 'Forecast Accuracy', icon: <TrendingUp className="w-6h-6text-cyan-400" /> },
    { number: '35%', label: 'Cost Reduction', icon: <DollarSign className="w-6h-6text-emerald-400" /> },
    { number: '80%', label: 'Stockout Reduction', icon: <Package className="w-6h-6text-purple-400" /> },
    {number: '50 K+', label: 'SKUs Managed', icon: <Database className="w-6h-6text-orange-400" /> }
  ]

  return (
    <>>
      <Helmet></Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
        <title>AI Inventory Manager - Smart Stock Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered inventory management with demand forecasting, automated reordering, and real-time analytics. Reduce costs by 35% and stockouts by 80%." / / /></meta>
        <meta name="keywords" content="AI inventory management, demand forecasting, stock optimization, automated reordering, inventory analytics, supply chain management" / / /></meta>
        <meta name="robots" content="index, follow" / / /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/ai-inventory-manager" /></link>
      </Helmet></>

      {/* Hero Section */}
    <>section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900via-emerald-900to-slate-900" />
        <>div className="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.3)_0%,transparent_50%)]" /></div><div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" /></div></>
        <>div className="relative max-w-7xlmx-autotext-center" ></div><div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-emerald-400/30" ></div></>
            <Package className="w-4h-4" /></Package>
            <span   />AI-Powered Inventory Management</span>
          </div></>
          
          <h1 className="text-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" /></h1>
            AI Inventory;
    <>br / />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400bg-clip-texttext-transparent" >Manager Pro;
            </span>
          </h1></>
          
          <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed" ></p>
              Transform your inventory management with AI-powered demand forecasting, 
            automated reordering, and intelligent stock optimization that reduces costs by 35%.
          </p>
          
          <>div className="flex flex-col sm:flex-row gap-6justify-centermb-16" ></div>
            <Link to="/contact" className="group bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40transformhover:scale-105" ></Link>
          <span    /></span>
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRight>
            </Link><Link to="#demo" className="group border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" ></Link></>
          <span    /></span>
        </Link>Watch Demo</span>
              <><ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRight>
            </Link>
          </div>
      </section></>

      {/* Stats Section */}
    <>section className="py-20px-4bg-gray-900" />
        <div className="max-w-7xlmx-auto" ></div><div className="grid grid-cols-2md:grid-cols-4gap-8" ></div></>
            {stats.map((stat, index) => (
              <>div key="{index}" className="text-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" /></div><div className="flexjustify-centermb-4" />{stat.icon}
                </div></>
                <>div className="text-3 xl md:text-4xl font-bold text-white mb-2" />{stat.number}
                </div><div className="text-gray-300text-sm" />{stat.label}
                </div></>
            ))}
          </div>
      </section></>

      {/* Features Section */}
    <>section className="py-20 px-4 bg-gradient-to-brfrom-slate-800/50to-emerald-900/50" />
        <>div className="max-w-7xlmx-auto" ></div><div className="text-centermb-16" ></div></>
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" /></h2>
              Intelligent <span className="bg-gradient-to-r from-emerald-400 to-cyan-400bg-clip-texttext-transparent" />Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto" ></p>
              Our AI-powered inventory management system uses advanced machine learning to optimize;
              your stock levels, predict demand, and automate critical inventory processes.
    <>/p>
          </div></>
          
          <>div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8" ></div>
            {features.map((feature, index) => (
    <>div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300" >{feature.icon}
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-emerald-400transition-colors" >{feature.title}
                </h3>

            ))}
    <>/div>
      </section></>

      {/* Pricing Section */}
    <>section className="py-20px-4bg-gray-900" />
        <div className="max-w-7xlmx-auto" ></div>
            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular;
                  ? 'border-emerald-400/50 shadow-2 xl shadow-emerald-500/20' ></div>
                  : 'border-white/20 hover: border-white/40'></div>
              }`} />
                {plan.popular && (

            {testimonials.map((testimonial, index) => (
    <>div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <div className="flex items-centermb-4" ></div><div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4" />{testimonial.avatar}
                  </div></>
                  <>div></div>
            <h4 className="text-whitefont-semibold" />{testimonial.name}</h4>
                    <p className="text-gray-400text-sm" ></p>
              {testimonial.company}</p>
                  </div><div className="flex items-centermb-4" ></div></>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" /></Star>
                  ))}
    <>/div>
                <p className="text-gray-300italic" ></p>
              "{testimonial.content}"</p>
              </div></>
            ))}
    <>/div>
      </section></>

      {/* CTA Section */}
    <>section className="py-20 px-4 bg-gradient-to-r from-emerald-600via-cyan-600to-blue-600" />
        <div className="max-w-7xlmx-autotext-center" ></div>
          <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6" /></h2>
            Ready to Optimize Your;
    <>br / />
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300bg-clip-texttext-transparent" >Inventory Management?
            </span>
          </h2>
          <p className="text-xl sm:text-2 xl text-white/90 mb-8 max-w-4xlmx-auto" ></p>
              Join thousands of businesses already reducing costs and improving efficiency with AI Inventory Manager. 
            Start your free trial today - no setup fees required.
    <>/p>
          <div className="flex flex-col sm:flex-rowgap-6justify-center" ></div>
            <Link to="/contact" className="group bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" ></Link>
          <span    /></span>
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRight>
            </Link><Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" ></Link></>
          <span    /></span>
        </Link>View All Plans</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRight>
            </Link>
          </div>
      </section></>
  )
}

export default AIInventoryManagerPage;
    </>
                    </div></div></div></div></div></div></div></div></div></div></div>
}})))