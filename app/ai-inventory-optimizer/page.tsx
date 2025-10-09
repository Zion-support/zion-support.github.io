'use client';
import React, { useState, useEffect } from 'react';
import { Package, TrendingUp, BarChart, Zap, CheckCircle, Star, ArrowRight, Clock, Target, Shield, DollarSign, AlertTriangle, ShoppingCart, Truck } from 'lucide-react';

const AIInventoryOptimizerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Demand Forecasting",
      description: "AI-powered demand prediction using historical data, seasonality, and market trends.",
      benefit: "Reduce stockouts by 90%"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Intelligent inventory management to minimize carrying costs and maximize profitability.",
      benefit: "Save 25% on inventory costs"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with AI insights, trends, and performance metrics.",
      benefit: "Data-driven decisions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Reordering",
      description: "Smart reorder points and quantities based on AI analysis of sales patterns.",
      benefit: "Eliminate manual ordering"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "ABC Analysis",
      description: "AI categorizes inventory by value and importance for optimal management focus.",
      benefit: "Focus on high-value items"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management",
      description: "Identify slow-moving and obsolete inventory with AI-powered risk assessment.",
      benefit: "Prevent inventory waste"
    }
  ];

  const benefits = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory Turnover",
      value: "300%",
      description: "Increase in inventory turnover rate"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Savings",
      value: "25%",
      description: "Reduction in inventory carrying costs"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Stockout Reduction",
      value: "90%",
      description: "Decrease in stockout incidents"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Revenue Increase",
      value: "40%",
      description: "Boost in sales through better availability"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Reorder point optimization",
        "Email support",
        "Basic analytics",
        "1 warehouse location"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location support",
        "Priority support",
        "Advanced analytics",
        "ABC analysis",
        "Risk management",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",
        "Advanced AI automation",
        "Global warehouse network",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "Advanced compliance",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "James Rodriguez",
      company: "Retail Chain",
      role: "Operations Manager",
      content: "AI Inventory Optimizer increased our inventory turnover by 300% and reduced costs by 25%. The demand forecasting is incredibly accurate!",
      rating: 5
    },
    {
      name: "Sarah Kim",
      company: "E-commerce Platform",
      role: "Supply Chain Director",
      content: "The automated reordering and ABC analysis helped us focus on high-value items and eliminate stockouts. Revenue increased by 40%.",
      rating: 5
    },
    {
      name: "Michael Brown",
      company: "Manufacturing Co.",
      role: "Inventory Manager",
      content: "The AI-powered risk management identified slow-moving inventory before it became obsolete. We saved thousands in write-offs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Inventory Optimizer
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Maximize Profitability with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Revolutionize your inventory management with our AI-powered optimization platform. 
              Increase turnover by 300%, reduce costs by 25%, and eliminate stockouts by 90% 
              with intelligent demand forecasting and automated reordering.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.value}</div>
                  <div className="text-lg font-semibold text-white mb-2">{benefit.title}</div>
                  <div className="text-gray-300 text-sm">{benefit.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Inventory Optimizer to maximize profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInventoryOptimizerPage;