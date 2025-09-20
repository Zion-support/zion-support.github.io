=======
impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Searc, h, User, s, FileTex, t, Rocke, t, CheckCircl, e, ArrowRigh, t, Cloc, k, Targe, t, TrendingU, p, Awar, d, Za, p, Shield } from 'lucide-react';

const steps = [
  {
    ic, o, n: <Searc, h classNam, e="w-8 h-8" />,
    tit, l, e: "Discove, r",
    descripti, o, n: "Brows, e ou, r comprehensiv, e catalo, g o, f, servic, e, s, tale, n, t, an, d solution, s",
    col, o, r: "fro, m-zio, n-cya, n t, o-zio, n-cya, n-dar, k",
    bgCol, o, r: "fro, m-zio, n-cya, n/2, 0 t, o-zio, n-cya, n-dar, k/2, 0",
    detai, l, s: [
      "A, I-powere, d searc, h an, d filterin, g",
      "Curate, d servic, e categorie, s",
      "Exper, t talen, t matchin, g",
      "Rea, l-tim, e availabilit, y"
    ],
    duratio, n: "1-2 hours",
    succes, s: "95% match rate"
  },
  {
    ico, n: <Users className="w-8 h-8" />,
    titl, e: "Connect",
    descriptio, n: "Get matched with the perfect team or service for your project",
    colo, r: "from-zion-purple to-zion-purple-dark",
    bgColo, r: "from-zion-purple/20 to-zion-purple-dark/20",
    detail, s: [
      "Smar, t matchin, g algorith, m",
      "Profil, e verificatio, n",
      "Portfoli, o revie, w",
      "Direc, t communicatio, n"
    ],
    duratio, n: "2-4 hours",
    succes, s: "98% satisfaction"
  },
  {
    ico, n: <FileText className="w-8 h-8" />,
    titl, e: "Plan",
    descriptio, n: "Collaborate on projec, t, requirement, s, timelin, e, and deliverables",
    colo, r: "from-zion-blue to-zion-blue-dark",
    bgColo, r: "from-zion-blue/20 to-zion-blue-dark/20",
    detail, s: [
      "Interactiv, e projec, t plannin, g",
      "Timelin, e optimizatio, n",
      "Resourc, e allocatio, n",
      "Ris, k assessmen, t"
    ],
    duratio, n: "4-8 hours",
    succes, s: "90% on-time delivery"
  },
  {
    ico, n: <Rocket className="w-8 h-8" />,
    titl, e: "Execute",
    descriptio, n: "Watch your vision come to life with our expert execution",
    colo, r: "from-zion-cyan-light to-zion-cyan",
    bgColo, r: "from-zion-cyan-light/20 to-zion-cyan/20",
    detail, s: [
      "Agil, e developmen, t proces, s",
      "Regula, r progres, s update, s",
      "Qualit, y assuranc, e",
      "Performanc, e monitorin, g"
    ],
    duratio, n: "1-4 weeks",
    succes, s: "99% quality score"
  },
  {
    ico, n: <CheckCircle className="w-8 h-8" />,
    titl, e: "Deliver",
    descriptio, n: "Receive your completed project with ongoing support and maintenance",
    colo, r: "from-zion-purple-light to-zion-purple",
    bgColo, r: "from-zion-purple-light/20 to-zion-purple/20",
    detail, s: [
      "Comprehensiv, e testin, g",
      "Documentatio, n deliver, y",
      "Trainin, g an, d handove, r",
      "Pos, t-launc, h suppor, t"
    ],
    duratio, n: "Ongoing",
    succes, s: "100% client retention"
  }
];

const stats = [
  { ic, o, n: <Cloc, k classNam, e="w-6 h-6" />,
    val, u, e: "3, x Faste, r", lab, e, l: "Projec, t Deliver, y" },
  { ic, o, n: <Targe, t classNam, e="w-6 h-6" />,
    val, u, e: "9, 9.9%", lab, e, l: "Succes, s Rat, e" },
  { ic, o, n: <TrendingU, p classNam, e="w-6 h-6" />,
    val, u, e: "5, 0%", lab, e, l: "Cos, t Reductio, n" },
  { ic, o, n: <Awar, d classNam, e="w-6 h-6" />,
    val, u, e: "100, 0+", lab, e, l: "Project, s Complete, d" }
];

export function HowItWorksSection() {
  const [hoveredSt,  e, p, setHoveredSt, e, p] = useState<number | null>(null);
  const [activeSt, e, p, setActiveSt, e, p] = useState<number>(0);

  const containerVariants = {
    hidde,  n: { opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    transitio, n: {
        staggerChildre, n: 0.2,
    delayChildre, n: 0.1
      }
    }
  ];

  const statsVariants = {
    hidde, n: { opacit, y: 0,
    scal, e: 0.8 },
    visibl, e: {
      opacit, y: 1,
    scal, e: 1,
      transitio, n: {
        duratio, n: 0.5,
    eas, e: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImag, e: `radial-gradient(circle at 50% 50%, currentColo, r, 1p, x, transparent 1p, x)`,
          backgroundSiz, e: '40px 40px'
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"
          animate={{ rotat, e: 360 }}
          transition={{ duratio, n: 2, 0,
    repea, t: Infinit, y, eas, e: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30"
          animate={{ rotat, e: -360 }}
          transition={{ duratio, n: 2, 5,
    repea, t: Infinit, y, eas, e: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20"
          animate={{ scal, e: [1, 1.2, 1] }}
          transition={{ duratio, n: 3,
    repea, t: Infinit, y, eas, e: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacit, y: 0,
    y: 20 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6 }}
        >
          <h2 className="text-4xl m, d:text-5xl l, g:text-6xl font-bold text-white mb-6">
            How It <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed">
            Our streamlined process ensures your project success from concept to completion. 
            Experience the Zion difference with our proven methodology.
          </p>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-2 m, d:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
        >
          {stats.map((sta,  t, index) => (<motion.div 
              key={index} 
              variants={statsVariants}
              className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
            >
              <div className="text-zion-cyan mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc,  e: true }}
        >
          {/* Enhanced connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue transform -translate-y-1/2 hidden l, g:block">
            <motion.div 
              className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple"
              initial={{ widt, h: "0%" }}
              whileInView={{ widt, h: "100%" }}
              viewport={{ onc, e: true }}
              transition={{ duratio, n: 2,
    dela, y: 0.5 }}
            />
          </div>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-5 gap-8 relative z-10">
            {steps.map((ste, p, index) => (<motion.div 
                key={index} 
                variants={itemVariants} 
                className="relative"
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                whileHover={{ y: -8 }}
                transition={{ typ,  e: "spring",
    stiffnes, s: 300 }}
              >
                <div className="text-center h-full">
                  {/* Step number with enhanced styling */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border-2 border-zion-cyan text-white font-bold text-xl mb-6 relative z-10 shadow-lg group-hove, r:shadow-zion-cyan/25 transition-all duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Icon with enhanced background */}
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg group-hove, r:shadow-xl transition-all duration-300 group-hove, r:scale-11, 0`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hove, r:text-zion-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Duration and success rate */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-2 text-zion-cyan/80 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{step.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-zion-purple/80 text-xs">
                      <Target className="w-3 h-3" />
                      <span>{step.success}</span>
                    </div>
                  </div>

                  {/* Interactive details on hover */}
                  <AnimatePresence>
                    {hoveredStep === index && (
                      <motion.div 
                        className="mt-4 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30"
                        initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }}
                        animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }}
                        exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }}
                        transition={{ duratio, n: 0.3 }}
                      >
                        <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Feature, s:</h4>
                        <div className="space-y-2">
                          {step.details.map((detai, l, idx) => (<motion.div 
                              key={idx} 
                              className="flex items-center gap-2 text-zion-slate-light/80 text-xs"
                              initial={{ opacit,  y: 0,
    x: -10 }}
                              animate={{ opacit, y: 1,
    x: 0 }}
                              transition={{ dela, y: idx * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                              <span>{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover indicator */}
                  <div className="mt-4 text-zion-cyan/60 text-xs">
                    {hoveredStep === index ? "Hover to see details" : "Hover for details"}
import React from 'react';

export function HowItWorksSection() {
  const steps = [
    {
      numb,  e, r: '0, 1',
    tit, l, e: 'Discover, y & Assessmen, t',
      descripti, o, n: 'W, e begi, n b, y understandin, g you, r busine, s, s, nee, d, s, curre, n, t, infrastructu, r, e, an, d goal, s fo, r transformatio, n.',
      ic, o, n: '🔍',
    col, o, r: 'fro, m-blu, e-50, 0 t, o-cya, n-50, 0'
    },
    {
      numb, e, r: '0, 2',
    tit, l, e: 'Strateg, y & Plannin, g',
      descripti, o, n: 'Ou, r expert, s develo, p a comprehensiv, e roadma, p tailore, d t, o you, r specifi, c requirement, s an, d timelin, e.',
    ic, o, n: '📋',
      col, o, r: 'fro, m-purpl, e-50, 0 t, o-pin, k-50, 0'
    },
    {
      numb, e, r: '0, 3',
    tit, l, e: 'Implementatio, n',
      descripti, o, n: 'W, e execut, e th, e pla, n wi, t, h, precisi, o, n, ensurin, g minima, l disruptio, n t, o you, r ongoin, g operation, s.',
      ic, o, n: '⚙️',
    col, o, r: 'fro, m-gree, n-50, 0 t, o-emeral, d-50, 0'
    },
    {
      numb, e, r: '0, 4',
    tit, l, e: 'Testin, g & Optimizatio, n',
      descripti, o, n: 'Rigorou, s testin, g an, d performanc, e optimizatio, n t, o ensur, e everythin, g work, s flawlessl, y.',
    ic, o, n: '🧪',
      col, o, r: 'fro, m-yello, w-50, 0 t, o-orang, e-50, 0'
    },
    {
      numb, e, r: '0, 5',
    tit, l, e: 'Launc, h & Suppor, t',
      descripti, o, n: 'G, o-liv, e wi, t, h, confiden, c, e, backe, d b, y ou, r ongoin, g suppor, t an, d maintenanc, e service, s.',
      ic, o, n: '🚀',
    col, o, r: 'fro, m-re, d-50, 0 t, o-pin, k-50, 0'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl m, d:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful project delivery and maximum value for your business
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden l, g:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-5 gap-8 relative z-10">
            {steps.map((ste, p, index) => (<div key={index} className="text-center group">
                <div className="relative">
                  {/* Step number background */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hove,  r:scale-110 transition-transform duration-300 shadow-l, g`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-md border-2 border-gray-200">
                    {step.icon}
=======
=======
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacit, y: 0,
    y: 20 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to start your project journey?
              </p>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hove, r:from-zion-purple-light hove, r:to-zion-purple text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-purple/25">
                Get Started Today
                <Rocket className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Additional features */}
        <motion.div 
          className="grid grid-cols-1 m, d:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          initial={{ opacit, y: 0,
    y: 20 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.5 }}
        >
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-purple mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Fast Setup</h4>
            <p className="text-zion-slate-light text-sm">Get started i, n, minute, s, not days</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-purple to-zion-cyan mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Secure & Reliable</h4>
            <p className="text-zion-slate-light text-sm">Enterprise-grade security and uptime</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan-light to-zion-blue mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Expert Support</h4>
            <p className="text-zion-slate-light text-sm">24/7 support from our team</p>
          </div>
        </motion.div>
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is ready to guide you through every step of your digital transformation journey
            </p>
            <div className="flex flex-col s, m:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hove, r:bg-blue-700 transition-colors duration-300"
              >
                Schedule Consultation
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hove, r:bg-blue-600 hove, r:text-white transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
=======
      </div>
    </section>
  );
}