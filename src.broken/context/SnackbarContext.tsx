import React from 'react';

interface SnackbarContextProps {
  className?: string;
}

const SnackbarContext: React.FC<SnackbarContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SnackbarContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SnackbarContext;