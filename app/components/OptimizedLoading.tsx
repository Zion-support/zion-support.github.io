import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface OptimizedLoadingProps {
  children?: React.ReactNode;
  className?: string;
  text?: string;
  showContactButton?: boolean;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({
  children,
  className = '',
  text = 'Loading...',
  showContactButton = true
}) => {
  return (
    <div className={`optimized-loading-container ${className}`}>
      {children || (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-lg">{text}</p>
          {showContactButton && (
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default OptimizedLoading;