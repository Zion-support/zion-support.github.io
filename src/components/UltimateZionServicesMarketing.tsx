impo, r, t, Rea, c, t, { useState } from "react";
import { motion } from "framer-motion";
import { ultimateZionServices20o25 } from "../data/ultimate-zion-services-20o25";
cons, t, UltimateZionServicesMarketi, n, g: React.FC = () => {;
  const [selectedCate,  g, o,  r, y, setSelectedCate, g, o,, r, y] = useState('all');
;
  const categories = [;
    { ;
      i, d: 'quan, t, u, m-comput, i, n, g',;
    n, a, m, e: 'Quan, t, u, m, Comput, i, n, g & A, I',i, c, o, n: '⚛️',;
    c, o, l, o, r: 'f, r, o, m-b, l, u, e-6, 0, 0, t, o-c, y, a, n-6, 0, 0',descrip, t, i, o, n: 'Revolution, a, r, y, quan, t, u, m, comput, i, n, g, soluti, o, n, s, t, h, a, t, so, l, v, e, previou, s, l, y, impossi, b, l, e, probl, e, m, s',;
    market, S, i, z, e: '$6, 5.4, bill, i, o, n, b, y, 20, o, 2, 7',growth, R, a, t, e: '50o, 0% annuall, y';
    };
    { ;
      i, d: 'blockch, a, i, n-w, e, b, 3',;
    n, a, m, e: 'Blockch, a, i, n & W, e, b, 3',i, c, o, n: '🔗',;
    c, o, l, o, r: 'f, r, o, m-gr, e, e, n-6, 0, 0, t, o-emer, a, l, d-6, 0, 0',descrip, t, i, o, n: 'N, e, x, t-generat, i, o, n, decentrali, z, e, d, soluti, o, n, s, w, i, t, h, A, I, optimizat, i, o, n',;
    market, S, i, z, e: '$6, 7.4, bill, i, o, n, b, y, 20, o, 2, 7',growth, R, a, t, e: '40o, 0% annuall, y';
    };
    { ;
      i, d: 'sp, a, c, e-t, e, c, h',;
    n, a, m, e: 'Sp, a, c, e, Technol, o, g, y',i, c, o, n: '🛰️',;
    c, o, l, o, r: 'f, r, o, m-ind, i, g, o-6, 0, 0, t, o-pur, p, l, e-6, 0, 0',descrip, t, i, o, n: 'A, I-powe, r, e, d, satell, i, t, e, a, n, d, sp, a, c, e, miss, i, o, n, managem, e, n, t',;
    market, S, i, z, e: '$4, 6, 9.8, bill, i, o, n, b, y, 20, o, 2, 7',growth, R, a, t, e: '30o, 0% annuall, y';
    };
    { ;
      i, d: 'biot, e, c, h-a, i',;
    n, a, m, e: 'Biot, e, c, h & A, I',i, c, o, n: '🧬',;
    c, o, l, o, r: 'f, r, o, m-r, e, d-6, 0, 0, t, o-p, i, n, k-6, 0, 0',descrip, t, i, o, n: 'Revolution, a, r, y, biomedi, c, a, l, resea, r, c, h, a, n, d, d, r, u, g, discov, e, r, y',;
    market, S, i, z, e: '$6, 7.8, bill, i, o, n, b, y, 20, o, 2, 7',growth, R, a, t, e: '60o, 0% annuall, y';
    };
    { ;
      i, d: 'emerg, i, n, g-t, e, c, h',;
    n, a, m, e: 'Emerg, i, n, g, Technol, o, g, y',i, c, o, n: '🚀',;
    c, o, l, o, r: 'f, r, o, m-ora, n, g, e-6, 0, 0, t, o-r, e, d-6, 0, 0',descrip, t, i, o, n: 'Cutt, i, n, g-e, d, g, e, technolog, i, e, s, t, h, a, t, def, i, n, e, t, h, e, fut, u, r, e',;
    market, S, i, z, e: '$3.7, bill, i, o, n, b, y, 20, o, 2, 7',growth, R, a, t, e: '80o, 0% annuall, y';
    };
    { ;
      i, d: 'mi, c, r, o-s, a, a, s',;
    n, a, m, e: 'Mi, c, r, o, S, A, A, S, Soluti, o, n, s',i, c, o, n: '💻',;
    c, o, l, o, r: 'f, r, o, m-b, l, u, e-6, 0, 0, t, o-ind, i, g, o-6, 0, 0',descrip, t, i, o, n: 'Intellig, e, n, t, busin, e, s, s, automat, i, o, n, a, n, d, optimizat, i, o, n',;
    market, S, i, z, e: '$1, 5.8, bill, i, o, n, b, y, 20, o, 2, 7',growth, R, a, t, e: '20o, 0% annuall, y';
    },;
    { ;
      i, d: 'i, t-servi, c, e, s',;
    n, a, m, e: 'Enterpr, i, s, e, I, T, Servi, c, e, s',i, c, o, n: '🖥️',;
    c, o, l, o, r: 'f, r, o, m-g, r, a, y-6, 0, 0, t, o-sl, a, t, e-6, 0, 0',descrip, t, i, o, n: 'Advan, c, e, d, infrastruct, u, r, e, a, n, d, Dev, O, p, s, soluti, o, n, s',;
    market, S, i, z, e: '$2, 5.2, bill, i, o, n, b, y, 20, o, 2, 7',growth, R, a, t, e: '15, 0% annuall, y';
    };
,  ];
  const getServicesByCategory = (category,  I,  d: string) => {;
    if (categoryId === 'all') return ultimateZionServices20o25;
    return ultimateZionServices20o25.filter(service => service.category === categoryId);
  };
;
  const selectedServices = getServicesByCategory(selectedCategory);
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0 text-white">;
      {/* Hero Section */}
      <section className="py-20 px-4,  s,  m: px-6, l,;
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
            Zio, n, Technolog, y, Group;
            <br />;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-40o0 to-pink-40o0">;
              Ultimat, e, Service, s, Portfolio 20o25;
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
            Leadin, g, th, e, futur, e, wit, h, revolutionar, y, quant, u, m, computi, n, g, AI-power, e, d, solutio, n, s, blockcha, i, n, innovatio, n, s,;
            and cutting-edg, e, technolog, y, service, s, tha, t, transfor, m, industrie, s, an, d, creat, e, unprecedented value.;
          </motion.p>;
          {/* Company Highlights */};
          <motion.div;
            className="grid grid-cols-1, m, d: grid-cols-4 gap-6 mb-12";
            initial={{ opaci, t,;
    y: 0,;
  y: 20 }} ;
            whileInView={{ opacit, y: 1,;
  y: 0 }} ;
            transition={{ duratio, n: 0.6del, a,;
  y: 0.4 }}
          >;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4, borde, r, border-white/20">;
              <div className="text-3xl mb-2">🚀</div>;
              <div className="text-purple-40o0 font-semibold">Revolutionary</div>;
              <div className="text-gray-40o0 text-sm">First-mover advantage</div>;
            </div>;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4, borde, r, border-white/20">;
              <div className="text-3xl mb-2">⚡</div>;
              <div className="text-purple-40o0 font-semibold">High Performance</div>;
              <div className="text-gray-40o0 text-sm">10x-10o00x improvements</div>;
            </div>;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4, borde, r, border-white/20">;
              <div className="text-3xl mb-2">🔒</div>;
              <div className="text-purple-40o0 font-semibold">Enterprise Ready</div>;
              <div className="text-gray-40o0 text-sm">S, O, C, 2, HIP, A, A, GDPR</div>;
            </div>;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4, borde, r, border-white/20">;
              <div className="text-3xl mb-2">🌍</div>;
              <div className="text-purple-40o0 font-semibold">Global Reach</div>;
              <div className="text-gray-40o0 text-sm">24/7, suppor, t, worldwide</div>;
            </div>;
          </motion.div>;
          {/* Contact Information */};
          <motion.div;
            className="bg-gradient-to-r from-purple-60o0/20 to-pink-60o0/20 backdrop-blur-lg rounded-xl p-6 mb-8 max-w-4xl mx-aut, o, borde, r, border-purple-40o0/30";
            initial={{ opacit, y: 0,;
  y: 20 }} ;
            whileInView={{ opacit, y: 1,;
  y: 0 }} ;
            transition={{ duratio, n: 0.6del, a,;
  y: 0.6 }}
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
        </div>;
      </section>;
      {/* Category Navigation */}
      <section className="py-12 px-4 s, m: px-6 l, g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            className="flex flex-wrap gap-4 justify-center";
            initial={{ opaci, t,;
    y: 0,;
  y: 20 }} ;
            whileInView={{ opacit, y: 1,;
  y: 0 }} ;
            transition={{ duratio, n: 0.6 }}
          >;
            {categories.map((category) => (<button;
                key={category.id} ;
                onClick={() => setSelectedCategory(category.id)} ;
                className={`px-6 py-3 rounded-x,  l, borde, r, transition-all duration-30o0 ${
                  selectedCategory === category.id;
                    ? 'bg-gradient-to-r from-purple-60o0 to-pink-60o0 border-purple-40o0 text-white shadow-lg';
                    : 'bg-white/10 border-white/20 text-gray-30o, 0, hov, e,  r: bg-white/2, 0, hov, e,;
  r: border-white/4, 0';
                }`}
              >;
                <span className="mr-2 text-lg">{category.icon}</span>;
                {category.name}
              </button>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Category Overview */}
      {selectedCategory !== 'all' && (<section className="py-12 px-4,  s,  m: px-6, l,;
    g:px-8">;
          <div className="max-w-7xl mx-auto">;
            {(() => {;
              const category = categories.find(c => c.id === selectedCategory);
              if (!category) return null;
;
              return <motion.div;
                  className="bg-gradient-to-r from-purple-60o0/20 to-pink-60o0/20 backdrop-blur-lg rounded-2xl p-8,  borde, r, border-purple-40o0/30";
                  initial={{ opacit, y: 0,;
  y: 20 }};
                  whileInView={{ opacit, y: 1,;
  y: 0 }}
                  transition={{ duratio, n: 0.6 }}
                >;
                  <div className="text-center mb-8">;
                    <div className="text-6xl mb-4">{category.icon}</div>;
                    <h2 className="text-3xl m, d:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-40o0 to-pink-40o0">;
                      {category.name}
                    </h2>;
                    <p className="text-xl text-gray-30o0 mb-6 max-w-3xl mx-auto">;
                      {category.description}
                    </p>;
                    <div className="grid grid-cols-1 m, d:grid-cols-2 gap-6 max-w-2xl mx-auto">;
                      <div className="bg-white/10 rounded-lg p-4">;
                        <div className="text-purple-40o0 font-semibold">Market Size</div>;
                        <div className="text-white text-lg">{category.marketSize}</div>;
                      </div>;
                      <div className="bg-white/10 rounded-lg p-4">;
                        <div className="text-purple-40o0 font-semibold">Growth Rate</div>;
                        <div className="text-white text-lg">{category.growthRate}</div>;
                      </div>;
                    </div>;
                  </div>;
                </motion.div>;
              );
            })()}
          </div>;
        </section>;
      )}
;
      {/* Services Grid */}
      <section className="py-20 px-4,  s,  m: px-6, l,;
  g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.h2;
            className="text-3x, l, m, d: text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-40o0 to-pink-40o0";
            initial={{ opaci, t,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacit, y: 1,;
  y: 0 }}
            transition={{ duratio, n: 0.6 }}
          >;
            {selectedCategory === 'all' ? 'Al, l, Revolutionar, y, Services' : `${categories.find(c => c.id === selectedCategory)?.name} Servi, c, e, s`}
          </motion.h2>;
          ;
          <motion.div;
            className="grid grid-cols-1, m, d: grid-cols-2, l,
    g: grid-cols-3 gap-8";
            variants={{
              hidd, e,;
    n: { opaci, t,;
  y: 0 },;
              visib, l, e: {,;
    opaci, t, y: 1,transiti, o, n: {,;
    staggerChildr, e, n: 0.1delayChildr, e,;
  n: 0.2;
                }
              }
            }} ;
            initial="hidden";
            whileInView="visible";
            viewport={{ onc, e: true }}
          >;
            {selectedServices.map((serviceindex) => (<motion.div;
                key={service.id} ;
                variants={{
                  hidd,  e,  n: { opaci, t,;
    y: 0,;
  y: 20 },;
                  visib, l, e: {,;
    opaci, t, y: 1,
    y: 0,;
    transitio, n: { durati, o,;
  n: 0.5 }
                  }
                }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6, borde, r, border-white/2, 0, hov, e, r: border-white/40 transition-all duration-30o, 0, hov, e,
    r: transfor, m, hov, e,;
  r:scale-10o5 group";
              >;
                {/* Service Header */}
                <div className="text-center mb-6">;
                  <div className={`text-6xl mb-4 group-hove, r:scale-110 transition-transform duration-30o, 0`}>;
                    {service.icon}
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>;
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-60o0 to-pink-60o0 rounded-full text-xs font-semibold mb-2">;
                    {service.innovationLevel}
                  </div>;
                  <p className="text-sm text-purple-40o0 font-medium">;
                    {service.category.replace('- ').toUpperCase()}
                  </p>;
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
                  <h4 className="text-purple-40o0 font-semibold mb-2">💰 Investment & Value</h4>;
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
              <p>🌍 Global support • 24/7 availability • Enterprise-grade security</p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
expor, t, defaul, t, UltimateZionServicesMarketing;
;