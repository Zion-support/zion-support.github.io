import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Package, 
  BarChart3, 
  Brain, 
  Sparkles, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Eye,
  ShoppingCart,
  DollarSign,
  Clock,
  AlertTriangle
} from 'lucide-react';

const ZionSmartInventoryOptimizerPage = () => {
  const features = [
    "AI-Powered Demand Forecasting",
    "Automated Reorder Points",
    "Dead Stock Detection",
    "Seasonal Trend Analysis",
    "Supplier Performance Tracking",
    "Cost Optimization Algorithms",
    "Multi-location Inventory Sync",
    "Real-time Stock Alerts",
    "ABC Analysis & Categorization",
    "Inventory Turnover Optimization",
    "Waste Reduction Analytics",
    "ROI Maximization Tools"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for small retail businesses",
      features: [
        "Up to 1,000 SKUs",
        "Basic forecasting",
        "Reorder alerts",
        "Standard support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month", 
      description: "Ideal for growing businesses and warehouses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location support",
        "Priority support",
        "Custom dashboards",
        "API integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large organizations with complex inventory",
      features: [
        "Unlimited SKUs",
        "Full AI capabilities",
        "Custom integrations",
        "Dedicated support",
        "White-label options",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Stockouts",
      description: "AI predicts demand to prevent stockouts and lost sales",
      icon: <AlertTriangle className="w-6 h-6" />,
      metric: "85% reduction"
    },
    {
      title: "Lower Inventory Costs",
      description: "Optimize stock levels to reduce carrying costs",
      icon: <DollarSign className="w-6 h-6" />,
      metric: "30% cost savings"
    },
    {
      title: "Improve Turnover",
      description: "Increase inventory turnover rates with smart optimization",
      icon: <TrendingUp className="w-6 h-6" />,
      metric: "45% improvement"
    },
    {
      title: "Eliminate Dead Stock",
      description: "Identify and clear slow-moving inventory automatically",
      icon: <Package className="w-6 h-6" />,
      metric: "60% reduction"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Smart Inventory Optimizer - AI Inventory Management | Zion Tech Group</title>
        <meta name="description" content="Optimize inventory with AI. Demand forecasting, automated reorder points, dead stock detection, and cost optimization. Reduce stockouts and improve turnover." />
        <meta name="keywords" content="inventory optimization, demand forecasting, inventory management, stock optimization, AI inventory, supply chain optimization" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Inventory Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion Smart Inventory Optimizer
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your inventory management with AI-powered optimization. Reduce stockouts, 
            eliminate dead stock, and maximize profitability with intelligent demand forecasting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Optimize Your Inventory
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{benefit.description}</p>
              <div className="text-xl font-bold text-cyan-400">{benefit.metric}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Advanced Features
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              How It Works
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">1. Data Analysis</h3>
              <p className="text-gray-300">AI analyzes historical sales data, seasonal patterns, and market trends</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">2. Demand Forecasting</h3>
              <p className="text-gray-300">Predict future demand with advanced machine learning algorithms</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">3. Optimization</h3>
              <p className="text-gray-300">Automatically optimize stock levels and generate reorder recommendations</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Simple Pricing
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Inventory?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses who are already using Zion Smart Inventory Optimizer 
              to reduce costs, prevent stockouts, and maximize profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionSmartInventoryOptimizerPage;