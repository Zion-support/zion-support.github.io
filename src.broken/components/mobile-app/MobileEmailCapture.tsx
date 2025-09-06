import React from 'react';

interface MobileEmailCaptureProps {
  className?: string;
}

const MobileEmailCapture: React.FC<MobileEmailCaptureProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileEmailCapture</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileEmailCapture;