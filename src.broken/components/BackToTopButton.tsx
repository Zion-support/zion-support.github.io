import React from 'react';

interface BackToTopButtonProps {
  className?: string;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BackToTopButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BackToTopButton;