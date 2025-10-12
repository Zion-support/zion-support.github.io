import React from 'react';
import { Loader2 } from 'lucide-react';

  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
}

  };

    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} text-purple-600 animate-spin`} />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
