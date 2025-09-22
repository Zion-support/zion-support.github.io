
const LazyComponent = React && React.lazy(() => import('./LazyComponent'));
// Example: Route-based code splitting
const HomePage = React && React.lazy(() => import('../pages/Home'));
const AboutPage = React && React.lazy(() => import('../pages/About'));
// Example: Component-based code splitting
const HeavyComponent = React && React.lazy(() => import('./HeavyComponent')),

// Example: Dynamic imports for better code splitting;
<<<<<<< HEAD
const LazyComponent = React.lazy(() => import("./LazyComponent"));
// Example: Route - based code splitting;"
const HomePage = React.lazy(() => import("../pages / Home"));"
const AboutPage = React.lazy(() => import("../pages / About"));
=======
const LazyComponent = React.lazy (() => import ('./LazyComponent'));
;
// Example: Route - based code splitting;
const HomePage = React.lazy (() => import ('../pages / Home'));
const AboutPage = React.lazy (() => import ('../pages / About'));
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Example: Component - based code splitting;
"