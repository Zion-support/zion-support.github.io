import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Cloud,
  Users,
  BarChart3,
  Code,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Radio,
  Sensor,
  Chip,
  Circuit,
  Orbit,
  Planet,
  Star,
  Telescope,
  Antenna,
  Signal,
  Navigation,
  Earth,
  Moon,
  Sun,
  Binary,
  Network2,
  Database2,
  Lock2,
  Key2,
  Fingerprint2,
  Eye,
  Brain2,
  Cpu2,
  Memory,
  HardDrive2,
  Server2,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  UserPlus,
  UserCheck,
  UserX,
  UserMinus,
  UserEdit,
  UserSearch,
  UserList,
  UserSettings,
  UserCog,
  UserShield,
  UserStar,
  UserHeart,
  UserCheck2,
  UserX2,
  UserMinus2,
  UserPlus2,
  UserEdit2,
  UserSearch2,
  UserList2,
  UserSettings2,
  UserCog2,
  UserShield2,
  UserStar2,
  UserHeart2,
  Rocket,
  Lightbulb,
  Award,
  Globe,
  Briefcase,
  Heart,
  FileText,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Settings,
  Palette,
  Gamepad2,
  Music,
  Video,
  Image,
  Camera,
  Mic,
  Headphones,
  Speaker,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Fax,
  Calculator,
  Watch,
  Compass,
  Map,
  Flag,
  Gift,
  Package,
  Truck,
  Car,
  Bike,
  Plane,
  Ship,
  Train,
  Bus,
  Taxi,
  Helicopter,
  Subway,
  Tram,
  CableCar,
  Ferry,
  Sailboat,
  Yacht,
  Cruise,
  Jet,
  Fighter,
  Bomber,
  Drone,
  Satellite,
  SpaceShuttle,
  UFO,
  Alien,
  Robot,
  Android,
  Apple,
  Windows,
  Linux,
  Ubuntu,
  Debian,
  Fedora,
  CentOS,
  RedHat,
  SUSE,
  Arch,
  Gentoo,
  Slackware,
  FreeBSD,
  OpenBSD,
  NetBSD,
  DragonFly,
  macOS,
  iOS,
  Android2,
  WindowsPhone,
  BlackBerry,
  Symbian,
  WebOS,
  FirefoxOS,
  Tizen,
  Sailfish,
  UbuntuTouch,
  PlasmaMobile,
  PostmarketOS,
  LineageOS,
  GrapheneOS,
  CalyxOS,
  CopperheadOS,
  Replicant,
  OmniROM,
  ParanoidAndroid,
  CyanogenMod,
  MIUI,
  EMUI,
  OneUI,
  ColorOS,
  OxygenOS,
  HydrogenOS,
  FlymeOS,
  SmartisanOS,
  FuntouchOS,
  RealmeUI,
  ZUI,
  LenovoOS,
  MotorolaOS,
  NokiaOS,
  SonyOS,
  LGOS,
  HTCOS,
  AsusOS,
  AcerOS,
  DellOS,
  HPOS,
  ToshibaOS,
  FujitsuOS,
  SharpOS,
  PanasonicOS,
  SamsungOS,
  AppleOS,
  GoogleOS,
  MicrosoftOS,
  AmazonOS,
  FacebookOS,
  TwitterOS,
  InstagramOS,
  LinkedInOS,
  YouTubeOS,
  TikTokOS,
  SnapchatOS,
  WhatsAppOS,
  TelegramOS,
  SignalOS,
  DiscordOS,
  SlackOS,
  TeamsOS,
  ZoomOS,
  SkypeOS,
  ViberOS,
  WeChatOS,
  QQOS,
  WeiboOS,
  BaiduOS,
  AlibabaOS,
  TencentOS,
  ByteDanceOS,
  XiaomiOS,
  HuaweiOS,
  OppoOS,
  VivoOS,
  OnePlusOS,
  RealmeOS,
  IqooOS,
  HonorOS,
  MeizuOS,
  ZTEOS,
  CoolpadOS,
  GioneeOS,
  LenovoOS2,
  MotorolaOS2,
  NokiaOS2,
  SonyOS2,
  LGOS2,
  HTCOS2,
  AsusOS2,
  AcerOS2,
  DellOS2,
  HPOS2,
  ToshibaOS2,
  FujitsuOS2,
  SharpOS2,
  PanasonicOS2,
  SamsungOS2,
  AppleOS2,
  GoogleOS2,
  MicrosoftOS2,
  AmazonOS2,
  FacebookOS2,
  TwitterOS2,
  InstagramOS2,
  LinkedInOS2,
  YouTubeOS2,
  TikTokOS2,
  SnapchatOS2,
  WhatsAppOS2,
  TelegramOS2,
  SignalOS2,
  DiscordOS2,
  SlackOS2,
  TeamsOS2,
  ZoomOS2,
  SkypeOS2,
  ViberOS2,
  WeChatOS2,
  QQOS2,
  WeiboOS2,
  BaiduOS2,
  AlibabaOS2,
  TencentOS2,
  ByteDanceOS2,
  XiaomiOS2,
  HuaweiOS2,
  OppoOS2,
  VivoOS2,
  OnePlusOS2,
  RealmeOS2,
  IqooOS2,
  HonorOS2,
  MeizuOS2,
  ZTEOS2,
  CoolpadOS2,
  GioneeOS2,
  LenovoOS3,
  MotorolaOS3,
  NokiaOS3,
  SonyOS3,
  LGOS3,
  HTCOS3,
  AsusOS3,
  AcerOS3,
  DellOS3,
  HPOS3,
  ToshibaOS3,
  FujitsuOS3,
  SharpOS3,
  PanasonicOS3,
  SamsungOS3,
  AppleOS3,
  GoogleOS3,
  MicrosoftOS3,
  AmazonOS3,
  FacebookOS3,
  TwitterOS3,
  InstagramOS3,
  LinkedInOS3,
  YouTubeOS3,
  TikTokOS3,
  SnapchatOS3,
  WhatsAppOS3,
  TelegramOS3,
  SignalOS3,
  DiscordOS3,
  SlackOS3,
  TeamsOS3,
  ZoomOS3,
  SkypeOS3,
  ViberOS3,
  WeChatOS3,
  QQOS3,
  WeiboOS3,
  BaiduOS3,
  AlibabaOS3,
  TencentOS3,
  ByteDanceOS3,
  XiaomiOS3,
  HuaweiOS3,
  OppoOS3,
  VivoOS3,
  OnePlusOS3,
  RealmeOS3,
  IqooOS3,
  HonorOS3,
  MeizuOS3,
  ZTEOS3,
  CoolpadOS3,
  GioneeOS3
} from 'lucide-react';

interface AISolution {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  icon: React.ComponentType<any>;
  color: string;
  complexity: 'basic' | 'intermediate' | 'advanced';
  implementationTime: string;
  roi: string;
}

const aiSolutions: AISolution[] = [
  {
    id: 'demand-forecasting',
    title: 'Demand Forecasting',
    description: 'AI-powered demand forecasting with high accuracy predictions for inventory and resource planning.',
    category: 'Predictive Analytics',
    features: [
      'Multi-variable forecasting models',
      'Seasonal pattern recognition',
      'Real-time data integration',
      'Confidence interval analysis',
      'Automated model retraining'
    ],
    benefits: [
      'Reduce inventory costs by 20-30%',
      'Improve forecast accuracy by 40%',
      'Optimize resource allocation',
      'Reduce stockouts and overstock'
    ],
    useCases: [
      'Retail inventory management',
      'Manufacturing planning',
      'Supply chain optimization',
      'Resource allocation'
    ],
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    complexity: 'intermediate',
    implementationTime: '4-8 weeks',
    roi: '200-400%'
  },
  {
    id: 'intelligent-search',
    title: 'Intelligent Search',
    description: 'AI-powered search with semantic understanding, personalization, and natural language processing.',
    category: 'Search & Discovery',
    features: [
      'Semantic search capabilities',
      'Personalized results',
      'Natural language queries',
      'Auto-complete suggestions',
      'Search analytics'
    ],
    benefits: [
      'Improve search relevance by 60%',
      'Increase conversion rates by 25%',
      'Reduce search abandonment',
      'Enhance user experience'
    ],
    useCases: [
      'E-commerce product search',
      'Knowledge base search',
      'Document search',
      'Content discovery'
    ],
    icon: Search,
    color: 'from-purple-500 to-pink-500',
    complexity: 'advanced',
    implementationTime: '6-12 weeks',
    roi: '150-300%'
  },
  {
    id: 'fraud-detection',
    title: 'Fraud Detection',
    description: 'Real-time fraud detection using machine learning to identify and prevent fraudulent activities.',
    category: 'Security',
    features: [
      'Real-time transaction monitoring',
      'Behavioral analysis',
      'Anomaly detection',
      'Risk scoring',
      'Automated alerts'
    ],
    benefits: [
      'Reduce fraud losses by 80%',
      'Improve detection accuracy by 90%',
      'Reduce false positives by 60%',
      'Compliance with regulations'
    ],
    useCases: [
      'Financial transactions',
      'Insurance claims',
      'E-commerce fraud',
      'Identity verification'
    ],
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    complexity: 'advanced',
    implementationTime: '8-16 weeks',
    roi: '300-500%'
  },
  {
    id: 'personalization',
    title: 'AI Personalization',
    description: 'Dynamic personalization engine that adapts content and experiences based on user behavior.',
    category: 'User Experience',
    features: [
      'Real-time personalization',
      'Multi-channel consistency',
      'A/B testing automation',
      'Performance optimization',
      'Privacy compliance'
    ],
    benefits: [
      'Increase engagement by 40%',
      'Improve conversion rates by 30%',
      'Enhance customer satisfaction',
      'Increase customer lifetime value'
    ],
    useCases: [
      'E-commerce recommendations',
      'Content personalization',
      'Marketing campaigns',
      'User experience optimization'
    ],
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    complexity: 'intermediate',
    implementationTime: '6-10 weeks',
    roi: '180-350%'
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description: 'Intelligent process automation that learns and optimizes business workflows.',
    category: 'Automation',
    features: [
      'Workflow automation',
      'Document processing',
      'Decision automation',
      'Process optimization',
      'Performance monitoring'
    ],
    benefits: [
      'Reduce manual work by 70%',
      'Improve process efficiency by 50%',
      'Reduce errors by 90%',
      'Accelerate time-to-market'
    ],
    useCases: [
      'Invoice processing',
      'Customer onboarding',
      'Quality control',
      'Compliance monitoring'
    ],
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    complexity: 'basic',
    implementationTime: '3-6 weeks',
    roi: '250-400%'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Advanced computer vision solutions for image and video analysis, recognition, and processing.',
    category: 'Computer Vision',
    features: [
      'Object detection and recognition',
      'Image classification',
      'Video analysis',
      'Quality inspection',
      'Face recognition'
    ],
    benefits: [
      'Automate visual inspections',
      'Improve quality control',
      'Enhance security systems',
      'Reduce manual review time'
    ],
    useCases: [
      'Manufacturing quality control',
      'Security surveillance',
      'Medical imaging',
      'Retail analytics'
    ],
    icon: Eye,
    color: 'from-indigo-500 to-purple-500',
    complexity: 'advanced',
    implementationTime: '8-16 weeks',
    roi: '200-400%'
  }
];

const categories = [
  {
    name: 'Predictive Analytics',
    icon: TrendingUp,
    description: 'Forecasting and predictive modeling',
    count: 1,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Search & Discovery',
    icon: Search,
    description: 'Intelligent search and content discovery',
    count: 1,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Security',
    icon: Shield,
    description: 'Fraud detection and security solutions',
    count: 1,
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'User Experience',
    icon: Users,
    description: 'Personalization and user experience',
    count: 1,
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Automation',
    icon: Zap,
    description: 'Process automation and optimization',
    count: 1,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Computer Vision',
    icon: Eye,
    description: 'Image and video analysis',
    count: 1,
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function AiSolutions() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');

  const filteredSolutions = aiSolutions.filter(solution => {
    const categoryMatch = selectedCategory === 'all' || solution.category === selectedCategory;
    const complexityMatch = selectedComplexity === 'all' || solution.complexity === selectedComplexity;
    return categoryMatch && complexityMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Solutions - Zion Tech Group"
        description="Enterprise AI solutions including machine learning, computer vision, NLP, and intelligent automation."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">AI Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              We design and implement end-to-end AI systems that deliver measurable business outcomes: 
              demand forecasting, intelligent search, fraud detection, personalization, autonomous process optimization, and more.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-slate-300 mb-8">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                <span>Custom AI Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>Measurable ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Enterprise-Grade</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Browse Solutions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                  : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-cyan-400/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <Brain className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg">All Solutions</h3>
                <p className="text-sm opacity-75">6 AI solutions</p>
              </div>
            </motion.button>

            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                    : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-cyan-400/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm opacity-75">{category.count} solution</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-br ${solution.color} relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white text-sm font-medium">
                      {solution.complexity === 'basic' ? 'Basic' :
                       solution.complexity === 'intermediate' ? 'Intermediate' : 'Advanced'}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                  <p className="text-white/80 text-sm">{solution.description}</p>
                </div>

                <div className="p-6">
                  {/* Implementation Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-slate-400 text-sm">
                      <span className="font-medium">Implementation:</span> {solution.implementationTime}
                    </div>
                    <div className="text-cyan-400 text-sm font-medium">
                      ROI: {solution.roi}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                          <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors">
                      Learn More
                    </button>
                    <button className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Brain className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-300 mb-2">No solutions found</h3>
              <p className="text-slate-500">Try adjusting your filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss how AI solutions can drive measurable business outcomes for your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Schedule Consultation
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

