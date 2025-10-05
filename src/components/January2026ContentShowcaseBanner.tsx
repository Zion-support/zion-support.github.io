import React from 'react';

const January2026ContentShowcaseBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            January 2026 Content Showcase
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Discover the latest innovations and breakthroughs in AI technology
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Advanced AI</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 94% reasoning accuracy improvement</li>
                <li>• Self-monitoring capabilities</li>
                <li>• Adaptive strategy selection</li>
                <li>• Meta-learning optimization</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Performance</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 60% faster processing</li>
                <li>• 50% memory reduction</li>
                <li>• Real-time optimization</li>
                <li>• Scalable architecture</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Next-gen algorithms</li>
                <li>• Quantum-ready design</li>
                <li>• Edge computing support</li>
                <li>• Future-proof technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default January2026ContentShowcaseBanner;