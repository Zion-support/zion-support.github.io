import React from 'react';

interface SkipLinkProps {
  to: string;
  children: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(to);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      (target as HTMLElement).focus();
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-400 text-slate-900 px-4 py-2 rounded-md font-semibold z-50"
    >
      {children}
    </a>
  );
};

export default SkipLink;