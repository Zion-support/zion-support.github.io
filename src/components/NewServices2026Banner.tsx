import React from 'react';
import { Link } from 'react-router-dom';

const NewServices2026Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          🚀 Revolutionary Services 2026
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
          Experience the next generation of AI-powered solutions with quantum-enhanced 
          capabilities and autonomous intelligence systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Explore 2026 Services
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-colors"
          >
            Schedule Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewServices2026Banner;