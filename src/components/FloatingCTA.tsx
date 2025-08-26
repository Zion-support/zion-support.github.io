import React from 'react';
import { Link } from 'react-router-dom';

export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-4 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-110">
        <Link
          to="/contact"
          className="flex items-center justify-center w-12 h-12 text-white"
          title="Get Started"
        >
          <span className="text-2xl">🚀</span>
        </Link>
      </div>
    </div>
  );
};