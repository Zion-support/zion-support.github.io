import React from 'react';

interface HelpArticleViewProps {
  className?: string;
}

const HelpArticleView: React.FC<HelpArticleViewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HelpArticleView</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HelpArticleView;