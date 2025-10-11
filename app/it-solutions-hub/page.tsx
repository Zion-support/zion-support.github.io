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
  CheckCircle,
  Star,
  Clock,
  Users,
  TrendingUp,
  Wifi,
  Server,
  Code,
  ShoppingCart,
  Monitor,
  Headphones,
  BarChart,
  Cpu,
  Lock,
  Mail,
  FileText,
  Heart,
  Eye,
  Mic,
  Calendar,
  MessageSquare,
  DollarSign,
  Package,
  Workflow,
  Link as LinkIcon,
  Sparkles,
  Rocket,
  Award,
  Lightbulb,
  PieChart,
  Activity,
  Layers,
  Compass,
  RefreshCw,
  Maximize,
  Minimize,
  Play,
  Pause,
  Square,
  Triangle,
  Circle,
  Hexagon,
  Octagon,
  Pentagon,
  Grid,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Car,
  Building,
  Factory,
  Home,
  School,
  Hospital,
  Bank,
  Store,
  Plane,
  Ship,
  Truck
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItSolutionsHubPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const itSolutions = [
    {
      id: 'enterprise-cloud-migration',
      name: 'Enterprise Cloud Migration Pro',
      description: 'Complete enterprise cloud migration with zero downtime and advanced security',
      price: '$15,000/month',
      marketPrice: '$25000-100000/month',
      features: [
        'Zero-downtime migration',
        'Multi-cloud strategy',
        'Legacy system modernization',
        'Data security compliance',
        'Performance optimization',
        'Cost optimization',
        'Disaster recovery setup',
        '24/7 monitoring'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Faster time to market'
      ],
      category: 'Cloud Solutions',
      popular: true,
      icon: Cloud,
      link: 'https://ziontechgroup.com/enterprise-cloud-migration'
    },
    {
      id: 'cybersecurity-fortress',
      name: 'Cybersecurity Fortress Suite',
      description: 'Comprehensive cybersecurity solution with AI-powered threat detection and response',
      price: '$8,999/month',
      marketPrice: '$15000-50000/month',
      features: [
        'AI-powered threat detection',
        'Real-time security monitoring',
        'Penetration testing',
        'Vulnerability assessment',
        'Incident response automation',
        'Compliance management',
        'Security training',
        'Threat intelligence'
      ],
      benefits: [
        'Protect against 99.9% of threats',
        'Reduce security incidents by 95%',
        'Ensure compliance',
        'Peace of mind'
      ],
      category: 'Cybersecurity',
      popular: true,
      icon: Shield,
      link: 'https://ziontechgroup.com/cybersecurity-fortress'
    },
    {
      id: 'ai-powered-devops',
      name: 'AI-Powered DevOps Platform',
      description: 'Intelligent DevOps platform with automated CI/CD, monitoring, and optimization',
      price: '$6,999/month',
      marketPrice: '$12000-35000/month',
      features: [
        'AI-powered CI/CD pipelines',
        'Automated testing and deployment',
        'Intelligent monitoring',
        'Performance optimization',
        'Infrastructure as Code',
        'Container orchestration',
        'Microservices management',
        'Predictive analytics'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment failures by 90%',
        'Improve code quality',
        'Automated operations'
      ],
      category: 'DevOps',
      popular: true,
      icon: Settings,
      link: 'https://ziontechgroup.com/ai-powered-devops'
    },
    {
      id: 'enterprise-data-platform',
      name: 'Enterprise Data Platform Pro',
      description: 'Comprehensive data platform with AI analytics, warehousing, and real-time processing',
      price: '$12,999/month',
      marketPrice: '$20000-80000/month',
      features: [
        'Data lake and warehouse setup',
        'Real-time data processing',
        'AI-powered analytics',
        'Data governance',
        'ETL/ELT automation',
        'Data quality management',
        'Business intelligence',
        'Machine learning integration'
      ],
      benefits: [
        'Unlock data insights',
        'Improve decision making',
        'Reduce data processing time by 80%',
        'Better business intelligence'
      ],
      category: 'Data Solutions',
      popular: true,
      icon: Database,
      link: 'https://ziontechgroup.com/enterprise-data-platform'
    },
    {
      id: 'iot-enterprise-suite',
      name: 'IoT Enterprise Suite',
      description: 'Complete IoT solution for enterprise with device management and analytics',
      price: '$9,999/month',
      marketPrice: '$18000-60000/month',
      features: [
        'IoT device management',
        'Real-time data collection',
        'Edge computing',
        'Predictive maintenance',
        'Asset tracking',
        'Energy optimization',
        'Security monitoring',
        'Analytics dashboard'
      ],
      benefits: [
        'Optimize operations',
        'Reduce maintenance costs by 30%',
        'Improve efficiency',
        'Real-time insights'
      ],
      category: 'IoT Solutions',
      popular: true,
      icon: Wifi,
      link: 'https://ziontechgroup.com/iot-enterprise-suite'
    },
    {
      id: 'blockchain-enterprise',
      name: 'Blockchain Enterprise Platform',
      description: 'Enterprise blockchain solution with smart contracts and decentralized applications',
      price: '$14,999/month',
      marketPrice: '$25000-100000/month',
      features: [
        'Private blockchain setup',
        'Smart contract development',
        'DeFi integration',
        'NFT marketplace',
        'Cryptocurrency integration',
        'Security auditing',
        'Compliance management',
        'API development'
      ],
      benefits: [
        'Enhanced security',
        'Transparent transactions',
        'Reduced costs',
        'Future-proof technology'
      ],
      category: 'Blockchain',
      popular: true,
      icon: LinkIcon,
      link: 'https://ziontechgroup.com/blockchain-enterprise'
    },
    {
      id: 'ai-customer-experience',
      name: 'AI Customer Experience Platform',
      description: 'Complete customer experience solution with AI-powered personalization and analytics',
      price: '$7,999/month',
      marketPrice: '$15000-45000/month',
      features: [
        'AI-powered personalization',
        'Customer journey mapping',
        'Real-time analytics',
        'Omnichannel support',
        'Sentiment analysis',
        'Predictive modeling',
        'A/B testing',
        'ROI optimization'
      ],
      benefits: [
        'Increase customer satisfaction by 50%',
        'Improve conversion rates',
        'Better customer insights',
        'Enhanced experience'
      ],
      category: 'Customer Experience',
      popular: true,
      icon: Users,
      link: 'https://ziontechgroup.com/ai-customer-experience'
    },
    {
      id: 'enterprise-mobile-suite',
      name: 'Enterprise Mobile Suite Pro',
      description: 'Complete mobile solution with native apps, management, and security',
      price: '$5,999/month',
      marketPrice: '$10000-30000/month',
      features: [
        'Native iOS and Android apps',
        'Cross-platform development',
        'Mobile device management',
        'App security',
        'Push notifications',
        'Offline functionality',
        'Analytics and reporting',
        'App store optimization'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'Enhanced security',
        'Better user experience'
      ],
      category: 'Mobile Solutions',
      popular: true,
      icon: Smartphone,
      link: 'https://ziontechgroup.com/enterprise-mobile-suite'
    },
    {
      id: 'ai-workplace-automation',
      name: 'AI Workplace Automation Suite',
      description: 'Intelligent workplace automation with AI-powered process optimization',
      price: '$4,999/month',
      marketPrice: '$8000-25000/month',
      features: [
        'Process automation',
        'Document management',
        'Workflow optimization',
        'Task automation',
        'Integration capabilities',
        'Performance monitoring',
        'Custom solutions',
        'Training and support'
      ],
      benefits: [
        'Increase productivity by 60%',
        'Reduce manual work',
        'Improve accuracy',
        'Better efficiency'
      ],
      category: 'Workplace Automation',
      popular: true,
      icon: Workflow,
      link: 'https://ziontechgroup.com/ai-workplace-automation'
    },
    {
      id: 'enterprise-api-platform',
      name: 'Enterprise API Platform Pro',
      description: 'Comprehensive API management platform with security, monitoring, and analytics',
      price: '$3,999/month',
      marketPrice: '$7000-20000/month',
      features: [
        'API gateway management',
        'Security and authentication',
        'Rate limiting and throttling',
        'API documentation',
        'Testing and monitoring',
        'Analytics and reporting',
        'Developer portal',
        'Integration capabilities'
      ],
      benefits: [
        'Secure API management',
        'Better developer experience',
        'Improved performance',
        'Enhanced security'
      ],
      category: 'API Management',
      popular: true,
      icon: Code,
      link: 'https://ziontechgroup.com/enterprise-api-platform'
    },
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with AI-powered optimization and forecasting',
      price: '$11,999/month',
      marketPrice: '$20000-70000/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Supplier management',
        'Route optimization',
        'Risk assessment',
        'Cost optimization',
        'Real-time tracking',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce costs by 25%',
        'Improve efficiency',
        'Better forecasting',
        'Optimized operations'
      ],
      category: 'Supply Chain',
      popular: true,
      icon: Package,
      link: 'https://ziontechgroup.com/ai-supply-chain-optimization'
    },
    {
      id: 'enterprise-ecommerce-platform',
      name: 'Enterprise E-commerce Platform',
      description: 'Complete e-commerce solution with AI-powered personalization and analytics',
      price: '$8,999/month',
      marketPrice: '$15000-50000/month',
      features: [
        'Custom e-commerce development',
        'AI-powered recommendations',
        'Payment gateway integration',
        'Inventory management',
        'Order processing',
        'Customer management',
        'Analytics and reporting',
        'Mobile optimization'
      ],
      benefits: [
        'Increase sales by 40%',
        'Better user experience',
        'Mobile optimization',
        'Scalable platform'
      ],
      category: 'E-commerce',
      popular: true,
      icon: ShoppingCart,
      link: 'https://ziontechgroup.com/enterprise-ecommerce-platform'
    },
    {
      id: 'ai-hr-management-suite',
      name: 'AI HR Management Suite',
      description: 'Complete HR solution with AI-powered recruitment, analytics, and automation',
      price: '$6,999/month',
      marketPrice: '$12000-35000/month',
      features: [
        'AI-powered recruitment',
        'Employee management',
        'Performance analytics',
        'Payroll automation',
        'Benefits management',
        'Training and development',
        'Compliance management',
        'Reporting and analytics'
      ],
      benefits: [
        'Improve hiring efficiency',
        'Better employee management',
        'Reduce HR costs',
        'Enhanced analytics'
      ],
      category: 'HR Solutions',
      popular: true,
      icon: Users,
      link: 'https://ziontechgroup.com/ai-hr-management-suite'
    },
    {
      id: 'enterprise-security-operations',
      name: 'Enterprise Security Operations Center',
      description: '24/7 security operations center with advanced threat detection and response',
      price: '$19,999/month',
      marketPrice: '$35000-120000/month',
      features: [
        '24/7 security monitoring',
        'Threat detection and response',
        'Incident management',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Security training',
        'Threat intelligence',
        'Reporting and analytics'
      ],
      benefits: [
        'Round-the-clock protection',
        'Rapid incident response',
        'Compliance assurance',
        'Expert security team'
      ],
      category: 'Security Operations',
      popular: true,
      icon: Shield,
      link: 'https://ziontechgroup.com/enterprise-security-operations'
    },
    {
      id: 'ai-financial-management',
      name: 'AI Financial Management Suite',
      description: 'Complete financial management solution with AI-powered analytics and automation',
      price: '$9,999/month',
      marketPrice: '$18000-55000/month',
      features: [
        'Financial planning and analysis',
        'Budget management',
        'Expense tracking',
        'Invoice automation',
        'Payment processing',
        'Financial reporting',
        'Risk assessment',
        'Compliance management'
      ],
      benefits: [
        'Improve financial control',
        'Reduce manual work',
        'Better insights',
        'Enhanced accuracy'
      ],
      category: 'Financial Solutions',
      popular: true,
      icon: DollarSign,
      link: 'https://ziontechgroup.com/ai-financial-management'
    },
    {
      id: 'enterprise-communication-platform',
      name: 'Enterprise Communication Platform',
      description: 'Unified communication solution with video, voice, and collaboration tools',
      price: '$4,999/month',
      marketPrice: '$8000-25000/month',
      features: [
        'Video conferencing',
        'Voice calls',
        'Instant messaging',
        'File sharing',
        'Screen sharing',
        'Recording capabilities',
        'Integration with tools',
        'Mobile apps'
      ],
      benefits: [
        'Improve collaboration',
        'Reduce communication costs',
        'Better productivity',
        'Unified platform'
      ],
      category: 'Communication',
      popular: true,
      icon: MessageSquare,
      link: 'https://ziontechgroup.com/enterprise-communication-platform'
    },
    {
      id: 'ai-project-management',
      name: 'AI Project Management Suite',
      description: 'Intelligent project management with AI-powered planning and optimization',
      price: '$3,999/month',
      marketPrice: '$7000-20000/month',
      features: [
        'AI-powered project planning',
        'Resource optimization',
        'Risk assessment',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Budget management',
        'Reporting and analytics'
      ],
      benefits: [
        'Improve project success rates',
        'Better resource utilization',
        'Reduce project delays',
        'Enhanced planning'
      ],
      category: 'Project Management',
      popular: true,
      icon: Calendar,
      link: 'https://ziontechgroup.com/ai-project-management'
    },
    {
      id: 'enterprise-backup-recovery',
      name: 'Enterprise Backup & Recovery Pro',
      description: 'Comprehensive backup and disaster recovery solution with AI optimization',
      price: '$2,999/month',
      marketPrice: '$5000-15000/month',
      features: [
        'Automated backups',
        'Disaster recovery planning',
        'Data replication',
        'Recovery testing',
        'Compliance management',
        'Monitoring and alerting',
        'Cloud and on-premise',
        '24/7 support'
      ],
      benefits: [
        'Protect critical data',
        'Minimize downtime',
        'Ensure business continuity',
        'Compliance ready'
      ],
      category: 'Backup & Recovery',
      popular: true,
      icon: Database,
      link: 'https://ziontechgroup.com/enterprise-backup-recovery'
    },
    {
      id: 'ai-network-optimization',
      name: 'AI Network Optimization Suite',
      description: 'Intelligent network management with AI-powered optimization and monitoring',
      price: '$5,999/month',
      marketPrice: '$10000-30000/month',
      features: [
        'Network performance monitoring',
        'Traffic optimization',
        'Bandwidth management',
        'Security monitoring',
        'Predictive maintenance',
        'Quality of service',
        'Network analytics',
        'Automated optimization'
      ],
      benefits: [
        'Improve network performance',
        'Reduce downtime',
        'Optimize bandwidth usage',
        'Enhanced security'
      ],
      category: 'Network Solutions',
      popular: true,
      icon: Wifi,
      link: 'https://ziontechgroup.com/ai-network-optimization'
    },
    {
      id: 'enterprise-integration-platform',
      name: 'Enterprise Integration Platform',
      description: 'Complete integration solution connecting all enterprise systems and applications',
      price: '$7,999/month',
      marketPrice: '$14000-40000/month',
      features: [
        'System integration',
        'API management',
        'Data transformation',
        'Real-time processing',
        'Error handling',
        'Monitoring and logging',
        'Security and compliance',
        'Scalable architecture'
      ],
      benefits: [
        'Connect all systems',
        'Improve data flow',
        'Reduce manual work',
        'Better efficiency'
      ],
      category: 'Integration',
      popular: true,
      icon: LinkIcon,
      link: 'https://ziontechgroup.com/enterprise-integration-platform'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Solutions', icon: Grid },
    { id: 'Cloud Solutions', name: 'Cloud Solutions', icon: Cloud },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'DevOps', name: 'DevOps', icon: Settings },
    { id: 'Data Solutions', name: 'Data Solutions', icon: Database },
    { id: 'IoT Solutions', name: 'IoT Solutions', icon: Wifi },
    { id: 'Blockchain', name: 'Blockchain', icon: LinkIcon },
    { id: 'Customer Experience', name: 'Customer Experience', icon: Users },
    { id: 'Mobile Solutions', name: 'Mobile Solutions', icon: Smartphone },
    { id: 'Workplace Automation', name: 'Workplace Automation', icon: Workflow },
    { id: 'API Management', name: 'API Management', icon: Code },
    { id: 'Supply Chain', name: 'Supply Chain', icon: Package },
    { id: 'E-commerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'HR Solutions', name: 'HR Solutions', icon: Users },
    { id: 'Security Operations', name: 'Security Operations', icon: Shield },
    { id: 'Financial Solutions', name: 'Financial Solutions', icon: DollarSign },
    { id: 'Communication', name: 'Communication', icon: MessageSquare },
    { id: 'Project Management', name: 'Project Management', icon: Calendar },
    { id: 'Backup & Recovery', name: 'Backup & Recovery', icon: Database },
    { id: 'Network Solutions', name: 'Network Solutions', icon: Wifi },
    { id: 'Integration', name: 'Integration', icon: LinkIcon }
  ];

  const filteredSolutions = itSolutions.filter(solution => {
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>IT Solutions Hub | Zion Tech Group - Enterprise Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive IT Solutions Hub featuring enterprise cloud migration, cybersecurity, DevOps, data platforms, and advanced technology solutions for modern businesses." />
        <meta name="keywords" content="it solutions, enterprise technology, cloud migration, cybersecurity, devops, data platform, iot solutions, blockchain" />
        <meta property="og:title" content="IT Solutions Hub | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive enterprise technology solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Solutions Hub | Zion Tech Group" />
        <meta name="twitter:description" content="Discover our comprehensive IT Solutions Hub" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              IT Solutions Hub
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Enterprise Technology Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with our comprehensive IT Solutions Hub featuring enterprise-grade cloud migration, 
              cybersecurity, DevOps, data platforms, and cutting-edge technology solutions designed for scalability, 
              security, and performance.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-300">Enterprise Solutions</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">$3K-20K</div>
                <div className="text-gray-300">Monthly Pricing</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Expert Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                📧 Email Us
              </a>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Solutions Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution) => (
                <div
                  key={solution.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    {solution.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{solution.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{solution.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{solution.price}</span>
                      <span className="text-sm text-gray-400 line-through">{solution.marketPrice}</span>
                    </div>
                    <div className="text-xs text-gray-400">per month</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <a
                      href={solution.link}
                      className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                    >
                      Learn More
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="w-full py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our comprehensive IT Solutions Hub and modernize your technology stack. 
                Our enterprise-grade solutions will help you scale, secure, and optimize your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
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

export default ItSolutionsHubPage;