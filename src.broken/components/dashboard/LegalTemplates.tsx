import React from 'react';

interface LegalTemplatesProps {
  className?: string;
}

const LegalTemplates: React.FC<LegalTemplatesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LegalTemplates</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LegalTemplates;