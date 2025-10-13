import { ArrowRight, Package, Zap, BarChart3, Users, Target, Globe, Star, CheckCircle, Mail, Smartphone, MapPin, TrendingUp, ShoppingCart } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionInventorySmart() {
  const features = [
    {
      title: "AI-Powered Demand Forecasting",
      description: "Predict inventory needs with machine learning algorithms that analyze sales patterns, seasonality, and market trends",
      icon: <Target className="w-6 h-6" />,
      benefit: "Reduce stockouts by 80%"
    },
    {
      title: "Real-Time Inventory Tracking",
      description: "Monitor inventory levels across multiple locations with real-time updates and automated reorder points",
      icon: <Package className="w-6 h-6" />,
      benefit: "Always accurate counts"
    },
    {
      title: "Automated Reordering",
      description: "Smart reorder suggestions based on lead times, demand patterns, and supplier reliability",
      icon: <Zap className="w-6 h-6" />,
      benefit: "Never run out of stock"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive inventory analytics with turnover rates, ABC analysis, and profitability insights",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Data-driven decisions"
    },
    {
      title: "Multi-Location Management",
      description: "Manage inventory across warehouses, stores, and distribution centers with centralized control",
      icon: <Globe className="w-6 h-6" />,
      benefit: "Unified visibility"
    },
    {
      title: "Integration Ecosystem",
      description: "Seamlessly integrate with e-commerce platforms, POS systems, and accounting software",
      icon: <ShoppingCart className="w-6 h-6" />,
      benefit: "Streamlined operations"
    }
  ];

  const inventoryTypes = [
    {
      name: "Retail Inventory",
      description: "Point-of-sale integration with barcode scanning and real-time updates",
      icon: <ShoppingCart className="w-8 h-8" />,
      efficiency: "95%"
    },
    {
      name: "E-commerce Inventory",
      description: "Multi-channel inventory sync with automated stock updates",
      icon: <Globe className="w-8 h-8" />,
      efficiency: "90%"
    },
    {
      name: "Warehouse Management",
      description: "Advanced warehouse operations with pick/pack optimization",
      icon: <Package className="w-8 h-8" />,
      efficiency: "85%"
    },
    {
      name: "Manufacturing Inventory",
      description: "Raw materials and finished goods tracking with production planning",
      icon: <Target className="w-8 h-8" />,
      efficiency: "88%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",
        "Basic analytics",
        "Email support",
        "Mobile app",
        "1 warehouse",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 SKUs",
        "Advanced analytics",
        "Priority support",
        "Multi-location",
        "API access",
        "Advanced integrations",
        "Demand forecasting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",
        "AI-powered insights",
        "Dedicated support",
        "24/7 phone support",
        "Custom integrations",
        "White-label options",
        "Advanced reporting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Torres",
      company: "E-commerce Store",
      role: "Operations Manager",
      content: "Zion Inventory Smart has reduced our stockouts by 90% and increased our inventory turnover by 40%. The AI forecasting is incredible.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Jennifer Lee",
      company: "Retail Chain",
      role: "Inventory Director",
      content: "The multi-location management is outstanding. We can track inventory across 20+ stores in real-time and optimize stock levels automatically.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "David Park",
      company: "Manufacturing Company",
      role: "Supply Chain Manager",
      content: "The demand forecasting has saved us thousands in carrying costs. We're ordering exactly what we need, when we need it.",
      rating: 5,
      avatar: "DP"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Inventory Smart - AI-Powered Inventory Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Optimize your inventory with Zion Inventory Smart. AI-powered demand forecasting, real-time tracking, and automated reordering for maximum efficiency."
        />
        <meta
          name="keywords"
          content="inventory management, demand forecasting, inventory tracking, stock management, warehouse management, supply chain optimization"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-inventory-smart" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-500/30 mb-6">
              <Package className="w-4 h-4 text-sky-400 mr-2" />
              <span className="text-sky-400 text-sm font-medium">Inventory Management Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-cyan-400">
                Zion Inventory Smart
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-purple-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most intelligent inventory management platform powered by AI. Optimize stock levels, 
              predict demand, and automate reordering with advanced analytics and machine learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-sky-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-sky-400 text-sky-400 px-8 py-4 rounded-lg font-semibold hover:bg-sky-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Package className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400 mb-2">80%</div>
                <div className="text-gray-300 text-sm">Reduced Stockouts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300 text-sm">Faster Turnover</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Automated Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Inventory Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect for Any Business Type
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From retail to manufacturing, we've got specialized solutions for every industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {inventoryTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-sky-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="flex items-center justify-center text-sky-400 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {type.efficiency} Efficiency
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Inventory Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize your inventory and reduce costs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-sky-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-sky-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature.benefit}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Scale Your Inventory Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your inventory needs and grow your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-sky-500/50 shadow-2xl shadow-sky-500/20' 
                      : 'border-white/20 hover:border-sky-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-sky-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-sky-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white hover:from-sky-600 hover:to-purple-700 shadow-lg hover:shadow-sky-500/25'
                        : 'border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Operations Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what operations professionals say about Zion Inventory Smart
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-sky-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Optimize Your Inventory Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using Zion Inventory Smart to reduce costs and improve efficiency. 
              Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-sky-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-sky-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-sky-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-sky-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-sky-400 text-sky-400 px-8 py-4 rounded-lg font-semibold hover:bg-sky-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Package className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}