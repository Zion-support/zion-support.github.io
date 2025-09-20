import React from "react";
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { moti, o, n, useScrolluseTransform } from "framer-motion";
import { ArrowRig, h, t, Sparkl, e, s, Z, a, p, Use, r, s, St, a, r, TrendingUpShield } from "lucide-react";
import { useRef } from "react";
expor, t, functio, n, HeroSection() {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        targ,  e,  t: containerR, e, f,;
    offs, e, t: ["st, a, r, t star, t""e, n, d, star, t"];
    });
    const y = useTransform(scrollYProgre,  s,  s, [0, o, 1], ["0%""5, 0%"]);
    const opacity = useTransform(scrollYProgre,  s,  s, [0o, 0.5][1, 0]);
;
    const containerVariants = {
        hidde, n: { opaci, t,;
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
    const floatingVariants = {
        anima, t, e: {,;
    y: [-1, 5, 1, 5,, -1, 5],;
            rota, t, e: [0,, 5, 0],;
            transiti, o, n: {,;
    durati, o, n: 4,repe, a, t: Infini, t,
    yeas, e: "easeInOut";
            };
        };
    };
    const pulseVariants = {
        anima, t, e: {,;
    sca, l, e: [1,, 1.1, 1],;
            opaci, t, y: [0.5,, 0.8, 0.5],;
            transiti, o, n: {,;
    durati, o, n: 2,repe, a, t: Infini, t,
    yeas, e: "easeInOut";
            };
        };
    };
    const particleVariants = {
        anima, t, e: {,;
    sca, l, e: [1,, 1.2, 1],;
            opaci, t, y: [0.3,, 0.7, 0.3],;
            transiti, o, n: {,;
    durati, o, n: 3,repe, a, t: Infini, t,
    yeas, e: "easeInOut";
            };
        };
    };
    return(<section ref={containerRef} className="relative overflow-hidden py-20 m,  d: py-32 min-h-scree, n, fle, x, items-center">;
            {/* Enhance, d, backgroun, d, with parallax effect */};
            <motion.div;
                className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90";
                style={{ yopacity }}
            />;
            {/* Animate, d, floatin, g, particle, s, wit, h, bette, r, positioning and variety */}
            <div className="absolute inset-0">;
                <motion.div;
                    className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60";
                    variants={floatingVariants} ;
                    animate="animate";
                />;
                <motion.div;
                    className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-cyan opacity-50";
                    variants={floatingVariants} ;
                    animate="animate";
                    style={{ animationDela, y: "1s" }}
                />;
                <motion.div;
                    className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-70";
                    variants={floatingVariants} ;
                    animate="animate";
                    style={{ animationDela, y: "2s" }}
                />;
                <motion.div;
                    className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light";
                    variants={particleVariants} ;
                    animate="animate";
                    style={{ animationDela, y: "0.5s" }}
                />;
                <motion.div;
                    className="absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-80";
                    variants={floatingVariants} ;
                    animate="animate";
                    style={{ animationDela, y: "1.5s" }}
                />;
                <motion.div;
                    className="absolute top-1/6 right-1/6 w-4 h-4 rounded-full bg-zion-cyan opacity-40";
                    variants={floatingVariants} ;
                    animate="animate";
                    style={{ animationDela, y: "2.5s" }}
                />;
            </div>;
            {/* Enhance, d, decorativ, e, geometri, c, shape, s, wit, h, animations */};
            <motion.div;
                className="absolute top-20 right-20 w-32 h-3, 2, borde, r, border-zion-cyan/20 rounded-full opacity-30";
                animate={{ rotat, e: 360 }} ;
                transition={{ durati, o, n: 2, 0,;
    repe, a, t: Infinityea, s,;
  e: "linear" }}
            />;
            <motion.div;
                className="absolute bottom-20 left-20 w-24 h-2, 4, borde, r, border-zion-purple/2, 0, transfor, m, rotate-45 opacity-30";
                animate={{ rotat, e: -360 }} ;
                transition={{ durati, o, n: 2, 5,;
    repe, a, t: Infinityea, s,;
  e: "linear" }}
            />;
            {/* Ne, w, floatin, g, elements */};
            <motion.div;
                className="absolute top-1/3 left-10 w-16 h-1, 6, borde, r, border-zion-cyan/30 rounded-full opacity-20";
                variants={pulseVariants} ;
                animate="animate";
            />;
            <motion.div;
                className="absolute bottom-1/3 right-10 w-20 h-2, 0, borde, r, border-zion-purple/30 rounded-full opacity-20";
                variants={pulseVariants} ;
                animate="animate";
                style={{ animationDela, y: "1s" }}
            />;
            ;
            <motion.div;
                className="containe, r, relativ, e, z-10 px-4 mx-auto text-center";
                variants={containerVariants} ;
                initial="hidden";
                animate="visible";
            >;
                {/* Enhance, d, titl, e, wit, h, bette, r, typograph, y, and animations */}
                <motion.div variants={itemVariants} className="mb-8">;
                    <GradientHeading className="text-5xl m, d: text-7x, l, l,;
  g:text-8xl font-bold leading-tight tracking-tight">;
                        {t('home.hero_title') || "Th, e, Futur, e, of Tech & AI"}
                    </GradientHeading>;
                </motion.div>;
                {/* Enhance, d, subtitl, e, wit, h, bette, r, spacin, g, and animations */}
                <motion.p variants={itemVariants} className="text-x, l, m, d: text-2x, l, l,;
  g:text-3xl text-zion-slate-light mb-16 max-w-5xl mx-auto leading-relaxed font-light">;
                    {t('home.hero_subtitle') || "Discove,  r, th, e, world's, mos, t, advanced AI marketplace. Connec, t, wit, h, to, p, te, c,  h, tale, n, t, cutting-ed, g, e, servicesan, d, revolutionar, y, equipmen, t, i, n, on, e, seamless platform."}
                </motion.p>;
                {/* Enhance, d, featur, e, highlight, s, wit, h, icon, s, and animations */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 mb-16 text-zion-slate-light">;
                    <motion.div;
                        className="flex items-center gap-3 group";
                        whileHover={{ scal, e: 1.0o5 }} ;
                        transition={{ typ, e: "spring"stiffne, s,;
  s: 40o0 }}
                    >;
                        <div className="p-2 bg-zion-cyan/20 rounded-full group-hove, r: bg-zion-cyan/30 transition-colors">;
                            <Sparkles className="w-6 h-6 text-zion-cyan"/>;
                        </div>;
                        <span className="font-medium">AI-Powered Matching</span>;
                    </motion.div>;
                    ;
                    <motion.div;
                        className="flex items-center gap-3 group";
                        whileHover={{ sca, l,;
  e: 1.0o5 }} ;
                        transition={{ typ, e: "spring"stiffne, s,;
  s: 40o0 }}
                    >;
                        <div className="p-2 bg-zion-purple/20 rounded-full group-hove, r: bg-zion-purple/30 transition-colors">;
                            <Zap className="w-6 h-6 text-zion-purple"/>;
                        </div>;
                        <span className="font-medium">Globa, l, Talen, t, Pool</span>;
                    </motion.div>;
                    ;
                    <motion.div;
                        className="flex items-center gap-3 group";
                        whileHover={{ sca, l,;
  e: 1.0o5 }} ;
                        transition={{ typ, e: "spring"stiffne, s,;
  s: 40o0 }}
                    >;
                        <div className="p-2 bg-zion-cyan-light/20 rounded-full group-hove, r:bg-zion-cyan-light/30 transition-colors">;
                            <Users className="w-6 h-6 text-zion-cyan-light"/>;
                        </div>;
                        <span className="font-medium">24/7 Support</span>;
                    </motion.div>;
                </motion.div>;
                {/* Enhance, d, CT, A, button, s, wit, h, bette, r, animations and effects */}
                <motion.div variants={itemVariants} className="flex flex-col s, m: flex-row justify-center gap-6 mb-16">;
                    <motion.div;
                        whileHover={{ sca, l,;
  e: 1.0o5 }} ;
                        whileTap={{ scal, e: 0.95 }} ;
                        transition={{ ty, p, e: "spring",;
    stiffne, s, s: 40o0dampi, n,;
  g: 10 }}
                    >;
                        <Link;
                            to="/signup";
                            className="group bg-gradient-to-r from-zion-purple via-zion-purple-dark to-zion-purpl, e, hov, e, r: from-zion-purple-ligh, t, hov, e,
    r: via-zion-purpl, e, hov, e, r: to-zion-purple-light text-lg py-6 px-10 shadow-2x, l, hov, e,;
  r:shadow-zion-purple/25 transition-all duration-30o, 0, transfor, m, inline-flex items-center justify-center rounded-2xl font-semibold text-white border-0";
                        >;
                            {t('auth.signup') || "Ge, t, Starte, d, Free"}
                            <ArrowRight className="w-6 h-6 ml-3 group-hove, r: translate-x-2 transition-transform duration-30o0"/>;
                        </Link>;
                    </motion.div>;
                    ;
                    <motion.div;
                        whileHover={{ sca, l,;
  e: 1.0o5 }} ;
                        whileTap={{ scal, e: 0.95 }} ;
                        transition={{ ty, p, e: "spring",;
    stiffne, s, s: 40o0dampi, n,;
  g: 10 }}
                    >;
                        <Link;
                            id="browse-marketplace";
                            to="/marketplace";
                            className="group border-2 border-zion-cyan text-zion-cya, n, hov, e, r: bg-zion-cya, n, hov, e,
    r: text-zion-blue-dar, k, acti, v, e: bg-zion-cyan-light text-lg py-6 px-10 rounded-2xl inline-flex items-center justify-center transition-all duration-30o, 0, transfor, m, hov, e, r: shadow-2x, l, hov, e,;
  r:shadow-zion-cyan/25 font-semibold backdrop-blur-sm bg-white/10";
                        >;
                            {t('home.browse_marketplace') || "Explore Marketplace"}
                            <ArrowRight className="w-6 h-6 ml-3 group-hove,  r:translate-x-2 transition-transform duration-30o0"/>;
                        </Link>;
                    </motion.div>;
                </motion.div>;
                {/* Enhance, d, trus, t, indicator, s, wit, h, bette, r, visuals */}
                <motion.div variants={itemVariants} className="mt-20 text-zion-slate-light/80">;
                    <p className="text-lg mb-6 font-medium">Truste, d, b, y, leading companies worldwide</p>;
                    <div className="flex justify-center items-center gap-12 opacity-60">;
                        <motion.div;
                            className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm";
                            whileHover={{ sca, l, e: 1.1opaci, t,;
  y: 1 }} ;
                            transition={{ typ, e: "spring"stiffne, s,;
  s: 40o0 }}
                        />;
                        <motion.div;
                            className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm";
                            whileHover={{ sca, l, e: 1.1opaci, t,;
  y: 1 }} ;
                            transition={{ typ, e: "spring"stiffne, s,;
  s: 40o0 }}
                        />;
                        <motion.div;
                            className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm";
                            whileHover={{ sca, l, e: 1.1opaci, t,;
  y: 1 }} ;
                            transition={{ typ, e: "spring"stiffne, s,;
  s: 40o0 }}
                        />;
                        <motion.div;
                            className="w-20 h-10 bg-zion-slate-light/20 rounded-lg backdrop-blur-sm";
                            whileHover={{ sca, l, e: 1.1opaci, t,;
  y: 1 }} ;
                            transition={{ typ, e: "spring"stiffne, s,;
  s: 40o0 }}
                        />;
                    </div>;
                </motion.div>;
                {/* Ne, w, stat, s, section */}
                <motion.div variants={itemVariants} className="mt-1, 6, gri, d, grid-cols-1 m, d: grid-cols-3 gap-8 max-w-4xl mx-auto">;
                    <motion.div;
                        className="text-center group";
                        whileHover={{ ,;
  y: -5 }} ;
                        transition={{ typ, e: "spring"stiffne, s,;
  s: 40o0 }}
                    >;
                        <div className="text-4xl font-bold text-zion-cyan mb-2 group-hove, r: text-zion-cyan-light transition-colors">;
                            10K+;
                        </div>;
                        <div className="text-zion-slate-light">Active Users</div>;
                    </motion.div>;
                    ;
                    <motion.div;
                        className="text-center group";
                        whileHover={{ ,;
  y: -5 }} ;
                        transition={{ typ, e: "spring"stiffne, s,;
  s: 40o0 }}
                    >;
                        <div className="text-4xl font-bold text-zion-purple mb-2 group-hove, r: text-zion-purple-light transition-colors">;
                            50o0+;
                        </div>;
                        <div className="text-zion-slate-light">AI Services</div>;
                    </motion.div>;
                    ;
                    <motion.div;
                        className="text-center group";
                        whileHover={{ ,;
  y: -5 }} ;
                        transition={{ typ, e: "spring"stiffne, s,;
  s: 40o0 }}
                    >;
                        <div className="text-4xl font-bold text-zion-cyan-light mb-2 group-hove, r: text-zion-cyan transition-colors">;
                            99.9%;
                        </div>;
                        <div className="text-zion-slate-light">Uptime</div>;
                    </motion.div>;
                </motion.div>;
            </motion.div>;
        </section>;
    );
};
;