'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Server, Shield, Cloud, Database, Code, Smartphone, Wifi, Cpu } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to cloud platforms with ongoing management and optimization.',
      features: ['AWS/Azure/GCP Migration', 'Cost Optimization', 'Security Implementation', '24/7 Monitoring'],
      pricing: 'Starting at $2,500/month',
      href: '/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets and data.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance Management'],
      pricing: 'Starting at $1,800/month',
      href: '/cybersecurity-solutions'
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, maintenance, and optimization services.',
      features: ['Network Design', 'Server Management', 'Backup Solutions', 'Disaster Recovery'],
      pricing: 'Starting at $3,200/month',
      href: '/infrastructure-management'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Management & Analytics',
      description: 'Advanced data solutions including storage, processing, and business intelligence.',
      features: ['Database Design', 'Data Warehousing', 'ETL Processes', 'Business Intelligence'],
      pricing: 'Starting at $2,100/month',
      href: '/data-management'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      pricing: 'Starting at $150/hour',
      href: '/custom-development'
    },
    {
      icon: <Wifi className="w-8 h-8 text-cyan-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions with ultra-fast speeds and low latency.',
      features: ['Network Planning', 'Infrastructure Setup', 'IoT Integration', 'Edge Computing'],
      pricing: 'Starting at $5,000/month',
      href: '/5g-implementation'
    }
  ]

  const microSaasServices = [
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-500" />,
      title: 'IT Asset Tracker',
      description: 'Track and manage all your IT assets with automated monitoring.',
      pricing: '$45/month',
      href: '/it-asset-tracker'
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: 'Security Monitor Pro',
      description: 'Real-time security monitoring and threat detection for small businesses.',
      pricing: '$89/month',
      href: '/security-monitor-pro'
    },
    {
      icon: <Database className="w-6 h-6 text-amber-500" />,
      title: 'Backup Manager',
      description: 'Automated backup solutions with cloud storage and recovery options.',
      pricing: '$35/month',
      href: '/backup-manager'
    },
    {
      icon: <Server className="w-6 h-6 text-rose-500" />,
      title: 'Server Health Monitor',
      description: 'Monitor server performance and get alerts for potential issues.',
      pricing: '$65/month',
      href: '/server-health-monitor'
    }
  ]

  const enterpriseSolutions = [
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business operations.',
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      href: '/digital-transformation'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline development and deployment with automated DevOps practices.',
      icon: <Code className="w-6 h-6 text-green-500" />,
      href: '/devops-cicd'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Implement blockchain technology for secure and transparent operations.',
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      href: '/blockchain-solutions'
    },
    {
      title: 'IoT Development',
      description: 'Connect and manage devices with Internet of Things solutions.',
      icon: <Wifi className="w-6 h-6 text-orange-500" />,
      href: '/iot-development'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and custom development. Expert IT solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, infrastructure, software development, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete IT solutions to power your business growth. From cloud migration to cybersecurity, 
              we provide expert technology services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main IT Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services designed to optimize your technology infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-purple-400">{service.pricing}</span>
                </div>
                <a
                  href={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Micro SaaS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized IT tools for efficient business management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="mb-4">
                  <span className="text-lg font-bold text-purple-400">{service.pricing}</span>
                </div>
                <a
                  href={service.href}
                  className="text-purple-400 hover:text-purple-300 font-medium flex items-center group-hover:translate-x-1 transition-transform text-sm"
                >
                  Get Started
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced technology solutions for large-scale business transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                <a
                  href={solution.href}
                  className="text-purple-400 hover:text-purple-300 font-medium flex items-center group-hover:translate-x-1 transition-transform text-sm"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can streamline your operations and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Free IT Assessment
              </a>
              <a 
                href="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Service Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}