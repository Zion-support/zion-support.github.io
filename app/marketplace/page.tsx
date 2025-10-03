import React from 'react';

const MarketplacePage: React.FC = () => {
  return (
    <div className="text-left">
      <div className="text-left">
        <h1 className="text-left">
          Marketplace
        </h1>
        <div className="text-left">
          <div className="text-left">
            <h3 className="text-left">AI Solutions</h3>
            <p className="text-left">
              Browse our collection of AI-powered business solutions.
            </p>
            <button className="text-left">
              Explore
            </button>
          </div>
          <div className="text-left">
            <h3 className="text-left">Cloud Services</h3>
            <p className="text-left">
              Discover scalable cloud infrastructure and services.
            </p>
            <button className="text-left">
              Explore
            </button>
          </div>
          <div className="text-left">
            <h3 className="text-left">Development Tools</h3>
            <p className="text-left">
              Find tools and utilities to accelerate your development.
            </p>
            <button className="text-left">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;