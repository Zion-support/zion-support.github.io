import React from 'react';

interface NewsletterForm.testProps {
  className?: string;
}

const NewsletterForm.test: React.FC<NewsletterForm.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NewsletterForm.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NewsletterForm.test;