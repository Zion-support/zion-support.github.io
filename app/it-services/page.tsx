'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp, Award, Shield as SecurityIcon } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery'],
      pricing: 'Starting at $1,200/month',
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      pricing: 'Starting at $1,800/month',
      popular: false
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database administration and optimization services.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
      pricing: 'Starting at $1,000/month',
      popular: false
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Complete system management and maintenance services.',
      features: ['Server Management', 'User Administration', 'System Monitoring', 'Updates & Patches'],
      pricing: 'Starting at $800/month',
      popular: true
    },
    {
      icon: Wifi,
      title: 'Network Solutions',
      description: 'Robust network infrastructure design and implementation.',
      features: ['Network Design', 'Wireless Solutions', 'VPN Setup', 'Network Security'],
      pricing: 'Starting at $1,500/month',
      popular: false
    },
    {
      icon: Code,
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes.',
      features: ['CI/CD Pipelines', 'Containerization', 'Infrastructure Automation', 'Monitoring'],
      pricing: 'Starting at $2,000/month',
      popular: false
    }
  ];

  const supportLevels = [
    {
      name: 'Basic Support',
      description: 'Essential IT support for small businesses',
      price: '$500/month',
      features: [
        'Email Support',
        'Remote Assistance',
        'Basic Monitoring',
        'Monthly Reports',
        '8x5 Support Hours'
      ],
      popular: false
    },
    {
      name: 'Professional Support',
      description: 'Comprehensive IT support for growing businesses',
      price: '$1,200/month',
      features: [
        'Priority Support',
        '24/7 Monitoring',
        'Proactive Maintenance',
        'Security Updates',
        '24x7 Support Hours',
        'Dedicated Account Manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise Support',
      description: 'Full-service IT support for large organizations',
      price: 'Custom Pricing',
      features: [
        'Dedicated Team',
        'Custom Solutions',
        'Advanced Security',
        'Compliance Support',
        '24x7x365 Support',
        'On-site Support',
        'SLA Guarantees'
      ],
      popular: false
    }
  ];

  const technologies = [
    {
      category: 'Cloud Platforms',
      items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud']
    },
    {
      category: 'Operating Systems',
      items: ['Windows Server', 'Linux (Ubuntu, CentOS, RHEL)', 'macOS', 'VMware vSphere']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server', 'Oracle', 'MongoDB', 'Redis']
    },
    {
      category: 'Security Tools',
      items: ['Firewalls', 'Antivirus', 'SIEM', 'VPN', 'Identity Management', 'Encryption']
    },
    {
      category: 'Monitoring',
      items: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'New Relic', 'Datadog']
    },
    {
      category: 'DevOps Tools',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '99.9% Uptime Guarantee',
      description: 'We ensure your systems are always available when you need them.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for your critical systems.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your valuable data.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in IT solutions.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'We analyze your current IT infrastructure and identify areas for improvement.',
      icon: Target
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Develop a comprehensive IT strategy tailored to your business needs.',
      icon: BarChart
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy and configure your new IT solutions with minimal disruption.',
      icon: Settings
    },
    {
      step: '04',
      title: 'Monitoring',
      description: 'Continuous monitoring and maintenance to ensure optimal performance.',
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly. 
            From cloud infrastructure to cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="flex items-center justify-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-3">{service.pricing}</div>
                  <button className="w-full cyber-button text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Levels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">IT Support Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <div key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${level.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {level.popular && (
                  <div className="flex items-center justify-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{level.name}</h3>
                  <p className="text-gray-300 mb-4">{level.description}</p>
                  <div className="text-3xl font-bold text-cyan-400">{level.price}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full cyber-button">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technologies We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our IT Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <step.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our IT Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure 
            that supports your business growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;