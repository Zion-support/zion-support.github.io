import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Server, Shield, Cloud, Code, Database, Network, Smartphone, Globe, Lock, Zap, Users, BarChart3, Settings, Monitor, HardDrive, Wifi, Cpu, MemoryStick, HardDriveIcon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const itServices = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete cloud infrastructure design, deployment, and management for AWS, Azure, and Google Cloud.',
      features: ['Multi-cloud deployment', 'Auto-scaling', 'Load balancing', 'Disaster recovery', '24/7 monitoring', 'Cost optimization'],
      pricing: 'Starting at $2,500/month',
      link: '/cloud-infrastructure-setup',
      popular: true,
      category: 'Infrastructure',
      duration: '2-4 weeks',
      rating: '4.9'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat assessment, penetration testing, and security monitoring.',
      features: ['Security audits', 'Penetration testing', 'Threat monitoring', 'Incident response', 'Compliance support', 'Security training'],
      pricing: 'Starting at $1,800/month',
      link: '/cybersecurity-solutions',
      popular: true,
      category: 'Security',
      duration: '1-3 weeks',
      rating: '4.8'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and workflows.',
      features: ['Custom applications', 'API development', 'Database design', 'Mobile apps', 'Web applications', 'Legacy modernization'],
      pricing: 'Starting at $150/hour',
      link: '/custom-software-development',
      popular: true,
      category: 'Development',
      duration: '4-12 weeks',
      rating: '4.7'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Database Management',
      description: 'Professional database design, optimization, migration, and ongoing maintenance services.',
      features: ['Database design', 'Performance optimization', 'Data migration', 'Backup strategies', 'Security hardening', 'Monitoring'],
      pricing: 'Starting at $1,200/month',
      link: '/database-management',
      popular: false,
      category: 'Data',
      duration: '1-2 weeks',
      rating: '4.6'
    },
    {
      icon: <Network className="w-8 h-8 text-red-500" />,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise-grade connectivity.',
      features: ['Network design', 'Router configuration', 'Switch management', 'Firewall setup', 'VPN solutions', 'Network monitoring'],
      pricing: 'Starting at $2,000/month',
      link: '/network-infrastructure',
      popular: false,
      category: 'Infrastructure',
      duration: '2-3 weeks',
      rating: '4.5'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      features: ['iOS development', 'Android development', 'Cross-platform', 'UI/UX design', 'App store deployment', 'Maintenance'],
      pricing: 'Starting at $8,000/project',
      link: '/mobile-app-development',
      popular: false,
      category: 'Development',
      duration: '6-16 weeks',
      rating: '4.8'
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Migration Services',
      description: 'Seamless migration of your existing infrastructure to cloud platforms with zero downtime.',
      features: ['Assessment planning', 'Data migration', 'Application migration', 'Testing & validation', 'Go-live support', 'Training'],
      pricing: 'Starting at $5,000/project',
      link: '/cloud-migration-services',
      popular: false,
      category: 'Migration',
      duration: '4-8 weeks',
      rating: '4.7'
    },
    {
      icon: <Monitor className="w-8 h-8 text-indigo-500" />,
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support services including helpdesk, maintenance, and system administration.',
      features: ['24/7 helpdesk', 'System maintenance', 'Software updates', 'Hardware support', 'User training', 'Documentation'],
      pricing: 'Starting at $1,500/month',
      link: '/it-support-maintenance',
      popular: false,
      category: 'Support',
      duration: 'Ongoing',
      rating: '4.6'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: 'Business Intelligence Solutions',
      description: 'Data analytics and business intelligence solutions to drive informed decision-making.',
      features: ['Data warehousing', 'Dashboard creation', 'Report automation', 'Predictive analytics', 'Data visualization', 'KPI tracking'],
      pricing: 'Starting at $3,000/month',
      link: '/business-intelligence-solutions',
      popular: false,
      category: 'Analytics',
      duration: '3-6 weeks',
      rating: '4.8'
    },
    {
      icon: <Settings className="w-8 h-8 text-teal-500" />,
      title: 'System Integration',
      description: 'Connect and integrate disparate systems to create a unified, efficient technology ecosystem.',
      features: ['API integration', 'Data synchronization', 'Workflow automation', 'System testing', 'Documentation', 'Training'],
      pricing: 'Starting at $2,200/month',
      link: '/system-integration',
      popular: false,
      category: 'Integration',
      duration: '2-5 weeks',
      rating: '4.5'
    },
    {
      icon: <Lock className="w-8 h-8 text-emerald-500" />,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',
      features: ['Automated backups', 'Disaster recovery', 'Data encryption', 'Offsite storage', 'Recovery testing', 'Compliance'],
      pricing: 'Starting at $800/month',
      link: '/data-backup-recovery',
      popular: false,
      category: 'Security',
      duration: '1-2 weeks',
      rating: '4.7'
    },
    {
      icon: <Wifi className="w-8 h-8 text-violet-500" />,
      title: '5G Implementation',
      description: 'Complete 5G network implementation and optimization for ultra-fast connectivity and IoT integration.',
      features: ['5G network design', 'IoT integration', 'Edge computing', 'Performance optimization', 'Security setup', 'Monitoring'],
      pricing: 'Starting at $15,000/project',
      link: '/5g-implementation',
      popular: false,
      category: 'Infrastructure',
      duration: '8-12 weeks',
      rating: '4.9'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Rapid Deployment',
      description: 'Fast implementation with minimal disruption to your business operations.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your data and systems.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your peace of mind.'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Development', 'Data', 'Migration', 'Support', 'Analytics', 'Integration'];
  
  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Certified Experts' },
    { number: '24/7', label: 'Support Available' }
  ];

  const technologies = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔵' },
    { name: 'Google Cloud', icon: '🌐' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, custom development, and system integration." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, custom development, system integration, IT support" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Professional
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {' '}IT Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to modernize your infrastructure, enhance security, and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/micro-saas-services" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Micro SaaS
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stay current with the latest technologies to deliver cutting-edge solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="text-2xl mr-2">{tech.icon}</span>
                <span className="text-white font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-bold text-white">{service.pricing}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-400">{service.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-300">★ {service.rating}</span>
                  </div>
                </div>
                
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver reliable, scalable, and secure IT solutions that drive business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can modernize your technology and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/ai-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITServicesPage;
