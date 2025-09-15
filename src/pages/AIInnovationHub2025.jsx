import React from 'react';

const AIInnovationHub2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Innovation Hub 2025</h1>
          <p className="text-xl text-gray-700">
            Central hub for AI innovation and development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🧠</div>
            <h2 className="text-2xl font-bold mb-4">AI Research</h2>
            <p className="text-gray-600">
              Cutting-edge AI research and development initiatives.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🔬</div>
            <h2 className="text-2xl font-bold mb-4">Innovation Lab</h2>
            <p className="text-gray-600">
              Innovation laboratory for AI experimentation and testing.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold mb-4">Startups</h2>
            <p className="text-gray-600">
              AI startup incubation and acceleration programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AIInnovationHub2025;
