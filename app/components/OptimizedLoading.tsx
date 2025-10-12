import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface OptimizedLoadingProps {
  children?: React.ReactNode;
  className?: string;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default OptimizedLoading;
