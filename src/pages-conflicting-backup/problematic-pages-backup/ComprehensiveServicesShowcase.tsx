  };

  const filteredServices = selectedCategory === 'all' 
    ? COMPREHENSIVE_SERVICES 
    : COMPREHENSIVE_SERVICES.filter(service => service.category === selectedCategory);

  return (
              Innovative Services

            </span>
            <br />
            <span className="text-white">Comprehensive Tech Solutions</span>
          </h1>
              >
                {category.icon} {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

                        {feature}
                      </li>
                    ))}
                  </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  service: any;
  getCategoryIcon: (category: string) => React.ReactNode;
}

function ServiceCard({ service, getCategoryIcon }: ServiceCardProps) {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {service.featured && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute bottom-2 left-2 flex items-center gap-2">
          <div className="flex items-center bg-black/70 rounded-full px-2 py-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-white text-xs ml-1">{service.rating}</span>
          </div>
          <div className="bg-black/70 rounded-full px-2 py-1">
            <span className="text-white text-xs">({service.reviewCount})</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {getCategoryIcon(service.category)}
            <Badge variant="secondary" className="text-xs">
              {service.category}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-400">
              {service.currency}{service.price?.toLocaleString()}
            </div>
            {service.subcategory && (
              <div className="text-xs text-slate-400">{service.subcategory}</div>
            )}
          </div>
        </div>
        <CardTitle className="text-white text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-slate-300 text-sm leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0, 3).map((tag: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {service.availability}
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-3 h-3" />
            {service.location}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src={service.author.avatarUrl || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100'} 
                alt={service.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-white text-sm font-medium">{service.author.name}</div>
              <div className="text-slate-400 text-xs">{service.author.email}</div>
            </div>
          </div>
          
          <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
            <ArrowRight className="w-3 h-3 mr-1" />
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
                </div>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h5>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={service.href}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Sparkles,
  Eye,
  Heart,
  Share2,
  Download,
  Play,
  BookOpen,
  Code,
  Database,
  Cloud,
  Lock,
  Rocket,
  Lightbulb,
  Cpu,
  Network,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES, INNOVATIVE_SERVICE_CATEGORIES, InnovativeMicroSaasService } from '../data/innovativeMicroSaasServices';

interface ServiceCardProps {
  service: InnovativeMicroSaasService;
  index: number;
  viewMode: 'grid' | 'list';
  onServiceClick: (service: InnovativeMicroSaasService) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, viewMode, onServiceClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getCategoryIcon = useCallback((category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Business Intelligence': <Brain className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'DevOps & Cloud': <Cloud className="w-5 h-5" />,
      'Blockchain & Web3': <Globe className="w-5 h-5" />,
      'IoT & Edge Computing': <Target className="w-5 h-5" />,
      'Digital Marketing': <TrendingUp className="w-5 h-5" />,
      'Virtual Reality': <Sparkles className="w-5 h-5" />,
      'Infrastructure': <Server className="w-5 h-5" />,
      'Quantum Computing': <Cpu className="w-5 h-5" />,
      'Machine Learning': <Network className="w-5 h-5" />,
      'Mobile Development': <Smartphone className="w-5 h-5" />,
      'Web Development': <Monitor className="w-5 h-5" />
    };
    return iconMap[category] || <Star className="w-5 h-5" />;
  }, []);

  const getCategoryColor = useCallback((category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Business Intelligence': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'DevOps & Cloud': 'from-blue-500 to-cyan-500',
      'Blockchain & Web3': 'from-green-500 to-emerald-500',
      'IoT & Edge Computing': 'from-yellow-500 to-orange-500',
      'Digital Marketing': 'from-indigo-500 to-purple-500',
      'Virtual Reality': 'from-pink-500 to-rose-500',
      'Infrastructure': 'from-gray-500 to-slate-500',
      'Quantum Computing': 'from-violet-500 to-purple-500',
      'Machine Learning': 'from-blue-500 to-indigo-500',
      'Mobile Development': 'from-green-500 to-blue-500',
      'Web Development': 'from-orange-500 to-red-500'
    };
    return colorMap[category] || 'from-blue-500 to-purple-500';
  }, []);

  const handleLike = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  }, [isLiked]);

  const handleShare = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: service.title,
        text: service.description,
        url: service.websiteUrl
      });
    } else {
      navigator.clipboard.writeText(service.websiteUrl);
    }
  }, [service]);

  if (viewMode === 'grid') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -5, scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => onServiceClick(service)}
        className="group cursor-pointer bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform rotate-12 scale-150"></div>
        </div>

        {/* Service Header */}
        <div className="relative z-10 flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} shadow-lg`}>
              {getCategoryIcon(service.category)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400">{service.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {service.featured && (
              <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                Featured
              </span>
            )}
            <button
              onClick={handleLike}
              className={`p-2 rounded-lg transition-colors ${
                isLiked ? 'text-red-500 bg-red-500/20' : 'text-gray-400 hover:text-red-500 hover:bg-red-500/20'
              }`}
              aria-label={isLiked ? 'Unlike service' : 'Like service'}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="relative z-10 text-gray-300 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Stats Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>{service.rating || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Brain className="w-4 h-4 text-blue-400" />
            <span>{service.aiScore || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <DollarSign className="w-4 h-4 text-green-400" />
            <span>{service.currency}{service.price}/mo</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>{service.estimatedDelivery}</span>
          </div>
        </div>

        {/* Features Preview */}
        <div className="relative z-10 mb-4">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                <span className="truncate">{feature}</span>

              </div>
            ))}
          </div>
        </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="lg:w-48 flex flex-col justify-between">
          <div className="space-y-3 mb-4">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Market Price</div>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">ROI</div>
              <div className="text-lg font-bold text-green-400">{service.roi}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Time to Value</div>
              <div className="text-lg font-bold text-blue-400">{service.timeToValue}</div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              aria-label={`Get started with ${service.title}`}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleShare}
              className="p-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors"
              aria-label="Share service"
            >
              <Share2 className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'aiScore' | 'name'>('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<InnovativeMicroSaasService | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Memoized filtered services for better performance
  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_MICRO_SAAS_SERVICES;

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        service.category.toLowerCase().includes(searchLower)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'price':
          return a.price - b.price;
        case 'aiScore':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleServiceClick = useCallback((service: InnovativeMicroSaasService) => {
    setSelectedService(service);
    // You can add navigation logic here
    console.log('Service clicked:', service);
  }, []);

  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortBy('rating');
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Comprehensive Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete portfolio of cutting-edge technology solutions designed to transform your business 
            with AI, quantum computing, cybersecurity, and more.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              {INNOVATIVE_MICRO_SAAS_SERVICES.length} Services Available
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              Industry Leading Quality
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              Instant Deployment
            </span>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-gray-700/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                aria-label="Search services"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Filter by category"
            >
              <option value="all">All Categories</option>
              {INNOVATIVE_SERVICE_CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Sort services by"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="aiScore">Sort by AI Score</option>
              <option value="name">Sort by Name</option>
            </select>

            {/* View Mode */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
                aria-label="Grid view"
                aria-pressed={viewMode === 'grid'}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
                aria-label="List view"
                aria-pressed={viewMode === 'list'}
              >
                List
              </button>
            </div>
          </div>

          {/* Clear Filters */}
          {(searchTerm || selectedCategory !== 'all') && (
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                {filteredServices.length} of {INNOVATIVE_MICRO_SAAS_SERVICES.length} services
              </div>
              <button
                onClick={clearFilters}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Services Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredServices.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    viewMode={viewMode}
                    onServiceClick={handleServiceClick}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    viewMode={viewMode}
                    onServiceClick={handleServiceClick}
                  />
                ))}
              </div>
            )
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your search criteria or filters.</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/30">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our comprehensive services combine cutting-edge technology with proven business value. 
              Get started today and experience the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg font-medium transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;

