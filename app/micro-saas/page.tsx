import React from 'react';
import { Link } from 'react-router-dom';

  const benefits = [
    "Benefit 1",
    "Benefit 2"
  ];
  const generalFeatures = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Analytics Pro',
      description: 'Advanced AI-powered analytics platform for business intelligence and data insights.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
      link: '/zion-ai-analytics-pro',
      price: '$99/month',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered automation.',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'Customer Insights'],
      link: '/zion-ai-crm-pro',
      price: '$149/month'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI Video Generator',
      description: 'Create professional videos automatically with AI-powered content generation.',
      features: ['Auto Video Creation', 'Multiple Templates', 'Voice Synthesis', 'Brand Customization'],
      link: '/zion-ai-video-generator',
      price: '$79/month'
    },
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics dashboard with real-time insights and customizable reports.',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/zion-analytics-pro',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'API integration'],
      price: '$299/month',
      featured: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive security monitoring and threat detection for your applications.',
      icon: <Shield className="w-8 h-8" />,
      path: '/zion-security-shield',
      features: ['Threat detection', 'Security monitoring', 'Incident response', 'Compliance reporting'],
      price: '$199/month',
      featured: true
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with advanced encryption and backup features.',
      icon: <Cloud className="w-8 h-8" />,
      path: '/zion-cloud-vault',
      features: ['End-to-end encryption', 'Automated backups', 'File sharing', 'Version control'],
      price: '$99/month',
      featured: false
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for marketing teams.',
      icon: <Sparkles className="w-8 h-8" />,
      path: '/zion-content-studio',
      features: ['AI content generation', 'Content calendar', 'Team collaboration', 'Multi-platform publishing'],
      price: '$149/month',
      featured: false
    },
    {
      title: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered automation.',
      icon: <Users className="w-8 h-8" />,
      path: '/zion-ai-crm-pro',
      features: ['AI lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Customer segmentation'],
      price: '$229/month',
      featured: true
    },
    {
      title: 'Zion AI Marketing Automation Pro',
      description: 'Complete marketing automation platform with AI-driven campaign optimization.',
      icon: <TrendingUp className="w-8 h-8" />,
      path: '/zion-ai-marketing-automation-pro',
      features: ['Email automation', 'Social media scheduling', 'Lead nurturing', 'A/B testing'],
      price: '$199/month',
      featured: false
    },
    {
      title: 'Zion AI Project Manager Pro',
      description: 'Smart project management tool with AI-powered resource allocation and timeline optimization.',
      icon: <Award className="w-8 h-8" />,
      path: '/zion-ai-project-manager-pro',
      features: ['AI task prioritization', 'Resource optimization', 'Timeline forecasting', 'Team collaboration'],
      price: '$159/month',
      featured: false
    },
    {
      title: 'Zion AI Data Analytics Pro',
      description: 'Advanced data analytics platform with machine learning insights and predictive modeling.',
      icon: <Database className="w-8 h-8" />,
      path: '/zion-ai-data-analytics-pro',
      features: ['ML insights', 'Predictive modeling', 'Data visualization', 'Custom dashboards'],
      price: '$279/month',
      featured: true
    },
    {
      title: 'Zion AI Code Assistant Pro',
      description: 'Intelligent code generation and review tool with support for multiple programming languages.',
      icon: <Cpu className="w-8 h-8" />,
      path: '/zion-ai-code-assistant-pro',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Documentation'],
      price: '$129/month',
      featured: false
  ];

  const stats = [
    { label: "Active Users", value: "10,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Shield className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> },
    { label: "Data Security", value: "100%", icon: <Cloud className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data insights. We've seen a 300% improvement in decision-making speed.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Security Shield gives us peace of mind. Our security incidents dropped by 95% since implementation.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      role: "Project Manager",
      content: "Zion AI Project Manager Pro has streamlined our workflow. We're completing projects 40% faster now.",
      rating: 5,
      avatar: "ER"
  ];

export default function MicroSaasPage() {
'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';


  return (
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mic } from 'lucide-react';

export default function MicroSaasZionTechGroup() {
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1>
              AI-Powered Micro SAAS;
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>
              Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions.
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"></div>
          <div className="text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Powered Micro SAAS</h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions.</p>
            </p>
          </div>
        </div>
      </div>,
    </>);
};

export default MicroSaasPage;
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Search as SearchIcon, FileText as FileTextIcon } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = [
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-driven insights, automated scheduling, and resource optimization.',
      category: 'ai-tools',
      price: '$29/month',
      rating: 4.8,
      users: 1250,
      features: ['AI-powered scheduling', 'Resource optimization', 'Risk prediction', 'Team collaboration'],
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'smart-analytics',
      name: 'Smart Analytics Dashboard',
      description: 'Advanced analytics and reporting with real-time insights and predictive modeling.',
      category: 'analytics',
      price: '$49/month',
      rating: 4.9,
      users: 2100,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Suite',
      description: 'Automated customer support with intelligent chatbots and ticket management.',
      category: 'customer-service',
      price: '$39/month',
      rating: 4.7,
      users: 1800,
      features: ['AI chatbots', 'Ticket automation', 'Sentiment analysis', 'Multi-channel support'],
      icon: MessageSquare,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'content-generator',
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns.',
      category: 'content',
      price: '$19/month',
      rating: 4.6,
      users: 3200,
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'SEO optimization'],
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'security-monitor',
      name: 'Security Monitor Pro',
      description: 'Comprehensive security monitoring and threat detection for small businesses.',
      category: 'security',
      price: '$59/month',
      rating: 4.9,
      users: 950,
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance monitoring', 'Incident response'],
      icon: Shield,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'inventory-manager',
      name: 'Smart Inventory Manager',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      category: 'inventory',
      price: '$34/month',
      rating: 4.5,
      users: 1400,
      features: ['Demand forecasting', 'Automated reordering', 'Stock optimization', 'Multi-location support'],
      icon: Database,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSAASServices.length },
    { id: 'ai-tools', name: 'AI Tools', count: microSAASServices.filter(s => s.category === 'ai-tools').length },
    { id: 'analytics', name: 'Analytics', count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'customer-service', name: 'Customer Service', count: microSAASServices.filter(s => s.category === 'customer-service').length },
    { id: 'content', name: 'Content', count: microSAASServices.filter(s => s.category === 'content').length },
    { id: 'security', name: 'Security', count: microSAASServices.filter(s => s.category === 'security').length },
    { id: 'inventory', name: 'Inventory', count: microSAASServices.filter(s => s.category === 'inventory').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')));
      case 'price-high':
        return filtered.sort((a, b) => parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')));
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'users':
        return filtered.sort((a, b) => b.users - a.users);
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, sortBy]);

const MicroSaaSServicesPage: React.FC = () => {
  return (
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function MicrosaasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro Saas - Zion Tech Group</title>
        <meta name="description" content="Professional micro saas services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Micro Saas</h1>
          <p className="text-lg text-gray-300 mb-8">Professional micro saas services coming soon.</p>
          
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Micro Saas - Zion Tech Group</title>
        <meta name="description" content="Micro Saas solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Micro Saas</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive micro saas solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
        <meta name="description" content="Specialized micro SaaS services for niche markets." />
        <meta name="keywords" content="micro SaaS, software as a service, niche markets" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SaaS Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Specialized micro SaaS services for niche markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


const MicroSaasPage: React.FC = () => {
  const microSaasTools = [
    {
      icon: Brain,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and real-time analytics.',
      features: ['Real-time data visualization', 'AI-powered insights', 'Custom dashboards', 'Automated reporting']
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Advanced cybersecurity monitoring with threat detection and automated response.',
      features: ['24/7 threat monitoring', 'Automated incident response', 'Compliance tracking', 'Security analytics']
    },
    {
      icon: BarChart,
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization']
    }
  ];


            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Micro SaaS?
              </h2>
            </div></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect micro SaaS solution for your business and start growing today.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              View All Plans
            </button>
      <Helmet></Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS services designed to streamline your business operations." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          {/* Header */}
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Discover our collection of micro SaaS services designed to streamline your business operations and boost productivity.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12"></div>
            <div className="flex flex-col lg:flex-row gap-4 mb-8"></div>
              <div className="flex-1 relative"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="rating">Sort by Rating</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="users">Most Users</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2"></div>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 border-cyan-400 text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              ></div>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4"></div>
                  <div className="flex items-center space-x-1"></div>
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-gray-400">({service.users} users)</span>
                  </div>
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>

                <ul className="space-y-2 mb-6"></ul>
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"></button>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              We can create a custom micro SaaS solution tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              ></a>
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              ></a>
                <Mail className="w-5 h-5 mr-2" />
                Get Free Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSAASPage;
      <title>MicroSaas - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">MicroSaas</h1>
            <p className="text-lg text-gray-300 mb-8">Professional microsaas services coming soon.</p>

              Contact Us

      <  />
  );
}

    </div>
  );
}
        <title>Micro SAAS Products - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta const name = "description" content="Discover our comprehensive suite of micro SAAS products designed to solve specific business challenges. From AI analytics to cybersecurity, we have the tools you need to succeed." / / />
        <meta name="keywords" content="micro saas, business software, AI tools, analytics, CRM, project management, cybersecurity, automation" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </div>
        {/* Hero Section */}
        <section className="relative overflow-hiddenpt-20pb-16" />

                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key="{idx}" className="flex items-centertext-smtext-gray-300" />
                        <CheckCircle className="h-4 w-4 text-green-400mr-3flex-shrink-0" />
                        <span   />{feature}</span>
                      </div>

                    ))}
                    {product.features.length > 4 && (
                      <div className="text-smtext-gray-400text-center">+{product.features.length - 4} more features
                      </div>

                    )}
                  </div>

                  <div className="space-y-3">
                    <Link to="{`/${product.id}`}" className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105" >
          View Details
                      
          <ArrowRight className="ml-2h-4w-4"  />
        </Link>
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-whitetransition-allduration-300">Start Free Trial
                    </Link>
                  </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-brfrom-gray-900to-purple-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6lg:px-8text-center">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
              increase productivity, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" >
          Get Started Today
                
          <ArrowRight className="ml-2h-5w-5"  />
        </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8text-gray-400">
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

export default MicroSaasPage;
