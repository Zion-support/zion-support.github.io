import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Shield, 
  Cloud, 
  Globe, 
  Settings, 
  Users, 
  BarChart3, 
  Brain, 
  Zap, 
  Monitor, 
  Smartphone, 
  Database, 
  Lock, 
  RefreshCw, 
  Award, 
  Clock, 
  DollarSign,
  ExternalLink,
  Sparkles,
  FileText,
  MessageSquare,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  ChevronRight,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Save,
  Share2,
  Copy,
  Scissors,
  Paperclip,
  Image,
  Video,
  Music,
  File,
  Folder,
  Archive,
  Tag,
  Flag,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Phone,
  MapPin,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Server,
  Network,
  HardDrive,
  Cpu,
  MemoryStick,
  Router,
  Wifi,
  Bluetooth,
  Usb,
  Hdmi,
  Camera,
  Mic,
  Headphones,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Fax,
  Laptop,
  Desktop,
  Tablet,
  Watch,
  Gamepad2,
  Joystick,
  Tv,
  Radio,
  Speaker,
  Volume1,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  List,
  Grid,
  Layout,
  Sidebar,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  MoreHorizontal,
  MoreVertical,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  Check,
  AlertTriangle,
  Info as InfoIcon,
  HelpCircle,
  QuestionMarkCircle,
  ExclamationTriangle,
  XCircle as XCircleIcon,
  CheckCircle as CheckCircleIcon,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon2,
  HelpCircle as HelpCircleIcon,
  QuestionMarkCircle as QuestionMarkCircleIcon,
  ExclamationTriangle as ExclamationTriangleIcon
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import ResponsiveText from '../components/ResponsiveText';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ServicesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IT Services - Zion Tech Group",
    "description": "Comprehensive IT services including cloud infrastructure, cybersecurity, mobile development, web development, and digital transformation solutions.",
    "url": "https://ziontechgroup.com/services",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Cloud Infrastructure",
          "description": "Scalable cloud solutions with AWS, Azure, and Google Cloud",
          "offers": {
            "@type": "Offer",
            "price": "500",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "RecurringPaymentsPriceSpecification",
              "billingDuration": "P1M"
            }
          }
        }
      ]
    }
  };

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Comprehensive cloud solutions with AWS, Azure, and Google Cloud. Scalable, secure, and cost-effective infrastructure for businesses of all sizes.',
      shortDescription: 'Scalable cloud solutions',
      price: 'From $500/month',
      priceRange: { min: 500, max: 5000 },
      category: 'Infrastructure',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Multi-cloud architecture design',
        'Auto-scaling and load balancing',
        'Disaster recovery planning',
        'Cost optimization strategies',
        'Security and compliance',
        '24/7 monitoring and support',
        'Migration services',
        'Performance optimization',
        'Backup and recovery',
        'API integration'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Increase uptime to 99.9%'
      ],
      useCases: [
        'Web application hosting',
        'Data storage and backup',
        'Development environments',
        'Enterprise applications',
        'E-commerce platforms'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      timeline: '2-4 weeks',
      support: '24/7',
      link: '/cloud-infrastructure',
      featured: true,
      popular: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Advanced cybersecurity services including threat assessment, penetration testing, security monitoring, and compliance management.',
      shortDescription: 'Advanced cybersecurity protection',
      price: 'From $800/month',
      priceRange: { min: 800, max: 3000 },
      category: 'Security',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      features: [
        'Security risk assessment',
        'Penetration testing',
        'Vulnerability scanning',
        'Security monitoring (SOC)',
        'Incident response planning',
        'Compliance management (GDPR, HIPAA, SOX)',
        'Security awareness training',
        'Firewall configuration',
        'Intrusion detection systems',
        'Security audits'
      ],
      benefits: [
        'Protect against 99.9% of threats',
        'Achieve compliance requirements',
        'Reduce security incidents by 95%',
        'Save $100,000+ annually on security costs'
      ],
      useCases: [
        'Small business security',
        'Enterprise protection',
        'Compliance management',
        'Data breach prevention',
        'Security audit preparation'
      ],
      technologies: ['SIEM', 'Firewalls', 'Antivirus', 'VPN', 'MFA', 'Encryption'],
      timeline: '1-2 weeks',
      support: '24/7',
      link: '/cybersecurity',
      featured: true,
      popular: true
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development for iOS and Android. From concept to deployment with ongoing support and maintenance.',
      shortDescription: 'Native and cross-platform mobile apps',
      price: 'From $3,000/project',
      priceRange: { min: 3000, max: 50000 },
      category: 'Development',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design and prototyping',
        'API integration and backend services',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization',
        'Testing and quality assurance',
        'App store deployment'
      ],
      benefits: [
        'Reach millions of mobile users',
        'Increase customer engagement by 60%',
        'Improve brand visibility',
        'Generate new revenue streams'
      ],
      useCases: [
        'E-commerce mobile apps',
        'Business productivity apps',
        'Social media applications',
        'Gaming applications',
        'Healthcare and fitness apps'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xcode', 'Android Studio'],
      timeline: '8-16 weeks',
      support: '6 months included',
      link: '/mobile-development',
      featured: true,
      popular: true
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Custom web applications, e-commerce sites, and corporate websites. Modern, responsive, and SEO-optimized solutions for all business needs.',
      shortDescription: 'Custom web applications and sites',
      price: 'From $2,000/project',
      priceRange: { min: 2000, max: 25000 },
      category: 'Development',
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Custom web application development',
        'E-commerce platform development',
        'Responsive design',
        'SEO optimization',
        'Content management systems',
        'Database design and integration',
        'API development',
        'Third-party integrations',
        'Performance optimization',
        'Security implementation'
      ],
      benefits: [
        'Increase online presence',
        'Improve user experience',
        'Boost search engine rankings',
        'Generate more leads and sales'
      ],
      useCases: [
        'Corporate websites',
        'E-commerce stores',
        'Web applications',
        'Portfolio sites',
        'Blog platforms'
      ],
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'PHP', 'Python'],
      timeline: '4-12 weeks',
      support: '3 months included',
      link: '/web-development',
      featured: true,
      popular: true
    },
    {
      id: 'devops-solutions',
      name: 'DevOps Solutions',
      description: 'Complete DevOps implementation including CI/CD pipelines, infrastructure automation, monitoring, and deployment strategies.',
      shortDescription: 'DevOps implementation and automation',
      price: 'From $1,500/month',
      priceRange: { min: 1500, max: 4000 },
      category: 'DevOps',
      icon: <RefreshCw className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
        'Automated testing',
        'Deployment automation',
        'Monitoring and logging',
        'Performance optimization',
        'Security scanning',
        'Backup and recovery',
        'Documentation and training'
      ],
      benefits: [
        'Reduce deployment time by 80%',
        'Improve code quality and reliability',
        'Increase team productivity',
        'Minimize downtime and errors'
      ],
      useCases: [
        'Software development teams',
        'Continuous integration',
        'Automated deployments',
        'Infrastructure management',
        'Quality assurance'
      ],
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible'],
      timeline: '2-6 weeks',
      support: '24/7',
      link: '/devops-solutions',
      featured: true,
      popular: true
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics & BI',
      description: 'Data analytics solutions including data warehousing, business intelligence dashboards, and predictive analytics to drive informed decisions.',
      shortDescription: 'Data analytics and business intelligence',
      price: 'From $1,200/month',
      priceRange: { min: 1200, max: 3500 },
      category: 'Analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Data warehouse design',
        'ETL/ELT processes',
        'Business intelligence dashboards',
        'Predictive analytics',
        'Data visualization',
        'Report automation',
        'Data quality management',
        'Real-time analytics',
        'Machine learning integration',
        'Custom analytics solutions'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify new business opportunities',
        'Improve operational efficiency',
        'Reduce costs through insights'
      ],
      useCases: [
        'Sales performance analysis',
        'Customer behavior insights',
        'Financial reporting',
        'Marketing campaign analysis',
        'Operational optimization'
      ],
      technologies: ['Power BI', 'Tableau', 'Python', 'R', 'SQL', 'Apache Spark'],
      timeline: '3-8 weeks',
      support: '24/7',
      link: '/data-analytics',
      featured: true,
      popular: true
    },
    {
      id: 'blockchain-development',
      name: 'Blockchain Development',
      description: 'Blockchain solutions including smart contracts, DApps, cryptocurrency integration, and enterprise blockchain implementations.',
      shortDescription: 'Blockchain and smart contract development',
      price: 'From $5,000/project',
      priceRange: { min: 5000, max: 100000 },
      category: 'Blockchain',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Smart contract development',
        'DApp (Decentralized App) creation',
        'Cryptocurrency integration',
        'Token development',
        'Blockchain consulting',
        'Security auditing',
        'DeFi solutions',
        'NFT marketplace development',
        'Enterprise blockchain',
        'Wallet integration'
      ],
      benefits: [
        'Increase transparency and trust',
        'Reduce transaction costs',
        'Improve security',
        'Enable new business models'
      ],
      useCases: [
        'Supply chain tracking',
        'Digital identity management',
        'Financial services',
        'Gaming and NFTs',
        'Healthcare records'
      ],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Truffle', 'Hardhat', 'IPFS'],
      timeline: '6-20 weeks',
      support: '6 months included',
      link: '/blockchain-development',
      featured: true,
      popular: true
    },
    {
      id: 'iot-solutions',
      name: 'IoT Solutions',
      description: 'Internet of Things solutions including device development, data collection, analytics, and integration with existing systems.',
      shortDescription: 'Internet of Things solutions',
      price: 'From $2,500/project',
      priceRange: { min: 2500, max: 40000 },
      category: 'IoT',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      features: [
        'IoT device development',
        'Sensor integration',
        'Data collection and processing',
        'Real-time monitoring',
        'Cloud connectivity',
        'Mobile app integration',
        'Analytics and reporting',
        'Security implementation',
        'Scalability planning',
        'Maintenance and support'
      ],
      benefits: [
        'Improve operational efficiency',
        'Reduce manual monitoring',
        'Enable predictive maintenance',
        'Generate valuable insights'
      ],
      useCases: [
        'Smart home automation',
        'Industrial monitoring',
        'Fleet management',
        'Environmental monitoring',
        'Healthcare devices'
      ],
      technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'AWS IoT', 'Azure IoT', 'Google Cloud IoT'],
      timeline: '8-16 weeks',
      support: '6 months included',
      link: '/iot-solutions',
      featured: true,
      popular: true
    },
    {
      id: 'ar-vr-development',
      name: 'AR/VR Development',
      description: 'Augmented and Virtual Reality solutions for training, marketing, entertainment, and business applications.',
      shortDescription: 'Augmented and Virtual Reality solutions',
      price: 'From $4,000/project',
      priceRange: { min: 4000, max: 75000 },
      category: 'AR/VR',
      icon: <Eye className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      features: [
        'AR mobile applications',
        'VR immersive experiences',
        '3D modeling and animation',
        'Interactive user interfaces',
        'Cross-platform compatibility',
        'Performance optimization',
        'User experience design',
        'Content management',
        'Analytics integration',
        'Deployment and distribution'
      ],
      benefits: [
        'Enhance user engagement',
        'Improve training effectiveness',
        'Create immersive experiences',
        'Stand out from competitors'
      ],
      useCases: [
        'Training and education',
        'Marketing and advertising',
        'Gaming and entertainment',
        'Real estate visualization',
        'Healthcare applications'
      ],
      technologies: ['Unity', 'Unreal Engine', 'ARKit', 'ARCore', 'WebXR', 'Oculus SDK'],
      timeline: '10-20 weeks',
      support: '6 months included',
      link: '/ar-vr-development',
      featured: true,
      popular: true
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting services including technology assessment, digital transformation planning, and technology roadmap development.',
      shortDescription: 'Strategic IT consulting and planning',
      price: 'From $200/hour',
      priceRange: { min: 200, max: 500 },
      category: 'Consulting',
      icon: <Users className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      features: [
        'Technology assessment',
        'Digital transformation planning',
        'IT strategy development',
        'Technology roadmap creation',
        'Vendor evaluation',
        'Cost optimization',
        'Security assessment',
        'Compliance planning',
        'Change management',
        'Training and support'
      ],
      benefits: [
        'Align technology with business goals',
        'Reduce IT costs and complexity',
        'Improve efficiency and productivity',
        'Stay ahead of technology trends'
      ],
      useCases: [
        'Digital transformation',
        'Technology modernization',
        'IT strategy planning',
        'Vendor selection',
        'Cost optimization'
      ],
      technologies: ['Various', 'Cloud Platforms', 'Security Tools', 'Analytics', 'AI/ML', 'DevOps'],
      timeline: '1-4 weeks',
      support: 'Ongoing',
      link: '/it-consulting',
      featured: true,
      popular: true
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Network design, implementation, and management including LAN, WAN, wireless networks, and network security.',
      shortDescription: 'Network design and management',
      price: 'From $1,000/month',
      priceRange: { min: 1000, max: 2500 },
      category: 'Infrastructure',
      icon: <Network className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500',
      features: [
        'Network design and planning',
        'LAN/WAN implementation',
        'Wireless network setup',
        'Network security configuration',
        'VPN setup and management',
        'Network monitoring',
        'Performance optimization',
        'Disaster recovery planning',
        'Hardware procurement',
        'Ongoing maintenance'
      ],
      benefits: [
        'Improve network performance',
        'Enhance security and reliability',
        'Reduce downtime',
        'Support business growth'
      ],
      useCases: [
        'Office network setup',
        'Remote work solutions',
        'Data center networking',
        'Branch office connectivity',
        'Network security'
      ],
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Ubiquiti', 'Meraki', 'Palo Alto'],
      timeline: '2-4 weeks',
      support: '24/7',
      link: '/network-infrastructure',
      featured: true,
      popular: true
    },
    {
      id: 'data-center-services',
      name: 'Data Center Services',
      description: 'Data center design, implementation, and management including server setup, storage solutions, and disaster recovery.',
      shortDescription: 'Data center design and management',
      price: 'From $2,000/month',
      priceRange: { min: 2000, max: 8000 },
      category: 'Infrastructure',
      icon: <Server className="w-8 h-8" />,
      color: 'from-slate-500 to-gray-500',
      features: [
        'Data center design',
        'Server installation and configuration',
        'Storage solutions',
        'Backup and disaster recovery',
        'Power and cooling management',
        'Security implementation',
        'Monitoring and maintenance',
        'Capacity planning',
        'Migration services',
        '24/7 support'
      ],
      benefits: [
        'Ensure high availability',
        'Improve data security',
        'Reduce operational costs',
        'Support business continuity'
      ],
      useCases: [
        'Enterprise data centers',
        'Colocation services',
        'Disaster recovery sites',
        'Cloud migration',
        'Server consolidation'
      ],
      technologies: ['VMware', 'Hyper-V', 'SAN', 'NAS', 'Backup Software', 'Monitoring Tools'],
      timeline: '4-8 weeks',
      support: '24/7',
      link: '/data-center-services',
      featured: true,
      popular: true
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length, color: 'from-gray-500 to-gray-600' },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length, color: 'from-blue-500 to-cyan-500' },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length, color: 'from-red-500 to-orange-500' },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length, color: 'from-purple-500 to-pink-500' },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length, color: 'from-indigo-500 to-purple-500' },
    { name: 'Analytics', count: itServices.filter(s => s.category === 'Analytics').length, color: 'from-yellow-500 to-orange-500' },
    { name: 'Blockchain', count: itServices.filter(s => s.category === 'Blockchain').length, color: 'from-cyan-500 to-blue-500' },
    { name: 'IoT', count: itServices.filter(s => s.category === 'IoT').length, color: 'from-teal-500 to-cyan-500' },
    { name: 'AR/VR', count: itServices.filter(s => s.category === 'AR/VR').length, color: 'from-pink-500 to-rose-500' },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length, color: 'from-violet-500 to-purple-500' }
  ];

  const stats = [
    { number: '12+', label: 'IT Service Categories', icon: <Settings className="w-6 h-6" /> },
    { number: '500+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { number: '99.9%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="IT Services - Zion Tech Group | Cloud, Security, Development & More"
        description="Comprehensive IT services including cloud infrastructure, cybersecurity, mobile development, web development, DevOps, and digital transformation solutions."
        keywords="IT services, cloud infrastructure, cybersecurity, mobile development, web development, DevOps, digital transformation, technology consulting"
        canonical="https://ziontechgroup.com/services"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">500+ Projects Completed</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              IT Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Comprehensive IT services to transform your business. From cloud infrastructure to cybersecurity, 
            we provide end-to-end technology solutions that drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Portfolio
            </FuturisticButton>
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
        </ResponsiveContainer>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.name === 'All'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our most popular and comprehensive IT services, trusted by businesses worldwide.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {itServices.filter(service => service.featured).map((service, index) => (
              <FuturisticCard
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <Link to={service.link} className="block">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Category</span>
                      <span className="px-2 py-1 bg-white/10 rounded-full">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Timeline</span>
                      <span className="text-green-400">{service.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Support</span>
                      <span>{service.support}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* All Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of IT services organized by category.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-6">
            {itServices.map((service, index) => (
              <FuturisticCard
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <Link to={service.link} className="block">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Category</span>
                      <span className="px-2 py-1 bg-white/10 rounded-full">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Timeline</span>
                      <span className="text-green-400">{service.timeline}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let our expert team help you build, secure, and optimize your technology infrastructure. 
            Get a free consultation and discover how we can accelerate your digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              View Pricing
              <DollarSign className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;