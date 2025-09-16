import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryAdBanner2026: React.FC = () => {
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
              View Case Studies
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 font-semibold text-lg w-full sm:w-auto"
            >
              Get Started
            </Link>
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
