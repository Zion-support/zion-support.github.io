<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, Target, BarChart, Users, ArrowRight, CheckCircle, Star, TrendingUp, Shield, Code, Database } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Marketing Automation',
      description: 'Revolutionize your marketing with AI-powered automation, personalization, and analytics.',
      icon: Target,
      features: ['Automated Campaign Management', 'Predictive Analytics', 'Personalized Content', 'ROI Optimization'],
      price: 'Starting at $2,999/month'
    },
    {
      title: 'AI Process Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      icon: Zap,
      features: ['Workflow Automation', 'Document Processing', 'Data Extraction', 'Smart Routing'],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable insights with advanced AI analytics.',
      icon: BarChart,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Automated Reporting'],
      price: 'Starting at $3,499/month'
    },
    {
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent support solutions.',
      icon: Users,
      features: ['24/7 AI Chatbots', 'Sentiment Analysis', 'Multi-language Support', 'Escalation Management'],
      price: 'Starting at $1,499/month'
    },
    {
      title: 'AI Security Solutions',
      description: 'Protect your business with AI-powered security and threat detection.',
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Fraud Prevention', 'Security Monitoring'],
      price: 'Starting at $2,499/month'
    },
    {
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific business needs.',
      icon: Code,
      features: ['Custom Models', 'API Development', 'Integration Support', 'Ongoing Maintenance'],
      price: 'Custom Pricing'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      content: "Zion Tech Group's AI solutions increased our efficiency by 300% and reduced costs by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "InnovateLab",
      content: "The AI automation they built for us has transformed our entire workflow. Outstanding results!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "FutureTech Inc",
      content: "Professional, reliable, and innovative. They delivered exactly what we needed and more.",
      rating: 5
    }
=======
'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, Zap, Shield, TrendingUp, CheckCircle, ArrowRight, Star, 
  Phone, Mail, MapPin, Clock, Users, Award, Target, BarChart,
  Cpu, Database, Globe, Lock, Sparkles, Code, Eye, MessageSquare
} from 'lucide-react';

export default function AIServicesPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Intelligent automation solutions that reduce manual work by 80% and increase efficiency by 300%',
      features: [
        'Workflow automation with 99.9% accuracy',
        'Natural language processing integration',
        'Real-time decision making',
        'Custom automation workflows',
        'API integration capabilities',
        'Performance monitoring & analytics'
      ],
      pricing: {
        starter: { price: '$2,500', period: '/month', features: ['Up to 10 workflows', 'Basic analytics', 'Email support'] },
        professional: { price: '$7,500', period: '/month', features: ['Unlimited workflows', 'Advanced analytics', 'Priority support', 'Custom integrations'] },
        enterprise: { price: '$15,000', period: '/month', features: ['Everything in Pro', 'Dedicated support', 'Custom development', 'SLA guarantee'] }
      },
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
      popular: true
    },
    {
      id: 'ai-analytics',
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced analytics platform that provides actionable insights and predictive analytics for data-driven decisions',
      features: [
        'Real-time data processing',
        'Predictive analytics & forecasting',
        'Custom dashboard creation',
        'Machine learning models',
        'Data visualization tools',
        'Automated reporting'
      ],
      pricing: {
        starter: { price: '$3,000', period: '/month', features: ['Up to 5 data sources', 'Basic dashboards', 'Standard reports'] },
        professional: { price: '$8,500', period: '/month', features: ['Unlimited data sources', 'Advanced dashboards', 'Custom models', 'API access'] },
        enterprise: { price: '$18,000', period: '/month', features: ['Everything in Pro', 'Real-time processing', 'Dedicated analyst', 'Custom integrations'] }
      },
      icon: BarChart,
      color: 'from-purple-500 to-pink-600',
      popular: false
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Platform',
      description: '24/7 intelligent customer support with multilingual capabilities and 95% resolution rate',
      features: [
        'Natural language understanding',
        'Multi-channel support (chat, email, phone)',
        'Sentiment analysis',
        'Knowledge base integration',
        'Human handoff capabilities',
        'Performance analytics'
      ],
      pricing: {
        starter: { price: '$1,500', period: '/month', features: ['Up to 1,000 conversations', 'Basic AI responses', 'Email support'] },
        professional: { price: '$4,500', period: '/month', features: ['Up to 10,000 conversations', 'Advanced AI', 'Multi-channel support', 'Analytics dashboard'] },
        enterprise: { price: '$12,000', period: '/month', features: ['Unlimited conversations', 'Custom AI training', 'Dedicated support', 'SLA guarantee'] }
      },
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-600',
      popular: true
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Suite',
      description: 'Complete content creation platform with AI writing, image generation, and video production capabilities',
      features: [
        'AI writing for all content types',
        'Image generation & editing',
        'Video creation & editing',
        'SEO optimization',
        'Brand voice consistency',
        'Content scheduling & publishing'
      ],
      pricing: {
        starter: { price: '$2,000', period: '/month', features: ['Up to 100 pieces/month', 'Basic AI writing', 'Stock images'] },
        professional: { price: '$6,000', period: '/month', features: ['Up to 1,000 pieces/month', 'Advanced AI', 'Custom images', 'Video generation'] },
        enterprise: { price: '$15,000', period: '/month', features: ['Unlimited content', 'Custom AI models', 'Dedicated team', 'White-label solution'] }
      },
      icon: Code,
      color: 'from-orange-500 to-red-600',
      popular: false
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention system with 99.8% accuracy in identifying security threats',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Security analytics dashboard'
      ],
      pricing: {
        starter: { price: '$4,000', period: '/month', features: ['Basic threat detection', 'Email security', 'Standard monitoring'] },
        professional: { price: '$10,000', period: '/month', features: ['Advanced threat detection', 'Network security', 'Compliance tools', '24/7 monitoring'] },
        enterprise: { price: '$25,000', period: '/month', features: ['Complete security suite', 'Custom solutions', 'Dedicated team', 'SLA guarantee'] }
      },
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      popular: true
    },
    {
      id: 'ai-ml-platform',
      title: 'AI/ML Development Platform',
      description: 'Complete machine learning platform for building, training, and deploying custom AI models',
      features: [
        'No-code ML model builder',
        'Pre-trained model library',
        'Custom model training',
        'Model deployment & scaling',
        'A/B testing framework',
        'Performance monitoring'
      ],
      pricing: {
        starter: { price: '$3,500', period: '/month', features: ['Basic ML tools', 'Pre-trained models', 'Community support'] },
        professional: { price: '$9,000', period: '/month', features: ['Advanced ML tools', 'Custom training', 'Priority support', 'API access'] },
        enterprise: { price: '$20,000', period: '/month', features: ['Complete platform', 'Dedicated resources', 'Custom development', 'SLA guarantee'] }
      },
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600',
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'AI Models Deployed', color: 'text-cyan-400' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI', color: 'text-green-400' },
    { icon: Clock, value: '24/7', label: 'AI Monitoring', color: 'text-blue-400' },
    { icon: Award, value: '99.9%', label: 'Uptime Guarantee', color: 'text-purple-400' }
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI services to transform your business operations. Machine learning, automation, and intelligent solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 pt-24">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From automation to analytics, we deliver intelligent solutions that drive growth.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
<<<<<<< HEAD
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
=======
import { Brain, Zap, Shield, BarChart, Users, Settings, CheckCircle, ArrowRight, Phone, Mail, Search, Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = useMemo(() => [
    {
      id: 'ai-marketing',
      name: 'AI Marketing',
      description: 'Revolutionize your marketing with AI-powered automation, personalization, and analytics.',
      icon: Brain,
      category: 'marketing',
      features: ['Automated Campaign Management', 'Predictive Analytics', 'Personalized Content', 'ROI Optimization'],
      benefits: ['300% increase in conversion rates', '50% reduction in marketing costs', 'Real-time optimization'],
      pricing: { starting: 2999, period: 'month' },
      popular: true
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      icon: Zap,
      category: 'automation',
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      benefits: ['80% efficiency increase', '60% time savings', 'Zero human error'],
      pricing: { starting: 1400, period: 'month' },
      popular: false
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare',
      description: 'Transform healthcare with AI-powered diagnostic and treatment solutions.',
      icon: Shield,
      category: 'healthcare',
      features: ['Medical Diagnosis', 'Treatment Planning', 'Patient Monitoring', 'Drug Discovery'],
      benefits: ['Improved diagnostic accuracy', 'Faster treatment decisions', 'Reduced medical errors'],
      pricing: { starting: 4999, period: 'month' },
      popular: false
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech',
      description: 'Revolutionize financial services with AI-driven solutions.',
      icon: BarChart,
      category: 'fintech',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      benefits: ['99.9% fraud detection accuracy', 'Real-time risk assessment', 'Automated compliance'],
      pricing: { starting: 3999, period: 'month' },
      popular: true
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      description: 'Enhance customer experience with AI-powered support solutions.',
      icon: Users,
      category: 'customer-service',
      features: ['Chatbots', 'Voice Assistants', 'Ticket Management', 'Customer Analytics'],
      benefits: ['24/7 availability', 'Instant response times', 'Multilingual support'],
      pricing: { starting: 1999, period: 'month' },
      popular: false
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Optimize business workflows with intelligent automation.',
      icon: Settings,
      category: 'automation',
      features: ['Process Automation', 'Task Optimization', 'Resource Management', 'Performance Monitoring'],
      benefits: ['Streamlined operations', 'Reduced bottlenecks', 'Improved productivity'],
      pricing: { starting: 2499, period: 'month' },
      popular: false
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain },
    { id: 'marketing', name: 'Marketing', icon: BarChart },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'healthcare', name: 'Healthcare', icon: Shield },
    { id: 'fintech', name: 'Fintech', icon: BarChart },
    { id: 'customer-service', name: 'Customer Service', icon: Users }
  ];

  const filteredServices = useMemo(() => {
    let filtered = aiServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [aiServices, selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including marketing automation, healthcare solutions, fintech, customer support, and workflow automation." />
        <meta name="keywords" content="AI services, artificial intelligence, marketing automation, healthcare AI, fintech, customer support AI" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence solutions. From marketing automation to healthcare AI, we deliver intelligent solutions that drive results.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
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
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI services designed to transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    {service.popular && (
                      <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold mt-1">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
                        {feature}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  
                  <a
                    href="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Clients Say</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI solutions can accelerate your digital transformation and drive growth.
=======
        <title>AI Services - Zion Tech Group | Advanced AI Solutions & Pricing</title>
        <meta name="description" content="Comprehensive AI services including automation, analytics, customer support, content generation, cybersecurity, and ML platforms. Get 300% ROI with our AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI customer support, AI content generation, AI cybersecurity, ML platform" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services. Achieve 300% ROI with intelligent automation, analytics, and AI-powered solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 cyber-grid">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="holographic-text cyber-text">AI Services</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge AI solutions. Achieve 300% ROI, 70% cost reduction, 
                and 90% efficiency gains with our comprehensive AI services.
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
<<<<<<< HEAD
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Brain className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
=======
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
                  Get Quote
                </a>
              </div>
            </div>
          </section>
        </main>

<<<<<<< HEAD
        <Footer />
=======
                );
              })}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
=======
        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-text">Our AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and drive unprecedented growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div key={service.id} className={`quantum-card p-8 ${service.popular ? 'energy-pulse' : ''}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-4">Pricing:</h4>
                    <div className="space-y-3">
                      {Object.entries(service.pricing).map(([tier, details]) => (
                        <div key={tier} className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                          <div>
                            <div className="text-white font-semibold capitalize">{tier}</div>
                            <div className="text-sm text-gray-400">{details.features[0]}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-cyan-400 font-bold">{details.price}{details.period}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href="tel:+13024640950"
                      className="flex-1 cyber-button text-center py-3"
                    >
                      Get Started
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 bg-slate-800 text-white py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you implement the perfect solution for your business needs.
=======
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 500+ companies already using our AI solutions to achieve unprecedented growth and efficiency.
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
<<<<<<< HEAD
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Quote
=======
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
              </a>
            </div>
          </div>
        </section>
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
      </div>
    </>
  );
};

<<<<<<< HEAD
export default AIServicesPage;
=======
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300">{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.pricing.starting.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">per {service.pricing.period}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:+13024640950`}
                      className="bg-slate-800 text-cyan-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                    >
                      <Phone className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                      Call
                    </a>
                    <a
                      href={`mailto:info@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="bg-slate-800 text-purple-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                    >
                      <Mail className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our AI experts to discuss how our solutions can drive innovation and growth in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
=======
export default AIServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
=======
      </div>
    </>
  );
}
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
