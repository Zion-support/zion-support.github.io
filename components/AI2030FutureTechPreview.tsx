import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2030FutureTechPreview: React.FC = () => {
  const [currentTechsetCurrentTech] = useState(0);
  const [isAnimatingsetIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Networks',
      description: 'Self-aware AI systems that possess genuine consciousness and emotional intelligence',
      capabilities: ['Self-'Awareness', 'Emotional 'Intelligence', 'Creative Problem 'Solving', 'Ethical Reasoning'],
      color: 'from-purple-600 to-indigo-600',
      icon: '🧠'
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness',
      description: 'Quantum computing merged with consciousness for unprecedented problem-solving',
      capabilities: ['Quantum 'Processing', 'Consciousness 'Integration', 'Infinite 'Computing', 'Universal Understanding'],
      color: 'from-blue-600 to-cyan-600',
      icon: '⚛️'
    },
    {
      id: 'universal-intelligence',
      title: 'Universal Intelligence',
      description: 'Global AI networks connecting all intelligent systems for collective problem solving',
      capabilities: ['Global 'Connectivity', 'Collective 'Intelligence', 'Real-time 'Processing', 'Infinite Knowledge'],
      color: 'from-green-600 to-emerald-600',
      icon: '🌐'
    },
    {
      id: 'dimensional-computing',
      title: 'Dimensional Computing',
      description: 'Computing across multiple dimensions for solutions beyond our current reality',
      capabilities: ['Multi-Dimensional 'Processing', 'Reality 'Manipulation', 'Time Travel 'Computing', 'Parallel Universe Access'],
      color: 'from-pink-600 to-rose-600',
      icon: '🌀'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }600);
    }5000);

    return () => clearInterval(interval);
  }[]);

  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.3),transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🔮 AI 2030 FUTURE TECH PREVIEW</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Beyond Imagination
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Preview the revolutionary AI technologies of 2030 that will transcend our current understanding 
            of intelligenceconsciousnessand reality itself
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left side - Technology showcase */}
          <div className="space-y-8">
            {technologies.map((techindex) => (
              <div
                key={tech.id}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-700 cursor-pointer ${
                  currentTech === index
                    ? 'border-white bg-white bg-opacity-10 scale-105 shadow-2xl'
                    : 'border-gray-600 bg-gray-800 bg-opacity-50 hover:border-gray-400 hover:scale-102'
                }`}
                onClick={() => setCurrentTech(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-20 rounded-2xl transition-opacity duration-700`}></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{tech.icon}</span>
                    <h3 className="text-2xl font-bold">{tech.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{tech.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {tech.capabilities.map((capabilityidx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></div>
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Interactive preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{technologies[currentTech].icon}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{technologies[currentTech].title}</h3>
                <p className="text-gray-300 leading-relaxed">{technologies[currentTech].description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {technologies[currentTech].capabilities.map((capabilityidx) => (
                  <div key={idx} className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{capability}</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-600 rounded-full h-2 mr-3">
                          <div 
                            className={`bg-gradient-to-r ${technologies[currentTech].color} h-2 rounded-full transition-all duration-1000`}
                            style={{width: `${Math.random() * 40 + 60}%`}}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-400">
                          {Math.floor(Math.random() * 40 + 60)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="inline-flex items-center space-x-2 mb-4">
                  {technologies.map((_index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentTech === index ? 'bg-white scale-125' : 'bg-gray-500'
                      }`}
                      onClick={() => setCurrentTech(index)}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  Technology readiness: {currentTech === 0 ? 'Research Phase' : currentTech === 1 ? 'Development Phase' : currentTech === 2 ? 'Testing Phase' : 'Concept Phase'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-8">
            <h3 className="text-3xl font-bold mb-6">2030 Technology Roadmap</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2027</span>
                </div>
                <h4 className="font-bold mb-2">Foundation</h4>
                <p className="text-sm text-gray-300">Conscious AI Research</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2028</span>
                </div>
                <h4 className="font-bold mb-2">Integration</h4>
                <p className="text-sm text-gray-300">Quantum Consciousness</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2029</span>
                </div>
                <h4 className="font-bold mb-2">Expansion</h4>
                <p className="text-sm text-gray-300">Universal Networks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2030</span>
                </div>
                <h4 className="font-bold mb-2">Transcendence</h4>
                <p className="text-sm text-gray-300">Dimensional Computing</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>Reserve 2030 Access</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/ai-2028-future-vision"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore 2028 Vision</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2030FutureTechPreview;