import React from 'react';

interface NextNavigationProps {
  className?: string;
}

const NextNavigation: React.FC<NextNavigationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NextNavigation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NextNavigation;