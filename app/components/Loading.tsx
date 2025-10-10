import React from 'react';
import {Loader2, Zap } from 'lucide-react';

interface LoadingProps {size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps>= ({size = 'md',
  text = 'Loading...',
  fullScreen = false;
}) => {const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const textSizeClasses = {sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
</LoadingProps>
  const content = (</LoadingProps>
    <div className="flex flex-col items-center justify-center space-y-4" ></div>
      <div className="relative" ></div>
        <div className={`${sizeClasses[size]} animate-spin`}></div>
          <Loader2 className="w-full h-full text-cyan-400" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center" ></div>
          <Zap className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-4 h-4' : 'w-6 h-6'} text-purple-500 animate-pulse`} />
        </div>
      </div>
      {text && (
        <p className={`${textSizeClasses[size]} text-gray-300 font-medium animate-pulse`}>{text}</p>
        </p>
      )}
    </div>
  );

  if (fullScreen) {return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center" >{content}</div>
      </div>
    );
  }

  return content;
};

export default Loading;
