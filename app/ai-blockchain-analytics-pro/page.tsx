import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, BarChart3, Cloud, Brain, Code, Database, Mail, Users, Clock, DollarSign, Globe, Smartphone, Monitor, Settings, Target, TrendingUp, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AIBlockchainAnalyticsPro() {
  const features = [
    "Real-time blockchain data analysis",
    "AI-powered transaction pattern recognition",
    "Smart contract vulnerability detection",
    "DeFi protocol risk assessment",
    "Cross-chain analytics & monitoring",
    "NFT market intelligence & trends",
    "Cryptocurrency price prediction models",
    "Wallet behavior analysis & scoring",
    "Compliance monitoring & reporting",
    "Fraud detection & prevention",
    "Portfolio optimization recommendations",
    "Market sentiment analysis",
    "Liquidity pool analysis",
    "Yield farming optimization",
    "Tax reporting & compliance",
    "Custom dashboard & alerts"
  ];

  const benefits = [
    "Reduce investment risks by 70%",
    "Increase portfolio returns by 45%",
    "Detect fraud with 99.5% accuracy",
    "Save 20+ hours weekly on analysis",
    "Optimize DeFi strategies automatically",
    "Ensure regulatory compliance",
    "Identify market opportunities early",
    "Minimize smart contract vulnerabilities"
  ];

  const analyticsTypes = [
    {
      title: "DeFi Analytics",
      description: "Comprehensive analysis of decentralized finance protocols, yield farming opportunities, and liquidity pools",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Contract Security",
      description: "AI-powered vulnerability detection and security analysis for smart contracts",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "NFT Market Intelligence",
      description: "Advanced analytics for NFT markets, pricing trends, and collection insights",
      icon: <Image className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cross-Chain Analysis",
      description: "Multi-blockchain data aggregation and cross-chain transaction monitoring",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299/month",
      description: "Perfect for individual traders",
      features: [
        "Up to 5 wallet addresses",
        "Basic analytics dashboard",
        "3 blockchain networks",
        "Email support",
        "Standard reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799/month",
      description: "Ideal for trading firms",
      features: [
        "Up to 50 wallet addresses",
        "Advanced analytics dashboard",
        "10 blockchain networks",
        "Priority support",
        "Custom alerts & notifications",
        "API access",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499/month",
      description: "For large institutions",
      features: [
        "Unlimited wallet addresses",
        "Full analytics suite",
        "All blockchain networks",
        "Dedicated support",
        "Custom integrations",
        "White-label options",
        "Compliance reporting",
        "Custom AI models"
      ],
      popular: false
    }
  ];

  const supportedChains = [
    "Ethereum", "Bitcoin", "Binance Smart Chain", "Polygon", "Avalanche", 
    "Solana", "Cardano", "Polkadot", "Cosmos", "Fantom", "Arbitrum", 
    "Optimism", "Base", "Aptos", "Sui", "Near", "Algorand", "Tezos"
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "Crypto Investment Fund",
      role: "Portfolio Manager",
      content: "AI Blockchain Analytics Pro has transformed our investment strategy. We've increased returns by 50% while reducing risks significantly.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Maria Rodriguez",
      company: "DeFi Protocol",
      role: "Security Director",
      content: "The smart contract security analysis is incredible. We've prevented 3 major vulnerabilities before they could be exploited.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "James Wilson",
      company: "NFT Marketplace",
      role: "CEO",
      content: "The NFT market intelligence helps us make data-driven decisions. Our platform's performance has improved dramatically.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Analytics Pro - Zion Tech Group | Advanced Crypto Analytics</title>
        <meta
          name="description"
          content="Advanced AI-powered blockchain analytics platform. DeFi insights, smart contract security, NFT intelligence, and cryptocurrency market analysis for informed trading decisions."
        />
        <meta
          name="keywords"
          content="blockchain analytics, DeFi analytics, smart contract security, NFT intelligence, cryptocurrency analysis, crypto trading, blockchain data, AI crypto"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-blockchain-analytics-pro" />
      </Helmet>
      <SEOOptimizer
        title="AI Blockchain Analytics Pro - Zion Tech Group | Advanced Crypto Analytics"
        description="Advanced AI-powered blockchain analytics platform. DeFi insights, smart contract security, NFT intelligence, and cryptocurrency market analysis for informed trading decisions."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Shield className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Advanced Blockchain Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  AI Blockchain Analytics Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Unlock the power of blockchain data with AI-driven analytics. DeFi insights, smart contract security, 
                NFT intelligence, and cryptocurrency market analysis for informed trading decisions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">18+ blockchain networks</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Real-time data analysis</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">99.5% accuracy rate</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 monitoring</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Analytics Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Advanced Analytics Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive blockchain intelligence powered by cutting-edge AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Types */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Analytics Categories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive blockchain analysis across all major categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {analyticsTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl mb-6`}>
                    <div className="text-white">{type.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supported Chains */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Supported Blockchain Networks
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive coverage across all major blockchain ecosystems
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {supportedChains.map((chain, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-white font-medium text-sm">{chain}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Business Benefits
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable results that drive crypto investment success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center text-sm text-gray-300">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Flexible Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the perfect plan for your blockchain analytics needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular 
                      ? "border-cyan-400 shadow-2xl shadow-cyan-500/20" 
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Customer Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how institutions are succeeding with AI Blockchain Analytics Pro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
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
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Master Blockchain Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and gain the competitive edge in crypto markets. 
              No setup fees, cancel anytime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Monitor className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}