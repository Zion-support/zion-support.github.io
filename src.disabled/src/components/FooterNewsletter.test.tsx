import React from 'react';

interface FooterNewsletter.testProps {
  className?: string;
}

const FooterNewsletter.test: React.FC<FooterNewsletter.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FooterNewsletter.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FooterNewsletter.test;