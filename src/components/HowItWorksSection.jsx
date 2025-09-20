impor, t, Reac, t, { useState } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Searc, h, User, s, FileTex, t, Rocke, t, CheckCircl, e, Cloc, k, Targe, t, TrendingU, p, Awar, d, ZapShield } from "lucide-react";
const steps = [;
    {
        ic, o, n: <Searc, h className="w-8 h-8"/>,;
    tit, l, e: "Discove, r",descripti, o, n: "Brows, e ou, r comprehensiv, e catalo, g o, f 10, 0+ micr, o SAA, S service, s an, d solution, s",;
    col, o, r: "fro, m-zio, n-cya, n t, o-zio, n-cya, n-dar, k",bgCol, o, r: "fro, m-zio, n-cya, n/2, 0 t, o-zio, n-cya, n-dar, k/2, 0",;
    detai, l, s: [;
            "A, I-powere, d searc, h an, d filterin, g",;
            "Curate, d servic, e categorie, s",;
            "Industr, y-specifi, c solution, s",;
            "Rea, l-tim, e availability";
      ,  ],;
        duratio, n: "Immediate"succes,;
  s: "95% match rate";
    };
    {
        ico, n: <Users className="w-8 h-8"/>,;
    titl, e: "Connect",descriptio, n: "Get, matched, with the, perfect, service or, solution, for your, business, needs",;
    colo, r: "from-zion-purple to-zion-purple-dark",bgColo, r: "from-zion-purple/20 to-zion-purple-dark/20",;
    detail, s: [;
            "Smar, t matchin, g algorith, m",;
            "Servic, e verificatio, n",;
            "Portfoli, o revie, w",;
            "Direc, t communication";
      ,  ],;
        duratio, n: "2-4 hours"succes,;
  s: "98% satisfaction";
    };
    {
        ico, n: <FileText className="w-8 h-8"/>,;
    titl, e: "Plan",descriptio, n: "Collaborate o, n, requirement, s, timelin, e, and, implementation, strategy",;
        colo, r: "from-zion-blue to-zion-blue-dark",;
    bgColo, r: "from-zion-blue/20 to-zion-blue-dark/20",detail, s: [;
            "Interactiv, e plannin, g",;
            "Timelin, e optimizatio, n",;
            "Resourc, e allocatio, n",;
            "Ris, k assessment";
      ,  ],;
        duratio, n: "4-8 hours"succes,;
  s: "90% on-time delivery";
    };
    {
        ico, n: <Rocket className="w-8 h-8"/>,;
    titl, e: "Execute",descriptio, n: "Watch, your, vision come, to, life with, our, expert implementation",;
    colo, r: "from-zion-cyan-light to-zion-cyan",bgColo, r: "from-zion-cyan-light/20 to-zion-cyan/20",;
    detail, s: [;
            "Agil, e implementatio, n",;
            "Regula, r progres, s update, s",;
            "Qualit, y assuranc, e",;
            "Performanc, e monitoring";
      ,  ],;
        duratio, n: "1-4 weeks"succes,;
  s: "99% quality score";
    };
    {
        ico, n: <CheckCircle className="w-8 h-8"/>,;
    titl, e: "Deliver",descriptio, n: "Receive, your, completed solution, with, ongoing support, and, maintenance",;
    colo, r: "from-zion-purple-light to-zion-purple",bgColo, r: "from-zion-purple-light/20 to-zion-purple/20",;
    detail, s: [;
            "Comprehensiv, e testin, g",;
            "Documentatio, n deliver, y",;
            "Trainin, g an, d handove, r",;
            "Pos, t-launc, h support";
      ,  ],;
        duratio, n: "Ongoing"succes,;
  s: "10o0% client retention";
    };
];
const stats = [;
    { ic, o, n: <Cloc, k className="w-6 h-6"/>,;
    val, u, e: "3, x Faste, r", lab, el: "Implementation" };
    { ic, o, n: <Targe, t className="w-6 h-6"/>,;
    val, u, e: "9, 9.9%", lab, e, l: "Success Rate" };
    { ic, o, n: <TrendingU, p className="w-6 h-6"/>,;
    val, u, e: "5, 0%", lab, e, l: "Cost Reduction" },;
    { ic, o, n: <Awar, d className="w-6 h-6"/>,;
    val, u, e: "10o0, 0+", lab, el: "Services Delivered", };
];
export, function, HowItWorksSection() {
    const [hoveredSt,  e, p, setHoveredSt,, ep] = useState(null);
    const [activeSt, e, p, setActiveSt,, ep] = useState(0);
    const containerVariants = {
        hidden: { opacit,;
  y: 0 },;
        visibl, e: {,;
    opacit, y: 1,transitio, n: {,;
    staggerChildre, n: 0.2delayChildre,;
  n: 0.1;
            }
        }
    };
    const itemVariants = {
        hidde, n: { ,;
  y: 3, 0opacity: 0 },;
        visibl, e: {,;
    opacit, y: 1,y: 0,;
    transitio, n: {,;
                duratio, n: 0.8eas,;
  e: "easeOut";
            };
        };
    };
    const statsVariants = {
        hidde, n: { opacit, y: 0scal,;
  e: 0.8 },;
        visibl, e: {,;
    opacit, y: 1,scal, e: 1,;
    transitio, n: {,;
                duratio, n: 0.6eas,;
  e: "easeOut";
            };
        };
    };
    return(<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue, relative, overflow-hidden">;
            {/* Background, decorative, elements */}
            <div className="absolute inset-0 opacity-5">;
                <div className="absolute top-20 left-20 w-32 h-32, border, border-zion-cyan rounded-full"></div>;
                <div className="absolute bottom-20 right-20 w-24 h-24, border, border-zion-purple rounded-full"></div>;
                <div className="absolute top-1/2 left-1/2 w-16 h-16, border, border-zion-blue rounded-full"></div>;
            </div>;
            <div className="container mx-auto px-4, relative, z-10">;
                {/* Section Header */}
                <motion.div;
                    className="text-center mb-16";
                    initial={{ opacity: 0,;
  y: 20 }} ;
                    whileInView={{ opacity: 1,;
  y: 0 }} ;
                    viewport={{ once: true }} ;
                    transition={{ duration: 0.6 }}
                >;
                    <motion.div;
                        className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/20 backdrop-blur-sm rounded-full, border, border-zion-cyan/30 mb-6";
                        initial={{ opacit, y: 0scal,;
  e: 0.8 }};
                        whileInView={{ opacit, y: 1scal,;
  e: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6dela,;
  y: 0.2 }}
                    >;
                        <Rocket className="h-5 w-5 text-zion-cyan" />;
                        <span className="text-zion-cyan text-sm font-medium">How, It, Works</span>;
                    </motion.div>;
                    ;
                    <motion.h2;
                        className="text-4xl m, d: text-5xl font-bold text-white mb-6";
                        initial={{ opacit,;
    y: 0,;
  y: 20 }};
                        whileInView={{ opacity: 1,;
  y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6dela,;
  y: 0.3 }}
                    >;
                        Simple 5-Step Process;
                    </motion.h2>;
                    <motion.p;
                        className="text-xl text-zion-slate-light max-w-3xl mx-auto";
                        initial={{ opacity: 0,;
  y: 20 }};
                        whileInView={{ opacity: 1,;
  y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6dela,;
  y: 0.4 }}
                    >;
                        From, discovery, t, o, deliver, y, our, streamlined, process ensures, you, get the right;
                        micro, SAAS, solution quickly, and, efficiently.;
                    </motion.p>;
                </motion.div>;
                {/* Steps Grid */}
                <motion.div;
                    className="grid grid-cols-1 m, d: grid-cols-2 l,;
  g:grid-cols-5 gap-6 mb-16";
                    variants={containerVariants}
                    initial="hidden";
                    whileInView="visible";
                    viewport={{ once: true }}
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
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full, flex, items-center justify-center text-white font-bold text-sm z-10">;
                                {index + 1}
                            </div>;
                            {/* Step Card */}
                            <div className={`bg-gradient-to-br ${step.bgColor} backdrop-blur-sm, border, border-white/10 rounded-2xl p-6 h-full transition-all duration-30o0 hove,  r: border-zion-cyan/30 hove, r: transform hove, r:scale-10o5 cursor-pointer`}>;
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl, flex, items-center justify-center text-white mb-4 mx-auto`}>;
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
                                {/* Details, on, Hover */}
                                <AnimatePresence>;
                                    {hoveredStep === index && (;
                                        <motion.div;
                                            initial={{ opacit, y: 0heigh,;
  t: 0 }}
                                            animate={{ opacit, y: 1heigh,;
  t: "auto" }}
                                            exit={{ opacit, y: 0heigh,;
  t: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden";
                                        >;
                                            <div className="border-t border-white/20 pt-4 mt-4">;
                                                <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Feature, s: </h4>;
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
                    initial={{ opacity: 0,;
  y: 20 }};
                    whileInView={{ opacity: 1,;
  y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6dela,;
  y: 0.5 }}
                >;
                    <h3 className="text-2xl font-bold text-white mb-8">;
                        Why, Choose, Zion Tech Group?;
                    </h3>;
                    ;
                    <motion.div;
                        className="grid grid-cols-2 m, d: grid-cols-4 gap-8";
                        variants={containerVariants}
                        initial="hidden";
                        whileInView="visible";
                        viewport={{ once: true }}
                    >;
                        {stats.map((statindex) => (<motion.div;
                                key={index};
                                variants={statsVariants}
                                className="text-center group";
                                whileHover={{ scale: 1.0o5 }}
                                transition={{ type: "spring"stiffnes,;
  s: 40o0 }}
                            >;
                                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl, flex, items-center justify-center text-white mb-4 mx-auto group-hove, r: shadow-lg group-hove,;
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
                    initial={{ opacity: 0,;
  y: 20 }};
                    whileInView={{ opacity: 1,;
  y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6dela,;
  y: 0.6 }}
                >;
                    <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">;
                        <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">;
                            <p className="text-white text-lg mb-4">;
                                Ready, to, get started, with, your micro, SAAS, solution?;
                            </p>;
                            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                                <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r: from-zion-cyan-dark hove, r: to-zion-purple-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-30o0, transform, hove, r: scale-10o5 hove, r: shadow-lg hove,;
  r:shadow-zion-cyan/25">;
                                    <Shield className="w-5 h-5" />;
                                    Get, Started, Today;
                                </button>;
                                <button className="inline-flex items-center gap-3 border-2 border-zion-cyan text-zion-cyan hove, r: bg-zion-cyan hove,;
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