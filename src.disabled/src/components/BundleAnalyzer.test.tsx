import React from 'react';

interface BundleAnalyzer.testProps {
  className?: string;
}

const BundleAnalyzer.test: React.FC<BundleAnalyzer.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BundleAnalyzer.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BundleAnalyzer.test;