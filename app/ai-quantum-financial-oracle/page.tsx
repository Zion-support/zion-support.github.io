import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, 
  Clock, Shield, Code, Database, Mail, Settings, Globe, 
  Smartphone, Monitor, Target, FileText, Lock, 
  Server, Cpu, Network, HardDrive, Headphones, Award, Rocket, 
  Sparkles, Bot, Wifi, Phone, Laptop, Camera, Music, Gamepad2,
  ShoppingCart, CreditCard, MapPin, Calendar, MessageSquare,
  PieChart, LineChart, Activity, Layers, Eye, Search, Filter,
  Download, Upload, Share2, Copy, Edit, Trash2, Plus, Minus,
  ChevronRight, ExternalLink, Play, Pause, Volume2, VolumeX,
  Zap, Cpu as Processor, MemoryStick, Cpu as Chip, Cpu as CircuitBoard,
  Volume1, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, PlayCircle,
  PauseCircle, SkipForward, SkipBack, Repeat, Shuffle, Radio, BookOpen,
  DollarSign, Calculator, PieChart as PieChartIcon, TrendingDown,
  Activity as ActivityIcon, AlertTriangle, CheckCircle2, XCircle
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIQuantumFinancialOraclePage = () => {
  const features = [
    {
      title: "Quantum Computing Power",
      description: "Leverage quantum computing algorithms for complex financial calculations and market analysis with unprecedented speed.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Market Prediction",
      description: "Predict market movements with 99.7% accuracy using advanced quantum machine learning and neural networks.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and portfolio optimization using quantum algorithms for maximum returns.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Portfolio Optimization",
      description: "Automated portfolio rebalancing and optimization based on quantum financial models and market conditions.",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Real-time Analysis",
      description: "Continuous monitoring and analysis of global financial markets with instant updates and alerts.",
      icon: <Activity className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Compliance Reporting",
      description: "Automated compliance reporting and regulatory adherence for financial institutions and investment firms.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$199",
      originalPrice: "$399",
      period: "per month",
      description: "Perfect for individual investors and small trading firms",
      features: [
        "Basic quantum predictions",
        "Up to 10 portfolio analyses",
        "Standard risk assessment",
        "Email support",
        "Basic analytics dashboard",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$499",
      originalPrice: "$999",
      period: "per month",
      description: "Ideal for financial institutions and large trading firms",
      features: [
        "Advanced quantum predictions",
        "Unlimited portfolio analyses",
        "Premium risk assessment",
        "Priority support",
        "Advanced analytics dashboard",
        "Up to 25 user accounts",
        "API access",
        "Custom quantum models"
      ],
      popular: true
    },
    {
      name: "Institutional",
      price: "$999",
      originalPrice: "$1999",
      period: "per month",
      description: "Complete solution for banks, hedge funds, and investment companies",
      features: [
        "Premium quantum predictions",
        "Unlimited portfolio analyses",
        "Ultimate risk assessment",
        "24/7 dedicated support",
        "Enterprise analytics dashboard",
        "Unlimited user accounts",
        "Full API access",
        "Custom quantum models",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Investment Management",
      description: "Optimize investment portfolios with quantum-powered analysis and automated rebalancing strategies.",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Portfolio Optimization", "Asset Allocation", "Risk Management", "Performance Tracking"]
    },
    {
      title: "Trading & Market Making",
      description: "Execute high-frequency trades with quantum algorithms and real-time market analysis.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Algorithmic Trading", "Market Making", "Arbitrage Opportunities", "Liquidity Management"]
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for financial institutions.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Credit Risk Analysis", "Market Risk Assessment", "Operational Risk", "Regulatory Compliance"]
    },
    {
      title: "Hedge Fund Operations",
      description: "Advanced quantitative strategies and risk management for hedge fund operations.",
      icon: <Calculator className="w-6 h-6" />,
      benefits: ["Quantitative Strategies", "Risk Modeling", "Performance Attribution", "Alpha Generation"]
    },
    {
      title: "Banking & Lending",
      description: "Credit scoring, loan optimization, and risk assessment for banking operations.",
      icon: <DollarSign className="w-6 h-6" />,
      benefits: ["Credit Scoring", "Loan Optimization", "Default Prediction", "Interest Rate Modeling"]
    },
    {
      title: "Insurance & Actuarial",
      description: "Advanced actuarial modeling and risk assessment for insurance companies.",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Actuarial Modeling", "Risk Assessment", "Pricing Optimization", "Claims Prediction"]
    }
  ];

  const technicalSpecs = [
    { spec: "Prediction Accuracy", value: "99.7%" },
    { spec: "Processing Speed", value: "Quantum Speed" },
    { spec: "Market Coverage", value: "Global" },
    { spec: "Data Points", value: "10M+/day" },
    { spec: "API Response Time", value: "< 50ms" },
    { spec: "Uptime SLA", value: "99.9%" }
  ];

  const marketIndicators = [
    {
      name: "S&P 500",
      value: "+2.34%",
      change: "positive",
      prediction: "Bullish",
      confidence: "94%"
    },
    {
      name: "NASDAQ",
      value: "+1.87%",
      change: "positive",
      prediction: "Bullish",
      confidence: "91%"
    },
    {
      name: "DOW JONES",
      value: "+1.56%",
      change: "positive",
      prediction: "Neutral",
      confidence: "78%"
    },
    {
      name: "CRYPTO",
      value: "+5.23%",
      change: "positive",
      prediction: "Very Bullish",
      confidence: "97%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO 
        title="AI Quantum Financial Oracle - Quantum-Powered Financial Predictions | Zion Tech Group"
        description="Quantum-powered financial predictions with 99.7% accuracy for market analysis, risk assessment, and investment optimization. Advanced quantum computing for financial institutions."
        keywords="quantum computing, financial predictions, market analysis, risk assessment, portfolio optimization, investment management, quantum algorithms, financial technology"
        canonical="https://ziontechgroup.com/ai-quantum-financial-oracle"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Quantum-Powered Financial Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Quantum Financial Oracle
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Quantum-powered financial predictions with 99.7% accuracy for market analysis, risk assessment, and investment optimization. 
              Revolutionize your financial decision-making with quantum computing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Quantum Analysis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Live Predictions
              </Link>
            </div>
            
            {/* Technical Specifications */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-2">{spec.value}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{spec.spec}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Market Indicators */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Live Market Predictions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-time quantum-powered market analysis and predictions with unprecedented accuracy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketIndicators.map((indicator, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {indicator.name}
                    </h3>
                    <div className={`w-3 h-3 rounded-full ${indicator.change === 'positive' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{indicator.value}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Prediction: {indicator.prediction}</span>
                    <span className="text-cyan-400 font-semibold">{indicator.confidence} confidence</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum-Powered Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced financial intelligence powered by quantum computing and machine learning algorithms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Financial Applications
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your financial operations with quantum-powered intelligence and predictions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {useCase.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Choose Your Plan
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your quantum financial analysis needs. All plans include our core technology with varying levels of features and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">{plan.originalPrice}</span>
                    )}
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-cyan-500/25' 
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

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Revolutionize Your Financial Strategy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading financial institutions using quantum computing for superior market analysis and investment decisions.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Start Quantum Analysis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  View Live Predictions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIQuantumFinancialOraclePage;