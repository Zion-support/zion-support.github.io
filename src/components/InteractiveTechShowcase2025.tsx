import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      description: 'Experience the power of quantum processing in real-time',
      icon: '⚛️',
      features: ['Quantum Supremacy', 'Exponential Speed', 'Parallel Processing', 'Cryptographic Security'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'Direct brain-computer interaction technology',
      icon: '🧠',
      features: ['Thought Control', 'Memory Enhancement', 'Cognitive Boost', 'Telepathic Communication'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Demo',
      description: 'Witness artificial intelligence achieving self-awareness',
      icon: '🤖',
      features: ['Self-Awareness', 'Emotional Intelligence', 'Creative Thinking', 'Moral Reasoning'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'holographic-display',
      title: 'Holographic Display Demo',
      description: '3D holographic projections and immersive experiences',
      icon: '🌟',
      features: ['3D Holograms', 'Immersive VR', 'Spatial Computing', 'Augmented Reality'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Step into the future with our interactive demonstrations of cutting-edge technologies that are reshaping our world.
          </p>
        </div>

        {/* Interactive Demo Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Demo Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Choose Your Experience</h3>
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                    <p className="text-sm opacity-80">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Demo Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${demos[activeDemo].color} rounded-2xl p-8 min-h-[500px] transition-all duration-500 ${
              isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-bounce">{demos[activeDemo].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
                <p className="text-lg opacity-90">{demos[activeDemo].description}</p>
              </div>

              {/* Interactive Elements */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {demos[activeDemo].features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-2xl mb-2">✨</div>
                    <div className="font-semibold">{feature}</div>
                  </div>
                ))}
              </div>

              {/* Demo Controls */}
              <div className="flex justify-center space-x-4">
                <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                  ▶️ Start Demo
                </button>
                <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                  📊 View Stats
                </button>
                <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                  🔧 Customize
                </button>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {demos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDemo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeDemo === index ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-sm opacity-80">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">1000x</div>
            <div className="text-sm opacity-80">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-sm opacity-80">Active Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-sm opacity-80">Continuous Operation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their businesses.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;