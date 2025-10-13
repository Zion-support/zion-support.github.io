import React, { useState } from "react";
import { Package, TrendingUp, BarChart3, Zap, ArrowRight, CheckCircle, Star, Users, Clock, DollarSign, Brain, AlertTriangle } from "lucide-react";
import EnhancedSEO from "../../components/EnhancedSEO";
import FuturisticCard from "../../components/FuturisticCard";
import FuturisticButton from "../../components/FuturisticButton";
import ResponsiveContainer from "../../components/ResponsiveContainer";

const SmartInventoryOptimizerPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const features = [
    {
      title: "AI Demand Forecasting",
      description: "Predict future demand with 95% accuracy using machine learning algorithms and historical data analysis.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Seasonal trend analysis", "Weather impact prediction", "Market demand forecasting"]
    },
    {
      title: "Smart Reorder Points",
      description: "Automatically calculate optimal reorder points based on lead times, demand patterns, and safety stock requirements.",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ["Dynamic reorder calculations", "Lead time optimization", "Safety stock management"]
    },
    {
      title: "Inventory Analytics Dashboard",
      description: "Comprehensive analytics and reporting on inventory performance, turnover rates, and cost optimization opportunities.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Real-time inventory tracking", "Performance metrics", "Cost analysis reports"]
    },
    {
      title: "Automated Purchase Orders",
      description: "Generate and send purchase orders automatically when inventory levels reach reorder points.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Auto-PO generation", "Vendor management", "Approval workflows"]
    },
    {
      title: "Multi-Location Management",
      description: "Manage inventory across multiple warehouses, stores, and distribution centers from a single platform.",
      icon: <Package className="w-6 h-6" />,
      benefits: ["Centralized control", "Location transfers", "Cross-location analytics"]
    },
    {
      title: "Cost Optimization",
      description: "Identify cost-saving opportunities through bulk purchasing, supplier negotiations, and waste reduction.",
      icon: <DollarSign className="w-6 h-6" />,
      benefits: ["Bulk purchase recommendations", "Supplier cost analysis", "Waste tracking"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 49,
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Reorder point management",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 149,
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location support",
        "Automated purchase orders",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 399,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Advanced integrations",
        "White-label options",
        "Dedicated support",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "Operations Manager",
      company: "RetailMax Inc",
      content: "The smart inventory optimizer reduced our stockouts by 60% and cut carrying costs by 25%. The AI forecasting is incredibly accurate.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      role: "Supply Chain Director",
      company: "Global Distribution Co",
      content: "Managing inventory across 15 locations was a nightmare. This tool streamlined everything and gave us real-time visibility into our entire operation.",
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "CEO",
      company: "E-commerce Solutions",
      content: "The automated purchase orders and demand forecasting have saved us countless hours and significantly improved our cash flow management.",
      rating: 5
    }
  ];

  const stats = [
    { number: "35%", label: "Average Cost Reduction", icon: <DollarSign className="w-6 h-6" /> },
    { number: "60%", label: "Stockout Reduction", icon: <AlertTriangle className="w-6 h-6" /> },
    { number: "95%", label: "Forecasting Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "1,200+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Smart Inventory Optimizer | Zion Tech Group - AI-Powered Inventory Management"
        description="Optimize your inventory with AI-powered demand forecasting, smart reorder points, and automated purchase orders. Reduce costs, prevent stockouts, and improve efficiency."
        keywords="inventory management, demand forecasting, inventory optimization, stock management, purchase orders, supply chain, AI inventory"
        canonical="https://ziontechgroup.com/smart-inventory-optimizer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Package className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Inventory Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Smart Inventory Optimizer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your inventory management with AI-powered demand forecasting, smart reorder points, 
            and automated purchase orders. Reduce costs, prevent stockouts, and optimize your supply chain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Inventory Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage advanced AI and automation to optimize your inventory management and reduce costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your inventory management needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about the Smart Inventory Optimizer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our smart inventory optimizer to reduce costs and improve efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Your Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 Contact: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            <p>📞 Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default SmartInventoryOptimizerPage;