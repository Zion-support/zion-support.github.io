'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  Clock,
  Users,
  Server,
  Network,
  Headphones,
  BarChart3,
  Code,
  Lock,
  Monitor,
  DollarSign,
  TrendingUp,
  Cpu,
  HardDrive,
  Wifi,
  FileText,
  Layers
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    {
      id: 1,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services and cost optimization.',
      icon: Cloud,
      category: 'Cloud',
      features: [
        'Multi-cloud architecture design and implementation',
        'Cloud migration planning and execution',
        'Cost optimization and resource management',
        'Disaster recovery and backup solutions',
        'Auto-scaling and load balancing',
        'Security compliance (SOC2, GDPR, HIPAA)',
        '24/7 monitoring and support',
        'Performance optimization and tuning'
      ],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support'],
      link: 'https://ziontechgroup.com/cloud-services'
    },
    {
      id: 2,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, incident response, and security training.',
      icon: Shield,
      category: 'Security',
      features: [
        'Advanced threat detection and response',
        'Vulnerability assessments and penetration testing',
        'Security monitoring and incident response',
        'Compliance management (SOC2, GDPR, HIPAA)',
        'Security awareness training programs',
        'Dark web monitoring and breach detection',
        'Firewall and network security configuration',
        '24/7 Security Operations Center (SOC)'
      ],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      link: 'https://ziontechgroup.com/cybersecurity'
    },
    {
      id: 3,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Modern development operations with automated deployment, monitoring, infrastructure as code, and continuous integration.',
      icon: Settings,
      category: 'DevOps',
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Container orchestration (Kubernetes, Docker)',
        'Monitoring and logging solutions',
        'Automated testing and quality assurance',
        'Deployment automation and rollback',
        'Performance monitoring and alerting',
        'GitOps and version control workflows'
      ],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows'],
      link: 'https://ziontechgroup.com/devops'
    },
    {
      id: 4,
      title: 'Database Management & Optimization',
      description: 'Expert database design, optimization, and management for all major database systems with high availability.',
      icon: Database,
      category: 'Database',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and disaster recovery',
        'Data migration and consolidation',
        'Security hardening and access control',
        'Monitoring and maintenance',
        'High availability and clustering',
        'Database as a Service (DBaaS)'
      ],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support'],
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      id: 5,
      title: 'IT Infrastructure Management',
      description: 'Complete infrastructure setup and management including servers, networks, hardware, and system administration.',
      icon: Server,
      category: 'Infrastructure',
      features: [
        'Server setup and configuration',
        'Network design and implementation',
        'Hardware procurement and management',
        'System administration and maintenance',
        'Performance monitoring and optimization',
        'Capacity planning and scaling',
        'Patch management and updates',
        'Remote monitoring and support'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-10000/month',
      benefits: ['Reliable infrastructure', 'Proactive monitoring', 'Cost optimization', 'Expert administration'],
      link: 'https://ziontechgroup.com/it-infrastructure'
    },
    {
      id: 6,
      title: 'Managed IT Services',
      description: 'Comprehensive IT support and management including helpdesk, maintenance, monitoring, and user support.',
      icon: Headphones,
      category: 'Support',
      features: [
        '24/7 helpdesk support',
        'Remote monitoring and management',
        'Proactive maintenance and updates',
        'Software license management',
        'User support and training',
        'Incident management and resolution',
        'Asset management and tracking',
        'Vendor management and coordination'
      ],
      price: 'Starting at $800/month',
      marketPrice: '$1200-5000/month',
      benefits: ['Reduced IT costs', 'Improved uptime', 'Expert support', 'Proactive maintenance'],
      link: 'https://ziontechgroup.com/managed-it'
    },
    {
      id: 7,
      title: 'Web Development & Applications',
      description: 'Custom web applications and websites built with modern technologies, responsive design, and security best practices.',
      icon: Globe,
      category: 'Development',
      features: [
        'Custom web application development',
        'Responsive and mobile-first design',
        'E-commerce and online store solutions',
        'API development and integration',
        'Performance optimization and SEO',
        'Security implementation and testing',
        'Content management systems',
        'Third-party integrations'
      ],
      price: 'Starting at $5,000/project',
      marketPrice: '$8000-50000/project',
      benefits: ['Modern technology stack', 'Mobile-responsive design', 'SEO optimization', 'Security best practices'],
      link: 'https://ziontechgroup.com/web-development'
    },
    {
      id: 8,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX and performance optimization.',
      icon: Smartphone,
      category: 'Development',
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'UI/UX design and optimization',
        'App store optimization and publishing',
        'Push notifications and analytics',
        'Offline capabilities and sync',
        'Backend integration and APIs',
        'Maintenance and updates'
      ],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-100000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'Modern UI/UX', 'App store optimization'],
      link: 'https://ziontechgroup.com/mobile-development'
    },
    {
      id: 9,
      title: 'Data Analytics & Business Intelligence',
      description: 'Business intelligence solutions with data visualization, reporting, analytics, and predictive insights.',
      icon: BarChart3,
      category: 'Analytics',
      features: [
        'Data visualization and dashboards',
        'Business intelligence and reporting',
        'Custom analytics solutions',
        'Data warehousing and ETL',
        'Predictive analytics and forecasting',
        'Real-time reporting and alerts',
        'Data integration and migration',
        'Advanced analytics and machine learning'
      ],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-15000/month',
      benefits: ['Data-driven insights', 'Custom dashboards', 'Automated reporting', 'Predictive analytics'],
      link: 'https://ziontechgroup.com/data-analytics'
    },
    {
      id: 10,
      title: 'Network Solutions & Security',
      description: 'Complete network design, implementation, and management including LAN, WAN, wireless, and security solutions.',
      icon: Network,
      category: 'Networking',
      features: [
        'Network design and implementation',
        'Wireless solutions and optimization',
        'VPN setup and management',
        'Network security and firewalls',
        'Performance monitoring and optimization',
        'Network troubleshooting and support',
        'Load balancing and traffic management',
        'Network documentation and maintenance'
      ],
      price: 'Starting at $1,000/month',
      marketPrice: '$1500-6000/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Performance optimization', 'Expert management'],
      link: 'https://ziontechgroup.com/network-solutions'
    },
    {
      id: 11,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to help plan, implement, and optimize your technology infrastructure and digital transformation.',
      icon: Users,
      category: 'Consulting',
      features: [
        'IT strategy and roadmap planning',
        'Technology assessment and evaluation',
        'Digital transformation consulting',
        'Vendor evaluation and management',
        'Project management and oversight',
        'Change management and training',
        'Cost analysis and optimization',
        'Technology risk assessment'
      ],
      price: 'Starting at $200/hour',
      marketPrice: '$300-500/hour',
      benefits: ['Strategic guidance', 'Technology expertise', 'Cost optimization', 'Digital transformation'],
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      id: 12,
      title: 'Process Automation & RPA',
      description: 'Workflow automation solutions to streamline business processes, improve efficiency, and reduce manual tasks.',
      icon: Zap,
      category: 'Automation',
      features: [
        'Workflow automation and optimization',
        'Robotic Process Automation (RPA)',
        'Integration solutions and APIs',
        'Document management and processing',
        'Task automation and scheduling',
        'Performance monitoring and analytics',
        'Exception handling and escalation',
        'Custom automation development'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Improved efficiency', 'Reduced errors', 'Cost savings', 'Scalable automation'],
      link: 'https://ziontechgroup.com/process-automation'
    }
  ];

  const categories = ['all', 'Cloud', 'Security', 'DevOps', 'Database', 'Infrastructure', 'Support', 'Development', 'Analytics', 'Networking', 'Consulting', 'Automation'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: Server, value: '500+', label: 'Servers Managed' },
    { icon: Shield, value: '99.9%', label: 'Security Uptime' },
    { icon: Users, value: '200+', label: 'Clients Served' },
    { icon: Zap, value: '50%', label: 'Cost Reduction' }
  ];

  const benefits = [
    '24/7 expert support and monitoring',
    'Proactive maintenance and updates',
    'Scalable and flexible solutions',
    'Cost-effective technology solutions',
    'Security and compliance assurance',
    'Rapid deployment and implementation'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, infrastructure management, DevOps, and more. Expert IT support and consulting for modern businesses." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, database management, web development" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we deliver enterprise-grade technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
              <a href="tel:+13024640950" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
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
                    <stat.icon className="w-8 h-8 text-cyan-400" />
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
                      {category === 'all' ? 'All Categories' : category}
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
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your business needs and drive growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">Category: </span>
                    <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">Our Price:</span>
                      <span className="text-white font-bold">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Market Price:</span>
                      <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <a 
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-cyan-400 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                  <p className="text-gray-300">Our comprehensive IT services ensure your technology infrastructure is secure, efficient, and scalable.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our IT experts to discuss your requirements and get a customized solution that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </React.Fragment>
  );
};

export default ItServicesPage;