'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Server, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Lock,
  Cpu,
  Wifi,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Clock,
  Target,
  Rocket,
  Award,
  Settings,
  Monitor,
  Smartphone,
  Laptop,
  Wifi as WifiIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Database as DatabaseIcon,
  BarChart3 as ChartIcon,
  MessageSquare as MessageIcon,
  FileText as FileIcon,
  Camera as CameraIcon,
  Mail as MailIcon,
  Phone as PhoneCallIcon,
  MapPin as MapIcon,
  DollarSign as DollarIcon,
  Clock as ClockIcon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Award as AwardIcon,
  Settings as SettingsIcon
} from 'lucide-react';

export default function CloudServicesPage() {
  const cloudServices = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure as a Service',
      description: 'Scalable, secure, and reliable cloud infrastructure solutions for businesses of all sizes.',
      icon: <Server className="w-8 h-8 text-blue-400" />,
      price: 'Starting at $99/month',
      features: [
        'Scalable virtual machines',
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Global data centers',
        '24/7 monitoring',
        'Backup & disaster recovery'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Scale instantly with demand',
        'Global performance optimization',
        'Enterprise-grade security'
      ],
      link: '/cloud-infrastructure',
      category: 'Infrastructure',
      popular: true
    },
    {
      id: 'cloud-storage',
      title: 'AI-Powered Cloud Storage',
      description: 'Intelligent cloud storage with AI-powered organization, search, and data insights.',
      icon: <Database className="w-8 h-8 text-green-400" />,
      price: 'Starting at $29/month',
      features: [
        'Unlimited storage capacity',
        'AI-powered file organization',
        'Smart search & discovery',
        'Automatic backup',
        'Version control',
        'Collaborative sharing'
      ],
      benefits: [
        'Never lose important files',
        'Find files 10x faster',
        'Automatic organization',
        'Seamless collaboration'
      ],
      link: '/cloud-storage',
      category: 'Storage'
    },
    {
      id: 'cloud-computing',
      title: 'High-Performance Cloud Computing',
      description: 'Powerful cloud computing resources for data processing, machine learning, and analytics.',
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      price: 'Starting at $149/month',
      features: [
        'GPU-accelerated computing',
        'Machine learning pipelines',
        'Big data processing',
        'Real-time analytics',
        'Auto-scaling compute',
        'Cost optimization'
      ],
      benefits: [
        'Process data 100x faster',
        'Run ML models at scale',
        'Pay only for what you use',
        'Enterprise-grade performance'
      ],
      link: '/cloud-computing',
      category: 'Computing'
    },
    {
      id: 'cloud-security',
      title: 'Advanced Cloud Security',
      description: 'Comprehensive cloud security solutions with AI-powered threat detection and compliance.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      price: 'Starting at $79/month',
      features: [
        'AI threat detection',
        'Zero-trust architecture',
        'Compliance management',
        'Data encryption',
        'Access control',
        'Security monitoring'
      ],
      benefits: [
        'Protect against 99.9% of threats',
        'Meet compliance requirements',
        'Real-time security monitoring',
        'Automated incident response'
      ],
      link: '/cloud-security',
      category: 'Security',
      popular: true
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'Seamless migration to the cloud with zero downtime and data integrity guarantees.',
      icon: <Rocket className="w-8 h-8 text-orange-400" />,
      price: 'Custom pricing',
      features: [
        'Zero-downtime migration',
        'Data integrity verification',
        'Application modernization',
        'Performance optimization',
        'Training & support',
        'Post-migration monitoring'
      ],
      benefits: [
        'Migrate without business disruption',
        'Improve application performance',
        'Reduce operational costs',
        'Future-proof your infrastructure'
      ],
      link: '/cloud-migration',
      category: 'Migration'
    },
    {
      id: 'cloud-backup',
      title: 'Automated Cloud Backup',
      description: 'Intelligent backup solutions with AI-powered scheduling and disaster recovery.',
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      price: 'Starting at $19/month',
      features: [
        'Automated backup scheduling',
        'Incremental backups',
        'Cross-region replication',
        'Point-in-time recovery',
        'Backup verification',
        'Disaster recovery testing'
      ],
      benefits: [
        'Never lose critical data',
        'Quick disaster recovery',
        'Automated backup management',
        'Compliance-ready backups'
      ],
      link: '/cloud-backup',
      category: 'Backup'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '50+', label: 'Global Data Centers', icon: <Globe className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Customers', icon: <Users className="w-6 h-6" /> },
    { number: '24/7', label: 'Expert Support', icon: <MessageSquare className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Scalable Cloud Solutions</title>
        <meta name="description" content="Comprehensive cloud services including infrastructure, storage, computing, and security. Scale your business with our enterprise-grade cloud solutions." />
        <meta name="keywords" content="cloud services, cloud infrastructure, cloud storage, cloud computing, cloud security, zion tech group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Cloud Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive cloud services including infrastructure, storage, computing, and security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cloud-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-cloud-services.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloud Services - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive cloud services including infrastructure, storage, computing, and security." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-cloud-services.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Cloud Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Scalable, secure, and reliable cloud infrastructure solutions designed to accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
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

        {/* Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Cloud Solutions</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive cloud services to power your business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {cloudServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-cyan-400 font-semibold">{service.category}</span>
                    <span className="text-lg font-bold text-white">{service.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 border-2 border-white text-white px-4 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                    >
                      Get Started
                    </Link>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Scale Your Business?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start your cloud transformation journey today with our expert team and enterprise-grade infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View All Services
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