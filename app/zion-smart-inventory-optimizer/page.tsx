import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Package, 
  TrendingUp, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Star,
  Zap,
  Clock,
  Target,
  Users,
  Globe,
  Smartphone,
  Monitor,
  Laptop,
  Bell,
  Database,
  PieChart,
  Activity,
  Lock,
  FileText,
  DollarSign,
  AlertTriangle,
  RefreshCw,
  ShoppingCart
} from 'lucide-react';

const ZionSmartInventoryOptimizerPage = () => {
  const features = [
    {
      title: "AI Demand Forecasting",
      description: "Predict future demand with 95% accuracy using advanced machine learning algorithms",
      icon: <TrendingUp className="w-6 h-6" />,
      details: "Reduce stockouts by 60% and overstock by 40% with intelligent demand prediction"
    },
    {
      title: "Automated Reorder Points",
      description: "Set optimal reorder points based on lead times, demand patterns, and supplier reliability",
      icon: <Bell className="w-6 h-6" />,
      details: "Never run out of stock or over-order with smart automated reordering"
    },
    {
      title: "Multi-Location Optimization",
      description: "Optimize inventory across multiple warehouses, stores, and distribution centers",
      icon: <Globe className="w-6 h-6" />,
      details: "Balance inventory levels across all locations for maximum efficiency"
    },
    {
      title: "Supplier Performance Analytics",
      description: "Track supplier reliability, quality, and delivery performance to optimize procurement",
      icon: <Users className="w-6 h-6" />,
      details: "Make data-driven supplier decisions with comprehensive performance metrics"
    },
    {
      title: "Real-time Inventory Tracking",
      description: "Monitor inventory levels, movements, and trends in real-time across all channels",
      icon: <Activity className="w-6 h-6" />,
      details: "Get instant visibility into your inventory with live dashboards and alerts"
    },
    {
      title: "Cost Optimization",
      description: "Minimize carrying costs, reduce waste, and optimize purchasing decisions",
      icon: <DollarSign className="w-6 h-6" />,
      details: "Save up to 30% on inventory costs with intelligent optimization algorithms"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for small businesses with basic inventory needs",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Single location",
        "Email support",
        "Standard reports",
        "1 user account"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing businesses with complex inventory operations",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location support",
        "Priority support",
        "Advanced analytics",
        "5 user accounts",
        "Supplier analytics",
        "API access",
        "Custom integrations"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large organizations with extensive inventory operations",
      features: [
        "Unlimited SKUs",
        "Full AI optimization suite",
        "Global multi-location",
        "24/7 phone support",
        "Real-time analytics",
        "Unlimited users",
        "White-label options",
        "Custom integrations",
        "Dedicated support",
        "Advanced security"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Optimize inventory for online retail and marketplace selling",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Manufacturing",
      description: "Manage raw materials and finished goods inventory efficiently",
      icon: <Package className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Retail",
      description: "Optimize store inventory and reduce stockouts",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Distribution",
      description: "Streamline warehouse operations and distribution networks",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "Reduce Costs",
      description: "Minimize carrying costs and eliminate waste through optimization",
      icon: <DollarSign className="w-6 h-6" />,
      stat: "30% cost reduction"
    },
    {
      title: "Improve Efficiency",
      description: "Streamline operations and reduce manual inventory management",
      icon: <Zap className="w-6 h-6" />,
      stat: "50% time saved"
    },
    {
      title: "Increase Sales",
      description: "Reduce stockouts and improve customer satisfaction",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "25% sales increase"
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Optimized", icon: <Package className="w-6 h-6" /> },
    { number: "95%", label: "Forecast Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "30%", label: "Cost Reduction", icon: <DollarSign className="w-6 h-6" /> },
    { number: "60%", label: "Stockout Reduction", icon: <AlertTriangle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Smart Inventory Optimizer - AI-Powered Inventory Management Platform | Zion Tech Group</title>
        <meta name="description" content="Optimize your inventory with AI-powered demand forecasting, automated reordering, and cost optimization. Reduce stockouts, minimize costs, and improve efficiency." />
        <meta name="keywords" content="inventory optimization, demand forecasting, inventory management, supply chain optimization, AI inventory, stock management" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Inventory Optimization</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion Smart Inventory Optimizer
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your inventory management with AI-powered optimization. Predict demand, automate reordering, 
            reduce costs, and eliminate stockouts with intelligent machine learning algorithms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Package className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Inventory Optimizer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology that transforms your inventory management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive inventory optimization powered by cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-sm text-cyan-400">
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From e-commerce to manufacturing, our solution adapts to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your inventory optimization needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/contact"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  } hover:scale-105`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Inventory?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies who trust Zion Smart Inventory Optimizer 
              to streamline their inventory management and reduce costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Package className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionSmartInventoryOptimizerPage;