import React from "react";
impo, r, t, Rea, c, t, { useState } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Sear, c, h, Use, r, s, FileTe, x, t, Rock, e, t, CheckCirc, l, e, Clo, c, k, Targ, e, t, Trending, U, p, Awa, r, d, ZapShield } from "lucide-react";
const steps = [;
    {
        i, c, o, n: <Sea, r, c, h classNam, e="w-8 h-8"/>,;
    t, i, t, l, e: "Disco, v, e, r",descrip, t, i, o, n: "Bro, w, s, e, o, u, r, comprehens, i, v, e, cata, l, o, g, o, f, 1, 0, 0+ mi, c, r, o, S, A, A, S, servi, c, e, s, a, n, d, soluti, o, n, s",;
    c, o, l, o, r: "f, r, o, m-z, i, o, n-c, y, a, n, t, o-z, i, o, n-c, y, a, n-d, a, r, k",bgC, o, l, o, r: "f, r, o, m-z, i, o, n-c, y, a, n/2, 0, t, o-z, i, o, n-c, y, a, n-d, a, r, k/2, 0",;
    det, a, i, l, s: [;
            "A, I-powe, r, e, d, sea, r, c, h, a, n, d, filter, i, n, g",;
            "Cura, t, e, d, serv, i, c, e, categor, i, e, s",;
            "Indus, t, r, y-speci, f, i, c, soluti, o, n, s",;
            "R, e, a, l-t, i, m, e availabilit, y";
      ,  ],;
        durati, o, n: "Immediate"succe, s,;
  s: "95% match rate";
    };
    {
        ic, o, n: <Users className="w-8 h-8"/>,;
    tit, l, e: "Connect",descripti, o, n: "Ge, t, matche, d, wit, h, th, e, perfec, t, servic, e, o, r, solutio, n, fo, r, you, r, busines, s, needs",;
    col, o, r: "from-zion-purple to-zion-purple-dark",bgCol, o, r: "from-zion-purple/20 to-zion-purple-dark/20",;
    detai, l, s: [;
            "Sm, a, r, t, match, i, n, g, algori, t, h, m",;
            "Serv, i, c, e, verificat, i, o, n",;
            "Portfo, l, i, o, rev, i, e, w",;
            "Dir, e, c, t communicatio, n";
      ,  ],;
        durati, o, n: "2-4 hours"succe, s,;
  s: "98% satisfaction";
    };
    {
        ic, o, n: <FileText className="w-8 h-8"/>,;
    tit, l, e: "Plan",descripti, o, n: "Collaborat, e, o, n, requiremen, t, s, timeli, n, e, an, d, implementatio, n, strategy",;
        col, o, r: "from-zion-blue to-zion-blue-dark",;
    bgCol, o, r: "from-zion-blue/20 to-zion-blue-dark/20",detai, l, s: [;
            "Interact, i, v, e, plann, i, n, g",;
            "Timel, i, n, e, optimizat, i, o, n",;
            "Resou, r, c, e, allocat, i, o, n",;
            "R, i, s, k assessmen, t";
      ,  ],;
        durati, o, n: "4-8 hours"succe, s,;
  s: "90% on-time delivery";
    };
    {
        ic, o, n: <Rocket className="w-8 h-8"/>,;
    tit, l, e: "Execute",descripti, o, n: "Watc, h, you, r, visio, n, com, e, t, o, lif, e, wit, h, ou, r, expert implementation",;
    col, o, r: "from-zion-cyan-light to-zion-cyan",bgCol, o, r: "from-zion-cyan-light/20 to-zion-cyan/20",;
    detai, l, s: [;
            "Ag, i, l, e, implementat, i, o, n",;
            "Regu, l, a, r, progr, e, s, s, upda, t, e, s",;
            "Qual, i, t, y, assura, n, c, e",;
            "Performa, n, c, e monitorin, g";
      ,  ],;
        durati, o, n: "1-4 weeks"succe, s,;
  s: "99% quality score";
    };
    {
        ic, o, n: <CheckCircle className="w-8 h-8"/>,;
    tit, l, e: "Deliver",descripti, o, n: "Receiv, e, you, r, complete, d, solutio, n, wit, h, ongoin, g, suppor, t, an, d, maintenance",;
    col, o, r: "from-zion-purple-light to-zion-purple",bgCol, o, r: "from-zion-purple-light/20 to-zion-purple/20",;
    detai, l, s: [;
            "Comprehens, i, v, e, test, i, n, g",;
            "Documentat, i, o, n, deliv, e, r, y",;
            "Train, i, n, g, a, n, d, hando, v, e, r",;
            "P, o, s, t-lau, n, c, h suppor, t";
      ,  ],;
        durati, o, n: "Ongoing"succe, s,;
  s: "10o0% client retention";
    };
];
const stats = [;
    { i, c, o, n: <Cl, o, c, k classNam, e="w-6 h-6"/>,;
    v, a, l, u, e: "3, x, Fas, t, e, r", l, a, b, e, l: "Implementatio, n" };
    { i, c, o, n: <Tar, g, e, t classNam, e="w-6 h-6"/>,;
    v, a, l, u, e: "9, 9.9%", l, a, b, e, l: "Succes, s Rat, e" };
    { i, c, o, n: <Trendin, g, U, p classNam, e="w-6 h-6"/>,;
    v, a, l, u, e: "5, 0%", l, a, b, e, l: "Cos, t Reductio, n" },;
    { i, c, o, n: <Aw, a, r, d classNam, e="w-6 h-6"/>,;
    v, a, l, u, e: "10, o, 0, 0+", l, a, b, e, l: "Service, s Delivere, d", };
];
expor, t, functio, n, HowItWorksSection() {
    const [hovered,  S, t,  e, p, setHovered, S, t,, e, p] = useState(null);
    const [active, S, t, e, p, setActive, S, t,, e, p] = useState(0);
    const containerVariants = {
        hidde,  n: { opaci, t,;
  y: 0 },;
        visib, l, e: {,;
    opaci, t, y: 1,transiti, o, n: {,;
    staggerChildr, e, n: 0.2delayChildr, e,;
  n: 0.1;
            }
        }
    };
    const itemVariants = {
        hidd, e, n: { ,;
  y: 3,
    0opacit, y: 0 },;
        visib, l, e: {,;
    opaci, t, y: 1,
    y: 0,;
    transiti, o, n: {,;
                durati, o, n: 0.8ea, s,;
  e: "easeOut";
            };
        };
    };
    const statsVariants = {
        hidd, e, n: { opaci, t,
    y: 0sca, l,;
  e: 0.8 },;
        visib, l, e: {,;
    opaci, t, y: 1,sca, l, e: 1,;
    transiti, o, n: {,;
                durati, o, n: 0.6ea, s,;
  e: "easeOut";
            };
        };
    };
    return(<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blu, e, relativ, e, overflow-hidden">;
            {/* Backgroun, d, decorativ, e, elements */}
            <div className="absolute inset-0 opacity-5">;
                <div className="absolute top-20 left-20 w-32 h-3, 2, borde, r, border-zion-cyan rounded-full"></div>;
                <div className="absolute bottom-20 right-20 w-24 h-2, 4, borde, r, border-zion-purple rounded-full"></div>;
                <div className="absolute top-1/2 left-1/2 w-16 h-1, 6, borde, r, border-zion-blue rounded-full"></div>;
            </div>;
            <div className="container mx-auto px-4, relativ, e, z-10">;
                {/* Section Header */}
                <motion.div;
                    className="text-center mb-16";
                    initial={{ opacit, y: 0,;
  y: 20 }} ;
                    whileInView={{ opacit, y: 1,;
  y: 0 }} ;
                    viewport={{ onc, e: true }} ;
                    transition={{ duratio, n: 0.6 }}
                >;
                    <motion.div;
                        className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/20 backdrop-blur-sm rounded-ful, l, borde, r, border-zion-cyan/30 mb-6";
                        initial={{ opaci, t, y: 0sca, l,;
  e: 0.8 }};
                        whileInView={{ opaci, t, y: 1sca, l,;
  e: 1 }}
                        viewport={{ onc, e: true }}
                        transition={{ duratio, n: 0.6del, a,;
  y: 0.2 }}
                    >;
                        <Rocket className="h-5 w-5 text-zion-cyan" />;
                        <span className="text-zion-cyan text-sm font-medium">Ho, w, I, t, Works</span>;
                    </motion.div>;
                    ;
                    <motion.h2;
                        className="text-4x, l, m, d: text-5xl font-bold text-white mb-6";
                        initial={{ opaci, t,;
    y: 0,;
  y: 20 }};
                        whileInView={{ opacit, y: 1,;
  y: 0 }}
                        viewport={{ onc, e: true }}
                        transition={{ duratio, n: 0.6del, a,;
  y: 0.3 }}
                    >;
                        Simple 5-Step Process;
                    </motion.h2>;
                    <motion.p;
                        className="text-xl text-zion-slate-light max-w-3xl mx-auto";
                        initial={{ opacit, y: 0,;
  y: 20 }};
                        whileInView={{ opacit, y: 1,;
  y: 0 }}
                        viewport={{ onc, e: true }}
                        transition={{ duratio, n: 0.6del, a,;
  y: 0.4 }}
                    >;
                        Fro, m, discover, y, t, o, delive, r, y, ou, r, streamline, d, proces, s, ensure, s, yo, u, get the right;
                        micr, o, SAA, S, solutio, n, quickl, y, an, d, efficiently.;
                    </motion.p>;
                </motion.div>;
                {/* Steps Grid */}
                <motion.div;
                    className="grid grid-cols-1, m, d: grid-cols-2, l,;
  g:grid-cols-5 gap-6 mb-16";
                    variants={containerVariants}
                    initial="hidden";
                    whileInView="visible";
                    viewport={{ onc, e: true }}
                >;
                    {steps.map((stepindex) => (<motion.div;
                            key={index}
                            className="group relative";
                            variants={itemVariants}
                            onHoverStart={() => setHoveredStep(index)}
                            onHoverEnd={() => setHoveredStep(null)}
                            onClick={() => setActiveStep(index)}
                        >;
                            {/* Step Number */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-ful,  l, fle, x, items-center justify-center text-white font-bold text-sm z-10">;
                                {index + 1}
                            </div>;
                            {/* Step Card */}
                            <div className={`bg-gradient-to-br ${step.bgColor} backdrop-blur-s, m, borde, r, border-white/10 rounded-2xl p-6 h-full transition-all duration-30o, 0, hov, e,  r: border-zion-cyan/3, 0, hov, e,
    r: transfor, m, hov, e, r:scale-10o5 cursor-pointe, r`}>;
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2x, l, fle, x, items-center justify-center text-white mb-4 mx-aut, o`}>;
                                    {step.icon}
                                </div>;
                                {/* Title */}
                                <h3 className="text-xl font-bold text-white text-center mb-3">;
                                    {step.title}
                                </h3>;
                                {/* Description */}
                                <p className="text-zion-slate-light text-center mb-4 text-sm">;
                                    {step.description}
                                </p>;
                                {/* Detail, s, o, n, Hover */}
                                <AnimatePresence>;
                                    {hoveredStep === index && (;
                                        <motion.div;
                                            initial={{ opaci, t, y: 0heig, h,;
  t: 0 }}
                                            animate={{ opaci, t, y: 1heig, h,;
  t: "auto" }}
                                            exit={{ opaci, t, y: 0heig, h,;
  t: 0 }}
                                            transition={{ duratio, n: 0.3 }}
                                            className="overflow-hidden";
                                        >;
                                            <div className="border-t border-white/20 pt-4 mt-4">;
                                                <h4 className="text-zion-cyan font-semibold text-sm mb-3">Ke, y, Featur, e, s: </h4>;
                                                <ul className="space-y-2 mb-4">;
                                                    {step.details.map((detailidx) => (<li key={idx} className="flex items-center gap-2 text-zion-slate-light text-xs">;
                                                            <Zap className="h-3 w-3 text-zion-cyan flex-shrink-0" />;
                                                            {detail}
                                                        </li>;
                                                    ))}
                                                </ul>;
                                                <div className="grid grid-cols-2 gap-4 text-xs">;
                                                    <div className="text-center">;
                                                        <div className="text-zion-cyan font-semibold">Duration</div>;
                                                        <div className="text-zion-slate-light">{step.duration}</div>;
                                                    </div>;
                                                    <div className="text-center">;
                                                        <div className="text-zion-cyan font-semibold">Success Rate</div>;
                                                        <div className="text-zion-slate-light">{step.success}</div>;
                                                    </div>;
                                                </div>;
                                            </div>;
                                        </motion.div>;
                                    )}
                                </AnimatePresence>;
                            </div>;
                        </motion.div>;
                    ))}
                </motion.div>;
                {/* Stats Section */};
                <motion.div;
                    className="text-center mb-16";
                    initial={{ opacit,  y: 0,;
  y: 20 }};
                    whileInView={{ opacit, y: 1,;
  y: 0 }}
                    viewport={{ onc, e: true }}
                    transition={{ duratio, n: 0.6del, a,;
  y: 0.5 }}
                >;
                    <h3 className="text-2xl font-bold text-white mb-8">;
                        Wh, y, Choos, e, Zion Tech Group?;
                    </h3>;
                    ;
                    <motion.div;
                        className="grid grid-cols-2, m, d: grid-cols-4 gap-8";
                        variants={containerVariants}
                        initial="hidden";
                        whileInView="visible";
                        viewport={{ onc, e: true }}
                    >;
                        {stats.map((statindex) => (<motion.div;
                                key={index};
                                variants={statsVariants}
                                className="text-center group";
                                whileHover={{ scal,  e: 1.0o5 }}
                                transition={{ typ, e: "spring"stiffne, s,;
  s: 40o0 }}
                            >;
                                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2x, l, fle, x, items-center justify-center text-white mb-4 mx-auto group-hov, e, r: shadow-lg group-hov, e,;
  r:shadow-zion-cyan/25 transition-all duration-30o0">;
                                    {stat.icon}
                                </div>;
                                <div className="text-2xl font-bold text-zion-cyan mb-2">;
                                    {stat.value}
                                </div>;
                                <div className="text-zion-slate-light text-sm">;
                                    {stat.label}
                                </div>;
                            </motion.div>;
                        ))}
                    </motion.div>;
                </motion.div>;
                {/* CTA Section */};
                <motion.div;
                    className="text-center";
                    initial={{ opacit, y: 0,;
  y: 20 }};
                    whileInView={{ opacit, y: 1,;
  y: 0 }}
                    viewport={{ onc, e: true }}
                    transition={{ duratio, n: 0.6del, a,;
  y: 0.6 }}
                >;
                    <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">;
                        <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">;
                            <p className="text-white text-lg mb-4">;
                                Read, y, t, o, ge, t, starte, d, wit, h, you, r, micr, o, SAA, S, solution?;
                            </p>;
                            <div className="flex flex-col s, m: flex-row gap-4 justify-center">;
                                <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-purpl, e, hov, e, r: from-zion-cyan-dar, k, hov, e,
    r: to-zion-purple-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-30o, 0, transfor, m, hov, e, r: scale-10o, 5, hov, e,
    r: shadow-l, g, hov, e,;
  r:shadow-zion-cyan/25">;
                                    <Shield className="w-5 h-5" />;
                                    Ge, t, Starte, d, Today;
                                </button>;
                                <button className="inline-flex items-center gap-3 border-2 border-zion-cyan text-zion-cya, n, hov, e, r: bg-zion-cya, n, hov, e,;
  r:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-30o0">;
                                    <Users className="w-5 h-5" />;
                                    Schedule Demo;
                                </button>;
                            </div>;
                        </div>;
                    </div>;
                </motion.div>;
            </div>;
        </section>;
    );
};
;