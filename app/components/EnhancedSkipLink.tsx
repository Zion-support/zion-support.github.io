import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface EnhancedSkipLinkProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedSkipLink: React.FC<EnhancedSkipLinkProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`enhanced-skip-link ${className}`}>
      <Link
        to="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors z-50"
      >
        Skip to main content
        <ArrowRight className="w-4 h-4 ml-2 inline" />
      </Link>
      {children}
    </div>
  );
};

export default EnhancedSkipLink;