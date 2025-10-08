import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cloud, Lock, ArrowRight, Phone, Mail, MapPin, Award, Target, DollarSign, BarChart3, Rocket, Cpu, Database, Wifi, Smartphone, Monitor, Server, Code, Palette, FileText, ShoppingCart, Heart, Home, Car, GraduationCap, Briefcase, Camera, Music, Gamepad2, BookOpen, ShieldCheck, Globe2, Settings, Zap as ZapIcon, Eye, Search, Filter, Download, Upload, Share2, MessageSquare, Calendar, Timer, AlertCircle, CheckCircle2, XCircle, Info, ExternalLink } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    // AI-Powered Services
    {
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis, bug detection, and security vulnerability scanning for developers.',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization suggestions', 'Code quality metrics', 'Git integration'],
      benefits: ['Reduce bugs by 70%', 'Improve code quality', 'Save 10+ hours/week on reviews'],
      marketPrice: '$150-300/month',
      category: 'Developer Tools',
      technologies: ['GitHub Actions', 'SonarQube', 'ESLint', 'Prettier', 'Custom AI Models'],
      link: 'https://ziontechgroup.com/ai-code-review',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered SEO Optimizer',
      description: 'Advanced SEO analysis and optimization with AI-driven content suggestions and keyword research.',
      icon: '🎯',
      price: '$199/month',
      features: ['AI content optimization', 'Keyword research automation', 'Competitor analysis', 'Technical SEO audit', 'Rank tracking'],
      benefits: ['Increase organic traffic by 150%', 'Improve search rankings', 'Save 20+ hours/week on SEO'],
      marketPrice: '$300-600/month',
      category: 'Marketing',
      technologies: ['Google Search Console API', 'Ahrefs API', 'OpenAI GPT', 'React', 'Node.js'],
      link: 'https://ziontechgroup.com/ai-seo-optimizer',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Invoice Generator',
      description: 'AI-powered invoice creation with automated billing, payment tracking, and financial analytics.',
      icon: '💰',
      price: '$79/month',
      features: ['Automated invoice generation', 'Payment tracking', 'Financial analytics', 'Client portal', 'Tax calculations'],
      benefits: ['Reduce billing time by 80%', 'Improve cash flow', 'Eliminate manual errors'],
      marketPrice: '$120-250/month',
      category: 'Finance',
      technologies: ['Stripe API', 'QuickBooks API', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/smart-invoice',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Video Content Creator',
      description: 'Automated video creation with AI-generated scripts, voiceovers, and editing for social media.',
      icon: '🎬',
      price: '$299/month',
      features: ['AI script generation', 'Automated voiceovers', 'Video editing', 'Social media optimization', 'Analytics dashboard'],
      benefits: ['Create videos 10x faster', 'Reduce production costs by 70%', 'Increase engagement'],
      marketPrice: '$500-1000/month',
      category: 'Content Creation',
      technologies: ['OpenAI GPT', 'ElevenLabs', 'FFmpeg', 'React', 'AWS'],
      link: 'https://ziontechgroup.com/ai-video-creator',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Project Management',
      description: 'AI-driven project management with automated task assignment, progress tracking, and resource optimization.',
      icon: '📋',
      price: '$149/month',
      features: ['AI task assignment', 'Progress prediction', 'Resource optimization', 'Risk assessment', 'Team collaboration'],
      benefits: ['Improve project success rate by 40%', 'Reduce project delays', 'Optimize team productivity'],
      marketPrice: '$200-400/month',
      category: 'Productivity',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
      link: 'https://ziontechgroup.com/smart-project-management',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Legal Document Analyzer',
      description: 'Intelligent legal document review with contract analysis, risk assessment, and compliance checking.',
      icon: '⚖️',
      price: '$399/month',
      features: ['Contract analysis', 'Risk assessment', 'Compliance checking', 'Document comparison', 'Legal research'],
      benefits: ['Reduce legal review time by 60%', 'Improve accuracy', 'Lower legal costs'],
      marketPrice: '$600-1200/month',
      category: 'Legal',
      technologies: ['NLP', 'Machine Learning', 'React', 'Python', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/ai-legal-analyzer',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Real Estate Analyzer',
      description: 'AI-powered property analysis with market trends, investment potential, and automated valuations.',
      icon: '🏠',
      price: '$199/month',
      features: ['Property valuation', 'Market analysis', 'Investment scoring', 'Rental yield prediction', 'Location insights'],
      benefits: ['Make better investment decisions', 'Save 15+ hours on research', 'Increase ROI by 25%'],
      marketPrice: '$300-600/month',
      category: 'Real Estate',
      technologies: ['Machine Learning', 'Zillow API', 'React', 'Python', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/smart-real-estate',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness plans with AI-generated workouts, nutrition tracking, and progress monitoring.',
      icon: '💪',
      price: '$49/month',
      features: ['Personalized workouts', 'Nutrition tracking', 'Progress monitoring', 'Goal setting', 'Community features'],
      benefits: ['Achieve fitness goals faster', 'Personalized guidance', 'Track progress effectively'],
      marketPrice: '$80-150/month',
      category: 'Health & Fitness',
      technologies: ['Machine Learning', 'React Native', 'Node.js', 'MongoDB', 'Wearable APIs'],
      link: 'https://ziontechgroup.com/ai-fitness-coach',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Home Automation',
      description: 'AI-powered home automation with intelligent scheduling, energy optimization, and security monitoring.',
      icon: '🏡',
      price: '$99/month',
      features: ['Smart device control', 'Energy optimization', 'Security monitoring', 'Voice commands', 'Mobile app'],
      benefits: ['Reduce energy costs by 30%', 'Enhance security', 'Convenient automation'],
      marketPrice: '$150-300/month',
      category: 'IoT & Smart Home',
      technologies: ['IoT', 'React Native', 'Node.js', 'MQTT', 'AWS IoT'],
      link: 'https://ziontechgroup.com/smart-home-automation',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation with natural language processing and multi-channel support.',
      icon: '🤖',
      price: '$199/month',
      features: ['24/7 customer support', 'Multi-language support', 'Ticket routing', 'Knowledge base', 'Analytics'],
      benefits: ['Reduce support costs by 50%', 'Improve response time', 'Scale support operations'],
      marketPrice: '$300-600/month',
      category: 'Customer Service',
      technologies: ['NLP', 'OpenAI GPT', 'React', 'Node.js', 'MongoDB'],
      link: 'https://ziontechgroup.com/ai-customer-support',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email marketing with AI-driven personalization, segmentation, and campaign optimization.',
      icon: '📧',
      price: '$149/month',
      features: ['AI personalization', 'Automated segmentation', 'Campaign optimization', 'A/B testing', 'Analytics'],
      benefits: ['Increase open rates by 40%', 'Improve conversion rates', 'Save 20+ hours/week'],
      marketPrice: '$200-500/month',
      category: 'Marketing',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'SendGrid API'],
      link: 'https://ziontechgroup.com/ai-email-marketing',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Inventory Management',
      description: 'AI-powered inventory optimization with demand forecasting, automated reordering, and waste reduction.',
      icon: '📦',
      price: '$179/month',
      features: ['Demand forecasting', 'Automated reordering', 'Waste reduction', 'Multi-location support', 'Analytics'],
      benefits: ['Reduce inventory costs by 25%', 'Minimize stockouts', 'Optimize storage'],
      marketPrice: '$250-500/month',
      category: 'E-commerce',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Barcode scanning'],
      link: 'https://ziontechgroup.com/smart-inventory',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI-generated content, optimal posting times, and engagement analysis.',
      icon: '📱',
      price: '$129/month',
      features: ['AI content generation', 'Optimal posting times', 'Engagement analysis', 'Multi-platform support', 'Scheduling'],
      benefits: ['Increase engagement by 60%', 'Save 15+ hours/week', 'Grow followers faster'],
      marketPrice: '$200-400/month',
      category: 'Social Media',
      technologies: ['OpenAI GPT', 'Social Media APIs', 'React', 'Node.js', 'MongoDB'],
      link: 'https://ziontechgroup.com/ai-social-media',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'AI-powered business intelligence with automated insights, predictive analytics, and custom reporting.',
      icon: '📊',
      price: '$249/month',
      features: ['Automated insights', 'Predictive analytics', 'Custom reports', 'Data visualization', 'Real-time monitoring'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Save 25+ hours/week on reporting'],
      marketPrice: '$400-800/month',
      category: 'Analytics',
      technologies: ['Machine Learning', 'React', 'D3.js', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/smart-analytics',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Content Writer',
      description: 'Intelligent content creation with AI-generated articles, blog posts, and marketing copy.',
      icon: '✍️',
      price: '$99/month',
      features: ['AI article generation', 'SEO optimization', 'Multiple formats', 'Plagiarism checking', 'Tone adjustment'],
      benefits: ['Create content 10x faster', 'Improve SEO rankings', 'Maintain consistent quality'],
      marketPrice: '$150-300/month',
      category: 'Content Creation',
      technologies: ['OpenAI GPT', 'React', 'Node.js', 'MongoDB', 'Grammarly API'],
      link: 'https://ziontechgroup.com/ai-content-writer',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Appointment Scheduler',
      description: 'AI-powered scheduling with automated booking, conflict resolution, and calendar optimization.',
      icon: '📅',
      price: '$79/month',
      features: ['Automated booking', 'Conflict resolution', 'Calendar sync', 'Reminder system', 'Multi-timezone support'],
      benefits: ['Reduce no-shows by 30%', 'Save 10+ hours/week', 'Improve customer satisfaction'],
      marketPrice: '$120-250/month',
      category: 'Scheduling',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Calendar APIs', 'Email integration'],
      link: 'https://ziontechgroup.com/smart-scheduler',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Translation Service',
      description: 'Real-time translation with AI-powered accuracy, context understanding, and multi-language support.',
      icon: '🌐',
      price: '$199/month',
      features: ['Real-time translation', 'Context understanding', '100+ languages', 'Document translation', 'API integration'],
      benefits: ['Break language barriers', 'Expand global reach', 'Improve communication'],
      marketPrice: '$300-600/month',
      category: 'Communication',
      technologies: ['NLP', 'Google Translate API', 'React', 'Node.js', 'MongoDB'],
      link: 'https://ziontechgroup.com/ai-translation',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Password Manager',
      description: 'AI-enhanced password security with breach detection, strength analysis, and automated updates.',
      icon: '🔐',
      price: '$49/month',
      features: ['Password generation', 'Breach detection', 'Strength analysis', 'Auto-fill', 'Multi-device sync'],
      benefits: ['Enhance security', 'Simplify password management', 'Prevent breaches'],
      marketPrice: '$80-150/month',
      category: 'Security',
      technologies: ['Encryption', 'React', 'Node.js', 'PostgreSQL', 'Browser extensions'],
      link: 'https://ziontechgroup.com/smart-password-manager',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Custom voice assistant with natural language processing, task automation, and smart home integration.',
      icon: '🎤',
      price: '$299/month',
      features: ['Voice commands', 'Task automation', 'Smart home control', 'Calendar management', 'Custom skills'],
      benefits: ['Hands-free operation', 'Increase productivity', 'Seamless integration'],
      marketPrice: '$500-1000/month',
      category: 'Voice Technology',
      technologies: ['Speech Recognition', 'NLP', 'React', 'Node.js', 'AWS Polly'],
      link: 'https://ziontechgroup.com/ai-voice-assistant',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Expense Tracker',
      description: 'AI-powered expense management with automatic categorization, receipt scanning, and budget insights.',
      icon: '💳',
      price: '$69/month',
      features: ['Automatic categorization', 'Receipt scanning', 'Budget insights', 'Tax preparation', 'Multi-currency support'],
      benefits: ['Save 5+ hours/week', 'Improve financial awareness', 'Simplify tax preparation'],
      marketPrice: '$100-200/month',
      category: 'Finance',
      technologies: ['OCR', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/smart-expense-tracker',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'Developer Tools', name: 'Developer Tools', icon: Code },
    { id: 'Marketing', name: 'Marketing', icon: Target },
    { id: 'Finance', name: 'Finance', icon: DollarSign },
    { id: 'Content Creation', name: 'Content Creation', icon: FileText },
    { id: 'Productivity', name: 'Productivity', icon: Zap },
    { id: 'Legal', name: 'Legal', icon: Shield },
    { id: 'Real Estate', name: 'Real Estate', icon: Home },
    { id: 'Health & Fitness', name: 'Health & Fitness', icon: Heart },
    { id: 'IoT & Smart Home', name: 'IoT & Smart Home', icon: Wifi },
    { id: 'Customer Service', name: 'Customer Service', icon: MessageSquare },
    { id: 'E-commerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'Social Media', name: 'Social Media', icon: Share2 },
    { id: 'Analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'Scheduling', name: 'Scheduling', icon: Calendar },
    { id: 'Communication', name: 'Communication', icon: Globe2 },
    { id: 'Security', name: 'Security', icon: Lock },
    { id: 'Voice Technology', name: 'Voice Technology', icon: Mic }
  ];

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalSavings = microSAASServices.reduce((total, service) => {
    const marketPriceRange = service.marketPrice.split('-');
    const avgMarketPrice = (parseInt(marketPriceRange[0].replace('$', '')) + parseInt(marketPriceRange[1].replace('$', '').split('/')[0])) / 2;
    const ourPrice = parseInt(service.price.replace('$', '').split('/')[0]);
    return total + (avgMarketPrice - ourPrice);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions. From developer tools to marketing automation, we offer affordable, intelligent software solutions for every business need." />
        <meta name="keywords" content="micro saas, ai solutions, software as a service, business automation, ai tools, productivity software" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              AI-Powered Software for Every Business Need
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our comprehensive collection of intelligent micro SAAS solutions. 
              From developer tools to marketing automation, we offer affordable, cutting-edge software 
              that transforms how you work and grow your business.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{microSAASServices.length}+</div>
                <div className="text-gray-300">Micro SAAS Solutions</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">${totalSavings.toLocaleString()}+</div>
                <div className="text-gray-300">Average Savings</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button text-lg px-8 py-4"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button text-lg px-8 py-4"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="cyber-card hologram-card p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Find Your Perfect Solution</h2>
            
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className={`cyber-card hologram-card transition-all duration-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
                  </div>

                  {/* Service Title and Category */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full mb-4">
                    {service.category}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <ArrowRight className="w-3 h-3 mr-2 text-green-400" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-gray-400">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <Star className="w-3 h-3 mr-2 text-yellow-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
                      <Cpu className="w-4 h-4 mr-2" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-800/50 text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-800/50 text-gray-400 text-xs rounded">
                          +{service.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-cyan-500/30 pt-4">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {service.contact}
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {service.email}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 cyber-button text-center text-sm py-2"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-2 inline" />
                      </a>
                      <a
                        href={`tel:${service.contact}`}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="cyber-button"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="cyber-card hologram-card p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our AI-powered micro SAAS solutions. 
              Get started today with a free consultation and see how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-2 text-purple-400" />
                <span>24/7 Support Available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button text-lg px-8 py-4"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button text-lg px-8 py-4"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;