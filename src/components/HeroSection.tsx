impor, t, Reac, t, { useStat, e, useEffec, t, useCallbac, k, useMemo } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRigh, t,
  Pla, y,
  Sta, r,
  CheckCircl, e,
  ChevronLef, t,
  ChevronRigh, t,
  Za, p,
  Shiel, d,
  Glob, e,
  Brai, n,
  Rocke, t,
  Targe, t,
  TrendingU, p,
  Paus, e,
  Cp, u,
  Clou, d,
  Loc, k,
  User, s,
  BarChart, 3,
  Lightbulb
} from "lucide-react";
interface HeroSlide {
  i, d: strin, g,
    titl, e: strin, g,subtitl, e: strin, g,
    descriptio, n: strin, g,imag, e: strin, g,
    ct, a: strin, g,pat, h: strin, g,
    feature, s: string[],gradien, t: strin, g,
    ico, n: React.ComponentType<any>,stat, s: { labe, l: strin, g,
    valu, e: strin, g, ico, n: React.ComponentType<any> }[];
}
;
const heroSlide, s: HeroSlide[] = [
  {
    i, d: 'a, i-solution, s',
    tit, l, e: "A, I-Powere, d Digita, l Transformatio, n",subtit, l, e: "Revolutionizin, g busines, s wit, h cuttin, g-edg, e artificia, l intelligenc, e",
    descripti, o, n: "Transfor, m you, r organizatio, n wit, h Zio, n's advance, d A, I solution, s. Fro, m predictiv, e analytic, s t, o automate, d decisio, n-maki, n, g, w, e delive, r intelligen, t system, s tha, t driv, e unprecedente, d busines, s growt, h an, d efficienc, y.",
    ima, g, e: "/image, s/her, o-a, i-solution, s.jp, g",
    c, t, a: "Explor, e A, I Solution, s",pa, t, h: "/service, s/a, i-busines, s-intelligenc, e",
    featur, e, s: ["Machin, e Learnin, g", "Predictiv, e Analytic, s", "Proces, s Automatio, n", "Rea, l-tim, e Insight, s"],
    gradien, t: "from-cyan-500 via-blue-500 to-purple-600",
    ico, n: Brai, n,stat, s: [
      { lab, e, l: "A, I Accurac, y Rat, e",
    val, u, e: "9, 7.3%", ic, o, n: Targe, t };
      { lab, e, l: "RO, I Increas, e",
    val, u, e: "45, 0%", ic, o, n: TrendingU, p },
      { lab, e, l: "Marke, t Growt, h",
    val, u, e: "28, 0%", ic, o, n: Rocke, t }
    ]
  };
  {
    i, d: 'enterprise-it',
    titl, e: "Enterprise IT Excellence",subtitl, e: "Comprehensive technology solutions for modern enterprises",
    descriptio, n: "Zion Tech Group delivers enterprise-grade IT solutions that scale with your business. From cloud infrastructure t, o, cybersecurit, y, we ensure your digital foundation i, s, robus, t, secur, e, and future-ready.",
    imag, e: "/images/hero-enterprise-it.jpg",
    ct, a: "View Enterprise Solutions",pat, h: "/services",
    feature, s: ["Clou, d Infrastructur, e", "Cybersecurit, y", "DevOp, s Automatio, n", "2, 4/7 Suppor, t"],
    gradien, t: "from-blue-500 via-purple-500 to-pink-500",
    ico, n: Shiel, d,stat, s: [
      { lab, e, l: "Syste, m Uptim, e",
    val, u, e: "9, 9.9, 9%", ic, o, n: Targe, t };
      { lab, e, l: "Cos, t Saving, s",
    val, u, e: "6, 0%", ic, o, n: TrendingU, p },
      { lab, e, l: "Respons, e Tim, e",
    val, u, e: "<2mi, n", ic, o, n: Rocke, t }
    ]
  };
  {
    i, d: 'green-tech',
    titl, e: "Sustainable Technology Solutions",subtitl, e: "Driving innovation while protecting our planet",
    descriptio, n: "Join the green technology revolution with Zion's sustainable IT solutions. We help organizations reduce their carbon footprint while maximizing performance and driving business value.",imag, e: "/images/hero-green-tech.jpg",
    ct, a: "Discover Green Tech",pat, h: "/green-it",
    feature, s: ["Energ, y Efficienc, y", "Carbo, n Reductio, n", "Sustainabl, e Practice, s", "Cos, t Saving, s"],
    gradien, t: "from-green-500 via-emerald-500 to-teal-500",
    ico, n: Glob, e,stat, s: [
      { lab, e, l: "Energ, y Saving, s",
    val, u, e: "7, 5%", ic, o, n: Targe, t };
      { lab, e, l: "Carbo, n Reductio, n",
    val, u, e: "8, 5%", ic, o, n: TrendingU, p },
      { lab, e, l: "Cos, t Reductio, n",
    val, u, e: "4, 0%", ic, o, n: Rocke, t }
    ]
  };
  {
    i, d: 'digital-innovation',
    titl, e: "Digital Innovation Hub",subtitl, e: "Accelerating digital transformation for forward-thinking organizations",
    descriptio, n: "Zion Tech Group is your strategic partner in digital innovation. We combine cutting-edge technologies with deep industry expertise to create transformative solutions that drive competitive advantage.",imag, e: "/images/hero-digital-innovation.jpg",
    ct, a: "Start Your Journey",pat, h: "/solutions",
    feature, s: ["Digita, l Strateg, y", "Technolog, y Consultin, g", "Innovatio, n Lab, s", "Digita, l Product, s"],
    gradien, t: "from-purple-500 via-pink-500 to-red-500",
    ico, n: Lightbul, b,stat, s: [
      { lab, e, l: "Innovatio, n Rat, e",
    val, u, e: "30, 0%", ic, o, n: Targe, t };
      { lab, e, l: "Digita, l Maturit, y",
    val, u, e: "9, 5%", ic, o, n: TrendingU, p },
      { lab, e, l: "Tim, e t, o Marke, t",
    val, u, e: "-7, 0%", ic, o, n: Rocke, t }
    ]
  }
];
const slideVariants = {
  ente, r: (directio,  n: number) => ({, 
    x: direction > 0 ? 1000 : -100, 0,opacit, y: 0
  }),
  cente, r: {,
    zInde, x: 1,x: 0,
    opacit, y: 1
  },
  exi, t: (directio,  n: number) => ({, 
    zInde, x: 0,x: direction < 0 ? 1000 : -100, 0,
    opacit, y: 0
  })
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offse,  t: numbe, r,
    velocit, y: number) => {
  return Math.abs(offset) * velocity
};
export default function HeroSection() {
  const [currentSli,  d, e, setCurrentSli, d, e] = useState(0);
  const [isAutoPlayi, n, g, setIsAutoPlayi, n, g] = useState(true);
  const [directi,  o, n, setDirecti, o, n] = useState(0);
  const [isLoadi, n, g, setIsLoadi, n, g] = useState(true);

  // Memoize slides to prevent unnecessary re-renders
  const memoizedSlides = useMemo(() => heroSlide,  s, []),

  // Optimized slide navigation with useCallback
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % memoizedSlides.length), 
    setIsAutoPlaying(false);
  }, [memoizedSlide, s.leng, t, h]),

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + memoizedSlides.length) % memoizedSlides.length);
    setIsAutoPlaying(false);
  },  [memoizedSlide, s.leng, t, h]);
  const goToSlide = useCallback((inde,  x: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false)
  },  [currentSli, d, e]),

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) retur,  n,

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % memoizedSlides.length), 
    }, 7000),

    return () => clearInterval(interval);
  },  [isAutoPlayi, n, g, memoizedSlide, s.leng, t, h]),

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying)
      }
    }, 

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown',  handleKeyDown);
  }, [prevSli, d, e, nextSli, d, e, isAutoPlayi, n, g]),

  // Handle image loading
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = memoizedSlides.map(slide => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolv,  e,
          img.onerror = resolv, e,
          img.src = slide.imag, e,
        }),
      }),

      await Promise.all(imagePromises);
      setIsLoading(false);
    }, 

    preloadImages();
  }, [memoizedSlid, e, s]),

  const currentSlideData = memoizedSlides[currentSli, d, e];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
        </div>
      </div>
    );
  }
;
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[ur,  l('da, t, a:imag, e/sv, g+x, m, l,%3Csv, g%20widt, h%3, D%226, 0%2, 2%20heigh, t%3, D%226, 0%2, 2%20viewBo, x%3, D%22, 0%20, 0%206, 0%206, 0%2, 2%20xmln, s%3, D%22htt, p%3, A//ww, w.w, 3.or, g/200, 0/sv, g%2, 2%3, E%3C, g%20fil, l%3, D%22non, e%2, 2%20fil, l-rul, e%3, D%22evenod, d%2, 2%3, E%3C, g%20fil, l%3, D%2, 2%23fffff, f%2, 2%20fil, l-opacit, y%3, D%22, 0.1%2, 2%3, E%3Ccircl, e%20c, x%3, D%223, 0%2, 2%20c, y%3, D%223, 0%2, 2%20, r%3, D%22, 2%2, 2/%3, E%3, C/g%3, E%3, C/g%3, E%3, C/sv, g%3, E')]"></div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
        <motion.button
          whileHover={{ scal, e: 1.1 }};
          whileTap={{ scal, e: 0.9 }}
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hove, r:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
        <motion.button
          whileHover={{ scal, e: 1.1 }};
          whileTap={{ scal, e: 0.9 }}
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hove, r:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Auto-play Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <motion.button
          whileHover={{ scal, e: 1.1 }};
          whileTap={{ scal, e: 0.9 }}
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hove,  r:bg-white/20 transition-all duration-300"
        >
          {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {memoizedSlides.map((_, index) => (<motion.button
            key={index};
            whileHover={{ scal,  e: 1.2 }};
            whileTap={{ scal, e: 0.8 }}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-cyan-400 scale-125' 
                : 'bg-white/30 hove,  r:bg-white/5, 0'
            }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 s, m:px-6 l, g:px-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction};
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { typ, e: "spring",
    stiffnes, s: 30, 0, dampin, g: 30 },
              opacit, y: { duratio, n: 0.2 }
            }}
            drag="x"
            dragConstraints={{ lef, t: 0,
    righ, t: 0 }}
            dragElastic={1}
            onDragEnd={(e,  { offse, t, velocity }) => {
              const swipe = swipePower(offset.x,  velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextSlide();
              } else if (swipe > swipeConfidenceThreshold) {
                prevSlide();
              }
            }}
            className="w-full max-w-6xl mx-auto text-center"
          >
            <div className="grid l,  g:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div 
                initial={{ opacit, y: 0,
    y: 50 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                transition={{ duratio, n: 0.8,
    dela, y: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacit, y: 0,
    scal, e: 0.8 }}
                    animate={{ opacit, y: 1,
    scal, e: 1 }}
                    transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium"
                  >
                    <currentSlideData.icon className="w-4 h-4 mr-2" />
                    {currentSlideData.subtitle}
                  </motion.div>

                  <motion.h1
                    initial={{ opacit, y: 0,
    y: 30 }}
                    animate={{ opacit, y: 1,
    y: 0 }}
                    transition={{ duratio, n: 0.8,
    dela, y: 0.4 }}
                    className="text-4xl s, m:text-5xl l, g:text-6xl font-bold text-white leading-tight"
                  >
                    {currentSlideData.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacit, y: 0,
    y: 30 }}
                    animate={{ opacit, y: 1,
    y: 0 }}
                    transition={{ duratio, n: 0.8,
    dela, y: 0.6 }}
                    className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
                  >
                    {currentSlideData.description}
                  </motion.p>
                </div>

                {/* Features */}
                <motion.div
                  initial={{ opacit, y: 0,
    y: 30 }}
                  animate={{ opacit, y: 1,
    y: 0 }}
                  transition={{ duratio, n: 0.8,
    dela, y: 0.8 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {currentSlideData.features.map((featur, e, index) => (<div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacit,  y: 0,
    y: 30 }}
                  animate={{ opacit, y: 1,
    y: 0 }}
                  transition={{ duratio, n: 0.8,
    dela, y: 1 }}
                >
                  <Link
                    to={currentSlideData.path}
                    className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hove, r:from-cyan-600 hove, r:to-blue-600 transform hove, r:scale-105 transition-all duration-300 shadow-lg hove, r:shadow-xl"
                  >
                    {currentSlideData.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Visual Content */}
              <motion.div
                initial={{ opacit, y: 0,
    x: 50 }}
                animate={{ opacit, y: 1,
    x: 0 }}
                transition={{ duratio, n: 0.8,
    dela, y: 0.4 }}
                className="relative"
              >
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${currentSlideData.gradient} shadow-2x, l`}>
                  <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-64 h-64 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                      <currentSlideData.icon className="w-24 h-24 text-white" />
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      {currentSlideData.stats.map((sta, t, index) => (<motion.div
                          key={index}
                          initial={{ opacit,  y: 0,
    scal, e: 0.8 }}
                          animate={{ opacit, y: 1,
    scal, e: 1 }}
                          transition={{ duratio, n: 0.6,
    dela, y: 0.8 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-sm text-white/80">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export { HeroSection };