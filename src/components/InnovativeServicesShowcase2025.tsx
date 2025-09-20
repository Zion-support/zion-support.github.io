import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ;
  Brain,;
  Shield, ;
  Cloud, ;
  Rocket, ;
  BarChart3, ;
  Briefcase,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  Search,;
  Filter,;
  Grid,;
  List,;
  Zap,;
  Lock,;
  Database,;
  Users,;
  TrendingUp,;
  Globe,;
  Cpu,;
  Heart,;
  ShoppingCart,;
  BookOpen,;
  MessageCircle,;
  HelpCircle,;
  DollarSign,;
  Gauge,;
  Workflow,;
  Atom,;
  Target,;
  Award,;
  Code,;
  Truck,;
  Building,;
  PenTool,;
  Eye,;
  Server,;
  Smartphone,;
  Network,;
  Clock,;
  X;
} from "lucide-react"
import { INNOVATIVE_SERVICES_2025, INNOVATIVE_SERVICE_CATEGORIES_2025, INNOVATIVE_SERVICE_SUBCATEGORIES_2025, INNOVATIVE_PRICING_TIERS_2025, INNOVATIVE_CONTACT_INFO_2025, INNOVATIVE_SERVICE_GUARANTEES_2025 } from "@/data/innovativeServices2025"
export default function InnovativeServicesShowcase2025() {;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),;
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'aiScore' | 'name'>('name'),;
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'),;
  const [selectedService, setSelectedService] = useState<any>(null),;
  const [showModal, setShowModal] = useState(false),;

  const categories = ['all', ...Object.keys(INNOVATIVE_SERVICE_CATEGORIES_2025)]

  const filteredServices = INNOVATIVE_SERVICES_2025.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;
    return matchesCategory && matchesSearch,;&& matchesSearch,; matchesSearch,
  }),;

  const sortedServices = [...filteredServices].sort((a, b) => {;
    let aValue, bValue,;
    ;
    switch (sortBy) {;
      case 'price':;
        aValue = a.price,;
        bValue = b.price,;
        break,;
      case 'rating':;
        aValue = a.rating,;
        bValue = b.rating,;
        break,;
      case 'aiScore':;
        aValue = a.aiScore,;
        bValue = b.aiScore,;
        break,;
      case 'name':;
        aValue = a.title
        bValue = b.title
        break;
      default: aValue = a.title
        bValue = b.title
    };

    if (sortOrder === 'asc') {;
      return aValue > bValue ? 1 : -1,
    } else {;
      return aValue < bValue ? 1 : -1,
    };
  }),;

  const getCategoryIcon = (category: string) => {;
    if (category === 'all') return <[^>]*/>
    return INNOVATIVE_SERVICE_CATEGORIES_2025[category]?.icon ? ;
      <span className="text-2xl">{INNOVATIVE_SERVICE_CATEGORIES_2025[category].icon}</span> : ;
      <Rocket className="w-6 h-6" />,;
  },;

  const getCategoryColor = (category: string) => {;
    if (category === 'all') return 'from-cyan-500 to-blue-500'
    return INNOVATIVE_SERVICE_CATEGORIES_2025[category]?.color || 'from-gray-500 to-slate-500'
  },;

  const openServiceModal = (service: any) => {;
    setSelectedService(service)
    setShowModal(true)
  },;

  const closeModal = () => {;
    setShowModal(false),;
    setSelectedService(null),;
  },;

  return (
    <div className="min-h-screen futuristic-bg">;
      {/* Matrix Rain Background Effect */};
      <div className="matrix-rain"></[^>]*>
      ;
      {/* Hero Section */};
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 50 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="futuristic-heading text-5xl md:text-7xl mb-8">;
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">;
                Innovative Services;
              </[^>]*>
              <[^>]*/>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">;
                2025;
              </[^>]*>
            </[^>]*>
            <p className="futuristic-subheading text-xl md:text-2xl mb-12 max-w-4xl mx-auto">;
              Revolutionary AI-powered, quantum-secure, and autonomous business solutions that transform industries and drive unprecedented growth.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })};
              >;
                <[^>]*/>
                Explore Services;
              </[^>]*>
              <motion.a
                href={`tel:${INNOVATIVE_CONTACT_INFO_2025.phone}`};
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                <[^>]*/>
                Call Now;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information Banner */};
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-cyan-400/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">;
            <div className="flex items-center justify-center space-x-3">;
              <[^>]*/>
              <div>;
                <p className="text-sm text-gray-300">Phone</[^>]*>
                <p className="text-cyan-400 font-semibold">{INNOVATIVE_CONTACT_INFO_2025.phone}</[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="flex items-center justify-center space-x-3">;
              <[^>]*/>
              <div>;
                <p className="text-sm text-gray-300">Email</[^>]*>
                <p className="text-cyan-400 font-semibold">{INNOVATIVE_CONTACT_INFO_2025.email}</[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="flex items-center justify-center space-x-3">;
              <[^>]*/>
              <div>;
                <p className="text-sm text-gray-300">Address</[^>]*>
                <p className="text-cyan-400 font-semibold">{INNOVATIVE_CONTACT_INFO_2025.address}</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Section */};
      <div id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        {/* Search and Filter Controls */};
        <div className="mb-8">;
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">;
            {/* Search Bar */};
            <div className="relative flex-1 max-w-md">;
              <[^>]*/>
              <input;
                type="text"
                placeholder="Search services..."
                value={searchTerm};
                onChange={(e) => setSearchTerm(e.target.value)};
                className="[^"]*"
              />;
            </[^>]*>

            {/* Category Filter */};
            <div className="flex gap-2">;
              {categories.map((category) => (;
                <motion.button
                  key={category};
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  onClick={() => setSelectedCategory(category)};
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${;
                    selectedCategory === category;
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`};
                >;
                  <div className="flex items-center gap-2">;
                    {getCategoryIcon(category)};
                    <span className="capitalize">{category === 'all' ? 'All' : category}</[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>

            {/* View Mode and Sort Controls */};
            <div className="flex gap-2">;
              <div className="flex bg-gray-800/50 rounded-lg p-1">;
                <button;
                  onClick={() => setViewMode('grid')};
                  className={`p-2 rounded-md transition-all duration-300 ${;
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`};
                >;
                  <[^>]*/>
                </[^>]*>
                                  <button;
                    onClick={() => setViewMode('list')};
                    className={`p-2 rounded-md transition-all duration-300 ${;
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`};
                  >;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>

              <select;
                value={`${sortBy}-${sortOrder}`};
                onChange={(e) => {;
                  const [newSortBy, newSortOrder] = e.target.value.split('-'),;
                  setSortBy(newSortBy as any),;
                  setSortOrder(newSortOrder as any),;
                }};
                className="[^"]*"
              >;
                <option value="name-desc">Name (A-Z)</[^>]*>
                <option value="name-asc">Name (Z-A)</[^>]*>
                <option value="price-asc">Price (Low-High)</[^>]*>
                <option value="price-desc">Price (High-Low)</[^>]*>
                <option value="rating-desc">Rating (High-Low)</[^>]*>
                <option value="aiScore-desc">AI Score (High-Low)</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Services Grid/List */};
        <div className={viewMode === 'grid' ? 'futuristic-grid' : 'space-y-4'}>
          <AnimatePresence>;
            {sortedServices.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 50 }};
                animate={{ opacity: 1, y: 0 }};
                exit={{ opacity: 0, y: -50 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className={viewMode === 'grid' ? 'futuristic-card p-6' : 'futuristic-card p-6'}
              >;
                {viewMode === 'grid' ? (;
                  //[^;]*
                  <div className="h-full flex flex-col">;
                    <div className="flex items-start justify-between mb-4">;
                      <div className="flex items-center gap-3">;
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>;
                          {getCategoryIcon(service.category)};
                        </[^>]*>
                        <div>;
                          <span className="text-sm text-gray-400 capitalize">{service.category}</[^>]*>
                          <p className="text-xs text-gray-500 capitalize">{service.subcategory}</[^>]*>
                        </[^>]*>
                      </[^>]*>
                      <div className="flex items-center gap-2">;
                        <[^>]*/>
                        <span className="text-sm text-gray-300">{service.rating}</[^>]*>
                        <span className="text-xs text-gray-500">({service.reviewCount})</[^>]*>
                      </[^>]*>
                    </[^>]*>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{service.title}</[^>]*>
                    <p className="text-gray-300 mb-4 flex-grow line-clamp-3">{service.description}</[^>]*>

                    <div className="space-y-3 mb-4">;
                      <div className="flex items-center justify-between">;
                        <span className="text-sm text-gray-400">AI Score:</[^>]*>
                        <div className="flex items-center gap-2">;
                          <div className="w-16 bg-gray-700 rounded-full h-2">;
                            <div ;
                              className="[^"]*"
                              style={{ width: `${service.aiScore}%` }};
                            ></[^>]*>
                          </[^>]*>
                          <span className="text-sm text-cyan-400 font-semibold">{service.aiScore}%</[^>]*>
                        </[^>]*>
                      </[^>]*>
                      ;
                      <div className="flex items-center justify-between">;
                        <span className="text-sm text-gray-400">Market Price:</[^>]*>
                        <span className="text-sm text-green-400">{service.marketPrice}</[^>]*>
                      </[^>]*>
                      ;
                      <div className="flex items-center justify-between">;
                        <span className="text-sm text-gray-400">ROI:</[^>]*>
                        <span className="text-sm text-yellow-400">{service.roi}</[^>]*>
                      </[^>]*>
                    </[^>]*>

                    <div className="flex items-center justify-between mt-auto">;
                      <div className="text-2xl font-bold text-cyan-400">;
                        {service.currency}{service.price.toLocaleString()};
                      </[^>]*>
                      <motion.button
                        whileHover={{ scale: 1.05 }};
                        whileTap={{ scale: 0.95 }};
                        onClick={() => openServiceModal(service)};
                        className="[^"]*"
                      >;
                        Learn More;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                ) : (;
                  //[^;]*
                  <div className="flex items-center gap-6">;
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>;
                      {getCategoryIcon(service.category)};
                    </[^>]*>
                    ;
                    <div className="flex-1">;
                      <div className="flex items-center gap-4 mb-2">;
                        <h3 className="text-xl font-bold text-white">{service.title}</[^>]*>
                        <span className="text-sm text-gray-400 capitalize">{service.category}</[^>]*>
                        <div className="flex items-center gap-1">;
                          <[^>]*/>
                          <span className="text-sm text-gray-300">{service.rating}</[^>]*>
                        </[^>]*>
                      </[^>]*>
                      <p className="text-gray-300 mb-3">{service.description}</[^>]*>
                      <div className="flex items-center gap-6 text-sm text-gray-400">;
                        <span>AI Score: <span className="text-cyan-400 font-semibold">{service.aiScore}%</span></[^>]*>
                        <span>Market Price: <span className="text-green-400">{service.marketPrice}</span></[^>]*>
                        <span>ROI: <span className="text-yellow-400">{service.roi}</span></[^>]*>
                      </[^>]*>
                    </[^>]*>
                    ;
                    <div className="text-right">;
                      <div className="text-2xl font-bold text-cyan-400 mb-3">;
                        {service.currency}{service.price.toLocaleString()};
                      </[^>]*>
                      <motion.button
                        whileHover={{ scale: 1.05 }};
                        whileTap={{ scale: 0.95 }};
                        onClick={() => openServiceModal(service)};
                        className="[^"]*"
                      >;
                        Learn More;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                )};
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        {/* No Results Message */};
        {sortedServices.length === 0 && (;&& (; (
          <div className="text-center py-16">;
            <div className="text-6xl mb-4">🔍</[^>]*>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</[^>]*>
            <p className="text-gray-400">Try adjusting your search criteria or category filter</[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* Service Details Modal */};
      <AnimatePresence>;
        {showModal && selectedService && (;&& selectedService && (; selectedService && (
          <motion.div
            initial={{ opacity: 0 }};
            animate={{ opacity: 1 }};
            exit={{ opacity: 0 }};
            className="[^"]*"
            onClick={closeModal};
          >;
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }};
              animate={{ scale: 1, opacity: 1 }};
              exit={{ scale: 0.9, opacity: 0 }};
              className="[^"]*"
              onClick={(e) => e.stopPropagation()};
            >;
              <div className="p-6">;
                <div className="flex items-start justify-between mb-6">;
                  <div className="flex items-center gap-4">;
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${getCategoryColor(selectedService.category)}`}>;
                      {getCategoryIcon(selectedService.category)};
                    </[^>]*>
                    <div>;
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</[^>]*>
                      <div className="flex items-center gap-4 text-sm text-gray-400">;
                        <span className="capitalize">{selectedService.category}</[^>]*>
                        <span>•</[^>]*>
                        <span className="capitalize">{selectedService.subcategory}</[^>]*>
                        <span>•</[^>]*>
                        <div className="flex items-center gap-1">;
                          <[^>]*/>
                          <span>{selectedService.rating}</[^>]*>
                          <span>({selectedService.reviewCount} reviews)</[^>]*>
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <button;
                    onClick={closeModal};
                    className="[^"]*"
                  >;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
                  <div>;
                    <h3 className="text-xl font-bold text-white mb-4">Service Overview</[^>]*>
                    <p className="text-gray-300 mb-6">{selectedService.description}</[^>]*>
                    ;
                    <div className="space-y-4 mb-6">;
                      <div className="flex items-center justify-between">;
                        <span className="text-gray-400">AI Score:</[^>]*>
                        <div className="flex items-center gap-2">;
                          <div className="w-24 bg-gray-700 rounded-full h-3">;
                            <div ;
                              className="[^"]*"
                              style={{ width: `${selectedService.aiScore}%` }};
                            ></[^>]*>
                          </[^>]*>
                          <span className="text-cyan-400 font-semibold">{selectedService.aiScore}%</[^>]*>
                        </[^>]*>
                      </[^>]*>
                      ;
                      <div className="flex items-center justify-between">;
                        <span className="text-gray-400">Market Price:</[^>]*>
                        <span className="text-green-400 font-semibold">{selectedService.marketPrice}</[^>]*>
                      </[^>]*>
                      ;
                      <div className="flex items-center justify-between">;
                        <span className="text-gray-400">ROI:</[^>]*>
                        <span className="text-yellow-400 font-semibold">{selectedService.roi}</[^>]*>
                      </[^>]*>
                      ;
                      <div className="flex items-center justify-between">;
                        <span className="text-gray-400">Setup Time:</[^>]*>
                        <span className="text-white">{selectedService.setupTime}</[^>]*>
                      </[^>]*>
                    </[^>]*>

                    <div className="mb-6">;
                      <h4 className="text-lg font-semibold text-white mb-3">Tags</[^>]*>
                      <div className="flex flex-wrap gap-2">;
                        {selectedService.tags.map((tag: string) => (;
                          <span;
                            key={tag};
                            className="[^"]*"
                          >;
                            {tag};
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <div>;
                    <div className="mb-6">;
                      <h3 className="text-2xl font-bold text-cyan-400 mb-2">;
                        {selectedService.currency}{selectedService.price.toLocaleString()};
                      </[^>]*>
                      <p className="text-gray-400 mb-4">One-time setup fee</[^>]*>
                      ;
                      <div className="space-y-3">;
                        <motion.button
                          whileHover={{ scale: 1.02 }};
                          whileTap={{ scale: 0.98 }};
                          className="[^"]*"
                          onClick={() => window.open(`mailto:${INNOVATIVE_CONTACT_INFO_2025.email}?subject=Inquiry about ${selectedService.title}`, '_blank')};
                        >;
                          Get Started;
                        </[^>]*>
                        ;
                        <motion.button
                          whileHover={{ scale: 1.02 }};
                          whileTap={{ scale: 0.98 }};
                          className="[^"]*"
                          onClick={() => window.open(`tel:${INNOVATIVE_CONTACT_INFO_2025.phone}`, '_blank')};
                        >;
                          Call for Quote;
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>

                    <div className="mb-6">;
                      <h4 className="text-lg font-semibold text-white mb-3">Integrations</[^>]*>
                      <div className="space-y-2">;
                        {selectedService.integrations.map((integration: string) => (;
                          <div key={integration} className="flex items-center gap-2 text-gray-300">;
                            <[^>]*/>
                            <span className="text-sm">{integration}</[^>]*>
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>

                    <div>;
                      <h4 className="text-lg font-semibold text-white mb-3">Competitors</[^>]*>
                      <div className="space-y-2">;
                        {selectedService.competitors.map((competitor: string) => (;
                          <div key={competitor} className="flex items-center gap-2 text-gray-300">;
                            <[^>]*/>
                            <span className="text-sm">{competitor}</[^>]*>
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* Service Guarantees Section */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="text-center mb-12">;
          <h2 className="futuristic-heading text-4xl mb-4">Our Guarantees</[^>]*>
          <p className="futuristic-subheading text-xl">We stand behind every service with comprehensive guarantees</[^>]*>
        </[^>]*>
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {Object.entries(INNOVATIVE_SERVICE_GUARANTEES_2025).map(([key, value]) => (;
            <motion.div
              key={key};
              whileHover={{ scale: 1.05 }};
              className="[^"]*"
            >;
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-bold text-white mb-3">{key}</[^>]*>
              <p className="text-gray-300">{value}</[^>]*>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="futuristic-card p-8 text-center">;
          <h2 className="futuristic-heading text-4xl mb-6">Ready to Transform Your Business?</[^>]*>
          <p className="futuristic-subheading text-xl mb-8 max-w-3xl mx-auto">;
            Contact us today to discuss how our innovative services can drive your business forward and deliver exceptional ROI.;
          </[^>]*>
          ;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <motion.a
              href={`tel:${INNOVATIVE_CONTACT_INFO_2025.phone}`};
              whileHover={{ scale: 1.05 }};
              whileTap={{ scale: 0.95 }};
              className="[^"]*"
            >;
              <[^>]*/>
              Call {INNOVATIVE_CONTACT_INFO_2025.phone};
            </[^>]*>
            ;
            <motion.a
              href={`mailto:${INNOVATIVE_CONTACT_INFO_2025.email}`};
              whileHover={{ scale: 1.05 }};
              whileTap={{ scale: 0.95 }};
              className="[^"]*"
            >;
              <[^>]*/>
              Email Us;
            </[^>]*>
          </[^>]*>
          ;
          <div className="mt-8 text-center">;
            <p className="text-gray-400 mb-2">{INNOVATIVE_CONTACT_INFO_2025.hours}</[^>]*>
            <p className="text-cyan-400 font-semibold">{INNOVATIVE_CONTACT_INFO_2025.emergency}</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};