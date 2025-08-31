import React, { useState } from 'react';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  TrendingDown,
  Users2,
  BarChart,
  PieChart,
  Activity,
  List,
  Grid,
  BookOpen,
  ShoppingCart,
  Home,
  Truck
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from '../data/advancedInnovativeServices2025';

const AdvancedServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = ADVANCED_INNOVATIVE_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: allServices.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'AI & Supply Chain', name: 'AI & Supply Chain', count: allServices.filter(s => s.category === 'AI & Supply Chain').length, icon: '📦', color: 'from-zion-blue to-zion-cyan' },
    { id: 'AI & Financial Technology', name: 'AI & Financial Technology', count: allServices.filter(s => s.category === 'AI & Financial Technology').length, icon: '💰', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Content Marketing', name: 'AI & Content Marketing', count: allServices.filter(s => s.category === 'AI & Content Marketing').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'AI & Human Resources', name: 'AI & Human Resources', count: allServices.filter(s => s.category === 'AI & Human Resources').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & IoT', name: 'AI & IoT', count: allServices.filter(s => s.category === 'AI & IoT').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'AI & Project Management', name: 'AI & Project Management', count: allServices.filter(s => s.category === 'AI & Project Management').length, icon: '📊', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Customer Experience', name: 'AI & Customer Experience', count: allServices.filter(s => s.category === 'AI & Customer Experience').length, icon: '🎯', color: 'from-zion-blue to-zion-green' },
    { id: 'AI & DevOps', name: 'AI & DevOps', count: allServices.filter(s => s.category === 'AI & DevOps').length, icon: '⚙️', color: 'from-zion-gray to-zion-blue' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Legal Technology', name: 'AI & Legal Technology', count: allServices.filter(s => s.category === 'AI & Legal Technology').length, icon: '⚖️', color: 'from-zion-blue to-zion-purple' },
    { id: 'AI & Education', name: 'AI & Education', count: allServices.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & Manufacturing', name: 'AI & Manufacturing', count: allServices.filter(s => s.category === 'AI & Manufacturing').length, icon: '🏭', color: 'from-zion-gray to-zion-blue' },
    { id: 'AI & Retail', name: 'AI & Retail', count: allServices.filter(s => s.category === 'AI & Retail').length, icon: '🛒', color: 'from-zion-orange to-zion-red' },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', count: allServices.filter(s => s.category === 'AI & Real Estate').length, icon: '🏠', color: 'from-zion-blue to-zion-green' },
    { id: 'AI & Transportation', name: 'AI & Transportation', count: allServices.filter(s => s.category === 'AI & Transportation').length, icon: '🚚', color: 'from-zion-blue to-zion-cyan' },
    { id: 'AI & Energy', name: 'AI & Energy', count: allServices.filter(s => s.category === 'AI & Energy').length, icon: '⚡', color: 'from-zion-yellow to-zion-green' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviewCount':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Business Intelligence': <Brain className="w-6 h-6" />,
      'Quantum Computing': <Cpu className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'AI & Healthcare': <Users className="w-6 h-6" />,
      'AI & Supply Chain': <Database className="w-6 h-6" />,
      'AI & Financial Technology': <DollarSign className="w-6 h-6" />,
      'AI & Content Marketing': <Code className="w-6 h-6" />,
      'AI & Human Resources': <Users2 className="w-6 h-6" />,
      'AI & IoT': <Network className="w-6 h-6" />,
      'AI & Project Management': <BarChart className="w-6 h-6" />,
      'AI & Customer Experience': <Target className="w-6 h-6" />,
      'AI & DevOps': <Server className="w-6 h-6" />,
      'AI & Marketing': <TrendingUp className="w-6 h-6" />,
      'AI & Research': <Lightbulb className="w-6 h-6" />,
      'AI & Legal Technology': <ShieldCheck className="w-6 h-6" />,
      'AI & Education': <BookOpen className="w-6 h-6" />,
      'AI & Manufacturing': <Server className="w-6 h-6" />,
      'AI & Retail': <ShoppingCart className="w-6 h-6" />,
      'AI & Real Estate': <Home className="w-6 h-6" />,
      'AI & Transportation': <Truck className="w-6 h-6" />,
      'AI & Energy': <Zap className="w-6 h-6" />
    };
    return iconMap[category] || <Rocket className="w-6 h-6" />;
  };

  return (
    <>
      <Helmet>
        <title>Advanced Innovative Services 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge AI, IT, and Micro SaaS services from Zion Tech Group. Advanced solutions for business transformation, cybersecurity, healthcare, finance, and more." />
        <meta name="keywords" content="AI services, IT solutions, Micro SaaS, cybersecurity, healthcare AI, financial technology, quantum computing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/advanced-services-showcase-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Advanced Innovative Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                  2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Cutting-edge AI, IT, and Micro SaaS solutions that transform businesses and drive innovation across industries
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <Brain className="w-5 h-5 text-zion-cyan" />
                  <span>AI-Powered Solutions</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <Shield className="w-5 h-5 text-zion-green" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <Rocket className="w-5 h-5 text-zion-purple" />
                  <span>Innovation First</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-zion-cyan to-zion-blue py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6" />
                <span className="font-semibold">+1 302 464 0950</span>
                <span className="text-sm opacity-90">Mobile</span>
=======
import { SEO } from "../components/SEO";
import { ADVANCED_MICRO_SAAS_SERVICES_2025 } from "../data/advancedMicroSaasServices2025";
import { SPECIALIZED_IT_SERVICES_2025 } from "../data/specializedITServices2025";
import { ADVANCED_AI_SERVICES_2025 } from "../data/advancedAIServices2025";
const AdvancedServicesShowcase2025: React.FC = () => {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const allServices = [;
    ...ADVANCED_MICRO_SAAS_SERVICES_2025.map(service => ({ ...service, source: 'Micro SaaS' })),;
    ...SPECIALIZED_IT_SERVICES_2025.map(service => ({ ...service, source: 'IT Services' })),;
    ...ADVANCED_AI_SERVICES_2025.map(service => ({ ...service, source: 'AI Solutions' }));
  ];
  const filteredServices = allServices.filter(service => {;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch});
  const categories = [;
    { id: 'all', name: 'All Services', count: allServices.length },;
    { id: 'Micro SaaS', name: 'Micro SaaS', count: ADVANCED_MICRO_SAAS_SERVICES_2025.length },;
    { id: 'IT Services', name: 'IT Services', count: SPECIALIZED_IT_SERVICES_2025.length },;
    { id: 'AI Solutions', name: 'AI Solutions', count: ADVANCED_AI_SERVICES_2025.length };
  ];
  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Advanced Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of advanced micro SaaS, IT services, and AI solutions designed for the future of business technology."
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advanced Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge portfolio of micro SaaS solutions, specialized IT services, and advanced AI platforms designed to transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-lg text-gray-300 hover:text-white hover:border-white transition-colors duration-200"
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="font-semibold">📞</span>
                <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
                <span className="text-sm opacity-90">Email</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6" />
                <span className="font-semibold">364 E Main St STE 1008</span>
                <span className="text-sm opacity-90">Middletown DE 19709</span>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered business intelligence to quantum computing solutions, our services cover every aspect of modern technology needs
              </p>
            </motion.div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
                <div className="text-gray-300">Advanced Services</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-zion-green mb-2">20+</div>
                <div className="text-gray-300">Categories</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">95%+</div>
                <div className="text-gray-300">AI Score</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-zion-blue mb-2">600%+</div>
                <div className="text-gray-300">Average ROI</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Sort */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviewCount">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-white/10 backdrop-blur-sm rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
=======
        </div>
      </div>
      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Service Categories</h2>
          <p className="text-gray-300 text-lg">Comprehensive solutions across three key technology domains</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Micro SaaS Solutions</h3>
            <p className="text-blue-100 mb-6">
              Scalable, focused software solutions that address specific business needs with rapid deployment and measurable ROI.
            </p>
            <div className="text-3xl font-bold text-blue-100">
              {ADVANCED_MICRO_SAAS_SERVICES_2025.length} Services
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Specialized IT Services</h3>
            <p className="text-green-100 mb-6">
              Enterprise-grade IT infrastructure, security, and development services designed for modern business requirements.
            </p>
            <div className="text-3xl font-bold text-green-100">
              {SPECIALIZED_IT_SERVICES_2025.length} Services
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Advanced AI Solutions</h3>
            <p className="text-purple-100 mb-6">
              Cutting-edge artificial intelligence platforms that automate processes, provide insights, and drive innovation.
            </p>
            <div className="text-3xl font-bold text-purple-100">
              {ADVANCED_AI_SERVICES_2025.length} Services
            </div>
          </div>
        </div>
      </div>
      {/* Services Filter and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg scale-105'
                      : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
<<<<<<< HEAD
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                  <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                    {category.count}
                  </span>
=======
                  {category.name} ({category.count})
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                </button>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Service Image */}
                  <div className={`relative ${viewMode === 'list' ? 'w-48 h-32' : 'h-48'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-zion-cyan text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {service.aiScore}% AI
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-zion-cyan uppercase tracking-wide">
                        {service.category}
                      </span>
                      {service.featured && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{service.rating}</span>
                        <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          ${service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400">
                          Market: {service.marketPrice}
                        </div>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key Benefits:</div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-zion-green" />
                          <span>ROI: {service.roi}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Clock className="w-4 h-4 text-zion-blue" />
                          <span>Setup: {service.setupTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Target className="w-4 h-4 text-zion-purple" />
                          <span>Availability: {service.availability}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="px-4 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Phone className="w-3 h-3" />
                          <a href={`tel:${service.contactInfo.phone}`} className="hover:text-zion-cyan">
                            {service.contactInfo.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Mail className="w-3 h-3" />
                          <a href={`mailto:${service.contactInfo.email}`} className="hover:text-zion-cyan">
                            {service.contactInfo.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin className="w-3 h-3" />
                          <span>{service.contactInfo.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {sortedServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or category filters
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="bg-zion-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-blue transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our team of experts help you implement the perfect solution for your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={`tel:+13024640950`}
                  className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
=======
        </div>
      </div>
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service)  => (
            <div key={service.id} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-200">
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  service.source === 'Micro SaaS' ? 'bg-blue-100 text-blue-800' :
                  service.source === 'IT Services' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {service.source}
                </span>
                <span className="text-2xl font-bold text-white">
                  {service.currency}{service.price.toLocaleString()}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="text-blue-400">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Market Price:</span>
                  <span className="text-white font-medium">{service.marketPrice}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">ROI:</span>
                  <span className="text-green-400 font-medium">{service.roi}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Delivery:</span>
                  <span className="text-white font-medium">{service.estimatedDelivery}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
                  Get Quote
                </a>
                <a
                  href={`tel:+13024640950`}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>;
;
        {filteredServices.length === 0 && (;
          <div className="text-center py-16">;
            <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>;
            <button;
              onClick={() => {;
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className = "text-blue-400 hover:text-blue-300 underline"
            >
              Clear filters
            </button>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-gray-400 mb-4">
                  Leading provider of innovative AI, IT, and Micro SaaS solutions for modern businesses.
                </p>
                <div className="flex space-x-4">
                  <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-white transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+13024640950" className="hover:text-zion-cyan">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <div className="space-y-2 text-gray-400">
                  <div>AI & Business Intelligence</div>
                  <div>Cybersecurity Solutions</div>
                  <div>Quantum Computing</div>
                  <div>Healthcare Technology</div>
                  <div>Financial Technology</div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="https://ziontechgroup.com" className="block text-gray-400 hover:text-zion-cyan transition-colors">
                    Home
                  </a>
                  <a href="https://ziontechgroup.com/services" className="block text-gray-400 hover:text-zion-cyan transition-colors">
                    Services
                  </a>
                  <a href="https://ziontechgroup.com/contact" className="block text-gray-400 hover:text-zion-cyan transition-colors">
                    Contact
                  </a>
                  <a href="https://ziontechgroup.com/about" className="block text-gray-400 hover:text-zion-cyan transition-colors">
                    About
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved. | Advanced Innovative Services Showcase</p>
            </div>
          </div>
        </footer>
      </div>
<<<<<<< HEAD
    </>
  );
};

=======
      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your business needs.
            Get in touch today for a personalized consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              Request Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
      {/* Footer Contact Information */}
      <div className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p>📞 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Service Categories</h3>
              <div className="space-y-2 text-gray-300">
                <p>Micro SaaS Solutions</p>
                <p>Specialized IT Services</p>
                <p>Advanced AI Solutions</p>
                <p>Custom Development</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="space-y-2 text-gray-300">
                <p>✓ Expert Team</p>
                <p>✓ Proven Results</p>
                <p>✓ Competitive Pricing</p>
                <p>✓ 24/7 Support</p>
              </div>
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
export default AdvancedServicesShowcase2025;