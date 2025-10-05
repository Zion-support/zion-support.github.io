import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisingBanner: React.FC = () => {
  return (
    <div className="advertising-banner">
      <div className="banner-content">
        <h3>Latest AI Insights</h3>
        <p>
          Discover the latest trends in AI and enterprise solutions.
        </p>
        <Link to='/blog/ai-2025-oct-01-vector-database-optimization-enterprise'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default AdvertisingBanner;