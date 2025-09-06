import React from 'react';

interface RootPageProps {
  className?: string;
}

const RootPage: React.FC<RootPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RootPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RootPage;