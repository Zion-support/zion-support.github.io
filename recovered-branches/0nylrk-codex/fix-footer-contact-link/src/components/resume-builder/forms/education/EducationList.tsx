import React from 'react';

interface EducationListProps {
  className?: string;
}

const EducationList: React.FC<EducationListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EducationList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EducationList;