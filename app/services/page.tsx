'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  Target,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      category: 'ai',
      pricing: 'Starting at $1,500/month',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities and exception handling.',
      category: 'ai',
      pricing: 'Starting at $399/month',
      features: ['Workflow Automation', 'Process Optimization', 'Smart Decision Making']
    },
    {
      icon: BarChart,
      title: 'AI Analytics',
      description: 'Advanced data analytics and business intelligence powered by artificial intelligence.',
      category: 'ai',
      pricing: 'Starting at $999/month',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards']
    },
    {
      icon: Users,
      title: 'AI Customer Support',
      description: 'Revolutionary AI-powered customer support with chatbots and intelligent automation.',
      category: 'ai',
      pricing: 'Starting at $199/month',
      features: ['24/7 Chatbots', 'Intelligent Routing', 'Sentiment Analysis']
    },

    // IT Services
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Comprehensive cloud solutions with AWS, Azure, and Google Cloud Platform.',
      category: 'it',
      pricing: 'Starting at $1,299/month',
      features: ['Cloud Migration', 'Auto-scaling', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and data.',
      category: 'it',
      pricing: 'Starting at $799/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business needs.',
      category: 'it',
      pricing: 'Starting at $1,500/month',
      features: ['Web Applications', 'API Development', 'System Integration']
    },
    {
      icon: Globe,
      title: 'Network Solutions',
      description: 'Enterprise networking, VPN setup, and network security with 24/7 monitoring.',
      category: 'it',
      pricing: 'Starting at $699/month',
      features: ['Network Design', 'VPN Configuration', 'Security Monitoring']
    },

    // Micro SAAS
    {
      icon: Target,
      title: 'AI Lead Generation',
      description: 'Automated lead identification and qualification using AI algorithms.',
      category: 'micro-saas',
      pricing: '$199/month',
      features: ['Lead Scoring', 'Prospect Identification', 'Email Sequences']
    },
    {
      icon: BarChart,
      title: 'Smart Analytics',
      description: 'Real-time business analytics with AI insights and automated reporting.',
      category: 'micro-saas',
      pricing: '$49/month',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports']
    },
    {
      icon: Code,
      title: 'Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages.',
      category: 'micro-saas',
      pricing: '$39/month',
      features: ['Code Completion', 'Debugging Help', 'Multi-language Support']
    },
    {
      icon: Shield,
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection and prioritization.',
      category: 'micro-saas',
      pricing: '$25/month',
      features: ['AI Issue Detection', 'Priority Scoring', 'Team Collaboration']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length },
    { id: 'micro-saas', name: 'Micro SAAS', count: services.filter(s => s.category === 'micro-saas').length }
  ];

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, cloud infrastructure, cybersecurity, and micro SAAS solutions. Transform your business today." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cloud infrastructure, cybersecurity, machine learning, automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations and drive growth.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-4">{service.pricing}</div>
                      <a
                        href="/contact"
                        className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Contact our experts to discuss your specific needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;