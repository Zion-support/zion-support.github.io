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
      description: 'Complete cloud solutions including AWS, Azure, and GCP migration and management with 99.9% uptime',
      icon: Cloud,
      category: 'Cloud',
      price: 'Starting at $1,999/month',
      features: ['Cloud architecture design', 'Migration planning & execution', 'Cost optimization', 'Security compliance', '24/7 monitoring', 'Disaster recovery', 'Auto-scaling', 'Multi-cloud management']
    },
    {
      id: 2,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated development workflows and deployment pipelines for faster delivery with 50% faster deployments',
      icon: Settings,
      category: 'DevOps',
      price: 'Starting at $2,499/month',
      features: ['CI/CD pipeline setup', 'Container orchestration', 'Infrastructure as Code', 'Automated testing', 'Deployment automation', 'Performance monitoring', 'GitOps workflows', 'Security scanning']
    },
    {
      id: 3,
      title: 'Database Management',
      description: 'Comprehensive database services including design, optimization, and maintenance with 99.9% availability',
      icon: Database,
      category: 'Database',
      price: 'Starting at $1,299/month',
      features: ['Database design & architecture', 'Performance optimization', 'Backup & recovery', 'Security hardening', 'Migration services', '24/7 support', 'Real-time monitoring', 'Automated scaling']
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance with real-time threat detection',
      icon: Shield,
      category: 'Security',
      price: 'Starting at $2,999/month',
      features: ['Security assessment', 'Threat detection', 'Vulnerability management', 'Compliance auditing', 'Incident response', 'Security training', 'Penetration testing', 'Security awareness programs']
    },
    {
      id: 5,
      title: 'Managed IT Services',
      description: 'Complete IT management including helpdesk, monitoring, and maintenance with proactive support',
      icon: Settings,
      category: 'Managed',
      price: 'Starting at $1,799/month',
      features: ['24/7 helpdesk support', 'Proactive monitoring', 'Patch management', 'Asset management', 'User training', 'Vendor management', 'Remote support', 'IT documentation']
    },
    {
      id: 6,
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting to align technology with business objectives and digital transformation',
      icon: Globe,
      category: 'Consulting',
      price: 'Starting at $1,199/month',
      features: ['Technology roadmap', 'Vendor evaluation', 'Cost analysis', 'Digital transformation', 'Change management', 'Training programs', 'IT governance', 'Risk assessment']
    },
    {
      id: 7,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design',
      icon: Smartphone,
      category: 'Development',
      price: 'Starting at $5,999/project',
      features: ['Native iOS/Android apps', 'Cross-platform development', 'UI/UX design', 'API integration', 'App store deployment', 'Maintenance & updates', 'Performance optimization', 'Security implementation']
    },
    {
      id: 8,
      title: 'Web Application Development',
      description: 'Custom web applications and e-commerce solutions built with modern technologies and best practices',
      icon: Globe,
      category: 'Development',
      price: 'Starting at $4,999/project',
      features: ['Custom web applications', 'E-commerce solutions', 'API development', 'Responsive design', 'Performance optimization', 'SEO optimization', 'Security implementation', 'Third-party integrations']
    },
    {
      id: 9,
      title: 'AI Cloud Optimization',
      description: 'Optimize your cloud infrastructure with AI-powered management and cost reduction',
      icon: Cloud,
      category: 'Cloud',
      price: 'Starting at $1,499/month',
      features: ['AI-powered cost optimization', 'Automated resource scaling', 'Performance monitoring', 'Multi-cloud management', 'Security compliance', 'Automated backup', 'Real-time cost tracking', 'Custom optimization recommendations']
    },
    {
      id: 10,
      title: 'API Development & Management',
      description: 'Comprehensive API development, management, and integration services for modern applications',
      icon: Code,
      category: 'Development',
      price: 'Starting at $1,999/month',
      features: ['RESTful API development', 'GraphQL APIs', 'API gateway setup', 'Rate limiting', 'Authentication & authorization', 'API documentation', 'Testing & monitoring', 'Version management']
    },
    {
      id: 11,
      title: 'Network Solutions',
      description: 'Advanced networking solutions including SD-WAN, VPN, and network security implementation',
      icon: Globe,
      category: 'Network',
      price: 'Starting at $1,599/month',
      features: ['SD-WAN implementation', 'VPN setup & management', 'Network security', 'Load balancing', 'Network monitoring', 'Bandwidth optimization', 'Disaster recovery', 'Remote access solutions']
    },
    {
      id: 12,
      title: 'System Integration',
      description: 'Seamless integration of disparate systems and applications for improved efficiency',
      icon: Settings,
      category: 'Integration',
      price: 'Starting at $2,299/month',
      features: ['Legacy system integration', 'API integration', 'Data synchronization', 'Workflow automation', 'Real-time data processing', 'Error handling', 'Monitoring & alerting', 'Custom connectors']
    }
  ];

  const categories = ['all', 'Cloud', 'DevOps', 'Database', 'Security', 'Managed', 'Consulting', 'Development', 'Network', 'Integration'];

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