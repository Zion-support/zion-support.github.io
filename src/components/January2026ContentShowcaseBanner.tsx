import React from 'react';
<<<<<<< HEAD

const January2026ContentShowcaseBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          January2026 Content Showcase Banner
        </h2>
        <p className="text-lg mb-6">
          This component is being restored. Please check back later for full functionality.
        </p>
=======
import { Link } from 'react-router-dom';

const January2026ContentShowcaseBanner: React.FC = () => {
  return (
    <div className="january-2026-content-showcase-banner">
      <div className="banner-content">
        <h2>January 2026 Content Showcase</h2>
        <p>
          Discover the latest innovations and breakthroughs in AI technology.
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• 94% reasoning accuracy improvement</li>
          <li>• Self-monitoring capabilities</li>
          <li>• Adaptive strategy selection</li>
          <li>• Meta-learning optimization</li>
        </ul>
        <Link to="/blog/january-2026-showcase">
          Explore Content
        </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default January2026ContentShowcaseBanner;
=======
export default January2026ContentShowcaseBanner;
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
