import React from 'react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="text-left">
      <div className="text-left">
        <h1 className="text-left">
          Resources
        </h1>
        <div className="text-left">
          <div className="text-left">
            <h3 className="text-left">Documentation</h3>
            <p className="text-left">
              Comprehensive guides and API documentation for our solutions.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-left">White Papers</h3>
            <p className="text-left">
              In-depth research and insights on AI and technology trends.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-left">Case Studies</h3>
            <p className="text-left">
              Real-world examples of successful implementations and transformations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;