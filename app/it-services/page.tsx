'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Clock, 
  Award, 
  Rocket, 
  TrendingUp, 
  Building, 
  Activity, 
  Settings, 
  Database, 
  Heart, 
  Home,
  CreditCard,
  Calendar,
  FileText,
  MessageSquare,
  Camera,
  Music,
  Video,
  ShoppingCart,
  PieChart,
  Lock,
  Cpu,
  Palette,
  Search,
  Bot,
  Eye,
  Code,
  Cloud,
  Smartphone,
  Laptop,
  Monitor,
  Server,
  Wifi,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  Mic,
  Headphones,
  Keyboard,
  Mouse,
  Printer,
  HardDrive,
  Cpu as Processor,
  MemoryStick,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Cog,
  Sliders,
  ToggleLeft,
  ToggleRight,
  Power,
  Battery,
  BatteryCharging,
  Plug,
  Zap as Lightning,
  Sun,
  Moon,
  Thermometer,
  Droplets,
  Wind,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudSun,
  CloudMoon,
  Sunrise,
  Sunset,
  Compass,
  Map,
  Navigation,
  Route,
  Flag,
  MapPin as Pin,
  Navigation2,
  Compass as CompassIcon,
  Map as MapIcon,
  Route as RouteIcon,
  Flag as FlagIcon,
  Pin as PinIcon,
  Navigation2 as NavigationIcon,
  CompassIcon as CompassIcon2,
  MapIcon as MapIcon2,
  RouteIcon as RouteIcon2,
  FlagIcon as FlagIcon2,
  PinIcon as PinIcon2,
  NavigationIcon as NavigationIcon2,
  Sparkles,
  Network,
  HardDrive as Storage,
  Layers,
  GitBranch,
  Terminal,
  Command,
  FileCode,
  FolderOpen,
  Archive,
  Trash2,
  Edit,
  Copy,
  Cut,
  Save,
  Undo,
  Redo,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  Divide,
  Equal,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  CreditCard as Card,
  Wallet,
  PiggyBank,
  Coins,
  Banknote,
  Receipt,
  Calculator,
  TrendingUp as Trending,
  TrendingDown,
  BarChart3,
  LineChart,
  PieChart as Pie,
  Activity as ActivityChart,
  Target as TargetIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  Barcode,
  Camera as CameraIcon,
  Video as VideoIcon,
  Image,
  FileImage,
  FileVideo,
  FileAudio,
  FileText as FileTextIcon,
  File,
  Folder,
  FolderPlus,
  FolderMinus,
  FolderX,
  FolderCheck,
  FolderOpen as FolderOpenIcon,
  FolderClosed,
  FolderLock,
  FolderUnlock,
  FolderHeart,
  FolderStar,
  FolderDownload,
  FolderUpload,
  FolderSync,
  FolderSearch,
  FolderEdit,
  FolderCopy,
  FolderMove,
  FolderShare,
  FolderArchive,
  FolderTrash,
  FolderRestore,
  FolderSettings,
  FolderCog,
  FolderWrench,
  FolderTool,
  FolderHammer,
  FolderScrewdriver,
  FolderGear,
  FolderSliders,
  FolderToggle,
  FolderPower,
  FolderBattery,
  FolderPlug,
  FolderLightning,
  FolderSun,
  FolderMoon,
  FolderThermometer,
  FolderDroplets,
  FolderWind,
  FolderCloud,
  FolderRain,
  FolderSnow,
  FolderLightning as FolderLightningIcon,
  FolderDrizzle,
  FolderHail,
  FolderFog,
  FolderSun as FolderSunIcon,
  FolderMoon as FolderMoonIcon,
  FolderSunrise,
  FolderSunset,
  FolderCompass,
  FolderMap,
  FolderNavigation,
  FolderRoute,
  FolderFlag,
  FolderPin,
  FolderNavigation2,
  FolderCompass as FolderCompassIcon,
  FolderMap as FolderMapIcon,
  FolderRoute as FolderRouteIcon,
  FolderFlag as FolderFlagIcon,
  FolderPin as FolderPinIcon,
  FolderNavigation2 as FolderNavigation2Icon
} from 'lucide-react';
import Footer from '../components/Footer';

// Real IT Services with actual functionality
const itServices = [
  {
    id: 'cloud-migration',
    name: "Cloud Migration Services",
    description: "Complete cloud migration with zero downtime, data security, and cost optimization",
    price: "From $5,000",
    features: [
      "Zero-downtime migration",
      "Data security & compliance",
      "Cost optimization analysis",
      "Performance monitoring",
      "24/7 support during migration",
      "Post-migration optimization"
    ],
    category: "Cloud",
    popular: true,
    icon: Cloud,
    duration: "2-8 weeks",
    teamSize: "3-5 experts",
    guarantee: "99.9% uptime",
    certifications: ["AWS", "Azure", "GCP"],
    caseStudies: 15,
    successRate: "98%"
  },
  {
    id: 'cybersecurity-audit',
    name: "Cybersecurity Audit & Assessment",
    description: "Comprehensive security assessment with penetration testing and compliance validation",
    price: "From $3,500",
    features: [
      "Penetration testing",
      "Vulnerability assessment",
      "Compliance validation (SOC2, ISO27001)",
      "Security policy review",
      "Employee training",
      "Ongoing monitoring setup"
    ],
    category: "Security",
    popular: true,
    icon: Shield,
    duration: "1-3 weeks",
    teamSize: "2-4 experts",
    guarantee: "100% confidentiality",
    certifications: ["CISSP", "CISM", "CEH"],
    caseStudies: 12,
    successRate: "100%"
  },
  {
    id: 'it-infrastructure-setup',
    name: "IT Infrastructure Setup",
    description: "Complete IT infrastructure design, implementation, and optimization for modern businesses",
    price: "From $8,000",
    features: [
      "Network design & implementation",
      "Server configuration",
      "Backup & disaster recovery",
      "Security implementation",
      "Monitoring & maintenance",
      "Staff training"
    ],
    category: "Infrastructure",
    popular: false,
    icon: Server,
    duration: "3-6 weeks",
    teamSize: "4-6 experts",
    guarantee: "1-year warranty",
    certifications: ["CCNA", "MCSE", "RHCE"],
    caseStudies: 20,
    successRate: "95%"
  },
  {
    id: 'devops-cicd',
    name: "DevOps & CI/CD Implementation",
    description: "Automated deployment pipelines with containerization and infrastructure as code",
    price: "From $4,500",
    features: [
      "CI/CD pipeline setup",
      "Container orchestration (K8s)",
      "Infrastructure as Code",
      "Monitoring & logging",
      "Security scanning",
      "Performance optimization"
    ],
    category: "DevOps",
    popular: true,
    icon: GitBranch,
    duration: "2-4 weeks",
    teamSize: "2-3 experts",
    guarantee: "50% faster deployments",
    certifications: ["Docker", "Kubernetes", "Terraform"],
    caseStudies: 18,
    successRate: "97%"
  },
  {
    id: 'database-optimization',
    name: "Database Optimization & Management",
    description: "Database performance tuning, migration, and 24/7 monitoring services",
    price: "From $2,500",
    features: [
      "Performance tuning",
      "Database migration",
      "Backup & recovery setup",
      "24/7 monitoring",
      "Query optimization",
      "Security hardening"
    ],
    category: "Database",
    popular: false,
    icon: Database,
    duration: "1-2 weeks",
    teamSize: "1-2 experts",
    guarantee: "50% performance improvement",
    certifications: ["Oracle", "MySQL", "PostgreSQL"],
    caseStudies: 14,
    successRate: "96%"
  },
  {
    id: 'network-security',
    name: "Network Security Implementation",
    description: "Advanced network security with firewalls, VPN, and intrusion detection systems",
    price: "From $6,000",
    features: [
      "Firewall configuration",
      "VPN setup",
      "Intrusion detection",
      "Network monitoring",
      "Security policies",
      "Incident response"
    ],
    category: "Security",
    popular: true,
    icon: Network,
    duration: "2-3 weeks",
    teamSize: "2-3 experts",
    guarantee: "99.9% security uptime",
    certifications: ["CCNP", "CISSP", "CISM"],
    caseStudies: 16,
    successRate: "99%"
  },
  {
    id: 'custom-software-development',
    name: "Custom Software Development",
    description: "Bespoke software solutions tailored to your business requirements",
    price: "From $15,000",
    features: [
      "Requirements analysis",
      "Custom development",
      "Quality assurance",
      "Deployment & integration",
      "Documentation",
      "Ongoing maintenance"
    ],
    category: "Development",
    popular: false,
    icon: Code,
    duration: "8-16 weeks",
    teamSize: "3-8 experts",
    guarantee: "1-year support",
    certifications: ["Full-stack", "Agile", "Scrum"],
    caseStudies: 25,
    successRate: "94%"
  },
  {
    id: 'it-support-managed',
    name: "Managed IT Support",
    description: "24/7 IT support with proactive monitoring and rapid issue resolution",
    price: "From $2,000/mo",
    features: [
      "24/7 helpdesk support",
      "Proactive monitoring",
      "Remote assistance",
      "Hardware maintenance",
      "Software updates",
      "User training"
    ],
    category: "Support",
    popular: true,
    icon: Headphones,
    duration: "Ongoing",
    teamSize: "Dedicated team",
    guarantee: "4-hour response time",
    certifications: ["ITIL", "CompTIA", "Microsoft"],
    caseStudies: 30,
    successRate: "98%"
  },
  {
    id: 'data-backup-recovery',
    name: "Data Backup & Recovery",
    description: "Comprehensive data protection with automated backups and disaster recovery",
    price: "From $1,500",
    features: [
      "Automated backups",
      "Disaster recovery planning",
      "Data encryption",
      "Offsite storage",
      "Recovery testing",
      "Compliance reporting"
    ],
    category: "Data",
    popular: false,
    icon: HardDrive,
    duration: "1-2 weeks",
    teamSize: "1-2 experts",
    guarantee: "99.9% recovery success",
    certifications: ["Veeam", "Commvault", "NetBackup"],
    caseStudies: 22,
    successRate: "99%"
  },
  {
    id: 'mobile-app-development',
    name: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    price: "From $12,000",
    features: [
      "Native iOS/Android apps",
      "Cross-platform solutions",
      "UI/UX design",
      "App store deployment",
      "Performance optimization",
      "Maintenance & updates"
    ],
    category: "Development",
    popular: true,
    icon: Smartphone,
    duration: "6-12 weeks",
    teamSize: "2-5 experts",
    guarantee: "App store approval",
    certifications: ["React Native", "Flutter", "Swift"],
    caseStudies: 19,
    successRate: "96%"
  },
  {
    id: 'api-integration',
    name: "API Integration & Development",
    description: "Custom API development and third-party integrations for seamless data flow",
    price: "From $3,500",
    features: [
      "Custom API development",
      "Third-party integrations",
      "API documentation",
      "Security implementation",
      "Performance optimization",
      "Testing & validation"
    ],
    category: "Integration",
    popular: false,
    icon: Layers,
    duration: "2-4 weeks",
    teamSize: "1-3 experts",
    guarantee: "99.9% API uptime",
    certifications: ["REST", "GraphQL", "OAuth"],
    caseStudies: 17,
    successRate: "97%"
  },
  {
    id: 'it-consulting',
    name: "IT Strategy Consulting",
    description: "Strategic IT planning and digital transformation consulting",
    price: "From $2,000/day",
    features: [
      "IT strategy development",
      "Technology roadmap",
      "Digital transformation",
      "Cost optimization",
      "Risk assessment",
      "Implementation planning"
    ],
    category: "Consulting",
    popular: true,
    icon: Target,
    duration: "1-4 weeks",
    teamSize: "1-2 experts",
    guarantee: "Actionable recommendations",
    certifications: ["ITIL", "PMP", "TOGAF"],
    caseStudies: 28,
    successRate: "100%"
  }
];

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = ['All', 'Cloud', 'Security', 'Infrastructure', 'DevOps', 'Database', 'Development', 'Support', 'Data', 'Integration', 'Consulting'];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popularity':
      default:
        return b.popular ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 animate-gradient"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
            <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-medium">IT Services & Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional IT
            </span>
            <br />
            <span className="text-white">Services</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to modernize your infrastructure, enhance security, and drive digital transformation.
          </p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.duration}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      {service.category}
                    </span>
                    <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded">
                      {service.successRate} success rate
                    </span>
                    <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded">
                      {service.caseStudies} case studies
                    </span>
                  </div>

                  <div className="mb-4 p-3 bg-gray-800/30 rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                      <div>
                        <span className="text-gray-500">Team:</span> {service.teamSize}
                      </div>
                      <div>
                        <span className="text-gray-500">Guarantee:</span> {service.guarantee}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={`https://ziontechgroup.com/contact?service=${service.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg text-center font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Get Quote
                    </a>
                    <a
                      href={`https://ziontechgroup.com/case-studies?service=${service.id}`}
                      className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Case Studies
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our expert team for a free consultation and customized IT solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-8 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-gray-800 text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ITServicesPage;