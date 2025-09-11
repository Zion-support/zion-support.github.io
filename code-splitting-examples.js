<<<<<<< HEAD
=======

const LazyComponent = React && React.lazy(() => import('./LazyComponent'));
// Example: Route-based code splitting
const HomePage = React.lazy(() => import('../pages/Home'));
const AboutPage = React.lazy(() => import('../pages/About'));

// Example: Component-based code splitting
const HeavyComponent = React && React.lazy(() => import('./HeavyComponent')),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Example: Dynamic imports for better code splitting;
const LazyComponent = React.lazy (() => import ('./LazyComponent'));
;
// Example: Route - based code splitting;
const HomePage = React.lazy (() => import ('../pages / Home'));
const AboutPage = React.lazy (() => import ('../pages / About'));
;
// Example: Component - based code splitting;
const HeavyComponent = React.lazy (() => import ('./HeavyComponent')),