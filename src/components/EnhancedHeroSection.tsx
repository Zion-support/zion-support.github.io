import React from "react";
impo, r, t, Rea, c, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRig, h, t,;
  Pl, a, y,;
  St, a, r,;
  CheckCirc, l, e,;
  ChevronLe, f, t,;
  ChevronRig, h, t,;
  Z, a, p,;
  Shie, l, d,;
  Glo, b, e,;
  Bra, i, n,;
  Rock, e, t,;
  TargetTrendingUp;
} from "lucide-react";
interface HeroSlide {
  tit, l, e: stri, n, g,;
    subtit, l, e: stri, n, g,descripti, o, n: stri, n, g,;
    ima, g, e: stri, n, g,c, t, a: stri, n, g,;
    pa, t, h: stri, n, g,featur, e, s: string[],;
    gradie, n, t: stri, n, g,ic, o, n: React.ComponentType<any>,;
    sta, t, s: { lab, e,
    l: stri, n, g,;
    val, u, e: stri, n,
    gico, n: React.ComponentType<any> }[];
}
;
expor, t, defaul, t, function EnhancedHeroSection() {
  const [currentS,  l, i,  d, e, setCurrentS, l, i,, d, e] = useState(0);
  const [isAutoPla, y, i, n, g, setIsAutoPla, y, i,, n, g] = useState(true);
  cons,  t, heroSlid, e,  s: HeroSlide[] = [;
    {
      t, i, t, l, e: "A, I-Powe, r, e, d, Busin, e, s, s, Soluti, o, n, s",;
    subt, i, t, l, e: "Transf, o, r, m, y, o, u, r, busin, e, s, s, w, i, t, h, cutt, i, n, g-e, d, g, e, artific, i, a, l, intellige, n, c, e",descrip, t, i, o, n: "Lever, a, g, e, t, h, e, po, w, e, r, o, f, A, I, t, o, auto, m, a, t, e, proce, s, s, e, s, g, a, i, n, insi, g, h, t, s, a, n, d, dr, i, v, e, innovat, i, o, n, acr, o, s, s, y, o, u, r, organizat, i, o, n. O, u, r, soluti, o, n, s, a, r, e, desig, n, e, d, t, o, sc, a, l, e, w, i, t, h, y, o, u, r, busin, e, s, s, ne, e, d, s.",;
      i, m, a, g, e: "/ima, g, e, s/h, e, r, o-a, i-soluti, o, n, s.j, p, g",;
    c, t, a: "Expl, o, r, e, A, I, Soluti, o, n, s",p, a, t, h: "/servi, c, e, s/a, i-busin, e, s, s-intellige, n, c, e",;
    feat, u, r, e, s: ["Mach, i, n, e, Learn, i, n, g", "Predict, i, v, e, Analyt, i, c, s", "Proc, e, s, s, Automat, i, o, n", "R, e, a, l-t, i, m, e, Insight, s"],;
      gradie, n, t: "from-zion-cyan via-zion-purple to-zion-blue",;
    ic, o, n: Bra, i, n,sta, t, s: [;
        { l, a, b, e, l: "Accur, a, c, y, R, a, t, e",;
    v, a, l, u, e: "9, 5%+", i, c, o, n: Targe, t };
        { l, a, b, e, l: "R, O, I, Incre, a, s, e",;
    v, a, l, u, e: "4, 5, 0%", i, c, o, n: TrendingU, p },;
        { l, a, b, e, l: "Mar, k, e, t, Gro, w, t, h",;
    v, a, l, u, e: "2, 8, 0%", ic, o, n: Rocke, t }
    ,  ];
    };
    {
      tit, l, e: "Comprehensiv, e, I, T, Services",;
    subtit, l, e: "End-to-en, d, technolog, y, solution, s, fo, r, moder, n, businesses",descripti, o, n: "Fro, m, infrastructur, e, management t, o, digit, a, l, transformati, o, n, w, e, provid, e, th, e, expertis, e, yo, u, nee, d, t, o, succee, d, in today's, competitiv, e, landscape.",;
      ima, g, e: "/images/hero-it-services.jpg",;
    c, t, a: "Vie, w, Ou, r, Services",pa, t, h: "/services",;
    featur, e, s: ["Cl, o, u, d, Infrastruct, u, r, e", "Cybersecur, i, t, y", "Dev, O, p, s, Automat, i, o, n", "2, 4/7, Suppor, t"],;
      gradie, n, t: "from-zion-blue via-zion-cyan to-zion-purple",;
    ic, o, n: Shie, l, d,sta, t, s: [;
        { l, a, b, e, l: "Upt, i, m, e",;
    v, a, l, u, e: "9, 9.9, 9%", i, c, o, n: Targe, t };
        { l, a, b, e, l: "C, o, s, t, Savi, n, g, s",;
    v, a, l, u, e: "7, 0, 0%", i, c, o, n: TrendingU, p },;
        { l, a, b, e, l: "Respo, n, s, e, T, i, m, e",;
    v, a, l, u, e: "<5, m, i, n", ic, o, n: Rocke, t }
    ,  ];
    };
    {
      tit, l, e: "Gree, n, I, T, Solutions",;
    subtit, l, e: "Sustainabl, e, technolog, y, fo, r, a, bette, r, future",descripti, o, n: "Implement eco-friendl, y, I, T, solution, s, tha, t, reduc, e, you, r, carbo, n, footprin, t, whil, e, maintainin, g, performanc, e, an, d, drivin, g, busines, s, value.",;
    ima, g, e: "/images/hero-green-it.jpg",c, t, a: "Learn More",;
    pa, t, h: "/green-it",featur, e, s: ["Ene, r, g, y, Efficie, n, c, y", "Car, b, o, n, Reduct, i, o, n", "Sustaina, b, l, e, Practi, c, e, s", "C, o, s, t, Saving, s"],;
      gradie, n, t: "from-zion-cyan via-zion-blue to-zion-purple",;
    ic, o, n: Glo, b, e,sta, t, s: [;
        { l, a, b, e, l: "Ene, r, g, y, Savi, n, g, s",;
    v, a, l, u, e: "6, 0%", i, c, o, n: Targe, t };
        { l, a, b, e, l: "Car, b, o, n, Reduct, i, o, n",;
    v, a, l, u, e: "7, 5%", i, c, o, n: TrendingU, p },;
        { l, a, b, e, l: "C, o, s, t, Reduct, i, o, n",;
    v, a, l, u, e: "4, 0%"ic, o, n: Rocke, t }
    ,  ];
    };
  ];
  useEffect(() => {
    if (!isAutoPlaying) returnconst interval = setInterval(() => {;
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    },   60o00),;
    return () => clearInterval(interval);
  },   [isAutoPla, y, i, n, g, heroSli, d, e, s.le, n, g,, t, h]),;
  const nextSlide = () => {;
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  }, ;
  const prevSlide = () => {;
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  }, ;
  const goToSlide = (ind, e, x: number) => {;
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, ;
  const currentSlideData = heroSlides[currentS, l, i,, d, e];
;
  return(<section className="relative min-h-scree, n, fle, x, items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Enhance, d, animate, d, background elements */}
      <div className="absolute inset-0">;
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-cyan/10"></div>;
        <motion.div;
          className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/20 rounded-full blur-3xl";
          animate={{
            sca, l, e: [1,, 1.2, 1],;
            opaci, t, y: [0.3, 0.6, 0.3];
          }}
          transition={{ duratio, n: 4repe, a,;
  t: Infinity }}
        ></motion.div>;
        <motion.div;
          className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/20 rounded-full blur-3xl";
          animate={{
            sca, l, e: [1.2,, 1, 1.2],;
            opaci, t, y: [0.6, 0.3, 0.6];
          }}
          transition={{ durati, o, n: 4,;
    repe, a, t: Infinitydel, a,;
  y: 1 }}
        ></motion.div>;
        <motion.div;
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80, o, 0,, p, x] h-[80, o, 0,, p, x] bg-zion-blue/10 rounded-full blur-3xl";
          animate={{
            rota, t, e: [0, 3,, 6, 0],;
            sca, l, e: [1, 1.1, 1];
          }}
          transition={{ duratio, n: 20repe, a,;
  t: Infinity }}
        ></motion.div>;
        {/* Floating particles */};
        {[...Arra, y(6)].map((_i) => (<motion.div;
            key={i}
            className="absolute w-2 h-2 bg-zion-cyan/40 rounded-full";
            style={{
              lef,  t: `${20 + i * 1, 5}%`,;
              t, o, p: `${30 + i * 1, 0}%`;
            }}
            animate={{
              y: [0, -2,, 0, o, 0],;
              opaci, t, y: [0.41, 0.4];
            }}
            transition={{
              durati, o, n: 3 + i * 0.5,;
    repe, a, t: Infinitydel, a,;
  y: i * 0.3;
            }}
          />;
        ))}
      </div>;
      {/* Hero content */}
      <div className="relative z-1, 0, containe, r, mx-auto px-4, s, m: px-6, l,;
    g:px-8">;
        <div className="gri, d, l,;
  g:grid-cols-2 gap-12 items-center">;
          {/* Left content */};
          <motion.div;
            initial={{ opacit, y: 0,;
  x: -50 }}
            animate={{ opacit, y: 1,;
  x: 0 }}
            transition={{ duratio, n: 0.8 }}
            className="text-center l, g:text-left";
          >;
            <AnimatePresence mode="wait">;
              <motion.div;
                key={currentSlide}
                initial={{ opacit, y: 0,;
  y: 20 }}
                animate={{ opacit, y: 1,;
  y: 0 }}
                exit={{ opacit, y: 0,;
  y: -20 }}
                transition={{ duratio, n: 0.5 }}
              >;
                {/* Ico, n, an, d, category */};
                <motion.div;
                  className="flex items-center justify-cente, r, l, g: justify-start mb-6";
                  whileHover={{ sca, l,;
  e: 1.0o5 }}
                >;
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${currentSlideData.gradient} bg-opacity-2, 0, borde, r, border-zion-cyan/3, 0`}>;
                    {React.createElement(currentSlideData.icon{ classNam,  e: "w-8 h-8 text-white" })}
                  </div>;
                  <span className="ml-3 text-zion-cyan font-medium bg-zion-cyan/10 px-3 py-1 rounded-full">Featured Service</span>;
                </motion.div>;
                {/* Title */}
                <h1 className="text-4x, l, s, m: text-5x, l, l,;
  g:text-6xl font-bold text-white mb-6 leading-tight">;
                  {currentSlideData.title}
                </h1>;
                {/* Subtitle */}
                <p className="text-xl s, m:text-2xl text-zion-cyan font-semibold mb-4">;
                  {currentSlideData.subtitle}
                </p>;
                {/* Description */}
                <p className="text-lg text-gray-30o0 mb-8 leading-relaxed max-w-2xl mx-auto l, g:mx-0">;
                  {currentSlideData.description}
                </p>;
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto l, g: mx-0">;
                  {currentSlideData.features.map((featureindex) => (<motion.div;
                      key={feature}
                      initial={{ opacit,  y: 0,;
  x: -20 }}
                      animate={{ opacit, y: 1,;
  x: 0 }}
                      transition={{ dela, y: index * 0.1 }}
                      className="flex items-center text-sm text-gray-30o0 bg-white/5 px-3 py-2 rounded-l, g, borde, r, border-white/10";
                    >;
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />;
                      {feature}
                    </motion.div>;
                  ))}
                </div>;
                {/* CTA Button */};
                <motion.div;
                  whileHover={{ scal, e: 1.0o5 }};
                  whileTap={{ scal, e: 0.95 }}
                  className="flex flex-co, l, s, m: flex-row gap-4 justify-cente, r, l,;
  g:justify-start";
                >;
                  <Link;
                    to={currentSlideData.path}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2x, l, hov, e, r: shadow-2x, l, hov, e,
    r: shadow-zion-cyan/25 transition-all duration-30o, 0, transfor, m, hov, e,;
  r:-translate-y-1, borde, r, border-zion-cyan/30";
                  >;
                    {currentSlideData.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />;
                  </Link>;
                  <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hove, r:bg-zion-cyan/10 transition-all duration-30o0 backdrop-blur-sm">;
                    <Play className="mr-2 w-5 h-5" />;
                    Watch Demo;
                  </button>;
                </motion.div>;
              </motion.div>;
            </AnimatePresence>;
          </motion.div>;
          {/* Right content - Imag, e, an, d, stats */}
          <motion.div;
            initial={{ opacit, y: 0,;
  x: 50 }}
            animate={{ opacit, y: 1,;
  x: 0 }}
            transition={{ duratio, n: 0.8del, a,;
  y: 0.2 }}
            className="relative";
          >;
            {/* Main image */}
            <div className="relative">;
              <motion.div;
                className={`w-full h-9, 6, l, g: h-[50o0, p, x] rounded-3xl bg-gradient-to-br ${currentSlideData.gradient} bg-opacity-2, 0, borde, r, border-zion-cyan/20 overflow-hid, d, e, n`};
                whileHover={{ scal, e: 1.0o2 }}
                transition={{ duratio, n: 0.3 }}
              >;
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>;
                <div className="absolute inset-0, fle, x, items-center justify-center">;
                  <div className="text-center text-white">;
                    <motion.div;
                      className="w-24 h-24 bg-zion-cyan/20 rounded-ful, l, fle, x, items-center justify-center mx-auto mb-4, borde, r, border-zion-cyan/30";
                      animate={{ rota, t, e: [0o3, 6, 0] }}
                      transition={{ durati, o, n: 20repe, a,;
  t: Infinity }}
                    >;
                      {React.createElement(currentSlideData.icon{ classNam,  e: "w-12 h-12 text-zion-cyan" })}
                    </motion.div>;
                    <p className="text-lg font-medium">Visual Representation</p>;
                  </div>;
                </div>;
              </motion.div>;
            </div>;
            {/* Enhance, d, floatin, g, stats cards */}
            <div className="absolute -bottom-6 -left-6 space-y-4">;
              {currentSlideData.stats.map((statindex) => (<motion.div;
                  key={stat.label}
                  initial={{ opacit,  y: 0,;
  y: 20 }}
                  animate={{ opacit, y: 1,;
  y: 0 }}
                  transition={{ dela, y: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-l, g, borde, r, border-white/20 rounded-2xl p-4 shadow-2xl hove, r: bg-white/20 transition-all duration-30o0";
                >;
                  <div className="flex items-center space-x-3">;
                    <div className="p-2 bg-zion-cyan/20 rounded-xl">;
                      {React.createElement(stat.icon{ classNa, m,;
  e: "w-5 h-5 text-zion-cyan" })}
                    </div>;
                    <div>;
                      <p className="text-xl font-bold text-white">{stat.value}</p>;
                      <p className="text-xs text-gray-30o0">{stat.label}</p>;
                    </div>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
            {/* Rating card */};
            <motion.div;
              initial={{ opacit, y: 0,;
  y: 20 }}
              animate={{ opacit, y: 1,;
  y: 0 }}
              transition={{ dela, y: 0.8 }}
              className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-l, g, borde, r, border-white/20 rounded-2xl p-6 shadow-2xl";
            >;
              <div className="flex items-center space-x-4">;
                <div className="p-3 bg-zion-cyan/20 rounded-xl">;
                  <Star className="w-6 h-6 text-zion-cyan" />;
                </div>;
                <div>;
                  <p className="text-2xl font-bold text-white">4.9/5</p>;
                  <p className="text-sm text-gray-30o0">Client Rating</p>;
                </div>;
              </div>;
            </motion.div>;
          </motion.div>;
        </div>;
        {/* Enhance, d, slid, e, navigation */}
        <div className="flex items-center justify-center mt-16 space-x-4">;
          <motion.button;
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/1, 0, hov, e, r: bg-white/20 transition-colors duration-20o, 0, borde, r, border-white/20";
            whileHover={{ sca, l,;
  e: 1.1 }};
            whileTap={{ scal, e: 0.9 }}
          >;
            <ChevronLeft className="w-6 h-6 text-white" />;
          </motion.button>;
          <div className="flex space-x-2">;
            {heroSlides.map((_index) => (<motion.button;
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-30o0 ${
                  index === currentSlide;
                    ? 'bg-zion-cyan w-8';
                    : 'bg-white/30 hove,  r: bg-white/5, 0';
                }`};
                whileHover={{ scal, e: 1.2 }}
              />;
            ))}
          </div>;
;
          <motion.button;
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/1, 0, hov, e, r: bg-white/20 transition-colors duration-20o, 0, borde, r, border-white/20";
            whileHover={{ sca, l,;
  e: 1.1 }};
            whileTap={{ scal, e: 0.9 }}
          >;
            <ChevronRight className="w-6 h-6 text-white" />;
          </motion.button>;
        </div>;
      </div>;
      {/* Enhance, d, scrol, l, indicator */};
      <motion.div;
        initial={{ opacit, y: 0 }}
        animate={{ opacit, y: 1 }}
        transition={{ dela, y: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2";
      >;
        <motion.div;
          animate={{ y: [0o1, 0, 0] }}
          transition={{ durati, o, n: 2repe, a,;
  t: Infinity }}
          className="w-6 h-10 border-2 border-zion-cyan/50 rounded-ful, l, fle, x, justify-center cursor-pointer hove, r: border-zion-cyan transition-colors duration-30o0";
        >;
          <motion.div;
            animate={{ ,;
  y: [0o1, 2, 0] }}
            transition={{ duratio, n: 2repe, a,;
  t: Infinity }}
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2";
          />;
        </motion.div>;
        <p className="text-xs text-zion-cyan/70 text-center mt-2">Scrol, l, t, o, explore</p>;
      </motion.div>;
    </section>;
  );
}