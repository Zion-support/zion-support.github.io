import React from 'react';

interface GlobalOutreachProps {
  className?: string;
}

const GlobalOutreach: React.FC<GlobalOutreachProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GlobalOutreach</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GlobalOutreach;