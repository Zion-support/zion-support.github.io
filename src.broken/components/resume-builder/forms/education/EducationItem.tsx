import React from 'react';

interface EducationItemProps {
  className?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EducationItem</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EducationItem;