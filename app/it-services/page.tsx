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
  Monitor,
  HardDrive,
  Wifi,
  Lock,
  Cpu,
  BarChart3,
  Users,
  Clock,
  Star
} from 'lucide-react';

interface ITService {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
}

const ITServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices: ITService[] = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee and 24/7 monitoring.',
      icon: Cloud,
      features: [
        '99.9% Uptime SLA',
        '24/7 Monitoring',
        'Auto-scaling',
        'Cost Optimization',
        'Security Management'
      ],
      price: 'Starting at $1,299/month',
      category: 'Infrastructure',
      popular: true
    },
    {
      id: 'network-security',
      title: 'Network Security Solutions',
      description: 'Advanced network security with firewall management, intrusion detection, and threat prevention.',
      icon: Shield,
      features: [
        'Firewall Management',
        'Intrusion Detection',
        'Threat Prevention',
        'VPN Solutions',
        'Network Monitoring'
      ],
      price: 'Starting at $599/month',
      category: 'Security',
      popular: true
    },
    {
      id: 'data-backup',
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions with automated backups and instant recovery.',
      icon: Database,
      features: [
        'Automated Backups',
        'Instant Recovery',
        'Disaster Recovery',
        'Data Encryption',
        'Compliance'
      ],
      price: 'Starting at $199/month',
      category: 'Data Management',
      popular: false
    },
    {
      id: 'it-asset-management',
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with inventory tracking, maintenance scheduling, and cost optimization.',
      icon: Settings,
      features: [
        'Asset Tracking',
        'Maintenance Scheduling',
        'Cost Optimization',
        'License Management',
        'Depreciation Tracking'
      ],
      price: 'Starting at $149/month',
      category: 'Management',
      popular: false
    },
    {
      id: 'website-hosting',
      title: 'Website Hosting & Maintenance',
      description: 'Reliable website hosting with SSL certificates, CDN, and regular maintenance for optimal performance.',
      icon: Globe,
      features: [
        '99.9% Uptime',
        'SSL Certificates',
        'CDN Integration',
        'Regular Updates',
        'Performance Monitoring'
      ],
      price: 'Starting at $49/month',
      category: 'Hosting',
      popular: false
    },
    {
      id: 'mobile-device-management',
      title: 'Mobile Device Management',
      description: 'Enterprise mobile device management with security policies, app management, and remote control.',
      icon: Smartphone,
      features: [
        'Device Security',
        'App Management',
        'Remote Control',
        'Policy Enforcement',
        'Data Protection'
      ],
      price: 'Starting at $99/month',
      category: 'Mobile',
      popular: false
    },
    {
      id: 'compliance-audit',
      title: 'Compliance & Audit Services',
      description: 'Ensure regulatory compliance with automated monitoring, audit trails, and compliance reporting.',
      icon: Lock,
      features: [
        'Regulatory Compliance',
        'Audit Trails',
        'Compliance Reporting',
        'Risk Assessment',
        'Documentation'
      ],
      price: 'Starting at $399/month',
      category: 'Compliance',
      popular: false
    },
    {
      id: 'performance-monitoring',
      title: 'IT Performance Monitoring',
      description: 'Real-time IT performance monitoring with alerting, reporting, and optimization recommendations.',
      icon: BarChart3,
      features: [
        'Real-time Monitoring',
        'Performance Alerts',
        'Optimization Recommendations',
        'Capacity Planning',
        'Trend Analysis'
      ],
      price: 'Starting at $299/month',
      category: 'Monitoring',
      popular: false
    },
    {
      id: 'it-training',
      title: 'IT Training & Support',
      description: 'Comprehensive IT training programs and ongoing support for your team and end users.',
      icon: Users,
      features: [
        'Custom Training Programs',
        'End-user Support',
        'Technical Documentation',
        'Video Tutorials',
        'Certification'
      ],
      price: 'Starting at $199/month',
      category: 'Training',
      popular: false
    },
    {
      id: 'project-management',
      title: 'IT Project Management',
      description: 'Professional IT project management with planning, execution, and delivery of technology initiatives.',
      icon: Cpu,
      features: [
        'Project Planning',
        'Resource Management',
        'Timeline Tracking',
        'Risk Management',
        'Quality Assurance'
      ],
      price: 'Starting at $399/month',
      category: 'Project Management',
      popular: false
    },
    {
      id: 'vulnerability-assessment',
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security vulnerability assessment with penetration testing and remediation guidance.',
      icon: Shield,
      features: [
        'Vulnerability Scanning',
        'Penetration Testing',
        'Remediation Guidance',
        'Security Reports',
        'Follow-up Testing'
      ],
      price: 'Starting at $1,999/assessment',
      category: 'Security',
      popular: false
    },
    {
      id: 'hybrid-cloud',
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless hybrid cloud solutions combining on-premises and cloud infrastructure for optimal performance.',
      icon: Cloud,
      features: [
        'Hybrid Architecture',
        'Data Synchronization',
        'Workload Migration',
        'Cost Optimization',
        'Security Integration'
      ],
      price: 'Starting at $1,599/month',
      category: 'Infrastructure',
      popular: false
    }
  ];

  const categories = ['all', 'Infrastructure', 'Security', 'Data Management', 'Management', 'Hosting', 'Mobile', 'Compliance', 'Monitoring', 'Training', 'Project Management'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: <Server className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Servers Managed' },
    { icon: <Shield className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '200+', label: 'Happy Clients' },
    { icon: <Clock className="w-8 h-8 text-orange-500" />, value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, network security, data backup, and IT management. Trusted by 200+ businesses." />
        <meta name="keywords" content="IT services, cloud infrastructure, network security, data backup, IT management, managed IT services" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional IT Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive IT solutions to keep your business running smoothly. From cloud infrastructure to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                to="/consultation"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-8 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our IT Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      <Star className="w-4 h-4 inline mr-1" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-gray-500">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">{service.price}</span>
                    <Link
                      to="/contact"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No services found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let our expert team help you build a robust, secure, and scalable IT environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
