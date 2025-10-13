import { ArrowRight, Package, TrendingUp, Brain, BarChart3, Star, CheckCircle, Zap, Truck, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiSupplyChainOptimizer() {
  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Optimization",
      description: "AI-powered demand forecasting and inventory management with 99% accuracy"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Route Optimization",
      description: "Optimize delivery routes and logistics with real-time traffic and weather data"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Demand Forecasting",
      description: "Predict demand patterns using machine learning and external data sources"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Reduce supply chain costs by 25% through intelligent procurement and logistics"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Supplier Management",
      description: "Monitor supplier performance and identify risks with AI-powered analytics"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Alerts",
      description: "Get instant notifications about supply chain disruptions and opportunities"
    }
  ];

  const optimizations = [
    "Demand Planning & Forecasting",
    "Inventory Level Optimization",
    "Supplier Risk Assessment",
    "Transportation Route Planning",
    "Warehouse Space Utilization",
    "Procurement Cost Reduction",
    "Lead Time Optimization",
    "Quality Control Automation",
    "Sustainability Tracking",
    "Compliance Monitoring",
    "Real-time Visibility",
    "Performance Analytics"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 locations",
        "Basic forecasting",
        "Inventory optimization",
        "Email support",
        "Standard reports",
        "10GB data storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 25 locations",
        "Advanced forecasting",
        "Route optimization",
        "Priority support",
        "Custom dashboards",
        "100GB data storage",
        "API access",
        "Supplier analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited locations",
        "AI-powered optimization",
        "Custom models",
        "24/7 dedicated support",
        "White-label solution",
        "Unlimited storage",
        "Advanced integrations",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      company: "Manufacturing Corp",
      role: "Supply Chain Director",
      content: "Zion AI Supply Chain Optimizer reduced our inventory costs by 30% and improved delivery times by 40%. The ROI was immediate.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      company: "Retail Chain",
      role: "Operations Manager",
      content: "The demand forecasting is incredibly accurate. We've eliminated stockouts while reducing excess inventory by 25%.",
      rating: 5
    },
    {
      name: "David Martinez",
      company: "E-commerce Platform",
      role: "Logistics Director",
      content: "This platform transformed our entire supply chain. The route optimization alone saved us $50,000 per month in fuel costs.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Supply Chain Optimizer - Intelligent Supply Chain Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Optimize your supply chain with AI-powered forecasting, inventory management, and route optimization. Reduce costs by 25% and improve efficiency with Zion AI Supply Chain Optimizer."
        />
        <meta
          name="keywords"
          content="supply chain optimization, inventory management, demand forecasting, logistics optimization, supply chain AI, procurement optimization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <Package className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">AI-Powered Supply Chain Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Zion AI Supply Chain Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your supply chain with AI-powered optimization. Reduce costs by 25%, improve efficiency, 
              and eliminate waste with intelligent forecasting, inventory management, and logistics optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
                <div className="text-gray-300">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">99%</div>
                <div className="text-gray-300">Forecasting Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-gray-300">Delivery Time Improvement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Supply Chain Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize your entire supply chain with artificial intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Optimizations Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Supply Chain Optimization
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Optimize every aspect of your supply chain with AI-powered insights and automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {optimizations.map((optimization, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{optimization}</span>
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
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your supply chain complexity. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-green-400 bg-gradient-to-br from-green-500/10 to-emerald-500/10'
                      : 'border-white/20 hover:border-green-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
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
                Trusted by Supply Chain Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what supply chain professionals say about Zion AI Supply Chain Optimizer
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
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies using Zion AI Supply Chain Optimizer to reduce costs and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
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