'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  CheckCircle, 
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Target,
  TrendingUp,
  Lock,
  Cloud,
  Database,
  Code,
  Palette,
  Search,
  MessageSquare,
  FileText,
  Image,
  Video,
  Music,
  Camera,
  Smartphone,
  Laptop,
  Server,
  Wifi,
  Settings,
  Monitor,
  Headphones,
  Mic,
  Keyboard,
  Mouse,
  Printer,
  HardDrive,
  Cpu,
  MemoryStick,
  Wrench,
  Cog,
  Layers,
  Grid,
  Layout,
  PieChart,
  Activity,
  AlertCircle,
  Bell,
  Calendar,
  Clock as ClockIcon,
  Download,
  Upload,
  Share,
  Link,
  Copy,
  Edit,
  Trash2,
  Save,
  Plus,
  Minus,
  X,
  Check,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Home,
  User,
  UserPlus,
  UserCheck,
  UserX,
  LogIn,
  LogOut,
  Key,
  Eye,
  EyeOff,
  Lock as LockIcon,
  Unlock,
  RefreshCw,
  RotateCcw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Volume1,
  Maximize,
  Minimize,
  Move,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Search as SearchIcon,
  Filter,
  SortAsc,
  SortDesc,
  List,
  Grid as GridIcon,
  Columns,
  Rows,
  Layout as LayoutIcon,
  Sidebar,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Info,
  HelpCircle,
  QuestionMarkCircle,
  ExternalLink,
  ArrowUpRight,
  ArrowDownRight,
  ArrowUpLeft,
  ArrowDownLeft,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  MoveUp,
  MoveDown,
  MoveLeft,
  MoveRight,
  CornerUpLeft,
  CornerUpRight,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftUp,
  CornerLeftDown,
  CornerRightUp,
  CornerRightDown,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
  Repeat,
  Repeat1,
  Shuffle,
  Shuffle2,
  Shuffle3,
  Shuffle4,
  Shuffle5,
  Shuffle6,
  Shuffle7,
  Shuffle8,
  Shuffle9,
  Shuffle10,
  Shuffle11,
  Shuffle12,
  Shuffle13,
  Shuffle14,
  Shuffle15,
  Shuffle16,
  Shuffle17,
  Shuffle18,
  Shuffle19,
  Shuffle20,
  Shuffle21,
  Shuffle22,
  Shuffle23,
  Shuffle24,
  Shuffle25,
  Shuffle26,
  Shuffle27,
  Shuffle28,
  Shuffle29,
  Shuffle30,
  Shuffle31,
  Shuffle32,
  Shuffle33,
  Shuffle34,
  Shuffle35,
  Shuffle36,
  Shuffle37,
  Shuffle38,
  Shuffle39,
  Shuffle40,
  Shuffle41,
  Shuffle42,
  Shuffle43,
  Shuffle44,
  Shuffle45,
  Shuffle46,
  Shuffle47,
  Shuffle48,
  Shuffle49,
  Shuffle50,
  Shuffle51,
  Shuffle52,
  Shuffle53,
  Shuffle54,
  Shuffle55,
  Shuffle56,
  Shuffle57,
  Shuffle58,
  Shuffle59,
  Shuffle60,
  Shuffle61,
  Shuffle62,
  Shuffle63,
  Shuffle64,
  Shuffle65,
  Shuffle66,
  Shuffle67,
  Shuffle68,
  Shuffle69,
  Shuffle70,
  Shuffle71,
  Shuffle72,
  Shuffle73,
  Shuffle74,
  Shuffle75,
  Shuffle76,
  Shuffle77,
  Shuffle78,
  Shuffle79,
  Shuffle80,
  Shuffle81,
  Shuffle82,
  Shuffle83,
  Shuffle84,
  Shuffle85,
  Shuffle86,
  Shuffle87,
  Shuffle88,
  Shuffle89,
  Shuffle90,
  Shuffle91,
  Shuffle92,
  Shuffle93,
  Shuffle94,
  Shuffle95,
  Shuffle96,
  Shuffle97,
  Shuffle98,
  Shuffle99,
  Shuffle100
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Comprehensive cloud migration solutions to move your infrastructure to AWS, Azure, or Google Cloud with zero downtime.',
      icon: Cloud,
      price: '$5,000+',
      features: [
        'Infrastructure assessment',
        'Migration planning',
        'Zero-downtime migration',
        'Data security',
        'Performance optimization',
        'Cost optimization',
        '24/7 monitoring',
        'Post-migration support'
      ],
      category: 'Cloud Services',
      rating: 4.9,
      clients: '300+',
      link: 'https://ziontechgroup.com/cloud-migration'
    },
    {
      id: 'cybersecurity-audit',
      name: 'Cybersecurity Audit & Assessment',
      description: 'Comprehensive security assessment and penetration testing to identify vulnerabilities and strengthen your defenses.',
      icon: Shield,
      price: '$3,000+',
      features: [
        'Vulnerability assessment',
        'Penetration testing',
        'Security audit',
        'Compliance review',
        'Risk analysis',
        'Remediation planning',
        'Security training',
        'Ongoing monitoring'
      ],
      category: 'Security',
      rating: 4.8,
      clients: '250+',
      link: 'https://ziontechgroup.com/cybersecurity-audit'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure Design',
      description: 'Enterprise-grade network design and implementation for optimal performance, security, and scalability.',
      icon: Wifi,
      price: '$8,000+',
      features: [
        'Network architecture design',
        'Hardware procurement',
        'Installation & configuration',
        'Security implementation',
        'Performance optimization',
        'Monitoring setup',
        'Documentation',
        'Training & support'
      ],
      category: 'Infrastructure',
      rating: 4.7,
      clients: '200+',
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      id: 'data-backup-recovery',
      name: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions to protect your critical business data.',
      icon: Database,
      price: '$2,000+',
      features: [
        'Automated backups',
        'Disaster recovery planning',
        'Data encryption',
        'Offsite storage',
        'Recovery testing',
        'Compliance support',
        '24/7 monitoring',
        'Rapid recovery'
      ],
      category: 'Data Management',
      rating: 4.9,
      clients: '400+',
      link: 'https://ziontechgroup.com/data-backup-recovery'
    },
    {
      id: 'software-development',
      name: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your business requirements with modern technologies and best practices.',
      icon: Code,
      price: '$10,000+',
      features: [
        'Requirements analysis',
        'Custom development',
        'Quality assurance',
        'Testing & deployment',
        'Documentation',
        'Maintenance support',
        'Scalability planning',
        'Performance optimization'
      ],
      category: 'Development',
      rating: 4.8,
      clients: '150+',
      link: 'https://ziontechgroup.com/software-development'
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy Consulting',
      description: 'Strategic IT consulting to align technology with business goals and optimize your technology investments.',
      icon: Target,
      price: '$200/hour',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Vendor evaluation',
        'Budget planning',
        'Risk management',
        'Change management',
        'Training programs',
        'Ongoing advisory'
      ],
      category: 'Consulting',
      rating: 4.9,
      clients: '180+',
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      id: 'help-desk-support',
      name: '24/7 Help Desk Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly and your team stays productive.',
      icon: Headphones,
      price: '$1,500/month',
      features: [
        '24/7 technical support',
        'Remote assistance',
        'Issue tracking',
        'Priority escalation',
        'Knowledge base',
        'User training',
        'Performance monitoring',
        'Proactive maintenance'
      ],
      category: 'Support',
      rating: 4.7,
      clients: '500+',
      link: 'https://ziontechgroup.com/help-desk-support'
    },
    {
      id: 'system-integration',
      name: 'System Integration Services',
      description: 'Seamless integration of disparate systems to create a unified, efficient technology ecosystem.',
      icon: Layers,
      price: '$6,000+',
      features: [
        'System analysis',
        'Integration planning',
        'API development',
        'Data migration',
        'Testing & validation',
        'Performance optimization',
        'Documentation',
        'Training & support'
      ],
      category: 'Integration',
      rating: 4.8,
      clients: '120+',
      link: 'https://ziontechgroup.com/system-integration'
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      icon: Smartphone,
      price: '$15,000+',
      features: [
        'Native iOS/Android apps',
        'Cross-platform solutions',
        'UI/UX design',
        'Backend integration',
        'App store deployment',
        'Performance optimization',
        'Maintenance support',
        'Analytics integration'
      ],
      category: 'Mobile Development',
      rating: 4.9,
      clients: '100+',
      link: 'https://ziontechgroup.com/mobile-app-development'
    },
    {
      id: 'web-development',
      name: 'Web Development Services',
      description: 'Modern, responsive web applications and websites built with cutting-edge technologies and best practices.',
      icon: Globe,
      price: '$8,000+',
      features: [
        'Responsive web design',
        'Frontend development',
        'Backend development',
        'Database design',
        'SEO optimization',
        'Performance optimization',
        'Security implementation',
        'Maintenance support'
      ],
      category: 'Web Development',
      rating: 4.8,
      clients: '200+',
      link: 'https://ziontechgroup.com/web-development'
    },
    {
      id: 'it-infrastructure-management',
      name: 'IT Infrastructure Management',
      description: 'Complete management of your IT infrastructure including servers, networks, and cloud resources.',
      icon: Server,
      price: '$3,000/month',
      features: [
        'Server management',
        'Network monitoring',
        'Cloud management',
        'Security monitoring',
        'Performance optimization',
        'Backup management',
        'Patch management',
        'Incident response'
      ],
      category: 'Infrastructure',
      rating: 4.9,
      clients: '80+',
      link: 'https://ziontechgroup.com/it-infrastructure-management'
    },
    {
      id: 'compliance-consulting',
      name: 'Compliance & Governance',
      description: 'Compliance consulting and governance services to ensure your IT practices meet regulatory requirements.',
      icon: FileText,
      price: '$4,000+',
      features: [
        'Compliance assessment',
        'Policy development',
        'Audit preparation',
        'Risk management',
        'Training programs',
        'Documentation',
        'Ongoing monitoring',
        'Remediation support'
      ],
      category: 'Compliance',
      rating: 4.8,
      clients: '90+',
      link: 'https://ziontechgroup.com/compliance-consulting'
    }
  ];

  const categories = [
    'All',
    'Cloud Services',
    'Security',
    'Infrastructure',
    'Data Management',
    'Development',
    'Consulting',
    'Support',
    'Integration',
    'Mobile Development',
    'Web Development',
    'Compliance'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>IT Services & Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, network infrastructure, software development, and 24/7 support. Transform your technology infrastructure." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, network infrastructure, software development, it consulting, help desk support" />
        <meta property="og:title" content="IT Services & Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your technology infrastructure with our comprehensive IT services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 cyber-text neon-pulse">
                IT Services & Solutions
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Power Your Technology
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Comprehensive IT services designed to modernize your technology infrastructure, enhance security, 
                and drive business growth with cutting-edge solutions and expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">starting price</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                    <div className="text-sm text-gray-400">{service.clients} clients</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have already transformed their technology infrastructure with our IT services. 
              Get started with a free consultation and discover how we can optimize your technology investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;