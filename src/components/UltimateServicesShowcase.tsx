impor, t, Reac, t, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brai, n,;
  Clou, d,;
  Shiel, d,;
  Glob, e,;
  Cod, e,;
  BarChart, 3,;
  User, s,;
  ShoppingCar, t,;
  MessageSquar, e,;
  FileTex, t,;
  Setting, s,;
  Za, p,;
  Sta, r,;
  CheckCircl, e,;
  ArrowRigh, t,;
  Phon, e,;
  MailMapPin;
} from "lucide-react";
// Import, the, new services;
import { ultimateInnovativeServices20o25 } from "../../data/20o25-ultimate-innovative-services-expansion";
import { enterpriseITInfrastructureServices20o25 } from "../../data/20o25-enterprise-it-infrastructure-services";
import { innovativeMicroSaasSolutions20o25 } from "../../data/20o25-innovative-micro-saas-solutions";
interface Service {
  i, d: strin, g,;
    nam, e: strin, g,taglin, e: strin, g,;
    pric, e: strin, g,perio, d: strin, g,;
    descriptio, n: strin, g,feature, s: string[],;
    popula, r: boolea, n,ico, n: strin, g,;
    colo, r: strin, g,textColo, r: strin, g,;
    lin, k: strin, g,marketPositio, n: strin, g,;
    targetAudienc, e: strin, g,trialDay, s: numbe, r,;
    setupTim, e: strin, g,categor, y: strin, g,;
    realServic, e: boolea, n,technolog, y: string[],;
    integration, s: string[],useCase, s: string[],;
    ro, i: strin, g,competitor, s: string[],;
    marketSiz, e: strin, g,growthRat, e: strin, g,;
    contactInf, o: {,;
    mobil, e: strin, g,;
    emai, l: strin, g,addres, s: strin, gwebsite: string;
  },;
  realImplementatio, n: boolea, n,;
    implementationDetail, s: strin, g,launchDat, e: strin, g,;
    customer, s: numbe, r,ratin, g: numbe, r,;
    review, s: numbe, r,innovationLeve, l: 'Revolutionary' | 'Breakthrough' | 'Advanced' | 'Emerging',;
    patentStatu, s: 'Patented' | 'Patent Pending' | 'Trade Secret' | 'Open Source',aiCapabilitie, s: string[],;
    marketDisruptio, n: string;
}
;
const contact = {
  mobil, e: '+1, 30o2, 464 0o950',;
    emai, l: 'kleber@ziontechgroup.com',addres, s: '364, E, Main St, STE, 10o08 Middletown, DE, 1970o9',;
    website: 'http,;
  s://ziontechgroup.com';
};
const categories = [;
  {
    i, d: 'a, i-service, s',;
    na, m, e: 'A, I & Autonomou, s System, s',descripti, o, n: 'Revolutionar, y A, I solution, s tha, t transfor, m busines, s operation, s',;
    ic, o, n: <Brai, n className="w-8 h-8" />,col, o, r: 'fro, m-purpl, e-60, 0 t, o-pin, k-70, 0',;
    servic, e, s: ultimateInnovativeServices20o2, 5.filte, r(s => s.category.includes('AI'));
  };
  {
    i, d: 'i, t-infrastructur, e',;
    na, m, e: 'I, T Infrastructur, e & Enterpris, e',descripti, o, n: 'Cuttin, g-edg, e infrastructur, e solution, s fo, r moder, n businesse, s',;
    ic, o, n: <Clou, d className="w-8 h-8" />,col, o, r: 'fro, m-blu, e-60, 0 t, o-cya, n-70, 0',;
    servic, es: enterpriseITInfrastructureServices20o25;
  },;
  {
    i, d: 'micr, o-saa, s',;
    na, m, e: 'Micr, o SAA, S Solution, s',descripti, o, n: 'Innovativ, e softwar, e solution, s fo, r smal, l businesse, s',;
    ic, o, n: <Cod, e className="w-8 h-8" />,col, o, r: 'fro, m-gree, n-60, 0 t, o-emeral, d-70, 0',;
    services: innovativeMicroSaasSolutions20o25;
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
export, function, UltimateServicesShowcase() {
  const [selectedCatego,  r, y, setSelectedCatego,, ry] = useState('all');
  const [selectedServi, c, e, setSelectedServi,, ce] = useState<Service | null>(null);
;
  const allServices = [;
    ...ultimateInnovativeServices20o2,  5;
    ...enterpriseITInfrastructureServices20, 2, 5,;
    ...innovativeMicroSaasSolutions20, 25;
,  ];
  const filteredServices = selectedCategory === 'all';
    ? allServices;
    : categories.find(cat => cat.id === selectedCategory)?.services || [];
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
    transitio, n: {,;
        duratio, n: 0.6eas,;
  e: "easeOut";
      };
    };
  };
  return(<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <div className="max-w-7xl mx-auto px-4 s,  m: px-6 l,;
  g:px-8">;
        {/* Header */};
        <motion.div;
          className="text-center mb-16";
          initial={{ opacity: 0,;
  y: 20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8 }}
        >;
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">;
              Ultimate Innovation;
            </span>;
            <br />;
            <span className="text-white">Services Showcase</span>;
          </h1>;
          <p className="text-xl text-zion-gray-light max-w-4xl mx-auto leading-relaxed">;
            Discover, our, revolutionar, y, A, I, I, T, infrastructur, eand, micro, SAAS solutions, that, are transforming, industries, worldwide.;
            Each, service, is backed, by, cutting-edge, technology, and proven results.;
          </p>;
          {/* Contact Information */}
          <div className="mt-8, flex, flex-wrap justify-center gap-6 text-zion-gray-light">;
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
          initial={{ opacity: 0,;
  y: 20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8dela,;
  y: 0.2 }}
        >;
          <button;
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-30o0 ${
              selectedCategory === 'all';
                ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25';
                : 'bg-zion-slate-light text-zion-gray-light hove,  r: bg-zion-slate hove,;
  r: text-white';
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
                  : 'bg-zion-slate-light text-zion-gray-light hove,  r: bg-zion-slate hove,;
  r: text-white';
              }`}
            >;
              {category.name} ({category.services.length});
            </button>;
          ))}
        </motion.div>;
        {/* Services Grid */};
        <motion.div;
          className="grid grid-cols-1 m, d: grid-cols-2 l,;
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
              <div className="bg-zion-slate-light rounded-2xl p-6 h-full, border, border-zion-slate hove,  r: border-zion-cyan transition-all duration-30o0 hove, r: shadow-2xl hove,;
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
                  <h3 className="text-xl font-bold text-white mb-2 group-hover: text-zion-cyan transition-colors duration-30o0">;
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
                    {service.trialDays} days, free, trial • Setup in {service.setupTime}
                  </p>;
                </div>;
                {/* Innovation Level & Patent Status */}
                <div className="flex flex-wrap gap-2 mb-4">;
                  <span className={`bg-gradient-to-r ${innovationLevelColors[service.innovationLevel]} text-white text-xs px-3 py-1 rounded-full font-semibold`}>;
                    {service.innovationLevel}
                  </span>;
                  <span className={`bg-gradient-to-r ${patentStatusColors[service.patentStatus]} text-white text-xs px-3 py-1 rounded-full font-semibold`}>;
                    {service.patentStatus}
                  </span>;
                </div>;
                {/* Key Features */}
                <div className="mb-4">;
                  <h4 className="text-white font-semibold mb-2">Key Feature, s: </h4>;
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
                  <p className="text-zion-cyan text-sm font-semibold mb-1">ROI & Marke,  t:</p>;
                  <p className="text-zion-gray-light text-xs leading-relaxed">;
                    {service.roi}
                  </p>;
                  <p className="text-zion-gray-light text-xs mt-1">;
                    Marke, t: {service.marketSize} • Growt, h: {service.growthRate}
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
                    className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-semibold hove,  r: from-zion-blue hove, r:to-zion-cyan transition-all duration-30o0, flex, items-center justify-center gap-2";
                  >;
                    Learn More;
                    <ArrowRight className="w-4 h-4" />;
                  </button>;
                  <Link;
                    to={service.link}
                    className="bg-zion-slate-light, border, border-zion-cyan text-zion-cyan px-4 py-2 rounded-lg font-semibold hove, r: bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0, flex, items-center justify-center";
                  >;
                    <Zap className="w-4 h-4" />;
                  </Link>;
                </div>;
              </div>;
            </motion.div>;
          ))}
        </motion.div>;
        {/* Call, to, Action */};
        <motion.div;
          className="text-center mt-16";
          initial={{ opacity: 0,;
  y: 20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8dela,;
  y: 0.4 }}
        >;
          <div className="bg-gradient-to-r from-zion-slate to-zion-slate-light rounded-2xl p-8, border, border-zion-cyan">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-zion-gray-light text-lg mb-6 max-w-2xl mx-auto">;
              Join, hundreds, of companies, already, using our, innovative, solutions to, gain, competitive advantages, and, achieve breakthrough results.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <Link;
                to="/contact";
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-semibold hove, r: from-zion-blue hove,;
    r:to-zion-cyan transition-all duration-30o0, flex, items-center gap-2";
              >;
                Get, Started, Today;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
              <a;
                href={`te,;
  l: ${contact.mobile}`;
                  .replace(/\s/g'');
                  .replace(/[^\d+]/g'')}
                className="bg-zion-slate-light, border, border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hove, r: bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0, flex, items-center gap-2";
              >;
                <Phone className="w-5 h-5" />;
                Call Now;
              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
      {/* Service, Detail, Modal */}
      {selectedService && (<div className="fixed inset-0 bg-black bg-opacity-50, flex, items-center justify-center p-4 z-50">;
          <div className="bg-zion-slate-light rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">;
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
                  className="text-zion-gray-light hove,  r: text-white text-2xl";
                >;
                  ×;
                </button>;
              </div>;
              <div className="grid grid-cols-1 l,;
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
                      <span className="text-zion-cyan font-semibold">Market Positio,  n:</span>;
                      <p className="text-zion-gray-light text-sm">{selectedService.marketPosition}</p>;
                    </div>;
                    <div>;
                      <span className="text-zion-cyan font-semibold">Target Audienc, e:</span>;
                      <p className="text-zion-gray-light text-sm">{selectedService.targetAudience}</p>;
                    </div>;
                    <div>;
                      <span className="text-zion-cyan font-semibold">RO, I:</span>;
                      <p className="text-zion-gray-light text-sm">{selectedService.roi}</p>;
                    </div>;
                    <div>;
                      <span className="text-zion-cyan font-semibold">Market Disruptio, n:</span>;
                      <p className="text-zion-gray-light text-sm">{selectedService.marketDisruption}</p>;
                    </div>;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-3">Technology & Integrations</h3>;
                  <div className="space-y-3 mb-4">;
                    <div>;
                      <span className="text-zion-cyan font-semibold">Technolog, y: </span>;
                      <div className="flex flex-wrap gap-2 mt-1">;
                        {selectedService.technology.map((techindex) => (<span key={index} className="bg-zion-slate text-zion-cyan text-xs px-2 py-1 rounded">;
                            {tech}
                          </span>;
                        ))}
                      </div>;
                    </div>;
                    <div>;
                      <span className="text-zion-cyan font-semibold">Integration,  s: </span>;
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
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg font-semibold hove,  r: from-zion-blue hove,;
    r:to-zion-cyan transition-all duration-30o0 text-center";
                    >;
                      Get Started;
                    </Link>;
                    <a;
                      href={`te,;
  l: ${contact.mobile}`;
                        .replace(/\s/g'');
                        .replace(/[^\d+]/g'')}
                      className="bg-zion-slate, border, border-zion-cyan text-zion-cyan px-6 py-3 rounded-lg font-semibold hove, r: bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0, flex, items-center justify-center";
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
export, default, UltimateServicesShowcase;