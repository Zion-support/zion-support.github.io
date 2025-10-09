'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Shield, Globe, Users, Award, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Phone, Mail, MapPin, Clock, Star, Zap, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cpu },
    { id: 'industry', name: 'Industry Solutions', icon: Building },
    { id: 'advanced', name: 'Advanced Tech', icon: Zap }
  ];

  const allServices = [
    // AI Services
    {
      id: 'ai-analytics',
      name: 'AI Analytics Platform',
      category: 'ai',
      icon: BarChart,
      price: '$299/month',
      description: 'Advanced AI-powered analytics with real-time insights and predictive analytics',
      features: ['Real-time processing', 'Predictive analytics', 'Custom dashboards', '95% accuracy'],
      href: '/ai-analytics',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      category: 'ai',
      icon: Settings,
      price: '$399/month',
      description: 'Intelligent automation platform that streamlines business processes',
      features: ['Process automation', 'Document processing', 'Email automation', 'Exception handling'],
      href: '/ai-automation',
      color: 'from-purple-400 to-pink-600'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      category: 'ai',
      icon: Users,
      price: '$199/month',
      description: '24/7 AI-powered customer support with natural language processing',
      features: ['NLP processing', 'Multi-language support', 'Sentiment analysis', 'Human handoff'],
      href: '/ai-customer-support',
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization',
      category: 'ai',
      icon: PieChart,
      price: '$249/month',
      description: 'Intelligent data visualization with auto-chart generation',
      features: ['Auto-chart generation', 'Interactive dashboards', 'Real-time updates', 'Custom styling'],
      href: '/ai-data-visualization',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing',
      category: 'ai',
      icon: Mail,
      price: '$149/month',
      description: 'AI-powered email marketing with optimization and automation',
      features: ['Content generation', 'Send time optimization', 'A/B testing', 'Performance analytics'],
      href: '/ai-email-marketing',
      color: 'from-pink-400 to-rose-600'
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      category: 'ai',
      icon: Target,
      price: '$349/month',
      description: 'Intelligent sales automation with lead scoring and pipeline management',
      features: ['Lead scoring', 'Prospect identification', 'Follow-up automation', 'Sales forecasting'],
      href: '/ai-sales-automation',
      color: 'from-indigo-400 to-purple-600'
    },

    // IT Services
    {
      id: 'cloud-migration',
      name: 'Cloud Migration',
      category: 'it',
      icon: Cloud,
      price: 'Custom',
      description: 'Seamless migration to cloud platforms with zero downtime',
      features: ['AWS, Azure, GCP', 'Zero-downtime migration', 'Cost optimization', '24/7 support'],
      href: '/cloud-migration',
      color: 'from-blue-400 to-cyan-600'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      category: 'it',
      icon: Users,
      price: '$150/hour',
      description: 'Strategic IT consulting for digital transformation',
      features: ['Technology strategy', 'Digital transformation', 'IT assessment', 'Team training'],
      href: '/it-consulting',
      color: 'from-purple-400 to-indigo-600'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      category: 'it',
      icon: Shield,
      price: '$299/month',
      description: 'Comprehensive cybersecurity with threat detection and compliance',
      features: ['Threat detection', 'Security audit', 'Penetration testing', 'Compliance management'],
      href: '/cybersecurity',
      color: 'from-red-400 to-pink-600'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      category: 'it',
      icon: Database,
      price: '$199/month',
      description: 'Expert database administration and optimization services',
      features: ['Database optimization', 'Performance tuning', 'Backup & recovery', 'Security hardening'],
      href: '/database-management',
      color: 'from-green-400 to-teal-600'
    },
    {
      id: 'system-integration',
      name: 'System Integration',
      category: 'it',
      icon: Settings,
      price: 'Custom',
      description: 'Seamless integration of disparate systems and platforms',
      features: ['API development', 'Legacy integration', 'Real-time sync', 'Custom middleware'],
      href: '/system-integration',
      color: 'from-orange-400 to-red-600'
    },
    {
      id: 'network-security',
      name: 'Network Security',
      category: 'it',
      icon: Lock,
      price: '$249/month',
      description: 'Comprehensive network security solutions and monitoring',
      features: ['Firewall configuration', 'Intrusion detection', 'VPN management', 'Network monitoring'],
      href: '/network-security',
      color: 'from-gray-400 to-slate-600'
    },

    // Industry Solutions
    {
      id: 'ai-healthcare',
      name: 'Healthcare AI',
      category: 'industry',
      icon: Stethoscope,
      price: '$1,999/month',
      description: 'AI solutions for medical imaging, drug discovery, and personalized medicine',
      features: ['Medical imaging', 'Drug discovery', 'Personalized medicine', 'HIPAA compliance'],
      href: '/ai-healthcare',
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 'ai-fintech',
      name: 'Fintech AI',
      category: 'industry',
      icon: CreditCard,
      price: '$1,499/month',
      description: 'AI-powered financial services and fraud detection',
      features: ['Trading algorithms', 'Fraud detection', 'Risk management', 'Compliance'],
      href: '/ai-fintech',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      id: 'ai-manufacturing',
      name: 'Manufacturing AI',
      category: 'industry',
      icon: Factory,
      price: '$2,499/month',
      description: 'Industrial AI for smart manufacturing and quality control',
      features: ['Quality control', 'Predictive maintenance', 'Supply chain optimization', 'IoT integration'],
      href: '/ai-manufacturing',
      color: 'from-orange-400 to-red-600'
    },
    {
      id: 'ai-retail',
      name: 'Retail AI',
      category: 'industry',
      icon: ShoppingCart,
      price: '$999/month',
      description: 'AI solutions for e-commerce and retail optimization',
      features: ['Inventory management', 'Customer analytics', 'Price optimization', 'Recommendation engines'],
      href: '/ai-retail',
      color: 'from-pink-400 to-rose-600'
    },
    {
      id: 'ai-education',
      name: 'Education AI',
      category: 'industry',
      icon: GraduationCap,
      price: '$799/month',
      description: 'AI-powered educational technology and learning management',
      features: ['Personalized learning', 'Assessment tools', 'Student analytics', 'Content generation'],
      href: '/ai-education',
      color: 'from-purple-400 to-violet-600'
    },
    {
      id: 'ai-transportation',
      name: 'Transportation AI',
      category: 'industry',
      icon: Car,
      price: '$1,299/month',
      description: 'AI solutions for logistics and transportation management',
      features: ['Route optimization', 'Fleet management', 'Predictive maintenance', 'Traffic analysis'],
      href: '/ai-transportation',
      color: 'from-cyan-400 to-blue-600'
    },

    // Advanced Tech
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      category: 'advanced',
      icon: Atom,
      price: 'Custom',
      description: 'Next-generation quantum computing capabilities for complex problem solving',
      features: ['Quantum algorithms', 'Optimization problems', 'Cryptography', 'Research collaboration'],
      href: '/quantum-computing',
      color: 'from-purple-400 to-pink-600'
    },
    {
      id: 'blockchain',
      name: 'Blockchain Solutions',
      category: 'advanced',
      icon: Lock,
      price: '$999/month',
      description: 'Blockchain development and smart contract solutions',
      features: ['Smart contracts', 'DApp development', 'Tokenization', 'DeFi solutions'],
      href: '/blockchain',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      id: 'iot-solutions',
      name: 'IoT Solutions',
      category: 'advanced',
      icon: Smartphone,
      price: '$499/month',
      description: 'Internet of Things solutions for connected devices and data collection',
      features: ['Device management', 'Data collection', 'Real-time monitoring', 'Analytics'],
      href: '/iot-solutions',
      color: 'from-green-400 to-teal-600'
    },
    {
      id: 'ar-vr',
      name: 'AR/VR Development',
      category: 'advanced',
      icon: Gamepad2,
      price: '$1,999/month',
      description: 'Augmented and virtual reality applications and experiences',
      features: ['3D modeling', 'Interactive experiences', 'Cross-platform support', 'Performance optimization'],
      href: '/ar-vr',
      color: 'from-cyan-400 to-blue-600'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '$50M+', label: 'Client Savings', icon: BarChart },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <>
      <SEOOptimizer
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI and IT services including analytics, automation, cloud migration, cybersecurity, and industry-specific solutions. Transform your business with our cutting-edge technology."
        keywords={['AI services', 'IT services', 'cloud migration', 'cybersecurity', 'analytics', 'automation', 'industry solutions', 'digital transformation']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Our Services">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
              Comprehensive AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              From AI-powered analytics to cloud migration, we provide end-to-end technology solutions 
              that help businesses achieve unprecedented growth and efficiency.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-7xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`cyber-card p-6 text-center hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 neon-text mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400/30 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={service.id} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <div className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={service.href}
                    className="cyber-button w-full text-center justify-center inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our expert team help you choose the right solutions for your business needs. 
                Get a free consultation and discover how we can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
};

export default ServicesPage;