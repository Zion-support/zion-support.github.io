'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart, 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Settings, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI Solutions',
      category: 'ai',
      description: 'Cutting-edge artificial intelligence solutions to automate processes and enhance decision-making.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      icon: Brain,
      price: 'Custom',
      duration: '3-6 months'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      category: 'infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud Platform integration.',
      features: ['Cloud Migration', 'DevOps', 'Containerization', 'Auto-scaling'],
      icon: Cloud,
      price: 'From $2,000/month',
      duration: '2-4 months'
    },
    {
      id: 3,
      title: 'Cybersecurity',
      category: 'security',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      icon: Shield,
      price: 'From $1,500/month',
      duration: '1-3 months'
    },
    {
      id: 4,
      title: 'Data Analytics',
      category: 'analytics',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling', 'Real-time Analytics'],
      icon: BarChart,
      price: 'From $3,000/month',
      duration: '2-5 months'
    },
    {
      id: 5,
      title: 'Web Development',
      category: 'development',
      description: 'Modern, responsive web applications built with the latest technologies.',
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Progressive Web Apps'],
      icon: Code,
      price: 'From $5,000',
      duration: '1-4 months'
    },
    {
      id: 6,
      title: 'Mobile Development',
      category: 'development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
      icon: Smartphone,
      price: 'From $8,000',
      duration: '2-6 months'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'security', name: 'Security' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'development', name: 'Development' }
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
        <title>Our Services | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud infrastructure and cybersecurity." />
        <meta name="keywords" content="AI services, IT solutions, cloud infrastructure, cybersecurity, data analytics, web development, mobile development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business and drive innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-slate-800">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-12 h-12 text-cyan-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-gray-500">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Duration: {service.duration}</span>
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ServicesPage;