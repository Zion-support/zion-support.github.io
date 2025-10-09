'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { 
  CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, 
  Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, 
  DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, 
  FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, 
  CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, 
  GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, 
  Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, 
  PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, 
  ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,
  ExternalLink, Play, Download, Upload, RefreshCw, Settings2, Monitor, Laptop,
  Tablet, Headphones, Mic, MicOff, Volume2, VolumeX, Wifi, WifiOff, Battery,
  BatteryCharging, Power, PowerOff, Wrench2, Tool, Hammer2, Screwdriver,
  Cog, Sliders, ToggleLeft, ToggleRight, Switch, RotateCcw, RotateCw,
  Maximize, Minimize, Move, Copy, Trash2, Edit, Save, Plus, Minus, X,
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal,
  MoreVertical, Filter, SortAsc, SortDesc, Search as SearchIcon,
  Bell, BellOff, Eye as EyeIcon, EyeOff, Lock as LockIcon, Unlock,
  Key, Fingerprint, Shield as ShieldIcon, AlertTriangle, Info,
  HelpCircle, QuestionMarkCircle, CheckCircle2, XCircle, AlertCircle,
  PlusCircle, MinusCircle, XCircle as XCircleIcon, CheckCircle as CheckCircleIcon,
  Server, HardDrive, Network, Router, Switch as SwitchIcon, Hub, Wifi as WifiIcon,
  Globe as GlobeIcon, Database as DatabaseIcon, Cloud as CloudIcon, 
  Settings as SettingsIcon, Cog as CogIcon, Wrench as WrenchIcon,
  Tool as ToolIcon, Hammer as HammerIcon, Screwdriver as ScrewdriverIcon,
  Monitor as MonitorIcon, Laptop as LaptopIcon, Smartphone as SmartphoneIcon,
  Tablet as TabletIcon, Headphones as HeadphonesIcon, Mic as MicIcon,
  Volume2 as Volume2Icon, Battery as BatteryIcon, Power as PowerIcon,
  Wifi as WifiIcon2, WifiOff as WifiOffIcon, BatteryCharging as BatteryChargingIcon,
  PowerOff as PowerOffIcon, Wrench2 as Wrench2Icon, Tool as Tool2Icon,
  Hammer2 as Hammer2Icon, Screwdriver as Screwdriver2Icon, Cog as Cog2Icon,
  Sliders as SlidersIcon, ToggleLeft as ToggleLeftIcon, ToggleRight as ToggleRightIcon,
  Switch as Switch2Icon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon,
  Maximize as MaximizeIcon, Minimize as MinimizeIcon, Move as MoveIcon,
  Copy as CopyIcon, Trash2 as Trash2Icon, Edit as EditIcon, Save as SaveIcon,
  Plus as PlusIcon, Minus as MinusIcon, X as XIcon, ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon, ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon, MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon, Filter as FilterIcon, SortAsc as SortAscIcon,
  SortDesc as SortDescIcon, Search as SearchIcon2, Bell as BellIcon,
  BellOff as BellOffIcon, Eye as EyeIcon3, EyeOff as EyeOffIcon,
  Lock as LockIcon2, Unlock as UnlockIcon, Key as KeyIcon,
  Fingerprint as FingerprintIcon, Shield as ShieldIcon2, AlertTriangle as AlertTriangleIcon,
  Info as InfoIcon, HelpCircle as HelpCircleIcon, QuestionMarkCircle as QuestionMarkCircleIcon,
  CheckCircle2 as CheckCircle2Icon, XCircle as XCircleIcon2, AlertCircle as AlertCircleIcon,
  PlusCircle as PlusCircleIcon, MinusCircle as MinusCircleIcon,
  XCircle as XCircleIcon3, CheckCircle as CheckCircleIcon2
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Management',
      category: 'infrastructure',
      icon: Server,
      price: '$999/month',
      originalPrice: '$1,500/month',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and comprehensive support',
      features: [
        'Server Management & Monitoring',
        'Network Setup & Configuration',
        'Security Hardening',
        'Backup & Disaster Recovery',
        'Performance Optimization',
        '24/7 Technical Support',
        'Proactive Maintenance',
        'Compliance Management'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Reduced IT costs by 40%',
        'Improved system performance',
        'Enhanced security posture'
      ],
      rating: 4.9,
      reviews: 234,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/it-infrastructure',
      signupUrl: 'https://app.ziontechgroup.com/signup/it-infrastructure',
      marketPrice: '$1,200-2,000/month',
      savings: 'Save $501/month'
    },
    {
      id: 'cloud-services',
      name: 'Cloud Services & Migration',
      category: 'cloud',
      icon: Cloud,
      price: '$1,299/month',
      originalPrice: '$2,000/month',
      description: 'Cloud migration, setup, and optimization services for AWS, Azure, and GCP',
      features: [
        'Cloud Migration Planning',
        'AWS/Azure/GCP Setup',
        'Cost Optimization',
        'Security Configuration',
        'Auto-scaling Setup',
        'Monitoring & Alerting',
        'Disaster Recovery',
        'Multi-cloud Management'
      ],
      benefits: [
        'Reduce cloud costs by 30%',
        'Improve scalability',
        'Enhanced security',
        'Better performance'
      ],
      rating: 4.8,
      reviews: 456,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/cloud-services',
      signupUrl: 'https://app.ziontechgroup.com/signup/cloud-services',
      marketPrice: '$1,600-2,500/month',
      savings: 'Save $701/month'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      category: 'security',
      icon: Shield,
      price: '$1,599/month',
      originalPrice: '$2,500/month',
      description: 'Advanced security solutions with threat detection, prevention, and incident response',
      features: [
        'Threat Detection & Analysis',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response',
        'Penetration Testing',
        'Compliance Auditing',
        'Security Training',
        '24/7 SOC Monitoring'
      ],
      benefits: [
        'Prevent security breaches',
        'Comply with regulations',
        'Reduce security risks',
        'Peace of mind'
      ],
      rating: 4.9,
      reviews: 345,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/cybersecurity',
      signupUrl: 'https://app.ziontechgroup.com/signup/cybersecurity',
      marketPrice: '$2,000-3,200/month',
      savings: 'Save $901/month'
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD',
      category: 'devops',
      icon: Settings,
      price: '$1,199/month',
      originalPrice: '$1,800/month',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
      features: [
        'CI/CD Pipeline Setup',
        'Automated Testing',
        'Container Orchestration',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Deployment Automation',
        'Version Control',
        'Performance Optimization'
      ],
      benefits: [
        'Faster deployments',
        'Reduced errors',
        'Improved collaboration',
        'Better quality control'
      ],
      rating: 4.7,
      reviews: 567,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/devops-cicd',
      signupUrl: 'https://app.ziontechgroup.com/signup/devops-cicd',
      marketPrice: '$1,500-2,200/month',
      savings: 'Save $601/month'
    },
    {
      id: 'database-services',
      name: 'Database Services',
      category: 'database',
      icon: Database,
      price: '$899/month',
      originalPrice: '$1,400/month',
      description: 'Database design, optimization, and management with AI-powered tuning',
      features: [
        'Database Design & Architecture',
        'Performance Tuning',
        'Backup & Recovery',
        'Security Hardening',
        'Migration Services',
        'Monitoring & Alerting',
        'Query Optimization',
        'Scalability Planning'
      ],
      benefits: [
        'Improve performance by 50%',
        'Reduce downtime',
        'Better data security',
        'Cost optimization'
      ],
      rating: 4.8,
      reviews: 234,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/database-services',
      signupUrl: 'https://app.ziontechgroup.com/signup/database-services',
      marketPrice: '$1,200-1,800/month',
      savings: 'Save $501/month'
    },
    {
      id: 'network-services',
      name: 'Network Services',
      category: 'networking',
      icon: Network,
      price: '$1,099/month',
      originalPrice: '$1,700/month',
      description: 'Network design, implementation, and monitoring solutions for enterprise environments',
      features: [
        'Network Design & Planning',
        'Implementation & Configuration',
        'Performance Monitoring',
        'Security Implementation',
        'Troubleshooting & Support',
        'Capacity Planning',
        'VLAN Configuration',
        'Wireless Solutions'
      ],
      benefits: [
        'Improved network performance',
        'Enhanced security',
        'Reduced downtime',
        'Better scalability'
      ],
      rating: 4.7,
      reviews: 345,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/network-services',
      signupUrl: 'https://app.ziontechgroup.com/signup/network-services',
      marketPrice: '$1,400-2,200/month',
      savings: 'Save $601/month'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      category: 'consulting',
      icon: Users,
      price: '$1,500/month',
      originalPrice: '$2,500/month',
      description: 'Strategic IT consulting and planning for digital transformation and optimization',
      features: [
        'IT Strategy Development',
        'Technology Assessment',
        'Digital Transformation',
        'Process Optimization',
        'Vendor Management',
        'Project Management',
        'Change Management',
        'Executive Advisory'
      ],
      benefits: [
        'Clear IT roadmap',
        'Reduced costs',
        'Improved efficiency',
        'Better decision making'
      ],
      rating: 4.8,
      reviews: 123,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/it-consulting',
      signupUrl: 'https://app.ziontechgroup.com/signup/it-consulting',
      marketPrice: '$2,000-3,500/month',
      savings: 'Save $1,000/month'
    },
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      category: 'managed',
      icon: Cog,
      price: '$1,399/month',
      originalPrice: '$2,200/month',
      description: 'Comprehensive 24/7 IT management and support for all your technology needs',
      features: [
        '24/7 Help Desk Support',
        'Proactive Monitoring',
        'Patch Management',
        'Security Updates',
        'Backup Management',
        'User Support',
        'Asset Management',
        'Performance Optimization'
      ],
      benefits: [
        'Reduce IT overhead',
        'Improve uptime',
        'Better security',
        'Predictable costs'
      ],
      rating: 4.9,
      reviews: 678,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/managed-it-services',
      signupUrl: 'https://app.ziontechgroup.com/signup/managed-it-services',
      marketPrice: '$1,800-2,800/month',
      savings: 'Save $801/month'
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      category: 'development',
      icon: Smartphone,
      price: '$1,299/month',
      originalPrice: '$2,000/month',
      description: 'Native and cross-platform mobile app development with modern technologies',
      features: [
        'Native iOS & Android Apps',
        'Cross-platform Development',
        'UI/UX Design',
        'API Integration',
        'App Store Deployment',
        'Performance Optimization',
        'Security Implementation',
        'Maintenance & Support'
      ],
      benefits: [
        'Reach more customers',
        'Improve user experience',
        'Increase engagement',
        'Competitive advantage'
      ],
      rating: 4.7,
      reviews: 456,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/mobile-app-development',
      signupUrl: 'https://app.ziontechgroup.com/signup/mobile-app-development',
      marketPrice: '$1,600-2,500/month',
      savings: 'Save $701/month'
    },
    {
      id: 'system-integration',
      name: 'System Integration',
      category: 'integration',
      icon: Wrench,
      price: '$1,199/month',
      originalPrice: '$1,800/month',
      description: 'API and system integration services to connect your business applications',
      features: [
        'API Development & Integration',
        'Legacy System Integration',
        'Data Synchronization',
        'Workflow Automation',
        'Third-party Integrations',
        'Custom Connectors',
        'Testing & Validation',
        'Documentation & Training'
      ],
      benefits: [
        'Streamline operations',
        'Improve data flow',
        'Reduce manual work',
        'Better efficiency'
      ],
      rating: 4.6,
      reviews: 234,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/system-integration',
      signupUrl: 'https://app.ziontechgroup.com/signup/system-integration',
      marketPrice: '$1,500-2,200/month',
      savings: 'Save $601/month'
    },
    {
      id: 'data-backup-recovery',
      name: 'Data Backup & Recovery',
      category: 'backup',
      icon: HardDrive,
      price: '$599/month',
      originalPrice: '$999/month',
      description: 'Comprehensive data backup and disaster recovery solutions for business continuity',
      features: [
        'Automated Backups',
        'Disaster Recovery Planning',
        'Data Encryption',
        'Off-site Storage',
        'Recovery Testing',
        'Compliance Management',
        'Monitoring & Alerting',
        '24/7 Support'
      ],
      benefits: [
        'Protect critical data',
        'Minimize downtime',
        'Comply with regulations',
        'Peace of mind'
      ],
      rating: 4.8,
      reviews: 345,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/data-backup-recovery',
      signupUrl: 'https://app.ziontechgroup.com/signup/data-backup-recovery',
      marketPrice: '$800-1,400/month',
      savings: 'Save $400/month'
    },
    {
      id: 'performance-optimization',
      name: 'Performance Optimization',
      category: 'optimization',
      icon: TrendingUp,
      price: '$799/month',
      originalPrice: '$1,299/month',
      description: 'System and application performance optimization for better speed and efficiency',
      features: [
        'Performance Analysis',
        'Code Optimization',
        'Database Tuning',
        'Caching Implementation',
        'Load Balancing',
        'Resource Optimization',
        'Monitoring Setup',
        'Continuous Improvement'
      ],
      benefits: [
        'Faster applications',
        'Better user experience',
        'Reduced costs',
        'Improved scalability'
      ],
      rating: 4.7,
      reviews: 234,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/performance-optimization',
      signupUrl: 'https://app.ziontechgroup.com/signup/performance-optimization',
      marketPrice: '$1,000-1,600/month',
      savings: 'Save $500/month'
    },
    {
      id: 'it-training',
      name: 'IT Training & Certification',
      category: 'training',
      icon: GraduationCap,
      price: '$399/month',
      originalPrice: '$699/month',
      description: 'Comprehensive IT training and certification programs for your team',
      features: [
        'Technical Training',
        'Certification Programs',
        'Hands-on Labs',
        'Instructor-led Sessions',
        'Online Learning Platform',
        'Progress Tracking',
        'Certification Exams',
        'Continuing Education'
      ],
      benefits: [
        'Improve team skills',
        'Increase productivity',
        'Better job satisfaction',
        'Stay current with technology'
      ],
      rating: 4.6,
      reviews: 123,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/it-training',
      signupUrl: 'https://app.ziontechgroup.com/signup/it-training',
      marketPrice: '$600-1,000/month',
      savings: 'Save $300/month'
    },
    {
      id: 'compliance-management',
      name: 'Compliance Management',
      category: 'compliance',
      icon: Shield,
      price: '$1,299/month',
      originalPrice: '$2,000/month',
      description: 'Compliance management and auditing services for various industry standards',
      features: [
        'Compliance Assessment',
        'Audit Preparation',
        'Policy Development',
        'Risk Management',
        'Documentation',
        'Training Programs',
        'Monitoring & Reporting',
        'Remediation Support'
      ],
      benefits: [
        'Meet regulatory requirements',
        'Reduce compliance risks',
        'Avoid penalties',
        'Improve governance'
      ],
      rating: 4.8,
      reviews: 234,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/compliance-management',
      signupUrl: 'https://app.ziontechgroup.com/signup/compliance-management',
      marketPrice: '$1,600-2,500/month',
      savings: 'Save $701/month'
    },
    {
      id: 'it-project-management',
      name: 'IT Project Management',
      category: 'project',
      icon: Calendar,
      price: '$1,099/month',
      originalPrice: '$1,700/month',
      description: 'Professional IT project management services for successful project delivery',
      features: [
        'Project Planning & Scheduling',
        'Resource Management',
        'Risk Assessment',
        'Quality Assurance',
        'Stakeholder Communication',
        'Progress Tracking',
        'Change Management',
        'Project Documentation'
      ],
      benefits: [
        'Successful project delivery',
        'On-time completion',
        'Within budget',
        'Better communication'
      ],
      rating: 4.7,
      reviews: 345,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/it-project-management',
      signupUrl: 'https://app.ziontechgroup.com/signup/it-project-management',
      marketPrice: '$1,400-2,200/month',
      savings: 'Save $601/month'
    },
    {
      id: 'it-support',
      name: 'IT Support & Help Desk',
      category: 'support',
      icon: HelpCircle,
      price: '$699/month',
      originalPrice: '$1,199/month',
      description: '24/7 IT support and help desk services for all your technical needs',
      features: [
        '24/7 Help Desk Support',
        'Remote Assistance',
        'Issue Tracking',
        'Knowledge Base',
        'User Training',
        'Hardware Support',
        'Software Support',
        'Escalation Management'
      ],
      benefits: [
        'Quick problem resolution',
        'Reduced downtime',
        'Better user satisfaction',
        'Cost-effective support'
      ],
      rating: 4.8,
      reviews: 567,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/it-support',
      signupUrl: 'https://app.ziontechgroup.com/signup/it-support',
      marketPrice: '$900-1,500/month',
      savings: 'Save $500/month'
    },
    {
      id: 'it-security-audit',
      name: 'IT Security Audit',
      category: 'security',
      icon: Search,
      price: '$1,499/month',
      originalPrice: '$2,500/month',
      description: 'Comprehensive IT security audit and assessment services',
      features: [
        'Security Assessment',
        'Vulnerability Scanning',
        'Penetration Testing',
        'Compliance Review',
        'Risk Analysis',
        'Remediation Planning',
        'Security Training',
        'Follow-up Support'
      ],
      benefits: [
        'Identify security gaps',
        'Improve security posture',
        'Comply with standards',
        'Reduce risks'
      ],
      rating: 4.9,
      reviews: 234,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/it-security-audit',
      signupUrl: 'https://app.ziontechgroup.com/signup/it-security-audit',
      marketPrice: '$2,000-3,200/month',
      savings: 'Save $1,001/month'
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy Consulting',
      category: 'strategy',
      icon: Target,
      price: '$1,799/month',
      originalPrice: '$3,000/month',
      description: 'Strategic IT consulting and digital transformation planning',
      features: [
        'IT Strategy Development',
        'Digital Transformation',
        'Technology Roadmap',
        'Vendor Evaluation',
        'Cost Optimization',
        'Risk Assessment',
        'Change Management',
        'Executive Advisory'
      ],
      benefits: [
        'Clear IT direction',
        'Better ROI',
        'Reduced risks',
        'Competitive advantage'
      ],
      rating: 4.8,
      reviews: 123,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/it-strategy-consulting',
      signupUrl: 'https://app.ziontechgroup.com/signup/it-strategy-consulting',
      marketPrice: '$2,500-4,000/month',
      savings: 'Save $1,201/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services', icon: Server, count: itServices.length },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server, count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud, count: itServices.filter(s => s.category === 'cloud').length },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: itServices.filter(s => s.category === 'security').length },
    { id: 'devops', name: 'DevOps', icon: Settings, count: itServices.filter(s => s.category === 'devops').length },
    { id: 'database', name: 'Database', icon: Database, count: itServices.filter(s => s.category === 'database').length },
    { id: 'networking', name: 'Networking', icon: Network, count: itServices.filter(s => s.category === 'networking').length },
    { id: 'consulting', name: 'Consulting', icon: Users, count: itServices.filter(s => s.category === 'consulting').length },
    { id: 'managed', name: 'Managed Services', icon: Cog, count: itServices.filter(s => s.category === 'managed').length },
    { id: 'development', name: 'Development', icon: Smartphone, count: itServices.filter(s => s.category === 'development').length },
    { id: 'integration', name: 'Integration', icon: Wrench, count: itServices.filter(s => s.category === 'integration').length },
    { id: 'backup', name: 'Backup & Recovery', icon: HardDrive, count: itServices.filter(s => s.category === 'backup').length },
    { id: 'optimization', name: 'Optimization', icon: TrendingUp, count: itServices.filter(s => s.category === 'optimization').length },
    { id: 'training', name: 'Training', icon: GraduationCap, count: itServices.filter(s => s.category === 'training').length },
    { id: 'compliance', name: 'Compliance', icon: Shield, count: itServices.filter(s => s.category === 'compliance').length },
    { id: 'project', name: 'Project Management', icon: Calendar, count: itServices.filter(s => s.category === 'project').length },
    { id: 'support', name: 'Support', icon: HelpCircle, count: itServices.filter(s => s.category === 'support').length },
    { id: 'strategy', name: 'Strategy', icon: Target, count: itServices.filter(s => s.category === 'strategy').length }
  ];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularServices = itServices.filter(service => service.isPopular);

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including infrastructure management, cloud migration, cybersecurity, DevOps, and more. Professional IT solutions for modern businesses."
        keywords={['it services', 'infrastructure management', 'cloud services', 'cybersecurity', 'devops', 'it consulting']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
                Professional IT Solutions for Modern Businesses
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                From infrastructure management to cloud migration, our comprehensive IT services help businesses 
                optimize their technology, enhance security, and achieve digital transformation goals.
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative mb-6">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.slice(0, 8).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Popular Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Most Popular IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {popularServices.map((service) => (
                <div key={service.id} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-400 font-medium">{service.savings}</div>
                        <div className="text-xs text-gray-400">Market: {service.marketPrice}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center"
                    >
                      <Play className="w-4 h-4 inline mr-2" />
                      Demo
                    </a>
                    <a
                      href={service.signupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all text-center"
                    >
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              All IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                            ))}
                          </div>
                          <span className="text-xs text-gray-400">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {service.isPopular && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>}
                      {service.isNew && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-purple-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-400 font-medium">{service.savings}</div>
                        <div className="text-xs text-gray-400">Market: {service.marketPrice}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center"
                    >
                      <Play className="w-3 h-3 inline mr-1" />
                      Demo
                    </a>
                    <a
                      href={service.signupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all text-center"
                    >
                      <ExternalLink className="w-3 h-3 inline mr-1" />
                      Start
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of businesses already using our IT services to optimize, secure, and scale their technology infrastructure.
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
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;