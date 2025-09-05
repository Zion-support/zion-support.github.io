<<<<<<< HEAD
<<<<<<< HEAD
import React, { Suspense, ReactNode } from 'react';
=======
import React, {_Suspense, _ReactNode} from 'react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
import LoadingSpinner from '../LoadingSpinner';

interface LazyComponentProps {_children: ReactNode;
  fallback?: ReactNode;}

const LazyComponent: React.FC<LazyComponentProps> = (_{_children, _fallback = <LoadingSpinner />, _}) => {_return <Suspense fallback={fallback}>{_children}</Suspense>;
};

export default LazyComponent;
=======
import React from 'react',
},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
