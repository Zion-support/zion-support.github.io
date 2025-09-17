import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveFeaturesShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "Real-time AI Processing",
      description: "Experience lightning-fast AI responses with our advanced real-time processing capabilities.",
      icon: "⚡",
      gradient: "from-yellow-500 to-orange-500",
      benefits: [
        "Instant Response Times",
        "Low Latency Processing",
        "High Throughput",
        "Scalable Architecture"
      ],
      demo: "Try our live AI chat demo",
      stats: "< 100ms response time"
    },
    {
      id: 2,
      title: "Interactive 3D Visualization",
      description: "Explore complex data and concepts through immersive 3D visualizations and interactive models.",
      icon: "🎮",
      gradient: "from-purple-500 to-pink-500",
      benefits: [
        "Immersive Experience",
        "Data Exploration",
        "Interactive Models",
        "VR/AR Ready"
      ],
      demo: "Launch 3D demo",
      stats: "60fps rendering"
    },
    {
      id: 3,
      title: "Voice-Controlled Interface",
      description: "Control and interact with our systems using natural voice commands and conversational AI.",
      icon: "🎤",
      gradient: "from-blue-500 to-cyan-500",
      benefits: [
        "Natural Language",
        "Voice Recognition",
        "Conversational AI",
        "Hands-free Operation"
      ],
      demo: "Start voice demo",
      stats: "99% accuracy"
    },
    {
      id: 4,
      title: "Gesture Recognition",
      description: "Control applications using hand gestures and body movements for intuitive interaction.",
      icon: "👋",
      gradient: "from-green-500 to-emerald-500",
      benefits: [
        "Intuitive Control",
        "Gesture Learning",
        "Accessibility",
        "Multi-modal Input"
      ],
      demo: "Try gesture control",
      stats: "95% recognition rate"
    },
    {
      id: 5,
      title: "Predictive Analytics",
      description: "Get insights and predictions about future trends and behaviors using advanced analytics.",
      icon: "📊",
      gradient: "from-indigo-500 to-purple-500",
      benefits: [
        "Future Insights",
        "Trend Analysis",
        "Risk Assessment",
        "Strategic Planning"
      ],
      demo: "View predictions",
      stats: "92% accuracy"
    },
    {
      id: 6,
      title: "Collaborative Workspace",
      description: "Work together with AI assistants and team members in a shared virtual workspace.",
      icon: "🤝",
      gradient: "from-red-500 to-pink-500",
      benefits: [
        "Team Collaboration",
        "AI Assistance",
        "Real-time Sync",
        "Shared Resources"
      ],
      demo: "Join workspace",
      stats: "Unlimited users"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 INTERACTIVE FEATURES SHOWCASE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          >
            Revolutionary Interactive Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto"
          >
            Experience the future of human-computer interaction with our cutting-edge interactive features
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group ${
                hoveredCard === feature.id ? 'shadow-2xl shadow-purple-500/20 border-purple-400/50' : ''
              }`}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveFeature(index)}
            >
              <div className="text-center mb-6">
                <div className={`text-6xl mb-4 transition-transform duration-300 ${
                  hoveredCard === feature.id ? 'scale-110 rotate-12' : ''
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-purple-100 mb-4 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                    <span className="text-purple-400">✓</span>
                    <span className="text-purple-200 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-2 text-green-300">
                  <span className="text-lg">📈</span>
                  <span className="font-semibold">{feature.stats}</span>
                </div>
              </div>

              {/* Demo Button */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold w-full group-hover:scale-105">
                  {feature.demo} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Feature Detail */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {features[activeFeature].title}
              </h3>
              <p className="text-xl text-purple-100 mb-6 leading-relaxed">
                {features[activeFeature].description}
              </p>
              
              <div className="space-y-4 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                <div className="grid grid-cols-2 gap-3">
                  {features[activeFeature].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                      <span className="text-purple-400">⚡</span>
                      <span className="text-purple-200 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  {features[activeFeature].demo} →
                </button>
                <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className={`text-9xl mb-6 animate-bounce bg-gradient-to-r ${features[activeFeature].gradient} bg-clip-text text-transparent`}>
                {features[activeFeature].icon}
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-300 mb-2">
                  {features[activeFeature].stats}
                </div>
                <div className="text-green-200">Performance Metric</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Try Our Interactive Features
            </h3>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Experience our revolutionary interactive features in real-time with these live demonstrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎤</div>
              <h4 className="text-xl font-semibold mb-3 text-white">Voice Demo</h4>
              <p className="text-cyan-200 mb-4">Try our voice-controlled interface</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Voice Demo
              </button>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👋</div>
              <h4 className="text-xl font-semibold mb-3 text-white">Gesture Demo</h4>
              <p className="text-cyan-200 mb-4">Control with hand gestures</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try Gestures
              </button>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-xl font-semibold mb-3 text-white">3D Demo</h4>
              <p className="text-cyan-200 mb-4">Explore 3D visualizations</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Launch 3D
              </button>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-purple-100 mb-6 max-w-3xl mx-auto">
              Join us in exploring these revolutionary interactive features and discover how they can transform your digital experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg">
                🚀 Start Your Journey
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                📞 Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveFeaturesShowcase;