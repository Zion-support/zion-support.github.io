import React from 'react';
interface LoadingSpinnerProps {
  // TODO: Implement
}
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;

<<<<<<< HEAD




const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 



    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
</div>`;
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin`}></div>
        <p className="text-gray-600 text-sm font-medium">{text}</p>"`;
    <div className={`flex flex-col items-center justify-center ${className}`}>
</div>
      <div;`;
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
      />
</div>"
        <p className="mt-2 text-sm text-gray-600 animate-pulse">{text}</p>"
    </div>)"
=======
  size = 'md', 
  text = 'Loading...', 
  className =  
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12
  };

  return (`;
    <div className={`flex flex-col items-center justify-center ${className}`}>`;
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
  );

export default LoadingSpinner;
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
`;