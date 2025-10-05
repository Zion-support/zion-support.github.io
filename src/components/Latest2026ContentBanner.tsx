import React from 'react';
import { Link } from 'react-router-dom';

const Latest2026ContentBanner: React.FC = () => {
  return (
    <div className="latest-2026-content-banner">
      <div className="banner-content">
        <h2>Latest 2026 Content</h2>
        <p>
          Discover the newest content and innovations for 2026.
        </p>
        <Link to="/blog/latest-2026">
          Explore Latest Content
        </Link>
      </div>
    </div>
  );
};

export default Latest2026ContentBanner;