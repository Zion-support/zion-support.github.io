import React from "react";
impo, r, t, Rea, c, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import { ;
  Sear, c, h,;
  Filt, e, r,;
  St, a, r,;
  ArrowRig, h, t,;
  ChevronDo, w, n,;
  Bra, i, n,;
  C, p, u,;
  Databa, s, e,;
  Netwo, r, k,;
  Shie, l, d,;
  Rock, e, t,;
  Use, r, s,;
  BarChar, t, 3,;
  Co, d, e,;
  Serv, e, r,;
  Ch, i, p,;
  Glo, b, e,;
  Z, a, p,;
  Lo, c, k,;
  ShieldChe, c, k,;
  Trending, U, p,;
  CheckCirc, l, e,;
  Clo, c, k,;
  DollarSi, g, n,;
  Targ, e, t,;
  Handsha, k, e,;
  Lightbu, l, b,;
  Sca, l, e,;
  Hea, r, t,;
  Le, a, f,;
  E, y, e,;
  At, o, m,;
  Buildin, g, 2,;
  C, a, r,;
  Ho, m, e,;
  Facto, r, y,;
  Ci, t, y,;
  Pho, n, e,;
  Ma, i, l,;
  MapPinExternalLink;
} from "lucide-react";
import { CLEAN_INNOVATIVE_MICRO_SAAS_SERVICES_20o25 } from "../data/cleanInnovativeMicroSaasServices20o25";
import { ADDITIONAL_INNOVATIVE_SERVICES_20o25 } from "../data/additionalInnovativeServices20o25";
import { EMERGING_TECH_SERVICES_20o25 } from "../data/emergingTechServices20o25";
const ComprehensiveServicesShowcase20o25 = () => {;
  const [activeCate,  g, o,  r, y, setActiveCate, g, o,, r, y] = useState('all');
  const [search, T, e, r, m, setSearch, T, e,, r, m] = useState('');
  const [so,  r, t,  B, y, setSo, r, t,, B, y] = useState('innovation');
  const [view, M, o, d, e, setView, M, o,, d, e] = useState('grid');
  const [selectedSer,  v, i,  c, e, setSelectedSer, v, i,, c, e] = useState(null);
;
  // Combin, e, al, l, services;
  const allServices = [;
    ...CLEAN_INNOVATIVE_MICRO_SAAS_SERVICES_, 2, 0, 2, 5,;
    ...ADDITIONAL_INNOVATIVE_SERVICES_, 2, 0, 2, 5,;
    ...EMERGING_TECH_SERVICES_, 2, 0, 2, 5;
,  ],;
  // Enhance, d, categorie, s, with new services;
  const categories = [;
    { i, d: 'a, l, l',;
    n, a, m, e: 'A, l, l, Servi, c, e, s', c, o, u, n, t: allServi, c, e, s.le, n, g, t, h,;
    i, c, o, n: '🚀', c, o, l, o, r: 'f, r, o, m-b, l, u, e-6, 0, 0, t, o-cya, n-50o, 0' };
    { i, d: 'A, I & Analyt, i, c, s',;
    n, a, m, e: 'A, I & Analyt, i, c, s', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Analytic, s').le, n, g, t, h,;
    i, c, o, n: '🤖', c, o, l, o, r: 'f, r, o, m-pur, p, l, e-6, 0, 0, t, o-cya, n-50o, 0' };
    { i, d: 'A, I & Le, g, a, l, T, e, c, h',;
    n, a, m, e: 'A, I & Le, g, a, l, T, e, c, h', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Le, g, a, l Tec, h').le, n, g, t, h,;
    i, c, o, n: '⚖️', c, o, l, o, r: 'f, r, o, m-b, l, u, e-6, 0, 0, t, o-indig, o-50o, 0' };
    { i, d: 'A, I & Healthc, a, r, e',;
    n, a, m, e: 'A, I & Healthc, a, r, e', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Healthcar, e').le, n, g, t, h,;
    i, c, o, n: '🏥', c, o, l, o, r: 'f, r, o, m-r, e, d-6, 0, 0, t, o-pin, k-50o, 0' };
    { i, d: 'A, I & Resea, r, c, h',;
    n, a, m, e: 'A, I & Resea, r, c, h', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Researc, h').le, n, g, t, h,;
    i, c, o, n: '🔬', c, o, l, o, r: 'f, r, o, m-pur, p, l, e-6, 0, 0, t, o-viole, t-50o, 0' };
    { i, d: 'A, I & Gr, e, e, n, T, e, c, h',;
    n, a, m, e: 'A, I & Gr, e, e, n, T, e, c, h', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Gr, e, e, n Tec, h').le, n, g, t, h,;
    i, c, o, n: '🌱', c, o, l, o, r: 'f, r, o, m-gr, e, e, n-6, 0, 0, t, o-emeral, d-50o, 0' };
    { i, d: 'A, I & Metave, r, s, e',;
    n, a, m, e: 'A, I & Metave, r, s, e', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Metavers, e').le, n, g, t, h,;
    i, c, o, n: '🌍', c, o, l, o, r: 'f, r, o, m-pur, p, l, e-6, 0, 0, t, o-indig, o-50o, 0' };
    { i, d: 'A, I & Blockch, a, i, n',;
    n, a, m, e: 'A, I & Blockch, a, i, n', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Blockchai, n').le, n, g, t, h,;
    i, c, o, n: '🔗', c, o, l, o, r: 'f, r, o, m-gr, e, e, n-6, 0, 0, t, o-emeral, d-50o, 0' };
    { i, d: 'A, I & E, d, g, e, Comput, i, n, g',;
    n, a, m, e: 'A, I & E, d, g, e, Comput, i, n, g', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & E, d, g, e Computin, g').le, n, g, t, h,;
    i, c, o, n: '🌐', c, o, l, o, r: 'f, r, o, m-b, l, u, e-6, 0, 0, t, o-cya, n-50o, 0' };
    { i, d: 'Quan, t, u, m, Comput, i, n, g',;
    n, a, m, e: 'Quan, t, u, m, Comput, i, n, g', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'Quan, t, u, m Computin, g').le, n, g, t, h,;
    i, c, o, n: '⚛️', c, o, l, o, r: 'f, r, o, m-pur, p, l, e-6, 0, 0, t, o-pin, k-50o, 0' };
    { i, d: 'A, I & Sp, a, c, e, T, e, c, h',;
    n, a, m, e: 'A, I & Sp, a, c, e, T, e, c, h', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Sp, a, c, e Tec, h').le, n, g, t, h,;
    i, c, o, n: '🚀', c, o, l, o, r: 'f, r, o, m-ind, i, g, o-6, 0, 0, t, o-purpl, e-50o, 0' };
    { i, d: 'A, I & Cont, e, n, t',;
    n, a, m, e: 'A, I & Cont, e, n, t', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Conten, t').le, n, g, t, h,;
    i, c, o, n: '✍️', c, o, l, o, r: 'f, r, o, m-ora, n, g, e-6, 0, 0, t, o-re, d-50o, 0' };
    { i, d: 'Cybersecur, i, t, y',;
    n, a, m, e: 'Cybersecur, i, t, y', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'Cybersecurit, y').le, n, g, t, h,;
    i, c, o, n: '🛡️', c, o, l, o, r: 'f, r, o, m-gr, e, e, n-6, 0, 0, t, o-blu, e-50o, 0' };
    { i, d: 'A, I & H, R',;
    n, a, m, e: 'A, I & H, R', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & H, R').le, n, g, t, h,;
    i, c, o, n: '👥', c, o, l, o, r: 'f, r, o, m-pur, p, l, e-6, 0, 0, t, o-cya, n-50o, 0' };
    { i, d: 'Quan, t, u, m, Fina, n, c, e',;
    n, a, m, e: 'Quan, t, u, m, Fina, n, c, e', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'Quan, t, u, m Financ, e').le, n, g, t, h,;
    i, c, o, n: '💰', c, o, l, o, r: 'f, r, o, m-yel, l, o, w-6, 0, 0, t, o-orang, e-50o, 0' };
    { i, d: 'Autonom, o, u, s, Syst, e, m, s',;
    n, a, m, e: 'Autonom, o, u, s, Syst, e, m, s', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'Autonom, o, u, s System, s').le, n, g, t, h,;
    i, c, o, n: '🤖', c, o, l, o, r: 'f, r, o, m-b, l, u, e-6, 0, 0, t, o-gree, n-50o, 0' };
    { i, d: 'Neuromorp, h, i, c, Comput, i, n, g',;
    n, a, m, e: 'Neuromorp, h, i, c, Comput, i, n, g', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'Neuromorp, h, i, c Computin, g').le, n, g, t, h,;
    i, c, o, n: '🧠', c, o, l, o, r: 'f, r, o, m-pur, p, l, e-6, 0, 0, t, o-blu, e-50o, 0' };
    { i, d: 'Synthe, t, i, c, Biol, o, g, y',;
    n, a, m, e: 'Synthe, t, i, c, Biol, o, g, y', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'Synthe, t, i, c Biolog, y').le, n, g, t, h,;
    i, c, o, n: '🧬', c, o, l, o, r: 'f, r, o, m-gr, e, e, n-6, 0, 0, t, o-blu, e-50o, 0' },;
    { i, d: 'Quan, t, u, m, Inter, n, e, t',;
    n, a, m, e: 'Quan, t, u, m, Inter, n, e, t', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'Quan, t, u, m Interne, t').le, n, g, t, h,;
    i, c, o, n: '🌐', c, o, l, o, r: 'f, r, o, m-ind, i, g, o-6, 0, 0 t, o-purpl, e-50o, 0' };
,  ];
  const filteredServices = allServices.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch }), ;
  const sortedServices = [...filteredServ, i, c,, e, s].sort((ab) => {
    switch() {
      case 'innovation': return b.innovationLevel === 'Revolutionary' ? 1 : -1,  ;
      case 'price':;
        return a.price - b.pri, c, ecase 'roi':;
        return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0]);
      case 'name':;
        return a.title.localeCompare(b.title);
      defaul,  t: return 0;
    };
  });
  const containerVariants = {
    hidde, n: { opaci, t,;
  y: 0 },;
    visib, l, e: {,;
    opaci, t, y: 1,transiti, o, n: {staggerChildr, e,;
  n: 0.1;
      }
    }
  };
  const itemVariants = {
    hidd, e, n: { ,;
  y: 2,
    0opacit, y: 0 },;
    visib, l, e: {,;
    y: 0,opaci, t, y: 1,;
    transiti, o, n: {durati, o,;
  n: 0.5;
      }
    }
  };
      const getInnovationColor = (level) => {
    switch() {;
      case 'Revolutionary': return 'text-purple-60o0 bg-purple-10o0';
      case 'Cutting-edge': return 'text-blue-60o0 bg-blue-10o0'case 'Advanced': return 'text-green-60o0 bg-green-10o0';
      defaul,  t: return 'text-gray-60o0 bg-gray-10o0';
    };
  };
      const getCategoryIcon = (category) => {;
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || '🚀' };
;
  return(<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">;
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-60o0 via-purple-60o0 to-cyan-60o0 text-white py-20">;
        <div className="max-w-7xl mx-auto px-4,  s, m: px-6, l,;
    g:px-8 text-center">;
          <motion.h1;
            initial={{ ,;
  y: 3,
    0opacit, y: 0 }}
            animate={{ y: 0opaci, t,;
  y: 1 }}
            transition={{ duratio, n: 0.8 }}
            className="text-5xl m, d: text-6xl font-bold mb-6";
          >;
            Revolutionary AI & Tech Services;
          </motion.h1>;
          <motion.p;
            initial={{ ,;
  y: 3,
    0opacit, y: 0 }}
            animate={{ y: 0opaci, t,;
  y: 1 }}
            transition={{ durati, o, n: 0.8del, a,;
  y: 0.2 }}
            className="text-xl m, d: text-2xl mb-8 max-w-4xl mx-auto";
          >;
            Discover cutting-edg, e, micr, o, SA, A, S, solutio, n, s, I, T, servic, e, s, an, d, A, I, innovation, s, tha, t, transfor, m, businesse, s, an, d, driv, e, exponential growth;
          </motion.p>;
          <motion.div;
            initial={{ y: 3,
    0opacit, y: 0 }}
            animate={{ y: 0opaci, t,;
  y: 1 }}
            transition={{ durati, o, n: 0.8del, a,;
  y: 0.4 }}
            className="flex flex-col s, m: flex-row gap-4 justify-center items-center";
          >;
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">;
              <Phone className="w-5 h-5" />;
              <span>+1, 30o, 2, 464 0o950</span>;
            </div>;
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">;
              <Mail className="w-5 h-5" />;
              <span>kleber@ziontechgroup.com</span>;
            </div>;
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">;
              <MapPin className="w-5 h-5" />;
              <span>Middleto, w, n, DE 1970o9</span>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4, s, m: px-6, l,;
  g:px-8 py-16">;
        <div className="text-center mb-16">;
          <h2 className="text-4xl font-bold text-gray-90o0 mb-6">;
            {allServices.length}+ Revolutionary Services;
          </h2>;
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">;
            From AI-powere, d, busines, s, intelligenc, e, t, o, quantu, m, computi, n, g, solutio, n, s, ou, r, comprehensiv, e, portfoli, o, cover, s, ever, y, aspec, t, o, f, moder, n, technology needs;
          </p>;
        </div>;
        {/* Stats Grid */}
        <div className="grid grid-cols-1 m, d: grid-cols-4 gap-8 mb-16">;
          <motion.div;
            initial={{ sca, l, e: 0.8opaci, t,;
  y: 0 }};
            whileInView={{ sca, l, e: 1opaci, t,;
  y: 1 }}
            transition={{ duratio, n: 0.5 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg";
          >;
            <div className="text-4xl font-bold text-blue-60o0 mb-2">{allServices.length}+</div>;
            <div className="text-gray-60o0">Innovative Services</div>;
          </motion.div>;
          <motion.div;
            initial={{ sca, l, e: 0.8opaci, t,;
  y: 0 }};
            whileInView={{ sca, l, e: 1opaci, t,;
  y: 1 }}
            transition={{ duratio, n: 0.5del, a,;
  y: 0.1 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg";
          >;
            <div className="text-4xl font-bold text-purple-60o0 mb-2">25+</div>;
            <div className="text-gray-60o0">Technology Categories</div>;
          </motion.div>;
          <motion.div;
            initial={{ sca, l, e: 0.8opaci, t,;
  y: 0 }};
            whileInView={{ sca, l, e: 1opaci, t,;
  y: 1 }}
            transition={{ duratio, n: 0.5del, a,;
  y: 0.2 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg";
          >;
            <div className="text-4xl font-bold text-green-60o0 mb-2">99.9%</div>;
            <div className="text-gray-60o0">Uptime Guarantee</div>;
          </motion.div>;
          <motion.div;
            initial={{ sca, l, e: 0.8opaci, t,;
  y: 0 }};
            whileInView={{ scal, e: 1opaci, t,;
  y: 1 }}
            transition={{ duratio, n: 0.5del, a,;
  y: 0.3 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg";
          >;
            <div className="text-4xl font-bold text-orange-60o0 mb-2">24/7</div>;
            <div className="text-gray-60o0">Expert Support</div>;
          </motion.div>;
        </div>;
        {/* Searc, h, an, d, Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">;
          <div className="flex flex-col l, g:flex-row gap-4 items-center justify-between">;
            <div className="flex-1 max-w-md">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2,  borde, r, border-gray-30o0 rounded-l, g, foc, u,  s: ring-2, foc, u,
    s: ring-blue-50o, 0, foc, u, s:border-transparent";
                />;
              </div>;
            </div>;
            <div className="flex gap-4 items-center">;
              <select;
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2,  borde, r, border-gray-30o0 rounded-l, g, foc, u,  s: ring-2, foc, u,
    s: ring-blue-50o, 0, foc, u, s:border-transparent";
              >;
                <option value="innovation">Sor, t, b, y, Innovation</option>;
                <option value="price">Sor, t, b, y, Price</option>;
                <option value="roi">Sor, t, b, y, ROI</option>;
                <option value="name">Sor, t, b, y, Name</option>;
              </select>;
              <div className="fle, x, borde, r, border-gray-30o0 rounded-lg">;
                <button;
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-60o0 text-white' : 'bg-white text-gray-60o, 0'}`}
                >;
                  Grid;
                </button>;
                <button;
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-60o0 text-white' : 'bg-white text-gray-60o, 0'}`}
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
                whileHover={{ scal,  e: 1.0o5 }};
                whileTap={{ scal, e: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-30o0 ${;
                  activeCategory === category.id;
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg';
                    : 'bg-white text-gray-70o0 hove, r: bg-gray-10o0 shadow-m, d';
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
          className={viewMode === 'grid' ? 'grid grid-cols-1 m, d: grid-cols-2, l,;
  g:grid-cols-3 gap-8' : 'space-y-6'}
        >;
          {sortedServices.map((serviceindex) => (<motion.div;
              key={service.id};
              variants={itemVariants};
              whileHover={{ y: -5sca,  l,;
  e: 1.0o2 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-30o0 ${
                viewMode === 'list' ? 'fle, x' : '';
              }`}
            >;
              {viewMode === 'grid' ? (;
                <div className="p-6">;
                  <div className="flex items-start justify-between mb-4">;
                    <div className="text-2xl">{getCategoryIcon(service.category)}</div>;
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLeve, l)}`}>;
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
                      R,  O,  I: {service.roi}
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
                    className="w-full bg-gradient-to-r from-blue-60o0 to-cyan-50o0 text-white py-3 rounded-lg font-mediu,  m, hov, e,  r: from-blue-70o, 0, hov, e,
    r:to-cyan-60o0 transition-all duration-30o0";
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
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLeve, l)}`}>;
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
                      className="bg-gradient-to-r from-blue-60o0 to-cyan-50o0 text-white px-6 py-2 rounded-lg font-mediu,  m, hov, e,  r: from-blue-70o, 0, hov, e,
    r:to-cyan-60o0 transition-all duration-30o0";
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
            <h2 className="text-3xl font-bold mb-4">Read, y, t, o, Transform Your Business?</h2>;
            <p className="text-xl mb-8 opacity-90">;
              Ge, t, i, n, touc, h, wit, h, ou, r, expert, s, t, o, discus, s, ho, w, ou, r, revolutionar, y, service, s, ca, n, driv, e, your success;
            </p>;
            <div className="flex flex-col s, m: flex-row gap-4 justify-center items-center">;
              <a;
                href="t, e, l: +130o24640950";
                className="flex items-center space-x-2 bg-white text-blue-60o0 px-8 py-3 rounded-lg font-mediu, m, hov, e,;
  r:bg-gray-10o0 transition-colors";
              >;
                <Phone className="w-5 h-5" />;
                <span>+1, 30o, 2, 464 0o950</span>;
              </a>;
              <a;
                href="mail, t, o: kleber@ziontechgroup.com";
                className="flex items-center space-x-2 bg-white text-blue-60o0 px-8 py-3 rounded-lg font-mediu, m, hov, e,;
  r:bg-gray-10o0 transition-colors";
              >;
                <Mail className="w-5 h-5" />;
                <span>kleber@ziontechgroup.com</span>;
              </a>;
              <a;
                href="htt, p, s: //ziontechgroup.com";
                target="_blank";
                rel="noopener noreferrer";
                className="flex items-center space-x-2 bg-white text-blue-60o0 px-8 py-3 rounded-lg font-mediu, m, hov, e,;
  r:bg-gray-10o0 transition-colors";
              >;
                <ExternalLink className="w-5 h-5" />;
                <span>Visit Website</span>;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Servic, e, Detai, l, Modal */}
      <AnimatePresence>;
        {selectedService && (<motion.div;
            initial={{ opacit,  y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-5, 0, fle, x, items-center justify-center p-4";
            onClick={() => setSelectedService(null)}
          >;
            <motion.div;
              initial={{ sca,  l,  e: 0.8opaci, t,;
  y: 0 }}
              animate={{ sca, l, e: 1opaci, t,;
  y: 1 }}
              exit={{ sca, l, e: 0.8opaci, t,;
  y: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90, v, h] overflow-y-auto";
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
                    className="text-gray-40o,  0, hov, e,  r: text-gray-60o0 text-2xl";
                  >;
                    ×;
                  </button>;
                </div>;
                <div className="grid grid-cols-1, l,;
  g:grid-cols-2 gap-8">;
                  <div>;
                    <h3 className="text-xl font-bold text-gray-90o0 mb-4">Service Details</h3>;
                    <div className="space-y-4">;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">Catego, r, y:</span>;
                        <span className="font-medium">{selectedService.category}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">Subcatego, r, y:</span>;
                        <span className="font-medium">{selectedService.subcategory}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">Pri, c, e:</span>;
                        <span className="font-medium text-blue-60o0">{selectedService.currency}{selectedService.price.toLocaleString()}/month</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">R, O, I:</span>;
                        <span className="font-medium text-green-60o0">{selectedService.roi}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">Delive, r, y:</span>;
                        <span className="font-medium">{selectedService.estimatedDelivery}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">Suppo, r, t:</span>;
                        <span className="font-medium">{selectedService.supportLevel}</span>;
                      </div>;
                      <div className="flex justify-between">;
                        <span className="text-gray-60o0">Innovatio, n, Lev, e, l:</span>;
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getInnovationColor(selectedService.innovationLeve, l)}`}>;
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
                  <div className="grid grid-cols-1 m,  d: grid-cols-2 gap-4">;
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
                    <div className="grid grid-cols-1 m,  d: grid-cols-2 gap-6">;
                      <div>;
                        <h4 className="font-medium text-gray-70o0 mb-2">Technology Stack</h4>;
                        <div className="flex flex-wrap gap-2">;
                          {selectedService.technicalSpecs.technology.map((techindex) => (<span key={index} className="px-2 py-1 bg-gray-10o0 text-gray-70o,  0, rounde, d, text-sm">;
                              {tech}
                            </span>;
                          ))}
                        </div>;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-gray-70o0 mb-2">Integrations</h4>;
                        <div className="flex flex-wrap gap-2">;
                          {selectedService.technicalSpecs.integrations.map((integrationindex) => (<span key={index} className="px-2 py-1 bg-blue-10o0 text-blue-70o,  0, rounde, d, text-sm">;
                              {integration}
                            </span>;
                          ))}
                        </div>;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-gray-70o0 mb-2">Security & Compliance</h4>;
                        <div className="flex flex-wrap gap-2">;
                          {selectedService.technicalSpecs.security.map((securityindex) => (<span key={index} className="px-2 py-1 bg-green-10o0 text-green-70o,  0, rounde, d, text-sm">;
                              {security}
                            </span>;
                          ))}
                        </div>;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-gray-70o0 mb-2">Performance</h4>;
                        <div className="space-y-2">;
                          <div className="flex justify-between">;
                            <span>AP, I, Endpoin, t,  s: </span>;
                            <span className="font-medium">{selectedService.technicalSpecs.apiEndpoints}</span>;
                          </div>;
                          <div className="flex justify-between">;
                            <span>Upti, m, e:</span>;
                            <span className="font-medium">{selectedService.technicalSpecs.uptime}</span>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </div>;
                )}
;
                <div className="mt-8, fle, x, flex-col s, m: flex-row gap-4">;
                  <a;
                    href="t, e, l: +130o24640950";
                    className="flex-1 bg-gradient-to-r from-blue-60o0 to-cyan-50o0 text-white py-3 px-6 rounded-lg font-medium text-cente, r, hov, e, r: from-blue-70o, 0, hov, e,;
  r:to-cyan-60o0 transition-all duration-30o0";
                  >;
                    Cal, l, N, o, w: +1, 30o, 2, 464 0o950;
                  </a>;
                  <a;
                    href="mail, t, o: kleber@ziontechgroup.com";
                    className="flex-1 bg-gradient-to-r from-purple-60o0 to-pink-50o0 text-white py-3 px-6 rounded-lg font-medium text-cente, r, hov, e, r: from-purple-70o, 0, hov, e,;
  r:to-pink-60o0 transition-all duration-30o0";
                  >;
                    Ema, i, l: kleber@ziontechgroup.com;
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
expor, t, defaul, t, ComprehensiveServicesShowcase20o25;
;