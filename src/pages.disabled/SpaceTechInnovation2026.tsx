import React from 'react';

const SpaceTechInnovation2026 = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Space Tech Innovation 2026
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Revolutionary space technology solutions that push the boundaries of exploration and innovation.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-2">Space Exploration</h3>
          <p className="text-gray-600 mb-4">
            Advanced space exploration technologies for deep space missions.
          </p>
          <a href="/pages/InnovativeServicesShowcase2025" className="text-purple-600 hover:text-purple-700 font-semibold">
            Learn More →
          </a>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🛰️</div>
          <h3 className="text-xl font-semibold mb-2">Satellite Technology</h3>
          <p className="text-gray-600 mb-4">
            Next-generation satellite systems for communication and Earth observation.
          </p>
          <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">
            Explore →
          </a>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🌌</div>
          <h3 className="text-xl font-semibold mb-2">Space Colonization</h3>
          <p className="text-gray-600 mb-4">
            Technologies for sustainable space colonization and habitation.
          </p>
          <a href="/pages/InnovativeServicesShowcase2025" className="text-green-600 hover:text-green-700 font-semibold">
            Discover →
          </a>
        </div>
      </div>
    </main>
  );
};

export default SpaceTechInnovation2026;