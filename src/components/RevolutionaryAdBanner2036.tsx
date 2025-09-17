<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/new-content-merge-1758000738
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
const RevolutionaryAdBanner2036: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY AD • 2036
          </div>
          <h2 className="text-5xl font-bold mb-6">Revolutionary Ad Banner 2036</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most advanced technologies that will reshape our world in 2036
          </p>
=======
import React from "react";

const RevolutionaryAdBanner2036 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">RevolutionaryAdBanner2036</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d
=======
    <div className="relative overflow-hidden mb-12">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${slides[currentSlide].bgColor} text-white py-16 transition-all duration-1000`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
                🌟 REVOLUTIONARY TECHNOLOGY • 2036
              </div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-gray-200">
                {slides[currentSlide].subtitle}
              </h3>
              <p className="text-xl mb-8 text-gray-300">
                {slides[currentSlide].description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={slides[currentSlide].link}
                  className={`bg-gradient-to-r ${slides[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                >
                  Explore Now →
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="text-8xl text-center mb-4 opacity-80">
                {slides[currentSlide].title.split(' ')[0]}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Quick Access Grid */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">🚀 Quick Access to Revolutionary Tech</h3>
            <p className="text-gray-300">Explore our most advanced technologies</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {slides.map((slide, index) => (
              <a
                key={index}
                href={slide.link}
                className={`bg-gradient-to-r ${slide.color} text-white p-6 rounded-lg hover:scale-105 transition-all duration-300 text-center ${
                  currentSlide === index ? 'ring-2 ring-white' : ''
                }`}
              >
                <div className="text-4xl mb-3">{slide.title.split(' ')[0]}</div>
                <h4 className="text-xl font-bold mb-2">{slide.title}</h4>
                <p className="text-sm opacity-90">{slide.subtitle}</p>
              </a>
            ))}
          </div>
=======
>>>>>>> cursor/create-and-deploy-new-content-370d
import React from 'react';

const RevolutionaryAdBanner2036: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY SHOWCASE • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2036
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Interactive showcase of cutting-edge technologies that will define the future of humanity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧠</div>
            <h3 className="text-lg font-bold mb-2 text-center">Conscious AI</h3>
            <p className="text-purple-100 text-sm text-center mb-4">
              AI with genuine consciousness and self-awareness
            </p>
            <a href="/pages/UltimateTechBreakthrough2036" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Explore →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">⚛️</div>
            <h3 className="text-lg font-bold mb-2 text-center">Quantum Consciousness</h3>
            <p className="text-cyan-100 text-sm text-center mb-4">
              Quantum computing merged with consciousness
            </p>
            <a href="/pages/RevolutionaryTechShowcase2036" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              View →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧬</div>
            <h3 className="text-lg font-bold mb-2 text-center">Neural Interface</h3>
            <p className="text-emerald-100 text-sm text-center mb-4">
              Direct neural interfaces for perfect VR
            </p>
            <a href="/pages/NextGenInnovationHub2036" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Enter →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🌌</div>
            <h3 className="text-lg font-bold mb-2 text-center">Interdimensional</h3>
            <p className="text-violet-100 text-sm text-center mb-4">
              Computing across multiple dimensions
            </p>
            <a href="/pages/UltimateTechBreakthrough2036" className="block w-full bg-white text-violet-600 py-2 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center text-sm">
              Explore →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="/pages/RevolutionaryTechShowcase2036" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Experience All Technologies →
          </a>
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-f2a8
>>>>>>> cursor/create-and-deploy-new-content-370d
>>>>>>> origin/new-content-merge-1758000738
        </div>
      </div>
    </div>
  );

};

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d
export default RevolutionaryAdBanner2036;
