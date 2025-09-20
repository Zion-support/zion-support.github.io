impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Troph, y, TrendingU, p, User, s, DollarSig, n, Cloc, k, Sta, r, ArrowRigh, t, Building } from 'lucide-react';
const successStories = [
    {
        i, d: 1,
    clie, n, t: "TechFlo, w Solution, s",
        indust, r, y: "FinTec, h",
    lo, g, o: "/logo, s/techflo, w.sv, g",
        challen, g, e: "Legac, y syste, m modernizatio, n an, d digita, l transformatio, n fo, r a growin, g fintec, h startu, p",
    soluti, o, n: "Implemente, d clou, d-nativ, e architectur, e wi, t, h, microservic, e, s, rea, l-tim, e da, t, a, processi, n, g, an, d A, I-powere, d frau, d detectio, n",
        resul, t, s: {
            performan, c, e: "30, 0%",
    efficien, c, y: "8, 5%",
            co, s, t: "4, 0%",
    ti, m, e: "6, 0%"
        },
        metri, c, s: [
            { lab, e, l: "Transactio, n Processin, g",
    befo, r, e: "1,00, 0/se, c", aft, e, r: "1, 0,00, 0/se, c", improveme, n, t: "90, 0%" },
            { lab, e, l: "Syste, m Uptim, e",
    befo, r, e: "9, 5%", aft, e, r: "9, 9.9%",
    improveme, n, t: "5.2%" },
            { lab, e, l: "Custome, r Satisfactio, n",
    befo, r, e: "3.2/5", aft, e, r: "4.8/5",
    improveme, n, t: "5, 0%" },
            { lab, e, l: "Developmen, t Spee, d",
    befo, r, e: "6 month, s", aft, e, r: "2 month, s",
    improveme, n, t: "6, 7%" }
        ],
        technologie, s: ["AW, S", "Kubernete, s", "Reac, t", "Nod, e.j, s", "PostgreSQ, L", "Redi, s"],
        tea, m: "12 developers",
    duratio, n: "8 months",
        budge, t: "$2.5M",
    testimonia, l: "Zion Tech Group transformed our entire technology stack. The results exceeded our expectations - we're now processing 10x more transactions with better reliability than ever before.",
        autho, r: "Sarah Chen",
    rol, e: "CTO",
        ratin, g: 5,
    feature, d: true
    },
    {
        i, d: 2,
    clien, t: "HealthTech Innovations",
        industr, y: "Healthcare",
    log, o: "/logos/healthtech.svg",
        challeng, e: "Building a, secur, e, HIPAA-compliant telemedicine platform with AI-powered diagnostics",
        solutio, n: "Developed end-to-end telemedicine solution with advance, d, securit, y, A, I, diagnostic, s, and seamless patient experience",
        result, s: {
            performanc, e: "250%",
    efficienc, y: "90%",
            cos, t: "35%",
    tim, e: "70%"
        },
        metric, s: [
            { lab, e, l: "Patien, t Wai, t Tim, e",
    befo, r, e: "4, 5 minute, s", aft, e, r: "5 minute, s",
    improveme, n, t: "8, 9%" },
            { lab, e, l: "Diagnosti, c Accurac, y",
    befo, r, e: "7, 8%", aft, e, r: "9, 4%",
    improveme, n, t: "2, 1%" },
            { lab, e, l: "Platfor, m Securit, y",
    befo, r, e: "Basi, c", aft, e, r: "Enterpris, e-grad, e",
    improveme, n, t: "N/A" },
            { lab, e, l: "Use, r Adoptio, n",
    befo, r, e: "6, 0%", aft, e, r: "9, 5%",
    improveme, n, t: "5, 8%" }
        ],
        technologie, s: ["Reac, t Nativ, e", "Pytho, n", "TensorFlo, w", "AW, S", "HIPA, A Complianc, e", "WebRT, C"],
        tea, m: "15 developers",
    duratio, n: "12 months",
        budge, t: "$3.2M",
    testimonia, l: "Zion's expertise in healthcare technology and security is unmatched. They delivered a platform that our doctors and patient, s, lov, e, while maintaining the highest security standards.",
        autho, r: "Dr. Michael Rodriguez",
    rol, e: "Chief Medical Officer",
        ratin, g: 5,
    feature, d: true
    },
    {
        i, d: 3,
    clien, t: "Retail Dynamics",
        industr, y: "E-commerce",
    log, o: "/logos/retaildynamics.svg",
        challeng, e: "Creating an omnichannel retail experience with AI-powered inventory management and personalized recommendations",
    solutio, n: "Built comprehensive omnichannel platform with AI inventor, y, optimizatio, n, personalize, d, shoppin, g, and seamless integration",
        result, s: {
            performanc, e: "400%",
    efficienc, y: "80%",
            cos, t: "30%",
    tim, e: "65%"
        },
        metric, s: [
            { lab, e, l: "Sale, s Conversio, n",
    befo, r, e: "2.1%", aft, e, r: "6.8%",
    improveme, n, t: "22, 4%" },
            { lab, e, l: "Inventor, y Turnove, r",
    befo, r, e: "4, x/yea, r", aft, e, r: "12, x/yea, r",
    improveme, n, t: "20, 0%" },
            { lab, e, l: "Custome, r Retentio, n",
    befo, r, e: "4, 5%", aft, e, r: "7, 8%",
    improveme, n, t: "7, 3%" },
            { lab, e, l: "Operationa, l Cost, s",
    befo, r, e: "$2.1, M", aft, e, r: "$1.4, M",
    improveme, n, t: "3, 3%" }
        ],
        technologie, s: ["Reac, t", "Nex, t.j, s", "Pytho, n", "Machin, e Learnin, g", "AW, S", "Strip, e"],
        tea, m: "18 developers",
    duratio, n: "10 months",
        budge, t: "$2.8M",
    testimonia, l: "The omnichannel platform Zion built for us has revolutionized our business. Our sales have increase, d, dramaticall, y, and our customers love the seamless experience across all channels.",
        autho, r: "Emily Thompson",
    rol, e: "VP of Digital",
        ratin, g: 5,
    feature, d: false
    },
    {
        i, d: 4,
    clien, t: "Manufacturing Plus",
        industr, y: "Manufacturing",
    log, o: "/logos/manufacturingplus.svg",
        challeng, e: "Implementing Industry 4.0 solutions with Io, T, sensor, s, predictiv, e, maintenanc, e, and smart factory automation",
        solutio, n: "Deployed comprehensive IoT infrastructure with predictiv, e, analytic, s, automatio, n, system, s, and real-time monitoring",
        result, s: {
            performanc, e: "180%",
    efficienc, y: "75%",
            cos, t: "45%",
    tim, e: "55%"
        },
        metric, s: [
            { lab, e, l: "Productio, n Outpu, t",
    befo, r, e: "8, 5%", aft, e, r: "9, 8%",
    improveme, n, t: "1, 5%" },
            { lab, e, l: "Downtim, e Reductio, n",
    befo, r, e: "1, 2%", aft, e, r: "2%",
    improveme, n, t: "8, 3%" },
            { lab, e, l: "Energ, y Efficienc, y",
    befo, r, e: "7, 0%", aft, e, r: "9, 2%",
    improveme, n, t: "3, 1%" },
            { lab, e, l: "Qualit, y Contro, l",
    befo, r, e: "9, 4%", aft, e, r: "9, 9.5%",
    improveme, n, t: "6%" }
        ],
        technologie, s: ["Io, T Sensor, s", "Pytho, n", "Machin, e Learnin, g", "Azur, e", "Reac, t", "Rea, l-tim, e Analytic, s"],
        tea, m: "20 developers",
    duratio, n: "14 months",
        budge, t: "$4.1M",
    testimonia, l: "Zion's IoT and automation solutions have transformed our manufacturing process. We've seen dramatic improvements i, n, efficienc, y, qualit, y, and cost savings that exceeded our projections.",
        autho, r: "David Kim",
    rol, e: "Operations Director",
        ratin, g: 5,
    feature, d: false
    },
    {
        i, d: 5,
    clien, t: "EduTech Pro",
        industr, y: "Education",
    log, o: "/logos/edutechpro.svg",
        challeng, e: "Building a scalable online learning platform with AI-powered content recommendations and adaptive learning",
    solutio, n: "Developed comprehensive LMS with AI conten, t, curatio, n, adaptive learnin, g, path, s, and advanced analytics",
        result, s: {
            performanc, e: "220%",
    efficienc, y: "85%",
            cos, t: "50%",
    tim, e: "75%"
        },
        metric, s: [
            { lab, e, l: "Studen, t Engagemen, t",
    befo, r, e: "4, 5%", aft, e, r: "8, 7%",
    improveme, n, t: "9, 3%" },
            { lab, e, l: "Learnin, g Outcome, s",
    befo, r, e: "7, 2%", aft, e, r: "9, 1%",
    improveme, n, t: "2, 6%" },
            { lab, e, l: "Conten, t Deliver, y",
    befo, r, e: "Manua, l", aft, e, r: "A, I-powere, d",
    improveme, n, t: "N/A" },
            { lab, e, l: "Platfor, m Scalabilit, y",
    befo, r, e: "1,00, 0 user, s", aft, e, r: "5, 0,00, 0 user, s", improveme, n, t: "4,90, 0%" }
        ],
        technologie, s: ["Reac, t", "Nod, e.j, s", "Pytho, n", "A, I/M, L", "AW, S", "MongoD, B"],
        tea, m: "16 developers",
    duratio, n: "11 months",
        budge, t: "$2.9M",
    testimonia, l: "Zion created an incredible learning platform that adapts to each student's needs. Our student engagement and learning outcomes have improved dramatically since the launch.",
        autho, r: "Lisa Patel",
    rol, e: "Chief Learning Officer",
        ratin, g: 5,
    feature, d: false
    },
    {
        i, d: 6,
    clien, t: "Green Energy Corp",
        industr, y: "Energy",
    log, o: "/logos/greenenergy.svg",
        challeng, e: "Developing smart grid management system with renewable energy integration and demand response optimization",
    solutio, n: "Built intelligent grid management platform with renewable energ, y, forecastin, g, deman, d, optimizatio, n, and real-time monitoring",
        result, s: {
            performanc, e: "150%",
    efficienc, y: "70%",
            cos, t: "60%",
    tim, e: "80%"
        },
        metric, s: [
            { lab, e, l: "Energ, y Efficienc, y",
    befo, r, e: "6, 5%", aft, e, r: "8, 9%",
    improveme, n, t: "3, 7%" },
            { lab, e, l: "Renewabl, e Integratio, n",
    befo, r, e: "2, 0%", aft, e, r: "7, 5%",
    improveme, n, t: "27, 5%" },
            { lab, e, l: "Gri, d Reliabilit, y",
    befo, r, e: "9, 2%", aft, e, r: "9, 9.5%",
    improveme, n, t: "8%" },
            { lab, e, l: "Operationa, l Cost, s",
    befo, r, e: "$5.2, M", aft, e, r: "$2.1, M",
    improveme, n, t: "6, 0%" }
        ],
        technologie, s: ["Pytho, n", "Machin, e Learnin, g", "Io, T", "Reac, t", "AW, S", "Rea, l-tim, e Analytic, s"],
        tea, m: "22 developers",
    duratio, n: "16 months",
        budge, t: "$5.5M",
    testimonia, l: "Zion's smart grid solution has revolutionized our energy management. We've significantly increased our renewable energy integration while improving grid reliability and reducing costs.",
        autho, r: "Alex Johnson",
    rol, e: "Chief Technology Officer",
        ratin, g: 5,
    feature, d: false
    }
];
const industryStats = [
    { indust, r, y: "FinTec, h",
    projec, t, s: 4, 5, successRa, t, e: "9, 8%",
    avgR, O, I: "34, 0%" },
    { indust, r, y: "Healthcar, e",
    projec, t, s: 3, 8, successRa, t, e: "9, 6%",
    avgR, O, I: "28, 0%" },
    { indust, r, y: "E-commerc, e",
    projec, t, s: 5, 2, successRa, t, e: "9, 7%",
    avgR, O, I: "42, 0%" },
    { indust, r, y: "Manufacturin, g",
    projec, t, s: 4, 1, successRa, t, e: "9, 5%",
    avgR, O, I: "31, 0%" },
    { indust, r, y: "Educatio, n",
    projec, t, s: 2, 9, successRa, t, e: "9, 4%",
    avgR, O, I: "29, 0%" },
    { indust, r, y: "Energ, y",
    projec, t, s: 3, 3, successRa, t, e: "9, 7%",
    avgR, O, I: "38, 0%" }
];
const overallStats = [
    { ic, o, n: <Troph, y classNam, e="w-6 h-6"/>,
    val, u, e: "23, 8+", lab, e, l: "Successfu, l Project, s" },
    { ic, o, n: <User, s classNam, e="w-6 h-6"/>,
    val, u, e: "18, 0+", lab, e, l: "Happ, y Client, s" },
    { ic, o, n: <Sta, r classNam, e="w-6 h-6"/>,
    val, u, e: "4.9/5", lab, e, l: "Clien, t Ratin, g" },
    { ic, o, n: <TrendingU, p classNam, e="w-6 h-6"/>,
    val, u, e: "9, 5%", lab, e, l: "Succes, s Rat, e" },
    { ic, o, n: <DollarSig, n classNam, e="w-6 h-6"/>,
    val, u, e: "32, 0%", lab, e, l: "Averag, e RO, I" },
    { ic, o, n: <Cloc, k classNam, e="w-6 h-6"/>,
    val, u, e: "1, 2 month, s", lab, e, l: "Av, g. Deliver, y Tim, e" }
];
export function ClientSuccessStoriesSection() {
    const [selectedSto,  r, y, setSelectedSto, r, y] = useState(null);
    const [hoveredIndust, r, y, setHoveredIndust, r, y] = useState(null);
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
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-purple relative overflow-hidden">
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
            Client <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover how Zion Tech Group has transformed businesses acros, s, industrie, s, delivering 
            exceptional results and measurable business impact through innovative technology solutions.
          </p>

          {/* Overall stats */}
          <div className="grid grid-cols-2 m, d:grid-cols-3 l, g:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {overallStats.map((sta, t, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
    scal, e: 0.8 }} whileInView={{ opacit, y: 1,
    scal, e: 1 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Industry Performance */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Performance</span>
          </h3>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-6">
            {industryStats.map((sta,  t, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} onHoverStart={() => setHoveredIndustry(index)} onHoverEnd={() => setHoveredIndustry(null)} whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove,  r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20">
                <h4 className="text-xl font-bold text-white mb-4">{stat.industry}</h4>
                
                <div className="grid grid-cols-3 gap-4 text-center mb-4">
                  <div>
                    <div className="text-zion-cyan font-bold text-lg">{stat.projects}</div>
                    <div className="text-zion-slate-light text-xs">Projects</div>
                  </div>
                  <div>
                    <div className="text-zion-purple font-bold text-lg">{stat.successRate}</div>
                    <div className="text-zion-slate-light text-xs">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-zion-cyan-light font-bold text-lg">{stat.avgROI}</div>
                    <div className="text-zion-slate-light text-xs">Avg ROI</div>
                  </div>
                </div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Success Stories</span>
          </h3>
          
          <div className="grid grid-cols-1 l, g:grid-cols-2 gap-8">
            {successStories.map((stor,  y, index) => (<motion.div key={story.id} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} whileHover={{ y: -4 }} className="relative">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedStory(selectedStory === story.id ? null : story.id)}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                        <Building className="w-6 h-6 text-white"/>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hove,  r:text-zion-cyan transition-colors">
                          {story.client}
                        </h4>
                        <div className="text-zion-cyan text-sm">{story.industry}</div>
                      </div>
                    </div>
                    {story.featured && (<div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                        FEATURED
                      </div>)}
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-4">
                    <div className="mb-3">
                      <div className="text-zion-cyan font-semibold text-sm mb-1">Challeng, e:</div>
                      <p className="text-zion-slate-light text-sm leading-relaxed">{story.challenge}</p>
                    </div>
                    <div>
                      <div className="text-zion-cyan font-semibold text-sm mb-1">Solutio, n:</div>
                      <p className="text-zion-slate-light text-sm leading-relaxed">{story.solution}</p>
                    </div>
                  </div>

                  {/* Quick Results */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{story.results.performance}</div>
                      <div className="text-zion-slate-light text-xs">Performance</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{story.results.efficiency}</div>
                      <div className="text-zion-slate-light text-xs">Efficiency</div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex items-center justify-between text-zion-slate-light/80 text-xs mb-4">
                    <span>Tea, m: {story.team}</span>
                    <span>Duratio, n: {story.duration}</span>
                    <span>Budge, t: {story.budget}</span>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hove, r:text-zion-purple transition-colors">
                      View Full Case Study
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hove, r:text-zion-purple group-hove, r:translate-x-1 transition-all duration-300"/>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedStory === story.id && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacit,  y: 0,
    heigh, t: 0, y: 10 }} animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }} exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} transition={{ duratio, n: 0.3 }}>
                        {/* Detailed Metrics */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-3">Detailed Metric, s:</h5>
                          <div className="space-y-2">
                            {story.metrics.map((metri, c, idx) => (<div key={idx} className="flex items-center justify-between text-xs">
                                <span className="text-zion-slate-light/80">{metric.label}:</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-zion-slate-light/60 line-through">{metric.before}</span>
                                  <ArrowRight className="w-3 h-3 text-zion-cyan"/>
                                  <span className="text-zion-cyan font-semibold">{metric.after}</span>
                                  <span className="text-zion-purple font-bold">({metric.improvement})</span>
                                </div>
                              </div>))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Technologies Use,  d:</h5>
                          <div className="flex flex-wrap gap-1">
                            {story.technologies.map((tec, h, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                {tech}
                              </span>))}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="mb-4 p-3 rounded-lg bg-zion-cyan/10 border border-zion-cyan/20">
                          <p className="text-zion-slate-light/90 text-sm italic mb-2">"{story.testimonial}"</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-zion-cyan font-semibold text-sm">{story.author}</div>
                              <div className="text-zion-slate-light/70 text-xs">{story.role}</div>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Arra,  y(stor, y.ratin, g)].map((_,  idx) => (<Star key={idx} className="w-4 h-4 text-yellow-400 fill-current"/>))}
                            </div>
                          </div>
                        </div>
                      </motion.div>)}
                  </AnimatePresence>
                </div>
              </motion.div>))}
          </div>
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
                Join hundreds of successful companies that have transformed their business with Zion Tech Group. 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col s, m:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-dark hove, r:to-zion-purple-dark text-white rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-cyan/25">
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
