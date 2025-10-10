'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    {}
      title: "AI Portfolio Analysis",
      description: "Advanced AI analyzes your portfolio and suggests optimizations",
      icon: Brain,
      price: "Included"},
    {}
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and diversification recommendations",
      icon: Shield,
      price: "Included"},
    {}
      title: "Market Prediction",
      description: "AI-powered market predictions and trend analysis",
      icon: TrendingUp,
      price: "Included"},
    {}
      title: "Auto Rebalancing",
      description: "Automatically rebalance your portfolio based on market conditions",
      icon: RefreshCw,
      price: "Included"},
    {}
      title: "Tax Optimization",
      description: "Minimize tax impact with smart tax-loss harvesting",
      icon: DollarSign,
      price: "Pro Feature"},
    {}
      title: "Professional Advisor",
      description: "Access to certified financial advisors for complex strategies",
      icon: Users,
      price: "Enterprise"}
  ];

  const pricingPlans = [
    {
      name: "Individual"
    {}
      name: "Individual",
      price: "$39",
      period: "/month",
      description: "Perfect for individual investors and small portfolios",
      features: [,
        "Up to $100K portfolio",
        "Basic AI analysis",
        "Risk assessment",
        "Market predictions",
        "Email support"
      ],
      popular: false,
    },
    {
      name: "Professional"
    {}
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for serious investors and larger portfolios",
      features: [,
        "Up to $1M portfolio",
        "Advanced AI analysis",
        "Auto rebalancing",
        "Tax optimization",
        "Priority support",
        "Real-time alerts",
        "Custom strategies"
      ],
      popular: true,
    },
    {
      name: "Enterprise"
    {}
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For institutional investors and wealth management firms",
      features: [,
        "Unlimited portfolio size",
        "Full AI analysis suite",
        "Professional advisor access",
        "Custom integrations",
        "24/7 support",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false,
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      setIsOptimizing(false);
    }, 3000);
  };

  const getChangeColor = (change: number) => {,
    return change >= 0 ? 'text-green-400' : 'text-red-400';
  };

  const getChangeIcon = (change: number) => {,
  const getChangeColor = (change: number) => {}
    return change >= 0 ? 'text-green-400' : 'text-red-400';
  };

  const getChangeIcon = (change: number) => {}
    return change >= 0 ? TrendingUp : TrendingDown;
  };

  return(<div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 ${className}`}>
  return (</div>
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 ${className}`}></div>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
      <div className="relative py-20 overflow-hidden"></div>
      <div className="relative py-20 overflow-hidden"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-400/20 rounded-full px-6 py-3 mb-8"></div>
              <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">AI Investment Portfolio Optimizer Pro</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              Advanced Portfolio Management;</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>

            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-12"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"></div>
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" /></div>
              </button>

              <button className="group inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo;
              </button>,
            </div>,
,
            {/* Stats */}
            <div className="grid grid-cols-2 md: grid-cols-4 gap-8 max-w-4xl mx-auto"></div>
              <div className="text-center"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"></div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-blue-400 mb-2">15.2%</div>
                <div className="text-gray-400">Average Return</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-purple-400 mb-2">23%</div>
                <div className="text-gray-400">Risk Reduction</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">$2.3M</div>
                <div className="text-gray-400">Assets Managed</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
            </div>,
          </div>,
        </div>,
      </div>,
,
      {/* Portfolio Dashboard */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Portfolio Dashboard;
      <div className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Portfolio Dashboard
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor and optimize your investment portfolio with real-time analytics;
            </p>
          </div>
,
          <div className="max-w-7xl mx-auto">,</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">,
              {/* Portfolio Overview */}</div>
              <div className="lg: col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <div className="flex items-center justify-between mb-6"></div>
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <PieChart className="w-8 h-8 text-blue-400 mr-3" />
                    Portfolio Holdings;
                  </h3>,
                  <div className="text-right">,
</div>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"></div>
              {/* Portfolio Overview */}</div>
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <div className="flex items-center justify-between mb-6"></div>
                  <h3 className="text-2xl font-bold text-white flex items-center"></h3>
                    <PieChart className="w-8 h-8 text-blue-400 mr-3" />
                    Portfolio Holdings
                  </h3>
                  <div className="text-right"></div>
                    <div className="text-3xl font-bold text-white">${totalValue.toLocaleString()}</div>
                    <div className="text-gray-400">Total Value</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {portfolio.map((stock) => {}
                    const ChangeIcon = getChangeIcon(stock.change);</div>
                    return(<div key={stock.symbol} className="bg-white/5 rounded-lg p-4 border border-white/10">)</div>
                        <div className="flex items-center justify-between mb-2">)</div>
                          <div className="flex items-center space-x-3">)</div>
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">)</div>
                    return (</div>
                      <div key={stock.symbol} className="bg-white/5 rounded-lg p-4 border border-white/10"></div>
                        <div className="flex items-center justify-between mb-2"></div>
                          <div className="flex items-center space-x-3"></div>
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center"></div>
                              <span className="text-white font-bold text-sm">{stock.symbol.slice(0, 2)}</span>
                            </div>
                            <div></div>
                              <h4 className="text-white font-semibold">{stock.symbol}</h4>
                              <p className="text-gray-400 text-sm">{stock.name}</p>
                            </div>
                          </div>
                          <div className="text-right"></div>
                            <div className="text-white font-semibold">${stock.value.toLocaleString()}</div>
                            <div className={`flex items-center ${getChangeColor(stock.change)}`}></div>
                              <ChangeIcon className="w-4 h-4 mr-1" />
                              <span className="text-sm">{stock.change > 0 ? '+' : ''}{stock.change}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-400"></div>
                          <span>{stock.shares} shares @ ${stock.price}</span>
                          <span>{stock.allocation}% allocation</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Optimization Panel */}
              <div className="space-y-8"></div>
                {/* Risk Profile */}</div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center"></h3>
                    <Shield className="w-6 h-6 text-blue-400 mr-2" />
                    Risk Profile;
                  </h3>
                  <div className="space-y-4"></div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Risk Tolerance</label>
                      <select;
                        value={riskProfile}
                        onChange={(e) => setRiskProfile(e.target.value)}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:border-blue-400"
                      >
                        <option value="conservative" className="bg-slate-800">Conservative</option>
                        <option value="moderate" className="bg-slate-800">Moderate</option>
                        <option value="aggressive" className="bg-slate-800">Aggressive</option>
                      </select>,
                    </div>,
                    <div>,</div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Investment Goal</label>,
                      <select;
                      </select>
                    </div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Investment Goal</label>
                      <select
                        value={investmentGoal}
                        onChange={(e) => setInvestmentGoal(e.target.value)}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:border-blue-400"
                      >
                        <option value="income" className="bg-slate-800">Income</option>
                        <option value="growth" className="bg-slate-800">Growth</option>
                        <option value="balanced" className="bg-slate-800">Balanced</option>
                      </select>,
                    </div>,
                    <div>,</div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Time Horizon</label>,
                      <select;
                      </select>
                    </div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Time Horizon</label>
                      <select
                        value={timeHorizon}
                        onChange={(e) => setTimeHorizon(e.target.value)}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:border-blue-400"
                      >
                        <option value="1-3 years" className="bg-slate-800">1-3 years</option>
                        <option value="3-5 years" className="bg-slate-800">3-5 years</option>
                        <option value="5-10 years" className="bg-slate-800">5-10 years</option>
                        <option value="10+ years" className="bg-slate-800">10+ years</option>
                      </select>,
                    </div>,
                  </div>,
                </div>,
,
                {/* Optimization Results */}
                {optimizationResults && (
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"></div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center"></h3>
                {optimizationResults && (}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"></div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Target className="w-6 h-6 text-blue-400 mr-2" />
                      Optimization Results;
                    </h3>
                    <div className="space-y-4"></div>
                      <div className="flex justify-between"></div>
                        <span className="text-gray-300">Expected Return</span>
                        <span className="text-green-400 font-semibold">{optimizationResults.expectedReturn}%</span>
                      </div>
                      <div className="flex justify-between"></div>
                        <span className="text-gray-300">Risk Level</span>
                        <span className="text-yellow-400 font-semibold">{optimizationResults.riskLevel}</span>
                      </div>
                      <div className="flex justify-between"></div>
                        <span className="text-gray-300">Sharpe Ratio</span>
                        <span className="text-blue-400 font-semibold">{optimizationResults.sharpeRatio}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Optimize Button */}
                <button;
                  onClick={handleOptimizePortfolio}
                  disabled={isOptimizing}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isOptimizing ? (}
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin inline" />
                      Optimizing...
                    </>
                  ) : (,
                    <>,
                      <Zap className="w-5 h-5 mr-2 inline" />,
                      Optimize Portfolio;
                    </>)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Investment Features;
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Investment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover: bg-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">,</div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">,</div>
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between"></div>
                  <span className="text-blue-400 font-semibold">{feature.price}</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Investment Plans;
      <div className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Investment Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {pricingPlans.map((plan, index) => (</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-blue-400/50 ring-2 ring-blue-400/30' : 'border-white/10'}`}></div>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-blue-400/50 ring-2 ring-blue-400/30' : 'border-white/10'}`}>
                {plan.popular && (}</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover: from-blue-600 hover:to-purple-700 transform hover:scale-105'}
                    : 'bg-white/10 text-white hover:bg-white/20'}
                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Start Optimizing Today;
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Start Optimizing Today
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <Phone className="w-5 h-5 text-blue-400 mr-3" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors">
                      +1 (302) 464-0950;
                    </a>
                  </div>
                  <div className="flex items-center"></div>
                    <Mail className="w-5 h-5 text-blue-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                      kleber@ziontechgroup.com;
                    </a>
                  </div>
                  <div className="flex items-start"></div>
                    <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />,
                    <div className="text-gray-300">,</div>
                      <div>364 E Main St STE 1008</div>,
                  <div className="flex items-start"></div>
                    <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                    <div className="text-gray-300"></div>
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Get Started</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Free portfolio analysis</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">No minimum investment</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">30-day money back guarantee</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Expert support</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Analysis;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;