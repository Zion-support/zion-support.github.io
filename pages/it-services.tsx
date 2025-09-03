import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle, 
  Users, 
  Award,
  Network,
  BarChart3,
  Lock,
  Server,
  Database,
  Code,
  Star,
  TrendingUp,
  Clock,
  MessageSquare,
  Smartphone,
  Target,
  Calendar,
  FileText,
  Mail,
  Home,
  Settings,
  Mic,
  Satellite,
  Camera,
  Cpu,
  Wifi,
  Monitor,
  Smartphone as Phone,
  Headphones,
  Video,
  Image,
  Music,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Truck,
  Package,
  MapPin,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as LocationIcon,
  TreePine,
  Building,
  Laptop,
  HardDrive,
  Router,
  Wrench,
  Cog,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Mic as MicIcon,
  MicOff,
  Camera as CameraIcon,
  CameraOff,
  Share,
  Copy,
  Edit,
  Trash2,
  Save,
  Plus,
  Minus,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  MousePointer,
  Hand,
  Eye,
  EyeOff,
  Lock as LockIcon,
  Unlock,
  Key,
  User,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Users as UsersIcon,
  UserCircle,
  UserCog,
  UserEdit,
  UserSearch,
  UserShield,
  UserStar,
  UserTag,
  UserTie,
  UserVoice,
  UserWrench,
  UserZap,
  UserHeart,
  UserSmile,
  UserFrown,
  UserMeh,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserShield2,
  UserStar2,
  UserTag2,
  UserTie2,
  UserVoice2,
  UserWrench2,
  UserZap2,
  UserHeart2,
  UserSmile2,
  UserFrown2,
  UserMeh2
} from 'lucide-react'

// Dynamic imports for better performance
const SEO = dynamic(() => import('../src/components/seo/SEOHead'), { ssr: false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { ssr: false })

export default function ITServices() {
  const title = 'IT Services — Zion Tech Group'
  const description = 'Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and digital transformation solutions.'

  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud Platform',
      icon: Cloud,
      features: [
        'Multi-cloud architecture design and implementation',
        'Legacy system migration and modernization',
        'Serverless computing and containerization',
        'Auto-scaling and load balancing',
        'Cost optimization and FinOps practices',
        'Disaster recovery and backup solutions'
      ],
      pricing: '$5,000 - $50,000/month',
      delivery: '4-12 weeks',
      category: 'Cloud Services',
      benefits: 'Reduce infrastructure costs by 40%, improve scalability, enhance security'
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Enterprise-grade security solutions and compliance management',
      icon: Shield,
      features: [
        'Zero-trust security architecture',
        'SOC 2, GDPR, HIPAA compliance automation',
        'Penetration testing and vulnerability assessments',
        'Security monitoring and incident response',
        'Identity and access management (IAM)',
        'Data encryption and privacy protection'
      ],
      pricing: '$3,000 - $25,000/month',
      delivery: '3-8 weeks',
      category: 'Security Services',
      benefits: 'Protect against cyber threats, ensure compliance, reduce security risks'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design, implementation, and management of enterprise networks',
      icon: Network,
      features: [
        'SD-WAN and hybrid network solutions',
        'Network security and firewall management',
        'Wireless network design and optimization',
        'Network monitoring and performance tuning',
        'VoIP and unified communications',
        'Network documentation and training'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '2-6 weeks',
      category: 'Network Services',
      benefits: 'Improved network performance, enhanced security, reduced downtime'
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services',
      icon: Users,
      features: [
        '24/7/365 technical support coverage',
        'Remote desktop and troubleshooting',
        'Software installation and updates',
        'Hardware procurement and management',
        'User training and documentation',
        'SLA-based response times'
      ],
      pricing: '$1,500 - $8,000/month',
      delivery: '1-2 weeks',
      category: 'Support Services',
      benefits: 'Faster issue resolution, reduced downtime, improved user satisfaction'
    },
    {
      title: 'Data Management & Analytics',
      description: 'Data warehousing, analytics, and business intelligence solutions',
      icon: Database,
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Business intelligence dashboards',
        'Data governance and quality management',
        'Real-time analytics and reporting',
        'Machine learning data preparation'
      ],
      pricing: '$4,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'Data Services',
      benefits: 'Data-driven decisions, improved insights, better business performance'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code',
      icon: Settings,
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (IaC) implementation',
        'Container orchestration with Kubernetes',
        'Monitoring and logging solutions',
        'Automated testing and quality gates',
        'DevSecOps and security integration'
      ],
      pricing: '$3,500 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'DevOps Services',
      benefits: 'Faster deployments, improved reliability, reduced manual errors'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: Zap,
      features: [
        'Digital strategy and roadmap development',
        'Process automation and optimization',
        'Legacy system modernization',
        'Change management and training',
        'Technology stack evaluation',
        'ROI measurement and optimization'
      ],
      pricing: '$10,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Consulting Services',
      benefits: 'Modernize operations, improve efficiency, gain competitive advantage'
    },
    {
      title: 'Managed IT Services',
      description: 'Comprehensive IT management and monitoring services',
      icon: Monitor,
      features: [
        'Proactive monitoring and maintenance',
        'Patch management and updates',
        'Performance optimization',
        'Capacity planning and scaling',
        'Vendor management and procurement',
        'IT strategy and planning'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '2-4 weeks',
      category: 'Managed Services',
      benefits: 'Reduced IT overhead, proactive maintenance, improved reliability'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, smart contracts, and decentralized applications',
      icon: Network,
      features: [
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Blockchain integration and consulting',
        'Cryptocurrency wallet development',
        'Tokenomics and governance design',
        'Cross-chain interoperability solutions'
      ],
      pricing: '$8,000 - $50,000/month',
      delivery: '8-20 weeks',
      category: 'Blockchain Services',
      benefits: 'Innovative solutions, enhanced security, new revenue streams'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things solutions and edge computing infrastructure',
      icon: Wifi,
      features: [
        'IoT device integration and management',
        'Edge computing infrastructure setup',
        'Real-time data processing and analytics',
        'IoT security and device management',
        'Sensor network design and implementation',
        'Edge AI and machine learning deployment'
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '6-16 weeks',
      category: 'IoT Services',
      benefits: 'Real-time insights, improved efficiency, reduced latency'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development',
      icon: Smartphone,
      features: [
        'iOS and Android native development',
        'Cross-platform React Native and Flutter apps',
        'Mobile app security and performance optimization',
        'App store deployment and management',
        'Mobile backend and API development',
        'Mobile analytics and user engagement'
      ],
      pricing: '$3,000 - $25,000/month',
      delivery: '4-12 weeks',
      category: 'Mobile Development',
      benefits: 'Enhanced user experience, increased engagement, mobile-first approach'
    },
    {
      title: 'API Development & Integration',
      description: 'RESTful APIs, microservices, and system integration solutions',
      icon: Code,
      features: [
        'RESTful API design and development',
        'GraphQL API implementation',
        'Microservices architecture',
        'Third-party system integration',
        'API security and authentication',
        'API documentation and testing'
      ],
      pricing: '$2,500 - $18,000/month',
      delivery: '3-10 weeks',
      category: 'API Services',
      benefits: 'Improved system connectivity, faster development, better scalability'
    },
    {
      title: 'Quality Assurance & Testing',
      description: 'Comprehensive software testing and quality assurance services',
      icon: CheckCircle,
      features: [
        'Automated testing framework development',
        'Performance and load testing',
        'Security testing and vulnerability assessment',
        'User acceptance testing (UAT)',
        'Test automation and CI/CD integration',
        'Quality metrics and reporting'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '2-8 weeks',
      category: 'QA Services',
      benefits: 'Higher quality software, reduced bugs, improved user experience'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting and technology roadmap development',
      icon: Brain,
      features: [
        'IT strategy and roadmap development',
        'Technology assessment and evaluation',
        'Digital transformation planning',
        'IT governance and best practices',
        'Cost optimization and ROI analysis',
        'Vendor selection and management'
      ],
      pricing: '$1,500 - $12,000/month',
      delivery: '2-6 weeks',
      category: 'Consulting Services',
      benefits: 'Strategic guidance, cost optimization, technology alignment'
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning',
      icon: HardDrive,
      features: [
        'Automated backup systems and scheduling',
        'Disaster recovery planning and testing',
        'Data replication and synchronization',
        'Business continuity planning',
        'Recovery time objective (RTO) optimization',
        'Cloud-based backup solutions'
      ],
      pricing: '$1,000 - $8,000/month',
      delivery: '1-4 weeks',
      category: 'Backup Services',
      benefits: 'Data protection, business continuity, reduced downtime'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title={title}
        description={description}
        keywords={['IT services', 'cloud computing', 'cybersecurity', 'network management', 'digital transformation', 'DevOps']}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Comprehensive IT Services
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive IT services. From cloud infrastructure to cybersecurity, 
              we provide end-to-end technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive information technology services designed to modernize your infrastructure, 
              enhance security, and drive digital transformation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-purple-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <div className="ml-4">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <p className="text-sm text-green-600 font-medium">{service.benefits}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-blue-600 text-xs">+{service.features.length - 3} more features</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-bold text-gray-900">{service.pricing}</span>
                      <span className="text-sm text-gray-500">{service.delivery}</span>
                    </div>
                    <Link 
                      href="/contact" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors text-center block"
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive IT services can modernize your technology stack and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                Start Your IT Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                Call +1 302 464 0950
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}