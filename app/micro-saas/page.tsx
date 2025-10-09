import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Share, Package } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = [
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered scheduling, resource allocation, and risk prediction. Automate complex project workflows and optimize team productivity.',
      icon: Calendar,
      category: 'productivity',
      pricing: { starting: 79, period: 'month' },
      features: ['Smart task scheduling', 'Resource optimization', 'Risk prediction', 'Team collaboration', 'Gantt chart automation', 'Budget tracking'],
      benefits: ['Complete projects 30% faster', 'Reduce project risks by 85%', 'Better team coordination', 'Save 15+ hours weekly'],
      popular: false,
      rating: 4.6,
      users: 4200,
      link: 'https://ziontechgroup.com/ai-project-manager',
      marketPrice: '$120/month'
    },
    {
      id: 'ai-invoice-generator',
      name: 'Smart Invoice AI',
      description: 'Automate invoice creation and management with AI-powered data extraction and processing. Eliminate manual data entry and reduce billing errors.',
      icon: FileText,
      category: 'automation',
      pricing: { starting: 49, period: 'month' },
      features: ['Auto data extraction', 'Smart categorization', 'Payment tracking', 'Tax calculations', 'Multi-currency support', 'Client portal'],
      benefits: ['Save 5 hours weekly', 'Reduce errors by 95%', 'Faster payments', 'Improve cash flow'],
      popular: true,
      rating: 4.8,
      users: 8900,
      link: 'https://ziontechgroup.com/smart-invoice-ai',
      marketPrice: '$89/month'
    },
    {
      id: 'ai-content-optimizer',
      name: 'ContentIQ Optimizer',
      description: 'Optimize your content for SEO, readability, and engagement with advanced AI analysis. Boost your content performance across all platforms.',
      icon: Target,
      category: 'content',
      pricing: { starting: 29, period: 'month' },
      features: ['SEO optimization', 'Readability analysis', 'Engagement scoring', 'A/B testing', 'Content suggestions', 'Competitor analysis'],
      benefits: ['Increase traffic by 40%', 'Better user engagement', 'Higher conversion rates', 'Save 10+ hours weekly'],
      popular: false,
      rating: 4.7,
      users: 5600,
      link: 'https://ziontechgroup.com/content-iq-optimizer',
      marketPrice: '$59/month'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'DataVision Analytics',
      description: 'Comprehensive business analytics with AI-powered insights and predictive modeling. Transform raw data into actionable business intelligence.',
      icon: BarChart,
      category: 'analytics',
      pricing: { starting: 99, period: 'month' },
      features: ['Real-time analytics', 'Predictive insights', 'Custom reports', 'Data visualization', 'Automated alerts', 'ROI tracking'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Optimize performance', 'Increase revenue by 25%'],
      popular: true,
      rating: 4.9,
      users: 12000,
      link: 'https://ziontechgroup.com/datavision-analytics',
      marketPrice: '$199/month'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'SupportBot AI',
      description: 'Intelligent customer support automation with natural language processing. Provide 24/7 customer service with AI-powered chatbots.',
      icon: MessageSquare,
      category: 'automation',
      pricing: { starting: 69, period: 'month' },
      features: ['Natural language processing', 'Multi-language support', 'Ticket routing', 'Sentiment analysis', 'Knowledge base integration', 'Live chat handoff'],
      benefits: ['Reduce support costs by 60%', 'Improve response time by 90%', 'Increase customer satisfaction', 'Handle 10x more inquiries'],
      popular: true,
      rating: 4.8,
      users: 15600,
      link: 'https://ziontechgroup.com/supportbot-ai',
      marketPrice: '$149/month'
    },
    {
      id: 'ai-social-media-manager',
      name: 'SocialAI Manager',
      description: 'Automate social media management with AI-powered content creation, scheduling, and engagement optimization across all platforms.',
      icon: Share,
      category: 'content',
      pricing: { starting: 39, period: 'month' },
      features: ['Content generation', 'Auto scheduling', 'Engagement optimization', 'Hashtag research', 'Performance tracking', 'Multi-platform posting'],
      benefits: ['Increase engagement by 300%', 'Save 20+ hours weekly', 'Grow followers by 150%', 'Improve brand awareness'],
      popular: false,
      rating: 4.7,
      users: 7800,
      link: 'https://ziontechgroup.com/social-ai-manager',
      marketPrice: '$79/month'
    },
    {
      id: 'ai-email-marketing',
      name: 'EmailAI Campaigns',
      description: 'AI-powered email marketing automation with personalized content, send time optimization, and advanced segmentation.',
      icon: Mail,
      category: 'marketing',
      pricing: { starting: 59, period: 'month' },
      features: ['Personalized content', 'Send time optimization', 'Advanced segmentation', 'A/B testing', 'Deliverability optimization', 'Analytics dashboard'],
      benefits: ['Increase open rates by 45%', 'Boost click-through rates by 80%', 'Reduce unsubscribe rates', 'Improve ROI by 200%'],
      popular: true,
      rating: 4.9,
      users: 11200,
      link: 'https://ziontechgroup.com/email-ai-campaigns',
      marketPrice: '$129/month'
    },
    {
      id: 'ai-inventory-manager',
      name: 'Smart Inventory AI',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and supply chain optimization.',
      icon: Package,
      category: 'productivity',
      pricing: { starting: 89, period: 'month' },
      features: ['Demand forecasting', 'Automated reordering', 'Supply chain optimization', 'Stock level alerts', 'Vendor management', 'Cost analysis'],
      benefits: ['Reduce stockouts by 90%', 'Cut inventory costs by 35%', 'Improve cash flow', 'Optimize supplier relationships'],
      popular: false,
      rating: 4.6,
      users: 3400,
      link: 'https://ziontechgroup.com/smart-inventory-ai',
      marketPrice: '$179/month'
    },
    {
      id: 'ai-expense-tracker',
      name: 'ExpenseAI Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and compliance reporting for businesses of all sizes.',
      icon: Calculator,
      category: 'productivity',
      pricing: { starting: 19, period: 'month' },
      features: ['Receipt scanning', 'Auto categorization', 'Compliance reporting', 'Tax preparation', 'Multi-currency support', 'Team management'],
      benefits: ['Save 8+ hours monthly', 'Reduce errors by 95%', 'Improve compliance', 'Streamline tax preparation'],
      popular: true,
      rating: 4.8,
      users: 18900,
      link: 'https://ziontechgroup.com/expense-ai-tracker',
      marketPrice: '$49/month'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'SEOMaster AI',
      description: 'Advanced SEO optimization with AI-powered keyword research, content analysis, and technical SEO recommendations.',
      icon: Search,
      category: 'marketing',
      pricing: { starting: 49, period: 'month' },
      features: ['Keyword research', 'Content analysis', 'Technical SEO audit', 'Competitor analysis', 'Rank tracking', 'Link building suggestions'],
      benefits: ['Increase organic traffic by 200%', 'Improve search rankings', 'Identify optimization opportunities', 'Save 15+ hours weekly'],
      popular: false,
      rating: 4.7,
      users: 6700,
      link: 'https://ziontechgroup.com/seo-master-ai',
      marketPrice: '$99/month'
    },
    {
      id: 'ai-appointment-scheduler',
      name: 'ScheduleAI Pro',
      description: 'Intelligent appointment scheduling with automated booking, calendar integration, and smart time slot optimization.',
      icon: Clock,
      category: 'productivity',
      pricing: { starting: 29, period: 'month' },
      features: ['Automated booking', 'Calendar integration', 'Time slot optimization', 'Reminder automation', 'Multi-timezone support', 'Client management'],
      benefits: ['Reduce no-shows by 70%', 'Save 12+ hours weekly', 'Improve client satisfaction', 'Increase booking rates'],
      popular: true,
      rating: 4.9,
      users: 14300,
      link: 'https://ziontechgroup.com/schedule-ai-pro',
      marketPrice: '$69/month'
    },
    {
      id: 'ai-lead-scoring',
      name: 'LeadScore AI',
      description: 'Advanced lead scoring and qualification with machine learning algorithms to identify high-value prospects and optimize sales processes.',
      icon: Target,
      category: 'sales',
      pricing: { starting: 79, period: 'month' },
      features: ['Lead scoring algorithms', 'Behavioral analysis', 'Predictive modeling', 'CRM integration', 'Sales forecasting', 'Pipeline optimization'],
      benefits: ['Increase conversion rates by 150%', 'Reduce sales cycle by 40%', 'Improve lead quality', 'Boost revenue by 60%'],
      popular: false,
      rating: 4.8,
      users: 5200,
      link: 'https://ziontechgroup.com/leadscore-ai',
      marketPrice: '$159/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'content', name: 'Content Creation', icon: FileText },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'productivity', name: 'Productivity', icon: Clock },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'sales', name: 'Sales', icon: TrendingUp }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'popularity':
        filtered.sort((a, b) => b.users - a.users);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.pricing.starting - b.pricing.starting);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.starting - a.pricing.starting);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover powerful micro SAAS solutions for your business. AI-powered tools for productivity, automation, content creation, and analytics." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, productivity software, automation tools" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Solutions</span>
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Powerful, focused tools for specific business needs
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Discover our collection of specialized micro SAAS applications designed to solve specific business challenges with precision and efficiency.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-slate-800">
                      {category.name}
                    </option>
                  ))}
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="popularity" className="bg-slate-800">Most Popular</option>
                  <option value="rating" className="bg-slate-800">Highest Rated</option>
                  <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                  <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{service.name}</h3>
                        {service.popular && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-600 to-purple-600 text-white animate-pulse">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">${service.pricing.starting}</div>
                      <div className="text-sm text-gray-400">/{service.pricing.period}</div>
                      {service.marketPrice && (
                        <div className="text-xs text-gray-500 line-through">Market: {service.marketPrice}</div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-blue-400 mr-1" />
                      {service.users.toLocaleString()} users
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group text-center"
                    >
                      <span>Try Now</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We can build a custom micro SAAS solution tailored to your specific business needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Request Custom Solution
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;