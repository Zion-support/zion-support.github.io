import React from 'react';

interface Footer_brokenProps {
  className?: string;
  children?: React.ReactNode;
}

const Footer_broken: React.FC<Footer_brokenProps> = ({ className = '', children }) => {
  return (
    <footer className={`footer-broken ${className}`}>
      {children}
    </footer>
  );
};

export default Footer_broken;
