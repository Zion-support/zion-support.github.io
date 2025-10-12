import React from 'react';
import { SkipForward } from 'lucide-react';

interface EnhancedSkipLinkProps {
  targetId?: string;
  children?: React.ReactNode;
  className?: string;
}

const EnhancedSkipLink: React.FC<EnhancedSkipLinkProps> = ({
  targetId = 'main-content',
  children = 'Skip to main content',
  className = ''
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:shadow-lg focus:flex focus:items-center focus:space-x-2 focus:transition-all focus:duration-200 hover:bg-blue-700 ${className}`}
      aria-label={`Skip to ${targetId.replace('-', ' ')}`}
    >
      <SkipForward className="w-4 h-4" />
      <span>{children}</span>
    </a>
  );
};

export default EnhancedSkipLink;