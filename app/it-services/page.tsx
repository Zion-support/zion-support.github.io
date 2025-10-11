'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Settings, 
  Monitor, 
  BarChart, 
  Package, 
  Wifi, 
  Lock, 
  Calendar, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Award,
  Brain,
  Cpu,
  Server,
  Workflow,
  Zap,
  Target,
  Heart,
  FileText,
  MessageCircle,
  ShoppingCart,
  Rocket,
  Lightbulb,
  Gauge,
  Link as LinkIcon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services, cost optimization, and 99.9% uptime guarantee.',
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Cloud architecture design',
        'Multi-cloud strategies',
        'Cost optimization',
        'Disaster recovery',
        'Auto-scaling',
        'Security compliance',
        '24/7 monitoring',
        'Performance optimization'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Cost reduction up to 40%',
        'Scalable infrastructure',
        'Expert migration support',
        'Enhanced security',
        'Improved performance'
      ],
      category: 'Cloud',
      popular: true,
      icon: Cloud,
      rating: 4.9,
      users: '1,800+',
      freeTrial: '30 days',
      implementationTime: '4-8 weeks'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions with threat detection, vulnerability assessments, penetration testing, and 24/7 security monitoring.',
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: [
        'Threat detection & response',
        'Vulnerability assessments',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Employee training',
        'Incident response',
        'Security audits'
      ],
      benefits: [
        '24/7 security monitoring',
        'Reduced security incidents',
        'Compliance assurance',
        'Expert security team',
        'Proactive threat detection',
        'Cost-effective protection'
      ],
      category: 'Security',
      popular: true,
      icon: Shield,
      rating: 4.8,
      users: '2,200+',
      freeTrial: '30 days',
      implementationTime: '2-6 weeks'
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance, SEO, and user experience.',
      price: '$5,000/project',
      marketPrice: '$10000-30000/project',
      features: [
        'React/Next.js development',
        'Responsive design',
        'SEO optimization',
        'Performance tuning',
        'Security implementation',
        'Content management',
        'E-commerce solutions',
        'API integration'
      ],
      benefits: [
        'Modern technology stack',
        'SEO optimized',
        'Mobile responsive',
        'Fast loading times',
        'Secure applications',
        'Scalable architecture'
      ],
      category: 'Development',
      popular: true,
      icon: Globe,
      rating: 4.9,
      users: '3,500+',
      freeTrial: 'N/A',
      implementationTime: '6-12 weeks'
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience and performance.',
      price: '$8,000/project',
      marketPrice: '$15000-50000/project',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization',
        'UI/UX design',
        'Backend integration'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'App store success',
        'User engagement',
        'Scalable solutions',
        'Modern design'
      ],
      category: 'Development',
      popular: true,
      icon: Smartphone,
      rating: 4.8,
      users: '2,800+',
      freeTrial: 'N/A',
      implementationTime: '8-16 weeks'
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, infrastructure as code, and continuous integration.',
      price: '$2,200/month',
      marketPrice: '$3500-10000/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation',
        'Environment management',
        'Performance monitoring'
      ],
      benefits: [
        'Faster deployments',
        'Reduced downtime',
        'Improved code quality',
        'Automated workflows',
        'Better collaboration',
        'Cost optimization'
      ],
      category: 'DevOps',
      popular: true,
      icon: Settings,
      rating: 4.9,
      users: '1,600+',
      freeTrial: '14 days',
      implementationTime: '3-6 weeks'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems with AI-powered performance tuning.',
      price: '$1,200/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Data migration',
        'Security hardening',
        'Monitoring & maintenance',
        'Query optimization',
        'Scalability planning'
      ],
      benefits: [
        'Improved performance',
        'Data security',
        'Automated backups',
        'Expert DBA support',
        'Cost optimization',
        'High availability'
      ],
      category: 'Database',
      popular: false,
      icon: Database,
      rating: 4.7,
      users: '1,400+',
      freeTrial: '14 days',
      implementationTime: '2-4 weeks'
    },
    {
      id: 'api-development',
      name: 'API Development',
      description: 'RESTful and GraphQL API development with comprehensive documentation, testing, and integration support.',
      price: '$1,500/month',
      marketPrice: '$2500-8000/month',
      features: [
        'RESTful API design',
        'GraphQL implementation',
        'API documentation',
        'Authentication & authorization',
        'Rate limiting',
        'API testing',
        'Integration support',
        'Performance optimization'
      ],
      benefits: [
        'Scalable APIs',
        'Comprehensive documentation',
        'Secure implementation',
        'Easy integration',
        'Performance optimized',
        'Developer-friendly'
      ],
      category: 'Development',
      popular: true,
      icon: Code,
      rating: 4.8,
      users: '2,100+',
      freeTrial: '14 days',
      implementationTime: '3-6 weeks'
    },
    {
      id: 'it-support',
      name: 'IT Support & Maintenance',
      description: 'Comprehensive IT support, system maintenance, and troubleshooting with guaranteed response times and 24/7 availability.',
      price: '$1,000/month',
      marketPrice: '$1500-5000/month',
      features: [
        '24/7 technical support',
        'System maintenance',
        'Troubleshooting',
        'Software updates',
        'Hardware support',
        'Network monitoring',
        'Security patches',
        'Performance optimization'
      ],
      benefits: [
        '24/7 availability',
        'Fast response times',
        'Proactive maintenance',
        'Cost-effective support',
        'Expert technicians',
        'Reduced downtime'
      ],
      category: 'Support',
      popular: true,
      icon: Monitor,
      rating: 4.9,
      users: '4,200+',
      freeTrial: '30 days',
      implementationTime: '1-2 weeks'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics & BI',
      description: 'Business intelligence solutions with data visualization, reporting, and analytics to drive informed decision making.',
      price: '$1,800/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Data visualization',
        'Business intelligence',
        'Custom dashboards',
        'Automated reporting',
        'Data integration',
        'Predictive analytics',
        'Real-time insights',
        'Mobile access'
      ],
      benefits: [
        'Data-driven decisions',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
        'Better performance',
        'Cost optimization'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart,
      rating: 4.8,
      users: '1,900+',
      freeTrial: '14 days',
      implementationTime: '4-8 weeks'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Enterprise networking solutions including VPN setup, load balancing, network security, and 24/7 monitoring.',
      price: '$1,500/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Network design & setup',
        'VPN configuration',
        'Load balancing',
        'Network security',
        '24/7 monitoring',
        'Performance optimization',
        'Disaster recovery',
        'Scalability planning'
      ],
      benefits: [
        'Reliable connectivity',
        'Enhanced security',
        'Optimized performance',
        '24/7 monitoring',
        'Scalable solutions',
        'Cost-effective networking'
      ],
      category: 'Infrastructure',
      popular: false,
      icon: Wifi,
      rating: 4.7,
      users: '1,300+',
      freeTrial: '14 days',
      implementationTime: '3-6 weeks'
    },
    {
      id: 'blockchain-development',
      name: 'Blockchain Development',
      description: 'Smart contracts, DeFi applications, and blockchain solutions with security audits and compliance support.',
      price: '$3,000/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Smart contract development',
        'DeFi applications',
        'Blockchain integration',
        'Security audits',
        'Token development',
        'DApp development',
        'Compliance support',
        'Performance optimization'
      ],
      benefits: [
        'Secure blockchain solutions',
        'DeFi integration',
        'Compliance ready',
        'Expert development',
        'Scalable architecture',
        'Future-proof technology'
      ],
      category: 'Blockchain',
      popular: false,
      icon: LinkIcon,
      rating: 4.6,
      users: '800+',
      freeTrial: '30 days',
      implementationTime: '8-16 weeks'
    },
    {
      id: 'iot-development',
      name: 'IoT Development',
      description: 'Connected device solutions for smart cities, industrial automation, and IoT applications with real-time monitoring.',
      price: '$2,200/month',
      marketPrice: '$3500-12000/month',
      features: [
        'IoT device development',
        'Sensor integration',
        'Real-time monitoring',
        'Data analytics',
        'Mobile applications',
        'Cloud integration',
        'Security implementation',
        'Scalability planning'
      ],
      benefits: [
        'Connected solutions',
        'Real-time monitoring',
        'Data insights',
        'Cost optimization',
        'Scalable architecture',
        'Enhanced efficiency'
      ],
      category: 'IoT',
      popular: false,
      icon: Cpu,
      rating: 4.7,
      users: '1,100+',
      freeTrial: '30 days',
      implementationTime: '6-12 weeks'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: itServices.length },
    { id: 'Cloud', name: 'Cloud', count: itServices.filter(s => s.category === 'Cloud').length },
    { id: 'Security', name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { id: 'Development', name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { id: 'DevOps', name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { id: 'Database', name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
    { id: 'Support', name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { id: 'Analytics', name: 'Analytics', count: itServices.filter(s => s.category === 'Analytics').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { id: 'Blockchain', name: 'Blockchain', count: itServices.filter(s => s.category === 'Blockchain').length },
    { id: 'IoT', name: 'IoT', count: itServices.filter(s => s.category === 'IoT').length }
  ];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        const priceA = a.price.includes('/month') ? parseInt(a.price.replace('$', '').replace('/month', '')) : parseInt(a.price.replace('$', '').replace('/project', '')) * 0.1;
        const priceB = b.price.includes('/month') ? parseInt(b.price.replace('$', '').replace('/month', '')) : parseInt(b.price.replace('$', '').replace('/project', '')) * 0.1;
        return priceA - priceB;
      case 'price-high':
        const priceA2 = a.price.includes('/month') ? parseInt(a.price.replace('$', '').replace('/month', '')) : parseInt(a.price.replace('$', '').replace('/project', '')) * 0.1;
        const priceB2 = b.price.includes('/month') ? parseInt(b.price.replace('$', '').replace('/month', '')) : parseInt(b.price.replace('$', '').replace('/project', '')) * 0.1;
        return priceB2 - priceA2;
      case 'rating':
        return b.rating - a.rating;
      case 'users':
        return parseInt(b.users.replace(',', '').replace('+', '')) - parseInt(a.users.replace(',', '').replace('+', ''));
      default:
        return b.popular ? 1 : -1;
    }
  });

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Complete Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, DevOps, and more. Transform your technology infrastructure." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps, database management, IT support" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete technology infrastructure solutions to modernize your business. From cloud migration to cybersecurity, 
              we provide comprehensive IT services that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
                <div className="text-gray-300 text-sm">IT Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">25K+</div>
                <div className="text-gray-300 text-sm">Systems Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">4.8/5</div>
                <div className="text-gray-300 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="users">Most Users</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service) => (
                <div key={service.id} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {service.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                          </div>
                          <span className="text-gray-400 text-sm">•</span>
                          <span className="text-sm text-gray-300">{service.users} users</span>
                        </div>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-cyan-400 text-sm font-medium">{service.freeTrial}</span>
                      <div className="text-gray-400 text-xs">{service.implementationTime}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">+{service.features.length - 4} more features</li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-green-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our IT Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span className="text-cyan-400">IT Services</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver IT solutions that drive real business results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  Modern Technology Stack
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We use the latest technologies, frameworks, and best practices to deliver cutting-edge IT solutions.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  Proven Track Record
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our IT solutions have helped clients achieve 99.9% uptime, 40% cost reduction, and improved efficiency.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  Expert Team
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our certified IT professionals have decades of experience in delivering enterprise-grade solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 25,000+ businesses that have already transformed their IT infrastructure with our services. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free consultation • ✓ No obligation • ✓ 30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ItServicesPage;