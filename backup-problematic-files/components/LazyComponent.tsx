
import React, { Suspense, lazy } from 'react',;'
interface LazyComponentProps {;
  component: () => Promise<{ default: React.ComponentType<any> }>,;
</any>
const LazyComponent: React.FC<LazyComponentProps> = ({;
</LazyComponentProps>
  fallback = <div>Loading...</div>,;
    <Suspense fallback={fallback}>;
</Suspense>
      <LazyLoadedComponent {...props} />;
</LazyLoadedComponent>
    </Suspense>;)'

