import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  PieChart, 
  Target, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Globe, 
  Lock, 
  ArrowRight,
  Play,
  Pause,
  RefreshCw,
  Download,
  Upload,
  Settings,
  Eye,
  AlertTriangle,
  TrendingDown,
  Activity,
  Calendar,
  Wallet,
  CreditCard,
  Building,
  Coins,
  LineChart,
  ScatterChart,
  AreaChart,
  CandlestickChart,
  Percent,
  Minus,
  Plus,
  Filter,
  Search,
  BookOpen,
  FileText,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';

const AIInvestmentOptimizerPage: React.FC = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState('conservative');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [portfolioValue, setPortfolioValue] = useState(125000);
  const [dailyChange, setDailyChange] = useState(1250);

  const portfolioTypes = [
    { id: 'conservative', name: 'Conservative', risk: 'Low', expectedReturn: '6-8%', color: 'text-green-400' },
    { id: 'moderate', name: 'Moderate', risk: 'Medium', expectedReturn: '8-12%', color: 'text-yellow-400' },
    { id: 'aggressive', name: 'Aggressive', risk: 'High', expectedReturn: '12-18%', color: 'text-red-400' },
    { id: 'balanced', name: 'Balanced', risk: 'Medium-Low', expectedReturn: '7-10%', color: 'text-blue-400' }
  ];

  const portfolioHoldings = [
    { symbol: 'AAPL', name: 'Apple Inc.', shares: 50, price: 175.43, value: 8771.50, change: 2.34, changePercent: 1.35, sector: 'Technology' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 30, price: 378.85, value: 11365.50, change: -1.23, changePercent: -0.32, sector: 'Technology' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 20, price: 142.56, value: 2851.20, change: 0.87, changePercent: 0.61, sector: 'Technology' },
    { symbol: 'TSLA', name: 'Tesla Inc.', shares: 15, price: 248.50, value: 3727.50, change: 5.67, changePercent: 2.33, sector: 'Automotive' },
    { symbol: 'JNJ', name: 'Johnson & Johnson', shares: 40, price: 156.78, value: 6271.20, change: -0.45, changePercent: -0.29, sector: 'Healthcare' },
    { symbol: 'VTI', name: 'Vanguard Total Stock Market ETF', shares: 100, price: 234.56, value: 23456.00, change: 1.23, changePercent: 0.53, sector: 'ETF' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze market data, trends, and patterns to optimize your investment strategy'
    },
    {
      icon: Target,
      title: 'Risk Management',
      description: 'Intelligent risk assessment and portfolio balancing to protect your investments while maximizing returns'
    },
    {
      icon: BarChart3,
      title: 'Real-time Monitoring',
      description: 'Continuous portfolio monitoring with instant alerts and recommendations based on market conditions'
    },
    {
      icon: PieChart,
      title: 'Diversification Optimization',
      description: 'AI-driven asset allocation recommendations to ensure optimal diversification across sectors and asset classes'
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Advanced security features to detect suspicious activities and protect your investment accounts'
    },
    {
      icon: Globe,
      title: 'Global Market Access',
      description: 'Access to international markets and currencies with AI-powered currency hedging strategies'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual investors getting started',
      features: [
        'Up to $100K portfolio',
        'Basic AI analysis',
        'Monthly rebalancing',
        'Email alerts',
        'Mobile app',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for serious investors and small portfolios',
      features: [
        'Up to $1M portfolio',
        'Advanced AI analysis',
        'Weekly rebalancing',
        'Real-time alerts',
        'Advanced reporting',
        'Tax optimization',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For high-net-worth individuals and institutions',
      features: [
        'Unlimited portfolio size',
        'Full AI suite',
        'Daily rebalancing',
        'Custom strategies',
        'White-label solution',
        'Dedicated support',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    
    // Simulate analysis progress
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const totalValue = portfolioHoldings.reduce((sum, holding) => sum + holding.value, 0);
  const totalChange = portfolioHoldings.reduce((sum, holding) => sum + holding.change, 0);

  return (
    <>
      <Helmet>
        <title>AI Investment Portfolio Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="AI-powered investment portfolio optimization with real-time analysis, risk management, and automated rebalancing. Maximize returns while minimizing risk." />
        <meta name="keywords" content="AI investment, portfolio optimization, investment analysis, risk management, automated trading, financial AI" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-investment-optimizer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-blue-400/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Financial AI & Investment
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent neon-text">
                AI Investment Optimizer Pro
              </h1>
              
              <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Maximize your investment returns with AI-powered portfolio optimization. 
                Advanced algorithms analyze market data to provide intelligent investment strategies and risk management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <span className="relative z-10">Start Free Analysis</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Interactive Portfolio Demo */}
            <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Portfolio Analysis Dashboard</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Portfolio Overview */}
                <div className="lg:col-span-1">
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Portfolio Value</h4>
                      <div className="text-3xl font-bold text-white mb-2">${totalValue.toLocaleString()}</div>
                      <div className={`flex items-center text-sm ${totalChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {totalChange >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {totalChange >= 0 ? '+' : ''}${totalChange.toFixed(2)} ({(totalChange / totalValue * 100).toFixed(2)}%)
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Portfolio Type</h4>
                      <div className="space-y-2">
                        {portfolioTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setSelectedPortfolio(type.id)}
                            className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
                              selectedPortfolio === type.id
                                ? 'bg-blue-500/20 border-blue-400/50 ring-2 ring-blue-400/30'
                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-white font-medium">{type.name}</span>
                              <span className={`text-sm ${type.color}`}>{type.expectedReturn}</span>
                            </div>
                            <div className="text-sm text-gray-400">Risk: {type.risk}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={startAnalysis}
                      disabled={isAnalyzing}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAnalyzing ? (
                        <>
                          <RefreshCw className="w-5 h-5 mr-2 animate-spin inline" />
                          Analyzing... {analysisProgress}%
                        </>
                      ) : (
                        <>
                          <BarChart3 className="w-5 h-5 mr-2 inline" />
                          Optimize Portfolio
                        </>
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Holdings Table */}
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-white mb-4">Current Holdings</h4>
                  <div className="bg-white/5 rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-white/10">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Symbol</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Name</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Shares</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Price</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Value</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Change</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {portfolioHoldings.map((holding, index) => (
                            <tr key={index} className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-medium text-white">{holding.symbol}</td>
                              <td className="px-4 py-3 text-sm text-gray-300">{holding.name}</td>
                              <td className="px-4 py-3 text-sm text-gray-300">{holding.shares}</td>
                              <td className="px-4 py-3 text-sm text-gray-300">${holding.price.toFixed(2)}</td>
                              <td className="px-4 py-3 text-sm text-white">${holding.value.toLocaleString()}</td>
                              <td className={`px-4 py-3 text-sm ${holding.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {holding.change >= 0 ? '+' : ''}${holding.change.toFixed(2)} ({holding.changePercent >= 0 ? '+' : ''}{holding.changePercent.toFixed(2)}%)
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent neon-text">
                Advanced Investment Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered investment optimizer uses cutting-edge machine learning to analyze 
                market data and provide intelligent investment recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent neon-text">
                Investment Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the investment plan that matches your portfolio size and investment goals. 
                All plans include AI-powered analysis and risk management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-blue-400/50 ring-2 ring-blue-400/30' : 'border-white/10'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 transform hover:scale-105'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-12 border border-blue-400/20">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Optimize Your Investment Strategy
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of investors who have already optimized their portfolios with AI-powered 
                analysis and intelligent investment strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <span className="relative z-10">Start Free Analysis</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center space-x-6 text-gray-300">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-blue-400 mr-2" />
                    <span>Bank-level security</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-400 mr-2" />
                    <span>Real-time analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIInvestmentOptimizerPage;