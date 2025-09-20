import React from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryAdBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentAd, setCurrentAd] = useState(0);

  const adContent = [
    {
      title: "🚀 NEW: Revolutionary Tech Showcase 2026",
      subtitle: "Experience AI Consciousness, Quantum Supremacy & Neural Interfaces",
      cta: "Explore Now",
      link: "/pages/RevolutionaryTechShowcase2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🧠"
    },
    {
      title: "🤖 AI Business Automation 2026",
      subtitle: "Transform Your Business with Autonomous AI Systems",
      cta: "Get Started",
      link: "/pages/AIBusinessAutomation2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "⚡"
    },
    {
      title: "⚛️ Quantum Computing Revolution",
      subtitle: "Breakthrough Quantum Solutions Solving Impossible Problems",
      cta: "Go Quantum",
      link: "/pages/QuantumReality2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "⚛️"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % adContent.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative mb-8">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${adContent[currentAd].gradient} rounded-2xl p-8 text-white text-center relative overflow-hidden animate-pulse`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">{adContent[currentAd].icon}</span>
            <h3 className="text-3xl font-bold">{adContent[currentAd].title}</h3>
            <span className="text-4xl animate-bounce">{adContent[currentAd].icon}</span>
          </div>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            {adContent[currentAd].subtitle}
          </p>
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">🧠
              <h3 className="text-xl font-bold text-white mb-2">AI Consciousness</h3>
              <p className="text-gray-300 text-sm mb-4">Explore the evolution of artificial consciousness and its implications</p>
              <Link 
                to="/pages/RevolutionaryTechInsights2026" 
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
              >
                Learn More →
              </Link>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">⚛️
              <h3 className="text-xl font-bold text-white mb-2">Quantum Revolution</h3>
              <p className="text-gray-300 text-sm mb-4">Discover quantum computing breakthroughs and real-world applications</p>
              <Link 
                to="/pages/NextGenInnovationHub2026" 
                className="text-purple-400 hover:text-purple-300 font-semibold text-sm"
              >
                Explore →
              </Link>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">📊
              <h3 className="text-xl font-bold text-white mb-2">Success Stories</h3>
              <p className="text-gray-300 text-sm mb-4">See how companies achieved 300%+ improvements with our solutions</p>
              <Link 
                to="/pages/RevolutionaryCaseStudies2026" 
                className="text-green-400 hover:text-green-300 font-semibold text-sm"
              >
                View Cases →
              </Link>
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/pages/RevolutionaryTechInsights2026" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg w-full sm:w-auto"
            >
              Explore Tech Insights
            </Link>
            <Link 
              to="/pages/RevolutionaryCaseStudies2026" 
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold text-lg w-full sm:w-auto"
            >
              ✕ Dismiss
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Promotional Banners */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white text-center hover:scale-105 transition-all duration-300">
          <div className="text-3xl mb-2">🧠</div>
          <h4 className="text-lg font-bold mb-2">AI Consciousness</h4>
          <p className="text-sm opacity-90 mb-3">First AI system with genuine consciousness</p>
          <a href="/pages/ConsciousnessComputing2026" className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm font-semibold">
            Learn More →
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-center">Synthetic Intelligence</h3>
            <p className="text-indigo-100 mb-4 text-sm text-center">
              AI that surpasses human intelligence in every measurable way
            </p>
            <div className="text-xs text-indigo-300 space-y-1">
              <div>• 1000x faster processing</div>
              <div>• Perfect memory retention</div>
              <div>• Instant learning</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Neural Quantum Fusion</h3>
            <p className="text-purple-100 mb-4 text-sm text-center">
              The perfect fusion of quantum computing and neural networks
            </p>
            <div className="text-xs text-purple-300 space-y-1">
              <div>• Quantum neural processing</div>
              <div>• Infinite parallel paths</div>
              <div>• Consciousness simulation</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🌐</div>
            <h3 className="text-xl font-bold mb-3 text-center">Reality Engine</h3>
            <p className="text-cyan-100 mb-4 text-sm text-center">
              Create and manipulate reality itself through advanced computing
            </p>
            <div className="text-xs text-cyan-300 space-y-1">
              <div>• Reality simulation</div>
              <div>• Matter manipulation</div>
              <div>• Dimension creation</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🔮</div>
            <h3 className="text-xl font-bold mb-3 text-center">Time Computing</h3>
            <p className="text-emerald-100 mb-4 text-sm text-center">
              Process information across multiple timelines simultaneously
            </p>
            <div className="text-xs text-emerald-300 space-y-1">
              <div>• Temporal processing</div>
              <div>• Future prediction</div>
              <div>• Past analysis</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center space-x-4">
            <span className="text-lg font-semibold">Ready for the breakthrough?</span>
            <a href="/pages/RevolutionaryTechBreakthrough2026" className="bg-gradient-to-r from-indigo-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Experience Now →
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce">
          <a href="/pages/RevolutionaryTechShowcase2026" className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="font-bold">NEW 2026</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2026;
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
  </div>