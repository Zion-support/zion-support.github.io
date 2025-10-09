import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, Cpu, Eye, MessageSquare, BarChart, Zap, Shield, Globe, 
  ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Clock,
  TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone,
  Settings, FileText, Search, Bot, Palette, Camera, Music, Video,
  Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane,
  Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase,
  Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar,
  Clock3, Compass, PieChart, TrendingDown, Activity
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = useMemo(() => [
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot',
      description: 'Intelligent conversational AI for customer support and engagement',
      category: 'conversational',
      price: { starting: 99, period: 'month' },
      rating: 4.8,
      reviews: 1247,
      features: ['Natural language processing', 'Multi-language support', '24/7 availability', 'Custom training'],
      icon: MessageSquare,
      popular: true
    },
    {
      id: 'ai-analytics',
      name: 'AI Analytics Dashboard',
      description: 'Advanced analytics powered by machine learning for business insights',
      category: 'analytics',
      price: { starting: 199, period: 'month' },
      rating: 4.7,
      reviews: 892,
      features: ['Predictive analytics', 'Real-time insights', 'Custom reports', 'Data visualization'],
      icon: BarChart,
      popular: true
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generator',
      description: 'Automated content creation for blogs, social media, and marketing',
      category: 'content',
      price: { starting: 149, period: 'month' },
      rating: 4.6,
      reviews: 654,
      features: ['Blog post generation', 'Social media content', 'SEO optimization', 'Brand voice training'],
      icon: FileText,
      popular: false
    },
    {
      id: 'ai-image-recognition',
      name: 'AI Image Recognition',
      description: 'Computer vision solutions for image analysis and classification',
      category: 'vision',
      price: { starting: 299, period: 'month' },
      rating: 4.9,
      reviews: 423,
      features: ['Object detection', 'Facial recognition', 'Quality assessment', 'Custom model training'],
      icon: Eye,
      popular: true
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain },
    { id: 'conversational', name: 'Conversational AI', icon: MessageSquare },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'content', name: 'Content Generation', icon: FileText },
    { id: 'vision', name: 'Computer Vision', icon: Eye },
    { id: 'automation', name: 'Automation', icon: Zap }
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

  const formatPrice = (price: typeof aiServices[0]['price']) => {
    return `$${price.starting}/${price.period === 'month' ? 'mo' : 'yr'}`;
  };

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services to transform your business with artificial intelligence solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI services designed to automate, optimize, and innovate.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-400 text-slate-900'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg">
                          <Icon className="w-6 h-6 text-slate-900" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h3>
                          <div className="flex items-center gap-2">
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
                        </div>
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-2 py-1 rounded-full text-xs font-bold">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        {formatPrice(service.price)}
                      </div>
                      <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </div>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
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
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
