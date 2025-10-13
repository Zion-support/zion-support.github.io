import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  Users, 
  Sparkles,
  Target,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Monitor,
  Mail,
  Phone,
  MapPin,
  Award,
  Lock,
  Settings,
  PieChart,
  FileText,
  Video,
  Image,
  MessageSquare,
  Calendar,
  ShoppingCart,
  CreditCard,
  Truck,
  Wifi,
  Camera,
  Headphones,
  Mic,
  Palette,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Heart,
  ThumbsUp,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Copy,
  Scissors,
  Save,
  Folder,
  File,
  Archive,
  Tag,
  Flag,
  Bookmark,
  Bell,
  AlertCircle,
  Info,
  HelpCircle,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Sidebar,
  Navigation,
  Compass,
  Map,
  Home,
  Building,
  Store,
  Factory,
  Warehouse,
  Office,
  School,
  Hospital,
  Bank,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  Bus,
  Taxi,
  Package,
  Box,
  Gift,
  ShoppingBag,
  Wallet,
  Coins,
  Banknote,
  Receipt,
  Calculator,
  Percent,
  TrendingDown,
  Activity,
  Pulse,
  Thermometer,
  Gauge,
  Battery,
  Bluetooth,
  Radio,
  Tv,
  Laptop,
  Tablet,
  Watch,
  Speaker,
  Music,
  Film,
  Book,
  Newspaper,
  HardDrive,
  Server,
  Cpu,
  MemoryStick,
  Disc,
  Cd,
  Dvd,
  FloppyDisk,
  Usb,
  Hdmi,
  Ethernet,
  Zap,
  Bot,
  Network,
  HardDrive as HardDriveIcon,
  Server as ServerIcon,
  MemoryStick as MemoryStickIcon,
  Disc as DiscIcon,
  Cd as CdIcon,
  Dvd as DvdIcon,
  FloppyDisk as FloppyDiskIcon,
  Usb as UsbIcon,
  Hdmi as HdmiIcon,
  Ethernet as EthernetIcon
} from 'lucide-react';

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All IT Services');

  const itServices = [
    // Cloud Infrastructure & Migration
    {
      id: 'cloud-infrastructure-pro',
      name: 'Cloud Infrastructure Pro',
      description: 'Comprehensive cloud infrastructure solutions with AWS, Azure, and Google Cloud Platform. Includes migration, optimization, and 24/7 monitoring.',
      price: '$5,999/month',
      originalPrice: '$11,999/month',
      features: [
        'Multi-cloud architecture',
        'Automated migration',
        'Cost optimization',
        'Security compliance',
        'Disaster recovery',
        'Performance monitoring',
        'Auto-scaling',
        'Load balancing',
        'CDN integration',
        '24/7 support'
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'Cloud Services',
      link: '/cloud-infrastructure',
      popular: true,
      rating: 4.9,
      users: '200+',
      freeTrial: '30 days',
      marketPrice: '$15,000-30,000/month',
      savings: '50%'
    },
    {
      id: 'cloud-migration-pro',
      name: 'Cloud Migration Pro',
      description: 'Seamless cloud migration services with zero downtime, data integrity, and application optimization for enterprise workloads.',
      price: '$8,999/month',
      originalPrice: '$17,999/month',
      features: [
        'Zero-downtime migration',
        'Data integrity assurance',
        'Application optimization',
        'Security assessment',
        'Performance tuning',
        'Cost analysis',
        'Training & documentation',
        'Post-migration support',
        'Compliance validation',
        'Risk mitigation'
      ],
      icon: <Upload className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'Cloud Services',
      link: '/cloud-migration',
      popular: true,
      rating: 4.8,
      users: '150+',
      freeTrial: '30 days',
      marketPrice: '$25,000-50,000/month',
      savings: '50%'
    },
    {
      id: 'hybrid-cloud-solutions',
      name: 'Hybrid Cloud Solutions',
      description: 'Advanced hybrid cloud architecture connecting on-premises infrastructure with public and private clouds for optimal performance.',
      price: '$7,499/month',
      originalPrice: '$14,999/month',
      features: [
        'Hybrid architecture design',
        'On-premises integration',
        'Data synchronization',
        'Security management',
        'Compliance monitoring',
        'Performance optimization',
        'Disaster recovery',
        'Cost management',
        'Monitoring & alerting',
        'Expert consultation'
      ],
      icon: <Network className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'Cloud Services',
      link: '/hybrid-cloud-solutions',
      popular: false,
      rating: 4.7,
      users: '100+',
      freeTrial: '30 days',
      marketPrice: '$20,000-40,000/month',
      savings: '50%'
    },

    // Cybersecurity & Security
    {
      id: 'cybersecurity-suite-pro',
      name: 'Cybersecurity Suite Pro',
      description: 'Comprehensive cybersecurity solutions including threat detection, incident response, compliance management, and security training.',
      price: '$6,999/month',
      originalPrice: '$13,999/month',
      features: [
        'Threat detection & response',
        'Vulnerability assessment',
        'Penetration testing',
        'Security monitoring',
        'Incident response',
        'Compliance management',
        'Security training',
        'Risk assessment',
        'Policy development',
        '24/7 SOC support'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      category: 'Cybersecurity',
      link: '/cybersecurity-suite-pro',
      popular: true,
      rating: 4.9,
      users: '300+',
      freeTrial: '30 days',
      marketPrice: '$18,000-35,000/month',
      savings: '50%'
    },
    {
      id: 'network-security-pro',
      name: 'Network Security Pro',
      description: 'Advanced network security solutions with firewall management, intrusion detection, and network monitoring for enterprise networks.',
      price: '$4,999/month',
      originalPrice: '$9,999/month',
      features: [
        'Firewall management',
        'Intrusion detection',
        'Network monitoring',
        'VPN solutions',
        'Access control',
        'Traffic analysis',
        'Threat prevention',
        'Compliance reporting',
        'Security policies',
        'Expert support'
      ],
      icon: <Lock className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      category: 'Cybersecurity',
      link: '/network-security',
      popular: true,
      rating: 4.8,
      users: '250+',
      freeTrial: '30 days',
      marketPrice: '$12,000-25,000/month',
      savings: '50%'
    },
    {
      id: 'data-protection-pro',
      name: 'Data Protection Pro',
      description: 'Comprehensive data protection solutions including encryption, backup, recovery, and compliance for sensitive business data.',
      price: '$3,999/month',
      originalPrice: '$7,999/month',
      features: [
        'Data encryption',
        'Backup & recovery',
        'Data loss prevention',
        'Compliance management',
        'Access controls',
        'Audit logging',
        'Data classification',
        'Retention policies',
        'Disaster recovery',
        'Expert consultation'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'Cybersecurity',
      link: '/data-protection-pro',
      popular: false,
      rating: 4.7,
      users: '200+',
      freeTrial: '30 days',
      marketPrice: '$10,000-20,000/month',
      savings: '50%'
    },

    // Software Development
    {
      id: 'custom-software-development',
      name: 'Custom Software Development',
      description: 'End-to-end custom software development services with modern technologies, agile methodology, and comprehensive testing.',
      price: '$12,999/month',
      originalPrice: '$25,999/month',
      features: [
        'Custom application development',
        'Web applications',
        'Mobile applications',
        'API development',
        'Database design',
        'UI/UX design',
        'Quality assurance',
        'Testing & deployment',
        'Maintenance & support',
        'Documentation'
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      category: 'Software Development',
      link: '/custom-software-development',
      popular: true,
      rating: 4.8,
      users: '500+',
      freeTrial: '30 days',
      marketPrice: '$30,000-60,000/month',
      savings: '50%'
    },
    {
      id: 'web-development-pro',
      name: 'Web Development Pro',
      description: 'Professional web development services including responsive design, e-commerce solutions, and content management systems.',
      price: '$7,999/month',
      originalPrice: '$15,999/month',
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'CMS development',
        'SEO optimization',
        'Performance optimization',
        'Security implementation',
        'Mobile optimization',
        'Cross-browser compatibility',
        'Analytics integration',
        'Maintenance & support'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      category: 'Software Development',
      link: '/web-development',
      popular: true,
      rating: 4.7,
      users: '400+',
      freeTrial: '30 days',
      marketPrice: '$20,000-40,000/month',
      savings: '50%'
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development Pro',
      description: 'Native and cross-platform mobile app development for iOS and Android with modern frameworks and best practices.',
      price: '$9,999/month',
      originalPrice: '$19,999/month',
      features: [
        'Native iOS development',
        'Native Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'API integration',
        'Push notifications',
        'Offline functionality',
        'App store deployment',
        'Performance optimization',
        'Maintenance & updates'
      ],
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'Software Development',
      link: '/mobile-app-development',
      popular: true,
      rating: 4.8,
      users: '300+',
      freeTrial: '30 days',
      marketPrice: '$25,000-50,000/month',
      savings: '50%'
    },

    // DevOps & Infrastructure
    {
      id: 'devops-solutions-pro',
      name: 'DevOps Solutions Pro',
      description: 'Complete DevOps implementation with CI/CD pipelines, containerization, monitoring, and automation for modern software delivery.',
      price: '$8,999/month',
      originalPrice: '$17,999/month',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure as Code',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation',
        'Configuration management',
        'Security integration',
        'Performance optimization',
        'Team training'
      ],
      icon: <Settings className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'DevOps',
      link: '/devops-solutions',
      popular: true,
      rating: 4.8,
      users: '200+',
      freeTrial: '30 days',
      marketPrice: '$22,000-45,000/month',
      savings: '50%'
    },
    {
      id: 'infrastructure-management',
      name: 'Infrastructure Management Pro',
      description: 'Comprehensive infrastructure management including server administration, network management, and system optimization.',
      price: '$6,499/month',
      originalPrice: '$12,999/month',
      features: [
        'Server administration',
        'Network management',
        'System optimization',
        'Performance monitoring',
        'Capacity planning',
        'Disaster recovery',
        'Security hardening',
        'Patch management',
        'Backup management',
        '24/7 monitoring'
      ],
      icon: <Server className="w-8 h-8" />,
      color: 'from-gray-500 to-slate-500',
      category: 'DevOps',
      link: '/infrastructure-management',
      popular: false,
      rating: 4.7,
      users: '250+',
      freeTrial: '30 days',
      marketPrice: '$16,000-32,000/month',
      savings: '50%'
    },
    {
      id: 'container-orchestration',
      name: 'Container Orchestration Pro',
      description: 'Advanced container orchestration with Kubernetes, Docker, and microservices architecture for scalable applications.',
      price: '$7,499/month',
      originalPrice: '$14,999/month',
      features: [
        'Kubernetes deployment',
        'Docker containerization',
        'Microservices architecture',
        'Service mesh implementation',
        'Auto-scaling',
        'Load balancing',
        'Service discovery',
        'Health monitoring',
        'Security policies',
        'Expert support'
      ],
      icon: <Package className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      category: 'DevOps',
      link: '/container-orchestration',
      popular: true,
      rating: 4.8,
      users: '180+',
      freeTrial: '30 days',
      marketPrice: '$18,000-36,000/month',
      savings: '50%'
    },

    // Data & Analytics
    {
      id: 'data-warehouse-solutions',
      name: 'Data Warehouse Solutions Pro',
      description: 'Enterprise data warehouse design and implementation with ETL processes, data modeling, and business intelligence integration.',
      price: '$9,999/month',
      originalPrice: '$19,999/month',
      features: [
        'Data warehouse design',
        'ETL process development',
        'Data modeling',
        'Business intelligence',
        'Data quality management',
        'Performance optimization',
        'Security implementation',
        'Backup & recovery',
        'Documentation',
        'Training & support'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'Data & Analytics',
      link: '/data-warehouse-solutions',
      popular: true,
      rating: 4.8,
      users: '150+',
      freeTrial: '30 days',
      marketPrice: '$25,000-50,000/month',
      savings: '50%'
    },
    {
      id: 'business-intelligence-pro',
      name: 'Business Intelligence Pro',
      description: 'Advanced business intelligence solutions with data visualization, reporting, and analytics for data-driven decision making.',
      price: '$5,999/month',
      originalPrice: '$11,999/month',
      features: [
        'Data visualization',
        'Interactive dashboards',
        'Automated reporting',
        'Data mining',
        'Predictive analytics',
        'KPI monitoring',
        'Custom metrics',
        'Real-time analytics',
        'Mobile BI',
        'User training'
      ],
      icon: <PieChart className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'Data & Analytics',
      link: '/business-intelligence-pro',
      popular: true,
      rating: 4.7,
      users: '200+',
      freeTrial: '30 days',
      marketPrice: '$15,000-30,000/month',
      savings: '50%'
    },
    {
      id: 'big-data-solutions',
      name: 'Big Data Solutions Pro',
      description: 'Comprehensive big data solutions with Hadoop, Spark, and machine learning for processing and analyzing large datasets.',
      price: '$11,999/month',
      originalPrice: '$23,999/month',
      features: [
        'Hadoop implementation',
        'Spark processing',
        'Machine learning',
        'Data lake architecture',
        'Stream processing',
        'Real-time analytics',
        'Data governance',
        'Security implementation',
        'Performance tuning',
        'Expert consultation'
      ],
      icon: <Activity className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      category: 'Data & Analytics',
      link: '/big-data-solutions',
      popular: false,
      rating: 4.8,
      users: '100+',
      freeTrial: '30 days',
      marketPrice: '$30,000-60,000/month',
      savings: '50%'
    },

    // IT Consulting & Support
    {
      id: 'it-consulting-pro',
      name: 'IT Consulting Pro',
      description: 'Strategic IT consulting services including technology assessment, digital transformation, and IT strategy development.',
      price: '$3,999/month',
      originalPrice: '$7,999/month',
      features: [
        'Technology assessment',
        'Digital transformation',
        'IT strategy development',
        'Architecture design',
        'Technology selection',
        'Implementation planning',
        'Change management',
        'Training programs',
        'Ongoing support',
        'Expert consultation'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'IT Consulting',
      link: '/it-consulting',
      popular: true,
      rating: 4.8,
      users: '400+',
      freeTrial: '30 days',
      marketPrice: '$10,000-20,000/month',
      savings: '50%'
    },
    {
      id: 'it-support-pro',
      name: 'IT Support Pro',
      description: 'Comprehensive IT support services including help desk, technical support, and system maintenance for business operations.',
      price: '$2,999/month',
      originalPrice: '$5,999/month',
      features: [
        '24/7 help desk',
        'Technical support',
        'System maintenance',
        'Software updates',
        'Hardware support',
        'Network troubleshooting',
        'Security monitoring',
        'Backup management',
        'User training',
        'Documentation'
      ],
      icon: <Headphones className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      category: 'IT Consulting',
      link: '/it-support',
      popular: true,
      rating: 4.7,
      users: '600+',
      freeTrial: '30 days',
      marketPrice: '$8,000-15,000/month',
      savings: '50%'
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation Pro',
      description: 'End-to-end digital transformation services including process automation, technology modernization, and change management.',
      price: '$15,999/month',
      originalPrice: '$31,999/month',
      features: [
        'Process automation',
        'Technology modernization',
        'Change management',
        'Workflow optimization',
        'System integration',
        'Data migration',
        'User training',
        'Performance monitoring',
        'Continuous improvement',
        'Expert guidance'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'IT Consulting',
      link: '/digital-transformation',
      popular: true,
      rating: 4.9,
      users: '80+',
      freeTrial: '30 days',
      marketPrice: '$40,000-80,000/month',
      savings: '50%'
    },

    // Specialized Solutions
    {
      id: 'blockchain-solutions',
      name: 'Blockchain Solutions Pro',
      description: 'Enterprise blockchain solutions including smart contracts, decentralized applications, and cryptocurrency integration.',
      price: '$12,999/month',
      originalPrice: '$25,999/month',
      features: [
        'Smart contract development',
        'DApp development',
        'Cryptocurrency integration',
        'Blockchain architecture',
        'Security implementation',
        'Token development',
        'DeFi solutions',
        'NFT platforms',
        'Compliance management',
        'Expert consultation'
      ],
      icon: <Lock className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'Specialized Solutions',
      link: '/blockchain-solutions',
      popular: false,
      rating: 4.8,
      users: '60+',
      freeTrial: '30 days',
      marketPrice: '$30,000-60,000/month',
      savings: '50%'
    },
    {
      id: 'iot-solutions-pro',
      name: 'IoT Solutions Pro',
      description: 'Comprehensive IoT solutions including device management, data collection, analytics, and integration with existing systems.',
      price: '$8,999/month',
      originalPrice: '$17,999/month',
      features: [
        'IoT device management',
        'Data collection',
        'Real-time analytics',
        'System integration',
        'Security implementation',
        'Cloud connectivity',
        'Mobile applications',
        'Dashboard development',
        'Maintenance & support',
        'Expert consultation'
      ],
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-cyan-500 to-teal-500',
      category: 'Specialized Solutions',
      link: '/iot-solutions',
      popular: false,
      rating: 4.7,
      users: '120+',
      freeTrial: '30 days',
      marketPrice: '$22,000-45,000/month',
      savings: '50%'
    },
    {
      id: 'ar-vr-solutions',
      name: 'AR/VR Solutions Pro',
      description: 'Advanced augmented and virtual reality solutions for training, marketing, and immersive user experiences.',
      price: '$9,999/month',
      originalPrice: '$19,999/month',
      features: [
        'AR application development',
        'VR application development',
        '3D modeling',
        'Interactive experiences',
        'Cross-platform support',
        'Performance optimization',
        'User interface design',
        'Content management',
        'Analytics integration',
        'Expert consultation'
      ],
      icon: <Camera className="w-8 h-8" />,
      color: 'from-pink-500 to-purple-500',
      category: 'Specialized Solutions',
      link: '/ar-vr-solutions',
      popular: false,
      rating: 4.6,
      users: '80+',
      freeTrial: '30 days',
      marketPrice: '$25,000-50,000/month',
      savings: '50%'
    }
  ];

  const categories = [
    { name: 'All IT Services', count: itServices.length, color: 'from-cyan-500 to-purple-500' },
    { name: 'Cloud Services', count: itServices.filter(s => s.category.includes('Cloud')).length, color: 'from-blue-500 to-cyan-500' },
    { name: 'Cybersecurity', count: itServices.filter(s => s.category.includes('Cybersecurity')).length, color: 'from-red-500 to-pink-500' },
    { name: 'Software Development', count: itServices.filter(s => s.category.includes('Software Development')).length, color: 'from-green-500 to-teal-500' },
    { name: 'DevOps', count: itServices.filter(s => s.category.includes('DevOps')).length, color: 'from-cyan-500 to-blue-500' },
    { name: 'Data & Analytics', count: itServices.filter(s => s.category.includes('Data & Analytics')).length, color: 'from-indigo-500 to-purple-500' },
    { name: 'IT Consulting', count: itServices.filter(s => s.category.includes('IT Consulting')).length, color: 'from-green-500 to-emerald-500' },
    { name: 'Specialized Solutions', count: itServices.filter(s => s.category.includes('Specialized Solutions')).length, color: 'from-yellow-500 to-orange-500' }
  ];

  const filteredServices = selectedCategory === 'All IT Services' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '20+', label: 'IT Services', icon: <Settings className="w-6 h-6" /> },
    { number: '1,000+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Expert Support', icon: <Headphones className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Scalable Solutions",
      description: "IT solutions that grow with your business and adapt to changing requirements",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "Unlimited scaling"
    },
    {
      title: "Cost Optimization",
      description: "Reduce IT costs through efficient solutions and optimized resource utilization",
      icon: <Target className="w-6 h-6" />,
      stat: "40% cost reduction"
    },
    {
      title: "Enhanced Security",
      description: "Comprehensive security solutions to protect your business from cyber threats",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9% security"
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Global Enterprises',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The cloud migration was seamless and we saved 60% on operational costs.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'Robert Kim',
      company: 'Tech Innovations',
      role: 'VP of Engineering',
      content: 'The DevOps solutions are outstanding. Our deployment time reduced from days to hours with automated CI/CD pipelines.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Lisa Thompson',
      company: 'Financial Services Corp',
      role: 'IT Director',
      content: 'Their cybersecurity suite provides enterprise-grade protection. We prevented multiple security incidents with their proactive monitoring.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive IT services including cloud solutions, cybersecurity, software development, and digital transformation."
        />
        <meta
          name="keywords"
          content="IT services, cloud solutions, cybersecurity, software development, DevOps, digital transformation, technology consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">20+ Comprehensive IT Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                IT Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with comprehensive IT services including cloud solutions, cybersecurity, 
              software development, and digital transformation. Enterprise-grade technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT solutions are designed to deliver measurable results and transform your business operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 mb-3">{benefit.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Comprehensive IT Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of IT services designed to transform your business operations and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                      {service.savings && (
                        <div className="text-green-400 text-xs font-semibold mt-1">
                          Save {service.savings}
                        </div>
                      )}
                      {service.marketPrice && (
                        <div className="text-gray-400 text-xs mt-1">
                          Market: {service.marketPrice}
                        </div>
                      )}
                    </div>
                    
                    {/* Rating and Users */}
                    <div className="flex items-center justify-center space-x-4 mb-4 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-gray-300">{service.rating}</span>
                      </div>
                      <div className="text-gray-400">{service.users} users</div>
                      <div className="text-cyan-400">{service.freeTrial} free trial</div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our enterprise clients say about our IT services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our IT experts help you identify the best solutions for your business 
                and implement technology that drives real results.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;