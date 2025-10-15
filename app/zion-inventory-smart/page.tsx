import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Target,
  Award,
  MessageSquare,
  Send,
  Filter,
  Search,
  Settings,
  Bell,
  FileText,
  Calendar,
  DollarSign,
  Zap,
  Eye,
  Activity,
  PieChart,
  LineChart,
  Database,
  Truck,
  ShoppingCart,
  AlertTriangle,
  RefreshCw,
  TrendingDown,
  Warehouse,
  Box,
  Tag,
  Percent
} from 'lucide-react';

const ZionInventorySmartPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Demand Forecasting',
      description: 'Advanced machine learning algorithms analyze historical data, seasonal patterns, and market trends to predict future demand with 95%+ accuracy.',
      benefits: ['95%+ Accuracy', 'Seasonal Analysis', 'Market Trend Integration', 'Real-time Adjustments']
    },
    {
      icon: Zap,
      title: 'Automated Reordering',
      description: 'Intelligent automation that monitors stock levels and automatically places purchase orders based on predicted demand and supplier lead times.',
      benefits: ['Auto Reordering', 'Lead Time Optimization', 'Supplier Management', 'Cost Optimization']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive analytics and reporting with real-time insights into inventory performance, turnover rates, and optimization opportunities.',
      benefits: ['Real-time Monitoring', 'Performance Metrics', 'Custom Reports', 'Data Visualization']
    },
    {
      icon: Target,
      title: 'Smart Optimization',
      description: 'AI-driven recommendations for optimal stock levels, ABC analysis, and inventory positioning to minimize costs while maximizing availability.',
      benefits: ['ABC Analysis', 'Stock Level Optimization', 'Cost Minimization', 'Availability Maximization']
    }
  ];

  const optimizationCapabilities = [
    {
      category: 'Demand Forecasting',
      icon: TrendingUp,
      description: 'Predict future demand with machine learning algorithms',
      accuracy: '95.2%',
      benefits: ['Historical Analysis', 'Seasonal Patterns', 'Market Trends', 'External Factors']
    },
    {
      category: 'Stock Optimization',
      icon: Package,
      description: 'Optimize inventory levels to reduce costs and stockouts',
      accuracy: '92.8%',
      benefits: ['Safety Stock Calculation', 'Reorder Point Optimization', 'ABC Classification', 'Dead Stock Identification']
    },
    {
      category: 'Supplier Management',
      icon: Truck,
      description: 'Intelligent supplier selection and performance monitoring',
      accuracy: '89.5%',
      benefits: ['Supplier Scoring', 'Lead Time Analysis', 'Quality Tracking', 'Cost Comparison']
    },
    {
      category: 'Cost Reduction',
      icon: DollarSign,
      description: 'Identify and eliminate unnecessary inventory costs',
      accuracy: '87.3%',
      benefits: ['Carrying Cost Analysis', 'Waste Reduction', 'Bulk Purchase Optimization', 'Storage Efficiency']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic demand forecasting',
        'Standard dashboard',
        'Email alerts',
        'Basic reporting',
        'Email support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasting',
        'Custom dashboard',
        'Real-time alerts',
        'Advanced reporting',
        'API access',
        'Priority support',
        'Multi-location support'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited SKUs',
        'Full AI suite',
        'White-label dashboard',
        'Custom workflows',
        '24/7 dedicated support',
        'Advanced security',
        'Custom development',
        'SLA guarantee',
        'Multi-warehouse support'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Inventory Turnover',
      value: '8.5x',
      change: '+35%',
      icon: RefreshCw,
      color: 'text-green-400'
    },
    {
      metric: 'Stockout Reduction',
      value: '78%',
      change: '+42%',
      icon: AlertTriangle,
      color: 'text-blue-400'
    },
    {
      metric: 'Cost Savings',
      value: '$2.3M',
      change: '+28%',
      icon: DollarSign,
      color: 'text-purple-400'
    },
    {
      metric: 'Forecast Accuracy',
      value: '95.2%',
      change: '+15%',
      icon: Target,
      color: 'text-orange-400'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      company: 'RetailMax Inc.',
      role: 'Operations Director',
      content: 'Zion Inventory Smart has reduced our inventory costs by 35% while improving stock availability. The AI forecasting is incredibly accurate.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Solutions',
      role: 'Supply Chain Manager',
      content: 'The automated reordering feature has saved us countless hours and eliminated stockouts. Our inventory turnover has improved dramatically.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'David Rodriguez',
      company: 'Manufacturing Plus',
      role: 'Inventory Manager',
      content: 'The analytics dashboard provides insights we never had before. We can now make data-driven decisions that directly impact our bottom line.',
      rating: 5,
      avatar: 'DR'
    }
  ];

  const integrations = [
    { name: 'SAP', icon: Database, status: 'Available' },
    { name: 'Oracle', icon: Database, status: 'Available' },
    { name: 'NetSuite', icon: BarChart3, status: 'Available' },
    { name: 'QuickBooks', icon: DollarSign, status: 'Available' },
    { name: 'Shopify', icon: ShoppingCart, status: 'Available' },
    { name: 'WooCommerce', icon: ShoppingCart, status: 'Available' },
    { name: 'Amazon', icon: Package, status: 'Available' },
    { name: 'eBay', icon: Package, status: 'Available' }
  ];

  const industrySolutions = [
    {
      industry: 'Retail',
      icon: ShoppingCart,
      description: 'Optimize retail inventory with seasonal demand patterns and multi-channel management',
      benefits: ['Seasonal Forecasting', 'Multi-channel Sync', 'Promotion Planning', 'Returns Management']
    },
    {
      industry: 'Manufacturing',
      icon: Package,
      description: 'Streamline manufacturing inventory with raw material optimization and production planning',
      benefits: ['Raw Material Planning', 'Production Scheduling', 'Quality Control', 'Supplier Integration']
    },
    {
      industry: 'E-commerce',
      icon: Globe,
      description: 'Manage e-commerce inventory across multiple platforms with automated synchronization',
      benefits: ['Platform Sync', 'Fulfillment Optimization', 'Dropshipping Support', 'Marketplace Integration']
    },
    {
      industry: 'Healthcare',
      icon: Activity,
      description: 'Ensure critical medical supplies availability with compliance and expiration tracking',
      benefits: ['Compliance Tracking', 'Expiration Management', 'Critical Stock Alerts', 'Regulatory Reporting']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Inventory Smart - AI-Powered Inventory Management | Zion Tech Group</title>
        <meta name="description" content="Optimize your inventory with AI-powered demand forecasting, automated reordering, and smart analytics. Reduce costs and eliminate stockouts." />
        <meta name="keywords" content="inventory management, demand forecasting, inventory optimization, stock management, supply chain, inventory analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-inventory-smart" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                <Package className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-400 text-sm font-medium">AI-Powered Inventory Intelligence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion Inventory <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Smart</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your inventory management with AI-powered demand forecasting, automated reordering, 
                and intelligent optimization. Reduce costs, eliminate stockouts, and maximize profitability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Watch Demo</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">35%</div>
                  <div className="text-gray-300 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">95.2%</div>
                  <div className="text-gray-300 text-sm">Forecast Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">78%</div>
                  <div className="text-gray-300 text-sm">Stockout Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">8.5x</div>
                  <div className="text-gray-300 text-sm">Inventory Turnover</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Optimization Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Optimization Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered inventory optimization across all aspects of your supply chain
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {optimizationCapabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {capability.category}
                        </h3>
                        <div className="text-green-400 font-semibold">Accuracy: {capability.accuracy}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Benefits:</h4>
                      {capability.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to optimize your inventory management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored inventory management solutions for different industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industrySolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {solution.industry}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{solution.description}</p>
                    <div className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proven Performance Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from our customers across different industries
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 text-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {metric.metric}
                    </h3>
                    <div className="text-2xl font-bold text-blue-400 mb-1">{metric.value}</div>
                    <div className={`text-sm font-semibold ${metric.color}`}>{metric.change}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing systems and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {integrations.map((integration, index) => {
                const IconComponent = integration.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                    <span className="text-green-400 text-sm">{integration.status}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business size and needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-500/50 ring-2 ring-blue-500/20 relative'
                      : 'border-white/20 hover:border-blue-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-blue-500/25'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Supply Chain Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion Inventory Smart
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold">
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-12 border border-blue-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Optimize Your Inventory Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses who have transformed their inventory management 
                with AI-powered optimization and intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionInventorySmartPage;