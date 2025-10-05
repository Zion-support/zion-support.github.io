import React from 'react';

const January2026ContentShowcaseBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          January 2026 Content Showcase
        </h2>
        <p className="text-lg mb-6">
          Discover the latest innovations and breakthroughs in AI technology.
        </p>
        <ul className="space-y-2 text-sm text-gray-200">
          <li>• 94% reasoning accuracy improvement</li>
          <li>• Self-monitoring capabilities</li>
          <li>• Adaptive strategy selection</li>
          <li>• Meta-learning optimization</li>
        </ul>
      </div>
    </div>
  );
};

export default January2026ContentShowcaseBanner;