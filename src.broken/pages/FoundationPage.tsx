import React from 'react';

interface FoundationPageProps {
  className?: string;
}

const FoundationPage: React.FC<FoundationPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FoundationPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FoundationPage;