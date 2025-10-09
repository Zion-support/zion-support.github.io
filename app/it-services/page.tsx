<<<<<<< HEAD
'use client';
<<<<<<< HEAD
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, 
  BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, 
  Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, 
  Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, 
  Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, 
  Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, 
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Monitor, Headphones, Mic, 
  Image, FileImage, Layers, GitBranch, Terminal, Wifi, HardDrive, Cpu as Processor,
  WifiOff, RefreshCw, Download, Upload, Share2, Copy, Edit, Trash2, Plus, Minus,
  Maximize, Minimize, RotateCcw, RotateCw, Move, Grip, Filter, SortAsc, SortDesc,
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight, X, Check as CheckIcon, AlertCircle, Info,
  ExternalLink, Link, Lock as LockIcon, Unlock, Eye as EyeIcon, EyeOff, Bell,
  BellOff, Volume2, VolumeX, Play, Pause, Stop, SkipForward, SkipBack, Repeat,
  Shuffle, Heart as HeartIcon, ThumbsUp, ThumbsDown, MessageCircle, Send,
  Paperclip, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Meh as MehIcon,
  Server, Network, Router, Switch, Firewall, Key, Certificate, Bug, AlertTriangle,
  Activity as ActivityIcon, Zap as ZapIcon, Globe as GlobeIcon, Shield as ShieldIcon,
  Database as DatabaseIcon, Cloud as CloudIcon, Code as CodeIcon, Smartphone as SmartphoneIcon,
  Settings as SettingsIcon, BarChart as BarChartIcon, FileText as FileTextIcon,
  Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon,
  Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon,
  Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon,
  Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon,
  GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon,
  Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon,
  BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon,
  Clock3 as Clock3Icon, Compass as CompassIcon, Globe2 as Globe2Icon, Map as MapIcon,
  Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon,
  Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon,
  Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon,
  ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon
} from 'lucide-react';

>>>>>>> origin/main
const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      category: 'infrastructure',
      icon: Cloud,
      price: '$1,299/month',
      originalPrice: '$2,499/month',
      description: 'Comprehensive cloud infrastructure setup, management, and optimization for AWS, Azure, and GCP.',
      features: [
        'Multi-cloud strategy implementation',
        'Infrastructure as Code (IaC)',
        'Auto-scaling configuration',
        'Cost optimization',
        'Security hardening',
        'Disaster recovery setup',
        '24/7 monitoring',
        'Performance optimization'
      ],
      benefits: [
        'Reduce cloud costs by 40%',
        'Improve uptime to 99.9%',
        'Automated scaling',
        'Enhanced security posture'
      ],
      marketPrice: '$2,499-4,999/month',
      rating: 4.9,
      reviews: 1247,
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      demo: 'https://ziontechgroup.com/demo/cloud-infrastructure'
    },
    {
      id: 'cybersecurity-suite',
      name: 'Advanced Cybersecurity Suite',
      category: 'security',
      icon: Shield,
      price: '$1,599/month',
      originalPrice: '$2,999/month',
      description: 'Comprehensive cybersecurity solution with threat detection, prevention, and incident response.',
      features: [
        '24/7 threat monitoring',
        'Advanced threat detection',
        'Vulnerability assessment',
        'Penetration testing',
        'Security awareness training',
        'Incident response',
        'Compliance management',
        'Security audits'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 95%',
        'Compliance assurance',
        'Peace of mind'
      ],
      marketPrice: '$2,999-5,999/month',
      rating: 4.8,
      reviews: 892,
      link: 'https://ziontechgroup.com/cybersecurity-suite',
      demo: 'https://ziontechgroup.com/demo/cybersecurity-suite'
    },
    {
      id: 'devops-automation',
      name: 'DevOps & CI/CD Automation',
      category: 'devops',
      icon: GitBranch,
      price: '$1,199/month',
      originalPrice: '$2,299/month',
      description: 'Complete DevOps pipeline setup with automated testing, deployment, and monitoring.',
      features: [
        'CI/CD pipeline setup',
        'Automated testing',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring & alerting',
        'Version control management',
        'Code quality gates',
        'Deployment automation'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve code quality',
        'Automated workflows'
      ],
      marketPrice: '$2,299-4,599/month',
      rating: 4.9,
      reviews: 1563,
      link: 'https://ziontechgroup.com/devops-automation',
      demo: 'https://ziontechgroup.com/demo/devops-automation'
    },
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      category: 'database',
      icon: Database,
      price: '$899/month',
      originalPrice: '$1,799/month',
      description: 'Professional database administration with performance tuning and optimization.',
      features: [
        'Database design & architecture',
        'Performance tuning',
        'Backup & recovery',
        'Security hardening',
        'Query optimization',
        'Index management',
        'Capacity planning',
        'Migration services'
      ],
      benefits: [
        'Improve query performance by 300%',
        'Reduce downtime by 99%',
        'Optimize storage costs',
        'Enhanced data security'
      ],
      marketPrice: '$1,799-3,599/month',
      rating: 4.8,
      reviews: 743,
      link: 'https://ziontechgroup.com/database-management',
      demo: 'https://ziontechgroup.com/demo/database-management'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure Solutions',
      category: 'networking',
      icon: Network,
      price: '$1,099/month',
      originalPrice: '$2,199/month',
      description: 'Complete network design, implementation, and management for enterprise environments.',
      features: [
        'Network design & planning',
        'Router & switch configuration',
        'Wireless network setup',
        'VPN implementation',
        'Network monitoring',
        'Troubleshooting & support',
        'Security implementation',
        'Performance optimization'
      ],
      benefits: [
        'Improve network performance by 200%',
        'Reduce network downtime by 95%',
        'Enhanced security',
        'Scalable infrastructure'
      ],
      marketPrice: '$2,199-4,399/month',
      rating: 4.7,
      reviews: 1024,
      link: 'https://ziontechgroup.com/network-infrastructure',
      demo: 'https://ziontechgroup.com/demo/network-infrastructure'
    },
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      category: 'managed',
      icon: Settings,
      price: '$999/month',
      originalPrice: '$1,999/month',
      description: 'Comprehensive 24/7 IT management and support for all your technology needs.',
      features: [
        '24/7 help desk support',
        'Proactive monitoring',
        'Software updates & patches',
        'Hardware maintenance',
        'User support & training',
        'Asset management',
        'Vendor management',
        'Strategic IT planning'
      ],
      benefits: [
        'Reduce IT costs by 50%',
        'Minimize downtime',
        'Expert support team',
        'Predictable costs'
      ],
      marketPrice: '$1,999-3,999/month',
      rating: 4.9,
      reviews: 1156,
      link: 'https://ziontechgroup.com/managed-it-services',
      demo: 'https://ziontechgroup.com/demo/managed-it-services'
    },
    {
      id: 'data-backup-recovery',
      name: 'Data Backup & Recovery',
      category: 'backup',
      icon: HardDrive,
      price: '$599/month',
      originalPrice: '$1,199/month',
      description: 'Comprehensive data protection with automated backups and disaster recovery.',
      features: [
        'Automated daily backups',
        'Cloud & on-premise storage',
        'Disaster recovery planning',
        'Data encryption',
        'Recovery testing',
        'Compliance backup',
        'Version control',
        '24/7 monitoring'
      ],
      benefits: [
        '99.9% data protection',
        'Fast recovery times',
        'Compliance assurance',
        'Peace of mind'
      ],
      marketPrice: '$1,199-2,399/month',
      rating: 4.8,
      reviews: 678,
      link: 'https://ziontechgroup.com/data-backup-recovery',
      demo: 'https://ziontechgroup.com/demo/data-backup-recovery'
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy & Consulting',
      category: 'consulting',
      icon: Users,
      price: '$1,499/month',
      originalPrice: '$2,999/month',
      description: 'Strategic IT consulting to align technology with business objectives.',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation',
        'Process optimization',
        'Vendor evaluation',
        'Budget planning',
        'Risk assessment',
        'Implementation planning'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Reduce risks',
        'Strategic guidance'
      ],
      marketPrice: '$2,999-5,999/month',
      rating: 4.9,
      reviews: 456,
      link: 'https://ziontechgroup.com/it-consulting',
      demo: 'https://ziontechgroup.com/demo/it-consulting'
    },
    {
      id: 'endpoint-security',
      name: 'Endpoint Security Management',
      category: 'security',
      icon: Smartphone,
      price: '$799/month',
      originalPrice: '$1,599/month',
      description: 'Comprehensive endpoint protection for all devices across your organization.',
      features: [
        'Antivirus & anti-malware',
        'Device encryption',
        'Remote device management',
        'Application control',
        'Data loss prevention',
        'Mobile device management',
        'Patch management',
        'Threat detection'
      ],
      benefits: [
        'Protect all endpoints',
        'Reduce security risks by 90%',
        'Centralized management',
        'Compliance assurance'
      ],
      marketPrice: '$1,599-3,199/month',
      rating: 4.7,
      reviews: 891,
      link: 'https://ziontechgroup.com/endpoint-security',
      demo: 'https://ziontechgroup.com/demo/endpoint-security'
    },
    {
      id: 'server-management',
      name: 'Server Management & Monitoring',
      category: 'infrastructure',
      icon: Server,
      price: '$1,399/month',
      originalPrice: '$2,799/month',
      description: 'Professional server administration with proactive monitoring and maintenance.',
      features: [
        'Server setup & configuration',
        'Performance monitoring',
        'Capacity planning',
        'Security hardening',
        'Backup management',
        'Patch management',
        'Troubleshooting',
        'Optimization'
      ],
      benefits: [
        'Improve server performance by 200%',
        'Reduce downtime by 95%',
        'Proactive maintenance',
        'Expert administration'
      ],
      marketPrice: '$2,799-5,599/month',
      rating: 4.8,
      reviews: 1023,
      link: 'https://ziontechgroup.com/server-management',
      demo: 'https://ziontechgroup.com/demo/server-management'
    },
    {
      id: 'email-security',
      name: 'Email Security & Compliance',
      category: 'security',
      icon: Mail,
      price: '$499/month',
      originalPrice: '$999/month',
      description: 'Advanced email protection against phishing, malware, and data breaches.',
      features: [
        'Email threat protection',
        'Phishing prevention',
        'Spam filtering',
        'Data loss prevention',
        'Email encryption',
        'Compliance monitoring',
        'User training',
        'Incident response'
      ],
      benefits: [
        'Block 99.9% of email threats',
        'Prevent data breaches',
        'Compliance assurance',
        'User education'
      ],
      marketPrice: '$999-1,999/month',
      rating: 4.6,
      reviews: 567,
      link: 'https://ziontechgroup.com/email-security',
      demo: 'https://ziontechgroup.com/demo/email-security'
    },
    {
      id: 'it-training',
      name: 'IT Training & Certification',
      category: 'training',
      icon: GraduationCap,
      price: '$299/month',
      originalPrice: '$599/month',
      description: 'Comprehensive IT training programs for your team to enhance skills and productivity.',
      features: [
        'Customized training programs',
        'Certification preparation',
        'Hands-on labs',
        'Progress tracking',
        'Expert instructors',
        'Flexible scheduling',
        'Certification vouchers',
        'Ongoing support'
      ],
      benefits: [
        'Improve team skills',
        'Increase productivity',
        'Reduce support tickets',
        'Career development'
      ],
      marketPrice: '$599-1,199/month',
      rating: 4.7,
      reviews: 445,
      link: 'https://ziontechgroup.com/it-training',
      demo: 'https://ziontechgroup.com/demo/it-training'
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery Planning',
      category: 'backup',
      icon: AlertTriangle,
      price: '$1,299/month',
      originalPrice: '$2,599/month',
      description: 'Comprehensive disaster recovery planning and implementation for business continuity.',
      features: [
        'Disaster recovery planning',
        'Business continuity planning',
        'Recovery testing',
        'Failover systems',
        'Data replication',
        'Recovery time objectives',
        'Recovery point objectives',
        'Regular testing'
      ],
      benefits: [
        'Minimize downtime',
        'Protect business operations',
        'Compliance assurance',
        'Peace of mind'
      ],
      marketPrice: '$2,599-5,199/month',
      rating: 4.9,
      reviews: 334,
      link: 'https://ziontechgroup.com/disaster-recovery',
      demo: 'https://ziontechgroup.com/demo/disaster-recovery'
    },
    {
      id: 'network-security',
      name: 'Network Security Solutions',
      category: 'security',
      icon: Firewall,
      price: '$1,199/month',
      originalPrice: '$2,399/month',
      description: 'Advanced network security with firewalls, intrusion detection, and threat prevention.',
      features: [
        'Firewall configuration',
        'Intrusion detection',
        'Network segmentation',
        'VPN management',
        'Traffic monitoring',
        'Threat prevention',
        'Security policies',
        'Incident response'
      ],
      benefits: [
        'Protect network infrastructure',
        'Prevent unauthorized access',
        'Monitor network traffic',
        'Enhanced security posture'
      ],
      marketPrice: '$2,399-4,799/month',
      rating: 4.8,
      reviews: 789,
      link: 'https://ziontechgroup.com/network-security',
      demo: 'https://ziontechgroup.com/demo/network-security'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      category: 'migration',
      icon: Upload,
      price: '$1,599/month',
      originalPrice: '$3,199/month',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency.',
      features: [
        'Migration planning',
        'Data migration',
        'Application migration',
        'Testing & validation',
        'Performance optimization',
        'Security configuration',
        'Training & support',
        'Post-migration monitoring'
      ],
      benefits: [
        'Smooth cloud transition',
        'Minimize downtime',
        'Optimize performance',
        'Cost savings'
      ],
      marketPrice: '$3,199-6,399/month',
      rating: 4.9,
      reviews: 623,
      link: 'https://ziontechgroup.com/cloud-migration',
      demo: 'https://ziontechgroup.com/demo/cloud-migration'
    },
    {
      id: 'it-compliance',
      name: 'IT Compliance & Auditing',
      category: 'compliance',
      icon: Certificate,
      price: '$1,399/month',
      originalPrice: '$2,799/month',
      description: 'Comprehensive IT compliance management for GDPR, HIPAA, SOX, and other regulations.',
      features: [
        'Compliance assessment',
        'Policy development',
        'Audit preparation',
        'Risk assessment',
        'Documentation management',
        'Training programs',
        'Monitoring & reporting',
        'Remediation support'
      ],
      benefits: [
        'Ensure compliance',
        'Reduce audit risks',
        'Protect sensitive data',
        'Regulatory assurance'
      ],
      marketPrice: '$2,799-5,599/month',
      rating: 4.8,
      reviews: 456,
      link: 'https://ziontechgroup.com/it-compliance',
      demo: 'https://ziontechgroup.com/demo/it-compliance'
    },
    {
      id: 'performance-monitoring',
      name: 'IT Performance Monitoring',
      category: 'monitoring',
      icon: Activity,
      price: '$799/month',
      originalPrice: '$1,599/month',
      description: 'Comprehensive monitoring and alerting for all IT infrastructure components.',
      features: [
        'Real-time monitoring',
        'Performance metrics',
        'Alert management',
        'Capacity planning',
        'Trend analysis',
        'Custom dashboards',
        'Mobile notifications',
        'Historical reporting'
      ],
      benefits: [
        'Proactive issue detection',
        'Improve system performance',
        'Reduce downtime',
        'Data-driven decisions'
      ],
      marketPrice: '$1,599-3,199/month',
      rating: 4.7,
      reviews: 567,
      link: 'https://ziontechgroup.com/performance-monitoring',
      demo: 'https://ziontechgroup.com/demo/performance-monitoring'
    },
    {
      id: 'it-automation',
      name: 'IT Process Automation',
      category: 'automation',
      icon: Zap,
      price: '$1,099/month',
      originalPrice: '$2,199/month',
      description: 'Automate repetitive IT tasks to improve efficiency and reduce human error.',
      features: [
        'Workflow automation',
        'Script development',
        'Task scheduling',
        'Integration APIs',
        'Error handling',
        'Monitoring & logging',
        'Custom solutions',
        'Maintenance & updates'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Improve accuracy',
        'Increase efficiency',
        'Cost savings'
      ],
      marketPrice: '$2,199-4,399/month',
      rating: 4.8,
      reviews: 678,
      link: 'https://ziontechgroup.com/it-automation',
      demo: 'https://ziontechgroup.com/demo/it-automation'
    },
    {
      id: 'help-desk-support',
      name: '24/7 Help Desk Support',
      category: 'support',
      icon: Headphones,
      price: '$699/month',
      originalPrice: '$1,399/month',
      description: 'Round-the-clock technical support for all your IT needs and issues.',
      features: [
        '24/7 phone & email support',
        'Remote assistance',
        'Ticket management',
        'Knowledge base',
        'User training',
        'Escalation procedures',
        'SLA guarantees',
        'Multi-language support'
      ],
      benefits: [
        'Immediate issue resolution',
        'Reduce downtime',
        'Expert support team',
        'User satisfaction'
      ],
      marketPrice: '$1,399-2,799/month',
      rating: 4.9,
      reviews: 1024,
      link: 'https://ziontechgroup.com/help-desk-support',
      demo: 'https://ziontechgroup.com/demo/help-desk-support'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: itServices.length },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server, count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'security', name: 'Security', icon: Shield, count: itServices.filter(s => s.category === 'security').length },
    { id: 'devops', name: 'DevOps', icon: GitBranch, count: itServices.filter(s => s.category === 'devops').length },
    { id: 'database', name: 'Database', icon: Database, count: itServices.filter(s => s.category === 'database').length },
    { id: 'networking', name: 'Networking', icon: Network, count: itServices.filter(s => s.category === 'networking').length },
    { id: 'managed', name: 'Managed Services', icon: Settings, count: itServices.filter(s => s.category === 'managed').length },
    { id: 'backup', name: 'Backup & Recovery', icon: HardDrive, count: itServices.filter(s => s.category === 'backup').length },
    { id: 'consulting', name: 'Consulting', icon: Users, count: itServices.filter(s => s.category === 'consulting').length },
    { id: 'training', name: 'Training', icon: GraduationCap, count: itServices.filter(s => s.category === 'training').length },
    { id: 'migration', name: 'Migration', icon: Upload, count: itServices.filter(s => s.category === 'migration').length },
    { id: 'compliance', name: 'Compliance', icon: Certificate, count: itServices.filter(s => s.category === 'compliance').length },
    { id: 'monitoring', name: 'Monitoring', icon: Activity, count: itServices.filter(s => s.category === 'monitoring').length },
    { id: 'automation', name: 'Automation', icon: Zap, count: itServices.filter(s => s.category === 'automation').length },
    { id: 'support', name: 'Support', icon: Headphones, count: itServices.filter(s => s.category === 'support').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const totalSavings = itServices.reduce((total, service) => {
    const original = parseInt(service.originalPrice.replace('$', '').replace(',', '').replace('/month', ''));
    const current = parseInt(service.price.replace('$', '').replace(',', '').replace('/month', ''));
    return total + (original - current);
  }, 0);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="relative z-10">
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive IT solutions for your business
              </p>
            </div>
          </section>
        </main>
        <Footer />
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, and managed services. Starting at $299/month with up to 50% savings." />
        <meta name="keywords" content="it services, cloud infrastructure, cybersecurity, devops, managed it services, database management, network security" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-3d">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to optimize your technology infrastructure, 
            enhance security, and drive business growth. Starting at $299/month with up to 50% savings.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-green-400 mb-2">$299</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-300">Average Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card holographic-border">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 cyber-card hover:bg-white/10 transition-all duration-300 group">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                    <div className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      Save {Math.round((1 - parseInt(service.price.replace('$', '').replace(',', '').replace('/month', '')) / parseInt(service.originalPrice.replace('$', '').replace(',', '').replace('/month', ''))) * 100)}%
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Market price: {service.marketPrice}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                  >
                    Get Started
                  </a>
                  <a
                    href={service.demo}
                    className="bg-transparent border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500/10 transition-all"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our IT services today and save up to ${totalSavings.toLocaleString()}/month compared to market prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default ITServicesPage;
=======
import React from "react"; export default function Page() { return <div>IT Services</div>; }
>>>>>>> cursor/website-audit-and-update-with-deployment-af41
=======
export default ITServicesPage;
>>>>>>> origin/main
