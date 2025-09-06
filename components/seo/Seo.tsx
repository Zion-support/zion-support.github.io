import React from 'react';

interface SeoProps {
  className?: string;
}

const Seo: React.FC<SeoProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Seo</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Seo;