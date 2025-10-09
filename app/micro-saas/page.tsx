'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasServices = [
    // AI-Powered Business Tools
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project planning, task allocation, and progress tracking with predictive analytics',
      icon: '📊',
      category: 'business',
      price: '$79/month',
      features: ['Smart task prioritization', 'Resource optimization', 'Risk prediction', 'Team collaboration', 'Progress analytics'],
      benefits: ['40% faster project completion', '25% cost reduction', '95% on-time delivery'],
      popular: true,
      link: '/ai-project-manager'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media content creation, scheduling, and engagement optimization',
      icon: '📱',
      category: 'marketing',
      price: '$99/month',
      features: ['Content generation', 'Optimal posting times', 'Hashtag optimization', 'Engagement tracking', 'Multi-platform management'],
      benefits: ['300% increase in engagement', '50% time savings', 'Consistent brand voice'],
      popular: true,
      link: '/ai-social-media-manager'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics',
      icon: '📈',
      category: 'analytics',
      price: '$149/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'Automated insights'],
      benefits: ['50% faster decision making', '30% revenue increase', 'Proactive issue detection'],
      popular: true,
      link: '/ai-analytics-dashboard'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing',
      description: 'Intelligent email campaign creation, personalization, and optimization',
      icon: '📧',
      category: 'marketing',
      price: '$89/month',
      features: ['Smart segmentation', 'A/B testing', 'Send time optimization', 'Content personalization', 'Performance tracking'],
      benefits: ['45% higher open rates', '60% increase in clicks', '35% more conversions'],
      popular: true,
      link: '/ai-email-marketing'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      description: '24/7 intelligent customer support with natural language processing',
      icon: '🤖',
      category: 'support',
      price: '$199/month',
      features: ['Natural language processing', 'Multi-language support', 'Escalation management', 'Knowledge base integration', 'Sentiment analysis'],
      benefits: ['80% faster response times', '24/7 availability', '90% customer satisfaction'],
      popular: true,
      link: '/ai-customer-support-bot'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'AI-powered content creation for blogs, social media, and marketing materials',
      icon: '✍️',
      category: 'content',
      price: '$69/month',
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization', 'Brand voice consistency'],
      benefits: ['10x faster content creation', 'Consistent quality', 'SEO-optimized content'],
      popular: false,
      link: '/ai-content-generation'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword optimization, and content improvement suggestions',
      icon: '🎯',
      category: 'marketing',
      price: '$129/month',
      features: ['Keyword research', 'On-page optimization', 'Technical SEO audit', 'Competitor analysis', 'Rank tracking'],
      benefits: ['200% increase in organic traffic', 'Higher search rankings', 'Comprehensive SEO insights'],
      popular: false,
      link: '/ai-seo-optimizer'
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automated invoice creation, payment tracking, and financial reporting',
      icon: '💰',
      category: 'finance',
      price: '$59/month',
      features: ['Auto-invoice generation', 'Payment tracking', 'Tax calculations', 'Financial reports', 'Client management'],
      benefits: ['90% time savings', 'Reduced errors', 'Faster payments'],
      popular: false,
      link: '/ai-invoice-generator'
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant',
      description: 'Intelligent human resources management with recruitment and employee analytics',
      icon: '👥',
      category: 'hr',
      price: '$179/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Performance tracking', 'Compliance monitoring'],
      benefits: ['60% faster hiring', 'Better candidate matching', 'Reduced bias'],
      popular: false,
      link: '/ai-hr-assistant'
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      description: 'Smart inventory tracking with demand forecasting and automated reordering',
      icon: '📦',
      category: 'inventory',
      price: '$139/month',
      features: ['Demand forecasting', 'Automated reordering', 'Stock optimization', 'Supplier management', 'Cost analysis'],
      benefits: ['30% reduction in stockouts', '25% cost savings', 'Optimized inventory levels'],
      popular: false,
      link: '/ai-inventory-management'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Intelligent expense management with receipt scanning and categorization',
      icon: '💳',
      category: 'finance',
      price: '$49/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Expense reports', 'Budget tracking', 'Tax preparation'],
      benefits: ['95% accuracy in categorization', '50% time savings', 'Better financial control'],
      popular: false,
      link: '/expense-tracker'
    },
    {
      id: 'ai-scheduler',
      name: 'AI Scheduler',
      description: 'Smart scheduling and calendar management with conflict resolution',
      icon: '📅',
      category: 'productivity',
      price: '$79/month',
      features: ['Smart scheduling', 'Conflict resolution', 'Time zone handling', 'Meeting optimization', 'Calendar integration'],
      benefits: ['40% fewer scheduling conflicts', 'Better time utilization', 'Seamless coordination'],
      popular: false,
      link: '/ai-scheduler'
    },
    {
      id: 'ai-time-tracker',
      name: 'AI Time Tracker',
      description: 'Intelligent time tracking with productivity insights and automated reporting',
      icon: '⏱️',
      category: 'productivity',
      price: '$39/month',
      features: ['Automatic time tracking', 'Productivity analytics', 'Project billing', 'Team monitoring', 'Detailed reports'],
      benefits: ['Accurate time tracking', 'Improved productivity', 'Better project insights'],
      popular: false,
      link: '/ai-time-tracker'
    },
    {
      id: 'ai-lead-scoring',
      name: 'AI Lead Scoring',
      description: 'Intelligent lead qualification and scoring for better sales conversion',
      icon: '🎯',
      category: 'sales',
      price: '$159/month',
      features: ['Lead scoring algorithms', 'Behavioral analysis', 'Conversion prediction', 'CRM integration', 'Performance tracking'],
      benefits: ['35% higher conversion rates', 'Better lead quality', 'Improved sales efficiency'],
      popular: false,
      link: '/ai-lead-scoring'
    },
    {
      id: 'ai-sales-forecasting',
      name: 'AI Sales Forecasting',
      description: 'Predictive sales analytics with trend analysis and revenue forecasting',
      icon: '📊',
      category: 'sales',
      price: '$199/month',
      features: ['Revenue forecasting', 'Trend analysis', 'Seasonal adjustments', 'Risk assessment', 'Goal tracking'],
      benefits: ['90% forecast accuracy', 'Better planning', 'Risk mitigation'],
      popular: false,
      link: '/ai-sales-forecasting'
    },
    {
      id: 'ai-design-assistant',
      name: 'AI Design Assistant',
      description: 'AI-powered design tool for logos, graphics, and visual content creation',
      icon: '🎨',
      category: 'design',
      price: '$89/month',
      features: ['Logo generation', 'Graphic design', 'Brand consistency', 'Template library', 'Export options'],
      benefits: ['Professional designs', 'Brand consistency', 'Time savings'],
      popular: false,
      link: '/ai-design-assistant'
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, and analysis',
      icon: '📄',
      category: 'productivity',
      price: '$119/month',
      features: ['OCR technology', 'Data extraction', 'Document classification', 'Search functionality', 'Batch processing'],
      benefits: ['95% accuracy in extraction', 'Massive time savings', 'Better organization'],
      popular: false,
      link: '/ai-document-processor'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Custom voice assistant for business operations and customer service',
      icon: '🎤',
      category: 'automation',
      price: '$299/month',
      features: ['Voice commands', 'Natural language processing', 'Integration capabilities', 'Custom responses', 'Analytics'],
      benefits: ['Hands-free operation', 'Improved accessibility', 'Enhanced user experience'],
      popular: false,
      link: '/ai-voice-assistant'
    },
    {
      id: 'ai-ab-testing',
      name: 'AI A/B Testing Platform',
      description: 'Advanced A/B testing with AI-powered optimization and statistical analysis',
      icon: '🧪',
      category: 'analytics',
      price: '$179/month',
      features: ['Automated testing', 'Statistical analysis', 'Conversion optimization', 'Multi-variate testing', 'Real-time results'],
      benefits: ['Higher conversion rates', 'Data-driven decisions', 'Continuous optimization'],
      popular: false,
      link: '/ai-ab-testing'
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      description: 'Advanced predictive modeling for business forecasting and decision making',
      icon: '🔮',
      category: 'analytics',
      price: '$249/month',
      features: ['Predictive modeling', 'Trend analysis', 'Risk assessment', 'Scenario planning', 'Custom algorithms'],
      benefits: ['Better forecasting', 'Risk mitigation', 'Strategic planning'],
      popular: false,
      link: '/ai-predictive-analytics'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'business', name: 'Business Tools', icon: '💼' },
    { id: 'marketing', name: 'Marketing', icon: '📢' },
    { id: 'analytics', name: 'Analytics', icon: '📊' },
    { id: 'support', name: 'Customer Support', icon: '🤝' },
    { id: 'content', name: 'Content Creation', icon: '✍️' },
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'hr', name: 'Human Resources', icon: '👥' },
    { id: 'inventory', name: 'Inventory', icon: '📦' },
    { id: 'productivity', name: 'Productivity', icon: '⚡' },
    { id: 'sales', name: 'Sales', icon: '💼' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'automation', name: 'Automation', icon: '🤖' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const popularServices = microSaasServices.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network particle-system">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-flicker-enhanced cyber-text-enhanced">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow-enhanced">
            Powerful AI-Driven Tools for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose from 20+ ready-to-use AI-powered micro SAAS applications. 
            Each tool is designed to solve specific business challenges with intelligent automation, 
            real-time analytics, and seamless integration capabilities.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card-enhanced holographic-card quantum-field p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-sm text-gray-300">AI-Powered Tools</div>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">$39</div>
              <div className="text-sm text-gray-300">Starting Price</div>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Most Popular Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service, index) => (
              <div key={service.id} className="cyber-card-enhanced holographic-card quantum-field p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-flicker-enhanced">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-cyan-400 mb-4 cyber-glow-enhanced">
                  {service.price}
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                  >
                    Learn More
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* All Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            All Micro SAAS Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{service.icon}</div>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      POPULAR
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="text-xl font-bold text-cyan-400 mb-4">
                  {service.price}
                </div>
                <div className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center text-sm"
                  >
                    Learn More
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all text-sm"
                  >
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our micro SAAS solutions today. Choose from our comprehensive suite of AI-powered tools 
            or let us help you find the perfect solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
            <Link
              to="/consultation"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
            >
              💬 Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
});

MicroSaasPage.displayName = 'MicroSaasPage';
export default MicroSaasPage;