import React from 'react'
}
import React, { Suspense, lazy } from 'react';
<<<<<<< HEAD
=======


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface LazyComponentProps {
  component: ComponentType<Record<string, unknown>>;
  fallback?: ReactNode;
  [key: string]: unknown
}

const LazyComponent: React.FC<LazyComponentProps> = ({
  component: Component
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded" />

  ...props
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
}
export default LazyComponent;
<<<<<<< HEAD

import React from 'react';
};
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import React from 'react';
}

