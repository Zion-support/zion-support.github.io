import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CubeIcon, 
  ChartBarIcon, 
  ClockIcon, 
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  TruckIcon,
  ExclamationTriangleIcon,
  ChartPieIcon
} from '@heroicons/react/24/outline';

const AISmartInventoryPage = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "AI Demand Forecasting",
      description: "Machine learning algorithms predict demand patterns with 95% accuracy, preventing stockouts and overstock."
    },
    {
      icon: ChartBarIcon,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards showing inventory levels, turnover rates, and profitability metrics in real-time."
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Smart Alerts",
      description: "AI-powered alerts for low stock, slow-moving items, and potential supply chain disruptions."
    },
    {
      icon: TruckIcon,
      title: "Automated Reordering",
      description: "Intelligent reorder points that automatically place purchase orders based on demand forecasts."
    },
    {
      icon: ChartPieIcon,
      title: "ABC Analysis",
      description: "Automated categorization of inventory items by value and importance for optimal management."
    },
    {
      icon: ClockIcon,
      title: "Seasonal Optimization",
      description: "AI adjusts inventory levels based on seasonal trends, holidays, and market fluctuations."
    }
  ];

  const benefits = [
    "Reduce inventory costs by 30%",
    "Increase stock turnover by 40%",
    "Eliminate stockouts by 95%",
    "Reduce carrying costs by 25%",
    "Improve cash flow by 35%",
    "Enhance customer satisfaction"
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$149",
      period: "per month",
      description: "Perfect for small retailers",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Reorder alerts",
        "Email support",
        "Standard reporting"
      ]
    },
    {
      name: "Professional",
      price: "$399",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Automated reordering",
        "Real-time analytics",
        "Priority support",
        "API integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "per month",
      description: "For large operations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Multi-location support",
        "Dedicated manager",
        "Advanced analytics",
        "White-label solution"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Smart Inventory Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered inventory management system that reduces costs by 30%, eliminates stockouts, and optimizes supply chain operations." />
        <meta name="keywords" content="AI inventory management, smart inventory, demand forecasting, supply chain optimization, inventory analytics" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <CubeIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Smart Inventory
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your inventory management with AI that predicts demand, prevents stockouts, and reduces costs by 30% while improving customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Intelligent Inventory Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Proven Business Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-800/30 rounded-lg p-4">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.name === 'Professional' 
                  ? 'border-purple-500 ring-2 ring-purple-500/20' 
                  : 'border-slate-700'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.name === 'Professional'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'border border-slate-600 text-gray-300 hover:border-purple-500 hover:text-white'
                }`}>
                  {plan.name === 'Professional' ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 1,000+ businesses using AI Smart Inventory to reduce costs and improve efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start Your Free Trial
            </button>
            <button className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISmartInventoryPage;