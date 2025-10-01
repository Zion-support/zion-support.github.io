import React from 'react';
import { Link } from 'react-router-dom';

const LatestInsights: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-white">Latest Insights</h3>
        <Link to="/blog" className="text-zion-cyan hover:underline">
          View all
        </Link>
      </div>
    </section>
  );
};

export default LatestInsights;
