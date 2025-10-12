<<<<<<< HEAD
import React from 'react'
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Smartphone, Database, Cpu, Wifi, Server } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      features: [
        'AWS, Azure, GCP expertise',
        'Zero-downtime migration',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      pricing: 'Starting at $2,500/month',
      popular: true,
      link: '/cloud-migration'
=======
'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Server, Shield, Cloud, Database, Smartphone, CheckCircle, Star, Zap, Globe, Cpu, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ITServicesPage() {
  const [activeTab, setActiveTab] = useState('services')

  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced performance.',
      features: [
        'AWS, Azure, and GCP migration',
        'Zero-downtime migration',
        'Cost optimization',
        'Security hardening',
        'Performance monitoring',
        '24/7 support'
      ],
      pricing: 'Starting at $2,500',
      duration: '2-4 weeks',
      link: '/cloud-services',
      popular: true
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity Solutions',
<<<<<<< HEAD
      description: 'Protect your business with comprehensive cybersecurity solutions and threat monitoring.',
      features: [
        'Security assessment',
        'Threat detection',
        'Incident response',
        'Compliance management',
        'Security training',
        'Penetration testing'
      ],
      pricing: 'Starting at $1,800/month',
      popular: false,
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated DevOps and continuous integration.',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure as Code',
        'Automated testing',
        'Deployment automation',
        'Performance monitoring'
      ],
      pricing: 'Starting at $2,200/month',
      popular: true,
      link: '/devops-cicd'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
      features: [
        'Data warehousing',
        'Business intelligence',
        'Predictive analytics',
        'Real-time dashboards',
        'Data visualization',
        'Machine learning integration'
      ],
      pricing: 'Starting at $1,500/month',
      popular: false,
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'Mobile Development',
      description: 'Build powerful mobile applications for iOS and Android with our expert development team.',
=======
      description: 'Comprehensive security solutions to protect your business from cyber threats and ensure compliance.',
      features: [
        'Security assessment and audit',
        'Firewall configuration',
        'Intrusion detection systems',
        'Security monitoring',
        'Compliance management',
        'Incident response'
      ],
      pricing: 'Starting at $1,500/month',
      duration: 'Ongoing',
      link: '/ai-cybersecurity',
      popular: true
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
      features: [
        'Native app development',
        'Cross-platform solutions',
        'UI/UX design',
<<<<<<< HEAD
        'App store optimization',
        'Performance optimization',
        'Maintenance & support'
      ],
      pricing: 'Starting at $3,000/month',
      popular: false,
      link: '/mobile-development'
    },
    {
      icon: <Server className="w-12 h-12 text-yellow-500" />,
      title: 'Infrastructure Management',
      description: 'Comprehensive infrastructure management and optimization for your IT environment.',
      features: [
        'Server management',
        'Network optimization',
        'Backup solutions',
        'Disaster recovery',
        'Performance tuning',
        '24/7 support'
      ],
      pricing: 'Starting at $1,200/month',
      popular: true,
      link: '/infrastructure-management'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Engineers' }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your peace of mind.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Solutions',
      description: 'Flexible solutions that grow with your business needs and requirements.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Effective',
      description: 'Optimized solutions that reduce costs while improving performance.'
    }
=======
        'API integration',
        'App store deployment',
        'Maintenance and updates'
      ],
      pricing: 'Starting at $5,000',
      duration: '6-12 weeks',
      link: '/mobile-development',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for improved performance and reliability.',
      features: [
        'Database design and architecture',
        'Performance optimization',
        'Data migration',
        'Backup and recovery',
        'Security implementation',
        'Monitoring and maintenance'
      ],
      pricing: 'Starting at $800/month',
      duration: 'Ongoing',
      link: '/database-services',
      popular: false
    },
    {
      icon: <Server className="w-8 h-8 text-red-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, management, and optimization for maximum efficiency.',
      features: [
        'Server setup and configuration',
        'Network design and implementation',
        'Hardware procurement',
        'System monitoring',
        'Disaster recovery planning',
        'IT support and maintenance'
      ],
      pricing: 'Starting at $1,200/month',
      duration: 'Ongoing',
      link: '/infrastructure-management',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: [
        'CI/CD pipeline setup',
        'Automated testing',
        'Container orchestration',
        'Infrastructure as code',
        'Monitoring and logging',
        'Performance optimization'
      ],
      pricing: 'Starting at $1,800/month',
      duration: '2-6 weeks',
      link: '/devops-services',
      popular: false
    }
  ]

  const industries = [
    { name: 'Healthcare', icon: <Shield className="w-6 h-6" />, description: 'HIPAA-compliant solutions' },
    { name: 'Finance', icon: <Database className="w-6 h-6" />, description: 'Secure financial systems' },
    { name: 'E-commerce', icon: <Smartphone className="w-6 h-6" />, description: 'Scalable online platforms' },
    { name: 'Education', icon: <Globe className="w-6 h-6" />, description: 'Learning management systems' },
    { name: 'Manufacturing', icon: <Cpu className="w-6 h-6" />, description: 'IoT and automation' },
    { name: 'Government', icon: <Shield className="w-6 h-6" />, description: 'Secure government systems' }
  ]

  const technologies = [
    { name: 'AWS', logo: 'AWS' },
    { name: 'Azure', logo: 'AZ' },
    { name: 'Google Cloud', logo: 'GC' },
    { name: 'Docker', logo: 'DK' },
    { name: 'Kubernetes', logo: 'K8' },
    { name: 'Terraform', logo: 'TF' },
    { name: 'Jenkins', logo: 'JK' },
    { name: 'GitLab', logo: 'GL' }
  ]

  const pricingPlans = [
    {
      name: 'Basic Support',
      price: '$1,200',
      period: '/month',
      description: 'Essential IT support for small businesses',
      features: [
        'Remote IT support',
        'Basic security monitoring',
        'Email support',
        'Monthly health checks',
        'Software updates',
        'Backup management'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,500',
      period: '/month',
      description: 'Comprehensive IT services for growing businesses',
      features: [
        '24/7 IT support',
        'Advanced security monitoring',
        'Priority support',
        'Weekly health checks',
        'Proactive maintenance',
        'Cloud management',
        'Disaster recovery',
        'Compliance support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$5,000',
      period: '/month',
      description: 'Full-service IT management for large organizations',
      features: [
        'Dedicated IT team',
        'Enterprise security suite',
        '24/7 phone support',
        'Daily health checks',
        'Custom solutions',
        'Multi-cloud management',
        'Advanced disaster recovery',
        'Full compliance management',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Robert Kim',
      company: 'Healthcare Provider',
      content: 'Zion Tech Group\'s cloud migration service was exceptional. They migrated our entire infrastructure with zero downtime and improved our system performance by 300%.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Sarah Davis',
      company: 'Financial Services',
      content: 'Their cybersecurity solutions have given us peace of mind. The security monitoring and incident response capabilities are top-notch, and we\'ve had zero security breaches.',
      rating: 5,
      avatar: 'SD'
    },
    {
      name: 'Michael Brown',
      company: 'E-commerce Platform',
      content: 'The mobile app development team delivered an outstanding product. Our app has 4.8 stars on the app store and has significantly increased our customer engagement.',
      rating: 5,
      avatar: 'MB'
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Server className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Users className="w-6 h-6" /> },
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Globe className="w-6 h-6" /> }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, DevOps, data analytics, and infrastructure management." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, infrastructure management" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to accelerate your digital transformation and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
=======
import SEOHead from '../components/SEOHead'
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network, Settings, Sparkles, Star, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ITServicesPage() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance', 'Performance monitoring'],
      pricing: 'Starting at $2,500',
      link: '/cloud-services',
      popular: true,
      duration: '2-4 weeks',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Threat detection', 'Vulnerability assessment', 'Security audits', 'Compliance management', 'Incident response'],
      pricing: 'Starting at $1,500/month',
      link: '/ai-cybersecurity',
      popular: true,
      duration: 'Ongoing',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS & Android apps', 'Cross-platform development', 'UI/UX design', 'App store deployment', 'Maintenance & updates'],
      pricing: 'Starting at $5,000',
      link: '/it-services',
      popular: false,
      duration: '6-12 weeks',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Data warehousing', 'Business intelligence', 'Custom dashboards', 'Predictive analytics', 'Data visualization'],
      pricing: 'Starting at $2,000/month',
      link: '/ai-data-analytics',
      popular: true,
      duration: '4-8 weeks',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-400" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server setup & configuration', 'Network monitoring', 'Performance optimization', '24/7 support', 'Disaster recovery'],
      pricing: 'Starting at $299/month',
      link: '/it-services',
      popular: false,
      duration: 'Ongoing',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Code className="w-8 h-8 text-pink-400" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['CI/CD pipeline setup', 'Container orchestration', 'Automated testing', 'Deployment automation', 'Monitoring & logging'],
      pricing: 'Starting at $1,200/month',
      link: '/it-services',
      popular: true,
      duration: '2-6 weeks',
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'High Performance',
      description: 'Optimized solutions for maximum speed and reliability'
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of experience'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support services'
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      company: 'TechStart Inc.',
      content: 'Zion Tech Group\'s cloud migration service was flawless. We achieved zero downtime and 40% cost savings.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Maria Garcia',
      company: 'Financial Services Co.',
      content: 'Their cybersecurity solutions gave us peace of mind. We passed our compliance audit with flying colors.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'James Wilson',
      company: 'E-commerce Platform',
      content: 'The mobile app they developed increased our user engagement by 200%. Highly recommended!',
      rating: 5,
      avatar: 'JW'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Server className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOHead 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, mobile development, and data analytics. Transform your technology infrastructure with our expert solutions."
        keywords="IT services, cloud migration, cybersecurity, mobile development, data analytics, infrastructure management, DevOps, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">Comprehensive IT Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            IT <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
            Transform your technology infrastructure with our comprehensive IT services. From cloud migration to cybersecurity, 
            we deliver enterprise-grade solutions that drive business growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/ai-services"
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              View AI Services
            </Link>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
          </div>
        </div>
      </section>

      {/* Stats Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
=======
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center px-2">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 group-hover:from-blue-400/30 group-hover:to-cyan-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">{stat.label}</div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* IT Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of IT services designed to meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">
                    {service.pricing}
                  </span>
                </div>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  Learn More
                </Link>
=======
      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive technology solutions designed to modernize your infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transform group-hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group-hover:text-white transition-colors">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      <div className="text-sm text-gray-400">{service.duration}</div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-xl font-semibold text-center block hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 inline-block ml-2" />
                  </Link>
                </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional IT solutions with unmatched expertise and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
=======
      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Services?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Experience the difference of working with certified IT professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Don't just take our word for it - hear from businesses that have transformed with our IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
=======
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Complete IT services including cloud migration, cybersecurity, mobile development, and infrastructure management. Expert solutions for modern businesses. Starting at $1,200/month." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, mobile development, database management, infrastructure, DevOps" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Complete IT infrastructure solutions including cloud migration, cybersecurity, mobile development, 
              and ongoing support to keep your business running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                View Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-blue-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive IT solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
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
                <div className="mb-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl font-bold text-white">{service.pricing}</span>
                    <span className="text-gray-300 text-sm">{service.duration}</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our IT services and how they can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.3),transparent_50%)]"></div>
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT services can transform your technology landscape and drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/ai-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Explore AI Services
                </Link>
              </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
=======
      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Industries We Serve</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Specialized IT solutions for various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center text-blue-400">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
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
              Cutting-edge technologies and platforms for modern IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <h3 className="text-white font-semibold text-sm">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">IT Support Plans</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose the IT support plan that best fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
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
              See how our IT services have helped businesses succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
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
                Let our expert team help you build a robust, secure, and scalable IT infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
                </a>
              </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD

      <Footer />
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
    </div>
  )
}