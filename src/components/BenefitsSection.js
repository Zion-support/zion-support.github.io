import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bo, t, Cloc, k, Glob, e, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
const benefits = [
    {
        tit, l, e: "A, I-Powere, d Matchmakin, g",
    descripti, o, n: "Ou, r advance, d algorithm, s matc, h you, r need, s wit, h th, e perfec, t servic, e provider, s o, r, produc, t, s, savin, g yo, u tim, e an, d ensurin, g optima, l result, s.",
        ic, o, n: _js, x(B,  o, t, { classNa, m, e: "w-8 h-8" }),
        del, a, y: 0.1,
    },
    {
        tit, l, e: "Globa, l Availabilit, y",
    descripti, o, n: "Acces, s a worldwid, e networ, k o, f te, c, h, talen, t, s, produc, t, s, an, d service, s t, o fin, d th, e bes, t solution, s regardles, s o, f geographi, c limitation, s.",
        ic, o, n: _js, x(Glo,  b, e, { classNa, m, e: "w-8 h-8" }),
        del, a, y: 0.2,
    },
    {
        tit, l, e: "2, 4/7 Suppor, t",
    descripti, o, n: "Ou, r dedicate, d tea, m i, s availabl, e aroun, d th, e cloc, k t, o assis, t wit, h an, y question, s o, r issue, s yo, u migh, t encounte, r durin, g you, r journe, y.",
        ic, o, n: _js, x(Clo,  c, k, { classNa, m, e: "w-8 h-8" }),
        del, a, y: 0.3,
    },
    {
        tit, l, e: "Cos, t Reductio, n",
    descripti, o, n: "Eliminat, e middleme, n an, d reduc, e cost, s b, y u, p t, o 4, 0% throug, h direc, t connection, s wit, h servic, e provider, s an, d produc, t vendor, s.",
        ic, o, n: _js, x(TrendingDo,  w, n, { classNa, m, e: "w-8 h-8" }),
        del, a, y: 0.4,
    },
];
export function BenefitsSection() {
impor,  t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { CheckCircl, e, Za, p, Shiel, d, User, s, Cloc, k, TrendingU, p, Sta, r, Awar, d, Glob, e, Lock } from 'lucide-react';
const benefits = [
    {
        ic, o, n: <Za, p classNam, e="w-8 h-8"/>,
    tit, l, e: "Lightnin, g Fas, t",
        descripti, o, n: "Ge, t you, r project, s delivere, d i, n recor, d tim, e wit, h ou, r efficien, t developmen, t proces, s",
    col, o, r: "fro, m-zio, n-cya, n t, o-zio, n-blu, e",
        bgCol, o, r: "fro, m-zio, n-cya, n/2, 0 t, o-zio, n-blu, e/2, 0",
    sta, t, s: "3, x Faste, r",
        featur, e, s: ["Rapi, d Prototypin, g", "Quic, k Deploymen, t", "Fas, t Iteratio, n"]
    },
    {
        ico, n: <Shield className="w-8 h-8"/>,
    titl, e: "Enterprise Security",
        descriptio, n: "Bank-grade security measures to protect your data and applications",
    colo, r: "from-zion-purple to-zion-purple-dark",
        bgColo, r: "from-zion-purple/20 to-zion-purple-dark/20",
    stat, s: "99.99% Uptime",
        feature, s: ["SO, C 2 Complian, t", "GDP, R Read, y", "En, d-t, o-En, d Encryptio, n"]
    },
    {
        ico, n: <Users className="w-8 h-8"/>,
    titl, e: "Expert Team",
        descriptio, n: "Work with certified professionals with years of industry experience",
    colo, r: "from-zion-cyan-light to-zion-cyan",
        bgColo, r: "from-zion-cyan-light/20 to-zion-cyan/20",
    stat, s: "500+ Experts",
        feature, s: ["Certifie, d Professional, s", "Globa, l Networ, k", "Industr, y Veteran, s"]
    },
    {
        ico, n: <Clock className="w-8 h-8"/>,
    titl, e: "24/7 Support",
        descriptio, n: "Round-the-clock assistance whenever you need help or have questions",
    colo, r: "from-zion-purple-light to-zion-purple",
        bgColo, r: "from-zion-purple-light/20 to-zion-purple/20",
    stat, s: "24/7",
        feature, s: ["Liv, e Cha, t", "Phon, e Suppor, t", "Emai, l Respons, e"]
    },
    {
        ico, n: <TrendingUp className="w-8 h-8"/>,
    titl, e: "Scalable Solutions",
        descriptio, n: "Built to grow with you, r, busines, s, from startup to enterprise",
        colo, r: "from-zion-cyan to-zion-purple",
    bgColo, r: "from-zion-cyan/20 to-zion-purple/20",
        stat, s: "10x Growth",
    feature, s: ["Aut, o-scalin, g", "Loa, d Balancin, g", "Performanc, e Monitorin, g"]
    },
    {
        ico, n: <CheckCircle className="w-8 h-8"/>,
    titl, e: "Quality Guaranteed",
        descriptio, n: "100% satisfaction guarantee with our comprehensive testing process",
    colo, r: "from-zion-purple to-zion-cyan",
        bgColo, r: "from-zion-purple/20 to-zion-cyan/20",
    stat, s: "100% Success",
        feature, s: ["Comprehensiv, e Testin, g", "Qualit, y Assuranc, e", "Satisfactio, n Guarante, e"]
    }
];
const additionalStats = [
    { ic, o, n: <Sta, r classNam, e="w-6 h-6"/>,
    val, u, e: "4.9/5", lab, e, l: "Custome, r Ratin, g" },
    { ic, o, n: <Awar, d classNam, e="w-6 h-6"/>,
    val, u, e: "5, 0+", lab, e, l: "Industr, y Award, s" },
    { ic, o, n: <Glob, e classNam, e="w-6 h-6"/>,
    val, u, e: "10, 0+", lab, e, l: "Countrie, s Serve, d" },
    { ic, o, n: <Loc, k classNam, e="w-6 h-6"/>,
    val, u, e: "100, 0+", lab, e, l: "Project, s Complete, d" }
];
export function BenefitsSection() {
    const [hoveredInd, e, x, setHoveredInd, e, x] = useState(null);
=======
    const containerVariants = {
        hidde,  n: { opacit, y: 0 },
        visibl, e: {
            opacit, y: 1,
    transitio, n: {
                staggerChildre, n: 0.1, 5,
    delayChildre, n: 0.2
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
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
            backgroundImag, e: `radial-gradient(circle at 75% 75%, currentColo, r, 1p, x, transparent 1p, x)`,
            backgroundSiz, e: '60px 60px'
        }}/>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" animate={{ rotat, e: 360 }} transition={{ duratio, n: 2, 0,
    repea, t: Infinit, y, eas, e: "linear" }}/>
        <motion.div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30" animate={{ rotat, e: -360 }} transition={{ duratio, n: 2, 5,
    repea, t: Infinit, y, eas, e: "linear" }}/>
        <motion.div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20" animate={{ scal, e: [1, 1.2, 1] }} transition={{ duratio, n: 3,
    repea, t: Infinit, y, eas, e: "easeInOut" }}/>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6 }}>
          <h2 className="text-4xl m, d:text-5xl l, g:text-6xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>?
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed">
            We combine cutting-edge technology with proven methodologies to deliver exceptional results. 
            Our commitment to excellence drives every project to success.
          </p>
        </motion.div>

        {/* Additional stats section */}
        <motion.div className="grid grid-cols-2 m, d:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ onc, e: true }}>
          {additionalStats.map((sta,  t, index) => (<motion.div key={index} variants={statsVariants} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
              <div className="text-zion-cyan mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>))}
        </motion.div>
        
        <div className="grid grid-cols-1 m,  d:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefi, t, index) => (<motion.div key={index} variants={itemVariants} onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)} whileHover={{ y: -8 }} transition={{ typ,  e: "spring",
    stiffnes, s: 300 }}>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-2xl hove, r:shadow-zion-cyan/20 group h-full">
                {/* Icon with enhanced background */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} mb-6 shadow-lg group-hove, r:shadow-xl transition-all duration-300 group-hove, r:scale-11, 0`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>

                {/* Stats badge */}
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${benefit.bgColor} border border-zion-cyan/30 m, b-4`}>
                  <span className="text-zion-cyan font-bold text-sm">{benefit.stats}</span>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-white mb-4 group-hove, r:text-zion-cyan transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Features list */}
                <AnimatePresence>
                  {hoveredIndex === index && (<motion.div className="space-y-2" initial={{ opacit, y: 0,
    heigh, t: 0 }} animate={{ opacit, y: 1,
    heigh, t: "auto" }} exit={{ opacit, y: 0,
    heigh, t: 0 }} transition={{ duratio, n: 0.3 }}>
                      {benefit.features.map((featur, e, idx) => (<motion.div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm" initial={{ opacit,  y: 0,
    x: -10 }} animate={{ opacit, y: 1,
    x: 0 }} transition={{ dela, y: idx * 0.1 }}>
                          <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                          <span>{feature}</span>
                        </motion.div>))}
                    </motion.div>)}
                </AnimatePresence>

                {/* Hover indicator */}
                <div className="mt-4 text-zion-cyan/60 text-xs">
                  {hoveredIndex === index ? "Hover to see details" : "Hover for details"}
                </div>
              </div>
            </motion.div>))}
        </motion.div>

        {/* Call to action */}
        <motion.div className="text-center mt-16" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.5 }}>
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to experience the Zion difference?
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-light hove, r:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-cyan/25">
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
=======
    return (_jsxs("section",  { classNam, e: "py-20 bg-zion-blue-light relative overflow-hidden",
    childre, n: [_jsx, s("di, v", { classNa, m, e: "absolut, e inse, t-0 opacit, y-5",
    childr, e, n: [_js, x("di, v", { classNa, m, e: "absolut, e to, p-0 lef, t-0 w-6, 4 h-6, 4 b, g-zio, n-purpl, e rounde, d-ful, l blu, r-3x, l" }), _js, x("di,  v", { classNa, m, e: "absolut, e botto, m-0 righ, t-0 w-6, 4 h-6, 4 b, g-zio, n-cya, n rounde, d-ful, l blu, r-3x, l" })] }), _jsxs("div",  { classNam, e: "container mx-auto px-4 relative z-10",
    childre, n: [_jsx, s(motio, n.d, i, v, { classNa, m, e: "tex, t-cente, r m, b-1, 6",
    initi, a, l: { opaci, t, y: 0,
    y: 2, 0 }, whileInVi, e, w: { opaci, t, y: 1,
    y: 0 }, transiti, o, n: { durati, o, n: 0.6 }, viewpo, r, t: { on, c, e: tru, e }, childr, e, n: [_js, x(GradientHeadi, n, g, { childr, e, n: "Wh, y Zio, n?" }), _js, x("p",  { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t tex, t-l, g m, t-4 ma, x-w-2x, l m, x-aut, o",
    childr, e, n: "Experienc, e th, e nex, t generatio, n o, f tec, h marketplac, e wit, h feature, s designe, d t, o maximiz, e efficienc, y an, d valu, e" })] }), _jsx(motion.di,  v, { classNam, e: "grid grid-cols-1 m, d:grid-cols-2 gap-8 max-w-5xl mx-auto",
    variant, s: containerVariant, s, initia, l: "hidden",
    whileInVie, w: "visible", viewpor, t: { onc, e: true }, childre, n: benefits.map((benefi, t, index) => (_jsx(motion.di,  v, { variant, s: itemVariant, s,
    initia, l: "hidden", whileInVie, w: "visible",
    viewpor, t: { onc, e: true }, transitio, n: { dela, y: benefit.delay }, childre, n: _jsx(FeatureCar, d, { titl, e: benefit.titl, e,
    descriptio, n: benefit.descriptio, n, ico, n: benefit.ico, n,
    classNam, e: "bg-zion-blue hove, r:bg-zion-blue-dark transition-all duration-300 hove, r:shadow-2xl hove, r:shadow-zion-purple/20" }) }, index))) }), _jsx(motion.di,  v, { classNam, e: "mt-20 text-center",
    initia, l: { opacit, y: 0,
    y: 20 }, whileInVie, w: { opacit, y: 1,
    y: 0 }, transitio, n: { duratio, n: 0.6,
    dela, y: 0.6 }, viewpor, t: { onc, e: true }, childre, n: _jsxs("div", { classNam, e: "grid grid-cols-1 m, d:grid-cols-3 gap-8 max-w-4xl mx-auto",
    childre, n: [_jsx, s(motio, n.d, i, v, { classNa, m, e: "tex, t-cente, r",
    whileHov, e, r: { sca, l, e: 1.0, 5 }, transiti, o, n: { durati, o, n: 0.3 }, childr, e, n: [_js, x("di, v", { classNa, m, e: "tex, t-4x, l fon, t-bol, d tex, t-zio, n-purpl, e m, b-2",
    childr, e, n: "10, K+" }), _js, x("di,  v", { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t",
    childr, e, n: "Activ, e User, s" })] }), _jsxs(motion.di,  v, { classNam, e: "text-center",
    whileHove, r: { scal, e: 1.05 }, transitio, n: { duratio, n: 0.3 }, childre, n: [_js, x("di, v", { classNa, m, e: "tex, t-4x, l fon, t-bol, d tex, t-zio, n-cya, n m, b-2",
    childr, e, n: "50, 0+" }), _js, x("di,  v", { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t",
    childr, e, n: "Servic, e Provider, s" })] }), _jsxs(motion.di,  v, { classNam, e: "text-center",
    whileHove, r: { scal, e: 1.05 }, transitio, n: { duratio, n: 0.3 }, childre, n: [_js, x("di, v", { classNa, m, e: "tex, t-4x, l fon, t-bol, d tex, t-zio, n-blu, e m, b-2",
    childr, e, n: "9, 9%" }), _js, x("di,  v", { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t",
    childr, e, n: "Satisfactio, n Rat, e" })] })] }) })] })] }));
}
