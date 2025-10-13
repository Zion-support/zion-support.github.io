import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, BarChart3, TrendingUp, Target, Star, CheckCircle, Sparkles, Mail, Smartphone, Globe, Shield, Settings, Headphones, RefreshCw, Bell, DollarSign, AlertCircle, Play, Truck, Warehouse, ShoppingCart, Store, Calendar, Minimize } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ZionSmartInventoryOptimizerPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      title: 'Demand Forecasting',
      description: 'AI-powered demand forecasting with 95% accuracy to predict inventory needs',
      icon: <TrendingUp className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Auto Reordering',
      description: 'Automatically reorder products when stock levels reach optimal thresholds',
      icon: <RefreshCw className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Cost Optimization',
      description: 'Minimize inventory costs while maintaining optimal stock levels',
      icon: <DollarSign className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Multi-location Support',
      description: 'Manage inventory across multiple warehouses and retail locations',
      icon: <Warehouse className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Supplier Management',
      description: 'Track supplier performance and optimize procurement strategies',
      icon: <Truck className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics on inventory performance and trends',
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Seasonal Adjustments',
      description: 'Automatically adjust inventory levels based on seasonal patterns',
      icon: <Calendar className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Dead Stock Detection',
      description: 'Identify and manage slow-moving or obsolete inventory',
      icon: <AlertCircle className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Integration APIs',
      description: 'Connect with e-commerce platforms, POS systems, and accounting software',
      icon: <Settings className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Mobile App',
      description: 'Manage inventory on-the-go with our mobile application',
      icon: <Smartphone className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Real-time Alerts',
      description: 'Get instant notifications about stock levels and potential issues',
      icon: <Bell className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Priority Support',
      description: '24/7 priority support with dedicated account manager',
      icon: <Headphones className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$249',
      originalPrice: '$499',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '1,000 products',
        'Basic forecasting',
        'Email support',
        'Standard reports',
        '5GB storage'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: '$499',
      originalPrice: '$999',
      period: '/month',
      description: 'Ideal for growing businesses and retail chains',
      features: [
        '10,000 products',
        'Advanced forecasting',
        'Priority support',
        'Custom reports',
        '25GB storage',
        'Multi-location',
        'Supplier management'
      ],
      popular: true,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      price: '$999',
      originalPrice: '$1,999',
      period: '/month',
      description: 'For large organizations and enterprise retailers',
      features: [
        'Unlimited products',
        'Full forecasting suite',
        '24/7 support',
        'Advanced reporting',
        'Unlimited storage',
        'Custom integrations',
        'API access',
        'Team collaboration',
        'Dedicated manager'
      ],
      popular: false,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Optimize inventory for online stores and marketplaces',
      icon: <ShoppingCart className="w-8 h-8" />,
      examples: ['Demand forecasting', 'Stock optimization', 'Multi-channel sync', 'Seasonal planning']
    },
    {
      title: 'Retail Chains',
      description: 'Manage inventory across multiple store locations',
      icon: <Store className="w-8 h-8" />,
      examples: ['Multi-location management', 'Centralized control', 'Store transfers', 'Performance analytics']
    },
    {
      title: 'Manufacturing',
      description: 'Optimize raw materials and finished goods inventory',
      icon: <Package className="w-8 h-8" />,
      examples: ['Raw material planning', 'Production scheduling', 'Quality control', 'Supplier optimization']
    },
    {
      title: 'Wholesale',
      description: 'Manage large-scale inventory and distribution',
      icon: <Warehouse className="w-8 h-8" />,
      examples: ['Bulk inventory management', 'Distribution optimization', 'Supplier relationships', 'Cost analysis']
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      company: 'E-commerce Store',
      role: 'Operations Manager',
      content: 'Zion Smart Inventory Optimizer has reduced our stockouts by 80% and cut inventory costs by 30%. The demand forecasting is incredibly accurate.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Sarah Williams',
      company: 'Retail Chain',
      role: 'Inventory Director',
      content: 'Managing inventory across 50+ stores has never been easier. The real-time alerts help us prevent stockouts and overstock situations.',
      rating: 5,
      avatar: 'SW'
    },
    {
      name: 'David Chen',
      company: 'Manufacturing Company',
      role: 'Supply Chain Manager',
      content: 'The AI-powered forecasting has revolutionized our production planning. We can now predict demand with 95% accuracy and optimize our supply chain.',
      rating: 5,
      avatar: 'DC'
    }
  ];

  const stats = [
    { number: '95%', label: 'Forecasting Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '30%', label: 'Cost Reduction', icon: <DollarSign className="w-6 h-6" /> },
    { number: '80%', label: 'Stockout Reduction', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Smart Inventory Optimizer - AI-Powered Inventory Management | Zion Tech Group</title>
        <meta
          name="description"
          content="AI-powered inventory management with demand forecasting, automated reordering, and cost optimization for retail and e-commerce. Starting at $249/month."
        />
        <meta
          name="keywords"
          content="AI inventory management, demand forecasting, inventory optimization, supply chain, retail management, e-commerce inventory"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-indigo-400 text-sm font-medium">AI-Powered Inventory Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Zion Smart Inventory Optimizer
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              AI-powered inventory management with demand forecasting, automated reordering, and cost optimization. 
              Transform your supply chain and reduce costs while maintaining optimal stock levels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
              >
                Start Optimizing Inventory
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Advanced Inventory Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize your inventory management with AI-powered intelligence and automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-indigo-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From e-commerce to manufacturing, our AI inventory optimizer adapts to your industry needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-indigo-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-2">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your inventory size and business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular
                      ? 'border-indigo-500/50 hover:shadow-indigo-500/25'
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <span className="text-gray-500 line-through text-lg">{plan.originalPrice}{plan.period}</span>
                    )}
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion Smart Inventory Optimizer
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Inventory?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using Zion Smart Inventory Optimizer. 
                Contact us today for a personalized demo.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-indigo-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-indigo-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-indigo-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                >
                  Start Optimizing Inventory
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionSmartInventoryOptimizerPage;