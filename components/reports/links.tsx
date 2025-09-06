import React from 'react';

interface LinksProps {
  className?: string;
}

const Links: React.FC<LinksProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Links</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Links;