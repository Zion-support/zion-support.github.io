import React from 'react';

interface TutorialProps {
  className?: string;
}

const Tutorial: React.FC<TutorialProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Tutorial</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Tutorial;