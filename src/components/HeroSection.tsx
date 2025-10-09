'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Phone } from 'lucide-react';

interface HeroSectionProps {
  isLoaded: boolean;
  isVisible: boolean;
  onPhoneClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isLoaded, isVisible, onPhoneClick }) => {
  return (
    <section
      className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
        isLoaded && isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h1
          id="hero-heading"
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch"
          data-text="Zion Tech Group"
        >
          Zion Tech Group
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Leading the future of AI and IT solutions. Transform your business with 
          cutting-edge technology, quantum computing, and autonomous systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/contact"
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <button
            onClick={onPhoneClick}
            className="group bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI Solutions</h3>
            <p className="text-gray-400 text-sm">
              Advanced artificial intelligence and machine learning solutions for enterprise.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">IT Services</h3>
            <p className="text-gray-400 text-sm">
              Comprehensive IT infrastructure and cloud solutions for modern businesses.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Play className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-400 text-sm">
              Cutting-edge technology and digital transformation services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;