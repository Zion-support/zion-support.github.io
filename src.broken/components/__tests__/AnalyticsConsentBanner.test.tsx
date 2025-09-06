import React from 'react';

interface AnalyticsConsentBanner.testProps {
  className?: string;
}

const AnalyticsConsentBanner.test: React.FC<AnalyticsConsentBanner.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AnalyticsConsentBanner.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AnalyticsConsentBanner.test;