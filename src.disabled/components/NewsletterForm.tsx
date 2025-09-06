import React from 'react';

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NewsletterForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NewsletterForm;