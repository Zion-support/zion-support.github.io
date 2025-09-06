import React from 'react';

interface OpenAppRedirectProps {
  className?: string;
}

const OpenAppRedirect: React.FC<OpenAppRedirectProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OpenAppRedirect</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OpenAppRedirect;