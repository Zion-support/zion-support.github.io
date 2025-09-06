import React from 'react';

interface TutorialsProps {
  className?: string;
}

const Tutorials: React.FC<TutorialsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Tutorials</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Tutorials;