import React from 'react';

interface NewsletterSection.testProps {
  className?: string;
}

const NewsletterSection.test: React.FC<NewsletterSection.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NewsletterSection.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NewsletterSection.test;