import React from 'react';

interface SummitPageProps {
  className?: string;
}

const SummitPage: React.FC<SummitPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SummitPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SummitPage;