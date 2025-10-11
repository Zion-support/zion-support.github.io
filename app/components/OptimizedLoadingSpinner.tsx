'use client';
import React, { Suspense, lazy } from 'react';
interface OptimizedLoadingSpinnerProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  fullScreen?: boolean;
  }
}
      }),
      [];
    );
      }),
      [];
    );
      }),
      [];
    );
              ))}</div>
          );
case 'spinner':;
        default:  
          );
      }
    }, [size, variant, color, sizeClasses, colorClasses]);
const containerClasses = useMemo(() => {return `$baseClasses} ${fullScreenClasses} ${className}`;
    }, [fullScreen, className]);
          )}
        </div>
    );
  } )
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';
export default OptimizedLoadingSpinner;
