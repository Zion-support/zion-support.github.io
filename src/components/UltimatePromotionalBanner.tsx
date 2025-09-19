
const UltimatePromotionalBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      id: 'revolutionary-2031',
      title: '🚀 REVOLUTIONARY TECH 2031',
      subtitle: 'Experience the Ultimate Breakthrough',
      description: 'Quantum Consciousness • Interdimensional Computing • Synthetic Reality',
      link: '/pages/RevolutionaryTech2031',
      gradient: 'from-purple-600 to-pink-600',
      textColor: 'text-white'
    },
    {
      id: 'ultimate-breakthrough',
      title: '⚡ ULTIMATE BREAKTHROUGH 2031',
      subtitle: 'The Most Advanced Technology Ever',
      description: 'Quantum Consciousness Computing • Reality Manipulation • Infinite Processing',
      link: '/pages/UltimateTechBreakthrough2031',
      gradient: 'from-cyan-600 to-blue-600',
      textColor: 'text-white'
    },
    {
      id: 'consciousness-revolution',
      title: '🧠 CONSCIOUSNESS REVOLUTION 2031',
      subtitle: 'Mind-Machine Fusion Technology',
      description: 'Direct Neural Interface • Thought Processing • Reality Creation',
      link: '/pages/ConsciousnessComputingRevolution2031',
      gradient: 'from-emerald-600 to-teal-600',
      textColor: 'text-white'
    },
    {
      id: 'interdimensional-tech',
      title: '🌌 INTERDIMENSIONAL TECH 2030',
      subtitle: 'Access Infinite Dimensions',
      description: 'Multi-Dimensional Computing • Parallel Universe Access • Reality Simulation',
      link: '/pages/InterdimensionalTechRevolution2030',
      gradient: 'from-violet-600 to-purple-600',
      textColor: 'text-white'
    },
    {
      id: 'quantum-revolution',
      title: '⚡ QUANTUM REVOLUTION 2026',
      subtitle: 'Quantum Computing Breakthrough',
      description: 'Exponential Processing • Quantum Cryptography • Molecular Simulation',
      link: '/pages/QuantumComputingRevolution2026',
      gradient: 'from-orange-600 to-red-600',
      textColor: 'text-white'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentContent = promotionalContent[currentSlide];

  return (
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.gradient} opacity-90`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30">
            >
              <div className="text-sm text-blue-100 mb-2">Offer Expires In:
              <div className="flex justify-center space-x-4 text-2xl font-bold">
                <div className="bg-white/20 rounded-lg px-3 py-2">
                  <div className="text-yellow-300">07
                  <div className="text-xs text-blue-100">Days
                <div className="bg-white/20 rounded-lg px-3 py-2">
                  <div className="text-yellow-300">23
                  <div className="text-xs text-blue-100">Hours
                <div className="bg-white/20 rounded-lg px-3 py-2">
                  <div className="text-yellow-300">45
                  <div className="text-xs text-blue-100">Minutes
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-3xl"
                >
                  {currentContent.title.split(' ')[0]}
                </motion.div>
                <div>
                  <h3 className={`text-2xl font-bold ${currentContent.textColor} mb-1`}>
                    {currentContent.title}
                  </h3>
                  <p className={`text-lg ${currentContent.textColor} opacity-90`}></p>
                    {currentContent.subtitle}</p>
                  </p>
            </motion.div>
            {/* Description */}
            <motion.div
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block flex-1 text-center"
            >
              <p className={`text-lg ${currentContent.textColor} opacity-90`}></p>
                {currentContent.description}</p>
              </p>
            </motion.div>
            {/* Actions */}
            <motion.div
              key={`actions-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <motion.a
                href={currentContent.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-white ${currentContent.textColor.replace('text-', 'text-')} px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300`}
                style={{ 
                  color: currentContent.gradient.includes('purple') ? '#8B5CF6' :
                         currentContent.gradient.includes('cyan') ? '#06B6D4' :
                         currentContent.gradient.includes('emerald') ? '#10B981' :
                         currentContent.gradient.includes('violet') ? '#8B5CF6' :
                         '#F97316'
                }}
              >
                Explore Now →
              </motion.a>
              <button
                onClick={() => setIsVisible(false)}</button>
                className={`${currentContent.textColor} opacity-70 hover:opacity-100 transition-opacity`}</button>
              ></button>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></p>
                </svg>
              </button>
            </motion.div>
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}</button>
              /></button>
            ))}</button>
      {/* Animated Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 right-4 text-4xl opacity-20"
        >
          ⚡
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-4 left-4 text-4xl opacity-20"
        >
          🚀
        </motion.div>
    </motion.div>
    </divsection>
  );
}
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>