'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Database, Settings, Users, TrendingUp, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Target, BarChart, MessageSquare, Eye, Code, Smartphone, Lock, Globe, Cpu, Sparkles, Zap, Network, HardDrive, Wifi, Monitor } from 'lucide-react';

const ITInfrastructureSolutionsPage: React.FC = () => {
  const infrastructureServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and optimization for AWS, Azure, and GCP',
      icon: Cloud,
      price: '$2,999/month',
      features: [
        'Multi-cloud architecture design',
        'Cloud migration services',
        'Cost optimization strategies',
        'Security configuration',
        'Disaster recovery planning',
        '24/7 monitoring and support'
      ],
      benefits: [
        '60% cost reduction',
        '99.9% uptime guarantee',
        '50% faster deployment',
        '100% security compliance'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Network Infrastructure Design',
      description: 'Enterprise-grade network design, implementation, and management solutions',
      icon: Network,
      price: '$1,999/month',
      features: [
        'Network architecture design',
        'Wireless network optimization',
        'VPN and remote access setup',
        'Network security implementation',
        'Performance monitoring',
        'Bandwidth optimization'
      ],
      benefits: [
        '40% performance improvement',
        '90% security enhancement',
        '70% faster connectivity',
        '85% reliability increase'
      ],
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Data Center Solutions',
      description: 'Complete data center design, implementation, and management services',
      icon: Server,
      price: '$4,999/month',
      features: [
        'Data center design and planning',
        'Server virtualization',
        'Storage solutions',
        'Power and cooling optimization',
        'Security and access control',
        'Backup and disaster recovery'
      ],
      benefits: [
        '80% space efficiency',
        '70% power savings',
        '95% uptime guarantee',
        '60% cost reduction'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Cybersecurity Infrastructure',
      description: 'Comprehensive security infrastructure with advanced threat protection',
      icon: Shield,
      price: '$3,499/month',
      features: [
        'Firewall configuration',
        'Intrusion detection systems',
        'Security monitoring',
        'Vulnerability assessment',
        'Incident response planning',
        'Compliance management'
      ],
      benefits: [
        '99.9% threat detection',
        '90% faster incident response',
        '100% compliance achievement',
        '85% risk reduction'
      ],
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      title: 'Database Infrastructure',
      description: 'High-performance database design, optimization, and management',
      icon: Database,
      price: '$2,499/month',
      features: [
        'Database architecture design',
        'Performance optimization',
        'Backup and recovery solutions',
        'Security hardening',
        'Scalability planning',
        'Monitoring and maintenance'
      ],
      benefits: [
        '300% performance improvement',
        '99.9% data availability',
        '80% faster queries',
        '90% cost optimization'
      ],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    },
    {
      title: 'DevOps Infrastructure',
      description: 'Complete DevOps infrastructure with CI/CD pipelines and automation',
      icon: Settings,
      price: '$2,799/month',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure as Code',
        'Automated testing',
        'Deployment automation',
        'Monitoring and alerting'
      ],
      benefits: [
        '90% deployment automation',
        '70% faster releases',
        '95% error reduction',
        '80% time savings'
      ],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  const infrastructureTypes = [
    {
      type: 'On-Premises',
      icon: Server,
      description: 'Traditional on-premises infrastructure with modern enhancements',
      features: ['Full control', 'Custom configuration', 'Data sovereignty', 'High performance'],
      price: 'Starting at $3,999/month'
    },
    {
      type: 'Hybrid Cloud',
      icon: Cloud,
      description: 'Combination of on-premises and cloud infrastructure',
      features: ['Flexibility', 'Cost optimization', 'Scalability', 'Security'],
      price: 'Starting at $2,499/month'
    },
    {
      type: 'Multi-Cloud',
      icon: Globe,
      description: 'Distributed infrastructure across multiple cloud providers',
      features: ['Vendor independence', 'High availability', 'Risk mitigation', 'Cost optimization'],
      price: 'Starting at $3,499/month'
    },
    {
      type: 'Edge Computing',
      icon: Wifi,
      description: 'Distributed computing infrastructure closer to data sources',
      features: ['Low latency', 'Real-time processing', 'Bandwidth optimization', 'Local processing'],
      price: 'Starting at $1,999/month'
    }
  ];

  const supportLevels = [
    {
      level: 'Basic Support',
      price: '$999/month',
      features: [
        '8x5 support coverage',
        'Email and phone support',
        'Standard response times',
        'Basic monitoring',
        'Monthly health checks'
      ]
    },
    {
      level: 'Professional Support',
      price: '$1,999/month',
      features: [
        '24x7 support coverage',
        'Priority response times',
        'Advanced monitoring',
        'Proactive maintenance',
        'Quarterly reviews'
      ]
    },
    {
      level: 'Enterprise Support',
      price: '$3,999/month',
      features: [
        '24x7 dedicated support',
        'Instant response times',
        'Custom monitoring',
        'Dedicated account manager',
        'Monthly strategy sessions'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Complete IT infrastructure solutions for enterprises. Cloud management, network design, data centers, cybersecurity, and DevOps infrastructure." />
        <meta name="keywords" content="IT infrastructure, cloud management, network design, data center, cybersecurity, DevOps, enterprise IT" />
        <link rel="canonical" href="https://ziontechgroup.com/it-infrastructure-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              IT Infrastructure Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Complete IT infrastructure solutions designed for modern enterprises. From cloud management to cybersecurity, we build the foundation for your digital success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Infrastructure Quote
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Infrastructure Services */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Infrastructure Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {infrastructureServices.map((service, index) => (
                <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${service.bgColor}`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-6`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Proven Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className={`text-2xl font-bold ${service.color} neon-text`}>
                      {service.price}
                    </div>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="cyber-button px-6 py-3 font-medium transition-all duration-300 hover:scale-105"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Types */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Infrastructure Types
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {infrastructureTypes.map((type, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <type.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{type.type}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-lg font-bold text-cyan-400 mb-2">{type.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Levels */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Support Levels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportLevels.map((level, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{level.level}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-6 text-center">{level.price}</div>
                  <ul className="space-y-3">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
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

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Build Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Contact our infrastructure specialists to discuss your specific needs and get a customized solution proposal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITInfrastructureSolutionsPage;