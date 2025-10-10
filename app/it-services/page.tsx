'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight } from 'lucide-react';
const ItServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    {
      id: 1,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services.',
      icon: Cloud,
      category: 'Cloud',
      features: [
        'Cloud architecture design',
        'Multi-cloud strategies',
        'Cost optimization',
        'Disaster recovery',
        'Auto-scaling solutions',
        'Security compliance'
      ],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support']
    },
    {
      id: 2,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      icon: Shield,
      category: 'Security',
      features: [
        'Threat detection & response',
        'Vulnerability assessments',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Employee training'
      ],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team']
    },
    {
      id: 3,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      icon: Settings,
      category: 'DevOps',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation'
      ],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows']
    },
    {
      id: 4,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems.',
      icon: Database,
      category: 'Database',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Data migration',
        'Security hardening',
        'Monitoring & maintenance'
      ],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support']
    },
    {
      id: 5,
      title: 'IT Infrastructure Management',
      description: 'Complete infrastructure setup and management including servers, networks, and hardware.',
      icon: Server,
      category: 'Infrastructure',
      features: [
        'Server setup & configuration',
        'Network design & implementation',
        'Hardware procurement',
        'System administration',
        'Performance monitoring',
        'Capacity planning'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-10000/month',
      benefits: ['Reliable infrastructure', 'Proactive monitoring', 'Cost optimization', 'Expert administration']
    },
    {
      id: 6,
      title: 'Managed IT Services',
      description: 'Comprehensive IT support and management including helpdesk, maintenance, and monitoring.',
      icon: Headphones,
      category: 'Support',
      features: [
        '24/7 helpdesk support',
        'Remote monitoring',
        'Proactive maintenance',
        'Software management',
        'User support',
        'Incident management'
      ],
      price: 'Starting at $800/month',
      marketPrice: '$1200-5000/month',
      benefits: ['Reduced IT costs', 'Improved uptime', 'Expert support', 'Proactive maintenance']
    },
    {
      id: 7,
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies and best practices.',
      icon: Globe,
      category: 'Development',
      features: [
        'Custom web applications',
        'Responsive design',
        'E-commerce solutions',
        'API development',
        'Performance optimization',
        'Security implementation'
      ],
      price: 'Starting at $5,000/project',
      marketPrice: '$8000-50000/project',
      benefits: ['Modern technology stack', 'Mobile-responsive design', 'SEO optimization', 'Security best practices']
    },
    {
      id: 8,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX.',
      icon: Smartphone,
      category: 'Development',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Offline capabilities'
      ],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-100000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'Modern UI/UX', 'App store optimization']
    },
    {
      id: 9,
      title: 'Data Analytics & BI',
      description: 'Business intelligence solutions with data visualization, reporting, and analytics.',
      icon: BarChart3,
      category: 'Analytics',
      features: [
        'Data visualization',
        'Business intelligence',
        'Custom dashboards',
        'Data warehousing',
        'Predictive analytics',
        'Report automation'
      ],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-15000/month',
      benefits: ['Data-driven insights', 'Custom dashboards', 'Automated reporting', 'Predictive analytics']
    },
    {
      id: 10,
      title: 'Network Solutions',
      description: 'Complete network design, implementation, and management including LAN, WAN, and wireless.',
      icon: Network,
      category: 'Networking',
      features: [
        'Network design & implementation',
        'Wireless solutions',
        'VPN setup',
        'Network security',
        'Performance optimization',
        'Monitoring & maintenance'
      ],
      price: 'Starting at $1,000/month',
      marketPrice: '$1500-6000/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Performance optimization', 'Expert management']
    },
    {
      id: 11,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help plan, implement, and optimize your technology infrastructure.',
      icon: Users,
      category: 'Consulting',
      features: [
        'IT strategy planning',
        'Technology assessment',
        'Digital transformation',
        'Vendor management',
        'Project management',
        'Change management'
      ],
      price: 'Starting at $200/hour',
      marketPrice: '$300-500/hour',
      benefits: ['Strategic guidance', 'Technology expertise', 'Cost optimization', 'Digital transformation']
    },
    {
      id: 12,
      title: 'Process Automation',
      description: 'Workflow automation solutions to streamline business processes and improve efficiency.',
      icon: Zap,
      category: 'Automation',
      features: [
        'Workflow automation',
        'Process optimization',
        'Integration solutions',
        'Document management',
        'Task automation',
        'Performance monitoring'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Improved efficiency', 'Reduced errors', 'Cost savings', 'Scalable automation']
    { 
      name: 'Cloud Infrastructure & Migration', 
      href: '/cloud-services', 
      icon: Cloud, 
      description: 'Complete cloud solutions including AWS, Azure, and GCP migration and management',
      price: 'Starting at $2,500/month',
      features: ['Cloud architecture design', 'Migration planning & execution', 'Cost optimization', 'Security compliance', '24/7 monitoring', 'Disaster recovery']
    },
    { 
      name: 'DevOps & CI/CD Pipeline', 
      href: '/devops', 
      icon: Settings, 
      description: 'Automated development workflows and deployment pipelines for faster delivery',
      price: 'Starting at $3,000/month',
      features: ['CI/CD pipeline setup', 'Container orchestration', 'Infrastructure as Code', 'Automated testing', 'Deployment automation', 'Performance monitoring']
    },
    { 
      name: 'Database Management & Optimization', 
      href: '/database', 
      icon: Database, 
      description: 'Comprehensive database services including design, optimization, and maintenance',
      price: 'Starting at $1,800/month',
      features: ['Database design & architecture', 'Performance optimization', 'Backup & recovery', 'Security hardening', 'Migration services', '24/7 support']
    },
    { 
      name: 'Cybersecurity Solutions', 
      href: '/cybersecurity', 
      icon: Shield, 
      description: 'Advanced security solutions to protect your digital assets and ensure compliance',
      price: 'Starting at $4,000/month',
      features: ['Security assessment', 'Threat detection', 'Vulnerability management', 'Compliance auditing', 'Incident response', 'Security training']
    },
    { 
      name: 'Managed IT Services', 
      href: '/managed-it', 
      icon: Settings, 
      description: 'Complete IT management including helpdesk, monitoring, and maintenance',
      price: 'Starting at $2,200/month',
      features: ['24/7 helpdesk support', 'Proactive monitoring', 'Patch management', 'Asset management', 'User training', 'Vendor management']
    },
    { 
      name: 'IT Strategy & Consulting', 
      href: '/it-consulting', 
      icon: Globe, 
      description: 'Strategic IT consulting to align technology with business objectives',
      price: 'Starting at $1,500/month',
      features: ['Technology roadmap', 'Vendor evaluation', 'Cost analysis', 'Digital transformation', 'Change management', 'Training programs']
    },
    { 
      name: 'Data Analytics & Business Intelligence', 
      href: '/data-analytics', 
      icon: Database, 
      description: 'Transform your data into actionable insights with advanced analytics solutions',
      price: 'Starting at $2,800/month',
      features: ['Data warehouse design', 'ETL/ELT processes', 'Dashboard development', 'Predictive analytics', 'Data governance', 'Real-time reporting']
    },
    { 
      name: 'Mobile Application Development', 
      href: '/mobile-development', 
      icon: Smartphone, 
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: 'Starting at $8,000/project',
      features: ['Native iOS/Android apps', 'Cross-platform development', 'UI/UX design', 'API integration', 'App store deployment', 'Maintenance & updates']
    },
    { 
      name: 'Web Application Development', 
      href: '/web-development', 
      icon: Globe, 
      description: 'Custom web applications and e-commerce solutions built with modern technologies',
      price: 'Starting at $6,000/project',
      features: ['Custom web applications', 'E-commerce solutions', 'API development', 'Responsive design', 'Performance optimization', 'SEO optimization']
    },
    { 
      name: 'Process Automation & RPA', 
      href: '/process-automation', 
      icon: Zap, 
      description: 'Automate repetitive business processes to improve efficiency and reduce costs',
      price: 'Starting at $3,500/month',
      features: ['Process analysis', 'Automation design', 'RPA implementation', 'Workflow optimization', 'Integration services', 'Training & support']
    },
    { 
      name: 'Network Infrastructure & Security', 
      href: '/network-solutions', 
      icon: Globe, 
      description: 'Complete network design, implementation, and security solutions',
      price: 'Starting at $2,000/month',
      features: ['Network design & implementation', 'Firewall configuration', 'VPN setup', 'Wireless solutions', 'Network monitoring', 'Security hardening']
    },
    { 
      name: 'IT Support & Helpdesk', 
      href: '/it-support', 
      icon: Settings, 
      description: 'Comprehensive IT support services for all your technology needs',
      price: 'Starting at $1,200/month',
      features: ['24/7 technical support', 'Remote assistance', 'Hardware maintenance', 'Software installation', 'User training', 'Issue resolution']
      description: 'Custom web applications, e-commerce platforms, and enterprise solutions',
      price: '$5,000 - $100,000',
      features: ['Custom web apps', 'E-commerce platforms', 'API development', 'Performance optimization']
    },
    { 
      name: 'Process Automation', 
      href: '/process-automation', 
      icon: Zap, 
      description: 'Workflow automation, RPA implementation, and business process optimization',
      price: '$2,000 - $25,000',
      features: ['RPA implementation', 'Workflow automation', 'API integrations', 'Process optimization']
    },
    { 
      name: 'Network Infrastructure', 
      href: '/network-infrastructure', 
      icon: Globe, 
      description: 'Network design, implementation, and optimization for enterprise environments',
      price: '$3,000 - $35,000',
      features: ['Network design', 'Wireless solutions', 'VPN setup', 'Network security']
    },
    { 
      name: 'Disaster Recovery & Backup', 
      href: '/disaster-recovery', 
      icon: Shield, 
      description: 'Comprehensive backup solutions and disaster recovery planning',
      price: '$1,000 - $15,000',
      features: ['Backup solutions', 'Disaster recovery planning', 'Business continuity', 'Testing & validation']
    }
  ];

  const categories = ['all', 'Cloud', 'Security', 'DevOps', 'Database', 'Infrastructure', 'Support', 'Development', 'Analytics', 'Networking', 'Consulting', 'Automation'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: <Server className="w-8 h-8 text-cyan-500" />, value: '500+', label: 'Servers Managed' },
    { icon: <Shield className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Security Uptime' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '200+', label: 'Clients Served' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' }
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, infrastructure management, DevOps, and more. Expert IT support and consulting for modern businesses." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, database management, web development" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we deliver enterprise-grade technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  to={service.href}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group hover:bg-slate-800/70"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="text-cyan-400 font-semibold text-lg">{service.price}</div>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
export default ItServicesPage;
