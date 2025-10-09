'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, Zap, Cpu, Target, Globe, Brain, Code, FileText, Calendar, PieChart, Headphones, Camera, Music, Video, ShoppingCart, CreditCard, BookOpen, GraduationCap, Heart, Car, Home, Briefcase, Gamepad2, Palette, Wrench, Lightbulb, Rocket, Layers, Activity, Bot, Server, Network, HardDrive, Wifi, Monitor, Printer, Keyboard, Mouse, Microphone, Volume2, Play, Pause, Stop, SkipForward, SkipBack, Repeat, Shuffle, VolumeX, Maximize, Minimize, X, Plus, Minus, Edit, Trash2, Save, Download, Upload, Share, Copy, Link, ExternalLink, Info, AlertTriangle, Check, XCircle, HelpCircle, MessageCircle, Bell, BellOff, User, UserPlus, UserMinus, Users2, UserCheck, UserX, UserCog, UserSearch, UserEdit, UserShield, UserLock, UserUnlock, UserKey, UserHeart, UserStar, Award, DollarSign, Calculator, Package, Search, Filter, Star, Clock, ArrowRight } from 'lucide-react';

interface ITService {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  popular: boolean;
  new: boolean;
  rating: number;
  users: number;
  link: string;
  demo: string;
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  integrations: string[];
  support: string[];
  marketPrice: string;
  roi: string;
  implementation: string;
  compliance: string[];
  sla: string;
  uptime: string;
}

const ITServiceCard: React.FC<{ service: ITService; onSelect: (service: ITService) => void }> = ({ service, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`quantum-card p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isHovered ? 'energy-pulse' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(service)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${service.bgColor}`}>
          <service.icon className={`w-8 h-8 ${service.color}`} />
        </div>
        <div className="flex space-x-2">
          {service.popular && (
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
              POPULAR
            </span>
          )}
          {service.new && (
            <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs font-bold rounded-full">
              NEW
            </span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.name}</h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-medium">{service.rating}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4 text-cyan-400" />
          <span className="text-gray-300 text-sm">{service.users.toLocaleString()}+ users</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {service.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
        <button className="cyber-button px-4 py-2 text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default function ITServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<ITService | null>(null);
  const [sortBy, setSortBy] = useState('popular');

  const itServices: ITService[] = [
    // Cloud Infrastructure & Migration
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      description: 'Comprehensive cloud infrastructure setup, migration, and management services with 99.9% uptime guarantee and 24/7 monitoring.',
      category: 'cloud',
      price: 'From $499/mo',
      features: [
        'Multi-cloud architecture design',
        'Automated scaling and load balancing',
        'Disaster recovery and backup',
        'Security and compliance management',
        'Cost optimization and monitoring',
        '24/7 infrastructure support'
      ],
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      popular: true,
      new: false,
      rating: 4.9,
      users: 45000,
      link: '/cloud-infrastructure',
      demo: '/demo/cloud-infrastructure',
      pricing: { basic: 499, pro: 1299, enterprise: 2999 },
      benefits: ['99.9% uptime guarantee', '50% cost reduction', '300% performance improvement'],
      useCases: ['AWS migration', 'Azure setup', 'Google Cloud deployment', 'Hybrid cloud solutions'],
      integrations: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker', 'Kubernetes'],
      support: ['24/7 monitoring', 'Dedicated support team', 'SLA guarantee', 'Emergency response'],
      marketPrice: '$800-3000/mo',
      roi: '200% within 6 months',
      implementation: '2-4 weeks',
      compliance: ['SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS'],
      sla: '99.9% uptime',
      uptime: '99.9%'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Seamless cloud migration with zero downtime, automated data transfer, and comprehensive testing for smooth transition.',
      category: 'cloud',
      price: 'From $299/mo',
      features: [
        'Zero-downtime migration',
        'Automated data transfer',
        'Application compatibility testing',
        'Performance optimization',
        'Security assessment',
        'Post-migration support'
      ],
      icon: ArrowRight,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      popular: true,
      new: false,
      rating: 4.8,
      users: 32000,
      link: '/cloud-migration',
      demo: '/demo/cloud-migration',
      pricing: { basic: 299, pro: 799, enterprise: 1999 },
      benefits: ['Zero downtime migration', '100% data integrity', '50% faster deployment'],
      useCases: ['On-premise to cloud', 'Cloud to cloud', 'Legacy system migration', 'Database migration'],
      integrations: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Hyper-V', 'Physical servers'],
      support: ['Migration planning', '24/7 support', 'Rollback procedures', 'Performance monitoring'],
      marketPrice: '$500-2000/mo',
      roi: '150% within 4 months',
      implementation: '1-3 weeks',
      compliance: ['SOC 2', 'ISO 27001', 'GDPR'],
      sla: '99.5% uptime',
      uptime: '99.5%'
    },

    // Cybersecurity & Compliance
    {
      id: 'cybersecurity-suite',
      name: 'Enterprise Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solution with advanced threat detection, automated response, and compliance management.',
      category: 'security',
      price: 'From $799/mo',
      features: [
        'Advanced threat detection',
        'Automated incident response',
        'Vulnerability assessment',
        'Security awareness training',
        'Compliance monitoring',
        '24/7 security operations center'
      ],
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      popular: true,
      new: false,
      rating: 4.9,
      users: 28000,
      link: '/cybersecurity-suite',
      demo: '/demo/cybersecurity-suite',
      pricing: { basic: 799, pro: 1999, enterprise: 4999 },
      benefits: ['99.9% threat detection', '90% faster incident response', '100% compliance'],
      useCases: ['Threat prevention', 'Compliance management', 'Security monitoring', 'Incident response'],
      integrations: ['SIEM systems', 'Firewalls', 'EDR solutions', 'Email security', 'Web security'],
      support: ['24/7 SOC', 'Incident response', 'Security consultation', 'Compliance support'],
      marketPrice: '$1200-5000/mo',
      roi: '300% within 8 months',
      implementation: '3-6 weeks',
      compliance: ['SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS', 'NIST'],
      sla: '99.9% uptime',
      uptime: '99.9%'
    },
    {
      id: 'compliance-management',
      name: 'IT Compliance Management',
      description: 'Automated compliance management for SOC 2, ISO 27001, HIPAA, and other regulatory requirements with continuous monitoring.',
      category: 'security',
      price: 'From $599/mo',
      features: [
        'Automated compliance monitoring',
        'Policy management system',
        'Audit trail generation',
        'Risk assessment tools',
        'Compliance reporting',
        'Regulatory updates'
      ],
      icon: Lock,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      popular: false,
      new: true,
      rating: 4.7,
      users: 15000,
      link: '/compliance-management',
      demo: '/demo/compliance-management',
      pricing: { basic: 599, pro: 1499, enterprise: 3499 },
      benefits: ['100% compliance coverage', '80% audit preparation time', '90% risk reduction'],
      useCases: ['SOC 2 compliance', 'ISO 27001 certification', 'HIPAA compliance', 'PCI DSS'],
      integrations: ['GRC platforms', 'SIEM systems', 'Document management', 'Risk assessment tools'],
      support: ['Compliance consultation', 'Audit support', 'Policy development', '24/7 support'],
      marketPrice: '$800-3500/mo',
      roi: '200% within 6 months',
      implementation: '4-8 weeks',
      compliance: ['SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS', 'GDPR'],
      sla: '99.5% uptime',
      uptime: '99.5%'
    },

    // DevOps & CI/CD
    {
      id: 'devops-automation',
      name: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps automation with CI/CD pipelines, infrastructure as code, and automated testing for faster software delivery.',
      category: 'devops',
      price: 'From $399/mo',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as code',
        'Automated testing',
        'Container orchestration',
        'Monitoring and logging',
        'Deployment automation'
      ],
      icon: Settings,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      popular: true,
      new: false,
      rating: 4.8,
      users: 35000,
      link: '/devops-automation',
      demo: '/demo/devops-automation',
      pricing: { basic: 399, pro: 999, enterprise: 2499 },
      benefits: ['300% faster deployments', '90% reduction in errors', '200% productivity improvement'],
      useCases: ['Software deployment', 'Infrastructure automation', 'Testing automation', 'Monitoring setup'],
      integrations: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      support: ['DevOps consultation', 'Pipeline optimization', 'Team training', '24/7 support'],
      marketPrice: '$600-2500/mo',
      roi: '250% within 5 months',
      implementation: '2-4 weeks',
      compliance: ['SOC 2', 'ISO 27001'],
      sla: '99.5% uptime',
      uptime: '99.5%'
    },
    {
      id: 'container-orchestration',
      name: 'Container Orchestration Platform',
      description: 'Advanced container orchestration with Kubernetes, Docker management, and microservices architecture for scalable applications.',
      category: 'devops',
      price: 'From $299/mo',
      features: [
        'Kubernetes cluster management',
        'Docker container orchestration',
        'Microservices architecture',
        'Service mesh implementation',
        'Auto-scaling and load balancing',
        'Container security'
      ],
      icon: Layers,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      popular: false,
      new: true,
      rating: 4.7,
      users: 22000,
      link: '/container-orchestration',
      demo: '/demo/container-orchestration',
      pricing: { basic: 299, pro: 799, enterprise: 1999 },
      benefits: ['400% scalability improvement', '80% resource optimization', '150% deployment speed'],
      useCases: ['Microservices deployment', 'Container management', 'Scalable applications', 'Service orchestration'],
      integrations: ['Kubernetes', 'Docker', 'Istio', 'Prometheus', 'Grafana', 'Helm'],
      support: ['Architecture consultation', 'Performance optimization', 'Security hardening', '24/7 support'],
      marketPrice: '$400-2000/mo',
      roi: '200% within 4 months',
      implementation: '3-6 weeks',
      compliance: ['SOC 2', 'ISO 27001'],
      sla: '99.5% uptime',
      uptime: '99.5%'
    },

    // Database & Data Management
    {
      id: 'database-management',
      name: 'Database Management Services',
      description: 'Comprehensive database management with optimization, backup, recovery, and performance tuning for all major database systems.',
      category: 'database',
      price: 'From $249/mo',
      features: [
        'Database optimization',
        'Automated backup and recovery',
        'Performance monitoring',
        'Security hardening',
        'Migration services',
        '24/7 database support'
      ],
      icon: Database,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
      popular: true,
      new: false,
      rating: 4.8,
      users: 40000,
      link: '/database-management',
      demo: '/demo/database-management',
      pricing: { basic: 249, pro: 649, enterprise: 1599 },
      benefits: ['200% performance improvement', '99.9% data protection', '80% cost reduction'],
      useCases: ['Database optimization', 'Backup and recovery', 'Migration services', 'Performance tuning'],
      integrations: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis'],
      support: ['Database administration', 'Performance tuning', 'Migration support', '24/7 support'],
      marketPrice: '$400-1600/mo',
      roi: '180% within 3 months',
      implementation: '1-2 weeks',
      compliance: ['SOC 2', 'ISO 27001', 'HIPAA'],
      sla: '99.9% uptime',
      uptime: '99.9%'
    },
    {
      id: 'data-warehousing',
      name: 'Data Warehousing Solutions',
      description: 'Enterprise data warehousing with ETL processes, data modeling, and business intelligence integration for comprehensive data management.',
      category: 'database',
      price: 'From $599/mo',
      features: [
        'Data warehouse design',
        'ETL process automation',
        'Data modeling and architecture',
        'Business intelligence integration',
        'Data quality management',
        'Real-time analytics'
      ],
      icon: BarChart,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/20',
      popular: false,
      new: true,
      rating: 4.7,
      users: 18000,
      link: '/data-warehousing',
      demo: '/demo/data-warehousing',
      pricing: { basic: 599, pro: 1499, enterprise: 3499 },
      benefits: ['300% faster data processing', '90% data accuracy', '200% insight generation'],
      useCases: ['Data warehousing', 'ETL processes', 'Business intelligence', 'Data analytics'],
      integrations: ['Snowflake', 'BigQuery', 'Redshift', 'Azure Synapse', 'Tableau', 'Power BI'],
      support: ['Data architecture consultation', 'ETL optimization', 'BI integration', '24/7 support'],
      marketPrice: '$800-3500/mo',
      roi: '220% within 6 months',
      implementation: '4-8 weeks',
      compliance: ['SOC 2', 'ISO 27001', 'GDPR'],
      sla: '99.5% uptime',
      uptime: '99.5%'
    },

    // Network & Infrastructure
    {
      id: 'network-solutions',
      name: 'Network Infrastructure Solutions',
      description: 'Complete network infrastructure design, implementation, and management with high availability and security for enterprise environments.',
      category: 'network',
      price: 'From $399/mo',
      features: [
        'Network design and architecture',
        'High availability setup',
        'Security implementation',
        'Performance optimization',
        'Monitoring and management',
        '24/7 network support'
      ],
      icon: Network,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
      popular: true,
      new: false,
      rating: 4.8,
      users: 35000,
      link: '/network-solutions',
      demo: '/demo/network-solutions',
      pricing: { basic: 399, pro: 999, enterprise: 2499 },
      benefits: ['99.9% network uptime', '200% performance improvement', '90% security enhancement'],
      useCases: ['Network design', 'Security implementation', 'Performance optimization', 'Disaster recovery'],
      integrations: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'Aruba', 'Meraki'],
      support: ['Network consultation', 'Security hardening', 'Performance tuning', '24/7 support'],
      marketPrice: '$600-2500/mo',
      roi: '200% within 5 months',
      implementation: '2-4 weeks',
      compliance: ['SOC 2', 'ISO 27001', 'PCI DSS'],
      sla: '99.9% uptime',
      uptime: '99.9%'
    },
    {
      id: 'wireless-solutions',
      name: 'Wireless Network Solutions',
      description: 'Advanced wireless network design, implementation, and management with enterprise-grade security and performance optimization.',
      category: 'network',
      price: 'From $199/mo',
      features: [
        'Wireless network design',
        'Enterprise security setup',
        'Performance optimization',
        'Guest network management',
        'Monitoring and analytics',
        '24/7 wireless support'
      ],
      icon: Wifi,
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
      popular: false,
      new: true,
      rating: 4.6,
      users: 25000,
      link: '/wireless-solutions',
      demo: '/demo/wireless-solutions',
      pricing: { basic: 199, pro: 499, enterprise: 1299 },
      benefits: ['300% coverage improvement', '90% security enhancement', '150% performance boost'],
      useCases: ['Office wireless', 'Guest networks', 'IoT connectivity', 'Remote access'],
      integrations: ['Cisco Meraki', 'Aruba', 'Ubiquiti', 'Ruckus', 'Fortinet', 'Extreme Networks'],
      support: ['Wireless consultation', 'Security setup', 'Performance tuning', '24/7 support'],
      marketPrice: '$300-1300/mo',
      roi: '150% within 3 months',
      implementation: '1-2 weeks',
      compliance: ['SOC 2', 'ISO 27001', 'WPA3'],
      sla: '99.5% uptime',
      uptime: '99.5%'
    },

    // IT Support & Helpdesk
    {
      id: 'managed-it-support',
      name: 'Managed IT Support Services',
      description: 'Comprehensive managed IT support with 24/7 helpdesk, remote monitoring, and proactive maintenance for optimal system performance.',
      category: 'support',
      price: 'From $149/mo',
      features: [
        '24/7 helpdesk support',
        'Remote monitoring and management',
        'Proactive maintenance',
        'Software updates and patches',
        'User training and support',
        'Incident management'
      ],
      icon: Headphones,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/20',
      popular: true,
      new: false,
      rating: 4.8,
      users: 60000,
      link: '/managed-it-support',
      demo: '/demo/managed-it-support',
      pricing: { basic: 149, pro: 399, enterprise: 999 },
      benefits: ['90% faster issue resolution', '80% proactive problem prevention', '200% user satisfaction'],
      useCases: ['Helpdesk support', 'System maintenance', 'User training', 'Incident management'],
      integrations: ['ServiceNow', 'Jira Service Desk', 'Zendesk', 'Freshdesk', 'ConnectWise', 'Kaseya'],
      support: ['24/7 helpdesk', 'Remote support', 'On-site support', 'Emergency response'],
      marketPrice: '$200-1000/mo',
      roi: '180% within 4 months',
      implementation: '1-2 weeks',
      compliance: ['SOC 2', 'ISO 27001'],
      sla: '99.5% uptime',
      uptime: '99.5%'
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting with technology roadmap development, digital transformation planning, and technology assessment services.',
      category: 'consulting',
      price: 'From $299/mo',
      features: [
        'Technology roadmap development',
        'Digital transformation planning',
        'Technology assessment',
        'Vendor evaluation',
        'Cost optimization analysis',
        'Strategic IT planning'
      ],
      icon: Lightbulb,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      popular: false,
      new: true,
      rating: 4.7,
      users: 12000,
      link: '/it-consulting',
      demo: '/demo/it-consulting',
      pricing: { basic: 299, pro: 799, enterprise: 1999 },
      benefits: ['300% better technology decisions', '200% cost optimization', '150% efficiency improvement'],
      useCases: ['Technology planning', 'Digital transformation', 'Vendor selection', 'Cost optimization'],
      integrations: ['Enterprise systems', 'Cloud platforms', 'Security tools', 'Management platforms'],
      support: ['Strategic consultation', 'Technology assessment', 'Implementation planning', 'Ongoing support'],
      marketPrice: '$400-2000/mo',
      roi: '250% within 6 months',
      implementation: '2-4 weeks',
      compliance: ['SOC 2', 'ISO 27001'],
      sla: '99.5% uptime',
      uptime: '99.5%'
    },

    // Backup & Disaster Recovery
    {
      id: 'backup-disaster-recovery',
      name: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated backups, testing, and rapid recovery capabilities.',
      category: 'backup',
      price: 'From $199/mo',
      features: [
        'Automated backup systems',
        'Disaster recovery planning',
        'Recovery testing',
        'Data replication',
        'Rapid recovery procedures',
        '24/7 monitoring'
      ],
      icon: HardDrive,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/20',
      popular: true,
      new: false,
      rating: 4.8,
      users: 35000,
      link: '/backup-disaster-recovery',
      demo: '/demo/backup-disaster-recovery',
      pricing: { basic: 199, pro: 499, enterprise: 1299 },
      benefits: ['99.9% data protection', '90% faster recovery', '100% business continuity'],
      useCases: ['Data backup', 'Disaster recovery', 'Business continuity', 'Compliance backup'],
      integrations: ['Veeam', 'Commvault', 'Acronis', 'Druva', 'Rubrik', 'Cohesity'],
      support: ['Backup management', 'Recovery testing', 'Disaster planning', '24/7 support'],
      marketPrice: '$300-1300/mo',
      roi: '200% within 3 months',
      implementation: '1-2 weeks',
      compliance: ['SOC 2', 'ISO 27001', 'HIPAA'],
      sla: '99.9% uptime',
      uptime: '99.9%'
    },

    // Mobile Device Management
    {
      id: 'mobile-device-management',
      name: 'Mobile Device Management (MDM)',
      description: 'Enterprise mobile device management with security policies, app management, and remote device control for all mobile platforms.',
      category: 'mobile',
      price: 'From $99/mo',
      features: [
        'Device enrollment and management',
        'Security policy enforcement',
        'App management and distribution',
        'Remote device control',
        'Compliance monitoring',
        'Mobile security'
      ],
      icon: Smartphone,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      popular: false,
      new: true,
      rating: 4.6,
      users: 28000,
      link: '/mobile-device-management',
      demo: '/demo/mobile-device-management',
      pricing: { basic: 99, pro: 299, enterprise: 799 },
      benefits: ['100% device compliance', '90% security improvement', '80% management efficiency'],
      useCases: ['Device management', 'Security enforcement', 'App distribution', 'Compliance monitoring'],
      integrations: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Citrix', 'Jamf', 'AirWatch'],
      support: ['Device setup', 'Policy configuration', 'Security management', '24/7 support'],
      marketPrice: '$150-800/mo',
      roi: '150% within 2 months',
      implementation: '1-2 weeks',
      compliance: ['SOC 2', 'ISO 27001', 'Mobile security'],
      sla: '99.5% uptime',
      uptime: '99.5%'
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services', icon: Globe },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'devops', name: 'DevOps', icon: Settings },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'network', name: 'Network', icon: Network },
    { id: 'support', name: 'IT Support', icon: Headphones },
    { id: 'consulting', name: 'Consulting', icon: Lightbulb },
    { id: 'backup', name: 'Backup & Recovery', icon: HardDrive },
    { id: 'mobile', name: 'Mobile Management', icon: Smartphone }
  ];

  const filteredServices = useMemo(() => {
    let filtered = itServices;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => b.users - a.users);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.pricing.basic - b.pricing.basic);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.pricing.basic - a.pricing.basic);
        break;
      case 'new':
        filtered = filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleServiceSelect = (service: ITService) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database management, and managed IT support. Transform your technology infrastructure with our expert solutions." />
        <meta name="keywords" content="it services, cloud infrastructure, cybersecurity, devops, database management, managed it support, network solutions" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic-text cyber-text">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive IT services designed to modernize your infrastructure, enhance security, and optimize performance. 
            From cloud migration to cybersecurity, we deliver enterprise-grade solutions with guaranteed results.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="new">Newest First</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-black font-semibold'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ITServiceCard
              key={service.id}
              service={service}
              onSelect={handleServiceSelect}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-lg ${selectedService.bgColor}`}>
                    <selectedService.icon className={`w-12 h-12 ${selectedService.color}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white neon-text">{selectedService.name}</h2>
                    <p className="text-gray-300 text-lg">{selectedService.description}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                  <div className="space-y-2 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                  <div className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedService.useCases.map((useCase, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Pricing & SLA</h3>
                  <div className="space-y-4 mb-6">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Starting Price</span>
                        <span className="text-2xl font-bold text-cyan-400">{selectedService.price}</span>
                      </div>
                      <p className="text-sm text-gray-400">Market Price: {selectedService.marketPrice}</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-gray-300 mb-1">Expected ROI</div>
                      <div className="text-xl font-bold text-green-400">{selectedService.roi}</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-gray-300 mb-1">SLA Guarantee</div>
                      <div className="text-lg font-semibold text-cyan-400">{selectedService.sla}</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-gray-300 mb-1">Implementation</div>
                      <div className="text-lg font-semibold text-cyan-400">{selectedService.implementation}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Compliance</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedService.compliance.map((comp, index) => (
                      <span key={index} className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm">
                        {comp}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button className="cyber-button flex-1 py-3">
                      Get Started
                    </button>
                    <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors">
                      View Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 neon-text">Ready to Modernize Your IT Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our IT services today and transform your technology infrastructure with enterprise-grade solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}