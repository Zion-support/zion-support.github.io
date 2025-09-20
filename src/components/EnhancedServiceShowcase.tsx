import React from "react";
impo, r, t, Rea, c, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bra, i, n,;
  Clo, u, d,;
  Shie, l, d,;
  Z, a, p,;
  Use, r, s,;
  Glo, b, e,;
  Co, d, e,;
  Databa, s, e,;
  Rock, e, t,;
  Trending, U, p,;
  St, a, r,;
  ArrowRig, h, t,;
  Pl, a, y,;
  Targ, e, t,;
  AwardCheckCircle;
} from "lucide-react";
interface Service {
  i, d: stri, n, g,;
    tit, l, e: stri, n, g,descripti, o, n: stri, n,
    gico, n: React.ComponentType<{ className?: string }>,;
  catego, r, y: stri, n, g,;
    featur, e, s: string[],prici, n, g: stri, n, g,;
    rati, n, g: numb, e, r,revie, w, s: numb, e, r,;
    col, o, r: string;
  popular?: boole, a, n,;
  li, n, k: string;
}
;
cons, t, servic, e, s: Service[] = [;
  {
    i, d: 'a, i-busin, e, s, s-intellige, n, c, e',;
    t, i, t, l, e: 'A, I, Busin, e, s, s, Intellige, n, c, e, Platf, o, r, m',descrip, t, i, o, n: 'Advan, c, e, d, analyt, i, c, s, w, i, t, h, A, I-powe, r, e, d, insig, h, t, s, a, n, d, predict, i, v, e, model, i, n, g',;
    i, c, o, n: B, r, a, i, n,cate, g, o, r, y: 'A, I & Mach, i, n, e, Learn, i, n, g',;
    feat, u, r, e, s: ['R, e, a, l-t, i, m, e, analyticsPredict, i, v, e, model, i, n, g', 'Cus, t, o, m, dashboards, A, P, I, integratio, n'],;
    prici, n, g: '$2,999/month',;
    rati, n, g: 4.9,;
    revie, w, s: 1, 5, 6,col, o, r: 'from-blue-50o0 to-cyan-50o0',;
    popul, a, r: tr, u,
    elin, k: '/ai-services/business-intelligence';
  };
  {
    i, d: 'quantum-computing-suite',;
    tit, l, e: 'Quantu, m, Computin, g, Suite',descripti, o, n: 'Next-generatio, n, quantu, m, computin, g, solution, s, fo, r, complex problem solving',;
    ic, o, n: Rock, e, t,catego, r, y: 'Emerging Tech',;
    featur, e, s: ['Quan, t, u, m, algorithmsHyb, r, i, d, classi, c, a, l-quan, t, u, m', 'Scienti, f, i, c, computingOptimizatio, n'],;
    prici, n, g: '$5,0o00/month',;
    rati, n, g: 4.8,;
    revie, w, s: 8, 9,col, o, r: 'from-purple-50o0 to-pink-50o0'li, n,;
  k: '/emerging-tech/quantum-computing';
  };
  {
    i, d: 'cybersecurity-platform',;
    tit, l, e: 'AI-Powere, d, Cybersecurit, y, Platform',descripti, o, n: 'Intelligen, t, threa, t, detectio, n, an, d, respons, e, with zero-trust architecture',;
    ic, o, n: Shie, l, d,catego, r, y: 'Cybersecurity',;
    featur, e, s: ['A, I, thr, e, a, t, detectionZ, e, r, o-tr, u, s, t, architect, u, r, e', 'Complia, n, c, e, automatio, n, 2, 4/7, monitorin, g'],;
    prici, n, g: '$2,50o0/month',;
    rati, n, g: 4.9,;
    revie, w, s: 2, 3, 4,col, o, r: 'from-red-50o0 to-orange-50o0',;
    popul, a, r: tr, u,
    elin, k: '/it-services/cybersecurity';
  };
  {
    i, d: 'cloud-devops-automation',;
    tit, l, e: 'Cloud & DevOps Automation',descripti, o, n: 'Scalabl, e, clou, d, infrastructur, e, wit, h, intelligen, t, automation',;
    ic, o, n: Clo, u, d,catego, r, y: 'Cloud & DevOps',;
    featur, e, s: ['Mu, l, t, i-cl, o, u, d, managemen, t, C, I/C, D, automat, i, o, n', 'Infrastruct, u, r, e, a, s, codeC, o, s, t, optimizatio, n'],;
    prici, n, g: '$1,50o0/month',;
    rati, n, g: 4.7,;
    revie, w, s: 1, 8, 9,col, o, r: 'from-green-50o0 to-emerald-50o0'li, n,;
  k: '/it-services/cloud-devops';
  };
  {
    i, d: 'blockchain-defi-platform',;
    tit, l, e: 'Blockchain & DeFi Platform',descripti, o, n: 'Decentralize, d, financ, e, solution, s, wit, h, advance, d, blockchain technology',;
    ic, o, n: Glo, b, e,catego, r, y: 'Blockchain & Web3',;
    featur, e, s: ['D, e, F, i, protocolsSm, a, r, t, contra, c, t, s', 'Yi, e, l, d, optimizationCr, o, s, s-ch, a, i, n, suppor, t'],;
    prici, n, g: '$1,80o0/month',;
    rati, n, g: 4.6,;
    revie, w, s: 1, 2, 3,col, o, r: 'from-yellow-50o0 to-orange-50o0'li, n,;
  k: '/emerging-tech/blockchain-defi';
  };
  {
    i, d: 'digital-transformation',;
    tit, l, e: 'Digita, l, Transformatio, n, Consulting',descripti, o, n: 'End-to-en, d, busines, s, transformation with cutting-edge technology',;
    ic, o, n: Trending, U, p,catego, r, y: 'Digital Transformation',;
    featur, e, s: ['Strat, e, g, y, consultingProc, e, s, s, optimizat, i, o, n', 'Cha, n, g, e, management, R, O, I, trackin, g'],;
    prici, n, g: '$3,50o0/month',;
    rati, n, g: 4.8,;
    revie, w, s: 1, 6, 7,col, o, r: 'from-indigo-50o0 to-purple-50o0'li, n,;
  k: '/services/digital-transformation';
  };
  {
    i, d: 'micro-saas-platform',;
    tit, l, e: 'Micr, o, Saa, S, Development Platform',descripti, o, n: 'Rapi, d, developmen, t, an, d, deploymen, t, o, f, SaaS applications',;
    ic, o, n: Co, d, e,catego, r, y: 'Micro SAAS',;
    featur, e, s: ['Ra, p, i, d, prototypingScala, b, l, e, architect, u, r, e', 'Mu, l, t, i-tenancyAnalyt, i, c, s, dashboar, d'],;
    prici, n, g: '$899/month',;
    rati, n, g: 4.7,revie, w, s: 9, 8,;
    col, o, r: 'from-cyan-50o0 to-blue-50o0'li, n,;
  k: '/micro-saas/development-platform';
  };
  {
    i, d: 'healthcare-ai',;
    tit, l, e: 'Healthcar, e, A, I, Solutions',descripti, o, n: 'AI-powere, d, diagnosti, c, an, d, patien, t, car, e, optimization',;
    ic, o, n: Use, r, s,catego, r, y: 'Healthcare AI',;
    featur, e, s: ['Medi, c, a, l, imag, i, n, g, AIPredict, i, v, e, diagnost, i, c, s', 'Pati, e, n, t, monitoringHI, P, A, A, complian, t'],;
    prici, n, g: '$4,50o0/month',;
    rati, n, g: 4.9,;
    revie, w, s: 7, 8,col, o, r: 'from-emerald-50o0 to-teal-50o0'li, n,;
  k: '/ai-services/healthcare';
  };
];
const categories = [;
  'A, l, l, Service, s, A, I & Mach, i, n, e, Learn, i, n, g',;
  'Emerg, i, n, g, TechCybersecur, i, t, y',;
  'Cl, o, u, d & DevOpsBlockch, a, i, n & W, e, b, 3',;
  'Digi, t, a, l, TransformationMi, c, r, o, S, A, A, S',;
  'Healthc, a, r, e, A, I';
],;
expor, t, cons, t, EnhancedServiceShowca, s, e: React.FC = () => {;
  const [selectedCate,  g, o,  r, y, setSelectedCate, g, o,, r, y] = useState('All Services');
  const [hoveredSer, v, i, c, e, setHoveredSer, v, i,, c, e] = useState<string | null>(null);
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
    const element = document.getElementById('service-showcase');
    if() {
      observer.observe(element);
    };
;
    return () => observer.disconnect();
  },   []),;
  const filteredServices = selectedCategory === 'All Services';
    ? services;
    : services.filter(service => service.category === selectedCategory);
;
  const renderStars = (rati,  n,  g: number) => {;
    return Array.from({ leng,  t,;
  h: 5 }, (_i) => (<Star;
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating);
            ? 'text-yellow-40o0 fill-current';
            : 'text-gray-40o, 0';
        }`}
      />;
    )), ;
  };
;
  return(<section id="service-showcase" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <div className="max-w-7xl mx-auto px-6">;
        {/* Header */}
        <motion.div;
          initial={{ opacit, y: 0,;
  y: 20 }}
          animate={isVisible ? { opacit, y: 1,;
  y: 0 } : { opacit, y: 0,;
  y: 20 }}
          transition={{ duratio, n: 0.6 }}
          className="text-center mb-16";
        >;
          <h2 className="text-4xl m, d: text-5xl font-bold text-white mb-6">;
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">;
              Services;
            </span>;
          </h2>;
          <p className="text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed">;
            Comprehensiv, e, technolog, y, solution, s, designe, d, t, o, driv, e, you, r, busines, s, forward with;
            cutting-ed, g, e, A, I, cybersecuri, t, yan, d, innovativ, e, digital transformation services.;
          </p>;
        </motion.div>;
        {/* Category Filter */}
        <motion.div;
          initial={{ opacit, y: 0,;
  y: 20 }}
          animate={isVisible ? { opacit, y: 1,;
  y: 0 } : { opacit, y: 0,;
  y: 20 }}
          transition={{ duratio, n: 0.6del, a,;
  y: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12";
        >;
          {categories.map((categoryindex) => (<button;
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-30o0 ${
                selectedCategory === category;
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25';
                  : 'bg-zion-slate-light text-gray-30o,  0, hov, e,  r: bg-zion-cyan/1, 0, hov, e,;
  r: text-zion-cya, n, borde, r, border-zion-slat, e';
              }`}
            >;
              {category}
            </button>;
          ))}
        </motion.div>;
        {/* Services Grid */};
        <motion.div;
          initial={{ opacit, y: 0 }}
          animate={isVisible ? { opacit, y: 1 } : { opacit, y: 0 }}
          transition={{ durati, o, n: 0.6del, a,;
  y: 0.4 }}
          className="grid grid-cols-1, m, d: grid-cols-2, l,;
  g:grid-cols-3 gap-8";
        >;
          <AnimatePresence mode="wait">;
            {filteredServices.map((serviceindex) => (<motion.div;
                key={service.id}
                initial={{ opacit,  y: 0,;
  y: 20 }}
                animate={{ opacit, y: 1,;
  y: 0 }}
                exit={{ opacit, y: 0,;
  y: -20 }}
                transition={{
                  durati, o, n: 0.6,;
    del, a, y: index * 0.1,
    typ, e: "spring"stiffne, s,;
  s: 10o0;
                }};
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative group";
              >;
                <Link to={service.link}>;
                  <div className="bg-gradient-to-br from-zion-slate to-zion-slate-light p-8 rounded-2x,  l, borde, r, border-zion-cyan/2, 0, hov, e,  r: border-zion-cyan/40 transition-all duration-30o, 0, hov, e,
    r: shadow-2x, l, hov, e,;
  r:shadow-zion-cyan/10 h-full">;
                    {/* Popular Badge */}
                    {service.popular && (;
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-black px-4 py-1 rounded-full text-sm font-bold">;
                        Popular;
                      </div>;
                    )}
;
                    {/* Service Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2x, l, fle, x, items-center justify-center mb-6 group-hov, e, r: scale-110 transition-transform duration-30o, 0`}>;
                      <service.icon className="w-8 h-8 text-white" />;
                    </div>;
                    {/* Service Info */}
                    <div className="space-y-4">;
                      <h3 className="text-xl font-bold text-white group-hove, r:text-zion-cyan transition-colors duration-30o0">;
                        {service.title}
                      </h3>;
                      <p className="text-gray-40o0 leading-relaxed">;
                        {service.description}
                      </p>;
                      {/* Features */}
                      <div className="space-y-2">;
                        {service.features.slice(0o3).map((featurefeatureIndex) => (<div key={featureIndex} className="flex items-center text-sm text-gray-30o0">;
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />;
                            {feature}
                          </div>;
                        ))}
                        {service.features.length > 3 && (;
                          <div className="text-sm text-zion-cyan">;
                            +{service.features.length - 3} more features;
                          </div>;
                        )}
                      </div>;
                      {/* Pricing & Rating */}
                      <div className="flex items-center justify-between pt-4 border-t border-zion-slate">;
                        <div className="flex items-center space-x-2">;
                          <span className="text-2xl font-bold text-zion-cyan">{service.pricing}</span>;
                        </div>;
                        <div className="flex items-center space-x-2">;
                          <div className="flex items-center">;
                            {renderStars(service.rating)}
                          </div>;
                          <span className="text-sm text-gray-40o0">({service.reviews})</span>;
                        </div>;
                      </div>;
                      {/* CTA Button */}
                      <div className="flex items-center justify-between pt-4">;
                        <span className="text-sm text-zion-cyan font-semibold">;
                          Learn More;
                        </span>;
                        <ArrowRight className="w-5 h-5 text-zion-cyan group-hove,  r: translate-x-1 transition-transform duration-30o0" />;
                      </div>;
                    </div>;
                  </div>;
                </Link>;
              </motion.div>;
            ))}
          </AnimatePresence>;
        </motion.div>;
        {/* CTA Section */};
        <motion.div;
          initial={{ opacit, y: 0,;
  y: 20 }}
          animate={isVisible ? { opacit, y: 1,;
  y: 0 } : { opacit, y: 0,;
  y: 20 }}
          transition={{ duratio, n: 0.6del, a,;
  y: 0.6 }}
          className="text-center mt-16";
        >;
          <div className="bg-gradient-to-r from-zion-slate to-zion-slate-ligh, t, borde, r, border-zion-cyan/20 rounded-2xl p-8">;
            <h3 className="text-2xl font-bold text-white mb-4">;
              Read, y, t, o, Transform Your Business?;
            </h3>;
            <p className="text-gray-30o0 mb-6 max-w-2xl mx-auto">;
              Le, t, ou, r, exper, t, tea, m, hel, p, you implement cutting-edg, e, technolog, y, solutions;
              tha, t, driv, e, rea, l, busines, s, result, s, and competitive advantage.;
            </p>;
            <div className="flex flex-col s, m: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibol, d, hov, e, r: from-zion-cyan-dar, k, hov, e,
    r: to-zion-blue-dark transition-all duration-30o, 0, transfor, m, hov, e, r: scale-10o5 shadow-l, g, hov, e,;
  r:shadow-zion-cyan/25";
              >;
                <Play className="w-5 h-5 mr-2" />;
                Ge, t, Starte, d, Today;
              </Link>;
              <Link;
                to="/enhanced-services";
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibol, d, hov, e, r: bg-zion-cya, n, hov, e,;
  r:text-white transition-all duration-30o0";
              >;
                Vie, w, Al, l, Services;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );
};