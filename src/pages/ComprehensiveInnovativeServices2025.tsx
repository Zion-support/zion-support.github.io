import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  DollarSign,
  Target,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  Settings,
  Tool,
  Briefcase,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Heart,
  BookOpen,
  GraduationCap,
  Factory,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2,
  ShoppingCart
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2025 } from '@/data/comprehensiveInnovativeServices2025';

const ComprehensiveInnovativeServices2025: React.FC = () => {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('AI')).length },
    { id: 'AI & Customer Experience', name: 'Customer Experience', icon: Users, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Customer')).length },
    { id: 'AI & Fintech', name: 'Financial Technology', icon: DollarSign, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Fintech')).length },
    { id: 'AI & Healthcare', name: 'Healthcare Technology', icon: Heart, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Healthcare')).length },
    { id: 'AI & Supply Chain', name: 'Supply Chain', icon: Truck, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Supply Chain')).length },
    { id: 'AI & Marketing', name: 'Marketing Automation', icon: Target, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Marketing')).length },
    { id: 'AI & Human Resources', name: 'Human Resources', icon: UserCheck, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Human Resources')).length },
    { id: 'AI & Project Management', name: 'Project Management', icon: Briefcase, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Project Management')).length },
    { id: 'AI & E-commerce', name: 'E-commerce', icon: ShoppingCart, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('E-commerce')).length },
    { id: 'AI & Legal Technology', name: 'Legal Technology', icon: FileText, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Legal')).length },
    { id: 'AI & Real Estate', name: 'Real Estate', icon: Home, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Real Estate')).length },
    { id: 'AI & Education', name: 'Education Technology', icon: GraduationCap, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Education')).length },
    { id: 'AI & Manufacturing', name: 'Manufacturing', icon: Factory, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Manufacturing')).length },
    { id: 'AI & Energy', name: 'Energy Management', icon: Leaf, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Energy')).length },
    { id: 'AI & Transportation', name: 'Transportation', icon: Car, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Transportation')).length },
    { id: 'AI & Insurance', name: 'Insurance Technology', icon: ShieldAlert, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Insurance')).length },
    { id: 'AI & Government', name: 'Government Technology', icon: Building, count: COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(s => s.category.includes('Government')).length }
  ];

  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(service => {

    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {

    switch (sortBy) {

      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'ai-score':
        return b.aiScore - a.aiScore;
      case 'featured':
      default:
        return b.featured ? 1 : -1;
    }
  });

  const containerVariants = {

    hidden: { opacity: 0 },
    visible: {

      opacity: 1,
      transition: {

        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {

    hidden: { y: 20, opacity: 0 },
    visible: {

      y: 0,
      opacity: 1,
      transition: {

        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Innovative Services 2025 | Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered innovative services and solutions for modern businesses. From business intelligence to healthcare technology, we provide cutting-edge solutions."
        keywords="AI services, business intelligence, customer experience, fintech, healthcare technology, supply chain, marketing automation, HR platform, project management, e-commerce, legal technology, real estate, education, manufacturing, energy management, transportation, insurance, government technology"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Innovative Services 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our cutting-edge AI-powered solutions designed to transform your business across every industry. 
              From business intelligence to government technology, we provide comprehensive, scalable, and innovative services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>20+ Industry Solutions</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Star className="w-5 h-5 mr-2" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center text-purple-400">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>400%+ Average ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-slate-800">
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured" className="bg-slate-800">Featured First</option>
                <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                <option value="rating" className="bg-slate-800">Highest Rated</option>
                <option value="ai-score" className="bg-slate-800">AI Score</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                  </div>
                  {service.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Rating and AI Score */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-gray-400 text-sm ml-1">({service.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="w-4 h-4 text-purple-400 mr-1" />
                    <span className="text-white text-sm">AI Score: {service.aiScore}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="text-gray-400 text-xs">+{service.tags.length - 3} more</span>
                  )}
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg">${service.price.toLocaleString()}/mo</p>
                      <p className="text-gray-300 text-sm">Market: {service.marketPrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 text-sm font-bold">{service.roi}</p>
                      <p className="text-gray-400 text-xs">Setup: {service.setupTime}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.integrations.slice(0, 3).map((integration, intIndex) => (
                      <li key={intIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {integration}
                      </li>
                    ))}
                    {service.integrations.length > 3 && (
                      <li className="text-gray-400 text-xs">+{service.integrations.length - 3} more integrations</li>
                    )}
                  </ul>
                </div>

                {/* Contact Information */}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      <span>{service.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      <span>{service.contactInfo.email}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{service.contactInfo.address}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-center font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="bg-white/10 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-300">Try adjusting your search criteria or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Get in touch with our experts to discuss how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveInnovativeServices2025;