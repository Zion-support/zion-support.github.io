'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Smartphone as Phone, Headphones, Printer, Camera, Wrench, Cog, Activity, Globe as Web, Mail as Email, MessageCircle, Mic, Phone as PhoneIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and management for enterprise organizations.',
      icon: '🏗️',
      price: '$2,000/month',
      features: [
        '24/7 Infrastructure Monitoring',
        'Hardware & Software Management',
        'Network Design & Optimization',
        'Disaster Recovery Planning',
        'Performance Optimization'
      ],
      benefits: [
        '99.9% Uptime Guarantee',
        'Reduced IT Costs by 40%',
        'Improved System Performance',
        'Enhanced Security Posture'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'VMware', 'Cisco', 'Dell', 'HP']
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamless migration of your applications and data to the cloud with zero downtime.',
      icon: '☁️',
      price: '$1,500/month',
      features: [
        'Cloud Strategy Planning',
        'Application Migration',
        'Data Migration & Sync',
        'Security Configuration',
        'Performance Optimization'
      ],
      benefits: [
        '50% Cost Reduction',
        'Improved Scalability',
        'Enhanced Security',
        'Better Performance'
      ],
      marketPrice: '$3,000-10,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services to protect your organization from threats.',
      icon: '🔒',
      price: '$1,200/month',
      features: [
        'Security Assessment',
        'Threat Detection & Response',
        'Vulnerability Management',
        'Security Training',
        'Compliance Management'
      ],
      benefits: [
        '99.9% Threat Detection',
        'Reduced Security Incidents',
        'Compliance Assurance',
        'Enhanced Data Protection'
      ],
      marketPrice: '$2,500-8,000/month',
      category: 'Security',
      technologies: ['SIEM', 'Firewall', 'EDR', 'MDR', 'SOC']
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      icon: '⚙️',
      price: '$1,800/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Monitoring & Alerting',
        'Container Orchestration'
      ],
      benefits: [
        '10x Faster Deployments',
        'Reduced Manual Errors',
        'Improved Code Quality',
        'Better Team Collaboration'
      ],
      marketPrice: '$4,000-12,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab', 'Docker', 'Kubernetes', 'Terraform']
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud migration, cybersecurity, and DevOps. Enterprise-grade IT solutions starting at $600/month." />
        <meta name="keywords" content="it services, infrastructure management, cloud migration, cybersecurity, devops, it support, database management" />
      </Helmet>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions designed to optimize your infrastructure, enhance security, and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Call: (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">{service.price}</div>
                        <div className="text-sm text-gray-400">Market rate: {service.marketPrice}</div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                              <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get a free consultation and discover how our IT services can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;
