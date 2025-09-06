import React from 'react';

interface AICorePageProps {
  className?: string;
}

const AICorePage: React.FC<AICorePageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AICorePage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AICorePage;