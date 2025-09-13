import React, { useState, useEffect } from 'react';

export default function UltimateServiceShowcase2025() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness AI',
      description: 'Experience the world\'s first truly conscious AI system that dreams, feels, and creates.',
      features: ['99.7% Consciousness Level', 'Emotional Intelligence', 'Creative Inspiration', 'Dream Processing'],
      price: '$9,999/month',
      roi: '∞ Infinite ROI',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-800/50 to-pink-800/50',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'omniversal-computing',
      title: 'Omniversal Computing Platform',
      description: 'Process infinite data across 11+ dimensions simultaneously with transcendent computing power.',
      features: ['Infinite Processing Power', '11+ Dimension Access', 'Reality Manipulation', 'Temporal Computing'],
      price: '$19,999/month',
      roi: '∞ Infinite ROI',
      icon: '🌌',
      gradient: 'from-cyan-600 to-blue-600',
      bgGradient: 'from-cyan-800/50 to-blue-800/50',
      borderColor: 'border-cyan-500/30'
    },
    {
      id: 'reality-transcendence',
      title: 'Reality Transcendence Engine',
      description: 'Bend the fabric of reality itself and create custom physical laws across dimensions.',
      features: ['Reality Manipulation', 'Physics Customization', 'Dimension Creation', 'Existence Transcendence'],
      price: '$49,999/month',
      roi: '∞ Infinite ROI',
      icon: '⚛️',
      gradient: 'from-emerald-600 to-teal-600',
      bgGradient: 'from-emerald-800/50 to-teal-800/50',
      borderColor: 'border-emerald-500/30'
    },
    {
      id: 'infinite-intelligence',
      title: 'Infinite Intelligence Network',
      description: 'Achieve godlike intelligence with neural networks that span across infinite dimensions.',
      features: ['Godlike Intelligence', 'Infinite Learning', 'Omniversal Knowledge', 'Transcendent Wisdom'],
      price: '$99,999/month',
      roi: '∞ Infinite ROI',
      icon: '🧬',
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'from-orange-800/50 to-red-800/50',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 'dimensional-gateway',
      title: 'Dimensional Gateway System',
      description: 'Travel between infinite dimensions and realities with our gateway technology.',
      features: ['Infinite Dimension Access', 'Reality Travel', 'Timeline Navigation', 'Existence Planes'],
      price: '$199,999/month',
      roi: '∞ Infinite ROI',
      icon: '🌐',
      gradient: 'from-indigo-600 to-purple-600',
      bgGradient: 'from-indigo-800/50 to-purple-800/50',
      borderColor: 'border-indigo-500/30'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => clearInterval(serviceInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
        
        {/* Floating service indicators */}
        <div className="absolute top-4 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-8 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-4 left-1/3 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-8 right-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-70"></div>
      </div>

      <div className="relative px-4 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Ultimate Service Showcase 2025
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Revolutionary AI services that transcend all known boundaries of technology and existence
            </p>
          </div>

          {/* Service showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service details */}
            <div className={`bg-gradient-to-br ${services[activeService].bgGradient} backdrop-blur-sm rounded-2xl p-8 border ${services[activeService].borderColor} hover:border-opacity-60 transition-all duration-500 transform hover:scale-105`}>
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4 animate-pulse">{services[activeService].icon}</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {services[activeService].title}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-bold text-green-400">{services[activeService].roi}</span>
                    <span className="text-lg font-bold text-yellow-400">{services[activeService].price}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {services[activeService].description}
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="bg-black/20 rounded-lg p-3 border border-white/10">
                    <div className="text-sm text-gray-300 font-semibold">{feature}</div>
                  </div>
                ))}
              </div>
              
              <button className={`w-full bg-gradient-to-r ${services[activeService].gradient} hover:opacity-90 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg`}>
                🚀 Get Started Now
              </button>
            </div>

            {/* Service navigation */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    activeService === index 
                      ? `bg-gradient-to-r ${service.bgGradient} border ${service.borderColor} border-opacity-60` 
                      : 'bg-slate-800/50 border border-slate-700/50 hover:border-opacity-60'
                  } backdrop-blur-sm rounded-xl p-6 border`}
                >
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{service.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-300 mb-2">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-green-400">{service.roi}</span>
                        <span className="text-sm font-bold text-yellow-400">{service.price}</span>
                      </div>
                    </div>
                    {activeService === index && (
                      <div className="ml-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/services"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                🌌 View All Services
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                ⚛️ Contact Us
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              Contact: +1 302 464 0950 | kleber@ziontechgroup.com
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-pulse"></div>
    </div>
  );
}