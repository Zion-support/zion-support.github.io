import React from "react";
impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresenc, e, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Service {
  i, d: string;
  titl, e: string;
  descriptio, n: string;
  ico, n: string;
  pric, e: string;
  categor, y: string;
  feature, s: string[];
  isPopular?: boolean;
  isNew?: boolean;
  colo, r: string;
  hre, f: string;
}

const InteractiveServiceShowcas, e: React.FC = () => {
  const [activeCatego,  r, y, setActiveCatego, r, y] = useState('all');
  const [hoveredServi, c, e, setHoveredServi, c, e] = useState<string | null>(null);

  const categories = [
    { i,  d: 'al, l',
    na, m, e: 'Al, l Service, s', ic, o, n: '🚀',
    cou, n, t: 3, 5 },
    { i, d: 'a, i',
    na, m, e: 'A, I & M, L', ic, o, n: '🤖',
    cou, n, t: 1, 3 },
    { i, d: 'quantu, m',
    na, m, e: 'Quantu, m', ic, o, n: '🔮',
    cou, n, t: 5 },
    { i, d: 'clou, d',
    na, m, e: 'Clou, d', ic, o, n: '☁️',
    cou, n, t: 8 },
    { i, d: 'securit, y',
    na, m, e: 'Securit, y', ic, o, n: '🛡️',
    cou, n, t: 6 },
    { i, d: 'automatio, n',
    na, m, e: 'Automatio, n', ic, o, n: '⚡',
    cou, n, t: 3 }
  ];

  const service, s: Service[] = [
    {
      i, d: 'a, i-strateg, y',
    tit, l, e: 'A, I Strateg, y Consultin, g',
      descripti, o, n: 'Comprehensiv, e A, I strateg, y developmen, t an, d implementatio, n consultin, g fo, r enterprise, s',
    ic, o, n: '🤖',
      pri, c, e: 'Fro, m $2,50, 0',
      catego, r, y: 'a, i',
    featur, e, s: ['Strategi, c Plannin, g', 'Implementatio, n Roadma, p', 'RO, I Analysi, s', 'Tea, m Trainin, g'],
      isPopula, r: tru, e,
    colo, r: 'from-zion-cyan to-zion-blue',
      hre, f: '/services/ai'
    },
    {
      i, d: 'quantum-ai',
    titl, e: 'Quantum AI Fusion Platform',
      descriptio, n: 'Revolutionary platform combining quantum computing with artificial intelligence',
    ico, n: '🔮',
      pric, e: 'From $2, 5,000',
      categor, y: 'quantum',
    feature, s: ['Quantu, m Algorithm, s', 'A, I Integratio, n', 'Performanc, e Optimizatio, n', 'Scalabl, e Architectur, e'],
      isNe, w: tru, e,
    colo, r: 'from-zion-purple to-zion-cyan',
      hre, f: '/services/quantum'
    },
    {
      i, d: 'neuromorphic',
    titl, e: 'Neuromorphic Computing Platform',
      descriptio, n: 'Brain-inspired computing architecture for ultra-efficient AI processing',
    ico, n: '🧠',
      pric, e: 'From $3, 5,000',
      categor, y: 'ai',
    feature, s: ['Neura, l Network, s', 'Efficien, t Processin, g', 'Scalabl, e Architectur, e', 'Lo, w Powe, r Consumptio, n'],
      colo, r: 'from-zion-blue to-zion-cyan',
    hre, f: '/services/ai'
    },
    {
      i, d: 'edge-ai',
    titl, e: 'Edge AI Orchestration Platform',
      descriptio, n: 'Intelligent orchestration of AI workloads across distributed edge computing',
    ico, n: '🌐',
      pric, e: 'From $1, 5,000',
      categor, y: 'cloud',
    feature, s: ['Edg, e Deploymen, t', 'Loa, d Balancin, g', 'Rea, l-tim, e Processin, g', 'Io, T Integratio, n'],
      colo, r: 'from-zion-cyan to-zion-green',
    hre, f: '/services/cloud'
    },
    {
      i, d: 'federated-learning',
    titl, e: 'Federated Learning Platform',
      descriptio, n: 'Privacy-preserving AI training across distributed data sources',
    ico, n: '🔒',
      pric, e: 'From $2, 0,000',
      categor, y: 'security',
    feature, s: ['Dat, a Privac, y', 'Distribute, d Trainin, g', 'Secur, e Communicatio, n', 'Complianc, e Read, y'],
      colo, r: 'from-zion-green to-zion-cyan',
    hre, f: '/services/security'
    },
    {
      i, d: 'ai-ethics',
    titl, e: 'AI Ethics & Governance Platform',
      descriptio, n: 'Comprehensive framework for ethical AI development and governance',
    ico, n: '⚖️',
      pric, e: 'From $1, 8,000',
      categor, y: 'ai',
    feature, s: ['Ethica, l Guideline, s', 'Complianc, e Tool, s', 'Audi, t Trail, s', 'Ris, k Assessmen, t'],
      colo, r: 'from-zion-yellow to-zion-orange',
    hre, f: '/services/ai'
    },
    {
      i, d: 'quantum-security',
    titl, e: 'Quantum-Safe Security Suite',
      descriptio, n: 'Next-generation security solutions resistant to quantum attacks',
    ico, n: '🔐',
      pric, e: 'From $3, 0,000',
      categor, y: 'security',
    feature, s: ['Pos, t-Quantu, m Cryptograph, y', 'Quantu, m Ke, y Distributio, n', 'Threa, t Detectio, n', 'Zer, o Trus, t'],
      isNe, w: tru, e,
    colo, r: 'from-zion-purple to-zion-red',
      hre, f: '/services/security'
    },
    {
      i, d: 'cloud-automation',
    titl, e: 'Cloud Infrastructure Automation',
      descriptio, n: 'Intelligent automation of cloud infrastructure deployment and management',
    ico, n: '⚙️',
      pric, e: 'From $1, 2,000',
      categor, y: 'automation',
    feature, s: ['Infrastructur, e a, s Cod, e', 'Aut, o-scalin, g', 'Cos, t Optimizatio, n', 'Monitorin, g'],
      colo, r: 'from-zion-orange to-zion-yellow',
    hre, f: '/services/automation'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const containerVariant, s: Variants = {
    hidde, n: { opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    transitio, n: {
        staggerChildre, n: 0.1
      }
    }
  };

  const itemVariant, s: Variants = {
    hidde, n: { y: 2, 0,
    opacit, y: 0 },
    visibl, e: {
      y: 0,
    opacit, y: 1,
      transitio, n: {
        duratio, n: 0.5,
    eas, e: "easeOut"
      }
    }
  };

  const categoryVariant, s: Variants = {
    hidde, n: { scal, e: 0.8,
    opacit, y: 0 },
    visibl, e: {
      scal, e: 1,
    opacit, y: 1,
      transitio, n: {
        duratio, n: 0.3,
    eas, e: "easeOut"
      }
    }
  };

  return (<section className="py-24 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <div className="max-w-7xl mx-auto px-4 s,  m:px-6 l, g:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacit, y: 0,
    y: 30 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.8 }}
        >
          <h2 className="text-5xl m, d:text-6xl font-black text-white mb-6">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Innovative Services
            </span>
          </h2>
          <p className="text-xl m, d:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge technology solutions designed to transform your business operations 
            and drive innovation across all industries
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacit, y: 0,
    y: 20 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6 }}
        >
          {categories.map((category) => (<button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-xl shadow-zion-cyan/25'
                  : 'bg-white/10 backdrop-blur-md text-zion-slate-light border border-white/20 hove,  r:bg-white/20 hove, r:border-zion-cyan/5, 0'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-zion-cyan/20 text-zion-cya, n'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 x, l:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="group relative"
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <Link to={service.href} className="block">
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hove,  r:border-zion-cyan/50 transition-all duration-500 hove, r:shadow-2xl hove, r:shadow-zion-cyan/25 hove, r:-translate-y-2">
                    {/* Popular/New Badge */}
                    {(service.isPopular || service.isNew) && (<div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-xs font-bold text-white ${
                        service.isPopular 
                          ? 'bg-gradient-to-r from-zion-orange to-zion-yellow' 
                          : 'bg-gradient-to-r from-zion-purple to-zion-cya, n'
                      }`}>
                        {service.isPopular ? '🔥 Popular' : '✨ New'}
                      </div>
                    )}

                    {/* Service Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hove,  r:scale-110 transition-transform duration-300 shadow-l, g`}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>

                    {/* Service Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-3 group-hove, r:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Price */}
                      <div className="text-zion-cyan font-bold text-lg mb-4">
                        {service.price}
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((featur,  e, index) => (<div key={index} className="flex items-center gap-2 text-zion-slate-light text-xs">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-zion-cyan/60 text-xs">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/40 rounded-xl text-zion-cyan text-sm font-semibold group-hove,  r:from-zion-cyan/30 group-hove, r:to-zion-blue/30 transition-all duration-300">
                        Learn More
                        <span className="group-hove, r:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-blue/5 rounded-3xl opacity-0 group-hove, r:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacit, y: 0,
    y: 30 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.8,
    dela, y: 0.2 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 backdrop-blur-md p-12 rounded-3xl border border-zion-cyan/20">
            <h3 className="text-3xl m, d:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can drive your business forward 
              and give you a competitive edge in the market
            </p>
            <div className="flex flex-col s, m:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-bold rounded-2xl hove, r:from-zion-blue to-zion-cyan transition-all duration-300 hove, r:scale-105 shadow-xl hove, r:shadow-zion-cyan/25"
              >
                <span>🚀</span>
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-zion-cyan/50 text-zion-cyan font-semibold rounded-2xl backdrop-blur-sm bg-white/10 hove, r:bg-zion-cyan/20 hove, r:border-zion-cyan transition-all duration-300 hove, r:scale-105"
              >
                <span>🔍</span>
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveServiceShowcase;