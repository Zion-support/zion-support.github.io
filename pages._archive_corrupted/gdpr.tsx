import React from 'react';

interface GdprProps {
  className?: string;
}

const Gdpr: React.FC<GdprProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Gdpr</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Gdpr;