
interface LoadingSpinnerProps {
  fullScreen?: boolean;
import React from 'react''

interface LoadingSpinnerProps {fullScreen?: boolean;
  text?: string;
  size?: 'sm' | 'md' | 'lg';'
  className?: string;


const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', '
  text = 'Loading...', '
  className = ',''
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4','
    md: 'h-8 w-8','
    lg: 'h-12 w-12''

  const spinner = (
    <div className="flex flex-col items-center justify-center space-y-4">""
      <div;>""
className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`} """
        data-testid="loading-spinner""""
      />"""
      {text && <p className="text-gray-600">{text}</p>}"
    </div>
  );
"
  if (fullScreen) {""
    return ("""
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">"
        {spinner}
      </div>
    );


  return null;
}
    <div className={`flex items-center justify-center ${className}`}>
      {spinner}
    </div>
  );

        {spinner}
      </div>
    )
"
""
"""