import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Footer</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Footer;