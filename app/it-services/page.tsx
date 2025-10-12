import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Cloud, Shield, Database, Code2, Smartphone, Wifi, Server, Lock, Monitor, Star, Clock, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration with zero downtime and comprehensive cloud infrastructure management.',
      features: ['Zero-downtime migration', 'Multi-cloud strategy', 'Cost optimization', 'Security compliance', '24/7 monitoring', 'Auto-scaling'],
      pricing: 'Starting at $2,500/project',
      link: '/cloud-services',
      popular: true,
      neon: 'neon-glow-blue'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and compliance management.',
      features: ['Threat detection', 'Vulnerability assessment', 'Compliance management', 'Security audits', 'Incident response', 'Penetration testing'],
      pricing: 'Starting at $1,500/month',
      link: '/ai-cybersecurity-suite',
      popular: false,
      neon: 'neon-glow-red'
    },
    {
      icon: <Database className="w-12 h-12 text-cyan-400" />,
      title: 'Data Analytics & BI',
      description: 'Transform raw data into actionable insights with advanced analytics and business intelligence solutions.',
      features: ['Data warehousing', 'ETL processes', 'Business intelligence', 'Custom dashboards', 'Machine learning', 'Real-time reporting'],
      pricing: 'Starting at $2,000/month',
      link: '/ai-data-analytics',
      popular: false,
      neon: 'neon-glow-cyan'
    },
    {
      icon: <Code2 className="w-12 h-12 text-purple-400" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline development with automated deployment, continuous integration, and infrastructure as code.',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Security scanning', 'Auto-deployment'],
      pricing: 'Starting at $3,000/month',
      link: '/it-services',
      popular: true,
      neon: 'neon-glow-purple'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-400" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications with modern UI/UX and seamless performance.',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'UI/UX design', 'API integration', 'App store deployment', 'Maintenance & support'],
      pricing: 'Starting at $5,000/project',
      link: '/it-services',
      popular: false,
      neon: 'neon-glow-green'
    },
    {
      icon: <Wifi className="w-12 h-12 text-yellow-400" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds.',
      features: ['5G network design', 'IoT integration', 'Edge computing', 'Low latency solutions', 'Massive connectivity', 'Network optimization'],
      pricing: 'Starting at $10,000/project',
      link: '/5g-implementation',
      popular: false,
      neon: 'neon-glow-yellow'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Target className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Clock className="w-6 h-6 text-green-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Users className="w-6 h-6 text-purple-400" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Star className="w-6 h-6 text-blue-400" /> }
  ]

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Complete IT infrastructure solutions including cloud migration, cybersecurity, DevOps, mobile development, and 5G implementation. Professional technology services for modern enterprises." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, mobile development, 5G implementation, technology solutions, infrastructure management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Complete <span className="cyber-text">IT Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT infrastructure solutions including cloud migration, cybersecurity, DevOps, mobile development, and 5G implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="cyber-button text-lg px-8 py-4"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="cyber-button-secondary text-lg px-8 py-4"
            >
              Learn More
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="cyber-text">IT Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of IT services designed to modernize and secure your technology infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className={`cyber-card h-full ${service.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className={`w-16 h-16 ${service.neon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-purple-400 font-semibold text-lg mb-4">{service.pricing}</div>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="cyber-text">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IT solutions are built with enterprise-grade technology and designed to deliver reliable, scalable, and secure infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise-Grade Infrastructure</h3>
              <p className="text-gray-300">Scalable, secure, and reliable IT infrastructure designed to support your business growth.</p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Expertise</h3>
              <p className="text-gray-300">Years of experience delivering complex IT solutions for businesses of all sizes.</p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
              <p className="text-gray-300">Bank-level security and compliance with industry standards to protect your data and operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="holographic-border p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Modernize Your IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your IT needs and create a comprehensive solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button text-lg px-8 py-4"
              >
                Get Free IT Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="cyber-button-secondary text-lg px-8 py-4"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
