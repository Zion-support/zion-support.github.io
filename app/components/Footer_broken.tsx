import React from 'react';


interface Footer_brokenProps {
  className?: string;
  children?: React.ReactNode;
}

const Footer_broken: React.FC<Footer_brokenProps> = ({ className, children }) => {
  return (
    <footer className={className} role="contentinfo">
      {children || <p>Footer (Broken)</p>}
    </footer>
  );
};

export default Footer_broken;
