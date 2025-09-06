import React from 'react';

interface NewsPageProps {
  className?: string;
}

const NewsPage: React.FC<NewsPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NewsPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NewsPage;