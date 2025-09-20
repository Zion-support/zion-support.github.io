impor, t, Reac, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import { ;
  Brai, n,;
  Shiel, d,;
  Clou, d,;
  Rocke, t,;
  BarChart, 3,;
  Briefcas, e,;
  Sta, r,;
  CheckCircl, e,;
  ArrowRigh, t,;
  Phon, e,;
  Mai, l,;
  MapPi, n,;
  ExternalLin, k,;
  Searc, h,;
  Filte, r,;
  Gri, d,;
  Lis, t,;
  Za, p,;
  Loc, k,;
  Databas, e,;
  User, s,;
  TrendingU, p,;
  Glob, e,;
  Cp, u,;
  Hear, t,;
  ShoppingCar, t,;
  BookOpe, n,;
  MessageCircl, e,;
  HelpCircl, e,;
  DollarSig, n,;
  Gaug, e,;
  Workflo, w,;
  Ato, m,;
  Targe, t,;
  Awar, d,;
  Cod, e,;
  Truc, k,;
  Buildin, g,;
  PenToo, l,;
  Ey, e,;
  Serve, r,;
  Smartphon, e,;
  Networ, k,;
  ClockX;
} from "lucide-react";
import { INNOVATIVE_SERVICES_20o2, 5, INNOVATIVE_SERVICE_CATEGORIES_20o2, 5, INNOVATIVE_SERVICE_SUBCATEGORIES_20o2, 5, INNOVATIVE_PRICING_TIERS_20o2, 5, INNOVATIVE_CONTACT_INFO_20o25INNOVATIVE_SERVICE_GUARANTEES_20o25 } from "@/data/innovativeServices20o25";
export, default, function InnovativeServicesShowcase20o25() {
  const [selectedCatego,  r, y, setSelectedCatego,, ry] = useState('all');
  const [searchTe, r, m, setSearchTe,, rm] = useState('');
  const [viewMo,  d, e, setViewMo,, de] = useState<'grid' | 'list'>('grid');
  const [sort, B, y, setSort,, By] = useState<'price' | 'rating' | 'aiScore' | 'name'>('name');
  const [sortOrd,  e, r, setSortOrd,, er] = useState<'asc' | 'desc'>('desc');
  const [selectedServi, c, e, setSelectedServi,, ce] = useState<any>(null);
  const [showMod,  a, l, setShowMod,, al] = useState(false);
;
  const categories = ['al, l', ...Objec, t.key,, s(INNOVATIVE_SERVICE_CATEGORIES_20o25)],;
  const filteredServices = INNOVATIVE_SERVICES_20o25.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch }),;
  const sortedServices = [...filteredServic,, es].sort((ab) => {
    le, t, aValu, e, bValu, e,;
    switch() {
      case 'price': aValue = a.pric,  e,;
        bValue = b.pric, e,;
        brea, k,;
      case 'rating':;
        aValue = a.ratin, g,;
        bValue = b.ratin, g,;
        brea, k,;
      case 'aiScore':;
        aValue = a.aiScor, e,;
        bValue = b.aiScor, ebreak;
      case 'name':;
        aValue = a.title;
        bValue = b.title;
        break;
      default: aValue = a.title;
        bValue = b.title;
    };
;
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    };
  });
;
  const getCategoryIcon = (category: string) => {;
    if (category === 'all') return <Rocket className="w-6 h-6" />;
    return INNOVATIVE_SERVICE_CATEGORIES_20o25[catego, , ry]?.icon ?;
      <span className="text-2xl">{INNOVATIVE_SERVICE_CATEGORIES_20o25[category].icon}</span> :;
      <Rocket className="w-6 h-6" />,;
  };
;
  const getCategoryColor = (categor, y: string) => {;
    if (category === 'all') return 'from-cyan-50o0 to-blue-50o0';
    return INNOVATIVE_SERVICE_CATEGORIES_20o25[category]?.color || 'from-gray-50o0 to-slate-50o0';
  };
;
  const openServiceModal = (servic, e: any) => {;
    setSelectedService(service);
    setShowModal(true);
  },;
  const closeModal = () => {;
    setShowModal(false);
    setSelectedService(null);
  },;
  return(<div className="min-h-screen futuristic-bg">;
      {/* Matrix, Rain, Background Effect */}
      <div className="matrix-rain"></div>;
      {/* Hero Section */}
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 s, m: px-6 lg:px-8 py-24">;
          <motion.div;
            className="text-center";
            initial={{ opacit,;
    y: 0,;
  y: 50 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="futuristic-heading text-5xl md: text-7xl mb-8">;
              <span className="bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent">;
                Innovative Services;
              </span>;
              <br />;
              <span className="bg-gradient-to-r from-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">;
                20o25;
              </span>;
            </h1>;
            <p className="futuristic-subheading text-xl m,;
  d: text-2xl mb-12 max-w-4xl mx-auto">;
              Revolutionary AI-powere, d, quantum-secur, eand, autonomous, business solutions, that, transform industries, and, drive unprecedented growth.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="futuristic-btn inline-flex items-center px-8 py-4";
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
              >;
                <Rocket className="w-5 h-5 mr-2" />;
                Explore Services;
              </motion.button>;
              <motion.a;
                href={`tel: ${INNOVATIVE_CONTACT_INFO_20o25.phone}`};
                whileHover={{ scale: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hove, r: bg-cyan-40o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Call Now;
              </motion.a>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
      {/* Contact, Information, Banner */}
      <div className="bg-gradient-to-r from-blue-90o0/50 to-purple-90o0/50 border-y border-cyan-40o0/30">;
        <div className="max-w-7xl mx-auto px-4 s, m: px-6 l,;
    g:px-8 py-6">;
          <div className="grid grid-cols-1 m,;
  d:grid-cols-3 gap-6 text-center">;
            <div className="flex items-center justify-center space-x-3">;
              <Phone className="w-5 h-5 text-cyan-40o0" />;
              <div>;
                <p className="text-sm text-gray-30o0">Phone</p>;
                <p className="text-cyan-40o0 font-semibold">{INNOVATIVE_CONTACT_INFO_20o25.phone}</p>;
              </div>;
            </div>;
            <div className="flex items-center justify-center space-x-3">;
              <Mail className="w-5 h-5 text-cyan-40o0" />;
              <div>;
                <p className="text-sm text-gray-30o0">Email</p>;
                <p className="text-cyan-40o0 font-semibold">{INNOVATIVE_CONTACT_INFO_20o25.email}</p>;
              </div>;
            </div>;
            <div className="flex items-center justify-center space-x-3">;
              <MapPin className="w-5 h-5 text-cyan-40o0" />;
              <div>;
                <p className="text-sm text-gray-30o0">Address</p>;
                <p className="text-cyan-40o0 font-semibold">{INNOVATIVE_CONTACT_INFO_20o25.address}</p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Services Section */}
      <div id="services-section" className="max-w-7xl mx-auto px-4 s, m: px-6 l,;
  g:px-8 py-16">;
        {/* Search, and, Filter Controls */}
        <div className="mb-8">;
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">;
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-80o0/50, border, border-gray-60o0 rounded-lg text-white placeholder-gray-40o0 focu,  s: outline-none focu, s: border-cyan-40o0 focu, s: ring-2 focu, s:ring-cyan-40o0/20";
              />;
            </div>;
            {/* Category Filter */}
            <div className="flex gap-2">;
              {categories.map((category) => (<motion.button;
                  key={category};
                  whileHover={{ scale: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-30o0 ${;
                    selectedCategory === category;
                      ? 'bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white';
                      : 'bg-gray-80o0/50 text-gray-30o0 hover: bg-gray-70o0/50';
                  }`}
                >;
                  <div className="flex items-center gap-2">;
                    {getCategoryIcon(category)}
                    <span className="capitalize">{category === 'all' ? 'All' : category}</span>;
                  </div>;
                </motion.button>;
              ))}
            </div>;
            {/* View, Mode, and Sort Controls */}
            <div className="flex gap-2">;
              <div className="flex bg-gray-80o0/50 rounded-lg p-1">;
                <button;
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-30o0 ${
                    viewMode === 'grid' ? 'bg-cyan-50o0 text-white' : 'text-gray-40o0 hover: text-white';
                  }`}
                >;
                  <Grid className="w-5 h-5" />;
                </button>;
                                  <button;
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-30o0 ${
                      viewMode === 'list' ? 'bg-cyan-50o0 text-white' : 'text-gray-40o0 hover: text-white';
                    }`}
                  >;
                  <List className="w-5 h-5" />;
                </button>;
              </div>;
;
              <select;
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [newSort, B,, ynewSortOrder] = e.target.value.split('-');
                  setSortBy(newSortBy, as, any);
                  setSortOrder(newSortOrder, as, any);
                }}
                className="px-3 py-2 bg-gray-80o0/50, border, border-gray-60o0 rounded-lg text-white focu,  s: outline-none focu, s:border-cyan-40o0";
              >;
                <option value="name-desc">Name (A-Z)</option>;
                <option value="name-asc">Name (Z-A)</option>;
                <option value="price-asc">Price (Low-High)</option>;
                <option value="price-desc">Price (High-Low)</option>;
                <option value="rating-desc">Rating (High-Low)</option>;
                <option value="aiScore-desc">AI Score (High-Low)</option>;
              </select>;
            </div>;
          </div>;
        </div>;
        {/* Services Grid/List */}
        <div className={viewMode === 'grid' ? 'futuristic-grid' : 'space-y-4'}>;
          <AnimatePresence>;
            {sortedServices.map((serviceindex) => (<motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 50 }}
                animate={{ opacity: 1,;
  y: 0 }}
                exit={{ opacity: 0,;
  y: -50 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className={viewMode === 'grid' ? 'futuristic-card p-6' : 'futuristic-card p-6'}
              >;
                {viewMode === 'grid' ? (;
                  // Grid View;
                  <div className="h-full, flex, flex-col">;
                    <div className="flex items-start justify-between mb-4">;
                      <div className="flex items-center gap-3">;
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>;
                          {getCategoryIcon(service.category)}
                        </div>;
                        <div>;
                          <span className="text-sm text-gray-40o0 capitalize">{service.category}</span>;
                          <p className="text-xs text-gray-50o0 capitalize">{service.subcategory}</p>;
                        </div>;
                      </div>;
                      <div className="flex items-center gap-2">;
                        <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                        <span className="text-sm text-gray-30o0">{service.rating}</span>;
                        <span className="text-xs text-gray-50o0">({service.reviewCount})</span>;
                      </div>;
                    </div>;
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{service.title}</h3>;
                    <p className="text-gray-30o0 mb-4 flex-grow line-clamp-3">{service.description}</p>;
                    <div className="space-y-3 mb-4">;
                      <div className="flex items-center justify-between">;
                        <span className="text-sm text-gray-40o0">AI Scor,  e: </span>;
                        <div className="flex items-center gap-2">;
                          <div className="w-16 bg-gray-70o0 rounded-full h-2">;
                            <div;
                              className="bg-gradient-to-r from-cyan-50o0 to-blue-50o0 h-2 rounded-full";
                              style={{ widt,;
  h: `${service.aiScore}%` }}
                            ></div>;
                          </div>;
                          <span className="text-sm text-cyan-40o0 font-semibold">{service.aiScore}%</span>;
                        </div>;
                      </div>;
                      <div className="flex items-center justify-between">;
                        <span className="text-sm text-gray-40o0">Market Pric, e:</span>;
                        <span className="text-sm text-green-40o0">{service.marketPrice}</span>;
                      </div>;
                      <div className="flex items-center justify-between">;
                        <span className="text-sm text-gray-40o0">RO, I:</span>;
                        <span className="text-sm text-yellow-40o0">{service.roi}</span>;
                      </div>;
                    </div>;
                    <div className="flex items-center justify-between mt-auto">;
                      <div className="text-2xl font-bold text-cyan-40o0">;
                        {service.currency}{service.price.toLocaleString()}
                      </div>;
                      <motion.button;
                        whileHover={{ scale: 1.0o5 }};
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openServiceModal(service)}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white rounded-lg hove,  r: from-cyan-60o0 hove, r:to-blue-60o0 transition-all duration-30o0";
                      >;
                        Learn More;
                      </motion.button>;
                    </div>;
                  </div>;
                ) : (// List View;
                  <div className="flex items-center gap-6">;
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>;
                      {getCategoryIcon(service.category)}
                    </div>;
                    <div className="flex-1">;
                      <div className="flex items-center gap-4 mb-2">;
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>;
                        <span className="text-sm text-gray-40o0 capitalize">{service.category}</span>;
                        <div className="flex items-center gap-1">;
                          <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                          <span className="text-sm text-gray-30o0">{service.rating}</span>;
                        </div>;
                      </div>;
                      <p className="text-gray-30o0 mb-3">{service.description}</p>;
                      <div className="flex items-center gap-6 text-sm text-gray-40o0">;
                        <span>AI Scor,  e: <span className="text-cyan-40o0 font-semibold">{service.aiScore}%</span></span>;
                        <span>Market Pric, e: <span className="text-green-40o0">{service.marketPrice}</span></span>;
                        <span>RO, I: <span className="text-yellow-40o0">{service.roi}</span></span>;
                      </div>;
                    </div>;
                    <div className="text-right">;
                      <div className="text-2xl font-bold text-cyan-40o0 mb-3">;
                        {service.currency}{service.price.toLocaleString()}
                      </div>;
                      <motion.button;
                        whileHover={{ scale: 1.0o5 }};
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openServiceModal(service)}
                        className="px-6 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white rounded-lg hove,  r: from-cyan-60o0 hove, r:to-blue-60o0 transition-all duration-30o0";
                      >;
                        Learn More;
                      </motion.button>;
                    </div>;
                  </div>;
                )}
              </motion.div>;
            ))}
          </AnimatePresence>;
        </div>;
        {/* No, Results, Message */}
        {sortedServices.length === 0 && (<div className="text-center py-16">;
            <div className="text-6xl mb-4">🔍</div>;
            <h3 className="text-2xl font-bold text-white mb-2">No, services, found</h3>;
            <p className="text-gray-40o0">Try, adjusting, your search, criteria, or category filter</p>;
          </div>;
        )}
      </div>;
      {/* Service, Details, Modal */}
      <AnimatePresence>;
        {showModal && selectedService && (;
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50, flex, items-center justify-center p-4";
            onClick={closeModal}
          >;
            <motion.div;
              initial={{ scal, e: 0.9opacit,;
  y: 0 }}
              animate={{ scal, e: 1opacit,;
  y: 1 }}
              exit={{ scal, e: 0.9opacit,;
  y: 0 }}
              className="futuristic-card max-w-4xl w-full max-h-[90vh] overflow-y-auto";
              onClick={(e) => e.stopPropagation()}
            >;
              <div className="p-6">;
                <div className="flex items-start justify-between mb-6">;
                  <div className="flex items-center gap-4">;
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${getCategoryColor(selectedService.category)}`}>;
                      {getCategoryIcon(selectedService.category)}
                    </div>;
                    <div>;
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>;
                      <div className="flex items-center gap-4 text-sm text-gray-40o0">;
                        <span className="capitalize">{selectedService.category}</span>;
                        <span>•</span>;
                        <span className="capitalize">{selectedService.subcategory}</span>;
                        <span>•</span>;
                        <div className="flex items-center gap-1">;
                          <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                          <span>{selectedService.rating}</span>;
                          <span>({selectedService.reviewCount} reviews)</span>;
                        </div>;
                      </div>;
                    </div>;
                  </div>;
                  <button;
                    onClick={closeModal}
                    className="text-gray-40o0 hover: text-white transition-colors";
                  >;
                    <X className="w-6 h-6" />;
                  </button>;
                </div>;
                <div className="grid grid-cols-1 l,;
  g:grid-cols-2 gap-8">;
                  <div>;
                    <h3 className="text-xl font-bold text-white mb-4">Service Overview</h3>;
                    <p className="text-gray-30o0 mb-6">{selectedService.description}</p>;
                    <div className="space-y-4 mb-6">;
                      <div className="flex items-center justify-between">;
                        <span className="text-gray-40o0">AI Scor, e: </span>;
                        <div className="flex items-center gap-2">;
                          <div className="w-24 bg-gray-70o0 rounded-full h-3">;
                            <div;
                              className="bg-gradient-to-r from-cyan-50o0 to-blue-50o0 h-3 rounded-full";
                              style={{ widt,;
  h: `${selectedService.aiScore}%` }}
                            ></div>;
                          </div>;
                          <span className="text-cyan-40o0 font-semibold">{selectedService.aiScore}%</span>;
                        </div>;
                      </div>;
                      <div className="flex items-center justify-between">;
                        <span className="text-gray-40o0">Market Pric, e:</span>;
                        <span className="text-green-40o0 font-semibold">{selectedService.marketPrice}</span>;
                      </div>;
                      <div className="flex items-center justify-between">;
                        <span className="text-gray-40o0">RO, I:</span>;
                        <span className="text-yellow-40o0 font-semibold">{selectedService.roi}</span>;
                      </div>;
                      <div className="flex items-center justify-between">;
                        <span className="text-gray-40o0">Setup Tim, e:</span>;
                        <span className="text-white">{selectedService.setupTime}</span>;
                      </div>;
                    </div>;
                    <div className="mb-6">;
                      <h4 className="text-lg font-semibold text-white mb-3">Tags</h4>;
                      <div className="flex flex-wrap gap-2">;
                        {selectedService.tags.map((tag: string) => (<span;
                            key={tag}
                            className="px-3 py-1 bg-gray-80o0/50, border, border-gray-60o0 rounded-full text-sm text-gray-30o0";
                          >;
                            {tag}
                          </span>;
                        ))}
                      </div>;
                    </div>;
                  </div>;
                  <div>;
                    <div className="mb-6">;
                      <h3 className="text-2xl font-bold text-cyan-40o0 mb-2">;
                        {selectedService.currency}{selectedService.price.toLocaleString()}
                      </h3>;
                      <p className="text-gray-40o0 mb-4">One-time, setup, fee</p>;
                      <div className="space-y-3">;
                        <motion.button;
                          whileHover={{ scale: 1.0o2 }};
                          whileTap={{ scale: 0.98 }}
                          className="w-full futuristic-btn py-3";
                          onClick={() => window.open(`mailto:${INNOVATIVE_CONTACT_INFO_20o25.email}?subject=Inquiry about ${selectedService.title}`'_blank')}
                        >;
                          Get Started;
                        </motion.button>;
                        <motion.button;
                          whileHover={{ scale: 1.0o2 }};
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-6 py-3 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hove, r: bg-cyan-40o0 hove,;
    r:text-white transition-all duration-30o0";
                          onClick={() => window.open(`te,;
  l: ${INNOVATIVE_CONTACT_INFO_20o25.phone}`'_blank')}
                        >;
                          Call, for, Quote;
                        </motion.button>;
                      </div>;
                    </div>;
                    <div className="mb-6">;
                      <h4 className="text-lg font-semibold text-white mb-3">Integrations</h4>;
                      <div className="space-y-2">;
                        {selectedService.integrations.map((integration: string) => (<div key={integration} className="flex items-center gap-2 text-gray-30o0">;
                            <CheckCircle className="w-4 h-4 text-green-40o0" />;
                            <span className="text-sm">{integration}</span>;
                          </div>;
                        ))}
                      </div>;
                    </div>;
                    <div>;
                      <h4 className="text-lg font-semibold text-white mb-3">Competitors</h4>;
                      <div className="space-y-2">;
                        {selectedService.competitors.map((competitor: string) => (<div key={competitor} className="flex items-center gap-2 text-gray-30o0">;
                            <Target className="w-4 h-4 text-red-40o0" />;
                            <span className="text-sm">{competitor}</span>;
                          </div>;
                        ))}
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </motion.div>;
        )}
      </AnimatePresence>;
      {/* Service, Guarantees, Section */}
      <div className="max-w-7xl mx-auto px-4 s,  m: px-6 l,;
  g:px-8 py-16">;
        <div className="text-center mb-12">;
          <h2 className="futuristic-heading text-4xl mb-4">Our Guarantees</h2>;
          <p className="futuristic-subheading text-xl">We, stand, behind every, service, with comprehensive guarantees</p>;
        </div>;
        <div className="grid grid-cols-1 m, d: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
          {Object.entries(INNOVATIVE_SERVICE_GUARANTEES_20o25).map(([k, , eyvalue]) => (<motion.div;
              key={key};
              whileHover={{ scale: 1.0o5 }}
              className="futuristic-card p-6 text-center";
            >;
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 rounded-full, flex, items-center justify-center">;
                <CheckCircle className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-3">{key}</h3>;
              <p className="text-gray-30o0">{value}</p>;
            </motion.div>;
          ))}
        </div>;
      </div>;
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 s, m: px-6 l,;
    g:px-8 py-16">;
        <div className="futuristic-card p-8 text-center">;
          <h2 className="futuristic-heading text-4xl mb-6">Ready, to, Transform Your Business?</h2>;
          <p className="futuristic-subheading text-xl mb-8 max-w-3xl mx-auto">;
            Contact, us, today to, discuss, how our, innovative, services can, drive, your business, forward, and deliver, exceptional, ROI.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <motion.a;
              href={`te,;
  l: ${INNOVATIVE_CONTACT_INFO_20o25.phone}`};
              whileHover={{ scale: 1.0o5 }};
              whileTap={{ scale: 0.95 }}
              className="futuristic-btn inline-flex items-center px-8 py-4";
            >;
              <Phone className="w-5 h-5 mr-2" />;
              Call {INNOVATIVE_CONTACT_INFO_20o25.phone}
            </motion.a>;
            ;
            <motion.a;
              href={`mailto: ${INNOVATIVE_CONTACT_INFO_20o25.email}`};
              whileHover={{ scale: 1.0o5 }};
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hove, r: bg-cyan-40o0 hove,;
  r:text-white transition-all duration-30o0";
            >;
              <Mail className="w-5 h-5 mr-2" />;
              Email Us;
            </motion.a>;
          </div>;
          <div className="mt-8 text-center">;
            <p className="text-gray-40o0 mb-2">{INNOVATIVE_CONTACT_INFO_20o25.hours}</p>;
            <p className="text-cyan-40o0 font-semibold">{INNOVATIVE_CONTACT_INFO_20o25.emergency}</p>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}