'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Shield, Cloud, Database, Smartphone, Code, Users, Clock, Star, Server, Lock, Wifi, Cpu, BarChart3, Settings, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud migration services with ongoing management, optimization, and security for AWS, Azure, and Google Cloud.',
      features: [
        'Multi-cloud migration',
        'Cost optimization',
        'Security hardening',
        'Performance monitoring',
        'Disaster recovery',
        '24/7 support'
      ],
      pricing: {
        basic: '$2,500 setup + $1,200/month',
        pro: '$5,000 setup + $2,500/month',
        enterprise: '$10,000 setup + $5,000/month'
      },
      link: '/cloud-migration',
      popular: true
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, vulnerability assessment, and incident response.',
      features: [
        'Threat monitoring',
        'Vulnerability scanning',
        'Penetration testing',
        'Security training',
        'Compliance management',
        'Incident response'
      ],
      pricing: {
        basic: '$1,500/month',
        pro: '$3,000/month',
        enterprise: '$6,000/month'
      },
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Code className="w-12 h-12 text-green-500" />,
      title: 'DevOps & CI/CD',
      description: 'Modern DevOps practices with automated CI/CD pipelines, infrastructure as code, and deployment automation.',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation'
      ],
      pricing: {
        basic: '$2,000/month',
        pro: '$4,000/month',
        enterprise: '$8,000/month'
      },
      link: '/devops-solutions'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'Data Analytics & BI',
      description: 'Advanced data analytics solutions with business intelligence dashboards and predictive analytics.',
      features: [
        'Data warehousing',
        'ETL processes',
        'Business intelligence',
        'Predictive analytics',
        'Real-time dashboards',
        'Data visualization'
      ],
      pricing: {
        basic: '$2,000/month',
        pro: '$4,500/month',
        enterprise: '$9,000/month'
      },
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android with modern frameworks.',
      features: [
        'Native iOS/Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store deployment',
        'Push notifications',
        'Analytics integration'
      ],
      pricing: {
        basic: 'Starting at $5,000',
        pro: 'Starting at $15,000',
        enterprise: 'Starting at $50,000'
      },
      link: '/mobile-development'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'Web Development',
      description: 'Modern web applications with responsive design, performance optimization, and SEO best practices.',
      features: [
        'Responsive web design',
        'Performance optimization',
        'SEO optimization',
        'Content management',
        'E-commerce solutions',
        'API development'
      ],
      pricing: {
        basic: 'Starting at $3,000',
        pro: 'Starting at $8,000',
        enterprise: 'Starting at $25,000'
      },
      link: '/web-development'
    },
    {
      icon: <Database className="w-12 h-12 text-pink-500" />,
      title: 'Blockchain Solutions',
      description: 'Blockchain development and integration services for smart contracts, DeFi, and enterprise applications.',
      features: [
        'Smart contract development',
        'DeFi applications',
        'NFT marketplaces',
        'Enterprise blockchain',
        'Cryptocurrency integration',
        'Security auditing'
      ],
      pricing: {
        basic: 'Starting at $10,000',
        pro: 'Starting at $25,000',
        enterprise: 'Starting at $100,000'
      },
      link: '/blockchain-solutions'
    },
    {
      icon: <Cpu className="w-12 h-12 text-teal-500" />,
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing services for optimization, cryptography, and advanced simulations.',
      features: [
        'Quantum algorithm development',
        'Optimization problems',
        'Cryptography solutions',
        'Quantum simulations',
        'Research collaboration',
        'Training & consulting'
      ],
      pricing: {
        basic: 'Starting at $15,000',
        pro: 'Starting at $35,000',
        enterprise: 'Starting at $150,000'
      },
      link: '/quantum-computing-solutions'
    }
  ];

  const serviceCategories = [
    {
      title: 'Infrastructure Services',
      description: 'Complete IT infrastructure setup, management, and optimization.',
      icon: <Server className="w-8 h-8 text-blue-500" />,
      services: ['Cloud Migration', 'Server Management', 'Network Setup', 'Backup Solutions']
    },
    {
      title: 'Security Services',
      description: 'Comprehensive cybersecurity and data protection solutions.',
      icon: <Lock className="w-8 h-8 text-red-500" />,
      services: ['Threat Detection', 'Vulnerability Assessment', 'Security Training', 'Compliance']
    },
    {
      title: 'Development Services',
      description: 'Custom software development and digital solutions.',
      icon: <Code className="w-8 h-8 text-green-500" />,
      services: ['Web Development', 'Mobile Apps', 'API Development', 'DevOps']
    },
    {
      title: 'Data Services',
      description: 'Data management, analytics, and business intelligence.',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      services: ['Data Analytics', 'Business Intelligence', 'Data Warehousing', 'Machine Learning']
    }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      company: 'TechCorp Enterprises',
      content: 'Zion Tech Group migrated our entire infrastructure to the cloud seamlessly. Our costs reduced by 40% and performance improved significantly.',
      rating: 5,
      service: 'Cloud Migration'
    },
    {
      name: 'Maria Garcia',
      company: 'FinanceFlow Inc.',
      content: 'Their cybersecurity solutions protected us from multiple attacks. The 24/7 monitoring gives us peace of mind.',
      rating: 5,
      service: 'Cybersecurity Solutions'
    },
    {
      name: 'David Chen',
      company: 'DataTech Solutions',
      content: 'The data analytics platform they built provides insights we never had before. Our decision-making is now completely data-driven.',
      rating: 5,
      service: 'Data Analytics'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <SEOHead 
        title="IT Services & Solutions - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, mobile development, and data analytics. Transform your business with our expert IT solutions."
        keywords="it services, cloud migration, cybersecurity, devops, mobile development, data analytics, web development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and custom development solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get IT Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {itServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Pricing Plans</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Basic:</span>
                        <span className="text-white font-semibold">{service.pricing.basic}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Pro:</span>
                        <span className="text-white font-semibold">{service.pricing.pro}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Enterprise:</span>
                        <span className="text-white font-semibold">{service.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Service Categories</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Organized IT services by category for easy navigation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{category.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Real results from businesses using our IT services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="mb-2">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-blue-400 text-sm font-medium">{testimonial.service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT Infrastructure?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our IT services can optimize your technology stack and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free IT Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}