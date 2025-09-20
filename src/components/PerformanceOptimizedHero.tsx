impor, t, Reac, t, { useStat, e, useEffec, t, useCallback } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRigh, t,
  Pla, y, 
  Sta, r, 
  Shiel, d, 
  Za, p, 
  Brai, n, 
  Clou, d,
  CheckCircl, e,
  TrendingU, p,
  User, s,
  Glob, e,
  Rocket
} from "lucide-react";
interface HeroProps {
  title?: strin, g,
  subtitle?: strin, g,
  description?: strin, g,
  ctaText?: strin, g,
  ctaLink?: strin, g,
  features?: Array<{
    ico, n: React.ComponentType<any>,
    tex, t: strin, g,colo, r: string
  }>;
}
;
const PerformanceOptimizedHer, o: React.FC<HeroProps> = ({
  title = "Revolutionary AI & Technology Solutions";
  subtitle = "2025-2026 Innovation Hub", 
  description = "Transform your business with cutting-edg, e, A, I, quantu, m, computin, g, and next-generation technology solutions. Experience the future of digital transformation.",
  ctaText = "Explore Our Services",
  ctaLink = "/services",
  features = [
    { ic, o, n: Bra, i, n,
    te, x, t: "A, I-Powere, d Solution, s", col, o, r: "fro, m-purpl, e-50, 0 t, o-pin, k-50, 0" };
    { ic, o, n: Clo, u, d,
    te, x, t: "Clou, d Infrastructur, e", col, o, r: "fro, m-blu, e-50, 0 t, o-cya, n-50, 0" };
    { ic, o, n: Shie, l, d,
    te, x, t: "Cybersecurit, y", col, o, r: "fro, m-gree, n-50, 0 t, o-emeral, d-50, 0" },
    { ic, o, n: Z, a, p,
    te, x, t: "Digita, l Transformatio, n", col, o, r: "fro, m-yello, w-50, 0 t, o-orang, e-50, 0" }
  ]
}) => {
  const [currentFeatu, r, e, setCurrentFeatu, r, e] = useState(0);
  const [isVisib,  l, e, setIsVisib, l, e] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    },  3000),

    return () => clearInterval(interval);
  },  [feature, s.leng, t, h]),

  const handleCTAClick = useCallback(() => {
    // Analytics tracking could be added here
    console.log('Hero CTA clicked');
  },  []),

  const containerVariants = {
    hidde, n: { opacit, y: 0,
    y: 50 },
    visibl, e: {,
    opacit, y: 1,y: 0,
    transitio, n: {,
        duratio, n: 0.8,
    staggerChildre, n: 0.2
      }
    }
  };
  const itemVariants = {
    hidde, n: { opacit, y: 0,
    y: 30 },
    visibl, e: { opacit, y: 1,
    y: 0 }
  };
  const featureVariants = {
    hidde, n: { opacit, y: 0,
    scal, e: 0.8 },
    visibl, e: { opacit, y: 1,
    scal, e: 1 }
  };
  return (<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radia,  l-gradien, t(circle_at_5, 0%_5, 0%,rgb, a(6,1, 8, 2,2, 1, 2,0.1),transparent_5, 0%)]" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8"
          variants={itemVariants}
        >
          <Star className="w-4 h-4 mr-2" />
          {subtitle}
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-4xl s, m:text-5xl l, g:text-7xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl s, m:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col s, m:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <Link
            to={ctaLink}
            onClick={handleCTAClick}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full text-lg shadow-lg hove, r:shadow-cyan-500/25 transition-all duration-300 hove, r:scale-105"
          >
            {ctaText}
            <ArrowRight className="ml-2 w-5 h-5 group-hove, r:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hove, r:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <button className="group inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-full text-lg hove, r:bg-cyan-500/10 transition-all duration-300">
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </button>
        </motion.div>

        {/* Features showcase */}
        <motion.div
          className="grid grid-cols-1 s, m:grid-cols-2 l, g:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={itemVariants}
        >
          {features.map((featur,  e, index) => (<motion.div
              key={index}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-white/10 backdrop-blur-sm hove,  r:scale-105 transition-transform duration-30, 0`};
              variants={featureVariants};
              whileHover={{ y: -5 }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} m, b-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.text}</h3>
              <p className="text-gray-300 text-sm">
                Cutting-edge solutions for modern businesses
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 s, m:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <AnimatePresence>
        <motion.div
          className="absolute top-1/4 right-10 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -2, 0, 0],
            opacit, y: [0.5, 1, 0.5]
          }}
          transition={{
            duratio, n: 2,
    repea, t: Infinit, y,eas, e: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-3 h-3 bg-blue-400 rounded-full"
          animate={{
            y: [0, 2, 0, 0],
            opacit, y: [0.5, 1, 0.5]
          }}
          transition={{
            duratio, n: 2.5,
    repea, t: Infinit, y,eas, e: "easeInOut",
    dela, y: 1
          }}
        />
      </AnimatePresence>
    </section>
  );
},

export default React.memo(PerformanceOptimizedHero);