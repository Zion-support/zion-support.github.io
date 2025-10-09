import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Globe, 
  Brain, 
  Cpu, 
  Target, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Code,
  Database,
  Cloud,
  Smartphone,
  FileText,
  Image,
  Video,
  Music,
  Settings,
  Lock,
  DollarSign,
  Award,
  Rocket,
  Heart,
  ShoppingCart,
  Calendar,
  Camera,
  Headphones,
  Printer,
  Wrench,
  Activity,
  Layers,
  Workflow,
  Mic,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bookmark,
  Flag,
  Bell,
  Gift,
  CreditCard,
  PieChart,
  LineChart,
  Scissors,
  Palette,
  Brush,
  Wand2,
  Lightbulb,
  Puzzle,
  Gamepad2,
  Car,
  Home,
  Plane,
  Train,
  Ship,
  Bike,
  Coffee,
  Utensils,
  Shirt,
  Shoe,
  Watch,
  Laptop,
  Monitor,
  Tablet,
  Mouse,
  Keyboard,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  Plug,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  Umbrella,
  TreePine,
  Flower,
  Leaf,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  PawPrint,
  Baby,
  Child,
  User,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  Users2,
  UserCog,
  Crown,
  Gem,
  Diamond,
  StarHalf,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  HeartHandshake,
  Handshake,
  Hand,
  Fingerprint,
  QrCode,
  Barcode,
  Tag,
  Tags,
  Hash,
  AtSign,
  Percent,
  Plus,
  Minus,
  X,
  Divide,
  Equal,
  Infinity,
  Pi,
  Sigma,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Omega,
  Check,
  XCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  QuestionMarkCircle,
  ExclamationTriangle,
  Ban,
  LockKeyhole,
  Unlock,
  Key,
  KeyRound,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  ShieldQuestion,
  EyeOff,
  EyeCheck,
  SearchX,
  SearchCheck,
  FilterX,
  SortAsc,
  SortDesc,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  RotateCcw,
  RotateCw,
  RefreshCw,
  RefreshCcw,
  Repeat,
  Repeat1,
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Stop,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  SquareDot,
  CircleDot,
  TriangleDot,
  HexagonDot,
  OctagonDot,
  PentagonDot,
  SquareCheck,
  CircleCheck,
  TriangleCheck,
  HexagonCheck,
  OctagonCheck,
  PentagonCheck,
  SquareX,
  CircleX,
  TriangleX,
  HexagonX,
  OctagonX,
  PentagonX,
  SquarePlus,
  CirclePlus,
  TrianglePlus,
  HexagonPlus,
  OctagonPlus,
  PentagonPlus,
  SquareMinus,
  CircleMinus,
  TriangleMinus,
  HexagonMinus,
  OctagonMinus,
  PentagonMinus,
  SquareEqual,
  CircleEqual,
  TriangleEqual,
  HexagonEqual,
  OctagonEqual,
  PentagonEqual,
  SquareQuestion,
  CircleQuestion,
  TriangleQuestion,
  HexagonQuestion,
  OctagonQuestion,
  PentagonQuestion,
  SquareAlert,
  CircleAlert,
  TriangleAlert,
  HexagonAlert,
  OctagonAlert,
  PentagonAlert,
  SquareInfo,
  CircleInfo,
  TriangleInfo,
  HexagonInfo,
  OctagonInfo,
  PentagonInfo,
  SquareHelp,
  CircleHelp,
  TriangleHelp,
  HexagonHelp,
  OctagonHelp,
  PentagonHelp,
  SquareBan,
  CircleBan,
  TriangleBan,
  HexagonBan,
  OctagonBan,
  PentagonBan,
  SquareLock,
  CircleLock,
  TriangleLock,
  HexagonLock,
  OctagonLock,
  PentagonLock,
  SquareUnlock,
  CircleUnlock,
  TriangleUnlock,
  HexagonUnlock,
  OctagonUnlock,
  PentagonUnlock,
  SquareShield,
  CircleShield,
  TriangleShield,
  HexagonShield,
  OctagonShield,
  PentagonShield,
  SquareEye,
  CircleEye,
  TriangleEye,
  HexagonEye,
  OctagonEye,
  PentagonEye,
  SquareEyeOff,
  CircleEyeOff,
  TriangleEyeOff,
  HexagonEyeOff,
  OctagonEyeOff,
  PentagonEyeOff,
  SquareSearch,
  CircleSearch,
  TriangleSearch,
  HexagonSearch,
  OctagonSearch,
  PentagonSearch,
  SquareFilter,
  CircleFilter,
  TriangleFilter,
  HexagonFilter,
  OctagonFilter,
  PentagonFilter,
  SquareSort,
  CircleSort,
  TriangleSort,
  HexagonSort,
  OctagonSort,
  PentagonSort,
  SquareArrow,
  CircleArrow,
  TriangleArrow,
  HexagonArrow,
  OctagonArrow,
  PentagonArrow,
  SquareChevron,
  CircleChevron,
  TriangleChevron,
  HexagonChevron,
  OctagonChevron,
  PentagonChevron,
  SquareRotate,
  CircleRotate,
  TriangleRotate,
  HexagonRotate,
  OctagonRotate,
  PentagonRotate,
  SquareRefresh,
  CircleRefresh,
  TriangleRefresh,
  HexagonRefresh,
  OctagonRefresh,
  PentagonRefresh,
  SquareRepeat,
  CircleRepeat,
  TriangleRepeat,
  HexagonRepeat,
  OctagonRepeat,
  PentagonRepeat,
  SquareShuffle,
  CircleShuffle,
  TriangleShuffle,
  HexagonShuffle,
  OctagonShuffle,
  PentagonShuffle,
  SquareSkip,
  CircleSkip,
  TriangleSkip,
  HexagonSkip,
  OctagonSkip,
  PentagonSkip,
  SquarePlay,
  CirclePlay,
  TrianglePlay,
  HexagonPlay,
  OctagonPlay,
  PentagonPlay,
  SquarePause,
  CirclePause,
  TrianglePause,
  HexagonPause,
  OctagonPause,
  PentagonPause,
  SquareStop,
  CircleStop,
  TriangleStop,
  HexagonStop,
  OctagonStop,
  PentagonStop,
  SquareSquare,
  CircleSquare,
  TriangleSquare,
  HexagonSquare,
  OctagonSquare,
  PentagonSquare,
  SquareCircle,
  CircleCircle,
  TriangleCircle,
  HexagonCircle,
  OctagonCircle,
  PentagonCircle,
  SquareTriangle,
  CircleTriangle,
  TriangleTriangle,
  HexagonTriangle,
  OctagonTriangle,
  PentagonTriangle,
  SquareHexagon,
  CircleHexagon,
  TriangleHexagon,
  HexagonHexagon,
  OctagonHexagon,
  PentagonHexagon,
  SquareOctagon,
  CircleOctagon,
  TriangleOctagon,
  HexagonOctagon,
  OctagonOctagon,
  PentagonOctagon,
  SquarePentagon,
  CirclePentagon,
  TrianglePentagon,
  HexagonPentagon,
  OctagonPentagon,
  PentagonPentagon
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSAASServices = [
    // AI-Powered Tools
    {
      id: 'ai-content-writer',
      name: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, and marketing copy in seconds.',
      icon: FileText,
      price: 29,
      period: 'month',
      features: [
        'Generate 1000+ word articles',
        'SEO-optimized content',
        'Multiple writing styles',
        'Plagiarism detection',
        'Content templates',
        'Multi-language support',
        'Brand voice training',
        'Content scheduling'
      ],
      category: 'AI Tools',
      popular: true,
      savings: '$500/month vs content writers',
      marketPrice: '$99/month',
      technologies: ['GPT-4', 'Claude', 'Custom AI Models'],
      benefits: 'Create 10x more content in 1/10th the time',
      rating: 4.9,
      clients: '2,500+',
      demoUrl: 'https://ziontechgroup.com/ai-content-writer',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator Studio',
      description: 'Professional AI image creation tool for marketing, social media, and creative projects with advanced editing capabilities.',
      icon: Image,
      price: 39,
      period: 'month',
      features: [
        'Generate unlimited images',
        'High-resolution output (4K)',
        'Style transfer & filters',
        'Background removal',
        'Object replacement',
        'Text-to-image generation',
        'Batch processing',
        'Commercial license included'
      ],
      category: 'AI Tools',
      popular: true,
      savings: '$800/month vs graphic designers',
      marketPrice: '$149/month',
      technologies: ['DALL-E 3', 'Midjourney', 'Stable Diffusion'],
      benefits: 'Create professional images without design skills',
      rating: 4.8,
      clients: '1,800+',
      demoUrl: 'https://ziontechgroup.com/ai-image-generator',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-video-creator',
      name: 'AI Video Creator Pro',
      description: 'Revolutionary AI video creation platform that transforms text, images, and audio into engaging video content.',
      icon: Video,
      price: 79,
      period: 'month',
      features: [
        'Text-to-video generation',
        'Auto voiceover creation',
        'Smart video editing',
        'Template library (1000+)',
        'Multi-format export',
        'Social media optimization',
        'Brand customization',
        'Collaboration tools'
      ],
      category: 'AI Tools',
      popular: false,
      savings: '$2,000/month vs video production',
      marketPrice: '$299/month',
      technologies: ['Runway ML', 'Synthesia', 'Custom Video AI'],
      benefits: 'Create professional videos in minutes, not days',
      rating: 4.7,
      clients: '950+',
      demoUrl: 'https://ziontechgroup.com/ai-video-creator',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant Pro',
      description: 'Intelligent coding companion that helps developers write, debug, and optimize code across multiple programming languages.',
      icon: Code,
      price: 49,
      period: 'month',
      features: [
        'Code generation & completion',
        'Bug detection & fixing',
        'Code optimization',
        'Documentation generation',
        'Multi-language support',
        'IDE integration',
        'Code review assistance',
        'Security vulnerability scanning'
      ],
      category: 'Developer Tools',
      popular: true,
      savings: '$3,000/month vs senior developers',
      marketPrice: '$199/month',
      technologies: ['GitHub Copilot', 'CodeT5', 'Custom Code AI'],
      benefits: 'Write code 5x faster with AI assistance',
      rating: 4.9,
      clients: '3,200+',
      demoUrl: 'https://ziontechgroup.com/ai-code-assistant',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      description: 'No-code AI chatbot creation platform that builds intelligent conversational agents for customer service and sales.',
      icon: MessageSquare,
      price: 59,
      period: 'month',
      features: [
        'Drag-and-drop builder',
        'Multi-channel deployment',
        'Natural language processing',
        'Integration APIs',
        'Analytics dashboard',
        'A/B testing',
        'Human handoff',
        'Custom training'
      ],
      category: 'AI Tools',
      popular: false,
      savings: '$1,500/month vs chatbot developers',
      marketPrice: '$199/month',
      technologies: ['OpenAI GPT', 'Dialogflow', 'Custom NLP'],
      benefits: 'Build and deploy chatbots without coding',
      rating: 4.6,
      clients: '1,400+',
      demoUrl: 'https://ziontechgroup.com/ai-chatbot-builder',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Business Productivity Tools
    {
      id: 'smart-scheduler',
      name: 'Smart Scheduler Pro',
      description: 'Intelligent scheduling and calendar management tool that optimizes meetings and automates appointment booking.',
      icon: Calendar,
      price: 19,
      period: 'month',
      features: [
        'AI-powered scheduling',
        'Time zone management',
        'Meeting optimization',
        'Automated reminders',
        'Integration with all calendars',
        'Conflict resolution',
        'Recurring events',
        'Team scheduling'
      ],
      category: 'Productivity',
      popular: true,
      savings: '$300/month vs scheduling assistants',
      marketPrice: '$79/month',
      technologies: ['AI Scheduling', 'Calendar APIs', 'Machine Learning'],
      benefits: 'Save 10+ hours per week on scheduling',
      rating: 4.8,
      clients: '4,100+',
      demoUrl: 'https://ziontechgroup.com/smart-scheduler',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'email-automation',
      name: 'Email Automation Suite',
      description: 'Advanced email marketing and automation platform with AI-powered personalization and campaign optimization.',
      icon: Mail,
      price: 39,
      period: 'month',
      features: [
        'AI email writing',
        'Automated sequences',
        'Behavioral triggers',
        'A/B testing',
        'Personalization engine',
        'Deliverability optimization',
        'Analytics & reporting',
        'Template library'
      ],
      category: 'Marketing',
      popular: true,
      savings: '$800/month vs email marketing tools',
      marketPrice: '$149/month',
      technologies: ['AI Personalization', 'Email APIs', 'Machine Learning'],
      benefits: 'Increase email engagement by 300%',
      rating: 4.7,
      clients: '2,800+',
      demoUrl: 'https://ziontechgroup.com/email-automation',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Comprehensive social media management platform with AI-powered content creation, scheduling, and analytics.',
      icon: Share,
      price: 49,
      period: 'month',
      features: [
        'AI content generation',
        'Multi-platform posting',
        'Optimal timing analysis',
        'Hashtag optimization',
        'Engagement tracking',
        'Competitor analysis',
        'Influencer discovery',
        'ROI measurement'
      ],
      category: 'Marketing',
      popular: false,
      savings: '$1,200/month vs social media managers',
      marketPrice: '$199/month',
      technologies: ['AI Content', 'Social APIs', 'Analytics AI'],
      benefits: 'Manage all social media accounts from one platform',
      rating: 4.6,
      clients: '2,200+',
      demoUrl: 'https://ziontechgroup.com/social-media-manager',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'crm-ai',
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management system with AI insights, lead scoring, and automated follow-ups.',
      icon: Users,
      price: 69,
      period: 'month',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Predictive analytics',
        'Sales forecasting',
        'Customer insights',
        'Pipeline management',
        'Integration ecosystem',
        'Mobile app'
      ],
      category: 'Sales',
      popular: true,
      savings: '$1,500/month vs traditional CRM',
      marketPrice: '$299/month',
      technologies: ['AI Analytics', 'Machine Learning', 'CRM APIs'],
      benefits: 'Increase sales by 40% with AI insights',
      rating: 4.8,
      clients: '1,900+',
      demoUrl: 'https://ziontechgroup.com/crm-ai',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'inventory-manager',
      name: 'Smart Inventory Manager',
      description: 'AI-powered inventory management system with demand forecasting, automated reordering, and cost optimization.',
      icon: Package,
      price: 59,
      period: 'month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Cost optimization',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Analytics dashboard',
        'Mobile app'
      ],
      category: 'Operations',
      popular: false,
      savings: '$2,000/month vs inventory consultants',
      marketPrice: '$199/month',
      technologies: ['AI Forecasting', 'Inventory APIs', 'Machine Learning'],
      benefits: 'Reduce inventory costs by 30%',
      rating: 4.7,
      clients: '1,600+',
      demoUrl: 'https://ziontechgroup.com/inventory-manager',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Analytics & Data Tools
    {
      id: 'business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Advanced business intelligence platform with AI-powered insights, automated reporting, and predictive analytics.',
      icon: BarChart,
      price: 79,
      period: 'month',
      features: [
        'AI-powered insights',
        'Automated reporting',
        'Predictive analytics',
        'Custom dashboards',
        'Data visualization',
        'Real-time monitoring',
        'Alert system',
        'Export capabilities'
      ],
      category: 'Analytics',
      popular: true,
      savings: '$3,000/month vs data analysts',
      marketPrice: '$399/month',
      technologies: ['AI Analytics', 'Machine Learning', 'Data Visualization'],
      benefits: 'Get actionable insights from your data automatically',
      rating: 4.9,
      clients: '1,700+',
      demoUrl: 'https://ziontechgroup.com/business-intelligence',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Comprehensive SEO optimization tool that analyzes, optimizes, and monitors website performance with AI recommendations.',
      icon: Search,
      price: 39,
      period: 'month',
      features: [
        'AI keyword research',
        'Content optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Rank tracking',
        'Link building suggestions',
        'Performance monitoring',
        'Automated reports'
      ],
      category: 'Marketing',
      popular: false,
      savings: '$1,000/month vs SEO specialists',
      marketPrice: '$149/month',
      technologies: ['AI SEO', 'Search APIs', 'Machine Learning'],
      benefits: 'Improve search rankings by 200%',
      rating: 4.6,
      clients: '2,300+',
      demoUrl: 'https://ziontechgroup.com/seo-optimizer',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'data-scraper',
      name: 'AI Data Scraper Pro',
      description: 'Intelligent web scraping tool that extracts, cleans, and structures data from any website with advanced AI capabilities.',
      icon: Database,
      price: 49,
      period: 'month',
      features: [
        'AI-powered extraction',
        'Data cleaning & validation',
        'Scheduled scraping',
        'Proxy rotation',
        'CAPTCHA solving',
        'Data export formats',
        'API integration',
        'Compliance tools'
      ],
      category: 'Data Tools',
      popular: false,
      savings: '$800/month vs data extraction services',
      marketPrice: '$199/month',
      technologies: ['AI Scraping', 'Web APIs', 'Data Processing'],
      benefits: 'Extract data from any website automatically',
      rating: 4.5,
      clients: '1,100+',
      demoUrl: 'https://ziontechgroup.com/data-scraper',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Creative & Design Tools
    {
      id: 'logo-generator',
      name: 'AI Logo Generator',
      description: 'Professional logo creation tool powered by AI that generates unique, high-quality logos for any business or brand.',
      icon: Palette,
      price: 29,
      period: 'month',
      features: [
        'AI logo generation',
        'Multiple style options',
        'High-resolution output',
        'Vector format support',
        'Brand guidelines',
        'Color palette suggestions',
        'Font recommendations',
        'Commercial license'
      ],
      category: 'Design',
      popular: true,
      savings: '$500/month vs logo designers',
      marketPrice: '$99/month',
      technologies: ['AI Design', 'Vector Graphics', 'Brand AI'],
      benefits: 'Create professional logos in minutes',
      rating: 4.7,
      clients: '3,500+',
      demoUrl: 'https://ziontechgroup.com/logo-generator',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'presentation-maker',
      name: 'AI Presentation Maker',
      description: 'Intelligent presentation creation tool that generates professional slides with AI-powered design and content suggestions.',
      icon: Presentation,
      price: 39,
      period: 'month',
      features: [
        'AI slide generation',
        'Design templates',
        'Content optimization',
        'Chart & graph creation',
        'Animation effects',
        'Collaboration tools',
        'Export options',
        'Brand customization'
      ],
      category: 'Design',
      popular: false,
      savings: '$600/month vs presentation designers',
      marketPrice: '$149/month',
      technologies: ['AI Design', 'Presentation APIs', 'Content AI'],
      benefits: 'Create stunning presentations in minutes',
      rating: 4.6,
      clients: '2,100+',
      demoUrl: 'https://ziontechgroup.com/presentation-maker',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'voice-cloner',
      name: 'AI Voice Cloner',
      description: 'Advanced voice synthesis technology that creates realistic voice clones for audio content, presentations, and accessibility.',
      icon: Mic,
      price: 79,
      period: 'month',
      features: [
        'Voice cloning technology',
        'Text-to-speech synthesis',
        'Emotion control',
        'Multiple languages',
        'High-quality audio',
        'Real-time processing',
        'Voice customization',
        'Commercial license'
      ],
      category: 'AI Tools',
      popular: false,
      savings: '$1,500/month vs voice actors',
      marketPrice: '$299/month',
      technologies: ['Voice AI', 'Speech Synthesis', 'Neural Networks'],
      benefits: 'Create professional voice content without recording',
      rating: 4.8,
      clients: '1,300+',
      demoUrl: 'https://ziontechgroup.com/voice-cloner',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // E-commerce & Sales Tools
    {
      id: 'product-descriptions',
      name: 'AI Product Description Generator',
      description: 'Automated product description generator that creates compelling, SEO-optimized descriptions for e-commerce products.',
      icon: ShoppingCart,
      price: 19,
      period: 'month',
      features: [
        'AI-generated descriptions',
        'SEO optimization',
        'Multiple variations',
        'Bulk processing',
        'Template library',
        'Language translation',
        'A/B testing',
        'Performance tracking'
      ],
      category: 'E-commerce',
      popular: true,
      savings: '$400/month vs copywriters',
      marketPrice: '$79/month',
      technologies: ['AI Writing', 'E-commerce APIs', 'SEO AI'],
      benefits: 'Generate product descriptions 10x faster',
      rating: 4.7,
      clients: '4,200+',
      demoUrl: 'https://ziontechgroup.com/product-descriptions',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'pricing-optimizer',
      name: 'AI Pricing Optimizer',
      description: 'Intelligent pricing optimization tool that analyzes market data and customer behavior to suggest optimal pricing strategies.',
      icon: DollarSign,
      price: 59,
      period: 'month',
      features: [
        'Dynamic pricing analysis',
        'Competitor monitoring',
        'Demand forecasting',
        'Price elasticity modeling',
        'A/B testing',
        'Revenue optimization',
        'Market insights',
        'Automated adjustments'
      ],
      category: 'E-commerce',
      popular: false,
      savings: '$2,500/month vs pricing consultants',
      marketPrice: '$299/month',
      technologies: ['AI Pricing', 'Market Analysis', 'Machine Learning'],
      benefits: 'Increase revenue by 25% with optimized pricing',
      rating: 4.8,
      clients: '1,400+',
      demoUrl: 'https://ziontechgroup.com/pricing-optimizer',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'customer-support',
      name: 'AI Customer Support',
      description: 'Intelligent customer support system with AI-powered chatbots, ticket routing, and automated responses.',
      icon: Headphones,
      price: 49,
      period: 'month',
      features: [
        'AI chatbot integration',
        'Ticket automation',
        'Knowledge base',
        'Multi-channel support',
        'Sentiment analysis',
        'Escalation management',
        'Performance analytics',
        'Custom training'
      ],
      category: 'Support',
      popular: true,
      savings: '$1,800/month vs support staff',
      marketPrice: '$199/month',
      technologies: ['AI Chatbots', 'NLP', 'Support APIs'],
      benefits: 'Handle 80% of support queries automatically',
      rating: 4.6,
      clients: '2,600+',
      demoUrl: 'https://ziontechgroup.com/customer-support',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Specialized Tools
    {
      id: 'translation-pro',
      name: 'AI Translation Pro',
      description: 'Advanced translation platform with AI-powered language translation, localization, and cultural adaptation.',
      icon: Globe,
      price: 39,
      period: 'month',
      features: [
        '100+ language support',
        'Context-aware translation',
        'Cultural adaptation',
        'Document translation',
        'Website localization',
        'Voice translation',
        'API integration',
        'Quality assurance'
      ],
      category: 'Communication',
      popular: false,
      savings: '$1,200/month vs translation services',
      marketPrice: '$149/month',
      technologies: ['AI Translation', 'NLP', 'Language Models'],
      benefits: 'Translate content accurately in 100+ languages',
      rating: 4.7,
      clients: '1,800+',
      demoUrl: 'https://ziontechgroup.com/translation-pro',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'document-analyzer',
      name: 'AI Document Analyzer',
      description: 'Intelligent document analysis tool that extracts insights, summarizes content, and identifies key information from any document.',
      icon: FileText,
      price: 49,
      period: 'month',
      features: [
        'Document summarization',
        'Key information extraction',
        'Sentiment analysis',
        'Classification & tagging',
        'Search & retrieval',
        'Batch processing',
        'API integration',
        'Custom models'
      ],
      category: 'Data Tools',
      popular: false,
      savings: '$1,500/month vs document analysts',
      marketPrice: '$199/month',
      technologies: ['Document AI', 'NLP', 'Machine Learning'],
      benefits: 'Extract insights from documents automatically',
      rating: 4.6,
      clients: '1,200+',
      demoUrl: 'https://ziontechgroup.com/document-analyzer',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'meeting-transcriber',
      name: 'AI Meeting Transcriber',
      description: 'Advanced meeting transcription and analysis tool that converts audio to text and extracts actionable insights.',
      icon: Mic,
      price: 29,
      period: 'month',
      features: [
        'Real-time transcription',
        'Speaker identification',
        'Action item extraction',
        'Meeting summaries',
        'Search & playback',
        'Integration with calendars',
        'Export options',
        'Privacy protection'
      ],
      category: 'Productivity',
      popular: true,
      savings: '$600/month vs transcription services',
      marketPrice: '$99/month',
      technologies: ['Speech AI', 'NLP', 'Audio Processing'],
      benefits: 'Never miss important details from meetings',
      rating: 4.8,
      clients: '3,100+',
      demoUrl: 'https://ziontechgroup.com/meeting-transcriber',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent workflow automation platform that connects apps and automates business processes with AI decision-making.',
      icon: Workflow,
      price: 69,
      period: 'month',
      features: [
        'Visual workflow builder',
        'AI decision making',
        'App integrations (500+)',
        'Conditional logic',
        'Error handling',
        'Performance monitoring',
        'Team collaboration',
        'Custom triggers'
      ],
      category: 'Automation',
      popular: true,
      savings: '$2,000/month vs process automation consultants',
      marketPrice: '$299/month',
      technologies: ['Workflow AI', 'Integration APIs', 'Process Mining'],
      benefits: 'Automate 90% of repetitive business processes',
      rating: 4.9,
      clients: '2,400+',
      demoUrl: 'https://ziontechgroup.com/workflow-automation',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: microSAASServices.length, icon: Layers },
    { name: 'AI Tools', count: microSAASServices.filter(s => s.category === 'AI Tools').length, icon: Brain },
    { name: 'Productivity', count: microSAASServices.filter(s => s.category === 'Productivity').length, icon: Zap },
    { name: 'Marketing', count: microSAASServices.filter(s => s.category === 'Marketing').length, icon: Target },
    { name: 'Sales', count: microSAASServices.filter(s => s.category === 'Sales').length, icon: TrendingUp },
    { name: 'Analytics', count: microSAASServices.filter(s => s.category === 'Analytics').length, icon: BarChart },
    { name: 'Design', count: microSAASServices.filter(s => s.category === 'Design').length, icon: Palette },
    { name: 'E-commerce', count: microSAASServices.filter(s => s.category === 'E-commerce').length, icon: ShoppingCart },
    { name: 'Developer Tools', count: microSAASServices.filter(s => s.category === 'Developer Tools').length, icon: Code },
    { name: 'Data Tools', count: microSAASServices.filter(s => s.category === 'Data Tools').length, icon: Database },
    { name: 'Support', count: microSAASServices.filter(s => s.category === 'Support').length, icon: Headphones },
    { name: 'Communication', count: microSAASServices.filter(s => s.category === 'Communication').length, icon: MessageSquare },
    { name: 'Operations', count: microSAASServices.filter(s => s.category === 'Operations').length, icon: Settings },
    { name: 'Automation', count: microSAASServices.filter(s => s.category === 'Automation').length, icon: Workflow }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  const pricingPlans = [
    {
      name: 'Starter',
      price: 99,
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Access to 5 AI tools',
        'Basic support',
        'Standard templates',
        'Email support',
        'Basic analytics',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 299,
      period: 'month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Access to all 20+ tools',
        'Priority support',
        'Custom templates',
        'Phone & email support',
        'Advanced analytics',
        'Up to 10 user accounts',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 599,
      period: 'month',
      description: 'Complete solution for large organizations',
      features: [
        'All Professional features',
        'Dedicated support',
        'Custom development',
        '24/7 phone support',
        'Custom analytics',
        'Unlimited user accounts',
        'White-label options',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Powerful AI-driven tools for modern businesses. 20+ ready-to-use applications that automate, optimize, and accelerate your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-gray-300 text-sm">AI Tools</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">$19</div>
              <div className="text-gray-300 text-sm">Starting Price</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-gray-300 text-sm">Active Users</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name === 'All' ? 'all' : category.name)}
                className={`cyber-card hologram-card p-4 text-center hover:scale-105 transition-all duration-300 ${
                  selectedCategory === category.name.toLowerCase() || 
                  (selectedCategory === 'all' && category.name === 'All')
                    ? 'ring-2 ring-cyan-400' 
                    : ''
                }`}
              >
                <category.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold mb-1 text-sm">{category.name}</h3>
                <p className="text-gray-400 text-xs">{category.count} tools</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our Micro SAAS Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-3xl font-bold text-cyan-400">${service.price}</span>
                      <span className="text-gray-400 ml-1">/{service.period}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                      <div className="text-xs text-green-400">{service.savings}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-yellow-400 mb-1">{service.benefits}</div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {service.rating} • {service.clients} users
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-gray-500">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
                
                <div className="space-y-2">
                  <a
                    href={service.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full cyber-button text-center block"
                  >
                    Try Free Demo
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center block"
                  >
                    Get Started
                  </a>
                </div>
                
                <div className="mt-4 text-xs text-gray-500 text-center">
                  {service.contactInfo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Micro SAAS Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300">All tools leverage cutting-edge AI technology for maximum efficiency and accuracy.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Instant Setup</h3>
              <p className="text-gray-300">Get started in minutes with our intuitive interfaces and comprehensive onboarding.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <DollarSign className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cost Effective</h3>
              <p className="text-gray-300">Save thousands compared to hiring specialists or buying expensive enterprise software.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for all your data and operations.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Customizable</h3>
              <p className="text-gray-300">Tailor every tool to your specific business needs and workflows.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Trusted by 50,000+ businesses with measurable ROI and success stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and experience the power of AI-driven automation. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Start Free Trial
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ Free 14-day trial • ✓ No setup fees • ✓ Cancel anytime</p>
            <p>✓ 24/7 support • ✓ 99.9% uptime • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;