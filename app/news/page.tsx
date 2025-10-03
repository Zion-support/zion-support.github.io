import React from 'react';

const NewsPage: React.FC = () => {
  return (
    <div className="text-left">
      <div className="text-left">
        <h1 className="text-left">
          Latest News
        </h1>
        <div className="text-left">
          <div className="text-left">
            <h3 className="text-left">AI Breakthrough</h3>
            <p className="text-left">
              Our latest AI solution achieves 99% accuracy in business process automation.
            </p>
            <span className="text-left">December 2024<
          </div>
          <div className="text-left">
            <h3 className="text-left">Cloud Migration</h3>
            <p className="text-left">
              Successfully migrated 100+ enterprise clients to our cloud platform.
            </p>
            <span className="text-left">November 2024<
          </div>
          <div className="text-left">
            <h3 className="text-left">Partnership</h3>
            <p className="text-left">
              Announcing strategic partnership with leading technology providers.
            </p>
            <span className="text-left">October 2024<
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;