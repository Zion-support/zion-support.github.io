import React from 'react';

interface EnhancedLoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({ size = 'md', text = 'Loading...' }) => {
  return (
    <div className={`flex items-center justify-center ${size === 'sm' ? 'p-4' : size === 'lg' ? 'p-8' : 'p-6'}`}>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      {text && <span className="ml-3 text-gray-600">{text}</span>}
    </div>
  );
};

export default EnhancedLoading;
