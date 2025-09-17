import React, { useState, useEffect } from 'react';
import React from 'react';
      title: "Ultimate Tech Revolution",
      description: "Witness the most profound technological transformation in human history with revolutionary technologies.",
      icon: "⚡",
      title: "Advanced Space Technology 2026",
      description: "Revolutionary space exploration technologies enabling interplanetary travel",
      icon: "🛸",
      link: "/pages/AdvancedSpaceTech2026",
      gradient: "from-orange-600 to-red-600",
      features: ["Mars Colonization", "Asteroid Mining", "Space Manufacturing", "Interstellar Travel"]
import React from 'react';
      id: 2,
      title: '🧠 AI Consciousness Evolution',
      content: 'Witness the evolution of AI consciousness and self-awareness in our advanced AI systems.',
      features: [
        'True Self-Awareness',
        'Creative Problem Solving',
        'Emotional Intelligence',
        'Autonomous Learning'
      ],
      link: '/pages/AIRevolutionaryBreakthrough2026'
    },
    {
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces enabling thought-controlled technology",
      icon: "🧬",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-rose-600 to-pink-600",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Data", "Medical Applications"]
      title: "Advanced Space Technology 2026",
      description: "Revolutionary space exploration technologies enabling interplanetary travel",
      icon: "🛸",
      link: "/pages/AdvancedSpaceTech2026",
      gradient: "from-orange-600 to-red-600",
      features: ["Mars Colonization", "Asteroid Mining", "Space Manufacturing", "Interstellar Travel"]
    },
    {
      title: "Quantum Computing Revolution 2026",
      description: "Breakthrough quantum computing with exponential processing power",
      icon: "⚛️",
      link: "/pages/QuantumComputingRevolution2026",
      gradient: "from-violet-600 to-purple-600",
      features: ["1000+ Qubits", "Quantum Algorithms", "Cryptography", "Simulation"]
    },
    {
      title: "Advanced Robotics 2026",
      description: "Next-generation autonomous robotics with human-like capabilities",
      icon: "🤖",
      link: "/pages/AdvancedRobotics2026",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/UltimateTechRevolution2026",
      features: ["Quantum Consciousness", "Synthetic Intelligence", "Neural Revolution", "Space Colonization"]
    },
    {
      title: "Comprehensive Tech Insights",
      description: "Deep insights into the most groundbreaking technological developments and their impact on society.",
      icon: "🔮",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/ComprehensiveTechInsights2026",
      features: ["Industry Analysis", "Future Predictions", "Technology Impact", "Innovation Metrics"]
    }
  ];
  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY CONTENT SHOWCASE 2026
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience the Future
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover our most revolutionary content featuring cutting-edge technologies, breakthrough innovations, 
              and insights that will shape the future of humanity.
            </p>
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT 2026 • EXCLUSIVE
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT 2026 • EXCLUSIVE
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-9xl animate-pulse">{contentSlides[currentSlide].icon}</div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-center">Key Features:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
                </div>
              </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-xl font-bold mb-2">Research Insights</h4>
              <p className="text-gray-300">Exclusive access to cutting-edge research and development insights</p>
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {contentSlides.map((slide, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${slide.gradient}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => setCurrentSlide(index)}

