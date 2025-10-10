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
  Search, 
  Filter, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Lock, 
  BarChart3, 
  Code, 
  Mail, 
  Phone, 
  Calendar, 
  FileText, 
  Cpu, 
  Layers, 
  Activity, 
  Eye, 
  Target, 
  Heart, 
  Home, 
  Scale, 
  GraduationCap, 
  ShoppingCart, 
  Building, 
  Car, 
  Briefcase, 
  BookOpen, 
  Camera, 
  Mic, 
  MessageSquare
} from 'lucide-react';

interface ITService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  benefits: string[];
  marketPrice: string;
  link: string;
  useCases: string[];
}

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const itServices: ITService[] = [
    // Cloud Services
    {
      id: '1',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee, 24/7 monitoring, and auto-scaling capabilities.',
      features: [
        '99.9% Uptime SLA',
        '24/7 Monitoring',
        'Auto-scaling',
        'Cost Optimization',
        'Security Management',
        'Disaster Recovery',
        'Multi-cloud Support',
        'Performance Optimization'
      ],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      popular: true,
      benefits: ['Reduce infrastructure costs by 40%', 'Improve reliability by 99.9%', 'Scale automatically'],
      marketPrice: '$4,999/month',
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      useCases: ['Enterprise Cloud Migration', 'Hybrid Cloud Solutions', 'Cloud Optimization', 'Disaster Recovery']
    },
    {
      id: '2',
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime, data integrity, and cost optimization.',
      features: [
        'Zero Downtime Migration',
        'Data Integrity',
        'Cost Optimization',
        'Security Compliance',
        '24/7 Support',
        'Testing & Validation',
        'Rollback Capability',
        'Performance Tuning'
      ],
      price: 'Starting at $2,999/project',
      category: 'Cloud Services',
      popular: false,
      benefits: ['Reduce migration risks by 90%', 'Save 50% on cloud costs', 'Ensure zero downtime'],
      marketPrice: '$9,999/project',
      link: 'https://ziontechgroup.com/cloud-migration',
      useCases: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Multi-cloud Strategy']
    },

    // Cybersecurity
    {
      id: '3',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions with threat detection, incident response, compliance management, and 24/7 monitoring.',
      features: [
        'Threat Detection',
        'Incident Response',
        'Compliance Management',
        '24/7 Monitoring',
        'Security Audits',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Security Training'
      ],
      price: 'Starting at $799/month',
      category: 'Cybersecurity',
      popular: true,
      benefits: ['Reduce security incidents by 85%', 'Improve compliance by 100%', '24/7 protection'],
      marketPrice: '$2,999/month',
      link: 'https://ziontechgroup.com/cybersecurity',
      useCases: ['Security Monitoring', 'Compliance Management', 'Incident Response', 'Security Training']
    },
    {
      id: '4',
      icon: <Lock className="w-8 h-8 text-orange-500" />,
      title: 'Security Monitoring Pro',
      description: 'Advanced 24/7 security monitoring with AI-powered threat detection, automated response, and compliance reporting.',
      features: [
        'AI Threat Detection',
        '24/7 Monitoring',
        'Automated Response',
        'Compliance Reporting',
        'Security Analytics',
        'Vulnerability Scanning',
        'Audit Trails',
        'Real-time Alerts'
      ],
      price: 'Starting at $499/month',
      category: 'Cybersecurity',
      popular: false,
      benefits: ['Detect threats 10x faster', 'Reduce false positives by 80%', 'Ensure compliance'],
      marketPrice: '$1,999/month',
      link: 'https://ziontechgroup.com/security-monitoring',
      useCases: ['Threat Detection', 'Compliance Monitoring', 'Incident Response', 'Security Analytics']
    },

    // DevOps & Development
    {
      id: '5',
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, monitoring, and infrastructure as code.',
      features: [
        'Automated Testing',
        'Continuous Deployment',
        'Infrastructure Monitoring',
        'Version Control',
        'Collaboration Tools',
        'Performance Monitoring',
        'Security Integration',
        'Rollback Capability'
      ],
      price: 'Starting at $799/month',
      category: 'DevOps',
      popular: true,
      benefits: ['Reduce deployment time by 80%', 'Improve code quality by 60%', 'Increase team productivity'],
      marketPrice: '$2,999/month',
      link: 'https://ziontechgroup.com/devops-cicd',
      useCases: ['CI/CD Pipeline', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation']
    },
    {
      id: '6',
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      title: 'Custom Software Development',
      description: 'Custom software solutions built with modern technologies, scalable architecture, and enterprise-grade security.',
      features: [
        'Custom Development',
        'Modern Technologies',
        'Scalable Architecture',
        'Enterprise Security',
        'API Development',
        'Database Design',
        'Mobile Integration',
        'Performance Optimization'
      ],
      price: 'Starting at $1,999/month',
      category: 'Development',
      popular: false,
      benefits: ['Reduce development time by 50%', 'Improve scalability by 200%', 'Ensure security compliance'],
      marketPrice: '$7,999/month',
      link: 'https://ziontechgroup.com/custom-development',
      useCases: ['Enterprise Software', 'Web Applications', 'Mobile Apps', 'API Development']
    },

    // Data & Analytics
    {
      id: '7',
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'Database Services',
      description: 'Database design, optimization, migration, and management for optimal performance and reliability.',
      features: [
        'Database Design',
        'Performance Tuning',
        'Backup & Recovery',
        'Migration Services',
        'Monitoring',
        'Security Hardening',
        'Scalability Planning',
        'Disaster Recovery'
      ],
      price: 'Starting at $399/month',
      category: 'Data Services',
      popular: true,
      benefits: ['Improve performance by 300%', 'Reduce downtime by 95%', 'Ensure data security'],
      marketPrice: '$1,599/month',
      link: 'https://ziontechgroup.com/database-services',
      useCases: ['Database Migration', 'Performance Optimization', 'Data Backup', 'Security Hardening']
    },
    {
      id: '8',
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Business Intelligence Solutions',
      description: 'Advanced BI solutions with interactive dashboards, automated reporting, and data visualization.',
      features: [
        'Interactive Dashboards',
        'Automated Reports',
        'Data Visualization',
        'Self-service Analytics',
        'Mobile Access',
        'Real-time Data',
        'Custom Metrics',
        'Integration APIs'
      ],
      price: 'Starting at $599/month',
      category: 'Data Services',
      popular: false,
      benefits: ['Improve decision making by 70%', 'Reduce reporting time by 90%', 'Increase data insights'],
      marketPrice: '$2,399/month',
      link: 'https://ziontechgroup.com/business-intelligence',
      useCases: ['Data Visualization', 'Automated Reporting', 'Dashboard Creation', 'Analytics']
    },

    // IT Infrastructure
    {
      id: '9',
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'IT Infrastructure Setup',
      description: 'Complete IT infrastructure setup and management for enterprise environments with 24/7 support.',
      features: [
        'Server Setup',
        'Network Configuration',
        'Security Implementation',
        'Monitoring',
        'Maintenance',
        'Backup Solutions',
        'Disaster Recovery',
        '24/7 Support'
      ],
      price: 'Starting at $1,499/month',
      category: 'Infrastructure',
      popular: true,
      benefits: ['Reduce setup time by 80%', 'Improve reliability by 99%', 'Ensure security compliance'],
      marketPrice: '$5,999/month',
      link: 'https://ziontechgroup.com/it-infrastructure',
      useCases: ['Infrastructure Setup', 'Network Configuration', 'Security Implementation', 'Maintenance']
    },
    {
      id: '10',
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support, proactive monitoring, and help desk services.',
      features: [
        '24/7 Support',
        'Proactive Monitoring',
        'Help Desk',
        'Security Management',
        'Backup Solutions',
        'Software Updates',
        'Hardware Maintenance',
        'User Training'
      ],
      price: 'Starting at $999/month',
      category: 'Infrastructure',
      popular: false,
      benefits: ['Reduce IT costs by 40%', 'Improve uptime by 99%', 'Free up internal resources'],
      marketPrice: '$3,999/month',
      link: 'https://ziontechgroup.com/managed-it',
      useCases: ['IT Support', 'System Monitoring', 'Help Desk', 'Maintenance']
    },

    // Web & Mobile Development
    {
      id: '11',
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      features: [
        'React/Next.js',
        'Full-stack Development',
        'API Development',
        'Performance Optimization',
        'SEO',
        'Mobile Responsive',
        'Security Implementation',
        'Testing & QA'
      ],
      price: 'Starting at $1,299/month',
      category: 'Web Development',
      popular: true,
      benefits: ['Increase performance by 200%', 'Improve SEO by 150%', 'Ensure mobile compatibility'],
      marketPrice: '$4,999/month',
      link: 'https://ziontechgroup.com/web-development',
      useCases: ['Corporate Websites', 'E-commerce Platforms', 'Web Applications', 'API Development']
    },
    {
      id: '12',
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'Mobile App Development',
      description: 'Custom mobile applications for iOS and Android platforms with modern technologies and native performance.',
      features: [
        'Native Apps',
        'Cross-platform',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Support',
        'Security Implementation',
        'Performance Optimization'
      ],
      price: 'Starting at $1,999/month',
      category: 'Mobile Development',
      popular: false,
      benefits: ['Increase user engagement by 300%', 'Improve app performance by 200%', 'Ensure security'],
      marketPrice: '$7,999/month',
      link: 'https://ziontechgroup.com/mobile-development',
      useCases: ['iOS Apps', 'Android Apps', 'Cross-platform Apps', 'App Store Optimization']
    },

    // Automation & Integration
    {
      id: '13',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Process Automation',
      description: 'Streamline workflows with intelligent automation solutions, RPA, and system integration.',
      features: [
        'Workflow Automation',
        'RPA Implementation',
        'System Integration',
        'Monitoring',
        'Optimization',
        'Error Handling',
        'Reporting',
        'Custom Workflows'
      ],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: true,
      benefits: ['Reduce manual work by 80%', 'Improve accuracy by 95%', 'Increase efficiency by 200%'],
      marketPrice: '$2,399/month',
      link: 'https://ziontechgroup.com/process-automation',
      useCases: ['Workflow Automation', 'RPA Implementation', 'System Integration', 'Process Optimization']
    },
    {
      id: '14',
      icon: <Layers className="w-8 h-8 text-teal-500" />,
      title: 'System Integration',
      description: 'Seamless integration of disparate systems with APIs, data synchronization, and real-time connectivity.',
      features: [
        'API Integration',
        'Data Synchronization',
        'Real-time Connectivity',
        'Error Handling',
        'Monitoring',
        'Security',
        'Scalability',
        'Documentation'
      ],
      price: 'Starting at $799/month',
      category: 'Integration',
      popular: false,
      benefits: ['Reduce integration time by 70%', 'Improve data accuracy by 90%', 'Ensure real-time sync'],
      marketPrice: '$2,999/month',
      link: 'https://ziontechgroup.com/system-integration',
      useCases: ['API Integration', 'Data Synchronization', 'System Connectivity', 'Real-time Updates']
    },

    // Consulting & Strategy
    {
      id: '15',
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize technology infrastructure, processes, and digital transformation.',
      features: [
        'Technology Assessment',
        'Strategic Planning',
        'Cost Optimization',
        'Digital Transformation',
        'Training',
        'Implementation',
        'Change Management',
        'Performance Monitoring'
      ],
      price: 'Starting at $299/hour',
      category: 'Consulting',
      popular: true,
      benefits: ['Reduce IT costs by 30%', 'Improve efficiency by 50%', 'Ensure strategic alignment'],
      marketPrice: '$599/hour',
      link: 'https://ziontechgroup.com/it-consulting',
      useCases: ['Technology Strategy', 'Digital Transformation', 'Cost Optimization', 'Change Management']
    },
    {
      id: '16',
      icon: <Eye className="w-8 h-8 text-blue-500" />,
      title: 'IT Audit & Assessment',
      description: 'Comprehensive IT audit and assessment services to identify risks, opportunities, and optimization areas.',
      features: [
        'Security Assessment',
        'Performance Analysis',
        'Compliance Review',
        'Risk Identification',
        'Recommendations',
        'Implementation Plan',
        'Follow-up Support',
        'Documentation'
      ],
      price: 'Starting at $1,999/assessment',
      category: 'Consulting',
      popular: false,
      benefits: ['Identify risks and opportunities', 'Improve compliance by 100%', 'Optimize performance'],
      marketPrice: '$7,999/assessment',
      link: 'https://ziontechgroup.com/it-audit',
      useCases: ['Security Audit', 'Performance Assessment', 'Compliance Review', 'Risk Analysis']
    },

    // Specialized Services
    {
      id: '17',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Healthcare IT Solutions',
      description: 'HIPAA-compliant IT solutions for healthcare organizations with specialized security and compliance features.',
      features: [
        'HIPAA Compliance',
        'Healthcare Security',
        'Patient Data Protection',
        'EMR Integration',
        'Telemedicine Support',
        'Compliance Monitoring',
        'Audit Trails',
        'Emergency Support'
      ],
      price: 'Starting at $1,999/month',
      category: 'Healthcare IT',
      popular: false,
      benefits: ['Ensure HIPAA compliance', 'Protect patient data', 'Improve healthcare delivery'],
      marketPrice: '$7,999/month',
      link: 'https://ziontechgroup.com/healthcare-it',
      useCases: ['HIPAA Compliance', 'EMR Integration', 'Telemedicine', 'Patient Data Security']
    },
    {
      id: '18',
      icon: <Scale className="w-8 h-8 text-blue-500" />,
      title: 'Legal IT Solutions',
      description: 'Specialized IT solutions for law firms with document management, case management, and compliance features.',
      features: [
        'Document Management',
        'Case Management',
        'Compliance Monitoring',
        'Client Portal',
        'Time Tracking',
        'Billing Integration',
        'Security Features',
        'Backup Solutions'
      ],
      price: 'Starting at $1,499/month',
      category: 'Legal IT',
      popular: false,
      benefits: ['Improve case management', 'Ensure compliance', 'Enhance client service'],
      marketPrice: '$5,999/month',
      link: 'https://ziontechgroup.com/legal-it',
      useCases: ['Document Management', 'Case Management', 'Compliance', 'Client Portal']
    },

    // E-commerce & Retail
    {
      id: '19',
      icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
      title: 'E-commerce IT Solutions',
      description: 'Complete e-commerce IT solutions with payment processing, inventory management, and customer analytics.',
      features: [
        'E-commerce Platform',
        'Payment Processing',
        'Inventory Management',
        'Customer Analytics',
        'Security Features',
        'Mobile Optimization',
        'SEO Integration',
        'Performance Monitoring'
      ],
      price: 'Starting at $1,299/month',
      category: 'E-commerce IT',
      popular: false,
      benefits: ['Increase online sales by 200%', 'Improve customer experience', 'Ensure payment security'],
      marketPrice: '$4,999/month',
      link: 'https://ziontechgroup.com/ecommerce-it',
      useCases: ['Online Store Setup', 'Payment Integration', 'Inventory Management', 'Customer Analytics']
    },
    {
      id: '20',
      icon: <Building className="w-8 h-8 text-purple-500" />,
      title: 'Enterprise IT Solutions',
      description: 'Comprehensive enterprise IT solutions with scalability, security, and integration capabilities.',
      features: [
        'Enterprise Architecture',
        'Scalability Planning',
        'Security Implementation',
        'Integration Services',
        'Performance Optimization',
        'Disaster Recovery',
        'Compliance Management',
        '24/7 Support'
      ],
      price: 'Starting at $2,999/month',
      category: 'Enterprise IT',
      popular: true,
      benefits: ['Scale with business growth', 'Ensure enterprise security', 'Improve operational efficiency'],
      marketPrice: '$9,999/month',
      link: 'https://ziontechgroup.com/enterprise-it',
      useCases: ['Enterprise Architecture', 'Scalability Planning', 'Security Implementation', 'Integration']
    }
  ];

  const categories = [
    'All',
    'Cloud Services',
    'Cybersecurity',
    'DevOps',
    'Development',
    'Data Services',
    'Infrastructure',
    'Web Development',
    'Mobile Development',
    'Automation',
    'Integration',
    'Consulting',
    'Healthcare IT',
    'Legal IT',
    'E-commerce IT',
    'Enterprise IT'
  ];

  const benefits = [
    'Reduce IT costs by up to 40%',
    'Improve system reliability by 99%',
    'Enhance security and compliance',
    'Scale with business growth',
    '24/7 expert support',
    'Proactive monitoring and maintenance',
    'Modern technology implementation',
    'Strategic IT planning and consulting'
  ];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>IT Services | Zion Tech Group - Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, infrastructure management, DevOps, and custom development. Expert IT support and consulting for all business needs." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, custom development, business intelligence" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View Solutions
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

        {/* Services Grid */}
        <section className="py-20 px-4">
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
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
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
                    <h4 className="text-sm font-semibold text-white mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.useCases.slice(0, 2).map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                      {service.useCases.length > 2 && (
                        <span className="text-gray-400 text-xs">
                          +{service.useCases.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
                    <div className="text-xs text-green-400 font-medium">
                      Save {Math.round((parseFloat(service.marketPrice.replace('$', '').replace('/month', '').replace(',', '')) - parseFloat(service.price.replace('$', '').replace('/month', '').replace(',', ''))) / parseFloat(service.marketPrice.replace('$', '').replace('/month', '').replace(',', '')) * 100)}% vs market price
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Quote
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

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our IT experts to discuss your requirements and discover how our solutions can modernize your technology stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;
