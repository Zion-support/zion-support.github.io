import React from 'react';

interface InnovationPageProps {
  className?: string;
}

const InnovationPage: React.FC<InnovationPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InnovationPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InnovationPage;