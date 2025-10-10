'use client'import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';
const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop a comprehensive AI roadmap.',
      features: ['AI readiness assessment', 'Strategic planning', 'Technology selection', 'Implementation roadmap']
    },
    {
      icon: Zap,
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models tailored to your specific business needs and data.',
      features: ['Custom ML models', 'Data preprocessing', 'Model training', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support and proactive monitoring.',
      features: ['24/7 Support', 'Proactive Monitoring', 'Help Desk', 'Security Management', 'Backup Solutions'],
      price: 'Starting at $999/month',
      category: 'IT Services'
    },
    {
      icon: BarChart3,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes.',
      features: ['Technology Assessment', 'Strategic Planning', 'Cost Optimization', 'Digital Transformation', 'Training'],
      price: 'Starting at $299/hour',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee and 24/7 monitoring.',
      features: ['99.9% Uptime SLA', '24/7 Monitoring', 'Auto-scaling', 'Cost Optimization', 'Security Management'],
      price: 'Starting at $1,299/month',
      category: 'IT Services'
    },
    {
      icon: Shield,
      title: 'Network Security Solutions',
      description: 'Advanced network security with firewall management, intrusion detection, and threat prevention.',
      features: ['Firewall Management', 'Intrusion Detection', 'Threat Prevention', 'VPN Solutions', 'Network Monitoring'],
      price: 'Starting at $599/month',
      category: 'IT Services'
    },
    {
      icon: Database,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions with automated backups and instant recovery.',
      features: ['Automated Backups', 'Instant Recovery', 'Disaster Recovery', 'Data Encryption', 'Compliance'],
      price: 'Starting at $199/month',
      category: 'IT Services'
    },
    {
      icon: Settings,
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with inventory tracking, maintenance scheduling, and cost optimization.',
      features: ['Asset Tracking', 'Maintenance Scheduling', 'Cost Optimization', 'License Management', 'Depreciation Tracking'],
      price: 'Starting at $149/month',
      category: 'IT Services'
    },
    {
      icon: Globe,
      title: 'Website Hosting & Maintenance',
      description: 'Reliable website hosting with SSL certificates, CDN, and regular maintenance for optimal performance.',
      features: ['99.9% Uptime', 'SSL Certificates', 'CDN Integration', 'Regular Updates', 'Performance Monitoring'],
      price: 'Starting at $49/month',
      category: 'IT Services'
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Management',
      description: 'Enterprise mobile device management with security policies, app management, and remote control.',
      features: ['Device Security', 'App Management', 'Remote Control', 'Policy Enforcement', 'Data Protection'],
      price: 'Starting at $99/month',
      category: 'IT Services'
    },
    {
      icon: Shield,
      title: 'Compliance & Audit Services',
      description: 'Ensure regulatory compliance with automated monitoring, audit trails, and compliance reporting.',
      features: ['Regulatory Compliance', 'Audit Trails', 'Compliance Reporting', 'Risk Assessment', 'Documentation'],
      price: 'Starting at $399/month',
      category: 'IT Services'
    },
    {
      icon: BarChart3,
      title: 'IT Performance Monitoring',
      description: 'Real-time IT performance monitoring with alerting, reporting, and optimization recommendations.',
      features: ['Real-time Monitoring', 'Performance Alerts', 'Optimization Recommendations', 'Capacity Planning', 'Trend Analysis'],
      price: 'Starting at $299/month',
      category: 'IT Services'
    },
    {
      icon: Users,
      title: 'IT Training & Support',
      description: 'Comprehensive IT training programs and ongoing support for your team and end users.',
      features: ['Custom Training Programs', 'End-user Support', 'Technical Documentation', 'Video Tutorials', 'Certification'],
      price: 'Starting at $199/month',
      category: 'IT Services'
    },
    {
      icon: Settings,
      title: 'IT Project Management',
      description: 'Professional IT project management with planning, execution, and delivery of technology initiatives.',
      features: ['Project Planning', 'Resource Management', 'Timeline Tracking', 'Risk Management', 'Quality Assurance'],
      price: 'Starting at $399/month',
      category: 'IT Services'
    },
    {
      icon: Shield,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security vulnerability assessment with penetration testing and remediation guidance.',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Remediation Guidance', 'Security Reports', 'Follow-up Testing'],
      price: 'Starting at $1,999/assessment',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless hybrid cloud solutions combining on-premises and cloud infrastructure for optimal performance.',
      features: ['Hybrid Architecture', 'Data Synchronization', 'Workload Migration', 'Cost Optimization', 'Security Integration'],
      price: 'Starting at $1,599/month',
      category: 'IT Services'
    },
    {
      icon: Database,
      title: 'Data Migration Services',
      description: 'Secure and efficient data migration between systems with zero downtime and data integrity.',
      features: ['Zero Downtime', 'Data Integrity', 'Migration Planning', 'Testing & Validation', 'Rollback Capability'],
      price: 'Starting at $2,999/project',
      category: 'IT Services'
    },
    {
      icon: Globe,
      title: 'API Development & Integration',
      description: 'Custom API development and integration services for seamless data exchange between systems.',
      features: ['Custom API Development', 'System Integration', 'API Documentation', 'Testing & Validation', 'Performance Optimization'],
      price: 'Starting at $799/month',
      category: 'IT Services'
    },
    {
      icon: Settings,
      title: 'IT Governance & Strategy',
      description: 'Strategic IT governance and technology roadmap development for long-term business success.',
      features: ['IT Strategy Development', 'Technology Roadmaps', 'Governance Frameworks', 'Risk Management', 'Performance Metrics'],
      price: 'Starting at $499/month',
      category: 'IT Services'
    },
    // Micro SAAS Services
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      icon: Brain,
      category: 'ai',
      price: 'Starting at $1,500/month',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions with AWS, Azure, and GCP integration.',
      icon: Cloud,
      category: 'infrastructure',
      price: 'Starting at $999/month',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and data.',
      icon: Shield,
      category: 'security',
      price: 'Starting at $799/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']
    },
    {
      id: 4,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      icon: Code,
      category: 'development',
      price: 'Starting at $2,000/month',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      id: 5,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      icon: BarChart,
      category: 'analytics',
      price: 'Starting at $1,299/month',
      features: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting']
    },
    {
      id: 6,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make the right technology decisions.',
      icon: Users,
      category: 'consulting',
      price: '$299/hour',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training']
    }
  ];
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'security', name: 'Security' },
    { id: 'development', name: 'Development' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'consulting', name: 'Consulting' }
  ];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const servicesPerPage = 12;
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);
  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);
  return (
    <React.Fragment>
      <Helmet>
        <title>Our Services | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services. From AI solutions to cloud infrastructure, we provide cutting-edge technology services for your business." />
        <meta name="keywords" content="AI services, IT services, cloud solutions, cybersecurity, custom development, data analytics, IT consulting" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
  </
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
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
                      placeholder="Search services..."
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
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Services' : `${selectedCategory}`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
  </
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
  </
                  )}
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
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
  </
                      )}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300">Contact for custom pricing</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More;
  </
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
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
                  Previous
  </
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
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
                  Next
  </
              </div>
            )}
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Robust IT infrastructure and services to support your business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help transform your business. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
export default ServicesPage;
  </button>
  </button>
  </button>
  </button>
  </button>
  </li>
  </span>
  </h1>
  </div>
