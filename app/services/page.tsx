'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, CheckCircle, ArrowRight, Brain, Cloud, Shield, BarChart3, Users, Zap, Database, FileText, Calendar, Mail, Code, Globe, Cpu, Target, TrendingUp, Lock, Settings, Monitor, Smartphone, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, DollarSign, Clock, Award, Heart, Box, Package, Mic, Headphones, Phone, MapPin, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI Customer Support',
      description: 'Intelligent chatbot and customer service automation powered by advanced AI.',
      category: 'ai',
      features: ['24/7 Availability', 'Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Management', 'Analytics Dashboard'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1500/month',
      benefits: ['Reduce support costs by 60%', 'Improve response time', 'Scale customer service', 'Better customer satisfaction']
    },
    {
      icon: BarChart3,
      title: 'AI Analytics Pro',
      description: 'Advanced data analytics and business intelligence with AI-powered insights.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Machine Learning Models', 'API Integration'],
      price: 'Starting at $399/month',
      marketPrice: '$800-2000/month',
      benefits: ['Data-driven decisions', 'Predictive insights', 'Automated reporting', 'Competitive advantage']
    },
    {
      icon: Cpu,
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing services for complex problem solving.',
      category: 'ai',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research Support', 'Custom Development'],
      price: 'Starting at $999/month',
      marketPrice: '$2000-5000/month',
      benefits: ['Exponential computing power', 'Solve complex problems', 'Future-proof technology', 'Competitive edge']
    },
    {
      icon: Target,
      title: 'Autonomous Systems',
      description: 'AI-powered autonomous systems for various business applications.',
      category: 'ai',
      features: ['Self-learning Systems', 'Decision Making', 'Process Automation', 'Adaptive Behavior', 'Monitoring', 'Maintenance'],
      price: 'Starting at $599/month',
      marketPrice: '$1200-3000/month',
      benefits: ['Reduced human intervention', 'Improved efficiency', '24/7 operation', 'Cost savings']
    },

    // IT Services
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Complete cloud infrastructure migration and optimization services.',
      category: 'it',
      features: ['AWS/Azure/GCP Migration', 'Infrastructure Design', 'Security Implementation', 'Performance Optimization', 'Cost Management', '24/7 Support'],
      price: 'Starting at $1999/project',
      marketPrice: '$5000-15000/project',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved security', 'Better performance']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solutions to protect your business.',
      category: 'it',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Staff Training'],
      price: 'Starting at $499/month',
      marketPrice: '$1000-3000/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance', 'Peace of mind']
    },
    {
      icon: Wifi,
      title: '5G Implementation',
      description: 'Next-generation 5G network implementation and optimization.',
      category: 'it',
      features: ['Network Planning', 'Infrastructure Setup', 'Performance Testing', 'Optimization', 'Monitoring', 'Maintenance'],
      price: 'Starting at $2999/project',
      marketPrice: '$8000-25000/project',
      benefits: ['Ultra-fast connectivity', 'Low latency', 'High capacity', 'Future-ready infrastructure']
    },
    {
      icon: Globe,
      title: 'Blockchain Solutions',
      description: 'Blockchain technology implementation for secure and transparent operations.',
      category: 'it',
      features: ['Smart Contracts', 'Decentralized Apps', 'Token Development', 'Security Audits', 'Integration', 'Consulting'],
      price: 'Starting at $1999/project',
      marketPrice: '$5000-20000/project',
      benefits: ['Enhanced security', 'Transparency', 'Decentralization', 'Innovation']
    },

    // Micro SaaS
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Comprehensive business analytics platform with real-time insights and reporting.',
      category: 'saas',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'API Integration', 'Automated Alerts', 'Team Collaboration'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Data-driven decisions', 'Time savings', 'Better insights', 'Competitive advantage']
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'AI-powered customer support and engagement platform with intelligent automation.',
      category: 'saas',
      features: ['AI Chatbots', 'Live Chat', 'Knowledge Base', 'Multi-channel Support', 'Analytics', 'Integration'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Improved customer service', 'Reduced support costs', '24/7 availability', 'Better engagement']
    },
    {
      icon: DollarSign,
      title: 'Zion Invoice Genius',
      description: 'Smart invoicing and financial management platform with AI-powered automation.',
      category: 'saas',
      features: ['Automated Invoicing', 'Payment Processing', 'Expense Tracking', 'Financial Reports', 'Tax Management', 'Client Portal'],
      price: 'Starting at $59/month',
      marketPrice: '$120-300/month',
      benefits: ['Streamlined billing', 'Faster payments', 'Better cash flow', 'Reduced errors']
    },
    {
      icon: TrendingUp,
      title: 'Zion Lead Magnet',
      description: 'AI-powered lead generation and marketing automation platform.',
      category: 'saas',
      features: ['Lead Scoring', 'Email Automation', 'Landing Pages', 'A/B Testing', 'Analytics', 'CRM Integration'],
      price: 'Starting at $89/month',
      marketPrice: '$180-450/month',
      benefits: ['More qualified leads', 'Higher conversion rates', 'Automated marketing', 'Better ROI']
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      category: 'saas',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery', 'Data Encryption', 'Compliance Support'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery']
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing.',
      category: 'saas',
      features: ['AI Content Generation', 'SEO Optimization', 'Multi-platform Publishing', 'Content Calendar', 'Brand Voice Customization', 'Performance Analytics'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length },
    { id: 'saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'saas').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Comprehensive AI services, IT solutions, and Micro SaaS tools. From quantum computing to cloud migration, we provide cutting-edge technology solutions for modern businesses." />
        <meta name="keywords" content="AI services, IT services, micro saas, cloud migration, cybersecurity, quantum computing, blockchain, business automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI services, IT solutions, and Micro SaaS tools designed to transform your business 
                and drive innovation in the digital age.
              </p>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          service.category === 'ai' ? 'bg-purple-600 text-white' :
                          service.category === 'it' ? 'bg-blue-600 text-white' :
                          'bg-green-600 text-white'
                        }`}>
                          {service.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-cyan-400 text-sm">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                      </div>
                      <div className="text-sm text-gray-300">
                        Save up to 50% compared to market rates
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                      <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-4 py-3 rounded-lg font-semibold transition-all duration-300">
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredServices.length === 0 && (
                <div className="text-center py-16">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                  <p className="text-gray-300 mb-6">
                    Try adjusting your search terms or category filter.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Let our experts help you choose the right services for your business needs. 
                  Get a personalized consultation and see how we can accelerate your growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="/pricing"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;