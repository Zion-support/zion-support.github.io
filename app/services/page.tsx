'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Settings, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Calendar, 
  CheckSquare, 
  FileText,
  Mail,
  CreditCard,
  Search,
  Filter,
  Eye,
  MessageSquare,
  PieChart,
  Layers,
  Cpu,
  Wifi,
  Monitor,
  Headphones,
  Camera,
  Mic,
  Video,
  Palette,
  Image,
  Music,
  Download,
  Upload,
  Share,
  Heart,
  ThumbsUp,
  Award,
  Rocket,
  Lightbulb,
  Wrench,
  Tool,
  Activity,
  Bell,
  Bookmark,
  Flag,
  Gift,
  Home,
  MapPin,
  Phone,
  Send,
  ShoppingCart,
  Tag,
  User,
  UserPlus,
  Volume2,
  WifiOff,
  X,
  Y,
  ZoomIn,
  ZoomOut,
  Bot,
  CircuitBoard,
  Cpu2,
  Database2,
  Fingerprint,
  Key,
  Lock2,
  Network,
  Server,
  Terminal,
  Wifi2
} from 'lucide-react';

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  rating: number;
  benefits: string[];
  link: string;
}

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services: Service[] = [
    // AI Services
    {
      id: '1',
      icon: Brain,
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      features: [
        'Custom AI model development',
        'Machine learning implementation',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'AI consulting and strategy',
        'Model training and optimization',
        'AI integration and deployment'
      ],
      price: 'Starting at $1,500/month',
      category: 'AI Services',
      popular: true,
      rating: 4.9,
      benefits: [
        'Improved decision making',
        'Automated processes',
        'Enhanced customer experience',
        'Cost reduction',
        'Competitive advantage'
      ],
      link: 'https://ziontechgroup.com/ai-services'
    },
    {
      id: '2',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions with AWS, Azure, and GCP integration.',
      features: [
        'Cloud architecture design',
        'Multi-cloud deployment',
        'Auto-scaling solutions',
        'Disaster recovery',
        'Security implementation',
        'Cost optimization',
        'Performance monitoring',
        '24/7 cloud support'
      ],
      price: 'Starting at $999/month',
      category: 'Infrastructure',
      popular: true,
      rating: 4.8,
      benefits: [
        'Scalable infrastructure',
        'Reduced operational costs',
        'High availability',
        'Flexible resource allocation',
        'Global reach'
      ],
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      id: '3',
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and data.',
      features: [
        'Threat detection and prevention',
        'Vulnerability assessment',
        'Security monitoring',
        'Incident response',
        'Compliance management',
        'Security training',
        'Penetration testing',
        '24/7 security support'
      ],
      price: 'Starting at $799/month',
      category: 'Security',
      popular: true,
      rating: 4.9,
      benefits: [
        'Enhanced security posture',
        'Reduced risk of breaches',
        'Compliance assurance',
        'Peace of mind',
        'Cost-effective protection'
      ],
      link: 'https://ziontechgroup.com/cybersecurity'
    },
    {
      id: '4',
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      features: [
        'Web application development',
        'Mobile app development',
        'API development',
        'System integration',
        'Database design',
        'UI/UX design',
        'Quality assurance',
        'Ongoing maintenance'
      ],
      price: 'Starting at $2,000/month',
      category: 'Development',
      popular: false,
      rating: 4.8,
      benefits: [
        'Customized solutions',
        'Scalable applications',
        'Modern technology stack',
        'Competitive advantage',
        'Ongoing support'
      ],
      link: 'https://ziontechgroup.com/custom-development'
    },
    {
      id: '5',
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      features: [
        'Business intelligence dashboards',
        'Real-time analytics',
        'Data visualization',
        'Predictive modeling',
        'Custom reporting',
        'Data integration',
        'Performance metrics',
        'Automated insights'
      ],
      price: 'Starting at $1,299/month',
      category: 'Analytics',
      popular: false,
      rating: 4.7,
      benefits: [
        'Data-driven decisions',
        'Improved performance',
        'Cost optimization',
        'Better customer insights',
        'Competitive intelligence'
      ],
      link: 'https://ziontechgroup.com/data-analytics'
    },
    {
      id: '6',
      icon: Users,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make the right technology decisions.',
      features: [
        'Technology strategy',
        'Digital transformation',
        'Process optimization',
        'Vendor evaluation',
        'Project management',
        'Change management',
        'Training and support',
        'Ongoing advisory'
      ],
      price: '$299/hour',
      category: 'Consulting',
      popular: false,
      rating: 4.8,
      benefits: [
        'Expert guidance',
        'Reduced risks',
        'Optimized investments',
        'Faster implementation',
        'Strategic planning'
      ],
      link: 'https://ziontechgroup.com/it-consulting'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'AI Services', name: 'AI Services' },
    { id: 'Infrastructure', name: 'Infrastructure' },
    { id: 'Security', name: 'Security' },
    { id: 'Development', name: 'Development' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Consulting', name: 'Consulting' }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : services.filter(service => 
        service.category === selectedCategory && (
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Our Services | Zion Tech Group - Comprehensive AI and IT Solutions</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services. From AI solutions to cloud infrastructure, we provide cutting-edge technology services for your business." />
        <meta name="keywords" content="AI services, IT services, cloud solutions, cybersecurity, custom development, data analytics, IT consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Our Services">
            Our <span className="text-cyan-400 neon-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive <span className="text-cyan-400 font-bold">AI and IT solutions</span> designed to transform your business operations 
            and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              aria-label="Call us at (302) 464-0950">
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              aria-label="Email us at kleber@ziontechgroup.com">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors appearance-none">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-slate-800">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white cyber-glow'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white neon-text">
              {selectedCategory === 'all' ? 'All Services' : `${selectedCategory}`}
            </h2>
            <span className="text-cyan-400 font-semibold">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`cyber-card group hover:scale-105 transition-all duration-300 relative ${
                service.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-slate-700/50'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          {service.rating}
                        </div>
                        <div className="text-cyan-400 font-medium">
                          {service.category}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-800/50 text-gray-300 text-xs rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300">Contact for custom pricing and implementation</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      className="flex-1 cyber-button text-center py-3 px-6 inline-flex items-center justify-center group-hover:scale-105 transition-transform"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/contact"
                      className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search terms or category filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="cyber-button"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="/contact"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-2">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </p>
              <p className="text-gray-300 text-sm">
                ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;