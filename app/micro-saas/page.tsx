import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  BarChart, 
  Users, 
  Mail, 
  Calendar, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Globe, 
  Shield, 
  Zap, 
  Brain, 
  Target, 
  TrendingUp, 
  Settings, 
  Database, 
  Smartphone, 
  Monitor, 
  Cloud, 
  Lock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Cpu,
  Palette,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  PieChart,
  Layers,
  Workflow,
  Bot,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Heart,
  Bookmark,
  Eye,
  ThumbsUp,
  MessageCircle,
  Bell,
  Clock,
  DollarSign,
  Percent,
  Award,
  Rocket,
  Lightbulb,
  Wrench,
  Hammer,
  Scissors,
  Paintbrush,
  Camera,
  Mic,
  Headphones,
  Gamepad2,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  MapPin,
  Navigation,
  Compass,
  Globe2,
  Wifi,
  Bluetooth,
  Battery,
  Power,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Shuffle,
  Repeat,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Copy,
  Save,
  RefreshCw,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Menu,
  Grid,
  List,
  Layout,
  Sidebar,
  Columns,
  Rows,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Wink,
  Kiss,
  Tongue,
  Eye as EyeIcon,
  EyeOff,
  Lock as LockIcon,
  Unlock,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  Barcode,
  Tag,
  Tags,
  Flag,
  Bookmark as BookmarkIcon,
  Pin,
  Map,
  Navigation as NavigationIcon,
  Compass as CompassIcon,
  Globe as GlobeIcon,
  Globe2 as Globe2Icon,
  Wifi as WifiIcon,
  Bluetooth as BluetoothIcon,
  Battery as BatteryIcon,
  Power as PowerIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
  Shuffle as ShuffleIcon,
  Repeat as RepeatIcon,
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon,
  X as XIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  Copy as CopyIcon,
  Save as SaveIcon,
  RefreshCw as RefreshCwIcon,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon,
  HelpCircle as HelpCircleIcon,
  ExternalLink as ExternalLinkIcon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  Grid as GridIcon,
  List as ListIcon,
  Layout as LayoutIcon,
  Sidebar as SidebarIcon,
  Columns as ColumnsIcon,
  Rows as RowsIcon,
  Square as SquareIcon,
  Circle as CircleIcon,
  Triangle as TriangleIcon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon,
  Diamond as DiamondIcon
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSAASServices = [
    // AI-Powered Tools
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality blog posts, articles, social media content, and marketing copy using advanced AI.',
      category: 'ai-tools',
      icon: Brain,
      price: 29,
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      popular: true,
      rating: 4.9,
      users: 12500
    },
    {
      id: 'ai-code-reviewer',
      name: 'AI Code Reviewer',
      description: 'Automated code review and optimization suggestions powered by machine learning.',
      category: 'developer-tools',
      icon: Code,
      price: 49,
      features: [
        'Real-time code analysis',
        'Security vulnerability detection',
        'Performance optimization',
        'Code quality scoring',
        'Git integration',
        'Custom rules engine',
        'Team collaboration',
        'Detailed reports'
      ],
      popular: true,
      rating: 4.8,
      users: 8900
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Automatically optimize your website for search engines with AI-powered recommendations.',
      category: 'marketing-tools',
      icon: Target,
      price: 39,
      features: [
        'Keyword research automation',
        'Content optimization',
        'Technical SEO analysis',
        'Competitor analysis',
        'Rank tracking',
        'Backlink monitoring',
        'Local SEO optimization',
        'Performance insights'
      ],
      popular: true,
      rating: 4.7,
      users: 15600
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator',
      description: 'Create stunning images, logos, and graphics using advanced AI image generation.',
      category: 'design-tools',
      icon: Image,
      price: 19,
      features: [
        'Text-to-image generation',
        'Style transfer',
        'Logo creation',
        'Image upscaling',
        'Background removal',
        'Object detection',
        'Batch processing',
        'Commercial license'
      ],
      popular: false,
      rating: 4.6,
      users: 7800
    },
    {
      id: 'ai-video-editor',
      name: 'AI Video Editor',
      description: 'Automated video editing with AI-powered features for content creators.',
      category: 'media-tools',
      icon: Video,
      price: 59,
      features: [
        'Auto video editing',
        'Smart cropping',
        'Background replacement',
        'Audio enhancement',
        'Subtitle generation',
        'Thumbnail creation',
        'Social media optimization',
        'Cloud rendering'
      ],
      popular: false,
      rating: 4.5,
      users: 4200
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and lead generation.',
      category: 'automation-tools',
      icon: Bot,
      price: 79,
      features: [
        'No-code chatbot builder',
        'Multi-channel deployment',
        'Natural language processing',
        'Integration APIs',
        'Analytics dashboard',
        'A/B testing',
        'Custom training',
        '24/7 support'
      ],
      popular: true,
      rating: 4.8,
      users: 11200
    },

    // Business Productivity Tools
    {
      id: 'project-management-pro',
      name: 'Project Management Pro',
      description: 'Advanced project management with AI-powered insights and automation.',
      category: 'productivity-tools',
      icon: Workflow,
      price: 39,
      features: [
        'Task automation',
        'Resource planning',
        'Time tracking',
        'Team collaboration',
        'Progress analytics',
        'Risk assessment',
        'Budget management',
        'Integration hub'
      ],
      popular: true,
      rating: 4.7,
      users: 18900
    },
    {
      id: 'crm-ai',
      name: 'AI-Powered CRM',
      description: 'Customer relationship management with AI insights and automation.',
      category: 'business-tools',
      icon: Users,
      price: 69,
      features: [
        'Lead scoring AI',
        'Sales forecasting',
        'Email automation',
        'Pipeline management',
        'Customer analytics',
        'Integration ecosystem',
        'Mobile app',
        'Custom fields'
      ],
      popular: true,
      rating: 4.6,
      users: 14300
    },
    {
      id: 'invoicing-automation',
      name: 'Smart Invoicing',
      description: 'Automated invoicing and payment processing with AI-powered features.',
      category: 'finance-tools',
      icon: CreditCard,
      price: 29,
      features: [
        'Auto invoice generation',
        'Payment reminders',
        'Expense tracking',
        'Tax calculations',
        'Multi-currency support',
        'Client portal',
        'Reporting suite',
        'API integration'
      ],
      popular: false,
      rating: 4.5,
      users: 6700
    },
    {
      id: 'hr-management-ai',
      name: 'AI HR Management',
      description: 'Human resources management with AI-powered recruitment and analytics.',
      category: 'business-tools',
      icon: Briefcase,
      price: 89,
      features: [
        'Resume screening AI',
        'Interview scheduling',
        'Employee analytics',
        'Performance tracking',
        'Payroll automation',
        'Benefits management',
        'Compliance monitoring',
        'Training modules'
      ],
      popular: false,
      rating: 4.4,
      users: 5200
    },

    // Analytics & Data Tools
    {
      id: 'business-intelligence',
      name: 'Business Intelligence Suite',
      description: 'Advanced analytics and reporting with AI-powered insights.',
      category: 'analytics-tools',
      icon: BarChart,
      price: 99,
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Data visualization',
        'Custom reports',
        'Data integration',
        'Automated insights',
        'Mobile access',
        'White-label options'
      ],
      popular: true,
      rating: 4.8,
      users: 16800
    },
    {
      id: 'social-media-analytics',
      name: 'Social Media Analytics Pro',
      description: 'Comprehensive social media analytics and management platform.',
      category: 'marketing-tools',
      icon: Share2,
      price: 49,
      features: [
        'Multi-platform monitoring',
        'Engagement analytics',
        'Content performance',
        'Competitor analysis',
        'Influencer tracking',
        'Hashtag research',
        'Scheduling tools',
        'ROI measurement'
      ],
      popular: false,
      rating: 4.6,
      users: 9300
    },
    {
      id: 'website-analytics',
      name: 'Advanced Website Analytics',
      description: 'Deep website analytics with AI-powered insights and recommendations.',
      category: 'analytics-tools',
      icon: Globe,
      price: 39,
      features: [
        'Heatmap analysis',
        'User behavior tracking',
        'Conversion optimization',
        'A/B testing tools',
        'Performance monitoring',
        'SEO insights',
        'Custom events',
        'Real-time data'
      ],
      popular: false,
      rating: 4.5,
      users: 7400
    },

    // Communication Tools
    {
      id: 'team-communication',
      name: 'Team Communication Hub',
      description: 'All-in-one team communication and collaboration platform.',
      category: 'communication-tools',
      icon: MessageSquare,
      price: 19,
      features: [
        'Video conferencing',
        'Instant messaging',
        'File sharing',
        'Screen sharing',
        'Voice calls',
        'Team channels',
        'Integration hub',
        'Mobile apps'
      ],
      popular: true,
      rating: 4.7,
      users: 22100
    },
    {
      id: 'email-marketing-ai',
      name: 'AI Email Marketing',
      description: 'Intelligent email marketing with AI-powered personalization and automation.',
      category: 'marketing-tools',
      icon: Mail,
      price: 59,
      features: [
        'AI content generation',
        'Personalization engine',
        'Send time optimization',
        'A/B testing',
        'List segmentation',
        'Automation workflows',
        'Analytics dashboard',
        'Template library'
      ],
      popular: true,
      rating: 4.8,
      users: 17500
    },
    {
      id: 'customer-support-ai',
      name: 'AI Customer Support',
      description: 'Automated customer support with intelligent ticket routing and responses.',
      category: 'automation-tools',
      icon: Headphones,
      price: 79,
      features: [
        'AI ticket routing',
        'Automated responses',
        'Knowledge base',
        'Live chat integration',
        'Sentiment analysis',
        'Performance metrics',
        'Multi-language support',
        'Custom workflows'
      ],
      popular: false,
      rating: 4.6,
      users: 8100
    },

    // Design & Creative Tools
    {
      id: 'logo-maker-ai',
      name: 'AI Logo Maker',
      description: 'Create professional logos with AI-powered design suggestions.',
      category: 'design-tools',
      icon: Palette,
      price: 15,
      features: [
        'AI logo generation',
        'Brand guidelines',
        'Multiple formats',
        'Color palette suggestions',
        'Typography matching',
        'Icon library',
        'Mockup generator',
        'Commercial license'
      ],
      popular: false,
      rating: 4.4,
      users: 4800
    },
    {
      id: 'presentation-builder',
      name: 'AI Presentation Builder',
      description: 'Create stunning presentations with AI-powered design and content suggestions.',
      category: 'productivity-tools',
      icon: Monitor,
      price: 25,
      features: [
        'AI content generation',
        'Design templates',
        'Smart layouts',
        'Data visualization',
        'Animation effects',
        'Collaboration tools',
        'Export options',
        'Cloud storage'
      ],
      popular: false,
      rating: 4.3,
      users: 3600
    },
    {
      id: 'video-thumbnail-generator',
      name: 'Video Thumbnail Generator',
      description: 'Create eye-catching video thumbnails with AI-powered design optimization.',
      category: 'media-tools',
      icon: Camera,
      price: 12,
      features: [
        'AI thumbnail generation',
        'A/B testing',
        'Click-through optimization',
        'Template library',
        'Custom branding',
        'Batch processing',
        'Performance analytics',
        'Social media optimization'
      ],
      popular: false,
      rating: 4.2,
      users: 2900
    },

    // E-commerce Tools
    {
      id: 'ecommerce-analytics',
      name: 'E-commerce Analytics Pro',
      description: 'Advanced analytics for online stores with AI-powered insights.',
      category: 'ecommerce-tools',
      icon: ShoppingCart,
      price: 89,
      features: [
        'Sales analytics',
        'Customer behavior',
        'Product performance',
        'Inventory optimization',
        'Conversion tracking',
        'Revenue forecasting',
        'Competitor analysis',
        'Custom dashboards'
      ],
      popular: true,
      rating: 4.7,
      users: 12700
    },
    {
      id: 'inventory-management',
      name: 'Smart Inventory Management',
      description: 'AI-powered inventory management with demand forecasting.',
      category: 'ecommerce-tools',
      icon: Package,
      price: 69,
      features: [
        'Demand forecasting',
        'Auto reorder points',
        'Multi-location tracking',
        'Supplier management',
        'Cost optimization',
        'Reporting suite',
        'Integration APIs',
        'Mobile access'
      ],
      popular: false,
      rating: 4.5,
      users: 6800
    },
    {
      id: 'price-optimization',
      name: 'Dynamic Pricing Engine',
      description: 'AI-powered dynamic pricing optimization for maximum profitability.',
      category: 'ecommerce-tools',
      icon: TrendingUp,
      price: 149,
      features: [
        'Real-time pricing',
        'Competitor monitoring',
        'Demand-based pricing',
        'A/B testing',
        'Profit optimization',
        'Price alerts',
        'Analytics dashboard',
        'API integration'
      ],
      popular: false,
      rating: 4.6,
      users: 3200
    },

    // Developer Tools
    {
      id: 'api-testing-suite',
      name: 'API Testing Suite',
      description: 'Comprehensive API testing and monitoring with AI-powered insights.',
      category: 'developer-tools',
      icon: Settings,
      price: 49,
      features: [
        'Automated testing',
        'Performance monitoring',
        'Security scanning',
        'Documentation generation',
        'Mock server',
        'Load testing',
        'Integration testing',
        'CI/CD integration'
      ],
      popular: false,
      rating: 4.5,
      users: 5600
    },
    {
      id: 'database-optimizer',
      name: 'Database Performance Optimizer',
      description: 'AI-powered database optimization and performance monitoring.',
      category: 'developer-tools',
      icon: Database,
      price: 79,
      features: [
        'Query optimization',
        'Index recommendations',
        'Performance monitoring',
        'Capacity planning',
        'Security scanning',
        'Backup automation',
        'Scaling recommendations',
        'Real-time alerts'
      ],
      popular: false,
      rating: 4.4,
      users: 4100
    },
    {
      id: 'security-scanner',
      name: 'AI Security Scanner',
      description: 'Comprehensive security scanning and vulnerability assessment.',
      category: 'security-tools',
      icon: Shield,
      price: 99,
      features: [
        'Vulnerability scanning',
        'Penetration testing',
        'Compliance checking',
        'Threat detection',
        'Security reporting',
        'Remediation guidance',
        'Continuous monitoring',
        'Integration APIs'
      ],
      popular: true,
      rating: 4.8,
      users: 9800
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', icon: Grid, count: microSAASServices.length },
    { id: 'ai-tools', name: 'AI Tools', icon: Brain, count: microSAASServices.filter(s => s.category === 'ai-tools').length },
    { id: 'developer-tools', name: 'Developer Tools', icon: Code, count: microSAASServices.filter(s => s.category === 'developer-tools').length },
    { id: 'marketing-tools', name: 'Marketing Tools', icon: Target, count: microSAASServices.filter(s => s.category === 'marketing-tools').length },
    { id: 'productivity-tools', name: 'Productivity Tools', icon: Workflow, count: microSAASServices.filter(s => s.category === 'productivity-tools').length },
    { id: 'analytics-tools', name: 'Analytics Tools', icon: BarChart, count: microSAASServices.filter(s => s.category === 'analytics-tools').length },
    { id: 'design-tools', name: 'Design Tools', icon: Palette, count: microSAASServices.filter(s => s.category === 'design-tools').length },
    { id: 'business-tools', name: 'Business Tools', icon: Briefcase, count: microSAASServices.filter(s => s.category === 'business-tools').length },
    { id: 'communication-tools', name: 'Communication', icon: MessageSquare, count: microSAASServices.filter(s => s.category === 'communication-tools').length },
    { id: 'ecommerce-tools', name: 'E-commerce Tools', icon: ShoppingCart, count: microSAASServices.filter(s => s.category === 'ecommerce-tools').length },
    { id: 'automation-tools', name: 'Automation Tools', icon: Bot, count: microSAASServices.filter(s => s.category === 'automation-tools').length },
    { id: 'media-tools', name: 'Media Tools', icon: Video, count: microSAASServices.filter(s => s.category === 'media-tools').length },
    { id: 'finance-tools', name: 'Finance Tools', icon: CreditCard, count: microSAASServices.filter(s => s.category === 'finance-tools').length },
    { id: 'security-tools', name: 'Security Tools', icon: Shield, count: microSAASServices.filter(s => s.category === 'security-tools').length }
  ];

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              50+ AI-Powered Tools for Modern Businesses
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our comprehensive suite of micro SAAS applications designed to streamline your business operations, 
              boost productivity, and drive growth with cutting-edge AI technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tools and features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">AI-Powered Tools</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">200K+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-slate-600 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`quantum-card p-6 energy-pulse relative ${
                  service.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.price}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 neon-text">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{service.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{service.users.toLocaleString()}+ users</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-slate-700/50 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="cyber-card hologram-card p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered micro SAAS solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="tel:+13024640950"
                className="bg-slate-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-700 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;
