'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Server, Shield, Cloud, Database, Code, Users, Globe, Smartphone, Wrench, Zap, BarChart3, Clock, DollarSign, TrendingUp, Headphones, Settings } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-migration',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to cloud platforms with zero downtime and optimized performance',
      features: [
        'AWS, Azure, and Google Cloud expertise',
        'Zero-downtime migration strategies',
        'Cost optimization and resource management',
        'Disaster recovery and backup solutions',
        'Multi-cloud and hybrid cloud architectures',
        'Security and compliance implementation',
        'Performance monitoring and optimization',
        '24/7 cloud infrastructure management'
      ],
      pricing: 'Starting at $2,500/month',
      marketPrice: '$5,000-25,000/month',
      category: 'Cloud Services',
      popular: true,
      deliverables: ['Migration Plan', 'Infrastructure Setup', 'Security Configuration', 'Monitoring Dashboard']
    },
    {
      id: 'cybersecurity',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets and ensure compliance',
      features: [
        'Security assessment and penetration testing',
        'Firewall and network security configuration',
        'Endpoint protection and antivirus management',
        'Security monitoring and incident response',
        'Compliance auditing (SOC2, GDPR, HIPAA)',
        'Security awareness training',
        'Vulnerability management and patching',
        '24/7 security operations center (SOC)'
      ],
      pricing: 'Starting at $1,500/month',
      marketPrice: '$3,000-15,000/month',
      category: 'Security',
      popular: true,
      deliverables: ['Security Audit Report', 'Implementation Plan', 'Monitoring Setup', 'Compliance Documentation']
    },
    {
      id: 'network-infrastructure',
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance',
      features: [
        'Network design and architecture planning',
        'Router, switch, and firewall configuration',
        'Wireless network setup and optimization',
        'VPN and remote access solutions',
        'Network monitoring and management',
        'Bandwidth optimization and QoS',
        'Network security implementation',
        'Disaster recovery and redundancy'
      ],
      pricing: 'Starting at $1,200/month',
      marketPrice: '$2,500-12,000/month',
      category: 'Infrastructure',
      popular: false,
      deliverables: ['Network Design', 'Hardware Configuration', 'Security Setup', 'Monitoring Tools']
    },
    {
      id: 'database-management',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Expert database administration, optimization, and maintenance services',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and recovery strategies',
        'Database security and access control',
        'Data migration and integration',
        'Monitoring and alerting systems',
        'Disaster recovery planning',
        'Database health checks and maintenance'
      ],
      pricing: 'Starting at $800/month',
      marketPrice: '$1,500-8,000/month',
      category: 'Data Management',
      popular: false,
      deliverables: ['Database Design', 'Performance Report', 'Backup Strategy', 'Security Configuration']
    },
    {
      id: 'devops-cicd',
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated deployment and continuous integration',
      features: [
        'CI/CD pipeline setup and optimization',
        'Container orchestration (Docker, Kubernetes)',
        'Infrastructure as Code (IaC) implementation',
        'Automated testing and quality assurance',
        'Deployment automation and rollback strategies',
        'Monitoring and logging solutions',
        'Environment management and provisioning',
        'Team training and best practices'
      ],
      pricing: 'Starting at $2,000/month',
      marketPrice: '$4,000-20,000/month',
      category: 'Development',
      popular: true,
      deliverables: ['Pipeline Setup', 'Automation Scripts', 'Monitoring Dashboard', 'Documentation']
    },
    {
      id: 'helpdesk-support',
      icon: <Headphones className="w-8 h-8 text-cyan-500" />,
      title: 'IT Helpdesk & Support',
      description: '24/7 technical support and helpdesk services for your organization',
      features: [
        '24/7 technical support and troubleshooting',
        'Remote desktop and system administration',
        'Software installation and updates',
        'Hardware maintenance and repairs',
        'User training and onboarding',
        'Ticket management and escalation',
        'Knowledge base and documentation',
        'SLA monitoring and reporting'
      ],
      pricing: 'Starting at $500/month',
      marketPrice: '$1,000-5,000/month',
      category: 'Support',
      popular: true,
      deliverables: ['Support Portal', 'Knowledge Base', 'SLA Reports', 'User Training Materials']
    },
    {
      id: 'mobile-app-development',
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design and prototyping',
        'App store optimization and deployment',
        'Backend API development and integration',
        'Push notifications and analytics',
        'App maintenance and updates',
        'Performance optimization and testing'
      ],
      pricing: 'Starting at $5,000/project',
      marketPrice: '$10,000-100,000/project',
      category: 'Development',
      popular: false,
      deliverables: ['Mobile App', 'Source Code', 'Documentation', 'App Store Submission']
    },
    {
      id: 'system-integration',
      icon: <Wrench className="w-8 h-8 text-yellow-500" />,
      title: 'System Integration',
      description: 'Connect and integrate disparate systems for seamless data flow and automation',
      features: [
        'API development and integration',
        'Legacy system modernization',
        'Data synchronization and ETL processes',
        'Third-party software integration',
        'Custom middleware development',
        'Real-time data processing',
        'System monitoring and maintenance',
        'Integration testing and validation'
      ],
      pricing: 'Starting at $3,000/month',
      marketPrice: '$6,000-30,000/month',
      category: 'Integration',
      popular: false,
      deliverables: ['Integration Architecture', 'Custom APIs', 'Data Flow Diagrams', 'Testing Reports']
    }
  ];

  const technologies = [
    {
      category: 'Cloud Platforms',
      items: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform', 'IBM Cloud', 'Oracle Cloud']
    },
    {
      category: 'Operating Systems',
      items: ['Windows Server', 'Linux (Ubuntu, CentOS, RHEL)', 'macOS', 'VMware vSphere', 'Hyper-V']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server', 'Oracle', 'MongoDB', 'Redis']
    },
    {
      category: 'Security Tools',
      items: ['Firewalls (Cisco, Fortinet)', 'Antivirus Solutions', 'SIEM Systems', 'VPN Solutions', 'Identity Management']
    },
    {
      category: 'Development',
      items: ['Docker & Kubernetes', 'Jenkins & GitLab CI', 'Terraform & Ansible', 'Python, Java, .NET', 'React & Angular']
    },
    {
      category: 'Monitoring',
      items: ['Nagios & Zabbix', 'Prometheus & Grafana', 'Splunk & ELK Stack', 'New Relic & Datadog', 'PagerDuty']
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Rapid Deployment',
      description: 'Get your IT infrastructure up and running quickly with our proven methodologies and expert team'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with comprehensive protection, compliance, and monitoring solutions'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'IT infrastructure that grows with your business, from startup to enterprise scale'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring, support, and maintenance to ensure maximum uptime'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      company: 'CTO, TechStart Inc.',
      content: 'Zion Tech Group migrated our entire infrastructure to AWS with zero downtime. Their expertise and attention to detail were exceptional.',
      rating: 5,
      service: 'Cloud Migration & Management'
    },
    {
      name: 'Jennifer Lee',
      company: 'IT Director, FinanceCorp',
      content: 'Their cybersecurity solutions helped us achieve SOC2 compliance and significantly improved our security posture. Highly recommended.',
      rating: 5,
      service: 'Cybersecurity Solutions'
    },
    {
      name: 'David Rodriguez',
      company: 'VP Engineering, DevTech',
      content: 'The DevOps implementation transformed our development workflow. We now deploy 10x faster with better quality and reliability.',
      rating: 5,
      service: 'DevOps & CI/CD'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Expert IT services including cloud migration, cybersecurity, network infrastructure, DevOps, and more. 24/7 support and enterprise-grade solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, network infrastructure, DevOps, database management, IT support" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Server className="w-4 h-4 mr-2" />
              Trusted IT Solutions Provider
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your technology infrastructure with our expert IT services. From cloud migration to cybersecurity, 
              we deliver enterprise-grade solutions that drive efficiency, security, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="#services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-gray-400">IT Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400">Certified Experts</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT solutions designed to meet your business requirements and drive digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      {service.icon}
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        <span className="text-sm text-green-300">{service.category}</span>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-yellow-400 text-sm font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <span key={deliverableIndex} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-lg font-bold text-white">{service.pricing}</div>
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expertise spans across the latest technologies and industry-standard tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver IT solutions that provide real business value and measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our IT services have transformed businesses across industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="mb-2">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-sm text-green-300">{testimonial.service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Let's discuss how our IT services can optimize your technology stack and drive business growth. 
                Get a free IT assessment and custom solution proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Assessment
                </Link>
                <Link
                  to="/ai-services"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;