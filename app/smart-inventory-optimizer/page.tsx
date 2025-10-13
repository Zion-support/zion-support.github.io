import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock,
  Target,
  Zap,
  Shield,
  Smartphone,
  Globe,
  DollarSign
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const SmartInventoryOptimizerPage = () => {
  const features = [
    {
      title: "AI Demand Forecasting",
      description: "Predict future demand with 95% accuracy using machine learning algorithms and historical data analysis",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Automated Reorder Points",
      description: "Set intelligent reorder points that automatically trigger purchase orders based on lead times and demand patterns",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Analytics",
      description: "Monitor inventory levels, turnover rates, and performance metrics with comprehensive real-time dashboards",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-location Management",
      description: "Manage inventory across multiple warehouses, stores, and distribution centers from a single platform",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Cost Optimization",
      description: "Reduce carrying costs by up to 30% through intelligent stock level optimization and waste reduction",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Mobile Management",
      description: "Access and manage your inventory from anywhere with our mobile-first design and barcode scanning",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Automated reorder points",
        "Real-time inventory tracking",
        "Basic analytics dashboard",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location management",
        "Advanced analytics & reporting",
        "API integrations",
        "Priority support",
        "Custom dashboards",
        "Barcode scanning"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Advanced automation",
        "White-label solution",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Inventory Costs",
      description: "Lower carrying costs by 30% through optimized stock levels",
      icon: <DollarSign className="w-6 h-6" />,
      value: "30%"
    },
    {
      title: "Eliminate Stockouts",
      description: "Reduce stockouts by 95% with accurate demand forecasting",
      icon: <Shield className="w-6 h-6" />,
      value: "95%"
    },
    {
      title: "Increase Efficiency",
      description: "Save 20 hours per week with automated inventory management",
      icon: <Clock className="w-6 h-6" />,
      value: "20h"
    },
    {
      title: "Improve Accuracy",
      description: "Achieve 99.9% inventory accuracy with real-time tracking",
      icon: <Target className="w-6 h-6" />,
      value: "99.9%"
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Retail Solutions Inc.",
      role: "Operations Manager",
      content: "The smart inventory optimizer has transformed our operations. We've reduced carrying costs by 35% and eliminated stockouts completely.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "E-commerce Plus",
      role: "Inventory Director",
      content: "The AI forecasting is incredibly accurate. We've improved our inventory turnover by 40% and reduced waste significantly.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "Manufacturing Corp",
      role: "Supply Chain Manager",
      content: "The multi-location management feature is a game-changer. We can now manage all our warehouses from one platform.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Smart Inventory Optimizer - AI-Powered Inventory Management | Zion Tech Group"
        description="Optimize your inventory with AI-powered demand forecasting, automated reorder points, and real-time analytics. Reduce costs by 30% and eliminate stockouts."
        keywords="inventory management, demand forecasting, stock optimization, warehouse management, supply chain, AI inventory, business automation"
        canonical="https://ziontechgroup.com/smart-inventory-optimizer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Package className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Inventory Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Smart Inventory Optimizer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your inventory management with AI-powered demand forecasting, automated reorder points, 
            and real-time analytics. Reduce costs by 30% and eliminate stockouts with intelligent optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Package className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Benefits Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <div className="text-gray-300 text-xs md:text-sm">{benefit.title}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Inventory Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered inventory optimizer uses machine learning to predict demand, optimize stock levels, and automate reordering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your inventory management needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10 scale-105' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
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
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
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
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses already using our smart inventory optimizer to reduce costs and improve efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Package className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default SmartInventoryOptimizerPage;