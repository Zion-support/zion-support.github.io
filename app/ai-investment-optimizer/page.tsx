'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, TrendingUp, BarChart, Target, Shield, Clock, Award, Brain, Globe, Heart, Home, Video, Palette, Code, Music, Camera, Headphones, MessageSquare, Smile, Activity, Zap, Settings, Database, Lock, Eye, Search, FileText, DollarSign, PieChart, LineChart, TrendingDown, Wallet, CreditCard, Banknote, Coins, PiggyBank } from 'lucide-react';
import Footer from '../components/Footer';

const AIInvestmentOptimizerPage: React.FC = () => {
  const features = [
    "AI-Powered Portfolio Analysis",
    "Real-time Market Monitoring",
    "Risk Assessment & Management",
    "Automated Rebalancing",
    "Tax Optimization Strategies",
    "Diversification Recommendations",
    "Performance Tracking",
    "Goal-Based Investing",
    "Market Trend Analysis",
    "Custom Investment Strategies",
    "Retirement Planning",
    "Educational Resources"
  ];

  const investmentStrategies = [
    {
      title: "Conservative Growth",
      icon: Shield,
      description: "Low-risk strategy focused on capital preservation and steady growth",
      allocation: [
        "60% Bonds & Fixed Income",
        "30% Blue-chip Stocks",
        "10% Cash & Money Market",
        "0% High-risk Assets"
      ],
      expectedReturn: "4-6% annually",
      riskLevel: "Low"
    },
    {
      title: "Balanced Portfolio",
      icon: Target,
      description: "Moderate risk strategy balancing growth and stability",
      allocation: [
        "40% Stocks",
        "40% Bonds",
        "15% Real Estate",
        "5% Alternative Investments"
      ],
      expectedReturn: "6-8% annually",
      riskLevel: "Medium"
    },
    {
      title: "Aggressive Growth",
      icon: TrendingUp,
      description: "High-growth strategy for long-term wealth building",
      allocation: [
        "70% Growth Stocks",
        "20% International Markets",
        "10% Emerging Markets",
        "0% Bonds"
      ],
      expectedReturn: "8-12% annually",
      riskLevel: "High"
    },
    {
      title: "Income Focus",
      icon: DollarSign,
      description: "Strategy focused on generating regular income",
      allocation: [
        "50% Dividend Stocks",
        "30% REITs",
        "15% Corporate Bonds",
        "5% High-yield Savings"
      ],
      expectedReturn: "5-7% annually",
      riskLevel: "Medium"
    }
  ];

  const pricingTiers = [
    {
      name: "Basic Investor",
      price: "$39",
      period: "/month",
      description: "Perfect for individual investors getting started",
      features: [
        "Portfolio analysis",
        "Basic recommendations",
        "Market monitoring",
        "Performance tracking",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Advanced Investor",
      price: "$99",
      period: "/month",
      description: "Comprehensive tools for serious investors",
      features: [
        "Advanced AI analysis",
        "Custom strategies",
        "Tax optimization",
        "Automated rebalancing",
        "Priority support",
        "Advanced reporting",
        "Goal tracking",
        "Educational content"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "For financial advisors and institutions",
      features: [
        "White-label solution",
        "Client management",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support",
        "API access",
        "Compliance tools",
        "Multi-account management",
        "SLA guarantee",
        "Training & onboarding"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      role: "Portfolio Manager",
      company: "Wealth Management Firm",
      content: "The AI Investment Optimizer has revolutionized how we manage client portfolios. The AI-driven insights have consistently outperformed our traditional analysis methods, and our clients are seeing better returns with lower risk.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "David Kim",
      role: "Retiree",
      company: "Individual Investor",
      content: "As someone approaching retirement, I needed a tool that could help me optimize my portfolio for income generation. This AI system has not only increased my returns but also given me peace of mind about my financial future.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Sarah Chen",
      role: "Young Professional",
      company: "Tech Industry",
      content: "I was overwhelmed by all the investment options available. The AI optimizer created a personalized strategy that matches my risk tolerance and financial goals. It's like having a personal financial advisor available 24/7.",
      rating: 5,
      avatar: "SC"
    }
  ];

  const marketInsights = [
    {
      category: "Stock Market",
      trend: "Bullish",
      change: "+2.3%",
      icon: TrendingUp,
      description: "Technology and healthcare sectors showing strong growth"
    },
    {
      category: "Bond Market",
      trend: "Neutral",
      change: "+0.8%",
      icon: BarChart,
      description: "Interest rates stabilizing, corporate bonds attractive"
    },
    {
      category: "Real Estate",
      trend: "Bullish",
      change: "+1.5%",
      description: "REITs performing well, commercial real estate recovering"
    },
    {
      category: "Commodities",
      trend: "Volatile",
      change: "-0.5%",
      icon: TrendingDown,
      description: "Gold and oil prices fluctuating, diversification recommended"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>AI Investment Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Investment Optimizer
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Maximize your investment returns with AI-powered portfolio optimization, 
              risk management, and market analysis. Make smarter investment decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-green-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-green-400 text-green-400 font-semibold py-4 px-8 rounded-xl hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center">
                <BarChart className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">23%</div>
                <div className="text-gray-400">Average Returns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15%</div>
                <div className="text-gray-400">Risk Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50k+</div>
                <div className="text-gray-400">Portfolios Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-400">Market Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Investment Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from proven investment strategies optimized by advanced AI algorithms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentStrategies.map((strategy, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <strategy.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{strategy.title}</h3>
                    <p className="text-gray-300">{strategy.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">Expected Return</span>
                    <span className="text-green-400 font-semibold">{strategy.expectedReturn}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">Risk Level</span>
                    <span className={`font-semibold ${
                      strategy.riskLevel === 'Low' ? 'text-green-400' :
                      strategy.riskLevel === 'Medium' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>{strategy.riskLevel}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white mb-2">Asset Allocation:</h4>
                  {strategy.allocation.map((allocation, allocationIndex) => (
                    <div key={allocationIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {allocation}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-Time Market Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with AI-powered market analysis and trend predictions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <insight.icon className="w-8 h-8 text-green-400" />
                  <span className={`text-sm font-semibold ${
                    insight.trend === 'Bullish' ? 'text-green-400' :
                    insight.trend === 'Bearish' ? 'text-red-400' :
                    insight.trend === 'Volatile' ? 'text-yellow-400' :
                    'text-gray-400'
                  }`}>{insight.trend}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{insight.category}</h3>
                <div className="text-2xl font-bold text-white mb-2">{insight.change}</div>
                <p className="text-gray-300 text-sm">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Investment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools powered by cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  AI-powered investment optimization with real-time market analysis and personalized recommendations.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Investment Optimization Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that matches your investment goals and experience level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`cyber-card p-8 hover:scale-105 transition-all duration-300 relative ${
                  tier.popular ? 'ring-2 ring-green-400/50' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 text-lg">{tier.period}</span>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white hover:from-green-600 hover:to-purple-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}>
                    {tier.cta}
                  </button>
                </div>
                
                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI optimizer has helped investors achieve their financial goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Optimizing Your Investments Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of investors who trust our AI to optimize their portfolios. 
            Start your free trial and see the difference AI can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-gradient-to-r from-green-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-green-400 text-green-400 font-semibold py-4 px-8 rounded-xl hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>Questions? Contact us at <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 (302) 464-0950</a></p>
            <p>or email <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIInvestmentOptimizerPage;