<<<<<<< HEAD
import React from 'react';
};
import React, { Suspense, lazy } from 'react';

=======
import React from 'react'
};
import React, { Suspense, lazy } from 'react';


>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface LazyComponentProps {
  component: ComponentType<Record<string, unknown>>;
  fallback?: ReactNode;
  [key: string]: unknown,
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component: Component, 
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded" />,
  ...props
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyComponent;
<<<<<<< HEAD
import React from 'react',;
},

=======


>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
