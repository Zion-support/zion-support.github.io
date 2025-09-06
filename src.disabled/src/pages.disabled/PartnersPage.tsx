import React from 'react';

interface PartnersPageProps {
  className?: string;
}

const PartnersPage: React.FC<PartnersPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PartnersPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PartnersPage;