import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
  className?: string;
  color?: 'primary' | 'secondary' | 'white';
}
  )
const Loading Spinner: React.FC<Loading Spinner Props> = ({
  size = 'md'
  text = 'Loading...'
  full Screen = false
  class Name = ''
  color = 'primary'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-purple-500',
    secondary: 'border-cyan-500',
    white: 'border-white'
  };

  const spinner = (
    <div class Name={`flex flex-col items-center justify-center ${class Name}`}>
      <div
        class Name={`${size Classes} border-2 border-gray-300 border-t-2 border-t-current rounded-full animate-spin ${color Classes}`}
  )
      />
      {text && (
        <p className="mt-2text-smtext-gray-300">
          {text}
        </p>
      )}
  )
    </div>
  )
  if (full Screen) {
    return (
      <div className="fixe dinset-0bg-slate-900/8 0backdrop-blur-smflexitems-centerjustify-centerz-50">
        <div className="bg-slate-800rounded-lgp-8shadow-xl">{spinner}
          </div>
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
