

interface EnhancedLoadingProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600`}></div>
    </div>
  );
};

export default EnhancedLoading;
