<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function GDataAnalyticsZionTechGroupPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Investment Optimizer - Zion Tech Group</title>
        <meta name="description" content="Ai Investment Optimizer solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Investment Optimizer</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai investment optimizer solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
=======
interface InvestmentOptimizerProps {}
  className?: string;
}

export default function InvestmentOptimizer({ className = '' }: InvestmentOptimizerProps) {}
  const [portfolio, setPortfolio] = useState([)
    { symbol: 'AAPL', name: 'Apple Inc.', shares: 100, price: 175.43, value: 17543, allocation: 25.5, change: 2.34 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 50, price: 378.85, value: 18942.5, allocation: 27.6, change: -1.23 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 30, price: 142.56, value: 4276.8, allocation: 6.2, change: 0.87 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', shares: 25, price: 155.12, value: 3878, allocation: 5.6, change: -0.45 },
    { symbol: 'TSLA', name: 'Tesla Inc.', shares: 20, price: 248.50, value: 4970, allocation: 7.2, change: 3.21 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', shares: 15, price: 875.28, value: 13129.2, allocation: 19.1, change: 1.56 },
    { symbol: 'META', name: 'Meta Platforms Inc.', shares: 40, price: 485.20, value: 19408, allocation: 28.3, change: -2.15 }
  ]);

  const [riskProfile, setRiskProfile] = useState('moderate');
  const [investmentGoal, setInvestmentGoal] = useState('growth');
  const [timeHorizon, setTimeHorizon] = useState('5-10 years');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationResults, setOptimizationResults] = useState<any>(null);</any></<<<any>const</any></<<any>totalValue</any> = portfolio.reduce((sum, stock) => sum + stock.value, 0);

  const features = [
    {}
      title: "AI Portfolio Analysis",
      description: "Advanced AI analyzes your portfolio and suggests optimizations",
      icon: Brain;
      price: "Included"},
    {}
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and diversification recommendations",
      icon: Shield;
      price: "Included"},
    {}
      title: "Market Prediction",
      description: "AI-powered market predictions and trend analysis",
      icon: TrendingUp;
      price: "Included"},
    {}
      title: "Auto Rebalancing",
      description: "Automatically rebalance your portfolio based on market conditions",
      icon: RefreshCw;
      price: "Included"},
    {}
      title: "Tax Optimization",
      description: "Minimize tax impact with smart tax-loss harvesting",
      icon: DollarSign;
      price: "Pro Feature"},
    {}
      title: "Professional Advisor",
      description: "Access to certified financial advisors for complex strategies",
      icon: Users;
      price: "Enterprise"}
  ];

  const pricingPlans = [
    {}
      name: "Individual",
      price: "$39",
      period: "/month",
      description: "Perfect for individual investors and small portfolios",
      features: [
        "Up to $100K portfolio",
        "Basic AI analysis",
        "Risk assessment",
        "Market predictions",
        "Email support"
      ],
      popular: false;
    },
    {}
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for serious investors and larger portfolios",
      features: [
        "Up to $1M portfolio",
        "Advanced AI analysis",
        "Auto rebalancing",
        "Tax optimization",
        "Priority support",
        "Real-time alerts",
        "Custom strategies"
      ],
      popular: true;
    },
    {}
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For institutional investors and wealth management firms",
      features: [
        "Unlimited portfolio size",
        "Full AI analysis suite",
        "Professional advisor access",
        "Custom integrations",
        "24/7 support",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false;
    }
  ];

  const handleOptimizePortfolio = () => {}
    setIsOptimizing(true);
    // Simulate optimization process
    setTimeout(() => {}
      setOptimizationResults({)}
        expectedReturn: 12.5,
        riskLevel: 'Moderate',
        sharpeRatio: 1.8,
        recommendations: [
          { action: 'Buy', symbol: 'AAPL', shares: 25, reason: 'Strong fundamentals and growth potential' },
          { action: 'Sell', symbol: 'META', shares: 10, reason: 'High volatility and regulatory concerns' },
          { action: 'Hold', symbol: 'MSFT', shares: 50, reason: 'Stable performance and dividend yield' }
        ];
        ]
      });

      setIsOptimizing(false);
    }, 3000);
  };

  const getChangeColor = (change: number) => {}
    return change >= 0 ? 'text-green-400' : 'text-red-400';
  };

  const getChangeIcon = (change: number) => {}
    return change >= 0 ? TrendingUp : TrendingDown;
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 ${className}`}></div>
      <Helmet></Helmet>
        <title>AI Investment Portfolio Optimizer Pro - Advanced Portfolio Management | Zion Tech Group</title>
        <meta name="description" content="AI-powered investment portfolio optimization with advanced analytics, risk assessment, and auto-rebalancing. Maximize returns and minimize risk with our intelligent investment platform." />
        <meta name="keywords" content="investment optimization, portfolio management, AI investing, risk assessment, auto rebalancing, financial planning, wealth management" />)
        <link rel="canonical" href="https: //ziontechgroup.com/ai-investment-optimizer" />)
      </Helmet>)
),
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-400/20 rounded-full px-6 py-3 mb-8"></div>
              <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">AI Investment Portfolio Optimizer Pro</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======

<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Investment Optimizer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai investment optimizer solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
=======
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text"></h1>
              Advanced Portfolio Management;
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"></p>
              Maximize Returns with AI-Powered Investment Optimization;
            </p>,
,
            <p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">,
              Optimize your investment portfolio with advanced AI analytics, risk assessment,
              and automated rebalancing. Make smarter investment decisions and achieve better returns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"></div>
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"></button>
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" />
              </button>

              <button className="group inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"></button>
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo;
              </button>,
            </div>,
,
            {/* Stats */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h2>
              Portfolio Dashboard
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Monitor and optimize your investment portfolio with real-time analytics;
            </p>
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

                <div className="space-y-4"></div>
                  {portfolio.map((stock) => {}
                    const ChangeIcon = getChangeIcon(stock.change);
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
                {optimizationResults && (}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"></div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center"></h3>
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
                ></button>
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </button>
                <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
=======

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h2>
              Investment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Advanced AI-powered tools for intelligent portfolio management;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h2>
              Investment Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Choose the investment optimization plan that fits your portfolio size;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-blue-400/50 ring-2 ring-blue-400/30' : 'border-white/10'}`}></div>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-blue-400/50 ring-2 ring-blue-400/30' : 'border-white/10'}`}></div>
                {plan.popular && (}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full"></span>
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

                <ul className="space-y-4 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="flex items-center"></li>
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}></button>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h2>
              Start Optimizing Today
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Contact our investment experts to discuss your portfolio optimization needs;
            </p>
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <Phone className="w-5 h-5 text-blue-400 mr-3" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors"></a>
                      +1 (302) 464-0950;
                    </a>
                  </div>
                  <div className="flex items-center"></div>
                    <Mail className="w-5 h-5 text-blue-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors"></a>
                      kleber@ziontechgroup.com;
                    </a>
                  </div>
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
                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"></button>
                  Start Free Analysis;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>,
    </div>);
};

export default AIInvestmentOptimizerPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AiinvestmentoptimizerPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Investment Optimizer - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Investment Optimizer</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai investment optimizer services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
