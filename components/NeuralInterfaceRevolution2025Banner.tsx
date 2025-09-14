'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NeuralInterfaceRevolution2025Banner = () => {
  const [activeNeuron, setActiveNeuron] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNeuron((prev) => (prev + 1) % 5);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
          {[...Array(20)].map((_, i) => (
            <g key={i}>
              <circle
                cx={Math.random() * 100}
                cy={Math.random() * 100}
                r="0.5"
                fill="currentColor"
                className={`${i === activeNeuron ? 'animate-ping' : 'animate-pulse'}`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              />
              <line
                x1={Math.random() * 100}
                y1={Math.random() * 100}
                x2={Math.random() * 100}
                y2={Math.random() * 100}
                stroke="currentColor"
                strokeWidth="0.1"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            </g>
          ))}
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-emerald-400/30">
            <span className="text-sm font-medium">🧠 NEURAL INTERFACE REVOLUTION 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Direct Brain-Computer Interface
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Breakthrough neural interface technology that enables direct communication between human consciousness and artificial intelligence systems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-8 rounded-xl backdrop-blur-sm border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Thought Control</h3>
              <p className="text-sm opacity-90 mb-4">Control devices and software with your mind</p>
              <ul className="text-xs space-y-1">
                <li>• 99.7% accuracy rate</li>
                <li>• < 1ms response time</li>
                <li>• Non-invasive technology</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 p-8 rounded-xl backdrop-blur-sm border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300">
              <div className="text-5xl mb-4">💭</div>
              <h3 className="text-xl font-semibold mb-3">Memory Enhancement</h3>
              <p className="text-sm opacity-90 mb-4">Augment your cognitive capabilities</p>
              <ul className="text-xs space-y-1">
                <li>• 300% memory boost</li>
                <li>• Perfect recall system</li>
                <li>• Neural backup system</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-xl backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-xl font-semibold mb-3">Predictive Interface</h3>
              <p className="text-sm opacity-90 mb-4">AI anticipates your needs</p>
              <ul className="text-xs space-y-1">
                <li>• Preemptive actions</li>
                <li>• Contextual awareness</li>
                <li>• Seamless integration</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 rounded-2xl backdrop-blur-sm border border-emerald-400/20 mb-8">
            <h3 className="text-2xl font-bold mb-6">Revolutionary Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-emerald-400 mb-2">Medical Diagnostics</h4>
                <p className="text-xs opacity-90">Real-time brain activity monitoring for early disease detection</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-400 mb-2">Learning Enhancement</h4>
                <p className="text-xs opacity-90">Accelerated skill acquisition through neural optimization</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-400 mb-2">Communication</h4>
                <p className="text-xs opacity-90">Direct thought-to-text and telepathic communication</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Entertainment</h4>
                <p className="text-xs opacity-90">Immersive virtual experiences with full sensory input</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/neural-interface-2025"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Neural Tech
            </Link>
            <Link
              href="/neural-demo"
              className="border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300"
            >
              Try Neural Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralInterfaceRevolution2025Banner;