import React from 'react';
interface LoadingSpinnerProps 
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
  fullScreen?: boolean;

const ModernLoadingSpinner: React.FC<LoadingSpinnerProps> = (
  size = 'md',
  color = 'primary',
  text,
  fullScreen = false,
) => 
  const sizeClasses = 
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
;
  const colorClasses = 
    primary: 'text-cyan-500',
    secondary: 'text-purple-500',
    white: 'text-white',
;
  const spinner = (
    <div className="flex flex-col items-center justify-center space-y-4"></div>
      <div className="relative"></div>
        {/* Outer ring */}
        <div
          className="{`${sizeClasses[size]}" ${colorClasses[color]} animate-spin rounded-full border-2 border-transparent border-t-current`}
          style={}
            animation: 'spin 1s linear infinite',
          {}
        />
        {/* Inner ring */}
        <div
          className="{`absolute" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm']} ${colorClasses[color]} animate-spin rounded-full border-2 border-transparent border-b-current`}
          style={}
            animation: 'spin 1.5s linear infinite reverse',
          {}
        />
      </div>
      
        <div className="text-center"></div>
          <p className="{`text-sm" font-medium ${colorClasses[color]} animate-pulse`}></p>
            {text}
          </p>
        </div>

    </div>
  );
  if (fullScreen) 
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"></div>
        <div className="text-center"></div>
          {spinner}
          <div className="mt-8"></div>
            <h2 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h2>
            <p className="text-gray-300">Loading amazing experiences...</p>
          </div>
        </div>
      </div>
    );

  return spinner;
;
export default ModernLoadingSpinner;
</LoadingSpinnerProps>