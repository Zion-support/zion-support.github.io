import React from 'react';
interface LoadingSpinnerProps 
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
  fullScreen?: boolean;

const ModernLoadingSpinner: React.FC<LoadingSpinnerProps> = (
  size = 'md',
  color = 'primary',
//   text,
  fullScreen = false,
  const spinner = (
    <div className="flex flex-col items-center justify-center space-y-4"></div>
      <div className="relative"></div>
        {/* Outer ring */}
      
        <div className="text-center"></div>
          <p className="{`text-sm" font-medium ${colorClasses[color]} animate-pulse`}></p>
            {text}
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