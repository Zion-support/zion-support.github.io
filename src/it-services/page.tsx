'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Comprehensive cloud migration, setup, and optimization services for AWS, Azure, and Google Cloud.',
      icon: Cloud,
      color: 'text-blue-400',
      features: [
        'Cloud migration and setup',
        'Multi-cloud architecture',
        'Cost optimization',
        'Security and compliance',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      pricing: 'Starting at $1,299/month'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats and ensure compliance.',
      icon: Shield,
      color: 'text-red-400',
      features: [
        'Threat detection and response',
        'Vulnerability assessment',
        'Security monitoring',
        'Compliance management',
        'Incident response',
        'Security training'
      ],
      pricing: 'Starting at $799/month'
    },
    {
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure management including servers, networks, and data centers.',
      icon: Server,
      color: 'text-green-400',
      features: [
        'Server management',
        'Network design and setup',
        'Data center operations',
        'Hardware procurement',
        'Performance optimization',
        'Maintenance and support'
      ],
      pricing: 'Starting at $1,199/month'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline your development workflow with automated testing, deployment, and monitoring.',
      icon: Code,
      color: 'text-purple-400',
      features: [
        'CI/CD pipeline setup',
        'Automated testing',
        'Container orchestration',
        'Infrastructure as Code',
        'Monitoring and alerting',
        'Performance optimization'
      ],
      pricing: 'Starting at $599/month'
    },
    {
      title: 'Database Management',
      description: 'Expert database administration, optimization, and management services.',
      icon: Database,
      color: 'text-yellow-400',
      features: [
        'Database design and setup',
        'Performance tuning',
        'Backup and recovery',
        'Security hardening',
        'Migration services',
        '24/7 monitoring'
      ],
      pricing: 'Starting at $399/month'
    },
    {
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services to keep your business running smoothly.',
      icon: Users,
      color: 'text-cyan-400',
      features: [
        '24/7 helpdesk support',
        'Remote assistance',
        'On-site support',
        'User training',
        'Software installation',
        'Hardware maintenance'
      ],
      pricing: 'Starting at $299/month'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Proven Expertise',
      description: 'Certified professionals with years of industry experience'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your IT needs'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'text-blue-400' },
    { icon: Server, value: '99.9%', label: 'Uptime Guarantee', color: 'text-green-400' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'text-purple-400' },
    { icon: Star, value: '4.9/5', label: 'Client Rating', color: 'text-yellow-400' }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and 24/7 support. Transform your business with our expert IT solutions."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'IT infrastructure', 'DevOps', 'database management', 'IT support']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to support and optimize your business infrastructure. 
              From cloud migration to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-cyan-400">
                <Cloud className="w-5 h-5 mr-2" />
                <span className="font-medium">Cloud Solutions</span>
              </div>
              <div className="flex items-center text-red-400">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-medium">Cybersecurity</span>
              </div>
              <div className="flex items-center text-green-400">
                <Server className="w-5 h-5 mr-2" />
                <span className="font-medium">Infrastructure</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-300 flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className={`text-lg font-bold ${service.color}`}>
                      {service.pricing}
                    </div>
                    <a
                      href="/contact"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our IT Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get a free IT assessment and discover how our services can optimize your 
              infrastructure, improve security, and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ITServicesPage;