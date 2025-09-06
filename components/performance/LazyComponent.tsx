
import React from 'react'
}
import React, { Suspense, lazy } from 'react';

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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


=======
import React from 'react',;
},

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React from 'react';
}



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
