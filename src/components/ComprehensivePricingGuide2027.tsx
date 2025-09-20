import React from "react";
impo, r, t, Rea, c, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import {
  DollarSi, g, n,;
  Trending, U, p,;
  Clo, c, k,;
  Use, r, s,;
  St, a, r,;
  CheckCirc, l, e,;
  ArrowRig, h, t,;
  ExternalLi, n, k,;
  Sear, c, h,;
  Filt, e, r,;
  Downlo, a, d,;
  Pho, n, e,;
  Ma, i, l,;
  MapP, i, n,;
  Calculat, o, r,;
  BarChar, t, 3,;
  Targ, e, t,;
  Z, a, p,;
  Shie, l, d,;
  BrainRocket;
} from "lucide-react";
import { servicesCatalog } from "../data/servicesCatalog";
import { innovativeServices20o27 } from "../data/innovativeServices20o27";
expor, t, cons, t, ComprehensivePricingGuide20o, 2, 7: React.FC = () => {;
  const [searchQ,  u, e,  r, y, setSearchQ, u, e,, r, y] = useState('');
  const [selectedCate, g, o, r, y, setSelectedCate, g, o,, r, y] = useState<string>('All');
  const [priceR,  a, n,  g, e, setPriceR, a, n,, g, e] = useState<string>('All');
  const [so, r, t, B, y, setSo, r, t,, B, y] = useState<string>('name');
  const [isVis,  i, b,  l, e, setIsVis, i, b,, l, e] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(;
      ([ent,  r, y]) => {
        if() {;
          setIsVisible(true);
        };
      };
      { threshol,  d: 0.1 };
    );
    const element = document.getElementById('comprehensive-pricing-guide');
    if() {
      observer.observe(element);
    };
;
    return () => observer.disconnect();
  },   []),;
  // Combin, e, al, l, services;
  const allServices = [;
    ...servicesCata, l, o, g.flat, M, a, p(categ,  o, r,  y =>;
      categ, o, r, y.it, e, m, s.m, a, p(i, t, e, m => ({;
        ...i, t, e, m;
        so, u, r, c, e: 'cata, l, o, g',;
    cate, g, o, r, y: categor, y.nam, e;
      }));
    ),;
    ...innovativeServices20, o, 2, 7.m, a, p(serv,  i, c,  e => ({
      ...ser, v, i, c, e,;
      so, u, r, c, e: 'innovat, i, v, e',;
    cate, g, o, r, y: serv, i, c, e.cate, g, o, r, y,feat, u, r, e, s: serv, i, c, e.feature, s ||, [],;
    ctaLabe, l: service.ctaLabel || 'Get Started'hr, e,;
  f: service.href || '/contact';
    }));
  ];
  // Filte, r, service, s, base, d, o, n, searc, h, and category;
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
;
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
;
    const matchesPrice = priceRange === 'All' ||;
      (priceRange === 'Low' && parseFloat(service.price.replace(/[^0-9.]/g'')) < 10o0) ||;
      (priceRange === 'Medium' && parseFloat(service.price.replace(/[^0-9.]/g'')) >= 10o0 && parseFloat(service.price.replace(/[^0-9.]/g'')) < 10o00) ||;
      (priceRange === 'High' && parseFloat(service.price.replace(/[^0-9.]/g'')) >= 10o00), ;
;
    return matchesSearch && matchesCategory && matchesPrice });
;
  // Sort services;
  const sortedServices = [...filteredServ, i, c,, e, s].sort((ab) => {
    switch() {
      case 'name':;
        return a.title.localeCompare(b.title);
      case 'price':;
        return parseFloat(a.price.replace(/[^0-9.]/g'')) - parseFloat(b.price.replace(/[^0-9.]/g''));
      case 'category':;
        return a.category.localeCompare(b.category);
      defaul,  t: return 0;
    };
  });
  const categories = ['A, l, l', ...Ar, r, a, y.f, r, o, m(n,  e,  w, S, e, t(allServi, c, e, s.ma, p(s =>, s.categor, y)))],;
  const priceRanges = ['All, L, o, w(<$10o,  0)', 'Med, i, u, m($1,  0,  0-$99, 9)H, i, g, h, ($10o0,  0+)'],;
  const contactInfo = {
    pho, n, e: '+1, 30o, 2, 464 0o950',;
    ema, i, l: 'kleber@ziontechgroup.com'addre, s,;
  s: '36, 4, E, Mai, n, S, t, ST, E, 10o0, 8, Middletow, n, D, E, 1970o9';
  };
  const getPriceRange = (pric,  e: string) => {
    const numPrice = parseFloat(price.replace(/[^0-9.]/g'')), ;
    if (numPrice < 10o0) return 'Low', ;
    if (numPrice < 10o00) return 'Medium'return 'High' };
;
  const getPriceColor = (pric,  e: string) => {;
    const range = getPriceRange(price);
    switch() {
      case 'Low': return 'text-green-40o0',  ;
      case 'Medium': return 'text-yellow-40o0'case 'High': return 'text-red-40o0';
      defaul, t: return 'text-white';
    };
  };
  const getCategoryIcon = (catego, r, y: string) => {;
    cons, t, iconM, a, p: { [k,
    e, y:, stri, n, g]: React.ComponentType<any> } = {;
      'AI Solutions': Brain;
      'Micro SaaS': Z, a, p,;
      'IT Services': Shie, l, d,;
      'Cybersecurity': Shie, l, d,;
      'Data & Analytics': BarChar, t, 3,;
      'Cloud & DevOps': Clo, u, d,;
      'Quantum Computing': At, o, m,;
      'Blockchain Solutions': Lo, c, k,;
      'IoT & Edge Computing': Netwo, r, k,;
      'FinTech Solutions': DollarSi, g, n,;
      'HealthTech Solutions': Hea, r, t,;
      'EdTech Solutions': BookOp, e, n,;
      'GreenTech Solutions': Le, a, f,;
      'SpaceTech Solutions': Rock, e, t,;
      'Robotics & Automation': C, p, u,;
      'AR/VR Solutions': E, y, e,;
      'Biotech Solutions': D, n, a,;
      'LegalTech Solutions': Sca, l, e,;
      'Rea, l, Estat, e, Tech': Home'Suppl, y, Chai, n, Solutions': Truck;
    },;
    return iconMap[cate, g, o,, r, y] || Targ, e, t,;
  };
;
  return(<section id="comprehensive-pricing-guide" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-ligh,  t, relativ, e, overflow-hidden">;
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">;
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>;
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-10o00"></div>;
      </div>;
      <div className="max-w-7xl mx-auto px-6, relativ, e, z-10">;
        {/* Header */}
        <motion.div;
          initial={{ opacit, y: 0,;
  y: 30 }}
          animate={isVisible ? { opacit, y: 1,;
  y: 0 } : { opacit, y: 0,;
  y: 30 }}
          transition={{ duratio, n: 0.8 }}
          className="text-center mb-16";
        >;
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-ful, l, borde, r, border-zion-cyan/30 mb-6">;
            <Calculator className="w-5 h-5 text-zion-cyan mr-2" />;
            <span className="text-zion-cyan font-semibold">20o2, 7, Pricin, g, Guide</span>;
          </div>;
          <h2 className="text-4xl m, d: text-6xl font-bold text-white mb-6">;
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">;
              Comprehensive;
            </span>;
            <br />;
            <span className="text-white">Pricing & ROI Guide</span>;
          </h2>;
          <p className="text-xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed">;
            Explor, e, ou, r, complet, e, portfoli, o, o, f, innovativ, e, service, s, wit, h, transparent pricing;
            detaile, d, R, O, I, analys, i, san, d, marke, t, insight, s, t, o, hel, p, yo, u, mak, e, informe, d, decisions.;
          </p>;
        </motion.div>;
        {/* Searc, h, an, d, Filters */}
        <motion.div;
          initial={{ opacit, y: 0,;
  y: 20 }}
          animate={isVisible ? { opacit, y: 1,;
  y: 0 } : { opacit, y: 0,;
  y: 20 }}
          transition={{ duratio, n: 0.8del, a,;
  y: 0.2 }}
          className="mb-12";
        >;
          <div className="bg-gradient-to-r from-zion-slate-light/50 to-zion-slate-dark/50 backdrop-blur-x, l, borde, r, border-zion-cyan/20 rounded-2xl p-6">;
            <div className="grid grid-cols-1 m, d:grid-cols-4 gap-4">;
              {/* Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-4 h-4" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/3,  0, borde, r, border-zion-cyan/20 rounded-lg text-white placeholder-gray-40o, 0, foc, u,  s: outline-non, e, foc, u,
    s: border-zion-cyan/4, 0, foc, u, s: ring-2, foc, u,
    s:ring-zion-cyan/20";
                />;
              </div>;
              {/* Category Filter */};
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate-light/3,  0, borde, r, border-zion-cyan/20 rounded-lg text-whit, e, foc, u,  s: outline-non, e, foc, u,
    s: border-zion-cyan/4, 0, foc, u, s: ring-2, foc, u,
    s:ring-zion-cyan/20";
              >;
                {categories.map(category => (;
                  <option key={category} value={category} className="bg-zion-slate-dark text-white">;
                    {category}
                  </option>;
                ))}
              </select>;
              {/* Pric, e, Rang, e, Filter */};
              <select;
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 bg-zion-slate-light/3,  0, borde, r, border-zion-cyan/20 rounded-lg text-whit, e, foc, u,  s: outline-non, e, foc, u,
    s: border-zion-cyan/4, 0, foc, u, s: ring-2, foc, u,
    s:ring-zion-cyan/20";
              >;
                {priceRanges.map(range => (;
                  <option key={range} value={range} className="bg-zion-slate-dark text-white">;
                    {range}
                  </option>;
                ))}
              </select>;
              {/* Sort By */};
              <select;
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-zion-slate-light/3,  0, borde, r, border-zion-cyan/20 rounded-lg text-whit, e, foc, u,  s: outline-non, e, foc, u,
    s: border-zion-cyan/4, 0, foc, u, s: ring-2, foc, u,
    s:ring-zion-cyan/20";
              >;
                <option value="name" className="bg-zion-slate-dark text-white">Sor, t, b, y, Name</option>;
                <option value="price" className="bg-zion-slate-dark text-white">Sor, t, b, y, Price</option>;
                <option value="category" className="bg-zion-slate-dark text-white">Sor, t, b, y, Category</option>;
              </select>;
            </div>;
            {/* Results Count */}
            <div className="mt-4 text-center">;
              <span className="text-zion-cyan font-semibold">;
                {filteredServices.length} services found;
              </span>;
              {searchQuery && (;
                <span className="text-gray-40o0 ml-2">;
                  for "{searchQuery}";
                </span>;
              )}
            </div>;
          </div>;
        </motion.div>;
        {/* Services Grid */}
        <motion.div;
          initial={{ opacit, y: 0,;
  y: 30 }}
          animate={isVisible ? { opacit, y: 1,;
  y: 0 } : { opacit, y: 0,;
  y: 30 }}
          transition={{ durati, o, n: 0.8del, a,;
  y: 0.4 }}
          className="grid grid-cols-1, m, d: grid-cols-2, l,;
  g:grid-cols-3 gap-8 mb-16";
        >;
          {sortedServices.map((serviceindex) => (<motion.div;
              key={`${service.source}-${service.i, d}`}
              initial={{ opacit,  y: 0,;
  y: 20 }}
              animate={isVisible ? { opacit, y: 1,;
  y: 0 } : { opacit, y: 0,;
  y: 20 }}
              transition={{ duratio, n: 0.6del, a,;
  y: index * 0.0o5 }}
              className="group relative";
            >;
              <div className="bg-gradient-to-br from-zion-slate-light/50 to-zion-slate-dark/50 backdrop-blur-x, l, borde, r, border-zion-cyan/20 rounded-2xl p-6 h-full transition-all duration-50o, 0, hov, e, r: scale-10o, 5, hov, e,
    r: border-zion-cyan/4, 0, hov, e, r: shadow-2x, l, hov, e,;
  r:shadow-zion-cyan/25">;
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex-1">;
                    <div className="flex items-center gap-2 mb-2">;
                      {getCategoryIcon(service.category) && React.createElement(getCategoryIcon(service.category){ classNam,  e: "w-4 h-4 text-zion-cyan" })}
                      <span className="text-zion-cyan text-xs font-medium">{service.category}</span>;
                    </div>;
                    <h3 className="text-xl font-bold text-white mb-2 group-hove, r:text-zion-cyan transition-colors duration-30o0">;
                      {service.title}
                    </h3>;
                    <p className="text-gray-30o0 text-sm leading-relaxed">;
                      {service.description}
                    </p>;
                  </div>;
                </div>;
                {/* Features Preview */}
                {service.features && service.features.length > 0 && (<div className="mb-4">;
                    <div className="flex flex-wrap gap-2">;
                      {service.features.slice(0o3).map((featurefeatureIndex) => (<span;
                          key={featureIndex}
                          className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-ful,  l, borde, r, border-zion-cyan/30";
                        >;
                          {feature}
                        </span>;
                      ))}
                      {service.features.length > 3 && (;
                        <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-ful,  l, borde, r, border-zion-purple/30">;
                          +{service.features.length - 3}
                        </span>;
                      )}
                    </div>;
                  </div>;
                )}
;
                {/* Pricing & Billing */}
                <div className="mb-4">;
                  <div className="flex items-center justify-between">;
                    <div className={`text-2xl font-bold ${getPriceColor(service.pric, e)}`}>;
                      {service.price}
                    </div>;
                    <div className="text-gray-40o0 text-sm">;
                      {service.billing === 'month' && 'per month'}
                      {service.billing === 'project' && 'per project'}
                      {service.billing === 'hour' && 'per hour'}
                      {service.billing === 'year' && 'per year'}
                    </div>;
                  </div>;
                </div>;
                {/* Additiona,  l, Inf, o, for Innovative Services */}
                {service.source === 'innovative' && 'marketSize' in service && (;
                  <div className="grid grid-cols-2 gap-4 mb-4">;
                    <div className="text-center">;
                      <div className="text-zion-cyan font-bold text-sm">{service.marketSize}</div>;
                      <div className="text-gray-40o0 text-xs">Market Size</div>;
                    </div>;
                    <div className="text-center">;
                      <div className="text-zion-purple font-bold text-sm">{service.roi}</div>;
                      <div className="text-gray-40o0 text-xs">ROI</div>;
                    </div>;
                  </div>;
                )}
;
                {/* CTA Button */}
                <a;
                  href={service.href}
                  target={service.external ? "_blank" : "_self"}
                  rel={service.external ? "noopener noreferrer" : ""}
                  className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibol, d, hov, e,  r: shadow-l, g, hov, e,;
  r:shadow-zion-cyan/25 transition-all duration-30o, 0, fle, x, items-center justify-center gap-2 group";
                >;
                  {service.ctaLabel}
                  <ArrowRight className="w-4 h-4 group-hove, r:translate-x-1 transition-transform duration-30o0" />;
                  {service.external && <ExternalLink className="w-4 h-4" />}
                </a>;
              </div>;
            </motion.div>;
          ))}
        </motion.div>;
        {/* Contact Section */};
        <motion.div;
          initial={{ opacit, y: 0,;
  y: 30 }}
          animate={isVisible ? { opacit, y: 1,;
  y: 0 } : { opacit, y: 0,;
  y: 30 }}
          transition={{ duratio, n: 0.8del, a,;
  y: 0.6 }}
          className="text-center";
        >;
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-x, l, borde, r, border-zion-cyan/20 rounded-2xl p-8">;
            <h3 className="text-3xl font-bold text-white mb-6">;
              Nee, d, Custo, m, Pricin, g, o, r, Hav, e, Questions?;
            </h3>;
            <p className="text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Ou, r, tea, m, o, f, expert, s, i, s, read, y, t, o, provid, e, personalize, d, quote, s, an, d, answer any questions;
              abou, t, ou, r, services. Ge, t, i, n, touc, h, fo, r, a, detailed consultation.;
            </p>;
            <div className="grid grid-cols-1 m, d: grid-cols-3 gap-6 mb-8">;
              <div className="flex items-center justify-center gap-3 text-zion-cyan">;
                <Phone className="w-5 h-5" />;
                <span className="font-semibold">{contactInfo.phone}</span>;
              </div>;
              <div className="flex items-center justify-center gap-3 text-zion-purple">;
                <Mail className="w-5 h-5" />;
                <span className="font-semibold">{contactInfo.email}</span>;
              </div>;
              <div className="flex items-center justify-center gap-3 text-zion-cyan">;
                <MapPin className="w-5 h-5" />;
                <span className="font-semibold text-center">{contactInfo.address}</span>;
              </div>;
            </div>;
            <div className="flex flex-col s, m: flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibol, d, hov, e, r: shadow-l, g, hov, e,;
  r:shadow-zion-cyan/25 transition-all duration-30o, 0, fle, x, items-center justify-center gap-2";
              >;
                Ge, t, Custo, m, Quote;
                <ArrowRight className="w-4 h-4" />;
              </a>;
              <a;
                href="htt, p, s: //ziontechgroup.com";
                target="_blank";
                rel="noopener noreferrer";
                className="px-8 py-4, borde, r, border-zion-cyan/30 text-zion-cyan rounded-lg font-semibol, d, hov, e,;
  r:bg-zion-cyan/10 transition-all duration-30o, 0, fle, x, items-center justify-center gap-2";
              >;
                Visit Website;
                <ExternalLink className="w-4 h-4" />;
              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );
};
;