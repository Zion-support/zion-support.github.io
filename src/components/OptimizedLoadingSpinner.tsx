<<<<<<< HEAD
import React from 'react';

interface OptimizedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function OptimizedLoadingSpinner({ className = '', children }: OptimizedLoadingSpinnerProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
=======
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  );
<<<<<<< HEAD
}
=======
}
=======
export default OptimizedLoadingSpinner;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  fullScreen?: boolean;
    fullScreen = false;
    // Note: fullScreen parameter is used in containerClasses calculation below;
    );
    );
    );
    );
    );
          );
//         case 'pulse':
          );
        case 'skeleton':
  );
//         case 'bars':
              ))}
  );
//         case 'spinner':
//         default:
          );
    }, [size, variant, color, sizeClasses, colorClasses, baseClasses]);
      return `${baseClasses} ${fullScreen ? fullScreenClasses : ''} ${className}`;
    }, [baseClasses, fullScreen, fullScreenClasses, className]);
          {renderSpinner}
              {text}
          )}
  );
);
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
