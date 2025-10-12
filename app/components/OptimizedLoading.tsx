import React from 'react';
import { Loader2 } from 'lucide-react';

  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

  className = ''
  
  };

    : 'flex items-center justify-center p-4';

    <div className={`${containerClasses} ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className={`${sizeClasses[size]} text-blue-500 animate-spin`} />
          <p className="text-gray-300 text-sm font-medium animate-pulse">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default OptimizedLoading;
