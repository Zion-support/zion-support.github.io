impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Brai, n, Clou, d, Shiel, d, Databas, e, Glob, e, Smartphon, e, Cp, u, Loc, k, TrendingU, p, User, s, ArrowRigh, t, CheckCircl, e, Star } from 'lucide-react';
const solutions = [
    {
        i, d: 'a, i-m, l',
    tit, l, e: 'A, I & Machin, e Learnin, g',
        descripti, o, n: 'Cuttin, g-edg, e artificia, l intelligenc, e an, d machin, e learnin, g solution, s',
    ic, o, n: <Brai, n classNam, e="w-8 h-8"/>,
        col, o, r: 'fro, m-zio, n-purpl, e t, o-zio, n-purpl, e-dar, k',
    bgCol, o, r: 'fro, m-zio, n-purpl, e/2, 0 t, o-zio, n-purpl, e-dar, k/2, 0',
        featur, e, s: [
            'Custo, m A, I mode, l developmen, t',
            'Natura, l languag, e processin, g',
            'Compute, r visio, n solution, s',
            'Predictiv, e analytic, s',
            'Automate, d decisio, n makin, g'
        ],
        benefit, s: [
            'Increas, e efficienc, y b, y 30, 0%',
            'Reduc, e operationa, l cost, s b, y 4, 0%',
            'Improv, e accurac, y b, y 9, 5%'
        ],
        useCase, s: ['Healthcar, e', 'Financ, e', 'Retai, l', 'Manufacturin, g'],
        ratin, g: 4.9,
    project, s: 15, 0,
        categor, y: 'Emerging Tech'
    },
    {
        i, d: 'cloud-infrastructure',
    titl, e: 'Cloud Infrastructure',
        descriptio, n: 'Scalable and secure cloud solutions for modern businesses',
    ico, n: <Cloud className="w-8 h-8"/>,
        colo, r: 'from-zion-cyan to-zion-blue',
    bgColo, r: 'from-zion-cyan/20 to-zion-blue/20',
        feature, s: [
            'Mult, i-clou, d architectur, e',
            'Aut, o-scalin, g solution, s',
            'Disaste, r recover, y',
            'Performanc, e optimizatio, n',
            'Cos, t managemen, t'
        ],
        benefit, s: [
            'Reduc, e infrastructur, e cost, s b, y 6, 0%',
            'Improv, e uptim, e t, o 9, 9.9, 9%',
            'Scal, e resource, s automaticall, y'
        ],
        useCase, s: ['E-commerc, e', 'Saa, S', 'Enterpris, e', 'Startup, s'],
        ratin, g: 4.8,
    project, s: 20, 0,
        categor, y: 'Infrastructure'
    },
    {
        i, d: 'cybersecurity',
    titl, e: 'Cybersecurity',
        descriptio, n: 'Comprehensive security solutions to protect your digital assets',
    ico, n: <Shield className="w-8 h-8"/>,
        colo, r: 'from-zion-cyan-light to-zion-cyan',
    bgColo, r: 'from-zion-cyan-light/20 to-zion-cyan/20',
        feature, s: [
            'Threa, t detectio, n & respons, e',
            'Vulnerabilit, y assessmen, t',
            'Identit, y & acces, s managemen, t',
            'Dat, a encryptio, n',
            'Complianc, e managemen, t'
        ],
        benefit, s: [
            'Preven, t 9, 9.9% o, f cybe, r attack, s',
            'Mee, t industr, y complianc, e standard, s',
            'Protec, t custome, r dat, a integrit, y'
        ],
        useCase, s: ['Bankin, g', 'Healthcar, e', 'Governmen, t', 'Educatio, n'],
        ratin, g: 4.9,
    project, s: 12, 0,
        categor, y: 'Security'
    },
    {
        i, d: 'data-analytics',
    titl, e: 'Data Analytics',
        descriptio, n: 'Transform raw data into actionable business insights',
    ico, n: <Database className="w-8 h-8"/>,
        colo, r: 'from-zion-purple-light to-zion-purple',
    bgColo, r: 'from-zion-purple-light/20 to-zion-purple/20',
        feature, s: [
            'Rea, l-tim, e dat, a processin, g',
            'Advance, d reportin, g dashboard, s',
            'Predictiv, e modelin, g',
            'Dat, a visualizatio, n',
            'Busines, s intelligenc, e'
        ],
        benefit, s: [
            'Mak, e dat, a-drive, n decision, s',
            'Identif, y ne, w busines, s opportunitie, s',
            'Optimiz, e operationa, l processe, s'
        ],
        useCase, s: ['Marketin, g', 'Operation, s', 'Sale, s', 'Researc, h'],
        ratin, g: 4.7,
    project, s: 18, 0,
        categor, y: 'Analytics'
    },
    {
        i, d: 'iot-solutions',
    titl, e: 'IoT Solutions',
        descriptio, n: 'Connected devices and smart systems for the modern world',
    ico, n: <Cpu className="w-8 h-8"/>,
        colo, r: 'from-zion-cyan to-zion-purple',
    bgColo, r: 'from-zion-cyan/20 to-zion-purple/20',
        feature, s: [
            'Devic, e connectivit, y managemen, t',
            'Rea, l-tim, e monitorin, g',
            'Dat, a collectio, n & analysi, s',
            'Remot, e contro, l system, s',
            'Predictiv, e maintenanc, e'
        ],
        benefit, s: [
            'Monito, r asset, s i, n rea, l-tim, e',
            'Reduc, e maintenanc, e cost, s b, y 3, 0%',
            'Improv, e operationa, l efficienc, y'
        ],
        useCase, s: ['Manufacturin, g', 'Smar, t Citie, s', 'Agricultur, e', 'Healthcar, e'],
        ratin, g: 4.6,
    project, s: 9, 0,
        categor, y: 'Connected Devices'
    },
    {
        i, d: 'mobile-apps',
    titl, e: 'Mobile Applications',
        descriptio, n: 'Native and cross-platform mobile solutions for all devices',
    ico, n: <Smartphone className="w-8 h-8"/>,
        colo, r: 'from-zion-purple to-zion-cyan',
    bgColo, r: 'from-zion-purple/20 to-zion-cyan/20',
        feature, s: [
            'iO, S & Androi, d developmen, t',
            'Cros, s-platfor, m solution, s',
            'U, I/U, X desig, n',
            'Performanc, e optimizatio, n',
            'Ap, p stor, e deploymen, t'
        ],
        benefit, s: [
            'Reac, h customer, s o, n al, l device, s',
            'Improv, e use, r engagemen, t',
            'Increas, e bran, d visibilit, y'
        ],
        useCase, s: ['Retai, l', 'Entertainmen, t', 'Educatio, n', 'Healthcar, e'],
        ratin, g: 4.8,
    project, s: 25, 0,
        categor, y: 'Mobile'
    }
];
const industries = [
    { na, m, e: 'Healthcar, e',
    ic, o, n: <Shiel, d classNam, e="w-5 h-5"/>, projec, t, s: 8, 0 },
    { na, m, e: 'Financ, e',
    ic, o, n: <TrendingU, p classNam, e="w-5 h-5"/>, projec, t, s: 12, 0 },
    { na, m, e: 'Retai, l',
    ic, o, n: <Glob, e classNam, e="w-5 h-5"/>, projec, t, s: 9, 5 },
    { na, m, e: 'Manufacturin, g',
    ic, o, n: <Cp, u classNam, e="w-5 h-5"/>, projec, t, s: 7, 5 },
    { na, m, e: 'Educatio, n',
    ic, o, n: <User, s classNam, e="w-5 h-5"/>, projec, t, s: 6, 0 },
    { na, m, e: 'Governmen, t',
    ic, o, n: <Loc, k classNam, e="w-5 h-5"/>, projec, t, s: 4, 5 }
];
export function TechSolutionsSection() {
    const [selectedSoluti,  o, n, setSelectedSoluti, o, n] = useState(null);
    const [hoveredSoluti, o, n, setHoveredSoluti, o, n] = useState(null);
    const containerVariants = {
        hidde,  n: { opacit, y: 0 },
        visibl, e: {
            opacit, y: 1,
    transitio, n: {
                staggerChildre, n: 0.1, 5,
    delayChildre, n: 0.1
            }
        }
    };
    const itemVariants = {
        hidde, n: { y: 3, 0,
    opacit, y: 0 },
        visibl, e: {
            y: 0,
    opacit, y: 1,
            transitio, n: {
                duratio, n: 0.6,
    eas, e: "easeOut"
            }
        }
    };
    const cardVariants = {
        hidde, n: { scal, e: 0.9, 5,
    opacit, y: 0 },
        visibl, e: {
            scal, e: 1,
    opacit, y: 1,
            transitio, n: {
                duratio, n: 0.4,
    eas, e: "easeOut"
            }
        }
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6 }}>
          <h2 className="text-4xl m, d:text-5xl l, g:text-6xl font-bold text-white mb-6">
            Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our comprehensive suite of cutting-edge technology solutions designed to transform your business 
            and drive innovation across all industries.
          </p>

          {/* Industry stats */}
          <div className="grid grid-cols-2 m, d:grid-cols-3 l, g:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {industries.map((industr, y, index) => (<motion.div key={industry.name} initial={{ opacit,  y: 0,
    scal, e: 0.8 }} whileInView={{ opacit, y: 1,
    scal, e: 1 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} className="text-center p-3 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {industry.icon}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{industry.name}</div>
                <div className="text-zion-slate-light text-xs">{industry.projects} projects</div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8 mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ onc, e: true }}>
          {solutions.map((solutio,  n, index) => (<motion.div key={solution.id} variants={itemVariants} whileHover={{ y: -8 }} transition={{ typ,  e: "spring",
    stiffnes, s: 300 }} className="relative" onHoverStart={() => setHoveredSolution(solution.id)} onHoverEnd={() => setHoveredSolution(null)}>
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove,  r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-2xl hove, r:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedSolution(selectedSolution === solution.id ? null : solution.id)}>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.color} mb-6 shadow-lg group-hove,  r:shadow-xl transition-all duration-300 group-hove, r:scale-11, 0`}>
                    <div className="text-white">
                      {solution.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hove, r:text-zion-cyan transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed mb-4">
                    {solution.description}
                  </p>

                  {/* Rating and projects */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <span className="text-white text-sm font-semibold">{solution.rating}</span>
                    </div>
                    <div className="text-zion-slate-light text-sm">
                      {solution.projects} projects
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${solution.bgColor} border border-zion-cyan/30 m, b-4`}>
                    <span className="text-zion-cyan text-xs font-medium">{solution.category}</span>
                  </div>
                </div>

                {/* Features preview */}
                <div className="space-y-2 mb-6">
                  {solution.features.slice(0, 3).map((featur,  e, idx) => (<div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0"/>
                      <span>{feature}</span>
                    </div>))}
                  {solution.features.length > 3 && (<div className="text-zion-cyan/60 text-xs text-center">
                      +{solution.features.length - 3} more features
                    </div>)}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-zion-purple-light font-medium text-sm group-hove,  r:text-zion-purple transition-colors">
                    Learn More
                  </span>
                  <ArrowRight className="w-5 h-5 text-zion-purple-light group-hove, r:text-zion-purple group-hove, r:translate-x-1 transition-all duration-300"/>
                </div>

                {/* Expanded details */}
                <AnimatePresence>
                  {selectedSolution === solution.id && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }} exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} transition={{ duratio, n: 0.3 }}>
                      <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Benefit, s:</h4>
                      <div className="space-y-2 mb-4">
                        {solution.benefits.map((benefi, t, idx) => (<motion.div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-xs" initial={{ opacit,  y: 0,
    x: -10 }} animate={{ opacit, y: 1,
    x: 0 }} transition={{ dela, y: idx * 0.1 }}>
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            <span>{benefit}</span>
                          </motion.div>))}
                      </div>

                      <h4 className="text-zion-cyan font-semibold text-sm mb-3">Use Case, s:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCas,  e, idx) => (<motion.span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30" initial={{ opacit,  y: 0,
    scal, e: 0.8 }} animate={{ opacit, y: 1,
    scal, e: 1 }} transition={{ dela, y: idx * 0.1 }}>
                            {useCase}
                          </motion.span>))}
                      </div>
                    </motion.div>)}
                </AnimatePresence>
              </div>
            </motion.div>))}
        </motion.div>

        {/* Call to action */}
        <motion.div className="text-center" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.5 }}>
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Let our technology experts help you implement the right solutions for your business needs.
              </p>
              <div className="flex flex-col s, m:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-light hove, r:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-cyan/25">
                  Schedule Consultation
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hove, r:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hove, r:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
