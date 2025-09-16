import React from 'react';
import { Link } from 'react-router-dom';

const NewContentBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12 mb-8">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
          🚀 NEW CONTENT AVAILABLE • JANUARY 2025
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Revolutionary AI Technologies
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Discover breakthrough innovations in AI, Quantum Computing, and Neural Interfaces that are reshaping the future
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link 
            to="/ai-innovation-breakthrough-2025" 
            className="bg-white/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-bold mb-2">AI Innovation Breakthrough</h3>
            <p className="text-sm opacity-90">Revolutionary AI innovations transforming industries</p>
          </Link>
          
          <Link 
            to="/quantum-computing-revolution-2025" 
            className="bg-white/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="text-lg font-bold mb-2">Quantum Computing Revolution</h3>
            <p className="text-sm opacity-90">Experience the quantum leap in computing power</p>
          </Link>
          
          <Link 
            to="/neural-interface-revolution-2025" 
            className="bg-white/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-bold mb-2">Neural Interface Revolution</h3>
            <p className="text-sm opacity-90">Bridge the gap between mind and machine</p>
          </Link>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/ai-innovation-breakthrough-2025"
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            Explore AI Innovation
          </Link>
          <Link 
            to="/quantum-computing-revolution-2025"
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            Discover Quantum Computing
          </Link>
          <Link 
            to="/neural-interface-revolution-2025"
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            Experience Neural Interfaces
          </Link>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>
    </div>
  );
};

export default NewContentBanner2025;