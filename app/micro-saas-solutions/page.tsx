import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Shield, 
  Clock, 
  TrendingUp,
  BarChart3,
  Database,
  Smartphone,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Zap,
  Code,
  Eye,
  MessageSquare,
  Cpu,
  Network,
  FileText,
  Settings,
  CreditCard,
  Lock,
  Cloud,
  Wifi,
  Monitor,
  Server,
  Key,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Edit,
  Trash,
  Plus,
  Minus,
  Refresh,
  Play,
  Pause,
  Stop,
  Volume2,
  Camera,
  Image,
  Video,
  Music,
  Headphones,
  Mic,
  MicOff,
  Bell,
  BellOff,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Bookmark,
  Tag,
  Calendar,
  ClockIcon,
  Timer,
  Stopwatch,
  AlarmClock,
  CalendarDays,
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
  Sun,
  Moon,
  CloudSun,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  CloudDrizzle,
  CloudHail,
  CloudSleet,
  CloudWind,
  CloudMoon,
  CloudMoonRain,
  CloudMoonSnow,
  CloudMoonLightning,
  CloudMoonFog,
  CloudMoonDrizzle,
  CloudMoonHail,
  CloudMoonSleet,
  CloudMoonWind,
  CloudSunRain,
  CloudSunSnow,
  CloudSunLightning,
  CloudSunFog,
  CloudSunDrizzle,
  CloudSunHail,
  CloudSunSleet,
  CloudSunWind,
  Package
} from 'lucide-react';

const MicroSaaSSolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaaSServices = [
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder Pro',
      price: '$29/mo',
      originalPrice: '$49/mo',
      description: 'Build intelligent chatbots without coding',
      longDescription: 'Create sophisticated AI-powered chatbots for your website, social media, and messaging platforms with our drag-and-drop builder.',
      features: [
        'Drag-and-Drop Interface',
        'Natural Language Processing',
        'Multi-platform Integration',
        'Custom Training & Learning',
        'Analytics Dashboard',
        'A/B Testing',
        'Voice & Text Support',
        'Multi-language Support',
        'Custom Branding',
        'API Access'
      ],
      benefits: [
        'Reduce support costs by 70%',
        'Improve response time by 90%',
        'Handle 500+ conversations simultaneously',
        '24/7 availability',
        'Easy setup in minutes'
      ],
      category: 'AI Tools',
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler',
      price: '$19/mo',
      originalPrice: '$39/mo',
      description: 'Schedule and manage social media posts',
      longDescription: 'Streamline your social media management with our comprehensive scheduling and analytics platform.',
      features: [
        'Multi-platform Scheduling',
        'Content Calendar',
        'Auto-posting',
        'Analytics & Insights',
        'Team Collaboration',
        'Content Library',
        'Hashtag Suggestions',
        'Best Time Optimization',
        'Bulk Upload',
        'Mobile App'
      ],
      benefits: [
        'Save 10+ hours per week',
        'Increase engagement by 40%',
        'Post at optimal times',
        'Track performance metrics',
        'Collaborate with team'
      ],
      category: 'Marketing',
      icon: <Share className="w-8 h-8 text-purple-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/social-media-scheduler'
    },
    {
      id: 'email-marketing-automation',
      name: 'Email Marketing Automation',
      price: '$39/mo',
      originalPrice: '$79/mo',
      description: 'Automate email campaigns and nurture leads',
      longDescription: 'Create sophisticated email marketing campaigns with our powerful automation platform and drag-and-drop editor.',
      features: [
        'Drag-and-Drop Editor',
        'Email Automation Workflows',
        'A/B Testing',
        'Advanced Segmentation',
        'Personalization Engine',
        'Analytics Dashboard',
        'Template Library',
        'List Management',
        'Deliverability Optimization',
        'Mobile Optimization'
      ],
      benefits: [
        'Increase open rates by 60%',
        'Automate lead nurturing',
        'Personalize at scale',
        'Track detailed metrics',
        'Improve deliverability'
      ],
      category: 'Marketing',
      icon: <Mail className="w-8 h-8 text-green-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/email-marketing-automation'
    },
    {
      id: 'project-management-tool',
      name: 'Project Management Pro',
      price: '$49/mo',
      originalPrice: '$99/mo',
      description: 'Complete project management solution',
      longDescription: 'Manage projects, teams, and deadlines with our comprehensive project management platform designed for modern teams.',
      features: [
        'Kanban Boards',
        'Gantt Charts',
        'Time Tracking',
        'Team Collaboration',
        'File Sharing',
        'Task Dependencies',
        'Resource Management',
        'Budget Tracking',
        'Reporting & Analytics',
        'Mobile App'
      ],
      benefits: [
        'Improve team productivity by 50%',
        'Better project visibility',
        'Streamline communication',
        'Track progress in real-time',
        'Meet deadlines consistently'
      ],
      category: 'Productivity',
      icon: <Target className="w-8 h-8 text-blue-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/project-management-tool'
    },
    {
      id: 'crm-sales-pipeline',
      name: 'CRM Sales Pipeline',
      price: '$59/mo',
      originalPrice: '$119/mo',
      description: 'Manage leads and close more deals',
      longDescription: 'Streamline your sales process with our comprehensive CRM that helps you track leads, manage pipelines, and close more deals.',
      features: [
        'Lead Management',
        'Sales Pipeline Tracking',
        'Contact Management',
        'Deal Forecasting',
        'Email Integration',
        'Task Automation',
        'Reporting & Analytics',
        'Mobile CRM',
        'Team Collaboration',
        'Custom Fields'
      ],
      benefits: [
        'Increase sales by 35%',
        'Better lead tracking',
        'Improve follow-up process',
        'Forecast sales accurately',
        'Streamline sales operations'
      ],
      category: 'Sales',
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/crm-sales-pipeline'
    },
    {
      id: 'inventory-management',
      name: 'Inventory Management System',
      price: '$79/mo',
      originalPrice: '$159/mo',
      description: 'Track inventory and optimize stock levels',
      longDescription: 'Manage your inventory efficiently with our comprehensive system that helps you track stock, prevent shortages, and optimize ordering.',
      features: [
        'Real-time Inventory Tracking',
        'Low Stock Alerts',
        'Purchase Order Management',
        'Supplier Management',
        'Barcode Scanning',
        'Multi-location Support',
        'Reporting & Analytics',
        'Mobile App',
        'Integration APIs',
        'Automated Reordering'
      ],
      benefits: [
        'Reduce stockouts by 80%',
        'Optimize inventory levels',
        'Improve cash flow',
        'Streamline ordering process',
        'Better supplier relationships'
      ],
      category: 'E-commerce',
      icon: <Package className="w-8 h-8 text-indigo-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/inventory-management'
    },
    {
      id: 'customer-support-ticket',
      name: 'Customer Support Ticket System',
      price: '$39/mo',
      originalPrice: '$79/mo',
      description: 'Streamline customer support operations',
      longDescription: 'Manage customer inquiries efficiently with our comprehensive ticketing system that helps you provide excellent customer service.',
      features: [
        'Ticket Management',
        'Multi-channel Support',
        'Knowledge Base',
        'SLA Management',
        'Team Collaboration',
        'Automation Rules',
        'Customer Portal',
        'Reporting & Analytics',
        'Mobile App',
        'Integration APIs'
      ],
      benefits: [
        'Improve response times by 60%',
        'Better ticket organization',
        'Reduce support costs',
        'Increase customer satisfaction',
        'Streamline support workflow'
      ],
      category: 'Support',
      icon: <Headphones className="w-8 h-8 text-pink-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/customer-support-ticket'
    },
    {
      id: 'analytics-dashboard',
      name: 'Business Analytics Dashboard',
      price: '$49/mo',
      originalPrice: '$99/mo',
      description: 'Visualize data and make informed decisions',
      longDescription: 'Transform your business data into actionable insights with our comprehensive analytics platform and customizable dashboards.',
      features: [
        'Custom Dashboards',
        'Real-time Data Visualization',
        'Automated Reports',
        'KPI Tracking',
        'Data Integration',
        'Mobile Analytics',
        'Team Collaboration',
        'Custom Metrics',
        'Alert System',
        'Export Capabilities'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends and opportunities',
        'Improve operational efficiency',
        'Reduce reporting time by 90%',
        'Scale with business growth'
      ],
      category: 'Analytics',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/analytics-dashboard'
    },
    {
      id: 'file-storage-collaboration',
      name: 'File Storage & Collaboration',
      price: '$29/mo',
      originalPrice: '$59/mo',
      description: 'Secure file storage and team collaboration',
      longDescription: 'Store, share, and collaborate on files with our secure cloud storage platform designed for modern teams.',
      features: [
        'Secure Cloud Storage',
        'File Sharing & Permissions',
        'Version Control',
        'Team Collaboration',
        'Mobile Access',
        'Sync Across Devices',
        'Advanced Security',
        'Integration APIs',
        'Backup & Recovery',
        'Custom Branding'
      ],
      benefits: [
        'Centralize file management',
        'Improve team collaboration',
        'Secure file sharing',
        'Access files anywhere',
        'Reduce storage costs'
      ],
      category: 'Storage',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/file-storage-collaboration'
    },
    {
      id: 'time-tracking-productivity',
      name: 'Time Tracking & Productivity',
      price: '$19/mo',
      originalPrice: '$39/mo',
      description: 'Track time and boost team productivity',
      longDescription: 'Monitor time spent on projects and tasks with our comprehensive time tracking and productivity analytics platform.',
      features: [
        'Time Tracking',
        'Project Time Allocation',
        'Productivity Analytics',
        'Team Management',
        'Invoicing Integration',
        'Mobile App',
        'Offline Tracking',
        'Reporting & Insights',
        'Integration APIs',
        'Custom Categories'
      ],
      benefits: [
        'Improve time management',
        'Track project profitability',
        'Identify productivity patterns',
        'Streamline invoicing',
        'Better resource allocation'
      ],
      category: 'Productivity',
      icon: <Clock className="w-8 h-8 text-green-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/time-tracking-productivity'
    },
    {
      id: 'website-builder',
      name: 'AI Website Builder',
      price: '$39/mo',
      originalPrice: '$79/mo',
      description: 'Build professional websites with AI assistance',
      longDescription: 'Create stunning websites without coding using our AI-powered website builder with drag-and-drop functionality.',
      features: [
        'AI-Powered Design',
        'Drag-and-Drop Editor',
        'Mobile Responsive',
        'SEO Optimization',
        'E-commerce Integration',
        'Custom Domains',
        'SSL Certificates',
        'Analytics Integration',
        'Template Library',
        '24/7 Support'
      ],
      benefits: [
        'Build websites in minutes',
        'No coding required',
        'Professional results',
        'SEO optimized',
        'Mobile responsive'
      ],
      category: 'Web Development',
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/website-builder'
    },
    {
      id: 'api-management',
      name: 'API Management Platform',
      price: '$99/mo',
      originalPrice: '$199/mo',
      description: 'Manage and monetize your APIs',
      longDescription: 'Build, deploy, and manage APIs with our comprehensive platform that includes analytics, security, and monetization features.',
      features: [
        'API Gateway',
        'Rate Limiting',
        'Authentication & Authorization',
        'Analytics & Monitoring',
        'Documentation Generator',
        'Developer Portal',
        'Monetization Tools',
        'Version Management',
        'Security Policies',
        'Integration APIs'
      ],
      benefits: [
        'Secure API management',
        'Monitor API performance',
        'Generate revenue from APIs',
        'Improve developer experience',
        'Scale API infrastructure'
      ],
      category: 'Development',
      icon: <Code className="w-8 h-8 text-red-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/api-management'
    }
  ];

  const features = [
    'Scalable Architecture',
    '24/7 Expert Support',
    'Easy Integration',
    'Custom Development',
    'Enterprise Security',
    'Performance Monitoring',
    'API Access',
    'White-label Options',
    'Mobile Apps',
    'Analytics Dashboard'
  ];

  const stats = [
    { number: '100+', label: 'Micro SaaS Solutions' },
    { number: '500+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29/mo',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 team members',
        'Basic features',
        'Email support',
        'Standard integrations',
        '1GB storage',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced features',
        'Priority support',
        'Custom integrations',
        '10GB storage',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full feature suite',
        '24/7 dedicated support',
        'Custom development',
        'Unlimited storage',
        'White-label solutions',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? microSaaSServices 
    : microSaaSServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SaaS solutions designed to accelerate your business growth with cutting-edge technology." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, business software, cloud applications, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SaaS Solutions
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover our comprehensive suite of innovative micro SaaS solutions designed to 
              streamline your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-purple-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicroSaaSSolutionsPage;