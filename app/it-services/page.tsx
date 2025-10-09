'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and management for enterprise organizations.',
      icon: '🏗️',
      price: '$2,000/month',
      features: [
        'Server Management & Monitoring',
        'Network Design & Implementation',
        'Storage Solutions',
        'Backup & Disaster Recovery',
        'Performance Optimization',
        '24/7 Technical Support'
      ],
      benefits: [
        'Reduce downtime by 99.9%',
        'Improve system performance by 40%',
        'Lower operational costs by 30%',
        'Enhanced security and compliance'
      ],
      marketPrice: '$3,000-8,000/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker', 'Kubernetes']
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamless migration of your existing infrastructure to cloud platforms with zero downtime.',
      icon: '☁️',
      price: '$1,500/month',
      features: [
        'Cloud Strategy & Planning',
        'Data Migration',
        'Application Modernization',
        'Security & Compliance',
        'Cost Optimization',
        'Ongoing Support'
      ],
      benefits: [
        'Reduce infrastructure costs by 50%',
        'Improve scalability and flexibility',
        'Enhanced disaster recovery',
        'Better performance and reliability'
      ],
      marketPrice: '$2,500-6,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Ansible', 'Kubernetes']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services to protect your organization from threats and vulnerabilities.',
      icon: '🔒',
      price: '$1,800/month',
      features: [
        'Security Assessment & Auditing',
        'Threat Detection & Response',
        'Identity & Access Management',
        'Data Protection & Encryption',
        'Compliance Management',
        'Security Training'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Reduce security incidents by 95%',
        'Improve customer trust'
      ],
      marketPrice: '$2,000-5,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA', 'Encryption']
    },
    {
      title: 'Help Desk & Support',
      description: 'Professional IT support services to keep your systems running smoothly and your users productive.',
      icon: '🎧',
      price: '$800/month',
      features: [
        '24/7 Technical Support',
        'Remote Desktop Support',
        'Hardware & Software Support',
        'User Training & Education',
        'Incident Management',
        'Knowledge Base Management'
      ],
      benefits: [
        'Faster issue resolution',
        'Reduced downtime',
        'Improved user satisfaction',
        'Lower support costs'
      ],
      marketPrice: '$1,200-3,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'Ticketing Systems']
    },
    {
      title: 'Database Management',
      description: 'Expert database administration, optimization, and management services for all major database platforms.',
      icon: '🗄️',
      price: '$1,200/month',
      features: [
        'Database Design & Optimization',
        'Performance Tuning',
        'Backup & Recovery',
        'Security & Access Control',
        'Monitoring & Maintenance',
        'Migration & Upgrades'
      ],
      benefits: [
        'Improve database performance by 60%',
        'Reduce data loss risks',
        'Ensure data integrity',
        'Lower maintenance costs'
      ],
      marketPrice: '$1,800-4,000/month',
      category: 'Database',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis']
    },
    {
      title: 'Network Security',
      description: 'Advanced network security solutions to protect your network infrastructure from threats and attacks.',
      icon: '🛡️',
      price: '$1,600/month',
      features: [
        'Firewall Configuration',
        'Intrusion Detection',
        'VPN Setup & Management',
        'Network Monitoring',
        'Vulnerability Assessment',
        'Security Policy Implementation'
      ],
      benefits: [
        'Enhanced network security',
        'Prevent unauthorized access',
        'Comply with regulations',
        'Reduce security risks'
      ],
      marketPrice: '$2,200-5,500/month',
      category: 'Network Security',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Check Point', 'Sophos']
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud migration, cybersecurity, and support. Expert solutions for your business needs." />
        <meta name="keywords" content="IT services, infrastructure management, cloud migration, cybersecurity, help desk, database management, network security" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to keep your business running smoothly and securely
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional IT services designed to support your business growth and ensure optimal performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href="/contact"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional IT services with a focus on reliability, security, and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock technical support to keep your systems running</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-gray-600">Quick response times and rapid issue resolution</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified professionals with years of experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Track record of successful implementations and satisfied clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how our IT services can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;
