import React from 'react';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            Advanced Robotics 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary robotics solutions that redefine automation and human-robot interaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">🤖 Autonomous Robots</h3>
            <p className="text-gray-200">
              Fully autonomous robots with advanced AI and machine learning capabilities.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">⚡ Human-Robot Collaboration</h3>
            <p className="text-gray-200">
              Advanced robotics systems designed for seamless human-robot collaboration.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-green-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">🔮 Quantum Robotics</h3>
            <p className="text-gray-200">
              Quantum-enhanced robotics with unprecedented precision and capabilities.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/services"
            className="px-10 py-5 bg-gradient-to-r from-green-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Advanced Robotics →
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;