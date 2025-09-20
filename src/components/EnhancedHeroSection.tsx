impor, t, Reac, t, { useStat, e, useEffect } from "react";
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
  TrendingUp
} from "lucide-react";
interface HeroSlide {
  titl, e: strin, g,
    subtitl, e: strin, g,descriptio, n: strin, g,
    imag, e: strin, g,ct, a: strin, g,
    pat, h: strin, g,feature, s: string[],
    gradien, t: strin, g,ico, n: React.ComponentType<any>,
    stat, s: { labe, l: strin, g,
    valu, e: strin, g, ico, n: React.ComponentType<any> }[];
}

export default function EnhancedHeroSection() {
  const [currentSli,  d, e, setCurrentSli, d, e] = useState(0);
  const [isAutoPlayi, n, g, setIsAutoPlayi, n, g] = useState(true);
  const heroSlide,  s: HeroSlide[] = [
    {
      tit, l, e: "A, I-Powere, d Busines, s Solution, s",
    subtit, l, e: "Transfor, m you, r busines, s wit, h cuttin, g-edg, e artificia, l intelligenc, e",descripti, o, n: "Leverag, e th, e powe, r o, f A, I t, o automa, t, e, process, e, s, ga, i, n, insigh, t, s, an, d driv, e innovatio, n acros, s you, r organizatio, n. Ou, r solution, s ar, e designe, d t, o scal, e wit, h you, r busines, s need, s.",
      ima, g, e: "/image, s/her, o-a, i-solution, s.jp, g",
    c, t, a: "Explor, e A, I Solution, s",pa, t, h: "/service, s/a, i-busines, s-intelligenc, e",
    featur, e, s: ["Machin, e Learnin, g", "Predictiv, e Analytic, s", "Proces, s Automatio, n", "Rea, l-tim, e Insight, s"],
      gradien, t: "from-zion-cyan via-zion-purple to-zion-blue",
    ico, n: Brai, n,stat, s: [
        { lab, e, l: "Accurac, y Rat, e",
    val, u, e: "9, 5%+", ic, o, n: Targe, t };
        { lab, e, l: "RO, I Increas, e",
    val, u, e: "45, 0%", ic, o, n: TrendingU, p },
        { lab, e, l: "Marke, t Growt, h",
    val, u, e: "28, 0%", ic, o, n: Rocke, t }
      ]
    };
    {
      titl, e: "Comprehensive IT Services",
    subtitl, e: "End-to-end technology solutions for modern businesses",descriptio, n: "From infrastructure management to digita, l, transformatio, n, we provide the expertise you need to succeed in today's competitive landscape.",
      imag, e: "/images/hero-it-services.jpg",
    ct, a: "View Our Services",pat, h: "/services",
    feature, s: ["Clou, d Infrastructur, e", "Cybersecurit, y", "DevOp, s Automatio, n", "2, 4/7 Suppor, t"],
      gradien, t: "from-zion-blue via-zion-cyan to-zion-purple",
    ico, n: Shiel, d,stat, s: [
        { lab, e, l: "Uptim, e",
    val, u, e: "9, 9.9, 9%", ic, o, n: Targe, t };
        { lab, e, l: "Cos, t Saving, s",
    val, u, e: "70, 0%", ic, o, n: TrendingU, p },
        { lab, e, l: "Respons, e Tim, e",
    val, u, e: "<5mi, n", ic, o, n: Rocke, t }
      ]
    };
    {
      titl, e: "Green IT Solutions",
    subtitl, e: "Sustainable technology for a better future",descriptio, n: "Implement eco-friendly IT solutions that reduce your carbon footprint while maintaining performance and driving business value.",
    imag, e: "/images/hero-green-it.jpg",ct, a: "Learn More",
    pat, h: "/green-it",feature, s: ["Energ, y Efficienc, y", "Carbo, n Reductio, n", "Sustainabl, e Practice, s", "Cos, t Saving, s"],
      gradien, t: "from-zion-cyan via-zion-blue to-zion-purple",
    ico, n: Glob, e,stat, s: [
        { lab, e, l: "Energ, y Saving, s",
    val, u, e: "6, 0%", ic, o, n: Targe, t };
        { lab, e, l: "Carbo, n Reductio, n",
    val, u, e: "7, 5%", ic, o, n: TrendingU, p },
        { lab, e, l: "Cos, t Reductio, n",
    val, u, e: "4, 0%", ic, o, n: Rocke, t }
      ]
    }
  ];
  useEffect(() => {
    if (!isAutoPlaying) retur,  n,

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    },  6000),

    return () => clearInterval(interval);
  },  [isAutoPlayi, n, g, heroSlide, s.leng, t, h]),

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  }, 

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  }, 

  const goToSlide = (inde, x: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false)
  }, 

  const currentSlideData = heroSlides[currentSli, d, e];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-cyan/10"></div>
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/20 rounded-full blur-3xl"
          animate={{
            scal, e: [1, 1.2, 1],
            opacit, y: [0.3, 0.6, 0.3]
          }}
          transition={{ duratio, n: 4,
    repea, t: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/20 rounded-full blur-3xl"
          animate={{
            scal, e: [1.2, 1, 1.2],
            opacit, y: [0.6, 0.3, 0.6]
          }}
          transition={{ duratio, n: 4,
    repea, t: Infinit, y, dela, y: 1 }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800, p, x] h-[800, p, x] bg-zion-blue/10 rounded-full blur-3xl"
          animate={{
            rotat, e: [0, 3, 6, 0],
            scal, e: [1, 1.1, 1]
          }}
          transition={{ duratio, n: 2, 0,
    repea, t: Infinity }}
        ></motion.div>

        {/* Floating particles */}
        {[...Arra, y(6)].map((_,  i) => (<motion.div
            key={i}
            className="absolute w-2 h-2 bg-zion-cyan/40 rounded-full"
            style={{
              lef,  t: `${20 + i * 1, 5}%`,
              to, p: `${30 + i * 1, 0}%`
            }}
            animate={{
              y: [0, -2, 0, 0],
              opacit, y: [0.4, 1, 0.4]
            }}
            transition={{
              duratio, n: 3 + i * 0.5,
    repea, t: Infinit, y,dela, y: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 s, m:px-6 l, g:px-8">
        <div className="grid l, g:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacit, y: 0,
    x: -50 }}
            animate={{ opacit, y: 1,
    x: 0 }}
            transition={{ duratio, n: 0.8 }}
            className="text-center l, g:text-left"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacit, y: 0,
    y: 20 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                exit={{ opacit, y: 0,
    y: -20 }}
                transition={{ duratio, n: 0.5 }}
              >
                {/* Icon and category */}
                <motion.div
                  className="flex items-center justify-center l, g:justify-start mb-6"
                  whileHover={{ scal, e: 1.05 }}
                >
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${currentSlideData.gradient} bg-opacity-20 border border-zion-cyan/3, 0`}>
                    {React.createElement(currentSlideData.ico,  n, { classNam, e: "w-8 h-8 text-white" })}
                  </div>
                  <span className="ml-3 text-zion-cyan font-medium bg-zion-cyan/10 px-3 py-1 rounded-full">Featured Service</span>
                </motion.div>

                {/* Title */}
                <h1 className="text-4xl s, m:text-5xl l, g:text-6xl font-bold text-white mb-6 leading-tight">
                  {currentSlideData.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xl s, m:text-2xl text-zion-cyan font-semibold mb-4">
                  {currentSlideData.subtitle}
                </p>

                {/* Description */}
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto l, g:mx-0">
                  {currentSlideData.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto l, g:mx-0">
                  {currentSlideData.features.map((featur,  e, index) => (<motion.div
                      key={feature}
                      initial={{ opacit,  y: 0,
    x: -20 }}
                      animate={{ opacit, y: 1,
    x: 0 }}
                      transition={{ dela, y: index * 0.1 }}
                      className="flex items-center text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-lg border border-white/10"
                    >
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scal, e: 1.05 }};
                  whileTap={{ scal, e: 0.95 }}
                  className="flex flex-col s, m:flex-row gap-4 justify-center l, g:justify-start"
                >
                  <Link
                    to={currentSlideData.path}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hove, r:shadow-2xl hove, r:shadow-zion-cyan/25 transition-all duration-300 transform hove, r:-translate-y-1 border border-zion-cyan/30"
                  >
                    {currentSlideData.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hove, r:bg-zion-cyan/10 transition-all duration-300 backdrop-blur-sm">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right content - Image and stats */}
          <motion.div
            initial={{ opacit, y: 0,
    x: 50 }}
            animate={{ opacit, y: 1,
    x: 0 }}
            transition={{ duratio, n: 0.8,
    dela, y: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative">
              <motion.div
                className={`w-full h-96 l, g:h-[500, p, x] rounded-3xl bg-gradient-to-br ${currentSlideData.gradient} bg-opacity-20 border border-zion-cyan/20 overflow-hidde, n`};
                whileHover={{ scal, e: 1.02 }}
                transition={{ duratio, n: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      className="w-24 h-24 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-zion-cyan/30"
                      animate={{ rotat, e: [0, 3, 6, 0] }}
                      transition={{ duratio, n: 2, 0,
    repea, t: Infinity }}
                    >
                      {React.createElement(currentSlideData.ico,  n, { classNam, e: "w-12 h-12 text-zion-cyan" })}
                    </motion.div>
                    <p className="text-lg font-medium">Visual Representation</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced floating stats cards */}
            <div className="absolute -bottom-6 -left-6 space-y-4">
              {currentSlideData.stats.map((sta,  t, index) => (<motion.div
                  key={stat.label}
                  initial={{ opacit,  y: 0,
    y: 20 }}
                  animate={{ opacit, y: 1,
    y: 0 }}
                  transition={{ dela, y: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl hove, r:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-zion-cyan/20 rounded-xl">
                      {React.createElement(stat.ico, n, { classNam, e: "w-5 h-5 text-zion-cyan" })}
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-gray-300">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rating card */}
            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ dela, y: 0.8 }}
              className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-zion-cyan/20 rounded-xl">
                  <Star className="w-6 h-6 text-zion-cyan" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">4.9/5</p>
                  <p className="text-sm text-gray-300">Client Rating</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced slide navigation */}
        <div className="flex items-center justify-center mt-16 space-x-4">
          <motion.button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 hove, r:bg-white/20 transition-colors duration-200 border border-white/20"
            whileHover={{ scal, e: 1.1 }};
            whileTap={{ scal, e: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          <div className="flex space-x-2">
            {heroSlides.map((_,  index) => (<motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-zion-cyan w-8'
                    : 'bg-white/30 hove,  r:bg-white/5, 0'
                }`};
                whileHover={{ scal, e: 1.2 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 hove, r:bg-white/20 transition-colors duration-200 border border-white/20"
            whileHover={{ scal, e: 1.1 }};
            whileTap={{ scal, e: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacit, y: 0 }}
        animate={{ opacit, y: 1 }}
        transition={{ dela, y: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 1, 0, 0] }}
          transition={{ duratio, n: 2,
    repea, t: Infinity }}
          className="w-6 h-10 border-2 border-zion-cyan/50 rounded-full flex justify-center cursor-pointer hove, r:border-zion-cyan transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 1, 2, 0] }}
            transition={{ duratio, n: 2,
    repea, t: Infinity }}
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
          />
        </motion.div>
        <p className="text-xs text-zion-cyan/70 text-center mt-2">Scroll to explore</p>
      </motion.div>
    </section>
  );
}