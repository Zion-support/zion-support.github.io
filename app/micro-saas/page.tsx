import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, ArrowRight, Phone, Mail, MapPin, CheckCircle, Award, Calendar, Settings, FileText, Database, Smartphone, Lock, Code, PieChart, Activity, CreditCard, ShoppingCart, Camera, Music, Video, Palette, Wrench, Lightbulb, Rocket, Heart } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Create high-quality content at scale with AI-powered writing tools',
      category: 'content',
      price: { starting: 29, period: 'month' },
      rating: 4.8,
      reviews: 1247,
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'SEO optimization'],
      icon: FileText,
      popular: true,
      new: false
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Intelligent business analytics with predictive insights',
      category: 'analytics',
      price: { starting: 49, period: 'month' },
      rating: 4.9,
      reviews: 892,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      icon: BarChart,
      popular: true,
      new: false
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      description: 'Automated customer support with intelligent chatbots',
      category: 'support',
      price: { starting: 39, period: 'month' },
      rating: 4.7,
      reviews: 1563,
      features: ['24/7 chatbot', 'Ticket management', 'Knowledge base', 'Multi-language support'],
      icon: MessageSquare,
      popular: false,
      new: true
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with automated scheduling',
      category: 'productivity',
      price: { starting: 59, period: 'month' },
      rating: 4.6,
      reviews: 1089,
      features: ['Task automation', 'Resource optimization', 'Timeline prediction', 'Team collaboration'],
      icon: Calendar,
      popular: false,
      new: false
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Automated marketing campaigns with AI optimization',
      category: 'marketing',
      price: { starting: 79, period: 'month' },
      rating: 4.8,
      reviews: 743,
      features: ['Campaign automation', 'A/B testing', 'Lead scoring', 'ROI tracking'],
      icon: Target,
      popular: true,
      new: false
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization',
      description: 'Transform data into interactive visualizations with AI',
      category: 'analytics',
      price: { starting: 34, period: 'month' },
      rating: 4.5,
      reviews: 634,
      features: ['Interactive charts', 'Auto-generated insights', 'Custom dashboards', 'Export options'],
      icon: PieChart,
      popular: false,
      new: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'support', name: 'Support', icon: MessageSquare },
    { id: 'productivity', name: 'Productivity', icon: Calendar },
    { id: 'marketing', name: 'Marketing', icon: Target }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price.starting - b.price.starting;
        case 'price-high':
          return b.price.starting - a.price.starting;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'popularity':
        default:
          return b.popular ? 1 : -1;
      }
    });

    return filtered;
  }, [microSAASServices, searchTerm, selectedCategory, sortBy]);

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'support@ziontechgroup.com',
    address: 'Middletown, DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS solutions designed to streamline business operations and boost productivity." />
        <meta name="keywords" content="micro saas, AI tools, business automation, productivity software, AI solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful AI-driven micro SAAS tools designed to solve specific business challenges. 
                Simple, effective, and affordable solutions for modern businesses.
              </p>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="popularity">Sort by Popularity</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="reviews">Most Reviews</option>
                  </select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group ${
                    service.popular ? 'ring-2 ring-cyan-400' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <service.icon className="w-12 h-12" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                      {service.new && (
                        <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center">
                          <Zap className="w-3 h-3 mr-1" />
                          New
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white">
                        ${service.price.starting}
                      </span>
                      <span className="text-gray-400">/{service.price.period}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Get Started
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="w-full bg-slate-800 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Micro SAAS?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We can build a custom micro SAAS solution tailored to your specific business needs. 
                Get a free consultation and custom development quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;
