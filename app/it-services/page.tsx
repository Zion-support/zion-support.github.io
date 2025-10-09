'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle, Zap, Brain, Shield, Clock, Users, TrendingUp, BarChart, Globe, Smartphone, Mail, FileText, Image, Video, Music, Code, Database, Cloud, Lock, Target, PieChart, Settings, Rocket, Award, DollarSign, Calendar, MessageSquare, Search, Filter, Download, Upload, Share, Eye, Edit, Trash, Plus, Minus, Refresh, Play, Pause, Stop, Volume2, VolumeX, Wifi, WifiOff, Battery, BatteryLow, Signal, SignalHigh, SignalLow, Wifi2, WifiOff2, Battery2, BatteryLow2, Signal2, SignalHigh2, SignalLow2, Server, Network, HardDrive, Cpu, MemoryStick, Monitor, Printer, Router, Switch, Key, Settings2, Wrench, Cog, Tool, Hammer, Screwdriver, Wrench2, Tool2, Hammer2, Screwdriver2 } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const itServices = [
    // Infrastructure Services
    {
      id: 'cloud-migration',
      name: 'Cloud Migration & Setup',
      description: 'Complete cloud infrastructure migration with zero downtime, cost optimization, and security enhancement.',
      category: 'infrastructure',
      icon: <Cloud className="w-8 h-8" />,
      price: 15000,
      period: 'project',
      features: [
        'Zero Downtime Migration',
        'Cost Optimization',
        'Security Enhancement',
        'Performance Tuning',
        'Disaster Recovery',
        'Monitoring Setup',
        'Team Training',
        '24/7 Support'
      ],
      benefits: [
        '50% Cost Reduction',
        '99.9% Uptime',
        'Enhanced Security',
        'Scalable Infrastructure'
      ],
      popular: true,
      rating: 4.9,
      clients: '300+',
      link: 'https://ziontechgroup.com/cloud-migration'
    },
    {
      id: 'server-management',
      name: 'Server Management & Monitoring',
      description: 'Comprehensive server administration, monitoring, and maintenance services for optimal performance.',
      category: 'infrastructure',
      icon: <Server className="w-8 h-8" />,
      price: 2000,
      period: 'month',
      features: [
        '24/7 Server Monitoring',
        'Performance Optimization',
        'Security Hardening',
        'Backup Management',
        'Patch Management',
        'Capacity Planning',
        'Incident Response',
        'Health Reports'
      ],
      benefits: [
        '99.9% Uptime Guarantee',
        'Proactive Monitoring',
        'Reduced Downtime',
        'Cost Optimization'
      ],
      popular: true,
      rating: 4.8,
      clients: '500+',
      link: 'https://ziontechgroup.com/server-management'
    },
    {
      id: 'network-setup',
      name: 'Network Design & Setup',
      description: 'Enterprise-grade network infrastructure design, implementation, and optimization for maximum performance.',
      category: 'infrastructure',
      icon: <Network className="w-8 h-8" />,
      price: 8000,
      period: 'project',
      features: [
        'Network Architecture Design',
        'Hardware Installation',
        'Security Configuration',
        'Performance Optimization',
        'Wireless Setup',
        'VPN Configuration',
        'Monitoring Setup',
        'Documentation'
      ],
      benefits: [
        'High-Speed Connectivity',
        'Enhanced Security',
        'Scalable Design',
        'Reliable Performance'
      ],
      popular: false,
      rating: 4.7,
      clients: '200+',
      link: 'https://ziontechgroup.com/network-setup'
    },
    {
      id: 'data-center-services',
      name: 'Data Center Services',
      description: 'Complete data center solutions including colocation, managed hosting, and disaster recovery services.',
      category: 'infrastructure',
      icon: <Database className="w-8 h-8" />,
      price: 5000,
      period: 'month',
      features: [
        'Colocation Services',
        'Managed Hosting',
        'Disaster Recovery',
        'Backup Solutions',
        'Power Management',
        'Cooling Systems',
        'Physical Security',
        '24/7 Support'
      ],
      benefits: [
        'Enterprise Reliability',
        'Cost-Effective Solutions',
        'Disaster Recovery',
        'Scalable Infrastructure'
      ],
      popular: false,
      rating: 4.8,
      clients: '150+',
      link: 'https://ziontechgroup.com/data-center-services'
    },

    // Security Services
    {
      id: 'cybersecurity-audit',
      name: 'Cybersecurity Audit & Assessment',
      description: 'Comprehensive security assessment, vulnerability testing, and compliance auditing for enterprise systems.',
      category: 'security',
      icon: <Shield className="w-8 h-8" />,
      price: 10000,
      period: 'project',
      features: [
        'Vulnerability Assessment',
        'Penetration Testing',
        'Compliance Auditing',
        'Security Policy Review',
        'Risk Assessment',
        'Remediation Planning',
        'Staff Training',
        'Follow-up Support'
      ],
      benefits: [
        'Enhanced Security Posture',
        'Compliance Assurance',
        'Risk Mitigation',
        'Expert Recommendations'
      ],
      popular: true,
      rating: 4.9,
      clients: '250+',
      link: 'https://ziontechgroup.com/cybersecurity-audit'
    },
    {
      id: 'managed-security',
      name: 'Managed Security Services',
      description: '24/7 security monitoring, threat detection, and incident response services for comprehensive protection.',
      category: 'security',
      icon: <Lock className="w-8 h-8" />,
      price: 3000,
      period: 'month',
      features: [
        '24/7 Security Monitoring',
        'Threat Detection & Response',
        'Incident Management',
        'Security Analytics',
        'Compliance Monitoring',
        'Vulnerability Management',
        'Security Training',
        'Regular Reporting'
      ],
      benefits: [
        'Proactive Protection',
        'Rapid Response',
        'Expert Security Team',
        'Compliance Support'
      ],
      popular: true,
      rating: 4.8,
      clients: '400+',
      link: 'https://ziontechgroup.com/managed-security'
    },
    {
      id: 'firewall-management',
      name: 'Firewall & Network Security',
      description: 'Advanced firewall configuration, network security policies, and intrusion prevention systems.',
      category: 'security',
      icon: <Shield className="w-8 h-8" />,
      price: 1500,
      period: 'month',
      features: [
        'Firewall Configuration',
        'Intrusion Prevention',
        'Network Segmentation',
        'VPN Management',
        'Traffic Analysis',
        'Security Policies',
        'Regular Updates',
        'Monitoring & Alerts'
      ],
      benefits: [
        'Enhanced Network Security',
        'Threat Prevention',
        'Compliance Support',
        'Expert Management'
      ],
      popular: false,
      rating: 4.7,
      clients: '300+',
      link: 'https://ziontechgroup.com/firewall-management'
    },

    // Development Services
    {
      id: 'custom-software',
      name: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your business needs with modern technologies and best practices.',
      category: 'development',
      icon: <Code className="w-8 h-8" />,
      price: 25000,
      period: 'project',
      features: [
        'Custom Application Development',
        'Web & Mobile Apps',
        'API Development',
        'Database Design',
        'UI/UX Design',
        'Testing & QA',
        'Deployment & Support',
        'Documentation'
      ],
      benefits: [
        'Tailored Solutions',
        'Modern Technology',
        'Scalable Architecture',
        'Ongoing Support'
      ],
      popular: true,
      rating: 4.8,
      clients: '200+',
      link: 'https://ziontechgroup.com/custom-software'
    },
    {
      id: 'api-development',
      name: 'API Development & Integration',
      description: 'RESTful and GraphQL API development with third-party integrations and comprehensive documentation.',
      category: 'development',
      icon: <Settings className="w-8 h-8" />,
      price: 12000,
      period: 'project',
      features: [
        'RESTful API Development',
        'GraphQL Implementation',
        'Third-party Integrations',
        'API Documentation',
        'Authentication & Security',
        'Rate Limiting',
        'Monitoring & Analytics',
        'Testing & Validation'
      ],
      benefits: [
        'Seamless Integration',
        'Comprehensive Documentation',
        'Secure & Scalable',
        'Developer Friendly'
      ],
      popular: false,
      rating: 4.7,
      clients: '180+',
      link: 'https://ziontechgroup.com/api-development'
    },
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      description: 'Database design, optimization, migration, and maintenance services for optimal performance.',
      category: 'development',
      icon: <Database className="w-8 h-8" />,
      price: 5000,
      period: 'month',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration',
        'Backup & Recovery',
        'Security Hardening',
        'Monitoring & Tuning',
        'Capacity Planning',
        '24/7 Support'
      ],
      benefits: [
        'Optimized Performance',
        'Data Security',
        'Reliable Backup',
        'Expert Management'
      ],
      popular: false,
      rating: 4.8,
      clients: '220+',
      link: 'https://ziontechgroup.com/database-management'
    },

    // Support Services
    {
      id: 'helpdesk-support',
      name: '24/7 Help Desk Support',
      description: 'Comprehensive IT support services with rapid response times and expert technical assistance.',
      category: 'support',
      icon: <MessageSquare className="w-8 h-8" />,
      price: 1500,
      period: 'month',
      features: [
        '24/7 Technical Support',
        'Remote Assistance',
        'Hardware Support',
        'Software Troubleshooting',
        'Network Issues',
        'Email & Communication',
        'User Training',
        'Incident Management'
      ],
      benefits: [
        'Rapid Response',
        'Expert Support',
        'Reduced Downtime',
        'User Satisfaction'
      ],
      popular: true,
      rating: 4.9,
      clients: '600+',
      link: 'https://ziontechgroup.com/helpdesk-support'
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy Consulting',
      description: 'Strategic IT planning, technology assessment, and digital transformation consulting services.',
      category: 'support',
      icon: <BarChart className="w-8 h-8" />,
      price: 3000,
      period: 'month',
      features: [
        'IT Strategy Development',
        'Technology Assessment',
        'Digital Transformation',
        'Process Optimization',
        'Vendor Management',
        'Budget Planning',
        'Risk Assessment',
        'Implementation Support'
      ],
      benefits: [
        'Strategic Alignment',
        'Cost Optimization',
        'Technology Roadmap',
        'Expert Guidance'
      ],
      popular: false,
      rating: 4.8,
      clients: '100+',
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      id: 'backup-recovery',
      name: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',
      category: 'support',
      icon: <HardDrive className="w-8 h-8" />,
      price: 2000,
      period: 'month',
      features: [
        'Automated Backup Solutions',
        'Disaster Recovery Planning',
        'Data Encryption',
        'Offsite Storage',
        'Recovery Testing',
        'Compliance Support',
        'Monitoring & Alerts',
        'Rapid Recovery'
      ],
      benefits: [
        'Data Protection',
        'Business Continuity',
        'Compliance Ready',
        'Peace of Mind'
      ],
      popular: false,
      rating: 4.7,
      clients: '350+',
      link: 'https://ziontechgroup.com/backup-recovery'
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services', count: itServices.length },
    { id: 'infrastructure', name: 'Infrastructure', count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'security', name: 'Security', count: itServices.filter(s => s.category === 'security').length },
    { id: 'development', name: 'Development', count: itServices.filter(s => s.category === 'development').length },
    { id: 'support', name: 'Support', count: itServices.filter(s => s.category === 'support').length }
  ];

  const filteredServices = itServices.filter(service => 
    activeCategory === 'all' || service.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden cyber-grid-enhanced">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text neon-text">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Comprehensive Technology Solutions
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Complete IT infrastructure, security, development, and support services to keep your business running smoothly and securely.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`quantum-card p-6 rounded-lg hover:shadow-2xl transition-all duration-300 ${
                service.popular ? 'ring-2 ring-cyan-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-cyan-400">{service.icon}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                    <span className="text-sm text-gray-400">({service.clients})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-cyan-400">${service.price.toLocaleString()}</span>
                  <span className="text-gray-400">/{service.period}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-cyan-300">
                        <Zap className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center"
                  >
                    Get Quote
                  </a>
                  <button className="px-4 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT solutions with enterprise-grade security, reliability, and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Response</h3>
              <p className="text-gray-300">Average 15-minute response time for critical issues with 24/7 support availability.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance, encryption, and advanced threat protection.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">99.9% uptime guarantee with 50% average cost reduction for our clients.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300">Certified IT professionals with 10+ years of experience in enterprise solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our IT experts today for a free assessment and custom solution recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;