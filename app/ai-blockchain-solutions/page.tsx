import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  BarChart3, 
  Database, 
  Users, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Mail,
  Smartphone,
  Globe,
  CheckCircle,
  Star,
  Award,
  Rocket,
  FileText,
  Bot,
  Settings,
  Monitor,
  Lock,
  Server,
  Cpu,
  Network,
  HardDrive,
  Phone,
  Laptop,
  Headphones,
  Calendar,
  DollarSign,
  PieChart,
  Activity,
  Layers,
  Workflow,
  MessageSquare,
  Video,
  Image,
  Music,
  Camera,
  Mic,
  Palette,
  Wrench,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Eye,
  Heart,
  ThumbsUp,
  Clock,
  MapPin,
  PhoneCall,
  Building,
  Briefcase,
  GraduationCap,
  ShoppingCart,
  CreditCard,
  Truck,
  Package,
  Home,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  Coffee,
  Utensils,
  Gamepad2,
  Book,
  Newspaper,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  FileSpreadsheet,
  FilePdf,
  FileZip,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy,
  Cut,
  Paste,
  Save,
  Undo,
  Redo,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Move,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  Divide,
  Equal,
  Percent,
  Hash,
  AtSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  CreditCard as Credit,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  TrendingDown,
  BarChart,
  LineChart,
  Scatter,
  AreaChart,
  Candlestick,
  Gauge,
  Thermometer,
  Droplet,
  Wind,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudSun,
  CloudMoon,
  Sunrise,
  Sunset,
  Compass,
  Map,
  Navigation,
  Flag,
  Anchor,
  Sailboat
} from 'lucide-react';

const AIBlockchainSolutionsPage = () => {
  const blockchainServices = [
    {
      title: "AI-Powered Smart Contract Development",
      description: "Intelligent smart contract creation with AI-assisted coding, security auditing, and automated testing for blockchain applications.",
      icon: <FileCode className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,999/month",
      originalPrice: "$5,999/month",
      features: ["AI Code Generation", "Security Auditing", "Automated Testing", "Gas Optimization", "Multi-chain Support", "Deployment Automation"],
      category: "Smart Contracts",
      popular: true
    },
    {
      title: "AI Blockchain Analytics Platform",
      description: "Advanced blockchain data analysis with AI-powered insights, transaction monitoring, and predictive analytics for DeFi protocols.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "Starting at $1,499/month",
      originalPrice: "$2,999/month",
      features: ["Transaction Analysis", "DeFi Analytics", "Risk Assessment", "Market Prediction", "Real-time Monitoring", "Custom Dashboards"],
      category: "Analytics",
      popular: true
    },
    {
      title: "AI-Powered DeFi Yield Optimization",
      description: "Intelligent yield farming strategies with AI-driven portfolio optimization, risk management, and automated rebalancing.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "Starting at $999/month",
      originalPrice: "$1,999/month",
      features: ["Yield Optimization", "Risk Management", "Auto Rebalancing", "Portfolio Analytics", "Strategy Backtesting", "Performance Tracking"],
      category: "DeFi",
      popular: true
    },
    {
      title: "AI Blockchain Security Suite",
      description: "Comprehensive blockchain security with AI-powered threat detection, vulnerability scanning, and automated incident response.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      price: "Starting at $1,799/month",
      originalPrice: "$3,599/month",
      features: ["Threat Detection", "Vulnerability Scanning", "Incident Response", "Compliance Monitoring", "Security Auditing", "Risk Assessment"],
      category: "Security"
    },
    {
      title: "AI NFT Marketplace Platform",
      description: "Intelligent NFT marketplace with AI-powered curation, pricing optimization, and automated royalty management.",
      icon: <Image className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,299/month",
      originalPrice: "$2,599/month",
      features: ["AI Curation", "Pricing Optimization", "Royalty Management", "Market Analysis", "Creator Tools", "Community Features"],
      category: "NFTs"
    },
    {
      title: "AI Cross-Chain Bridge Solutions",
      description: "Intelligent cross-chain interoperability with AI-powered routing, security validation, and automated bridge management.",
      icon: <Network className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $2,499/month",
      originalPrice: "$4,999/month",
      features: ["Cross-chain Routing", "Security Validation", "Bridge Management", "Liquidity Optimization", "Multi-chain Support", "Real-time Monitoring"],
      category: "Interoperability"
    },
    {
      title: "AI Blockchain Identity Management",
      description: "Decentralized identity solutions with AI-powered verification, privacy protection, and automated compliance.",
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "Starting at $899/month",
      originalPrice: "$1,799/month",
      features: ["Identity Verification", "Privacy Protection", "Compliance Automation", "Multi-factor Auth", "Biometric Integration", "Zero-knowledge Proofs"],
      category: "Identity"
    },
    {
      title: "AI Supply Chain Blockchain",
      description: "Transparent supply chain tracking with AI-powered fraud detection, quality assurance, and automated compliance reporting.",
      icon: <Truck className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $1,599/month",
      originalPrice: "$3,199/month",
      features: ["Supply Chain Tracking", "Fraud Detection", "Quality Assurance", "Compliance Reporting", "IoT Integration", "Sustainability Tracking"],
      category: "Supply Chain"
    },
    {
      title: "AI Blockchain Data Oracle",
      description: "Intelligent data oracles with AI-powered validation, real-time data feeds, and automated consensus mechanisms.",
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $1,199/month",
      originalPrice: "$2,399/month",
      features: ["Data Validation", "Real-time Feeds", "Consensus Mechanisms", "Multi-source Aggregation", "Accuracy Scoring", "API Integration"],
      category: "Oracles"
    },
    {
      title: "AI Blockchain Governance Platform",
      description: "Decentralized governance with AI-powered proposal analysis, voting optimization, and automated execution.",
      icon: <Vote className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      price: "Starting at $799/month",
      originalPrice: "$1,599/month",
      features: ["Proposal Analysis", "Voting Optimization", "Automated Execution", "Governance Analytics", "Community Management", "Transparency Tools"],
      category: "Governance"
    },
    {
      title: "AI Blockchain Insurance Solutions",
      description: "Decentralized insurance with AI-powered risk assessment, automated claims processing, and smart contract payouts.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      price: "Starting at $1,899/month",
      originalPrice: "$3,799/month",
      features: ["Risk Assessment", "Claims Processing", "Smart Payouts", "Policy Management", "Fraud Detection", "Automated Underwriting"],
      category: "Insurance"
    },
    {
      title: "AI Blockchain Gaming Platform",
      description: "Play-to-earn gaming with AI-powered game mechanics, NFT generation, and automated reward distribution.",
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      price: "Starting at $1,399/month",
      originalPrice: "$2,799/month",
      features: ["Game Mechanics", "NFT Generation", "Reward Distribution", "Player Analytics", "Marketplace Integration", "Community Features"],
      category: "Gaming"
    }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      description: "AI-powered security protocols protect against emerging threats and vulnerabilities",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9% security uptime"
    },
    {
      title: "Cost Efficiency",
      description: "Optimize gas fees and transaction costs with intelligent routing and batching",
      icon: <DollarSign className="w-6 h-6" />,
      stat: "40% cost reduction"
    },
    {
      title: "Scalability",
      description: "Handle high transaction volumes with AI-optimized blockchain infrastructure",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "10x faster processing"
    }
  ];

  const stats = [
    { number: "100+", label: "Blockchain Projects", icon: <Server className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "50+", label: "Supported Chains", icon: <Network className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Brain className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group | Advanced Blockchain Technology</title>
        <meta name="description" content="Transform your blockchain projects with our AI-powered solutions including smart contracts, DeFi optimization, NFT platforms, and cross-chain interoperability." />
        <meta name="keywords" content="AI blockchain, smart contracts, DeFi, NFT, cross-chain, blockchain security, decentralized identity, supply chain blockchain" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Blockchain Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Blockchain Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Revolutionize your blockchain projects with our AI-powered solutions. From smart contracts to DeFi optimization, 
            we provide cutting-edge technology that enhances security, efficiency, and scalability.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
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
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 mb-3">{benefit.description}</p>
              <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blockchainServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {service.icon}
                </div>
                
                <div className="text-center mb-4">
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-xs text-cyan-400 text-center">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>
                
                <div className="mt-4 text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build the Future of Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI blockchain experts help you create innovative solutions that leverage the power of artificial intelligence 
              and blockchain technology for maximum impact.
            </p>
            
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBlockchainSolutionsPage;