impor, t, Reac, t, { useStat, e, useEffect } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import { 
  Searc, h,
  Filte, r, 
  Sta, r, 
  ArrowRigh, t, 
  ChevronDow, n, 
  Brai, n, 
  Cp, u, 
  Databas, e, 
  Networ, k, 
  Shiel, d, 
  Rocke, t, 
  User, s, 
  BarChart, 3, 
  Cod, e, 
  Serve, r, 
  Chi, p, 
  Glob, e, 
  Za, p, 
  Loc, k, 
  ShieldChec, k,
  TrendingU, p,
  CheckCircl, e,
  Cloc, k,
  DollarSig, n,
  Targe, t,
  Handshak, e,
  Lightbul, b,
  Scal, e,
  Hear, t,
  Lea, f,
  Ey, e,
  Ato, m,
  Building, 2,
  Ca, r,
  Hom, e,
  Factor, y,
  Cit, y,
  Phon, e,
  Mai, l,
  MapPi, n,
  ExternalLink
} from "lucide-react";
import { CLEAN_INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from "../data/cleanInnovativeMicroSaasServices2025";
import { ADDITIONAL_INNOVATIVE_SERVICES_2025 } from "../data/additionalInnovativeServices2025";
import { EMERGING_TECH_SERVICES_2025 } from "../data/emergingTechServices2025";
const ComprehensiveServicesShowcase2025 = () => {
  const [activeCatego,  r, y, setActiveCatego, r, y] = useState('all');
  const [searchTe, r, m, setSearchTe, r, m] = useState('');
  const [sort,  B, y, setSort, B, y] = useState('innovation');
  const [viewMo, d, e, setViewMo, d, e] = useState('grid');
  const [selectedServi,  c, e, setSelectedServi, c, e] = useState(null);

  // Combine all services
  const allServices = [
    ...CLEAN_INNOVATIVE_MICRO_SAAS_SERVICES_20, 2, 5,
    ...ADDITIONAL_INNOVATIVE_SERVICES_20, 2, 5,
    ...EMERGING_TECH_SERVICES_20, 2, 5
  ],

  // Enhanced categories with new services
  const categories = [
    { i, d: 'al, l',
    na, m, e: 'Al, l Service, s', cou, n, t: allService, s.leng, t, h,
    ic, o, n: '🚀', col, o, r: 'fro, m-blu, e-60, 0 t, o-cya, n-50, 0' };
    { i, d: 'A, I & Analytic, s',
    na, m, e: 'A, I & Analytic, s', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Analytic, s').leng, t, h,
    ic, o, n: '🤖', col, o, r: 'fro, m-purpl, e-60, 0 t, o-cya, n-50, 0' };
    { i, d: 'A, I & Lega, l Tec, h',
    na, m, e: 'A, I & Lega, l Tec, h', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Lega, l Tec, h').leng, t, h,
    ic, o, n: '⚖️', col, o, r: 'fro, m-blu, e-60, 0 t, o-indig, o-50, 0' };
    { i, d: 'A, I & Healthcar, e',
    na, m, e: 'A, I & Healthcar, e', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Healthcar, e').leng, t, h,
    ic, o, n: '🏥', col, o, r: 'fro, m-re, d-60, 0 t, o-pin, k-50, 0' };
    { i, d: 'A, I & Researc, h',
    na, m, e: 'A, I & Researc, h', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Researc, h').leng, t, h,
    ic, o, n: '🔬', col, o, r: 'fro, m-purpl, e-60, 0 t, o-viole, t-50, 0' };
    { i, d: 'A, I & Gree, n Tec, h',
    na, m, e: 'A, I & Gree, n Tec, h', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Gree, n Tec, h').leng, t, h,
    ic, o, n: '🌱', col, o, r: 'fro, m-gree, n-60, 0 t, o-emeral, d-50, 0' };
    { i, d: 'A, I & Metavers, e',
    na, m, e: 'A, I & Metavers, e', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Metavers, e').leng, t, h,
    ic, o, n: '🌍', col, o, r: 'fro, m-purpl, e-60, 0 t, o-indig, o-50, 0' };
    { i, d: 'A, I & Blockchai, n',
    na, m, e: 'A, I & Blockchai, n', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Blockchai, n').leng, t, h,
    ic, o, n: '🔗', col, o, r: 'fro, m-gree, n-60, 0 t, o-emeral, d-50, 0' };
    { i, d: 'A, I & Edg, e Computin, g',
    na, m, e: 'A, I & Edg, e Computin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Edg, e Computin, g').leng, t, h,
    ic, o, n: '🌐', col, o, r: 'fro, m-blu, e-60, 0 t, o-cya, n-50, 0' };
    { i, d: 'Quantu, m Computin, g',
    na, m, e: 'Quantu, m Computin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Quantu, m Computin, g').leng, t, h,
    ic, o, n: '⚛️', col, o, r: 'fro, m-purpl, e-60, 0 t, o-pin, k-50, 0' };
    { i, d: 'A, I & Spac, e Tec, h',
    na, m, e: 'A, I & Spac, e Tec, h', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Spac, e Tec, h').leng, t, h,
    ic, o, n: '🚀', col, o, r: 'fro, m-indig, o-60, 0 t, o-purpl, e-50, 0' };
    { i, d: 'A, I & Conten, t',
    na, m, e: 'A, I & Conten, t', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Conten, t').leng, t, h,
    ic, o, n: '✍️', col, o, r: 'fro, m-orang, e-60, 0 t, o-re, d-50, 0' };
    { i, d: 'Cybersecurit, y',
    na, m, e: 'Cybersecurit, y', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Cybersecurit, y').leng, t, h,
    ic, o, n: '🛡️', col, o, r: 'fro, m-gree, n-60, 0 t, o-blu, e-50, 0' };
    { i, d: 'A, I & H, R',
    na, m, e: 'A, I & H, R', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & H, R').leng, t, h,
    ic, o, n: '👥', col, o, r: 'fro, m-purpl, e-60, 0 t, o-cya, n-50, 0' };
    { i, d: 'Quantu, m Financ, e',
    na, m, e: 'Quantu, m Financ, e', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Quantu, m Financ, e').leng, t, h,
    ic, o, n: '💰', col, o, r: 'fro, m-yello, w-60, 0 t, o-orang, e-50, 0' };
    { i, d: 'Autonomou, s System, s',
    na, m, e: 'Autonomou, s System, s', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Autonomou, s System, s').leng, t, h,
    ic, o, n: '🤖', col, o, r: 'fro, m-blu, e-60, 0 t, o-gree, n-50, 0' };
    { i, d: 'Neuromorphi, c Computin, g',
    na, m, e: 'Neuromorphi, c Computin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Neuromorphi, c Computin, g').leng, t, h,
    ic, o, n: '🧠', col, o, r: 'fro, m-purpl, e-60, 0 t, o-blu, e-50, 0' };
    { i, d: 'Syntheti, c Biolog, y',
    na, m, e: 'Syntheti, c Biolog, y', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Syntheti, c Biolog, y').leng, t, h,
    ic, o, n: '🧬', col, o, r: 'fro, m-gree, n-60, 0 t, o-blu, e-50, 0' },
    { i, d: 'Quantu, m Interne, t',
    na, m, e: 'Quantu, m Interne, t', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Quantu, m Interne, t').leng, t, h,
    ic, o, n: '🌐', col, o, r: 'fro, m-indig, o-60, 0 t, o-purpl, e-50, 0' }
  ];
  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearc,  h,
  }),

  const sortedServices = [...filteredServic, e, s].sort((a,  b) => {
    switch (sortBy) {
      case 'innovation':
        return b.innovationLevel === 'Revolutionary' ? 1 : -1, 
      case 'price':
        return a.price - b.pric, e,
      case 'roi':
        return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0]);
      case 'name':
        return a.title.localeCompare(b.title);
      defaul,  t: return 0
    }
  });
  const containerVariants = {
    hidde, n: { opacit, y: 0 },
    visibl, e: {,
    opacit, y: 1,transitio, n: {,
    staggerChildre, n: 0.1
      }
    }
  };
  const itemVariants = {
    hidde, n: { y: 2, 0,
    opacit, y: 0 },
    visibl, e: {,
    y: 0,opacit, y: 1,
    transitio, n: {,
        duratio, n: 0.5
      }
    }
  };
      const getInnovationColor = (level) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-600 bg-purple-100';
      case 'Cutting-edge': return 'text-blue-600 bg-blue-100', 
      case 'Advanced': return 'text-green-600 bg-green-100';
      defaul, t: return 'text-gray-600 bg-gray-100'
    }
  };
      const getCategoryIcon = (category) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || '🚀', 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8 text-center">
          <motion.h1 
            initial={{ y: 3, 0,
    opacit, y: 0 }}
            animate={{ y: 0,
    opacit, y: 1 }}
            transition={{ duratio, n: 0.8 }}
            className="text-5xl m, d:text-6xl font-bold mb-6"
          >
            Revolutionary AI & Tech Services
          </motion.h1>
          <motion.p 
            initial={{ y: 3, 0,
    opacit, y: 0 }}
            animate={{ y: 0,
    opacit, y: 1 }}
            transition={{ duratio, n: 0.8,
    dela, y: 0.2 }}
            className="text-xl m, d:text-2xl mb-8 max-w-4xl mx-auto"
          >
            Discover cutting-edge micro SAA, S, solution, s, I, T, service, s, and AI innovations that transform businesses and drive exponential growth
          </motion.p>
          <motion.div 
            initial={{ y: 3, 0,
    opacit, y: 0 }}
            animate={{ y: 0,
    opacit, y: 1 }}
            transition={{ duratio, n: 0.8,
    dela, y: 0.4 }}
            className="flex flex-col s, m:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <MapPin className="w-5 h-5" />
              <span>Middletow, n, DE 19709</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {allServices.length}+ Revolutionary Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered business intelligence to quantum computin, g, solution, s, our comprehensive portfolio covers every aspect of modern technology needs
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 m, d:grid-cols-4 gap-8 mb-16">
          <motion.div 
            initial={{ scal, e: 0.8,
    opacit, y: 0 }};
            whileInView={{ scal, e: 1,
    opacit, y: 1 }}
            transition={{ duratio, n: 0.5 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">{allServices.length}+</div>
            <div className="text-gray-600">Innovative Services</div>
          </motion.div>
          <motion.div 
            initial={{ scal, e: 0.8,
    opacit, y: 0 }};
            whileInView={{ scal, e: 1,
    opacit, y: 1 }}
            transition={{ duratio, n: 0.5,
    dela, y: 0.1 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600">Technology Categories</div>
          </motion.div>
          <motion.div 
            initial={{ scal, e: 0.8,
    opacit, y: 0 }};
            whileInView={{ scal, e: 1,
    opacit, y: 1 }}
            transition={{ duratio, n: 0.5,
    dela, y: 0.2 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </motion.div>
          <motion.div 
            initial={{ scal, e: 0.8,
    opacit, y: 0 }};
            whileInView={{ scal, e: 1,
    opacit, y: 1 }}
            transition={{ duratio, n: 0.5,
    dela, y: 0.3 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col l, g:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focu,  s:ring-2 focu, s:ring-blue-500 focu, s:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focu,  s:ring-2 focu, s:ring-blue-500 focu, s:border-transparent"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
                <option value="name">Sort by Name</option>
              </select>
              
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-60, 0'}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-60, 0'}`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)};
                whileHover={{ scal,  e: 1.05 }};
                whileTap={{ scal, e: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white text-gray-700 hove, r:bg-gray-100 shadow-m, d'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={viewMode === 'grid' ? 'grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8' : 'space-y-6'}
        >
          {sortedServices.map((servic,  e, index) => (<motion.div
              key={service.id};
              variants={itemVariants};
              whileHover={{ y: -5, 
    scal, e: 1.02 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                viewMode === 'list' ? 'fle, x' : ''
              }`}
            >
              {viewMode === 'grid' ? (
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-2xl">{getCategoryIcon(service.category)}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLeve, l)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-600">
                      {service.currency}{service.price.toLocaleString()}
                      <span className="text-sm text-gray-500">/month</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      RO,  I: {service.roi}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500">
                      <Clock className="inline w-4 h-4 mr-1" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="text-sm text-gray-500">
                      <Shield className="inline w-4 h-4 mr-1" />
                      {service.supportLevel}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((ta,  g, tagIndex) => (<span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-medium hove,  r:from-blue-700 hove, r:to-cyan-600 transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              ) : (<div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{getCategoryIcon(service.category)}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLeve, l)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Monthly</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">{service.roi}</div>
                      <div className="text-sm text-gray-500">ROI</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-700">{service.estimatedDelivery}</div>
                      <div className="text-sm text-gray-500">Delivery</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-700">{service.supportLevel}</div>
                      <div className="text-sm text-gray-500">Support</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0,  5).map((ta,  g, tagIndex) => (<span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hove,  r:from-blue-700 hove, r:to-cyan-600 transition-all duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with our experts to discuss how our revolutionary services can drive your success
            </p>
            <div className="flex flex-col s, m:flex-row gap-4 justify-center items-center">
              <a
                href="te, l:+13024640950"
                className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hove, r:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </a>
              <a
                href="mailt, o:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hove, r:bg-gray-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <a
                href="http, s://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hove, r:bg-gray-100 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Visit Website</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (<motion.div
            initial={{ opacit,  y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scal,  e: 0.8,
    opacit, y: 0 }}
              animate={{ scal, e: 1,
    opacit, y: 1 }}
              exit={{ scal, e: 0.8,
    opacit, y: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90, v, h] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{getCategoryIcon(selectedService.category)}</div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                      <p className="text-gray-600 text-lg">{selectedService.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hove,  r:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 l, g:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Service Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Categor, y:</span>
                        <span className="font-medium">{selectedService.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subcategor, y:</span>
                        <span className="font-medium">{selectedService.subcategory}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pric, e:</span>
                        <span className="font-medium text-blue-600">{selectedService.currency}{selectedService.price.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">RO, I:</span>
                        <span className="font-medium text-green-600">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Deliver, y:</span>
                        <span className="font-medium">{selectedService.estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Suppor, t:</span>
                        <span className="font-medium">{selectedService.supportLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Innovation Leve, l:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getInnovationColor(selectedService.innovationLeve, l)}`}>
                          {selectedService.innovationLevel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((featur,  e, index) => (<li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
                  <div className="grid grid-cols-1 m,  d:grid-cols-2 gap-4">
                    {selectedService.benefits.map((benefi, t, index) => (<div key={index} className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <span className="text-green-800">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.useCases.map((useCas,  e, index) => (<span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Target Audience</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.targetAudience.map((audienc,  e, index) => (<span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedService.technicalSpecs && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                    <div className="grid grid-cols-1 m,  d:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.technology.map((tec, h, index) => (<span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Integrations</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.integrations.map((integratio,  n, index) => (<span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                              {integration}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Security & Compliance</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.security.map((securit,  y, index) => (<span key={index} className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                              {security}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Performance</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>API Endpoint,  s: </span>
                            <span className="font-medium">{selectedService.technicalSpecs.apiEndpoints}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Uptim, e:</span>
                            <span className="font-medium">{selectedService.technicalSpecs.uptime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-col s, m:flex-row gap-4">
                  <a
                    href="te, l:+13024640950"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium text-center hove, r:from-blue-700 hove, r:to-cyan-600 transition-all duration-300"
                  >
                    Call No, w: +1 302 464 0950
                  </a>
                  <a
                    href="mailt, o:kleber@ziontechgroup.com"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-lg font-medium text-center hove, r:from-purple-700 hove, r:to-pink-600 transition-all duration-300"
                  >
                    Emai, l: kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
},

export default ComprehensiveServicesShowcase2025;
