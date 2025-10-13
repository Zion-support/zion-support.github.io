import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  TrendingUp, 
  Eye, 
  Lock, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Award,
  Globe,
  Sparkles,
  Database,
  Cpu
} from 'lucide-react';

const ZionBlockchainAI = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Smart Contract Security",
      description: "AI-powered analysis of smart contracts to detect vulnerabilities and security risks before deployment",
      benefit: "99.7% vulnerability detection"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "DeFi Analytics",
      description: "Real-time analysis of DeFi protocols, yield farming opportunities, and liquidity patterns",
      benefit: "Real-time market insights"
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      title: "Transaction Monitoring",
      description: "Advanced AI monitoring of blockchain transactions to detect suspicious activities and fraud",
      benefit: "Zero false positives"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Gas Optimization",
      description: "AI-powered gas fee optimization for Ethereum and other blockchain networks",
      benefit: "Up to 40% gas savings"
    }
  ];

  const pricingPlans = [
    {
      name: "Blockchain Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small crypto projects and individual traders",
      features: [
        "Up to 1,000 smart contract scans/month",
        "Basic DeFi analytics",
        "Standard transaction monitoring",
        "Email support",
        "5GB data storage"
      ],
      popular: false
    },
    {
      name: "Blockchain Professional",
      price: "$599",
      period: "/month",
      description: "Advanced analytics for growing crypto businesses",
      features: [
        "Up to 10,000 smart contract scans/month",
        "Advanced DeFi analytics & alerts",
        "Real-time transaction monitoring",
        "Priority support",
        "50GB data storage",
        "Custom risk scoring"
      ],
      popular: true
    },
    {
      name: "Blockchain Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Complete blockchain intelligence for large organizations",
      features: [
        "Unlimited smart contract scans",
        "Full DeFi ecosystem monitoring",
        "Advanced fraud detection",
        "24/7 dedicated support",
        "Unlimited data storage",
        "White-label solutions",
        "API access"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Crypto Exchanges",
      description: "Monitor transactions and detect suspicious trading patterns",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "DeFi Protocols",
      description: "Analyze liquidity pools and optimize yield strategies",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "NFT Marketplaces",
      description: "Detect wash trading and verify authenticity",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure compliance with crypto regulations and reporting",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const supportedChains = [
    { name: "Ethereum", icon: "🔷" },
    { name: "Bitcoin", icon: "₿" },
    { name: "Polygon", icon: "🔺" },
    { name: "Binance Smart Chain", icon: "🟡" },
    { name: "Solana", icon: "☀️" },
    { name: "Avalanche", icon: "🔺" },
    { name: "Cardano", icon: "🔷" },
    { name: "Polkadot", icon: "🔴" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Zion Blockchain AI - Advanced Blockchain Analytics & Security | Zion Tech Group</title>
        <meta name="description" content="Transform your blockchain operations with Zion Blockchain AI - advanced analytics, security monitoring, and DeFi intelligence for crypto businesses." />
        <meta name="keywords" content="blockchain AI, crypto analytics, DeFi analytics, smart contract security, blockchain monitoring, crypto compliance" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-blockchain-ai" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full px-6 py-3 mb-8 border border-green-500/30">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-medium">Blockchain Intelligence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Blockchain AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced AI-powered blockchain analytics, security monitoring, and DeFi intelligence 
              to protect and optimize your crypto operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Blockchain Analysis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center gap-2 border border-green-500/50 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
              >
                Watch Demo
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
              <div className="text-4xl font-bold text-green-400 mb-2">99.7%</div>
              <div className="text-gray-300">Vulnerability Detection</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.3B</div>
              <div className="text-gray-300">Protected Assets</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Supported Chains</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl border border-pink-500/20">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Advanced Blockchain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive blockchain intelligence powered by cutting-edge AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 px-4 py-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 font-medium">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-green-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Supported Blockchains
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive support for all major blockchain networks and protocols.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {supportedChains.map((chain, index) => (
              <div key={index} className="group p-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {chain.icon}
                </div>
                <div className="text-sm text-gray-300 font-medium">{chain.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how blockchain AI is transforming various industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-green-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Blockchain AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the blockchain intelligence level that matches your crypto operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-green-500/20 to-blue-500/20 border-green-500/50' 
                  : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                      : 'border border-green-500/50 text-green-300 hover:bg-green-500/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Secure Your Blockchain Future
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join leading crypto businesses who trust Zion Blockchain AI for their security and analytics needs. 
            Contact us today to start your blockchain intelligence journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Our Blockchain Experts
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center gap-2 border border-green-500/50 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionBlockchainAI;