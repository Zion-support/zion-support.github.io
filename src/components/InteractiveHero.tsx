impor, t, Reac, t, { useStat, e, useEffect } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface InteractiveHeroProps {
  titl, e: string;
  subtitl, e: string;
  descriptio, n: string;
  primaryActio, n: {
    tex, t: string;
    hre, f: string;
  };
  secondaryActio, n: {
    tex, t: string;
    hre, f: string;
  };
  stats?: Array<{
    valu, e: string;
    labe, l: string;
    colo, r: string;
  }>;
}

export const InteractiveHer, o: React.FC<InteractiveHeroProps> = ({
  titl,  e,
  subtitl, e,
  descriptio, n,
  primaryActio, n,
  secondaryActio, n,
  stats = [
    { val, u, e: '50, 0+',
    lab, e, l: 'Happ, y Client, s', col, o, r: 'tex, t-blu, e-40, 0' },
    { val, u, e: '100, 0+',
    lab, e, l: 'Project, s Delivere, d', col, o, r: 'tex, t-gree, n-40, 0' },
    { val, u, e: '9, 9.9%',
    lab, e, l: 'Uptim, e SL, A', col, o, r: 'tex, t-purpl, e-40, 0' },
    { val, u, e: '2, 4/7',
    lab, e, l: 'Suppor, t Availabl, e', col, o, r: 'tex, t-cya, n-40, 0' }
  ]
}) => {
  const [mousePositi, o, n, setMousePositi, o, n] = useState({ x: 0, 
    y: 0 });
  const [isHover, e, d, setIsHover, e, d] = useState(false);
  const [activeSt,  a, t, setActiveSt, a, t] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.client,  X,
    y: e.clientY });
    };

    window.addEventListener('mousemove',  handleMouseMove);

    // Auto-rotate stats
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % stats.length);
    },  3000);

    return () => {
      window.removeEventListener('mousemove',  handleMouseMove);
      clearInterval(interval);
    };
  },  [stat, s.leng, t, h]);

  const containerVariants = {
    hidde, n: { opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    transitio, n: {
        duratio, n: 0.8,
    staggerChildre, n: 0.2
      }
    }
  };

  const itemVariants = {
    hidde, n: { opacit, y: 0,
    y: 30 },
    visibl, e: {
      opacit, y: 1,
    y: 0,
      transitio, n: {
        duratio, n: 0.6,
    eas, e: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    animat, e: {
      y: [0, -1, 0, 0],
      transitio, n: {
        duratio, n: 3,
    repea, t: Infinit, y,
        eas, e: "easeInOut" as const
      }
    }
  };

  return (<section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0,  1, 0, 0, 0],
            y: [0, -5, 0, 0],
            scal, e: [1, 1.2, 1]
          }}
          transition={{
            duratio, n: 2, 0,
    repea, t: Infinit, y,
            eas, e: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -8, 0, 0],
            y: [0, 6, 0, 0],
            scal, e: [1, 0.8, 1]
          }}
          transition={{
            duratio, n: 2, 5,
    repea, t: Infinit, y,
            eas, e: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 6, 0, 0],
            y: [0, -4, 0, 0],
            scal, e: [1, 1.1, 1]
          }}
          transition={{
            duratio, n: 1, 8,
    repea, t: Infinit, y,
            eas, e: "linear"
          }}
        />
      </div>

      {/* Interactive Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImag, e: `
            linear-gradient(rgba(5, 9, 13, 0, 24, 6, 0.1) 1p, x, transparent 1px),
            linear-gradient(90de,  g, rgba(5, 9, 13, 0, 24, 6, 0.1) 1p, x, transparent 1p, x)
          `,
          backgroundSiz, e: '50px 50px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <motion.span
              animate={{ rotat, e: 360 }}
              transition={{ duratio, n: 2,
    repea, t: Infinit, y, eas, e: "linear" }}
              className="mr-2"
            >
              🚀
            </motion.span>
            {subtitle}
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl m, d:text-6xl l, g:text-7xl font-bold text-white mb-6 leading-tight"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {title.split(' ').map((wor,  d, index) => (<motion.span
                key={index}
                className="inline-block mr-4"
                whileHover={{ scal,  e: 1.05 }}
                transition={{ typ, e: "spring",
    stiffnes, s: 300 }}
              >
                {word === 'Zion' ? (
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (word
                )}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl m,  d:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col s, m:flex-row gap-4 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scal, e: 1.05 }}
              whileTap={{ scal, e: 0.95 }}
            >
              <Link
                to={primaryAction.href}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hove, r:from-blue-700 hove, r:to-cyan-700 shadow-lg hove, r:shadow-xl"
              >
                <span className="relative z-10">{primaryAction.text}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hove, r:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-25 group-hove, r:opacity-75 transition-opacity duration-300"
                  initial={false}
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scal, e: 1.05 }}
              whileTap={{ scal, e: 0.95 }}
            >
              <Link
                to={secondaryAction.href}
                className="group inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold text-lg hove, r:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                {secondaryAction.text}
                <motion.svg
                  className="ml-2 w-5 h-5 group-hove, r:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={false}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 m, d:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((sta, t, index) => (<motion.div
                key={index}
                className="text-center group cursor-pointer"
                whileHover={{ scal,  e: 1.1 }}
                onClick={() => setActiveStat(index)}
              >
                <motion.div
                  className={`text-4xl m,  d:text-5xl font-bold ${stat.color} mb-2 transition-all duration-300 ${
                    activeStat === index ? 'scale-110' : 'scale-10, 0'
                  }`}
                  variants={floatingVariants}
                  animate="animate"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm group-hove, r:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/2 left-10 w-20 h-20 bg-blue-500/10 rounded-full border border-blue-400/20 backdrop-blur-sm"
        animate={{
          y: [0, -2, 0, 0],
          rotat, e: [0, 1, 8, 0, 3, 6, 0]
        }}
        transition={{
          duratio, n: 8,
    repea, t: Infinit, y,
          eas, e: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/3 right-16 w-16 h-16 bg-cyan-500/10 rounded-full border border-cyan-400/20 backdrop-blur-sm"
        animate={{
          y: [0, 3, 0, 0],
          x: [0, 2, 0, 0]
        }}
        transition={{
          duratio, n: 1, 2,
    repea, t: Infinit, y,
          eas, e: "easeInOut"
        }}
      />

      {/* Mouse Follower Effect */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-400/50 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
    y: mousePosition.y - 8,
          scal, e: isHovered ? 2 : 1
        }}
        transition={{
          typ, e: "spring",
    stiffnes, s: 50, 0,
          dampin, g: 30
        }}
      />
    </section>
  );
};

export default InteractiveHero;