import { ArrowRight, Package, TrendingUp, AlertTriangle, CheckCircle, Star, Brain, Zap, BarChart3, Truck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSmartInventory() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Demand Forecasting",
      description: "Predict inventory needs with 98% accuracy using machine learning and historical sales data"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Automated Reordering",
      description: "Smart reorder points that automatically trigger purchase orders based on demand patterns"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Inventory Optimization",
      description: "Minimize carrying costs while maximizing stock availability with intelligent algorithms"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Stockout Prevention",
      description: "Proactive alerts and recommendations to prevent stockouts and lost sales"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards showing inventory performance, turnover rates, and profitability"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Supply Chain Integration",
      description: "Seamless integration with suppliers, warehouses, and logistics partners"
    }
  ];

  const capabilities = [
    "Multi-location Inventory Tracking",
    "Barcode & QR Code Scanning",
    "Serial Number Management",
    "Batch/Lot Tracking",
    "Expiration Date Monitoring",
    "Supplier Management",
    "Purchase Order Automation",
    "Receiving & Put-away",
    "Cycle Counting",
    "ABC Analysis",
    "Dead Stock Identification",
    "Cost Analysis & Reporting"
  ];

  const pricingPlans = [
    {
      name: "Small Business",
      price: "$49",
      period: "/month",
      description: "Perfect for small retailers",
      features: [
        "Up to 1,000 SKUs",
        "Basic forecasting",
        "Reorder automation",
        "Mobile app access",
        "Email support",
        "Standard reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location support",
        "API integration",
        "Priority support",
        "Custom dashboards",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large operations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced reporting",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      company: "Retail Chain",
      role: "Operations Manager",
      content: "Zion Smart Inventory reduced our stockouts by 80% and cut carrying costs by 25%. The AI forecasting is incredibly accurate.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "E-commerce Store",
      role: "Inventory Manager",
      content: "The automated reordering feature has saved us countless hours. We never run out of popular items anymore.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Manufacturing Co.",
      role: "Supply Chain Director",
      content: "This platform transformed our inventory management. The multi-location tracking and supplier integration are game-changers.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Smart Inventory - AI-Powered Inventory Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Optimize your inventory with Zion Smart Inventory - the ultimate AI-powered inventory management platform. Demand forecasting, automated reordering, and real-time analytics for modern businesses."
        />
        <meta
          name="keywords"
          content="inventory management, demand forecasting, stock optimization, automated reordering, supply chain, inventory analytics, warehouse management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 mb-6">
              <Package className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">AI-Powered Inventory Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Zion Smart Inventory
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your inventory management with AI-powered intelligence. Demand forecasting, 
              automated reordering, and real-time optimization for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">98%</div>
                <div className="text-gray-300">Forecasting Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">80%</div>
                <div className="text-gray-300">Reduction in Stockouts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Inventory Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize your inventory with artificial intelligence and automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
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
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Inventory Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools and features you need to manage your inventory efficiently and profitably.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Scalable Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business size and inventory complexity. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-orange-400 bg-gradient-to-br from-orange-500/10 to-amber-500/10'
                      : 'border-white/20 hover:border-orange-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
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
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:from-orange-600 hover:to-amber-700'
                        : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Inventory Managers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what inventory professionals say about Zion Smart Inventory
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Inventory?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI to optimize their inventory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}