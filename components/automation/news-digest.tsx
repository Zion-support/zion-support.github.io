import React from 'react';

interface News-digestProps {
  className?: string;
}

const News-digest: React.FC<News-digestProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>News-digest</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default News-digest;