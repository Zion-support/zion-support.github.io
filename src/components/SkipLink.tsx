import React from 'react';
import { Link } from 'react-router-dom';

interface SkipLinkProps {
  to: string;
  children: React.ReactNode;
}


const SkipLink: React.FC<SkipLinkProps> = ({ 
  to, 
  children, 
  className = '' 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(to);
    if (target) {
      (target as HTMLElement).focus();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link
      to={to}

    >
      {children}
    </Link>
  );
};

export default SkipLink;
