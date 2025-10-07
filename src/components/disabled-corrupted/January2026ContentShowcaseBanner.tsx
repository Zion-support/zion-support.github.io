import React from 'react';
import { Link } from 'react-router-dom';

const January2026ContentShowcaseBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            January 2026 Content Showcase
          </h2>
          <p className="text-xl mb-8">
            Discover the latest innovations and breakthrough technologies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">AI Revolution</h3>
              <p className="text-sm opacity-90">
                Next-generation artificial intelligence solutions
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
              <p className="text-sm opacity-90">
                Revolutionary quantum processing capabilities
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Autonomous Systems</h3>
              <p className="text-sm opacity-90">
                Self-managing and self-optimizing technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default January2026ContentShowcaseBanner;