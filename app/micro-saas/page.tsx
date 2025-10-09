import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, CheckCircle, ArrowRight, Code, Database, Cloud, Shield, Users, Zap } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSAASServices = [
    {
      name: 'AI Content Generator',
      description: 'Generate high-quality content using AI for blogs, social media, and marketing materials.',
      category: 'ai',
      features: ['Content Templates', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training'],
      price: '$99/month',
      rating: 4.8,
      users: '2.5K+'
    },
    {
      name: 'Project Management Pro',
      description: 'Advanced project management with AI-powered insights and automation.',
      category: 'productivity',
      features: ['Task Automation', 'Team Collaboration', 'Progress Tracking', 'AI Insights'],
      price: '$149/month',
      rating: 4.9,
      users: '1.8K+'
    },
    {
      name: 'Data Analytics Dashboard',
      description: 'Real-time data visualization and analytics for business intelligence.',
      category: 'analytics',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Integration', 'Predictive Analytics'],
      price: '$199/month',
      rating: 4.7,
      users: '1.2K+'
    },
    {
      name: 'Customer Support Bot',
      description: 'AI-powered customer support automation with natural language processing.',
      category: 'ai',
      features: ['24/7 Support', 'Multi-channel Integration', 'Sentiment Analysis', 'Escalation Management'],
      price: '$79/month',
      rating: 4.6,
      users: '3.1K+'
    },
    {
      name: 'Email Marketing Suite',
      description: 'Comprehensive email marketing platform with AI-driven personalization.',
      category: 'marketing',
      features: ['Email Templates', 'A/B Testing', 'Automation Workflows', 'Performance Analytics'],
      price: '$129/month',
      rating: 4.8,
      users: '2.2K+'
    },
    {
      name: 'Inventory Management',
      description: 'Smart inventory tracking with predictive analytics and automated reordering.',
      category: 'business',
      features: ['Real-time Tracking', 'Predictive Analytics', 'Supplier Integration', 'Cost Optimization'],
      price: '$179/month',
      rating: 4.5,
      users: '950+'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Filter },
    { id: 'ai', name: 'AI Solutions', icon: Zap },
    { id: 'productivity', name: 'Productivity', icon: Code },
    { id: 'analytics', name: 'Analytics', icon: Database },
    { id: 'marketing', name: 'Marketing', icon: Users },
    { id: 'business', name: 'Business', icon: Cloud }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems with AI and automation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of micro SaaS solutions designed to solve specific business problems with AI and automation.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-cyan-400 font-semibold text-lg">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.users} users</div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Try Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We can build a custom micro SaaS solution tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASPage;
