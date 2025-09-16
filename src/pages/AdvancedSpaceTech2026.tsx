import React from 'react';

const AdvancedSpaceTech2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      
      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Advanced Space Tech 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary space technology solutions for the next generation of space exploration
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Space Technology</h2>
            <p className="text-gray-300 mb-8">
              Our advanced space technology represents the cutting edge of aerospace engineering, 
              combining advanced propulsion systems, autonomous navigation, and AI-powered mission 
              control to enable unprecedented space exploration capabilities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Advanced propulsion systems</li>
                  <li>• Autonomous navigation and control</li>
                  <li>• AI-powered mission planning</li>
                  <li>• Life support and sustainability</li>
                  <li>• Interplanetary communication</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Applications</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Mars colonization missions</li>
                  <li>• Asteroid mining operations</li>
                  <li>• Deep space exploration</li>
                  <li>• Satellite constellation management</li>
                  <li>• Space tourism and commercial flights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSpaceTech2026;