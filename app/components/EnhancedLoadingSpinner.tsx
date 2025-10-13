import React from 'react';
import { Loader2 } from 'lucide-react';
interface LoadingSpinnerProps 
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = (
}) => 
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`} />
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
      
        <p className="mt-2 text-sm text-gray-400 animate-pulse">{text}</p>
      )}
    </div>
  );

  if (fullScreen) 
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
