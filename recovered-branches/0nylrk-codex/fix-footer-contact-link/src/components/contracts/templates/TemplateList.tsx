import React from 'react';

interface TemplateListProps {
  className?: string;
}

const TemplateList: React.FC<TemplateListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TemplateList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TemplateList;