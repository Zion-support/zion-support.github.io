'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  Star,
  Users,
  Clock,
  Globe,
  Code,
  Database,
  Smartphone,
  Mail,
  MessageSquare,
  FileText,
  Image,
  Video,
  Music,
  Palette,
  Search,
  Lock,
  Cloud,
  Cpu,
  Wifi,
  Camera,
  Mic,
  Headphones,
  Monitor,
  Printer,
  HardDrive,
  Server,
  Router,
  Smartphone as Phone,
  Laptop,
  Tablet,
  Watch,
  Gamepad2,
  BookOpen,
  Calculator,
  Calendar,
  MapPin,
  Navigation as NavIcon,
  ShoppingCart,
  CreditCard,
  Wallet,
  TrendingUp,
  Target,
  Award,
  Lightbulb,
  Settings,
  Wrench,
  Tool,
  Package,
  Truck,
  Plane,
  Car,
  Home,
  Building,
  Factory,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Tree,
  Mountain,
  Sun,
  Moon,
  Cloud as CloudIcon,
  Snowflake,
  Umbrella,
  Wind,
  Thermometer,
  Droplets,
  Flame,
  Zap as Lightning,
  Star as StarIcon,
  Heart,
  ThumbsUp,
  MessageCircle,
  Share2,
  Download,
  Upload,
  Copy,
  Edit,
  Trash2,
  Save,
  RefreshCw,
  RotateCcw,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
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
  Hash as HashIcon,
  DollarSign as DollarIcon,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  CreditCard as CardIcon,
  Wallet as WalletIcon,
  Banknote,
  Coins,
  PiggyBank,
  TrendingUp as TrendingUpIcon,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Gauge,
  Target as TargetIcon,
  Crosshair,
  Focus,
  Eye,
  EyeOff,
  Search as SearchIcon,
  Filter,
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
  MoreHorizontal,
  MoreVertical,
  Menu,
  Grid,
  List,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Split,
  Columns,
  Rows,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Pentagon,
  Star as StarShape,
  Heart as HeartShape,
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
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown,
  Clap,
  Wave,
  Hand,
  Point,
  Scissors,
  Paper,
  Rock,
  Flag,
  Trophy,
  Medal,
  Crown,
  Gem,
  Diamond as DiamondIcon,
  Sparkles,
  Zap as ZapIcon,
  Flame as FireIcon,
  Snowflake as SnowIcon,
  Droplets as WaterIcon,
  Wind as WindIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  Cloud as CloudShape,
  Tree as TreeIcon,
  Flower,
  Leaf,
  Seedling,
  Sprout,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Horse,
  Cow,
  Pig,
  Sheep,
  Goat,
  Chicken,
  Duck,
  Rabbit,
  Mouse,
  Hamster,
  Squirrel,
  Fox,
  Wolf,
  Bear,
  Lion,
  Tiger,
  Elephant,
  Giraffe,
  Zebra,
  Panda,
  Koala,
  Penguin,
  Owl,
  Eagle,
  Hawk,
  Parrot,
  Toucan,
  Flamingo,
  Peacock,
  Swan,
  Goose,
  Turkey,
  Rooster,
  Hen,
  Chick,
  Duckling,
  Gosling,
  Cygnet,
  Fledgling,
  Nestling,
  Hatchling,
  Cub,
  Pup,
  Kitten,
  Puppy,
  Foal,
  Calf,
  Piglet,
  Lamb,
  Kid,
  Chick as ChickIcon,
  Duckling as DucklingIcon,
  Gosling as GoslingIcon,
  Cygnet as CygnetIcon,
  Fledgling as FledglingIcon,
  Nestling as NestlingIcon,
  Hatchling as HatchlingIcon,
  Cub as CubIcon,
  Pup as PupIcon,
  Kitten as KittenIcon,
  Puppy as PuppyIcon,
  Foal as FoalIcon,
  Calf as CalfIcon,
  Piglet as PigletIcon,
  Lamb as LambIcon,
  Kid as KidIcon
} from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: Brain,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials.',
      features: [
        'GPT-4 powered content generation',
        'Multi-language support (50+ languages)',
        'SEO optimization suggestions',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling'
      ],
      pricing: '$29/month',
      category: 'AI & Content',
      popularity: 95,
      rating: 4.9,
      users: '10K+',
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard Pro',
      description: 'Comprehensive business analytics and reporting dashboard with real-time insights.',
      features: [
        'Real-time data visualization',
        'Custom report builder',
        'Multi-platform integration',
        'Automated alerts',
        'White-label options',
        'API access'
      ],
      pricing: '$49/month',
      category: 'Analytics',
      popularity: 88,
      rating: 4.7,
      users: '5K+',
      link: 'https://ziontechgroup.com/analytics-dashboard'
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Powerful email marketing platform with advanced automation and personalization features.',
      features: [
        'Drag-and-drop email builder',
        'Advanced segmentation',
        'A/B testing tools',
        'Automation workflows',
        'Deliverability optimization',
        'ROI tracking'
      ],
      pricing: '$39/month',
      category: 'Marketing',
      popularity: 92,
      rating: 4.8,
      users: '15K+',
      link: 'https://ziontechgroup.com/email-marketing'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Monitor',
      description: 'Real-time security monitoring and threat detection for small to medium businesses.',
      features: [
        '24/7 threat monitoring',
        'Vulnerability scanning',
        'Incident response automation',
        'Compliance reporting',
        'Security training modules',
        'Mobile app alerts'
      ],
      pricing: '$79/month',
      category: 'Security',
      popularity: 85,
      rating: 4.6,
      users: '3K+',
      link: 'https://ziontechgroup.com/cybersecurity-monitor'
    },
    {
      icon: Users,
      title: 'Team Collaboration Hub',
      description: 'All-in-one team collaboration platform with project management and communication tools.',
      features: [
        'Project management boards',
        'Video conferencing',
        'File sharing & storage',
        'Task automation',
        'Time tracking',
        'Team analytics'
      ],
      pricing: '$19/user/month',
      category: 'Productivity',
      popularity: 90,
      rating: 4.7,
      users: '25K+',
      link: 'https://ziontechgroup.com/team-collaboration'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Builder',
      description: 'No-code mobile app development platform for iOS and Android applications.',
      features: [
        'Drag-and-drop interface',
        'Native app generation',
        'Push notifications',
        'Offline functionality',
        'App store deployment',
        'Analytics integration'
      ],
      pricing: '$59/month',
      category: 'Development',
      popularity: 87,
      rating: 4.5,
      users: '8K+',
      link: 'https://ziontechgroup.com/mobile-app-builder'
    },
    {
      icon: Database,
      title: 'Database Management Pro',
      description: 'Cloud-based database management and optimization platform for developers.',
      features: [
        'Multi-database support',
        'Query optimization',
        'Backup automation',
        'Performance monitoring',
        'Security auditing',
        'Team collaboration'
      ],
      pricing: '$69/month',
      category: 'Development',
      popularity: 82,
      rating: 4.4,
      users: '6K+',
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      icon: Camera,
      title: 'Video Production Studio',
      description: 'AI-powered video editing and production platform for content creators.',
      features: [
        'AI video editing',
        'Auto-subtitle generation',
        'Background removal',
        'Voice-over synthesis',
        'Multi-format export',
        'Cloud rendering'
      ],
      pricing: '$45/month',
      category: 'Media',
      popularity: 89,
      rating: 4.6,
      users: '12K+',
      link: 'https://ziontechgroup.com/video-production'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Analytics',
      description: 'Advanced analytics and optimization tools for online stores and marketplaces.',
      features: [
        'Sales funnel analysis',
        'Customer behavior tracking',
        'Inventory optimization',
        'Price monitoring',
        'Competitor analysis',
        'ROI optimization'
      ],
      pricing: '$35/month',
      category: 'E-commerce',
      popularity: 91,
      rating: 4.8,
      users: '18K+',
      link: 'https://ziontechgroup.com/ecommerce-analytics'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling Assistant',
      description: 'AI-powered scheduling and appointment management system for service businesses.',
      features: [
        'Intelligent scheduling',
        'Client self-booking',
        'Payment integration',
        'SMS/Email reminders',
        'Calendar synchronization',
        'Analytics dashboard'
      ],
      pricing: '$25/month',
      category: 'Scheduling',
      popularity: 86,
      rating: 4.5,
      users: '7K+',
      link: 'https://ziontechgroup.com/smart-scheduling'
    },
    {
      icon: FileText,
      title: 'Document Management Pro',
      description: 'Secure document storage, sharing, and collaboration platform for businesses.',
      features: [
        'Secure cloud storage',
        'Version control',
        'Digital signatures',
        'Access permissions',
        'Search & indexing',
        'Compliance tools'
      ],
      pricing: '$29/month',
      category: 'Document Management',
      popularity: 84,
      rating: 4.3,
      users: '9K+',
      link: 'https://ziontechgroup.com/document-management'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Manager',
      description: 'Comprehensive social media management and analytics platform for businesses.',
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Engagement analytics',
        'Hashtag research',
        'Competitor monitoring',
        'Influencer outreach'
      ],
      pricing: '$39/month',
      category: 'Social Media',
      popularity: 93,
      rating: 4.7,
      users: '20K+',
      link: 'https://ziontechgroup.com/social-media-manager'
    }
  ]

  const categories = [
    'All',
    'AI & Content',
    'Analytics',
    'Marketing',
    'Security',
    'Productivity',
    'Development',
    'Media',
    'E-commerce',
    'Scheduling',
    'Document Management',
    'Social Media'
  ]

  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [searchTerm, setSearchTerm] = React.useState('')

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SAAS</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS solutions designed to streamline your business operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Browse Services
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search micro SAAS services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-cyan-400 font-medium">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {service.users}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {service.popularity}% popular
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Try Now
                  </a>
                  <button className="px-4 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white rounded-lg transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We can build a custom micro SAAS solution tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Request Custom Solution
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaasPage