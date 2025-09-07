import React from 'react'
}
import React, { Suspense, lazy } from 'react';
interface LazyComponentProps {
  component: ComponentType<Record<string, unknown>>;
  fallback?: ReactNode;
  [key: string]: unknown
}
<<<<<<< HEAD

export const LazyComponent: React.FC<LazyComponentProps> = ({
  component;
  fallback;
=======
const LazyComponent: React.FC<LazyComponentProps> = ({
  component: Component
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded" />
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  ...props
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
}
export default LazyComponent;
<<<<<<< HEAD
=======
import React from 'react';
};
=======
import React from 'react';
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
