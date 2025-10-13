import React from 'react';

interface FooterProps {
  // Add props here as needed
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Footer</h2>
      <p>This component is under development.</p>
    </div>
  );
};

export default Footer;