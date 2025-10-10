'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  Search,
  Filter,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Award,
  Cpu,
  Lock,
  BarChart3,
  Server,
  Code,
  Wrench,
  Headphones,
  TrendingUp,
  Target,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface ITService {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  features: string[];
  price: string;
  benefits: string[];
  marketPrice: string;
  deliveryTime: string;
  link: string;
}

const ItServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices: ITService[] = [
    {
      id: 1,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete cloud infrastructure design, deployment, and optimization for AWS, Azure, and GCP.',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      category: 'Cloud Services',
      features: [
        'Multi-cloud architecture design',
        'Auto-scaling configuration',
        'Load balancing setup',
        'Disaster recovery planning',
        'Cost optimization',
        'Security hardening',
        'Monitoring & alerting',
        '24/7 support'
      ],
      price: 'Starting at $2,500/month',
      benefits: ['99.9% uptime guarantee', '50% cost reduction', 'Scalable infrastructure', 'Enhanced security'],
      marketPrice: '$5,000/month',
      deliveryTime: '2-4 weeks',
      link: '/contact'
    },
    {
      id: 2,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessment, implementation, and monitoring services.',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      category: 'Security',
      features: [
        'Security audit & assessment',
        'Penetration testing',
        'Firewall configuration',
        'Intrusion detection systems',
        'Security monitoring',
        'Incident response',
        'Compliance management',
        'Security training'
      ],
      price: 'Starting at $1,800/month',
      benefits: ['99.9% threat detection', 'Reduced security incidents by 90%', 'Compliance ready', '24/7 monitoring'],
      marketPrice: '$4,500/month',
      deliveryTime: '1-3 weeks',
      link: '/contact'
    },
    {
      id: 3,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps implementation with automated deployment and monitoring.',
      icon: <Settings className="w-8 h-8 text-green-500" />,
      category: 'DevOps',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure as Code',
        'Automated testing',
        'Deployment automation',
        'Monitoring & logging',
        'Performance optimization',
        'Team training'
      ],
      price: 'Starting at $3,200/month',
      benefits: ['10x faster deployments', '90% reduction in errors', 'Improved team productivity', 'Better reliability'],
      marketPrice: '$7,500/month',
      deliveryTime: '3-6 weeks',
      link: '/contact'
    },
    {
      id: 4,
      title: 'Database Management',
      description: 'Database design, optimization, migration, and ongoing management services.',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      category: 'Database',
      features: [
        'Database design & architecture',
        'Performance optimization',
        'Data migration services',
        'Backup & recovery',
        'Security hardening',
        'Monitoring & maintenance',
        'Query optimization',
        'Capacity planning'
      ],
      price: 'Starting at $1,200/month',
      benefits: ['60% performance improvement', '99.9% uptime', 'Reduced maintenance costs', 'Better data security'],
      marketPrice: '$3,000/month',
      deliveryTime: '2-4 weeks',
      link: '/contact'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android.',
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
      category: 'Development',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development',
        'UI/UX design',
        'API integration',
        'Push notifications',
        'App store optimization',
        'Performance optimization',
        'Maintenance & support'
      ],
      price: 'Starting at $8,000/project',
      benefits: ['Faster time to market', 'Better user experience', 'Cross-platform compatibility', 'Ongoing support'],
      marketPrice: '$25,000/project',
      deliveryTime: '8-16 weeks',
      link: '/contact'
    },
    {
      id: 6,
      title: 'Web Application Development',
      description: 'Custom web applications with modern frameworks and responsive design.',
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      category: 'Development',
      features: [
        'Custom web applications',
        'Responsive design',
        'API development',
        'Database integration',
        'User authentication',
        'Performance optimization',
        'SEO optimization',
        'Security implementation'
      ],
      price: 'Starting at $5,000/project',
      benefits: ['Modern technology stack', 'Scalable architecture', 'Better performance', 'SEO optimized'],
      marketPrice: '$15,000/project',
      deliveryTime: '6-12 weeks',
      link: '/contact'
    },
    {
      id: 7,
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      icon: <Server className="w-8 h-8 text-orange-500" />,
      category: 'Infrastructure',
      features: [
        'Server setup & configuration',
        'Network design & implementation',
        'Hardware procurement',
        'System monitoring',
        'Backup & disaster recovery',
        'Performance optimization',
        'Security management',
        '24/7 support'
      ],
      price: 'Starting at $2,000/month',
      benefits: ['Reduced downtime', 'Better performance', 'Cost optimization', 'Proactive maintenance'],
      marketPrice: '$5,500/month',
      deliveryTime: '2-6 weeks',
      link: '/contact'
    },
    {
      id: 8,
      title: 'API Development & Management',
      description: 'Custom API development with comprehensive management and monitoring.',
      icon: <Code className="w-8 h-8 text-pink-500" />,
      category: 'API Services',
      features: [
        'RESTful API development',
        'GraphQL implementation',
        'API documentation',
        'Rate limiting & throttling',
        'Authentication & authorization',
        'API monitoring',
        'Version management',
        'Integration support'
      ],
      price: 'Starting at $1,500/month',
      benefits: ['Better integration', 'Improved performance', 'Enhanced security', 'Comprehensive documentation'],
      marketPrice: '$4,000/month',
      deliveryTime: '3-8 weeks',
      link: '/contact'
    },
    {
      id: 9,
      title: 'Data Analytics & BI',
      description: 'Business intelligence solutions with advanced analytics and reporting.',
      icon: <BarChart3 className="w-8 h-8 text-teal-500" />,
      category: 'Analytics',
      features: [
        'Data warehouse design',
        'ETL pipeline development',
        'Dashboard creation',
        'Report automation',
        'Data visualization',
        'Predictive analytics',
        'Real-time monitoring',
        'Custom metrics'
      ],
      price: 'Starting at $2,800/month',
      benefits: ['Data-driven decisions', 'Automated reporting', 'Better insights', 'Cost optimization'],
      marketPrice: '$6,500/month',
      deliveryTime: '4-8 weeks',
      link: '/contact'
    },
    {
      id: 10,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to optimize technology investments and digital transformation.',
      icon: <Target className="w-8 h-8 text-yellow-500" />,
      category: 'Consulting',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation',
        'Process optimization',
        'Vendor management',
        'Budget planning',
        'Risk assessment',
        'Implementation roadmap'
      ],
      price: 'Starting at $200/hour',
      benefits: ['Better IT strategy', 'Cost optimization', 'Risk mitigation', 'Technology alignment'],
      marketPrice: '$500/hour',
      deliveryTime: '1-4 weeks',
      link: '/contact'
    },
    {
      id: 11,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management including helpdesk, monitoring, and maintenance.',
      icon: <Headphones className="w-8 h-8 text-emerald-500" />,
      category: 'Managed Services',
      features: [
        '24/7 helpdesk support',
        'Proactive monitoring',
        'System maintenance',
        'Security management',
        'Backup & recovery',
        'Software updates',
        'Performance optimization',
        'Incident response'
      ],
      price: 'Starting at $1,500/month',
      benefits: ['Reduced IT costs', 'Better uptime', 'Proactive support', 'Expert management'],
      marketPrice: '$4,000/month',
      deliveryTime: '1-2 weeks',
      link: '/contact'
    },
    {
      id: 12,
      title: 'Network Security',
      description: 'Advanced network security solutions including firewalls, VPN, and monitoring.',
      icon: <Lock className="w-8 h-8 text-red-600" />,
      category: 'Security',
      features: [
        'Firewall configuration',
        'VPN setup & management',
        'Network monitoring',
        'Intrusion prevention',
        'Access control',
        'Security policies',
        'Compliance management',
        'Incident response'
      ],
      price: 'Starting at $1,200/month',
      benefits: ['Enhanced security', 'Better compliance', 'Reduced threats', '24/7 monitoring'],
      marketPrice: '$3,500/month',
      deliveryTime: '2-4 weeks',
      link: '/contact'
    }
  ];

  const categories = ['all', 'Cloud Services', 'Security', 'DevOps', 'Database', 'Development', 'Infrastructure', 'API Services', 'Analytics', 'Consulting', 'Managed Services'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: 'Certified Experts',
      description: 'Our team holds industry certifications and years of experience'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Secure Solutions',
      description: 'Enterprise-grade security in all our implementations'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Scalable Solutions',
      description: 'Technology that grows with your business needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, DevOps, database management, and more. Expert IT support and consulting for modern businesses." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, DevOps, database management, web development, mobile development, IT consulting" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we provide comprehensive technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
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

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert solutions that drive business success
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">{service.price}</span>
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <div>Delivery: {service.deliveryTime}</div>
                      <div className="line-through">Market Price: {service.marketPrice}</div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Key Benefit: {service.benefits[0]}
                    </div>
                    <Link 
                      to={service.link}
                      className="flex items-center text-white hover:text-cyan-400 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our IT experts to discuss your requirements and get a customized solution.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">Middletown, DE</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Quote
                </Link>
                <Link 
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ItServicesPage;