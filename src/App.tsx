import React, { Suspense, lazy, useState, useMemo, useCallback, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import { SEO } from './components/SEO';
import { Analytics } from './components/Analytics';
import { ErrorTracking } from './components/ErrorTracking';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import './App.css';
import './styles/accessibility.css';

// Enhanced lazy loading with error boundaries and preloading
const Home = lazy(() => 
  import('./pages/HomePage').catch(() => ({ 
    default: () => <div>Failed to load Home page</div> 
  }))
);
const About = lazy(() => 
  import('./pages/About').catch(() => ({ 
    default: () => <div>Failed to load About page</div> 
  }))
);
const Services = lazy(() => 
  import('./pages/Services').catch(() => ({ 
    default: () => <div>Failed to load Services page</div> 
  }))
);
const Contact = lazy(() => 
  import('./pages/Contact').catch(() => ({ 
    default: () => <div>Failed to load Contact page</div> 
  }))
);
const Blog = lazy(() => 
  import('./pages/Blog').catch(() => ({ 
    default: () => <div>Failed to load Blog page</div> 
  }))
);
const Marketplace = lazy(() => 
  import('./pages/Marketplace').catch(() => ({ 
    default: () => <div>Failed to load Marketplace page</div> 
  }))
);
const Profile = lazy(() => 
  import('./pages/Profile').catch(() => ({ 
    default: () => <div>Failed to load Profile page</div> 
  }))
);
const Cart = lazy(() => 
  import('./pages/Cart').catch(() => ({ 
    default: () => <div>Failed to load Cart page</div> 
  }))
);
const Checkout = lazy(() => 
  import('./pages/Checkout').catch(() => ({ 
    default: () => <div>Failed to load Checkout page</div> 
  }))
);
const Wishlist = lazy(() => 
  import('./pages/Wishlist').catch(() => ({ 
    default: () => <div>Failed to load Wishlist page</div> 
  }))
);

// Memoized error fallback component
const ErrorFallback = React.memo(() => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-white mb-4">
        Something went wrong
      </h1>
      <p className="text-gray-300">
        Please refresh the page to try again.
      </p>
    </div>
  </div>
));

ErrorFallback.displayName = 'ErrorFallback';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [preloadedRoutes, setPreloadedRoutes] = useState(new Set());

  // Preload critical routes on idle
  useEffect(() => {
    const preloadRoutes = () => {
      const criticalRoutes = ['/about', '/services', '/contact'];
      criticalRoutes.forEach(route => {
        if (!preloadedRoutes.has(route)) {
          // Preload route components
          switch (route) {
            case '/about':
              import('./pages/About');
              break;
            case '/services':
              import('./pages/Services');
              break;
            case '/contact':
              import('./pages/Contact');
              break;
          }
          setPreloadedRoutes(prev => new Set([...prev, route]));
        }
      });
    };

    // Use requestIdleCallback for preloading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadRoutes);
    } else {
      setTimeout(preloadRoutes, 100);
    }
  }, [preloadedRoutes]);

  // Memoized routes configuration
  const routes = useMemo(() => [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact /> },
    { path: "/blog", element: <Blog /> },
    { path: "/marketplace", element: <Marketplace /> },
    { path: "/profile", element: <Profile /> },
    { path: "/cart", element: <Cart /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/wishlist", element: <Wishlist /> }
  ], []);

  // Memoized SEO props
  const seoProps = useMemo(() => ({
    title: "Zion Tech Group - Leading AI & IT Solutions Provider",
    description: "Transform your business with cutting-edge AI solutions, cybersecurity services, and digital transformation expertise. Trusted by 500+ businesses worldwide."
  }), []);

  // Enhanced loading fallback with better UX
  const LoadingFallback = useCallback(() => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center">
        <LoadingSpinner />
        <p className="text-white mt-4 text-lg">Loading amazing content...</p>
      </div>
    </div>
  ), []);

  return (
    <HelmetProvider>
      <Analytics trackingId="G-XXXXXXXXXX" />
      <ErrorTracking enabled={true} />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <SEO {...seoProps} />
        <Header />
        
        <main className="min-h-screen">
          <ErrorBoundary fallback={<ErrorFallback />}>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {routes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        
        <Footer />
        <PerformanceMonitor />
        <AccessibilityEnhancer />
      </div>
    </HelmetProvider>
  );
}

export default App;