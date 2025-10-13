import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Cloud, BarChart3, Users, Award, ArrowRight, CheckCircle, Star, Globe, Smartphone, Monitor, Brain, Code, Database, Mail, Clock, DollarSign, Lock, TrendingUp, Target, Settings, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "Advanced analytics platform with AI-powered insights and real-time reporting",
      features: [
        "Real-time data visualization",
        "AI-powered insights",
        "Custom dashboards",
        "Automated reporting",
        "Multi-source data integration"
      ],
      price: "$299/month",
      icon: BarChart3,
      category: "Analytics",
      featured: true,
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity solution with AI-powered threat detection",
      features: [
        "AI threat detection",
        "Real-time monitoring",
        "Automated response",
        "Compliance reporting",
        "24/7 security monitoring"
      ],
      price: "$499/month",
      icon: Shield,
      category: "Security",
      featured: true,
      link: "/zion-security-shield"
    },
    {
      id: "zion-ai-neural-interface",
      name: "Zion AI Neural Interface",
      description: "Revolutionary brain-computer interface for thought-to-text conversion",
      features: [
        "Thought-to-text conversion",
        "Mind control interface",
        "Neural pattern recognition",
        "Real-time processing",
        "Privacy-focused design"
      ],
      price: "$199/month",
      icon: Brain,
      category: "AI Innovation",
      featured: true,
      link: "/zion-ai-neural-interface"
    },
    {
      id: "ai-voice-cloning-studio",
      name: "AI Voice Cloning Studio",
      description: "Professional voice synthesis with 95% accuracy and multi-language support",
      features: [
        "95% voice accuracy",
        "Multi-language support",
        "Real-time synthesis",
        "Voice customization",
        "API integration"
      ],
      price: "$29/month",
      icon: Mic,
      category: "AI Tools",
      featured: true,
      link: "/ai-voice-cloning-studio"
    },
    {
      id: "ai-quantum-financial-oracle",
      name: "AI Quantum Financial Oracle",
      description: "Quantum-powered financial predictions with 99.7% accuracy for market analysis",
      features: [
        "99.7% prediction accuracy",
        "Quantum computing power",
        "Real-time market analysis",
        "Risk assessment",
        "Portfolio optimization"
      ],
      price: "$199/month",
      icon: TrendingUp,
      category: "Finance",
      featured: true,
      link: "/ai-quantum-financial-oracle"
    },
    {
      id: "ai-space-mission-optimizer",
      name: "AI Space Mission Optimizer",
      description: "Advanced space mission optimization with 99.9% trajectory accuracy",
      features: [
        "99.9% trajectory accuracy",
        "Mission planning",
        "Resource optimization",
        "Risk analysis",
        "Real-time monitoring"
      ],
      price: "$499/month",
      icon: Rocket,
      category: "Space Technology",
      featured: true,
      link: "/ai-space-mission-optimizer"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage with advanced encryption and AI-powered organization",
      features: [
        "End-to-end encryption",
        "AI file organization",
        "Automatic backup",
        "Version control",
        "Cross-platform sync"
      ],
      price: "$99/month",
      icon: Cloud,
      category: "Storage",
      featured: false,
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing",
      features: [
        "AI content generation",
        "Multi-format support",
        "SEO optimization",
        "Brand voice training",
        "Content scheduling"
      ],
      price: "$149/month",
      icon: FileText,
      category: "Content",
      featured: false,
      link: "/zion-content-studio"
    },
    {
      id: "ai-holographic-workspace",
      name: "AI Holographic Workspace",
      description: "3D holographic interface for immersive remote collaboration and data visualization",
      features: [
        "3D holographic display",
        "Remote collaboration",
        "Data visualization",
        "Gesture controls",
        "Multi-user support"
      ],
      price: "$399/month",
      icon: Monitor,
      category: "Collaboration",
      featured: true,
      link: "/ai-holographic-workspace"
    },
    {
      id: "quantum-data-encryption-vault",
      name: "Quantum Data Encryption Vault",
      description: "Unbreakable quantum encryption for sensitive data with zero-knowledge architecture",
      features: [
        "Quantum encryption",
        "Zero-knowledge architecture",
        "Military-grade security",
        "Compliance ready",
        "Audit trails"
      ],
      price: "$599/month",
      icon: Lock,
      category: "Security",
      featured: true,
      link: "/quantum-data-encryption-vault"
    },
    {
      id: "ai-climate-prediction-engine",
      name: "AI Climate Prediction Engine",
      description: "Advanced climate modeling with 98.5% accuracy for weather and environmental forecasting",
      features: [
        "98.5% prediction accuracy",
        "Climate modeling",
        "Weather forecasting",
        "Environmental analysis",
        "Long-term projections"
      ],
      price: "$299/month",
      icon: Globe,
      category: "Environment",
      featured: false,
      link: "/ai-climate-prediction-engine"
    },
    {
      id: "ai-neural-memory-assistant",
      name: "Neural Memory Assistant",
      description: "AI-powered memory enhancement and knowledge management system",
      features: [
        "Memory enhancement",
        "Knowledge management",
        "Learning optimization",
        "Recall assistance",
        "Cognitive training"
      ],
      price: "$149/month",
      icon: Brain,
      category: "Productivity",
      featured: false,
      link: "/ai-neural-memory-assistant"
    }
  ];

  const categories = [
    "All",
    "Analytics",
    "Security",
    "AI Innovation",
    "AI Tools",
    "Finance",
    "Space Technology",
    "Storage",
    "Content",
    "Collaboration",
    "Environment",
    "Productivity"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProducts = microSaasProducts.filter(product => 
    selectedCategory === "All" || product.category === selectedCategory
  );

  const featuredProducts = microSaasProducts.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions"
        description="Discover our comprehensive collection of micro SAAS solutions including AI tools, analytics platforms, security solutions, and productivity applications. Ready to deploy immediately."
        keywords="micro SAAS, software solutions, AI tools, analytics platform, security solutions, productivity apps, business software, ready-to-use software"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">60+ Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready-to-use software solutions that can transform your business operations immediately. 
            From AI-powered analytics to advanced security tools, we have everything you need to succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="#solutions"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Explore Solutions
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">60+</div>
              <div className="text-gray-300 text-xs md:text-sm">Solutions Available</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-300 text-xs md:text-sm">Active Users</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300 text-xs md:text-sm">Uptime SLA</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-xs md:text-sm">Support</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Solutions */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative micro SAAS solutions, ready to transform your business operations.
            </p>
          </div>

          <ResponsiveGrid className="gap-8">
            {featuredProducts.map((product) => (
              <FuturisticCard
                key={product.id}
                className="group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    <product.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{product.price}</p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                  <Link
                    to={product.link}
                    className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* All Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <FuturisticCard
                key={product.id}
                className="group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                    <product.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{product.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-slate-800 text-cyan-400 rounded text-xs font-medium">
                    {product.category}
                  </span>
                  <Link
                    to={product.link}
                    className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FuturisticCard>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No solutions found</h3>
              <p className="text-gray-400 mb-6">
                Try selecting a different category
              </p>
              <FuturisticButton
                onClick={() => setSelectedCategory("All")}
                variant="primary"
              >
                Show All Solutions
              </FuturisticButton>
            </div>
          )}
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose from our comprehensive collection of micro SAAS solutions and start transforming your business operations today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MicroSaasPage;