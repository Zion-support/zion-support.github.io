import React from "react";
impo, r, t, Rea, c, t, { useState } from "react";
import { motion } from "framer-motion";
import { ultimateZionServices20o25 } from "../data/ultimate-zion-services-20o25";
cons, t, UltimateZionServicesShowca, s, e: React.FC = () => {;
  const [selectedCate,  g, o,  r, y, setSelectedCate, g, o,, r, y] = useState('all');
  const [search, T, e, r, m, setSearch, T, e,, r, m] = useState('');
;
  const categories = [;
    { i,   d: 'a, l, l',;
    n, a, m, e: 'A, l, l, Servi, c, e, s', i, c, o, n: '🌟',;
    c, o, l, o, r: 'f, r, o, m-pur, p, l, e-6, 0, 0, t, o-pin, k-60o, 0' };
    { i, d: 'quan, t, u, m-comput, i, n, g',;
    n, a, m, e: 'Quan, t, u, m, Comput, i, n, g', i, c, o, n: '⚛️',;
    c, o, l, o, r: 'f, r, o, m-b, l, u, e-6, 0, 0, t, o-cya, n-60o, 0' };
    { i, d: 'blockch, a, i, n-w, e, b, 3',;
    n, a, m, e: 'Blockch, a, i, n & W, e, b, 3', i, c, o, n: '🔗',;
    c, o, l, o, r: 'f, r, o, m-gr, e, e, n-6, 0, 0, t, o-emeral, d-60o, 0' };
    { i, d: 'sp, a, c, e-t, e, c, h',;
    n, a, m, e: 'Sp, a, c, e, Technol, o, g, y', i, c, o, n: '🛰️',;
    c, o, l, o, r: 'f, r, o, m-ind, i, g, o-6, 0, 0, t, o-purpl, e-60o, 0' };
    { i, d: 'biot, e, c, h-a, i',;
    n, a, m, e: 'Biot, e, c, h & A, I', i, c, o, n: '🧬',;
    c, o, l, o, r: 'f, r, o, m-r, e, d-6, 0, 0, t, o-pin, k-60o, 0' };
    { i, d: 'emerg, i, n, g-t, e, c, h',;
    n, a, m, e: 'Emerg, i, n, g, T, e, c, h', i, c, o, n: '🚀',;
    c, o, l, o, r: 'f, r, o, m-ora, n, g, e-6, 0, 0, t, o-re, d-60o, 0' };
    { i, d: 'mi, c, r, o-s, a, a, s',;
    n, a, m, e: 'Mi, c, r, o, S, A, A, S', i, c, o, n: '💻',;
    c, o, l, o, r: 'f, r, o, m-b, l, u, e-6, 0, 0, t, o-indig, o-60o, 0' },;
    { i, d: 'i, t-servi, c, e, s',;
    n, a, m, e: 'I, T, Servi, c, e, s', i, c, o, n: '🖥️',;
    c, o, l, o, r: 'f, r, o, m-g, r, a, y-6, 0, 0 t, o-slat, e-60o, 0' };
,  ];
  const filteredServices = ultimateZionServices20o25.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch }), ;
  const containerVariants = {
    hidde, n: { opaci, t,;
  y: 0 },;
    visib, l, e: {,;
    opaci, t, y: 1,transiti, o, n: {,;
    staggerChildr, e, n: 0.1delayChildr, e,;
  n: 0.2;
      }
    }
  };
  const itemVariants = {
    hidd, e, n: { opaci, t,;
    y: 0,;
  y: 20 },;
    visib, l, e: {,;
    opaci, t, y: 1,
    y: 0,;
    transitio, n: { durati, o,;
  n: 0.5 };
    };
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0 text-white">;
      {/* Hero Section */}
      <section className="py-20 px-4, s,  m: px-6, l,;
  g:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.h1;
            className="text-4x, l, m, d: text-6xl font-bold mb-6";
            initial={{ opaci, t,;
    y: 0,;
  y: 20 }} ;
            whileInView={{ opacit, y: 1,;
  y: 0 }} ;
            transition={{ duratio, n: 0.6 }}
          >;
            Ultimate;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-40o0 to-pink-40o0">;
              {" "}Zion Technology;
            </span>;
            <br />;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-40o0 to-cyan-40o0">;
              Services 20o25;
            </span>;
          </motion.h1>;
          <motion.p;
            className="text-xl text-gray-30o0 mb-8 max-w-4xl mx-auto";
            initial={{ opacit, y: 0,;
  y: 20 }} ;
            whileInView={{ opacit, y: 1,;
  y: 0 }} ;
            transition={{ duratio, n: 0.6del, a,;
  y: 0.2 }}
          >;
            Discove, r, ou, r, revolutionar, y, portfoli, o, o, f, cutting-edg, e, micr, o, SA, A, S, servic, e, s, quantu, m, computi, n, g, solutio, n, s, ;
            blockcha, i, n, innovatio, n, s, spa, c, e, technolo, g, y, and AI-powere, d, service, s, designe, d, t, o, transfor, m, industries and;
            creat, e, unprecedente, d, valu, e, fo, r, you, r, business.;
          </motion.p>;
          {/* Contact Information */}
          <motion.div;
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8 max-w-4xl mx-aut, o, borde, r, border-white/20";
            initial={{ opacit, y: 0,;
  y: 20 }} ;
            whileInView={{ opacit, y: 1,;
  y: 0 }} ;
            transition={{ duratio, n: 0.6del, a,;
  y: 0.4 }}
          >;
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-40o0 to-pink-40o0">;
              🚀 Read, y, t, o, Transform Your Business?;
            </h3>;
            <div className="grid grid-cols-1 m, d: grid-cols-3 gap-6 text-sm">;
              <div className="text-center">;
                <div className="text-purple-40o0 font-semibold text-lg mb-2">📱 Contact Us</div>;
                <div className="text-gray-30o0">+1, 30o, 2, 464 0o950</div>;
                <div className="text-gray-40o0 text-xs">Available 24/7</div>;
              </div>;
              <div className="text-center">;
                <div className="text-purple-40o0 font-semibold text-lg mb-2">✉️ Email</div>;
                <div className="text-gray-30o0">kleber@ziontechgroup.com</div>;
                <div className="text-gray-40o0 text-xs">Respons, e, withi, n, 2 hours</div>;
              </div>;
              <div className="text-center">;
                <div className="text-purple-40o0 font-semibold text-lg mb-2">🌐 Website</div>;
                <div className="text-gray-30o0">;
                  <a href="htt, p, s: //ziontechgroup.com" target="_blank" rel="noopener noreferrer";
                     className="text-blue-40o, 0, hov, e,;
  r:text-blue-30o0 transition-colors">;
                    ziontechgroup.com;
                  </a>;
                </div>;
                <div className="text-gray-40o0 text-xs">Liv, e, dem, o, available</div>;
              </div>;
            </div>;
            <div className="mt-4 text-center">;
              <div className="text-gray-40o0 text-sm">;
                📍 36, 4, E, Mai, n, S, t, ST, E, 10o0, 8, Middletow, n, D, E, 1970o9;
              </div>;
            </div>;
          </motion.div>;
          {/* Searc, h, an, d, Filter */}
          <motion.div;
            className="flex flex-col m, d: flex-row gap-4 justify-center items-center mb-12";
            initial={{ opaci, t,;
    y: 0,;
  y: 20 }} ;
            whileInView={{ opacit, y: 1,;
  y: 0 }} ;
            transition={{ duratio, n: 0.6del, a,;
  y: 0.6 }}
          >;
            <input;
              type="text";
              placeholder="Searc, h, revolutionar, y, services...";
              value={searchTerm} ;
              onChange={(e) => setSearchTerm(e.target.value)} ;
              className="px-6 py-3 bg-white/1,  0, borde, r, border-white/20 rounded-lg text-white placeholder-gray-40o, 0, foc, u,  s: outline-non, e, foc, u,
    s: border-purple-40o, 0, foc, u, s: ring-2, foc, u,
    s: ring-purple-40o0/20 w-ful, l, m, d:w-80";
            />;
            <div className="flex flex-wrap gap-2">;
              {categories.map((category) => (<button;
                  key={category.id} ;
                  onClick={() => setSelectedCategory(category.id)} ;
                  className={`px-4 py-2 rounded-l,  g, borde, r, transition-all duration-30o0 ${
                    selectedCategory === category.id;
                      ? 'bg-gradient-to-r from-purple-60o0 to-pink-60o0 border-purple-40o0 text-white';
                      : 'bg-white/10 border-white/20 text-gray-30o, 0, hov, e,  r: bg-white/2, 0, hov, e,;
  r: border-white/4, 0';
                  }`}
                >;
                  <span className="mr-2">{category.icon}</span>;
                  {category.name}
                </button>;
              ))}
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="py-20 px-4, s, m: px-6, l,;
  g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            className="grid grid-cols-1, m, d: grid-cols-2, l,
    g:grid-cols-3 gap-8";
            variants={containerVariants} ;
            initial="hidden";
            whileInView="visible";
            viewport={{ onc, e: true }}
          >;
            {filteredServices.map((serviceindex) => (<motion.div;
                key={service.id} ;
                variants={itemVariants} ;
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6,  borde, r, border-white/2, 0, hov, e,  r: border-white/40 transition-all duration-30o, 0, hov, e,
    r: transfor, m, hov, e,;
  r:scale-10o5 group";
              >;
                {/* Service Header */}
                <div className="text-center mb-6">;
                  <div className={`text-6xl mb-4 group-hove, r:scale-110 transition-transform duration-30o, 0`}>;
                    {service.icon}
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>;
                  <p className="text-sm text-purple-40o0 font-medium mb-2">;
                    {service.category.replace('- ').toUpperCase()}
                  </p>;
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-60o0 to-pink-60o0 rounded-full text-xs font-semibold">;
                    {service.innovationLevel}
                  </div>;
                </div>;
                {/* Tagline */}
                <p className="text-gray-30o0 text-sm mb-4 text-center italic">;
                  {service.tagline}
                </p>;
                {/* Description */}
                <p className="text-gray-40o0 text-sm mb-6 leading-relaxed">;
                  {service.description}
                </p>;
                {/* Pricing */}
                <div className="bg-white/5 rounded-lg p-4 mb-6">;
                  <h4 className="text-purple-40o0 font-semibold mb-2">💰 Pricing & Market Value</h4>;
                  <div className="space-y-1 text-sm">;
                    <div className="flex justify-between">;
                      <span className="text-gray-40o0">Month,  l,  y:</span>;
                      <span className="text-green-40o0 font-semibold">{service.pricing.monthly}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-gray-40o0">Year, l, y:</span>;
                      <span className="text-green-40o0 font-semibold">{service.pricing.yearly}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-gray-40o0">Marke, t, Pri, c, e:</span>;
                      <span className="text-blue-40o0 font-semibold">{service.pricing.marketPrice}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-gray-40o0">Set, u, p:</span>;
                      <span className="text-yellow-40o0 font-semibold">{service.pricing.setup}</span>;
                    </div>;
                  </div>;
                </div>;
                {/* RO, I, an, d, Benefits */}
                <div className="mb-6">;
                  <h4 className="text-purple-40o0 font-semibold mb-2">📈 ROI & Benefits</h4>;
                  <div className="bg-gradient-to-r from-green-60o0/20 to-emerald-60o0/20 rounded-lg p-3 mb-3">;
                    <p className="text-green-40o0 text-sm font-semibold">{service.roi}</p>;
                  </div>;
                  <div className="space-y-1">;
                    {service.benefits.slice(0o3).map((benefitidx) => (<div key={idx} className="flex items-center text-sm text-gray-30o0">;
                        <span className="text-green-40o0 mr-2">✓</span>;
                        {benefit}
                      </div>;
                    ))}
                  </div>;
                </div>;
                {/* Technology Stack */}
                <div className="mb-6">;
                  <h4 className="text-purple-40o0 font-semibold mb-2">🛠️ Technology Stack</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {service.technology.slice(0o4).map((techidx) => (<span key={idx} className="px-2 py-1 bg-white/1,  0, rounde, d, text-xs text-gray-30o0">;
                        {tech}
                      </span>;
                    ))}
                  </div>;
                </div>;
                {/* Market Information */}
                {service.marketSize && (;
                  <div className="mb-6">;
                    <h4 className="text-purple-40o0 font-semibold mb-2">🌍 Market Opportunity</h4>;
                    <div className="bg-gradient-to-r from-blue-60o0/20 to-cyan-60o0/20 rounded-lg p-3">;
                      <p className="text-blue-40o0 text-sm font-semibold">;
                        Market Siz,  e: {service.marketSize}
                      </p>;
                    </div>;
                  </div>;
                )}
;
                {/* Tria, l, an, d, Setup */}
                <div className="flex justify-between items-center mb-6 text-sm">;
                  <div className="text-center">;
                    <div className="text-purple-40o0 font-semibold">🆓 Trial</div>;
                    <div className="text-gray-30o0">{service.trialDays} days</div>;
                  </div>;
                  <div className="text-center">;
                    <div className="text-purple-40o0 font-semibold">⚡ Setup</div>;
                    <div className="text-gray-30o0">{service.setupTime}</div>;
                  </div>;
                </div>;
                {/* Cal, l, t, o, Action */}
                <div className="text-center">;
                  <button className="w-full bg-gradient-to-r from-purple-60o0 to-pink-60o, 0, hov, e, r: from-purple-70o, 0, hov, e,
    r: to-pink-70o0 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-30o, 0, transfor, m, hov, e,;
  r:scale-10o5">;
                    🚀 Ge, t, Starte, d, Today;
                  </button>;
                  <p className="text-xs text-gray-40o0 mt-2">;
                    Contac, t, u, s, fo, r, a, personalize, d, demo;
                  </p>;
                </div>;
                {/* Contac, t, Quic, k, Access */}
                <div className="mt-4 text-center">;
                  <div className="text-xs text-gray-40o0">;
                    📞 <a href="t, e, l: +130o24640950" className="text-blue-40o, 0, hov, e,;
  r:text-blue-30o0">;
                      +1, 30o, 2, 464 0o950;
                    </a> |;
                    ✉️ <a href="mail, t, o: kleber@ziontechgroup.com" className="text-blue-40o, 0, hov, e,;
  r:text-blue-30o0">;
                      kleber@ziontechgroup.com;
                    </a>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Botto, m, CT, A, Section */}
      <section className="py-20 px-4, s, m: px-6, l,;
    g:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            className="bg-gradient-to-r from-purple-60o0/20 to-pink-60o0/20 backdrop-blur-lg rounded-2xl p-8, borde, r, border-purple-40o0/30";
            initial={{ opacit, y: 0,;
  y: 20 }};
            whileInView={{ opacit, y: 1,;
  y: 0 }}
            transition={{ duratio, n: 0.6 }}
          >;
            <h2 className="text-3xl m, d: text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-40o0 to-pink-40o0">;
              Read, y, t, o, Lead the Future?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Joi, n, th, e, revolutio, n, an, d, transfor, m, you, r, busines, s, wit, h, cutting-edg, e, technolog, y, solutions.;
              Ou, r, tea, m, o, f, expert, s, i, s, read, y, t, o, hel, p, yo, u, implemen, t, thes, e, game-changing services.;
            </p>;
            <div className="flex flex-co, l, m,;
  d:flex-row gap-4 justify-center">;
              <button className="bg-gradient-to-r from-purple-60o0 to-pink-60o, 0, hov, e, r: from-purple-70o, 0, hov, e,
    r: to-pink-70o0 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-30o, 0, transfor, m, hove, r:scale-10o5">;
                🚀 Schedul, e, a, Consultation;
              </button>;
              <button className="bg-white/1, 0, hov, e,;
  r: bg-white/2, 0, borde, r, border-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-30o0">;
                📋 Vie, w, Ful, l, Portfolio;
              </button>;
            </div>;
            <div className="mt-6 text-sm text-gray-40o0">;
              <p>🌟 Truste, d, b, y, Fortun, e, 50o, 0, companie, s, worldwide</p>;
              <p>🔒 SO, C, 2, Type II certified • HIPAA compliant • GDPR ready</p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
expor, t, defaul, t, UltimateZionServicesShowcase;
;