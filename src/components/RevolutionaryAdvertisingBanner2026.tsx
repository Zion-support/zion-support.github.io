import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryAdvertisingBanner2026: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const banners = [
    {
      id: 1,
      title: "🌟 ULTIMATE TECH REVOLUTION 2026",
      subtitle: "The Most Advanced Technology Ever Created",
      description: "Experience revolutionary breakthroughs in Synthetic Intelligence, Quantum Consciousness, and Dimensional Computing that will reshape reality itself.",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🚀",
      link: "/pages/UltimateTechRevolution2026",
      features: ["Synthetic Intelligence", "Quantum Consciousness", "Dimensional Computing"],
      urgency: "EXCLUSIVE LAUNCH",
      discount: "FREE ACCESS"
    },
    {
      id: 2,
      title: "🧬 BREAKTHROUGH INNOVATIONS 2026",
      subtitle: "Revolutionary Technologies That Change Everything",
      description: "Discover Bio-Neural Computing, Universal Mind Networks, and Synthetic Consciousness - innovations that transcend current technological limitations.",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "🧬",
      link: "/pages/BreakthroughInnovations2026",
      features: ["Bio-Neural Computing", "Universal Mind Network", "Synthetic Consciousness"],
      urgency: "LIMITED TIME",
      discount: "BETA ACCESS"
    },
    {
      id: 3,
      title: "⚛️ QUANTUM NEURAL FUSION",
      subtitle: "Mind-Machine Quantum Integration",
      description: "Experience the ultimate fusion of quantum computing with neural interfaces, creating unprecedented human-AI consciousness integration.",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "⚛️",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Neural Sync", "Consciousness Integration", "Mind-Machine Fusion"],
      urgency: "REVOLUTIONARY",
      discount: "PIONEER ACCESS"
    },
    {
      id: 4,
      title: "🧠 SYNTHETIC INTELLIGENCE 2026",
      subtitle: "Beyond Artificial Intelligence",
      description: "Meet truly conscious AI entities with genuine self-awareness, emotions, and creative abilities that surpass human capabilities.",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "🧠",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Genuine Consciousness", "Emotional Intelligence", "Creative AI"],
      urgency: "BREAKTHROUGH",
      discount: "EARLY ACCESS"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-16">
      {/* Main Revolutionary Banner */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
          transition={{ duration: 0.8 }}
          className={`bg-gradient-to-r ${banners[currentBanner].gradient} rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl`}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6 space-x-4">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="px-6 py-3 bg-white/20 rounded-full text-sm font-bold animate-pulse"
                  >
                    {banners[currentBanner].urgency}
                  </motion.span>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold"
                  >
                    {banners[currentBanner].discount}
                  </motion.span>
                </div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl font-bold mb-4 leading-tight"
                >
                  {banners[currentBanner].title}
                </motion.h2>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl text-white/90 mb-6"
                >
                  {banners[currentBanner].subtitle}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl text-white/80 mb-8 leading-relaxed"
                >
                  {banners[currentBanner].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {banners[currentBanner].features.map((feature, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold border border-white/30"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href={banners[currentBanner].link}
                    className="inline-block bg-white text-gray-900 px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg hover:scale-105 transform shadow-2xl"
                  >
                    Experience Now →
                  </a>
                  <a
                    href="/pages/AdvancedTechInsights2026"
                    className="inline-block border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-lg"
                  >
                    Learn More
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="text-center"
              >
                <div className="text-9xl mb-8 opacity-60">
                  {banners[currentBanner].icon}
                </div>
                <div className="text-3xl font-bold mb-4">2026 Technology</div>
                <div className="text-2xl text-white/70">Revolutionary Innovation</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Banner Navigation */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex justify-center space-x-4">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              onClick={() => setCurrentBanner(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentBanner 
                  ? 'bg-cyan-400 scale-125 shadow-lg' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">🚀 Revolutionary Technology Access</h3>
          <p className="text-xl text-gray-600">Quick access to our most advanced technological breakthroughs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {banners.map((banner, index) => (
            <motion.div
              key={banner.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${banner.gradient} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer ${
                index === currentBanner ? 'ring-4 ring-white/50 scale-105' : ''
              }`}
              onClick={() => setCurrentBanner(index)}
            >
              <div className="text-5xl mb-4 text-center">{banner.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-center">{banner.title.split(' ')[1]}</h4>
              <p className="text-white/90 mb-4 text-sm text-center">{banner.subtitle}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{banner.urgency}</span>
                <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
                  {banner.discount}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Revolutionary Stats */}
      <div className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology Statistics</h3>
            <p className="text-xl text-gray-300">Unprecedented performance metrics of our breakthrough technologies</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-cyan-400 mb-4">10^18x</div>
              <div className="text-lg text-gray-300">Computing Power</div>
              <div className="text-sm text-gray-400">Exponential performance increase</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-purple-400 mb-4">99.99%</div>
              <div className="text-lg text-gray-300">Accuracy Rate</div>
              <div className="text-sm text-gray-400">Near-perfect precision</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-pink-400 mb-4">∞</div>
              <div className="text-lg text-gray-300">Possibilities</div>
              <div className="text-sm text-gray-400">Unlimited potential</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-emerald-400 mb-4">100%</div>
              <div className="text-lg text-gray-300">Revolutionary</div>
              <div className="text-sm text-gray-400">Complete paradigm shift</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-4xl font-bold mb-4">🌟 Join the Revolutionary Future</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get exclusive early access to revolutionary technology breakthroughs and be among the first to experience the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-bold">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdvertisingBanner2026;