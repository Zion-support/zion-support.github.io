import React from 'react';

interface PwaInstallButtonProps {
  className?: string;
}

const PwaInstallButton: React.FC<PwaInstallButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PwaInstallButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PwaInstallButton;