import React from 'react';

interface NationProfilePageProps {
  className?: string;
}

const NationProfilePage: React.FC<NationProfilePageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NationProfilePage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NationProfilePage;