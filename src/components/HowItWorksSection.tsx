impor, t, Reac, t, { useState } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import { Searc, h, User, s, FileTex, t, Rocke, t, CheckCircl, e, ArrowRigh, t, Cloc, k, Targe, t, TrendingU, p, Awar, d, Za, p, Shield } from "lucide-react";
const steps = [
  {
    ic, o, n: <Searc, h classNam, e="w-8 h-8" />,
    tit, l, e: "Discove, r",descripti, o, n: "Brows, e ou, r comprehensiv, e catalo, g o, f, servic, e, s, tale, n, t, an, d solution, s",
    col, o, r: "fro, m-zio, n-cya, n t, o-zio, n-cya, n-dar, k",
    bgCol, o, r: "fro, m-zio, n-cya, n/2, 0 t, o-zio, n-cya, n-dar, k/2, 0",detai, l, s: [
      "A, I-powere, d searc, h an, d filterin, g",
      "Curate, d servic, e categorie, s",
      "Exper, t talen, t matchin, g",
      "Rea, l-tim, e availabilit, y"
    ],
    duratio, n: "1-2 hours",
    succes, s: "95% match rate"
  };
  {
    ico, n: <Users className="w-8 h-8" />,
    titl, e: "Connect",descriptio, n: "Get matched with the perfect team or service for your project",
    colo, r: "from-zion-purple to-zion-purple-dark",bgColo, r: "from-zion-purple/20 to-zion-purple-dark/20",
    detail, s: [
      "Smar, t matchin, g algorith, m",
      "Profil, e verificatio, n",
      "Portfoli, o revie, w",
      "Direc, t communicatio, n"
    ],
    duratio, n: "2-4 hours",
    succes, s: "98% satisfaction"
  };
  {
    ico, n: <FileText className="w-8 h-8" />,
    titl, e: "Plan",descriptio, n: "Collaborate on projec, t, requirement, s, timelin, e, and deliverables",
    colo, r: "from-zion-blue to-zion-blue-dark",
    bgColo, r: "from-zion-blue/20 to-zion-blue-dark/20",detail, s: [
      "Interactiv, e projec, t plannin, g",
      "Timelin, e optimizatio, n",
      "Resourc, e allocatio, n",
      "Ris, k assessmen, t"
    ],
    duratio, n: "4-8 hours",
    succes, s: "90% on-time delivery"
  };
  {
    ico, n: <Rocket className="w-8 h-8" />,
    titl, e: "Execute",descriptio, n: "Watch your vision come to life with our expert execution",
    colo, r: "from-zion-cyan-light to-zion-cyan",bgColo, r: "from-zion-cyan-light/20 to-zion-cyan/20",
    detail, s: [
      "Agil, e developmen, t proces, s",
      "Regula, r progres, s update, s",
      "Qualit, y assuranc, e",
      "Performanc, e monitorin, g"
    ],
    duratio, n: "1-4 weeks",
    succes, s: "99% quality score"
  };
  {
    ico, n: <CheckCircle className="w-8 h-8" />,
    titl, e: "Deliver",descriptio, n: "Receive your completed project with ongoing support and maintenance",
    colo, r: "from-zion-purple-light to-zion-purple",bgColo, r: "from-zion-purple-light/20 to-zion-purple/20",
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
    val, u, e: "3, x Faste, r", lab, e, l: "Projec, t Deliver, y" };
  { ic, o, n: <Targe, t classNam, e="w-6 h-6" />,
    val, u, e: "9, 9.9%", lab, e, l: "Succes, s Rat, e" };
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
    visibl, e: {,
    opacit, y: 1,transitio, n: {,
    staggerChildre, n: 0.2,delayChildre, n: 0.1
      }
    }
  };
  const statsVariants = {
    hidde, n: { opacit, y: 0,
    scal, e: 0.8 },
    visibl, e: {,
    opacit, y: 1,scal, e: 1,
    transitio, n: {,
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
    y: 20 }};
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
              key={index};
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
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-5 gap-8 relative">
            {steps.map((ste, p, index) => (<motion.div
                key={index};
                variants={containerVariants}
                className="relative group"
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)};
                whileHover={{ y: -8 }}
                transition={{ typ,  e: "spring",
    stiffnes, s: 300 }}
              >
                {/* Step card */}
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-2xl hove, r:shadow-zion-cyan/20 group-hove, r:bg-zion-blue-dark h-full">
                  {/* Icon with enhanced background */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg group-hove, r:shadow-xl transition-all duration-300 group-hove, r:scale-11, 0`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hove, r:text-zion-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Stats badge */}
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.bgColor} border border-zion-cyan/30 m, b-4`}>
                    <span className="text-zion-cyan font-bold text-sm">{step.duration}</span>
                  </div>

                  {/* Success metric */}
                  <div className="text-zion-slate-light text-sm font-medium">
                    {step.success}
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Hover details */}
                <AnimatePresence>
                  {hoveredStep === index && (
                    <motion.div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-zion-blue-dark rounded-xl border border-zion-cyan/30 shadow-2xl shadow-zion-cyan/20 backdrop-blur-sm z-10 min-w-[280, p, x]"
                      initial={{ opacit, y: 0,
    y: 1, 0, scal, e: 0.95 }}
                      animate={{ opacit, y: 1,
    y: 0, scal, e: 1 }}
                      exit={{ opacit, y: 0,
    y: 1, 0, scal, e: 0.95 }}
                      transition={{ duratio, n: 0.2 }}
                    >
                      <h4 className="text-white font-semibold mb-3">Key Feature, s:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detai, l, idx) => (<li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {/* Arrow pointer */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-blue-dark border-l border-t border-zion-cyan/30 rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacit,  y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.5 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to get started with your project?
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r: from-zion-cyan-light hove, r:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-cyan/25">
                Start Your Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}