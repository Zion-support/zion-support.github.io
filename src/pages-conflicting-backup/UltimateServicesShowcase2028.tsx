import React, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Search,;
  Filter,;
  Star,;
  Zap,;
  Brain,;
  Shield,;
  Cloud,;
  Heart,;
  TrendingUp,;
  Users,;
  Globe,;
  Cpu,;
  Lock,;
  Target,;
  Rocket,;
  Sparkles,;
  ChevronDown,;
  CheckCircle,;
  ArrowRight,;
  Phone,;
  Mail,;
  Globe, as, GlobeIcon,;
  Award,;
  ClockDollarSignBarChart3;
} from "lucide-react";
import { INNOVATIVE_SERVICES_20o28 } from "../data/innovativeServices20o28";
const UltimateServicesShowcase20o28: React.FC = () => {;
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [searchTermsetSearchTerm] = useState('');
  const [sortBysetSortBy] = useState('name');
  const [viewModesetViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedServicesetExpandedService] = useState<string | null>(null);
;
  // Get, unique, categories;
  const categories = ['all'...Array.from(new Set(INNOVATIVE_SERVICES_20o28.map(service =>, service.category)))]// Filter, and, sort services;
  const filteredServices = INNOVATIVE_SERVICES_20o28;
    .filter(service =>;
      selectedCategory === 'all' || service.category === selectedCategory;
    );
    .filter(service =>;
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    );
    .sort((ab) => {
      switch() {
        case 'price':;
          return a.price - b.price;
        case 'category':;
          return a.category.localeCompare(b.category);
        case 'innovation':;
          return a.innovationLevel === 'revolutionary' ? 1 : -1;
        case 'name': defaul,;
  t: return a.title.localeCompare(b.title);
      };
    });
  const getCategoryIcon = (category: string) => {
    const icon,;
  s: Record<stringReact.ReactNode> = {
      'AI & Enterprise': <Brain className="w-5 h-5" />,;
      'Quantum Computing': <Zap className="w-5 h-5" />,;
      'Cybersecurity': <Shield className="w-5 h-5" />,;
      'Healthcare Technology': <Heart className="w-5 h-5" />,;
      'Financial Technology': <DollarSign className="w-5 h-5" />,;
      'Supply Chain': <Globe className="w-5 h-5" />,;
      'Content Marketing': <Target className="w-5 h-5" />,;
      'Project Management': <Rocket className="w-5 h-5" />'Customer Support': <Users className="w-5 h-5" />'Marketing Automation': <TrendingUp className="w-5 h-5" />;
    },;
    return icons[category] || <Sparkles className="w-5 h-5" />,;
  };
;
  const getInnovationLevelColor = (level: string) => {
    switch() {;
      case 'revolutionary':;
        return 'from-purple-50o0 to-pink-50o0';
      case 'cutting-edge':;
        return 'from-blue-50o0 to-cyan-50o0';
      defaul,;
  t: return 'from-green-50o0 to-emerald-50o0';
    };
  };
  const containerVariants = {
    hidden: { opacit,;
  y: 0 },;
    visible: {,;
      opacity: 1transitio,;
    n: {staggerChildre,;
  n: 0.1;
      }
    }
  };
  const itemVariants = {
    hidden: { ,;
    y: 20opacit,;
  y: 0 },;
    visible: {,;
      y: 0,opacity: 1,transition: {duratio,;
    n: 0.5eas,;
  e: "easeOut";
      };
    };
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-blue-90o0 to-slate-90o0 text-white">;
      {/* Futuristic, Animated, Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">;
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,2120.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,1822120.1)_1pxtransparent_1px)] bg-[size: , 50px_50px] animate-pulse"></div>;
        <div className="absolute inset-0">;
          {[...Array(20)].map((_i) => (;
            <motion.div;
              key={i}
              className="absolute w-1 h-1 bg-cyan-40o0 rounded-full opacity-60 shadow-lg shadow-cyan-40o0/50";
              animate={{
                x: [0,, 10o00],;
                y: [0,, -10o00],;
                opacity: [0.3,, 10.3],;
                scale: [0.51.50.5];
              }}
              transition={{
                duration: 6 + i * 0.2,repeat: Infinitydela,;
    y: i * 0.1eas,;
  e: "easeInOut";
              }}
              style={{
                left: `${Math.random() * 10o0}%`top: `${Math.random() * 10o0}%`;
              }}
            />;
          ))}
        </div>;
      </div>;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
              20o28 Services;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Revolutionary AI, Quantum Computing, and Next-Generation, Technology, Solutions;
            </p>;
            <div className="flex flex-wrap justify-center gap-4 mb-8">;
              <div className="flex items-center gap-2 bg-cyan-50o0/20, border, border-cyan-40o0/30 rounded-full px-4 py-2">;
                <Star className="w-5 h-5 text-yellow-40o0" />;
                <span className="text-cyan-40o0 font-medium">Cutting-Edge Innovation</span>;
              </div>;
              <div className="flex items-center gap-2 bg-purple-50o0/20, border, border-purple-40o0/30 rounded-full px-4 py-2">;
                <Zap className="w-5 h-5 text-purple-40o0" />;
                <span className="text-purple-40o0 font-medium">Quantum Technology</span>;
              </div>;
              <div className="flex items-center gap-2 bg-green-50o0/20, border, border-green-40o0/30 rounded-full px-4 py-2">;
                <Brain className="w-5 h-5 text-green-40o0" />;
                <span className="text-green-40o0 font-medium">AI-Powered Solutions</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search, and, Filter Section */}
      <section className="px-4 sm: px-6 l,;
    g:px-8 mb-12">;
        <div className="max-w-7xl mx-auto">;
          <div className="bg-slate-80o0/50 backdrop-blur-xl, border, border-slate-70o0/50 rounded-2xl p-6">;
            <div className="flex flex-col l,;
  g:flex-row gap-4 items-center">;
              {/* Search */}
              <div className="flex-1 relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search services, featuresor categories...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-70o0/50, border, border-slate-60o0/50 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0/50 focu,;
  s:border-cyan-50o0/50";
                />;
              </div>;
              {/* Category Filter */}
              <div className="relative">;
                <select;
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-slate-70o0/50, border, border-slate-60o0/50 rounded-xl px-4 py-3 pr-10 text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0/50 focu,;
  s:border-cyan-50o0/50";
                >;
                  {categories.map(category => (;
                    <option key={category} value={category}>;
                      {category === 'all' ? 'All Categories' : category}
                    </option>;
                  ))}
                </select>;
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5 pointer-events-none" />;
              </div>;
              {/* Sort */}
              <div className="relative">;
                <select;
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-slate-70o0/50, border, border-slate-60o0/50 rounded-xl px-4 py-3 pr-10 text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0/50 focu,;
  s:border-cyan-50o0/50";
                >;
                  <option value="name">Sort, by, Name</option>;
                  <option value="price">Sort, by, Price</option>;
                  <option value="category">Sort, by, Category</option>;
                  <option value="innovation">Sort, by, Innovation</option>;
                </select>;
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5 pointer-events-none" />;
              </div>;
              {/* View, Mode, Toggle */}
              <div className="flex bg-slate-70o0/50, border, border-slate-60o0/50 rounded-xl p-1">;
                <button;
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    viewMode === 'grid';
                      ? 'bg-cyan-50o0/20 text-cyan-40o0';
                      : 'text-gray-40o0 hover: text-white';
                  }`}
                >;
                  Grid;
                </button>;
                <button;
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    viewMode === 'list';
                      ? 'bg-cyan-50o0/20 text-cyan-40o0';
                      : 'text-gray-40o0 hover: text-white';
                  }`}
                >;
                  List;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Services Grid/List */}
      <section className="px-4 sm: px-6 l,;
  g:px-8 mb-20">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            variants={containerVariants}
            initial="hidden";
            animate="visible";
            className={viewMode === 'grid';
              ? 'grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6';
              : 'space-y-6';
            }
          >;
            {filteredServices.map((service) => (;
              <motion.div;
                key={service.id};
                variants={itemVariants}
                className={`bg-slate-80o0/50 backdrop-blur-xl, border, border-slate-70o0/50 rounded-2xl overflow-hidden hover: border-cyan-50o0/50 transition-all duration-30o0 hove,;
    r:shadow-2xl hove,;
  r:shadow-cyan-50o0/20 ${
                  viewMode === 'list' ? 'flex' : '';
                }`}
              >;
                {viewMode === 'grid' ? (;
                  // Grid View;
                  <div className="p-6">;
                    <div className="flex items-start justify-between mb-4">;
                      <div className="flex items-center gap-3">;
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)}`}>;
                          {getCategoryIcon(service.category)}
                        </div>;
                        <div>;
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white`}>;
                            {service.innovationLevel}
                          </span>;
                        </div>;
                      </div>;
                      <div className="text-right">;
                        <div className="text-2xl font-bold text-cyan-40o0">;
                          {service.currency}{service.price.toLocaleString()}
                        </div>;
                        <div className="text-sm text-gray-40o0">per {service.pricingModel}</div>;
                      </div>;
                    </div>;
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>;
                    <p className="text-gray-30o0 mb-4 line-clamp-3">{service.description}</p>;
                    <div className="space-y-3 mb-4">;
                      <div className="flex items-center gap-2 text-sm text-gray-40o0">;
                        <BarChart3 className="w-4 h-4" />;
                        <span>ROI: {service.roi}</span>;
                      </div>;
                      <div className="flex items-center gap-2 text-sm text-gray-40o0">;
                        <Clock className="w-4 h-4" />;
                        <span>Delivery: {service.estimatedDelivery}</span>;
                      </div>;
                      <div className="flex items-center gap-2 text-sm text-gray-40o0">;
                        <Award className="w-4 h-4" />;
                        <span>Support: {service.supportLevel}</span>;
                      </div>;
                    </div>;
                    <div className="flex flex-wrap gap-2 mb-4">;
                      {service.tags.slice(0o3).map((tagindex) => (;
                        <span;
                          key={index}
                          className="px-2 py-1 text-xs bg-slate-70o0/50 text-cyan-40o0 rounded-lg";
                        >;
                          {tag}
                        </span>;
                      ))}
                    </div>;
                    <div className="flex items-center justify-between">;
                      <button;
                        onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                        className="text-cyan-40o0 hover: text-cyan-30o0 text-sm font-medium, flex, items-center gap-1";
                      >;
                        {expandedService === service.id ? 'Show Less' : 'Learn More'}
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedService === service.id ? 'rotate-180' : ''}`} />;
                      </button>;
                      <Link;
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white rounded-lg hover: from-cyan-60o0 hove,;
  r:to-blue-60o0 transition-all duration-20o0 font-medium";
                      >;
                        Get Started;
                        <ArrowRight className="w-4 h-4" />;
                      </Link>;
                    </div>;
                    {/* Expanded Content */}
                    <AnimatePresence>;
                      {expandedService === service.id && (;
                        <motion.div;
                          initial={{ opacity: 0heigh,;
  t: 0 }}
                          animate={{ opacity: 1heigh,;
  t: 'auto' }}
                          exit={{ opacity: 0heigh,;
  t: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-slate-70o0/50";
                        >;
                          <div className="space-y-4">;
                            <div>;
                              <h4 className="font-semibold text-white mb-2">Key Features</h4>;
                              <ul className="space-y-1">;
                                {service.features.slice(0o5).map((featureindex) => (;
                                  <li key={index} className="flex items-start gap-2 text-sm text-gray-30o0">;
                                    <CheckCircle className="w-4 h-4 text-green-40o0 mt-0.5 flex-shrink-0" />;
                                    {feature}
                                  </li>;
                                ))}
                              </ul>;
                            </div>;
                            <div>;
                              <h4 className="font-semibold text-white mb-2">Benefits</h4>;
                              <ul className="space-y-1">;
                                {service.benefits.slice(0o3).map((benefitindex) => (;
                                  <li key={index} className="flex items-start gap-2 text-sm text-gray-30o0">;
                                    <CheckCircle className="w-4 h-4 text-green-40o0 mt-0.5 flex-shrink-0" />;
                                    {benefit}
                                  </li>;
                                ))}
                              </ul>;
                            </div>;
                          </div>;
                        </motion.div>;
                      )}
                    </AnimatePresence>;
                  </div>;
                ) : (;
                  // List View;
                  <div className="flex-1 p-6">;
                    <div className="flex items-start justify-between mb-4">;
                      <div className="flex items-center gap-4">;
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)}`}>;
                          {getCategoryIcon(service.category)}
                        </div>;
                        <div>;
                          <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>;
                          <p className="text-gray-40o0 text-sm">{service.category}</p>;
                        </div>;
                      </div>;
                      <div className="text-right">;
                        <div className="text-2xl font-bold text-cyan-40o0">;
                          {service.currency}{service.price.toLocaleString()}
                        </div>;
                        <div className="text-sm text-gray-40o0">per {service.pricingModel}</div>;
                      </div>;
                    </div>;
                    <p className="text-gray-30o0 mb-4">{service.description}</p>;
                    <div className="grid grid-cols-2 md: grid-cols-4 gap-4 mb-4">;
                      <div className="text-center">;
                        <div className="text-lg font-bold text-cyan-40o0">{service.roi}</div>;
                        <div className="text-xs text-gray-40o0">ROI</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-lg font-bold text-purple-40o0">{service.estimatedDelivery}</div>;
                        <div className="text-xs text-gray-40o0">Delivery</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-lg font-bold text-green-40o0">{service.supportLevel}</div>;
                        <div className="text-xs text-gray-40o0">Support</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-lg font-bold text-yellow-40o0">{service.marketPrice}</div>;
                        <div className="text-xs text-gray-40o0">Market Price</div>;
                      </div>;
                    </div>;
                    <div className="flex items-center justify-between">;
                      <div className="flex flex-wrap gap-2">;
                        {service.tags.slice(0o4).map((tagindex) => (;
                          <span;
                            key={index}
                            className="px-3 py-1 text-sm bg-slate-70o0/50 text-cyan-40o0 rounded-lg";
                          >;
                            {tag}
                          </span>;
                        ))}
                      </div>;
                      <Link;
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white rounded-lg hover: from-cyan-60o0 hove,;
  r:to-blue-60o0 transition-all duration-20o0 font-medium";
                      >;
                        Get Started;
                        <ArrowRight className="w-5 h-5" />;
                      </Link>;
                    </div>;
                  </div>;
                )}
              </motion.div>;
            ))}
          </motion.div>;
          {filteredServices.length === 0 && (;
            <div className="text-center py-20">;
              <div className="text-6xl mb-4">🔍</div>;
              <h3 className="text-2xl font-bold text-white mb-2">No, services, found</h3>;
              <p className="text-gray-40o0">Try, adjusting, your search, or, filter criteria</p>;
            </div>;
          )}
        </div>;
      </section>;
      {/* Contact Section */}
      <section className="px-4 sm: px-6 l,;
    g:px-8 mb-20">;
        <div className="max-w-4xl mx-auto">;
          <div className="bg-gradient-to-r from-cyan-50o0/10 to-blue-50o0/10, border, border-cyan-50o0/20 rounded-2xl p-8 text-center">;
            <h2 className="text-3xl font-bold text-white mb-4">Ready, to, Transform Your Business?</h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Let's, discuss, how our cutting-edge, 20o28, services can, revolutionize, your operations;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white rounded-lg hover:from-cyan-60o0 hove,;
    r:to-blue-60o0 transition-all duration-20o0 font-medium";
              >;
                <Phone className="w-5 h-5" />;
                +1, 30o2, 464 0o950;
              </a>;
              <a;
                href="mailto: kleber@ziontechgroup.com";
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-70o0/50, border, border-slate-60o0/50 text-white rounded-lg hove,;
  r:bg-slate-60o0/50 transition-all duration-20o0 font-medium";
              >;
                <Mail className="w-5 h-5" />;
                kleber@ziontechgroup.com;
              </a>;
            </div>;
            <div className="mt-6 text-sm text-gray-40o0">;
              <p>364, E, Main St, STE, 10o08, Middletown, DE, 1970o9</p>;
              <p>Visit, us, at: <a href="http,;
    s://ziontechgroup.com" className="text-cyan-40o0 hove,;
  r:text-cyan-30o0">ziontechgroup.com</a></p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, UltimateServicesShowcase20o28;
;