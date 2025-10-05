import React from 'react';
import { Link } from 'react-router-dom';

const BreakthroughContent2026Banner: React.FC = () => {
  return (
    <div className="breakthrough-content-2026-banner">
      <div className="banner-content">
        <h2>Breakthrough Content 2026</h2>
        <p>
          Discover breakthrough innovations and cutting-edge content for 2026.
        </p>
        <Link to="/blog/breakthrough-2026">
          Explore Breakthrough Content
        </Link>
      </div>
    </div>
  );
};

export default BreakthroughContent2026Banner;