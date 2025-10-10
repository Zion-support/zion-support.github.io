'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight } from 'lucide-react'
const ItServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
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
    }
  ]
  const categories = ['all', 'Cloud', 'Security', 'DevOps', 'Database', 'Infrastructure', 'Support', 'Development', 'Analytics', 'Networking', 'Consulting', 'Automation']
  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  const stats = [
    { icon: <Server className="w-8 h-8 text-cyan-500" />, value: '500+', label: 'Servers Managed' },
    { icon: <Shield className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Security Uptime' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '200+', label: 'Clients Served' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' }
  ]
  return (
    <React.Fragment>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, infrastructure management, DevOps, and more. Expert IT support and consulting for modern businesses." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, database management, web development" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we deliver enterprise-grade technology services.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <$2 />
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              <$2 />
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Free Consultation
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <$2 />
                  key={index}
                  to={service.href}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  <p className="text-gray-300 mb-4">{service.description}
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}
                  <div className="text-gray-300">{stat.label}
              ))}
  )
}
export default ItServicesPage</div></div></div></div></div></div></div></div></span></span></p></p></h1></h3></section></section>