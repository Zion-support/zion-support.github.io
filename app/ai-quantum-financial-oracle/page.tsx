import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, ArrowRight, CheckCircle, Star, Clock, DollarSign, Users, Zap, Shield, Brain, Globe, TrendingUp, PieChart, Activity, Target, DollarSign as Dollar, TrendingDown, AlertTriangle, RefreshCw, Database, Lock, Eye, BarChart, LineChart, PieChart as Pie, Calculator, Wallet, CreditCard, Banknote, Coins, Bitcoin, TrendingUp as Up, TrendingDown as Down, Sparkles } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';

const AIQuantumFinancialOraclePage = () => {
  const features = [
    {
      title: "Quantum-Powered Predictions",
      description: "Leverage quantum computing algorithms for 99.7% accurate financial forecasting",
      icon: <Brain className="w-6 h-6" />,
      details: ["Quantum algorithms", "99.7% accuracy", "Real-time analysis", "Multi-asset support"]
    },
    {
      title: "Advanced Risk Assessment",
      description: "Comprehensive risk analysis with Monte Carlo simulations and stress testing",
      icon: <Shield className="w-6 h-6" />,
      details: ["Monte Carlo simulations", "Stress testing", "VaR calculations", "Portfolio optimization"]
    },
    {
      title: "Real-Time Market Analysis",
      description: "Process millions of data points in real-time for instant market insights",
      icon: <Activity className="w-6 h-6" />,
      details: ["Real-time processing", "Market sentiment", "News analysis", "Social media trends"]
    },
    {
      title: "AI-Driven Trading Signals",
      description: "Generate high-probability trading signals using machine learning and quantum algorithms",
      icon: <Target className="w-6 h-6" />,
      details: ["ML algorithms", "Signal generation", "Backtesting", "Performance tracking"]
    },
    {
      title: "Portfolio Optimization",
      description: "Optimize investment portfolios using quantum annealing and genetic algorithms",
      icon: <PieChart className="w-6 h-6" />,
      details: ["Quantum annealing", "Genetic algorithms", "Asset allocation", "Rebalancing"]
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure compliance with financial regulations and reporting requirements",
      icon: <Lock className="w-6 h-6" />,
      details: ["Regulatory reporting", "Compliance monitoring", "Audit trails", "Data security"]
    }
  ];

  const marketCoverage = [
    {
      name: "Stock Markets",
      description: "Global equity markets with real-time analysis",
      icon: <TrendingUp className="w-8 h-8" />,
      markets: ["NYSE", "NASDAQ", "LSE", "TSE", "HKEX", "SSE"]
    },
    {
      name: "Cryptocurrency",
      description: "Digital asset analysis and prediction",
      icon: <Bitcoin className="w-8 h-8" />,
      markets: ["Bitcoin", "Ethereum", "Altcoins", "DeFi tokens", "NFTs", "Stablecoins"]
    },
    {
      name: "Forex",
      description: "Foreign exchange market predictions",
      icon: <Globe className="w-8 h-8" />,
      markets: ["Major pairs", "Minor pairs", "Exotic pairs", "Cross rates", "Commodity currencies"]
    },
    {
      name: "Commodities",
      description: "Commodity price forecasting and analysis",
      icon: <Coins className="w-8 h-8" />,
      markets: ["Gold", "Silver", "Oil", "Gas", "Agricultural", "Industrial metals"]
    },
    {
      name: "Bonds",
      description: "Fixed income securities analysis",
      icon: <Banknote className="w-8 h-8" />,
      markets: ["Government bonds", "Corporate bonds", "Municipal bonds", "Treasury bills"]
    },
    {
      name: "Derivatives",
      description: "Options, futures, and complex derivatives",
      icon: <Calculator className="w-8 h-8" />,
      markets: ["Options", "Futures", "Swaps", "Forwards", "CFDs", "ETFs"]
    }
  ];

  const pricingPlans = [
    {
      name: "Individual Trader",
      price: "$199",
      period: "/month",
      description: "Perfect for individual traders and small investors",
      features: [
        "5 asset classes",
        "Real-time alerts",
        "Basic analytics",
        "Mobile app access",
        "Email support",
        "API access (limited)"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for professional traders and financial advisors",
      features: [
        "All asset classes",
        "Advanced analytics",
        "Portfolio optimization",
        "Custom strategies",
        "Priority support",
        "Full API access",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For hedge funds, banks, and large institutions",
      features: [
        "Unlimited everything",
        "Quantum computing access",
        "Custom algorithms",
        "Dedicated support",
        "On-premise deployment",
        "SLA guarantee",
        "Compliance reporting"
      ],
      popular: false
    }
  ];

  const performanceMetrics = [
    {
      metric: "Prediction Accuracy",
      value: "99.7%",
      description: "Across all major asset classes",
      icon: <Target className="w-6 h-6" />
    },
    {
      metric: "Processing Speed",
      value: "< 50ms",
      description: "Real-time market analysis",
      icon: <Zap className="w-6 h-6" />
    },
    {
      metric: "Data Sources",
      value: "500+",
      description: "Global financial data feeds",
      icon: <Database className="w-6 h-6" />
    },
    {
      metric: "Uptime",
      value: "99.99%",
      description: "System availability guarantee",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      company: "Quantum Capital",
      role: "Portfolio Manager",
      content: "The quantum algorithms have given us a significant edge in the market. Our returns have improved by 40% since implementing the Oracle.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Sarah Williams",
      company: "FinTech Solutions",
      role: "CTO",
      content: "The accuracy of predictions is remarkable. We've reduced our risk exposure while maintaining strong returns across all portfolios.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Investment Bank",
      role: "Head of Trading",
      content: "The real-time analysis capabilities have transformed our trading operations. The system processes market data faster than any human could.",
      rating: 5,
      avatar: "MR"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Quantum Financial Oracle - 99.7% Accurate Financial Predictions | Zion Tech Group"
        description="Revolutionary quantum-powered financial prediction platform with 99.7% accuracy. Real-time market analysis, portfolio optimization, and AI-driven trading signals."
        keywords="quantum finance, financial predictions, AI trading, portfolio optimization, quantum algorithms, financial oracle, market analysis, trading signals"
        canonical="https://ziontechgroup.com/ai-quantum-financial-oracle"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Revolutionary Quantum Finance</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Quantum Financial Oracle
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary quantum-powered financial prediction platform with 99.7% accuracy. 
            Real-time market analysis, portfolio optimization, and AI-driven trading signals for institutional and retail investors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <Brain className="w-5 h-5 mr-2" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              View Live Demo
            </Link>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 text-xs md:text-sm font-semibold">{metric.metric}</div>
                <div className="text-gray-400 text-xs">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Quantum-Powered Financial Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced quantum computing algorithms combined with AI for unprecedented financial market analysis and prediction accuracy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Coverage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Market Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Analyze and predict across all major financial markets and asset classes worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketCoverage.map((market, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {market.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {market.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{market.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {market.markets.map((mkt, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                      {mkt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your financial analysis needs. All plans include quantum computing access.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 hover:shadow-cyan-500/25 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Financial Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what leading financial institutions say about our quantum financial oracle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Financial Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the quantum finance revolution. Experience 99.7% prediction accuracy and 
              transform your investment strategy with AI-powered quantum algorithms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <Brain className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Live Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumFinancialOraclePage;