import React from 'react';

interface Broken-linksProps {
  className?: string;
}

const Broken-links: React.FC<Broken-linksProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Broken-links</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Broken-links;