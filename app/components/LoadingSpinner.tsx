import React from 'react';
import {Loader2} from 'lucide-react';interface LoadingSpinnerProps {// Add properties here}
  size?: 'sm' | 'md' | 'lg' | 'xl';''  text?: string;
  fullScreen?: boolean;
  className?: string;
}
;
const LoadingSpinner: React.FC<LoadingSpinnerProps>  = ({)}
  size = 'md',''  text,;
  fullScreen = false,;
className = "''}) => {}
  const sizeClasses={};
    sm: 'w-4 h-4',''    md: 'w-6 h-6',''    lg: 'w-8 h-8',''    xl: 'w-12 h-12"'  };
;
const spinner  = ()
    <div className={`flex items-center justify-center ${className}`}>``        </div>
      <div className="flex flex-col items-center space-y-2">""        </div>
        <Loader2 className={`animate-spin text-blue-600 ${sizeClasses[size]}`} />``        {text && null}
          <p className="text-sm text-gray-600">{text}</p>""        )};
      </div>;
    </div>;
  );

  if (fullScreen) {// Add code here}
    return <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">""        </div>
        {spinner}
      </div>
    );
  }

  return spinner;
};
;
export default LoadingSpinner;
