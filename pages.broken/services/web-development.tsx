import React from 'react';

interface Web-developmentProps {
  className?: string;
}

const Web-development: React.FC<Web-developmentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Web-development</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Web-development;