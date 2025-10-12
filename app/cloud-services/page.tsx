'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Users,
  Database,
  Globe,
  Lock,
  BarChart3,
  Cpu,
  Smartphone
} from 'lucide-react';

export default function CloudServicesPage() {
  const cloudServices = [
    {
      name: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Data security', 'Performance optimization', '24/7 support'],
      icon: Cloud,
      path: '/cloud-migration',
      popular: true
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure setup and management',
      price: 'Starting at $3,000',
      features: ['Auto-scaling', 'Load balancing', 'High availability', 'Monitoring'],
      icon: Server,
      path: '/cloud-infrastructure'
    },
    {
      name: 'Cloud Security',
      description: 'Comprehensive security solutions for cloud environments',
      price: 'Starting at $2,500',
      features: ['Identity management', 'Data encryption', 'Threat detection', 'Compliance'],
      icon: Shield,
      path: '/cloud-security'
    },
    {
      name: 'Cloud Analytics',
      description: 'Advanced analytics and monitoring for cloud resources',
      price: 'Starting at $1,500',
      features: ['Real-time monitoring', 'Cost optimization', 'Performance insights', 'Custom dashboards'],
      icon: BarChart3,
      path: '/cloud-analytics'
    },
    {
      name: 'Multi-Cloud Strategy',
      description: 'Hybrid and multi-cloud solutions for maximum flexibility',
      price: 'Starting at $7,500',
      features: ['Multi-cloud management', 'Vendor lock-in prevention', 'Cost optimization', 'Unified monitoring'],
      icon: Globe,
      path: '/multi-cloud-strategy'
    },
    {
      name: 'Cloud Backup & Recovery',
      description: 'Reliable backup and disaster recovery solutions',
      price: 'Starting at $1,000',
      features: ['Automated backups', 'Point-in-time recovery', 'Cross-region replication', 'RTO < 1 hour'],
      icon: Database,
      path: '/cloud-backup-recovery'
    }
  ];

  const platforms = [
    { name: 'Amazon Web Services', icon: Cloud, description: 'AWS certified solutions and optimization' },
    { name: 'Microsoft Azure', icon: Server, description: 'Azure cloud services and hybrid solutions' },
    { name: 'Google Cloud Platform', icon: Globe, description: 'GCP services and AI/ML integration' },
    { name: 'Kubernetes', icon: Cpu, description: 'Container orchestration and management' }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Scalability',
      description: 'Scale resources up or down based on demand automatically'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Security',
      description: 'Enterprise-grade security with encryption and compliance'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: 'Cost Optimization',
      description: 'Reduce costs by up to 40% with optimized cloud resources'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Global Reach',
      description: 'Deploy applications worldwide with low latency'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '40%', label: 'Cost Reduction', icon: BarChart3 },
    { number: '24/7', label: 'Monitoring', icon: Zap },
    { number: '50+', label: 'Cloud Projects', icon: Cloud }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Professional Cloud Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive cloud services including migration, infrastructure, security, and analytics. Expert cloud solutions from Zion Tech Group." />
        <meta name="keywords" content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, GCP, Zion Tech Group" />
        <meta property="og:title" content="Cloud Services - Zion Tech Group" />
        <meta property="og:description" content="Professional cloud solutions including migration, infrastructure, security, and analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cloud-services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloud Services - Zion Tech Group" />
        <meta name="twitter:description" content="Professional cloud solutions including migration, infrastructure, security, and analytics." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Professional{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Cloud Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive cloud solutions. From migration to optimization, 
            we deliver scalable, secure, and cost-effective cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Cloud Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive cloud solutions designed to meet your business needs and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 hover:bg-slate-700/50 group relative ${
                service.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-2xl font-bold text-cyan-400">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Cloud Platforms We Support</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We work with all major cloud providers to deliver the best solution for your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-gray-300 text-sm">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Cloud Services?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We combine expertise with cutting-edge technology to deliver exceptional cloud solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud services can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Cloud Journey
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}