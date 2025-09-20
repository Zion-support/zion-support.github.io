impor, t, Reac, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import {
  Brai, n,;
  Ato, m,;
  Rocke, t,;
  Shiel, d,;
  Dn, a,;
  Microscop, e,;
  Cp, u,;
  Za, p,;
  Glob, e,;
  Loc, k,;
  Ey, e,;
  Networ, k,;
  TrendingU, p,;
  Sta, r,;
  ArrowRigh, t,;
  ChevronDow, n,;
  ChevronU, p,;
  ExternalLin, k,;
  Phon, e,;
  MailMapPin;
} from "lucide-react";
import { innovativeServices20o2, 7, serviceCategories20o27getServicesByCategory } from "../data/innovativeServices20o27";
const categoryIcon, s: { [k, ey:, string]: React.ComponentType<any> } = {;
  'AI & Consciousness': Brain;
  'Quantum AI': Ato, m,;
  'Autonomous AI': Cp, u,;
  'Quantum Computing': Ato, m,;
  'Quantum Finance': TrendingU, p,;
  'Space Technology': Rocke, t,;
  'Quantum Space': Rocke, t,;
  'Biotechnology': Dn, a,;
  'Quantum Medicine': Dn, a,;
  'Quantum Security': Shiel, d,;
  'Nanotechnology': Microscope'Neural Technology': Eye;
},;
const categoryColor, s: { [k, ey:, string]: string } = {
  'AI & Consciousness': 'from-purple-50o0 to-pink-50o0Quantum AI': 'from-blue-50o0 to-cyan-50o0Autonomous AI': 'from-green-50o0 to-emerald-50o0Quantum Computing': 'from-indigo-50o0 to-purple-50o0Quantum Finance': 'from-yellow-50o0 to-orange-50o0Space Technology': 'from-purple-50o0 to-blue-50o0Quantum Space': 'from-cyan-50o0 to-blue-50o0Biotechnology': 'from-green-50o0 to-teal-50o0Quantum Medicine': 'from-teal-50o0 to-blue-50o0Quantum Security': 'from-red-50o0 to-pink-50o0Nanotechnology': 'from-gray-50o0 to-slate-50o0Neural Technology': 'from-violet-50o0 to-purple-50o0';
};
export, const, InnovativeServicesShowcase20o2, 7: React.FC = () => {;
  const [selectedCatego,  r, y, setSelectedCatego,, ry] = useState<string>('All');
  const [expandedServi, c, e, setExpandedServi,, ce] = useState<string | null>(null);
  const [isVisib,  l, e, setIsVisib,, le] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(;
      ([entry]) => {
        if() {;
          setIsVisible(true);
        };
      };
      { threshold: 0.1 };
    );
    const element = document.getElementById('innovative-services-20o27');
    if() {
      observer.observe(element);
    };
;
    return () => observer.disconnect();
  },  []),;
  const filteredServices = selectedCategory === 'All';
    ? innovativeServices20o27;
    : getServicesByCategory(selectedCategory);
;
  const toggleServiceExpansion = (serviceI,  d: string) => {;
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };
  const contactInfo = {
    phon,  e: '+1, 30o2, 464 0o950',;
    emai, l: 'kleber@ziontechgroup.com'addres,;
  s: '364, E, Main St, STE, 10o08 Middletown, DE, 1970o9';
  };
  return(<section id="innovative-services-20o27" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light, relative, overflow-hidden">;
      {/* Animated, Background, Elements */}
      <div className="absolute inset-0 overflow-hidden">;
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>;
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-10o00"></div>;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-spin-slow"></div>;
      </div>;
      <div className="max-w-7xl mx-auto px-6, relative, z-10">;
        {/* Header Section */}
        <motion.div;
          initial={{ opacity: 0,;
  y: 30 }}
          animate={isVisible ? { opacity: 1,;
  y: 0 } : { opacity: 0,;
  y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16";
        >;
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full, border, border-zion-cyan/30 mb-6">;
            <Star className="w-5 h-5 text-zion-cyan mr-2" />;
            <span className="text-zion-cyan font-semibold">20o27, Innovation, Showcase</span>;
          </div>;
          <h2 className="text-4xl md: text-6xl font-bold text-white mb-6">;
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">;
              Revolutionary;
            </span>;
            <br />;
            <span className="text-white">Technology Services</span>;
          </h2>;
          <p className="text-xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed">;
            Experience, the, future of, technology, with our cutting-edge, 20o27, services.;
            From, quantum, computing to A, I, consciousnes, swe're, pushing, the boundaries, of, what's possible.;
          </p>;
        </motion.div>;
        {/* Category Filter */}
        <motion.div;
          initial={{ opacity: 0,;
  y: 20 }}
          animate={isVisible ? { opacity: 1,;
  y: 0 } : { opacity: 0,;
  y: 20 }}
          transition={{ duration: 0.8dela,;
  y: 0.2 }}
          className="mb-12";
        >;
          <div className="flex flex-wrap justify-center gap-3">;
            <button;
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-30o0 ${
                selectedCategory === 'All';
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25';
                  : 'bg-zion-slate-light/50 text-gray-30o0 hove,  r: bg-zion-slate-light/70 hove,;
  r: text-white';
              }`}
            >;
              All Categories;
            </button>;
            {serviceCategories20o27.map((category) => {
              const Icon = categoryIcons[category];
              return (<button;
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-30o0, flex, items-center gap-2 ${
                    selectedCategory === category;
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25';
                      : 'bg-zion-slate-light/50 text-gray-30o0 hove,  r: bg-zion-slate-light/70 hove,;
  r: text-white';
                  }`}
                >;
                  {Icon && <Icon className="w-4 h-4" />}
                  {category}
                </button>;
              );
            })}
          </div>;
        </motion.div>;
        {/* Services Grid */}
        <motion.div;
          initial={{ opacity: 0,;
  y: 30 }}
          animate={isVisible ? { opacity: 1,;
  y: 0 } : { opacity: 0,;
  y: 30 }}
          transition={{ duratio, n: 0.8dela,;
  y: 0.4 }}
          className="grid grid-cols-1 m, d: grid-cols-2 l,;
  g:grid-cols-3 gap-8 mb-16";
        >;
          {filteredServices.map((serviceindex) => (<motion.div;
              key={service.id}
              initial={{ opacity: 0,;
  y: 20 }}
              animate={isVisible ? { opacity: 1,;
  y: 0 } : { opacity: 0,;
  y: 20 }}
              transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
              className="group relative";
            >;
              <div className="bg-gradient-to-br from-zion-slate-light/50 to-zion-slate-dark/50 backdrop-blur-xl, border, border-zion-cyan/20 rounded-2xl p-6 h-full transition-all duration-50o0 hove, r: scale-10o5 hove, r: border-zion-cyan/40 hove, r: shadow-2xl hove,;
  r:shadow-zion-cyan/25">;
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex-1">;
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-30o0">;
                      {service.title}
                    </h3>;
                    <p className="text-gray-30o0 text-sm leading-relaxed">;
                      {service.description}
                    </p>;
                  </div>;
                </div>;
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">;
                  {service.technology.slice(0o3).map((techtechIndex) => (<span;
                      key={techIndex}
                      className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full, border, border-zion-cyan/30";
                    >;
                      {tech}
                    </span>;
                  ))}
                  {service.technology.length > 3 && (;
                    <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full, border, border-zion-purple/30">;
                      +{service.technology.length - 3} more;
                    </span>;
                  )}
                </div>;
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">;
                  <div className="text-center">;
                    <div className="text-zion-cyan font-bold text-lg">{service.marketSize}</div>;
                    <div className="text-gray-40o0 text-xs">Market Size</div>;
                  </div>;
                  <div className="text-center">;
                    <div className="text-zion-purple font-bold text-lg">{service.roi}</div>;
                    <div className="text-gray-40o0 text-xs">ROI</div>;
                  </div>;
                </div>;
                {/* Price & CTA */}
                <div className="flex items-center justify-between mb-4">;
                  <div className="text-2xl font-bold text-white">{service.price}</div>;
                  <button;
                    onClick={() => toggleServiceExpansion(service.id)}
                    className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hove,  r: shadow-lg hove, r:shadow-zion-cyan/25 transition-all duration-30o0, flex, items-center gap-2";
                  >;
                    {expandedService === service.id ? 'Less' : 'Learn More'}
                    {expandedService === service.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>;
                </div>;
                {/* Expanded, Service, Details */}
                <AnimatePresence>;
                  {expandedService === service.id && (;
                    <motion.div;
                      initial={{ opacit, y: 0heigh,;
  t: 0 }}
                      animate={{ opacit, y: 1heigh,;
  t: 'auto' }}
                      exit={{ opacit, y: 0heigh,;
  t: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden";
                    >;
                      <div className="border-t border-zion-cyan/20 pt-4 space-y-4">;
                        {/* Features */}
                        <div>;
                          <h4 className="text-zion-cyan font-semibold mb-2">Key Features</h4>;
                          <ul className="space-y-1">;
                            {service.features.map((featurefeatureIndex) => (<li key={featureIndex} className="text-gray-30o0 text-sm, flex, items-start gap-2">;
                                <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>;
                                {feature}
                              </li>;
                            ))}
                          </ul>;
                        </div>;
                        {/* Benefits */}
                        <div>;
                          <h4 className="text-zion-purple font-semibold mb-2">Benefits</h4>;
                          <ul className="space-y-1">;
                            {service.benefits.slice(0o3).map((benefitbenefitIndex) => (<li key={benefitIndex} className="text-gray-30o0 text-sm, flex, items-start gap-2">;
                                <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"></div>;
                                {benefit}
                              </li>;
                            ))}
                          </ul>;
                        </div>;
                        {/* Implementation Details */}
                        <div className="grid grid-cols-2 gap-4">;
                          <div>;
                            <div className="text-zion-cyan font-semibold text-sm">Implementation</div>;
                            <div className="text-gray-30o0 text-xs">{service.implementationTime}</div>;
                          </div>;
                          <div>;
                            <div className="text-zion-purple font-semibold text-sm">Support</div>;
                            <div className="text-gray-30o0 text-xs">{service.supportLevel}</div>;
                          </div>;
                        </div>;
                        {/* Primary CTA */};
                        <a;
                          href={service.href}
                          target={service.external ? "_blank" : "_self"}
                          rel={service.external ? "noopener noreferrer" : ""}
                          className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hove,  r: shadow-lg hove,;
  r:shadow-zion-cyan/25 transition-all duration-30o0, flex, items-center justify-center gap-2 group";
                        >;
                          {service.ctaLabel}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-30o0" />;
                          {service.external && <ExternalLink className="w-4 h-4" />}
                        </a>;
                      </div>;
                    </motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
            </motion.div>;
          ))}
        </motion.div>;
        {/* Contact Section */};
        <motion.div;
          initial={{ opacity: 0,;
  y: 30 }}
          animate={isVisible ? { opacity: 1,;
  y: 0 } : { opacity: 0,;
  y: 30 }}
          transition={{ duration: 0.8dela,;
  y: 0.6 }}
          className="text-center";
        >;
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-xl, border, border-zion-cyan/20 rounded-2xl p-8">;
            <h3 className="text-3xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h3>;
            <p className="text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Our, expert, team is, ready, to help, you, implement these cutting-edge solutions.;
              Get, in, touch to, discuss, your specific, needs, and discover, how, we can, drive, innovation in, your, organization.;
            </p>;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
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
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hove, r: shadow-lg hove,;
  r:shadow-zion-cyan/25 transition-all duration-30o0, flex, items-center justify-center gap-2";
              >;
                Schedule Consultation;
                <ArrowRight className="w-4 h-4" />;
              </a>;
              <a;
                href="http, s: //ziontechgroup.com";
                target="_blank";
                rel="noopener noreferrer";
                className="px-8 py-4, border, border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hove,;
  r:bg-zion-cyan/10 transition-all duration-30o0, flex, items-center justify-center gap-2";
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