'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  Search,
  CheckCircle,
  Server,
  Network,
  Lock,
  Code,
  BarChart3,
  Users,
  Headphones,
  Monitor,
  HardDrive,
  Wifi,
  Smartphone as Mobile,
  Laptop,
  Printer,
  Router,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  DollarSign,
  PieChart,
  Camera,
  Video,
  Music,
  BookOpen,
  ShoppingCart,
  Briefcase,
  Home,
  Car,
  Plane,
  Heart,
  Gamepad2,
  Lightbulb,
  Wrench,
  Award,
  Timer,
  Download,
  Upload,
  Share2,
  Eye,
  Edit3,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface ITService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  marketPrice?: string;
  benefits: string[];
  setupTime: string;
  freeTrial: string;
  useCases: string[];
}

const ItServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 12;

  const itServices: ITService[] = [
    // Cloud Services
    {
      id: '1',
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP setup, migration, and optimization with 99.9% uptime guarantee',
      features: [
        'Cloud architecture design and implementation',
        'Multi-cloud and hybrid cloud strategies',
        'Cloud migration planning and execution',
        'Cost optimization and resource management',
        'Auto-scaling and load balancing',
        'Disaster recovery and backup solutions',
        'Security compliance and monitoring',
        '24/7 cloud support and maintenance'
      ],
      price: '$2,000 - $50,000',
      category: 'Cloud',
      popular: true,
      marketPrice: '$5,000 - $100,000',
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', '99.9% uptime guarantee', 'Expert migration support'],
      setupTime: '1-4 weeks',
      freeTrial: '2 weeks pilot',
      useCases: ['Cloud migration', 'Infrastructure optimization', 'Disaster recovery', 'Cost reduction']
    },
    {
      id: '2',
      icon: Settings,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration with modern DevOps practices',
      features: [
        'Docker and Kubernetes containerization',
        'Jenkins, GitLab CI, and Azure DevOps setup',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Automated testing and quality gates',
        'Deployment automation and rollback',
        'Monitoring and alerting systems',
        'Security scanning and compliance',
        'Team training and best practices'
      ],
      price: '$3,000 - $25,000',
      category: 'DevOps',
      popular: true,
      marketPrice: '$6,000 - $50,000',
      benefits: ['Deploy 10x faster', 'Reduce deployment errors', 'Improve code quality', 'Automate workflows'],
      setupTime: '2-6 weeks',
      freeTrial: '1 week setup',
      useCases: ['CI/CD implementation', 'Container orchestration', 'Infrastructure automation', 'Deployment optimization']
    },
    {
      id: '3',
      icon: Database,
      title: 'Database Design & Optimization',
      description: 'Database architecture, performance tuning, and data migration services for optimal performance and reliability',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Data migration and synchronization',
        'Backup and disaster recovery',
        'Security hardening and compliance',
        'Monitoring and maintenance',
        'Query optimization and indexing',
        'Database clustering and replication'
      ],
      price: '$1,500 - $20,000',
      category: 'Database',
      popular: false,
      marketPrice: '$3,000 - $40,000',
      benefits: ['Improve performance by 300%', 'Reduce downtime', 'Better data security', 'Expert DBA support'],
      setupTime: '1-4 weeks',
      freeTrial: '1 week analysis',
      useCases: ['Database optimization', 'Data migration', 'Performance tuning', 'Security hardening']
    },
    {
      id: '4',
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessment, implementation, and monitoring services with advanced threat protection',
      features: [
        'Security audits and vulnerability assessments',
        'Penetration testing and red team exercises',
        'SOC 2, GDPR, and HIPAA compliance',
        'Incident response and forensics',
        'Security awareness training',
        'Firewall and network security',
        'Endpoint protection and monitoring',
        '24/7 security operations center'
      ],
      price: '$5,000 - $100,000',
      category: 'Security',
      popular: true,
      marketPrice: '$10,000 - $200,000',
      benefits: ['Reduce security incidents by 90%', 'Ensure compliance', 'Proactive threat detection', 'Expert security team'],
      setupTime: '2-8 weeks',
      freeTrial: '1 week assessment',
      useCases: ['Security audits', 'Compliance management', 'Threat detection', 'Incident response']
    },
    {
      id: '5',
      icon: Headphones,
      title: 'Managed IT Services',
      description: '24/7 IT support, monitoring, and maintenance for your entire infrastructure with proactive management',
      features: [
        '24/7 helpdesk and technical support',
        'Proactive monitoring and maintenance',
        'Patch management and updates',
        'Asset management and inventory',
        'User training and support',
        'Vendor management and procurement',
        'Performance monitoring and optimization',
        'Disaster recovery planning'
      ],
      price: '$500 - $5,000/month',
      category: 'Managed Services',
      popular: true,
      marketPrice: '$1,000 - $10,000/month',
      benefits: ['Reduce IT costs by 30%', 'Improve uptime', 'Proactive maintenance', 'Expert support'],
      setupTime: '1-2 weeks',
      freeTrial: '1 month trial',
      useCases: ['IT support', 'Infrastructure management', 'User support', 'System maintenance']
    },
    {
      id: '6',
      icon: Globe,
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT planning, digital transformation, and technology roadmap development for long-term success',
      features: [
        'IT strategy development and planning',
        'Digital transformation consulting',
        'Technology assessment and evaluation',
        'Vendor selection and management',
        'Project management and oversight',
        'Change management and training',
        'ROI analysis and optimization',
        'Technology roadmap development'
      ],
      price: '$2,000 - $30,000',
      category: 'Consulting',
      popular: false,
      marketPrice: '$5,000 - $60,000',
      benefits: ['Strategic guidance', 'Technology expertise', 'Cost optimization', 'Digital transformation'],
      setupTime: '2-8 weeks',
      freeTrial: '1 week consultation',
      useCases: ['IT strategy', 'Digital transformation', 'Technology assessment', 'Vendor management']
    },
    {
      id: '7',
      icon: BarChart3,
      title: 'Data Analytics & BI',
      description: 'Business intelligence solutions, data warehousing, and advanced analytics for data-driven decisions',
      features: [
        'Data warehouse design and implementation',
        'BI dashboard and reporting development',
        'Predictive analytics and modeling',
        'Data visualization and storytelling',
        'ETL/ELT processes and automation',
        'Real-time analytics and monitoring',
        'Data governance and quality management',
        'Machine learning integration'
      ],
      price: '$3,000 - $40,000',
      category: 'Analytics',
      popular: true,
      marketPrice: '$6,000 - $80,000',
      benefits: ['Unlock data insights', 'Improve decision making', 'Real-time analytics', 'Custom dashboards'],
      setupTime: '2-8 weeks',
      freeTrial: '2 weeks pilot',
      useCases: ['Business intelligence', 'Data warehousing', 'Predictive analytics', 'Data visualization']
    },
    {
      id: '8',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design',
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'UI/UX design and prototyping',
        'App store optimization and publishing',
        'Push notifications and analytics',
        'Backend integration and APIs',
        'Security and compliance',
        'Maintenance and updates'
      ],
      price: '$10,000 - $150,000',
      category: 'Development',
      popular: true,
      marketPrice: '$20,000 - $300,000',
      benefits: ['Native performance', 'Cross-platform compatibility', 'Modern UI/UX', 'App store optimization'],
      setupTime: '2-6 months',
      freeTrial: '2 weeks prototype',
      useCases: ['Mobile apps', 'Cross-platform development', 'UI/UX design', 'App store publishing']
    },
    {
      id: '9',
      icon: Globe,
      title: 'Web Application Development',
      description: 'Custom web applications, e-commerce platforms, and enterprise solutions with modern technologies',
      features: [
        'Custom web application development',
        'E-commerce platform development',
        'API development and integration',
        'Performance optimization and SEO',
        'Security implementation and testing',
        'Responsive design and accessibility',
        'Content management systems',
        'Third-party integrations'
      ],
      price: '$5,000 - $100,000',
      category: 'Development',
      popular: true,
      marketPrice: '$10,000 - $200,000',
      benefits: ['Custom solutions', 'Modern technology stack', 'SEO optimization', 'Security best practices'],
      setupTime: '1-6 months',
      freeTrial: '2 weeks prototype',
      useCases: ['Web applications', 'E-commerce platforms', 'API development', 'Performance optimization']
    },
    {
      id: '10',
      icon: Zap,
      title: 'Process Automation',
      description: 'Workflow automation, RPA implementation, and business process optimization for improved efficiency',
      features: [
        'RPA implementation and development',
        'Workflow automation and optimization',
        'API integrations and connectors',
        'Process mining and analysis',
        'Exception handling and monitoring',
        'User training and support',
        'Compliance and audit trails',
        'Performance monitoring and reporting'
      ],
      price: '$2,000 - $25,000',
      category: 'Automation',
      popular: false,
      marketPrice: '$4,000 - $50,000',
      benefits: ['Automate repetitive tasks', 'Improve efficiency', 'Reduce errors', 'Cost savings'],
      setupTime: '2-8 weeks',
      freeTrial: '2 weeks pilot',
      useCases: ['Process automation', 'RPA implementation', 'Workflow optimization', 'API integration']
    },
    {
      id: '11',
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Network design, implementation, and optimization for enterprise environments with security and performance',
      features: [
        'Network design and architecture',
        'Wireless solutions and optimization',
        'VPN setup and management',
        'Network security and monitoring',
        'Load balancing and traffic management',
        'Network performance optimization',
        'Disaster recovery and redundancy',
        '24/7 network monitoring'
      ],
      price: '$3,000 - $35,000',
      category: 'Networking',
      popular: false,
      marketPrice: '$6,000 - $70,000',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Performance optimization', 'Expert management'],
      setupTime: '2-6 weeks',
      freeTrial: '1 week assessment',
      useCases: ['Network design', 'Wireless solutions', 'VPN setup', 'Network security']
    },
    {
      id: '12',
      icon: Shield,
      title: 'Disaster Recovery & Backup',
      description: 'Comprehensive backup solutions and disaster recovery planning for business continuity',
      features: [
        'Backup strategy and implementation',
        'Disaster recovery planning',
        'Business continuity planning',
        'Testing and validation',
        'Cloud backup solutions',
        'Data replication and synchronization',
        'Recovery time optimization',
        'Compliance and audit support'
      ],
      price: '$1,000 - $15,000',
      category: 'Backup',
      popular: false,
      marketPrice: '$2,000 - $30,000',
      benefits: ['Protect critical data', 'Minimize downtime', 'Business continuity', 'Compliance assurance'],
      setupTime: '1-4 weeks',
      freeTrial: '1 week assessment',
      useCases: ['Data backup', 'Disaster recovery', 'Business continuity', 'Compliance']
    },
    {
      id: '13',
      icon: Code,
      title: 'API Development & Integration',
      description: 'Custom API development and integration services for seamless data exchange between systems',
      features: [
        'Custom API development and design',
        'System integration and connectivity',
        'API documentation and testing',
        'Performance optimization and monitoring',
        'Security implementation and authentication',
        'Third-party API integration',
        'API gateway and management',
        'Versioning and maintenance'
      ],
      price: '$3,000 - $25,000',
      category: 'Integration',
      popular: false,
      marketPrice: '$6,000 - $50,000',
      benefits: ['Seamless integration', 'Custom APIs', 'Better performance', 'Security compliance'],
      setupTime: '2-6 weeks',
      freeTrial: '1 week proof of concept',
      useCases: ['API development', 'System integration', 'Data exchange', 'Third-party connectivity']
    },
    {
      id: '14',
      icon: Monitor,
      title: 'IT Performance Monitoring',
      description: 'Real-time IT performance monitoring with alerting, reporting, and optimization recommendations',
      features: [
        'Real-time performance monitoring',
        'Alerting and notification systems',
        'Performance analytics and reporting',
        'Capacity planning and optimization',
        'Trend analysis and forecasting',
        'Custom dashboards and metrics',
        'Integration with existing tools',
        'Proactive issue resolution'
      ],
      price: '$1,500 - $12,000',
      category: 'Monitoring',
      popular: false,
      marketPrice: '$3,000 - $24,000',
      benefits: ['Proactive monitoring', 'Reduce downtime', 'Performance insights', 'Cost optimization'],
      setupTime: '1-3 weeks',
      freeTrial: '1 week trial',
      useCases: ['Performance monitoring', 'Alerting systems', 'Capacity planning', 'Trend analysis']
    },
    {
      id: '15',
      icon: Users,
      title: 'IT Training & Support',
      description: 'Comprehensive IT training programs and ongoing support for your team and end users',
      features: [
        'Custom training curriculum development',
        'End-user support and training',
        'Technical documentation and guides',
        'Video tutorials and e-learning',
        'Certification programs',
        'Ongoing support and mentoring',
        'Best practices and standards',
        'Knowledge base development'
      ],
      price: '$1,000 - $8,000',
      category: 'Training',
      popular: false,
      marketPrice: '$2,000 - $16,000',
      benefits: ['Improve team skills', 'Reduce support tickets', 'Better adoption', 'Knowledge transfer'],
      setupTime: '1-4 weeks',
      freeTrial: '1 day workshop',
      useCases: ['Team training', 'End-user support', 'Technical documentation', 'Certification programs']
    },
    {
      id: '16',
      icon: Settings,
      title: 'IT Project Management',
      description: 'Professional IT project management with planning, execution, and delivery of technology initiatives',
      features: [
        'Project planning and scoping',
        'Resource management and allocation',
        'Timeline tracking and milestones',
        'Risk management and mitigation',
        'Quality assurance and testing',
        'Stakeholder communication',
        'Budget management and reporting',
        'Change management and control'
      ],
      price: '$2,000 - $20,000',
      category: 'Project Management',
      popular: false,
      marketPrice: '$4,000 - $40,000',
      benefits: ['Successful project delivery', 'Risk mitigation', 'Cost control', 'Quality assurance'],
      setupTime: '1-2 weeks',
      freeTrial: '1 week consultation',
      useCases: ['Project planning', 'Resource management', 'Risk management', 'Quality assurance']
    },
    {
      id: '17',
      icon: Lock,
      title: 'Compliance & Audit Services',
      description: 'Ensure regulatory compliance with automated monitoring, audit trails, and compliance reporting',
      features: [
        'Regulatory compliance assessment',
        'Audit trail implementation',
        'Compliance reporting and documentation',
        'Risk assessment and management',
        'Policy development and implementation',
        'Training and awareness programs',
        'Continuous monitoring and improvement',
        'Third-party audit support'
      ],
      price: '$2,500 - $15,000',
      category: 'Compliance',
      popular: false,
      marketPrice: '$5,000 - $30,000',
      benefits: ['Ensure compliance', 'Reduce audit risks', 'Automated monitoring', 'Expert guidance'],
      setupTime: '2-6 weeks',
      freeTrial: '1 week assessment',
      useCases: ['Regulatory compliance', 'Audit preparation', 'Risk management', 'Policy development']
    },
    {
      id: '18',
      icon: Server,
      title: 'Server Management & Maintenance',
      description: 'Complete server management including setup, configuration, monitoring, and maintenance services',
      features: [
        'Server setup and configuration',
        'Performance monitoring and optimization',
        'Security hardening and updates',
        'Backup and disaster recovery',
        'Capacity planning and scaling',
        'Patch management and maintenance',
        '24/7 monitoring and support',
        'Documentation and reporting'
      ],
      price: '$800 - $8,000/month',
      category: 'Server Management',
      popular: false,
      marketPrice: '$1,500 - $15,000/month',
      benefits: ['Reliable server performance', 'Proactive maintenance', 'Security compliance', 'Expert management'],
      setupTime: '1-2 weeks',
      freeTrial: '1 month trial',
      useCases: ['Server setup', 'Performance optimization', 'Security hardening', 'Maintenance']
    },
    {
      id: '19',
      icon: Wifi,
      title: 'Wireless Solutions',
      description: 'Enterprise wireless network design, implementation, and optimization for seamless connectivity',
      features: [
        'Wireless network design and planning',
        'Access point installation and configuration',
        'Network optimization and tuning',
        'Security implementation and monitoring',
        'Guest network management',
        'Performance monitoring and analytics',
        'Troubleshooting and support',
        'Scalability and expansion planning'
      ],
      price: '$2,000 - $20,000',
      category: 'Wireless',
      popular: false,
      marketPrice: '$4,000 - $40,000',
      benefits: ['Seamless connectivity', 'Enhanced security', 'Performance optimization', 'Scalable solutions'],
      setupTime: '1-3 weeks',
      freeTrial: '1 week assessment',
      useCases: ['Wireless design', 'Access point setup', 'Network optimization', 'Security implementation']
    },
    {
      id: '20',
      icon: HardDrive,
      title: 'Data Storage Solutions',
      description: 'Comprehensive data storage solutions including SAN, NAS, and cloud storage with backup and recovery',
      features: [
        'Storage architecture design',
        'SAN and NAS implementation',
        'Cloud storage integration',
        'Data backup and recovery',
        'Storage optimization and management',
        'Security and encryption',
        'Disaster recovery planning',
        'Performance monitoring and tuning'
      ],
      price: '$3,000 - $30,000',
      category: 'Storage',
      popular: false,
      marketPrice: '$6,000 - $60,000',
      benefits: ['Optimized storage performance', 'Data protection', 'Cost optimization', 'Scalable solutions'],
      setupTime: '2-6 weeks',
      freeTrial: '1 week assessment',
      useCases: ['Storage design', 'SAN/NAS setup', 'Cloud integration', 'Backup solutions']
    }
  ];

  const categories = ['All', 'Cloud', 'DevOps', 'Database', 'Security', 'Managed Services', 'Consulting', 'Analytics', 'Development', 'Automation', 'Networking', 'Backup', 'Integration', 'Monitoring', 'Training', 'Project Management', 'Compliance', 'Server Management', 'Wireless', 'Storage'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  const stats = [
    { icon: <Server className="w-8 h-8 text-cyan-500" />, value: '500+', label: 'Servers Managed' },
    { icon: <Shield className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Security Uptime' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '200+', label: 'Clients Served' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, infrastructure management, DevOps, and more. Expert IT support and consulting for modern businesses." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, database management, web development" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we deliver enterprise-grade technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'All' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All IT Services' : `${selectedCategory} Services`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-semibold">Our Price:</span>
                        <span className="text-white font-bold text-lg">{service.price}</span>
                      </div>
                      {service.marketPrice && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Market Price:</span>
                          <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Setup Time:</span>
                        <span className="text-gray-300 text-sm">{service.setupTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Free Trial:</span>
                        <span className="text-green-400 text-sm font-semibold">{service.freeTrial}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                      {service.benefits.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{service.benefits.length - 3} more benefits
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Link 
                      to="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="w-full border border-white/20 text-white font-semibold py-2 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven expertise and results that drive business success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise-Grade Security</h3>
                <p className="text-gray-300">Comprehensive security solutions with 24/7 monitoring and expert incident response.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid Implementation</h3>
                <p className="text-gray-300">Quick deployment and setup with minimal downtime and maximum efficiency.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of experience in enterprise IT solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Modernize Your IT?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our IT experts to discuss your requirements and get a customized solution that drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ItServicesPage;