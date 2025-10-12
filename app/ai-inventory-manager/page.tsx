import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Package, TrendingUp, BarChart3, AlertTriangle, Zap, CheckCircle, ArrowRight, Star, Brain, Database, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
export default AIInventoryManagerPage;
const AIInventoryManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms that analyze sales patterns, seasonality, and market trends.',
      benefits: ['95% accuracy rate', 'Seasonal predictions', 'Market trend analysis', 'Automated reorder points']
    },
    {
      icon: <Package className="w-5h-5ml-2" />,
      title: 'Smart Stock Optimization',
      description: 'AI automatically optimizes stock levels to minimize carrying costs while preventing stockouts and overstock situations.',
      benefits: ['Cost optimization', 'Stockout prevention', 'Overstock reduction', 'Dynamic reordering']
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with real-time inventory insights, performance metrics, and predictive analytics.',
      benefits: ['Live dashboards', 'Performance metrics', 'Trend analysis', 'Custom reports']
    },
    {
      icon: <AlertTriangle className="w-5h-5ml-2" />,
      title: 'Intelligent Alerts',
      description: 'Smart notifications for low stock, expiring items, unusual demand patterns, and supply chain disruptions.',
      benefits: ['Low stock alerts', 'Expiry warnings', 'Anomaly detection', 'Supply chain monitoring']
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Automated Reordering',
      description: 'AI-powered automatic purchase orders based on demand forecasts, supplier performance, and cost optimization.',
      benefits: ['Auto purchase orders', 'Supplier optimization', 'Cost analysis', 'Lead time tracking']
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
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
    {
      name: 'Enterprise',
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
    {
      name: 'James Wilson',
      company: 'Manufacturing Co.',
      content: 'Multi-location sync is a game-changer. We can now manage all our warehouses from one platform.',
      rating: 5,
      avatar: 'JW'
    }
  ]

  const stats = [
    { number: '95%', label: 'Forecast Accuracy', icon: <TrendingUp className="w-5h-5ml-2" /&gt; },</TrendingUp></TrendingUp>
    { number: '35%', label: 'Cost Reduction', icon: <DollarSign className="w-5h-5ml-2" /&gt; },</DollarSign></DollarSign>
    { number: '80%', label: 'Stockout Reduction', icon: <Package className="w-5h-5ml-2" /&gt; },</Package></Package>
    { number: '50 K+', label: 'SKUs Managed', icon: <Database className="w-5h-5ml-2" /&gt; }</Database></Database>
  ]

const Page: React.FC = () => {
  return (
<<<<<<< HEAD

        <>
      <title>AiInventoryManager - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AiInventoryManager</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aiinventorymanager services coming soon.</p>
            
              Contact Us

      </>
  );
}

=======
    <></>
      <Helmet></Helmet>
        <title>AI Inventory Manager - Smart Stock Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered inventory management with demand forecasting, automated reordering, and real-time analytics. Reduce costs by 35% and stockouts by 80%." /></meta>
        <meta name="keywords" content="AI inventory management, demand forecasting, stock optimization, automated reordering, inventory analytics, supply chain management" /></meta>
        <meta name="robots" content="index, follow" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/ai-inventory-manager"  /></link>
      </Helmet>
      {/* Hero Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <Package className="w-5h-5ml-2" /></Package>
            <span />AI-Powered Inventory Management</span>
          </div>
          <h1 className="w-5h-5ml-2" /></h1>
            AI Inventory;
            <br /></br>
            <span className="w-5h-5ml-2" />Manager Pro;
            </span>
          </h1>
          <p className="w-5h-5ml-2">Transform your inventory management with AI-powered demand forecasting, 
            automated reordering, and intelligent stock optimization that reduces costs by 35%.
          </p>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <Link to="/contact" className="groupbg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40transformhover:scale-105" /></Link>
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
            </Link>
            <Link to="#demo" className="groupborder-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" /></Link>
              <span />Watch Demo</span>
              <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
            </Link>
          </div>
      </section>
      {/* Stats Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {stats.map((stat, index) => (
              <div key={index} className="text-centerbg-white/5 backdrop-blur-sm rounded-2 xl p-6 borderborder-white/10" /></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.icon}
                </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}
                </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}
                </div>
            ))}
          </div>
      </section>
      {/* Features Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" /></h2>
              Intelligent <span className="w-5h-5ml-2" />Features</span>
            </h2>
            <p className="w-5h-5ml-2">Our AI-powered inventory management system uses advanced machine learning to optimize;
              your stock levels, predict demand, and automate critical inventory processes.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {features.map((feature, index) => (
              <div key={index} className="groupbg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300hover:scale-105" /></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2text-gray-400text-sm" /></div>
                      <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>
      {/* Pricing Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" /></h2>
              Flexible <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the perfect plan for your inventory management needs. All plans include our core AI features;
              with scalable options for businesses of all sizes.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular;
                  ? 'border-emerald-400/50 shadow-2 xl shadow-emerald-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} /></div>
                {plan.popular && (
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular;
                    </div>
                )}
                
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-centerspace-x-3" /></div>
                      <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </div>
                  ))}
                </div>
                <Link;</Link></Link>
                  to="/contact" 
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white hover:from-emerald-600 hover:to-cyan-700 shadow-lg shadow-emerald-500/25'
                      : 'border-2 border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-gray-900'
                  }`}
                  />Get Started;
                </Link>
              </div>
            ))}
          </div>
      </section>
      {/* Testimonials Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" /></h2>
              Trusted by <span className="w-5h-5ml-2" />Industry Leaders</span>
            </h2>
            <p className="w-5h-5ml-2">See how AI Inventory Manager is transforming inventory management for businesses worldwide.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10backdrop-blur-lg rounded-2 xl p-8 borderborder-white/20" /></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div>
                  <div /></div>
                    <h4 className="w-5h-5ml-2" />{testimonial.name}</h4>
                    <p className="w-5h-5ml-2">{testimonial.company}</p>
                  </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5h-5tex t-yellow-400fill-current"  /></Star>
                  ))}
                </div>
                <p className="w-5h-5ml-2">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>
      {/* CTA Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <h2 className="w-5h-5ml-2" /></h2>
            Ready to Optimize Your;
            <br /></br>
            <span className="w-5h-5ml-2" />Inventory Management?
            </span>
          </h2>
          <p className="w-5h-5ml-2">Join thousands of businesses already reducing costs and improving efficiency with AI Inventory Manager. 
            Start your free trial today - no setup fees required.
          </p>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <Link to="/contact" className="groupbg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" /></Link>
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
            </Link>
            <Link to="/pricing" className="groupborder-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" /></Link>
              <span />View All Plans</span>
              <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
            </Link>
          </div>
      </section>
    </>
  )
}
