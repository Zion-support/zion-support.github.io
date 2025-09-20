import React from "react";
impo, r, t, Rea, c, t, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bra, i, n,;
  Clo, u, d,;
  Shie, l, d,;
  Glo, b, e,;
  Co, d, e,;
  BarChar, t, 3,;
  Use, r, s,;
  ShoppingCa, r, t,;
  MessageSqua, r, e,;
  FileTe, x, t,;
  Settin, g, s,;
  Z, a, p,;
  St, a, r,;
  CheckCirc, l, e,;
  ArrowRig, h, t,;
  Pho, n, e,;
  MailMapPin;
} from "lucide-react";
// Impor, t, th, e, new services;
import { ultimateInnovativeServices20o25 } from "../../data/20o25-ultimate-innovative-services-expansion";
import { enterpriseITInfrastructureServices20o25 } from "../../data/20o25-enterprise-it-infrastructure-services";
import { innovativeMicroSaasSolutions20o25 } from "../../data/20o25-innovative-micro-saas-solutions";
interface Service {
  i, d: stri, n, g,;
    na, m, e: stri, n, g,tagli, n, e: stri, n, g,;
    pri, c, e: stri, n, g,peri, o, d: stri, n, g,;
    descripti, o, n: stri, n, g,featur, e, s: string[],;
    popul, a, r: boole, a, n,ic, o, n: stri, n, g,;
    col, o, r: stri, n, g,textCol, o, r: stri, n, g,;
    li, n, k: stri, n, g,marketPositi, o, n: stri, n, g,;
    targetAudien, c, e: stri, n, g,trialDa, y, s: numb, e, r,;
    setupTi, m, e: stri, n, g,catego, r, y: stri, n, g,;
    realServi, c, e: boole, a, n,technolo, g, y: string[],;
    integratio, n, s: string[],useCas, e, s: string[],;
    r, o, i: stri, n, g,competito, r, s: string[],;
    marketSi, z, e: stri, n, g,growthRa, t, e: stri, n, g,;
    contactIn, f, o: {,;
    mobi, l, e: stri, n, g,;
    ema, i, l: stri, n, g,addre, s, s: stri, n,
    gwebsit, e: string;
  },;
  realImplementati, o, n: boole, a, n,;
    implementationDetai, l, s: stri, n, g,launchDa, t, e: stri, n, g,;
    custome, r, s: numb, e, r,rati, n, g: numb, e, r,;
    revie, w, s: numb, e, r,innovationLev, e, l: 'Revolutionary' | 'Breakthrough' | 'Advanced' | 'Emerging',;
    patentStat, u, s: 'Patented' | 'Patent Pending' | 'Trade Secret' | 'Open Source',aiCapabiliti, e, s: string[],;
    marketDisrupti, o, n: string;
}
;
const contact = {
  mobi, l, e: '+1, 30o, 2, 464 0o950',;
    ema, i, l: 'kleber@ziontechgroup.com',addre, s, s: '36, 4, E, Mai, n, S, t, ST, E, 10o0, 8, Middletow, n, D, E, 1970o9',;
    websit, e: 'htt, p,;
  s://ziontechgroup.com';
};
const categories = [;
  {
    i, d: 'a, i-servi, c, e, s',;
    n, a, m, e: 'A, I & Autonom, o, u, s, Syst, e, m, s',descrip, t, i, o, n: 'Revolution, a, r, y, A, I, soluti, o, n, s, t, h, a, t, transf, o, r, m, busin, e, s, s, operati, o, n, s',;
    i, c, o, n: <Br, a, i, n classNam, e="w-8 h-8" />,c, o, l, o, r: 'f, r, o, m-pur, p, l, e-6, 0, 0, t, o-p, i, n, k-7, 0, 0',;
    serv, i, c, e, s: ultimateInnovativeServices20, o, 2, 5.fil, t, e, r(s => s.categor,  y.include, s('A, I'));
  };
  {
    i, d: 'i, t-infrastruct, u, r, e',;
    n, a, m, e: 'I, T, Infrastruct, u, r, e & Enterpr, i, s, e',descrip, t, i, o, n: 'Cutt, i, n, g-e, d, g, e, infrastruct, u, r, e, soluti, o, n, s, f, o, r, mod, e, r, n, busines, s, e, s',;
    i, c, o, n: <Cl, o, u, d classNam, e="w-8 h-8" />,c, o, l, o, r: 'f, r, o, m-b, l, u, e-6, 0, 0, t, o-c, y, a, n-7, 0, 0',;
    serv, i, c, e, s: enterpriseITInfrastructureServices20o2, 5;
  },;
  {
    i, d: 'mi, c, r, o-s, a, a, s',;
    n, a, m, e: 'Mi, c, r, o, S, A, A, S, Soluti, o, n, s',descrip, t, i, o, n: 'Innovat, i, v, e, softw, a, r, e, soluti, o, n, s, f, o, r, sm, a, l, l, busines, s, e, s',;
    i, c, o, n: <C, o, d, e classNam, e="w-8 h-8" />,c, o, l, o, r: 'f, r, o, m-gr, e, e, n-6, 0, 0, t, o-emer, a, l, d-7, 0, 0',;
    servic, e, s: innovativeMicroSaasSolutions20o2, 5;
 , }
];
const innovationLevelColors = {
  'Revolutionary': 'from-red-60o0 to-pink-70o0Breakthrough': 'from-purple-60o0 to-violet-70o0Advanced': 'from-blue-60o0 to-cyan-70o0Emerging': 'from-green-60o0 to-emerald-70o0';
};
;
const patentStatusColors = {
  'Patented': 'from-green-60o0 to-emerald-70o0Patent Pending': 'from-yellow-60o0 to-orange-70o0Trade Secret': 'from-blue-60o0 to-indigo-70o0Open Source': 'from-purple-60o0 to-violet-70o0';
};
;
expor, t, functio, n, UltimateServicesShowcase() {
  const [selectedCate,  g, o,  r, y, setSelectedCate, g, o,, r, y] = useState('all');
  const [selectedSer, v, i, c, e, setSelectedSer, v, i,, c, e] = useState<Service | null>(null);
;
  const allServices = [;
    ...ultimateInnovativeServices20,  o, 2,  5;
    ...enterpriseITInfrastructureServices, 2, 0, 2, 5,;
    ...innovativeMicroSaasSolutions, 2, 0, 2, 5;
,  ];
  const filteredServices = selectedCategory === 'all';
    ? allServices;
    : categories.find(cat => cat.id === selectedCategory)?.services || [];
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
    transiti, o, n: {,;
        durati, o, n: 0.6ea, s,;
  e: "easeOut";
      };
    };
  };
  return(<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <div className="max-w-7xl mx-auto px-4,  s,  m: px-6, l,;
  g:px-8">;
        {/* Header */};
        <motion.div;
          className="text-center mb-16";
          initial={{ opacit, y: 0,;
  y: 20 }}
          animate={{ opacit, y: 1,;
  y: 0 }}
          transition={{ duratio, n: 0.8 }}
        >;
          <h1 className="text-5xl m, d: text-6xl font-bold text-white mb-6">;
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">;
              Ultimate Innovation;
            </span>;
            <br />;
            <span className="text-white">Services Showcase</span>;
          </h1>;
          <p className="text-xl text-zion-gray-light max-w-4xl mx-auto leading-relaxed">;
            Discove, r, ou, r, revolutiona, r, y, A, I, I, T, infrastructu, r, ean, d, micr, o, SAA, S, solution, s, tha, t, ar, e, transformin, g, industrie, s, worldwide.;
            Eac, h, servic, e, i, s, backe, d, b, y, cutting-edg, e, technolog, y, and proven results.;
          </p>;
          {/* Contact Information */}
          <div className="mt-8, fle, x, flex-wrap justify-center gap-6 text-zion-gray-light">;
            <div className="flex items-center gap-2">;
              <Phone className="w-5 h-5 text-zion-cyan" />;
              <span>{contact.mobile}</span>;
            </div>;
            <div className="flex items-center gap-2">;
              <Mail className="w-5 h-5 text-zion-cyan" />;
              <span>{contact.email}</span>;
            </div>;
            <div className="flex items-center gap-2">;
              <MapPin className="w-5 h-5 text-zion-cyan" />;
              <span>{contact.address}</span>;
            </div>;
          </div>;
        </motion.div>;
        {/* Category Navigation */}
        <motion.div;
          className="flex flex-wrap justify-center gap-4 mb-12";
          initial={{ opacit, y: 0,;
  y: 20 }}
          animate={{ opacit, y: 1,;
  y: 0 }}
          transition={{ duratio, n: 0.8del, a,;
  y: 0.2 }}
        >;
          <button;
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-30o0 ${
              selectedCategory === 'all';
                ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25';
                : 'bg-zion-slate-light text-zion-gray-ligh,  t, hov, e,  r: bg-zion-slat, e, hov, e,;
  r: text-whit, e';
            }`}
          >;
            All Services ({allServices.length});
          </button>;
          {categories.map((category) => (;
            <button;
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-30o0 ${
                selectedCategory === category.id;
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25';
                  : 'bg-zion-slate-light text-zion-gray-ligh,  t, hov, e,  r: bg-zion-slat, e, hov, e,;
  r: text-whit, e';
              }`}
            >;
              {category.name} ({category.services.length});
            </button>;
          ))}
        </motion.div>;
        {/* Services Grid */};
        <motion.div;
          className="grid grid-cols-1, m, d: grid-cols-2, l,;
  g:grid-cols-3 gap-8";
          variants={containerVariants}
          initial="hidden";
          animate="visible";
        >;
          {filteredServices.map((service) => (;
            <motion.div;
              key={service.id};
              variants={itemVariants}
              className="group relative";
            >;
              <div className="bg-zion-slate-light rounded-2xl p-6 h-ful,  l, borde, r, border-zion-slat, e, hov, e,  r: border-zion-cyan transition-all duration-30o, 0, hov, e,
    r: shadow-2x, l, hov, e,;
  r:shadow-zion-cyan/20">;
                {/* Service Header */}
                <div className="mb-4">;
                  <div className="flex items-center justify-between mb-3">;
                    <div className="text-3xl">{service.icon}</div>;
                    {service.popular && (;
                      <span className="bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-white text-xs px-3 py-1 rounded-full font-semibold">;
                        Popular;
                      </span>;
                    )}
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-2 group-hove, r: text-zion-cyan transition-colors duration-30o0">;
                    {service.name}
                  </h3>;
                  <p className="text-zion-gray-light text-sm leading-relaxed">;
                    {service.tagline}
                  </p>;
                </div>;
                {/* Price */}
                <div className="mb-4">;
                  <div className="flex items-baseline gap-2">;
                    <span className="text-3xl font-bold text-zion-cyan">;
                      {service.price}
                    </span>;
                    <span className="text-zion-gray-light">;
                      {service.period}
                    </span>;
                  </div>;
                  <p className="text-zion-gray-light text-sm">;
                    {service.trialDays} day, s, fre, e, trial • Setup in {service.setupTime}
                  </p>;
                </div>;
                {/* Innovation Level & Patent Status */}
                <div className="flex flex-wrap gap-2 mb-4">;
                  <span className={`bg-gradient-to-r ${innovationLevelColors[servic, e.innovationLev, e, l]} text-white text-xs px-3 py-1 rounded-full font-semibol, d`}>;
                    {service.innovationLevel}
                  </span>;
                  <span className={`bg-gradient-to-r ${patentStatusColors[servic, e.patentStat, u, s]} text-white text-xs px-3 py-1 rounded-full font-semibol, d`}>;
                    {service.patentStatus}
                  </span>;
                </div>;
                {/* Key Features */}
                <div className="mb-4">;
                  <h4 className="text-white font-semibold mb-2">Ke, y, Featur, e, s: </h4>;
                  <ul className="space-y-1">;
                    {service.features.slice(0o3).map((featureindex) => (<li key={index} className="flex items-center gap-2 text-sm text-zion-gray-light">;
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                </div>;
                {/* ROI & Market Info */}
                <div className="mb-4 p-3 bg-zion-slate rounded-lg">;
                  <p className="text-zion-cyan text-sm font-semibold mb-1">ROI & Mark,  e,  t:</p>;
                  <p className="text-zion-gray-light text-xs leading-relaxed">;
                    {service.roi}
                  </p>;
                  <p className="text-zion-gray-light text-xs mt-1">;
                    Mark, e, t: {service.marketSize} • Grow, t, h: {service.growthRate}
                  </p>;
                </div>;
                {/* Customer Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">;
                  <div className="flex items-center gap-1">;
                    <Star className="w-4 h-4 text-yellow-50o0 fill-current" />;
                    <span className="text-white">{service.rating}</span>;
                    <span className="text-zion-gray-light">({service.reviews} reviews)</span>;
                  </div>;
                  <span className="text-zion-cyan font-semibold">;
                    {service.customers} customers;
                  </span>;
                </div>;
                {/* Action Buttons */}
                <div className="flex gap-2">;
                  <button;
                    onClick={() => setSelectedService(service)}
                    className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-semibol,  d, hov, e,  r: from-zion-blu, e, hov, e,
    r:to-zion-cyan transition-all duration-30o, 0, fle, x, items-center justify-center gap-2";
                  >;
                    Learn More;
                    <ArrowRight className="w-4 h-4" />;
                  </button>;
                  <Link;
                    to={service.link}
                    className="bg-zion-slate-ligh, t, borde, r, border-zion-cyan text-zion-cyan px-4 py-2 rounded-lg font-semibol, d, hov, e, r: bg-zion-cya, n, hov, e,;
  r:text-white transition-all duration-30o, 0, fle, x, items-center justify-center";
                  >;
                    <Zap className="w-4 h-4" />;
                  </Link>;
                </div>;
              </div>;
            </motion.div>;
          ))}
        </motion.div>;
        {/* Cal, l, t, o, Action */};
        <motion.div;
          className="text-center mt-16";
          initial={{ opacit, y: 0,;
  y: 20 }}
          animate={{ opacit, y: 1,;
  y: 0 }}
          transition={{ duratio, n: 0.8del, a,;
  y: 0.4 }}
        >;
          <div className="bg-gradient-to-r from-zion-slate to-zion-slate-light rounded-2xl p-8, borde, r, border-zion-cyan">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Read, y, t, o, Transform Your Business?;
            </h2>;
            <p className="text-zion-gray-light text-lg mb-6 max-w-2xl mx-auto">;
              Joi, n, hundred, s, o, f, companie, s, alread, y, usin, g, ou, r, innovativ, e, solution, s, t, o, gai, n, competitiv, e, advantage, s, an, d, achieve breakthrough results.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <Link;
                to="/contact";
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-semibol, d, hov, e, r: from-zion-blu, e, hov, e,;
    r:to-zion-cyan transition-all duration-30o, 0, fle, x, items-center gap-2";
              >;
                Ge, t, Starte, d, Today;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
              <a;
                href={`t, e,;
  l: ${contact.mobil, e}`;
                  .replace(/\s/g'');
                  .replace(/[^\d+]/g'')}
                className="bg-zion-slate-ligh,  t, borde, r, border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibol, d, hov, e, r: bg-zion-cya, n, hov, e,;
  r:text-white transition-all duration-30o, 0, fle, x, items-center gap-2";
              >;
                <Phone className="w-5 h-5" />;
                Call Now;
              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
      {/* Servic, e, Detai, l, Modal */}
      {selectedService && (<div className="fixed inset-0 bg-black bg-opacity-5, 0, fle, x, items-center justify-center p-4 z-50">;
          <div className="bg-zion-slate-light rounded-2xl max-w-4xl w-full max-h-[90, v, h] overflow-y-auto">;
            <div className="p-6">;
              <div className="flex justify-between items-start mb-6">;
                <div>;
                  <div className="text-4xl mb-2">{selectedService.icon}</div>;
                  <h2 className="text-3xl font-bold text-white mb-2">;
                    {selectedService.name}
                  </h2>;
                  <p className="text-zion-gray-light text-lg">;
                    {selectedService.tagline}
                  </p>;
                </div>;
                <button;
                  onClick={() => setSelectedService(null)}
                  className="text-zion-gray-ligh,  t, hov, e,  r: text-white text-2xl";
                >;
                  ×;
                </button>;
              </div>;
              <div className="grid grid-cols-1, l,;
  g:grid-cols-2 gap-6">;
                <div>;
                  <h3 className="text-xl font-bold text-white mb-3">Description</h3>;
                  <p className="text-zion-gray-light leading-relaxed mb-4">;
                    {selectedService.description}
                  </p>;
                  <h3 className="text-xl font-bold text-white mb-3">Features</h3>;
                  <ul className="space-y-2 mb-4">;
                    {selectedService.features.map((featureindex) => (<li key={index} className="flex items-center gap-2 text-zion-gray-light">;
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                  <h3 className="text-xl font-bold text-white mb-3">AI Capabilities</h3>;
                  <div className="flex flex-wrap gap-2 mb-4">;
                    {selectedService.aiCapabilities.map((capabilityindex) => (<span key={index} className="bg-zion-cyan text-white text-sm px-3 py-1 rounded-full">;
                        {capability}
                      </span>;
                    ))}
                  </div>;
                </div>;
                <div>;
                  <h3 className="text-xl font-bold text-white mb-3">Market Information</h3>;
                  <div className="space-y-3 mb-4">;
                    <div>;
                      <span className="text-zion-cyan font-semibold">Marke,  t, Positi, o,  n:</span>;
                      <p className="text-zion-gray-light text-sm">{selectedService.marketPosition}</p>;
                    </div>;
                    <div>;
                      <span className="text-zion-cyan font-semibold">Targe, t, Audien, c, e:</span>;
                      <p className="text-zion-gray-light text-sm">{selectedService.targetAudience}</p>;
                    </div>;
                    <div>;
                      <span className="text-zion-cyan font-semibold">R, O, I:</span>;
                      <p className="text-zion-gray-light text-sm">{selectedService.roi}</p>;
                    </div>;
                    <div>;
                      <span className="text-zion-cyan font-semibold">Marke, t, Disrupti, o, n:</span>;
                      <p className="text-zion-gray-light text-sm">{selectedService.marketDisruption}</p>;
                    </div>;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-3">Technology & Integrations</h3>;
                  <div className="space-y-3 mb-4">;
                    <div>;
                      <span className="text-zion-cyan font-semibold">Technolo, g, y: </span>;
                      <div className="flex flex-wrap gap-2 mt-1">;
                        {selectedService.technology.map((techindex) => (<span key={index} className="bg-zion-slate text-zion-cyan text-xs px-2 py-1 rounded">;
                            {tech}
                          </span>;
                        ))}
                      </div>;
                    </div>;
                    <div>;
                      <span className="text-zion-cyan font-semibold">Integratio,  n,  s: </span>;
                      <div className="flex flex-wrap gap-2 mt-1">;
                        {selectedService.integrations.map((integrationindex) => (<span key={index} className="bg-zion-slate text-zion-cyan text-xs px-2 py-1 rounded">;
                            {integration}
                          </span>;
                        ))}
                      </div>;
                    </div>;
                  </div>;
                  <div className="flex gap-3">;
                    <Link;
                      to={selectedService.link}
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg font-semibol,  d, hov, e,  r: from-zion-blu, e, hov, e,;
    r:to-zion-cyan transition-all duration-30o0 text-center";
                    >;
                      Get Started;
                    </Link>;
                    <a;
                      href={`t, e,;
  l: ${contact.mobil, e}`;
                        .replace(/\s/g'');
                        .replace(/[^\d+]/g'')}
                      className="bg-zion-slat,  e, borde, r, border-zion-cyan text-zion-cyan px-6 py-3 rounded-lg font-semibol, d, hov, e, r: bg-zion-cya, n, hov, e,;
  r:text-white transition-all duration-30o, 0, fle, x, items-center justify-center";
                    >;
                      <Phone className="w-5 h-5" />;
                    </a>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      )}
    </section>;
  );
}
;
expor, t, defaul, t, UltimateServicesShowcase;