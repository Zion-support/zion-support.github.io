import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, FileText, Users, CreditCard, Calendar, Share2, Mail, CheckCircle, ArrowRight, Phone, ExternalLink, Star, Zap, Target, Award, Globe, DollarSign, Clock, Shield, Brain, Cloud, Search, Filter, TrendingUp, BarChart, Settings, Database, Lock, MessageSquare, Camera, Heart, Atom } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getServicesByCategory, Service } from '../data/services';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasServices = getServicesByCategory('micro-saas');

  const categories = [
    { id: 'all', name: 'All Micro SAAS', icon: Code, count: microSaasServices.length },
    { id: 'content-creation', name: 'Content Creation', icon: FileText, count: microSaasServices.filter(s => s.subcategory === 'content-creation').length },
    { id: 'crm', name: 'CRM & Sales', icon: Users, count: microSaasServices.filter(s => s.subcategory === 'crm').length },
    { id: 'finance', name: 'Finance & Billing', icon: CreditCard, count: microSaasServices.filter(s => s.subcategory === 'finance').length },
    { id: 'project-management', name: 'Project Management', icon: Calendar, count: microSaasServices.filter(s => s.subcategory === 'project-management').length },
    { id: 'social-media', name: 'Social Media', icon: Share2, count: microSaasServices.filter(s => s.subcategory === 'social-media').length },
    { id: 'email-marketing', name: 'Email Marketing', icon: Mail, count: microSaasServices.filter(s => s.subcategory === 'email-marketing').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSaasServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.subcategory === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return filtered;
  }, [microSaasServices, selectedCategory, searchTerm]);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'FileText': FileText,
      'Users': Users,
      'Receipt': CreditCard,
      'Calendar': Calendar,
      'Share2': Share2,
      'Mail': Mail
    };
    return iconMap[iconName] || Code;
  };

  const formatPrice = (pricing: Service['pricing']) => {
    if (pricing.period === 'one-time') {
      return `$${pricing.starting.toLocaleString()}`;
    }
    return `$${pricing.starting.toLocaleString()}/${pricing.period}`;
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Applications</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS applications designed to streamline business operations. AI-powered tools for content creation, CRM, project management, and more." />
        <meta name="keywords" content="micro SAAS, business applications, AI tools, content creation, CRM automation, project management, email marketing, social media management" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Solutions</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Powerful, AI-driven micro SAAS applications designed to streamline your business operations. From content creation to project management, we provide specialized tools that solve specific business challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
              <span>6+ Micro SAAS Applications</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
              <span>AI-Powered Intelligence</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Enterprise Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search micro SAAS applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">Filter by category:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of specialized business applications designed to solve specific challenges and streamline operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = getIconComponent(service.icon);
              return (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-cyan-400/20 text-cyan-400 rounded-full">
                          {service.subcategory.toUpperCase()}
                        </span>
                        {service.pricing.popular && (
                          <span className="text-xs px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-bold">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-gray-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300">{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">
                        {formatPrice(service.pricing)}
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.marketPrice && (
                          <span>Market: ${service.marketPrice.min}-${service.marketPrice.max}/{service.marketPrice.period}</span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Implementation</div>
                      <div className="text-sm text-white">{service.implementationTime}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={`/contact?service=${service.id}`}
                      className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="bg-slate-800 text-cyan-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                      >
                        <Phone className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                        Call
                      </a>
                      <a
                        href={`mailto:${service.contactEmail}?subject=Inquiry about ${service.name}`}
                        className="bg-slate-800 text-purple-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                      >
                        <Mail className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                        Email
                      </a>
                    </div>
                    {service.demoUrl && (
                      <a
                        href={service.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-slate-800 text-gray-300 py-2 px-4 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        View Demo
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No applications found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Micro SAAS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Micro SAAS Solutions</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep business expertise to deliver micro SAAS applications that solve real problems and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Intelligence</h3>
              <p className="text-gray-300">Every application leverages advanced AI to learn, adapt, and improve over time, delivering increasingly better results.</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <Zap className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Rapid Implementation</h3>
              <p className="text-gray-300">Get up and running in days, not months. Our applications are designed for quick deployment and immediate value.</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 Type II, ISO 27001, and GDPR compliance to protect your data and privacy.</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <Target className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Focused Solutions</h3>
              <p className="text-gray-300">Each application solves a specific business challenge with laser focus, avoiding feature bloat and complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our micro SAAS applications can streamline your workflows, boost productivity, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>📍 {contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;