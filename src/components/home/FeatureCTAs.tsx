import React from 'react';

export const FeatureCTAs: React.FC = () => {
  return (
    <div className="feature-ctas">
      <h2>Our Services</h2>
      <div className="cta-grid">
        <div className="cta-card">
          <h3>AI Services</h3>
          <p>Cutting-edge AI solutions</p>
        </div>
        <div className="cta-card">
          <h3>Cloud Computing</h3>
          <p>Scalable cloud infrastructure</p>
        </div>
      </div>
    </div>
  );
};