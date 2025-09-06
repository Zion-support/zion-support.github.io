import React from 'react';

interface BackToDirectoryButtonProps {
  className?: string;
}

const BackToDirectoryButton: React.FC<BackToDirectoryButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BackToDirectoryButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BackToDirectoryButton;