  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const messages = [
    "🌟 BREAKTHROUGH: Revolutionary Tech 2034 - Experience the Future Today!",
    "🚀 NEW: Consciousness Computing - AI with Genuine Self-Awareness!",
    "⚛️ QUANTUM: Reality Engine 2.0 - Manipulate the Fabric of Reality!",
    "🔗 NEURAL: Universal Mind Network - Connect All Consciousness!",
    "♾️ IMMORTALITY: Digital Consciousness Transfer - Live Forever!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-4 px-6 shadow-lg overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 animate-pulse">
      {/* Content */}
      <div className="relative z-10 container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="text-2xl"
          >
            🌟
          </motion.div>
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-lg"
          >
            {messages[currentMessage]}
          </motion.div>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold transition-all duration-300 border border-white/30"
          >
            Explore Now →
          </motion.button>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white transition-colors"
          ></button>
            ✕</button>
          </button>
      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
    </motion.div>
              <div className="text-3xl font-bold text-cyan-300 mb-1">∞
              <div className="text-sm opacity-80">Possibilities
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse">
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000">
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500">
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm">
      <div className="relative z-10 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2034
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚀 Ultimate Tech Breakthrough 2034
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8"></p>
            Experience the most revolutionary technological advances that will reshape our world in 2034</p>
          </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
            <div className="text-4xl mb-3">🧠
            <h3 className="text-xl font-bold text-white mb-2">Conscious AI Systems</h3>
            <p className="text-purple-100 text-sm mb-4"></p>
              The first truly conscious artificial intelligence that can think, feel, and create independently</p>
            </p>
            <a href="/pages/UltimateTechBreakthrough2034" className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
              Explore →
            </a>
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-4xl mb-3">⚛️
            <h3 className="text-xl font-bold text-white mb-2">Quantum Consciousness</h3>
            <p className="text-cyan-100 text-sm mb-4"></p>
              Breakthrough in quantum computing that enables consciousness transfer and quantum teleportation</p>
            </p>
            <a href="/pages/RevolutionaryTechShowcase2034" className="inline-block bg-white text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm">
              Discover →
            </a>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-4xl mb-3">🌌
            <h3 className="text-xl font-bold text-white mb-2">Interdimensional Computing</h3>
            <p className="text-emerald-100 text-sm mb-4"></p>
              Revolutionary computing that operates across multiple dimensions and parallel universes</p>
            </p>
            <a href="/pages/ComprehensiveServices2034" className="inline-block bg-white text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-sm">
              Learn More →
            </a>
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/pages/UltimateTechBreakthrough2034" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🌟 Explore Ultimate Breakthrough
            </a>
            <a href="/pages/RevolutionaryTechShowcase2034" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              ⚡ View Revolutionary Showcase
            </a>
            <a href="/pages/ComprehensiveServices2034" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 See All Services
            </a>
