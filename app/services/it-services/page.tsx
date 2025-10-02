import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Cloud, 
  Settings, 
  Shield, 
  Database, 
  Network, 
  Monitor, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Server,
  Code,
  Package,
  ShoppingCart,
  CreditCard,
  Building,
  Heart,
  Car,
  Plane,
  Gamepad2,
  Music,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Wifi,
  Battery,
  Cpu,
  HardDrive,
  Router,
  Mobile,
  Laptop,
  Tablet,
  Headphones,
  Printer,
  Scanner,
  Keyboard,
  Mouse,
  Display,
  Speaker,
  Webcam,
  Microphone,
  CameraIcon,
  VideoIcon,
  Image,
  File,
  Folder,
  Download,
  Upload,
  Share,
  LinkIcon,
  ExternalLink,
  Eye,
  EyeOff,
  Edit,
  Trash2,
  Save,
  Copy,
  Cut,
  Paste,
  Undo,
  Redo,
  SearchIcon,
  Filter,
  Sort,
  Grid,
  List,
  MoreHorizontal,
  MoreVertical,
  Plus,
  Minus,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  SettingsIcon,
  User,
  UserPlus,
  UserMinus,
  UsersIcon,
  UserCheck,
  UserX,
  MailIcon,
  CalendarIcon,
  ClockIcon,
  Timer,
  Stopwatch,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  Palette,
  Brush,
  Pen,
  Pencil,
  Eraser,
  Highlighter,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  ListIcon,
  Indent,
  Outdent,
  Quote,
  CodeIcon,
  Terminal,
  Command,
  Hash,
  AtSign,
  Percent,
  DollarIcon,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  CreditCardIcon,
  Wallet,
  Banknote,
  Coins,
  TrendingUpIcon,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Pulse,
  HeartIcon,
  ZapIcon,
  Flash,
  Sun,
  Moon,
  CloudIcon,
  CloudRain,
  CloudSnow,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Rainbow,
  StarIcon,
  Sparkles,
  Gift,
  PartyPopper,
  Cake,
  Coffee,
  Pizza,
  Apple,
  Banana,
  Carrot,
  Leaf,
  Tree,
  Flower,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Bear,
  Lion,
  Tiger,
  Elephant,
  Whale,
  Dolphin,
  Shark,
  Octopus,
  Crab,
  Lobster,
  Shrimp,
  Snail,
  Butterfly,
  Bee,
  Ant,
  Spider,
  Scorpion,
  Snake,
  Lizard,
  Frog,
  Turtle,
  Penguin,
  Owl,
  Eagle,
  Hawk,
  Parrot,
  Peacock,
  Flamingo,
  Swan,
  Duck,
  Chicken,
  Rooster,
  Pig,
  Cow,
  Horse,
  Sheep,
  Goat,
  Deer,
  Moose,
  Elk,
  Buffalo,
  Giraffe,
  Zebra,
  Hippo,
  Rhino,
  Camel,
  Llama,
  Alpaca,
  Kangaroo,
  Koala,
  Panda,
  Sloth,
  Monkey,
  Gorilla,
  Chimpanzee,
  Orangutan,
  Lemur,
  Squirrel,
  Chipmunk,
  Hamster,
  GuineaPig,
  MouseIcon,
  Rat,
  Beaver,
  Otter,
  Seal,
  Walrus,
  PolarBear,
  GrizzlyBear,
  BlackBear,
  PandaIcon,
  RedPanda,
  Fox,
  Wolf,
  Coyote,
  Jackal,
  Hyena,
  Cheetah,
  Leopard,
  Jaguar,
  Lynx,
  Bobcat,
  Cougar,
  MountainLion,
  Puma,
  Panther,
  TigerIcon,
  LionIcon,
  LeopardIcon,
  CheetahIcon,
  JaguarIcon,
  LynxIcon,
  BobcatIcon,
  CougarIcon,
  MountainLionIcon,
  PumaIcon,
  PantherIcon
} from 'lucide-react';

export default function ITServicesPage() {
  const title = 'IT Services & Solutions — Zion Tech Group';
  const description = 'Enterprise-grade IT services including cloud migration, DevOps, cybersecurity, and infrastructure management. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com';

  const itServices = [
    {
      name: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud strategy, migration, and optimization services for AWS, Azure, and GCP with zero downtime.',
      icon: Cloud,
      features: [
        'Comprehensive cloud strategy and architecture design',
        'Seamless migration with zero downtime guarantee',
        'Cost optimization and resource management',
        'Security and compliance implementation',
        'Disaster recovery and backup solutions',
        '24/7 monitoring and support services'
      ],
      pricing: '$5,000 - $50,000/project',
      delivery: '4-16 weeks',
      benefits: 'Reduce infrastructure costs by 40%, improve scalability and reliability',
      category: 'Cloud Services',
      marketPrice: '$10,000 - $100,000/project',
      link: 'https://ziontechgroup.com/services/cloud-migration',
      useCases: [
        'Legacy system modernization',
        'Multi-cloud strategy implementation',
        'Cost optimization and rightsizing',
        'Disaster recovery setup',
        'Compliance and security hardening',
        'Performance optimization'
      ]
    },
    {
      name: 'DevOps & CI/CD Pipeline Setup',
      description: 'Complete DevOps transformation with automated testing, deployment, and monitoring for faster, more reliable software delivery.',
      icon: Settings,
      features: [
        'CI/CD pipeline design and implementation',
        'Infrastructure as Code (IaC) setup',
        'Automated testing and quality gates',
        'Container orchestration with Kubernetes',
        'Monitoring and logging solutions',
        'Security scanning and compliance automation'
      ],
      pricing: '$8,000 - $60,000/project',
      delivery: '6-20 weeks',
      benefits: 'Reduce deployment time by 80%, improve code quality by 60%',
      category: 'DevOps',
      marketPrice: '$15,000 - $120,000/project',
      link: 'https://ziontechgroup.com/services/devops-setup',
      useCases: [
        'Development workflow optimization',
        'Automated testing and deployment',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring and alerting setup',
        'Security integration'
      ]
    },
    {
      name: 'Enterprise Security & Compliance',
      description: 'Comprehensive security assessment, implementation, and compliance management for SOC 2, HIPAA, GDPR, and more.',
      icon: Shield,
      features: [
        'Security assessment and penetration testing',
        'Compliance framework implementation (SOC 2, HIPAA, GDPR)',
        'Identity and access management (IAM)',
        'Security monitoring and incident response',
        'Employee security training and awareness',
        'Regular security audits and reporting'
      ],
      pricing: '$10,000 - $80,000/project',
      delivery: '8-24 weeks',
      benefits: 'Achieve compliance faster, reduce security risks by 90%',
      category: 'Security',
      marketPrice: '$20,000 - $150,000/project',
      link: 'https://ziontechgroup.com/services/security-compliance',
      useCases: [
        'SOC 2 Type II compliance',
        'HIPAA compliance for healthcare',
        'GDPR compliance for EU operations',
        'PCI DSS for payment processing',
        'ISO 27001 certification',
        'Security posture improvement'
      ]
    },
    {
      name: 'Database Design & Optimization',
      description: 'Database architecture, migration, and performance optimization services for improved efficiency and reliability.',
      icon: Database,
      features: [
        'Database architecture and design',
        'Migration from legacy systems',
        'Performance tuning and optimization',
        'Backup and disaster recovery setup',
        'Data security and encryption',
        'Monitoring and maintenance services'
      ],
      pricing: '$6,000 - $45,000/project',
      delivery: '4-12 weeks',
      benefits: 'Improve database performance by 70%, reduce maintenance costs by 50%',
      category: 'Database Services',
      marketPrice: '$12,000 - $90,000/project',
      link: 'https://ziontechgroup.com/services/database-optimization',
      useCases: [
        'Legacy database modernization',
        'Performance optimization',
        'Data migration and consolidation',
        'Backup and recovery setup',
        'Security hardening',
        'Scalability improvements'
      ]
    },
    {
      name: 'Network Infrastructure & Security',
      description: 'Complete network design, implementation, and security hardening for optimal performance and protection.',
      icon: Network,
      features: [
        'Network architecture and design',
        'Firewall and security appliance setup',
        'VPN and remote access solutions',
        'Network monitoring and management',
        'Bandwidth optimization and QoS',
        'Wireless network security and optimization'
      ],
      pricing: '$7,000 - $55,000/project',
      delivery: '6-16 weeks',
      benefits: 'Improve network performance by 60%, enhance security posture',
      category: 'Network Services',
      marketPrice: '$14,000 - $110,000/project',
      link: 'https://ziontechgroup.com/services/network-infrastructure',
      useCases: [
        'Network infrastructure design',
        'Security appliance deployment',
        'Remote access solutions',
        'Network monitoring setup',
        'Performance optimization',
        'Security hardening'
      ]
    },
    {
      name: 'IT Support & Managed Services',
      description: 'Comprehensive IT support and managed services for businesses of all sizes with 24/7 availability.',
      icon: Monitor,
      features: [
        '24/7 helpdesk and technical support',
        'Proactive monitoring and maintenance',
        'Software and hardware management',
        'User training and onboarding',
        'IT asset management and tracking',
        'Regular system updates and patches'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '1-2 weeks',
      benefits: 'Reduce IT downtime by 75%, improve user productivity by 40%',
      category: 'Managed Services',
      marketPrice: '$4,000 - $30,000/month',
      link: 'https://ziontechgroup.com/services/managed-it',
      useCases: [
        'Helpdesk and support services',
        'System monitoring and maintenance',
        'Software and hardware management',
        'User training and support',
        'IT asset management',
        'Security updates and patches'
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'IT Projects Completed', value: '200+', icon: Target },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Star },
    { label: 'Cost Reduction', value: '40%', icon: DollarSign },
    { label: 'Average Setup Time', value: '8 weeks', icon: Clock }
  ];

  const technologies = [
    { name: 'AWS', icon: Cloud, description: 'Amazon Web Services' },
    { name: 'Azure', icon: Cloud, description: 'Microsoft Azure' },
    { name: 'GCP', icon: Cloud, description: 'Google Cloud Platform' },
    { name: 'Kubernetes', icon: Settings, description: 'Container Orchestration' },
    { name: 'Docker', icon: Package, description: 'Containerization' },
    { name: 'Terraform', icon: Code, description: 'Infrastructure as Code' },
    { name: 'Jenkins', icon: Settings, description: 'CI/CD Pipeline' },
    { name: 'GitLab', icon: Code, description: 'DevOps Platform' },
    { name: 'Ansible', icon: Settings, description: 'Configuration Management' },
    { name: 'Prometheus', icon: Monitor, description: 'Monitoring' },
    { name: 'Grafana', icon: BarChart3, description: 'Visualization' },
    { name: 'ELK Stack', icon: Database, description: 'Log Management' }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services/it-services" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/services/it-services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                IT Services & Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              Enterprise-grade IT services and infrastructure management with proven expertise and reliable support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-green-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Cloud className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-4xl font-bold text-gray-900">Our IT Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT services designed to optimize your infrastructure, enhance security, and improve operational efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.useCases.map((useCase, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <div className="text-lg font-semibold text-gray-900">{service.pricing}</div>
                        <div className="text-sm text-gray-500">Our Price</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 line-through">{service.marketPrice}</div>
                        <div className="text-sm text-gray-500">Market Price</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <span>Delivery: {service.delivery}</span>
                      <span className="text-green-600 font-medium">{service.benefits}</span>
                    </div>
                    
                    <a 
                      href={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Work With</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge technologies and tools to deliver robust, scalable, and secure IT solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get a free IT consultation and custom proposal within 48 hours. Our IT experts are ready to help you choose the perfect solution for your infrastructure needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-green-200 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-green-200 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-green-200">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}