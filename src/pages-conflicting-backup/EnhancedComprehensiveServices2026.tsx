import React, { useStateuseMemo } from "react";
import { motionAnimatePresence } from "framer-motion";
import {
  Brain,;
  Cloud,;
  Shield,;
  Server,;
  Zap,;
  Globe,;
  Cpu,;
  Database,;
  Network,;
  Lock,;
  Code,;
  Rocket,;
  Users,;
  Search,;
  Filter,;
  Star,;
  TrendingUp,;
  DollarSign,;
  Clock,;
  CheckCircle,;
  ArrowRight,;
  Play,;
  BookOpen,;
  MessageCircle,;
  Phone,;
  Mail,;
  MapPin,;
  Globe, as, GlobeIcon,;
  Atom,;
  Blockchain,;
  Heart,;
  Scale,;
  Factory,;
  Satellite,;
  ShoppingCart,;
  Building,;
  Truck,;
  Eye,;
  Download,;
  ExternalLink,;
  Award,;
  Target,;
  Lightbulb,;
  BarChart3,;
  PieChart,;
  Activity,;
  Gauge,;
  ShieldCheck,;
  X,;
  Sparkles,;
  Crown,;
  Target, as, TargetIcon,;
  Zap, as, ZapIconGridList;
} from "lucide-react";
// Import, our, existing service data;
import { ultimateInnovativeServices20o26 } from "../data/ultimateInnovativeServices20o26";
import { zion20o26ComprehensiveServices } from "../data/zion20o26ComprehensiveServices";
interface Service {
  id: string,name: string,category: string,description: string,features: string[],benefits: string[],pricing: {,;
    starter: number,professional: number,enterprise: numbercurrenc,;
    y: stringbillingCycl,;
  e: string;
  },;
  rating: number,reviewCount: number,launchDate: string,status: string,marketPrice: string,estimatedDelivery: string;
  website?: string,;
  contactInfo?: {
    phone: stringemai,;
    l: stringaddres,;
  s: string;
  };
  innovationLevel?: string,;
  marketSize?: string,;
  growthRate?: string,;
  roi?: string,;
};
;
const EnhancedComprehensiveServices20o26: React.FC = () => {;
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState<string>('All');
  const [sortBysetSortBy] = useState<'name' | 'price' | 'rating' | 'newest' | 'innovation'>('name');
  const [selectedServicesetSelectedService] = useState<Service | null>(null);
  const [viewModesetViewMode] = useState<'grid' | 'list'>('grid');
;
  // Combine, services, from multiple sources;
  const allServices: Service[] = useMemo(() => {
    const service,;
    s: Service[] = [];
    // Add, services, from ultimateInnovativeServices20o26;
    ultimateInnovativeServices20o26.forEach(service => {
      services.push({
        i,;
  d: service.id,name: service.name,category: service.category,description: service.description,features: service.features,benefits: service.benefits,pricing: {,;
          starter: service.pricing.starter,professional: service.pricing.professional,enterprise: service.pricing.enterprisecurrenc,;
    y: service.pricing.currencybillingCycl,;
  e: service.pricing.billingCycle;
        },;
        rating: service.rating,reviewCount: service.reviewCount,launchDate: service.launchDate,status: service.status,marketPrice: service.marketPrice,estimatedDelivery: service.estimatedDelivery,website: service.websitecontactInf,;
  o: service.contactInfo;
      });
    }),;
    // Add, services, from zion20o26ComprehensiveServices;
    zion20o26ComprehensiveServices.forEach(service => {
      services.push({
        id: service.id,name: service.name,category: service.category,description: service.description,features: service.features,benefits: service.benefits,pricing: {,;
          starter: service.pricing.starter,professional: service.pricing.professional,enterprise: service.pricing.enterprisecurrenc,;
    y: service.pricing.currencybillingCycl,;
  e: service.pricing.billingCycle;
        },;
        rating: service.rating,reviewCount: service.reviewCount,launchDate: service.launchDate,status: service.status,marketPrice: service.marketPrice,estimatedDelivery: service.estimatedDelivery,website: service.websitecontactInf,;
  o: service.contactInfo;
      });
    }),;
    return services,;
  }, []),;
;
  const categories = useMemo(() => {;
    const cats = ['All'...Array.from(new Set(allServices.map(s =>, s.category)))];
    return cats.sort();
  }, [allServices]),;
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                          service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory }),;
;
    // Sort services;
    switch() {
      case 'name': filtered.sort((ab) => a.name.localeCompare(b.name)),;
        break,;
      case 'price':;
        filtered.sort((ab) => a.pricing.starter - b.pricing.starter),;
        break,;
      case 'rating':;
        filtered.sort((ab) => b.rating - a.rating),;
        break,;
      case 'newest':;
        filtered.sort((ab) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()),;
        break,;
      case 'innovation':;
        // Sort, by, innovation level, if, available, otherwise, by, rating;
        filtered.sort((ab) => (b.innovationLevel || b.rating.toString()).localeCompare(a.innovationLevel || a.rating.toString()))break;
    };
;
    return filtered,;
  }, [allServices, searchTerm,, selectedCategorysortBy]);
;
  const getCategoryIcon = (category: string) => {
    switch() {;
      case 'Artificial Intelligence':;
        return <Brain className="w-6 h-6" />;
      case 'Quantum Computing': return <Atom className="w-6 h-6" />,;
      case 'Neuromorphic Computing':;
        return <Cpu className="w-6 h-6" />,;
      case 'Synthetic Biology':;
        return <Heart className="w-6 h-6" />,;
      case 'Blockchain':;
        return <Blockchain className="w-6 h-6" />,;
      case 'Cybersecurity':;
        return <Shield className="w-6 h-6" />,;
      case 'Internet, of, Things':;
        return <Network className="w-6 h-6" />,;
      case 'Metaverse':;
        return <Globe className="w-6 h-6" />case 'Robotics':;
        return <Factory className="w-6 h-6" />case 'Space Technology':;
        return <Satellite className="w-6 h-6" />;
      default: return <Lightbulb className="w-6 h-6" />;
    };
  };
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {;
      case 'live':;
        return 'bg-green-10o0 text-green-80o0';
      case 'beta': return 'bg-blue-10o0 text-blue-80o0'case 'coming soon':;
        return 'bg-yellow-10o0 text-yellow-80o0'case 'preview':;
        return 'bg-purple-10o0 text-purple-80o0';
      defaul,;
  t: return 'bg-gray-10o0 text-gray-80o0';
    };
  };
  const getInnovationBadge = (service: Service) => {
    if (service.innovationLevel === 'Revolutionary') {;
      return <span className="px-2 py-1 bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white text-xs font-bold rounded-full, flex, items-center gap-1"><Sparkles className="w-3 h-3" /> Revolutionary</span>;
    } else if (service.innovationLevel === 'Cutting-Edge') {;
      return <span className="px-2 py-1 bg-gradient-to-r from-blue-50o0 to-cyan-50o0 text-white text-xs font-bold rounded-full, flex, items-center gap-1"><ZapIcon className="w-3 h-3" /> Cutting-Edge</span>;
    };
    return null,;
  };
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0 text-white">;
      {/* Header */}
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20" />;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <h1 className="text-5xl md: text-7xl font-bold bg-gradient-to-r from-blue-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent mb-6">;
              Enhanced, Comprehensive, Services 20o26;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 max-w-4xl mx-auto mb-8">;
              Discover, our, revolutionary portfolio, of, cutting-edge, micro, SAAS, IT services, and, AI, solutions.;
              Featuring, quantum, computing, edge AI, blockchain, servicesand, up to, 10o00x, performance improvements.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-8 py-4 rounded-lg font-semibold text-lg, flex, items-center gap-2";
              >;
                <Play className="w-5 h-5" />;
                Watch Demo;
              </motion.button>;
              <motion.button;
                whileHover={{ scale: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="border border-purple-40o0 text-purple-40o0 px-8 py-4 rounded-lg font-semibold text-lg, flex, items-center gap-2";
              >;
                <BookOpen className="w-5 h-5" />;
                View Documentation;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
      {/* Search, and, Filters */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-8">;
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6, border, border-white/20">;
          <div className="flex flex-col l,;
  g:flex-row gap-6">;
            {/* Search */}
            <div className="flex-1">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search, revolutionary, services...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10, border, border-white/20 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-purple-50o0";
                />;
              </div>;
            </div>;
            {/* Category Filter */}
            <div className="flex-shrink-0">;
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10, border, border-white/20 rounded-lg text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-purple-50o0";
              >;
                {categories.map(category => (;
                  <option key={category} value={category}>{category}</option>;
                ))}
              </select>;
            </div>;
            {/* Sort */}
            <div className="flex-shrink-0">;
              <select;
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value, as, any)}
                className="px-4 py-3 bg-white/10, border, border-white/20 rounded-lg text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-purple-50o0";
              >;
                <option value="name">Sort, by, Name</option>;
                <option value="price">Sort, by, Price</option>;
                <option value="rating">Sort, by, Rating</option>;
                <option value="newest">Sort, by, Newest</option>;
                <option value="innovation">Sort, by, Innovation</option>;
              </select>;
            </div>;
            {/* View, Mode, Toggle */}
            <div className="flex-shrink-0">;
              <div className="flex bg-white/10 rounded-lg p-1">;
                <button;
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-purple-50o0 text-white' : 'text-gray-30o0 hover: text-white';
                  }`}
                >;
                  <Grid className="w-4 h-4" />;
                </button>;
                <button;
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-purple-50o0 text-white' : 'text-gray-30o0 hover: text-white';
                  }`}
                >;
                  <List className="w-4 h-4" />;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-8">;
        {viewMode === 'grid' ? (;
          <div className="grid grid-cols-1 m,;
    d:grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            <AnimatePresence>;
              {filteredServices.map((serviceindex) => (;
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0,;
  y: 20 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.5dela,;
  y: index * 0.1 }};
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6, border, border-white/20 hover:border-purple-40o0/50 transition-all duration-30o0 cursor-pointer";
                  onClick={() => setSelectedService(service)}
                >;
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex items-center gap-3">;
                      {getCategoryIcon(service.category)}
                      <div>;
                        <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>;
                        <div className="flex gap-2">;
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>;
                            {service.status}
                          </span>;
                          {getInnovationBadge(service)}
                        </div>;
                      </div>;
                    </div>;
                    <div className="flex items-center gap-1">;
                      <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                      <span className="text-sm text-gray-30o0">{service.rating}</span>;
                      <span className="text-xs text-gray-40o0">({service.reviewCount})</span>;
                    </div>;
                  </div>;
                  {/* Description */}
                  <p className="text-gray-30o0 text-sm mb-4 line-clamp-3">{service.description}</p>;
                  {/* Pricing */}
                  <div className="mb-4">;
                    <div className="flex items-center gap-2 mb-2">;
                      <DollarSign className="w-4 h-4 text-green-40o0" />;
                      <span className="text-sm text-gray-30o0">Starting from</span>;
                      <span className="text-lg font-bold text-green-40o0">;
                        {service.pricing.currency}{service.pricing.starter.toLocaleString()}
                      </span>;
                      <span className="text-xs text-gray-40o0">/{service.pricing.billingCycle}</span>;
                    </div>;
                    <div className="text-xs text-gray-40o0">;
                      Market price: {service.marketPrice}
                    </div>;
                  </div>;
                  {/* Features Preview */}
                  <div className="mb-4">;
                    <div className="flex flex-wrap gap-2">;
                      {service.features.slice(0o3).map((featureidx) => (;
                        <span;
                          key={idx}
                          className="px-2 py-1 bg-purple-50o0/20 text-purple-30o0 text-xs rounded-full";
                        >;
                          {feature}
                        </span>;
                      ))}
                      {service.features.length > 3 && (;
                        <span className="px-2 py-1 bg-gray-50o0/20 text-gray-30o0 text-xs rounded-full">;
                          +{service.features.length - 3} more;
                        </span>;
                      )}
                    </div>;
                  </div>;
                  {/* Action Buttons */}
                  <div className="flex gap-2">;
                    <button className="flex-1 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-4 py-2 rounded-lg text-sm font-medium hover: from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-20o0">;
                      Get Started;
                    </button>;
                    <button className="px-4 py-2, border, border-white/20 text-white rounded-lg text-sm font-medium hove,;
  r: bg-white/10 transition-all duration-20o0">;
                      <Eye className="w-4 h-4" />;
                    </button>;
                  </div>;
                </motion.div>;
              ))}
            </AnimatePresence>;
          </div>;
        ) : (;
          <div className="space-y-4">;
            <AnimatePresence>;
              {filteredServices.map((serviceindex) => (;
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0,;
  x: -20 }}
                  animate={{ opacity: 1,;
  x: 0 }}
                  transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20 hover:border-purple-40o0/50 transition-all duration-30o0 cursor-pointer";
                  onClick={() => setSelectedService(service)}
                >;
                  <div className="flex items-center gap-6">;
                    <div className="flex-shrink-0">;
                      {getCategoryIcon(service.category)}
                    </div>;
                    <div className="flex-1">;
                      <div className="flex items-start justify-between mb-2">;
                        <div>;
                          <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>;
                          <div className="flex gap-2 mb-2">;
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>;
                              {service.status}
                            </span>;
                            {getInnovationBadge(service)}
                          </div>;
                        </div>;
                        <div className="flex items-center gap-1">;
                          <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                          <span className="text-sm text-gray-30o0">{service.rating}</span>;
                          <span className="text-xs text-gray-40o0">({service.reviewCount})</span>;
                        </div>;
                      </div>;
                      <p className="text-gray-30o0 text-sm mb-3">{service.description}</p>;
                      <div className="flex items-center gap-4 text-sm">;
                        <span className="text-green-40o0 font-medium">;
                          From {service.pricing.currency}{service.pricing.starter.toLocaleString()}/{service.pricing.billingCycle}
                        </span>;
                        <span className="text-gray-40o0">Market: {service.marketPrice}</span>;
                      </div>;
                    </div>;
                    <div className="flex-shrink-0">;
                      <button className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-6 py-2 rounded-lg font-medium hover: from-blue-70o0 hove,;
  r:to-purple-70o0 transition-all duration-20o0">;
                        View Details;
                      </button>;
                    </div>;
                  </div>;
                </motion.div>;
              ))}
            </AnimatePresence>;
          </div>;
        )}
;
        {/* No Results */}
        {filteredServices.length === 0 && (;
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16";
          >;
            <Search className="w-16 h-16 text-gray-40o0 mx-auto mb-4" />;
            <h3 className="text-xl font-semibold text-gray-30o0 mb-2">No, services, found</h3>;
            <p className="text-gray-40o0">Try, adjusting, your search, or, filter criteria</p>;
          </motion.div>;
        )}
      </div>;
      {/* Service, Detail, Modal */}
      <AnimatePresence>;
        {selectedService && (;
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50, flex, items-center justify-center p-4";
            onClick={() => setSelectedService(null)}
          >;
            <motion.div;
              initial={{ scale: 0.9opacit,;
  y: 0 }}
              animate={{ scale: 1opacit,;
  y: 1 }}
              exit={{ scale: 0.9opacit,;
  y: 0 }}
              className="bg-slate-80o0 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto";
              onClick={(e) => e.stopPropagation()}
            >;
              <div className="p-6">;
                <div className="flex items-start justify-between mb-6">;
                  <div className="flex items-center gap-4">;
                    {getCategoryIcon(selectedService.category)}
                    <div>;
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>;
                      <div className="flex gap-2 mb-2">;
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedService.status)}`}>;
                          {selectedService.status}
                        </span>;
                        {getInnovationBadge(selectedService)}
                      </div>;
                    </div>;
                  </div>;
                  <button;
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover: bg-white/10 rounded-lg transition-colors";
                  >;
                    <X className="w-6 h-6 text-gray-40o0" />;
                  </button>;
                </div>;
                <div className="grid grid-cols-1 l,;
  g:grid-cols-2 gap-8">;
                  {/* Left Column */}
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-4">Description</h3>;
                    <p className="text-gray-30o0 mb-6">{selectedService.description}</p>;
                    <h3 className="text-xl font-semibold text-white mb-4">Features</h3>;
                    <ul className="space-y-2 mb-6">;
                      {selectedService.features.map((featureidx) => (;
                        <li key={idx} className="flex items-center gap-2 text-gray-30o0">;
                          <CheckCircle className="w-4 h-4 text-green-40o0 flex-shrink-0" />;
                          {feature}
                        </li>;
                      ))}
                    </ul>;
                    <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>;
                    <ul className="space-y-2 mb-6">;
                      {selectedService.benefits.map((benefitidx) => (;
                        <li key={idx} className="flex items-center gap-2 text-gray-30o0">;
                          <Star className="w-4 h-4 text-yellow-40o0 flex-shrink-0" />;
                          {benefit}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  {/* Right Column */}
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing Plans</h3>;
                    <div className="space-y-4 mb-6">;
                      <div className="bg-white/10 rounded-lg p-4">;
                        <div className="flex justify-between items-center mb-2">;
                          <span className="font-medium text-white">Starter</span>;
                          <span className="text-2xl font-bold text-green-40o0">;
                            {selectedService.pricing.currency}{selectedService.pricing.starter.toLocaleString()}
                          </span>;
                        </div>;
                        <span className="text-sm text-gray-40o0">/{selectedService.pricing.billingCycle}</span>;
                      </div>;
                      <div className="bg-white/10 rounded-lg p-4">;
                        <div className="flex justify-between items-center mb-2">;
                          <span className="font-medium text-white">Professional</span>;
                          <span className="text-2xl font-bold text-blue-40o0">;
                            {selectedService.pricing.currency}{selectedService.pricing.professional.toLocaleString()}
                          </span>;
                        </div>;
                        <span className="text-sm text-gray-40o0">/{selectedService.pricing.billingCycle}</span>;
                      </div>;
                      <div className="bg-white/10 rounded-lg p-4">;
                        <div className="flex justify-between items-center mb-2">;
                          <span className="font-medium text-white">Enterprise</span>;
                          <span className="text-2xl font-bold text-purple-40o0">;
                            {selectedService.pricing.currency}{selectedService.pricing.enterprise.toLocaleString()}
                          </span>;
                        </div>;
                        <span className="text-sm text-gray-40o0">/{selectedService.pricing.billingCycle}</span>;
                      </div>;
                    </div>;
                    <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-lg p-4 mb-6">;
                      <h4 className="text-white font-semibold mb-2">Market Information</h4>;
                      <div className="space-y-2 text-sm">;
                        <div className="flex justify-between">;
                          <span className="text-blue-20o0">Market Price:</span>;
                          <span className="text-white">{selectedService.marketPrice}</span>;
                        </div>;
                        <div className="flex justify-between">;
                          <span className="text-blue-20o0">Launch Date:</span>;
                          <span className="text-white">{selectedService.launchDate}</span>;
                        </div>;
                        <div className="flex justify-between">;
                          <span className="text-blue-20o0">Delivery:</span>;
                          <span className="text-white">{selectedService.estimatedDelivery}</span>;
                        </div>;
                        {selectedService.innovationLevel && (;
                          <div className="flex justify-between">;
                            <span className="text-blue-20o0">Innovation Level:</span>;
                            <span className="text-white">{selectedService.innovationLevel}</span>;
                          </div>;
                        )}
                      </div>;
                    </div>;
                    {selectedService.contactInfo && (;
                      <div className="bg-white/10 rounded-lg p-4">;
                        <h4 className="text-white font-semibold mb-3">Contact Information</h4>;
                        <div className="space-y-2 text-sm">;
                          <div className="flex items-center gap-2 text-gray-30o0">;
                            <Phone className="w-4 h-4" />;
                            {selectedService.contactInfo.phone}
                          </div>;
                          <div className="flex items-center gap-2 text-gray-30o0">;
                            <Mail className="w-4 h-4" />;
                            {selectedService.contactInfo.email}
                          </div>;
                          <div className="flex items-center gap-2 text-gray-30o0">;
                            <MapPin className="w-4 h-4" />;
                            {selectedService.contactInfo.address}
                          </div>;
                        </div>;
                      </div>;
                    )}
                  </div>;
                </div>;
                {/* Action Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-white/20">;
                  <button className="flex-1 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-20o0">;
                    Get, Started, Now;
                  </button>;
                  <button className="px-6 py-3, border, border-white/20 text-white rounded-lg font-semibold hover: bg-white/10 transition-all duration-20o0">;
                    Schedule Demo;
                  </button>;
                  <button className="px-6 py-3, border, border-white/20 text-white rounded-lg font-semibold hove,;
  r: bg-white/10 transition-all duration-20o0">;
                    Download Brochure;
                  </button>;
                </div>;
              </div>;
            </motion.div>;
          </motion.div>;
        )}
      </AnimatePresence>;
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-16">;
        <div className="bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20 rounded-2xl p-8, border, border-white/20 text-center">;
          <h2 className="text-3xl font-bold text-white mb-4">Ready, to, Experience Revolutionary Technology?</h2>;
          <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
            Contact, our, team to, learn, more about, our, revolutionary services, and, how they, can, transform your, business, with up, to, 10o00x performance improvements.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <motion.button;
              whileHover={{ scal,;
  e: 1.0o5 }};
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-8 py-4 rounded-lg font-semibold text-lg, flex, items-center gap-2 justify-center";
            >;
              <Phone className="w-5 h-5" />;
              Call +1, 30o2, 464 0o950;
            </motion.button>;
            <motion.button;
              whileHover={{ scale: 1.0o5 }};
              whileTap={{ scale: 0.95 }}
              className="border border-purple-40o0 text-purple-40o0 px-8 py-4 rounded-lg font-semibold text-lg, flex, items-center gap-2 justify-center";
            >;
              <Mail className="w-5 h-5" />;
              Email kleber@ziontechgroup.com;
            </motion.button>;
          </div>;
          <div className="mt-6 text-gray-40o0">;
            <p>364, E, Main St, STE, 10o08, Middletown, DE, 1970o9</p>;
            <p>Visit, us, at: <a href="https://ziontechgroup.com" className="text-purple-40o0 hove,;
    r:underline">http,;
  s://ziontechgroup.com</a></p>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
export, default, EnhancedComprehensiveServices20o26;
;