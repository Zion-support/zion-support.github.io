'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Star, Users, Zap, ArrowRight, CheckCircle, Clock, DollarSign } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Productivity', 'Marketing', 'Analytics', 'Security', 'Development', 'Finance', 'Healthcare'];

  const microSaasServices = [
    {
      id: 1,
      name: 'AI Analytics Dashboard',
      category: 'Analytics',
      price: '$199/month',
      description: 'Real-time business intelligence with AI-powered insights and automated reporting',
      features: ['Real-time dashboards', 'AI predictions', 'Custom reports', 'Data visualization'],
      rating: 4.9,
      users: '2.5K+',
      popular: true
    },
    {
      id: 2,
      name: 'AI-Powered CRM',
      category: 'Productivity',
      price: '$149/month',
      description: 'Intelligent customer relationship management with AI insights and automation',
      features: ['Lead scoring', 'Automated follow-ups', '360° customer view', 'Sales forecasting'],
      rating: 4.8,
      users: '1.8K+',
      popular: true
    },
    {
      id: 3,
      name: 'AI Content Studio',
      category: 'Marketing',
      price: '$299/month',
      description: 'Complete content creation suite with AI writing, image generation, and automation',
      features: ['AI writing', 'Image generation', 'Video editing', 'Social media automation'],
      rating: 4.7,
      users: '3.2K+',
      popular: false
    },
    {
      id: 4,
      name: 'Security Monitoring Suite',
      category: 'Security',
      price: '$249/month',
      description: 'Real-time security monitoring with AI-powered threat detection and response',
      features: ['Threat detection', 'Incident response', 'Compliance monitoring', 'Security reports'],
      rating: 4.9,
      users: '1.2K+',
      popular: false
    },
    {
      id: 5,
      name: 'AI Chatbot Builder',
      category: 'Development',
      price: '$99/month',
      description: 'Create intelligent chatbots for customer support and lead generation',
      features: ['No-code builder', 'Multi-channel support', 'Analytics', 'Custom integrations'],
      rating: 4.6,
      users: '4.1K+',
      popular: true
    },
    {
      id: 6,
      name: 'Medical Records Manager',
      category: 'Healthcare',
      price: '$299/month',
      description: 'HIPAA-compliant patient data management with AI-powered diagnosis assistance',
      features: ['Patient records', 'AI diagnosis', 'Compliance tools', 'Automated documentation'],
      rating: 4.8,
      users: '850+',
      popular: false
    },
    {
      id: 7,
      name: 'AI Accounting Assistant',
      category: 'Finance',
      price: '$129/month',
      description: 'Automated bookkeeping, expense categorization, and financial reporting',
      features: ['Expense tracking', 'Tax preparation', 'Financial reports', 'Invoice generation'],
      rating: 4.7,
      users: '2.1K+',
      popular: false
    },
    {
      id: 8,
      name: 'Property Management AI',
      category: 'Productivity',
      price: '$199/month',
      description: 'Complete property management solution with tenant screening and automation',
      features: ['Tenant screening', 'Rent collection', 'Maintenance scheduling', 'Financial tracking'],
      rating: 4.5,
      users: '1.5K+',
      popular: false
    }
  ];

  const stats = [
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Micro SAAS Tools', value: '50+', icon: Zap },
    { label: 'Average Rating', value: '4.8/5', icon: Star },
    { label: 'Uptime', value: '99.9%', icon: Clock }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges and boost productivity.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedCategory === 'All' ? 'All Micro SaaS Tools' : `${selectedCategory} Tools`}
              </h2>
              <p className="text-gray-300">
                {filteredServices.length} tools available
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  {service.popular && (
                    <div className="absolute -top-2 -right-2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{service.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{service.users}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <span className="text-sm text-gray-400">per month</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No tools found matching your criteria.</p>
                <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find exactly what you need? Our team can create a custom micro SaaS solution tailored to your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Request Custom Solution
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;