'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Globe, 
  Smartphone, 
  Database, 
  BarChart3, 
  Mail, 
  Calendar, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Code, 
  Palette, 
  Search, 
  Lock, 
  Cloud, 
  Wifi, 
  Monitor, 
  Headphones, 
  Camera, 
  Printer, 
  HardDrive, 
  Cpu, 
  MemoryStick, 
  Wrench, 
  Settings, 
  Bell, 
  Heart, 
  ThumbsUp, 
  Share2, 
  Download, 
  Upload, 
  Eye, 
  Edit, 
  Trash2, 
  Plus, 
  Minus, 
  X, 
  Check, 
  AlertCircle, 
  Info, 
  HelpCircle, 
  ExternalLink, 
  Brain, 
  Cpu as CpuIcon, 
  Bot, 
  Target, 
  Layers, 
  BarChart, 
  PieChart, 
  LineChart, 
  Activity, 
  Zap as ZapIcon, 
  Sparkles, 
  Atom, 
  Cpu as CpuIcon2,
  Phone,
  MapPin,
  Rocket,
  Award,
  Filter,
  Play,
  Download as DownloadIcon,
  Share2 as ShareIcon,
  Heart as HeartIcon,
  Eye as EyeIcon,
  ThumbsUp as ThumbsUpIcon
} from 'lucide-react';
import { aiServices, aiServiceCategories } from '../../src/data/aiServicesData';

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(aiServices);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  useEffect(() => {
    let filtered = aiServices;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const categories = ['All', ...aiServiceCategories.map(cat => cat.name)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced neural-network-advanced">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-6 py-3 mb-8 cyber-pulse-advanced">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 cyber-text-3d neon-text-advanced">
              AI Services
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of AI services. From machine learning and natural language processing 
              to computer vision and predictive analytics, we deliver cutting-edge AI solutions that drive real business value.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-6 py-3 rounded-lg cyber-pulse-advanced">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Advanced AI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-6 py-3 rounded-lg cyber-pulse-advanced">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Real-time Processing</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-6 py-3 rounded-lg cyber-pulse-advanced">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-500/20 px-6 py-3 rounded-lg cyber-pulse-advanced">
                <Rocket className="w-5 h-5 text-orange-400" />
                <span className="text-white font-medium">Proven Results</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="cyber-button-advanced inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center group"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm text-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                    selectedCategory === category
                      ? 'bg-cyan-400 text-slate-900 cyber-pulse-advanced'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`cyber-card-advanced p-8 hover:scale-105 transition-all duration-300 group relative ${
                    service.popular ? 'ring-2 ring-cyan-400' : ''
                  } ${service.comingSoon ? 'opacity-75' : ''}`}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold cyber-pulse-advanced">
                        <Star className="w-3 h-3 mr-1 inline" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  {service.comingSoon && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        <Clock className="w-3 h-3 mr-1 inline" />
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text-advanced group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">{service.category}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4 text-center">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text-advanced">
                        {formatPrice(service.pricing.monthly)}
                        <span className="text-lg text-gray-400">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        or {formatPrice(service.pricing.yearly)}/year (save 17%)
                      </div>
                      {service.pricing.setup && service.pricing.setup > 0 && (
                        <div className="text-sm text-gray-400 mt-1">
                          + {formatPrice(service.pricing.setup)} setup fee
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <Link
                        to={`/contact?service=${service.id}`}
                        className="w-full cyber-button-advanced py-3 px-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-center block group"
                      >
                        <Rocket className="w-4 h-4 mr-2 inline group-hover:rotate-12 transition-transform" />
                        Get Started
                      </Link>
                      <Link
                        to={service.link}
                        className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block group flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-8xl mb-6">🔍</div>
                <h3 className="text-3xl font-bold text-white mb-4 neon-text-advanced">No services found</h3>
                <p className="text-gray-300 mb-8 text-lg">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="cyber-button-advanced px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 neon-text-advanced cyber-text-3d">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center group"
            >
              <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Free Trial
            </Link>
            <Link
              to="/consultation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center justify-center group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Schedule Demo
            </Link>
          </div>
          <div className="mt-12 text-sm text-gray-200 space-y-2">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200 font-medium">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200 font-medium">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}