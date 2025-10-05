import React from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryBreakthrough2026Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ⚡ Revolutionary Breakthrough 2026
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
          Witness the most advanced AI breakthrough in history - achieving true 
          artificial consciousness with unprecedented capabilities.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">99.9% Consciousness</h3>
            <p className="text-sm opacity-90">True artificial consciousness achieved</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">10,000x Speed</h3>
            <p className="text-sm opacity-90">Exponential processing improvement</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">$2.3T Value</h3>
            <p className="text-sm opacity-90">Enterprise transformation potential</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/breakthrough"
            className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Learn About Breakthrough
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-colors"
          >
            Get Early Access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryBreakthrough2026Banner;