'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  Settings,
  Smartphone,
  ShoppingCart,
  Lock,
  Workflow,
  Cpu,
  Sparkles,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Zap,
  Eye,
  MessageSquare,
  FileText,
  Image,
  Video,
  Mic,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  Camera,
  Monitor,
  Laptop,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  MemoryStick,
  Network,
  Activity,
  PieChart,
  LineChart,
  BarChart3,
  TrendingDown,
  Minus,
  Plus,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  ExternalLink,
  Copy,
  Edit,
  Trash2,
  Save,
  Share,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Reply,
  Forward,
  Archive,
  Inbox,
  Outbox,
  Flag,
  Tag,
  Calendar,
  Time,
  Map,
  Nav,
  Compass,
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
  Music,
  Film,
  Gamepad2,
  Headphones,
  Speaker,
  Radio,
  Tv,
  Mobile,
  Tablet,
  Watch,
  Desktop,
  Printer,
  Scanner,
  Fax,
  Keyboard,
  Mouse,
  Headset,
  Webcam,
  Microphone,
  CameraIcon,
  VideoIcon,
  ImageIcon,
  File,
  Folder,
  FolderOpen,
  Document,
  FileImage,
  FileVideo,
  FileAudio,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileZip,
  FileCode,
  FileJson,
  FileXml,
  FileCsv,
  FileHtml,
  FileCss,
  FileJs,
  FileTs,
  FileReact,
  FileVue,
  FileAngular,
  FileSvelte,
  FileNext,
  FileNuxt,
  FileGatsby,
  FileAstro,
  FileRemix,
  FileSolid,
  FileQwik,
  FileLit,
  FileStencil,
  FileSvelteIcon,
  FileSolidIcon,
  FileQwikIcon,
  FileLitIcon,
  FileStencilIcon,
  FileAstroIcon,
  FileRemixIcon,
  FileGatsbyIcon,
  FileNextIcon,
  FileNuxtIcon,
  FileVueIcon,
  FileAngularIcon,
  FileSvelteIcon2,
  FileReactIcon,
  FileTsIcon,
  FileJsIcon,
  FileCssIcon,
  FileHtmlIcon,
  FileCsvIcon,
  FileXmlIcon,
  FileJsonIcon,
  FileCodeIcon,
  FileZipIcon,
  FilePowerpointIcon,
  FileExcelIcon,
  FileWordIcon,
  FilePdfIcon,
  FileAudioIcon,
  FileVideoIcon,
  FileImageIcon,
  FileTextIcon,
  FileIcon,
  FolderOpenIcon,
  FolderIcon,
  VideoIcon2,
  ImageIcon2,
  CameraIcon2,
  MicrophoneIcon,
  WebcamIcon,
  HeadsetIcon,
  MouseIcon,
  KeyboardIcon,
  FaxIcon,
  ScannerIcon,
  PrinterIcon,
  MonitorIcon2,
  DesktopIcon,
  LaptopIcon2,
  WatchIcon,
  MobileIcon,
  TabletIcon,
  RadioIcon,
  SpeakerIcon,
  HeadphonesIcon,
  Gamepad2Icon,
  FilmIcon,
  MusicIcon,
  TheaterIcon,
  MuseumIcon,
  LibraryIcon,
  UniversityIcon,
  SchoolIcon,
  HospitalIcon,
  BankIcon,
  StoreIcon,
  FactoryIcon,
  BuildingIcon,
  HomeIcon,
  CompassIcon,
  NavigationIcon,
  MapIcon,
  TimeIcon,
  CalendarIcon,
  TagIcon,
  FlagIcon,
  OutboxIcon,
  InboxIcon,
  ArchiveIcon,
  ForwardIcon,
  ReplyIcon,
  SendIcon,
  MessageCircleIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  HeartIcon,
  BookmarkIcon,
  ShareIcon,
  SaveIcon,
  Trash2Icon,
  EditIcon,
  CopyIcon,
  ExternalLinkIcon,
  HelpCircleIcon,
  InfoIcon,
  AlertTriangleIcon,
  CheckIcon,
  XIcon,
  PlusIcon,
  MinusIcon,
  TrendingIcon,
  TrendingDownIcon,
  BarChart3Icon,
  LineChartIcon,
  PieChartIcon,
  ActivityIcon,
  NetworkIcon,
  StorageIcon,
  MemoryStickIcon,
  ProcessorIcon,
  BatteryIcon,
  BluetoothIcon,
  WifiIcon,
  HardDriveIcon,
  ServerIcon,
  LaptopIcon3,
  MonitorIcon3,
  CameraIcon3,
  Volume2Icon,
  StopIcon,
  PauseIcon,
  PlayIcon,
  UploadIcon,
  DownloadIcon,
  FilterIcon,
  SearchIcon,
  MicIcon,
  VideoIcon3,
  ImageIcon3,
  FileTextIcon2,
  MessageSquareIcon,
  EyeIcon,
  ZapIcon,
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  AwardIcon,
  RocketIcon,
  SparklesIcon,
  WorkflowIcon,
  LockIcon,
  ShoppingCartIcon,
  SmartphoneIcon,
  DatabaseIcon,
  SettingsIcon,
  TargetIcon,
  DollarSignIcon,
  ClockIcon,
  TrendingUpIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  GlobeIcon,
  UsersIcon,
  ShieldIcon,
  BarChartIcon,
  CodeIcon,
  CloudIcon,
  BrainIcon
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Comprehensive IT services with market pricing
  const itServices = [
    {
      category: 'Infrastructure Services',
      services: [
        {
          name: 'Cloud Infrastructure Management',
          description: 'Complete cloud infrastructure setup, migration, and management across AWS, Azure, and Google Cloud.',
          features: [
            'Multi-cloud Strategy',
            'Infrastructure as Code',
            'Auto-scaling',
            'Load Balancing',
            'Disaster Recovery',
            'Cost Optimization'
          ],
          price: '$2,999/month',
          originalPrice: '$5,999/month',
          savings: '50% OFF',
          icon: Cloud,
          color: 'from-blue-500 to-cyan-500',
          popular: true,
          link: 'https://ziontechgroup.com/cloud-infrastructure',
          capabilities: [
            'AWS/Azure/GCP Expertise',
            'Terraform Automation',
            'Kubernetes Orchestration',
            'Monitoring & Alerting',
            'Security Hardening',
            '24/7 Support'
          ]
        },
        {
          name: 'Server Management & Maintenance',
          description: 'Comprehensive server management including monitoring, updates, security, and performance optimization.',
          features: [
            '24/7 Monitoring',
            'Automated Updates',
            'Security Patching',
            'Performance Tuning',
            'Backup Management',
            'Incident Response'
          ],
          price: '$1,499/month',
          originalPrice: '$2,999/month',
          savings: '50% OFF',
          icon: Server,
          color: 'from-green-500 to-emerald-500',
          popular: true,
          link: 'https://ziontechgroup.com/server-management',
          capabilities: [
            'Windows/Linux Support',
            'Virtualization',
            'Container Management',
            'Database Administration',
            'Network Configuration',
            'Proactive Maintenance'
          ]
        },
        {
          name: 'Database Administration',
          description: 'Expert database management, optimization, and maintenance for all major database systems.',
          features: [
            'Performance Optimization',
            'Backup & Recovery',
            'Security Management',
            'Capacity Planning',
            'Migration Services',
            'Monitoring & Alerting'
          ],
          price: '$1,799/month',
          originalPrice: '$3,599/month',
          savings: '50% OFF',
          icon: Database,
          color: 'from-purple-500 to-pink-500',
          popular: false,
          link: 'https://ziontechgroup.com/database-admin',
          capabilities: [
            'MySQL/PostgreSQL/MongoDB',
            'SQL Server/Oracle',
            'Redis/Elasticsearch',
            'Data Migration',
            'Query Optimization',
            'High Availability Setup'
          ]
        },
        {
          name: 'Network Infrastructure',
          description: 'Complete network design, implementation, and management for enterprise environments.',
          features: [
            'Network Design',
            'Security Implementation',
            'Performance Monitoring',
            'Troubleshooting',
            'Capacity Planning',
            'Documentation'
          ],
          price: '$2,299/month',
          originalPrice: '$4,599/month',
          savings: '50% OFF',
          icon: Network,
          color: 'from-orange-500 to-red-500',
          popular: true,
          link: 'https://ziontechgroup.com/network-infrastructure',
          capabilities: [
            'Cisco/Juniper Expertise',
            'SD-WAN Implementation',
            'Firewall Configuration',
            'VPN Setup',
            'Wireless Networks',
            'Network Security'
          ]
        }
      ]
    },
    {
      category: 'Security Services',
      services: [
        {
          name: 'Cybersecurity Solutions',
          description: 'Comprehensive cybersecurity services including threat detection, prevention, and incident response.',
          features: [
            'Threat Detection',
            'Vulnerability Assessment',
            'Penetration Testing',
            'Security Monitoring',
            'Incident Response',
            'Compliance Management'
          ],
          price: '$2,499/month',
          originalPrice: '$4,999/month',
          savings: '50% OFF',
          icon: Shield,
          color: 'from-red-500 to-pink-500',
          popular: true,
          link: 'https://ziontechgroup.com/cybersecurity',
          capabilities: [
            'SOC 2 Compliance',
            'ISO 27001 Certification',
            'GDPR Compliance',
            'Security Audits',
            'Employee Training',
            '24/7 Monitoring'
          ]
        },
        {
          name: 'Data Protection & Backup',
          description: 'Comprehensive data protection solutions including backup, recovery, and disaster recovery planning.',
          features: [
            'Automated Backups',
            'Disaster Recovery',
            'Data Encryption',
            'Compliance Reporting',
            'Recovery Testing',
            'Cloud Storage'
          ],
          price: '$899/month',
          originalPrice: '$1,799/month',
          savings: '50% OFF',
          icon: Lock,
          color: 'from-slate-500 to-gray-500',
          popular: false,
          link: 'https://ziontechgroup.com/data-protection',
          capabilities: [
            'Multi-tier Backup',
            'RTO/RPO Optimization',
            'Cross-region Replication',
            'Encryption at Rest',
            'Compliance Reporting',
            'Recovery Testing'
          ]
        },
        {
          name: 'Identity & Access Management',
          description: 'Secure identity management solutions with single sign-on and multi-factor authentication.',
          features: [
            'Single Sign-On (SSO)',
            'Multi-Factor Authentication',
            'Role-Based Access Control',
            'Identity Governance',
            'Audit Logging',
            'Compliance Reporting'
          ],
          price: '$1,299/month',
          originalPrice: '$2,599/month',
          savings: '50% OFF',
          icon: Users,
          color: 'from-indigo-500 to-purple-500',
          popular: true,
          link: 'https://ziontechgroup.com/identity-management',
          capabilities: [
            'Active Directory Integration',
            'SAML/OAuth Support',
            'Biometric Authentication',
            'Privileged Access Management',
            'Compliance Automation',
            'User Provisioning'
          ]
        }
      ]
    },
    {
      category: 'Development & Integration',
      services: [
        {
          name: 'Custom Software Development',
          description: 'Bespoke software solutions tailored to your specific business requirements and processes.',
          features: [
            'Custom Applications',
            'API Development',
            'Integration Services',
            'Mobile Apps',
            'Web Applications',
            'Quality Assurance'
          ],
          price: '$3,999/month',
          originalPrice: '$7,999/month',
          savings: '50% OFF',
          icon: Code,
          color: 'from-teal-500 to-blue-500',
          popular: true,
          link: 'https://ziontechgroup.com/custom-development',
          capabilities: [
            'Full-stack Development',
            'Microservices Architecture',
            'Cloud-native Applications',
            'API Integration',
            'DevOps Implementation',
            'Agile Development'
          ]
        },
        {
          name: 'System Integration',
          description: 'Seamless integration of disparate systems and applications for improved efficiency.',
          features: [
            'Legacy System Integration',
            'API Integration',
            'Data Synchronization',
            'Workflow Automation',
            'Real-time Processing',
            'Error Handling'
          ],
          price: '$2,799/month',
          originalPrice: '$5,599/month',
          savings: '50% OFF',
          icon: Workflow,
          color: 'from-amber-500 to-yellow-500',
          popular: false,
          link: 'https://ziontechgroup.com/system-integration',
          capabilities: [
            'Enterprise Integration',
            'Cloud Integration',
            'Data Migration',
            'API Management',
            'Message Queuing',
            'Event-driven Architecture'
          ]
        },
        {
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
          features: [
            'Native Development',
            'Cross-platform Apps',
            'UI/UX Design',
            'App Store Deployment',
            'Push Notifications',
            'Analytics Integration'
          ],
          price: '$2,499/month',
          originalPrice: '$4,999/month',
          savings: '50% OFF',
          icon: Smartphone,
          color: 'from-violet-500 to-purple-500',
          popular: true,
          link: 'https://ziontechgroup.com/mobile-development',
          capabilities: [
            'React Native/Flutter',
            'iOS/Android Native',
            'Progressive Web Apps',
            'Offline Functionality',
            'Security Implementation',
            'Performance Optimization'
          ]
        }
      ]
    },
    {
      category: 'Support & Maintenance',
      services: [
        {
          name: '24/7 IT Support',
          description: 'Round-the-clock technical support with guaranteed response times and resolution.',
          features: [
            '24/7 Availability',
            'Remote Support',
            'On-site Support',
            'Priority Response',
            'Knowledge Base',
            'Proactive Monitoring'
          ],
          price: '$1,999/month',
          originalPrice: '$3,999/month',
          savings: '50% OFF',
          icon: Headphones,
          color: 'from-emerald-500 to-green-500',
          popular: true,
          link: 'https://ziontechgroup.com/it-support',
          capabilities: [
            'Help Desk Management',
            'Ticket System',
            'Remote Desktop',
            'Asset Management',
            'User Training',
            'SLA Compliance'
          ]
        },
        {
          name: 'IT Consulting & Strategy',
          description: 'Strategic IT consulting to align technology with business objectives and growth.',
          features: [
            'Technology Assessment',
            'Strategic Planning',
            'Digital Transformation',
            'Cost Optimization',
            'Vendor Management',
            'Project Management'
          ],
          price: '$1,599/month',
          originalPrice: '$3,199/month',
          savings: '50% OFF',
          icon: Target,
          color: 'from-rose-500 to-pink-500',
          popular: false,
          link: 'https://ziontechgroup.com/it-consulting',
          capabilities: [
            'Technology Roadmap',
            'Digital Strategy',
            'Change Management',
            'Vendor Evaluation',
            'ROI Analysis',
            'Best Practices'
          ]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Average response time under 2 minutes with 24/7 availability and guaranteed SLA compliance.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, encryption, and comprehensive audit trails.'
    },
    {
      icon: Cloud,
      title: 'Scalable Solutions',
      description: 'Flexible, scalable IT solutions that grow with your business and adapt to changing needs.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified IT professionals with decades of experience across all major technologies and platforms.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'IT Services' }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Comprehensive Information Technology Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with our comprehensive suite of IT services. From cloud infrastructure 
              to cybersecurity, we provide end-to-end technology solutions tailored to your specific needs.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a 
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our IT Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {itServices.map((category, categoryIndex) => (
          <section key={categoryIndex} className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="cyber-card hologram-card p-6 relative group hover:scale-105 transition-all duration-300">
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>MOST POPULAR</span>
                        </div>
                      </div>
                    )}
                    
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-center leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Capabilities:</h4>
                      {service.capabilities.map((capability, capabilityIndex) => (
                        <div key={capabilityIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-400 text-xs">{capability}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">{service.savings}</span>
                      </div>
                      <div className="text-sm text-gray-400">per month, billed annually</div>
                    </div>
                    
                    <div className="space-y-3">
                      <a
                        href={service.link}
                        className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Start Free Trial</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/contact"
                        className="block w-full border border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                      >
                        Contact Sales
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Get started with our IT services today and see the difference professional technology management can make.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="cyber-card hologram-card p-6">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak with our IT experts</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">Get detailed information</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">Our headquarters</p>
                <p className="text-cyan-400 font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ITServicesPage;