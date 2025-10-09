'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Network, Server, Monitor, Lock, Zap, CheckCircle, Star, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and optimization services',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      benefits: ['40% cost reduction', '99.9% uptime', 'Scalable infrastructure'],
      price: 'Starting at $1,299/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      benefits: ['99.9% threat detection', '24/7 monitoring', 'Compliance ready'],
      price: 'Starting at $1,599/month'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      benefits: ['50% faster deployment', 'Reduced errors', 'Improved reliability'],
      price: 'Starting at $1,199/month'
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      benefits: ['60% performance improvement', 'Zero data loss', 'Automated backups'],
      price: 'Starting at $899/month'
    },
    {
      icon: Network,
      title: 'Network Solutions',
      description: 'Enterprise network design, implementation, and management',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring'],
      benefits: ['99.9% network uptime', 'Enhanced security', 'Optimized performance'],
      price: 'Starting at $1,399/month'
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server administration and maintenance services',
      features: ['Server Setup', 'Performance Monitoring', 'Security Updates', 'Backup Management'],
      benefits: ['Proactive maintenance', 'Reduced downtime', 'Cost optimization'],
      price: 'Starting at $999/month'
    },
    {
      icon: Monitor,
      title: 'IT Monitoring',
      description: '24/7 monitoring and alerting for your IT infrastructure',
      features: ['Real-time Monitoring', 'Automated Alerts', 'Performance Analytics', 'Incident Management'],
      benefits: ['Proactive issue detection', 'Faster resolution', 'Improved uptime'],
      price: 'Starting at $799/month'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data backup, recovery, and protection solutions',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Compliance Management'],
      benefits: ['Zero data loss', 'Quick recovery', 'Regulatory compliance'],
      price: 'Starting at $1,199/month'
    }
  ];

  const technologies = [
    { name: 'Amazon Web Services', logo: 'AWS' },
    { name: 'Microsoft Azure', logo: 'Azure' },
    { name: 'Google Cloud Platform', logo: 'GCP' },
    { name: 'Docker', logo: 'Docker' },
    { name: 'Kubernetes', logo: 'K8s' },
    { name: 'Terraform', logo: 'TF' },
    { name: 'Ansible', logo: 'Ansible' },
    { name: 'Jenkins', logo: 'Jenkins' },
    { name: 'GitLab CI/CD', logo: 'GitLab' },
    { name: 'Prometheus', logo: 'Prometheus' },
    { name: 'Grafana', logo: 'Grafana' },
    { name: 'ELK Stack', logo: 'ELK' }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', provider: 'Amazon' },
    { name: 'Microsoft Azure Solutions Architect', provider: 'Microsoft' },
    { name: 'Google Cloud Professional Architect', provider: 'Google' },
    { name: 'CISSP - Certified Information Systems Security Professional', provider: 'ISC2' },
    { name: 'CISM - Certified Information Security Manager', provider: 'ISACA' },
    { name: 'ITIL Foundation', provider: 'AXELOS' },
    { name: 'PMP - Project Management Professional', provider: 'PMI' }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      price: '$299/month',
      features: [
        'Email support (24-48 hours)',
        'Business hours coverage',
        'Standard response time',
        'Basic monitoring',
        'Monthly reports'
      ]
    },
    {
      name: 'Professional Support',
      price: '$599/month',
      features: [
        'Phone & email support (4-8 hours)',
        'Extended hours coverage',
        'Priority response time',
        'Advanced monitoring',
        'Weekly reports',
        'Proactive maintenance'
      ],
      popular: true
    },
    {
      name: 'Enterprise Support',
      price: '$999/month',
      features: [
        '24/7 phone & email support (1-2 hours)',
        'Round-the-clock coverage',
        'Immediate response time',
        'Comprehensive monitoring',
        'Daily reports',
        'Dedicated account manager',
        'Custom SLA'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions for modern enterprise infrastructure. From cloud migration to cybersecurity, 
              we provide end-to-end IT services to keep your business running smoothly and securely.
            </p>
          </div>

          {/* IT Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                  <a 
                    href="/contact" 
                    className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Technologies We Work With
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">{tech.logo}</span>
                  </div>
                  <div className="text-sm text-gray-300">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Our Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                      <p className="text-cyan-400 text-sm">{cert.provider}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Tiers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Support Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportTiers.map((tier, index) => (
                <div key={index} className={`cyber-card p-6 relative ${tier.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-6">{tier.price}</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href="/contact"
                      className={`cyber-button w-full inline-flex items-center justify-center ${
                        tier.popular ? 'bg-cyan-400 text-slate-900' : ''
                      }`}
                    >
                      Choose Plan
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you build a robust, secure, and scalable IT environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                Free IT Assessment
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;