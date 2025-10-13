import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Package, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Target,
  ArrowRight,
  Sparkles,
  Brain,
  AlertTriangle,
  ThumbsUp,
  PieChart,
  ShoppingCart,
  DollarSign,
  Activity,
  Settings
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const SmartInventoryOptimizerPage = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationResult, setOptimizationResult] = useState(null);

  const features = [
    {
      title: "AI Demand Forecasting",
      description: "Advanced machine learning algorithms predict demand patterns with 92% accuracy, reducing stockouts and overstock",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "92% accuracy"
    },
    {
      title: "Automated Reorder Points",
      description: "Intelligent reorder point calculation based on lead times, demand variability, and service level targets",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "30% reduction"
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive dashboard with real-time inventory metrics, turnover rates, and performance indicators",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "Real-time"
    },
    {
      title: "Cost Optimization",
      description: "Minimize carrying costs while maintaining service levels through intelligent inventory allocation",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      stats: "25% savings"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small businesses with basic inventory needs",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Reorder point optimization",
        "Standard reporting",
        "Email support",
        "Basic analytics dashboard"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing businesses with complex inventory",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location support",
        "Automated reordering",
        "Advanced analytics",
        "Priority support",
        "API integration",
        "Custom reports"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "For large organizations with complex supply chains",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Multi-warehouse optimization",
        "Advanced integrations",
        "Dedicated account manager",
        "24/7 premium support",
        "White-label options",
        "Custom development"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "RetailMax Inc.",
      role: "Operations Manager",
      content: "The Smart Inventory Optimizer reduced our carrying costs by 30% while improving service levels. The AI forecasting is incredibly accurate.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      company: "E-commerce Solutions",
      role: "Supply Chain Director",
      content: "We've eliminated stockouts completely and reduced overstock by 40%. The automated reordering saves us hours every week.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "Manufacturing Co.",
      role: "Inventory Manager",
      content: "The real-time analytics and forecasting have transformed our inventory management. We're more efficient and profitable than ever.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const handleOptimizeDemo = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setOptimizationResult({
        currentStock: 1250,
        recommendedStock: 980,
        savings: 270,
        turnoverRate: 8.5,
        recommendations: [
          "Reduce stock for slow-moving items by 30%",
          "Increase stock for high-demand items by 15%",
          "Implement automated reordering for top 20 SKUs",
          "Consider seasonal adjustments for Q4"
        ]
      });
      setIsOptimizing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Smart Inventory Optimizer | Zion Tech Group</title>
        <meta name="description" content="AI-powered inventory optimization tool with demand forecasting, automated reordering, and real-time analytics. Reduce costs and improve efficiency." />
        <meta name="keywords" content="inventory optimization, demand forecasting, inventory management, supply chain, AI inventory, stock optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/smart-inventory-optimizer" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Package className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Inventory Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
              Smart Inventory Optimizer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Optimize your inventory with AI-powered demand forecasting, automated reordering, 
            and real-time analytics. Reduce costs while improving service levels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              onClick={handleOptimizeDemo}
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              {isOptimizing ? "Optimizing..." : "Try Demo Optimization"}
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Demo Optimization Result */}
          {optimizationResult && (
            <FuturisticCard className="max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Optimization Complete!</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <div className="text-blue-400 font-semibold">Current Stock</div>
                    <div className="text-white text-lg">{optimizationResult.currentStock.toLocaleString()}</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="text-green-400 font-semibold">Recommended</div>
                    <div className="text-white text-lg">{optimizationResult.recommendedStock.toLocaleString()}</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                    <div className="text-purple-400 font-semibold">Savings</div>
                    <div className="text-white text-lg">{optimizationResult.savings} units</div>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                    <div className="text-orange-400 font-semibold">Turnover Rate</div>
                    <div className="text-white text-lg">{optimizationResult.turnoverRate}x</div>
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white mb-3">Optimization Recommendations:</h4>
                  <ul className="space-y-2">
                    {optimizationResult.recommendations.map((rec, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FuturisticCard>
          )}
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Inventory Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered inventory optimizer provides comprehensive solutions to streamline 
              your supply chain and maximize profitability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our customers consistently achieve significant improvements in inventory efficiency and cost reduction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">30%</div>
              <div className="text-gray-300">Reduction in Carrying Costs</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300">Service Level Achievement</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50%</div>
              <div className="text-gray-300">Faster Reorder Processing</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25%</div>
              <div className="text-gray-300">Overall Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business size and inventory complexity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '#'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Customer Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are transforming their inventory management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of businesses already using our Smart Inventory Optimizer 
            to reduce costs and improve efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartInventoryOptimizerPage;