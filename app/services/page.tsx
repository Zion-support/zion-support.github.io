'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Search, 
  Filter, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Phone, 
  Mail,
  Brain,
  Cloud,
  Shield,
  Zap,
  Settings,
  Database,
  Smartphone,
  Globe,
  BarChart3,
  Users,
  Target,
  TrendingUp,
  Code,
  Lock,
  Monitor,
  Cpu,
  Layers,
  Workflow,
  Headphones,
  DollarSign,
  Heart,
  FileText,
  MessageSquare,
  Eye,
  Mic,
  Palette,
  Bot,
  Server,
  Network
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6;

  const allServices = [
    // AI Services
    {
      id: 1,
      title: 'AI Chatbot Development',
      description: 'Intelligent conversational AI that provides 24/7 customer support and engagement.',
      icon: Bot,
      category: 'AI',
      price: 'Starting at $299/month',
      features: ['Natural language processing', 'Multi-language support', 'CRM integration', 'Analytics dashboard'],
      popular: true
    },
    {
      id: 2,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing.',
      icon: FileText,
      category: 'AI',
      price: 'Starting at $199/month',
      features: ['Blog post generation', 'Social media content', 'SEO optimization', 'Brand voice customization'],
      popular: false
    },
    {
      id: 3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms.',
      icon: BarChart3,
      category: 'AI',
      price: 'Starting at $399/month',
      features: ['Predictive analytics', 'Real-time dashboards', 'Automated reporting', 'Custom data models'],
      popular: true
    },
    {
      id: 4,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation.',
      icon: Eye,
      category: 'AI',
      price: 'Starting at $599/month',
      features: ['Object detection', 'Quality control', 'Facial recognition', 'Real-time processing'],
      popular: false
    },
    {
      id: 5,
      title: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions.',
      icon: Mic,
      category: 'AI',
      price: 'Starting at $249/month',
      features: ['Speech-to-text', 'Voice synthesis', 'Call analytics', 'Multi-language support'],
      popular: false
    },
    {
      id: 6,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows.',
      icon: Workflow,
      category: 'AI',
      price: 'Starting at $349/month',
      features: ['Process mining', 'Workflow optimization', 'Task automation', 'Exception handling'],
      popular: true
    },

    // IT Services
    {
      id: 7,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services.',
      icon: Cloud,
      category: 'IT',
      price: 'Starting at $2,500/month',
      features: ['Cloud architecture design', 'Migration planning', 'Cost optimization', '24/7 monitoring'],
      popular: true
    },
    {
      id: 8,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      icon: Shield,
      category: 'IT',
      price: 'Starting at $1,800/month',
      features: ['Threat detection', 'Vulnerability assessments', 'Compliance management', '24/7 SOC'],
      popular: true
    },
    {
      id: 9,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      icon: Settings,
      category: 'IT',
      price: 'Starting at $2,200/month',
      features: ['CI/CD pipeline setup', 'Container orchestration', 'Infrastructure as Code', 'Performance monitoring'],
      popular: false
    },
    {
      id: 10,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems.',
      icon: Database,
      category: 'IT',
      price: 'Starting at $1,200/month',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening'],
      popular: false
    },
    {
      id: 11,
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies and best practices.',
      icon: Globe,
      category: 'IT',
      price: 'Starting at $5,000/project',
      features: ['Custom web apps', 'Responsive design', 'E-commerce solutions', 'API development'],
      popular: false
    },
    {
      id: 12,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX.',
      icon: Smartphone,
      category: 'IT',
      price: 'Starting at $8,000/project',
      features: ['iOS & Android apps', 'Cross-platform development', 'UI/UX design', 'App store optimization'],
      popular: true
    },

    // Micro SaaS Services
    {
      id: 13,
      title: 'Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics and predictive insights.',
      icon: BarChart3,
      category: 'Micro SaaS',
      price: '$89/month',
      features: ['Real-time visualization', 'Predictive analytics', 'Custom dashboards', 'API access'],
      popular: true
    },
    {
      id: 14,
      title: 'AI Customer Support Suite',
      description: 'Complete customer support solution with AI chatbot and live chat.',
      icon: MessageSquare,
      category: 'Micro SaaS',
      price: '$149/month',
      features: ['GPT-4 powered AI', 'Multi-channel support', 'Sentiment analysis', 'CRM integration'],
      popular: true
    },
    {
      id: 15,
      title: 'Security Monitor Pro',
      description: 'Enterprise-grade security monitoring with threat detection and compliance.',
      icon: Shield,
      category: 'Micro SaaS',
      price: '$299/month',
      features: ['AI threat detection', 'Real-time monitoring', 'Compliance reporting', '24/7 SOC support'],
      popular: false
    },
    {
      id: 16,
      title: 'Cloud Backup Enterprise',
      description: 'Comprehensive cloud backup with disaster recovery and version control.',
      icon: Cloud,
      category: 'Micro SaaS',
      price: '$79/month',
      features: ['AI-optimized backup', 'Cross-cloud backup', 'Instant recovery', 'End-to-end encryption'],
      popular: false
    },
    {
      id: 17,
      title: 'Performance Tracker Plus',
      description: 'Advanced application performance monitoring with AI-powered insights.',
      icon: Monitor,
      category: 'Micro SaaS',
      price: '$129/month',
      features: ['Real-time APM', 'AI anomaly detection', 'Error tracking', 'Performance optimization'],
      popular: false
    },
    {
      id: 18,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation with AI-powered workflow optimization.',
      icon: Workflow,
      category: 'Micro SaaS',
      price: '$199/month',
      features: ['Workflow automation', 'AI insights', 'Integration capabilities', 'Process mining'],
      popular: true
    }
  ];

  const categories = ['All', 'AI', 'IT', 'Micro SaaS'];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const currentServices = filteredServices.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT solutions including chatbots, cloud migration, cybersecurity, micro SaaS, and more. Transform your business with our expert services." />
        <meta name="keywords" content="AI services, IT solutions, cloud migration, cybersecurity, micro SaaS, web development, mobile apps, data analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business and drive growth.
              </p>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
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
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">
                  {selectedCategory === 'All' ? 'All Services' : `${selectedCategory} Services`}
                </h2>
                <span className="text-gray-300">
                  {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentServices.map((service) => (
                  <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                    {service.popular && (
                      <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </div>
                    )}
                    <div className="flex items-start mb-6">
                      <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                        <service.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="text-cyan-400 font-semibold text-lg mb-4">
                          {service.price}
                        </div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-sm text-cyan-400">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link
                        to="/contact"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                    >
                      Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          currentPage === index + 1
                            ? 'bg-cyan-500 text-white'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss your project and explore how our services can help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Us
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                  >
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default ServicesPage;