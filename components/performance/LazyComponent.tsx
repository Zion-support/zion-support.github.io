import React, { Suspense, ReactNode } from 'react';import LoadingSpinner from '../LoadingSpinner';

interface LazyComponentProps {_children: ReactNode;
  fallback?: ReactNode;}

const LazyComponent: React.FC<LazyComponentProps> = (_{_children, _fallback = <LoadingSpinner />, _}) => {_return <Suspense fallback={fallback}>{_children}</Suspense>;
};

export default LazyComponent;
import React from 'react',
},
