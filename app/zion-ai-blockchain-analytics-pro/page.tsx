import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  BarChart3, 
  Zap, 
  Globe, 
  Brain, 
  TrendingUp, 
  Database, 
  Cpu, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  DollarSign,
  Settings,
  MessageSquare,
  Calendar,
  FileText,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bell,
  Eye,
  Heart,
  ThumbsUp,
  Target,
  Smartphone,
  Monitor,
  Headphones,
  Mic,
  Volume2,
  Home,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Hourglass,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
  Calendar as CalendarIcon,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarHeart,
  CalendarStar,
  CalendarClock,
  CalendarUser,
  CalendarEdit,
  CalendarTrash,
  CalendarSettings,
  CalendarImport,
  CalendarExport,
  CalendarShare,
  CalendarLock,
  CalendarUnlock,
  CalendarKey,
  CalendarShield,
  CalendarAlert,
  CalendarBell,
  CalendarZap,
  CalendarSparkles,
  CalendarGift,
  CalendarAward,
  CalendarTrophy,
  CalendarMedal,
  CalendarCrown,
  CalendarGem,
  CalendarDiamond,
  CalendarPearl,
  CalendarRuby,
  CalendarSapphire,
  CalendarEmerald,
  CalendarTopaz,
  CalendarAmethyst,
  CalendarQuartz,
  CalendarCrystal,
  CalendarJewel,
  CalendarTreasure,
  CalendarGold,
  CalendarSilver,
  CalendarBronze,
  CalendarPlatinum,
  CalendarTitanium,
  CalendarSteel,
  CalendarIron,
  CalendarCopper,
  CalendarAluminum,
  CalendarZinc,
  CalendarTin,
  CalendarLead,
  CalendarMercury,
  CalendarUranium,
  CalendarPlutonium,
  CalendarRadium,
  CalendarThorium,
  CalendarActinium,
  CalendarProtactinium,
  CalendarNeptunium,
  CalendarAmericium,
  CalendarCurium,
  CalendarBerkelium,
  CalendarCalifornium,
  CalendarEinsteinium,
  CalendarFermium,
  CalendarMendelevium,
  CalendarNobelium,
  CalendarLawrencium,
  CalendarRutherfordium,
  CalendarDubnium,
  CalendarSeaborgium,
  CalendarBohrium,
  CalendarHassium,
  CalendarMeitnerium,
  CalendarDarmstadtium,
  CalendarRoentgenium,
  CalendarCopernicium,
  CalendarNihonium,
  CalendarFlerovium,
  CalendarMoscovium,
  CalendarLivermorium,
  CalendarTennessine,
  CalendarOganesson,
  Package,
  Receipt,
  ClipboardList,
  Workflow,
  Lock,
  Key,
  Fingerprint,
  Scan,
  Activity,
  Layers,
  Grid,
  List,
  Map,
  Compass,
  Navigation,
  Globe2,
  WifiOff,
  Signal,
  Bluetooth,
  Usb,
  HardDrive,
  MemoryStick,
  Printer,
  Scanner,
  Fax,
  Phone,
  Voicemail,
  Headset,
  Speaker,
  VolumeX,
  Music,
  BookOpen,
  Lightbulb,
  Puzzle,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Gift,
  Tag,
  Percent,
  Calculator,
  PieChart,
  LineChart
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const ZionAIBlockchainAnalyticsPro = () => {
  const features = [
    {
      title: "Real-Time Blockchain Monitoring",
      description: "Monitor multiple blockchain networks in real-time with advanced analytics and instant alerts",
      icon: <Activity className="w-6 h-6" />,
      benefits: ["Multi-chain support", "Real-time data", "Custom alerts", "Performance metrics"]
    },
    {
      title: "AI-Powered Transaction Analysis",
      description: "Advanced AI algorithms analyze transaction patterns, detect anomalies, and predict market trends",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Pattern recognition", "Anomaly detection", "Predictive analytics", "Risk assessment"]
    },
    {
      title: "DeFi Protocol Analytics",
      description: "Comprehensive analysis of DeFi protocols including yield farming, liquidity pools, and governance tokens",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Yield optimization", "Liquidity analysis", "Governance tracking", "APY monitoring"]
    },
    {
      title: "Smart Contract Security",
      description: "Automated smart contract auditing with vulnerability detection and security scoring",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Vulnerability scanning", "Security scoring", "Code analysis", "Risk mitigation"]
    },
    {
      title: "Portfolio Management",
      description: "Track and manage your crypto portfolio with advanced analytics and performance insights",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Portfolio tracking", "Performance metrics", "Risk analysis", "Rebalancing suggestions"]
    },
    {
      title: "Compliance & Reporting",
      description: "Automated compliance reporting and tax calculations for regulatory requirements",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Tax reporting", "Compliance tracking", "Audit trails", "Regulatory updates"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for individual traders and small portfolios",
      features: [
        "Up to 5 wallets",
        "Basic analytics",
        "3 blockchain networks",
        "Email support",
        "Standard reports",
        "Basic alerts"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for active traders and DeFi users",
      features: [
        "Up to 25 wallets",
        "Advanced analytics",
        "10 blockchain networks",
        "Priority support",
        "Custom reports",
        "Advanced alerts",
        "API access",
        "DeFi analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "per month",
      description: "For institutions and large portfolios",
      features: [
        "Unlimited wallets",
        "Premium analytics",
        "All blockchain networks",
        "24/7 dedicated support",
        "Custom dashboards",
        "Real-time alerts",
        "Full API access",
        "White-label options",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const supportedChains = [
    { name: "Ethereum", icon: "ETH", color: "from-blue-500 to-blue-600" },
    { name: "Bitcoin", icon: "BTC", color: "from-orange-500 to-orange-600" },
    { name: "Binance Smart Chain", icon: "BNB", color: "from-yellow-500 to-yellow-600" },
    { name: "Polygon", icon: "MATIC", color: "from-purple-500 to-purple-600" },
    { name: "Solana", icon: "SOL", color: "from-green-500 to-green-600" },
    { name: "Avalanche", icon: "AVAX", color: "from-red-500 to-red-600" },
    { name: "Cardano", icon: "ADA", color: "from-cyan-500 to-cyan-600" },
    { name: "Polkadot", icon: "DOT", color: "from-pink-500 to-pink-600" }
  ];

  const analyticsFeatures = [
    {
      title: "Transaction Flow Analysis",
      description: "Track money flows across addresses and identify suspicious patterns",
      icon: <ArrowRight className="w-6 h-6" />,
      metrics: ["Flow visualization", "Pattern detection", "Risk scoring", "Alert system"]
    },
    {
      title: "Market Sentiment Analysis",
      description: "AI-powered sentiment analysis from social media and news sources",
      icon: <TrendingUp className="w-6 h-6" />,
      metrics: ["Sentiment scoring", "News analysis", "Social monitoring", "Trend prediction"]
    },
    {
      title: "Yield Farming Optimization",
      description: "Find the best yield farming opportunities across DeFi protocols",
      icon: <Target className="w-6 h-6" />,
      metrics: ["APY comparison", "Risk assessment", "Auto-compounding", "Strategy optimization"]
    },
    {
      title: "Smart Contract Monitoring",
      description: "Monitor smart contract interactions and detect potential issues",
      icon: <Shield className="w-6 h-6" />,
      metrics: ["Contract analysis", "Vulnerability detection", "Gas optimization", "Security scoring"]
    }
  ];

  const stats = [
    { number: "50+", label: "Blockchain Networks", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "1M+", label: "Transactions Analyzed", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Crypto Capital Management",
      role: "Portfolio Manager",
      content: "Zion AI Blockchain Analytics Pro has revolutionized our trading strategies. The AI insights helped us increase returns by 35% while reducing risk.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Zhang",
      company: "DeFi Ventures",
      role: "Investment Director",
      content: "The DeFi analytics are incredibly detailed. We can now identify the best yield farming opportunities before they become mainstream.",
      rating: 5,
      avatar: "LZ"
    },
    {
      name: "Marcus Johnson",
      company: "Blockchain Security Labs",
      role: "Security Analyst",
      content: "The smart contract monitoring has saved us from several potential vulnerabilities. The security scoring is spot-on.",
      rating: 5,
      avatar: "MJ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Blockchain Analytics Pro - Advanced Crypto Analytics Platform | Zion Tech Group"
        description="Transform your blockchain analysis with Zion AI Blockchain Analytics Pro. Real-time monitoring, AI-powered insights, DeFi analytics, and smart contract security in one platform."
        keywords="blockchain analytics, crypto analytics, DeFi analytics, smart contract security, blockchain monitoring, cryptocurrency analysis, AI blockchain"
        canonical="https://ziontechgroup.com/zion-ai-blockchain-analytics-pro"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Shield className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Blockchain Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Blockchain Analytics Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most advanced blockchain analytics platform powered by AI. Monitor, analyze, and optimize your 
            crypto investments with real-time insights and intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
              icon={<Play className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Supported Chains */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported Blockchain Networks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor and analyze transactions across all major blockchain networks
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {supportedChains.map((chain, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-r ${chain.color} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                  {chain.icon}
                </div>
                <p className="text-gray-300 text-sm font-medium">{chain.name}</p>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Unlock the power of blockchain data with our comprehensive suite of AI-powered analytics tools
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
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
              Deep Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Go beyond basic tracking with our advanced analytics and AI-powered insights
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-6">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {feature.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect plan for your blockchain analytics needs
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative hover:scale-105 transition-transform duration-300 ${
                  plan.popular ? 'ring-2 ring-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full justify-center"
                >
                  {plan.popular ? "Get Started" : "Choose Plan"}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Crypto Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what industry experts say about our blockchain analytics platform
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
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
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join thousands of crypto professionals using Zion AI Blockchain Analytics Pro to make smarter 
            investment decisions and optimize their blockchain strategies.
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
              icon={<Play className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIBlockchainAnalyticsPro;