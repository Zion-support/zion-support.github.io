import React from 'react';

interface TemplateManagerProps {
  className?: string;
}

const TemplateManager: React.FC<TemplateManagerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TemplateManager</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TemplateManager;