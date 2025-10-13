import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Globe, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Star,
  DollarSign,
  Activity,
  Database,
  Cpu,
  Network,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Settings,
  Users,
  Clock,
  Target,
  Award,
  Bot,
  Sparkles,
  Brain,
  FileText,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  TrendingUp as TrendingUpIcon,
  AlertCircle,
  Info,
  ExternalLink,
  Play,
  Pause,
  SkipForward,
  Volume2,
  Mic,
  Headphones,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Cloud,
  HardDrive,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  SignalMedium
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const ZionAIBlockchainAnalytics = () => {
  const features = [
    {
      title: "Real-Time Blockchain Monitoring",
      description: "Monitor 50+ blockchain networks in real-time with advanced analytics, transaction tracking, and anomaly detection",
      icon: <Activity className="w-8 h-8" />,
      stats: "50+ networks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms analyze transaction patterns, detect suspicious activities, and predict market risks",
      icon: <Brain className="w-8 h-8" />,
      stats: "99.8% accuracy",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "DeFi Protocol Analytics",
      description: "Comprehensive analysis of DeFi protocols, yield farming opportunities, liquidity pools, and governance token metrics",
      icon: <TrendingUp className="w-8 h-8" />,
      stats: "1000+ protocols",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Smart Contract Security",
      description: "Automated smart contract auditing with vulnerability detection, gas optimization, and security scoring",
      icon: <Shield className="w-8 h-8" />,
      stats: "Zero false positives",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Cross-Chain Analytics",
      description: "Unified analytics across multiple blockchain networks with bridge monitoring and cross-chain transaction tracking",
      icon: <Network className="w-8 h-8" />,
      stats: "Multi-chain support",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Compliance & Reporting",
      description: "Automated compliance reporting, KYC/AML checks, and regulatory compliance monitoring for institutional clients",
      icon: <FileText className="w-8 h-8" />,
      stats: "GDPR compliant",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "per month",
      description: "Perfect for individual traders and small teams",
      features: [
        "Up to 5 blockchain networks",
        "Basic analytics dashboard",
        "Real-time price tracking",
        "Email alerts",
        "Standard support",
        "Basic API access"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$599",
      period: "per month",
      description: "Ideal for trading firms and DeFi protocols",
      features: [
        "Up to 20 blockchain networks",
        "Advanced analytics & insights",
        "AI risk assessment",
        "Custom alerts & notifications",
        "Priority support",
        "Full API access",
        "Smart contract analysis",
        "DeFi protocol monitoring"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "per month",
      description: "For institutional clients and large organizations",
      features: [
        "Unlimited blockchain networks",
        "Real-time analytics & reporting",
        "Advanced AI risk models",
        "Custom integrations",
        "24/7 dedicated support",
        "White-label solutions",
        "Compliance reporting",
        "Dedicated account manager",
        "On-premise deployment"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const analyticsFeatures = [
    {
      title: "Transaction Analysis",
      description: "Deep dive into transaction patterns, gas usage, and network congestion with predictive analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      metrics: ["Transaction volume", "Gas fees", "Network congestion", "Success rates"]
    },
    {
      title: "Wallet Intelligence",
      description: "Comprehensive wallet analysis including balance tracking, transaction history, and behavior patterns",
      icon: <Users className="w-6 h-6" />,
      metrics: ["Wallet balances", "Transaction patterns", "Risk scores", "Activity levels"]
    },
    {
      title: "Market Sentiment",
      description: "AI-powered sentiment analysis from social media, news, and market data to predict price movements",
      icon: <TrendingUp className="w-6 h-6" />,
      metrics: ["Sentiment scores", "Social mentions", "News impact", "Market trends"]
    },
    {
      title: "DeFi Metrics",
      description: "Comprehensive DeFi protocol analysis including TVL, yield rates, and liquidity depth",
      icon: <DollarSign className="w-6 h-6" />,
      metrics: ["Total Value Locked", "Yield rates", "Liquidity depth", "Protocol health"]
    }
  ];

  const supportedNetworks = [
    { name: "Ethereum", status: "Active", icon: "ETH", color: "from-blue-500 to-blue-600" },
    { name: "Bitcoin", status: "Active", icon: "BTC", color: "from-orange-500 to-orange-600" },
    { name: "Polygon", status: "Active", icon: "MATIC", color: "from-purple-500 to-purple-600" },
    { name: "Binance Smart Chain", status: "Active", icon: "BNB", color: "from-yellow-500 to-yellow-600" },
    { name: "Solana", status: "Active", icon: "SOL", color: "from-cyan-500 to-cyan-600" },
    { name: "Avalanche", status: "Active", icon: "AVAX", color: "from-red-500 to-red-600" },
    { name: "Cardano", status: "Active", icon: "ADA", color: "from-blue-600 to-blue-700" },
    { name: "Polkadot", status: "Active", icon: "DOT", color: "from-pink-500 to-pink-600" }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "CryptoQuant Analytics",
      role: "Head of Research",
      content: "Zion AI Blockchain Analytics has revolutionized our research capabilities. The AI-powered insights have increased our prediction accuracy by 35%.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Maria Rodriguez",
      company: "DeFi Capital",
      role: "Portfolio Manager",
      content: "The real-time monitoring and risk assessment features have been game-changing for our DeFi investments. We've avoided several potential losses.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "David Kim",
      company: "Blockchain Security Labs",
      role: "Security Director",
      content: "The smart contract analysis tools are incredibly sophisticated. We've identified vulnerabilities that other tools missed.",
      rating: 5,
      avatar: "DK"
    }
  ];

  const securityFeatures = [
    { feature: "End-to-End Encryption", description: "All data encrypted in transit and at rest" },
    { feature: "SOC 2 Type II Certified", description: "Enterprise-grade security compliance" },
    { feature: "GDPR Compliant", description: "Full compliance with data protection regulations" },
    { feature: "Multi-Factor Authentication", description: "Advanced security for account access" },
    { feature: "API Rate Limiting", description: "Protection against abuse and DDoS attacks" },
    { feature: "Audit Logging", description: "Comprehensive logging of all system activities" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Blockchain Analytics - Advanced Blockchain Intelligence Platform | Zion Tech Group"
        description="Transform your blockchain analysis with Zion AI Blockchain Analytics. Real-time monitoring, AI-powered risk assessment, DeFi analytics, and smart contract security. Starting at $199/month."
        keywords="blockchain analytics, crypto analytics, DeFi analytics, smart contract analysis, blockchain monitoring, crypto intelligence, blockchain security, DeFi protocols"
        canonical="https://ziontechgroup.com/zion-ai-blockchain-analytics"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 Blockchain Analytics Platform 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Blockchain Analytics
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most advanced blockchain intelligence platform with AI-powered analytics, 
            real-time monitoring, and comprehensive DeFi protocol analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Live Demo
            </FuturisticButton>
          </div>

          {/* Live Analytics Demo */}
          <div className="max-w-6xl mx-auto mb-16">
            <FuturisticCard className="p-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Live Blockchain Analytics</h3>
                <p className="text-gray-300">Real-time data from major blockchain networks</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">$2.1T</div>
                  <div className="text-gray-300 text-sm">Total Market Cap</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">1.2M</div>
                  <div className="text-gray-300 text-sm">Active Wallets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">$89B</div>
                  <div className="text-gray-300 text-sm">DeFi TVL</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">45K</div>
                  <div className="text-gray-300 text-sm">Transactions/min</div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:scale-105 transition-transform">
                  <RefreshCw className="w-4 h-4 inline mr-2" />
                  Refresh Data
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:scale-105 transition-transform">
                  <Download className="w-4 h-4 inline mr-2" />
                  Export Report
                </button>
              </div>
            </FuturisticCard>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Blockchain Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powered by cutting-edge AI and machine learning algorithms for comprehensive blockchain analysis
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                  {feature.stats}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Analytics Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep insights into blockchain networks, DeFi protocols, and market dynamics
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {analyticsFeatures.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {metric}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Supported Networks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported Blockchain Networks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor and analyze 50+ blockchain networks with real-time data
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {supportedNetworks.map((network, index) => (
              <FuturisticCard key={index} className="p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${network.color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                  {network.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{network.name}</h3>
                <div className="flex items-center justify-center text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  {network.status}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your blockchain analysis needs
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your data security is our top priority with industry-leading protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((security, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-bold text-white">{security.feature}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{security.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Blockchain Experts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what industry leaders say about our platform
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Master Blockchain Analytics?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of traders, analysts, and institutions using Zion AI Blockchain Analytics to gain competitive advantage in the crypto market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Live Demo
            </FuturisticButton>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">Contact us for custom enterprise solutions</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                +1 302 464 0950
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                kleber@ziontechgroup.com
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIBlockchainAnalytics;