'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cpu, Shield, Globe, Users, Award, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Phone, Mail, MapPin, Clock, Star, Zap, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, FileText } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      category: 'ai',
      title: 'AI Solutions',
      description: 'Comprehensive AI solutions including machine learning, natural language processing, and computer vision.',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $5,000/month'
    },
    {
      category: 'cloud',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Multi-cloud Strategy'],
      price: 'Starting at $2,000/month'
    },
    {
      category: 'development',
      title: 'Custom Development',
      description: 'Tailored software solutions built with cutting-edge technologies.',
      icon: Code,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      price: 'Starting at $150/hour'
    },
    {
      category: 'analytics',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      icon: BarChart,
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Predictive Modeling'],
      price: 'Starting at $3,000/month'
    },
    {
      category: 'security',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response'],
      price: 'Starting at $4,000/month'
    },
    {
      category: 'consulting',
      title: 'IT Consulting',
      description: 'Strategic technology consulting to drive digital transformation.',
      icon: Users,
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Change Management'],
      price: 'Starting at $200/hour'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Settings },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'consulting', name: 'Consulting', icon: Users }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI and IT solutions including cloud services, custom development, data analytics, cybersecurity, and strategic consulting."
        keywords="AI solutions, cloud services, custom development, data analytics, cybersecurity, IT consulting"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI and IT solutions designed to transform your business and drive innovation across all industries.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-semibold">{service.price}</span>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                    Learn More
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your goals and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;