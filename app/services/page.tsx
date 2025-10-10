'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Globe, 
  Users, 
  Award, 
  Target, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Zap, 
  Database, 
  Cloud, 
  Code, 
  Smartphone, 
  Settings, 
  Lock, 
  Building, 
  Factory, 
  Car, 
  Plane, 
  Ship, 
  Train, 
  Home, 
  Heart, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  Scissors, 
  BookOpen, 
  Calculator, 
  Calendar, 
  Clock3, 
  Compass, 
  Navigation as NavIcon, 
  PieChart, 
  TrendingDown, 
  Activity, 
  FileText, 
  DollarSign, 
  Rocket, 
  Wifi, 
  Server, 
  HardDrive, 
  Scale, 
  ShoppingCart, 
  Truck,
  ChefHat,
  Sprout
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
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

  const services = [
    {
      id: 'ai-analytics',
      category: 'ai',
      name: 'AI Analytics Platform',
      description: 'Advanced predictive analytics and real-time insights powered by machine learning',
      icon: BarChart,
      price: 'Starting at $299/mo',
      features: ['Predictive Analytics', 'Real-time Processing', 'Custom Dashboards', 'API Integration'],
      popular: true
    },
    {
      id: 'ai-automation',
      category: 'ai',
      name: 'AI Workflow Automation',
      description: 'Intelligent business process automation with visual workflow builder',
      icon: Zap,
      price: 'Starting at $199/mo',
      features: ['Visual Workflow Builder', 'Smart Triggers', 'Error Handling', 'Custom Integrations'],
      popular: true
    },
    {
      id: 'ai-security',
      category: 'ai',
      name: 'AI Cybersecurity Platform',
      description: 'Next-generation security with AI-powered threat detection and response',
      icon: Shield,
      price: 'Starting at $399/mo',
      features: ['Threat Detection', 'Anomaly Analysis', 'Automated Response', '24/7 Monitoring'],
      popular: true
    },
    {
      id: 'cloud-migration',
      category: 'it',
      name: 'Cloud Migration & Setup',
      description: 'Seamless migration to AWS, Azure, or GCP with zero downtime',
      icon: Cloud,
      price: 'Starting at $2,999',
      features: ['Zero Downtime Migration', 'Cost Optimization', 'Security Compliance', '24/7 Support'],
      popular: false
    },
    {
      id: 'devops',
      category: 'it',
      name: 'DevOps & CI/CD',
      description: 'Complete DevOps solutions with automated deployment pipelines',
      icon: Settings,
      price: 'Starting at $1,999/mo',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Auto-scaling'],
      popular: true
    },
    {
      id: 'data-engineering',
      category: 'it',
      name: 'Data Engineering',
      description: 'Build robust data pipelines and data lakes for enterprise analytics',
      icon: Database,
      price: 'Starting at $3,999/mo',
      features: ['Data Pipelines', 'ETL/ELT Processes', 'Data Quality', 'Real-time Processing'],
      popular: false
    },
    {
      id: 'healthcare-ai',
      category: 'industry',
      name: 'Healthcare AI Solutions',
      description: 'AI-powered solutions for medical diagnosis, treatment planning, and patient care',
      icon: Stethoscope,
      price: 'Custom Pricing',
      features: ['Medical Imaging AI', 'Diagnostic Assistance', 'Treatment Optimization', 'HIPAA Compliance'],
      popular: false
    },
    {
      id: 'fintech-ai',
      category: 'industry',
      name: 'FinTech AI Platform',
      description: 'Advanced AI solutions for fraud detection, risk assessment, and trading',
      icon: DollarSign,
      price: 'Custom Pricing',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Regulatory Compliance'],
      popular: false
    },
    {
      id: 'quantum-computing',
      category: 'advanced',
      name: 'Quantum Computing Research',
      description: 'Cutting-edge quantum computing solutions for complex optimization problems',
      icon: Atom,
      price: 'Custom Pricing',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Research Partnership', 'Custom Development'],
      popular: false
    },
    {
      id: 'blockchain-ai',
      category: 'advanced',
      name: 'Blockchain AI Integration',
      description: 'AI-powered blockchain solutions for smart contracts and decentralized applications',
      icon: Link,
      price: 'Custom Pricing',
      features: ['Smart Contract AI', 'DeFi Solutions', 'NFT Analytics', 'Decentralized AI'],
      popular: false
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Our Services - Zion Tech Group"
        description="Discover our comprehensive AI and IT services including AI analytics, cloud migration, DevOps, and industry-specific solutions. Transform your business with cutting-edge technology."
        keywords={['AI services', 'IT services', 'cloud migration', 'DevOps', 'AI analytics', 'cybersecurity', 'data engineering', 'Zion Tech Group']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed to transform your business operations, 
              drive innovation, and accelerate growth in the digital age.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-12 h-12 text-cyan-400" />
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
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
              Let our experts help you choose the perfect solution for your needs. 
              Get a free consultation and custom quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;