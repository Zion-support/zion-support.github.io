impor, t, Reac, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import { ;
  Searc, h,;
  Filte, r,;
  Sta, r,;
  ArrowRigh, t,;
  ChevronDow, n,;
  Brai, n,;
  Cp, u,;
  Databas, e,;
  Networ, k,;
  Shiel, d,;
  Rocke, t,;
  User, s,;
  BarChart, 3,;
  Cod, e,;
  Serve, r,;
  Chi, p,;
  Glob, e,;
  Za, p,;
  Loc, k,;
  ShieldChec, k,;
  TrendingU, p,;
  CheckCircl, e,;
  Cloc, k,;
  DollarSig, n,;
  Targe, t,;
  Handshak, e,;
  Lightbul, b,;
  Scal, e,;
  Hear, t,;
  Lea, f,;
  Ey, e,;
  Ato, m,;
  Building, 2,;
  Ca, r,;
  Hom, e,;
  Factor, y,;
  Cit, y,;
  Phon, e,;
  Mai, l,;
  MapPinExternalLink;
} from "lucide-react";
import { CLEAN_INNOVATIVE_MICRO_SAAS_SERVICES_20o25 } from "../data/cleanInnovativeMicroSaasServices20o25";
import { ADDITIONAL_INNOVATIVE_SERVICES_20o25 } from "../data/additionalInnovativeServices20o25";
import { EMERGING_TECH_SERVICES_20o25 } from "../data/emergingTechServices20o25";
const ComprehensiveServicesShowcase20o25 = () => {;
  const [activeCatego,  r, y, setActiveCatego,, ry] = useState('all');
  const [searchTe, r, m, setSearchTe,, rm] = useState('');
  const [sort,  B, y, setSort,, By] = useState('innovation');
  const [viewMo, d, e, setViewMo,, de] = useState('grid');
  const [selectedServi,  c, e, setSelectedServi,, ce] = useState(null);
;
  // Combine, all, services;
  const allServices = [;
    ...CLEAN_INNOVATIVE_MICRO_SAAS_SERVICES_20, 2, 5,;
    ...ADDITIONAL_INNOVATIVE_SERVICES_20, 2, 5,;
    ...EMERGING_TECH_SERVICES_20, 25;
,  ],;
  // Enhanced, categories, with new services;
  const categories = [;
    { i, d: 'al, l',;
    na, m, e: 'Al, l Service, s', cou, n, t: allService, s.leng, t, h,;
    ic, o, n: '🚀', col, o, r: 'fro, m-blu, e-60, 0 t, o-cyan-50o0' };
    { i, d: 'A, I & Analytic, s',;
    na, m, e: 'A, I & Analytic, s', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Analytics').leng, t, h,;
    ic, o, n: '🤖', col, o, r: 'fro, m-purpl, e-60, 0 t, o-cyan-50o0' };
    { i, d: 'A, I & Lega, l Tec, h',;
    na, m, e: 'A, I & Lega, l Tec, h', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Lega, l Tech').leng, t, h,;
    ic, o, n: '⚖️', col, o, r: 'fro, m-blu, e-60, 0 t, o-indigo-50o0' };
    { i, d: 'A, I & Healthcar, e',;
    na, m, e: 'A, I & Healthcar, e', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Healthcare').leng, t, h,;
    ic, o, n: '🏥', col, o, r: 'fro, m-re, d-60, 0 t, o-pink-50o0' };
    { i, d: 'A, I & Researc, h',;
    na, m, e: 'A, I & Researc, h', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Research').leng, t, h,;
    ic, o, n: '🔬', col, o, r: 'fro, m-purpl, e-60, 0 t, o-violet-50o0' };
    { i, d: 'A, I & Gree, n Tec, h',;
    na, m, e: 'A, I & Gree, n Tec, h', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Gree, n Tech').leng, t, h,;
    ic, o, n: '🌱', col, o, r: 'fro, m-gree, n-60, 0 t, o-emerald-50o0' };
    { i, d: 'A, I & Metavers, e',;
    na, m, e: 'A, I & Metavers, e', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Metaverse').leng, t, h,;
    ic, o, n: '🌍', col, o, r: 'fro, m-purpl, e-60, 0 t, o-indigo-50o0' };
    { i, d: 'A, I & Blockchai, n',;
    na, m, e: 'A, I & Blockchai, n', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Blockchain').leng, t, h,;
    ic, o, n: '🔗', col, o, r: 'fro, m-gree, n-60, 0 t, o-emerald-50o0' };
    { i, d: 'A, I & Edg, e Computin, g',;
    na, m, e: 'A, I & Edg, e Computin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Edg, e Computing').leng, t, h,;
    ic, o, n: '🌐', col, o, r: 'fro, m-blu, e-60, 0 t, o-cyan-50o0' };
    { i, d: 'Quantu, m Computin, g',;
    na, m, e: 'Quantu, m Computin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Quantu, m Computing').leng, t, h,;
    ic, o, n: '⚛️', col, o, r: 'fro, m-purpl, e-60, 0 t, o-pink-50o0' };
    { i, d: 'A, I & Spac, e Tec, h',;
    na, m, e: 'A, I & Spac, e Tec, h', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Spac, e Tech').leng, t, h,;
    ic, o, n: '🚀', col, o, r: 'fro, m-indig, o-60, 0 t, o-purple-50o0' };
    { i, d: 'A, I & Conten, t',;
    na, m, e: 'A, I & Conten, t', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Content').leng, t, h,;
    ic, o, n: '✍️', col, o, r: 'fro, m-orang, e-60, 0 t, o-red-50o0' };
    { i, d: 'Cybersecurit, y',;
    na, m, e: 'Cybersecurit, y', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Cybersecurity').leng, t, h,;
    ic, o, n: '🛡️', col, o, r: 'fro, m-gree, n-60, 0 t, o-blue-50o0' };
    { i, d: 'A, I & H, R',;
    na, m, e: 'A, I & H, R', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & HR').leng, t, h,;
    ic, o, n: '👥', col, o, r: 'fro, m-purpl, e-60, 0 t, o-cyan-50o0' };
    { i, d: 'Quantu, m Financ, e',;
    na, m, e: 'Quantu, m Financ, e', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Quantu, m Finance').leng, t, h,;
    ic, o, n: '💰', col, o, r: 'fro, m-yello, w-60, 0 t, o-orange-50o0' };
    { i, d: 'Autonomou, s System, s',;
    na, m, e: 'Autonomou, s System, s', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Autonomou, s Systems').leng, t, h,;
    ic, o, n: '🤖', col, o, r: 'fro, m-blu, e-60, 0 t, o-green-50o0' };
    { i, d: 'Neuromorphi, c Computin, g',;
    na, m, e: 'Neuromorphi, c Computin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Neuromorphi, c Computing').leng, t, h,;
    ic, o, n: '🧠', col, o, r: 'fro, m-purpl, e-60, 0 t, o-blue-50o0' };
    { i, d: 'Syntheti, c Biolog, y',;
    na, m, e: 'Syntheti, c Biolog, y', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Syntheti, c Biology').leng, t, h,;
    ic, o, n: '🧬', col, o, r: 'fro, m-gree, n-60, 0 t, o-blue-50o0' },;
    { i, d: 'Quantu, m Interne, t',;
    na, m, e: 'Quantu, m Interne, t', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Quantu, m Internet').leng, t, h,;
    ic, o, n: '🌐', col, o, r: 'fro, m-indig, o-60, 0 to-purple-50o0' };
,  ];
  const filteredServices = allServices.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch }),;
  const sortedServices = [...filteredServic,, es].sort((ab) => {
    switch() {
      case 'innovation': return b.innovationLevel === 'Revolutionary' ? 1 : -1, ;
      case 'price':;
        return a.price - b.pric, ecase 'roi':;
        return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0]);
      case 'name':;
        return a.title.localeCompare(b.title);
      default: return 0;
    };
  });
  const containerVariants = {
    hidden: { opacit,;
  y: 0 },;
    visibl, e: {,;
    opacit, y: 1,transitio, n: {staggerChildre,;
  n: 0.1;
      }
    }
  };
  const itemVariants = {
    hidde, n: { ,;
  y: 2, 0opacity: 0 },;
    visibl, e: {,;
    y: 0,opacit, y: 1,;
    transitio, n: {duratio,;
  n: 0.5;
      }
    }
  };
      const getInnovationColor = (level) => {
    switch() {;
      case 'Revolutionary': return 'text-purple-60o0 bg-purple-10o0';
      case 'Cutting-edge': return 'text-blue-60o0 bg-blue-10o0'case 'Advanced': return 'text-green-60o0 bg-green-10o0';
      default: return 'text-gray-60o0 bg-gray-10o0';
    };
  };
      const getCategoryIcon = (category) => {;
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || '🚀' };
;
  return(<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">;
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-60o0 via-purple-60o0 to-cyan-60o0 text-white py-20">;
        <div className="max-w-7xl mx-auto px-4 s, m: px-6 l,;
    g:px-8 text-center">;
          <motion.h1;
            initial={{ ,;
  y: 3, 0opacity: 0 }}
            animate={{ y: 0opacit,;
  y: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md: text-6xl font-bold mb-6";
          >;
            Revolutionary AI & Tech Services;
          </motion.h1>;
          <motion.p;
            initial={{ ,;
  y: 3, 0opacity: 0 }}
            animate={{ y: 0opacit,;
  y: 1 }}
            transition={{ duratio, n: 0.8dela,;
  y: 0.2 }}
            className="text-xl md: text-2xl mb-8 max-w-4xl mx-auto";
          >;
            Discover cutting-edge, micro, SAA, S, solution, s, I, T, service, s, and, AI, innovations that, transform, businesses and, drive, exponential growth;
          </motion.p>;
          <motion.div;
            initial={{ y: 3, 0opacity: 0 }}
            animate={{ y: 0opacit,;
  y: 1 }}
            transition={{ duratio, n: 0.8dela,;
  y: 0.4 }}
            className="flex flex-col sm: flex-row gap-4 justify-center items-center";
          >;
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">;
              <Phone className="w-5 h-5" />;
              <span>+1, 30o2, 464 0o950</span>;
            </div>;
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">;
              <Mail className="w-5 h-5" />;
              <span>kleber@ziontechgroup.com</span>;
            </div>;
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">;
              <MapPin className="w-5 h-5" />;
              <span>Middletow, n, DE 1970o9</span>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 s, m: px-6 l,;
  g:px-8 py-16">;
        <div className="text-center mb-16">;
          <h2 className="text-4xl font-bold text-gray-90o0 mb-6">;
            {allServices.length}+ Revolutionary Services;
          </h2>;
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">;
            From AI-powered, business, intelligence to, quantum, computin, g, solution, s, our, comprehensive, portfolio covers, every, aspect of, modern, technology needs;
          </p>;
        </div>;
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md: grid-cols-4 gap-8 mb-16">;
          <motion.div;
            initial={{ scal, e: 0.8opacit,;
  y: 0 }};
            whileInView={{ scal, e: 1opacit,;
  y: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg";
          >;
            <div className="text-4xl font-bold text-blue-60o0 mb-2">{allServices.length}+</div>;
            <div className="text-gray-60o0">Innovative Services</div>;
          </motion.div>;
          <motion.div;
            initial={{ scal, e: 0.8opacit,;
  y: 0 }};
            whileInView={{ scal, e: 1opacit,;
  y: 1 }}
            transition={{ duration: 0.5dela,;
  y: 0.1 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg";
          >;
            <div className="text-4xl font-bold text-purple-60o0 mb-2">25+</div>;
            <div className="text-gray-60o0">Technology Categories</div>;
          </motion.div>;
          <motion.div;
            initial={{ scal, e: 0.8opacit,;
  y: 0 }};
            whileInView={{ scal, e: 1opacit,;
  y: 1 }}
            transition={{ duration: 0.5dela,;
  y: 0.2 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg";
          >;
            <div className="text-4xl font-bold text-green-60o0 mb-2">99.9%</div>;
            <div className="text-gray-60o0">Uptime Guarantee</div>;
          </motion.div>;
          <motion.div;
            initial={{ scal, e: 0.8opacit,;
  y: 0 }};
            whileInView={{ scale: 1opacit,;
  y: 1 }}
            transition={{ duration: 0.5dela,;
  y: 0.3 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg";
          >;
            <div className="text-4xl font-bold text-orange-60o0 mb-2">24/7</div>;
            <div className="text-gray-60o0">Expert Support</div>;
          </motion.div>;
        </div>;
        {/* Search, and, Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">;
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">;
            <div className="flex-1 max-w-md">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2, border, border-gray-30o0 rounded-lg focu,  s: ring-2 focu, s: ring-blue-50o0 focu, s:border-transparent";
                />;
              </div>;
            </div>;
            <div className="flex gap-4 items-center">;
              <select;
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2, border, border-gray-30o0 rounded-lg focu,  s: ring-2 focu, s: ring-blue-50o0 focu, s:border-transparent";
              >;
                <option value="innovation">Sort, by, Innovation</option>;
                <option value="price">Sort, by, Price</option>;
                <option value="roi">Sort, by, ROI</option>;
                <option value="name">Sort, by, Name</option>;
              </select>;
              <div className="flex, border, border-gray-30o0 rounded-lg">;
                <button;
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-60o0 text-white' : 'bg-white text-gray-60o0'}`}
                >;
                  Grid;
                </button>;
                <button;
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-60o0 text-white' : 'bg-white text-gray-60o0'}`}
                >;
                  List;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Category Filter */}
        <div className="mb-8">;
          <div className="flex flex-wrap gap-3 justify-center">;
            {categories.map((category) => (;
              <motion.button;
                key={category.id}
                onClick={() => setActiveCategory(category.id)};
                whileHover={{ scale: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-30o0 ${;
                  activeCategory === category.id;
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg';
                    : 'bg-white text-gray-70o0 hover: bg-gray-10o0 shadow-md';
                }`}
              >;
                <span className="mr-2">{category.icon}</span>;
                {category.name} ({category.count});
              </motion.button>;
            ))}
          </div>;
        </div>;
        {/* Services Grid */};
        <motion.div;
          variants={containerVariants}
          initial="hidden";
          animate="visible";
          className={viewMode === 'grid' ? 'grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8' : 'space-y-6'}
        >;
          {sortedServices.map((serviceindex) => (<motion.div;
              key={service.id};
              variants={itemVariants};
              whileHover={{ y: -5scal,;
  e: 1.0o2 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-30o0 ${
                viewMode === 'list' ? 'flex' : '';
              }`}
            >;
              {viewMode === 'grid' ? (;
                <div className="p-6">;
                  <div className="flex items-start justify-between mb-4">;
                    <div className="text-2xl">{getCategoryIcon(service.category)}</div>;
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLevel)}`}>;
                      {service.innovationLevel}
                    </span>;
                  </div>;
                  <h3 className="text-xl font-bold text-gray-90o0 mb-3">{service.title}</h3>;
                  <p className="text-gray-60o0 mb-4 line-clamp-3">{service.description}</p>;
                  <div className="flex items-center justify-between mb-4">;
                    <div className="text-2xl font-bold text-blue-60o0">;
                      {service.currency}{service.price.toLocaleString()}
                      <span className="text-sm text-gray-50o0">/month</span>;
                    </div>;
                    <div className="text-sm text-green-60o0 font-medium">;
                      RO,  I: {service.roi}
                    </div>;
                  </div>;
                  <div className="flex items-center justify-between mb-4">;
                    <div className="text-sm text-gray-50o0">;
                      <Clock className="inline w-4 h-4 mr-1" />;
                      {service.estimatedDelivery}
                    </div>;
                    <div className="text-sm text-gray-50o0">;
                      <Shield className="inline w-4 h-4 mr-1" />;
                      {service.supportLevel}
                    </div>;
                  </div>;
                  <div className="flex flex-wrap gap-2 mb-4">;
                    {service.tags.slice(0o3).map((tagtagIndex) => (<span key={tagIndex} className="px-2 py-1 bg-gray-10o0 text-gray-70o0 text-xs rounded-full">;
                        {tag}
                      </span>;
                    ))}
                  </div>;
                  ;
                  <button;
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-gradient-to-r from-blue-60o0 to-cyan-50o0 text-white py-3 rounded-lg font-medium hove,  r: from-blue-70o0 hove, r:to-cyan-60o0 transition-all duration-30o0";
                  >;
                    View Details;
                  </button>;
                </div>;
              ) : (<div className="flex-1 p-6">;
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex items-center space-x-4">;
                      <div className="text-3xl">{getCategoryIcon(service.category)}</div>;
                      <div>;
                        <h3 className="text-xl font-bold text-gray-90o0">{service.title}</h3>;
                        <p className="text-gray-60o0">{service.description}</p>;
                      </div>;
                    </div>;
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLevel)}`}>;
                      {service.innovationLevel}
                    </span>;
                  </div>;
                  <div className="grid grid-cols-4 gap-4 mb-4">;
                    <div>;
                      <div className="text-2xl font-bold text-blue-60o0">;
                        {service.currency}{service.price.toLocaleString()}
                      </div>;
                      <div className="text-sm text-gray-50o0">Monthly</div>;
                    </div>;
                    <div>;
                      <div className="text-lg font-bold text-green-60o0">{service.roi}</div>;
                      <div className="text-sm text-gray-50o0">ROI</div>;
                    </div>;
                    <div>;
                      <div className="text-lg font-bold text-gray-70o0">{service.estimatedDelivery}</div>;
                      <div className="text-sm text-gray-50o0">Delivery</div>;
                    </div>;
                    <div>;
                      <div className="text-lg font-bold text-gray-70o0">{service.supportLevel}</div>;
                      <div className="text-sm text-gray-50o0">Support</div>;
                    </div>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <div className="flex flex-wrap gap-2">;
                      {service.tags.slice(0o5).map((tagtagIndex) => (<span key={tagIndex} className="px-2 py-1 bg-gray-10o0 text-gray-70o0 text-xs rounded-full">;
                          {tag}
                        </span>;
                      ))}
                    </div>;
                    <button;
                      onClick={() => setSelectedService(service)}
                      className="bg-gradient-to-r from-blue-60o0 to-cyan-50o0 text-white px-6 py-2 rounded-lg font-medium hove,  r: from-blue-70o0 hove, r:to-cyan-60o0 transition-all duration-30o0";
                    >;
                      View Details;
                    </button>;
                  </div>;
                </div>;
              )}
            </motion.div>;
          ))}
        </motion.div>;
        {/* Contact CTA */}
        <div className="mt-20 text-center">;
          <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-2xl p-12 text-white">;
            <h2 className="text-3xl font-bold mb-4">Ready, to, Transform Your Business?</h2>;
            <p className="text-xl mb-8 opacity-90">;
              Get, in, touch with, our, experts to, discuss, how our, revolutionary, services can, drive, your success;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <a;
                href="te, l: +130o24640950";
                className="flex items-center space-x-2 bg-white text-blue-60o0 px-8 py-3 rounded-lg font-medium hove,;
  r:bg-gray-10o0 transition-colors";
              >;
                <Phone className="w-5 h-5" />;
                <span>+1, 30o2, 464 0o950</span>;
              </a>;
              <a;
                href="mailt, o: kleber@ziontechgroup.com";
                className="flex items-center space-x-2 bg-white text-blue-60o0 px-8 py-3 rounded-lg font-medium hove,;
  r:bg-gray-10o0 transition-colors";
              >;
                <Mail className="w-5 h-5" />;
                <span>kleber@ziontechgroup.com</span>;
              </a>;
              <a;
                href="http, s: //ziontechgroup.com";
                target="_blank";
                rel="noopener noreferrer";
                className="flex items-center space-x-2 bg-white text-blue-60o0 px-8 py-3 rounded-lg font-medium hove,;
  r:bg-gray-10o0 transition-colors";
              >;
                <ExternalLink className="w-5 h-5" />;
                <span>Visit Website</span>;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Service, Detail, Modal */}
      <AnimatePresence>;
        {selectedService && (<motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50, flex, items-center justify-center p-4";
            onClick={() => setSelectedService(null)}
          >;
            <motion.div;
              initial={{ scal,  e: 0.8opacit,;
  y: 0 }}
              animate={{ scal, e: 1opacit,;
  y: 1 }}
              exit={{ scal, e: 0.8opacit,;
  y: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto";
              onClick={(e) => e.stopPropagation()}
            >;
              <div className="p-8">;
                <div className="flex items-start justify-between mb-6">;
                  <div className="flex items-center space-x-4">;
                    <div className="text-4xl">{getCategoryIcon(selectedService.category)}</div>;
                    <div>;
                      <h2 className="text-3xl font-bold text-gray-90o0">{selectedService.title}</h2>;
                      <p className="text-gray-60o0 text-lg">{selectedService.description}</p>;
                    </div>;
                  </div>;
                  <button;
                    onClick={() => setSelectedService(null)}
                    className="text-gray-40o0 hove,  r: text-gray-60o0 text-2xl";
                  >;
                    ×;
                  </button>;
                </div>;
                <div className="grid grid-cols-1 l,;
  g:grid-cols-2 gap-8">;
                  <div>;
                    <h3 className="text-xl font-bold text-gray-90o0 mb-4">Service Details</h3>;
                    <div className="space-y-4">;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">Categor, y:</span>;
                        <span className="font-medium">{selectedService.category}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">Subcategor, y:</span>;
                        <span className="font-medium">{selectedService.subcategory}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">Pric, e:</span>;
                        <span className="font-medium text-blue-60o0">{selectedService.currency}{selectedService.price.toLocaleString()}/month</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">RO, I:</span>;
                        <span className="font-medium text-green-60o0">{selectedService.roi}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">Deliver, y:</span>;
                        <span className="font-medium">{selectedService.estimatedDelivery}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">Suppor, t:</span>;
                        <span className="font-medium">{selectedService.supportLevel}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">Innovation Leve, l:</span>;
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getInnovationColor(selectedService.innovationLevel)}`}>;
                          {selectedService.innovationLevel}
                        </span>;
                      </div>;
                    </div>;
                  </div>;
                  <div>;
                    <h3 className="text-xl font-bold text-gray-90o0 mb-4">Features</h3>;
                    <ul className="space-y-2">;
                      {selectedService.features.map((featureindex) => (<li key={index} className="flex items-center space-x-2">;
                          <CheckCircle className="w-5 h-5 text-green-50o0" />;
                          <span>{feature}</span>;
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                </div>;
                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-gray-90o0 mb-4">Benefits</h3>;
                  <div className="grid grid-cols-1 md: grid-cols-2 gap-4">;
                    {selectedService.benefits.map((benefitindex) => (<div key={index} className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">;
                        <TrendingUp className="w-5 h-5 text-green-60o0" />;
                        <span className="text-green-80o0">{benefit}</span>;
                      </div>;
                    ))}
                  </div>;
                </div>;
                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-gray-90o0 mb-4">Use Cases</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {selectedService.useCases.map((useCaseindex) => (<span key={index} className="px-3 py-1 bg-blue-10o0 text-blue-80o0 rounded-full text-sm">;
                        {useCase}
                      </span>;
                    ))}
                  </div>;
                </div>;
                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-gray-90o0 mb-4">Target Audience</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {selectedService.targetAudience.map((audienceindex) => (<span key={index} className="px-3 py-1 bg-purple-10o0 text-purple-80o0 rounded-full text-sm">;
                        {audience}
                      </span>;
                    ))}
                  </div>;
                </div>;
                {selectedService.technicalSpecs && (;
                  <div className="mt-8">;
                    <h3 className="text-xl font-bold text-gray-90o0 mb-4">Technical Specifications</h3>;
                    <div className="grid grid-cols-1 md: grid-cols-2 gap-6">;
                      <div>;
                        <h4 className="font-medium text-gray-70o0 mb-2">Technology Stack</h4>;
                        <div className="flex flex-wrap gap-2">;
                          {selectedService.technicalSpecs.technology.map((techindex) => (<span key={index} className="px-2 py-1 bg-gray-10o0 text-gray-70o0, rounded, text-sm">;
                              {tech}
                            </span>;
                          ))}
                        </div>;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-gray-70o0 mb-2">Integrations</h4>;
                        <div className="flex flex-wrap gap-2">;
                          {selectedService.technicalSpecs.integrations.map((integrationindex) => (<span key={index} className="px-2 py-1 bg-blue-10o0 text-blue-70o0, rounded, text-sm">;
                              {integration}
                            </span>;
                          ))}
                        </div>;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-gray-70o0 mb-2">Security & Compliance</h4>;
                        <div className="flex flex-wrap gap-2">;
                          {selectedService.technicalSpecs.security.map((securityindex) => (<span key={index} className="px-2 py-1 bg-green-10o0 text-green-70o0, rounded, text-sm">;
                              {security}
                            </span>;
                          ))}
                        </div>;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-gray-70o0 mb-2">Performance</h4>;
                        <div className="space-y-2">;
                          <div className="flex justify-between">;
                            <span>API Endpoint,  s: </span>;
                            <span className="font-medium">{selectedService.technicalSpecs.apiEndpoints}</span>;
                          </div>;
                          <div className="flex justify-between">;
                            <span>Uptim, e:</span>;
                            <span className="font-medium">{selectedService.technicalSpecs.uptime}</span>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </div>;
                )}
;
                <div className="mt-8, flex, flex-col sm: flex-row gap-4">;
                  <a;
                    href="te, l: +130o24640950";
                    className="flex-1 bg-gradient-to-r from-blue-60o0 to-cyan-50o0 text-white py-3 px-6 rounded-lg font-medium text-center hove, r: from-blue-70o0 hove,;
  r:to-cyan-60o0 transition-all duration-30o0";
                  >;
                    Call No, w: +1, 30o2, 464 0o950;
                  </a>;
                  <a;
                    href="mailt, o: kleber@ziontechgroup.com";
                    className="flex-1 bg-gradient-to-r from-purple-60o0 to-pink-50o0 text-white py-3 px-6 rounded-lg font-medium text-center hove, r: from-purple-70o0 hove,;
  r:to-pink-60o0 transition-all duration-30o0";
                  >;
                    Emai, l: kleber@ziontechgroup.com;
                  </a>;
                </div>;
              </div>;
            </motion.div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </div>;
  );
},;
export, default, ComprehensiveServicesShowcase20o25;
;