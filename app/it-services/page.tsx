'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Database, Code, HardDrive, ArrowRight, EyeOff, Mail, Cloud, Shield, Users, Star, TrendingUp, Clock, Target, Zap, CheckCircle, Globe, Smartphone, Wifi, Cpu, Lock, Eye, MousePointer, Filter, Settings, Calendar, FileText, PieChart, Activity, DollarSign, Heart, ThumbsUp, Share2, Hash, Image, Video, Camera, Search, Menu, X, ChevronDown, Home, BarChart, ChevronRight, Play, Award, Lightbulb, Rocket, MapPin, Github, Linkedin, Twitter, Phone, Brain, MessageSquare, Palette, Mic } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function ItServicesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const itServices = [
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced security.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      category: 'cloud',
      price: '$2,500/project',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Data security', 'Cost optimization', '24/7 support', 'Performance monitoring'],
      status: 'live',
      users: '1,200+',
      rating: 4.9,
      link: '/cloud-migration',
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from cyber threats and data breaches.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      category: 'security',
      price: '$499/month',
      features: ['Threat detection', 'Security audits', 'Compliance management', 'Incident response', 'Penetration testing', 'Security training'],
      status: 'live',
      users: '800+',
      rating: 4.8,
      link: '/cybersecurity',
      technologies: ['SIEM', 'Firewall', 'VPN', 'MFA', 'Encryption', 'SOC']
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      icon: <Code className="w-8 h-8 text-green-400" />,
      category: 'development',
      price: '$3,000/project',
      features: ['Responsive design', 'SEO optimization', 'Performance optimization', 'Security implementation', 'CMS integration', 'E-commerce solutions'],
      status: 'live',
      users: '2,500+',
      rating: 4.7,
      link: '/web-development',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL']
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX.',
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      category: 'development',
      price: '$5,000/project',
      features: ['iOS & Android apps', 'Cross-platform development', 'App store optimization', 'Push notifications', 'Offline functionality', 'API integration'],
      status: 'live',
      users: '1,800+',
      rating: 4.6,
      link: '/mobile-development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS']
    },
    {
      id: 'devops',
      name: 'DevOps Solutions',
      description: 'Streamline your development and deployment processes with automated CI/CD pipelines.',
      icon: <Workflow className="w-8 h-8 text-orange-400" />,
      category: 'devops',
      price: '$1,200/month',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & logging', 'Auto-scaling', 'Disaster recovery', 'Performance optimization'],
      status: 'live',
      users: '1,500+',
      rating: 4.8,
      link: '/devops',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible']
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      category: 'analytics',
      price: '$899/month',
      features: ['Data visualization', 'Predictive analytics', 'Real-time dashboards', 'ETL processes', 'Machine learning', 'Custom reports'],
      status: 'live',
      users: '1,100+',
      rating: 4.7,
      link: '/data-analytics',
      technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Hadoop']
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance and security.',
      icon: <Network className="w-8 h-8 text-indigo-400" />,
      category: 'infrastructure',
      price: '$1,500/project',
      features: ['Network design', 'Wireless solutions', 'VPN setup', 'Load balancing', 'Network monitoring', 'Security implementation'],
      status: 'live',
      users: '900+',
      rating: 4.8,
      link: '/network-infrastructure',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Ubiquiti', 'Palo Alto', 'F5']
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Comprehensive database services including design, optimization, and maintenance.',
      icon: <Database className="w-8 h-8 text-pink-400" />,
      category: 'database',
      price: '$699/month',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services', '24/7 monitoring'],
      status: 'live',
      users: '1,300+',
      rating: 4.6,
      link: '/database-management',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle']
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your infrastructure.',
      icon: <Users className="w-8 h-8 text-teal-400" />,
      category: 'consulting',
      price: '$200/hour',
      features: ['Technology assessment', 'Strategic planning', 'Vendor evaluation', 'Cost optimization', 'Digital transformation', 'Training programs'],
      status: 'live',
      users: '2,000+',
      rating: 4.9,
      link: '/it-consulting',
      technologies: ['Architecture Design', 'Technology Stack', 'Best Practices', 'Compliance', 'Security', 'Performance']
    },
    {
      id: 'managed-it',
      name: 'Managed IT Services',
      description: 'Complete IT management services including monitoring, maintenance, and support for your business.',
      icon: <Settings className="w-8 h-8 text-yellow-400" />,
      category: 'managed',
      price: '$299/month',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Help desk support', 'Security management', 'Backup solutions', 'Software updates'],
      status: 'live',
      users: '3,500+',
      rating: 4.7,
      link: '/managed-it',
      technologies: ['RMM Tools', 'PSA Software', 'Monitoring Systems', 'Backup Solutions', 'Security Tools', 'Remote Access']
    },
    {
      id: 'blockchain-solutions',
      name: 'Blockchain Solutions',
      description: 'Develop and deploy blockchain applications and smart contracts for various business use cases.',
      icon: <Layers className="w-8 h-8 text-violet-400" />,
      category: 'blockchain',
      price: '$4,000/project',
      features: ['Smart contracts', 'DApp development', 'Token creation', 'DeFi solutions', 'NFT platforms', 'Blockchain consulting'],
      status: 'live',
      users: '600+',
      rating: 4.5,
      link: '/blockchain-solutions',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'MetaMask', 'Truffle']
    },
    {
      id: 'iot-solutions',
      name: 'IoT Solutions',
      description: 'Internet of Things solutions for connected devices, sensors, and smart systems.',
      icon: <Wifi className="w-8 h-8 text-emerald-400" />,
      category: 'iot',
      price: '$2,800/project',
      features: ['Device connectivity', 'Data collection', 'Real-time monitoring', 'Analytics dashboard', 'Mobile apps', 'Cloud integration'],
      status: 'live',
      users: '400+',
      rating: 4.4,
      link: '/iot-solutions',
      technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'AWS IoT', 'Azure IoT', 'Google Cloud IoT']
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services', count: itServices.length },
    { id: 'cloud', name: 'Cloud Services', count: itServices.filter(s => s.category === 'cloud').length },
    { id: 'security', name: 'Cybersecurity', count: itServices.filter(s => s.category === 'security').length },
    { id: 'development', name: 'Development', count: itServices.filter(s => s.category === 'development').length },
    { id: 'devops', name: 'DevOps', count: itServices.filter(s => s.category === 'devops').length },
    { id: 'analytics', name: 'Analytics', count: itServices.filter(s => s.category === 'analytics').length },
    { id: 'infrastructure', name: 'Infrastructure', count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'database', name: 'Database', count: itServices.filter(s => s.category === 'database').length },
    { id: 'consulting', name: 'Consulting', count: itServices.filter(s => s.category === 'consulting').length },
    { id: 'managed', name: 'Managed Services', count: itServices.filter(s => s.category === 'managed').length },
    { id: 'blockchain', name: 'Blockchain', count: itServices.filter(s => s.category === 'blockchain').length },
    { id: 'iot', name: 'IoT Solutions', count: itServices.filter(s => s.category === 'iot').length }
  ];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, web development, mobile apps, DevOps, and more. Trusted by 1000+ businesses worldwide." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, web development, mobile development, devops, data analytics, network infrastructure, managed it services" />
      </Helmet>

      <FuturisticBackground variant="services">
        <div className="pt-20 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive technology solutions to power your business growth. From cloud migration to cybersecurity, we've got you covered.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredServices.map((service) => (
                <FuturisticCard
                  key={service.id}
                  variant="service"
                  className="h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {service.icon}
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            service.status === 'live' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {service.status === 'live' ? 'Live' : 'Beta'}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{service.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.users} clients</div>
                  </div>

                  <div className="flex space-x-2">
                    <FuturisticButton
                      variant="primary"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      Get Quote
                    </FuturisticButton>
                    <FuturisticButton
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      <Eye className="w-4 h-4" />
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              ))}
            </div>

            {/* CTA Section */}
            <FuturisticCard variant="feature" className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 1000+ businesses that trust us with their technology needs. Let's discuss how we can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  View Portfolio
                </FuturisticButton>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </FuturisticBackground>
    </>
  );
}