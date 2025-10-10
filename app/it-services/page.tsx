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
  Users,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    {
      id: 1,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP migration, optimization, and ongoing management services',
      icon: Cloud,
      category: 'Cloud',
      price: 'Starting at $2,500/month',
      features: ['Multi-cloud architecture design and implementation', 'Seamless migration planning and execution', 'Cost optimization and resource management', 'Security compliance and governance', '24/7 monitoring and support', 'Disaster recovery and backup solutions', 'Auto-scaling and load balancing', 'Cloud security and access management']
    },
    {
      id: 2,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated development workflows and deployment pipelines for faster, more reliable software delivery',
      icon: Settings,
      category: 'DevOps',
      price: 'Starting at $3,000/month',
      features: ['CI/CD pipeline setup and optimization', 'Container orchestration with Kubernetes', 'Infrastructure as Code (Terraform, CloudFormation)', 'Automated testing and quality assurance', 'Deployment automation and rollback strategies', 'Performance monitoring and alerting', 'GitOps and version control integration', 'Security scanning and compliance checks']
    },
    {
      id: 3,
      title: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, migration, and ongoing maintenance',
      icon: Database,
      category: 'Database',
      price: 'Starting at $1,800/month',
      features: ['Database design and architecture planning', 'Performance tuning and optimization', 'Backup and disaster recovery solutions', 'Security hardening and access control', 'Database migration and consolidation', '24/7 monitoring and support', 'Query optimization and indexing', 'Data warehousing and analytics setup']
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance with industry standards',
      icon: Shield,
      category: 'Security',
      price: 'Starting at $4,000/month',
      features: ['Comprehensive security assessment and auditing', 'Advanced threat detection and prevention', 'Vulnerability management and patching', 'Compliance auditing (SOC2, GDPR, HIPAA)', 'Incident response and forensics', 'Security training and awareness programs', 'Penetration testing and vulnerability scanning', 'Security policy development and implementation']
    },
    {
      id: 5,
      title: 'Managed IT Services',
      description: 'Complete IT management including helpdesk, monitoring, maintenance, and strategic technology planning',
      icon: Users,
      category: 'Managed',
      price: 'Starting at $2,200/month',
      features: ['24/7 helpdesk support and ticketing system', 'Proactive monitoring and maintenance', 'Patch management and software updates', 'Asset management and inventory tracking', 'User training and onboarding programs', 'Vendor management and procurement', 'IT strategy and roadmap development', 'Performance optimization and capacity planning']
    },
    {
      id: 6,
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting to align technology with business objectives and drive digital transformation',
      icon: Globe,
      category: 'Consulting',
      price: 'Starting at $1,500/month',
      features: ['Technology roadmap and strategic planning', 'Vendor evaluation and selection', 'Cost analysis and budget optimization', 'Digital transformation initiatives', 'Change management and adoption strategies', 'Training programs and knowledge transfer', 'Technology assessment and recommendations', 'IT governance and best practices']
    },
    {
      id: 7,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design',
      icon: Smartphone,
      category: 'Development',
      price: 'Starting at $8,000/project',
      features: ['Native iOS and Android development', 'Cross-platform development (React Native, Flutter)', 'UI/UX design and user experience optimization', 'API integration and backend connectivity', 'App store deployment and optimization', 'Maintenance, updates, and support', 'Performance optimization and testing', 'Security implementation and compliance']
    },
    {
      id: 8,
      title: 'Web Application Development',
      description: 'Custom web applications and e-commerce solutions built with modern technologies and best practices',
      icon: Globe,
      category: 'Development',
      price: 'Starting at $6,000/project',
      features: ['Custom web application development', 'E-commerce solutions and online stores', 'API development and integration', 'Responsive design and mobile optimization', 'Performance optimization and caching', 'SEO optimization and search engine visibility', 'Security implementation and testing', 'Content management system integration']
    },
    {
      id: 9,
      title: 'Network Infrastructure & Security',
      description: 'Comprehensive network design, implementation, and security solutions for modern businesses',
      icon: Globe,
      category: 'Networking',
      price: 'Starting at $3,500/month',
      features: ['Network design and architecture planning', 'Firewall configuration and management', 'VPN setup and remote access solutions', 'Network monitoring and performance optimization', 'Wireless network design and implementation', 'Network security and threat prevention', 'Load balancing and traffic management', 'Network documentation and maintenance']
    },
    {
      id: 10,
      title: 'Data Center Services',
      description: 'Complete data center solutions including design, implementation, and ongoing management services',
      icon: Server,
      category: 'Data Center',
      price: 'Starting at $5,000/month',
      features: ['Data center design and planning', 'Server hardware procurement and installation', 'Power and cooling system optimization', 'Physical security and access control', 'Backup and disaster recovery solutions', 'Environmental monitoring and management', 'Capacity planning and scaling', 'Compliance and certification support']
    },
    {
      id: 11,
      title: 'API Development & Management',
      description: 'Custom API development, integration, and management services with comprehensive documentation and monitoring',
      icon: Code,
      category: 'API',
      price: 'Starting at $2,400/month',
      features: ['Custom API development and design', 'Third-party API integration and management', 'API documentation and developer portals', 'Rate limiting and access control', 'API security and authentication', 'Performance monitoring and analytics', 'API versioning and lifecycle management', 'Testing and quality assurance']
    },
    {
      id: 12,
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services including helpdesk, technical support, and user assistance',
      icon: Users,
      category: 'Support',
      price: 'Starting at $1,200/month',
      features: ['24/7 technical support and helpdesk', 'Remote desktop support and troubleshooting', 'Software installation and configuration', 'Hardware setup and maintenance', 'User training and onboarding', 'Password reset and account management', 'Software licensing and compliance', 'Incident management and escalation']
    }
  ];

  const categories = ['all', 'Cloud', 'DevOps', 'Database', 'Security', 'Managed', 'Consulting', 'Development', 'Networking', 'Data Center', 'API', 'Support'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Projects Completed' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, infrastructure management, DevOps, and more. Expert IT support and consulting for modern businesses." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, database management, web development" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            IT Services
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              & Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services to support your business growth. From cloud migration to cybersecurity, we've got you covered.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
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
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="capitalize">
                    {category === 'all' ? 'All Services' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm">+{service.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-lg font-semibold text-cyan-400">{service.price}</div>
                </div>
                
                <div className="flex space-x-3">
                  <Link
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                  >
                    Get Quote
                  </Link>
                  <button className="flex-1 border border-cyan-500 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert team help you build a robust, scalable, and secure IT environment that supports your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;