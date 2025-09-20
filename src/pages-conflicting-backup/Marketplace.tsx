import { useCallback  } from "react";
import React, { useState } from "react"
import { motion   } from "framer-motion";
import { SEO   } from "../components/SEO";
import { Link   } from "react-router-dom";
import {
  Store;
  Search,
  Filter,
  Grid,
  List,
  Star,
  Heart,
  ShoppingCart,
  Eye,
  Download,
  Play,
  BookOpen,
  Code,
  Cloud,
  Shield,
  Bot,
  Database,
  Server,
  Monitor,
  Smartphone,
  Package,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp;
  Zap;
  Globe;
  Target;
  BarChart3;
  Settings;
  Palette;
  Cpu;
  HardDrive;
  Network;
  Lightbulb;
  Settings as Cog;
  FileText;
  Video;
  Headphones;
  Calendar;
  Clock;
  DollarSign;
  Percent;
  Tag;
  ExternalLink;
  Mail;
  Phone;
  MapPin;
  MessageCircle;
  HelpCircle;
  Info;
  AlertTriangle;
  X;
  Plus;
  Minus;
  RefreshCw;
  RotateCcw;
  Maximize2;
  Minimize2;
  Volume2;
  VolumeX;
  Power;
  PowerOff;
  Battery;
  BatteryCharging;
  BatteryFull;
  BatteryLow;
  BatteryMedium;
  BatteryEmpty;
  Wifi;
  WifiOff;
  Signal;
  SignalOff;
  Bluetooth;
  BluetoothOff;
  Lock;
  Unlock;
  Key;
  Fingerprint;
  QrCode;
  Barcode;
  Camera;
  Image;
  File;
  Folder;
  Archive;
  Trash2;
  Edit;
  Copy;
  Share;
  Link as LinkIcon;
  Bookmark;
  BookmarkPlus;
  BookmarkMinus;
  Flag;
  Report;
  ThumbsUp;
  ThumbsDown;
  Smile;
  Frown;
  Meh;
  Heart as HeartIcon;
  HeartOff;
  HeartHandshake;
  Gift;
  CreditCard;
  Wallet;
  Receipt;
  Calculator;
  TrendingDown;
  Activity;
  PieChart;
  LineChart;
  BarChart;
  ScatterChart;
  Radar;
  Gauge;
  Thermometer;
  Droplets;
  Sun;
  Moon;
  Cloud;
  CloudRain;
  CloudLightning;
  CloudSnow;
  Wind;
  Umbrella;
  Snowflake;
  Fire;
  Leaf;
  Tree;
  Flower;
  Seedling;
  Sprout;
  Plant;
  TreePine;
  Mountain;
  MountainSnow;
  Volcano;
  Island;
  Beach;
  Desert;
  Forest;
  Jungle;
  Ocean;
  River;
  Lake;
  Water;
  Fish;
  Bird;
  Cat;
  Dog;
  Horse;
  Cow;
  Pig;
  Sheep;
  Goat;
  Chicken;
  Duck;
  Turkey;
  Eagle;
  Hawk;
  Owl;
  Crow;
  Sparrow;
  Robin;
  Bluebird;
  Cardinal;
  Goldfinch;
  Hummingbird;
  Woodpecker;
  Seagull;
  Pelican;
  Flamingo;
  Penguin;
  Ostrich;
  Emu;
  Kiwi;
  Toucan;
  Parrot;
  Macaw;
  Cockatoo;
  Canary;
  Finch;
  Sparrow;
  Robin;
  Bluebird;
  Cardinal;
  Goldfinch;
  Hummingbird;
  Woodpecker;
  Seagull;
  Pelican;
  Flamingo;
  Penguin;
  Ostrich;
  Emu;
  Kiwi;
  Toucan;
  Parrot;
  Macaw;
  Cockatoo;
  Canary;
  Finch;
}
}
 } from "lucide-react";
export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const categories = [
  { id: 'all', na,
  m: e: 'All Categories', cou,
  n: t: 48 },
  },
  { id: 'ai-ml', na,
  m: e: 'AI & Machine Learning', cou,
  n: t: 12 },
  },
  { id: 'cloud', na,
  m: e: 'Cloud Solutions', cou,
  n: t: 8 },
  },
  { id: 'security', na,
  m: e: 'Security & Compliance', cou,
  n: t: 6 },
  },
  { id: 'data', na,
  m: e: 'Data & Analytics', cou,
  n: t: 7 },
  },
  { id: 'development', na,
  m: e: 'Development Tools', cou,
  n: t: 9 },
  },
  { id: 'hardware', na,
  m: e: 'Hardware & Equipment', cou,
  n: t: 6 },
  },
  ]
  const types = [
  { id: 'all', na,
  m: e: 'All Types', cou,
  n: t: 48 },
  },
  { id: 'software', na,
  m: e: 'Software', cou,
  n: t: 25 },
  },
  { id: 'service', na,
  m: e: 'Services', cou,
  n: t: 15 },
  },
  { id: 'hardware', na,
  m: e: 'Hardware', cou,
  n: t: 8 },
  },
  ]
  const marketplaceItems = [
  // AI & Machine Learning;
    {
  id: 'ai-chatbot',na,
  m: e: 'AI Chatbot Platform',catego,
  r: y: 'ai-ml',ty,
  p: e: 'software',ic,
  o: n: Bot,descripti,
  o: n: 'Intelligent chatbot platform with natural language processing',featur,
  e: s: [
  'Natural language understandingMulti-language support'
        'Integration APIsAnalytics dashboard'
        'Custom training models24/7 availability'
]
      pricin,
  g: '$299/month',rati,
  n: g: 4.8,revie,
  w: s: 156,downloa,
  d: s: 1247,stat,
  u: s: 'featured',ta,
  g: s: ['AIChatbot', 'NLPAutomation']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/ai-chatbot',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/ai-chatbot'
},
  {
  id: 'ml-pipeline',na,
  m: e: 'ML Pipeline Automation',catego,
  r: y: 'ai-ml',ty,
  p: e: 'software',ic,
  o: n: BarChart3,descripti,
  o: n: 'Automated machine learning pipeline for data scientists',featur,
  e: s: [
  'AutoML capabilitiesModel versioning'
        'A/B testingPerformance monitoring'
        'Scalable infrastructureCloud deployment'
]
      pricin,
  g: '$499/month',rati,
  n: g: 4.9,revie,
  w: s: 89,downloa,
  d: s: 567,stat,
  u: s: 'popular',ta,
  g: s: ['Machine LearningAutomation', 'Data ScienceMLOps']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/ml-pipeline',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/ml-pipeline'
},
  {
  id: 'computer-vision',na,
  m: e: 'Computer Vision API',catego,
  r: y: 'ai-ml',ty,
  p: e: 'service',ic,
  o: n: Eye,descripti,
  o: n: 'Advanced computer vision services for image and video analysis',featur,
  e: s: [
  'Object detectionFace recognition'
        'Image classificationVideo analysis'
        'Real-time processingCustom model training'
]
      pricin,
  g: '$0.01 per image',rati,
  n: g: 4.7,revie,
  w: s: 203,downloa,
  d: s: 892,stat,
  u: s: 'trending',ta,
  g: s: ['Computer VisionAI', 'Image ProcessingVideo Analysis']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/computer-vision',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/computer-vision'
}
    // Cloud Solutions;
    {
  id: 'cloud-migration',na,
  m: e: 'Cloud Migration Service',catego,
  r: y: 'cloud',ty,
  p: e: 'service',ic,
  o: n: Cloud,descripti,
  o: n: 'Professional cloud migration and optimization services',featur,
  e: s: [
  'Infrastructure assessmentMigration planning'
        'Data migrationPerformance optimization'
        'Cost optimizationOngoing support'
]
      pricin,
  g: 'Starting from $15,000'
      rati,
  n: g: 4.9,revie,
  w: s: 67,downloa,
  d: s: 234,stat,
  u: s: 'featured',ta,
  g: s: ['Cloud MigrationAWS', 'AzureGCP', 'DevOps']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/cloud-migration',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/cloud-migration'
},
  {
  id: 'kubernetes-manager',na,
  m: e: 'Kubernetes Management Platform',catego,
  r: y: 'cloud',ty,
  p: e: 'software',ic,
  o: n: Server,descripti,
  o: n: 'Enterprise-grade Kubernetes cluster management solution',featur,
  e: s: [
  'Multi-cluster managementAuto-scaling'
        'Monitoring & alertingSecurity policies'
        'Backup & recoveryCost optimization'
]
      pricin,
  g: '$199/month',rati,
  n: g: 4.8,revie,
  w: s: 134,downloa,
  d: s: 456,stat,
  u: s: 'popular',ta,
  g: s: ['KubernetesContainer Orchestration', 'DevOpsCloud Native']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/kubernetes-manager',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/kubernetes-manager'
}
    // Security & Compliance;
    {
  id: 'threat-detection',na,
  m: e: 'Advanced Threat Detection',catego,
  r: y: 'security',ty,
  p: e: 'software',ic,
  o: n: Shield,descripti,
  o: n: 'AI-powered threat detection and response system',featur,
  e: s: [
  'Real-time monitoringBehavioral analysis'
        'Threat intelligenceAutomated response'
        'Compliance reporting24/7 SOC support'
]
      pricin,
  g: '$399/month',rati,
  n: g: 4.9,revie,
  w: s: 178,downloa,
  d: s: 678,stat,
  u: s: 'featured',ta,
  g: s: ['CybersecurityThreat Detection', 'AI SecuritySOC']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/threat-detection',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/threat-detection'
},
  {
  id: 'compliance-audit',na,
  m: e: 'Compliance Audit Service',catego,
  r: y: 'security',ty,
  p: e: 'service',ic,
  o: n: CheckCircle,descripti,
  o: n: 'Comprehensive compliance auditing and certification services',featur,
  e: s: [
  'SOC 2 Type IIISO 27001'
        'GDPR complianceHIPAA assessment'
        'PCI DSS validationOngoing monitoring'
]
      pricin,
  g: 'Starting from $25,000'
      rati,
  n: g: 4.8,revie,
  w: s: 45,downloa,
  d: s: 123,stat,
  u: s: 'popular',ta,
  g: s: ['ComplianceSecurity', 'AuditCertification']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/compliance-audit',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/compliance-audit'
}
    // Data & Analytics;
    {
  id: 'data-warehouse',na,
  m: e: 'Data Warehouse Solution',catego,
  r: y: 'data',ty,
  p: e: 'software',ic,
  o: n: Database,descripti,
  o: n: 'Scalable data warehouse with advanced analytics',featur,
  e: s: [
  'Multi-cloud supportReal-time processing'
        'Advanced analyticsData governance'
        'Security & encryptionAuto-scaling'
]
      pricin,
  g: '$599/month',rati,
  n: g: 4.7,revie,
  w: s: 92,downloa,
  d: s: 345,stat,
  u: s: 'trending',ta,
  g: s: ['Data WarehouseBig Data', 'AnalyticsBusiness Intelligence']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/data-warehouse',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/data-warehouse'
},
  {
  id: 'bi-dashboard',na,
  m: e: 'Business Intelligence Dashboard',catego,
  r: y: 'data',ty,
  p: e: 'software',ic,
  o: n: BarChart3,descripti,
  o: n: 'Interactive BI dashboard for data visualization',featur,
  e: s: [
  'Drag & drop interfaceReal-time data'
        'Custom widgetsMobile responsive'
        'Export capabilitiesCollaboration tools'
]
      pricin,
  g: '$149/month',rati,
  n: g: 4.6,revie,
  w: s: 167,downloa,
  d: s: 789,stat,
  u: s: 'popular',ta,
  g: s: ['Business IntelligenceDashboard', 'Data VisualizationAnalytics']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/bi-dashboard',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/bi-dashboard'
}
    // Development Tools;
    {
  id: 'code-generator',na,
  m: e: 'AI Code Generator',catego,
  r: y: 'development',ty,
  p: e: 'software',ic,
  o: n: Code,descripti,
  o: n: 'AI-powered code generation and assistance tool',featur,
  e: s: [
  'Multi-language supportCode completion'
        'Bug detectionDocumentation generation'
        'Code reviewIntegration with IDEs'
]
      pricin,
  g: '$99/month',rati,
  n: g: 4.8,revie,
  w: s: 234,downloa,
  d: s: 1234,stat,
  u: s: 'trending',ta,
  g: s: ['Code GenerationAI', 'DevelopmentProductivity']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/code-generator',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/code-generator'
},
  {
  id: 'api-gateway',na,
  m: e: 'API Gateway Platform',catego,
  r: y: 'development',ty,
  p: e: 'software',ic,
  o: n: Network,descripti,
  o: n: 'Enterprise API gateway with advanced management features',featur,
  e: s: [
  'Rate limitingAuthentication'
        'Monitoring & analyticsVersion management'
        'DocumentationDeveloper portal'
]
      pricin,
  g: '$299/month',rati,
  n: g: 4.7,revie,
  w: s: 156,downloa,
  d: s: 567,stat,
  u: s: 'featured',ta,
  g: s: ['API GatewayMicroservices', 'API ManagementDeveloper Tools']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/api-gateway',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/api-gateway'
}
    // Hardware & Equipment;
    {
  id: 'edge-computing',na,
  m: e: 'Edge Computing Device',catego,
  r: y: 'hardware',ty,
  p: e: 'hardware',ic,
  o: n: Cpu,descripti,
  o: n: 'High-performance edge computing device for IoT applications',featur,
  e: s: [
  'Intel i7 processor16GB RAM'
        '512GB SSDDual network ports'
        'Industrial grade5-year warranty'
]
      pricin,
  g: '$1,299'
      rati,
  n: g: 4.9,revie,
  w: s: 78,downloa,
  d: s: 234,stat,
  u: s: 'featured',ta,
  g: s: ['Edge ComputingIoT', 'HardwareIndustrial']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/edge-computing',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/edge-computing'
},
  {
  id: 'network-switch',na,
  m: e: 'Enterprise Network Switch',catego,
  r: y: 'hardware',ty,
  p: e: 'hardware',ic,
  o: n: Network,descripti,
  o: n: 'High-speed network switch for enterprise environments',featur,
  e: s: [
  '48-port GigabitPoE+ support'
        'VLAN managementQoS features'
        'SNMP monitoringLifetime warranty'
]
      pricin,
  g: '$899',rati,
  n: g: 4.8,revie,
  w: s: 123,downloa,
  d: s: 456,stat,
  u: s: 'popular',ta,
  g: s: ['NetworkingSwitch', 'EnterprisePoE']
      ima,
  g: e: '/api/placeholder/400/300',de,
  m: o: 'http,
  s://demo.ziontechgroup.com/network-switch',documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/network-switch'
},
  ]
  const featuredItems = marketplaceItems.filter(item => item.status === 'featured')
  const popularItems = marketplaceItems.filter(item => item.status === 'popular')
  const trendingItems = marketplaceItems.filter(item => item.status === 'trending')

  const toggleItemExpansion = (item,
  I: d: string) () => {
  setExpandedItem(expandedItem === itemId ? null : itemId)
  }
  const filteredItems = marketplaceItems.filter(item () => {
  if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (selectedType !== 'all' && item.type !== selectedType) return false;
    if (if (searchQuery) {
  ) {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    return true;
})

  const getCategoryColor = (catego,
  r: y: string) () => {
  switch (category) {
  case 'ai-ml': return 'bg-purple-500/20 text-purple-400'
      case 'cloud': return 'bg-blue-500/20 text-blue-400'
      case 'security': return 'bg-red-500/20 text-red-400'
      case 'data': return 'bg-green-500/20 text-green-400'
      case 'development': return 'bg-orange-500/20 text-orange-400'
      case 'hardware': return 'bg-gray-500/20 text-gray-400'
      defaul,
  t: return 'bg-slate-500/20 text-slate-400'
},
  }
  const getTypeColor = (ty,
  p: e: string) () => {
  switch (type) {
  case 'software': return 'bg-blue-500/20 text-blue-400'
      case 'service': return 'bg-green-500/20 text-green-400'
      case 'hardware': return 'bg-orange-500/20 text-orange-400'
      defaul,
  t: return 'bg-slate-500/20 text-slate-400'
},
  }
  const getStatusColor = (stat,
  u: s: string) () => {
  switch (status) {
  case 'featured': return 'bg-yellow-500/20 text-yellow-400'
      case 'popular': return 'bg-blue-500/20 text-blue-400'
      case 'trending': return 'bg-green-500/20 text-green-400'
      defaul,
  t: return 'bg-slate-500/20 text-slate-400'
},
  }
  const renderStars = (rati,
  n: g: number) () => {
  const stars = [[],
  ]
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0, i < fullStars, i++) {
  stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)
    }
    
    if (if (hasHalfStar) {
  ) {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-current" />)
    }
    
const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0, i < emptyStars, i++) {
  stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-400" />)
    }
    
    return stars;
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="Marketplace - Zion Tech Group"
        description="Discover innovative technology solutions, software, services, and hardware in our comprehensive marketplace. Find the perfect tools for your business needs."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Store className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover innovative solutions, cutting-edge software, professional services;
              and enterprise hardware to accelerate your digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */},
  }
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col,
  l: g:flex-row gap-6 mb-8">
              {/* Search */},
  }
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input;
                    type="text"
                    placeholder="Search marketplace items..."
                    value={searchQuery},
  }
                    onChange={(e) => setSearchQuery(e.target.value)},
  }
                    className="className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                  />
                </div>
              </div>

              {/* Category Filter */},
  }
              <div className="lg:w-48">
                <select;
                  value={selectedCategory},
  }
                  onChange={(e) => setSelectedCategory(e.target.value)},
  }
                  className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                >
                  {categories.map((category) => (
  <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */},
  }
              <div className="lg:w-48">
                <select;
                  value={selectedType},
  }
                  onChange={(e) => setSelectedType(e.target.value)},
  }
                  className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                >
                  {types.map((type) => (
  <option key={type.id} value={type.id}>
                      {type.name} ({type.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */},
  }
              <div className="flex items-center gap-2">
                <button;
                  onClick={onClick={() => setViewMode('grid')},
  },
  }
                  className={`p-2 rounded-lg transition-all duration-200 ${
  viewMode === 'grid' 
                      ? 'bg-green-400/20 text-green-400' 
                      : 'bg-slate-800/50 text-gray-400,
  hove: r:text-white'
}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button;
                  onClick={onClick={() => setViewMode('list')},
  },
  }
                  className={`p-2 rounded-lg transition-all duration-200 ${
  viewMode === 'list' 
                      ? 'bg-green-400/20 text-green-400' 
                      : 'bg-slate-800/50 text-gray-400,
  hove: r:text-white'
}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */},
  }
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>
            <p className="text-xl text-gray-300">Handpicked solutions for enterprise success</p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
  <motion.div;
                key={item.id},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="group";"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50,
  hove: r: border-green-400/50 transition-all duration-300 hove,
  r:scale-105 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {categories.find(c => c.id === item.category)?.name},
  }
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {types.find(t => t.id === item.type)?.name},
  }
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)},
  }
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                        <item.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hov,
  e: r:text-green-400 transition-colors duration-200">
                        {item.name},
  }
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.description},
  }
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        {renderStars(item.rating)},
  }
                        <span className="text-gray-400 ml-1">({item.reviews})</span>
                      </div>
                      <div className="text-gray-400">•</div>
                      <div className="text-gray-400">{item.downloads} downloads</div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-green-400">{item.pricing}</div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400,
  hove: r: text-white transition-colors duration-200">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hove,
  r:text-white transition-colors duration-200">
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
  <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                          {tag},
  }
                        </span>
                      ))}
                    </div>
                    
                    <button;
                      onClick={onClick={() => toggleItemExpansion(item.id)},
  },
  }
                      className="className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-green-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105";"
                    >
                      {expandedItem === item.id ? 'Show Less' : 'Learn More'},
  }
                    </button>
                    
                    {expandedItem === item.id && (
  <motion.div;
                        initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                        animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
                        exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                        transition={ durati,
  o: n: 0.3 },
  }
                        className="className="mt-4 pt-4 border-t border-slate-600/50";"
                      >
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Key,
  Feature: s:</h4>
                          <ul className="space-y-1">
                            {item.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {feature},
  }
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col,
  s: m:flex-row gap-2">
                          <a;
                            href={item.demo},
  }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="className="flex-1 px-3 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-lg,
  hove: r:bg-blue-500/30 transition-all duration-200 text-center";"
                          >
                            <Play className="w-4 h-4 inline mr-1" />
                            Demo;
                          </a>
                          <a;
                            href={item.documentation},
  }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="className="flex-1 px-3 py-2 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-lg,
  hove: r:bg-purple-500/30 transition-all duration-200 text-center";"
                          >
                            <BookOpen className="w-4 h-4 inline mr-1" />
                            Docs;
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Marketplace Items */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Marketplace Items</h2>
            <p className="text-xl text-gray-300">
              Browse our complete collection of technology solutions;
            </p>
          </motion.div>

          {viewMode === 'grid' ? (
  <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-3 x,
  l:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
  <motion.div;
                  key={item.id},
  }
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.05 },
  }
                  className="className="group";"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50,
  hove: r: border-green-400/50 transition-all duration-300 hove,
  r:scale-105 overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {categories.find(c => c.id === item.category)?.name},
  }
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                          {types.find(t => t.id === item.type)?.name},
  }
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg">
                          <item.icon className="w-5 h-5 text-green-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hov,
  e: r:text-green-400 transition-colors duration-200">
                          {item.name},
  }
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">
                        {item.description},
  }
                      </p>
                      
                      <div className="flex items-center gap-2 mb-3 text-xs">
                        <div className="flex items-center gap-1">
                          {renderStars(item.rating)},
  }
                          <span className="text-gray-400">({item.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-lg font-bold text-green-400">{item.pricing}</div>
                        <div className="flex items-center gap-1">
                          <button className="p-1 text-gray-400,
  hove: r: text-white transition-colors duration-200">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hove,
  r:text-white transition-colors duration-200">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.slice(0, 2).map((tag, tagIndex) => (
  <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                            {tag},
  }
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-green-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105 text-sm">
                        View Details;
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
  <div className="space-y-4">
              {filteredItems.map((item, index) => (
  <motion.div;
                  key={item.id},
  }
                  initial={ opaci,
  t: y: 0, x: -20 },
  }
                  whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                  transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.05 },
  }
                  className="className="group";"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50,
  hove: r:border-green-400/50 transition-all duration-300 p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                          <item.icon className="w-8 h-8 text-green-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                            {categories.find(c => c.id === item.category)?.name},
  }
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                            {types.find(t => t.id === item.type)?.name},
  }
                          </span>
                          {item.status !== 'regular' && (
  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                              {item.status.charAt(0).toUpperCase() + item.status.slice(1)},
  }
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white group-hov,
  e: r:text-green-400 transition-colors duration-200 mb-2">
                          {item.name},
  }
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {item.description},
  }
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            {renderStars(item.rating)},
  }
                            <span className="text-gray-400 ml-1">({item.reviews})</span>
                          </div>
                          <div className="text-gray-400">•</div>
                          <div className="text-gray-400">{item.downloads} downloads</div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag, tagIndex) => (
  <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                              {tag},
  }
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 text-right">
                        <div className="text-2xl font-bold text-green-400 mb-3">{item.pricing}</div>
                        <div className="flex items-center gap-2 mb-3">
                          <button className="p-2 text-gray-400,
  hove: r: text-white transition-colors duration-200">
                            <Heart className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-400,
  hove: r:text-white transition-colors duration-200">
                            <Eye className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-400,
  hove: r:text-white transition-colors duration-200">
                            <ShoppingCart className="w-5 h-5" />
                          </button>
                        </div>
                        <button className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-green-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105">
                          View Details;
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can create custom solutions tailored to your specific needs. 
              Let's discuss your requirements and build something amazing together.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-green-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105">
                Request Custom Solution;
              </button>
              <a;
                href="mail,
  t: o:marketplace@ziontechgroup.com"
                className="className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg,
  hove: r:bg-green-400 hove,
  r:text-white transition-all duration-200";"
              >
                Contact Sales Team;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
