import React from 'react';

interface NewsletterProps {
  className?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Newsletter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Newsletter;