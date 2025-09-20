<<<<<<< HEAD
import React from 'react',
=======
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
// Example: Dynamic imports for better code splitting;
const LazyComponent = React.lazy (() => import ('./LazyComponent'));
;
// Example: Route - based code splitting;
const HomePage = React.lazy (() => import ('../pages / Home'));
const AboutPage = React.lazy (() => import ('../pages / About'));
;
// Example: Component - based code splitting;