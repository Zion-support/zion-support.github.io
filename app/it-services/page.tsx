'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Settings, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Calendar, 
  CheckSquare, 
  FileText,
  Mail,
  Phone,
  MapPin,
  Filter,
  Search,
  Server,
  Network,
  Monitor,
  HardDrive,
  Wifi,
  Cpu,
  Layers,
  Bot,
  Sparkles,
  Wrench,
  AlertTriangle
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const itServices = [
    // Infrastructure & Cloud Services
    {
      id: 1,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee and 24/7 monitoring',
      category: 'Infrastructure',
      price: '$1,299/month',
      duration: 'Ongoing',
      features: [
        '99.9% Uptime SLA with financial guarantees',
        '24/7 monitoring and proactive maintenance',
        'Auto-scaling and load balancing',
        'Cost optimization and resource management',
        'Security management and compliance',
        'Disaster recovery and backup solutions',
        'Multi-cloud support (AWS, Azure, GCP)',
        'Performance optimization and tuning',
        'Migration and modernization services',
        'Dedicated account management'
      ],
      icon: Cloud,
      popular: true,
      rating: 4.9,
      clients: '500+',
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      id: 2,
      title: 'Network Security Solutions',
      description: 'Advanced network security with firewall management, intrusion detection, and threat prevention',
      category: 'Security',
      price: '$599/month',
      duration: 'Ongoing',
      features: [
        'Firewall management and configuration',
        'Intrusion detection and prevention systems',
        'Threat intelligence and monitoring',
        'VPN solutions and remote access',
        'Network segmentation and access control',
        'Security policy management',
        'Incident response and forensics',
        'Compliance reporting and auditing',
        'Penetration testing and vulnerability assessments',
        '24/7 security operations center'
      ],
      icon: Shield,
      popular: true,
      rating: 4.8,
      clients: '350+',
      link: 'https://ziontechgroup.com/network-security'
    },
    {
      id: 3,
      title: 'IT Support & Help Desk',
      description: 'Comprehensive IT support with 24/7 help desk, remote assistance, and proactive monitoring',
      category: 'Support',
      price: '$199/month',
      duration: 'Ongoing',
      features: [
        '24/7 help desk and technical support',
        'Remote desktop assistance and troubleshooting',
        'Hardware and software installation',
        'User account management and permissions',
        'Email and communication system support',
        'Printer and peripheral device management',
        'Software licensing and updates',
        'Proactive system monitoring',
        'Knowledge base and documentation',
        'SLA-based response times'
      ],
      icon: Users,
      popular: true,
      rating: 4.9,
      clients: '800+',
      link: 'https://ziontechgroup.com/it-support'
    },
    {
      id: 4,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions with automated backups and instant recovery',
      category: 'Data Management',
      price: '$199/month',
      duration: 'Ongoing',
      features: [
        'Automated daily backups with encryption',
        'Instant recovery with RTO < 15 minutes',
        'Disaster recovery planning and testing',
        'Data encryption and security',
        'Compliance and audit trail reporting',
        'Cloud and on-premises backup options',
        'Point-in-time recovery capabilities',
        'Backup monitoring and alerting',
        'Data migration and archival services',
        '24/7 backup monitoring and support'
      ],
      icon: HardDrive,
      popular: false,
      rating: 4.7,
      clients: '400+',
      link: 'https://ziontechgroup.com/data-backup'
    },
    {
      id: 5,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to optimize your technology infrastructure and digital transformation',
      category: 'Consulting',
      price: '$299/hour',
      duration: 'Project-based',
      features: [
        'Technology assessment and audit',
        'IT strategy development and planning',
        'Digital transformation roadmaps',
        'Cost optimization and budget planning',
        'Vendor evaluation and selection',
        'Technology architecture design',
        'Change management and training',
        'Compliance and regulatory guidance',
        'Performance optimization recommendations',
        'Ongoing advisory and support'
      ],
      icon: Brain,
      popular: true,
      rating: 4.8,
      clients: '200+',
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      id: 6,
      title: 'Cybersecurity Services',
      description: 'Comprehensive cybersecurity solutions including threat detection, incident response, and compliance',
      category: 'Security',
      price: '$799/month',
      duration: 'Ongoing',
      features: [
        'Security assessment and vulnerability scanning',
        'Penetration testing and ethical hacking',
        'Security monitoring and threat detection',
        'Incident response and forensics',
        'Compliance management (SOC2, GDPR, HIPAA)',
        'Security awareness training programs',
        'Dark web monitoring and breach detection',
        'Security policy development and implementation',
        'Regular security audits and reporting',
        '24/7 security operations center'
      ],
      icon: Lock,
      popular: true,
      rating: 4.9,
      clients: '300+',
      link: 'https://ziontechgroup.com/cybersecurity'
    },
    {
      id: 7,
      title: 'Server Management & Maintenance',
      description: 'Complete server management including setup, monitoring, maintenance, and optimization',
      category: 'Infrastructure',
      price: '$399/month',
      duration: 'Ongoing',
      features: [
        'Server setup and configuration',
        'Operating system management and updates',
        'Performance monitoring and optimization',
        'Security hardening and patching',
        'Backup and disaster recovery',
        'Capacity planning and scaling',
        'Hardware maintenance and replacement',
        'Remote management and monitoring',
        'Documentation and change management',
        '24/7 server monitoring and support'
      ],
      icon: Server,
      popular: false,
      rating: 4.6,
      clients: '250+',
      link: 'https://ziontechgroup.com/server-management'
    },
    {
      id: 8,
      title: 'Network Design & Implementation',
      description: 'Custom network design and implementation for optimal performance and security',
      category: 'Infrastructure',
      price: '$5,000 - $50,000',
      duration: '2-8 weeks',
      features: [
        'Network architecture design and planning',
        'Wired and wireless network implementation',
        'Network security and access control',
        'VLAN and network segmentation',
        'Quality of Service (QoS) configuration',
        'Network monitoring and management',
        'Documentation and training',
        'Performance testing and optimization',
        'Migration and upgrade services',
        'Ongoing support and maintenance'
      ],
      icon: Network,
      popular: false,
      rating: 4.7,
      clients: '150+',
      link: 'https://ziontechgroup.com/network-design'
    },
    {
      id: 9,
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with inventory tracking, maintenance scheduling, and cost optimization',
      category: 'Management',
      price: '$149/month',
      duration: 'Ongoing',
      features: [
        'IT asset inventory and tracking',
        'Software license management',
        'Hardware lifecycle management',
        'Maintenance scheduling and tracking',
        'Cost optimization and budgeting',
        'Depreciation tracking and reporting',
        'Vendor management and procurement',
        'Asset disposal and recycling',
        'Compliance and audit reporting',
        'Custom reporting and analytics'
      ],
      icon: Settings,
      popular: false,
      rating: 4.5,
      clients: '180+',
      link: 'https://ziontechgroup.com/it-asset-management'
    },
    {
      id: 10,
      title: 'Website Hosting & Maintenance',
      description: 'Reliable website hosting with SSL certificates, CDN, and regular maintenance for optimal performance',
      category: 'Web Services',
      price: '$49/month',
      duration: 'Ongoing',
      features: [
        '99.9% uptime guarantee',
        'SSL certificates and security',
        'CDN integration for fast loading',
        'Regular updates and maintenance',
        'Performance monitoring and optimization',
        'Backup and disaster recovery',
        'Domain management and DNS',
        'Email hosting and management',
        'Technical support and assistance',
        'Scalable hosting solutions'
      ],
      icon: Globe,
      popular: true,
      rating: 4.8,
      clients: '600+',
      link: 'https://ziontechgroup.com/website-hosting'
    },
    {
      id: 11,
      title: 'Mobile Device Management',
      description: 'Enterprise mobile device management with security policies, app management, and remote control',
      category: 'Mobile',
      price: '$99/month',
      duration: 'Ongoing',
      features: [
        'Mobile device enrollment and provisioning',
        'Security policy enforcement',
        'App management and distribution',
        'Remote device control and wiping',
        'Compliance monitoring and reporting',
        'Device inventory and tracking',
        'User access management',
        'Data encryption and protection',
        'Integration with existing systems',
        '24/7 support and monitoring'
      ],
      icon: Smartphone,
      popular: false,
      rating: 4.6,
      clients: '220+',
      link: 'https://ziontechgroup.com/mobile-device-management'
    },
    {
      id: 12,
      title: 'Database Management',
      description: 'Database design, optimization, and management for optimal performance and reliability',
      category: 'Data Management',
      price: '$399/month',
      duration: 'Ongoing',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and recovery management',
        'Security and access control',
        'Migration and upgrade services',
        'Monitoring and alerting',
        'Capacity planning and scaling',
        'Query optimization and indexing',
        'Disaster recovery planning',
        '24/7 database support'
      ],
      icon: Database,
      popular: true,
      rating: 4.8,
      clients: '280+',
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      id: 13,
      title: 'IT Project Management',
      description: 'Professional IT project management with planning, execution, and delivery of technology initiatives',
      category: 'Project Management',
      price: '$399/month',
      duration: 'Project-based',
      features: [
        'Project planning and scheduling',
        'Resource management and allocation',
        'Timeline tracking and milestone management',
        'Risk assessment and mitigation',
        'Quality assurance and testing',
        'Stakeholder communication and reporting',
        'Budget management and cost control',
        'Change management and scope control',
        'Project documentation and handover',
        'Post-project evaluation and lessons learned'
      ],
      icon: Calendar,
      popular: false,
      rating: 4.7,
      clients: '160+',
      link: 'https://ziontechgroup.com/it-project-management'
    },
    {
      id: 14,
      title: 'Compliance & Audit Services',
      description: 'Ensure regulatory compliance with automated monitoring, audit trails, and compliance reporting',
      category: 'Compliance',
      price: '$399/month',
      duration: 'Ongoing',
      features: [
        'Regulatory compliance monitoring',
        'Audit trail management and reporting',
        'Compliance gap analysis and remediation',
        'Policy development and implementation',
        'Risk assessment and management',
        'Documentation and record keeping',
        'Training and awareness programs',
        'Third-party audit support',
        'Compliance reporting and dashboards',
        'Ongoing compliance monitoring'
      ],
      icon: CheckSquare,
      popular: false,
      rating: 4.6,
      clients: '140+',
      link: 'https://ziontechgroup.com/compliance-audit'
    },
    {
      id: 15,
      title: 'IT Performance Monitoring',
      description: 'Real-time IT performance monitoring with alerting, reporting, and optimization recommendations',
      category: 'Monitoring',
      price: '$299/month',
      duration: 'Ongoing',
      features: [
        'Real-time performance monitoring',
        'Alerting and notification systems',
        'Performance analytics and reporting',
        'Capacity planning and forecasting',
        'Trend analysis and optimization',
        'Custom dashboards and metrics',
        'Integration with existing tools',
        'Automated performance tuning',
        'Historical data analysis',
        '24/7 monitoring and support'
      ],
      icon: Monitor,
      popular: true,
      rating: 4.8,
      clients: '320+',
      link: 'https://ziontechgroup.com/it-performance-monitoring'
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services' },
    { id: 'Infrastructure', name: 'Infrastructure' },
    { id: 'Security', name: 'Security' },
    { id: 'Support', name: 'Support' },
    { id: 'Data Management', name: 'Data Management' },
    { id: 'Consulting', name: 'Consulting' },
    { id: 'Web Services', name: 'Web Services' },
    { id: 'Mobile', name: 'Mobile' },
    { id: 'Management', name: 'Management' },
    { id: 'Project Management', name: 'Project Management' },
    { id: 'Compliance', name: 'Compliance' },
    { id: 'Monitoring', name: 'Monitoring' }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC2, GDPR, and HIPAA compliance'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support with guaranteed response times'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Average 99.9% uptime with measurable performance improvements'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified IT professionals with 10+ years of experience'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : itServices.filter(service => 
        service.category === selectedCategory && (
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services | Zion Tech Group - Comprehensive IT Solutions & Support</title>
        <meta name="description" content="Complete IT services including cloud infrastructure, cybersecurity, IT support, data management, and consulting. 24/7 support with 99.9% uptime guarantee." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, IT support, data management, IT consulting, network security, server management" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive <span className="text-cyan-400">IT Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete IT solutions and support services to keep your business running smoothly. 
            From infrastructure to security, we've got you covered with 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call: (302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our IT Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-slate-800">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              {selectedCategory === 'all' ? 'All IT Services' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-300">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 relative ${
                service.popular
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {service.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {service.clients}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-6">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 5 && (
                    <li className="text-gray-400 text-sm">
                      +{service.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 text-center block ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                    }`}
                  >
                    Get Quote
                  </a>
                  <a
                    href="/contact"
                    className="w-full py-2 px-6 rounded-lg font-medium text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT services can help improve your technology infrastructure, 
              security, and operational efficiency. Contact us today for a free assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Get Free Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 text-sm mb-2">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </p>
              <p className="text-gray-300 text-sm">
                ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;