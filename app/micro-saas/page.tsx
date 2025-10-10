'use client';
import React, { useState, useMemo } from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Award, Target, Star, ArrowRight, Sparkles, Cpu, Database, Smartphone, Lock, Zap, Globe, Calendar, FileText, Settings, CheckSquare, MessageSquare, Building, Clock, Send, DollarSign, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function MicroSaasPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState('');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const microSaasServices = [
    {
      category: 'AI-Powered Business Tools',
      services: [
        {
          id: 1,
          name: 'AI Project Manager Pro',
          description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
          icon: BarChart,
          price: 99,
          originalPrice: 149,
          features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
          benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
          link: '/ai-project-manager',
          popular: true,
          category: 'Productivity',
          rating: 4.9,
          users: '10,000+',
          freeTrial: '14 days'
        },
        {
          id: 2,
          name: 'AI Smart Calendar Pro',
          description: 'Revolutionary calendar management with AI-powered scheduling, conflict resolution, and productivity optimization. Used by Fortune 500 companies.',
          icon: Calendar,
          price: 89,
          originalPrice: 129,
          features: ['Smart scheduling', 'Conflict resolution', 'Productivity analytics', 'Team coordination', 'Meeting optimization', 'Time blocking', 'Priority management', 'Integration support'],
          benefits: ['35% more productive time', 'Better work-life balance', 'Reduced scheduling stress', 'Optimal energy usage'],
          link: '/ai-smart-calendar',
          popular: true,
          category: 'Productivity',
          rating: 4.8,
          users: '35,000+',
          freeTrial: '21 days'
        },
        {
          id: 3,
          name: 'AI Document Intelligence Pro',
          description: 'Transform any document into actionable insights with AI-powered analysis, summarization, and knowledge extraction.',
          icon: FileText,
          price: 79,
          originalPrice: 119,
          features: ['Document analysis', 'Smart summarization', 'Knowledge extraction', 'Search & discovery', 'Version control', 'Collaboration tools', 'OCR processing', 'Multi-format support'],
          benefits: ['80% faster document processing', 'Better knowledge retention', 'Improved search', 'Enhanced collaboration'],
          link: '/ai-document-intelligence',
          popular: true,
          category: 'Productivity',
          rating: 4.7,
          users: '15,000+',
          freeTrial: '7 days'
        }
      ]
    },
    {
      category: 'Marketing & Sales Automation',
      services: [
        {
          id: 4,
          name: 'AI Lead Generation Engine',
          description: 'Generate high-quality leads using AI-powered targeting and automated outreach campaigns.',
          icon: Target,
          price: 199,
          originalPrice: 299,
          features: ['AI lead scoring', 'Automated outreach', 'Email sequences', 'Social media integration', 'CRM sync', 'Performance analytics', 'A/B testing', 'Custom templates'],
          benefits: ['300% more qualified leads', '50% higher conversion rates', '90% time savings', 'Automated follow-ups'],
          link: '/ai-lead-generation',
          popular: true,
          category: 'Marketing',
          rating: 4.8,
          users: '8,500+',
          freeTrial: '14 days'
        },
        {
          id: 5,
          name: 'AI Content Marketing Suite',
          description: 'Create, optimize, and distribute content at scale with AI-powered content generation and optimization.',
          icon: MessageSquare,
          price: 149,
          originalPrice: 199,
          features: ['Content generation', 'SEO optimization', 'Social media scheduling', 'Performance tracking', 'Brand voice consistency', 'Multi-platform publishing', 'Content calendar', 'Analytics dashboard'],
          benefits: ['10x content output', '60% better SEO performance', 'Consistent brand voice', 'Automated distribution'],
          link: '/ai-content-marketing',
          popular: false,
          category: 'Marketing',
          rating: 4.6,
          users: '12,000+',
          freeTrial: '7 days'
        }
      ]
    },
    {
      category: 'Data & Analytics',
      services: [
        {
          id: 6,
          name: 'AI Data Analytics Pro',
          description: 'Advanced data analytics platform with AI-powered insights, predictive modeling, and automated reporting.',
          icon: BarChart,
          price: 199,
          originalPrice: 299,
          features: ['Predictive analytics', 'Automated reporting', 'Data visualization', 'Machine learning models', 'Real-time insights', 'Custom dashboards', 'Data integration', 'Trend analysis'],
          benefits: ['90% faster insights', 'Better decision making', 'Automated reporting', 'Predictive accuracy'],
          link: '/ai-data-analytics',
          popular: true,
          category: 'Analytics',
          rating: 4.8,
          users: '6,200+',
          freeTrial: '21 days'
        }
      ]
    }
  ];

  const allServices = microSaasServices.flatMap(category => category.services);

  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [allServices, selectedCategory, priceRange, searchTerm]);

  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      {/* Header */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Powerful, affordable AI-powered tools designed to solve specific business challenges and drive growth.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Price Range</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1"
                  />
                  <span className="text-white text-sm">{formatPrice(priceRange[1])}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative">
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 mr-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{service.rating}</span>
                      <span className="ml-2 text-gray-400 text-sm">({service.users})</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{formatPrice(service.price)}</span>
                    {service.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{formatPrice(service.originalPrice)}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400">{service.freeTrial} free trial</div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={service.link}
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-center block"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and discover how our micro SaaS solutions can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
            >
              Get Free Consultation
            </a>
            <a
              href="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}