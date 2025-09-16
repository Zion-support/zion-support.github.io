import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdvancedBiotechRevolution2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState('gene-editing');
  const [animationPhase, setAnimationPhase] = useState(0);

  const biotechCategories = {
    'gene-editing': {
      title: "CRISPR 3.0 Gene Editing",
      description: "Revolutionary precision gene editing with 99.9% accuracy",
      icon: "🧬",
      color: "from-emerald-500 to-teal-500",
      features: [
        "Precision DNA modification",
        "Disease elimination",
        "Longevity enhancement",
        "Genetic optimization"
      ]
    },
    'synthetic-biology': {
      title: "Synthetic Biology",
      description: "Creating life from scratch with programmable organisms",
      icon: "🔬",
      color: "from-purple-500 to-pink-500",
      features: [
        "Artificial life forms",
        "Bio-manufacturing",
        "Environmental remediation",
        "Custom organisms"
      ]
    },
    'neural-implants': {
      title: "Neural Implants",
      description: "Direct brain-computer interfaces for enhanced cognition",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Memory enhancement",
        "Cognitive augmentation",
        "Direct neural control",
        "Brain-computer fusion"
      ]
    },
    'regenerative-medicine': {
      title: "Regenerative Medicine",
      description: "Growing replacement organs and tissues",
      icon: "💊",
      color: "from-red-500 to-orange-500",
      features: [
        "Organ regeneration",
        "Tissue engineering",
        "Stem cell therapy",
        "Immortality research"
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white text-sm font-bold mb-6">
              🧬 BIOTECH REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Advanced Biotech Revolution 2026
            </h1>
            <p className="text-2xl text-emerald-200 max-w-4xl mx-auto mb-8">
              Experience the future of biotechnology where science fiction becomes reality. 
              Discover revolutionary breakthroughs in gene editing, synthetic biology, and regenerative medicine.
            </p>
          </div>

          {/* Interactive Tech Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {Object.entries(biotechCategories).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTech(key)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  activeTech === key
                    ? 'bg-white/20 backdrop-blur-sm border-2 border-white'
                    : 'bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/15'
                }`}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm font-semibold">{tech.title}</div>
              </button>
            ))}
          </div>

          {/* Active Tech Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${biotechCategories[activeTech as keyof typeof biotechCategories].color} rounded-3xl p-12 text-center shadow-2xl`}
            >
              <div className="text-8xl mb-6 animate-pulse">
                {biotechCategories[activeTech as keyof typeof biotechCategories].icon}
              </div>
              <h2 className="text-4xl font-bold mb-4">
                {biotechCategories[activeTech as keyof typeof biotechCategories].title}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {biotechCategories[activeTech as keyof typeof biotechCategories].description}
              </p>
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {biotechCategories[activeTech as keyof typeof biotechCategories].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="font-semibold">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Breakthrough Technologies */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Breakthroughs</h2>
          <p className="text-xl text-emerald-200">The most advanced biotech innovations of 2026</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-6xl mb-6 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">CRISPR 3.0</h3>
            <p className="text-lg mb-6 opacity-90">
              Next-generation gene editing with unprecedented precision and safety. 
              Eliminate genetic diseases and enhance human capabilities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">99.9% accuracy rate</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Zero off-target effects</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Real-time monitoring</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-6xl mb-6 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Life</h3>
            <p className="text-lg mb-6 opacity-90">
              Creating artificial organisms from scratch with programmable DNA. 
              Custom life forms for specific applications and challenges.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Programmable DNA</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Custom functions</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Environmental adaptation</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-6xl mb-6 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Implants</h3>
            <p className="text-lg mb-6 opacity-90">
              Direct brain-computer interfaces that enhance cognitive abilities 
              and create seamless human-AI integration.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Memory enhancement</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Direct neural control</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">AI integration</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Future Applications */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Future Applications</h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            The biotech revolution is transforming every aspect of human life, from healthcare 
            and longevity to environmental restoration and space exploration.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-sm opacity-90">Personalized medicine and disease elimination</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Environment</h3>
              <p className="text-sm opacity-90">Climate restoration and pollution cleanup</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Space</h3>
              <p className="text-sm opacity-90">Terraforming and space colonization</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Energy</h3>
              <p className="text-sm opacity-90">Biological energy production</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Join us in exploring the most advanced biotechnology innovations that are reshaping 
          the future of humanity and our planet.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Explore More Biotech
          </button>
          <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-colors font-semibold text-lg">
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedBiotechRevolution2026;