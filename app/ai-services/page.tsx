'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Brain, 
  Zap, 
  Target, 
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
  Phone,
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

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation.',
      features: [
        'GPT-4 powered content generation',
        'Multi-language support (50+ languages)',
        'SEO optimization suggestions',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling and automation'
      ],
      pricing: '$299/month',
      category: 'Content & Marketing',
      popularity: 95,
      rating: 4.9,
      users: '15K+',
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support',
      description: 'Intelligent chatbot and customer service automation with natural language understanding.',
      features: [
        '24/7 multilingual support',
        'Context-aware conversations',
        'Escalation to human agents',
        'Integration with CRM systems',
        'Sentiment analysis',
        'Performance analytics'
      ],
      pricing: '$199/month',
      category: 'Customer Service',
      popularity: 92,
      rating: 4.8,
      users: '12K+',
      link: 'https://ziontechgroup.com/ai-customer-support'
    },
    {
      icon: BarChart3,
      title: 'AI Business Intelligence',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms.',
      features: [
        'Predictive analytics',
        'Real-time data processing',
        'Automated reporting',
        'Anomaly detection',
        'Custom dashboard creation',
        'API integration'
      ],
      pricing: '$399/month',
      category: 'Analytics',
      popularity: 88,
      rating: 4.7,
      users: '8K+',
      link: 'https://ziontechgroup.com/ai-business-intelligence'
    },
    {
      icon: Camera,
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis using deep learning and computer vision technologies.',
      features: [
        'Object detection and recognition',
        'Facial recognition systems',
        'Quality control automation',
        'Medical image analysis',
        'Security surveillance',
        'Real-time processing'
      ],
      pricing: '$499/month',
      category: 'Computer Vision',
      popularity: 85,
      rating: 4.6,
      users: '6K+',
      link: 'https://ziontechgroup.com/ai-computer-vision'
    },
    {
      icon: Mic,
      title: 'AI Voice Processing',
      description: 'Advanced speech recognition, synthesis, and voice analysis capabilities.',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice cloning technology',
        'Language translation',
        'Voice biometrics',
        'Real-time transcription'
      ],
      pricing: '$349/month',
      category: 'Voice & Audio',
      popularity: 87,
      rating: 4.5,
      users: '7K+',
      link: 'https://ziontechgroup.com/ai-voice-processing'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Intelligent threat detection and cybersecurity solutions powered by machine learning.',
      features: [
        'Threat detection and prevention',
        'Behavioral analysis',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Real-time alerts'
      ],
      pricing: '$599/month',
      category: 'Security',
      popularity: 90,
      rating: 4.8,
      users: '5K+',
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      icon: ShoppingCart,
      title: 'AI E-commerce Optimization',
      description: 'Intelligent e-commerce solutions for pricing, recommendations, and customer experience optimization.',
      features: [
        'Dynamic pricing optimization',
        'Personalized recommendations',
        'Inventory management',
        'Customer behavior analysis',
        'Fraud detection',
        'Sales forecasting'
      ],
      pricing: '$449/month',
      category: 'E-commerce',
      popularity: 89,
      rating: 4.7,
      users: '10K+',
      link: 'https://ziontechgroup.com/ai-ecommerce-optimization'
    },
    {
      icon: FileText,
      title: 'AI Document Processing',
      description: 'Intelligent document analysis, extraction, and processing using advanced NLP and OCR technologies.',
      features: [
        'Document classification',
        'Data extraction and validation',
        'Contract analysis',
        'Invoice processing',
        'Compliance checking',
        'Automated workflows'
      ],
      pricing: '$299/month',
      category: 'Document Management',
      popularity: 84,
      rating: 4.4,
      users: '9K+',
      link: 'https://ziontechgroup.com/ai-document-processing'
    },
    {
      icon: Users,
      title: 'AI HR Solutions',
      description: 'Intelligent human resources management with AI-powered recruitment, performance analysis, and employee engagement.',
      features: [
        'Resume screening and matching',
        'Candidate assessment',
        'Performance analytics',
        'Employee sentiment analysis',
        'Workforce planning',
        'Compliance monitoring'
      ],
      pricing: '$399/month',
      category: 'Human Resources',
      popularity: 86,
      rating: 4.6,
      users: '4K+',
      link: 'https://ziontechgroup.com/ai-hr-solutions'
    },
    {
      icon: Heart,
      title: 'AI Healthcare Solutions',
      description: 'Advanced AI-powered healthcare solutions for diagnosis, treatment planning, and patient care optimization.',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Treatment recommendations',
        'Patient monitoring',
        'Drug discovery support',
        'Clinical trial optimization'
      ],
      pricing: '$799/month',
      category: 'Healthcare',
      popularity: 91,
      rating: 4.9,
      users: '3K+',
      link: 'https://ziontechgroup.com/ai-healthcare-solutions'
    },
    {
      icon: Calculator,
      title: 'AI Financial Services',
      description: 'Intelligent financial analysis, risk assessment, and automated trading solutions.',
      features: [
        'Risk assessment and modeling',
        'Algorithmic trading',
        'Fraud detection',
        'Credit scoring',
        'Portfolio optimization',
        'Regulatory compliance'
      ],
      pricing: '$699/month',
      category: 'Financial Services',
      popularity: 88,
      rating: 4.7,
      users: '6K+',
      link: 'https://ziontechgroup.com/ai-financial-services'
    },
    {
      icon: Car,
      title: 'AI Autonomous Systems',
      description: 'Advanced AI solutions for autonomous vehicles, robotics, and smart transportation systems.',
      features: [
        'Autonomous vehicle control',
        'Path planning and navigation',
        'Object detection and avoidance',
        'Predictive maintenance',
        'Fleet management',
        'Safety monitoring'
      ],
      pricing: '$999/month',
      category: 'Autonomous Systems',
      popularity: 82,
      rating: 4.5,
      users: '2K+',
      link: 'https://ziontechgroup.com/ai-autonomous-systems'
    }
  ]

  const categories = [
    'All',
    'Content & Marketing',
    'Customer Service',
    'Analytics',
    'Computer Vision',
    'Voice & Audio',
    'Security',
    'E-commerce',
    'Document Management',
    'Human Resources',
    'Healthcare',
    'Financial Services',
    'Autonomous Systems'
  ]

  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [searchTerm, setSearchTerm] = React.useState('')

  const filteredServices = aiServices.filter(service => {
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
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI can transform your business operations and drive growth.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage