import React, { Suspense, lazy, memo, useMemo } from 'react';
import { Home, Layout } from 'lucide-react';

// Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';
import { Sidebar } from './components/Sidebar';

// Types
interface LazyComponentProps {
  [key: string]: unknown;
}

type LazyComponent = React.LazyExoticComponent<React.ComponentType<LazyComponentProps>>;

// Optimized loading component
const LoadingSpinner = memo(() => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
      <p className="text-gray-600 text-sm">Loading...</p>
    </div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

// Optimized lazy loading with preloading hints and error boundaries
const createLazyComponent = (importFn: () => Promise<{ default: React.ComponentType<LazyComponentProps> }>, fallback?: React.ReactNode): LazyComponent => {
  const LazyComponent = lazy(importFn);
  
  return memo((props: LazyComponentProps) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  ));
};

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Help = createLazyComponent(() => import('./pages/Help'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));

// AI Services pages
const AIServices = createLazyComponent(() => import('./pages/ai-services'));
const ITServices = createLazyComponent(() => import('./pages/it-services'));
const MicroSaaS = createLazyComponent(() => import('./pages/micro-saas'));

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service
    if (process.env.NODE_ENV === 'production') {
      // Send to error tracking service
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App component
const App: React.FC = memo(() => {
  const routes = useMemo(() => [
    { path: '/', component: Home, exact: true },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/services', component: Services },
    { path: '/pricing', component: Pricing },
    { path: '/blog', component: Blog },
    { path: '/help', component: Help },
    { path: '/privacy', component: Privacy },
    { path: '/terms', component: Terms },
    { path: '/ai-services', component: AIServices },
    { path: '/it-services', component: ITServices },
    { path: '/micro-saas', component: MicroSaaS },
  ], []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <EnhancedHeader />
          <div className="flex">
            <Sidebar />
            <main className="flex-1">
              <Routes>
                {routes.map(({ path, component: Component, exact }) => (
                  <Route
                    key={path}
                    path={path}
                    element={<Component />}
                  />
                ))}
                {/* 404 Route */}
                <Route
                  path="*"
                  element={
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                        <p className="text-gray-600 mb-4">Page not found</p>
                        <a
                          href="/"
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                          Go Home
                        </a>
                      </div>
                    </div>
                  }
                />
              </Routes>
            </main>
          </div>
          <EnhancedFooter />
        </div>
      </Router>
    </ErrorBoundary>
  );
});

App.displayName = 'App';

export default App;