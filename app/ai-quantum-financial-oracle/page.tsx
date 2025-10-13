import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, BarChart3, TrendingUp, Shield, Zap, Globe, Clock, Users, Award, Brain, Sparkles, DollarSign, Target, Activity, PieChart } from 'lucide-react';

export default function AIQuantumFinancialOracle() {
  const features = [
    {
      title: "Quantum-Powered Predictions",
      description: "Leverage quantum computing for 99.7% accurate financial market predictions and analysis",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-Time Market Analysis",
      description: "Monitor global markets 24/7 with instant alerts and trend identification",
      icon: <Activity className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Risk Assessment Engine",
      description: "Advanced risk modeling with quantum algorithms for portfolio optimization",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Multi-Asset Coverage",
      description: "Analyze stocks, bonds, commodities, cryptocurrencies, and forex markets",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Portfolio Optimization",
      description: "AI-driven portfolio rebalancing with quantum-enhanced algorithms",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure compliance with financial regulations across all jurisdictions",
      icon: <Award className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Trader",
      price: "$199",
      period: "/month",
      description: "Perfect for individual traders and small investors",
      features: [
        "5 portfolio analyses per month",
        "Real-time market data",
        "Basic risk assessment",
        "Email alerts",
        "Mobile app access",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for financial advisors and investment firms",
      features: [
        "Unlimited portfolio analyses",
        "Advanced quantum predictions",
        "Multi-asset optimization",
        "Custom risk models",
        "API access",
        "Priority support",
        "White-label options",
        "Compliance reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large financial institutions and hedge funds",
      features: [
        "Everything in Professional",
        "Custom quantum algorithms",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced analytics",
        "Custom integrations",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. James Chen",
      company: "Quantum Capital Partners",
      role: "Chief Investment Officer",
      content: "The quantum predictions have given us a 40% improvement in portfolio performance. The accuracy is simply remarkable.",
      rating: 5,
      avatar: "JC"
    },
    {
      name: "Maria Rodriguez",
      company: "Global Investment Bank",
      role: "Head of Risk Management",
      content: "This platform has revolutionized our risk assessment capabilities. We can now identify potential issues before they become problems.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "David Thompson",
      company: "Hedge Fund Manager",
      role: "Portfolio Manager",
      content: "The real-time analysis and quantum-powered insights have significantly improved our trading strategies and returns.",
      rating: 5,
      avatar: "DT"
    }
  ];

  const marketCoverage = [
    {
      asset: "Stocks",
      coverage: "50,000+ global stocks",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      asset: "Bonds",
      coverage: "Government & corporate bonds",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      asset: "Cryptocurrencies",
      coverage: "500+ digital assets",
      icon: <Zap className="w-6 h-6" />
    },
    {
      asset: "Commodities",
      coverage: "Energy, metals, agriculture",
      icon: <Globe className="w-6 h-6" />
    },
    {
      asset: "Forex",
      coverage: "Major & exotic currency pairs",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      asset: "Derivatives",
      coverage: "Options, futures, swaps",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const performanceMetrics = [
    {
      metric: "Prediction Accuracy",
      value: "99.7%",
      description: "Quantum-enhanced forecasting"
    },
    {
      metric: "Risk Reduction",
      value: "65%",
      description: "Average portfolio risk decrease"
    },
    {
      metric: "Return Improvement",
      value: "40%",
      description: "Enhanced portfolio performance"
    },
    {
      metric: "Processing Speed",
      value: "10x",
      description: "Faster than traditional methods"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Financial Oracle - Zion Tech Group | Advanced Financial AI</title>
        <meta
          name="description"
          content="Revolutionary quantum-powered financial AI platform with 99.7% prediction accuracy. Advanced market analysis, risk assessment, and portfolio optimization for traders and institutions."
        />
        <meta
          name="keywords"
          content="quantum finance, AI trading, financial predictions, portfolio optimization, risk assessment, quantum computing, financial AI, market analysis, investment AI"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">Quantum-Powered AI</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Quantum Financial
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-pulse">
                {" "}Oracle
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary quantum-powered financial AI that delivers 99.7% accurate market predictions. 
              Transform your investment strategy with advanced risk assessment and portfolio optimization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">99.7% accuracy</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">50,000+ assets</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Real-time analysis</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Quantum computing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                <BarChart3 className="w-5 h-5 mr-2 inline" />
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Proven Performance
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our quantum-powered AI delivers exceptional results across all financial markets and asset classes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {metric.metric}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {metric.description}
                  </div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Advanced Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge quantum computing and AI technology for superior financial analysis and predictions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Coverage Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Global Market Coverage
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive coverage across all major asset classes and global markets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketCoverage.map((market, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {market.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    {market.asset}
                  </h3>
                  <p className="text-gray-300 text-center text-sm">
                    {market.coverage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Investment Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your investment needs and trading volume.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-purple-500/50 shadow-purple-500/20 scale-105'
                      : 'border-white/10 hover:border-purple-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-400 hover:to-pink-400'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Client Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how leading financial institutions are using our quantum AI to achieve superior results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
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
                Ready to Revolutionize Your Financial Strategy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of finance with quantum-powered AI predictions and advanced portfolio optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a></p>
                <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}