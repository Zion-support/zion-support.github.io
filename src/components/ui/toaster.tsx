import React from 'react';

interface ToasterProps {
  className?: string;
}

const Toaster: React.FC<ToasterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Toaster</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Toaster;