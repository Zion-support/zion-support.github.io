import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Atom, 
  Star, 
  Target, 
  TrendingUp, 
  Award, 
  Code, 
  Truck, 
  Building, 
  BarChart3, 
  PenTool, 
  Eye, 
  Server, 
  Smartphone, 
  Database, 
  Network, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Satellite, 
  FileText,
  Zap,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Leaf,
  Sun,
  Wind,
  Droplets,
  Mountain,
  TreePine,
  Recycle,
  Lightbulb,
  Battery,
  Wifi,
  Bluetooth,
  Radio,
  Telescope,
  Microscope,
  FlaskConical,
  TestTube,
  Beaker,
  Pill,
  Stethoscope,
  Syringe,
  HeartPulse,
  Activity,
  Thermometer,
  Droplet,
  EyeOff,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  CreditCard,
  Wallet,
  PiggyBank,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  CandlestickChart,
  GanttChart,
  Kanban,
  Calendar,
  Timer,
  Stopwatch,
  Hourglass,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarClock,
  CalendarHeart,
  CalendarStar,
  CalendarUser,
  CalendarSettings,
  CalendarEdit,
  CalendarTrash,
  CalendarOff,
  CalendarEvent,
  CalendarTime,
  CalendarWeek,
  CalendarMonth,
  CalendarYear,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  ExternalLink,
  Download,
  Upload,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Send,
  Edit,
  Trash2,
  Copy,
  Paste,
  Cut,
  Scissors,
  Paperclip,
  Unlink,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Grid,
  List,
  Filter,
  Settings,
  UserCog,
  UserEdit,
  ShieldAlert,
  ShieldX,
  Unlock,
  Package,
  Calculator,
  UserCheck,
  Signal,
  ShieldCheck,
  Bot,
  CircuitBoard,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Globe as GlobeIcon,
  HardDrive,
  Layers,
  Monitor,
  MousePointer,
  Network as NetworkIcon,
  Server as ServerIcon,
  Smartphone as SmartphoneIcon,
  Tablet,
  Terminal,
  Wifi as WifiIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Rocket as RocketIcon,
  Atom as AtomIcon,
  Leaf as LeafIcon,
  Gamepad2 as Gamepad2Icon,
  Coins,
  Satellite as SatelliteIcon,
  Activity as ActivityIcon,
  MessageCircle as MessageCircleIcon,
  BarChart as BarChartIcon,
  Users2,
  Settings as SettingsIcon,
  Palette as PaletteIcon,
  Target as TargetIcon,
  Handshake,
  Lightbulb as LightbulbIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Play,
  ChevronLeft,
  ChevronRight,
  Heart as HeartIcon,
  X,
  Search,
  Plus,
  Minus,
  Info as InfoIcon,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Calendar as CalendarIcon,
  User,
  Building2,
  TrendingUp as TrendingUpIcon,
  BarChart3 as BarChart3Icon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  ScatterChart as ScatterChartIcon,
  AreaChart as AreaChartIcon,
  CandlestickChart as CandlestickChartIcon,
  GanttChart as GanttChartIcon,
  Kanban as KanbanIcon,
  Timer as TimerIcon,
  Stopwatch as StopwatchIcon,
  Hourglass as HourglassIcon,
  CalendarDays as CalendarDaysIcon,
  CalendarCheck as CalendarCheckIcon,
  CalendarX as CalendarXIcon,
  CalendarPlus as CalendarPlusIcon,
  CalendarMinus as CalendarMinusIcon,
  CalendarRange as CalendarRangeIcon,
  CalendarSearch as CalendarSearchIcon,
  CalendarClock as CalendarClockIcon,
  CalendarHeart as CalendarHeartIcon,
  CalendarStar as CalendarStarIcon,
  CalendarUser as CalendarUserIcon,
  CalendarSettings as CalendarSettingsIcon,
  CalendarEdit as CalendarEditIcon,
  CalendarTrash as CalendarTrashIcon,
  CalendarOff as CalendarOffIcon,
  CalendarEvent as CalendarEventIcon,
  CalendarTime as CalendarTimeIcon,
  CalendarWeek as CalendarWeekIcon,
  CalendarMonth as CalendarMonthIcon,
  CalendarYear as CalendarYearIcon,
  CheckCircle as CheckCircle2Icon,
  XCircle as XCircleIcon,
  AlertCircle as AlertCircleIcon,
  Info as Info2Icon,
  ExternalLink as ExternalLinkIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Share2 as Share2Icon,
  Bookmark as BookmarkIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  MessageSquare as MessageSquareIcon,
  Send as SendIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  Copy as CopyIcon,
  Paste as PasteIcon,
  Cut as CutIcon,
  Scissors as ScissorsIcon,
  Paperclip as PaperclipIcon,
  Unlink as UnlinkIcon,
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  Move as MoveIcon,
  Grid as GridIcon,
  List as ListIcon,
  Filter as FilterIcon,
  Settings as Settings2Icon,
  UserCog as UserCogIcon,
  UserEdit as UserEditIcon,
  ShieldAlert as ShieldAlertIcon,
  ShieldX as ShieldXIcon,
  Unlock as UnlockIcon,
  Package as PackageIcon,
  Calculator as CalculatorIcon,
  UserCheck as UserCheckIcon,
  Signal as SignalIcon,
  ShieldCheck as ShieldCheckIcon,
  Bot as BotIcon,
  CircuitBoard as CircuitBoardIcon,
  Microscope as MicroscopeIcon,
  Flask as FlaskIcon,
  TestTube as TestTubeIcon,
  Beaker as BeakerIcon,
  Pill as PillIcon,
  Stethoscope as StethoscopeIcon,
  Syringe as SyringeIcon,
  HeartPulse as HeartPulseIcon,
  Thermometer as ThermometerIcon,
  Droplet as DropletIcon,
  EyeOff as EyeOffIcon,
  Key as KeyIcon,
  Fingerprint as FingerprintIcon,
  Scan as ScanIcon,
  QrCode as QrCodeIcon,
  CreditCard as CreditCardIcon,
  Wallet as WalletIcon,
  PiggyBank as PiggyBankIcon,
  TrendingDown as TrendingDownIcon
} from 'lucide-react';

export default function ComprehensivePricingGuide2031() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [searchQuery, setSearchQuery] = useState('');

  // Comprehensive Pricing Data 2031
  const pricingData = [
    // AI & Machine Learning Services
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Platform',
      category: 'AI & ML',
      icon: Brain,
      description: 'Advanced AI-powered business analytics and insights platform',
      plans: {
        starter: { price: 1500, monthly: 1500, yearly: 15000, features: ['Basic Analytics', 'Standard Reports', 'Email Support'] },
        professional: { price: 2500, monthly: 2500, yearly: 25000, features: ['Advanced Analytics', 'Custom Reports', 'API Integration', 'Priority Support'] },
        enterprise: { price: 5000, monthly: 5000, yearly: 50000, features: ['Full Platform', 'Custom Development', 'Dedicated Support', 'SLA Guarantee'] }
      },
      marketPrice: 3200,
      savings: '22%',
      roi: '300%',
      implementation: '2-4 weeks',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Automation Suite',
      category: 'AI & ML',
      icon: Shield,
      description: 'Automated compliance monitoring and reporting platform',
      plans: {
        starter: { price: 1200, monthly: 1200, yearly: 12000, features: ['Basic Monitoring', 'Standard Reports', 'Email Support'] },
        professional: { price: 1800, monthly: 1800, yearly: 18000, features: ['Advanced Monitoring', 'Custom Reports', 'API Integration', 'Priority Support'] },
        enterprise: { price: 3500, monthly: 3500, yearly: 35000, features: ['Full Suite', 'Custom Development', 'Dedicated Support', 'SLA Guarantee'] }
      },
      marketPrice: 2400,
      savings: '25%',
      roi: '250%',
      implementation: '3-5 weeks',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot Platform',
      category: 'AI & ML',
      icon: TrendingUp,
      description: 'Intelligent sales automation with lead scoring and insights',
      plans: {
        starter: { price: 1800, monthly: 1800, yearly: 18000, features: ['Basic Automation', 'Lead Scoring', 'Email Support'] },
        professional: { price: 2200, monthly: 2200, yearly: 22000, features: ['Advanced Automation', 'CRM Integration', 'Priority Support'] },
        enterprise: { price: 4500, monthly: 4500, yearly: 45000, features: ['Full Platform', 'Custom Development', 'Dedicated Support', 'SLA Guarantee'] }
      },
      marketPrice: 2800,
      savings: '21%',
      roi: '280%',
      implementation: '2-3 weeks',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },

    // Micro SAAS Services
    {
      id: 'project-management-saas',
      name: 'Project Management Micro SAAS',
      category: 'Micro SAAS',
      icon: Kanban,
      description: 'Lightweight project management for small teams',
      plans: {
        starter: { price: 79, monthly: 79, yearly: 790, features: ['5 Users', 'Basic Features', 'Email Support'] },
        professional: { price: 99, monthly: 99, yearly: 990, features: ['15 Users', 'Advanced Features', 'Priority Support'] },
        enterprise: { price: 199, monthly: 199, yearly: 1990, features: ['Unlimited Users', 'All Features', 'Dedicated Support'] }
      },
      marketPrice: 150,
      savings: '34%',
      roi: '400%',
      implementation: '1-2 weeks',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'inventory-management-saas',
      name: 'Inventory Management System',
      category: 'Micro SAAS',
      icon: Package,
      description: 'Simple inventory tracking for small businesses',
      plans: {
        starter: { price: 59, monthly: 59, yearly: 590, features: ['Basic Tracking', 'Standard Reports', 'Email Support'] },
        professional: { price: 79, monthly: 79, yearly: 790, features: ['Advanced Tracking', 'Custom Reports', 'Priority Support'] },
        enterprise: { price: 149, monthly: 149, yearly: 1490, features: ['Full System', 'Custom Development', 'Dedicated Support'] }
      },
      marketPrice: 120,
      savings: '34%',
      roi: '350%',
      implementation: '1-2 weeks',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'hr-management-saas',
      name: 'HR Management Platform',
      category: 'Micro SAAS',
      icon: Users,
      description: 'Complete HR solution for small to medium businesses',
      plans: {
        starter: { price: 119, monthly: 119, yearly: 1190, features: ['10 Employees', 'Basic HR Tools', 'Email Support'] },
        professional: { price: 149, monthly: 149, yearly: 1490, features: ['50 Employees', 'Advanced Tools', 'Priority Support'] },
        enterprise: { price: 299, monthly: 299, yearly: 2990, features: ['Unlimited Employees', 'All Tools', 'Dedicated Support'] }
      },
      marketPrice: 200,
      savings: '25%',
      roi: '320%',
      implementation: '2-3 weeks',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },

    // IT Infrastructure Services
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      category: 'IT Infrastructure',
      icon: Cloud,
      description: 'Complete cloud migration strategy and implementation',
      plans: {
        starter: { price: 15000, monthly: null, yearly: null, features: ['Basic Migration', 'Data Transfer', 'Email Support'] },
        professional: { price: 25000, monthly: null, yearly: null, features: ['Advanced Migration', 'Application Modernization', 'Priority Support'] },
        enterprise: { price: 50000, monthly: null, yearly: null, features: ['Full Migration', 'Custom Development', 'Dedicated Support', 'SLA Guarantee'] }
      },
      marketPrice: 25000,
      savings: '40%',
      roi: '200%',
      implementation: '8-12 weeks',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'cybersecurity-audit',
      name: 'Cybersecurity Audit & Assessment',
      category: 'IT Infrastructure',
      icon: ShieldCheck,
      description: 'Comprehensive security assessment and vulnerability testing',
      plans: {
        starter: { price: 8500, monthly: null, yearly: null, features: ['Basic Assessment', 'Vulnerability Testing', 'Email Support'] },
        professional: { price: 15000, monthly: null, yearly: null, features: ['Advanced Assessment', 'Penetration Testing', 'Priority Support'] },
        enterprise: { price: 25000, monthly: null, yearly: null, features: ['Full Assessment', 'Custom Testing', 'Dedicated Support', 'SLA Guarantee'] }
      },
      marketPrice: 12000,
      savings: '29%',
      roi: '180%',
      implementation: '4-6 weeks',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      category: 'IT Infrastructure',
      icon: Server,
      description: 'Complete IT management and support for businesses',
      plans: {
        starter: { price: 2500, monthly: 2500, yearly: 25000, features: ['Basic Monitoring', 'Help Desk', 'Email Support'] },
        professional: { price: 3500, monthly: 3500, yearly: 35000, features: ['Advanced Monitoring', 'Proactive Maintenance', 'Priority Support'] },
        enterprise: { price: 6000, monthly: 6000, yearly: 60000, features: ['Full Management', 'Custom Solutions', 'Dedicated Support', 'SLA Guarantee'] }
      },
      marketPrice: 3500,
      savings: '29%',
      roi: '250%',
      implementation: '2-4 weeks',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },

    // Emerging Technology Services
    {
      id: 'blockchain-solutions',
      name: 'Blockchain Development Services',
      category: 'Emerging Tech',
      icon: Link,
      description: 'Custom blockchain solutions for various industries',
      plans: {
        starter: { price: 25000, monthly: null, yearly: null, features: ['Basic Development', 'Smart Contracts', 'Email Support'] },
        professional: { price: 40000, monthly: null, yearly: null, features: ['Advanced Development', 'DApp Development', 'Priority Support'] },
        enterprise: { price: 75000, monthly: null, yearly: null, features: ['Full Platform', 'Custom Development', 'Dedicated Support', 'SLA Guarantee'] }
      },
      marketPrice: 40000,
      savings: '38%',
      roi: '220%',
      implementation: '12-16 weeks',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Consulting',
      category: 'Emerging Tech',
      icon: Atom,
      description: 'Expert guidance on quantum computing applications',
      plans: {
        starter: { price: 35000, monthly: null, yearly: null, features: ['Basic Strategy', 'Algorithm Development', 'Email Support'] },
        professional: { price: 50000, monthly: null, yearly: null, features: ['Advanced Strategy', 'Hardware Selection', 'Priority Support'] },
        enterprise: { price: 100000, monthly: null, yearly: null, features: ['Full Implementation', 'Custom Development', 'Dedicated Support', 'SLA Guarantee'] }
      },
      marketPrice: 50000,
      savings: '30%',
      roi: '180%',
      implementation: '16-20 weeks',
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: pricingData.length },
    { id: 'AI & ML', name: 'AI & Machine Learning', icon: Brain, count: pricingData.filter(s => s.category === 'AI & ML').length },
    { id: 'Micro SAAS', name: 'Micro SAAS Solutions', icon: Rocket, count: pricingData.filter(s => s.category === 'Micro SAAS').length },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: Server, count: pricingData.filter(s => s.category === 'IT Infrastructure').length },
    { id: 'Emerging Tech', name: 'Emerging Technology', icon: Atom, count: pricingData.filter(s => s.category === 'Emerging Tech').length }
  ];

  const filteredServices = pricingData.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const calculatePrice = (service: any, plan: string) => {
    if (plan === 'monthly') {
      return service.plans[plan]?.price || service.plans.starter.price;
    } else if (plan === 'yearly') {
      return service.plans[plan]?.price || service.plans.starter.price * 12;
    }
    return service.plans.starter.price;
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}k`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Comprehensive Pricing
              <span className="block text-zion-cyan">Guide 2031</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
            >
              Transparent pricing for all our innovative services. Compare plans, calculate ROI, and find the perfect solution for your business needs.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us: +1 302 464 0950
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue-dark border-t border-b border-zion-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-zion-slate-light">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Toggle */}
      <div className="bg-zion-blue-dark/50 border-b border-zion-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-blue text-zion-slate-light hover:bg-zion-blue-light'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Pricing Toggle */}
            <div className="flex items-center space-x-4">
              <span className="text-zion-slate-light font-medium">Billing:</span>
              <div className="flex bg-zion-blue rounded-lg p-1">
                <button
                  onClick={() => setSelectedPlan('monthly')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedPlan === 'monthly'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setSelectedPlan('yearly')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedPlan === 'yearly'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="ml-1 text-xs text-green-400">Save 10%</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-zion-blue-dark/30 border-b border-zion-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            />
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-zion-purple/30">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <p className="text-zion-slate-light text-sm">{service.description}</p>
                  </div>
                </div>

                {/* Market Comparison */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {formatPrice(calculatePrice(service, selectedPlan))}
                      <span className="text-sm text-zion-slate-light font-normal">
                        {selectedPlan === 'monthly' ? '/month' : '/year'}
                      </span>
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      Market: {formatPrice(service.marketPrice)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-400">
                      Save {service.savings}
                    </div>
                    <div className="text-sm text-zion-cyan">
                      ROI: {service.roi}
                    </div>
                  </div>
                </div>

                {/* Implementation Time */}
                <div className="flex items-center justify-center space-x-2 text-sm text-zion-slate-light">
                  <Clock className="w-4 h-4" />
                  <span>Implementation: {service.implementation}</span>
                </div>
              </div>

              {/* Pricing Plans */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Pricing Plans</h4>
                <div className="space-y-4">
                  {Object.entries(service.plans).map(([planName, planData]: [string, any]) => (
                    <div key={planName} className="border border-zion-purple/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-sm font-semibold text-zion-cyan capitalize">{planName}</h5>
                        <span className="text-lg font-bold text-white">
                          {planData.monthly !== null ? 
                            `${formatPrice(planData.monthly)}/mo` : 
                            `${formatPrice(planData.price)}`
                          }
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {planData.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center text-xs text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Contact Actions */}
                <div className="mt-6 space-y-3">
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="w-full bg-zion-cyan text-white py-3 px-4 rounded-lg font-semibold text-center hover:bg-zion-cyan-dark transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call for Quote
                  </a>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="w-full bg-zion-blue text-zion-cyan py-3 px-4 rounded-lg font-semibold text-center hover:bg-zion-blue-light transition-colors flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Inquiry
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ROI Calculator Section */}
      <div className="bg-zion-blue-dark border-t border-zion-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ROI Calculator
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Calculate the return on investment for our services and see how they can transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator */}
            <div className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Calculate Your ROI</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">
                    Current Monthly Cost
                  </label>
                  <input
                    type="number"
                    placeholder="Enter current cost"
                    className="w-full px-4 py-2 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">
                    Expected Monthly Savings
                  </label>
                  <input
                    type="number"
                    placeholder="Enter expected savings"
                    className="w-full px-4 py-2 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">
                    Implementation Cost
                  </label>
                  <input
                    type="number"
                    placeholder="Enter implementation cost"
                    className="w-full px-4 py-2 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                </div>
                <button className="w-full bg-zion-cyan text-white py-3 px-4 rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors">
                  Calculate ROI
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">ROI Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">Monthly Savings:</span>
                  <span className="text-green-400 font-bold">$2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">Annual Savings:</span>
                  <span className="text-green-400 font-bold">$30,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">ROI Percentage:</span>
                  <span className="text-zion-cyan font-bold">300%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">Break-even Time:</span>
                  <span className="text-yellow-400 font-bold">3 months</span>
                </div>
                <div className="pt-4 border-t border-zion-purple/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">Total 5-Year Value</div>
                    <div className="text-3xl font-bold text-zion-cyan">$150,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-zion-blue-dark border-t border-zion-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
              Our expert team is ready to help you choose the right plan and implement the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p className="text-sm">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-sm">
                <strong>Website:</strong> <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}