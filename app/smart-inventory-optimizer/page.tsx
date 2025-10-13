import { Helmet } from "react-helmet-async";
import { Package, Brain, TrendingUp, BarChart3, Zap, CheckCircle, Star, ArrowRight, Target, Clock, DollarSign, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function SmartInventoryOptimizer() {
  const features = [
    {
      title: "AI Demand Forecasting",
      description: "Predict future demand with 95% accuracy using machine learning algorithms and historical data analysis",
      icon: <Brain className="w-6 h-6" />,
      stats: "95% accuracy"
    },
    {
      title: "Automated Reorder Points",
      description: "Intelligent reorder point calculation based on lead times, demand patterns, and safety stock requirements",
      icon: <Target className="w-6 h-6" />,
      stats: "30% reduction in stockouts"
    },
    {
      title: "Cost Optimization",
      description: "Minimize carrying costs while maintaining optimal stock levels through advanced optimization algorithms",
      icon: <DollarSign className="w-6 h-6" />,
      stats: "25% cost reduction"
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with real-time inventory metrics, trends, and performance indicators",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Real-time insights"
    },
    {
      title: "Multi-location Management",
      description: "Centralized inventory management across multiple warehouses, stores, and distribution centers",
      icon: <Package className="w-6 h-6" />,
      stats: "Unlimited locations"
    },
    {
      title: "Supplier Integration",
      description: "Seamless integration with suppliers for automated ordering, tracking, and performance monitoring",
      icon: <Zap className="w-6 h-6" />,
      stats: "Automated ordering"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Reorder point alerts",
        "Standard analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Automated reordering",
        "Multi-location support",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Advanced integrations",
        "24/7 support",
        "Dedicated account manager",
        "White-label options"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Stockouts",
      description: "Minimize lost sales due to out-of-stock situations with intelligent demand forecasting",
      icon: <TrendingUp className="w-8 h-8" />,
      percentage: "85%"
    },
    {
      title: "Lower Carrying Costs",
      description: "Optimize inventory levels to reduce storage, insurance, and capital costs",
      icon: <DollarSign className="w-8 h-8" />,
      percentage: "30%"
    },
    {
      title: "Improve Cash Flow",
      description: "Better inventory turnover and reduced excess stock improve working capital efficiency",
      icon: <Clock className="w-8 h-8" />,
      percentage: "40%"
    },
    {
      title: "Enhanced Accuracy",
      description: "AI-powered predictions and automated processes reduce human errors significantly",
      icon: <Shield className="w-8 h-8" />,
      percentage: "95%"
    }
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      company: "Retail Operations Manager",
      content: "The Smart Inventory Optimizer reduced our stockouts by 85% and cut carrying costs by 30%. It's been a game-changer for our business.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      company: "Supply Chain Director",
      content: "The AI forecasting is incredibly accurate. We've improved our inventory turnover by 40% while maintaining excellent service levels.",
      rating: 5
    },
    {
      name: "David Martinez",
      company: "E-commerce Manager",
      content: "The automated reordering feature saves us hours every week. Our inventory management is now completely hands-off and more efficient.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Inventory Optimizer - Zion Tech Group | AI-Powered Inventory Management</title>
        <meta
          name="description"
          content="Optimize your inventory with AI-powered demand forecasting, automated reordering, and cost optimization. Reduce stockouts by 85% and cut carrying costs by 30%."
        />
        <meta
          name="keywords"
          content="inventory management, demand forecasting, inventory optimization, stock management, supply chain, AI inventory, automated reordering"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Package className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Inventory Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Smart Inventory Optimizer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your inventory management with AI-powered demand forecasting, automated reordering, and intelligent optimization. 
              Reduce stockouts by 85%, cut carrying costs by 30%, and maximize your supply chain efficiency.
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
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">85%</div>
                <div className="text-gray-300 text-sm">Reduction in Stockouts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">30%</div>
                <div className="text-gray-300 text-sm">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Forecasting Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300 text-sm">Improved Turnover</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Business Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered inventory optimization delivers measurable results across all key business metrics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.percentage}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to optimize every aspect of your inventory management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-sm">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business size and inventory complexity. Scale up as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/10' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
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
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about the Smart Inventory Optimizer
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Inventory?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using Smart Inventory Optimizer to reduce costs and improve efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}