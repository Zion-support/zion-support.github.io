import React from 'react';

interface OfflineToastProps {
  className?: string;
}

const OfflineToast: React.FC<OfflineToastProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OfflineToast</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OfflineToast;