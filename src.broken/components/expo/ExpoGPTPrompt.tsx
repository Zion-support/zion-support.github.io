import React from 'react';

interface ExpoGPTPromptProps {
  className?: string;
}

const ExpoGPTPrompt: React.FC<ExpoGPTPromptProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ExpoGPTPrompt</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ExpoGPTPrompt;