import React from 'react';

interface InstallPromptProps {
  className?: string;
}

const InstallPrompt: React.FC<InstallPromptProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InstallPrompt</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InstallPrompt;