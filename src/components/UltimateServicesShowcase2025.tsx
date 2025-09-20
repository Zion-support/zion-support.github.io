impor, t, Reac, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Searc, h, Filte, r, Sta, r, ArrowRigh, t, ChevronDow, n, Glob, e, Za, p, Shiel, d, Brai, n, Clou, d, Loc, k, User, s, TrendingU, p, Awar, d, Cloc, k, DollarSignCheckCircle } from "lucide-react";
import { INNOVATIVE_MICRO_SAAS_SERVICES_20o25 } from "../data/innovativeMicroSaasServices20o25";
interface ServiceContact {
  mobil, e: strin, g,;
    emai, l: strin, g,addres, s: strin, gwebsite: string;
};
;
const UltimateServicesShowcase20o2, 5: React.FC = () => {;
  const [activeCatego,  r, y, setActiveCatego,, ry] = useState('all');
  const [searchTe, r, m, setSearchTe,, rm] = useState('');
  const [selectedServi,  c, e, setSelectedServi,, ce] = useState<any>(null);
  const [sort, B, y, setSort,, By] = useState('rating');
  const [viewMo,  d, e, setViewMo,, de] = useState<'grid' | 'list'>('grid');
;
  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_20o25;
;
  const categories = [;
    { i, d: 'al, l',;
    na, m, e: 'Al, l Service, s', cou, n, t: allService, s.leng, t, h,;
    icon: '🚀' };
    { i, d: 'A, I & Automatio, n',;
    na, m, e: 'A, I & Automatio, n', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Automation').leng, t, h,;
    icon: '🤖' };
    { i, d: 'A, I & Analytic, s',;
    na, m, e: 'A, I & Analytic, s', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Analytics').leng, t, h,;
    icon: '📊' };
    { i, d: 'A, I & Lega, l',;
    na, m, e: 'A, I & Lega, l', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Legal').leng, t, h,;
    icon: '⚖️' };
    { i, d: 'A, I & Logistic, s',;
    na, m, e: 'A, I & Logistic, s', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Logistics').leng, t, h,;
    icon: '🚚' };
    { i, d: 'A, I & Healthcar, e',;
    na, m, e: 'A, I & Healthcar, e', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Healthcare').leng, t, h,;
    icon: '🏥' };
    { i, d: 'A, I & Marketin, g',;
    na, m, e: 'A, I & Marketin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Marketing').leng, t, h,;
    icon: '📢' };
    { i, d: 'A, I & Researc, h',;
    na, m, e: 'A, I & Researc, h', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Research').leng, t, h,;
    icon: '🔬' };
    { i, d: 'A, I & H, R',;
    na, m, e: 'A, I & H, R', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & HR').leng, t, h,;
    icon: '👥' };
    { i, d: 'A, I & Manufacturin, g',;
    na, m, e: 'A, I & Manufacturin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Manufacturing').leng, t, h,;
    icon: '🏭' };
    { i, d: 'A, I & Conten, t',;
    na, m, e: 'A, I & Conten, t', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Content').leng, t, h,;
    icon: '✍️' };
    { i, d: 'A, I & Transportatio, n',;
    na, m, e: 'A, I & Transportatio, n', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'A, I & Transportation').leng, t, h,;
    icon: '🚗' };
    { i, d: 'Quantu, m Computin, g',;
    na, m, e: 'Quantu, m Computin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Quantu, m Computing').leng, t, h,;
    icon: '⚛️' };
    { i, d: 'Cybersecurit, y',;
    na, m, e: 'Cybersecurit, y', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Cybersecurity').leng, t, h,;
    icon: '🛡️' };
    { i, d: 'Edg, e Computin, g',;
    na, m, e: 'Edg, e Computin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Edg, e Computing').leng, t, h,;
    icon: '🌐' };
    { i, d: 'Sustainabilit, y',;
    na, m, e: 'Sustainabilit, y', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Sustainability').leng, t, h,;
    icon: '🌱' };
    { i, d: 'Blockchai, n',;
    na, m, e: 'Blockchai, n', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Blockchain').leng, t, h,;
    icon: '🔗' },;
    { i, d: 'Metavers, e',;
    na, m, e: 'Metavers, e', cou, n, t: allService, s.filte, r(s => s.categor,  y === 'Metaverse').leng, t, hicon: '🌍' };
,  ];
  const filteredServices = allServices.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch }),;
  const sortedServices = [...filteredServic,, es].sort((ab) => {
    switch() {
      case 'rating': return b.rating - a.ratin,  g,;
      case 'price':;
        return parseFloat(a.price.replace('$''').replace(, '')) - parseFloat(b.price.replace('$''').replace(, ''))case 'reviews':;
        return b.reviews - a.reviews;
      case 'name':;
        return a.name.localeCompare(b.name);
      default: return 0;
    };
  });
  const handleServiceClick = (servic,  e: any) => {;
    setSelectedService(service);
  };
  const closeModal = () => {;
    setSelectedService(null);
  },;
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
    transitio, n: {,;
        duratio, n: 0.5eas,;
  e: "easeOut";
      };
    };
  };
  return(<div className="min-h-screen bg-gradient-to-br from-black via-gray-90o0 to-blue-90o0 text-white">;
      {/* Header */}
      <div className="container mx-auto px-4 py-8">;
        <div className="text-center mb-12">;
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">;
            Ultimate, Services, Showcase 20o25;
          </h1>;
          <p className="text-xl text-gray-30o0 max-w-4xl mx-auto">;
            Discover, our, comprehensive portfolio, of, innovative micro SAA, S, service, s, I, T, solution, s, and AI-powered platforms.;
            Transform, your, business with cutting-edge, technology, solutions designed, for, the future.;
          </p>;
        </div>;
        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-90o0/50 to-purple-90o0/50 rounded-2xl p-6 mb-8, border, border-blue-50o0/30">;
          <div className="text-center">;
            <h2 className="text-2xl font-bold mb-4 text-cyan-40o0">Contact, Zion, Tech Group</h2>;
            <div className="grid md: grid-cols-3 gap-6 text-center">;
              <div>;
                <h3 className="text-lg font-semibold text-blue-30o0 mb-2">Phone</h3>;
                <p className="text-lg">+1, 30o2, 464 0o950</p>;
              </div>;
              <div>;
                <h3 className="text-lg font-semibold text-blue-30o0 mb-2">Email</h3>;
                <p className="text-lg">kleber@ziontechgroup.com</p>;
              </div>;
              <div>;
                <h3 className="text-lg font-semibold text-blue-30o0 mb-2">Address</h3>;
                <p className="text-lg">364, E, Main St, STE, 10o08<br />Middletown, DE, 1970o9</p>;
              </div>;
            </div>;
            <div className="mt-4">;
              <a href="http, s: //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hove, r: from-cyan-60o0 hove, r: to-blue-60o0 text-white font-bold py-3 px-6 rounded-lg transition-all duration-30o0, transform, hove,;
  r:scale-10o5">;
                Visit, Our, Website;
              </a>;
            </div>;
          </div>;
        </div>;
        {/* Services Overview */}
        <div className="grid md: grid-cols-3 gap-8">;
          <div className="bg-gray-80o0/50 rounded-xl p-6, border, border-gray-60o0/30">;
            <h3 className="text-2xl font-bold mb-4 text-cyan-40o0">AI & Machine Learning</h3>;
            <p className="text-gray-30o0 mb-4">;
              Advanced, artificial, intelligence solutions, for, business automation, and, insights;
            </p>;
            <ul className="text-gray-40o0 space-y-2">;
              <li>• Predictive Analytics</li>;
              <li>• Natural, Language, Processing</li>;
              <li>• Computer Vision</li>;
              <li>• Automated, Decision, Making</li>;
            </ul>;
          </div>;
          <div className="bg-gray-80o0/50 rounded-xl p-6, border, border-gray-60o0/30">;
            <h3 className="text-2xl font-bold mb-4 text-cyan-40o0">Cloud & DevOps</h3>;
            <p className="text-gray-30o0 mb-4">;
              Scalable, cloud, infrastructure and, modern, development practices;
            </p>;
            <ul className="text-gray-40o0 space-y-2">;
              <li>• Cloud Migration</li>;
              <li>• Container Orchestration</li>;
              <li>• CI/CD Pipelines</li>;
              <li>• Infrastructure, as, Code</li>;
            </ul>;
          </div>;
          <div className="bg-gray-80o0/50 rounded-xl p-6, border, border-gray-60o0/30">;
            <h3 className="text-2xl font-bold mb-4 text-cyan-40o0">Cybersecurity</h3>;
            <p className="text-gray-30o0 mb-4">;
              Comprehensive, security, solutions to, protect, your digital assets;
            </p>;
            <ul className="text-gray-40o0 space-y-2">;
              <li>• Threat Detection</li>;
              <li>• Identity Management</li>;
              <li>• Compliance</li>;
              <li>• Incident Response</li>;
            </ul>;
          </div>;
        </div>;
        {/* CTA Section */}
        <div className="text-center mt-12">;
          <a;
            href="/contact";
            className="inline-block bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hove, r: from-cyan-60o0 hove, r: to-blue-60o0 text-white font-bold py-4 px-8 rounded-xl transition-all duration-30o0, transform, hove, r: scale-10o5 shadow-lg hove,;
  r:shadow-cyan-50o0/25";
          >;
            Get, Started, Today;
          </a>;
        </div>;
      </div>;
      {/* Header Section */}
      <section className="relative py-20 px-4 s, m: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">;
              Zion, Tech, Group;
              <span className="block text-4xl md: text-5xl mt-2">;
                Ultimate, Services, 20o25;
              </span>;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-5xl mx-auto leading-relaxed">;
              Discover, our, revolutionary portfolio, of, cutting-edge, micro, SAA, S, solution, s, AI-powere, d, innovation, s, and, quantum, computing services, designed, to transform, your, business and, drive, competitive advantage, in, the digital age;
            </p>;
          </motion.div>;
          {/* Key Statistics */}
          <motion.div;
            className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-5xl mx-auto mb-12";
            variants={containerVariants}
            initial="hidden";
            animate="visible";
          >;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, border, border-zion-cyan/20 hover: border-zion-cyan/40 transition-all duration-30o0 group">;
              <div className="text-3xl font-bold text-zion-cyan mb-2 group-hove,;
  r:scale-110 transition-transform duration-30o0">{allServices.length}+</div>;
              <div className="text-sm text-gray-30o0">Innovative Services</div>;
            </motion.div>;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, border, border-zion-purple/20 hover: border-zion-purple/40 transition-all duration-30o0 group">;
              <div className="text-3xl font-bold text-zion-purple mb-2 group-hove,;
  r:scale-110 transition-transform duration-30o0">{categories.length}</div>;
              <div className="text-sm text-gray-30o0">Technology Categories</div>;
            </motion.div>;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, border, border-zion-green/20 hover: border-zion-green/40 transition-all duration-30o0 group">;
              <div className="text-3xl font-bold text-zion-green mb-2 group-hove,;
  r:scale-110 transition-transform duration-30o0">99%</div>;
              <div className="text-sm text-gray-30o0">Client Satisfaction</div>;
            </motion.div>;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, border, border-zion-orange/20 hover: border-zion-orange/40 transition-all duration-30o0 group">;
              <div className="text-3xl font-bold text-zion-orange mb-2 group-hove,;
  r:scale-110 transition-transform duration-30o0">24/7</div>;
              <div className="text-sm text-gray-30o0">Support Available</div>;
            </motion.div>;
          </motion.div>;
          {/* Search, and, Filter */};
          <motion.div;
            className="max-w-4xl mx-auto mb-8";
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h1 className="text-5xl md: text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent mb-6">;
              Ultimate, Services, Showcase 20o25;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
              Discover, our, comprehensive portfolio, of, 40+ cutting-edg, e, A, I, quantu, m, computin, g, and, emerging, technology solutions, designed, to transform, your, business and, drive, unprecedented growth;
            </p>;
            <div className="flex flex-wrap justify-center gap-4 mb-12">;
              <div className="bg-zion-cyan/20, border, border-zion-cyan/30 rounded-full px-6 py-3">;
                <span className="text-zion-cyan font-semibold">🚀 {allServices.length} Services</span>;
              </div>;
              <div className="bg-zion-purple/20, border, border-zion-purple/30 rounded-full px-6 py-3">;
                <span className="text-zion-purple font-semibold">⚡ AI-Powered</span>;
              </div>;
              <div className="bg-zion-pink/20, border, border-zion-pink/30 rounded-full px-6 py-3">;
                <span className="text-zion-pink font-semibold">💎 Enterprise Grade</span>;
              </div>;
              <div className="bg-zion-cyan/20, border, border-zion-cyan/30 rounded-full px-6 py-3">;
                <span className="text-zion-cyan font-semibold">💰 RO, I: 20o0-10o00%</span>;
              </div>;
            </div>;
            <div className="grid grid-cols-1 m, d: grid-cols-2 l,;
  g:grid-cols-4 gap-6 mb-12 text-left">;
              <div className="bg-zion-slate-80o0/50 rounded-xl p-6, border, border-zion-cyan/20">;
                <h3 className="text-zion-cyan font-bold text-lg mb-3">AI & Automation</h3>;
                <p className="text-zion-slate-light text-sm">From $1,299/month</p>;
                <p className="text-zion-slate-light text-xs mt-2">Transform, operations, with intelligent automation</p>;
              </div>;
              <div className="bg-zion-slate-80o0/50 rounded-xl p-6, border, border-zion-purple/20">;
                <h3 className="text-zion-purple font-bold text-lg mb-3">Quantum Computing</h3>;
                <p className="text-zion-slate-light text-sm">From $6,999/month</p>;
                <p className="text-zion-slate-light text-xs mt-2">Solve, impossible, problems with, quantum, power</p>;
              </div>;
              <div className="bg-zion-slate-80o0/50 rounded-xl p-6, border, border-zion-pink/20">;
                <h3 className="text-zion-pink font-bold text-lg mb-3">Specialized Solutions</h3>;
                <p className="text-zion-slate-light text-sm">From $1,699/month</p>;
                <p className="text-zion-slate-light text-xs mt-2">Industry-specific, AI, solutions</p>;
              </div>;
              <div className="bg-zion-slate-80o0/50 rounded-xl p-6, border, border-zion-cyan/20">;
                <h3 className="text-zion-cyan font-bold text-lg mb-3">Emerging Tech</h3>;
                <p className="text-zion-slate-light text-sm">Custom pricing</p>;
                <p className="text-zion-slate-light text-xs mt-2">Cutting-edge, innovation, platforms</p>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search, and, Filter Section */}
      <section className="px-4 s, m: px-6 lg:px-8 mb-12">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            className="max-w-4xl mx-auto";
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <div className="relative mb-6">;
              <input;
                type="text";
                placeholder="Searc, h, service, s, featuresor technologies...";
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4, glass, border border-zion-cyan/20 rounded-xl text-white placeholder-gray-40o0 focu,  s: outline-none focu, s: border-zion-cyan focu, s: ring-2 focu, s:ring-zion-cyan/20 text-lg";
              />;
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-zion-cyan" />;
            </div>;
            {/* Sort, and, View Controls */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">;
              <div className="flex items-center gap-2">;
                <label className="text-sm text-gray-30o0">Sort b, y:</label>;
                <select;
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="glass, border, border-zion-cyan/20 rounded-lg px-3 py-2 text-white focu,  s: outline-none focu, s:border-zion-cyan";
                >;
                  <option value="rating">Rating</option>;
                  <option value="price">Price</option>;
                  <option value="reviews">Reviews</option>;
                  <option value="name">Name</option>;
                </select>;
              </div>;
              <div className="flex items-center gap-2">;
                <button;
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'glass text-gray-30o0 hover: text-white'}`}
                >;
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0, 0, 20 20">;
                    <path d="M5, 3a2, 2 0 0o0-2, 2v2a2, 2 0, 0o02, 2h2a2 2, 0, 0o02-2V5a2, 2, 0 0o0-2-2H5zM5, 11a2, 2 0 0o0-2, 2v2a2, 2 0, 0o02, 2h2a2 2, 0, 0o02-2v-2a2, 2, 0 0o0-2-2H5zM11, 5a2, 2 0 0o12-2h2a2, 2, 0 0o12, 2v2a2, 2 0 0o1-2 2h-2a2, 2, 0 0o1-2-2V5zM11, 13a2, 2 0 0o12-2h2a2, 2, 0 0o12, 2v2a2, 2 0 0o1-2 2h-2a2, 2, 0 0o1-2-2v-2z" />;
                  </svg>;
                </button>;
                <button;
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'glass text-gray-30o0 hover: text-white'}`}
                >;
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0, 0, 20 20">;
                    <path fillRule="evenodd" d="M3, 4a1, 1 0 0o11-1h12a1, 1, 0 110, 2H4a1, 1 0 0o1-1-1zm0, 4a1, 1 0 0o11-1h12a1, 1, 0 110, 2H4a1, 1 0 0o1-1-1zm0, 4a1, 1 0 0o11-1h12a1, 1, 0 110, 2H4a1, 1 0 0o1-1-1zm0, 4a1, 1 0 0o11-1h12a1, 1, 0 110, 2H4a1, 1 0 0o1-1-1z" clipRule="evenodd" />;
                  </svg>;
                </button>;
              </div>;
            </div>;
          </motion.div>;
          {/* Category Filter */};
          <motion.div;
            className="flex flex-wrap justify-center gap-4 mb-12";
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.4 }}
          >;
            {categories.map((category) => (<motion.button;
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-30o0, flex, items-center gap-2 ${
                  activeCategory === category.id;
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25';
                    : 'glass, border, border-white/20 text-gray-30o0 hove,  r: bg-white/10 hove,;
  r: border-zion-cyan/30';
                }`};
                whileHover={{ scale: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
              >;
                <span className="text-lg">{category.icon}</span>;
                {category.name} ({category.count});
              </motion.button>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Services Grid/List */}
      <section className="relative py-20 px-4 s, m: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            className={viewMode === 'grid';
              ? "grid grid-cols-1 m,;
    d: grid-cols-2 l,;
  g:grid-cols-3 gap-8";
              : "space-y-6";
            };
            variants={containerVariants}
            initial="hidden";
            animate="visible";
          >;
            {sortedServices.map((serviceindex) => (<motion.div;
                key={service.id};
                variants={itemVariants}
                className={viewMode === 'grid';
                  ? "glass rounded-2xl p-6, border, border-white/20 hove,  r: border-zion-cyan/40 transition-all duration-50o0 hover: transform hove,;
    r:scale-10o5 cursor-pointer group";
                  : "glass rounded-2xl p-6, border, border-white/20 hove,;
  r:border-zion-cyan/40 transition-all duration-50o0 cursor-pointer group";
                };
                onClick={() => handleServiceClick(service)};
                whileHover={{ y: -5 }}
              >;
                <div className="flex items-start justify-between mb-4">;
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-30o0">{service.icon}</div>;
                  <div className="flex items-center gap-1 text-yellow-40o0">;
                    {[...Array(5)].map((_i) => (<Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-60o0'}`} />;
                    ))}
                    <span className="text-sm text-gray-40o0 ml-1">({service.reviews})</span>;
                  </div>;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-30o0">{service.name}</h3>;
                <p className="text-gray-30o0 mb-4 line-clamp-3 leading-relaxed">{service.description}</p>;
                <div className="mb-4">;
                  <span className="inline-block px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full, border, border-zion-purple/30">;
                    {service.category}
                  </span>;
                </div>;
                <div className="mb-6">;
                  <div className="text-2xl font-bold text-zion-green mb-2">{service.price}<span className="text-sm text-gray-40o0">{service.period}</span></div>;
                  <div className="text-sm text-gray-40o0">Marke, t: {service.marketPrice}</div>;
                </div>;
                <div className="mb-6">;
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2, flex, items-center gap-2">;
                    <Zap className="w-4 h-4" />;
                    Key Feature, s: </h4>;
                  <ul className="space-y-1">;
                    {service.features.slice(0o3).map((featureidx) => (<li key={idx} className="text-sm text-gray-30o0, flex, items-center">;
                        <CheckCircle className="w-3 h-3 text-zion-green mr-2 flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                    {service.features.length > 3 && (;
                      <li className="text-sm text-gray-40o0, flex, items-center">;
                        <span className="w-3 h-3 bg-gray-40o0 rounded-full mr-2 flex-shrink-0"></span>;
                        +{service.features.length - 3} more features;
                      </li>;
                    )}
                  </ul>;
                </div>;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center gap-2 text-sm text-gray-40o0">;
                    <Clock className="w-4 h-4" />;
                    {service.estimatedDelivery}
                  </div>;
                  <button className="text-zion-cyan hove,  r: text-zion-cyan-light transition-colors duration-30o0, flex, items-center gap-1 group-hove,;
  r:gap-2">;
                    Learn More <ArrowRight className="w-4 h-4" />;
                  </button>;
                </div>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Why, Choose, Zion Tech Group */}
      <section className="relative py-20 px-4 s, m: px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-4">;
              Why, Choose, Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-4xl mx-auto">;
              We, combine, cutting-edge, technology, with proven, business, expertise to, deliver, solutions that, drive, real results, and, competitive advantage;
            </p>;
          </motion.div>;
          <motion.div;
            className="grid grid-cols-1 m, d: grid-cols-2 l, g:grid-cols-3 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, border, border-white/20 hover: border-zion-cyan/30 transition-all duration-30o0 group">;
              <div className="text-4xl mb-4 group-hove,;
  r:scale-110 transition-transform duration-30o0">🚀</div>;
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>;
              <p className="text-gray-30o0">We, stay, ahead of, the, curve with, the, latest technologies an, d, methodologie, s, ensuring, your, business always, has, a competitive edge.</p>;
            </motion.div>;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, border, border-white/20 hover: border-zion-cyan/30 transition-all duration-30o0 group">;
              <div className="text-4xl mb-4 group-hove,;
  r:scale-110 transition-transform duration-30o0">🎯</div>;
              <h3 className="text-xl font-semibold text-white mb-3">Results Driven</h3>;
              <p className="text-gray-30o0">Our, solutions, are designed, to, deliver measurable busines, s, outcome, s, from, increased, efficiency to, improved, customer satisfaction.</p>;
            </motion.div>;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, border, border-white/20 hover: border-zion-cyan/30 transition-all duration-30o0 group">;
              <div className="text-4xl mb-4 group-hove,;
  r:scale-110 transition-transform duration-30o0">🤝</div>;
              <h3 className="text-xl font-semibold text-white mb-3">Partnership Approach</h3>;
              <p className="text-gray-30o0">We, work, as an, extension, of you, r, tea, m, providing, ongoing, support and, collaboration, to ensure long-term success.</p>;
            </motion.div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Service Modal */}
      <AnimatePresence>;
        {selectedService && (<motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50, flex, items-center justify-center p-4";
            onClick={closeModal}
          >;
            <motion.div;
              initial={{ scal, e: 0.8opacit,;
  y: 0 }}
              animate={{ scal, e: 1opacit,;
  y: 1 }}
              exit={{ scal, e: 0.8opacit,;
  y: 0 }}
              className="glass rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto";
              onClick={(e) => e.stopPropagation()}
            >;
              <div className="flex items-start justify-between mb-6">;
                <div className="text-6xl">{selectedService.icon}</div>;
                <button;
                  onClick={closeModal}
                  className="text-gray-40o0 hover: text-white transition-colors duration-30o0";
                >;
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0, 0, 24 24">;
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6, 18L18, 6M6 6l12 12" />;
                  </svg>;
                </button>;
              </div>;
              <h2 className="text-3xl font-bold text-white mb-4">{selectedService.name}</h2>;
              <p className="text-gray-30o0 mb-6 text-lg leading-relaxed">{selectedService.description}</p>;
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-6">;
                <div>;
                  <h3 className="text-lg font-semibold text-zion-cyan mb-3">Features</h3>;
                  <ul className="space-y-2">;
                    {selectedService.features.map((featureidx) => (<li key={idx} className="text-gray-30o0, flex, items-center">;
                        <CheckCircle className="w-4 h-4 text-zion-green mr-2 flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                </div>;
                <div>;
                  <h3 className="text-lg font-semibold text-zion-purple mb-3">Benefits</h3>;
                  <ul className="space-y-2">;
                    {selectedService.benefits.map((benefitidx) => (<li key={idx} className="text-gray-30o0, flex, items-center">;
                        <TrendingUp className="w-4 h-4 text-zion-green mr-2 flex-shrink-0" />;
                        {benefit}
                      </li>;
                    ))}
                  </ul>;
                </div>;
              </div>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">;
                <div className="glass rounded-lg p-4 text-center">;
                  <div className="text-2xl font-bold text-zion-green">{selectedService.price}</div>;
                  <div className="text-sm text-gray-40o0">{selectedService.period}</div>;
                </div>;
                <div className="glass rounded-lg p-4 text-center">;
                  <div className="text-2xl font-bold text-zion-cyan">{selectedService.rating}</div>;
                  <div className="text-sm text-gray-40o0">Rating</div>;
                </div>;
                <div className="glass rounded-lg p-4 text-center">;
                  <div className="text-2xl font-bold text-zion-purple">{selectedService.roi}</div>;
                  <div className="text-sm text-gray-40o0">ROI</div>;
                </div>;
              </div>;
              <div className="flex flex-wrap gap-4 mb-6">;
                {selectedService.tags.map((tagidx) => (<span key={idx} className="px-3 py-1 bg-zion-blue/20 text-zion-blue text-sm rounded-full, border, border-zion-blue/30">;
                    {tag}
                  </span>;
                ))}
              </div>;
              <div className="flex flex-col sm: flex-row gap-4">;
                <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-semibold hove, r: from-zion-cyan-dark hove,;
    r:to-zion-purple-dark transition-all duration-30o0">;
                  Get Started;
                </button>;
                <button className="flex-1, glass, border border-zion-cyan/30 text-zion-cyan px-6 py-3 rounded-lg font-semibold hove,;
  r: bg-zion-cyan/10 transition-all duration-30o0">;
                  Contact Sales;
                </button>;
              </div>;
            </motion.div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </div>;
  );
},;
export, default, UltimateServicesShowcase20o25;