import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface EnhancedSkipLinkProps {
  children?: React.ReactNode;
  className?: string;
  to?: string;
  text?: string;
}

const EnhancedSkipLink: React.FC<EnhancedSkipLinkProps> = ({
  children,
  className = '',
  to = '/contact',
  text = 'Skip to main content'
}) => {
  return (
    <div className={`skip-link-container ${className}`}>
      {children || (
        <Link
          to={to}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          {text}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      )}
    </div>
  );
};

export default EnhancedSkipLink;