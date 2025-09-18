import React from 'react';
import { motion } from 'framer-motion';

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
          <div className="flex justify-center space-x-4">
            <a 
              href={adContent[currentAd].link}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg"
            >
              {adContent[currentAd].cta} →
            </a>
            <button 
              onClick={() => setIsVisible(false)}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
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
        
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-6 text-white text-center hover:scale-105 transition-all duration-300">
          <div className="text-3xl mb-2">⚡</div>
          <h4 className="text-lg font-bold mb-2">Quantum Supremacy</h4>
          <p className="text-sm opacity-90 mb-3">1000+ qubit quantum processors</p>
          <a href="/pages/QuantumReality2026" className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm font-semibold">
            Explore →
          </a>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white text-center hover:scale-105 transition-all duration-300">
          <div className="text-3xl mb-2">🧬</div>
          <h4 className="text-lg font-bold mb-2">Neural Interfaces</h4>
          <p className="text-sm opacity-90 mb-3">Direct brain-computer communication</p>
          <a href="/pages/NeuralInterfaceEvolution2026" className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm font-semibold">
            Discover →
          </a>
        </div>
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
