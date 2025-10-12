import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
import { Package, TrendingUp, BarChart3, AlertTriangle, Zap, CheckCircle, ArrowRight, Star, Brain, Database, Shield, DollarSign } from 'lucide-react'

const AIInventoryManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8h-8text-cyan-400" />,
      title: 'AI Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms that analyze sales patterns, seasonality, and market trends.',
      benefits: ['95% accuracy rate', 'Seasonal predictions', 'Market trend analysis', 'Automated reorder points']
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
    {
      icon: <Shield className="w-8h-8text-pink-400" />,
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
    { number: '95%', label: 'Forecast Accuracy', icon: <TrendingUp className="w-6h-6text-cyan-400" /> },
    { number: '35%', label: 'Cost Reduction', icon: <DollarSign className="w-6h-6text-emerald-400" /> },
    { number: '80%', label: 'Stockout Reduction', icon: <Package className="w-6h-6text-purple-400" /> },
    { number: '50 K+', label: 'SKUs Managed', icon: <Database className="w-6h-6text-orange-400" /> }
  ]

  return (
    <>
      <Helmet />
        <title>AI Inventory Manager - Smart Stock Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered inventory management with demand forecasting, automated reordering, and real-time analytics. Reduce costs by 35% and stockouts by 80%."  />
        <meta name="keywords" content="AI inventory management, demand forecasting, stock optimization, automated reordering, inventory analytics, supply chain management"  />
        <meta name="robots" content="index, follow"  />
        <link rel="canonical" href="https://ziontechgroup.com/ai-inventory-manager" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20px-4overflow-hidden bg-gradient-to-brfrom-slate-900 via-emerald-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.3)_0%,transparent_50%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]">
        
        <div className="relative max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-rfrom-emerald-500/20 to-cyan-500/20 text-emerald-400 px-6py-3rounded-full text-smfont-medium mb-8 border border-emerald-400/30">
            <Package className="w-4h-4" />
            <span  >AI-Powered Inventory Management</span>
          </div>
          
          <h1 className="text-4xlsm:text-6xlmd:text-7xlfont-bold text-whitemb-8 leading-tight" />
            AI Inventory
            <br />
            <span className="bg-gradient-to-rfrom-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"  />Manager Pro
            </span>
          </h1>
          
          <p className="text-lgsm:text-xlmd:text-2xltext-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your inventory management with AI-powered demand forecasting, 
            automated reordering, and intelligent stock optimization that reduces costs by 35%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6justify-center mb-16" />
            <Link 
              to="/contact" 
              className="group bg-gradient-to-rfrom-emerald-500 to-cyan-600 text-whitepx-10py-4rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:scale-105"
             />
              <span  >Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="#demo" 
              className="group border-2 border-emerald-400 text-emerald-400 px-10py-4rounded-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
             />
              <span  >Watch Demo</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20px-4bg-gray-900" />
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2md:grid-cols-4gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-centerbg-white/5 backdrop-blur-sm rounded-2 xl p-6 border border-white/10" />
                <div className="flex justify-center mb-4"  />{stat.icon}
                </div>
                <div className="text-3xlmd:text-4xlfont-bold text-whitemb-2"  />{stat.number}
                </div>
                <div className="text-gray-300 text-sm"  />{stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20px-4bg-gradient-to-brfrom-slate-800/50 to-emerald-900/50" />
        <div className="max-w-7xl mx-auto">
        <div className="text-centermb-16">
            <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6" />
              Intelligent <span className="bg-gradient-to-rfrom-emerald-400 to-cyan-400 bg-clip-text text-transparent"  >Features</span>
            </h2>
            <p className="text-xltext-gray-300 max-w-4xl mx-auto">
              Our AI-powered inventory management system uses advanced machine learning to optimize 
              your stock levels, predict demand, and automate critical inventory processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3gap-8" />
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105" />
                <div className="flex items-center justify-center w-16h-16bg-gradient-to-rfrom-emerald-500 to-cyan-600 rounded-2 xl mb-6 group-hover:scale-110 transition-transform duration-300"  />{feature.icon}
                </div>
                <h3 className="text-2xlfont-bold text-whitemb-4 group-hover:text-emerald-400 transition-colors"  />{feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2" />
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm" />
                      <CheckCircle className="w-4h-4text-green-400" />
                      <span  >{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20px-4bg-gray-900" />
        <div className="max-w-7xl mx-auto">
        <div className="text-centermb-16">
            <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6" />
              Flexible <span className="bg-gradient-to-rfrom-emerald-400 to-cyan-400 bg-clip-text text-transparent"  >Pricing</span>
            </h2>
            <p className="text-xltext-gray-300 max-w-4xl mx-auto">
              Choose the perfect plan for your inventory management needs. All plans include our core AI features 
              with scalable options for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-3gap-8" />
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-emerald-400/50 shadow-2xl shadow-emerald-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" />
                    <div className="bg-gradient-to-rfrom-emerald-500 to-cyan-600 text-whitepx-6py-2rounded-full text-smfont-semibold"  />Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-centermb-8" />
                  <h3 className="text-2xlfont-bold text-whitemb-2"  >{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center" />
                    <span className="text-5xlfont-bold text-white"  >{plan.price}</span>
                    <span className="text-gray-400 ml-2"  >{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3" />
                      <CheckCircle className="w-5 h-5text-green-400 flex-shrink-0" />
                      <span className="text-gray-300"  >{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  className="{`block" w-full text-centerpy-3rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-rfrom-emerald-500 to-cyan-600 text-whitehover:from-emerald-600 hover:to-cyan-700 shadow-lg shadow-emerald-500/25'
                      : 'border-2 border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20px-4bg-gradient-to-brfrom-emerald-900/50 to-cyan-900/50" />
        <div className="max-w-7xl mx-auto">
        <div className="text-centermb-16">
            <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6" />
              Trusted by <span className="bg-gradient-to-rfrom-emerald-400 to-cyan-400 bg-clip-text text-transparent"  >Industry Leaders</span>
            </h2>
            <p className="text-xltext-gray-300 max-w-4xl mx-auto">
              See how AI Inventory Manager is transforming inventory management for businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-3gap-8" />
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20" />
                <div className="flex items-center mb-4" />
                  <div className="w-12h-12bg-gradient-to-rfrom-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-bold mr-4"  />{testimonial.avatar}
                  </div>
                  <div />
                    <h4 className="text-whitefont-semibold"  >{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4" />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5text-yellow-400fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20px-4bg-gradient-to-rfrom-emerald-600 via-cyan-600 to-blue-600" />
        <div className="max-w-7xl mx-auto text-center" />
          <h2 className="text-4xlsm:text-5xlmd:text-6xlfont-bold text-whitemb-6" />
            Ready to Optimize Your
            <br />
            <span className="bg-gradient-to-rfrom-emerald-300 to-cyan-300 bg-clip-text text-transparent"  />Inventory Management?
            </span>
          </h2>
          <p className="text-xlsm:text-2xltext-white/90 mb-8 max-w-4xl mx-auto">
            Join thousands of businesses already reducing costs and improving efficiency with AI Inventory Manager. 
            Start your free trial today - no setup fees required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6justify-center" />
            <Link 
              to="/contact" 
              className="group bg-whitetext-emerald-600 px-10py-4rounded-xl font-bold text-lghover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
             />
              <span  >Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-white text-whitepx-10py-4rounded-xl font-bold text-lghover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
             />
              <span  >View All Plans</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AIInventoryManagerPage;