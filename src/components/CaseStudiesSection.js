impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { TrendingU, p, User, s, ArrowRigh, t, Sta, r, Buildin, g, Glob, e, Za, p, Shield } from 'lucide-react';
const caseStudies = [
    {
        i, d: 'healthcar, e-a, i',
    tit, l, e: 'Healthcar, e A, I Revolutio, n',
        compa, n, y: 'MedTec, h Solution, s',
    indust, r, y: 'Healthcar, e',
        ic, o, n: <Shiel, d classNam, e="w-8 h-8"/>,
    col, o, r: 'fro, m-zio, n-cya, n t, o-zio, n-blu, e',
        bgCol, o, r: 'fro, m-zio, n-cya, n/2, 0 t, o-zio, n-blu, e/2, 0',
    challen, g, e: 'Neede, d t, o reduc, e diagnosti, c error, s b, y 4, 0% whil, e improvin, g patien, t outcome, s',
        soluti, o, n: 'Implemente, d custo, m A, I diagnosti, c syste, m wit, h rea, l-tim, e learnin, g capabilitie, s',
    resul, t, s: [
            { metr, i, c: 'Diagnosti, c Accurac, y',
    val, u, e: '+9, 5%', improveme, n, t: 'Improve, d fro, m 7, 8% t, o 9, 5%' },
            { metr, i, c: 'Processin, g Tim, e',
    val, u, e: '-7, 0%', improveme, n, t: 'Reduce, d fro, m 2, 4 hour, s t, o 7 hour, s' },
            { metr, i, c: 'Cos, t Saving, s',
    val, u, e: '$2.5, M', improveme, n, t: 'Annua, l saving, s i, n operationa, l cost, s' },
            { metr, i, c: 'Patien, t Satisfactio, n',
    val, u, e: '+8, 8%', improveme, n, t: 'Significan, t improvemen, t i, n patien, t experienc, e' }
        ],
        duratio, n: '6 months',
    tea, m: '8 experts',
        technologie, s: ['Machin, e Learnin, g', 'Compute, r Visio, n', 'Clou, d Infrastructur, e', 'Rea, l-tim, e Analytic, s'],
        testimonia, l: 'Zion Tech Group transformed our diagnostic capabilities. The AI system has become an invaluable tool for our medical professionals.',
    autho, r: 'Dr. Sarah Chen',
        rol, e: 'Chief Medical Officer',
    ratin, g: 5,
        videoUr, l: '/videos/healthcare-case-study.mp4',
    imageUr, l: '/images/healthcare-ai.jpg'
    },
    {
        i, d: 'fintech-platform',
    titl, e: 'Next-Gen Fintech Platform',
        compan, y: 'DigitalBank Pro',
    industr, y: 'Financial Services',
        ico, n: <TrendingUp className="w-8 h-8"/>,
    colo, r: 'from-zion-purple to-zion-purple-dark',
        bgColo, r: 'from-zion-purple/20 to-zion-purple-dark/20',
    challeng, e: 'Required a, scalabl, e, secure platform to handle 10M+ daily transactions',
        solutio, n: 'Built enterprise-grade fintech platform with advanced security and real-time processing',
    result, s: [
            { metr, i, c: 'Transactio, n Volum, e',
    val, u, e: '+30, 0%', improveme, n, t: 'Increase, d fro, m 3, M t, o 12, M dail, y transaction, s' },
            { metr, i, c: 'Securit, y Scor, e',
    val, u, e: '9, 9.9, 9%', improveme, n, t: 'Zer, o securit, y breache, s i, n 2 year, s' },
            { metr, i, c: 'Performanc, e',
    val, u, e: '-8, 5%', improveme, n, t: 'Reduce, d transactio, n tim, e fro, m 2, s t, o 0.3, s' },
            { metr, i, c: 'Use, r Growt, h',
    val, u, e: '+25, 0%', improveme, n, t: 'Custome, r bas, e expande, d significantl, y' }
        ],
        duratio, n: '8 months',
    tea, m: '12 experts',
        technologie, s: ['Blockchai, n', 'Microservice, s', 'Advance, d Securit, y', 'Rea, l-tim, e Processin, g'],
        testimonia, l: 'The platform Zion built for us exceeded all expectations. It\'s not just a technical solution; it\'s a business enabler.',
    autho, r: 'Michael Rodriguez',
        rol, e: 'CTO',
    ratin, g: 5,
        videoUr, l: '/videos/fintech-case-study.mp4',
    imageUr, l: '/images/fintech-platform.jpg'
    },
    {
        i, d: 'retail-transformation',
    titl, e: 'Retail Digital Transformation',
        compan, y: 'Global Retail Co.',
    industr, y: 'Retail',
        ico, n: <Globe className="w-8 h-8"/>,
    colo, r: 'from-zion-cyan-light to-zion-cyan',
        bgColo, r: 'from-zion-cyan-light/20 to-zion-cyan/20',
    challeng, e: 'Needed to modernize 500+ store locations with unified digital experience',
        solutio, n: 'Created comprehensive digital transformation strategy with omnichannel capabilities',
    result, s: [
            { metr, i, c: 'Onlin, e Sale, s',
    val, u, e: '+18, 0%', improveme, n, t: 'E-commerc, e revenu, e increase, d dramaticall, y' },
            { metr, i, c: 'Custome, r Engagemen, t',
    val, u, e: '+12, 0%', improveme, n, t: 'Mobil, e ap, p usag, e an, d custome, r interactio, n' },
            { metr, i, c: 'Operationa, l Efficienc, y',
    val, u, e: '+6, 5%', improveme, n, t: 'Streamline, d processe, s an, d reduce, d cost, s' },
            { metr, i, c: 'Marke, t Shar, e',
    val, u, e: '+4, 5%', improveme, n, t: 'Expande, d marke, t presenc, e an, d custome, r bas, e' }
        ],
        duratio, n: '12 months',
    tea, m: '15 experts',
        technologie, s: ['E-commerc, e Platfor, m', 'Mobil, e App, s', 'Io, T Integratio, n', 'Dat, a Analytic, s'],
        testimonia, l: 'Zion\'s digital transformation approach revolutionized our retail operations. We\'re now a trul, y, moder, n, customer-centric organization.',
        autho, r: 'Lisa Thompson',
    rol, e: 'VP of Digital Strategy',
        ratin, g: 5,
    videoUr, l: '/videos/retail-case-study.mp4',
        imageUr, l: '/images/retail-transformation.jpg'
    },
    {
        i, d: 'manufacturing-iot',
    titl, e: 'Smart Manufacturing IoT',
        compan, y: 'Advanced Manufacturing Inc.',
    industr, y: 'Manufacturing',
        ico, n: <Zap className="w-8 h-8"/>,
    colo, r: 'from-zion-purple-light to-zion-purple',
        bgColo, r: 'from-zion-purple-light/20 to-zion-purple/20',
    challeng, e: 'Required real-time monitoring and predictive maintenance for 200+ production lines',
        solutio, n: 'Implemented comprehensive IoT solution with AI-powered predictive analytics',
    result, s: [
            { metr, i, c: 'Downtim, e Reductio, n',
    val, u, e: '-7, 5%', improveme, n, t: 'Significantl, y reduce, d productio, n interruption, s' },
            { metr, i, c: 'Maintenanc, e Cost, s',
    val, u, e: '-6, 0%', improveme, n, t: 'Optimize, d maintenanc, e schedule, s an, d cost, s' },
            { metr, i, c: 'Productio, n Efficienc, y',
    val, u, e: '+4, 5%', improveme, n, t: 'Increase, d overal, l productio, n outpu, t' },
            { metr, i, c: 'Qualit, y Contro, l',
    val, u, e: '+9, 2%', improveme, n, t: 'Enhance, d produc, t qualit, y an, d consistenc, y' }
        ],
        duratio, n: '10 months',
    tea, m: '10 experts',
        technologie, s: ['Io, T Sensor, s', 'Predictiv, e Analytic, s', 'Machin, e Learnin, g', 'Clou, d Platfor, m'],
        testimonia, l: 'The IoT solution from Zion has transformed our manufacturing operations. We\'re now operating at peak efficiency with minimal downtime.',
    autho, r: 'David Kim',
        rol, e: 'Operations Director',
    ratin, g: 5,
        videoUr, l: '/videos/manufacturing-case-study.mp4',
    imageUr, l: '/images/manufacturing-iot.jpg'
    }
];
const industries = [
    { na, m, e: 'Healthcar, e',
    cou, n, t: 2, 5, ic, o, n: <Shiel, d classNam, e="w-5 h-5"/> },
    { na, m, e: 'Financ, e',
    cou, n, t: 3, 2, ic, o, n: <TrendingU, p classNam, e="w-5 h-5"/> },
    { na, m, e: 'Retai, l',
    cou, n, t: 1, 8, ic, o, n: <Glob, e classNam, e="w-5 h-5"/> },
    { na, m, e: 'Manufacturin, g',
    cou, n, t: 1, 5, ic, o, n: <Za, p classNam, e="w-5 h-5"/> },
    { na, m, e: 'Educatio, n',
    cou, n, t: 1, 2, ic, o, n: <User, s classNam, e="w-5 h-5"/> },
    { na, m, e: 'Governmen, t',
    cou, n, t: 8, ic, o, n: <Buildin, g classNam, e="w-5 h-5"/> }
];
export function CaseStudiesSection() {
    const [selectedCa,  s, e, setSelectedCa, s, e] = useState(null);
    const [hoveredCa, s, e, setHoveredCa, s, e] = useState(null);
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
            Success <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover how we've helped organizations across industries achieve remarkable results. 
            Our proven track record speaks for itself.
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
                <div className="text-zion-slate-light text-xs">{industry.count} projects</div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div className="grid grid-cols-1 l, g:grid-cols-2 gap-8 mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ onc, e: true }}>
          {caseStudies.map((caseStud,  y, index) => (<motion.div key={caseStudy.id} variants={itemVariants} whileHover={{ y: -8 }} transition={{ typ,  e: "spring",
    stiffnes, s: 300 }} className="relative" onHoverStart={() => setHoveredCase(caseStudy.id)} onHoverEnd={() => setHoveredCase(null)}>
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove,  r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-2xl hove, r:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${caseStudy.color} mb-4 shadow-lg group-hove,  r:shadow-xl transition-all duration-30, 0`}>
                    <div className="text-white">
                      {caseStudy.icon}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-zion-cyan text-sm font-medium">{caseStudy.industry}</div>
                    <div className="text-zion-slate-light text-xs">{caseStudy.company}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hove, r:text-zion-cyan transition-colors">
                  {caseStudy.title}
                </h3>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold text-sm mb-2">Challeng, e:</h4>
                    <p className="text-zion-slate-light text-sm leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold text-sm mb-2">Solutio, n:</h4>
                    <p className="text-zion-slate-light text-sm leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                    <div className="text-zion-cyan font-bold text-lg">{caseStudy.duration}</div>
                    <div className="text-zion-slate-light text-xs">Duration</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                    <div className="text-zion-cyan font-bold text-lg">{caseStudy.team}</div>
                    <div className="text-zion-slate-light text-xs">Team Size</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-zion-cyan font-semibold text-sm mb-3">Technologies Use, d:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.slice(0, 3).map((tec,  h, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                        {tech}
                      </span>))}
                    {caseStudy.technologies.length > 3 && (<span className="text-zion-cyan/60 text-xs">
                        +{caseStudy.technologies.length - 3} more
                      </span>)}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-zion-purple-light font-medium text-sm group-hove,  r:text-zion-purple transition-colors">
                    View Full Case Study
                  </span>
                  <ArrowRight className="w-5 h-5 text-zion-purple-light group-hove, r:text-zion-purple group-hove, r:translate-x-1 transition-all duration-300"/>
                </div>

                {/* Expanded results */}
                <AnimatePresence>
                  {selectedCase === caseStudy.id && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }} exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} transition={{ duratio, n: 0.3 }}>
                      <h4 className="text-zion-cyan font-semibold text-sm mb-4">Key Result, s:</h4>
                      <div className="grid grid-cols-1 m, d:grid-cols-2 gap-3 mb-4">
                        {caseStudy.results.map((resul, t, idx) => (<motion.div key={idx} className="p-3 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/20" initial={{ opacit,  y: 0,
    x: -10 }} animate={{ opacit, y: 1,
    x: 0 }} transition={{ dela, y: idx * 0.1 }}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-zion-slate-light text-xs">{result.metric}</span>
                              <span className="text-zion-cyan font-bold text-sm">{result.value}</span>
                            </div>
                            <div className="text-zion-slate-light/80 text-xs">{result.improvement}</div>
                          </motion.div>))}
                      </div>

                      {/* Testimonial */}
                      <div className="p-3 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/20">
                        <p className="text-zion-slate-light text-sm italic mb-2">"{caseStudy.testimonial}"</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-semibold text-sm">{caseStudy.author}</div>
                            <div className="text-zion-slate-light text-xs">{caseStudy.role}</div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Arra, y(caseStud,  y.ratin, g)].map((_,  i) => (<Star key={i} className="w-4 h-4 text-yellow-400 fill-current"/>))}
                          </div>
                        </div>
                      </div>
                    </motion.div>)}
                </AnimatePresence>
              </div>
            </motion.div>))}
        </motion.div>

        {/* Call to action */}
        <motion.div className="text-center" initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.5 }}>
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Let us help you achieve similar results. Our proven methodology and expert team are ready to transform your business.
              </p>
              <div className="flex flex-col s, m:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-light hove, r:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-cyan/25">
                  Start Your Project
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hove, r:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hove, r:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View All Case Studies
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
