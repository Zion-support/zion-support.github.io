impor, t, Reac, t, { useStat, e, useEffec, t, useCallbackuseMemo } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRigh, t,;
  Pla, y,;
  Sta, r,;
  CheckCircl, e,;
  ChevronLef, t,;
  ChevronRigh, t,;
  Za, p,;
  Shiel, d,;
  Glob, e,;
  Brai, n,;
  Rocke, t,;
  Targe, t,;
  TrendingU, p,;
  Paus, e,;
  Cp, u,;
  Clou, d,;
  Loc, k,;
  User, s,;
  BarChart3Lightbulb;
} from "lucide-react";
interface HeroSlide {
  i, d: strin, g,;
    titl, e: strin, g,subtitl, e: strin, g,;
    descriptio, n: strin, g,imag, e: strin, g,;
    ct, a: strin, g,pat, h: strin, g,;
    feature, s: string[],gradien, t: strin, g,;
    ico, n: React.ComponentType<any>,stat, s: { labe, l: strin, g,;
    valu, e: strin, gicon: React.ComponentType<any> }[];
}
;
const heroSlide, s: HeroSlide[] = [;
  {
    i, d: 'a, i-solution, s',;
    tit, l, e: "A, I-Powere, d Digita, l Transformatio, n",subtit, l, e: "Revolutionizin, g busines, s wit, h cuttin, g-edg, e artificia, l intelligenc, e",;
    descripti, o, n: "Transfor, m you, r organizatio, n wit, h Zio, n's advance, d A, I solution, s. Fro, m predictiv, e analytic, s t, o automate, d decisio, n-maki, n, g, w, e delive, r intelligen, t system, s tha, t driv, e unprecedente, d busines, s growt, h an, d efficienc, y.",;
    ima, g, e: "/image, s/her, o-a, i-solution, s.jp, g",;
    c, t, a: "Explor, e A, I Solution, s",pa, t, h: "/service, s/a, i-busines, s-intelligenc, e",;
    featur, e, s: ["Machin, e Learnin, g", "Predictiv, e Analytic, s", "Proces, s Automatio, n", "Rea, l-tim, e, Insights"],;
    gradien, t: "from-cyan-50o0 via-blue-50o0 to-purple-60o0",;
    ico, n: Brai, n,stat, s: [;
      { lab, e, l: "A, I Accurac, y Rat, e",;
    val, u, e: "9, 7.3%", ic, on: Target };
      { lab, e, l: "RO, I Increas, e",;
    val, u, e: "45, 0%", ic, on: TrendingUp },;
      { lab, e, l: "Marke, t Growt, h",;
    val, u, e: "28, 0%", icon: Rocket }
  ,  ];
  };
  {
    i, d: 'enterprise-it',;
    titl, e: "Enterprise, IT, Excellence",subtitl, e: "Comprehensive, technology, solutions for, modern, enterprises",;
    descriptio, n: "Zion, Tech, Group delivers enterprise-grade, IT, solutions that, scale, with your business. From, cloud, infrastructure t, o, cybersecurit, y, we, ensure, your digital, foundation, i, s, robus, t, secur, e, and future-ready.",;
    imag, e: "/images/hero-enterprise-it.jpg",;
    ct, a: "View, Enterprise, Solutions",pat, h: "/services",;
    feature, s: ["Clou, d Infrastructur, e", "Cybersecurit, y", "DevOp, s Automatio, n", "2, 4/7, Support"],;
    gradien, t: "from-blue-50o0 via-purple-50o0 to-pink-50o0",;
    ico, n: Shiel, d,stat, s: [;
      { lab, e, l: "Syste, m Uptim, e",;
    val, u, e: "9, 9.9, 9%", ic, on: Target };
      { lab, e, l: "Cos, t Saving, s",;
    val, u, e: "6, 0%", ic, on: TrendingUp },;
      { lab, e, l: "Respons, e Tim, e",;
    val, u, e: "<2mi, n", icon: Rocket }
  ,  ];
  };
  {
    i, d: 'green-tech',;
    titl, e: "Sustainable, Technology, Solutions",subtitl, e: "Driving, innovation, while protecting, our, planet",;
    descriptio, n: "Join, the, green technology, revolution, with Zion's, sustainable, IT solutions. We, help, organizations reduce, their, carbon footprint, while, maximizing performance, and, driving business value.",imag, e: "/images/hero-green-tech.jpg",;
    ct, a: "Discover, Green, Tech",pat, h: "/green-it",;
    feature, s: ["Energ, y Efficienc, y", "Carbo, n Reductio, n", "Sustainabl, e Practice, s", "Cos, t, Savings"],;
    gradien, t: "from-green-50o0 via-emerald-50o0 to-teal-50o0",;
    ico, n: Glob, e,stat, s: [;
      { lab, e, l: "Energ, y Saving, s",;
    val, u, e: "7, 5%", ic, on: Target };
      { lab, e, l: "Carbo, n Reductio, n",;
    val, u, e: "8, 5%", ic, on: TrendingUp },;
      { lab, e, l: "Cos, t Reductio, n",;
    val, u, e: "4, 0%", icon: Rocket }
  ,  ];
  };
  {
    i, d: 'digital-innovation',;
    titl, e: "Digital, Innovation, Hub",subtitl, e: "Accelerating, digital, transformation for forward-thinking organizations",;
    descriptio, n: "Zion, Tech, Group is, your, strategic partner, in, digital innovation. We, combine, cutting-edge, technologies, with deep, industry, expertise to, create, transformative solutions, that, drive competitive advantage.",imag, e: "/images/hero-digital-innovation.jpg",;
    ct, a: "Start, Your, Journey",pat, h: "/solutions",;
    feature, s: ["Digita, l Strateg, y", "Technolog, y Consultin, g", "Innovatio, n Lab, s", "Digita, l, Products"],;
    gradien, t: "from-purple-50o0 via-pink-50o0 to-red-50o0",;
    ico, n: Lightbul, b,stat, s: [;
      { lab, e, l: "Innovatio, n Rat, e",;
    val, u, e: "30, 0%", ic, on: Target };
      { lab, e, l: "Digita, l Maturit, y",;
    val, u, e: "9, 5%", ic, on: TrendingUp },;
      { lab, e, l: "Tim, e t, o Marke, t",;
    val, u, e: "-7, 0%", icon: Rocket }
  ,  ];
  };
];
const slideVariants = {
  ente, r: (directio,;
  n: number) => ({, ;
    x: direction > 0 ? 10o00 : -10o0, 0opacity: 0;
  }),;
  cente, r: {,;
    zInde, x: 1,x: 0opacit,;
  y: 1;
  },;
  exi, t: (directio,  n: number) => ({, ;
    zInde, x: 0,x: direction < 0 ? 10o00 : -10o0, 0opacity: 0;
  });
};
const swipeConfidenceThreshold = 10o000;
const swipePower = (offse,  t: numbe, r,;
    velocity: number) => {;
  return Math.abs(offset) * velocity;
};
export, default, function HeroSection() {
  const [currentSli,  d, e, setCurrentSli,, de] = useState(0);
  const [isAutoPlayi, n, g, setIsAutoPlayi,, ng] = useState(true);
  const [directi,  o, n, setDirecti,, on] = useState(0);
  const [isLoadi, n, g, setIsLoadi,, ng] = useState(true);
;
  // Memoize, slides, to prevent, unnecessary, re-renders;
  const memoizedSlides = useMemo(() => heroSlide,  s, [])// Optimized, slide, navigation with useCallback;
  const nextSlide = useCallback(() => {;
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % memoizedSlides.length)setIsAutoPlaying(false);
  }, [memoizedSlide, s.leng,, th]),;
  const prevSlide = useCallback(() => {;
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + memoizedSlides.length) % memoizedSlides.length);
    setIsAutoPlaying(false);
  },  [memoizedSlide, s.leng,, th]);
  const goToSlide = useCallback((index: number) => {;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  },  [currentSli,, de]),;
  // Auto-play, functionality, with pause, on, hover;
  useEffect(() => {
    if (!isAutoPlaying) retur,  nconst interval = setInterval(() => {;
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % memoizedSlides.length) }, 70o00),;
    return () => clearInterval(interval);
  },  [isAutoPlayi, n, g, memoizedSlide, s.leng,, th]),;
  // Handle, keyboard, navigation;
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if() {
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      };
    },;
    window.addEventListener('keydown'handleKeyDown);
    return () => window.removeEventListener('keydown'handleKeyDown);
  }, [prevSli, d, e, nextSli, d, e, isAutoPlayi,, ng]),;
  // Handle, image, loading;
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = memoizedSlides.map(slide => {
        return, new, Promise((resolve) => {;
          const img = new Image();
          img.onload = resolv,  e,;
          img.onerror = resolv, e,;
          img.src = slide.image }),;
      }),;
      await Promise.all(imagePromises);
      setIsLoading(false);
    },;
    preloadImages();
  }, [memoizedSlid,, es]),;
  const currentSlideData = memoizedSlides[currentSli,, de];
;
  if() {
    return (;
      <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0, flex, items-center justify-center">;
        <div className="text-center">;
          <div className="w-16 h-16 border-4 border-cyan-40o0 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>;
          <p className="text-cyan-40o0 text-lg font-medium">Loading, Zion, Tech Group...</p>;
        </div>;
      </div>;
    );
  };
;
  return(<section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">;
        <div className="absolute inset-0 bg-[ur,  l('da, t, a: imag, e/sv, g+x, m, l,%3Csv, g%20widt, h%3, D%226, 0%2, 2%20heigh, t%3, D%226, 0%2, 2%20viewBo, x%3, D%22, 0%20, 0%20o6, 0%20o6, 0%2, 2%20xmln, s%3, D%22htt, p%3, A//ww, w.w, 3.or, g/20o0, 0/sv, g%2, 2%3, E%3C, g%20fil, l%3, D%22non, e%2, 2%20fil, l-rul, e%3, D%22evenod, d%2, 2%3, E%3C, g%20fil, l%3, D%2, 2%23fffff, f%2, 2%20fil, l-opacit, y%3, D%22, 0.1%2, 2%3, E%3Ccircl, e%20c, x%3, D%223, 0%2, 2%20c, y%3, D%223, 0%2, 2%20, r%3, D%22, 2%2, 2/%3, E%3, C/g%3, E%3, C/g%3,, E%3C/svg%3E')]"></div>;
      </div>;
      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">;
        <motion.button;
          whileHover={{ scale: 1.1 }};
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm, border, border-white/20 text-white hover: bg-white/20 transition-all duration-30o0";
        >;
          <ChevronLeft className="w-6 h-6" />;
        </motion.button>;
      </div>;
      <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">;
        <motion.button;
          whileHover={{ scal,;
  e: 1.1 }};
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm, border, border-white/20 text-white hover:bg-white/20 transition-all duration-30o0";
        >;
          <ChevronRight className="w-6 h-6" />;
        </motion.button>;
      </div>;
      {/* Auto-play Toggle */}
      <div className="absolute top-4 right-4 z-20">;
        <motion.button;
          whileHover={{ scale: 1.1 }};
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm, border, border-white/20 text-white hove,  r:bg-white/20 transition-all duration-30o0";
        >;
          {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </motion.button>;
      </div>;
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20, flex, space-x-3">;
        {memoizedSlides.map((_index) => (<motion.button;
            key={index};
            whileHover={{ scale: 1.2 }};
            whileTap={{ scale: 0.8 }}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-30o0 ${;
              index === currentSlide;
                ? 'bg-cyan-40o0 scale-125';
                : 'bg-white/30 hover: bg-white/50';
            }`}
          />;
        ))}
      </div>;
      {/* Hero Content */}
      <div className="relative z-10, flex, items-center justify-center min-h-screen px-4 s, m: px-6 l,;
  g:px-8">;
        <AnimatePresence mode="wait" custom={direction}>;
          <motion.div;
            key={currentSlide}
            custom={direction};
            variants={slideVariants}
            initial="enter";
            animate="center";
            exit="exit";
            transition={{
              x: { typ, e: "spring",;
    stiffnes, s: 30, 0damping: 30 },;
              opacit, y: { duratio,;
  n: 0.2 }
            }}
            drag="x";
            dragConstraints={{ lef, t: 0righ,;
  t: 0 }}
            dragElastic={1}
            onDragEnd={(e{ offsetvelocity }) => {;
              const swipe = swipePower(offset.xvelocity.x);
;
              if (swipe < -swipeConfidenceThreshold) {
                nextSlide();
              } else if() {
                prevSlide();
              };
            }}
            className="w-full max-w-6xl mx-auto text-center";
          >;
            <div className="grid lg: grid-cols-2 gap-12 items-center">;
              {/* Content */};
              <motion.div;
                initial={{ opacity: 0,;
  y: 50 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: 0.2 }}
                className="space-y-8";
              >;
                <div className="space-y-4">;
                  <motion.div;
                    initial={{ opacit, y: 0scal,;
  e: 0.8 }}
                    animate={{ opacit, y: 1scal,;
  e: 1 }}
                    transition={{ duration: 0.6dela,;
  y: 0.3 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20, border, border-cyan-50o0/30 text-cyan-30o0 text-sm font-medium";
                  >;
                    <currentSlideData.icon className="w-4 h-4 mr-2" />;
                    {currentSlideData.subtitle}
                  </motion.div>;
;
                  <motion.h1;
                    initial={{ opacity: 0,;
  y: 30 }}
                    animate={{ opacity: 1,;
  y: 0 }}
                    transition={{ duratio, n: 0.8dela,;
  y: 0.4 }}
                    className="text-4xl s, m: text-5xl l,;
  g:text-6xl font-bold text-white leading-tight";
                  >;
                    {currentSlideData.title}
                  </motion.h1>;
;
                  <motion.p;
                    initial={{ opacity: 0,;
  y: 30 }}
                    animate={{ opacity: 1,;
  y: 0 }}
                    transition={{ duration: 0.8dela,;
  y: 0.6 }}
                    className="text-xl text-gray-30o0 leading-relaxed max-w-2xl mx-auto";
                  >;
                    {currentSlideData.description}
                  </motion.p>;
                </div>;
                {/* Features */};
                <motion.div;
                  initial={{ opacity: 0,;
  y: 30 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.8dela,;
  y: 0.8 }}
                  className="grid grid-cols-2 gap-4";
                >;
                  {currentSlideData.features.map((featureindex) => (<div key={index} className="flex items-center space-x-3">;
                      <CheckCircle className="w-5 h-5 text-cyan-40o0 flex-shrink-0" />;
                      <span className="text-gray-30o0 text-sm font-medium">{feature}</span>;
                    </div>;
                  ))}
                </motion.div>;
                {/* CTA Button */};
                <motion.div;
                  initial={{ opacity: 0,;
  y: 30 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.8dela,;
  y: 1 }}
                >;
                  <Link;
                    to={currentSlideData.path}
                    className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white font-semibold text-lg hove, r: from-cyan-60o0 hove, r: to-blue-60o0, transform, hove, r: scale-10o5 transition-all duration-30o0 shadow-lg hove,;
  r:shadow-xl";
                  >;
                    {currentSlideData.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />;
                  </Link>;
                </motion.div>;
              </motion.div>;
              {/* Visual Content */};
              <motion.div;
                initial={{ opacity: 0,;
  x: 50 }}
                animate={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.8dela,;
  y: 0.4 }}
                className="relative";
              >;
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${currentSlideData.gradient} shadow-2xl`}>;
                  <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>;
                  <div className="relative z-10">;
                    <div className="w-64 h-64 mx-auto bg-white/10 rounded-full, flex, items-center justify-center">;
                      <currentSlideData.icon className="w-24 h-24 text-white" />;
                    </div>;
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8">;
                      {currentSlideData.stats.map((statindex) => (<motion.div;
                          key={index}
                          initial={{ opacit,  y: 0scal,;
  e: 0.8 }}
                          animate={{ opacit, y: 1scal,;
  e: 1 }}
                          transition={{ duration: 0.6dela,;
  y: 0.8 + index * 0.1 }}
                          className="text-center";
                        >;
                          <div className="text-2xl font-bold text-white">{stat.value}</div>;
                          <div className="text-sm text-white/80">{stat.label}</div>;
                        </motion.div>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            </div>;
          </motion.div>;
        </AnimatePresence>;
      </div>;
    </section>;
  );
}
;
export { HeroSection };