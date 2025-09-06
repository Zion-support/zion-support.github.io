<<<<<<< HEAD
import React from 'react';
};
import React, { Suspense, lazy } from 'react';

=======
import React from 'react'
}
import React, { Suspense, lazy } from 'react';
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
};
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import React from 'react',;
},

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React from 'react';
}

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
