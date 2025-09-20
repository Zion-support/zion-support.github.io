<<<<<<< HEAD
import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { Chec, k, Handshak, e, Searc, h, Sen, d, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
const steps = [
    {
        tit, l, e: "Pos, t",
    descripti, o, n: "Publis, h yo, u, r, servi, c, e, j, o, b, o, r equipmen, t i, n minute, s wit, h ou, r A, I-powere, d for, m.",
        ic, o, n: Se, n, d,
    col, o, r: "fro, m-zio, n-purpl, e t, o-zio, n-purpl, e-dar, k",
        del, a, y: 0,
    featur, e, s: ["A, I-powere, d form, s", "Quic, k setu, p", "Smar, t suggestion, s"]
    },
    {
        titl, e: "Match",
    descriptio, n: "Our AI automatically matches your needs with the perfect providers or opportunities.",
        ico, n: Searc, h,
    colo, r: "from-zion-cyan to-zion-blue",
        dela, y: 0.2,
    feature, s: ["Smar, t algorithm, s", "Instan, t result, s", "Qualit, y filterin, g"]
    },
    {
        titl, e: "Hire/Buy",
    descriptio, n: "Connect directly with matched providers and complete your transaction securely.",
        ico, n: Handshak, e,
    colo, r: "from-zion-blue to-zion-cyan",
        dela, y: 0.4,
    feature, s: ["Secur, e payment, s", "Direc, t contac, t", "Escro, w protectio, n"]
    },
    {
        titl, e: "Done",
    descriptio, n: "Enjoy hassle-free delivery and support for your technology solutions.",
        ico, n: Chec, k,
    colo, r: "from-zion-purple-light to-zion-cyan",
        dela, y: 0.6,
    feature, s: ["Qualit, y assuranc, e", "Ongoin, g suppor, t", "Succes, s trackin, g"]
    },
];
export function HowItWorksSection() {
    const [activeSt,  e, p, setActiveSt, e, p] = useState(null);
=======
impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Searc, h, User, s, FileTex, t, Rocke, t, CheckCircl, e, Cloc, k, Targe, t, TrendingU, p, Awar, d, Za, p, Shield } from 'lucide-react';
const steps = [
    {
        ic, o, n: <Searc, h classNam, e="w-8 h-8"/>,
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
        ico, n: <Users className="w-8 h-8"/>,
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
        ico, n: <FileText className="w-8 h-8"/>,
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
        ico, n: <Rocket className="w-8 h-8"/>,
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
        ico, n: <CheckCircle className="w-8 h-8"/>,
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
    { ic, o, n: <Cloc, k classNam, e="w-6 h-6"/>,
    val, u, e: "3, x Faste, r", lab, e, l: "Projec, t Deliver, y" },
    { ic, o, n: <Targe, t classNam, e="w-6 h-6"/>,
    val, u, e: "9, 9.9%", lab, e, l: "Succes, s Rat, e" },
    { ic, o, n: <TrendingU, p classNam, e="w-6 h-6"/>,
    val, u, e: "5, 0%", lab, e, l: "Cos, t Reductio, n" },
    { ic, o, n: <Awar, d classNam, e="w-6 h-6"/>,
    val, u, e: "100, 0+", lab, e, l: "Project, s Complete, d" }
];
export function HowItWorksSection() {
    const [hoveredSt,  e, p, setHoveredSt, e, p] = useState(null);
    const [activeSt, e, p, setActiveSt, e, p] = useState(0);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
    const containerVariants = {
        hidde,  n: { opacit, y: 0 },
        visibl, e: {
            opacit, y: 1,
    transitio, n: {
<<<<<<< HEAD
                duratio, n: 1,
    staggerChildre, n: 0.3,
            },
        },
    };
    const stepVariants = {
        hidde, n: { opacit, y: 0,
    y: 5, 0, scal, e: 0.9 },
        visibl, e: {
            opacit, y: 1,
    y: 0,
            scal, e: 1,
    transitio, n: {
                duratio, n: 0.8,
    eas, e: "easeOut",
            },
        },
        hove, r: {
            y: -1, 0,
    scal, e: 1.0, 5,
            transitio, n: {
                duratio, n: 0.3,
    eas, e: "easeOut",
            },
        },
    };
    const titleVariants = {
        hidde, n: { opacit, y: 0,
    y: 20 },
        visibl, e: {
            opacit, y: 1,
    y: 0,
            transitio, n: {
                duratio, n: 0.6,
    eas, e: "easeOut",
            },
        },
    };
    const iconVariants = {
        hove, r: {
            scal, e: 1.1,
    rotat, e: 5,
            transitio, n: {
                duratio, n: 0.3,
    eas, e: "easeOut",
            },
        },
    };
    return (_jsxs("section", { classNam, e: "py-20 bg-zion-blue relative overflow-hidden", "aria-labelledby": "how-it-works-heading", childre, n: [_jsx, s("di, v", { classNa, m, e: "absolut, e inse, t-0 opacit, y-5",
    childr, e, n: [_js, x("di, v", { classNa, m, e: "absolut, e to, p-1/4 lef, t-1/4 w-3, 2 h-3, 2 b, g-gradien, t-t, o-b, r fro, m-zio, n-purpl, e t, o-transparen, t rounde, d-ful, l blu, r-2x, l" }), _js, x("di,  v", { classNa, m, e: "absolut, e botto, m-1/4 righ, t-1/4 w-3, 2 h-3, 2 b, g-gradien, t-t, o-t, l fro, m-zio, n-cya, n t, o-transparen, t rounde, d-ful, l blu, r-2x, l" })] }), _jsxs("div",  { classNam, e: "container mx-auto px-4 relative z-10",
    childre, n: [_jsx, s(motio, n.d, i, v, { classNa, m, e: "tex, t-cente, r m, b-1, 6",
    varian, t, s: titleVarian, t, s, initi, a, l: "hidde, n",
    whileInVi, e, w: "visibl, e", viewpo, r, t: { on, c, e: tru, e }, childr, e, n: [_js, x(GradientHeadi, n, g, { i, d: "ho, w-i, t-work, s-headin, g",
    childr, e, n: "Ho, w I, t Work, s" }), _js, x("p",  { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t tex, t-l, g m, t-4 ma, x-w-2x, l m, x-aut, o leadin, g-relaxe, d",
    childr, e, n: "A simpl, e fou, r-ste, p proces, s t, o connec, t technolog, y provider, s wit, h client, s" })] }), _jsxs(motion.di,  v, { classNam, e: "relative",
    variant, s: containerVariant, s, initia, l: "hidden",
    whileInVie, w: "visible", viewpor, t: { onc, e: tru, e,
    margi, n: "-100px" }, childre, n: [_js, x("di, v", { classNa, m, e: "absolut, e lef, t-4 m, d:lef, t-1/2 to, p-0 h-ful, l w-1 b, g-gradien, t-t, o-b fro, m-zio, n-purpl, e vi, a-zio, n-cya, n t, o-zio, n-purpl, e-ligh, t transfor, m -translat, e-x-1/2 m, d:bloc, k hidde, n",
    childr, e, n: step, s.ma, p((_, inde, x) => (_js,  x(motio, n.d, i, v, { classNa, m, e: "absolut, e w-4 h-4 b, g-zio, n-blu, e borde, r-2 borde, r-zio, n-purpl, e rounde, d-ful, l transfor, m -translat, e-x-1/2",
    sty, l, e: { t, o, p: `${(inde, x / (step, s.lengt, h - 1)) * 1, 0, 0}%` }, initi, a, l: { sca, l, e: 0 }, whileInVi, e, w: { sca, l, e: 1 }, viewpo, r, t: { on, c, e: tru, e }, transiti, o, n: { del, a, y: inde, x * 0.2,
    durati, o, n: 0.5 } }, inde, x))) }), _js, x("di,  v", { classNa, m, e: "spac, e-y-1, 6 m, d:spac, e-y-0",
    childr, e, n: step, s.ma, p((st, e, p, inde, x) => (_jsx,  s(motio, n.d, i, v, { classNa, m, e: `fle, x fle, x-co, l m, d:fle, x-ro, w item, s-cente, r ${inde, x % 2 === 0 ? "m, d:fle, x-ro, w-revers, e" : ""} relati, v, e`, varian, t, s: stepVarian, t, s,
    whileHov, e, r: "hove, r", onHoverSta, r, t: () => setActiveSte, p(inde,  x),
    onHoverE, n, d: () => setActiveSte,  p(nul, l), childr, e, n: [_js, x("di,  v", { classNa, m, e: "m, d:w-1/2 m, b-8 m, d:m, b-0 m, d:p, x-1, 2 tex, t-cente, r m, d:tex, t-righ, t",
    childr, e, n: inde, x % 2 === 0 ? (_jsx, s(motio, n.d, i, v, { initi, a, l: { opaci, t, y: 0,
    x: 2, 0 }, whileInVi, e, w: { opaci, t, y: 1,
    x: 0 }, viewpo, r, t: { on, c, e: tru, e }, transiti, o, n: { del, a, y: ste, p.dela, y + 0.3,
    durati, o, n: 0.6 }, childr, e, n: [_js, x("h, 3", { classNa, m, e: "tex, t-2x, l fon, t-bol, d tex, t-whit, e m, b-4 grou, p-hov, e, r:tex, t-zio, n-cya, n transitio, n-color, s duratio, n-30, 0",
    childr, e, n: ste, p.titl, e }), _js, x("p",  { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t m, b-4 leadin, g-relaxe, d",
    childr, e, n: ste, p.descriptio, n }), _js, x("di,  v", { classNa, m, e: "spac, e-y-2",
    childr, e, n: ste, p.feature, s.ma, p((featu, r, e, featureInde, x) => (_jsx,  s("di, v", { classNa, m, e: "fle, x item, s-cente, r ga, p-2 tex, t-s, m justif, y-cente, r m, d:justif, y-en, d",
    childr, e, n: [_js, x("di, v", { classNa, m, e: "w-2 h-2 b, g-zio, n-cya, n rounde, d-ful, l" }), _js, x("spa,  n", { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t/8, 0",
    childr, e, n: featur, e })] }, featureIndex))) })] })) : null }), _jsxs(motion.di,  v, { classNam, e: "relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-blue-light to-zion-blue border-2 border-zion-purple mx-4 m, d:mx-0 shadow-lg group-hove, r:shadow-xl transition-all duration-300",
    variant, s: iconVariant, s, whileHove, r: "hover",
    childre, n: [_js, x(ste, p.ic, o, n, { classNa, m, e: "w-8 h-8 tex, t-zio, n-cya, n" }), _js, x("di,  v", { classNa, m, e: "absolut, e -to, p-2 -righ, t-2 w-6 h-6 b, g-zio, n-purpl, e tex, t-whit, e tex, t-x, s rounde, d-ful, l fle, x item, s-cente, r justif, y-cente, r fon, t-bol, d",
    childr, e, n: inde, x + 1 })] }), _jsx("div",  { classNam, e: "m, d:w-1/2 m, d:px-12 text-center m, d:text-left",
    childre, n: index % 2 !== 0 ? (_jsxs(motion.di, v, { initia, l: { opacit, y: 0,
    x: -20 }, whileInVie, w: { opacit, y: 1,
    x: 0 }, viewpor, t: { onc, e: true }, transitio, n: { dela, y: step.delay + 0.3,
    duratio, n: 0.6 }, childre, n: [_js, x("h, 3", { classNa, m, e: "tex, t-2x, l fon, t-bol, d tex, t-whit, e m, b-4 grou, p-hov, e, r:tex, t-zio, n-cya, n transitio, n-color, s duratio, n-30, 0",
    childr, e, n: ste, p.titl, e }), _js, x("p",  { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t m, b-4 leadin, g-relaxe, d",
    childr, e, n: ste, p.descriptio, n }), _js, x("di,  v", { classNa, m, e: "spac, e-y-2",
    childr, e, n: ste, p.feature, s.ma, p((featu, r, e, featureInde, x) => (_jsx,  s("di, v", { classNa, m, e: "fle, x item, s-cente, r ga, p-2 tex, t-s, m justif, y-cente, r m, d:justif, y-star, t",
    childr, e, n: [_js, x("di, v", { classNa, m, e: "w-2 h-2 b, g-zio, n-cya, n rounde, d-ful, l" }), _js, x("spa,  n", { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t/8, 0",
    childr, e, n: featur, e })] }, featureIndex))) })] })) : null })] }, step.title))) })] }), _jsx(motion.di,  v, { classNam, e: "text-center mt-16",
    initia, l: { opacit, y: 0,
    y: 20 }, whileInVie, w: { opacit, y: 1,
    y: 0 }, viewpor, t: { onc, e: true }, transitio, n: { duratio, n: 0.6,
    dela, y: 1 }, childre, n: _jsxs("div", { classNam, e: "inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-full hove, r:from-zion-purple-light hove, r:to-zion-purple transition-all duration-300 transform hove, r:scale-105 shadow-lg hove, r:shadow-xl",
    childre, n: [_js, x("spa, n", { classNa, m, e: "fon, t-mediu, m",
    childr, e, n: "Read, y t, o ge, t starte, d?" }), _js, x(ArrowRig,  h, t, { classNa, m, e: "w-5 h-5" })] }) })] })] }));
=======
                staggerChildre, n: 0.2,
    delayChildre, n: 0.1
            }
        }
    };
    ;
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
    return (<section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
            backgroundImag,  e: `radial-gradient(circle at 50% 50%, currentColo, r, 1p, x, transparent 1p, x)`,
            backgroundSiz, e: '40px 40px'
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
            How It <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed">
            Our streamlined process ensures your project success from concept to completion. 
            Experience the Zion difference with our proven methodology.
          </p>
        </motion.div>

        {/* Stats section */}
        <motion.div className="grid grid-cols-2 m, d:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ onc, e: true }}>
          {stats.map((sta,  t, index) => (<motion.div key={index} variants={statsVariants} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
              <div className="text-zion-cyan mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>))}
        </motion.div>
        
        <motion.div className="relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ onc,  e: true }}>
          {/* Enhanced connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue transform -translate-y-1/2 hidden l, g:block">
            <motion.div className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple" initial={{ widt, h: "0%" }} whileInView={{ widt, h: "100%" }} viewport={{ onc, e: true }} transition={{ duratio, n: 2,
    dela, y: 0.5 }}/>
          </div>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-5 gap-8 relative z-10">
            {steps.map((ste, p, index) => (<motion.div key={index} variants={itemVariants} className="relative" onHoverStart={() => setHoveredStep(index)} onHoverEnd={() => setHoveredStep(null)} whileHover={{ y: -8 }} transition={{ typ,  e: "spring",
    stiffnes, s: 300 }}>
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
                      <Clock className="w-3 h-3"/>
                      <span>{step.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-zion-purple/80 text-xs">
                      <Target className="w-3 h-3"/>
                      <span>{step.success}</span>
                    </div>
                  </div>

                  {/* Interactive details on hover */}
                  <AnimatePresence>
                    {hoveredStep === index && (<motion.div className="mt-4 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }} exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} transition={{ duratio, n: 0.3 }}>
                        <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Feature, s:</h4>
                        <div className="space-y-2">
                          {step.details.map((detai, l, idx) => (<motion.div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-xs" initial={{ opacit,  y: 0,
    x: -10 }} animate={{ opacit, y: 1,
    x: 0 }} transition={{ dela, y: idx * 0.1 }}>
                              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                              <span>{detail}</span>
                            </motion.div>))}
                        </div>
                      </motion.div>)}
                  </AnimatePresence>

                  {/* Hover indicator */}
                  <div className="mt-4 text-zion-cyan/60 text-xs">
                    {hoveredStep === index ? "Hover to see details" : "Hover for details"}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>))}
          </div>
        </></div>
        
        {/* Enhanced bottom CTA */}
        <motion.div className="text-center mt-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}>
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to start your project journey?
              </p>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hove, r:from-zion-purple-light hove, r:to-zion-purple text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-purple/25">
                Get Started Today
                <Rocket className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Additional features */}
        <motion.div className="grid grid-cols-1 m, d: grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.5 }}>
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-purple mb-4">
              <Zap className="w-8 h-8 text-white"/>
            </div>
            <h4 className="text-white font-semibold mb-2">Fast Setup</h4>
            <p className="text-zion-slate-light text-sm">Get started i, n, minute, s, not days</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-purple to-zion-cyan mb-4">
              <Shield className="w-8 h-8 text-white"/>
            </div>
            <h4 className="text-white font-semibold mb-2">Secure & Reliable</h4>
            <p className="text-zion-slate-light text-sm">Enterprise-grade security and uptime</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan-light to-zion-blue mb-4">
              <Users className="w-8 h-8 text-white"/>
            </div>
            <h4 className="text-white font-semibold mb-2">Expert Support</h4>
            <p className="text-zion-slate-light text-sm">24/7 support from our team</p>
          </div>
        </motion.div>
      </div>);
    section >
    ;
    ;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
}
