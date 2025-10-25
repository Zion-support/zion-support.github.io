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
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'consulting', name: 'Consulting', icon: Users }
  ];

  const services = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Platform',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      category: 'ai',
      icon: BarChart,
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Machine learning models'
      ],
      pricing: 'Starting at $299/month',
      popular: true
    },
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent AI workflows.',
      category: 'ai',
      icon: Settings,
      features: [
        'Process automation',
        'Smart routing',
        'Exception handling',
        'Integration capabilities'
      ],
      pricing: 'Starting at $499/month',
      popular: false
    },
    {
      id: 'ai-support',
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent AI-powered support solutions.',
      category: 'ai',
      icon: MessageSquare,
      features: [
        '24/7 availability',
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis'
      ],
      pricing: 'Starting at $399/month',
      popular: false
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced security.',
      category: 'cloud',
      icon: Cloud,
      features: [
        'AWS, Azure, GCP migration',
        'Zero-downtime migration',
        'Data security & compliance',
        'Cost optimization'
      ],
      pricing: 'Custom pricing',
      popular: true
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management and optimization services.',
      category: 'cloud',
      icon: Database,
      features: [
        'Infrastructure monitoring',
        'Auto-scaling',
        'Performance optimization',
        '24/7 support'
      ],
      pricing: 'Starting at $799/month',
      popular: false
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      category: 'security',
      icon: Shield,
      features: [
        'Security assessment & audit',
        'Threat detection & response',
        'Data encryption & protection',
        'Compliance management'
      ],
      pricing: 'Starting at $599/month',
      popular: true
    },
    {
      id: 'security-monitoring',
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response services.',
      category: 'security',
      icon: Eye,
      features: [
        'Real-time threat detection',
        'Incident response',
        'Security reporting',
        'Compliance monitoring'
      ],
      pricing: 'Starting at $899/month',
      popular: false
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Expert IT consulting to help you make informed technology decisions.',
      category: 'consulting',
      icon: Users,
      features: [
        'Technology strategy',
        'System architecture',
        'Digital transformation',
        'Best practices guidance'
      ],
      pricing: 'Starting at $150/hour',
      popular: false
    }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Shield, value: '99.9%', label: 'Uptime' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI' }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Stethoscope,
      description: 'HIPAA-compliant solutions for healthcare organizations',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      name: 'Finance',
      icon: Building,
      description: 'Secure solutions for financial institutions',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Industrial solutions and automation systems',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      name: 'Retail',
      icon: Smartphone,
      description: 'E-commerce and retail technology solutions',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Educational technology and learning management systems',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
    {
      name: 'Government',
      icon: Shield,
      description: 'Secure government solutions and compliance',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Services - Zion Tech Group"
        description="Comprehensive AI, cloud, and cybersecurity services to transform your business. From AI analytics to cloud migration and security solutions."
        keywords={["AI services","cloud solutions","cybersecurity","IT consulting","business transformation","technology services"]}
        canonicalUrl="https://ziontechgroup.com/services"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI, cloud, and cybersecurity services to transform your business. From AI analytics to cloud migration and security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Filter by Category</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                    service.popular
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                      : 'border-white/10'
                  }`}
                >
                  {service.popular && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-medium">Popular</span>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                      <div className="text-cyan-400 font-medium text-sm">{service.pricing}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our solutions are tailored for various industries and compliance requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className={`w-12 h-12 ${industry.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <industry.icon className={`w-6 h-6 ${industry.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-300 text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;