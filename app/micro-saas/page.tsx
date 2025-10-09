import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, 
  BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, 
  DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, 
  FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, 
  Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, 
  Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, 
  Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, 
  Bot, PenTool, Headphones, Mic, Speaker, Volume2, VolumeX, Play as PlayIcon, Pause, 
  Stop, SkipBack, SkipForward, Repeat, Shuffle, Radio, Tv, Monitor, Laptop, Tablet, 
  Watch, Headphones as Headset, Gamepad2 as Gamepad, Joystick, Mouse, Keyboard, 
  Wifi, Bluetooth, Usb, Hdmi, Ethernet, WifiOff, Signal, SignalZero, SignalLow, 
  SignalMedium, SignalHigh, SignalFull, Wifi as WifiIcon, WifiOff as WifiOffIcon,
  Eye as EyeIcon, Ear, Hand, Foot, Fingerprint, Scan, QrCode, Barcode, Tag, Label,
  Send, Reply, Forward, Share, Copy, Paste, Cut, Save, Upload, Refresh, RotateCcw, 
  RotateCw, Maximize, Minimize, X, Plus, Minus, Divide, Equal, Percent, Hash, AtSign, 
  Euro, Pound, Yen, Bitcoin, Wallet, Banknote, Coins, Receipt, Package, Truck, Box, 
  Archive, Folder, Image, Film, Music as MusicIcon, Headphones as Headphone, 
  Mic as Microphone, Speaker as SpeakerIcon, Volume2 as Volume, VolumeX as VolumeOff,
  Play as PlayButton, Pause as PauseButton, Stop as StopButton, SkipBack as SkipBackButton,
  SkipForward as SkipForwardButton, Repeat as RepeatButton, Shuffle as ShuffleButton,
  Radio as RadioIcon, Tv as TvIcon, Monitor as MonitorIcon, Laptop as LaptopIcon,
  Smartphone as PhoneIcon, Tablet as TabletIcon, Watch as WatchIcon, Headphones as HeadsetIcon,
  Gamepad2 as GamepadIcon, Joystick as JoystickIcon, Mouse as MouseIcon, Keyboard as KeyboardIcon,
  Wifi as WifiSignal, Bluetooth as BluetoothIcon, Usb as UsbIcon, Hdmi as HdmiIcon, 
  Ethernet as EthernetIcon, WifiOff as WifiOffSignal, Signal as SignalIcon, 
  SignalZero as Signal0, SignalLow as Signal1, SignalMedium as Signal2, SignalHigh as Signal3,
  SignalFull as Signal4, Wifi as WifiIcon2, WifiOff as WifiOffIcon2, Grid3X3, ShoppingBag,
  ShoppingBasket, Cart, Basket, Bag, Container, Bus, Bike, Scooter, Motorcycle, Van, Taxi,
  Ambulance, FireTruck, PoliceCar, Car as CarIcon, Bus as BusIcon, Train as TrainIcon,
  Plane as PlaneIcon, Ship as ShipIcon, Bike as BikeIcon, Scooter as ScooterIcon,
  Motorcycle as MotorcycleIcon, Van as VanIcon, Truck as TruckIcon, Package as PackageIcon,
  Box as BoxIcon, Container as ContainerIcon, ShoppingCart as ShoppingCartIcon,
  ShoppingBag as ShoppingBagIcon, ShoppingBasket as ShoppingBasketIcon, Cart as CartIcon,
  Basket as BasketIcon, Bag as BagIcon, ThumbsUp, ThumbsDown, AlertCircle, ExclamationTriangle,
  ExclamationCircle, QuestionMarkCircle, Lightbulb, Bulb, Sun, Moon, CloudRain, CloudSnow,
  CloudLightning, Wind, Droplets, Flame, Snowflake, Thunder, Rainbow, Sunrise, Sunset,
  Compass as CompassIcon, Map, Navigation as NavIcon, Route, Home as HomeIcon, Store,
  Warehouse, Hospital, School, University, Church, Mosque, Synagogue, Temple, Bank,
  Receipt as ReceiptIcon, Calculator as CalculatorIcon, PieChart as PieChartIcon,
  LineChart, Activity as ActivityIcon, TrendingDown as TrendingDownIcon, ArrowUp,
  ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, ArrowUpRight, ArrowDownRight,
  ArrowUpLeft, ArrowDownLeft, ArrowUpDown, ArrowLeftRight, ArrowRightLeft, ChevronUp,
  ChevronDown, ChevronLeft, ChevronRight, DoubleChevronUp, DoubleChevronDown,
  DoubleChevronLeft, DoubleChevronRight, ChevronsUp, ChevronsDown, ChevronsLeft,
  ChevronsRight, Move, MoveUp, MoveDown, MoveLeft, MoveRight, RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon, Grid3X3 as GridIcon, ShoppingBag as ShoppingBagIcon,
  ShoppingBasket as ShoppingBasketIcon, Cart as CartIcon, Basket as BasketIcon,
  Bag as BagIcon, Container as ContainerIcon, Bus as BusIcon, Bike as BikeIcon,
  Scooter as ScooterIcon, Motorcycle as MotorcycleIcon, Van as VanIcon, Taxi as TaxiIcon,
  Ambulance as AmbulanceIcon, FireTruck as FireTruckIcon, PoliceCar as PoliceCarIcon,
  Car as CarIcon2, Bus as BusIcon2, Train as TrainIcon2, Plane as PlaneIcon2,
  Ship as ShipIcon2, Bike as BikeIcon2, Scooter as ScooterIcon2, Motorcycle as MotorcycleIcon2,
  Van as VanIcon2, Truck as TruckIcon2, Package as PackageIcon2, Box as BoxIcon2,
  Container as ContainerIcon2, ShoppingCart as ShoppingCartIcon2, ShoppingBag as ShoppingBagIcon2,
  ShoppingBasket as ShoppingBasketIcon2, Cart as CartIcon2, Basket as BasketIcon2,
  Bag as BagIcon2
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = [
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights, predictive analytics, and automated reporting for data-driven decision making.',
      icon: BarChart,
      category: 'analytics',
      pricing: { starting: 199, period: 'month', yearly: 1990, setup: 500 },
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting',
        'Multi-source data integration',
        'Mobile-responsive design',
        'API access'
      ],
      benefits: [
        'Increase decision speed by 300%',
        'Reduce manual reporting by 90%',
        'Improve data accuracy by 95%',
        'Generate 10x more insights'
      ],
      popular: true,
      rating: 4.8,
      users: 12500,
      demo: 'https://demo.ziontechgroup.com/ai-analytics-dashboard',
      docs: 'https://docs.ziontechgroup.com/ai-analytics-dashboard',
      useCases: ['E-commerce', 'SaaS Companies', 'Marketing Agencies', 'Enterprise']
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      description: 'Intelligent customer service automation with natural language processing, multi-channel support, and seamless human handoff.',
      icon: MessageSquare,
      category: 'automation',
      pricing: { starting: 149, period: 'month', yearly: 1490, setup: 300 },
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Human handoff capability',
        'Knowledge base integration',
        'Sentiment analysis',
        'Multi-language support',
        'Custom branding',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce response time by 85%',
        'Handle 20x more inquiries',
        'Improve satisfaction by 60%',
        'Reduce support costs by 70%'
      ],
      popular: true,
      rating: 4.7,
      users: 8900,
      demo: 'https://demo.ziontechgroup.com/ai-customer-support-bot',
      docs: 'https://docs.ziontechgroup.com/ai-customer-support-bot',
      useCases: ['E-commerce', 'SaaS Platforms', 'Healthcare', 'Financial Services']
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, optimal posting times, and engagement optimization.',
      icon: Share,
      category: 'content',
      pricing: { starting: 99, period: 'month', yearly: 990, setup: 200 },
      features: [
        'AI content generation',
        'Optimal posting times',
        'Hashtag optimization',
        'Engagement tracking',
        'Multi-platform posting',
        'Content calendar',
        'Analytics and insights',
        'Brand voice consistency'
      ],
      benefits: [
        'Increase engagement by 250%',
        'Save 15+ hours weekly',
        'Improve reach by 180%',
        'Boost follower growth by 300%'
      ],
      popular: true,
      rating: 4.6,
      users: 15600,
      demo: 'https://demo.ziontechgroup.com/ai-social-media-manager',
      docs: 'https://docs.ziontechgroup.com/ai-social-media-manager',
      useCases: ['Small Businesses', 'Influencers', 'Marketing Agencies', 'E-commerce']
    },
    {
      id: 'ai-email-marketing-suite',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI-powered personalization, A/B testing, and automated campaign optimization.',
      icon: Mail,
      category: 'marketing',
      pricing: { starting: 79, period: 'month', yearly: 790, setup: 150 },
      features: [
        'AI personalization',
        'A/B testing automation',
        'Send time optimization',
        'Subject line generation',
        'Content optimization',
        'Segmentation intelligence',
        'Deliverability monitoring',
        'ROI tracking'
      ],
      benefits: [
        'Increase open rates by 40%',
        'Boost click-through rates by 65%',
        'Improve conversion by 80%',
        'Reduce unsubscribe rates by 50%'
      ],
      popular: true,
      rating: 4.5,
      users: 22100,
      demo: 'https://demo.ziontechgroup.com/ai-email-marketing-suite',
      docs: 'https://docs.ziontechgroup.com/ai-email-marketing-suite',
      useCases: ['E-commerce', 'SaaS Companies', 'Newsletters', 'Marketing Agencies']
    },
    {
      id: 'ai-inventory-management',
      name: 'AI Inventory Management',
      description: 'Smart inventory optimization with demand forecasting, automated reordering, and waste reduction algorithms.',
      icon: Package,
      category: 'operations',
      pricing: { starting: 179, period: 'month', yearly: 1790, setup: 400 },
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Waste reduction',
        'Multi-location tracking',
        'Supplier management',
        'Cost optimization',
        'Real-time alerts',
        'Integration APIs'
      ],
      benefits: [
        'Reduce inventory costs by 35%',
        'Eliminate stockouts by 90%',
        'Reduce waste by 60%',
        'Improve cash flow by 45%'
      ],
      popular: true,
      rating: 4.7,
      users: 6800,
      demo: 'https://demo.ziontechgroup.com/ai-inventory-management',
      docs: 'https://docs.ziontechgroup.com/ai-inventory-management',
      useCases: ['Retail', 'Manufacturing', 'E-commerce', 'Restaurants']
    },
    {
      id: 'ai-lead-scoring-system',
      name: 'AI Lead Scoring System',
      description: 'Intelligent lead qualification with behavioral analysis, predictive scoring, and automated nurturing workflows.',
      icon: Target,
      category: 'sales',
      pricing: { starting: 129, period: 'month', yearly: 1290, setup: 250 },
      features: [
        'Behavioral analysis',
        'Predictive scoring',
        'Automated nurturing',
        'CRM integration',
        'Lead enrichment',
        'Scoring algorithms',
        'Performance tracking',
        'Custom rules engine'
      ],
      benefits: [
        'Improve lead quality by 70%',
        'Increase conversion by 55%',
        'Reduce sales cycle by 40%',
        'Boost revenue by 85%'
      ],
      popular: true,
      rating: 4.6,
      users: 11200,
      demo: 'https://demo.ziontechgroup.com/ai-lead-scoring-system',
      docs: 'https://docs.ziontechgroup.com/ai-lead-scoring-system',
      useCases: ['B2B Sales', 'Real Estate', 'Insurance', 'Financial Services']
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      description: 'Intelligent document analysis with OCR, data extraction, and automated workflow processing for maximum efficiency.',
      icon: FileText,
      category: 'productivity',
      pricing: { starting: 89, period: 'month', yearly: 890, setup: 200 },
      features: [
        'OCR text extraction',
        'Data extraction',
        'Document classification',
        'Workflow automation',
        'Multi-format support',
        'Batch processing',
        'API integration',
        'Compliance checking'
      ],
      benefits: [
        'Process documents 15x faster',
        'Reduce errors by 98%',
        'Save 25+ hours weekly',
        'Improve accuracy by 95%'
      ],
      popular: true,
      rating: 4.8,
      users: 9800,
      demo: 'https://demo.ziontechgroup.com/ai-document-processor',
      docs: 'https://docs.ziontechgroup.com/ai-document-processor',
      useCases: ['Legal Firms', 'Accounting', 'Insurance', 'Healthcare']
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Automated SEO optimization with keyword research, content analysis, and technical SEO recommendations.',
      icon: Search,
      category: 'marketing',
      pricing: { starting: 69, period: 'month', yearly: 690, setup: 100 },
      features: [
        'Keyword research',
        'Content optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Rank tracking',
        'Link building suggestions',
        'Performance monitoring',
        'Automated reports'
      ],
      benefits: [
        'Increase organic traffic by 200%',
        'Improve rankings by 150%',
        'Save 20+ hours monthly',
        'Boost conversion by 60%'
      ],
      popular: true,
      rating: 4.5,
      users: 18700,
      demo: 'https://demo.ziontechgroup.com/ai-seo-optimizer',
      docs: 'https://docs.ziontechgroup.com/ai-seo-optimizer',
      useCases: ['Blogs', 'E-commerce', 'Local Business', 'Agencies']
    },
    {
      id: 'ai-appointment-scheduler',
      name: 'AI Appointment Scheduler',
      description: 'Smart scheduling system with availability optimization, automated reminders, and calendar integration.',
      icon: Calendar,
      category: 'productivity',
      pricing: { starting: 49, period: 'month', yearly: 490, setup: 100 },
      features: [
        'Smart scheduling',
        'Automated reminders',
        'Calendar integration',
        'Time zone handling',
        'Buffer time management',
        'Recurring appointments',
        'Payment processing',
        'Custom branding'
      ],
      benefits: [
        'Reduce no-shows by 60%',
        'Save 10+ hours weekly',
        'Improve booking rates by 80%',
        'Enhance customer experience'
      ],
      popular: true,
      rating: 4.7,
      users: 25600,
      demo: 'https://demo.ziontechgroup.com/ai-appointment-scheduler',
      docs: 'https://docs.ziontechgroup.com/ai-appointment-scheduler',
      useCases: ['Healthcare', 'Consulting', 'Beauty Services', 'Fitness']
    },
    {
      id: 'ai-chat-analytics',
      name: 'AI Chat Analytics',
      description: 'Advanced conversation analysis with sentiment tracking, performance metrics, and actionable insights.',
      icon: MessageSquare,
      category: 'analytics',
      pricing: { starting: 79, period: 'month', yearly: 790, setup: 150 },
      features: [
        'Sentiment analysis',
        'Performance metrics',
        'Conversation insights',
        'Agent scoring',
        'Trend analysis',
        'Custom dashboards',
        'Real-time monitoring',
        'Export capabilities'
      ],
      benefits: [
        'Improve customer satisfaction by 45%',
        'Identify training needs',
        'Optimize response strategies',
        'Increase resolution rates by 65%'
      ],
      popular: false,
      rating: 4.4,
      users: 4200,
      demo: 'https://demo.ziontechgroup.com/ai-chat-analytics',
      docs: 'https://docs.ziontechgroup.com/ai-chat-analytics',
      useCases: ['Customer Support', 'Sales Teams', 'Call Centers', 'E-commerce']
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Intelligent expense management with receipt scanning, categorization, and automated reporting.',
      icon: Calculator,
      category: 'finance',
      pricing: { starting: 39, period: 'month', yearly: 390, setup: 50 },
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Expense approval workflows',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support',
        'Mobile app',
        'Integration APIs'
      ],
      benefits: [
        'Save 8+ hours monthly',
        'Reduce errors by 90%',
        'Improve compliance by 100%',
        'Streamline reimbursements'
      ],
      popular: true,
      rating: 4.6,
      users: 18900,
      demo: 'https://demo.ziontechgroup.com/ai-expense-tracker',
      docs: 'https://docs.ziontechgroup.com/ai-expense-tracker',
      useCases: ['Small Business', 'Freelancers', 'Consultants', 'Remote Teams']
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'AI-powered content creation with multiple formats, brand voice consistency, and SEO optimization.',
      icon: PenTool,
      category: 'content',
      pricing: { starting: 59, period: 'month', yearly: 590, setup: 100 },
      features: [
        'Multi-format content',
        'Brand voice training',
        'SEO optimization',
        'Plagiarism checking',
        'Tone adjustment',
        'Language translation',
        'Content templates',
        'Collaboration tools'
      ],
      benefits: [
        'Create content 10x faster',
        'Reduce costs by 70%',
        'Improve quality by 85%',
        'Scale content production'
      ],
      popular: true,
      rating: 4.5,
      users: 22300,
      demo: 'https://demo.ziontechgroup.com/ai-content-generator',
      docs: 'https://docs.ziontechgroup.com/ai-content-generator',
      useCases: ['Marketing', 'Blogs', 'Social Media', 'E-commerce']
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with resource optimization, risk prediction, and automated task assignment.',
      icon: Briefcase,
      category: 'productivity',
      pricing: { starting: 149, period: 'month', yearly: 1490, setup: 300 },
      features: [
        'Resource optimization',
        'Risk prediction',
        'Task automation',
        'Progress tracking',
        'Team collaboration',
        'Timeline optimization',
        'Budget management',
        'Integration capabilities'
      ],
      benefits: [
        'Complete projects 30% faster',
        'Reduce project risks by 70%',
        'Improve team efficiency by 50%',
        'Better resource allocation'
      ],
      popular: true,
      rating: 4.7,
      users: 7600,
      demo: 'https://demo.ziontechgroup.com/ai-project-manager',
      docs: 'https://docs.ziontechgroup.com/ai-project-manager',
      useCases: ['Agencies', 'Consulting', 'Software Development', 'Construction']
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Custom voice assistant with natural language processing, multi-language support, and business integration.',
      icon: Mic,
      category: 'automation',
      pricing: { starting: 199, period: 'month', yearly: 1990, setup: 500 },
      features: [
        'Natural language processing',
        'Multi-language support',
        'Custom voice training',
        'Business integration',
        'API access',
        'Analytics dashboard',
        'Custom commands',
        'Mobile app'
      ],
      benefits: [
        'Improve accessibility by 100%',
        'Reduce manual tasks by 60%',
        'Enhance user experience',
        'Increase productivity by 40%'
      ],
      popular: false,
      rating: 4.6,
      users: 3200,
      demo: 'https://demo.ziontechgroup.com/ai-voice-assistant',
      docs: 'https://docs.ziontechgroup.com/ai-voice-assistant',
      useCases: ['Healthcare', 'Accessibility', 'Customer Service', 'Smart Homes']
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization',
      description: 'Intelligent data visualization with automated chart generation, interactive dashboards, and storytelling features.',
      icon: PieChart,
      category: 'analytics',
      pricing: { starting: 119, period: 'month', yearly: 1190, setup: 250 },
      features: [
        'Automated chart generation',
        'Interactive dashboards',
        'Data storytelling',
        'Real-time updates',
        'Custom templates',
        'Export capabilities',
        'Collaboration tools',
        'Mobile responsive'
      ],
      benefits: [
        'Create visualizations 5x faster',
        'Improve data comprehension by 80%',
        'Reduce design time by 70%',
        'Enhance decision making'
      ],
      popular: true,
      rating: 4.5,
      users: 9800,
      demo: 'https://demo.ziontechgroup.com/ai-data-visualization',
      docs: 'https://docs.ziontechgroup.com/ai-data-visualization',
      useCases: ['Business Intelligence', 'Marketing', 'Finance', 'Research']
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent workflow automation with process optimization, error handling, and continuous improvement.',
      icon: Settings,
      category: 'automation',
      pricing: { starting: 179, period: 'month', yearly: 1790, setup: 400 },
      features: [
        'Process optimization',
        'Error handling',
        'Continuous improvement',
        'Integration capabilities',
        'Custom workflows',
        'Performance monitoring',
        'User management',
        'Analytics dashboard'
      ],
      benefits: [
        'Automate 80% of processes',
        'Reduce errors by 95%',
        'Save 30+ hours weekly',
        'Improve efficiency by 200%'
      ],
      popular: true,
      rating: 4.8,
      users: 5400,
      demo: 'https://demo.ziontechgroup.com/ai-workflow-automation',
      docs: 'https://docs.ziontechgroup.com/ai-workflow-automation',
      useCases: ['Operations', 'Finance', 'HR', 'Customer Service']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: microSAASServices.length },
    { id: 'analytics', name: 'Analytics', icon: BarChart, count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'automation', name: 'Automation', icon: Zap, count: microSAASServices.filter(s => s.category === 'automation').length },
    { id: 'content', name: 'Content', icon: FileText, count: microSAASServices.filter(s => s.category === 'content').length },
    { id: 'marketing', name: 'Marketing', icon: Target, count: microSAASServices.filter(s => s.category === 'marketing').length },
    { id: 'productivity', name: 'Productivity', icon: Briefcase, count: microSAASServices.filter(s => s.category === 'productivity').length },
    { id: 'sales', name: 'Sales', icon: TrendingUp, count: microSAASServices.filter(s => s.category === 'sales').length },
    { id: 'operations', name: 'Operations', icon: Settings, count: microSAASServices.filter(s => s.category === 'operations').length },
    { id: 'finance', name: 'Finance', icon: DollarSign, count: microSAASServices.filter(s => s.category === 'finance').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'popularity':
        filtered = filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.pricing.starting - b.pricing.starting);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.pricing.starting - a.pricing.starting);
        break;
      case 'users':
        filtered = filtered.sort((a, b) => b.users - a.users);
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const totalValue = microSAASServices.reduce((total, service) => {
    return total + service.pricing.yearly;
  }, 0);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro SaaS solutions. From analytics dashboards to workflow automation, boost your business efficiency with intelligent tools." />
        <meta name="keywords" content="micro saas, ai tools, business automation, analytics dashboard, customer support, email marketing, inventory management" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Header />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              AI-Powered Business Tools for Maximum Efficiency
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SaaS solutions. 
              From analytics dashboards to workflow automation, our intelligent tools help you work smarter, not harder.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">16+ Tools</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">AI-powered micro SaaS solutions</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">💰</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">$25K+ Value</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Total value of micro SaaS portfolio</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">200K+ Users</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Active users across all tools</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">4.6 Avg Rating</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Customer satisfaction rating</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Consultation
              </a>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="mb-12">
            <div className="cyber-card hologram-card p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="users">Most Users</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                        {service.popular && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">${service.pricing.starting}</div>
                      <div className="text-sm text-gray-400">/{service.pricing.period}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-sm text-cyan-400">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{service.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{(service.users / 1000).toFixed(1)}K</div>
                      <div className="text-xs text-gray-400">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">${service.pricing.yearly}</div>
                      <div className="text-xs text-gray-400">Yearly</div>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Ideal for:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.useCases.map((useCase, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <a
                      href={service.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                    >
                      <Play className="w-4 h-4 inline mr-2" />
                      Demo
                    </a>
                    <a
                      href={service.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-all text-center"
                    >
                      <FileText className="w-4 h-4 inline mr-2" />
                      Docs
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center mb-16">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Get started with our micro SaaS solutions today and experience the power of AI-driven business automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button w-full sm:w-auto text-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;