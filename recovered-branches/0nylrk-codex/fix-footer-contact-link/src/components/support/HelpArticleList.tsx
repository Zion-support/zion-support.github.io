import React from 'react';

interface HelpArticleListProps {
  className?: string;
}

const HelpArticleList: React.FC<HelpArticleListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HelpArticleList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HelpArticleList;