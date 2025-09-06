import React from 'react';

interface HelpCategoryListProps {
  className?: string;
}

const HelpCategoryList: React.FC<HelpCategoryListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HelpCategoryList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HelpCategoryList;