'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  Star,
  Users,
  Clock,
  Globe,
  Smartphone,
  Database,
  Settings,
  Target,
  TrendingUp,
  Lock,
  Monitor,
  Server,
  Cpu,
  FileText,
  MessageCircle,
  ShoppingCart,
  Rocket,
  Award,
  Lightbulb,
  Gauge,
  Phone,
  Mail,
  MapPin,
  Network,
  HardDrive,
  Wifi,
  Layers,
  PieChart,
  Activity,
  Bot,
  Sparkles,
  CpuChip,
  Workflow,
  Eye,
  Mic,
  Camera,
  Search,
  Wrench,
  Cog,
  Terminal,
  GitBranch,
  Container,
  Database2,
  Globe2,
  Smartphone2,
  Laptop,
  Tablet,
  Headphones,
  Printer,
  Router,
  HardDrive2,
  Cpu2,
  MemoryStick,
  HardDriveIcon,
  WifiIcon,
  NetworkIcon,
  ServerIcon,
  CloudIcon,
  ShieldIcon,
  LockIcon,
  Key,
  Fingerprint,
  EyeIcon,
  SearchIcon,
  Filter,
  SortAsc,
  SortDesc,
  RefreshCw,
  Download,
  Upload,
  Share2,
  Copy,
  Trash2,
  Edit,
  Save,
  Plus,
  Minus,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  ExternalLink,
  Link,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  Calendar,
  ClockIcon,
  Timer,
  Stopwatch,
  Play,
  Pause,
  Square,
  RotateCcw,
  RotateCw,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  MicIcon,
  MicOff,
  Video,
  VideoOff,
  CameraIcon,
  CameraOff,
  Image,
  File,
  Folder,
  FolderOpen,
  Archive,
  Bookmark,
  Tag,
  Tags,
  Flag,
  StarIcon,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Send,
  Reply,
  Forward,
  Share,
  BookOpen,
  Book,
  FileTextIcon,
  FileImage,
  FileVideo,
  FileAudio,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileCode,
  FileJson,
  FileXml,
  FileCss,
  FileHtml,
  FileJs,
  FileTs,
  FileJsx,
  FileTsx,
  FileVue,
  FileReact,
  FileAngular,
  FileSvelte,
  FileSolid,
  FileNext,
  FileNuxt,
  FileGatsby,
  FileAstro,
  FileRemix,
  FileSvelteKit,
  FileSolidStart,
  FileQwik,
  FileLit,
  FileStencil,
  FilePreact,
  FileInferno,
  FileMithril,
  FileHyperapp,
  FileRiot,
  FileMarko,
  FileMithril2,
  FileHyperapp2,
  FileRiot2,
  FileMarko2,
  FileMithril3,
  FileHyperapp3,
  FileRiot3,
  FileMarko3,
  FileMithril4,
  FileHyperapp4,
  FileRiot4,
  FileMarko4,
  FileMithril5,
  FileHyperapp5,
  FileRiot5,
  FileMarko5,
  FileMithril6,
  FileHyperapp6,
  FileRiot6,
  FileMarko6,
  FileMithril7,
  FileHyperapp7,
  FileRiot7,
  FileMarko7,
  FileMithril8,
  FileHyperapp8,
  FileRiot8,
  FileMarko8,
  FileMithril9,
  FileHyperapp9,
  FileRiot9,
  FileMarko9,
  FileMithril10,
  FileHyperapp10,
  FileRiot10,
  FileMarko10
} from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud.',
      features: [
        'Multi-cloud Strategy & Planning',
        'Cloud Migration Services',
        'Infrastructure as Code (IaC)',
        'Auto-scaling & Load Balancing',
        'Disaster Recovery Solutions',
        'Cost Optimization & Monitoring'
      ],
      pricing: {
        starter: '$2,999/month',
        pro: '$7,999/month',
        enterprise: '$19,999/month'
      },
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      category: 'Cloud Services',
      useCases: ['Cloud Migration', 'Infrastructure Modernization', 'Disaster Recovery', 'Cost Optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and compliance management.',
      features: [
        'Security Assessment & Auditing',
        'Threat Detection & Response',
        'Vulnerability Management',
        'Compliance (SOC2, GDPR, HIPAA)',
        'Security Training & Awareness',
        'Incident Response Planning'
      ],
      pricing: {
        starter: '$1,999/month',
        pro: '$4,999/month',
        enterprise: '$12,999/month'
      },
      link: 'https://ziontechgroup.com/cybersecurity-solutions',
      category: 'Security',
      useCases: ['Security Audits', 'Threat Protection', 'Compliance Management', 'Incident Response']
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices for web, mobile, and desktop applications.',
      features: [
        'Web Application Development',
        'Mobile App Development (iOS/Android)',
        'Desktop Application Development',
        'API Development & Integration',
        'Microservices Architecture',
        'Legacy System Modernization'
      ],
      pricing: {
        starter: '$5,999/month',
        pro: '$14,999/month',
        enterprise: '$34,999/month'
      },
      link: 'https://ziontechgroup.com/custom-development',
      category: 'Development',
      useCases: ['Custom Applications', 'System Integration', 'Legacy Modernization', 'API Development']
    },
    {
      icon: Database,
      title: 'Database Management & Optimization',
      description: 'Expert database services including design, optimization, migration, and 24/7 monitoring and support.',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration Services',
        'Backup & Recovery Solutions',
        '24/7 Database Monitoring',
        'Security & Compliance'
      ],
      pricing: {
        starter: '$1,499/month',
        pro: '$3,999/month',
        enterprise: '$9,999/month'
      },
      link: 'https://ziontechgroup.com/database-management',
      category: 'Database',
      useCases: ['Database Optimization', 'Data Migration', 'Performance Tuning', 'Backup Solutions']
    },
    {
      icon: Network,
      title: 'Network Infrastructure & Security',
      description: 'Complete network solutions including design, implementation, monitoring, and security for enterprise networks.',
      features: [
        'Network Design & Architecture',
        'Wireless Network Solutions',
        'Network Security Implementation',
        'Performance Monitoring',
        'Disaster Recovery Planning',
        '24/7 Network Support'
      ],
      pricing: {
        starter: '$2,499/month',
        pro: '$6,999/month',
        enterprise: '$16,999/month'
      },
      link: 'https://ziontechgroup.com/network-infrastructure',
      category: 'Networking',
      useCases: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Disaster Recovery']
    },
    {
      icon: Server,
      title: 'Server Management & Maintenance',
      description: 'Comprehensive server management including setup, configuration, monitoring, and maintenance for all server types.',
      features: [
        'Server Setup & Configuration',
        'Performance Monitoring',
        'Security Hardening',
        'Backup & Recovery',
        'Patch Management',
        '24/7 Server Support'
      ],
      pricing: {
        starter: '$999/month',
        pro: '$2,499/month',
        enterprise: '$5,999/month'
      },
      link: 'https://ziontechgroup.com/server-management',
      category: 'Server Management',
      useCases: ['Server Setup', 'Performance Monitoring', 'Security Hardening', 'Maintenance']
    },
    {
      icon: BarChart,
      title: 'IT Analytics & Monitoring',
      description: 'Advanced IT monitoring and analytics platform providing insights into system performance, usage, and security.',
      features: [
        'Real-time System Monitoring',
        'Performance Analytics',
        'Security Event Monitoring',
        'Capacity Planning',
        'Custom Dashboards',
        'Automated Alerting'
      ],
      pricing: {
        starter: '$799/month',
        pro: '$1,999/month',
        enterprise: '$4,999/month'
      },
      link: 'https://ziontechgroup.com/it-analytics',
      category: 'Monitoring',
      useCases: ['System Monitoring', 'Performance Analytics', 'Security Monitoring', 'Capacity Planning']
    },
    {
      icon: Zap,
      title: 'IT Automation & DevOps',
      description: 'Streamline IT operations with automation, CI/CD pipelines, and DevOps best practices for faster, more reliable deployments.',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure Automation',
        'Configuration Management',
        'Deployment Automation',
        'Monitoring & Alerting',
        'DevOps Training'
      ],
      pricing: {
        starter: '$1,999/month',
        pro: '$4,999/month',
        enterprise: '$11,999/month'
      },
      link: 'https://ziontechgroup.com/it-automation',
      category: 'Automation',
      useCases: ['CI/CD Implementation', 'Infrastructure Automation', 'Deployment Automation', 'DevOps Training']
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Management',
      description: 'Complete mobile device management solution including device provisioning, security, and application management.',
      features: [
        'Device Enrollment & Provisioning',
        'Security Policy Enforcement',
        'Application Management',
        'Remote Device Control',
        'Compliance Monitoring',
        'User Training & Support'
      ],
      pricing: {
        starter: '$1,299/month',
        pro: '$2,999/month',
        enterprise: '$6,999/month'
      },
      link: 'https://ziontechgroup.com/mobile-device-management',
      category: 'Mobile Management',
      useCases: ['Device Provisioning', 'Security Enforcement', 'App Management', 'Compliance Monitoring']
    },
    {
      icon: Workflow,
      title: 'IT Service Management',
      description: 'Comprehensive IT service management including help desk, ticketing, asset management, and service level agreements.',
      features: [
        'Help Desk & Ticketing System',
        'Asset Management',
        'Change Management',
        'Incident Management',
        'Service Level Agreements',
        'ITIL Best Practices'
      ],
      pricing: {
        starter: '$1,499/month',
        pro: '$3,499/month',
        enterprise: '$7,999/month'
      },
      link: 'https://ziontechgroup.com/it-service-management',
      category: 'Service Management',
      useCases: ['Help Desk Operations', 'Asset Management', 'Change Management', 'Incident Response']
    },
    {
      icon: Globe,
      title: 'Web Development & Hosting',
      description: 'Professional web development services with modern frameworks, responsive design, and reliable hosting solutions.',
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'Content Management Systems',
        'Web Hosting & Maintenance',
        'SEO Optimization',
        'Performance Optimization'
      ],
      pricing: {
        starter: '$2,999/month',
        pro: '$7,999/month',
        enterprise: '$19,999/month'
      },
      link: 'https://ziontechgroup.com/web-development',
      category: 'Web Development',
      useCases: ['Website Development', 'E-commerce Solutions', 'CMS Implementation', 'Hosting Services']
    },
    {
      icon: Settings,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting services to help align technology with business goals and optimize IT investments.',
      features: [
        'IT Strategy Development',
        'Technology Assessment',
        'Digital Transformation Planning',
        'Vendor Management',
        'IT Budget Planning',
        'Technology Roadmapping'
      ],
      pricing: {
        starter: '$1,999/month',
        pro: '$4,999/month',
        enterprise: '$11,999/month'
      },
      link: 'https://ziontechgroup.com/it-consulting',
      category: 'Consulting',
      useCases: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'Vendor Management']
    }
  ]

  const categories = ['All', 'Cloud Services', 'Security', 'Development', 'Database', 'Networking', 'Server Management', 'Monitoring', 'Automation', 'Mobile Management', 'Service Management', 'Web Development', 'Consulting']

  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text-enhanced">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Complete IT solutions designed to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we provide end-to-end IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 futuristic-btn">
                <Rocket className="w-5 h-5 mr-2" />
                Explore IT Solutions
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Schedule IT Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IT Capabilities Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive IT services cover every aspect of your technology infrastructure and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card-enhanced text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cloud Solutions</h3>
              <p className="text-gray-300 text-sm">Complete cloud migration, management, and optimization services</p>
            </div>

            <div className="cyber-card-enhanced text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
              <p className="text-gray-300 text-sm">Advanced security solutions and compliance management</p>
            </div>

            <div className="cyber-card-enhanced text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Development</h3>
              <p className="text-gray-300 text-sm">Custom software development and system integration</p>
            </div>

            <div className="cyber-card-enhanced text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">IT Management</h3>
              <p className="text-gray-300 text-sm">Complete IT operations and service management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="cyber-card-enhanced hover-lift group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
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

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 2).map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                        {useCase}
                      </span>
                    ))}
                    {service.useCases.length > 2 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                        +{service.useCases.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Starting from</span>
                    <span className="text-2xl font-bold text-white">{service.pricing.starter}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Pro: {service.pricing.pro} • Enterprise: {service.pricing.enterprise}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 inline" />
                    Learn More
                  </a>
                  <button className="px-4 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white rounded-lg transition-all duration-300 text-sm">
                    <DollarSign className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Support Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Support <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tiers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the level of IT support that matches your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card-enhanced text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Basic Support</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Business hours support (9 AM - 5 PM)
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email and phone support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic troubleshooting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Remote assistance
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Monthly system health check
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="cyber-card-enhanced text-center border-2 border-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Support</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$2,499<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Extended hours support (7 AM - 7 PM)
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority response times
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-site support when needed
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Proactive monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Weekly system reports
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  IT consulting included
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="cyber-card-enhanced text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Support</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$5,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7/365 support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated account manager
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-site support team
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Real-time monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Daily system reports
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Strategic IT planning
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom SLA agreements
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our IT experts help you build a robust, secure, and scalable technology foundation for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 futuristic-btn">
              <Rocket className="w-5 h-5 mr-2" />
              Start IT Assessment
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Contact IT Experts
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITServicesPage