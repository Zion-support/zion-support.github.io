import React from 'react';

interface SkipLinkProps {
  className?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SkipLink</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SkipLink;