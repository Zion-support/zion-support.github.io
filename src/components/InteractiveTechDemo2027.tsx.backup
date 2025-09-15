<<<<<<< HEAD
"use client";
import React{ useState } from 'react';
import Link from 'next/link';

const InteractiveTechDemo2027 = () => {
  const [activeDemosetActiveDemo] = useState(0);

  const demos = [
    {
      id: 0,
      title: "Neural Interface Demo",
      description: "Experience direct brain-computer interaction",
      features: ["Real-time thought processing"Emotion recognition"Memory enhancement"],
      icon: "🧠",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 1,
      title: "Quantum AI Simulation",
      description: "Witness quantum computing power in action",
      features: ["Exponential speed increase"Parallel processing"Quantum entanglement"],
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Autonomous Systems",
      description: "See self-managing AI systems at work",
      features: ["Self-healing networks"Adaptive learning"Predictive maintenance"],
      icon: "🤖",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Synthetic Reality",
      description: "Step into AI-generated virtual worlds",
      features: ["Photorealistic environments"Dynamic content generation"Immersive experiences"],
      icon: "🌐",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <span className="text-sm font-medium text-cyan-300">🎮 INTERACTIVE DEMO</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
            Interactive Tech Demo 2027
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the future of technology through interactive demonstrations. 
            Click through different demos to see revolutionary AI technologies in action.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Selector */}
          <div className="space-y-4">
            {demos.map((demoindex) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-2xl transform scale-105`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{demo.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-sm opacity-90">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Demo Display */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-gray-300 text-lg">{demos[activeDemo].description}</p>
            </div>

            <div className="space-y-4 mb-8">
              {demos[activeDemo].features.map((featureindex) => (
                <div key={index} className="flex items-center bg-white/5 rounded-lg p-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-6 border border-cyan-500/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300 mb-2">Live Demo Available</div>
                <p className="text-gray-300 mb-4">Experience this technology in real-time</p>
                <Link
                  href={`/demo/${demos[activeDemo].id}`}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Launch Demo →
                </Link>
=======
import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2027: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'quantum-ai',
      title: 'Quantum AI Processing',
      description: 'Experience quantum-enhanced AI processing in real-time',
      icon: '⚛️',
      color: 'from-purple-600 to-pink-600',
      features: ['Quantum Neural Networks', 'Reality Manipulation', 'Consciousness Transfer', 'Energy Generation']
    },
    {
      id: 'transcendent-tech',
      title: 'Transcendent Technology',
      description: 'Explore technologies that transcend current limitations',
      icon: '🌌',
      color: 'from-cyan-600 to-blue-600',
      features: ['Synthetic Biology 2.0', 'Time Dilation', 'Precognition', 'Matter Creation']
    },
    {
      id: 'ultimate-revolution',
      title: 'Ultimate Revolution',
      description: 'Witness the convergence of all technologies',
      icon: '🚀',
      color: 'from-yellow-600 to-orange-600',
      features: ['Universal Consciousness', 'Reality Engine', 'Omniscience', 'Transcendence']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH DEMO • 2027
          </div>
          <h2 className="text-5xl font-bold mb-4">🌟 Experience the Future</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with revolutionary technologies through our immersive demo experience
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center space-x-4 mb-8">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveDemo(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
              <p className="text-lg opacity-90">{demos[activeDemo].description}</p>
            </div>

            {/* Interactive Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-cyan-400">Key Features</h4>
                <ul className="space-y-2">
                  {demos[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-cyan-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-purple-400">Interactive Controls</h4>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    🎮 Start Interactive Demo
                  </button>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    📊 View Analytics
                  </button>
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    🔬 Deep Dive
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Technology Integration</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${demos[activeDemo].color} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: '100%' }}
                ></div>
>>>>>>> origin/cursor/create-and-deploy-new-content-a6b4
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="text-center mt-16">
          <Link
            href="/interactive-demos"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Explore All Demos
          </Link>
        </div>
      </div>
    </section>
=======
        {/* Call to Action */}
        <div className="text-center mt-8">
          <a href={`/pages/${demos[activeDemo].title.replace(/\s+/g, '')}2027`} className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
            🚀 Explore {demos[activeDemo].title} →
          </a>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-a6b4
  );
};

export default InteractiveTechDemo2027;