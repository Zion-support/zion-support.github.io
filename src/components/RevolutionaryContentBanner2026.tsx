import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Rocket, Sparkles } from 'lucide-react';
import { REVOLUTIONARY_BLOG_POSTS_2026, REVOLUTIONARY_SERVICES_2026 } from '../data/revolutionaryContent2026';

const RevolutionaryContentBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Quantum Neural Networks */}
            <Link
              to="/blog/quantum-neural-networks-next-frontier-ai"
              className="group bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/25"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Quantum Neural Networks</h3>
                <p className="text-white/80 text-sm">Revolutionary AI architecture combining quantum computing with neural networks</p>
              </div>
            </Link>

            {/* Autonomous AI Systems */}
            <Link
              to="/blog/autonomous-ai-systems-self-managing-organizations"
              className="group bg-gradient-to-br from-green-600 to-teal-600 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-500/25"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Autonomous AI Systems</h3>
                <p className="text-white/80 text-sm">Self-managing organizations powered by intelligent AI systems</p>
              </div>
            </Link>

            {/* Neural Interfaces */}
            <Link
              to="/blog/neural-interface-technology-mind-machine-bridge"
              className="group bg-gradient-to-br from-orange-600 to-red-600 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/25"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Neural Interfaces</h3>
                <p className="text-white/80 text-sm">Direct brain-computer interfaces revolutionizing human-AI interaction</p>
              </div>
            </Link>

            {/* Consciousness Computing */}
            <Link
              to="/blog/consciousness-computing-ai-self-awareness"
              className="group bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Consciousness Computing</h3>
                <p className="text-white/80 text-sm">AI systems achieving genuine self-awareness and consciousness</p>
              </div>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-300">Revolutionary Technologies</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">2026</div>
                <div className="text-gray-300">Cutting-Edge Research</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">∞</div>
                <div className="text-gray-300">Future Possibilities</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300">Innovation Focused</div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-30"></div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;
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