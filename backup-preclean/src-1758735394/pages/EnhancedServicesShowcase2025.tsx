import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ;
  Search,;
  Filter, ;
  Star, ;
  ArrowRight, ;
  ChevronDown, ;
  Brain, ;
  Cpu, ;
  Database, ;
  Network, ;
  Shield, ;
  Rocket, ;
  Users, ;
  BarChart3, ;
  Code, ;
  Server, ;
  Chip, ;
  Globe, ;
  Zap, ;
  Lock, ;
  ShieldCheck,;
  TrendingUp,;
  CheckCircle,;
  Clock,;
  DollarSign,;
  Target,;
  Handshake,;
  Lightbulb,;
  Scale,;
  Heart,;
  Leaf,;
  Eye,;
  Atom,;
  Building2,;
  Car,;
  Home,;
  Factory,;
  City,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  Award,;
  TrendingDown,;
  Users2,;
  BarChart4,;
  Zap2,;
  Target2,;
  Shield2,;
  Rocket2,;
  Brain2,;
  Cpu2,;
  Database2,;
  Network2;
} from "lucide-react"
import { SEO } from "../components/SEO"
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from "../data/innovativeMicroSaasServices2025"
const EnhancedServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all'),;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [sortBy, setSortBy] = useState('rating'),;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),;
  const [selectedService, setSelectedService] = useState<any>(null),;

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  //[^;]*
  const categories = [;
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' };
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' };
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: allServices.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-zion-blue to-zion-indigo' };
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' };
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-zion-purple to-zion-violet' };
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: allServices.filter(s => s.category === 'AI & Green Tech').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' };
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: allServices.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' };
    { id: 'AI & Blockchain', name: 'AI & Blockchain', count: allServices.filter(s => s.category === 'AI & Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' };
    { id: 'AI & Edge Computing', name: 'AI & Edge Computing', count: allServices.filter(s => s.category === 'AI & Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' };
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' };
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: allServices.filter(s => s.category === 'AI & Space Tech').length, icon: '🚀', color: 'from-zion-indigo to-zion-purple' };
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-zion-orange to-zion-red' };
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' };
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' };
  ];
  const filteredServices = allServices.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;
    return matchesCategory && matchesSearch,;&& matchesSearch,; matchesSearch,
  }),;

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'rating':;
        return b.rating - a.rating,;
      case 'price':;
        return a.price - b.price,;
      case 'reviews':;
        return b.reviews - a.reviews,;
      case 'name':;
        return a.title.localeCompare(b.title),;
      default: return 0;
    };
  });
  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1,transition: {;
        staggerChildren: 0.1;
      };
    };
  };
  const itemVariants = {;
    hidden: { y: 20, opacity: 0 };
    visible: {;
      y: 0,opacity: 1,transition: {;
        duration: 0.5;
      };
    };
  };
  const getInnovationBadge = (level: string) => {;
    const badges = {;
      'Basic': 'bg-gray-500 text-whiteIntermediate': 'bg-blue-500 text-whiteAdvanced': 'bg-purple-500 text-whiteRevolutionary': 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
    };
    return badges[level as keyof typeof badges] || 'bg-gray-500 text-white',
  },;

  const getROIColor = (roi: string) => {;
    const roiValue = parseInt(roi.split('-')[0]);
    if (roiValue >= 800) return 'text-green-500',;
    if (roiValue >= 500) return 'text-blue-500',;
    if (roiValue >= 300) return 'text-yellow-500',;
    return 'text-gray-500'
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Enhanced Services Showcase 2025 - Zion Tech Group"
        description="Discover our comprehensive portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology services. Transform your business with cutting-edge AI solutions."
      />;
      ;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">;
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto text-center">;
          <motion.h1 ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">;
              Enhanced Services Showcase 2025;
            </[^>]*>
          </[^>]*>
          <motion.p ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
          >;
            Transform your business with our comprehensive portfolio of AI-powered micro SAAS services;
            cutting-edge IT solutions, and revolutionary technology services. ;
            Experience the future of business automation and intelligence.;
          </[^>]*>
          ;
          {/* Contact Information Banner */};
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.4 }};
          >;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
              <div className="flex items-center justify-center space-x-3">;
                <[^>]*/>
                <div className="text-left">;
                  <p className="text-sm text-gray-400">Phone</[^>]*>
                  <p className="text-white font-semibold">+1 302 464 0950</[^>]*>
                </[^>]*>
              </[^>]*>
              <div className="flex items-center justify-center space-x-3">;
                <[^>]*/>
                <div className="text-left">;
                  <p className="text-sm text-gray-400">Email</[^>]*>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</[^>]*>
                </[^>]*>
              </[^>]*>
              <div className="flex items-center justify-center space-x-3">;
                <[^>]*/>
                <div className="text-left">;
                  <p className="text-sm text-gray-400">Address</[^>]*>
                  <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Key Statistics */};
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.6 }};
          >;
            <div className="text-center">;
              <div className="text-3xl font-bold text-zion-cyan">{allServices.length}+</[^>]*>
              <div className="text-gray-400">Services</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-3xl font-bold text-zion-blue">15+</[^>]*>
              <div className="text-gray-400">Categories</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-3xl font-bold text-zion-purple">99.9%</[^>]*>
              <div className="text-gray-400">Uptime</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-3xl font-bold text-zion-green">500%+</[^>]*>
              <div className="text-gray-400">ROI</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          {/* Filters and Search */};
          <div className="mb-8 space-y-4">;
            {/* Search Bar */};
            <div className="relative max-w-md mx-auto">;
              <[^>]*/>
              <input;
                type="text"
                placeholder="Search services..."
                value={searchTerm};
                onChange={(e) => setSearchTerm(e.target.value)};
                className="[^"]*"
              />;
            </[^>]*>

            {/* Category Filters */};
            <div className="flex flex-wrap justify-center gap-3">;
              {categories.map((category) => (;
                <button;
                  key={category.id};
                  onClick={() => setActiveCategory(category.id)};
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${;
                    activeCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`};
                >;
                  <span className="mr-2">{category.icon}</[^>]*>
                  {category.name} ({category.count});
                </[^>]*>
              ))};
            </[^>]*>

            {/* Sort and View Controls */};
            <div className="flex justify-center items-center space-x-4">;
              <select;
                value={sortBy};
                onChange={(e) => setSortBy(e.target.value)};
                className="[^"]*"
              >;
                <option value="rating">Sort by Rating</[^>]*>
                <option value="price">Sort by Price</[^>]*>
                <option value="reviews">Sort by Reviews</[^>]*>
                <option value="name">Sort by Name</[^>]*>
              </[^>]*>

              <div className="flex bg-white/10 rounded-lg p-1">;
                <button;
                  onClick={() => setViewMode('grid')};
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-gray-400'}`}
                >;
                  <[^>]*/>
                </[^>]*>
                <button;
                  onClick={() => setViewMode('list')};
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-gray-400'}`}
                >;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Services Grid */};
          <motion.div
            variants={containerVariants};
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'};
          >;
            {sortedServices.map((service) => (;
              <motion.div
                key={service.id};
                variants={itemVariants};
                className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 cursor-pointer ${;
                  viewMode === 'list' ? 'flex items-center space-x-6' : ''
                }`};
                onClick={() => setSelectedService(service)};
              >;
                {viewMode === 'grid' ? (;
                  //[^;]*
                  <div className="space-y-4">;
                    {/* Header */};
                    <div className="flex items-start justify-between">;
                      <div className="flex-1">;
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</[^>]*>
                        <p className="text-gray-400 text-sm mb-3">{service.description}</[^>]*>
                      </[^>]*>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationBadge(service.innovationLevel)}`}>;
                        {service.innovationLevel};
                      </[^>]*>
                    </[^>]*>

                    {/* Category and Price */};
                    <div className="flex items-center justify-between">;
                      <span className="text-zion-cyan text-sm font-medium">{service.category}</[^>]*>
                      <div className="text-right">;
                        <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</[^>]*>
                        <div className="text-gray-400 text-sm">per month</[^>]*>
                      </[^>]*>
                    </[^>]*>

                    {/* ROI */};
                    <div className="bg-white/5 rounded-lg p-3">;
                      <div className="flex items-center justify-between">;
                        <span className="text-gray-400 text-sm">Expected ROI</[^>]*>
                        <span className={`font-bold ${getROIColor(service.roi)}`}>{service.roi}</[^>]*>
                      </[^>]*>
                    </[^>]*>

                    {/* Features Preview */};
                    <div className="space-y-2">;
                      <h4 className="text-white font-semibold text-sm">Key Features:</[^>]*>
                      <div className="flex flex-wrap gap-2">;
                        {service.features.slice(0, 3).map((feature, index) => (;
                          <span key={index} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded">;
                            {feature};
                          </[^>]*>
                        ))};
                        {service.features.length > 3 && (;&& (; (
                          <span className="px-2 py-1 bg-white/20 text-white text-xs rounded">;
                            +{service.features.length - 3} more;
                          </[^>]*>
                        )};
                      </[^>]*>
                    </[^>]*>

                    {/* Contact Button */};
                    <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-4 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center justify-center space-x-2">;
                      <span>Get Started</[^>]*>
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                ) : (;
                  //[^;]*
                  <div className="flex-1">;
                    <div className="flex items-center justify-between mb-4">;
                      <h3 className="text-xl font-bold text-white">{service.title}</[^>]*>
                      <div className="flex items-center space-x-4">;
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationBadge(service.innovationLevel)}`}>;
                          {service.innovationLevel};
                        </[^>]*>
                        <div className="text-right">;
                          <div className="text-xl font-bold text-white">${service.price.toLocaleString()}</[^>]*>
                          <div className="text-gray-400 text-sm">per month</[^>]*>
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                    <p className="text-gray-400 mb-4">{service.description}</[^>]*>
                    <div className="flex items-center justify-between">;
                      <span className="text-zion-cyan text-sm font-medium">{service.category}</[^>]*>
                      <span className={`font-bold ${getROIColor(service.roi)}`}>ROI: {service.roi}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                )};
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Service Detail Modal */};
      <AnimatePresence>;
        {selectedService && (;&& (; (
          <motion.div
            initial={{ opacity: 0 }};
            animate={{ opacity: 1 }};
            exit={{ opacity: 0 }};
            className="[^"]*"
            onClick={() => setSelectedService(null)};
          >;
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }};
              animate={{ scale: 1, opacity: 1 }};
              exit={{ scale: 0.9, opacity: 0 }};
              className="[^"]*"
              onClick={(e) => e.stopPropagation()};
            >;
              <div className="p-8">;
                {/* Header */};
                <div className="flex items-start justify-between mb-6">;
                  <div className="flex-1">;
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</[^>]*>
                    <p className="text-gray-300 text-lg">{selectedService.description}</[^>]*>
                  </[^>]*>
                  <button;
                    onClick={() => setSelectedService(null)};
                    className="[^"]*"
                  >;
                    ×;
                  </[^>]*>
                </[^>]*>

                {/* Service Details */};
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
                  {/* Left Column */};
                  <div className="space-y-6">;
                    {/* Pricing */};
                    <div className="bg-white/5 rounded-xl p-6">;
                      <h3 className="text-xl font-bold text-white mb-4">Pricing & ROI</[^>]*>
                      <div className="space-y-3">;
                        <div className="flex justify-between">;
                          <span className="text-gray-400">Monthly Price:</[^>]*>
                          <span className="text-2xl font-bold text-white">${selectedService.price.toLocaleString()}</[^>]*>
                        </[^>]*>
                        <div className="flex justify-between">;
                          <span className="text-gray-400">Market Price:</[^>]*>
                          <span className="text-white">{selectedService.marketPrice}</[^>]*>
                        </[^>]*>
                        <div className="flex justify-between">;
                          <span className="text-gray-400">Expected ROI:</[^>]*>
                          <span className={`text-xl font-bold ${getROIColor(selectedService.roi)}`}>{selectedService.roi}</[^>]*>
                        </[^>]*>
                        <div className="flex justify-between">;
                          <span className="text-gray-400">Delivery Time:</[^>]*>
                          <span className="text-white">{selectedService.estimatedDelivery}</[^>]*>
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>

                    {/* Features */};
                    <div className="bg-white/5 rounded-xl p-6">;
                      <h3 className="text-xl font-bold text-white mb-4">Features</[^>]*>
                      <div className="grid grid-cols-1 gap-2">;
                        {selectedService.features.map((feature: string, index: number) => (;
                          <div key={index} className="flex items-center space-x-2">;
                            <[^>]*/>
                            <span className="text-gray-300">{feature}</[^>]*>
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>

                  {/* Right Column */};
                  <div className="space-y-6">;
                    {/* Benefits */};
                    <div className="bg-white/5 rounded-xl p-6">;
                      <h3 className="text-xl font-bold text-white mb-4">Benefits</[^>]*>
                      <div className="space-y-2">;
                        {selectedService.benefits.map((benefit: string, index: number) => (;
                          <div key={index} className="flex items-center space-x-2">;
                            <[^>]*/>
                            <span className="text-gray-300">{benefit}</[^>]*>
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>

                    {/* Use Cases */};
                    <div className="bg-white/5 rounded-xl p-6">;
                      <h3 className="text-xl font-bold text-white mb-4">Use Cases</[^>]*>
                      <div className="grid grid-cols-1 gap-2">;
                        {selectedService.useCases.map((useCase: string, index: number) => (;
                          <div key={index} className="flex items-center space-x-2">;
                            <[^>]*/>
                            <span className="text-gray-300">{useCase}</[^>]*>
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>

                    {/* Technical Specs */};
                    <div className="bg-white/5 rounded-xl p-6">;
                      <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</[^>]*>
                      <div className="space-y-3">;
                        <div>;
                          <span className="text-gray-400 text-sm">Technology Stack:</[^>]*>
                          <div className="flex flex-wrap gap-2 mt-1">;
                            {selectedService.technicalSpecs?.technology.map((tech: string, index: number) => (;
                              <span key={index} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded">;
                                {tech};
                              </[^>]*>
                            ))};
                          </[^>]*>
                        </[^>]*>
                        <div>;
                          <span className="text-gray-400 text-sm">Uptime:</[^>]*>
                          <span className="text-white ml-2">{selectedService.technicalSpecs?.uptime}</[^>]*>
                        </[^>]*>
                        <div>;
                          <span className="text-gray-400 text-sm">API Endpoints:</[^>]*>
                          <span className="text-white ml-2">{selectedService.technicalSpecs?.apiEndpoints}</[^>]*>
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Contact Information */};
                <div className="mt-8 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-xl p-6">;
                  <h3 className="text-xl font-bold text-white mb-4">Get Started Today</[^>]*>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">;
                    <div className="flex items-center space-x-3">;
                      <[^>]*/>
                      <div>;
                        <p className="text-gray-400 text-sm">Phone</[^>]*>
                        <p className="text-white font-semibold">{selectedService.contactInfo.phone}</[^>]*>
                      </[^>]*>
                    </[^>]*>
                    <div className="flex items-center space-x-3">;
                      <[^>]*/>
                      <div>;
                        <p className="text-gray-400 text-sm">Email</[^>]*>
                        <p className="text-white font-semibold">{selectedService.contactInfo.email}</[^>]*>
                      </[^>]*>
                    </[^>]*>
                    <div className="flex items-center space-x-3">;
                      <[^>]*/>
                      <div>;
                        <p className="text-gray-400 text-sm">Website</[^>]*>
                        <a href={selectedService.contactInfo.website} className="text-white font-semibold hover:text-zion-cyan">;
                          {selectedService.contactInfo.website.replace('https://[^;]*
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <div className="flex flex-col sm: flex-row gap-4">;
                    <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center justify-center space-x-2">;
                      <[^>]*/>
                      <span>Call Now</[^>]*>
                    </[^>]*>
                    <button className="flex-1 bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">;
                      <[^>]*/>
                      <span>Send Email</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>
    </[^>]*>
  );
},;

//[^;]*
const Grid = ({ className }: { className?: string }) => (;
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">;
    <[^>]*/>
  </[^>]*>
),;

const List = ({ className }: { className?: string }) => (;
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">;
    <[^>]*/>
  </[^>]*>
),;

export default EnhancedServicesShowcase2025;