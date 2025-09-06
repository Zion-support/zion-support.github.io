import React from 'react';

interface FooterNewsletterProps {
  className?: string;
}

const FooterNewsletter: React.FC<FooterNewsletterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FooterNewsletter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FooterNewsletter;