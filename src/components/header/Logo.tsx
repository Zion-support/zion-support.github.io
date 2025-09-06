import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Logo</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Logo;