'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone, Code, Star, Users, Clock, Server, Wifi, Smartphone as Mobile, Lock, BarChart3, Settings, Monitor } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to cloud platforms with ongoing management and optimization services.',
      features: ['AWS/Azure/GCP Migration', 'Cloud Architecture Design', 'Cost Optimization', 'Security Implementation', '24/7 Monitoring', 'Backup & Recovery'],
      pricing: 'Starting at $2,500',
      originalPrice: '$5,000',
      popular: true,
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from cyber threats and ensure compliance.',
      features: ['Security Assessment', 'Threat Detection', 'Firewall Management', 'Penetration Testing', 'Compliance Audits', 'Incident Response'],
      pricing: '$1,500/month',
      originalPrice: '$3,000/month',
      popular: true,
      link: '/cybersecurity'
    },
    {
      icon: <Mobile className="w-8 h-8 text-green-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      features: ['iOS & Android Apps', 'Cross-Platform Development', 'UI/UX Design', 'API Integration', 'App Store Deployment', 'Maintenance & Updates'],
      pricing: 'Starting at $5,000',
      originalPrice: '$10,000',
      popular: false,
      link: '/mobile-development'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: ['Data Warehousing', 'Dashboard Creation', 'Predictive Analytics', 'Report Automation', 'Data Visualization', 'KPI Tracking'],
      pricing: '$2,000/month',
      originalPrice: '$4,000/month',
      popular: true,
      link: '/data-analytics'
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment, monitoring, and infrastructure management.',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation'],
      pricing: '$1,800/month',
      originalPrice: '$3,600/month',
      popular: false,
      link: '/devops'
    },
    {
      icon: <Server className="w-8 h-8 text-cyan-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, management, and optimization for your business needs.',
      features: ['Server Setup & Management', 'Network Configuration', 'Hardware Procurement', 'Performance Optimization', 'Disaster Recovery', '24/7 Support'],
      pricing: '$1,200/month',
      originalPrice: '$2,400/month',
      popular: false,
      link: '/infrastructure'
    },
    {
      icon: <Code className="w-8 h-8 text-pink-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and processes.',
      features: ['Custom Applications', 'API Development', 'Database Design', 'Third-party Integrations', 'Testing & QA', 'Documentation'],
      pricing: 'Starting at $8,000',
      originalPrice: '$16,000',
      popular: true,
      link: '/custom-development'
    },
    {
      icon: <Monitor className="w-8 h-8 text-indigo-500" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications with cutting-edge technologies and design.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development', 'SEO Optimization', 'Performance Optimization', 'Security Implementation'],
      pricing: 'Starting at $3,000',
      originalPrice: '$6,000',
      popular: false,
      link: '/web-development'
    }
  ]

  const itCapabilities = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      title: 'Cloud Expertise',
      description: 'Certified professionals in AWS, Azure, and Google Cloud Platform with years of experience.'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Security First',
      description: 'Enterprise-grade security measures with compliance standards and regular security audits.'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly.'
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: 'Expert Team',
      description: 'Certified professionals with extensive experience in enterprise IT solutions.'
    }
  ]

  const technologies = [
    'AWS & Azure',
    'Docker & Kubernetes',
    'React & Node.js',
    'Python & Java',
    'MongoDB & PostgreSQL',
    'Terraform & Ansible',
    'Jenkins & GitLab',
    'Elasticsearch & Kibana'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, mobile development, and more. Starting from $1,200/month." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, mobile development, data analytics" />
      </Helmet>
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                IT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, 
                mobile development, and data analytics. Enterprise-grade solutions for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  View IT Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Get IT Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* IT Capabilities */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Capabilities</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Enterprise-grade IT solutions with certified professionals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
              {itCapabilities.map((capability, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive IT solutions for every business need
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-20">
              {itServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      <span className="text-gray-400 line-through text-sm">{service.originalPrice}</span>
                    </div>
                    <div className="text-green-400 text-sm font-semibold">50% OFF - Limited Time</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Technologies We Use</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Cutting-edge technologies for modern IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="text-gray-300 font-medium">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 animate-pulse"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT?</h2>
                  <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                    Let's discuss how our IT services can optimize your infrastructure and drive business growth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get IT Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                    >
                      Call +1 302 464 0950
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}