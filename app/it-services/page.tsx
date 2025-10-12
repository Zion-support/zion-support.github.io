'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, Code, DollarSign, Clock, Users, Star, Wrench } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',
      features: ['Zero Downtime Migration', 'Security Assessment', 'Cost Optimization', '24/7 Support'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats and data breaches.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      pricing: '$1,500/month',
      link: '/cybersecurity-solutions',
      popular: false
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development workflow with automated deployment and continuous integration.',
      features: ['Automated Deployments', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging'],
      pricing: '$2,000/month',
      link: '/devops-cicd',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Real-time Analytics', 'Data Visualization', 'Predictive Modeling', 'Custom Dashboards'],
      pricing: '$2,000/month',
      link: '/data-analytics',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android with native performance.',
      features: ['Native Development', 'Cross-platform Apps', 'UI/UX Design', 'App Store Optimization'],
      pricing: 'Starting at $5,000',
      link: '/mobile-development',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: 'Blockchain Solutions',
      description: 'Implement blockchain technology for secure transactions and smart contracts.',
      features: ['Smart Contracts', 'DApp Development', 'Tokenization', 'Security Audits'],
      pricing: '$3,500/month',
      link: '/blockchain',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: 'Web Development',
      description: 'Build modern, responsive websites and web applications with cutting-edge technologies.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation'],
      pricing: 'Starting at $3,000',
      link: '/web-development',
      popular: false
    },
    {
      icon: <Server className="w-8 h-8 text-teal-500" />,
      title: 'API Development',
      description: 'Create robust APIs and microservices for seamless integration and scalability.',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'API Documentation'],
      pricing: '$1,800/month',
      link: '/api-development',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-500" />,
      title: 'Database Management',
      description: 'Optimize and maintain your databases for maximum performance and reliability.',
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring'],
      pricing: '$1,200/month',
      link: '/database-management',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: 'Network Security',
      description: 'Secure your network infrastructure with advanced firewall and intrusion detection systems.',
      features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Network Monitoring'],
      pricing: '$1,400/month',
      link: '/network-security',
      popular: false
    }
  ]

  const benefits = [
    {
      icon: <Wrench className="w-6 h-6 text-blue-500" />,
      title: 'Expert Solutions',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Cost Effective',
      description: 'Reduce IT costs by up to 40% with optimized infrastructure and automation.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Scalable Infrastructure',
      description: 'Grow your IT infrastructure seamlessly as your business expands.'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: 'Proven Track Record',
      description: 'Successfully delivered 500+ IT projects for businesses of all sizes.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '150+', label: 'Happy Clients' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and mobile development. Expert solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, mobile development, web development, database management" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions designed to modernize your infrastructure, enhance security, and drive business growth. From cloud migration to cybersecurity, we provide expert services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <span className="text-sm text-gray-400">starting price</span>
                  </div>
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let our expert team help you build a robust, secure, and scalable IT infrastructure that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
