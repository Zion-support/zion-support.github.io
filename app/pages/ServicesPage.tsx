import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Cloud, Code, Database, Brain, Globe, Users, Phone, Mail, Cpu, Target, MessageSquare, TrendingUp, Settings, BarChart3 } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud infrastructure setup, migration, and optimization services for AWS, Azure, and Google Cloud.',
      features: ['Cloud Architecture Design', 'Migration Planning', 'Cost Optimization', 'Security Implementation', '24/7 Monitoring', 'Disaster Recovery'],
      pricing: { monthly: 199, yearly: 1990, currency: 'USD' },
      category: 'Cloud Services',
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      popular: true
    },
    {
      id: 'cybersecurity-suite',
      name: 'Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, and compliance.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Penetration Testing', 'Security Audits', 'Compliance Management', 'Incident Response'],
      pricing: { monthly: 299, yearly: 2990, currency: 'USD' },
      category: 'Security',
      icon: <Shield className="w-8 h-8 text-red-400" />
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Design, implementation, and maintenance of enterprise network infrastructure and connectivity solutions.',
      features: ['Network Design', 'Hardware Installation', 'Configuration Management', 'Performance Optimization', 'Troubleshooting', '24/7 Support'],
      pricing: { monthly: 149, yearly: 1490, currency: 'USD' },
      category: 'Infrastructure',
      icon: <Globe className="w-8 h-8 text-green-400" />
    },
    {
      id: 'data-management',
      name: 'Data Management & Analytics',
      description: 'Complete data management solutions including database design, migration, and business intelligence.',
      features: ['Database Design', 'Data Migration', 'ETL Processes', 'Business Intelligence', 'Data Warehousing', 'Analytics Dashboards'],
      pricing: { monthly: 179, yearly: 1790, currency: 'USD' },
      category: 'Data Services',
      icon: <Database className="w-8 h-8 text-purple-400" />
    },
    {
      id: 'software-development',
      name: 'Custom Software Development',
      description: 'Custom software solutions tailored to your business needs with modern technologies and best practices.',
      features: ['Custom Applications', 'Web Development', 'Mobile Apps', 'API Development', 'Integration Services', 'Maintenance & Support'],
      pricing: { monthly: 249, yearly: 2490, currency: 'USD' },
      category: 'Development',
      icon: <Code className="w-8 h-8 text-blue-400" />
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to help align technology with business objectives and digital transformation.',
      features: ['Technology Assessment', 'Strategic Planning', 'Digital Transformation', 'Process Optimization', 'Vendor Management', 'ROI Analysis'],
      pricing: { monthly: 199, yearly: 1990, currency: 'USD' },
      category: 'Consulting',
      icon: <Target className="w-8 h-8 text-orange-400" />
    },
    {
      id: 'helpdesk-support',
      name: 'Helpdesk & Technical Support',
      description: 'Comprehensive technical support and helpdesk services for your employees and end-users.',
      features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base', 'User Training', 'Performance Monitoring'],
      pricing: { monthly: 99, yearly: 990, currency: 'USD' },
      category: 'Support',
      icon: <Users className="w-8 h-8 text-yellow-400" />
    },
    {
      id: 'backup-disaster-recovery',
      name: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical business data.',
      features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Replication', 'Recovery Testing', 'Compliance Support', '24/7 Monitoring'],
      pricing: { monthly: 129, yearly: 1290, currency: 'USD' },
      category: 'Data Protection',
      icon: <Shield className="w-8 h-8 text-indigo-400" />
    }
  ];

  const serviceCategories = [
    {
      name: 'AI Services',
      description: 'Advanced AI solutions and consulting',
      icon: <Brain className="w-12 h-12 text-purple-400" />,
      count: '75+ Implementations',
      link: '/ai-services'
    },
    {
      name: 'IT Services',
      description: 'Comprehensive IT infrastructure and support',
      icon: <Settings className="w-12 h-12 text-cyan-400" />,
      count: '100+ Clients',
      link: '/it-services'
    },
    {
      name: 'Micro SaaS',
      description: 'Professional micro SAAS solutions',
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      count: '50+ Solutions',
      link: '/micro-saas-services'
    },
    {
      name: '5G Technology',
      description: 'Next-generation 5G infrastructure and solutions',
      icon: <Globe className="w-12 h-12 text-green-400" />,
      count: '25+ Deployments',
      link: '/5g-solutions'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network solutions, and custom software development." />
        <meta name="keywords" content="it services, cloud infrastructure, cybersecurity, network solutions, software development, it consulting" />
        <meta property="og:title" content="IT Services | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT services to transform your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services designed to accelerate your business growth and digital transformation. 
              From cloud infrastructure to cybersecurity, we provide end-to-end technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Service Categories
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services across multiple domains to meet all your technology needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <Link key={index} to={category.link} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{category.name}</h3>
                  <p className="text-gray-300 mb-2">{category.description}</p>
                  <p className="text-cyan-400 font-semibold">{category.count}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services designed to solve complex business challenges and drive digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service) => (
                <div key={service.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-slate-700 hover:border-purple-500'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white">
                      ${service.pricing.monthly}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      ${service.pricing.yearly}/year (Save ${(service.pricing.monthly * 12) - service.pricing.yearly})
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col gap-2">
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                      className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                    >
                      Get Started
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                    >
                      Call (302) 464-0950
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our IT Services */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our IT services are built with cutting-edge technology and industry expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Advanced Technology</h3>
                <p className="text-gray-300">Latest technologies and industry best practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with compliance standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
                <p className="text-gray-300">Average 300% ROI within 6 months of implementation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                <p className="text-gray-300">24/7 support from certified IT professionals</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-12 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of enterprises that have already transformed their operations with our IT services. 
                Get started today with a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;