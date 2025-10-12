import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Package, TrendingUp, BarChart3, AlertTriangle, Zap, CheckCircle, ArrowRight, Star, Brain, Database, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      popular: false
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
      popular: true
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
      popular: false
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
    { number: '95%', label: 'Forecast Accuracy', icon: <TrendingUp className="w-5h-5ml-2" /> },
    { number: '35%', label: 'Cost Reduction', icon: <DollarSign className="w-5h-5ml-2" /> },
    { number: '80%', label: 'Stockout Reduction', icon: <Package className="w-5h-5ml-2" /> },
    { number: '50 K+', label: 'SKUs Managed', icon: <Database className="w-5h-5ml-2" /> }
  ]

  return (
    <>
      <Helmet>
        <title />AI Inventory Manager - Smart Stock Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered inventory management with demand forecasting, automated reordering, and real-time analytics. Reduce costs by 35% and stockouts by 80%." />
        <meta name="keywords" content="AI inventory management, demand forecasting, stock optimization, automated reordering, inventory analytics, supply chain management" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-inventory-manager"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <Package className="w-5h-5ml-2" />
            <span />AI-Powered Inventory Management</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Inventory
            <br />
            <span className="w-5h-5ml-2" />Manager Pro
            </span>
          </h1>
          
          <p className="w-5h-5ml-2">Transform your inventory management with AI-powered demand forecasting, 
            automated reordering, and intelligent stock optimization that reduces costs by 35%.
          </p>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link to="/contact" className="group bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Link to="#demo" className="group border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />Watch Demo</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>
      </section>

      {/* Stats Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6 borderborder-white/10" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.icon}
                </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}
                </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />
              Intelligent <span className="w-5h-5ml-2" />Features</span>
            </h2>
            <p className="w-5h-5ml-2">Our AI-powered inventory management system uses advanced machine learning to optimize 
              your stock levels, predict demand, and automate critical inventory processes.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300hover:scale-105" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key="{benefitIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
                      <CheckCircle className="w-5h-5ml-2" />
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />
              Flexible <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the perfect plan for your inventory management needs. All plans include our core AI features 
              with scalable options for businesses of all sizes.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-emerald-400/50 shadow-2 xl shadow-emerald-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white hover:from-emerald-600 hover:to-cyan-700 shadow-lg shadow-emerald-500/25'
                      : 'border-2 border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />
              Trusted by <span className="w-5h-5ml-2" />Industry Leaders</span>
            </h2>
            <p className="w-5h-5ml-2">See how AI Inventory Manager is transforming inventory management for businesses worldwide.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 borderborder-white/20" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div>
                  <div />
                    <h4 className="w-5h-5ml-2" />{testimonial.name}</h4>
                    <p className="w-5h-5ml-2">{testimonial.company}</p>
                  </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5h-5te x t-yellow-400fill-current"  />
                  ))}
                </div>
                <p className="w-5h-5ml-2">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <h2 className="w-5h-5ml-2" />
            Ready to Optimize Your
            <br />
            <span className="w-5h-5ml-2" />Inventory Management?
            </span>
          </h2>
          <p className="w-5h-5ml-2">Join thousands of businesses already reducing costs and improving efficiency with AI Inventory Manager. 
            Start your free trial today - no setup fees required.
          </p>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link to="/contact" className="group bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />View All Plans</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>
      </section>
    </>
  )
}

export default AIInventoryManagerPage;