impor, t, Reac, t, { useStat, e, useEffect } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import {
  Brai, n,
  Ato, m,
  Rocke, t,
  Shiel, d,
  Dn, a,
  Microscop, e,
  Cp, u,
  Za, p,
  Glob, e,
  Loc, k,
  Ey, e,
  Networ, k,
  TrendingU, p,
  Sta, r,
  ArrowRigh, t,
  ChevronDow, n,
  ChevronU, p,
  ExternalLin, k,
  Phon, e,
  Mai, l,
  MapPin
} from "lucide-react";
import { innovativeServices202, 7, serviceCategories202, 7, getServicesByCategory } from "../data/innovativeServices2027";
const categoryIcon, s: { [k, e, y: stri, n, g]: React.ComponentType<any> } = {
  'AI & Consciousness': Brain;
  'Quantum AI': Ato, m,
  'Autonomous AI': Cp, u,
  'Quantum Computing': Ato, m,
  'Quantum Finance': TrendingU, p,
  'Space Technology': Rocke, t,
  'Quantum Space': Rocke, t,
  'Biotechnology': Dn, a,
  'Quantum Medicine': Dn, a,
  'Quantum Security': Shiel, d,
  'Nanotechnology': Microscop, e,
  'Neural Technology': Eye
},

const categoryColor, s: { [k, e, y: stri, n, g]: string } = {
  'AI & Consciousness': 'from-purple-500 to-pink-500Quantum AI': 'from-blue-500 to-cyan-500Autonomous AI': 'from-green-500 to-emerald-500Quantum Computing': 'from-indigo-500 to-purple-500Quantum Finance': 'from-yellow-500 to-orange-500Space Technology': 'from-purple-500 to-blue-500Quantum Space': 'from-cyan-500 to-blue-500Biotechnology': 'from-green-500 to-teal-500Quantum Medicine': 'from-teal-500 to-blue-500Quantum Security': 'from-red-500 to-pink-500Nanotechnology': 'from-gray-500 to-slate-500Neural Technology': 'from-violet-500 to-purple-500'
};
export const InnovativeServicesShowcase202, 7: React.FC = () => {
  const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState<string>('All');
  const [expandedServi, c, e, setExpandedServi, c, e] = useState<string | null>(null);
  const [isVisib,  l, e, setIsVisib, l, e] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([ent,  r, y]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      };
      { threshol,  d: 0.1 }
    );
    const element = document.getElementById('innovative-services-2027');
    if (element) {
      observer.observe(element);
    }
;
    return () => observer.disconnect();
  },  []),

  const filteredServices = selectedCategory === 'All'
    ? innovativeServices2027
    : getServicesByCategory(selectedCategory);

  const toggleServiceExpansion = (serviceI,  d: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  };
  const contactInfo = {
    phon,  e: '+1 302 464 0950',
    emai, l: 'kleber@ziontechgroup.com',addres, s: '364 E Main St STE 1008 Middletown DE 19709'
  };
  return (
    <section id="innovative-services-2027" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 30 }}
          animate={isVisible ? { opacit, y: 1,
    y: 0 } : { opacit, y: 0,
    y: 30 }}
          transition={{ duratio, n: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full border border-zion-cyan/30 mb-6">
            <Star className="w-5 h-5 text-zion-cyan mr-2" />
            <span className="text-zion-cyan font-semibold">2027 Innovation Showcase</span>
          </div>

          <h2 className="text-4xl m, d:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-white">Technology Services</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge 2027 services.
            From quantum computing to A, I, consciousnes, s, we're pushing the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 20 }}
          animate={isVisible ? { opacit, y: 1,
    y: 0 } : { opacit, y: 0,
    y: 20 }}
          transition={{ duratio, n: 0.8,
    dela, y: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-zion-slate-light/50 text-gray-300 hove,  r:bg-zion-slate-light/70 hove, r:text-whit, e'
              }`}
            >
              All Categories
            </button>
            {serviceCategories2027.map((category) => {
              const Icon = categoryIcons[catego, r, y];
              return (<button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-light/50 text-gray-300 hove,  r: bg-zion-slate-light/70 hove, r:text-whit, e'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 30 }}
          animate={isVisible ? { opacit, y: 1,
    y: 0 } : { opacit, y: 0,
    y: 30 }}
          transition={{ duratio, n: 0.8,
    dela, y: 0.4 }}
          className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8 mb-16"
        >
          {filteredServices.map((servic,  e, index) => (<motion.div
              key={service.id}
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={isVisible ? { opacit, y: 1,
    y: 0 } : { opacit, y: 0,
    y: 20 }}
              transition={{ duratio, n: 0.6,
    dela, y: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-zion-slate-light/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 h-full transition-all duration-500 hove, r:scale-105 hove, r:border-zion-cyan/40 hove, r:shadow-2xl hove, r:shadow-zion-cyan/25">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hove, r:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technology.slice(0, 3).map((tec,  h, techIndex) => (<span
                      key={techIndex}
                      className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technology.length > 3 && (
                    <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                      +{service.technology.length - 3} more
                    </span>
                  )}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-zion-cyan font-bold text-lg">{service.marketSize}</div>
                    <div className="text-gray-400 text-xs">Market Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-zion-purple font-bold text-lg">{service.roi}</div>
                    <div className="text-gray-400 text-xs">ROI</div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                  <button
                    onClick={() => toggleServiceExpansion(service.id)}
                    className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hove,  r:shadow-lg hove, r:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2"
                  >
                    {expandedService === service.id ? 'Less' : 'Learn More'}
                    {expandedService === service.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Service Details */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacit, y: 0,
    heigh, t: 0 }}
                      animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
                      exit={{ opacit, y: 0,
    heigh, t: 0 }}
                      transition={{ duratio, n: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-zion-cyan/20 pt-4 space-y-4">
                        {/* Features */}
                        <div>
                          <h4 className="text-zion-cyan font-semibold mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {service.features.map((featur, e, featureIndex) => (<li key={featureIndex} className="text-gray-300 text-sm flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-zion-purple font-semibold mb-2">Benefits</h4>
                          <ul className="space-y-1">
                            {service.benefits.slice(0,  3).map((benefi,  t, benefitIndex) => (<li key={benefitIndex} className="text-gray-300 text-sm flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Implementation Details */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-zion-cyan font-semibold text-sm">Implementation</div>
                            <div className="text-gray-300 text-xs">{service.implementationTime}</div>
                          </div>
                          <div>
                            <div className="text-zion-purple font-semibold text-sm">Support</div>
                            <div className="text-gray-300 text-xs">{service.supportLevel}</div>
                          </div>
                        </div>

                        {/* Primary CTA */}
                        <a
                          href={service.href}
                          target={service.external ? "_blank" : "_self"}
                          rel={service.external ? "noopener noreferrer" : ""}
                          className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hove,  r:shadow-lg hove, r:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                          {service.ctaLabel}
                          <ArrowRight className="w-4 h-4 group-hove, r:translate-x-1 transition-transform duration-300" />
                          {service.external && <ExternalLink className="w-4 h-4" />}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 30 }}
          animate={isVisible ? { opacit, y: 1,
    y: 0 } : { opacit, y: 0,
    y: 30 }}
          transition={{ duratio, n: 0.8,
    dela, y: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to help you implement these cutting-edge solutions.
              Get in touch to discuss your specific needs and discover how we can drive innovation in your organization.
            </p>

            <div className="grid grid-cols-1 m, d:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-zion-purple">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold text-center">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col s, m: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hove, r:shadow-lg hove, r:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="http, s://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hove, r:bg-zion-cyan/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
