
;
import React, { Suspense, lazy } from 'react',interface LazyComponentProps  {component: () => Promise<{ default: React.ComponentType < any> }>,fallback?: React.ReactNode,[key: string]: any;
}
const LazyComponent: React.FC < LazyComponentProps> = ({component,fallback = <div > Loading...</div>,...props;
}) => {const LazyLoadedComponent = lazy (component),return (<Suspense fallback={fallback}>;
      <LazyLoadedComponent {...props} />;
    </Suspense>)},export default LazyComponent;
    </Suspense>);
},

<<<<<<< HEAD
<<<<<<< HEAD
export default LazyComponent;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
export default LazyComponent;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
