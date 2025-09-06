import React from 'react';

interface StorybookProps {
  className?: string;
}

const Storybook: React.FC<StorybookProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Storybook</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Storybook;