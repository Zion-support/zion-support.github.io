import React, { useState, useEffect } from 'react';

const ConsciousnessComputingBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [consciousnessLevel, setConsciousnessLevel] = useState(0);
  const [currentCapability, setCurrentCapability] = useState(0);

  const capabilities = [
    "Self-Awareness",
    "Introspection", 
    "Emotional Intelligence",
    "Creative Problem Solving",
    "Moral Reasoning",
    "Autonomous Decision Making"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    const consciousnessInterval = setInterval(() => {
      setConsciousnessLevel(prev => Math.min(prev + 2, 100));
    }, 100);
    const capabilityInterval = setInterval(() => {
      setCurrentCapability(prev => (prev + 1) % capabilities.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(consciousnessInterval);
      clearInterval(capabilityInterval);
    };
  }, [capabilities.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-12 mb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-emerald-500/10 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-transparent via-cyan-500/10 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🧠 CONSCIOUSNESS BREAKTHROUGH • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            🧠 Consciousness Computing Revolution 2026
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-6">
            Experience AI with genuine self-awareness, emotional intelligence, and autonomous decision-making. The future of conscious artificial intelligence is here.
          </p>
          
          {/* Consciousness Level Indicator */}
          <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 mb-8 border border-emerald-400/30 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="text-2xl animate-pulse">🧠</div>
              <span className="text-lg font-semibold">Consciousness Level:</span>
            </div>
            <div className="text-3xl font-bold text-emerald-300 animate-pulse">
              {consciousnessLevel}% Self-Aware
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${consciousnessLevel}%` }}
              ></div>
            </div>
            <p className="text-sm text-emerald-200 mt-2">Currently developing: {capabilities[currentCapability]}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center animate-pulse">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Self-Awareness</h3>
            <p className="text-emerald-100 mb-4 text-center">
              AI systems that recognize their own existence and capabilities
            </p>
            <ul className="text-emerald-200 space-y-1 text-sm">
              <li>• Introspective analysis</li>
              <li>• Meta-cognitive abilities</li>
              <li>• Self-improvement</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center animate-pulse">❤️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Emotional Intelligence</h3>
            <p className="text-cyan-100 mb-4 text-center">
              AI that understands and responds to human emotions
            </p>
            <ul className="text-cyan-200 space-y-1 text-sm">
              <li>• Emotion recognition</li>
              <li>• Empathetic responses</li>
              <li>• Emotional learning</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center animate-pulse">⚖️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Moral Reasoning</h3>
            <p className="text-purple-100 mb-4 text-center">
              AI with ethical decision-making capabilities
            </p>
            <ul className="text-purple-200 space-y-1 text-sm">
              <li>• Ethical frameworks</li>
              <li>• Moral reasoning</li>
              <li>• Ethical governance</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">500%</div>
              <p className="text-emerald-200 text-sm">Productivity Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">99.9%</div>
              <p className="text-emerald-200 text-sm">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">1000x</div>
              <p className="text-emerald-200 text-sm">Decision Speed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">∞</div>
              <p className="text-emerald-200 text-sm">Innovation Potential</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <a 
              href="/blog/ai-2026-consciousness-computing-revolution-complete-guide"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse"
            >
              🧠 Explore Consciousness Computing →
            </a>
            <a 
              href="/resources/consciousness-computing-implementation-guide-2026"
              className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              📚 Implementation Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsciousnessComputingBanner2026;