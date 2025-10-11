<<<<<<< HEAD
'use client';
import React, {Suspense, lazy}from 'react';
import {Link}}from 'react-router-dom';
import {Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight,}
=======
'use client'
import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import {
    Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight,
>>>>>>> origin/main
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock,
  TrendingUp, Star, Settings, Calendar, CheckSquare, FileText,
  Mail, Phone, DollarSign, Clock, Award, CheckCircle,
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart,
  CreditCard, Building, Factory, Car, Plane, Ship, Train,
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench,
  Hammer, Paintbrush, Scissors, BookOpen, Calculator,
  Compass, PieChart, TrendingDown, Activity, Zap as Lightning,
  Target as Crosshair, Shield as Security, Users as People,
  Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow,
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,
  Eye, Search, MessageSquare, PieChart as Chart,
  Download, Upload, RefreshCw, Play, Pause, Stop,
  Volume2, VolumeX, Mic, MicOff, Headphones,
  Wifi, WifiOff, Battery, BatteryCharging,
  Sun, Moon, Sunrise, Sunset, CloudRain,
  Snowflake, Wind, Thermometer, Droplets,
  Lightbulb, LightbulbOff, Power, PowerOff,
  Wrench as Tool, Hammer as HammerIcon,
  Paintbrush as Brush, Scissors as ScissorIcon,
  BookOpen as Book, Calculator as Calc,
  Compass as CompassIcon, PieChart as PieChartIcon,
  TrendingDown as TrendingDownIcon, Activity as ActivityIcon,
  Grid3X3, Package, Utensils, Microscope,
  Atom, Cpu as CpuIcon, Database as DatabaseIcon,
  Network, Layers, Workflow, GitBranch,
  Zap as ZapIcon, Brain as BrainIcon, Eye as EyeIcon,
  Search as SearchIcon, MessageSquare as MessageSquareIcon,
  PieChart as PieChartIcon2, BarChart as BarChartIcon,
  TrendingUp as TrendingUpIcon, Activity as ActivityIcon2,
  Target as TargetIcon, Globe as GlobeIcon,
  Shield as ShieldIcon, Lock as LockIcon,
  Users as UsersIcon, Settings as SettingsIcon,
  Calendar as CalendarIcon, CheckSquare as CheckSquareIcon,
  FileText as FileTextIcon, Mail as MailIcon2,
  Phone as PhoneIcon2, DollarSign as DollarSignIcon,
  Clock as ClockIcon, Award as AwardIcon,
  CheckCircle as CheckCircleIcon, ArrowRight as ArrowRightIcon,
  Bot as BotIcon, Palette as PaletteIcon,
  Camera as CameraIcon, Music as MusicIcon,
  Video as VideoIcon, Gamepad2 as Gamepad2Icon,
  ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon,
  Building as BuildingIcon, Factory as FactoryIcon,
  Car as CarIcon, Plane as PlaneIcon,
  Ship as ShipIcon, Train as TrainIcon,
  Home as HomeIcon, Heart as HeartIcon,
  Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon,
  Briefcase as BriefcaseIcon, Wrench as WrenchIcon,
  Hammer as HammerIcon2, Paintbrush as PaintbrushIcon,
  Scissors as ScissorsIcon, BookOpen as BookOpenIcon,
  Calculator as CalculatorIcon, Compass as CompassIcon2,
  PieChart as PieChartIcon3, TrendingDown as TrendingDownIcon2,
  Activity as ActivityIcon3, Zap as ZapIcon2,
  Target as TargetIcon2, Shield as ShieldIcon2,
  Users as UsersIcon2, Star as StarIcon2,
  CheckCircle as CheckCircleIcon2, ArrowRight as ArrowRightIcon2,
  Phone as PhoneIcon3, Mail as MailIcon3,
  MapPin as LocationIcon, Server, HardDrive,
  Monitor, Printer, Router, Wifi as WifiIcon,
  Smartphone as SmartphoneIcon, Laptop,
  Tablet, Headphones as HeadphonesIcon,
  Keyboard, Mouse, Webcam, Speaker,
  HardDrive as HardDriveIcon, Server as ServerIcon,
  Monitor as MonitorIcon, Printer as PrinterIcon,
  Router as RouterIcon, Wifi as WifiIcon2,
  Smartphone as SmartphoneIcon2, Laptop as LaptopIcon,
  Tablet as TabletIcon, Headphones as HeadphonesIcon2,
  Keyboard as KeyboardIcon, Mouse as MouseIcon,
<<<<<<< HEAD
  Webcam as WebcamIcon, Speaker as SpeakerIcon
} from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
=======
<<<<<<< HEAD
  Webcam as WebcamIcon, Speaker as SpeakerIcon;}} from 'lucide-react';
const ITConsultingPage: React.FC = () => {,
    const [selectedCategory, setSelectedCategory] = useState('all');
>>>>>>> origin/main
  const [searchTerm, setSearchTerm] = useState('');
const itServices = [;
    // IT Infrastructure Services;
=======
  Webcam as WebcamIcon, Speaker as SpeakerIcon
  }
} from 'lucide-react'
const ITConsultingPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
const itServices = [
    // IT Infrastructure Services
>>>>>>> origin/main
    {
      id: 'it-infrastructure-design',
      name: 'IT Infrastructure Design & Implementation',
      description: 'Complete IT infrastructure design, deployment, and optimization for modern businesses',
      category: 'infrastructure',
      icon: Server,
      price: 'Starting at $5,000',
      features: [,
        'Network architecture design',
        'Server deployment and configuration',
        'Storage solutions implementation',
        'Backup and disaster recovery setup',

        'Security infrastructure deployment',

        'Monitoring and management tools',

        'Documentation and training',

        'Ongoing support and maintenance'
      ],
      benefits: [,
        'Scalable and reliable infrastructure',

        'Improved system performance',

        'Enhanced security posture',

        'Reduced downtime and outages',

        'Future-proof technology stack'
      ],
      targetAudience: 'Small to large businesses, Startups, Enterprises',
      setupTime: '2-8 weeks',
      freeConsultation: 'Yes',
      support: '24/7 technical support',
      certifications: ['Cisco', 'Microsoft', 'VMware', 'AWS', 'Azure'],
      link: 'https://ziontechgroup.com/it-infrastructure-design',
<<<<<<< HEAD
      caseStudy: 'Manufacturing company reduced IT downtime by 95% with our infrastructure design'
    },
    {
      id: 'cloud-migration-services',
=======
      caseStudy: 'Manufacturing company reduced IT downtime by 95% with our infrastructure design',},
    {id: 'cloud-migration-services',
>>>>>>> origin/main
      name: 'Cloud Migration & Optimization',
      description: 'Seamless migration to cloud platforms with optimization for cost and performance',
      category: 'cloud',
      icon: Cloud,
      price: 'Starting at $3,000',
      features: [,
        'Cloud readiness assessment',
        'Migration strategy development',
        'Data and application migration',
        'Cloud security implementation',

        'Cost optimization analysis',

        'Performance tuning',

        'Disaster recovery setup',

        'Training and documentation'
      ],
      benefits: [,
        'Reduce IT costs by 30-50%',

        'Improve scalability and flexibility',

        'Enhanced security and compliance',

        'Better disaster recovery capabilities',

        'Access to latest technologies'
      ],
      targetAudience: 'Businesses looking to modernize IT infrastructure',
      setupTime: '1-6 weeks',
      freeConsultation: 'Yes',
      support: 'Migration specialist and ongoing support',
      certifications: ['AWS', 'Azure', 'Google Cloud', 'VMware'],
      link: 'https://ziontechgroup.com/cloud-migration-services',
<<<<<<< HEAD
      caseStudy: 'Retail chain saved $2M annually by migrating to cloud infrastructure'
    },
    {
      id: 'cybersecurity-services',
=======
      caseStudy: 'Retail chain saved $2M annually by migrating to cloud infrastructure',},
    {id: 'cybersecurity-services',
>>>>>>> origin/main
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessment, implementation, and ongoing protection',
      category: 'security',
      icon: Shield,
      price: 'Starting at $2,500',
      features: [,
        'Security risk assessment',
        'Penetration testing',
        'Security policy development',
        'Firewall and endpoint protection',

        'Email security implementation',

        'Security awareness training',

        'Compliance auditing',

        'Incident response planning'
      ],
      benefits: [,
        'Protect against cyber threats',

        'Ensure regulatory compliance',

        'Reduce security risks by 90%',

        'Improve incident response time',

        'Maintain customer trust'
      ],
      targetAudience: 'All businesses handling sensitive data',
      setupTime: '1-4 weeks',
      freeConsultation: 'Yes',
      support: 'Security specialist and 24/7 monitoring',
      certifications: ['CISSP', 'CISM', 'CEH', 'CompTIA Security+'],
      link: 'https://ziontechgroup.com/cybersecurity-services',
<<<<<<< HEAD
      caseStudy: 'Healthcare provider achieved 100% compliance with HIPAA regulations'
    },
    {
      id: 'network-design-optimization',
=======
      caseStudy: 'Healthcare provider achieved 100% compliance with HIPAA regulations',},
    {id: 'network-design-optimization',
>>>>>>> origin/main
      name: 'Network Design & Optimization',
      description: 'High-performance network infrastructure design and optimization for reliability',
      category: 'networking',
      icon: Network,
      price: 'Starting at $2,000',
      features: [,
        'Network architecture design',
        'Bandwidth optimization',
        'Quality of Service (QoS) setup',
        'Wireless network deployment',

        'Network monitoring implementation',

        'Traffic analysis and optimization',

        'Redundancy and failover setup',

        'Performance tuning'
      ],
      benefits: [,
        'Improve network performance by 200%',

        'Reduce network downtime',

        'Optimize bandwidth usage',

        'Enhance user experience',

        'Future-proof network design'
      ],
      targetAudience: 'Businesses with complex networking needs',
      setupTime: '1-3 weeks',
      freeConsultation: 'Yes',
      support: 'Network specialist and ongoing optimization',
      certifications: ['CCNA', 'CCNP', 'JNCIA', 'CompTIA Network+'],
      link: 'https://ziontechgroup.com/network-design-optimization',
<<<<<<< HEAD
      caseStudy: 'Law firm improved network speed by 300% and eliminated connectivity issues'
    },
    {
      id: 'database-management',
=======
      caseStudy: 'Law firm improved network speed by 300% and eliminated connectivity issues',},
    {id: 'database-management',
>>>>>>> origin/main
      name: 'Database Management & Optimization',
      description: 'Database design, implementation, optimization, and ongoing management',
      category: 'database',
      icon: Database,
      price: 'Starting at $1,500',
      features: [,
        'Database design and architecture',
        'Performance optimization',
        'Backup and recovery setup',
        'Security implementation',

        'Monitoring and alerting',

        'Query optimization',

        'Capacity planning',

        'Maintenance and updates'
      ],
      benefits: [,
        'Improve database performance by 150%',

        'Ensure data integrity and security',

        'Reduce maintenance overhead',

        'Optimize storage usage',

        'Minimize downtime'
      ],
      targetAudience: 'Businesses with critical data requirements',
      setupTime: '1-2 weeks',
      freeConsultation: 'Yes',
      support: 'Database specialist and 24/7 monitoring',
      certifications: ['Oracle', 'Microsoft SQL Server', 'MySQL', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/database-management',
<<<<<<< HEAD
      caseStudy: 'E-commerce platform improved query performance by 400% and reduced costs by 60%'
    },
    {
      id: 'it-support-services',
=======
      caseStudy: 'E-commerce platform improved query performance by 400% and reduced costs by 60%',},
    {id: 'it-support-services',
>>>>>>> origin/main
      name: 'Managed IT Support Services',
      description: 'Comprehensive IT support and management for ongoing operations',
      category: 'support',
      icon: Headphones,
      price: 'Starting at $99/user/month',
      features: [,
        '24/7 technical support',
        'Remote monitoring and management',
        'Proactive maintenance',
        'Software updates and patches',

        'Hardware support and replacement',

        'User training and onboarding',

        'IT asset management',

        'Help desk services'
      ],
      benefits: [,
        'Reduce IT downtime by 80%',

        'Lower IT support costs',

        'Improve user productivity',

        'Proactive issue resolution',

        'Focus on core business activities'
      ],
      targetAudience: 'Small to medium businesses without dedicated IT staff',
      setupTime: '1 week',
      freeConsultation: 'Yes',
      support: 'Dedicated support team',
      certifications: ['Microsoft', 'CompTIA', 'Cisco', 'VMware'],
      link: 'https://ziontechgroup.com/it-support-services',
<<<<<<< HEAD
      caseStudy: 'Marketing agency reduced IT issues by 90% and improved employee productivity'
    },
    {
      id: 'software-development',
=======
      caseStudy: 'Marketing agency reduced IT issues by 90% and improved employee productivity',},
    {id: 'software-development',
>>>>>>> origin/main
      name: 'Custom Software Development',
      description: 'Tailored software solutions built to meet specific business requirements',
      category: 'development',
      icon: Code,
      price: 'Starting at $5,000',
      features: [,
        'Requirements analysis',
        'Custom application development',
        'Web and mobile app development',
        'API development and integration',

        'Database design and implementation',

        'Testing and quality assurance',

        'Deployment and maintenance',

        'User training and documentation'
      ],
      benefits: [,
        'Streamline business processes',

        'Improve operational efficiency',

        'Gain competitive advantage',

        'Reduce manual work',

        'Scale with business growth'
      ],
      targetAudience: 'Businesses needing custom software solutions',
      setupTime: '4-16 weeks',
      freeConsultation: 'Yes',
      support: 'Development team and ongoing maintenance',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'PHP', 'Mobile'],
      link: 'https://ziontechgroup.com/software-development',
<<<<<<< HEAD
      caseStudy: 'Logistics company automated 80% of manual processes with custom software'
    },
    {
      id: 'it-consulting',
=======
      caseStudy: 'Logistics company automated 80% of manual processes with custom software',},
    {id: 'it-consulting',
>>>>>>> origin/main
      name: 'Strategic IT Consulting',
      description: 'Technology strategy and roadmap development for digital transformation',
      category: 'consulting',
      icon: Briefcase,
      price: 'Starting at $200/hour',
      features: [,
        'IT strategy development',
        'Technology roadmap planning',
        'Digital transformation consulting',
        'Vendor evaluation and selection',

        'Cost-benefit analysis',

        'Risk assessment and mitigation',

        'Change management planning',

        'Implementation guidance'
      ],
      benefits: [,
        'Align IT with business goals',

        'Optimize technology investments',

        'Reduce implementation risks',

        'Accelerate digital transformation',

        'Improve ROI on technology'
      ],
      targetAudience: 'Businesses planning technology initiatives',
      setupTime: '1-4 weeks',
      freeConsultation: 'Yes',
      support: 'Senior consultant and ongoing guidance',
      certifications: ['PMP', 'ITIL', 'COBIT', 'TOGAF'],
      link: 'https://ziontechgroup.com/it-consulting',
<<<<<<< HEAD
      caseStudy: 'Manufacturing company achieved 40% cost reduction through strategic IT planning'
    },
    {
      id: 'disaster-recovery',
=======
      caseStudy: 'Manufacturing company achieved 40% cost reduction through strategic IT planning',},
    {id: 'disaster-recovery',
>>>>>>> origin/main
      name: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation',
      category: 'recovery',
      icon: RefreshCw,
      price: 'Starting at $3,500',
      features: [,
        'Business impact analysis',
        'Recovery time objective planning',
        'Backup strategy implementation',
        'Disaster recovery testing',

        'Business continuity planning',

        'Cloud-based recovery solutions',

        'Documentation and procedures',

        'Regular testing and updates'
      ],
      benefits: [,
        'Minimize business disruption',

        'Ensure rapid recovery',

        'Protect critical data',

        'Maintain customer service',

        'Comply with regulations'
      ],
      targetAudience: 'Businesses requiring high availability',
      setupTime: '2-6 weeks',
      freeConsultation: 'Yes',
      support: 'Recovery specialist and ongoing testing',
      certifications: ['CBCP', 'DRII', 'ITIL', 'ISO 22301'],
      link: 'https://ziontechgroup.com/disaster-recovery',
<<<<<<< HEAD
      caseStudy: 'Financial services firm achieved 99.9% uptime with our disaster recovery solution'
    },
    {
      id: 'compliance-auditing',
=======
      caseStudy: 'Financial services firm achieved 99.9% uptime with our disaster recovery solution',},
    {id: 'compliance-auditing',
>>>>>>> origin/main
      name: 'IT Compliance & Auditing',
      description: 'Compliance assessment and implementation for various industry standards',
      category: 'compliance',
      icon: CheckSquare,
      price: 'Starting at $2,000',
      features: [,
        'Compliance gap analysis',
        'Policy and procedure development',
        'Security control implementation',
        'Audit preparation and support',

        'Training and awareness programs',

        'Ongoing compliance monitoring',

        'Documentation and reporting',

        'Remediation planning'
      ],
      benefits: [,
        'Ensure regulatory compliance',

        'Reduce audit findings',

        'Improve security posture',

        'Avoid penalties and fines',

        'Build customer trust'
      ],
      targetAudience: 'Healthcare, Finance, Government, Education sectors',
      setupTime: '2-8 weeks',
      freeConsultation: 'Yes',
      support: 'Compliance specialist and ongoing monitoring',
      standards: ['HIPAA', 'SOX', 'PCI-DSS', 'GDPR', 'ISO 27001', 'NIST'],
      link: 'https://ziontechgroup.com/compliance-auditing',
<<<<<<< HEAD
      caseStudy: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits'
    }
  ];

  const categories = [
=======
<<<<<<< HEAD
      caseStudy: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits',}}
  ]
const categories = [
    {id: 'all', name: 'All IT Services', icon: Grid3X3 ,},
    {id: 'infrastructure', name: 'Infrastructure', icon: Server ,},
    {id: 'cloud', name: 'Cloud Services', icon: Cloud ,},
    {id: 'security', name: 'Cybersecurity', icon: Shield ,},
    {id: 'networking', name: 'Networking', icon: Network ,},
    {id: 'database', name: 'Database', icon: Database ,},
    {id: 'support', name: 'IT Support', icon: Headphones ,},
    {id: 'development', name: 'Development', icon: Code ,},
    {id: 'consulting', name: 'Consulting', icon: Briefcase ,},
    {id: 'recovery', name: 'Disaster Recovery', icon: RefreshCw ,},
    {id: 'compliance', name: 'Compliance', icon: CheckSquare ,}]
const filteredServices = itServices.filter(service => {)
=======
      caseStudy: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits'
  }
    }
  ]
const categories = [
>>>>>>> origin/main
    { id: 'all', name: 'All IT Services', icon: Grid3X3 },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'networking', name: 'Networking', icon: Network },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'support', name: 'IT Support', icon: Headphones },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'consulting', name: 'Consulting', icon: Briefcase },
    { id: 'recovery', name: 'Disaster Recovery', icon: RefreshCw },
    { id: 'compliance', name: 'Compliance', icon: CheckSquare }
<<<<<<< HEAD
  ];
const filteredServices = itServices.filter(service => {;
>>>>>>> origin/main
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
<<<<<<< HEAD
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}</div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid">
        </section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse"></h1>
            Professional <span className="holographic-text">IT Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Comprehensive IT solutions designed to optimize your technology infrastructure, 
            enhance security, and drive business growth. Expert consulting and implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5 inline mr-2" />
=======
    return matchesCategory && matchesSearch;}})
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
=======
  ]
  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  }
  })
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
>>>>>>> origin/main
      {/* Hero Section */}</div>
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse"></h1>,
            Professional <span className="holographic-text">IT Services</span>
          </h1>
          <p>Comprehensive IT solutions designed to optimize your technology infrastructure,</p>
            enhance security, and drive business growth. Expert consulting and implementation.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center mb-12"></div>,
            <a>
<<<<<<< HEAD
              <Phone>
              Call (302) 464-0950;
=======
              </a><Phone>
>>>>>>> origin/main
              Call (302) 464-0950
>>>>>>> origin/main
            </a>
<<<<<<< HEAD
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get IT Consultation
=======
            <a>
              </a><Mail>
              Get IT Consultation,
>>>>>>> origin/main
            </a>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Search and Filter Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* Search and Filter Section */}
<<<<<<< HEAD
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}</div>
            <div className="flex-1"></div>
              <div className="relative"></div>
=======
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col lg: flex-row gap-6 mb-8"></div>,
=======
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="flex flex-col lg:flex-row gap-6 mb-8" / /></div>
>>>>>>> origin/main
            {/* Search */}</div>
            <div className="flex-1"></div>
              <div className="relative"></div>
                <Search>
<<<<<<< HEAD
                <input;
                  type="text";
                  placeholder="Search IT services...";
                  value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)}className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20",
=======
                </Search><input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}

                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
>>>>>>> origin/main
                />,
              </div>
            </div>

<<<<<<< HEAD
            {/* Category Filter */} <div className="lg: w-64"></div>,
=======
            {/* Category Filter */}
            <div className="lg: w-64" / /></div>
>>>>>>> origin/main
              <select,
                value={selectedCategory}onChange={(e) => setSelectedCategory(e.target.value)}className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20",
              >,
<<<<<<< HEAD
                {categories.map((category) => (} <option>
=======
                {
    categories.map((category) => (
  }
                  </select><option>
>>>>>>> origin/main

                    {category.name} </option>
                ))}

              </select>
            </div>
          </div>

<<<<<<< HEAD
          {/* Category Pills */} <div className="flex flex-wrap gap-2 mb-8"></div>
            {categories.map((category) => (</div>
              <button;}key={category.id}onClick={() =>setSelectedCategory(category.id)</button>}className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id;
                    ? 'bg-cyan-500 text-white';
                    : 'bg-slate-800/50 text-gray-300 hover: bg-slate-700/50 hover:text-cyan-400',}}`}
              >;
                {category.name} </button>
=======
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8" / /></div>
            {
    categories.map((category) => ()
                onClick={() => setSelectedCategory(category.id)}
                className={
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
  }
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch;}
  })
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse">
            Professional <span className="holographic-text">IT Services
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Comprehensive IT solutions designed to optimize your technology infrastructure, 
            enhance security, and drive business growth. Expert consulting and implementation.
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <$2 />
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50">
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
            <$2 />
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50">
              <Mail className="w-5 h-5 inline mr-2" />
              Get IT Consultation
      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
>>>>>>> origin/main
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
<<<<<<< HEAD
                  onChange={(e) => setSearchTerm(e.target.value</div>
=======
                  onChange={(e) => setSearchTerm(e.target.value)}
>>>>>>> origin/main
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
            {/* Category Filter */}
<<<<<<< HEAD
            <div className="lg:w-64"></div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value</div>
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (</div>
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id</div>
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
=======
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20">
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                ))}
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <;}$2 />
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400';}
>>>>>>> origin/main
                }`}
              >
                {category.name}
              </button>
<<<<<<< HEAD
            ))}
=======
>>>>>>> origin/main
            ))}

>>>>>>> origin/main
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Services Grid */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* Services Grid */}
<<<<<<< HEAD
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (</div>
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse"></div>
                <div className="flex items-start justify-between mb-4"></div>
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors"></div>
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="text-right"></div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">starting price</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6"></div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
=======
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
            {filteredServices.map((service) => (</div>} <div key={service.id}className="quantum-card p-6 group hover: scale-105 transition-all duration-300 energy-pulse"></div>,
=======
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" / /></div>
            {
    filteredServices.map((service) => (</div>
  }
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse"></div>
>>>>>>> origin/main
                <div className="flex items-start justify-between mb-4"></div>
                  <div className="text-cyan-400 group-hover: text-cyan-300 transition-colors"></div>,
                    <service />
                  <div className="text-right"></div>
                    <div className="text-2xl font-bold text-white">{service.price</div>}</div>
                    <div className="text-sm text-gray-400">starting price</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description</p>}</p>
                <div className="space-y-3 mb-6"></div>
                  <div />
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features: </h4>,
                    <ul>
<<<<<<< HEAD
                      {service.features.slice(0, 4).map((feature, idx) => (} <li>
                          <CheckCircle />
                          <span>{feature</span>}</span>
=======
                      {
    service.features.slice(0, 4).map((feature, idx) => (
  }
                        </ul><li>
                          </li><CheckCircle>
                          </CheckCircle><span>{feature}</span>
>>>>>>> origin/main
>>>>>>> origin/main
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD
                  
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
=======
<<<<<<< HEAD
                  <div />
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits: </h4>,
                    <ul>
                      {service.benefits.slice(0, 2).map((benefit, idx) => (} <li>
                          <TrendingUp>
                          <span>{benefit</span>}</span>
=======
                  <div / /></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul></ul>
                      {
    service.benefits.slice(0, 2).map((benefit, idx) => (
  }
                        </ul><li>
                          </li><TrendingUp>
                          </TrendingUp><span>{benefit}</span>
>>>>>>> origin/main
>>>>>>> origin/main
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
<<<<<<< HEAD

                <div className="space-y-2 mb-6 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Free Consultation:</span>
                    <span className="text-green-400">{service.freeConsultation}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">{service.targetAudience}</span>
                  </div>
                </div>

                {service.caseStudy && (
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg"></div>
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}"</p>
                  </div>
                </div>
                <div className="space-y-3"></div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
=======
<<<<<<< HEAD
                <div className="space-y-2 mb-6 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Setup Time: </span>,
                    <span className="text-white">{service.setupTime</span>}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Free Consultation: </span>,
                    <span className="text-green-400">{service.freeConsultation</span>}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Target: </span>,
                    <span className="text-white">{service.targetAudience</span>}</span>
                  </div>
                </div>
                {service.caseStudy && (;
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg"></div>} <p className="text-sm text-green-300 italic">"{service.caseStudy</p>}"</p>
                  </div>
                )}
<div className="space-y-3"></div>
                  <a>
                    Get Free Consultation;
                  </a>
                  <a>
                    <Phone>
                    Call for Quote;
=======
                <div className="space-y-2 mb-6 text-sm" / /></div>
                  <div className="flex justify-between" / /></div>
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
                  <div className="flex justify-between" / /></div>
                    <span className="text-gray-400">Free Consultation:</span>
                    <span className="text-green-400">{service.freeConsultation}</span>
                  </div>
                  <div className="flex justify-between" / /></div>
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">{service.targetAudience}</span>
                  </div>
                </div>
                {
    service.caseStudy && ()
                )}
<div className="space-y-3" / /></div>
                  <a></a>
                    Get Free Consultation
                  </a>
                  <a>
                    </a><Phone>
>>>>>>> origin/main
                    Call for Quote
>>>>>>> origin/main
                  </a>
                </div>
              </div>
            ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}
                    <div className="text-sm text-gray-400">starting price
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}
                      ))}
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}
                      ))}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Setup Time:
                    <span className="text-white">{service.setupTime}
                  <div className="flex justify-between">
                    <span className="text-gray-400">Free Consultation:
                    <span className="text-green-400">{service.freeConsultation}
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target:
                    <span className="text-white">{service.targetAudience}
                {service.caseStudy && (
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg">
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}"
                )}
                <div className="space-y-3">
                  <$2 />
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Get Free Consultation
                  <$2 />
                    href="tel:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Call for Quote
            ))}
      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
        </section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-cyan-400 mb-8 neon-glow">
            Our certified IT professionals deliver reliable, secure, and scalable solutions. 
            All services include free consultations and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5" />
=======
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2>Ready to Optimize Your IT Infrastructure?,</h2>
          </h2>
          <p>Our certified IT professionals deliver reliable, secure, and scalable solutions.;</p>
=======
        <div className="max-w-4xl mx-auto text-center" / /></div>
          <h2></h2>
            Ready to Optimize Your IT Infrastructure?,
          </h2>
          <p></p>
            Our certified IT professionals deliver reliable, secure, and scalable solutions.
>>>>>>> origin/main
            All services include free consultations and ongoing support.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
            <a>
<<<<<<< HEAD
              <Phone>
              Call (302) 464-0950;
            </a>
            <a>
              <Mail>
              Get Custom IT Strategy;
=======
              </a><Phone>
              Call (302) 464-0950
            </a>
            <a>
              </a><Mail>
>>>>>>> origin/main
              Get Custom IT Strategy
>>>>>>> origin/main
            </a>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
};

export default ITConsultingPage;
=======
  ),
}
export default ITConsultingPage
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Ready to Optimize Your IT Infrastructure?
          <p className="text-xl text-cyan-400 mb-8 neon-glow">
            Our certified IT professionals deliver reliable, secure, and scalable solutions. 
            All services include free consultations and ongoing support.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <$2 />
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50">
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            <$2 />
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50">
              <Mail className="w-5 h-5" />
              Get Custom IT Strategy
  )
}
export default ITConsultingPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></span></span></span></span></span></p></p></p></p></h1></h2></h3></h4></h4></ul></ul></li></li></section></section></section></section>
>>>>>>> origin/main
