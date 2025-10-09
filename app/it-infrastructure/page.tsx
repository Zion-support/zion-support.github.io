'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Server, Shield, Zap, Settings, Phone, ArrowRight, Database, Cloud, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const ITInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server setup, configuration, and maintenance services',
      features: ['24/7 monitoring', 'Performance optimization', 'Security hardening', 'Backup solutions']
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Expert database design, optimization, and management services',
      features: ['Performance tuning', 'Data migration', 'Backup & recovery', 'Security management']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern business needs',
      features: ['AWS/Azure/GCP', 'Hybrid cloud', 'Cost optimization', 'Disaster recovery']
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Advanced security solutions to protect your infrastructure',
      features: ['Firewall management', 'Intrusion detection', 'VPN setup', 'Security audits']
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Complete system administration and maintenance services',
      features: ['User management', 'Software updates', 'Performance monitoring', 'Troubleshooting']
    },
    {
      icon: Cpu,
      title: 'Hardware Solutions',
      description: 'Professional hardware procurement and configuration services',
      features: ['Server procurement', 'Network equipment', 'Storage solutions', 'Hardware maintenance']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$800',
      period: '/month',
      description: 'Essential infrastructure support',
      features: [
        'Up to 5 servers',
        'Basic monitoring',
        'Email support',
        'Monthly maintenance',
        'Backup solutions'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,600',
      period: '/month',
      description: 'Comprehensive infrastructure management',
      features: [
        'Up to 20 servers',
        'Advanced monitoring',
        'Priority support',
        'Weekly maintenance',
        'Security management',
        'Cloud integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$3,200',
      period: '/month',
      description: 'Full-scale infrastructure solutions',
      features: [
        'Unlimited servers',
        '24/7 monitoring',
        'Dedicated support',
        'Daily maintenance',
        'Advanced security',
        'Custom solutions',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Server, value: '500+', label: 'Servers Managed' },
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: Zap, value: '50%', label: 'Cost Reduction' },
    { icon: CheckCircle, value: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Infrastructure Services - Server Management & Cloud Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional IT infrastructure services including server management, cloud solutions, database administration, and network security. 99.9% uptime guarantee." />
        <meta name="keywords" content="IT infrastructure, server management, cloud services, database administration, network security, system administration" />
        <link rel="canonical" href="https://ziontechgroup.com/it-infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                IT Infrastructure Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive infrastructure solutions for modern businesses
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                From server management to cloud solutions, we provide end-to-end IT infrastructure services 
                that ensure reliability, security, and optimal performance for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/demo"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  View Demo
                </a>
              </div>
            </div>
          </section>


"


