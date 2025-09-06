import React from 'react';

interface SimplePageProps {
  className?: string;
}

const SimplePage: React.FC<SimplePageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SimplePage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SimplePage;