'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Users, 
  Code, 
  Zap, 
  Database, 
  Globe, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Play,
  Award,
  Clock,
  DollarSign,
  Sparkles,
  Rocket,
  Cpu,
  BarChart3,
  Target,
  Activity,
  Heart,
  Mail,
  Bot,
  Palette,
  FileText,
  Lock,
  Eye,
  Music,
  FlaskConical
} from 'lucide-react';

export default function ITServicesPage() {
  const itServices = [
    {
      title: 'Cloud Migration & Setup',
      description: 'Seamless migration to cloud platforms with zero downtime',
      price: '$1,999/month',
      features: ['AWS Migration', 'Azure Setup', 'GCP Configuration', 'Data Migration'],
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      href: '/cloud-migration'
    },
    {
      title: 'Enterprise Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      price: '$2,499/month',
      features: ['Threat Detection', 'Security Monitoring', 'Compliance Management', 'Incident Response'],
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      href: '/cybersecurity'
    },
    {
      title: 'IT Infrastructure Design',
      description: 'Scalable and secure IT infrastructure for your business needs',
      price: '$1,799/month',
      features: ['Network Design', 'Server Configuration', 'Security Implementation', 'Performance Optimization'],
      icon: Settings,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      href: '/it-infrastructure'
    },
    {
      title: '24/7 IT Support',
      description: 'Round-the-clock technical support and maintenance',
      price: '$999/month',
      features: ['24/7 Monitoring', 'Remote Support', 'Hardware Maintenance', 'Software Updates'],
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      href: '/it-support'
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions for your specific business requirements',
      price: '$3,999/month',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      icon: Code,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      href: '/custom-development'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes',
      price: '$2,299/month',
      features: ['CI/CD Pipeline', 'Automated Testing', 'Deployment Automation', 'Monitoring Setup'],
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      href: '/devops-cicd'
    },
    {
      title: 'Database Management',
      description: 'Optimized database performance and management solutions',
      price: '$1,499/month',
      features: ['Database Optimization', 'Backup & Recovery', 'Performance Tuning', 'Security Hardening'],
      icon: Database,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      href: '/database-management'
    },
    {
      title: 'Network Design',
      description: 'Secure and efficient network infrastructure design',
      price: '$1,299/month',
      features: ['Network Architecture', 'Security Implementation', 'Performance Optimization', 'Monitoring Setup'],
      icon: Globe,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      href: '/network-design'
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management and optimization',
      price: '$1,999/month',
      features: ['Multi-Cloud Management', 'Cost Optimization', 'Security Monitoring', 'Auto-Scaling'],
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      href: '/cloud-infrastructure-management'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced cybersecurity solutions and threat protection',
      price: '$2,999/month',
      features: ['Threat Detection', 'Zero Trust Security', 'Compliance Management', 'Incident Response'],
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      href: '/cybersecurity-solutions'
    }
  ];

  const stats = [
    { number: "500+", label: "Infrastructures Managed", icon: Cloud },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services - Infrastructure & Cloud Solutions | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure design, and 24/7 support. Enterprise-grade IT solutions for your business." 
        />
        <meta 
          name="keywords" 
          content="IT services, cloud migration, cybersecurity, infrastructure, DevOps, database management, network design, IT support" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Enterprise IT Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Services
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                & Infrastructure
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT services to build, secure, and maintain your technology 
              infrastructure. From cloud migration to cybersecurity, we provide enterprise-grade 
              solutions that scale with your business.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our IT
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of IT services designed to build, secure, 
              and optimize your technology infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <a
                key={index}
                href={service.href}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div className={`${service.color} font-bold text-lg`}>{service.price}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              IT Infrastructure?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our IT experts help you build a robust, secure, and scalable technology 
            infrastructure. Get a free consultation and discover how we can optimize your IT operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/consultation"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center"
            >
              <Cloud className="w-5 h-5 mr-2" />
              Get Free IT Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/demo"
              className="group border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              View IT Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}