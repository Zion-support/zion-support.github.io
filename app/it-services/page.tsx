import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, Server, Lock, Wifi, Globe, Database, 
  CheckCircle, ArrowRight, Star, Sparkles, Rocket, 
  Zap, TrendingUp, Shield, Cpu, Users, 
  Clock, DollarSign, Award, Phone, Mail, MapPin,
  Code, Settings, BarChart3, Smartphone, Laptop
} from 'lucide-react';

export default function ITServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      id: 'cloud-migration',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration with 24/7 management and optimization. AWS, Azure, and GCP expertise.',
      price: 'Starting at $2,500',
      period: 'month',
      features: [
        'AWS/Azure/GCP expertise',
        'Zero-downtime migration',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      popular: true,
      category: 'cloud',
      rating: 4.9,
      clients: '150+',
      savings: 'Save 40% on cloud costs'
    },
    {
      id: 'infrastructure-code',
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure deployment and management using Terraform, Ansible, and Kubernetes.',
      price: 'Starting at $1,800',
      period: 'month',
      features: [
        'Terraform/Ansible',
        'Automated scaling',
        'Disaster recovery',
        'Monitoring setup',
        'CI/CD pipelines',
        'Version control'
      ],
      popular: false,
      category: 'infrastructure',
      rating: 4.8,
      clients: '120+',
      savings: 'Deploy 10x faster'
    },
    {
      id: 'cybersecurity',
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessment and implementation with SOC2 and GDPR compliance.',
      price: 'Starting at $3,200',
      period: 'month',
      features: [
        'Security audits',
        'Penetration testing',
        'Compliance (SOC2, GDPR)',
        'Incident response',
        'Security training',
        'Vulnerability management'
      ],
      popular: true,
      category: 'security',
      rating: 4.9,
      clients: '200+',
      savings: 'Reduce risk by 90%'
    },
    {
      id: '5g-implementation',
      icon: <Wifi className="w-8 h-8 text-purple-500" />,
      title: '5G Network Implementation',
      description: 'Next-generation 5G network design and deployment for enterprise and IoT applications.',
      price: 'Starting at $5,000',
      period: 'month',
      features: [
        'Network design',
        'Hardware procurement',
        'Installation',
        'Performance optimization',
        'IoT integration',
        'Edge computing'
      ],
      popular: false,
      category: 'networking',
      rating: 4.7,
      clients: '80+',
      savings: '300% performance boost'
    },
    {
      id: 'digital-transformation',
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business operations.',
      price: 'Custom pricing',
      period: 'project',
      features: [
        'Process automation',
        'Legacy system migration',
        'API development',
        'Mobile app development',
        'Data migration',
        'Change management'
      ],
      popular: true,
      category: 'transformation',
      rating: 4.8,
      clients: '100+',
      savings: 'Increase efficiency by 200%'
    },
    {
      id: 'data-analytics',
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics & BI',
      description: 'Advanced data analytics and business intelligence solutions with real-time insights.',
      price: 'Starting at $2,200',
      period: 'month',
      features: [
        'Data warehousing',
        'Real-time analytics',
        'Custom dashboards',
        'Machine learning',
        'Data visualization',
        'Predictive analytics'
      ],
      popular: false,
      category: 'analytics',
      rating: 4.7,
      clients: '90+',
      savings: 'Make data-driven decisions'
    },
    {
      id: 'devops',
      icon: <Code className="w-8 h-8 text-pink-500" />,
      title: 'DevOps & CI/CD',
      description: 'Complete DevOps implementation with automated CI/CD pipelines and monitoring.',
      price: 'Starting at $1,500',
      period: 'month',
      features: [
        'CI/CD pipelines',
        'Container orchestration',
        'Monitoring & alerting',
        'Infrastructure automation',
        'Security scanning',
        'Performance optimization'
      ],
      popular: false,
      category: 'devops',
      rating: 4.6,
      clients: '110+',
      savings: 'Deploy 5x more frequently'
    },
    {
      id: 'managed-services',
      icon: <Settings className="w-8 h-8 text-indigo-500" />,
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services including helpdesk, monitoring, and maintenance.',
      price: 'Starting at $1,200',
      period: 'month',
      features: [
        '24/7 helpdesk',
        'Proactive monitoring',
        'Patch management',
        'Backup & recovery',
        'Security updates',
        'Performance tuning'
      ],
      popular: true,
      category: 'managed',
      rating: 4.8,
      clients: '300+',
      savings: 'Reduce IT costs by 30%'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: itServices.length },
    { id: 'cloud', name: 'Cloud Services', count: itServices.filter(s => s.category === 'cloud').length },
    { id: 'infrastructure', name: 'Infrastructure', count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'security', name: 'Security', count: itServices.filter(s => s.category === 'security').length },
    { id: 'networking', name: 'Networking', count: itServices.filter(s => s.category === 'networking').length },
    { id: 'transformation', name: 'Digital Transformation', count: itServices.filter(s => s.category === 'transformation').length },
    { id: 'analytics', name: 'Analytics', count: itServices.filter(s => s.category === 'analytics').length },
    { id: 'devops', name: 'DevOps', count: itServices.filter(s => s.category === 'devops').length },
    { id: 'managed', name: 'Managed Services', count: itServices.filter(s => s.category === 'managed').length }
  ];

  const filteredServices = activeFilter === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === activeFilter);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: '200+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Zap className="w-6 h-6" /> },
    { number: '24/7', label: 'Expert Support', icon: <Clock className="w-6 h-6" /> }
  ];

  const certifications = [
    { name: 'AWS Certified', icon: <Cloud className="w-6 h-6" /> },
    { name: 'Microsoft Azure', icon: <Server className="w-6 h-6" /> },
    { name: 'Google Cloud', icon: <Database className="w-6 h-6" /> },
    { name: 'CISSP Security', icon: <Shield className="w-6 h-6" /> },
    { name: 'Kubernetes', icon: <Settings className="w-6 h-6" /> },
    { name: 'Terraform', icon: <Code className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <Helmet>
        <title>Enterprise IT Services - Cloud, Security, Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise IT services including cloud migration, cybersecurity, infrastructure management, and digital transformation. Trusted by 200+ businesses." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, infrastructure, digital transformation, managed services, DevOps, data analytics" />
        <meta name="contact" content="Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008 Middletown DE 19709" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Enterprise IT Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Comprehensive enterprise-grade IT solutions designed to scale with your business. 
              From cloud migration to cybersecurity, we provide end-to-end technology services 
              trusted by 200+ businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 max-w-4xl mx-auto mb-8">
              <p className="text-blue-300 font-semibold mb-4">Ready to modernize your IT infrastructure? Contact us now!</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
                <span className="flex items-center"><Phone className="w-4 h-4 text-blue-400 mr-2" /> +1 302 464 0950</span>
                <span className="flex items-center"><Mail className="w-4 h-4 text-blue-400 mr-2" /> kleber@ziontechgroup.com</span>
                <span className="flex items-center"><MapPin className="w-4 h-4 text-blue-400 mr-2" /> Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:via-emerald-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full mb-4 group-hover:from-blue-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Certified Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team holds industry-leading certifications and has extensive experience with 
              enterprise-grade technologies and platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl p-6 text-center hover:from-blue-500/10 hover:to-emerald-500/10 transition-all duration-300 border border-white/10 hover:border-blue-400/30">
                <div className="text-blue-400 mb-3 flex justify-center">
                  {cert.icon}
                </div>
                <p className="text-white font-semibold text-sm">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 hover:from-blue-500/10 hover:to-emerald-500/10 transition-all duration-300 border border-white/10 hover:border-blue-400/30 relative ${service.popular ? 'ring-2 ring-blue-400/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per {service.period}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{service.rating}</span>
                    <span className="ml-2">({service.clients} clients)</span>
                  </div>
                  <span className="text-green-400 font-semibold">{service.savings}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <Link 
                    to={`/contact?service=${service.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 text-center group-hover:shadow-lg group-hover:shadow-blue-500/25"
                  >
                    Get Quote
                  </Link>
                  <Link 
                    to="/contact"
                    className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-12 border border-blue-400/20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join 200+ businesses already using our enterprise IT services to modernize their 
              infrastructure, enhance security, and drive digital transformation. Get started 
              with a free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 text-white px-10 py-5 rounded-xl font-semibold hover:from-blue-700 hover:via-emerald-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Get Free Consultation
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="group border-2 border-blue-400 text-blue-400 px-10 py-5 rounded-xl font-semibold hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call +1 302 464 0950
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
              Free consultation • Custom solutions • 24/7 support • Enterprise-grade security
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}