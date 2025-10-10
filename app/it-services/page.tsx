'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Search,
  Filter,
  Users,
  Lock,
  Monitor,
  Server,
  Wifi,
  HardDrive,
  Cpu,
  MemoryStick,
  Network,
  Headphones,
  Phone,
  Mail,
  Calendar,
  FileText,
  BarChart3,
  PieChart,
  Activity,
  DollarSign,
  Clock,
  Award,
  BookOpen,
  Briefcase,
  Camera,
  CreditCard,
  Edit,
  Eye,
  Home,
  Image,
  Layers,
  MapPin,
  Palette,
  Play,
  Plus,
  RefreshCw,
  Save,
  Send,
  ShoppingCart,
  Tag,
  ThumbsUp,
  Tool,
  Trash2,
  Upload,
  Video,
  X,
  Zap as Lightning,
  TrendingUp,
  Target,
  MessageSquare,
  Brain,
  Code,
  File,
  Folder,
  Archive,
  Download,
  ExternalLink,
  Link,
  Maximize,
  Minimize,
  Move,
  RotateCcw,
  RotateCw,
  Scissors,
  Share,
  Shuffle,
  SkipBack,
  SkipForward,
  Square,
  Triangle,
  Volume2,
  VolumeX,
  Wrench,
  XCircle,
  AlertTriangle,
  CheckSquare,
  Circle,
  Square as SquareIcon
} from 'lucide-react';

interface ITService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  category: string;
  popular: boolean;
  benefits: string[];
  useCases: string[];
  link: string;
  technology: string[];
  sla: string;
}

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const itServices: ITService[] = [
    // Cloud Services & Infrastructure
    {
      id: '1',
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee, auto-scaling, and 24/7 monitoring across AWS, Azure, and Google Cloud.',
      features: [
        'Multi-cloud infrastructure management',
        '99.9% uptime SLA guarantee',
        'Auto-scaling and load balancing',
        '24/7 monitoring and alerting',
        'Disaster recovery and backup',
        'Cost optimization and management',
        'Security compliance (SOC 2, ISO 27001)',
        'Performance optimization'
      ],
      price: 'Starting at $1,299/month',
      marketPrice: '$2,500/month',
      category: 'Cloud Services',
      popular: true,
      benefits: ['Reduce infrastructure costs by 30%', 'Improve uptime by 25%', 'Scale resources automatically'],
      useCases: ['Cloud migration', 'Infrastructure scaling', 'Disaster recovery', 'Cost optimization'],
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      technology: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      sla: '99.9% Uptime SLA'
    },
    {
      id: '2',
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless hybrid cloud solutions combining on-premises and cloud infrastructure for optimal performance, security, and cost efficiency.',
      features: [
        'Hybrid cloud architecture design',
        'Data synchronization and migration',
        'Workload optimization',
        'Security integration',
        'Cost management across environments',
        'Compliance and governance',
        'Performance monitoring',
        'Backup and disaster recovery'
      ],
      price: 'Starting at $1,599/month',
      marketPrice: '$3,000/month',
      category: 'Cloud Services',
      popular: false,
      benefits: ['Optimize costs by 40%', 'Improve security by 50%', 'Increase flexibility by 60%'],
      useCases: ['Legacy system integration', 'Data center modernization', 'Compliance requirements', 'Cost optimization'],
      link: 'https://ziontechgroup.com/hybrid-cloud',
      technology: ['VMware', 'Hyper-V', 'AWS Outposts', 'Azure Stack', 'Google Anthos'],
      sla: '99.5% Uptime SLA'
    },

    // Cybersecurity & Security Services
    {
      id: '3',
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: 'Advanced Cybersecurity Suite',
      description: 'Comprehensive cybersecurity platform with AI-powered threat detection, vulnerability scanning, and 24/7 security monitoring.',
      features: [
        'AI-powered threat detection',
        'Real-time vulnerability scanning',
        '24/7 security monitoring',
        'Incident response automation',
        'Compliance management (GDPR, HIPAA, SOX)',
        'Penetration testing',
        'Security awareness training',
        'Advanced threat intelligence'
      ],
      price: 'Starting at $1,999/month',
      marketPrice: '$4,000/month',
      category: 'Cybersecurity',
      popular: true,
      benefits: ['Reduce security incidents by 70%', 'Improve compliance by 90%', 'Decrease response time by 80%'],
      useCases: ['Threat protection', 'Compliance management', 'Security monitoring', 'Incident response'],
      link: 'https://ziontechgroup.com/cybersecurity-suite',
      technology: ['SIEM', 'EDR', 'XDR', 'AI/ML', 'Threat Intelligence', 'Zero Trust'],
      sla: '24/7 Security Monitoring'
    },
    {
      id: '4',
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: 'Identity & Access Management',
      description: 'Comprehensive identity and access management solution with multi-factor authentication, single sign-on, and privileged access management.',
      features: [
        'Multi-factor authentication (MFA)',
        'Single sign-on (SSO)',
        'Privileged access management',
        'Identity governance',
        'Access certification',
        'Risk-based authentication',
        'Integration with 1000+ applications',
        'Compliance reporting'
      ],
      price: 'Starting at $799/month',
      marketPrice: '$1,500/month',
      category: 'Cybersecurity',
      popular: false,
      benefits: ['Reduce security risks by 60%', 'Improve user experience by 40%', 'Ensure compliance by 95%'],
      useCases: ['User authentication', 'Access control', 'Compliance management', 'Privileged access'],
      link: 'https://ziontechgroup.com/identity-access-management',
      technology: ['SAML', 'OAuth', 'OpenID Connect', 'LDAP', 'Active Directory', 'Zero Trust'],
      sla: '99.9% Authentication SLA'
    },

    // Data Management & Analytics
    {
      id: '5',
      icon: <Database className="w-8 h-8 text-orange-600" />,
      title: 'Data Management & Analytics Platform',
      description: 'Comprehensive data management platform with data warehousing, ETL processes, and advanced analytics capabilities.',
      features: [
        'Data warehousing and lakes',
        'ETL/ELT processes',
        'Real-time data processing',
        'Data quality management',
        'Advanced analytics and BI',
        'Data governance and compliance',
        'Integration with 500+ sources',
        'Self-service analytics'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$3,000/month',
      category: 'Data Management',
      popular: true,
      benefits: ['Improve data quality by 80%', 'Reduce processing time by 60%', 'Increase insights by 200%'],
      useCases: ['Data warehousing', 'Business intelligence', 'Data analytics', 'Compliance reporting'],
      link: 'https://ziontechgroup.com/data-management',
      technology: ['Snowflake', 'BigQuery', 'Redshift', 'Apache Spark', 'Kafka', 'Tableau'],
      sla: '99.5% Data Availability'
    },
    {
      id: '6',
      icon: <BarChart3 className="w-8 h-8 text-cyan-600" />,
      title: 'Business Intelligence & Reporting',
      description: 'Advanced business intelligence platform with interactive dashboards, automated reporting, and predictive analytics.',
      features: [
        'Interactive dashboards',
        'Automated report generation',
        'Predictive analytics',
        'Data visualization',
        'Self-service analytics',
        'Mobile BI applications',
        'Integration with ERP/CRM systems',
        'Advanced security and governance'
      ],
      price: 'Starting at $999/month',
      marketPrice: '$2,000/month',
      category: 'Data Management',
      popular: false,
      benefits: ['Increase decision speed by 50%', 'Improve accuracy by 70%', 'Reduce reporting time by 80%'],
      useCases: ['Executive dashboards', 'Operational reporting', 'Financial analytics', 'Performance monitoring'],
      link: 'https://ziontechgroup.com/business-intelligence',
      technology: ['Power BI', 'Tableau', 'Qlik', 'Looker', 'Sisense', 'Domo'],
      sla: '99.9% Dashboard Availability'
    },

    // Network & Infrastructure
    {
      id: '7',
      icon: <Network className="w-8 h-8 text-indigo-600" />,
      title: 'Network Infrastructure Management',
      description: 'Complete network infrastructure management with design, implementation, monitoring, and optimization services.',
      features: [
        'Network design and architecture',
        'Implementation and deployment',
        '24/7 monitoring and management',
        'Performance optimization',
        'Security implementation',
        'Disaster recovery planning',
        'Vendor management',
        'Compliance and documentation'
      ],
      price: 'Starting at $1,200/month',
      marketPrice: '$2,500/month',
      category: 'Network & Infrastructure',
      popular: true,
      benefits: ['Improve network performance by 40%', 'Reduce downtime by 60%', 'Optimize costs by 30%'],
      useCases: ['Network design', 'Performance optimization', 'Security implementation', 'Disaster recovery'],
      link: 'https://ziontechgroup.com/network-infrastructure',
      technology: ['Cisco', 'Juniper', 'Aruba', 'Fortinet', 'Palo Alto', 'SD-WAN'],
      sla: '99.9% Network Uptime'
    },
    {
      id: '8',
      icon: <Wifi className="w-8 h-8 text-yellow-600" />,
      title: 'Wireless Network Solutions',
      description: 'Advanced wireless network solutions with WiFi 6/6E, mesh networking, and enterprise-grade security.',
      features: [
        'WiFi 6/6E implementation',
        'Mesh networking solutions',
        'Enterprise security features',
        'Guest network management',
        'Bandwidth optimization',
        'Location services',
        'Integration with existing infrastructure',
        'Performance monitoring'
      ],
      price: 'Starting at $599/month',
      marketPrice: '$1,200/month',
      category: 'Network & Infrastructure',
      popular: false,
      benefits: ['Increase WiFi speed by 300%', 'Improve coverage by 50%', 'Reduce interference by 70%'],
      useCases: ['Office WiFi', 'Guest networks', 'IoT connectivity', 'Mobile workforce'],
      link: 'https://ziontechgroup.com/wireless-solutions',
      technology: ['WiFi 6', 'WiFi 6E', '802.11ax', 'Mesh Networking', 'WPA3', 'Zero Trust'],
      sla: '99.5% WiFi Availability'
    },

    // Managed IT Services
    {
      id: '9',
      icon: <Headphones className="w-8 h-8 text-pink-600" />,
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services with 24/7 support, proactive monitoring, and complete IT infrastructure management.',
      features: [
        '24/7 help desk support',
        'Proactive monitoring and maintenance',
        'IT infrastructure management',
        'Security management',
        'Backup and disaster recovery',
        'Software license management',
        'Asset management',
        'Strategic IT planning'
      ],
      price: 'Starting at $999/month',
      marketPrice: '$2,000/month',
      category: 'Managed Services',
      popular: true,
      benefits: ['Reduce IT costs by 40%', 'Improve uptime by 50%', 'Increase productivity by 30%'],
      useCases: ['IT outsourcing', 'Help desk support', 'Infrastructure management', 'Strategic planning'],
      link: 'https://ziontechgroup.com/managed-it-services',
      technology: ['RMM Tools', 'PSA Systems', 'Monitoring Platforms', 'Automation Tools'],
      sla: '24/7 Support SLA'
    },
    {
      id: '10',
      icon: <Settings className="w-8 h-8 text-gray-600" />,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting services to optimize technology infrastructure, reduce costs, and align IT with business objectives.',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation planning',
        'Cost optimization',
        'Vendor evaluation and selection',
        'Project management',
        'Change management',
        'Training and knowledge transfer'
      ],
      price: 'Starting at $299/hour',
      marketPrice: '$500/hour',
      category: 'Managed Services',
      popular: false,
      benefits: ['Optimize IT investments by 35%', 'Improve alignment by 60%', 'Reduce risks by 50%'],
      useCases: ['IT strategy', 'Digital transformation', 'Technology selection', 'Project management'],
      link: 'https://ziontechgroup.com/it-consulting',
      technology: ['ITIL', 'COBIT', 'Agile', 'DevOps', 'Cloud Architecture', 'Security Frameworks'],
      sla: 'Response within 4 hours'
    },

    // Development & DevOps
    {
      id: '11',
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'DevOps & CI/CD Services',
      description: 'Complete DevOps and CI/CD implementation with automated testing, deployment, and monitoring for faster, more reliable software delivery.',
      features: [
        'CI/CD pipeline implementation',
        'Automated testing and deployment',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring and logging',
        'Security integration',
        'Performance optimization',
        'Team training and support'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$3,000/month',
      category: 'Development',
      popular: true,
      benefits: ['Reduce deployment time by 80%', 'Improve reliability by 60%', 'Increase development speed by 40%'],
      useCases: ['CI/CD implementation', 'DevOps transformation', 'Automation', 'Performance optimization'],
      link: 'https://ziontechgroup.com/devops-cicd',
      technology: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      sla: '99.9% Pipeline Uptime'
    },
    {
      id: '12',
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Process Automation Services',
      description: 'Intelligent process automation using RPA, AI, and workflow automation to streamline business processes and reduce manual work.',
      features: [
        'Robotic Process Automation (RPA)',
        'Workflow automation',
        'AI-powered automation',
        'Integration with existing systems',
        'Process monitoring and optimization',
        'Change management',
        'Training and support',
        'ROI tracking and reporting'
      ],
      price: 'Starting at $1,200/month',
      marketPrice: '$2,500/month',
      category: 'Development',
      popular: false,
      benefits: ['Reduce manual work by 70%', 'Improve accuracy by 90%', 'Increase efficiency by 50%'],
      useCases: ['Process automation', 'Workflow optimization', 'Data processing', 'Customer service'],
      link: 'https://ziontechgroup.com/process-automation',
      technology: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Power Automate', 'AI/ML'],
      sla: '99.5% Automation Uptime'
    },

    // Mobile & Web Development
    {
      id: '13',
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development for iOS and Android with modern technologies and best practices.',
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'UI/UX design and optimization',
        'App store optimization',
        'Push notifications and analytics',
        'Backend integration',
        'Security implementation',
        'Maintenance and support'
      ],
      price: 'Starting at $1,999/month',
      marketPrice: '$4,000/month',
      category: 'Development',
      popular: true,
      benefits: ['Increase user engagement by 60%', 'Improve app performance by 40%', 'Reduce development time by 50%'],
      useCases: ['Mobile app development', 'App optimization', 'Cross-platform solutions', 'App maintenance'],
      link: 'https://ziontechgroup.com/mobile-development',
      technology: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
      sla: 'Response within 24 hours'
    },
    {
      id: '14',
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: 'Web Development & E-commerce',
      description: 'Modern web development and e-commerce solutions with responsive design, SEO optimization, and advanced features.',
      features: [
        'Responsive web design',
        'E-commerce platform development',
        'SEO optimization',
        'Performance optimization',
        'Security implementation',
        'Content management systems',
        'Payment gateway integration',
        'Analytics and tracking'
      ],
      price: 'Starting at $1,299/month',
      marketPrice: '$2,500/month',
      category: 'Development',
      popular: false,
      benefits: ['Increase conversion rates by 35%', 'Improve page speed by 50%', 'Boost SEO rankings by 60%'],
      useCases: ['Website development', 'E-commerce solutions', 'Web optimization', 'SEO services'],
      link: 'https://ziontechgroup.com/web-development',
      technology: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'WordPress'],
      sla: '99.9% Website Uptime'
    },

    // Backup & Disaster Recovery
    {
      id: '15',
      icon: <HardDrive className="w-8 h-8 text-orange-600" />,
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated backups, instant recovery, and business continuity planning.',
      features: [
        'Automated backup solutions',
        'Instant recovery capabilities',
        'Disaster recovery planning',
        'Business continuity services',
        'Data encryption and security',
        'Compliance management',
        'Testing and validation',
        '24/7 monitoring and support'
      ],
      price: 'Starting at $499/month',
      marketPrice: '$1,000/month',
      category: 'Backup & Recovery',
      popular: true,
      benefits: ['Reduce recovery time by 90%', 'Ensure data protection by 99.9%', 'Minimize business disruption'],
      useCases: ['Data backup', 'Disaster recovery', 'Business continuity', 'Compliance management'],
      link: 'https://ziontechgroup.com/backup-disaster-recovery',
      technology: ['Veeam', 'Commvault', 'Rubrik', 'Cohesity', 'AWS Backup', 'Azure Backup'],
      sla: 'RTO: 4 hours, RPO: 1 hour'
    },
    {
      id: '16',
      icon: <RefreshCw className="w-8 h-8 text-cyan-600" />,
      title: 'Business Continuity Planning',
      description: 'Comprehensive business continuity planning and implementation to ensure minimal disruption during emergencies and disasters.',
      features: [
        'Business impact analysis',
        'Risk assessment and mitigation',
        'Continuity plan development',
        'Testing and validation',
        'Staff training and awareness',
        'Communication planning',
        'Recovery procedures',
        'Ongoing maintenance and updates'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$3,000/month',
      category: 'Backup & Recovery',
      popular: false,
      benefits: ['Minimize downtime by 80%', 'Reduce recovery costs by 60%', 'Ensure compliance by 100%'],
      useCases: ['Business continuity', 'Disaster planning', 'Risk management', 'Compliance'],
      link: 'https://ziontechgroup.com/business-continuity',
      technology: ['BCP Tools', 'Risk Management', 'Communication Systems', 'Recovery Platforms'],
      sla: 'Recovery within 24 hours'
    }
  ];

  const categories = [
    'All',
    'Cloud Services',
    'Cybersecurity',
    'Data Management',
    'Network & Infrastructure',
    'Managed Services',
    'Development',
    'Backup & Recovery'
  ];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularServices = itServices.filter(service => service.popular);

  return (
    <React.Fragment>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, infrastructure management, and more. Expert IT support and consulting for modern businesses." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth with expert support and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore IT Services
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Get Free Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search IT services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        {selectedCategory === 'All' && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Featured IT Services</h2>
                <p className="text-xl text-gray-300">Our most popular and comprehensive IT solutions</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularServices.slice(0, 6).map((service) => (
                  <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                    <div className="flex items-start mb-6">
                      <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-gray-400 text-sm">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                      </div>
                      <div className="text-sm text-gray-300">{service.sla}</div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All IT Services' : `${selectedCategory} Services`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
                    <div className="text-sm text-gray-300">{service.sla}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our IT experts help you choose the perfect solution for your business needs and implement it successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free IT Assessment
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Contact IT Experts
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ItServicesPage;