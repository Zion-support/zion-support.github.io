impor, t, Reac, t, { useState } from "react";
import { motion } from "framer-motion";
import { ultimateZionServices20o25 } from "../data/ultimate-zion-services-20o25";
const UltimateZionServicesShowcas, e: React.FC = () => {;
  const [selectedCatego,  r, y, setSelectedCatego,, ry] = useState('all');
  const [searchTe, r, m, setSearchTe,, rm] = useState('');
;
  const categories = [;
    { i,  d: 'al, l',;
    na, m, e: 'Al, l Service, s', ic, o, n: '🌟',;
    col, o, r: 'fro, m-purpl, e-60, 0 t, o-pink-60o0' };
    { i, d: 'quantu, m-computin, g',;
    na, m, e: 'Quantu, m Computin, g', ic, o, n: '⚛️',;
    col, o, r: 'fro, m-blu, e-60, 0 t, o-cyan-60o0' };
    { i, d: 'blockchai, n-web, 3',;
    na, m, e: 'Blockchai, n & Web, 3', ic, o, n: '🔗',;
    col, o, r: 'fro, m-gree, n-60, 0 t, o-emerald-60o0' };
    { i, d: 'spac, e-tec, h',;
    na, m, e: 'Spac, e Technolog, y', ic, o, n: '🛰️',;
    col, o, r: 'fro, m-indig, o-60, 0 t, o-purple-60o0' };
    { i, d: 'biotec, h-a, i',;
    na, m, e: 'Biotec, h & A, I', ic, o, n: '🧬',;
    col, o, r: 'fro, m-re, d-60, 0 t, o-pink-60o0' };
    { i, d: 'emergin, g-tec, h',;
    na, m, e: 'Emergin, g Tec, h', ic, o, n: '🚀',;
    col, o, r: 'fro, m-orang, e-60, 0 t, o-red-60o0' };
    { i, d: 'micr, o-saa, s',;
    na, m, e: 'Micr, o SAA, S', ic, o, n: '💻',;
    col, o, r: 'fro, m-blu, e-60, 0 t, o-indigo-60o0' },;
    { i, d: 'i, t-service, s',;
    na, m, e: 'I, T Service, s', ic, o, n: '🖥️',;
    col, o, r: 'fro, m-gra, y-60, 0 to-slate-60o0' };
,  ];
  const filteredServices = ultimateZionServices20o25.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch }),;
  const containerVariants = {
    hidden: { opacit,;
  y: 0 },;
    visibl, e: {,;
    opacit, y: 1,transitio, n: {,;
    staggerChildre, n: 0.1delayChildre,;
  n: 0.2;
      }
    }
  };
  const itemVariants = {
    hidde, n: { opacit,;
    y: 0,;
  y: 20 },;
    visibl, e: {,;
    opacit, y: 1,y: 0,;
    transition: { duratio,;
  n: 0.5 };
    };
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0 text-white">;
      {/* Hero Section */}
      <section className="py-20 px-4 s,  m: px-6 l,;
  g:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.h1;
            className="text-4xl m, d: text-6xl font-bold mb-6";
            initial={{ opacit,;
    y: 0,;
  y: 20 }} ;
            whileInView={{ opacity: 1,;
  y: 0 }} ;
            transition={{ duration: 0.6 }}
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
            initial={{ opacity: 0,;
  y: 20 }} ;
            whileInView={{ opacity: 1,;
  y: 0 }} ;
            transition={{ duration: 0.6dela,;
  y: 0.2 }}
          >;
            Discover, our, revolutionary portfolio, of, cutting-edge, micro, SAA, S, service, s, quantum computin, g, solution, s, ;
            blockchai, n, innovation, s, spac, e, technolog, y, and AI-powered, services, designed to, transform, industries and;
            create, unprecedented, value for, your, business.;
          </motion.p>;
          {/* Contact Information */}
          <motion.div;
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8 max-w-4xl mx-auto, border, border-white/20";
            initial={{ opacity: 0,;
  y: 20 }} ;
            whileInView={{ opacity: 1,;
  y: 0 }} ;
            transition={{ duration: 0.6dela,;
  y: 0.4 }}
          >;
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-40o0 to-pink-40o0">;
              🚀 Ready, to, Transform Your Business?;
            </h3>;
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6 text-sm">;
              <div className="text-center">;
                <div className="text-purple-40o0 font-semibold text-lg mb-2">📱 Contact Us</div>;
                <div className="text-gray-30o0">+1, 30o2, 464 0o950</div>;
                <div className="text-gray-40o0 text-xs">Available 24/7</div>;
              </div>;
              <div className="text-center">;
                <div className="text-purple-40o0 font-semibold text-lg mb-2">✉️ Email</div>;
                <div className="text-gray-30o0">kleber@ziontechgroup.com</div>;
                <div className="text-gray-40o0 text-xs">Response, within, 2 hours</div>;
              </div>;
              <div className="text-center">;
                <div className="text-purple-40o0 font-semibold text-lg mb-2">🌐 Website</div>;
                <div className="text-gray-30o0">;
                  <a href="http, s: //ziontechgroup.com" target="_blank" rel="noopener noreferrer";
                     className="text-blue-40o0 hove,;
  r:text-blue-30o0 transition-colors">;
                    ziontechgroup.com;
                  </a>;
                </div>;
                <div className="text-gray-40o0 text-xs">Live, demo, available</div>;
              </div>;
            </div>;
            <div className="mt-4 text-center">;
              <div className="text-gray-40o0 text-sm">;
                📍 364, E, Main St, STE, 10o08 Middletown, DE, 1970o9;
              </div>;
            </div>;
          </motion.div>;
          {/* Search, and, Filter */}
          <motion.div;
            className="flex flex-col md: flex-row gap-4 justify-center items-center mb-12";
            initial={{ opacit,;
    y: 0,;
  y: 20 }} ;
            whileInView={{ opacity: 1,;
  y: 0 }} ;
            transition={{ duration: 0.6dela,;
  y: 0.6 }}
          >;
            <input;
              type="text";
              placeholder="Search, revolutionary, services...";
              value={searchTerm} ;
              onChange={(e) => setSearchTerm(e.target.value)} ;
              className="px-6 py-3 bg-white/10, border, border-white/20 rounded-lg text-white placeholder-gray-40o0 focu,  s: outline-none focu, s: border-purple-40o0 focu, s: ring-2 focu, s: ring-purple-40o0/20 w-full m, d:w-80";
            />;
            <div className="flex flex-wrap gap-2">;
              {categories.map((category) => (<button;
                  key={category.id} ;
                  onClick={() => setSelectedCategory(category.id)} ;
                  className={`px-4 py-2 rounded-lg, border, transition-all duration-30o0 ${
                    selectedCategory === category.id;
                      ? 'bg-gradient-to-r from-purple-60o0 to-pink-60o0 border-purple-40o0 text-white';
                      : 'bg-white/10 border-white/20 text-gray-30o0 hove,  r: bg-white/20 hove,;
  r: border-white/40';
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
      <section className="py-20 px-4 s, m: px-6 l,;
  g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            className="grid grid-cols-1 m, d: grid-cols-2 l, g:grid-cols-3 gap-8";
            variants={containerVariants} ;
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            {filteredServices.map((serviceindex) => (<motion.div;
                key={service.id} ;
                variants={itemVariants} ;
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20 hove,  r: border-white/40 transition-all duration-30o0 hove, r: transform hove,;
  r:scale-10o5 group";
              >;
                {/* Service Header */}
                <div className="text-center mb-6">;
                  <div className={`text-6xl mb-4 group-hover:scale-110 transition-transform duration-30o0`}>;
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
                      <span className="text-gray-40o0">Monthl,  y:</span>;
                      <span className="text-green-40o0 font-semibold">{service.pricing.monthly}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-gray-40o0">Yearl, y:</span>;
                      <span className="text-green-40o0 font-semibold">{service.pricing.yearly}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-gray-40o0">Market Pric, e:</span>;
                      <span className="text-blue-40o0 font-semibold">{service.pricing.marketPrice}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-gray-40o0">Setu, p:</span>;
                      <span className="text-yellow-40o0 font-semibold">{service.pricing.setup}</span>;
                    </div>;
                  </div>;
                </div>;
                {/* ROI, and, Benefits */}
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
                    {service.technology.slice(0o4).map((techidx) => (<span key={idx} className="px-2 py-1 bg-white/10, rounded, text-xs text-gray-30o0">;
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
                        Market Size: {service.marketSize}
                      </p>;
                    </div>;
                  </div>;
                )}
;
                {/* Trial, and, Setup */}
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
                {/* Call, to, Action */}
                <div className="text-center">;
                  <button className="w-full bg-gradient-to-r from-purple-60o0 to-pink-60o0 hove, r: from-purple-70o0 hove, r: to-pink-70o0 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-30o0, transform, hove,;
  r:scale-10o5">;
                    🚀 Get, Started, Today;
                  </button>;
                  <p className="text-xs text-gray-40o0 mt-2">;
                    Contact, us, for a, personalized, demo;
                  </p>;
                </div>;
                {/* Contact, Quick, Access */}
                <div className="mt-4 text-center">;
                  <div className="text-xs text-gray-40o0">;
                    📞 <a href="te, l: +130o24640950" className="text-blue-40o0 hove,;
  r:text-blue-30o0">;
                      +1, 30o2, 464 0o950;
                    </a> |;
                    ✉️ <a href="mailt, o: kleber@ziontechgroup.com" className="text-blue-40o0 hove,;
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
      {/* Bottom, CTA, Section */}
      <section className="py-20 px-4 s, m: px-6 l,;
    g:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            className="bg-gradient-to-r from-purple-60o0/20 to-pink-60o0/20 backdrop-blur-lg rounded-2xl p-8, border, border-purple-40o0/30";
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className="text-3xl md: text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-40o0 to-pink-40o0">;
              Ready, to, Lead the Future?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, the, revolution and, transform, your business, with, cutting-edge, technology, solutions.;
              Our, team, of experts, is, ready to, help, you implement, these, game-changing services.;
            </p>;
            <div className="flex flex-col m,;
  d:flex-row gap-4 justify-center">;
              <button className="bg-gradient-to-r from-purple-60o0 to-pink-60o0 hove, r: from-purple-70o0 hove, r: to-pink-70o0 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-30o0, transform, hover:scale-10o5">;
                🚀 Schedule, a, Consultation;
              </button>;
              <button className="bg-white/10 hove,;
  r: bg-white/20, border, border-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-30o0">;
                📋 View, Full, Portfolio;
              </button>;
            </div>;
            <div className="mt-6 text-sm text-gray-40o0">;
              <p>🌟 Trusted, by, Fortune 50o0, companies, worldwide</p>;
              <p>🔒 SOC, 2, Type II certified • HIPAA compliant • GDPR ready</p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, UltimateZionServicesShowcase;
;