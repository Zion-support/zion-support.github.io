import React from 'react';

interface Use-toastProps {
  className?: string;
}

const Use-toast: React.FC<Use-toastProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Use-toast</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Use-toast;