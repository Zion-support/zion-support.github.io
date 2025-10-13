import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  BarChart3, 
  Zap, 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Eye,
  Lock,
  Globe,
  Activity,
  DollarSign,
  AlertTriangle,
  Database,
  Cpu,
  Network
} from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ZionBlockchainAnalyticsProPage = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-time Transaction Monitoring",
      description: "Track and analyze blockchain transactions across multiple networks in real-time with advanced pattern recognition and anomaly detection.",
      benefit: "Detect suspicious activities instantly"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Risk Assessment",
      description: "Machine learning algorithms analyze transaction patterns, wallet behaviors, and market trends to predict potential risks and opportunities.",
      benefit: "Reduce fraud by 95%"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "DeFi Protocol Analytics",
      description: "Comprehensive analysis of decentralized finance protocols, liquidity pools, yield farming opportunities, and smart contract interactions.",
      benefit: "Maximize DeFi returns by 40%"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Contract Security Auditing",
      description: "Automated security analysis of smart contracts with vulnerability detection, gas optimization, and compliance checking.",
      benefit: "Prevent costly exploits"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Cross-Chain Analysis",
      description: "Monitor and analyze activities across multiple blockchain networks including Ethereum, BSC, Polygon, Solana, and more.",
      benefit: "Complete ecosystem visibility"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Intelligence",
      description: "Advanced market analysis with price predictions, trading volume insights, and institutional flow tracking.",
      benefit: "Make informed trading decisions"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for individual traders and small projects",
      features: [
        "Up to 5,000 transactions/day",
        "Basic risk scoring",
        "3 blockchain networks",
        "Standard alerts",
        "Email support",
        "Basic reporting"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for trading firms and DeFi protocols",
      features: [
        "Up to 50,000 transactions/day",
        "Advanced AI analytics",
        "10+ blockchain networks",
        "Custom alerts & webhooks",
        "Priority support",
        "API access",
        "Advanced reporting"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large institutions and exchanges",
      features: [
        "Unlimited transactions",
        "Full AI suite",
        "All blockchain networks",
        "Custom integrations",
        "Dedicated support",
        "White-label options",
        "Compliance reporting"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const supportedChains = [
    { name: "Ethereum", logo: "Ξ" },
    { name: "Bitcoin", logo: "₿" },
    { name: "Binance Smart Chain", logo: "B" },
    { name: "Polygon", logo: "⬟" },
    { name: "Solana", logo: "◎" },
    { name: "Avalanche", logo: "🔺" },
    { name: "Cardano", logo: "₳" },
    { name: "Polkadot", logo: "●" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOOptimizer 
        title="Zion Blockchain Analytics Pro - Advanced Crypto & DeFi Analytics | Zion Tech Group"
        description="Comprehensive blockchain analytics platform with AI-powered risk assessment, real-time monitoring, and DeFi protocol analysis. Secure your crypto investments with professional-grade tools."
        keywords="blockchain analytics, crypto analytics, DeFi analytics, smart contract auditing, cryptocurrency monitoring, blockchain security"
        canonicalUrl="https://ziontechgroup.com/zion-blockchain-analytics-pro"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-8">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Blockchain Security & Analytics</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Blockchain Analytics Pro
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced blockchain analytics platform with AI-powered risk assessment, real-time monitoring, 
              and comprehensive DeFi protocol analysis for secure crypto investments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Setup in 5 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Blockchain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive blockchain analytics powered by artificial intelligence for maximum security and profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-sm text-green-400 font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your blockchain analytics needs. All plans include our core security features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/50 ring-2 ring-blue-500/20' 
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'border border-blue-500 text-blue-300 hover:bg-blue-500/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Chains Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supported Blockchain Networks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor and analyze activities across all major blockchain networks and DeFi protocols.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {supportedChains.map((chain, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {chain.logo}
                </div>
                <span className="text-sm text-gray-300 text-center font-medium">
                  {chain.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Your Crypto Investments Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of traders and institutions using Zion Blockchain Analytics Pro to protect and grow their crypto portfolios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a> or <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionBlockchainAnalyticsProPage;
