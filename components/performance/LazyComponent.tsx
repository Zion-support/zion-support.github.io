import React from 'react'
};
import React, { Suspense, lazy } from 'react';


interface LazyComponentProps {
  component: ComponentType<Record<string, unknown>>;
  fallback?: ReactNode;
  [key: string]: unknown,
}


export const LazyComponent: React.FC<LazyComponentProps> = ({
  component;
  fallback;

  ...props
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyComponent;

=======
import React from 'react';
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-e9d8
