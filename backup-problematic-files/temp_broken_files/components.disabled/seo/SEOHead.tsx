import React from 'react';

interface SEOHeadProps {
  className?: string;

const SEOHead: React.FC<SEOHeadProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SEOHead</h1>
      <p>This component is under development.</p>
    </div>
  );

export default SEOHead;