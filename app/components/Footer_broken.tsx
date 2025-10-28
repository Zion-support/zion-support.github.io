import React from 'react';

interface FooterBrokenProps {
  className?: string;
  children?: React.ReactNode;
}

const FooterBroken: React.FC<FooterBrokenProps> = ({ className = '', children }) => {
  return (
    <footer className={`footer-broken ${className}`}>
      {children}
    </footer>
  );
};

FooterBroken.displayName = 'FooterBroken';

export default FooterBroken;
