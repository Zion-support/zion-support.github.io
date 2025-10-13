import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Package, 
  BarChart3, 
  Target, 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';

const ZionAIInventoryOptimizerProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Demand Forecasting",
      description: "Predict future inventory needs with advanced machine learning algorithms",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["95% accuracy in demand prediction", "Reduced stockouts by 60%", "Optimized reorder points"]
    },
    {
      title: "Smart Inventory Optimization",
      description: "Automatically optimize stock levels based on real-time data and trends",
      icon: <Target className="w-8 h-8" />,
      benefits: ["25% reduction in carrying costs", "Improved cash flow", "Minimized waste"]
    },
    {
      title: "Real-Time Analytics",
      description: "Monitor inventory performance with comprehensive dashboards and reports",
      icon: <Package className="w-8 h-8" />,
      benefits: ["Live inventory tracking", "Performance insights", "Custom reporting"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Standard analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Real-time analytics",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Advanced integrations",
        "Dedicated support",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Inventory Optimizer Pro - Advanced Inventory Management</title>
        <meta name="description" content="Optimize your inventory with AI-powered demand forecasting and smart inventory management solutions." />
        <meta name="keywords" content="inventory management, AI forecasting, supply chain optimization, inventory analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Zion AI Inventory Optimizer Pro
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your inventory management with AI-powered forecasting and optimization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/demo"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful Inventory Management Features
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to optimize your inventory and reduce costs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg text-gray-600">
                Flexible pricing options for businesses of all sizes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-blue-600 relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-600">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Inventory?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI-powered solutions
            </p>
            <Link
              to="/demo"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIInventoryOptimizerProPage;