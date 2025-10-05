import React from 'react';
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
      </div>
    </div>
  );
};

export default January2026ContentShowcaseBanner;