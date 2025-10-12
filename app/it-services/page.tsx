import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Cloud, Shield, Code, Database, Zap, Users, Globe, Lock } from 'lucide-react';
'use client';

const ITServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      price: 'Starting at $5,000',
      features: [
        'Cloud migration and setup',
        'Infrastructure as Code',
        'Auto-scaling solutions',
        'Cost optimization',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'Infrastructure'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      price: 'Starting at $3,000',
      features: [
        'Security assessment',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Incident response',
        'Staff training'
      ],
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500',
      category: 'Security'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      price: 'Starting at $2,500',
      features: [
        'Custom web applications',
        'E-commerce solutions',
        'API development',
        'Performance optimization',
        'Mobile responsiveness',
        'SEO optimization'
      ],
      icon: <Code className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      category: 'Development'
    },
    {
      title: 'Database Management',
      description: 'Efficient database design, optimization, and management services',
      price: 'Starting at $1,500',
      features: [
        'Database design',
        'Performance tuning',
        'Data migration',
        'Backup strategies',
        'Security implementation',
        'Monitoring setup'
      ],
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      category: 'Data'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment pipelines',
      price: 'Starting at $4,000',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring and logging',
        'Deployment strategies',
        'Team training'
      ],
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'Operations'
    },
    {
      title: 'IT Support & Consulting',
      description: 'Expert IT support and strategic consulting for your business needs',
      price: 'Starting at $1,000',
      features: [
        '24/7 technical support',
        'System administration',
        'IT strategy planning',
        'Technology assessment',
        'Vendor management',
        'Staff training'
      ],
      icon: <Users className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'Support'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Development', 'Data', 'Operations', 'Support'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, and more." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, DevOps, database management" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            IT Services
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to modernize your infrastructure, enhance security, 
            and accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-cyan-400 font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-3">
                  <Link
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center flex items-center justify-center"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert team help you build a robust, scalable, and secure IT environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;