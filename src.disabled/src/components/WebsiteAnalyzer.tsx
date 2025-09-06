import React from 'react';

interface WebsiteAnalyzerProps {
  className?: string;
}

const WebsiteAnalyzer: React.FC<WebsiteAnalyzerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WebsiteAnalyzer</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WebsiteAnalyzer;