import React from 'react'
import { Link  } from "react-router-dom";
export default function AIInventoryManagerPage() {
  const features = [
    {
      icon: <><Bot className="w-6h-6text-cyan-400" />,
      title: 'AI Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms'
    },
    {
      icon: <Package className="w-6h-6text-emerald-400" />,
      title: 'Smart Reorder Points',
      description: 'Automatically trigger reorders based on sales velocity and lead times'
    },
    {
      icon: <BarChart3 className="w-6h-6text-purple-400" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive inventory insights with predictive analytics and trend analysis'
    },
    {
      icon: <Zap className="w-6h-6text-orange-400" />,
      title: 'Automated Workflows',
      description: 'Streamline inventory processes with intelligent automation and alerts'
    },
    {
      icon: <Target className="w-6h-6text-pink-400" />,
      title: 'Multi-location Sync',
      description: 'Seamlessly manage inventory across multiple warehouses and stores'
    },
    {icon: <Shield className="w-6h-6text-red-400" />,
      title: 'Loss Prevention',
      description: 'AI-powered theft detection and shrinkage analysis with real-time alerts'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasting',
        'Mobile app access',
        'Email support',
        'Basic reporting',
        '1 warehouse location'
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
        'Multi-location support',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Barcode scanning',
        'Supplier integration'
      ],
      popular: true;
    },
    {name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited SKUs',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Retail Chain Owner',
      content: 'Reduced our inventory costs by 25% and eliminated stockouts completely. The AI forecasting is incredibly accurate.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Michael Torres',
      company: 'E-commerce Store',
      content: 'The automated reorder system saves us hours every week. Never run out of stock again.',
      rating: 5,
      avatar: 'MT'
    },
    {name: 'Sarah Kim',
      company: 'Manufacturing Company',
      content: 'Multi-location sync is a game-changer. We can see inventory across all our facilities in real-time.',
      rating: 5,
      avatar: 'SK'
    }
  ]

  const benefits = [
    {
      icon: <DollarSign className="w-8h-8text-cyan-400" />,
      title: '25% Cost Reduction',
      description: 'Optimize inventory levels and reduce carrying costs'
    },
    {
      icon: <Target className="w-8h-8text-emerald-400" />,
      title: '95% Accuracy',
      description: 'AI forecasting with industry-leading accuracy rates'
    },
    {
      icon: <Activity className="w-8h-8text-purple-400" />,
      title: 'Zero Stockouts',
      description: 'Smart reorder points prevent stockouts completely'
    },
    {icon: <Zap className="w-8h-8text-orange-400" />,
      title: 'Real-time Sync',
      description: 'Instant updates across all locations and devices'
    }
  ]

  const integrations = [
    { name: 'Shopify', icon: '🛍️' },
    { name: 'WooCommerce', icon: '🛒' },
    { name: 'Amazon', icon: '📦' },
    { name: 'eBay', icon: '🏪' },
    { name: 'QuickBooks', icon: '📊' },
    { name: 'Xero', icon: '💰' },
    { name: 'Sage', icon: '📈' },
    { name: 'NetSuite', icon: '☁️' },
    { name: 'Salesforce', icon: '⚡' },
    {name: 'Zapier', icon: '🔗' }
  ]

  return (
    <>div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20" ></div>
      <Helmet /></Helmet>
        <title   />AI Inventory Manager - Zion Tech Group | Smart Inventory Management</title>
        <meta name="description" content="Revolutionary AI-powered inventory management with demand forecasting, automated reordering, and real-time analytics. Reduce costs by 25%. Starting at $39/month." / / /></meta>
        <meta name="keywords" content="AI inventory management, demand forecasting, automated reordering, inventory analytics, stock management, warehouse management" / / /></meta>
        <meta name="robots" content="index, follow" / / /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-inventory-manager" /></link>
      </Helmet>

      {/* Hero Section */}
    <>section className="relative py-20px-4overflow-hidden" />
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" /></div><div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" /></div></>
        <>div className="relative max-w-7xlmx-autotext-center" ></div><div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30" ></div></>
            <Package className="w-4h-4" /></Package>
            <span   />AI-Powered Inventory Management</span>
          </div>
          
          <h1 className="text-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" /></h1>
            AI Inventory;
    <>br / />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent" >Manager;
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed" ></p>
              Transform your inventory management with AI-powered demand forecasting, automated reordering, 
            and real-time analytics. Reduce costs by 25% and eliminate stockouts completely.
          </p>
          
          <>div className="flex flex-col sm:flex-row gap-6justify-centermb-16" ></div>
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" ></Link>
          <span    /></span>
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRight>
            </Link><Link to="#pricing" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" ></Link></>
          <span    /></span>
        </Link>View Pricing</span>
              <><ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRight>
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xlmx-auto" ></div><div className="text-center" ></div></>
              <>div className="text-3 xl font-boldtext-cyan-400mb-2" />25%</div><div className="text-gray-300text-sm" />Cost Reduction</div></>
            <>div className="text-center" ></div><div className="text-3 xl font-boldtext-purple-400mb-2" />95%</div></>
              <>div className="text-gray-300text-sm" />Forecast Accuracy</div><div className="text-center" ></div></>
              <>div className="text-3 xl font-boldtext-pink-400mb-2" />0</div><div className="text-gray-300text-sm" />Stockouts</div></>
            <>div className="text-center" ></div><div className="text-3 xl font-boldtext-emerald-400mb-2" />15 K+</div></>
              <>div className="text-gray-300text-sm" />Active Users</div>
          </div>
      </section>

      {/* Benefits Section */}
    <>section className="py-20px-4relative" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" /></div><div className="relative max-w-7xlmx-auto" ></div></>
          <>div className="text-centermb-16" ></div>
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" /></h2>
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent" />AI Inventory Manager?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto" ></p>
              Experience the future of inventory management with cutting-edge AI technology that works for your business.
    <>/p>
          </div><div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" ></div></>
            {benefits.map((benefit, index) => (
    <>div key="{index}" className="text-centergroup" />
                <>div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300" >{benefit.icon}
                </div>

            {features.map((feature, index) => (
    <>div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300" >{feature.icon}
                </div>

            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular;
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' ></div>
                  : 'border-white/20 hover: border-cyan-400/30'></div>
              }`} />
                {plan.popular && (

            {testimonials.map((testimonial, index) => (
    <>div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="flex items-centermb-4" ></div><div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4" />{testimonial.avatar}
                  </div></>
                  <>div /></div><div className="font-semiboldtext-white" />{testimonial.name}</div></>
                    <>div className="text-gray-400text-sm" />{testimonial.company}</div>
                </div><div className="flexmb-4" ></div></>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" /></Star>
                  ))}
    <>/div>
                <p className="text-gray-300italic" ></p>
              "{testimonial.content}"</p>
              </div>
            ))}
    <>/div>
      </section>

      {/* CTA Section */}
    <>section className="py-20px-4relative" />
        <>div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" /></div><div className="relative max-w-7xlmx-auto" ></div></>
          <>div className="text-center" ></div><div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden" ></div></>
              <>div className="relativez-10" ></div>
                <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" /></h2>
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent" />Inventory Management?</span>
                </h2>
                
                <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed" ></p>
              Join thousands of businesses already reducing costs by 25% with our AI-powered inventory manager. 
                  Start your free trial today and experience the future of inventory management.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6justify-centermb-8" ></div>
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" ></Link>
          <span    /></span>
        </Link>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRight>
                  </Link><Link to="#pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" ></Link></>
          <span    /></span>
        </Link>View All Plans</span>
                    <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRight>
                  </Link>
                </div><div className="text-white/80text-sm" ></div></>
                  <p />✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
    </>
                            </div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
}}}})))))))