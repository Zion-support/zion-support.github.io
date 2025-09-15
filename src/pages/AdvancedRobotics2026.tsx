import React from 'react';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🤖 ADVANCED ROBOTICS • 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Advanced Robotics 2026
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the future of robotics with our advanced autonomous systems, 
            humanoid robots, and intelligent automation solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-800/50 to-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Humanoid Robots</h3>
            <p className="text-gray-300 mb-4">
              Advanced humanoid robots with human-like dexterity and intelligence.
            </p>
            <a href="#" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Learn More →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
            <div className="text-4xl mb-4">🦾</div>
            <h3 className="text-2xl font-bold mb-4">Exoskeletons</h3>
            <p className="text-gray-300 mb-4">
              Powered exoskeletons for enhanced human strength and mobility.
            </p>
            <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🏭</div>
            <h3 className="text-2xl font-bold mb-4">Industrial Automation</h3>
            <p className="text-gray-300 mb-4">
              Smart manufacturing robots for precision and efficiency.
            </p>
            <a href="#" className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Learn More →
            </a>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Robotics Performance Metrics</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-400">Precision</h3>
                <div className="space-y-2">
                  <div className="text-green-400 font-mono text-sm">Accuracy: 99.9%</div>
                  <div className="text-green-400 font-mono text-sm">Repeatability: ±0.01mm</div>
                  <div className="text-green-400 font-mono text-sm">Speed: 1000x human</div>
                </div>
              </div>
              
              <div className="bg-black/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Intelligence</h3>
                <div className="space-y-2">
                  <div className="text-blue-400 font-mono text-sm">AI Processing: 1000 TOPS</div>
                  <div className="text-blue-400 font-mono text-sm">Learning Rate: 10x faster</div>
                  <div className="text-blue-400 font-mono text-sm">Decision Time: <1ms</div>
                </div>
              </div>
              
              <div className="bg-black/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Durability</h3>
                <div className="space-y-2">
                  <div className="text-purple-400 font-mono text-sm">Uptime: 99.9%</div>
                  <div className="text-purple-400 font-mono text-sm">Lifespan: 10+ years</div>
                  <div className="text-purple-400 font-mono text-sm">Maintenance: Self-healing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;