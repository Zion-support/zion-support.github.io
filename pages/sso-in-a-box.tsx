import React from 'react';

interface SsoInABoxProps {
  className?: string;
}

const SsoInABox: React.FC<SsoInABoxProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SsoInABox</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SsoInABox;