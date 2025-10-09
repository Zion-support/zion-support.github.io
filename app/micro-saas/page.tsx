import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = [
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered insights and automation',
      category: 'productivity',
      price: { starting: 29, period: 'month' },
      rating: 4.8,
      reviews: 1247,
      features: ['AI-powered task prioritization', 'Automated progress tracking', 'Smart resource allocation', 'Predictive analytics'],
      icon: Target,
      popular: true
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Smart expense management with automatic categorization and insights',
      category: 'finance',
      price: { starting: 19, period: 'month' },
      rating: 4.6,
      reviews: 892,
      features: ['Automatic categorization', 'Receipt scanning', 'Budget alerts', 'Financial insights'],
      icon: DollarSign,
      popular: false
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Create high-quality content with AI-powered writing assistance',
      category: 'marketing',
      price: { starting: 39, period: 'month' },
      rating: 4.7,
      reviews: 2156,
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization'],
      icon: FileText,
      popular: true
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      description: 'Automated customer support with intelligent chatbot and ticketing',
      category: 'support',
      price: { starting: 49, period: 'month' },
      rating: 4.5,
      reviews: 743,
      features: ['Smart chatbot', 'Ticket routing', 'Sentiment analysis', 'Multi-language support'],
      icon: MessageSquare,
      popular: false
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business analytics with AI-powered insights',
      category: 'analytics',
      price: { starting: 59, period: 'month' },
      rating: 4.9,
      reviews: 1834,
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Data visualization'],
      icon: BarChart,
      popular: true
    },
    {
      id: 'ai-social-scheduler',
      name: 'AI Social Scheduler',
      description: 'Intelligent social media scheduling and content optimization',
      category: 'marketing',
      price: { starting: 25, period: 'month' },
      rating: 4.4,
      reviews: 567,
      features: ['Optimal timing', 'Content suggestions', 'Multi-platform posting', 'Performance tracking'],
      icon: Share,
      popular: false
    }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (sortBy === 'popularity') {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price') {
      filtered = filtered.sort((a, b) => a.price.starting - b.price.starting);
    } else if (sortBy === 'reviews') {
      filtered = filtered.sort((a, b) => b.reviews - a.reviews);
    }
    
    return filtered;
  }, [microSAASServices, selectedCategory, searchTerm, sortBy]);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'finance', name: 'Finance' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'support', name: 'Support' },
    { id: 'analytics', name: 'Analytics' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS - Zion Tech Group</title>
        <meta name="description" content="Discover powerful micro SaaS solutions powered by AI. Streamline your business with our collection of intelligent tools and applications." />
      </Helmet>
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span>
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Discover powerful micro SaaS solutions powered by AI. Streamline your business with our collection of intelligent tools and applications.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search micro SaaS solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="price">Sort by Price</option>
              <option value="reviews">Sort by Reviews</option>
            </select>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                {service.popular && (
                  <div className="absolute -top-2 -right-2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-400'
                        }`}
                        fill={i < Math.floor(service.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="text-gray-300 ml-2 text-sm">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-semibold">
                    ${service.price.starting}/{service.price.period}
                  </div>
                  <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center">
                    Try Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl text-center p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">Need a Custom Micro SaaS Solution?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We can build a custom micro SaaS solution tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASPage;