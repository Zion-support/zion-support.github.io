import React from 'react';

interface SimpleLayoutProps {
  className?: string;
}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SimpleLayout</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SimpleLayout;