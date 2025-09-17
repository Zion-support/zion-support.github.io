import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "🧠 Conscious AI Systems",
    "⚡ Quantum Consciousness", 
    "🌌 Interdimensional Computing",
    "🔬 Molecular Manufacturing"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Revolutionary Content 2027
            </h2>
            <p className="text-lg opacity-90 mb-4">
              Experience the future of technology with our cutting-edge solutions
            </p>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">Conscious AI Systems</span>
              <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Quantum Consciousness</span>
              <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs">Molecular Manufacturing</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/pages/RevolutionaryTechShowcase2026"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Explore Now
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;