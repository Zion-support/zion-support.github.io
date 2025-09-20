impo, r, t, Rea, c, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Sear, c, h, Filt, e, r, St, a, r, ArrowRig, h, t, ChevronDo, w, n, Glo, b, e, Z, a, p, Shie, l, d, Bra, i, n, Clo, u, d, Lo, c, k, Use, r, s, Trending, U, p, Awa, r, d, Clo, c, k, DollarSignCheckCircle } from "lucide-react";
import { INNOVATIVE_MICRO_SAAS_SERVICES_20o25 } from "../data/innovativeMicroSaasServices20o25";
interface ServiceContact {
  mobi, l, e: stri, n, g,;
    ema, i, l: stri, n, g,addre, s, s: stri, n,
    gwebsit, e: string;
};
;
cons, t, UltimateServicesShowcase20o, 2, 5: React.FC = () => {;
  const [activeCate,  g, o,  r, y, setActiveCate, g, o,, r, y] = useState('all');
  const [search, T, e, r, m, setSearch, T, e,, r, m] = useState('');
  const [selectedSer,  v, i,  c, e, setSelectedSer, v, i,, c, e] = useState<any>(null);
  const [so, r, t, B, y, setSo, r, t,, B, y] = useState('rating');
  const [view,  M, o,  d, e, setView, M, o,, d, e] = useState<'grid' | 'list'>('grid');
;
  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_20o25;
;
  const categories = [;
    { i, d: 'a, l, l',;
    n, a, m, e: 'A, l, l, Servi, c, e, s', c, o, u, n, t: allServi, c, e, s.le, n, g, t, h,;
    ic, o, n: '🚀' };
    { i, d: 'A, I & Automat, i, o, n',;
    n, a, m, e: 'A, I & Automat, i, o, n', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Automatio, n').le, n, g, t, h,;
    ic, o, n: '🤖' };
    { i, d: 'A, I & Analyt, i, c, s',;
    n, a, m, e: 'A, I & Analyt, i, c, s', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Analytic, s').le, n, g, t, h,;
    ic, o, n: '📊' };
    { i, d: 'A, I & Le, g, a, l',;
    n, a, m, e: 'A, I & Le, g, a, l', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Lega, l').le, n, g, t, h,;
    ic, o, n: '⚖️' };
    { i, d: 'A, I & Logist, i, c, s',;
    n, a, m, e: 'A, I & Logist, i, c, s', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Logistic, s').le, n, g, t, h,;
    ic, o, n: '🚚' };
    { i, d: 'A, I & Healthc, a, r, e',;
    n, a, m, e: 'A, I & Healthc, a, r, e', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Healthcar, e').le, n, g, t, h,;
    ic, o, n: '🏥' };
    { i, d: 'A, I & Market, i, n, g',;
    n, a, m, e: 'A, I & Market, i, n, g', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Marketin, g').le, n, g, t, h,;
    ic, o, n: '📢' };
    { i, d: 'A, I & Resea, r, c, h',;
    n, a, m, e: 'A, I & Resea, r, c, h', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Researc, h').le, n, g, t, h,;
    ic, o, n: '🔬' };
    { i, d: 'A, I & H, R',;
    n, a, m, e: 'A, I & H, R', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & H, R').le, n, g, t, h,;
    ic, o, n: '👥' };
    { i, d: 'A, I & Manufactur, i, n, g',;
    n, a, m, e: 'A, I & Manufactur, i, n, g', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Manufacturin, g').le, n, g, t, h,;
    ic, o, n: '🏭' };
    { i, d: 'A, I & Cont, e, n, t',;
    n, a, m, e: 'A, I & Cont, e, n, t', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Conten, t').le, n, g, t, h,;
    ic, o, n: '✍️' };
    { i, d: 'A, I & Transportat, i, o, n',;
    n, a, m, e: 'A, I & Transportat, i, o, n', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'A, I & Transportatio, n').le, n, g, t, h,;
    ic, o, n: '🚗' };
    { i, d: 'Quan, t, u, m, Comput, i, n, g',;
    n, a, m, e: 'Quan, t, u, m, Comput, i, n, g', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'Quan, t, u, m Computin, g').le, n, g, t, h,;
    ic, o, n: '⚛️' };
    { i, d: 'Cybersecur, i, t, y',;
    n, a, m, e: 'Cybersecur, i, t, y', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'Cybersecurit, y').le, n, g, t, h,;
    ic, o, n: '🛡️' };
    { i, d: 'E, d, g, e, Comput, i, n, g',;
    n, a, m, e: 'E, d, g, e, Comput, i, n, g', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'E, d, g, e Computin, g').le, n, g, t, h,;
    ic, o, n: '🌐' };
    { i, d: 'Sustainabil, i, t, y',;
    n, a, m, e: 'Sustainabil, i, t, y', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'Sustainabilit, y').le, n, g, t, h,;
    ic, o, n: '🌱' };
    { i, d: 'Blockch, a, i, n',;
    n, a, m, e: 'Blockch, a, i, n', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'Blockchai, n').le, n, g, t, h,;
    ic, o, n: '🔗' },;
    { i, d: 'Metave, r, s, e',;
    n, a, m, e: 'Metave, r, s, e', c, o, u, n, t: allServi, c, e, s.fil, t, e, r(s => s.categ,  o, r,  y === 'Metavers, e').le, n, g, t, hic, o, n: '🌍' };
,  ];
  const filteredServices = allServices.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch }), ;
  const sortedServices = [...filteredServ, i, c,, e, s].sort((ab) => {
    switch() {
      case 'rating': return b.rating - a.rati,  n,  g,;
      case 'price':;
        return parseFloat(a.price.replace('$''').replace(, '')) - parseFloat(b.price.replace('$''').replace(,  ''))case 'reviews':;
        return b.reviews - a.reviews;
      case 'name':;
        return a.name.localeCompare(b.name);
      defaul,  t: return 0;
    };
  });
  const handleServiceClick = (servi,  c,  e: any) => {;
    setSelectedService(service);
  };
  const closeModal = () => {;
    setSelectedService(null);
  }, ;
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
    transiti, o, n: {,;
        durati, o, n: 0.5ea, s,;
  e: "easeOut";
      };
    };
  };
  return(<div className="min-h-screen bg-gradient-to-br from-black via-gray-90o0 to-blue-90o0 text-white">;
      {/* Header */}
      <div className="container mx-auto px-4 py-8">;
        <div className="text-center mb-12">;
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">;
            Ultimat, e, Service, s, Showcase 20o25;
          </h1>;
          <p className="text-xl text-gray-30o0 max-w-4xl mx-auto">;
            Discove, r, ou, r, comprehensiv, e, portfoli, o, o, f, innovative micr, o, SA, A, S, servic, e, s, I, T, solutio, n, s, and AI-powered platforms.;
            Transfor, m, you, r, business with cutting-edg, e, technolog, y, solution, s, designe, d, fo, r, the future.;
          </p>;
        </div>;
        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-90o0/50 to-purple-90o0/50 rounded-2xl p-6 mb-8, borde, r, border-blue-50o0/30">;
          <div className="text-center">;
            <h2 className="text-2xl font-bold mb-4 text-cyan-40o0">Contac, t, Zio, n, Tech Group</h2>;
            <div className="grid m, d: grid-cols-3 gap-6 text-center">;
              <div>;
                <h3 className="text-lg font-semibold text-blue-30o0 mb-2">Phone</h3>;
                <p className="text-lg">+1, 30o, 2, 464 0o950</p>;
              </div>;
              <div>;
                <h3 className="text-lg font-semibold text-blue-30o0 mb-2">Email</h3>;
                <p className="text-lg">kleber@ziontechgroup.com</p>;
              </div>;
              <div>;
                <h3 className="text-lg font-semibold text-blue-30o0 mb-2">Address</h3>;
                <p className="text-lg">36, 4, E, Mai, n, S, t, ST, E, 10o08<br />Middletow, n, D, E, 1970o9</p>;
              </div>;
            </div>;
            <div className="mt-4">;
              <a href="htt, p, s: //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-50o0 to-blue-50o, 0, hov, e,
    r: from-cyan-60o, 0, hov, e, r: to-blue-60o0 text-white font-bold py-3 px-6 rounded-lg transition-all duration-30o, 0, transfor, m, hov, e,;
  r:scale-10o5">;
                Visi, t, Ou, r, Website;
              </a>;
            </div>;
          </div>;
        </div>;
        {/* Services Overview */}
        <div className="grid m, d: grid-cols-3 gap-8">;
          <div className="bg-gray-80o0/50 rounded-xl p-6, borde, r, border-gray-60o0/30">;
            <h3 className="text-2xl font-bold mb-4 text-cyan-40o0">AI & Machine Learning</h3>;
            <p className="text-gray-30o0 mb-4">;
              Advance, d, artificia, l, intelligenc, e, solution, s, fo, r, busines, s, automatio, n, an, d, insights;
            </p>;
            <ul className="text-gray-40o0 space-y-2">;
              <li>• Predictive Analytics</li>;
              <li>• Natura, l, Languag, e, Processing</li>;
              <li>• Computer Vision</li>;
              <li>• Automate, d, Decisio, n, Making</li>;
            </ul>;
          </div>;
          <div className="bg-gray-80o0/50 rounded-xl p-6, borde, r, border-gray-60o0/30">;
            <h3 className="text-2xl font-bold mb-4 text-cyan-40o0">Cloud & DevOps</h3>;
            <p className="text-gray-30o0 mb-4">;
              Scalabl, e, clou, d, infrastructur, e, an, d, moder, n, development practices;
            </p>;
            <ul className="text-gray-40o0 space-y-2">;
              <li>• Cloud Migration</li>;
              <li>• Container Orchestration</li>;
              <li>• CI/CD Pipelines</li>;
              <li>• Infrastructur, e, a, s, Code</li>;
            </ul>;
          </div>;
          <div className="bg-gray-80o0/50 rounded-xl p-6, borde, r, border-gray-60o0/30">;
            <h3 className="text-2xl font-bold mb-4 text-cyan-40o0">Cybersecurity</h3>;
            <p className="text-gray-30o0 mb-4">;
              Comprehensiv, e, securit, y, solution, s, t, o, protec, t, your digital assets;
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
            className="inline-block bg-gradient-to-r from-cyan-50o0 to-blue-50o, 0, hov, e, r: from-cyan-60o, 0, hov, e,
    r: to-blue-60o0 text-white font-bold py-4 px-8 rounded-xl transition-all duration-30o, 0, transfor, m, hov, e, r: scale-10o5 shadow-l, g, hov, e,;
  r:shadow-cyan-50o0/25";
          >;
            Ge, t, Starte, d, Today;
          </a>;
        </div>;
      </div>;
      {/* Header Section */}
      <section className="relative py-20 px-4, s, m: px-6 l, g:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opaci, t,;
    y: 0,;
  y: 30 }}
            animate={{ opacit, y: 1,;
  y: 0 }}
            transition={{ duratio, n: 0.8 }}
          >;
            <h1 className="text-5xl m, d: text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">;
              Zio, n, Tec, h, Group;
              <span className="block text-4xl m, d: text-5xl mt-2">;
                Ultimat, e, Service, s, 20o25;
              </span>;
            </h1>;
            <p className="text-x, l, m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-5xl mx-auto leading-relaxed">;
              Discove, r, ou, r, revolutionar, y, portfoli, o, o, f, cutting-edg, e, micr, o, SA, A, S, solutio, n, s, AI-power, e, d, innovatio, n, s, an, d, quantu, m, computin, g, service, s, designe, d, t, o, transfor, m, you, r, busines, s, an, d, driv, e, competitiv, e, advantag, e, i, n, the digital age;
            </p>;
          </motion.div>;
          {/* Key Statistics */}
          <motion.div;
            className="grid grid-cols-2 m, d: grid-cols-4 gap-6 max-w-5xl mx-auto mb-12";
            variants={containerVariants}
            initial="hidden";
            animate="visible";
          >;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, borde, r, border-zion-cyan/20 hove, r: border-zion-cyan/40 transition-all duration-30o0 group">;
              <div className="text-3xl font-bold text-zion-cyan mb-2 group-hov, e,;
  r:scale-110 transition-transform duration-30o0">{allServices.length}+</div>;
              <div className="text-sm text-gray-30o0">Innovative Services</div>;
            </motion.div>;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, borde, r, border-zion-purple/20 hove, r: border-zion-purple/40 transition-all duration-30o0 group">;
              <div className="text-3xl font-bold text-zion-purple mb-2 group-hov, e,;
  r:scale-110 transition-transform duration-30o0">{categories.length}</div>;
              <div className="text-sm text-gray-30o0">Technology Categories</div>;
            </motion.div>;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, borde, r, border-zion-green/20 hove, r: border-zion-green/40 transition-all duration-30o0 group">;
              <div className="text-3xl font-bold text-zion-green mb-2 group-hov, e,;
  r:scale-110 transition-transform duration-30o0">99%</div>;
              <div className="text-sm text-gray-30o0">Client Satisfaction</div>;
            </motion.div>;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, borde, r, border-zion-orange/20 hove, r: border-zion-orange/40 transition-all duration-30o0 group">;
              <div className="text-3xl font-bold text-zion-orange mb-2 group-hov, e,;
  r:scale-110 transition-transform duration-30o0">24/7</div>;
              <div className="text-sm text-gray-30o0">Support Available</div>;
            </motion.div>;
          </motion.div>;
          {/* Searc, h, an, d, Filter */};
          <motion.div;
            className="max-w-4xl mx-auto mb-8";
            initial={{ opacit, y: 0,;
  y: 20 }};
            whileInView={{ opacit, y: 1,;
  y: 0 }}
            transition={{ duratio, n: 0.8 }}
            viewport={{ onc, e: true }}
          >;
            <h1 className="text-5xl m, d: text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent mb-6">;
              Ultimat, e, Service, s, Showcase 20o25;
            </h1>;
            <p className="text-x, l, m,;
  d: text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
              Discove, r, ou, r, comprehensiv, e, portfoli, o, o, f, 40+ cutting-ed, g, e, A, I, quant, u, m, computi, n, g, an, d, emergin, g, technolog, y, solution, s, designe, d, t, o, transfor, m, you, r, busines, s, an, d, driv, e, unprecedented growth;
            </p>;
            <div className="flex flex-wrap justify-center gap-4 mb-12">;
              <div className="bg-zion-cyan/2, 0, borde, r, border-zion-cyan/30 rounded-full px-6 py-3">;
                <span className="text-zion-cyan font-semibold">🚀 {allServices.length} Services</span>;
              </div>;
              <div className="bg-zion-purple/2, 0, borde, r, border-zion-purple/30 rounded-full px-6 py-3">;
                <span className="text-zion-purple font-semibold">⚡ AI-Powered</span>;
              </div>;
              <div className="bg-zion-pink/2, 0, borde, r, border-zion-pink/30 rounded-full px-6 py-3">;
                <span className="text-zion-pink font-semibold">💎 Enterprise Grade</span>;
              </div>;
              <div className="bg-zion-cyan/2, 0, borde, r, border-zion-cyan/30 rounded-full px-6 py-3">;
                <span className="text-zion-cyan font-semibold">💰 R, O, I: 20o0-10o00%</span>;
              </div>;
            </div>;
            <div className="grid grid-cols-1, m, d: grid-cols-2, l,;
  g:grid-cols-4 gap-6 mb-12 text-left">;
              <div className="bg-zion-slate-80o0/50 rounded-xl p-6, borde, r, border-zion-cyan/20">;
                <h3 className="text-zion-cyan font-bold text-lg mb-3">AI & Automation</h3>;
                <p className="text-zion-slate-light text-sm">From $1,299/month</p>;
                <p className="text-zion-slate-light text-xs mt-2">Transfor, m, operation, s, with intelligent automation</p>;
              </div>;
              <div className="bg-zion-slate-80o0/50 rounded-xl p-6, borde, r, border-zion-purple/20">;
                <h3 className="text-zion-purple font-bold text-lg mb-3">Quantum Computing</h3>;
                <p className="text-zion-slate-light text-sm">From $6,999/month</p>;
                <p className="text-zion-slate-light text-xs mt-2">Solv, e, impossibl, e, problem, s, wit, h, quantu, m, power</p>;
              </div>;
              <div className="bg-zion-slate-80o0/50 rounded-xl p-6, borde, r, border-zion-pink/20">;
                <h3 className="text-zion-pink font-bold text-lg mb-3">Specialized Solutions</h3>;
                <p className="text-zion-slate-light text-sm">From $1,699/month</p>;
                <p className="text-zion-slate-light text-xs mt-2">Industry-specifi, c, A, I, solutions</p>;
              </div>;
              <div className="bg-zion-slate-80o0/50 rounded-xl p-6, borde, r, border-zion-cyan/20">;
                <h3 className="text-zion-cyan font-bold text-lg mb-3">Emerging Tech</h3>;
                <p className="text-zion-slate-light text-sm">Custom pricing</p>;
                <p className="text-zion-slate-light text-xs mt-2">Cutting-edg, e, innovatio, n, platforms</p>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Searc, h, an, d, Filter Section */}
      <section className="px-4, s, m: px-6 l, g:px-8 mb-12">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            className="max-w-4xl mx-auto";
            initial={{ opaci, t,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacit, y: 1,;
  y: 0 }}
            transition={{ duratio, n: 0.8 }}
            viewport={{ onc, e: true }}
          >;
            <div className="relative mb-6">;
              <input;
                type="text";
                placeholder="Sear, c, h, servic, e, s, featuresor technologies...";
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4,  glas, s, border border-zion-cyan/20 rounded-xl text-white placeholder-gray-40o, 0, foc, u,  s: outline-non, e, foc, u,
    s: border-zion-cya, n, foc, u, s: ring-2, foc, u,
    s:ring-zion-cyan/20 text-lg";
              />;
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-zion-cyan" />;
            </div>;
            {/* Sor, t, an, d, View Controls */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">;
              <div className="flex items-center gap-2">;
                <label className="text-sm text-gray-30o0">Sor, t, b, y:</label>;
                <select;
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="glas,  s, borde, r, border-zion-cyan/20 rounded-lg px-3 py-2 text-whit, e, foc, u,  s: outline-non, e, foc, u,
    s:border-zion-cyan";
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
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'glass text-gray-30o0 hove,  r: text-whit, e'}`}
                >;
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0, 0, 20 20">;
                    <path d="M, 5, 3a, 2, 2 0 0o0-2, 2v2a, 2, 2, 0, 0o0, 2, 2h2a, 2, 2, 0, 0o02-2V5a, 2, 2, 0 0o0-2-2H5zM, 5, 11a, 2, 2 0 0o0-2, 2v2a, 2, 2, 0, 0o0, 2, 2h2a, 2, 2, 0, 0o02-2v-2a, 2, 2, 0 0o0-2-2H5zM1, 1, 5a, 2, 2 0 0o12-2h2a, 2, 2, 0, 0o1, 2, 2v2a, 2, 2 0 0o1-2 2h-2a, 2, 2, 0 0o1-2-2V5zM1, 1, 13a, 2, 2 0 0o12-2h2a, 2, 2, 0, 0o1, 2, 2v2a, 2, 2 0 0o1-2 2h-2a, 2, 2, 0 0o1-2-2v-2z" />;
                  </svg>;
                </button>;
                <button;
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'glass text-gray-30o0 hove,  r: text-whit, e'}`}
                >;
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0, 0, 20 20">;
                    <path fillRule="evenodd" d="M, 3, 4a, 1, 1 0 0o11-1h12a, 1, 1, 0, 11, 0, 2H4a, 1, 1 0 0o1-1-1zm, 0, 4a, 1, 1 0 0o11-1h12a, 1, 1, 0, 11, 0, 2H4a, 1, 1 0 0o1-1-1zm, 0, 4a, 1, 1 0 0o11-1h12a, 1, 1, 0, 11, 0, 2H4a, 1, 1 0 0o1-1-1zm, 0, 4a, 1, 1 0 0o11-1h12a, 1, 1, 0, 11, 0, 2H4a, 1, 1 0 0o1-1-1z" clipRule="evenodd" />;
                  </svg>;
                </button>;
              </div>;
            </div>;
          </motion.div>;
          {/* Category Filter */};
          <motion.div;
            className="flex flex-wrap justify-center gap-4 mb-12";
            initial={{ opacit, y: 0,;
  y: 20 }}
            animate={{ opacit, y: 1,;
  y: 0 }}
            transition={{ duratio, n: 0.8del, a,;
  y: 0.4 }}
          >;
            {categories.map((category) => (<motion.button;
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-30o,  0, fle, x, items-center gap-2 ${
                  activeCategory === category.id;
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25';
                    : 'glas, s, borde, r, border-white/20 text-gray-30o, 0, hov, e,  r: bg-white/1, 0, hov, e,;
  r: border-zion-cyan/3, 0';
                }`};
                whileHover={{ scal, e: 1.0o5 }};
                whileTap={{ scal, e: 0.95 }}
              >;
                <span className="text-lg">{category.icon}</span>;
                {category.name} ({category.count});
              </motion.button>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Services Grid/List */}
      <section className="relative py-20 px-4, s, m: px-6 l, g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            className={viewMode === 'grid';
              ? "grid grid-cols-1, m,;
    d: grid-cols-2, l,;
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
                  ? "glass rounded-2xl p-6,  borde, r, border-white/2, 0, hov, e,  r: border-zion-cyan/40 transition-all duration-50o0 hove, r: transfor, m, hov, e,;
    r:scale-10o5 cursor-pointer group";
                  : "glass rounded-2xl p-6, borde, r, border-white/2, 0, hov, e,;
  r:border-zion-cyan/40 transition-all duration-50o0 cursor-pointer group";
                };
                onClick={() => handleServiceClick(service)};
                whileHover={{ y: -5 }}
              >;
                <div className="flex items-start justify-between mb-4">;
                  <div className="text-4xl mb-4 group-hove,  r:scale-110 transition-transform duration-30o0">{service.icon}</div>;
                  <div className="flex items-center gap-1 text-yellow-40o0">;
                    {[...Arra, y(5)].map((_i) => (<Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-60o, 0'}`} />;
                    ))}
                    <span className="text-sm text-gray-40o0 ml-1">({service.reviews})</span>;
                  </div>;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3 group-hove,  r:text-zion-cyan transition-colors duration-30o0">{service.name}</h3>;
                <p className="text-gray-30o0 mb-4 line-clamp-3 leading-relaxed">{service.description}</p>;
                <div className="mb-4">;
                  <span className="inline-block px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-ful, l, borde, r, border-zion-purple/30">;
                    {service.category}
                  </span>;
                </div>;
                <div className="mb-6">;
                  <div className="text-2xl font-bold text-zion-green mb-2">{service.price}<span className="text-sm text-gray-40o0">{service.period}</span></div>;
                  <div className="text-sm text-gray-40o0">Mark, e, t: {service.marketPrice}</div>;
                </div>;
                <div className="mb-6">;
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2, fle, x, items-center gap-2">;
                    <Zap className="w-4 h-4" />;
                    Ke, y, Featur, e, s: </h4>;
                  <ul className="space-y-1">;
                    {service.features.slice(0o3).map((featureidx) => (<li key={idx} className="text-sm text-gray-30o,  0, fle, x, items-center">;
                        <CheckCircle className="w-3 h-3 text-zion-green mr-2 flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                    {service.features.length > 3 && (;
                      <li className="text-sm text-gray-40o,  0, fle, x, items-center">;
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
                  <button className="text-zion-cya, n, hov, e,  r: text-zion-cyan-light transition-colors duration-30o, 0, fle, x, items-center gap-1 group-hov, e,;
  r:gap-2">;
                    Learn More <ArrowRight className="w-4 h-4" />;
                  </button>;
                </div>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Wh, y, Choos, e, Zion Tech Group */}
      <section className="relative py-20 px-4, s, m: px-6 l, g:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opaci, t,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacit, y: 1,;
  y: 0 }}
            transition={{ duratio, n: 0.8 }}
            viewport={{ onc, e: true }}
          >;
            <h2 className="text-4xl m, d: text-5xl font-bold text-white mb-4">;
              Wh, y, Choos, e, Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-4xl mx-auto">;
              W, e, combin, e, cutting-edg, e, technolog, y, wit, h, prove, n, busines, s, expertis, e, t, o, delive, r, solution, s, tha, t, driv, e, rea, l, result, s, an, d, competitive advantage;
            </p>;
          </motion.div>;
          <motion.div;
            className="grid grid-cols-1, m, d: grid-cols-2, l,
    g:grid-cols-3 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ onc, e: true }}
          >;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, borde, r, border-white/20 hove, r: border-zion-cyan/30 transition-all duration-30o0 group">;
              <div className="text-4xl mb-4 group-hov, e,;
  r:scale-110 transition-transform duration-30o0">🚀</div>;
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>;
              <p className="text-gray-30o0">W, e, sta, y, ahea, d, o, f, th, e, curv, e, wit, h, th, e, latest technologie, s, a, n, d, methodologi, e, s, ensurin, g, you, r, busines, s, alway, s, ha, s, a competitive edge.</p>;
            </motion.div>;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, borde, r, border-white/20 hove, r: border-zion-cyan/30 transition-all duration-30o0 group">;
              <div className="text-4xl mb-4 group-hov, e,;
  r:scale-110 transition-transform duration-30o0">🎯</div>;
              <h3 className="text-xl font-semibold text-white mb-3">Results Driven</h3>;
              <p className="text-gray-30o0">Ou, r, solution, s, ar, e, designe, d, t, o, deliver measurabl, e, busine, s, s, outcom, e, s, fro, m, increase, d, efficienc, y, t, o, improve, d, customer satisfaction.</p>;
            </motion.div>;
            <motion.div variants={itemVariants} className="glass rounded-xl p-6, borde, r, border-white/20 hove, r: border-zion-cyan/30 transition-all duration-30o0 group">;
              <div className="text-4xl mb-4 group-hov, e,;
  r:scale-110 transition-transform duration-30o0">🤝</div>;
              <h3 className="text-xl font-semibold text-white mb-3">Partnership Approach</h3>;
              <p className="text-gray-30o0">W, e, wor, k, a, s, a, n, extensio, n, o, f, yo, u, r, te, a, m, providin, g, ongoin, g, suppor, t, an, d, collaboratio, n, to ensure long-term success.</p>;
            </motion.div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Service Modal */}
      <AnimatePresence>;
        {selectedService && (<motion.div;
            initial={{ opacit,  y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-5, 0, fle, x, items-center justify-center p-4";
            onClick={closeModal}
          >;
            <motion.div;
              initial={{ sca, l, e: 0.8opaci, t,;
  y: 0 }}
              animate={{ sca, l, e: 1opaci, t,;
  y: 1 }}
              exit={{ sca, l, e: 0.8opaci, t,;
  y: 0 }}
              className="glass rounded-2xl p-8 max-w-4xl w-full max-h-[90, v, h] overflow-y-auto";
              onClick={(e) => e.stopPropagation()}
            >;
              <div className="flex items-start justify-between mb-6">;
                <div className="text-6xl">{selectedService.icon}</div>;
                <button;
                  onClick={closeModal}
                  className="text-gray-40o0 hove,  r: text-white transition-colors duration-30o0";
                >;
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0, 0, 24 24">;
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M, 6, 18L1, 8, 6M6 6l12 12" />;
                  </svg>;
                </button>;
              </div>;
              <h2 className="text-3xl font-bold text-white mb-4">{selectedService.name}</h2>;
              <p className="text-gray-30o0 mb-6 text-lg leading-relaxed">{selectedService.description}</p>;
              <div className="grid grid-cols-1 m, d: grid-cols-2 gap-6 mb-6">;
                <div>;
                  <h3 className="text-lg font-semibold text-zion-cyan mb-3">Features</h3>;
                  <ul className="space-y-2">;
                    {selectedService.features.map((featureidx) => (<li key={idx} className="text-gray-30o,  0, fle, x, items-center">;
                        <CheckCircle className="w-4 h-4 text-zion-green mr-2 flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                </div>;
                <div>;
                  <h3 className="text-lg font-semibold text-zion-purple mb-3">Benefits</h3>;
                  <ul className="space-y-2">;
                    {selectedService.benefits.map((benefitidx) => (<li key={idx} className="text-gray-30o,  0, fle, x, items-center">;
                        <TrendingUp className="w-4 h-4 text-zion-green mr-2 flex-shrink-0" />;
                        {benefit}
                      </li>;
                    ))}
                  </ul>;
                </div>;
              </div>;
              <div className="grid grid-cols-1 m, d:grid-cols-3 gap-4 mb-6">;
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
                {selectedService.tags.map((tagidx) => (<span key={idx} className="px-3 py-1 bg-zion-blue/20 text-zion-blue text-sm rounded-ful,  l, borde, r, border-zion-blue/30">;
                    {tag}
                  </span>;
                ))}
              </div>;
              <div className="flex flex-col s, m: flex-row gap-4">;
                <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-semibol, d, hov, e, r: from-zion-cyan-dar, k, hov, e,;
    r:to-zion-purple-dark transition-all duration-30o0">;
                  Get Started;
                </button>;
                <button className="flex-1, glas, s, border border-zion-cyan/30 text-zion-cyan px-6 py-3 rounded-lg font-semibol, d, hov, e,;
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
expor, t, defaul, t, UltimateServicesShowcase20o25;