'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, ArrowRight, Phone, Mail, MapPin, CheckCircle, Award, Calendar, Settings, FileText, Database, Smartphone, Lock, Code, PieChart, Activity, CreditCard, ShoppingCart, Camera, Music, Video, Palette, Wrench, Lightbulb, Rocket, Heart } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSAASServices = useMemo(() => [
    {
      id: 1,
      name: 'AI Content Generator',
      description: 'Generate high-quality content using advanced AI algorithms',
      category: 'ai',
      price: '$29/month',
      features: ['Content templates', 'SEO optimization', 'Multi-language support'],
      icon: Brain,
      rating: 4.8,
      users: 1250
    },
    {
      id: 2,
      name: 'Expense Tracker Pro',
      description: 'Smart expense tracking with receipt scanning and categorization',
      category: 'finance',
      price: '$19/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts'],
      icon: CreditCard,
      rating: 4.6,
      users: 890
    },
    {
      id: 3,
      name: 'Social Media Scheduler',
      description: 'Schedule and manage posts across all social platforms',
      category: 'marketing',
      price: '$39/month',
      features: ['Multi-platform posting', 'Analytics dashboard', 'Content calendar'],
      icon: Calendar,
      rating: 4.7,
      users: 2100
    },
    {
      id: 4,
      name: 'Project Time Tracker',
      description: 'Track time spent on projects with detailed reporting',
      category: 'productivity',
      price: '$15/month',
      features: ['Time tracking', 'Project reports', 'Team collaboration'],
      icon: Clock,
      rating: 4.5,
      users: 650
    },
    {
      id: 5,
      name: 'Email Signature Manager',
      description: 'Create and manage professional email signatures',
      category: 'communication',
      price: '$9/month',
      features: ['Template library', 'Brand consistency', 'Team management'],
      icon: Mail,
      rating: 4.4,
      users: 320
    },
    {
      id: 6,
      name: 'Password Security Checker',
      description: 'Audit and improve your password security',
      category: 'security',
      price: '$12/month',
      features: ['Password audit', 'Security recommendations', 'Breach monitoring'],
      icon: Shield,
      rating: 4.9,
      users: 1800
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI Tools', icon: Brain },
    { id: 'finance', name: 'Finance', icon: CreditCard },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'communication', name: 'Communication', icon: MessageSquare }
  ];

  const filteredServices = useMemo(() => {
    return microSAASServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [microSAASServices, searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover powerful micro SaaS solutions for your business. AI tools, productivity apps, and specialized software to streamline your operations." />
        <meta name="keywords" content="micro SaaS, business tools, productivity software, AI tools, business automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Micro <span className="text-blue-600">SaaS</span> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Powerful, focused tools that solve specific business problems
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                Discover our collection of micro SaaS applications designed to streamline your workflow, 
                boost productivity, and solve everyday business challenges with elegant, purpose-built solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SaaS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section id="services" className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Solutions
              </h2>
              <p className="text-xl text-gray-600">
                {filteredServices.length} micro SaaS solutions found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-600">{service.rating}</span>
                        <span className="text-sm text-gray-500 ml-2">({service.users} users)</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Try Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No solutions found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter</p>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="bg-blue-600 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We can build a custom micro SaaS solution tailored to your specific business needs. 
                Let's discuss your requirements and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;