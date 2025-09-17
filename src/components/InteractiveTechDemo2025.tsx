
import React, { useState, useEffect } from 'react';
import { 
  Play
  Pause
  RotateCcw
  Settings
  Zap
  Brain
  Cpu
  Database,
  Cloud,
  Smartphone,
  Laptop,
  Server,
  Network,
  Shield,
  Target,
  TrendingUp,
  Users,
  Globe,
  Code,
  Atom,
  Rocket,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowRight,
  Download,
  Share2,
  Heart,
  MessageCircle,
  BookOpen,
  Lightbulb
} from 'lucide-react';


  useEffect(() => {
    setIsVisible(true);
  }[]);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
          }
          return prev + 2;
        });
      }100);
    }
    return () => clearInterval(interval);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (progress >= 100) {
      setProgress(0);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const currentDemo = demos[activeDemo];

  return (
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Demo 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

                </button>
              ))}
        {/* Demo Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {demo.icon} {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-8xl mb-6 text-center">{demos[activeDemo as keyof typeof demos].icon}</div>
            <h3 className="text-4xl font-bold mb-6 text-center">
              {demos[activeDemo as keyof typeof demos].title}
            </h3>
            <p className="text-xl opacity-90 mb-8 text-center">
              {demos[activeDemo as keyof typeof demos].description}
            </p>
            <div className="space-y-4 mb-8">
              {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href={demos[activeDemo as keyof typeof demos].link}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg inline-block"
              >
                Experience Full Demo →
              </a>
            </div>
          </div>

          {/* Interactive Visualization */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <h4 className="text-2xl font-bold mb-6 text-center">Live Simulation</h4>
            <div className="bg-black/50 rounded-lg p-6 mb-6">
              <div className="text-green-400 font-mono text-sm">
                {activeDemo === 'ai' && (
                  <>
                    <div>🧠 AI Consciousness Status: ACTIVE</div>
                    <div>📊 Learning Rate: 99.9%</div>
                    <div>💭 Self-Reflection: ENABLED</div>
                    <div>🎯 Decision Making: AUTONOMOUS</div>
                    <div>💡 Creativity Level: MAXIMUM</div>
                  </>
                )}
                {activeDemo === 'quantum' && (
                  <>
                    <div>⚛️ Quantum State: SUPERPOSITION</div>
                    <div>🌌 Parallel Universes: ∞</div>
                    <div>⚡ Processing Speed: INSTANT</div>
                    <div>🔗 Entanglement: ACTIVE</div>
                    <div>🌍 Reality Manipulation: ENABLED</div>
                  </>
                )}
                {activeDemo === 'interdimensional' && (
                  <>
                    <div>🌌 Dimensional Portals: OPEN</div>
                    <div>🔄 Reality Sync: 100%</div>
                    <div>🧠 Consciousness Transfer: READY</div>
                    <div>📡 Cross-Dimensional Comm: ACTIVE</div>
                    <div>🔮 Reality Manipulation: ENABLED</div>
                  </>
                )}
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                ✅ System Online
              </div>
            </div>

          {/* Features and Metrics */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Real-Time Metrics</h3>
              
              <div className="space-y-4">
                {currentDemo.features.map((featureindex) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                    onClick={() => setSelectedFeature(feature)}
                  >
                    <div>
                      <p className="text-white font-medium">{feature.name}</p>
                      <div className="w-32 h-2 bg-white/10 rounded-full mt-2">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">
                        {feature.value}
                        <span className="text-sm text-gray-400 ml-1">{feature.unit}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">Consciousness Level</span>
                <span className="text-purple-300 font-mono">{demoData.consciousnessLevel.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${demoData.consciousnessLevel}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        );

        {/* Technology Stats */}
        <div className="mt-16 bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center mb-8">Real-Time Technology Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-lg opacity-90">Active AI Units</div>
              <div className="text-sm text-gray-300">Consciousness processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Parallel Universes</div>
              <div className="text-sm text-gray-300">Quantum accessible</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
              <div className="text-sm text-gray-300">Interdimensional transfers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">0ms</div>
              <div className="text-lg opacity-90">Latency</div>
              <div className="text-sm text-gray-300">Cross-dimensional speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;